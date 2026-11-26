(()=>{var Ho="170";var Lh=0,Ml=1,Uh=2;var Pc=1,Dh=2,An=3,Un=0,be=1,qe=2,sn=0,Ii=1,Ei=2,bl=3,Sl=4,Nh=5,Zn=100,Fh=101,Bh=102,zh=103,Oh=104,qh=200,kh=201,Hh=202,Gh=203,Ca=204,_a=205,Wh=206,Xh=207,Yh=208,jh=209,Zh=210,Kh=211,Jh=212,Qh=213,$h=214,ya=0,Ia=1,Ma=2,wi=3,ba=4,Sa=5,Ea=6,wa=7,Go=0,tu=1,eu=2,Ln=0,Wo=1,Xo=2,Yo=3,fs=4,nu=5,jo=6,Zo=7;var Lc=300,Ti=301,Vi=302,Ta=303,Va=304,Sr=306,ti=1e3,Qn=1001,rs=1002,Ne=1003,iu=1004;var Is=1005;var en=1006,Or=1007;var $n=1008;var _n=1009,Uc=1010,Dc=1011,as=1012,Ko=1013,ei=1014,nn=1015,Qe=1016,Jo=1017,Qo=1018,Ri=1020,Nc=35902,Fc=1021,Bc=1022,Ze=1023,zc=1024,Oc=1025,Mi=1026,Pi=1027,$o=1028,tl=1029,qc=1030,el=1031;var nl=1033,Zs=33776,Ks=33777,Js=33778,Qs=33779,Ra=35840,Pa=35841,La=35842,Ua=35843,Da=36196,Na=37492,Fa=37496,Ba=37808,za=37809,Oa=37810,qa=37811,ka=37812,Ha=37813,Ga=37814,Wa=37815,Xa=37816,Ya=37817,ja=37818,Za=37819,Ka=37820,Ja=37821,$s=36492,Qa=36494,$a=36495,kc=36283,to=36284,eo=36285,no=36286;var tr=2300,io=2301,qr=2302,El=2400,wl=2401,Tl=2402;var su=3200,ru=3201;var Hc=0,au=1,Pn="",fe="srgb",Oi="srgb-linear",Er="linear",Zt="srgb";var oi=7680;var Vl=519,ou=512,lu=513,cu=514,Gc=515,hu=516,uu=517,du=518,fu=519,Rl=35044;var Pl="300 es",vn=2e3,er=2001,Dn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var kr=Math.PI/180,so=180/Math.PI;function ps(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function pu(i,t){return(i%t+t)%t}function Hr(i,t,e){return(1-e)*i+e*t}function Yi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ct=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],g=n[5],m=n[8],A=s[0],p=s[3],d=s[6],b=s[1],I=s[4],C=s[7],V=s[2],S=s[5],E=s[8];return r[0]=a*A+o*b+l*V,r[3]=a*p+o*I+l*S,r[6]=a*d+o*C+l*E,r[1]=c*A+h*b+u*V,r[4]=c*p+h*I+u*S,r[7]=c*d+h*C+u*E,r[2]=f*A+g*b+m*V,r[5]=f*p+g*I+m*S,r[8]=f*d+g*C+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,g=c*r-a*l,m=e*u+n*f+s*g;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=u*A,t[1]=(s*c-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=f*A,t[4]=(h*e-s*l)*A,t[5]=(s*r-o*e)*A,t[6]=g*A,t[7]=(n*l-c*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Gr.makeScale(t,e)),this}rotate(t){return this.premultiply(Gr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Gr=new Pt;function Wc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gu(){let i=os("canvas");return i.style.display="block",i}var Ll={};function ts(i){i in Ll||(Ll[i]=!0,console.warn(i))}function mu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Au(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Bt={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Zt&&(i.r=Cn(i.r),i.g=Cn(i.g),i.b=Cn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Zt&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pn?Er:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ul=[.64,.33,.3,.6,.15,.06],Dl=[.2126,.7152,.0722],Nl=[.3127,.329],Fl=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bl=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Bt.define({[Oi]:{primaries:Ul,whitePoint:Nl,transfer:Er,toXYZ:Fl,fromXYZ:Bl,luminanceCoefficients:Dl,workingColorSpaceConfig:{unpackColorSpace:fe},outputColorSpaceConfig:{drawingBufferColorSpace:fe}},[fe]:{primaries:Ul,whitePoint:Nl,transfer:Zt,toXYZ:Fl,fromXYZ:Bl,luminanceCoefficients:Dl,outputColorSpaceConfig:{drawingBufferColorSpace:fe}}});var li,ro=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{li===void 0&&(li=os("canvas")),li.width=t.width,li.height=t.height;let n=li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=os("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vu=0,nr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=ps(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wr(s[a].image)):r.push(Wr(s[a]))}else r=Wr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ro.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Cu=0,Te=class i extends Dn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Qn,s=Qn,r=en,a=$n,o=Ze,l=_n,c=i.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=ps(),this.name="",this.source=new nr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ti:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case rs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ti:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case rs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Lc;Te.DEFAULT_ANISOTROPY=1;var he=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],g=l[5],m=l[9],A=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-A)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+A)<.1&&Math.abs(m+p)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(c+1)/2,C=(g+1)/2,V=(d+1)/2,S=(h+f)/4,E=(u+A)/4,U=(m+p)/4;return I>C&&I>V?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=S/n,r=E/n):C>V?C<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(C),n=S/s,r=U/s):V<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(V),n=E/r,s=U/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-m)*(p-m)+(u-A)*(u-A)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(u-A)/b,this.z=(f-h)/b,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ao=class extends Dn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Te(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new nr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ve=class extends ao{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ir=class extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var oo=class extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],g=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=g,t[e+2]=m,t[e+3]=A;return}if(u!==A||l!==f||c!==g||h!==m){let p=1-o,d=l*f+c*g+h*m+u*A,b=d>=0?1:-1,I=1-d*d;if(I>Number.EPSILON){let V=Math.sqrt(I),S=Math.atan2(V,d*b);p=Math.sin(p*S)/V,o=Math.sin(o*S)/V}let C=o*b;if(l=l*p+f*C,c=c*p+g*C,h=h*p+m*C,u=u*p+A*C,p===1-o){let V=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=V,c*=V,h*=V,u*=V}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],g=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*g-c*f,t[e+1]=l*m+h*f+c*u-o*g,t[e+2]=c*m+h*g+o*f-l*u,t[e+3]=h*m-o*u-l*f-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),g=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*g*m,this._y=c*g*u-f*h*m,this._z=c*h*m+f*g*u,this._w=c*h*u-f*g*m;break;case"YXZ":this._x=f*h*u+c*g*m,this._y=c*g*u-f*h*m,this._z=c*h*m-f*g*u,this._w=c*h*u+f*g*m;break;case"ZXY":this._x=f*h*u-c*g*m,this._y=c*g*u+f*h*m,this._z=c*h*m+f*g*u,this._w=c*h*u-f*g*m;break;case"ZYX":this._x=f*h*u-c*g*m,this._y=c*g*u+f*h*m,this._z=c*h*m-f*g*u,this._w=c*h*u+f*g*m;break;case"YZX":this._x=f*h*u+c*g*m,this._y=c*g*u+f*h*m,this._z=c*h*m-f*g*u,this._w=c*h*u-f*g*m;break;case"XZY":this._x=f*h*u-c*g*m,this._y=c*g*u-f*h*m,this._z=c*h*m+f*g*u,this._w=c*h*u+f*g*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>u){let g=2*Math.sqrt(1+n-o-u);this._w=(h-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>u){let g=2*Math.sqrt(1+o-n-u);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+u-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let g=1-e;return this._w=g*a+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xr.copy(this).projectOnVector(t),this.sub(Xr)}reflect(t){return this.sub(Xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xr=new w,zl=new rn,yn=class{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xe):Xe.fromBufferAttribute(r,a),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ms.copy(n.boundingBox)),Ms.applyMatrix4(t.matrixWorld),this.union(Ms)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ji),bs.subVectors(this.max,ji),ci.subVectors(t.a,ji),hi.subVectors(t.b,ji),ui.subVectors(t.c,ji),Sn.subVectors(hi,ci),En.subVectors(ui,hi),kn.subVectors(ci,ui);let e=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-kn.z,kn.y,Sn.z,0,-Sn.x,En.z,0,-En.x,kn.z,0,-kn.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-kn.y,kn.x,0];return!Yr(e,ci,hi,ui,bs)||(e=[1,0,0,0,1,0,0,0,1],!Yr(e,ci,hi,ui,bs))?!1:(Ss.crossVectors(Sn,En),e=[Ss.x,Ss.y,Ss.z],Yr(e,ci,hi,ui,bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},dn=[new w,new w,new w,new w,new w,new w,new w,new w],Xe=new w,Ms=new yn,ci=new w,hi=new w,ui=new w,Sn=new w,En=new w,kn=new w,ji=new w,bs=new w,Ss=new w,Hn=new w;function Yr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hn.fromArray(i,r);let o=s.x*Math.abs(Hn.x)+s.y*Math.abs(Hn.y)+s.z*Math.abs(Hn.z),l=t.dot(Hn),c=e.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var _u=new yn,Zi=new w,jr=new w,Nn=class{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_u.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zi.subVectors(t,this.center);let e=Zi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zi.copy(t.center).add(jr)),this.expandByPoint(Zi.copy(t.center).sub(jr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},fn=new w,Zr=new w,Es=new w,wn=new w,Kr=new w,ws=new w,Jr=new w,sr=class{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Zr.copy(t).add(e).multiplyScalar(.5),Es.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(Zr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Es),o=wn.dot(this.direction),l=-wn.dot(Es),c=wn.lengthSq(),h=Math.abs(1-a*a),u,f,g,m;if(h>0)if(u=a*l-o,f=a*o-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let A=1/h;u*=A,f*=A,g=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),g=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),g=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),g=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),g=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),g=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),g=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zr).addScaledVector(Es,f),g}intersectSphere(t,e){fn.subVectors(t.center,this.origin);let n=fn.dot(this.direction),s=fn.dot(fn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,n,s,r){Kr.subVectors(e,t),ws.subVectors(n,t),Jr.crossVectors(Kr,ws);let a=this.direction.dot(Jr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,t);let l=o*this.direction.dot(ws.crossVectors(wn,ws));if(l<0)return null;let c=o*this.direction.dot(Kr.cross(wn));if(c<0||l+c>a)return null;let h=-o*wn.dot(Jr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,f,g,m,A,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,g,m,A,p)}set(t,e,n,s,r,a,o,l,c,h,u,f,g,m,A,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=g,d[7]=m,d[11]=A,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/di.setFromMatrixColumn(t,0).length(),r=1/di.setFromMatrixColumn(t,1).length(),a=1/di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,g=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=g+m*c,e[5]=f-A*c,e[9]=-o*l,e[2]=A-f*c,e[6]=m+g*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,g=l*u,m=c*h,A=c*u;e[0]=f+A*o,e[4]=m*o-g,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=g*o-m,e[6]=A+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,g=l*u,m=c*h,A=c*u;e[0]=f-A*o,e[4]=-a*u,e[8]=m+g*o,e[1]=g+m*o,e[5]=a*h,e[9]=A-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,g=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=m*c-g,e[8]=f*c+A,e[1]=l*u,e[5]=A*c+f,e[9]=g*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,g=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=A-f*u,e[8]=m*u+g,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=g*u+m,e[10]=f-A*u}else if(t.order==="XZY"){let f=a*l,g=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+A,e[5]=a*h,e[9]=g*u-m,e[2]=m*u-g,e[6]=o*h,e[10]=A*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yu,t,Iu)}lookAt(t,e,n){let s=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),Tn.crossVectors(n,Ue),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),Tn.crossVectors(n,Ue)),Tn.normalize(),Ts.crossVectors(Ue,Tn),s[0]=Tn.x,s[4]=Ts.x,s[8]=Ue.x,s[1]=Tn.y,s[5]=Ts.y,s[9]=Ue.y,s[2]=Tn.z,s[6]=Ts.z,s[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],g=n[13],m=n[2],A=n[6],p=n[10],d=n[14],b=n[3],I=n[7],C=n[11],V=n[15],S=s[0],E=s[4],U=s[8],y=s[12],_=s[1],T=s[5],O=s[9],z=s[13],H=s[2],Z=s[6],G=s[10],$=s[14],k=s[3],it=s[7],ht=s[11],_t=s[15];return r[0]=a*S+o*_+l*H+c*k,r[4]=a*E+o*T+l*Z+c*it,r[8]=a*U+o*O+l*G+c*ht,r[12]=a*y+o*z+l*$+c*_t,r[1]=h*S+u*_+f*H+g*k,r[5]=h*E+u*T+f*Z+g*it,r[9]=h*U+u*O+f*G+g*ht,r[13]=h*y+u*z+f*$+g*_t,r[2]=m*S+A*_+p*H+d*k,r[6]=m*E+A*T+p*Z+d*it,r[10]=m*U+A*O+p*G+d*ht,r[14]=m*y+A*z+p*$+d*_t,r[3]=b*S+I*_+C*H+V*k,r[7]=b*E+I*T+C*Z+V*it,r[11]=b*U+I*O+C*G+V*ht,r[15]=b*y+I*z+C*$+V*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],g=t[14],m=t[3],A=t[7],p=t[11],d=t[15];return m*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*g-n*l*g)+A*(+e*l*g-e*c*f+r*a*f-s*a*g+s*c*h-r*l*h)+p*(+e*c*u-e*o*g-r*a*u+n*a*g+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],g=t[11],m=t[12],A=t[13],p=t[14],d=t[15],b=u*p*c-A*f*c+A*l*g-o*p*g-u*l*d+o*f*d,I=m*f*c-h*p*c-m*l*g+a*p*g+h*l*d-a*f*d,C=h*A*c-m*u*c+m*o*g-a*A*g-h*o*d+a*u*d,V=m*u*l-h*A*l-m*o*f+a*A*f+h*o*p-a*u*p,S=e*b+n*I+s*C+r*V;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return t[0]=b*E,t[1]=(A*f*r-u*p*r-A*s*g+n*p*g+u*s*d-n*f*d)*E,t[2]=(o*p*r-A*l*r+A*s*c-n*p*c-o*s*d+n*l*d)*E,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*g-n*l*g)*E,t[4]=I*E,t[5]=(h*p*r-m*f*r+m*s*g-e*p*g-h*s*d+e*f*d)*E,t[6]=(m*l*r-a*p*r-m*s*c+e*p*c+a*s*d-e*l*d)*E,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*g+e*l*g)*E,t[8]=C*E,t[9]=(m*u*r-h*A*r-m*n*g+e*A*g+h*n*d-e*u*d)*E,t[10]=(a*A*r-m*o*r+m*n*c-e*A*c-a*n*d+e*o*d)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*g-e*o*g)*E,t[12]=V*E,t[13]=(h*A*s-m*u*s+m*n*f-e*A*f-h*n*p+e*u*p)*E,t[14]=(m*o*s-a*A*s-m*n*l+e*A*l+a*n*p-e*o*p)*E,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,g=r*h,m=r*u,A=a*h,p=a*u,d=o*u,b=l*c,I=l*h,C=l*u,V=n.x,S=n.y,E=n.z;return s[0]=(1-(A+d))*V,s[1]=(g+C)*V,s[2]=(m-I)*V,s[3]=0,s[4]=(g-C)*S,s[5]=(1-(f+d))*S,s[6]=(p+b)*S,s[7]=0,s[8]=(m+I)*E,s[9]=(p-b)*E,s[10]=(1-(f+A))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=di.set(s[0],s[1],s[2]).length(),a=di.set(s[4],s[5],s[6]).length(),o=di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ye.copy(this);let c=1/r,h=1/a,u=1/o;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=u,Ye.elements[9]*=u,Ye.elements[10]*=u,e.setFromRotationMatrix(Ye),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=vn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,m;if(o===vn)g=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===er)g=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=vn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,g=(n+s)*h,m,A;if(o===vn)m=(a+r)*u,A=-2*u;else if(o===er)m=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=A,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},di=new w,Ye=new Qt,yu=new w(0,0,0),Iu=new w(1,1,1),Tn=new w,Ts=new w,Ue=new w,Ol=new Qt,ql=new rn,an=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ol,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ql.setFromEuler(this),this.setFromQuaternion(ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};an.DEFAULT_ORDER="XYZ";var rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Mu=0,kl=new w,fi=new rn,pn=new Qt,Vs=new w,Ki=new w,bu=new w,Su=new rn,Hl=new w(1,0,0),Gl=new w(0,1,0),Wl=new w(0,0,1),Xl={type:"added"},Eu={type:"removed"},pi={type:"childadded",child:null},Qr={type:"childremoved",child:null},Se=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new w,e=new an,n=new rn,s=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Pt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.multiply(fi),this}rotateOnWorldAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.premultiply(fi),this}rotateX(t){return this.rotateOnAxis(Hl,t)}rotateY(t){return this.rotateOnAxis(Gl,t)}rotateZ(t){return this.rotateOnAxis(Wl,t)}translateOnAxis(t,e){return kl.copy(t).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hl,t)}translateY(t){return this.translateOnAxis(Gl,t)}translateZ(t){return this.translateOnAxis(Wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vs.copy(t):Vs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Ki,Vs,this.up):pn.lookAt(Vs,Ki,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),fi.setFromRotationMatrix(pn),this.quaternion.premultiply(fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xl),pi.child=t,this.dispatchEvent(pi),pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Eu),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xl),pi.child=t,this.dispatchEvent(pi),pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,t,bu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Su,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),g=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Se.DEFAULT_UP=new w(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var je=new w,gn=new w,$r=new w,mn=new w,gi=new w,mi=new w,Yl=new w,ta=new w,ea=new w,na=new w,ia=new he,sa=new he,ra=new he,Kn=class i{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),je.subVectors(t,e),s.cross(je);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){je.subVectors(s,e),gn.subVectors(n,e),$r.subVectors(t,e);let a=je.dot(je),o=je.dot(gn),l=je.dot($r),c=gn.dot(gn),h=gn.dot($r),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,g=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-g-m,m,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mn.x),l.addScaledVector(a,mn.y),l.addScaledVector(o,mn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ia.setScalar(0),sa.setScalar(0),ra.setScalar(0),ia.fromBufferAttribute(t,e),sa.fromBufferAttribute(t,n),ra.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ia,r.x),a.addScaledVector(sa,r.y),a.addScaledVector(ra,r.z),a}static isFrontFacing(t,e,n,s){return je.subVectors(n,e),gn.subVectors(t,e),je.cross(gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),je.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;gi.subVectors(s,n),mi.subVectors(r,n),ta.subVectors(t,n);let l=gi.dot(ta),c=mi.dot(ta);if(l<=0&&c<=0)return e.copy(n);ea.subVectors(t,s);let h=gi.dot(ea),u=mi.dot(ea);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(gi,a);na.subVectors(t,r);let g=gi.dot(na),m=mi.dot(na);if(m>=0&&g<=m)return e.copy(r);let A=g*c-l*m;if(A<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(mi,o);let p=h*m-g*u;if(p<=0&&u-h>=0&&g-m>=0)return Yl.subVectors(r,s),o=(u-h)/(u-h+(g-m)),e.copy(s).addScaledVector(Yl,o);let d=1/(p+A+f);return a=A*d,o=f*d,e.copy(n).addScaledVector(gi,a).addScaledVector(mi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var St=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Bt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Bt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Bt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Bt.workingColorSpace){if(t=pu(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=aa(a,r,t+1/3),this.g=aa(a,r,t),this.b=aa(a,r,t-1/3)}return Bt.toWorkingColorSpace(this,s),this}setStyle(t,e=fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){let n=Xc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return Bt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Me(Ie.r*255,0,255))*65536+Math.round(Me(Ie.g*255,0,255))*256+Math.round(Me(Ie.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Bt.workingColorSpace){Bt.fromWorkingColorSpace(Ie.copy(this),e);let n=Ie.r,s=Ie.g,r=Ie.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Bt.workingColorSpace){return Bt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=fe){Bt.fromWorkingColorSpace(Ie.copy(this),t);let e=Ie.r,n=Ie.g,s=Ie.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(Rs);let n=Hr(Vn.h,Rs.h,e),s=Hr(Vn.s,Rs.s,e),r=Hr(Vn.l,Rs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new St;St.NAMES=Xc;var wu=0,Fn=class extends Dn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=ps(),this.name="",this.blending=Ii,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=_a,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ca&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ke=class extends Fn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var de=new w,Ps=new ct,ve=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rl,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rl&&(t.usage=this.usage),t}};var ar=class extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var or=class extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var te=class extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}},Tu=0,Oe=new Qt,oa=new Se,Ai=new w,De=new yn,Ji=new yn,xe=new w,pe=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wc(t)?or:ar)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Pt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oe.makeRotationFromQuaternion(t),this.applyMatrix4(Oe),this}rotateX(t){return Oe.makeRotationX(t),this.applyMatrix4(Oe),this}rotateY(t){return Oe.makeRotationY(t),this.applyMatrix4(Oe),this}rotateZ(t){return Oe.makeRotationZ(t),this.applyMatrix4(Oe),this}translate(t,e,n){return Oe.makeTranslation(t,e,n),this.applyMatrix4(Oe),this}scale(t,e,n){return Oe.makeScale(t,e,n),this.applyMatrix4(Oe),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];De.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){let n=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(De.min,Ji.min),De.expandByPoint(xe),xe.addVectors(De.max,Ji.max),De.expandByPoint(xe)):(De.expandByPoint(Ji.min),De.expandByPoint(Ji.max))}De.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xe.fromBufferAttribute(o,c),l&&(Ai.fromBufferAttribute(t,c),xe.add(Ai)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new w,l[U]=new w;let c=new w,h=new w,u=new w,f=new ct,g=new ct,m=new ct,A=new w,p=new w;function d(U,y,_){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,U),g.fromBufferAttribute(r,y),m.fromBufferAttribute(r,_),h.sub(c),u.sub(c),g.sub(f),m.sub(f);let T=1/(g.x*m.y-m.x*g.y);isFinite(T)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(u,-g.y).multiplyScalar(T),p.copy(u).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(T),o[U].add(A),o[y].add(A),o[_].add(A),l[U].add(p),l[y].add(p),l[_].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let U=0,y=b.length;U<y;++U){let _=b[U],T=_.start,O=_.count;for(let z=T,H=T+O;z<H;z+=3)d(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let I=new w,C=new w,V=new w,S=new w;function E(U){V.fromBufferAttribute(s,U),S.copy(V);let y=o[U];I.copy(y),I.sub(V.multiplyScalar(V.dot(y))).normalize(),C.crossVectors(S,y);let T=C.dot(l[U])<0?-1:1;a.setXYZW(U,I.x,I.y,I.z,T)}for(let U=0,y=b.length;U<y;++U){let _=b[U],T=_.start,O=_.count;for(let z=T,H=T+O;z<H;z+=3)E(t.getX(z+0)),E(t.getX(z+1)),E(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);let s=new w,r=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(t)for(let f=0,g=t.count;f<g;f+=3){let m=t.getX(f+0),A=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,g=e.count;f<g;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),g=0,m=0;for(let A=0,p=l.length;A<p;A++){o.isInterleavedBufferAttribute?g=l[A]*o.data.stride+o.offset:g=l[A]*h;for(let d=0;d<h;d++)f[m++]=c[g++]}return new ve(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],g=t(f,n);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let g=c[u];h.push(g.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,g=u.length;f<g;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jl=new Qt,Gn=new sr,Ls=new Nn,Zl=new w,Us=new w,Ds=new w,Ns=new w,la=new w,Fs=new w,Kl=new w,Bs=new w,Xt=class extends Se{constructor(t=new pe,e=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(la.fromBufferAttribute(u,t),a?Fs.addScaledVector(la,h):Fs.addScaledVector(la.sub(e),h))}e.add(Fs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(r),Gn.copy(t.ray).recast(t.near),!(Ls.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(Ls,Zl)===null||Gn.origin.distanceToSquared(Zl)>(t.far-t.near)**2))&&(jl.copy(r).invert(),Gn.copy(t.ray).applyMatrix4(jl),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=f.length;m<A;m++){let p=f[m],d=a[p.materialIndex],b=Math.max(p.start,g.start),I=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let C=b,V=I;C<V;C+=3){let S=o.getX(C),E=o.getX(C+1),U=o.getX(C+2);s=zs(this,d,t,n,c,h,u,S,E,U),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,g.start),A=Math.min(o.count,g.start+g.count);for(let p=m,d=A;p<d;p+=3){let b=o.getX(p),I=o.getX(p+1),C=o.getX(p+2);s=zs(this,a,t,n,c,h,u,b,I,C),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,A=f.length;m<A;m++){let p=f[m],d=a[p.materialIndex],b=Math.max(p.start,g.start),I=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let C=b,V=I;C<V;C+=3){let S=C,E=C+1,U=C+2;s=zs(this,d,t,n,c,h,u,S,E,U),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,g.start),A=Math.min(l.count,g.start+g.count);for(let p=m,d=A;p<d;p+=3){let b=p,I=p+1,C=p+2;s=zs(this,a,t,n,c,h,u,b,I,C),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Vu(i,t,e,n,s,r,a,o){let l;if(t.side===be?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Un,o),l===null)return null;Bs.copy(o),Bs.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Bs);return c<e.near||c>e.far?null:{distance:c,point:Bs.clone(),object:i}}function zs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Us),i.getVertexPosition(l,Ds),i.getVertexPosition(c,Ns);let h=Vu(i,t,e,n,Us,Ds,Ns,Kl);if(h){let u=new w;Kn.getBarycoord(Kl,Us,Ds,Ns,u),s&&(h.uv=Kn.getInterpolatedAttribute(s,o,l,c,u,new ct)),r&&(h.uv1=Kn.getInterpolatedAttribute(r,o,l,c,u,new ct)),a&&(h.normal=Kn.getInterpolatedAttribute(a,o,l,c,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new w,materialIndex:0};Kn.getNormal(Us,Ds,Ns,f.normal),h.face=f,h.barycoord=u}return h}var ni=class i extends pe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,g=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function m(A,p,d,b,I,C,V,S,E,U,y){let _=C/E,T=V/U,O=C/2,z=V/2,H=S/2,Z=E+1,G=U+1,$=0,k=0,it=new w;for(let ht=0;ht<G;ht++){let _t=ht*T-z;for(let Dt=0;Dt<Z;Dt++){let $t=Dt*_-O;it[A]=$t*b,it[p]=_t*I,it[d]=H,c.push(it.x,it.y,it.z),it[A]=0,it[p]=0,it[d]=S>0?1:-1,h.push(it.x,it.y,it.z),u.push(Dt/E),u.push(1-ht/U),$+=1}}for(let ht=0;ht<U;ht++)for(let _t=0;_t<E;_t++){let Dt=f+_t+Z*ht,$t=f+_t+Z*(ht+1),X=f+(_t+1)+Z*(ht+1),tt=f+(_t+1)+Z*ht;l.push(Dt,$t,tt),l.push($t,X,tt),k+=6}o.addGroup(g,k,y),g+=k,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Li(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ee(i){let t={};for(let e=0;e<i.length;e++){let n=Li(i[e]);for(let s in n)t[s]=n[s]}return t}function Ru(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Bt.workingColorSpace}var Bn={clone:Li,merge:Ee},Pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ge=class extends Fn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pu,this.fragmentShader=Lu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=Ru(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},lr=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Rn=new w,Jl=new ct,Ql=new ct,we=class extends lr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=so*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return so*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z)}getViewSize(t,e){return this.getViewBounds(t,Jl,Ql),e.subVectors(Ql,Jl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},xi=-90,vi=1,lo=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new we(xi,vi,t,e);s.layers=this.layers,this.add(s);let r=new we(xi,vi,t,e);r.layers=this.layers,this.add(r);let a=new we(xi,vi,t,e);a.layers=this.layers,this.add(a);let o=new we(xi,vi,t,e);o.layers=this.layers,this.add(o);let l=new we(xi,vi,t,e);l.layers=this.layers,this.add(l);let c=new we(xi,vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,g),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},cr=class extends Te{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ti,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},co=class extends Ve{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new cr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ni(5,5,5),r=new ge({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:sn});r.uniforms.tEquirect.value=e;let a=new Xt(s,r),o=e.minFilter;return e.minFilter===$n&&(e.minFilter=en),new lo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ca=new w,Uu=new w,Du=new Pt,xn=class{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ca.subVectors(n,e).cross(Uu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Du.getNormalMatrix(t),s=this.coplanarPoint(ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wn=new Nn,Os=new w,ls=class{constructor(t=new xn,e=new xn,n=new xn,s=new xn,r=new xn,a=new xn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],g=s[8],m=s[9],A=s[10],p=s[11],d=s[12],b=s[13],I=s[14],C=s[15];if(n[0].setComponents(l-r,f-c,p-g,C-d).normalize(),n[1].setComponents(l+r,f+c,p+g,C+d).normalize(),n[2].setComponents(l+a,f+h,p+m,C+b).normalize(),n[3].setComponents(l-a,f-h,p-m,C-b).normalize(),n[4].setComponents(l-o,f-u,p-A,C-I).normalize(),e===vn)n[5].setComponents(l+o,f+u,p+A,C+I).normalize();else if(e===er)n[5].setComponents(o,u,A,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Os.x=s.normal.x>0?t.max.x:t.min.x,Os.y=s.normal.y>0?t.max.y:t.min.y,Os.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Os)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function jc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Nu(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((g,m)=>g.start-m.start);let f=0;for(let g=1;g<u.length;g++){let m=u[f],A=u[g];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++f,u[f]=A)}u.length=f+1;for(let g=0,m=u.length;g<m;g++){let A=u[g];i.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var on=class i extends pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,g=[],m=[],A=[],p=[];for(let d=0;d<h;d++){let b=d*f-a;for(let I=0;I<c;I++){let C=I*u-r;m.push(C,-b,0),A.push(0,0,1),p.push(I/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){let I=b+c*d,C=b+c*(d+1),V=b+1+c*(d+1),S=b+1+c*d;g.push(I,C,S),g.push(C,V,S)}this.setIndex(g),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(A,3)),this.setAttribute("uv",new te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Fu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bu=`#ifdef USE_ALPHAHASH
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
#endif`,zu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ou=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ku=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hu=`#ifdef USE_AOMAP
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
#endif`,Gu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wu=`#ifdef USE_BATCHING
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
#endif`,Xu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ju=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ku=`#ifdef USE_IRIDESCENCE
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
#endif`,Ju=`#ifdef USE_BUMPMAP
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
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ad=`#define PI 3.141592653589793
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
} // validated`,od=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ld=`vec3 transformedNormal = objectNormal;
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
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",pd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ad=`#ifdef USE_ENVMAP
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
#endif`,xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
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
#endif`,Cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_d=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Md=`#ifdef USE_GRADIENTMAP
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
}`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wd=`uniform bool receiveShadow;
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
#endif`,Td=`#ifdef USE_ENVMAP
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
#endif`,Vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ud=`PhysicalMaterial material;
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
#endif`,Dd=`struct PhysicalMaterial {
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
}`,Nd=`
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
#endif`,Fd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Od=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xd=`#if defined( USE_POINTS_UV )
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
#endif`,Yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qd=`#ifdef USE_MORPHTARGETS
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
#endif`,$d=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ef=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,af=`#ifdef USE_NORMALMAP
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
#endif`,of=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,df=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Af=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_f=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yf=`float getShadowMask() {
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
}`,If=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mf=`#ifdef USE_SKINNING
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
#endif`,bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sf=`#ifdef USE_SKINNING
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
#endif`,Ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rf=`#ifdef USE_TRANSMISSION
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
#endif`,Pf=`#ifdef USE_TRANSMISSION
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
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bf=`uniform sampler2D t2D;
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`#include <common>
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
}`,Gf=`#if DEPTH_PACKING == 3200
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
}`,Wf=`#define DISTANCE
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
}`,Xf=`#define DISTANCE
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
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`uniform float scale;
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Jf=`#include <common>
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
}`,Qf=`uniform vec3 diffuse;
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
}`,$f=`#define LAMBERT
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
}`,tp=`#define LAMBERT
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
}`,ep=`#define MATCAP
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
}`,np=`#define MATCAP
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
}`,ip=`#define NORMAL
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
}`,sp=`#define NORMAL
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
}`,rp=`#define PHONG
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
}`,ap=`#define PHONG
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
}`,op=`#define STANDARD
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
}`,lp=`#define STANDARD
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
}`,cp=`#define TOON
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
}`,hp=`#define TOON
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
}`,up=`uniform float size;
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
}`,dp=`uniform vec3 diffuse;
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
}`,fp=`#include <common>
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
}`,pp=`uniform vec3 color;
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
}`,gp=`uniform float rotation;
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
}`,mp=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Fu,alphahash_pars_fragment:Bu,alphamap_fragment:zu,alphamap_pars_fragment:Ou,alphatest_fragment:qu,alphatest_pars_fragment:ku,aomap_fragment:Hu,aomap_pars_fragment:Gu,batching_pars_vertex:Wu,batching_vertex:Xu,begin_vertex:Yu,beginnormal_vertex:ju,bsdfs:Zu,iridescence_fragment:Ku,bumpmap_pars_fragment:Ju,clipping_planes_fragment:Qu,clipping_planes_pars_fragment:$u,clipping_planes_pars_vertex:td,clipping_planes_vertex:ed,color_fragment:nd,color_pars_fragment:id,color_pars_vertex:sd,color_vertex:rd,common:ad,cube_uv_reflection_fragment:od,defaultnormal_vertex:ld,displacementmap_pars_vertex:cd,displacementmap_vertex:hd,emissivemap_fragment:ud,emissivemap_pars_fragment:dd,colorspace_fragment:fd,colorspace_pars_fragment:pd,envmap_fragment:gd,envmap_common_pars_fragment:md,envmap_pars_fragment:Ad,envmap_pars_vertex:xd,envmap_physical_pars_fragment:Td,envmap_vertex:vd,fog_vertex:Cd,fog_pars_vertex:_d,fog_fragment:yd,fog_pars_fragment:Id,gradientmap_pars_fragment:Md,lightmap_pars_fragment:bd,lights_lambert_fragment:Sd,lights_lambert_pars_fragment:Ed,lights_pars_begin:wd,lights_toon_fragment:Vd,lights_toon_pars_fragment:Rd,lights_phong_fragment:Pd,lights_phong_pars_fragment:Ld,lights_physical_fragment:Ud,lights_physical_pars_fragment:Dd,lights_fragment_begin:Nd,lights_fragment_maps:Fd,lights_fragment_end:Bd,logdepthbuf_fragment:zd,logdepthbuf_pars_fragment:Od,logdepthbuf_pars_vertex:qd,logdepthbuf_vertex:kd,map_fragment:Hd,map_pars_fragment:Gd,map_particle_fragment:Wd,map_particle_pars_fragment:Xd,metalnessmap_fragment:Yd,metalnessmap_pars_fragment:jd,morphinstance_vertex:Zd,morphcolor_vertex:Kd,morphnormal_vertex:Jd,morphtarget_pars_vertex:Qd,morphtarget_vertex:$d,normal_fragment_begin:tf,normal_fragment_maps:ef,normal_pars_fragment:nf,normal_pars_vertex:sf,normal_vertex:rf,normalmap_pars_fragment:af,clearcoat_normal_fragment_begin:of,clearcoat_normal_fragment_maps:lf,clearcoat_pars_fragment:cf,iridescence_pars_fragment:hf,opaque_fragment:uf,packing:df,premultiplied_alpha_fragment:ff,project_vertex:pf,dithering_fragment:gf,dithering_pars_fragment:mf,roughnessmap_fragment:Af,roughnessmap_pars_fragment:xf,shadowmap_pars_fragment:vf,shadowmap_pars_vertex:Cf,shadowmap_vertex:_f,shadowmask_pars_fragment:yf,skinbase_vertex:If,skinning_pars_vertex:Mf,skinning_vertex:bf,skinnormal_vertex:Sf,specularmap_fragment:Ef,specularmap_pars_fragment:wf,tonemapping_fragment:Tf,tonemapping_pars_fragment:Vf,transmission_fragment:Rf,transmission_pars_fragment:Pf,uv_pars_fragment:Lf,uv_pars_vertex:Uf,uv_vertex:Df,worldpos_vertex:Nf,background_vert:Ff,background_frag:Bf,backgroundCube_vert:zf,backgroundCube_frag:Of,cube_vert:qf,cube_frag:kf,depth_vert:Hf,depth_frag:Gf,distanceRGBA_vert:Wf,distanceRGBA_frag:Xf,equirect_vert:Yf,equirect_frag:jf,linedashed_vert:Zf,linedashed_frag:Kf,meshbasic_vert:Jf,meshbasic_frag:Qf,meshlambert_vert:$f,meshlambert_frag:tp,meshmatcap_vert:ep,meshmatcap_frag:np,meshnormal_vert:ip,meshnormal_frag:sp,meshphong_vert:rp,meshphong_frag:ap,meshphysical_vert:op,meshphysical_frag:lp,meshtoon_vert:cp,meshtoon_frag:hp,points_vert:up,points_frag:dp,shadow_vert:fp,shadow_frag:pp,sprite_vert:gp,sprite_frag:mp},et={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},tn={basic:{uniforms:Ee([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ee([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new St(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ee([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ee([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ee([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new St(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ee([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ee([et.points,et.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ee([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ee([et.common,et.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ee([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ee([et.sprite,et.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ee([et.common,et.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ee([et.lights,et.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};tn.physical={uniforms:Ee([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var qs={r:0,b:0,g:0},Xn=new an,Ap=new Qt;function xp(i,t,e,n,s,r,a){let o=new St(0),l=r===!0?0:1,c,h,u=null,f=0,g=null;function m(b){let I=b.isScene===!0?b.background:null;return I&&I.isTexture&&(I=(b.backgroundBlurriness>0?e:t).get(I)),I}function A(b){let I=!1,C=m(b);C===null?d(o,l):C&&C.isColor&&(d(C,1),I=!0);let V=i.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,a):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||I)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,I){let C=m(I);C&&(C.isCubeTexture||C.mapping===Sr)?(h===void 0&&(h=new Xt(new ni(1,1,1),new ge({name:"BackgroundCubeMaterial",uniforms:Li(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Xn.copy(I.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ap.makeRotationFromEuler(Xn)),h.material.toneMapped=Bt.getTransfer(C.colorSpace)!==Zt,(u!==C||f!==C.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,u=C,f=C.version,g=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Xt(new on(2,2),new ge({name:"BackgroundMaterial",uniforms:Li(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.toneMapped=Bt.getTransfer(C.colorSpace)!==Zt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,u=C,f=C.version,g=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,I){b.getRGB(qs,Yc(i)),n.buffers.color.setClear(qs.r,qs.g,qs.b,I,a)}return{getClearColor:function(){return o},setClearColor:function(b,I=1){o.set(b),l=I,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(o,l)},render:A,addToRenderList:p}}function vp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(_,T,O,z,H){let Z=!1,G=u(z,O,T);r!==G&&(r=G,c(r.object)),Z=g(_,z,O,H),Z&&m(_,z,O,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,C(_,T,O,z),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,T,O){let z=O.wireframe===!0,H=n[_.id];H===void 0&&(H={},n[_.id]=H);let Z=H[T.id];Z===void 0&&(Z={},H[T.id]=Z);let G=Z[z];return G===void 0&&(G=f(l()),Z[z]=G),G}function f(_){let T=[],O=[],z=[];for(let H=0;H<e;H++)T[H]=0,O[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:O,attributeDivisors:z,object:_,attributes:{},index:null}}function g(_,T,O,z){let H=r.attributes,Z=T.attributes,G=0,$=O.getAttributes();for(let k in $)if($[k].location>=0){let ht=H[k],_t=Z[k];if(_t===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(_t=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(_t=_.instanceColor)),ht===void 0||ht.attribute!==_t||_t&&ht.data!==_t.data)return!0;G++}return r.attributesNum!==G||r.index!==z}function m(_,T,O,z){let H={},Z=T.attributes,G=0,$=O.getAttributes();for(let k in $)if($[k].location>=0){let ht=Z[k];ht===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(ht=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(ht=_.instanceColor));let _t={};_t.attribute=ht,ht&&ht.data&&(_t.data=ht.data),H[k]=_t,G++}r.attributes=H,r.attributesNum=G,r.index=z}function A(){let _=r.newAttributes;for(let T=0,O=_.length;T<O;T++)_[T]=0}function p(_){d(_,0)}function d(_,T){let O=r.newAttributes,z=r.enabledAttributes,H=r.attributeDivisors;O[_]=1,z[_]===0&&(i.enableVertexAttribArray(_),z[_]=1),H[_]!==T&&(i.vertexAttribDivisor(_,T),H[_]=T)}function b(){let _=r.newAttributes,T=r.enabledAttributes;for(let O=0,z=T.length;O<z;O++)T[O]!==_[O]&&(i.disableVertexAttribArray(O),T[O]=0)}function I(_,T,O,z,H,Z,G){G===!0?i.vertexAttribIPointer(_,T,O,H,Z):i.vertexAttribPointer(_,T,O,z,H,Z)}function C(_,T,O,z){A();let H=z.attributes,Z=O.getAttributes(),G=T.defaultAttributeValues;for(let $ in Z){let k=Z[$];if(k.location>=0){let it=H[$];if(it===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(it=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(it=_.instanceColor)),it!==void 0){let ht=it.normalized,_t=it.itemSize,Dt=t.get(it);if(Dt===void 0)continue;let $t=Dt.buffer,X=Dt.type,tt=Dt.bytesPerElement,At=X===i.INT||X===i.UNSIGNED_INT||it.gpuType===Ko;if(it.isInterleavedBufferAttribute){let st=it.data,bt=st.stride,Tt=it.offset;if(st.isInstancedInterleavedBuffer){for(let Nt=0;Nt<k.locationSize;Nt++)d(k.location+Nt,st.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Nt=0;Nt<k.locationSize;Nt++)p(k.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let Nt=0;Nt<k.locationSize;Nt++)I(k.location+Nt,_t/k.locationSize,X,ht,bt*tt,(Tt+_t/k.locationSize*Nt)*tt,At)}else{if(it.isInstancedBufferAttribute){for(let st=0;st<k.locationSize;st++)d(k.location+st,it.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let st=0;st<k.locationSize;st++)p(k.location+st);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let st=0;st<k.locationSize;st++)I(k.location+st,_t/k.locationSize,X,ht,_t*tt,_t/k.locationSize*st*tt,At)}}else if(G!==void 0){let ht=G[$];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(k.location,ht);break;case 3:i.vertexAttrib3fv(k.location,ht);break;case 4:i.vertexAttrib4fv(k.location,ht);break;default:i.vertexAttrib1fv(k.location,ht)}}}}b()}function V(){U();for(let _ in n){let T=n[_];for(let O in T){let z=T[O];for(let H in z)h(z[H].object),delete z[H];delete T[O]}delete n[_]}}function S(_){if(n[_.id]===void 0)return;let T=n[_.id];for(let O in T){let z=T[O];for(let H in z)h(z[H].object),delete z[H];delete T[O]}delete n[_.id]}function E(_){for(let T in n){let O=n[T];if(O[_.id]===void 0)continue;let z=O[_.id];for(let H in z)h(z[H].object),delete z[H];delete O[_.id]}}function U(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:y,dispose:V,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:A,enableAttribute:p,disableUnusedAttributes:b}}function Cp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let g=0;for(let m=0;m<u;m++)g+=h[m];e.update(g,n,1)}function l(c,h,u,f){if(u===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<c.length;m++)a(c[m],h[m],f[m]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A]*f[A];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function _p(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Ze&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let U=E===Qe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==_n&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==nn&&!U)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),V=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:g,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:b,maxVaryings:I,maxFragmentUniforms:C,vertexTextures:V,maxSamples:S}}function yp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new xn,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let g=u.length!==0||f||n!==0||s;return s=f,n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,g){let m=u.clippingPlanes,A=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let b=r?0:n,I=b*4,C=d.clippingState||null;l.value=C,C=h(m,f,I,g);for(let V=0;V!==I;++V)C[V]=e[V];d.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,g,m){let A=u!==null?u.length:0,p=null;if(A!==0){if(p=l.value,m!==!0||p===null){let d=g+A*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let I=0,C=g;I!==A;++I,C+=4)a.copy(u[I]).applyMatrix4(b,o),a.normal.toArray(p,C),p[C+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,p}}function Ip(i){let t=new WeakMap;function e(a,o){return o===Ta?a.mapping=Ti:o===Va&&(a.mapping=Vi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ta||o===Va)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new co(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ui=class extends lr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},yi=4,$l=[.125,.215,.35,.446,.526,.582],Jn=20,ha=new Ui,tc=new St,ua=null,da=0,fa=0,pa=!1,jn=(1+Math.sqrt(5))/2,Ci=1/jn,ec=[new w(-jn,Ci,0),new w(jn,Ci,0),new w(-Ci,0,jn),new w(Ci,0,jn),new w(0,jn,-Ci),new w(0,jn,Ci),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],hr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,da,fa),this._renderer.xr.enabled=pa,t.scissorTest=!1,ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Qe,format:Ze,colorSpace:Oi,depthBuffer:!1},s=nc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mp(r)),this._blurMaterial=bp(r,t,e)}return s}_compileMaterial(t){let e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,s){let o=new we(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(tc),h.toneMapping=Ln,h.autoClear=!1;let g=new ke({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),m=new Xt(new ni,g),A=!1,p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,A=!0):(g.color.copy(tc),A=!0);for(let d=0;d<6;d++){let b=d%3;b===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):b===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let I=this._cubeSize;ks(s,b*I,d>2?I:0,I,I),h.setRenderTarget(s),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ti||t.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ic());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ks(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ha)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ec[(s-r-1)%ec.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Xt(this._lodPlanes[s],c),f=c.uniforms,g=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Jn-1),A=r/m,p=isFinite(r)?1+Math.floor(h*A):Jn;p>Jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Jn}`);let d=[],b=0;for(let E=0;E<Jn;++E){let U=E/A,y=Math.exp(-U*U/2);d.push(y),E===0?b+=y:E<p&&(b+=2*y)}for(let E=0;E<d.length;E++)d[E]=d[E]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:I}=this;f.dTheta.value=m,f.mipInt.value=I-n;let C=this._sizeLods[s],V=3*C*(s>I-yi?s-I+yi:0),S=4*(this._cubeSize-C);ks(e,V,S,3*C,2*C),l.setRenderTarget(e),l.render(u,ha)}};function Mp(i){let t=[],e=[],n=[],s=i,r=i-yi+1+$l.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-yi?l=$l[a-i+yi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,m=6,A=3,p=2,d=1,b=new Float32Array(A*m*g),I=new Float32Array(p*m*g),C=new Float32Array(d*m*g);for(let S=0;S<g;S++){let E=S%3*2/3-1,U=S>2?0:-1,y=[E,U,0,E+2/3,U,0,E+2/3,U+1,0,E,U,0,E+2/3,U+1,0,E,U+1,0];b.set(y,A*m*S),I.set(f,p*m*S);let _=[S,S,S,S,S,S];C.set(_,d*m*S)}let V=new pe;V.setAttribute("position",new ve(b,A)),V.setAttribute("uv",new ve(I,p)),V.setAttribute("faceIndex",new ve(C,d)),t.push(V),s>yi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nc(i,t,e){let n=new Ve(i,t,e);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ks(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function bp(i,t,e){let n=new Float32Array(Jn),s=new w(0,1,0);return new ge({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:il(),fragmentShader:`

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
		`,blending:sn,depthTest:!1,depthWrite:!1})}function ic(){return new ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:sn,depthTest:!1,depthWrite:!1})}function sc(){return new ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function il(){return`

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
	`}function Sp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ta||l===Va,h=l===Ti||l===Vi;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new hr(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let g=o.image;return c&&g&&g.height>0||h&&g&&s(g)?(e===null&&(e=new hr(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ep(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ts("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wp(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let A=f.morphAttributes[m];for(let p=0,d=A.length;p<d;p++)t.remove(A[p])}f.removeEventListener("dispose",a),delete s[f.id];let g=r.get(f);g&&(t.remove(g),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER);let g=u.morphAttributes;for(let m in g){let A=g[m];for(let p=0,d=A.length;p<d;p++)t.update(A[p],i.ARRAY_BUFFER)}}function c(u){let f=[],g=u.index,m=u.attributes.position,A=0;if(g!==null){let b=g.array;A=g.version;for(let I=0,C=b.length;I<C;I+=3){let V=b[I+0],S=b[I+1],E=b[I+2];f.push(V,S,S,E,E,V)}}else if(m!==void 0){let b=m.array;A=m.version;for(let I=0,C=b.length/3-1;I<C;I+=3){let V=I+0,S=I+1,E=I+2;f.push(V,S,S,E,E,V)}}else return;let p=new(Wc(f)?or:ar)(f,1);p.version=A;let d=r.get(u);d&&t.remove(d),r.set(u,p)}function h(u){let f=r.get(u);if(f){let g=u.index;g!==null&&f.version<g.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Tp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,g){i.drawElements(n,g,r,f*a),e.update(g,n,1)}function c(f,g,m){m!==0&&(i.drawElementsInstanced(n,g,r,f*a,m),e.update(g,n,m))}function h(f,g,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,f,0,m);let p=0;for(let d=0;d<m;d++)p+=g[d];e.update(p,n,1)}function u(f,g,m,A){if(m===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/a,g[d],A[d]);else{p.multiDrawElementsInstancedWEBGL(n,g,0,r,f,0,A,0,m);let d=0;for(let b=0;b<m;b++)d+=g[b]*A[b];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Vp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Rp(i,t,e){let n=new WeakMap,s=new he;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let y=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let g=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],I=0;g===!0&&(I=1),m===!0&&(I=2),A===!0&&(I=3);let C=o.attributes.position.count*I,V=1;C>t.maxTextureSize&&(V=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);let S=new Float32Array(C*V*4*u),E=new ir(S,C,V,u);E.type=nn,E.needsUpdate=!0;let U=I*4;for(let _=0;_<u;_++){let T=p[_],O=d[_],z=b[_],H=C*V*4*_;for(let Z=0;Z<T.count;Z++){let G=Z*U;g===!0&&(s.fromBufferAttribute(T,Z),S[H+G+0]=s.x,S[H+G+1]=s.y,S[H+G+2]=s.z,S[H+G+3]=0),m===!0&&(s.fromBufferAttribute(O,Z),S[H+G+4]=s.x,S[H+G+5]=s.y,S[H+G+6]=s.z,S[H+G+7]=0),A===!0&&(s.fromBufferAttribute(z,Z),S[H+G+8]=s.x,S[H+G+9]=s.y,S[H+G+10]=s.z,S[H+G+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:E,size:new ct(C,V)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let A=0;A<c.length;A++)g+=c[A];let m=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Pp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var ur=class extends Te{constructor(t,e,n,s,r,a,o,l,c,h=Mi){if(h!==Mi&&h!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Mi&&(n=ei),n===void 0&&h===Pi&&(n=Ri),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ne,this.minFilter=l!==void 0?l:Ne,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Zc=new Te,rc=new ur(1,1),Kc=new ir,Jc=new oo,Qc=new cr,ac=[],oc=[],lc=new Float32Array(16),cc=new Float32Array(9),hc=new Float32Array(4);function qi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ac[s];if(r===void 0&&(r=new Float32Array(s),ac[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wr(i,t){let e=oc[t];e===void 0&&(e=new Int32Array(t),oc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Lp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function Dp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function Np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function Fp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(me(e,n))return;hc.set(n),i.uniformMatrix2fv(this.addr,!1,hc),Ae(e,n)}}function Bp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(me(e,n))return;cc.set(n),i.uniformMatrix3fv(this.addr,!1,cc),Ae(e,n)}}function zp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(me(e,n))return;lc.set(n),i.uniformMatrix4fv(this.addr,!1,lc),Ae(e,n)}}function Op(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function Hp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function Gp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function Xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function Yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function jp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rc.compareFunction=Gc,r=rc):r=Zc,e.setTexture2D(t||r,s)}function Zp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jc,s)}function Kp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qc,s)}function Jp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kc,s)}function Qp(i){switch(i){case 5126:return Lp;case 35664:return Up;case 35665:return Dp;case 35666:return Np;case 35674:return Fp;case 35675:return Bp;case 35676:return zp;case 5124:case 35670:return Op;case 35667:case 35671:return qp;case 35668:case 35672:return kp;case 35669:case 35673:return Hp;case 5125:return Gp;case 36294:return Wp;case 36295:return Xp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return Jp}}function $p(i,t){i.uniform1fv(this.addr,t)}function tg(i,t){let e=qi(t,this.size,2);i.uniform2fv(this.addr,e)}function eg(i,t){let e=qi(t,this.size,3);i.uniform3fv(this.addr,e)}function ng(i,t){let e=qi(t,this.size,4);i.uniform4fv(this.addr,e)}function ig(i,t){let e=qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function sg(i,t){let e=qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function rg(i,t){let e=qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ag(i,t){i.uniform1iv(this.addr,t)}function og(i,t){i.uniform2iv(this.addr,t)}function lg(i,t){i.uniform3iv(this.addr,t)}function cg(i,t){i.uniform4iv(this.addr,t)}function hg(i,t){i.uniform1uiv(this.addr,t)}function ug(i,t){i.uniform2uiv(this.addr,t)}function dg(i,t){i.uniform3uiv(this.addr,t)}function fg(i,t){i.uniform4uiv(this.addr,t)}function pg(i,t,e){let n=this.cache,s=t.length,r=wr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Zc,r[a])}function gg(i,t,e){let n=this.cache,s=t.length,r=wr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Jc,r[a])}function mg(i,t,e){let n=this.cache,s=t.length,r=wr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Qc,r[a])}function Ag(i,t,e){let n=this.cache,s=t.length,r=wr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Kc,r[a])}function xg(i){switch(i){case 5126:return $p;case 35664:return tg;case 35665:return eg;case 35666:return ng;case 35674:return ig;case 35675:return sg;case 35676:return rg;case 5124:case 35670:return ag;case 35667:case 35671:return og;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return hg;case 36294:return ug;case 36295:return dg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return Ag}}var ho=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qp(e.type)}},uo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xg(e.type)}},fo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ga=/(\w+)(\])?(\[|\.)?/g;function uc(i,t){i.seq.push(t),i.map[t.id]=t}function vg(i,t,e){let n=i.name,s=n.length;for(ga.lastIndex=0;;){let r=ga.exec(n),a=ga.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){uc(e,c===void 0?new ho(o,i,t):new uo(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new fo(o),uc(e,u)),e=u}}}var Si=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);vg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function dc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Cg=37297,_g=0;function yg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var fc=new Pt;function Ig(i){Bt._getMatrix(fc,Bt.workingColorSpace,i);let t=`mat3( ${fc.elements.map(e=>e.toFixed(4))} )`;switch(Bt.getTransfer(i)){case Er:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+yg(i.getShaderSource(t),a)}else return s}function Mg(i,t){let e=Ig(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function bg(i,t){let e;switch(t){case Wo:e="Linear";break;case Xo:e="Reinhard";break;case Yo:e="Cineon";break;case fs:e="ACESFilmic";break;case jo:e="AgX";break;case Zo:e="Neutral";break;case nu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Hs=new w;function Sg(){Bt.getLuminanceCoefficients(Hs);let i=Hs.x.toFixed(4),t=Hs.y.toFixed(4),e=Hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function wg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Tg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function es(i){return i!==""}function gc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(i){return i.replace(Vg,Pg)}var Rg=new Map;function Pg(i,t){let e=Ut[t];if(e===void 0){let n=Rg.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return po(e)}var Lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(i){return i.replace(Lg,Ug)}function Ug(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Dg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function Ng(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ti:case Vi:t="ENVMAP_TYPE_CUBE";break;case Sr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Fg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vi:t="ENVMAP_MODE_REFRACTION";break}return t}function Bg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Go:t="ENVMAP_BLENDING_MULTIPLY";break;case tu:t="ENVMAP_BLENDING_MIX";break;case eu:t="ENVMAP_BLENDING_ADD";break}return t}function zg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Og(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Dg(e),c=Ng(e),h=Fg(e),u=Bg(e),f=zg(e),g=Eg(e),m=wg(r),A=s.createProgram(),p,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(es).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(es).join(`
`),d.length>0&&(d+=`
`)):(p=[xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),d=[xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Ln?bg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Mg("linearToOutputTexel",e.outputColorSpace),Sg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(es).join(`
`)),a=po(a),a=gc(a,e),a=mc(a,e),o=po(o),o=gc(o,e),o=mc(o,e),a=Ac(a),o=Ac(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let I=b+p+a,C=b+d+o,V=dc(s,s.VERTEX_SHADER,I),S=dc(s,s.FRAGMENT_SHADER,C);s.attachShader(A,V),s.attachShader(A,S),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function E(T){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(A).trim(),z=s.getShaderInfoLog(V).trim(),H=s.getShaderInfoLog(S).trim(),Z=!0,G=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,V,S);else{let $=pc(s,V,"vertex"),k=pc(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+O+`
`+$+`
`+k)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||H==="")&&(G=!1);G&&(T.diagnostics={runnable:Z,programLog:O,vertexShader:{log:z,prefix:p},fragmentShader:{log:H,prefix:d}})}s.deleteShader(V),s.deleteShader(S),U=new Si(s,A),y=Tg(s,A)}let U;this.getUniforms=function(){return U===void 0&&E(this),U};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(A,Cg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_g++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=V,this.fragmentShader=S,this}var qg=0,go=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new mo(t),e.set(t,n)),n}},mo=class{constructor(t){this.id=qg++,this.code=t,this.usedTimes=0}};function kg(i,t,e,n,s,r,a){let o=new rr,l=new go,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,g=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,_,T,O,z){let H=O.fog,Z=z.geometry,G=y.isMeshStandardMaterial?O.environment:null,$=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),k=$&&$.mapping===Sr?$.image.height:null,it=m[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let ht=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,_t=ht!==void 0?ht.length:0,Dt=0;Z.morphAttributes.position!==void 0&&(Dt=1),Z.morphAttributes.normal!==void 0&&(Dt=2),Z.morphAttributes.color!==void 0&&(Dt=3);let $t,X,tt,At;if(it){let Kt=tn[it];$t=Kt.vertexShader,X=Kt.fragmentShader}else $t=y.vertexShader,X=y.fragmentShader,l.update(y),tt=l.getVertexShaderID(y),At=l.getFragmentShaderID(y);let st=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Tt=z.isInstancedMesh===!0,Nt=z.isBatchedMesh===!0,oe=!!y.map,Ht=!!y.matcap,ue=!!$,D=!!y.aoMap,Be=!!y.lightMap,zt=!!y.bumpMap,Ot=!!y.normalMap,It=!!y.displacementMap,ie=!!y.emissiveMap,yt=!!y.metalnessMap,M=!!y.roughnessMap,x=y.anisotropy>0,N=y.clearcoat>0,Y=y.dispersion>0,K=y.iridescence>0,W=y.sheen>0,xt=y.transmission>0,rt=x&&!!y.anisotropyMap,ut=N&&!!y.clearcoatMap,Gt=N&&!!y.clearcoatNormalMap,J=N&&!!y.clearcoatRoughnessMap,dt=K&&!!y.iridescenceMap,Mt=K&&!!y.iridescenceThicknessMap,Et=W&&!!y.sheenColorMap,ft=W&&!!y.sheenRoughnessMap,qt=!!y.specularMap,Lt=!!y.specularColorMap,ee=!!y.specularIntensityMap,R=xt&&!!y.transmissionMap,nt=xt&&!!y.thicknessMap,q=!!y.gradientMap,j=!!y.alphaMap,lt=y.alphaTest>0,at=!!y.alphaHash,Vt=!!y.extensions,ce=Ln;y.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ce=i.toneMapping);let _e={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:$t,fragmentShader:X,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:At,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Nt,batchingColor:Nt&&z._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&z.instanceColor!==null,instancingMorph:Tt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Oi,alphaToCoverage:!!y.alphaToCoverage,map:oe,matcap:Ht,envMap:ue,envMapMode:ue&&$.mapping,envMapCubeUVHeight:k,aoMap:D,lightMap:Be,bumpMap:zt,normalMap:Ot,displacementMap:f&&It,emissiveMap:ie,normalMapObjectSpace:Ot&&y.normalMapType===au,normalMapTangentSpace:Ot&&y.normalMapType===Hc,metalnessMap:yt,roughnessMap:M,anisotropy:x,anisotropyMap:rt,clearcoat:N,clearcoatMap:ut,clearcoatNormalMap:Gt,clearcoatRoughnessMap:J,dispersion:Y,iridescence:K,iridescenceMap:dt,iridescenceThicknessMap:Mt,sheen:W,sheenColorMap:Et,sheenRoughnessMap:ft,specularMap:qt,specularColorMap:Lt,specularIntensityMap:ee,transmission:xt,transmissionMap:R,thicknessMap:nt,gradientMap:q,opaque:y.transparent===!1&&y.blending===Ii&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:lt,alphaHash:at,combine:y.combine,mapUv:oe&&A(y.map.channel),aoMapUv:D&&A(y.aoMap.channel),lightMapUv:Be&&A(y.lightMap.channel),bumpMapUv:zt&&A(y.bumpMap.channel),normalMapUv:Ot&&A(y.normalMap.channel),displacementMapUv:It&&A(y.displacementMap.channel),emissiveMapUv:ie&&A(y.emissiveMap.channel),metalnessMapUv:yt&&A(y.metalnessMap.channel),roughnessMapUv:M&&A(y.roughnessMap.channel),anisotropyMapUv:rt&&A(y.anisotropyMap.channel),clearcoatMapUv:ut&&A(y.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&A(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&A(y.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&A(y.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&A(y.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&A(y.sheenColorMap.channel),sheenRoughnessMapUv:ft&&A(y.sheenRoughnessMap.channel),specularMapUv:qt&&A(y.specularMap.channel),specularColorMapUv:Lt&&A(y.specularColorMap.channel),specularIntensityMapUv:ee&&A(y.specularIntensityMap.channel),transmissionMapUv:R&&A(y.transmissionMap.channel),thicknessMapUv:nt&&A(y.thicknessMap.channel),alphaMapUv:j&&A(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ot||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(oe||j),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Dt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:oe&&y.map.isVideoTexture===!0&&Bt.getTransfer(y.map.colorSpace)===Zt,decodeVideoTextureEmissive:ie&&y.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(y.emissiveMap.colorSpace)===Zt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===qe,flipSided:y.side===be,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&y.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return _e.vertexUv1s=c.has(1),_e.vertexUv2s=c.has(2),_e.vertexUv3s=c.has(3),c.clear(),_e}function d(y){let _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(let T in y.defines)_.push(T),_.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(b(_,y),I(_,y),_.push(i.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function b(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function I(y,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),y.push(o.mask)}function C(y){let _=m[y.type],T;if(_){let O=tn[_];T=Bn.clone(O.uniforms)}else T=y.uniforms;return T}function V(y,_){let T;for(let O=0,z=h.length;O<z;O++){let H=h[O];if(H.cacheKey===_){T=H,++T.usedTimes;break}}return T===void 0&&(T=new Og(i,_,y,r),h.push(T)),T}function S(y){if(--y.usedTimes===0){let _=h.indexOf(y);h[_]=h[h.length-1],h.pop(),y.destroy()}}function E(y){l.remove(y)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:C,acquireProgram:V,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:U}}function Hg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Gg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Cc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,g,m,A,p){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:g,groupOrder:m,renderOrder:u.renderOrder,z:A,group:p},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=g,d.groupOrder=m,d.renderOrder=u.renderOrder,d.z=A,d.group=p),t++,d}function o(u,f,g,m,A,p){let d=a(u,f,g,m,A,p);g.transmission>0?n.push(d):g.transparent===!0?s.push(d):e.push(d)}function l(u,f,g,m,A,p){let d=a(u,f,g,m,A,p);g.transmission>0?n.unshift(d):g.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Gg),n.length>1&&n.sort(f||vc),s.length>1&&s.sort(f||vc)}function h(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Wg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Cc,i.set(n,[a])):s>=r.length?(a=new Cc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Xg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new St};break;case"SpotLight":e={position:new w,direction:new w,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function Yg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var jg=0;function Zg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Kg(i){let t=new Xg,e=Yg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);let s=new w,r=new Qt,a=new Qt;function o(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let g=0,m=0,A=0,p=0,d=0,b=0,I=0,C=0,V=0,S=0,E=0;c.sort(Zg);for(let y=0,_=c.length;y<_;y++){let T=c[y],O=T.color,z=T.intensity,H=T.distance,Z=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=O.r*z,u+=O.g*z,f+=O.b*z;else if(T.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(T.sh.coefficients[G],z);E++}else if(T.isDirectionalLight){let G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let $=T.shadow,k=e.get(T);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,n.directionalShadow[g]=k,n.directionalShadowMap[g]=Z,n.directionalShadowMatrix[g]=T.shadow.matrix,b++}n.directional[g]=G,g++}else if(T.isSpotLight){let G=t.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(O).multiplyScalar(z),G.distance=H,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,n.spot[A]=G;let $=T.shadow;if(T.map&&(n.spotLightMap[V]=T.map,V++,$.updateMatrices(T),T.castShadow&&S++),n.spotLightMatrix[A]=$.matrix,T.castShadow){let k=e.get(T);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,n.spotShadow[A]=k,n.spotShadowMap[A]=Z,C++}A++}else if(T.isRectAreaLight){let G=t.get(T);G.color.copy(O).multiplyScalar(z),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=G,p++}else if(T.isPointLight){let G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){let $=T.shadow,k=e.get(T);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,k.shadowCameraNear=$.camera.near,k.shadowCameraFar=$.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=T.shadow.matrix,I++}n.point[m]=G,m++}else if(T.isHemisphereLight){let G=t.get(T);G.skyColor.copy(T.color).multiplyScalar(z),G.groundColor.copy(T.groundColor).multiplyScalar(z),n.hemi[d]=G,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==g||U.pointLength!==m||U.spotLength!==A||U.rectAreaLength!==p||U.hemiLength!==d||U.numDirectionalShadows!==b||U.numPointShadows!==I||U.numSpotShadows!==C||U.numSpotMaps!==V||U.numLightProbes!==E)&&(n.directional.length=g,n.spot.length=A,n.rectArea.length=p,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=C+V-S,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,U.directionalLength=g,U.pointLength=m,U.spotLength=A,U.rectAreaLength=p,U.hemiLength=d,U.numDirectionalShadows=b,U.numPointShadows=I,U.numSpotShadows=C,U.numSpotMaps=V,U.numLightProbes=E,n.version=jg++)}function l(c,h){let u=0,f=0,g=0,m=0,A=0,p=h.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){let I=c[d];if(I.isDirectionalLight){let C=n.directional[u];C.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),u++}else if(I.isSpotLight){let C=n.spot[g];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),g++}else if(I.isRectAreaLight){let C=n.rectArea[m];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(p),a.identity(),r.copy(I.matrixWorld),r.premultiply(p),a.extractRotation(r),C.halfWidth.set(I.width*.5,0,0),C.halfHeight.set(0,I.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),m++}else if(I.isPointLight){let C=n.point[f];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(p),f++}else if(I.isHemisphereLight){let C=n.hemi[A];C.direction.setFromMatrixPosition(I.matrixWorld),C.direction.transformDirection(p),A++}}}return{setup:o,setupView:l,state:n}}function _c(i){let t=new Kg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Jg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new _c(i),t.set(s,[o])):r>=a.length?(o=new _c(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ao=class extends Fn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xo=class extends Fn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$g=`uniform sampler2D shadow_pass;
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
}`;function tm(i,t,e){let n=new ls,s=new ct,r=new ct,a=new he,o=new Ao({depthPacking:ru}),l=new xo,c={},h=e.maxTextureSize,u={[Un]:be,[be]:Un,[qe]:qe},f=new ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Qg,fragmentShader:$g}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let m=new pe;m.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new Xt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let d=this.type;this.render=function(S,E,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let y=i.getRenderTarget(),_=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),O=i.state;O.setBlending(sn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let z=d!==An&&this.type===An,H=d===An&&this.type!==An;for(let Z=0,G=S.length;Z<G;Z++){let $=S[Z],k=$.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let it=k.getFrameExtents();if(s.multiply(it),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,k.mapSize.y=r.y)),k.map===null||z===!0||H===!0){let _t=this.type!==An?{minFilter:Ne,magFilter:Ne}:{};k.map!==null&&k.map.dispose(),k.map=new Ve(s.x,s.y,_t),k.map.texture.name=$.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let ht=k.getViewportCount();for(let _t=0;_t<ht;_t++){let Dt=k.getViewport(_t);a.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),O.viewport(a),k.updateMatrices($,_t),n=k.getFrustum(),C(E,U,k.camera,$,this.type)}k.isPointLightShadow!==!0&&this.type===An&&b(k,U),k.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(y,_,T)};function b(S,E){let U=t.update(A);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,g.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ve(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,U,f,A,null),g.uniforms.shadow_pass.value=S.mapPass.texture,g.uniforms.resolution.value=S.mapSize,g.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,U,g,A,null)}function I(S,E,U,y){let _=null,T=U.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)_=T;else if(_=U.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let O=_.uuid,z=E.uuid,H=c[O];H===void 0&&(H={},c[O]=H);let Z=H[z];Z===void 0&&(Z=_.clone(),H[z]=Z,E.addEventListener("dispose",V)),_=Z}if(_.visible=E.visible,_.wireframe=E.wireframe,y===An?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:u[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let O=i.properties.get(_);O.light=U}return _}function C(S,E,U,y,_){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===An)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,S.matrixWorld);let z=t.update(S),H=S.material;if(Array.isArray(H)){let Z=z.groups;for(let G=0,$=Z.length;G<$;G++){let k=Z[G],it=H[k.materialIndex];if(it&&it.visible){let ht=I(S,it,y,_);S.onBeforeShadow(i,S,E,U,z,ht,k),i.renderBufferDirect(U,null,z,ht,S,k),S.onAfterShadow(i,S,E,U,z,ht,k)}}}else if(H.visible){let Z=I(S,H,y,_);S.onBeforeShadow(i,S,E,U,z,Z,null),i.renderBufferDirect(U,null,z,Z,S,null),S.onAfterShadow(i,S,E,U,z,Z,null)}}let O=S.children;for(let z=0,H=O.length;z<H;z++)C(O[z],E,U,y,_)}function V(S){S.target.removeEventListener("dispose",V);for(let U in c){let y=c[U],_=S.target.uuid;_ in y&&(y[_].dispose(),delete y[_])}}}var em={[ya]:Ia,[Ma]:Ea,[ba]:wa,[wi]:Sa,[Ia]:ya,[Ea]:Ma,[wa]:ba,[Sa]:wi};function nm(i,t){function e(){let R=!1,nt=new he,q=null,j=new he(0,0,0,0);return{setMask:function(lt){q!==lt&&!R&&(i.colorMask(lt,lt,lt,lt),q=lt)},setLocked:function(lt){R=lt},setClear:function(lt,at,Vt,ce,_e){_e===!0&&(lt*=ce,at*=ce,Vt*=ce),nt.set(lt,at,Vt,ce),j.equals(nt)===!1&&(i.clearColor(lt,at,Vt,ce),j.copy(nt))},reset:function(){R=!1,q=null,j.set(-1,0,0,0)}}}function n(){let R=!1,nt=!1,q=null,j=null,lt=null;return{setReversed:function(at){if(nt!==at){let Vt=t.get("EXT_clip_control");nt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);let ce=lt;lt=null,this.setClear(ce)}nt=at},getReversed:function(){return nt},setTest:function(at){at?st(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(at){q!==at&&!R&&(i.depthMask(at),q=at)},setFunc:function(at){if(nt&&(at=em[at]),j!==at){switch(at){case ya:i.depthFunc(i.NEVER);break;case Ia:i.depthFunc(i.ALWAYS);break;case Ma:i.depthFunc(i.LESS);break;case wi:i.depthFunc(i.LEQUAL);break;case ba:i.depthFunc(i.EQUAL);break;case Sa:i.depthFunc(i.GEQUAL);break;case Ea:i.depthFunc(i.GREATER);break;case wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=at}},setLocked:function(at){R=at},setClear:function(at){lt!==at&&(nt&&(at=1-at),i.clearDepth(at),lt=at)},reset:function(){R=!1,q=null,j=null,lt=null,nt=!1}}}function s(){let R=!1,nt=null,q=null,j=null,lt=null,at=null,Vt=null,ce=null,_e=null;return{setTest:function(Kt){R||(Kt?st(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Kt){nt!==Kt&&!R&&(i.stencilMask(Kt),nt=Kt)},setFunc:function(Kt,Ge,hn){(q!==Kt||j!==Ge||lt!==hn)&&(i.stencilFunc(Kt,Ge,hn),q=Kt,j=Ge,lt=hn)},setOp:function(Kt,Ge,hn){(at!==Kt||Vt!==Ge||ce!==hn)&&(i.stencilOp(Kt,Ge,hn),at=Kt,Vt=Ge,ce=hn)},setLocked:function(Kt){R=Kt},setClear:function(Kt){_e!==Kt&&(i.clearStencil(Kt),_e=Kt)},reset:function(){R=!1,nt=null,q=null,j=null,lt=null,at=null,Vt=null,ce=null,_e=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,g=[],m=null,A=!1,p=null,d=null,b=null,I=null,C=null,V=null,S=null,E=new St(0,0,0),U=0,y=!1,_=null,T=null,O=null,z=null,H=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,$=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=$>=1):k.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=$>=2);let it=null,ht={},_t=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),$t=new he().fromArray(_t),X=new he().fromArray(Dt);function tt(R,nt,q,j){let lt=new Uint8Array(4),at=i.createTexture();i.bindTexture(R,at),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<q;Vt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(nt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return at}let At={};At[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(wi),zt(!1),Ot(Ml),st(i.CULL_FACE),D(sn);function st(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function bt(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Tt(R,nt){return u[R]!==nt?(i.bindFramebuffer(R,nt),u[R]=nt,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=nt),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function Nt(R,nt){let q=g,j=!1;if(R){q=f.get(nt),q===void 0&&(q=[],f.set(nt,q));let lt=R.textures;if(q.length!==lt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Vt=lt.length;at<Vt;at++)q[at]=i.COLOR_ATTACHMENT0+at;q.length=lt.length,j=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,j=!0);j&&i.drawBuffers(q)}function oe(R){return m!==R?(i.useProgram(R),m=R,!0):!1}let Ht={[Zn]:i.FUNC_ADD,[Fh]:i.FUNC_SUBTRACT,[Bh]:i.FUNC_REVERSE_SUBTRACT};Ht[zh]=i.MIN,Ht[Oh]=i.MAX;let ue={[qh]:i.ZERO,[kh]:i.ONE,[Hh]:i.SRC_COLOR,[Ca]:i.SRC_ALPHA,[Zh]:i.SRC_ALPHA_SATURATE,[Yh]:i.DST_COLOR,[Wh]:i.DST_ALPHA,[Gh]:i.ONE_MINUS_SRC_COLOR,[_a]:i.ONE_MINUS_SRC_ALPHA,[jh]:i.ONE_MINUS_DST_COLOR,[Xh]:i.ONE_MINUS_DST_ALPHA,[Kh]:i.CONSTANT_COLOR,[Jh]:i.ONE_MINUS_CONSTANT_COLOR,[Qh]:i.CONSTANT_ALPHA,[$h]:i.ONE_MINUS_CONSTANT_ALPHA};function D(R,nt,q,j,lt,at,Vt,ce,_e,Kt){if(R===sn){A===!0&&(bt(i.BLEND),A=!1);return}if(A===!1&&(st(i.BLEND),A=!0),R!==Nh){if(R!==p||Kt!==y){if((d!==Zn||C!==Zn)&&(i.blendEquation(i.FUNC_ADD),d=Zn,C=Zn),Kt)switch(R){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ei:i.blendFunc(i.ONE,i.ONE);break;case bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ei:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,I=null,V=null,S=null,E.set(0,0,0),U=0,p=R,y=Kt}return}lt=lt||nt,at=at||q,Vt=Vt||j,(nt!==d||lt!==C)&&(i.blendEquationSeparate(Ht[nt],Ht[lt]),d=nt,C=lt),(q!==b||j!==I||at!==V||Vt!==S)&&(i.blendFuncSeparate(ue[q],ue[j],ue[at],ue[Vt]),b=q,I=j,V=at,S=Vt),(ce.equals(E)===!1||_e!==U)&&(i.blendColor(ce.r,ce.g,ce.b,_e),E.copy(ce),U=_e),p=R,y=!1}function Be(R,nt){R.side===qe?bt(i.CULL_FACE):st(i.CULL_FACE);let q=R.side===be;nt&&(q=!q),zt(q),R.blending===Ii&&R.transparent===!1?D(sn):D(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let j=R.stencilWrite;o.setTest(j),j&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ie(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(R){_!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),_=R)}function Ot(R){R!==Lh?(st(i.CULL_FACE),R!==T&&(R===Ml?i.cullFace(i.BACK):R===Uh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),T=R}function It(R){R!==O&&(G&&i.lineWidth(R),O=R)}function ie(R,nt,q){R?(st(i.POLYGON_OFFSET_FILL),(z!==nt||H!==q)&&(i.polygonOffset(nt,q),z=nt,H=q)):bt(i.POLYGON_OFFSET_FILL)}function yt(R){R?st(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function M(R){R===void 0&&(R=i.TEXTURE0+Z-1),it!==R&&(i.activeTexture(R),it=R)}function x(R,nt,q){q===void 0&&(it===null?q=i.TEXTURE0+Z-1:q=it);let j=ht[q];j===void 0&&(j={type:void 0,texture:void 0},ht[q]=j),(j.type!==R||j.texture!==nt)&&(it!==q&&(i.activeTexture(q),it=q),i.bindTexture(R,nt||At[R]),j.type=R,j.texture=nt)}function N(){let R=ht[it];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Mt(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Et(R){$t.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),$t.copy(R))}function ft(R){X.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),X.copy(R))}function qt(R,nt){let q=c.get(nt);q===void 0&&(q=new WeakMap,c.set(nt,q));let j=q.get(R);j===void 0&&(j=i.getUniformBlockIndex(nt,R.name),q.set(R,j))}function Lt(R,nt){let j=c.get(nt).get(R);l.get(nt)!==j&&(i.uniformBlockBinding(nt,j,R.__bindingPointIndex),l.set(nt,j))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,ht={},u={},f=new WeakMap,g=[],m=null,A=!1,p=null,d=null,b=null,I=null,C=null,V=null,S=null,E=new St(0,0,0),U=0,y=!1,_=null,T=null,O=null,z=null,H=null,$t.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:bt,bindFramebuffer:Tt,drawBuffers:Nt,useProgram:oe,setBlending:D,setMaterial:Be,setFlipSided:zt,setCullFace:Ot,setLineWidth:It,setPolygonOffset:ie,setScissorTest:yt,activeTexture:M,bindTexture:x,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:K,texImage2D:dt,texImage3D:Mt,updateUBOMapping:qt,uniformBlockBinding:Lt,texStorage2D:Gt,texStorage3D:J,texSubImage2D:W,texSubImage3D:xt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ut,scissor:Et,viewport:ft,reset:ee}}function yc(i,t,e,n){let s=im(n);switch(e){case Fc:return i*t;case zc:return i*t;case Oc:return i*t*2;case $o:return i*t/s.components*s.byteLength;case tl:return i*t/s.components*s.byteLength;case qc:return i*t*2/s.components*s.byteLength;case el:return i*t*2/s.components*s.byteLength;case Bc:return i*t*3/s.components*s.byteLength;case Ze:return i*t*4/s.components*s.byteLength;case nl:return i*t*4/s.components*s.byteLength;case Zs:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:case Ua:return Math.max(i,16)*Math.max(t,8)/4;case Ra:case La:return Math.max(i,8)*Math.max(t,8)/2;case Da:case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case $s:case Qa:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kc:case to:return Math.ceil(i/4)*Math.ceil(t/4)*8;case eo:case no:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function im(i){switch(i){case _n:case Uc:return{byteLength:1,components:1};case as:case Dc:case Qe:return{byteLength:2,components:1};case Jo:case Qo:return{byteLength:2,components:4};case ei:case Ko:case nn:return{byteLength:4,components:1};case Nc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function sm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(M,x){return g?new OffscreenCanvas(M,x):os("canvas")}function A(M,x,N){let Y=1,K=yt(M);if((K.width>N||K.height>N)&&(Y=N/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap||typeof VideoFrame!="undefined"&&M instanceof VideoFrame){let W=Math.floor(Y*K.width),xt=Math.floor(Y*K.height);u===void 0&&(u=m(W,xt));let rt=x?m(W,xt):u;return rt.width=W,rt.height=xt,rt.getContext("2d").drawImage(M,0,0,W,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+xt+")."),rt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),M;return M}function p(M){return M.generateMipmaps}function d(M){i.generateMipmap(M)}function b(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(M,x,N,Y,K=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let W=x;if(x===i.RED&&(N===i.FLOAT&&(W=i.R32F),N===i.HALF_FLOAT&&(W=i.R16F),N===i.UNSIGNED_BYTE&&(W=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.R8UI),N===i.UNSIGNED_SHORT&&(W=i.R16UI),N===i.UNSIGNED_INT&&(W=i.R32UI),N===i.BYTE&&(W=i.R8I),N===i.SHORT&&(W=i.R16I),N===i.INT&&(W=i.R32I)),x===i.RG&&(N===i.FLOAT&&(W=i.RG32F),N===i.HALF_FLOAT&&(W=i.RG16F),N===i.UNSIGNED_BYTE&&(W=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RG8UI),N===i.UNSIGNED_SHORT&&(W=i.RG16UI),N===i.UNSIGNED_INT&&(W=i.RG32UI),N===i.BYTE&&(W=i.RG8I),N===i.SHORT&&(W=i.RG16I),N===i.INT&&(W=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGB8UI),N===i.UNSIGNED_SHORT&&(W=i.RGB16UI),N===i.UNSIGNED_INT&&(W=i.RGB32UI),N===i.BYTE&&(W=i.RGB8I),N===i.SHORT&&(W=i.RGB16I),N===i.INT&&(W=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),N===i.UNSIGNED_INT&&(W=i.RGBA32UI),N===i.BYTE&&(W=i.RGBA8I),N===i.SHORT&&(W=i.RGBA16I),N===i.INT&&(W=i.RGBA32I)),x===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),x===i.RGBA){let xt=K?Er:Bt.getTransfer(Y);N===i.FLOAT&&(W=i.RGBA32F),N===i.HALF_FLOAT&&(W=i.RGBA16F),N===i.UNSIGNED_BYTE&&(W=xt===Zt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function C(M,x){let N;return M?x===null||x===ei||x===Ri?N=i.DEPTH24_STENCIL8:x===nn?N=i.DEPTH32F_STENCIL8:x===as&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ei||x===Ri?N=i.DEPTH_COMPONENT24:x===nn?N=i.DEPTH_COMPONENT32F:x===as&&(N=i.DEPTH_COMPONENT16),N}function V(M,x){return p(M)===!0||M.isFramebufferTexture&&M.minFilter!==Ne&&M.minFilter!==en?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function S(M){let x=M.target;x.removeEventListener("dispose",S),U(x),x.isVideoTexture&&h.delete(x)}function E(M){let x=M.target;x.removeEventListener("dispose",E),_(x)}function U(M){let x=n.get(M);if(x.__webglInit===void 0)return;let N=M.source,Y=f.get(N);if(Y){let K=Y[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(M),Object.keys(Y).length===0&&f.delete(N)}n.remove(M)}function y(M){let x=n.get(M);i.deleteTexture(x.__webglTexture);let N=M.source,Y=f.get(N);delete Y[x.__cacheKey],a.memory.textures--}function _(M){let x=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let K=0;K<x.__webglFramebuffer[Y].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[Y][K]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=M.textures;for(let Y=0,K=N.length;Y<K;Y++){let W=n.get(N[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(M)}let T=0;function O(){T=0}function z(){let M=T;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),T+=1,M}function H(M){let x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function Z(M,x){let N=n.get(M);if(M.isVideoTexture&&It(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){let Y=M.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,M,x);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function G(M,x){let N=n.get(M);if(M.version>0&&N.__version!==M.version){X(N,M,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function $(M,x){let N=n.get(M);if(M.version>0&&N.__version!==M.version){X(N,M,x);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function k(M,x){let N=n.get(M);if(M.version>0&&N.__version!==M.version){tt(N,M,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}let it={[ti]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[rs]:i.MIRRORED_REPEAT},ht={[Ne]:i.NEAREST,[iu]:i.NEAREST_MIPMAP_NEAREST,[Is]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},_t={[ou]:i.NEVER,[fu]:i.ALWAYS,[lu]:i.LESS,[Gc]:i.LEQUAL,[cu]:i.EQUAL,[du]:i.GEQUAL,[hu]:i.GREATER,[uu]:i.NOTEQUAL};function Dt(M,x){if(x.type===nn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===en||x.magFilter===Or||x.magFilter===Is||x.magFilter===$n||x.minFilter===en||x.minFilter===Or||x.minFilter===Is||x.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,it[x.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,it[x.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,it[x.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ht[x.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ht[x.minFilter]),x.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,_t[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ne||x.minFilter!==Is&&x.minFilter!==$n||x.type===nn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function $t(M,x){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",S));let Y=x.source,K=f.get(Y);K===void 0&&(K={},f.set(Y,K));let W=H(x);if(W!==M.__cacheKey){K[W]===void 0&&(K[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[W].usedTimes++;let xt=K[M.__cacheKey];xt!==void 0&&(K[M.__cacheKey].usedTimes--,xt.usedTimes===0&&y(x)),M.__cacheKey=W,M.__webglTexture=K[W].texture}return N}function X(M,x,N){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);let K=$t(M,x),W=x.source;e.bindTexture(Y,M.__webglTexture,i.TEXTURE0+N);let xt=n.get(W);if(W.version!==xt.__version||K===!0){e.activeTexture(i.TEXTURE0+N);let rt=Bt.getPrimaries(Bt.workingColorSpace),ut=x.colorSpace===Pn?null:Bt.getPrimaries(x.colorSpace),Gt=x.colorSpace===Pn||rt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let J=A(x.image,!1,s.maxTextureSize);J=ie(x,J);let dt=r.convert(x.format,x.colorSpace),Mt=r.convert(x.type),Et=I(x.internalFormat,dt,Mt,x.colorSpace,x.isVideoTexture);Dt(Y,x);let ft,qt=x.mipmaps,Lt=x.isVideoTexture!==!0,ee=xt.__version===void 0||K===!0,R=W.dataReady,nt=V(x,J);if(x.isDepthTexture)Et=C(x.format===Pi,x.type),ee&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,Et,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,Et,J.width,J.height,0,dt,Mt,null));else if(x.isDataTexture)if(qt.length>0){Lt&&ee&&e.texStorage2D(i.TEXTURE_2D,nt,Et,qt[0].width,qt[0].height);for(let q=0,j=qt.length;q<j;q++)ft=qt[q],Lt?R&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,ft.width,ft.height,dt,Mt,ft.data):e.texImage2D(i.TEXTURE_2D,q,Et,ft.width,ft.height,0,dt,Mt,ft.data);x.generateMipmaps=!1}else Lt?(ee&&e.texStorage2D(i.TEXTURE_2D,nt,Et,J.width,J.height),R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,dt,Mt,J.data)):e.texImage2D(i.TEXTURE_2D,0,Et,J.width,J.height,0,dt,Mt,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Lt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Et,qt[0].width,qt[0].height,J.depth);for(let q=0,j=qt.length;q<j;q++)if(ft=qt[q],x.format!==Ze)if(dt!==null)if(Lt){if(R)if(x.layerUpdates.size>0){let lt=yc(ft.width,ft.height,x.format,x.type);for(let at of x.layerUpdates){let Vt=ft.data.subarray(at*lt/ft.data.BYTES_PER_ELEMENT,(at+1)*lt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,at,ft.width,ft.height,1,dt,Vt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,ft.width,ft.height,J.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Et,ft.width,ft.height,J.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,ft.width,ft.height,J.depth,dt,Mt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Et,ft.width,ft.height,J.depth,0,dt,Mt,ft.data)}else{Lt&&ee&&e.texStorage2D(i.TEXTURE_2D,nt,Et,qt[0].width,qt[0].height);for(let q=0,j=qt.length;q<j;q++)ft=qt[q],x.format!==Ze?dt!==null?Lt?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Et,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?R&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,ft.width,ft.height,dt,Mt,ft.data):e.texImage2D(i.TEXTURE_2D,q,Et,ft.width,ft.height,0,dt,Mt,ft.data)}else if(x.isDataArrayTexture)if(Lt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Et,J.width,J.height,J.depth),R)if(x.layerUpdates.size>0){let q=yc(J.width,J.height,x.format,x.type);for(let j of x.layerUpdates){let lt=J.data.subarray(j*q/J.data.BYTES_PER_ELEMENT,(j+1)*q/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,J.width,J.height,1,dt,Mt,lt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,Mt,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,J.width,J.height,J.depth,0,dt,Mt,J.data);else if(x.isData3DTexture)Lt?(ee&&e.texStorage3D(i.TEXTURE_3D,nt,Et,J.width,J.height,J.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,Mt,J.data)):e.texImage3D(i.TEXTURE_3D,0,Et,J.width,J.height,J.depth,0,dt,Mt,J.data);else if(x.isFramebufferTexture){if(ee)if(Lt)e.texStorage2D(i.TEXTURE_2D,nt,Et,J.width,J.height);else{let q=J.width,j=J.height;for(let lt=0;lt<nt;lt++)e.texImage2D(i.TEXTURE_2D,lt,Et,q,j,0,dt,Mt,null),q>>=1,j>>=1}}else if(qt.length>0){if(Lt&&ee){let q=yt(qt[0]);e.texStorage2D(i.TEXTURE_2D,nt,Et,q.width,q.height)}for(let q=0,j=qt.length;q<j;q++)ft=qt[q],Lt?R&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,dt,Mt,ft):e.texImage2D(i.TEXTURE_2D,q,Et,dt,Mt,ft);x.generateMipmaps=!1}else if(Lt){if(ee){let q=yt(J);e.texStorage2D(i.TEXTURE_2D,nt,Et,q.width,q.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Mt,J)}else e.texImage2D(i.TEXTURE_2D,0,Et,dt,Mt,J);p(x)&&d(Y),xt.__version=W.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function tt(M,x,N){if(x.image.length!==6)return;let Y=$t(M,x),K=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+N);let W=n.get(K);if(K.version!==W.__version||Y===!0){e.activeTexture(i.TEXTURE0+N);let xt=Bt.getPrimaries(Bt.workingColorSpace),rt=x.colorSpace===Pn?null:Bt.getPrimaries(x.colorSpace),ut=x.colorSpace===Pn||xt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Gt=x.isCompressedTexture||x.image[0].isCompressedTexture,J=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let j=0;j<6;j++)!Gt&&!J?dt[j]=A(x.image[j],!0,s.maxCubemapSize):dt[j]=J?x.image[j].image:x.image[j],dt[j]=ie(x,dt[j]);let Mt=dt[0],Et=r.convert(x.format,x.colorSpace),ft=r.convert(x.type),qt=I(x.internalFormat,Et,ft,x.colorSpace),Lt=x.isVideoTexture!==!0,ee=W.__version===void 0||Y===!0,R=K.dataReady,nt=V(x,Mt);Dt(i.TEXTURE_CUBE_MAP,x);let q;if(Gt){Lt&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,qt,Mt.width,Mt.height);for(let j=0;j<6;j++){q=dt[j].mipmaps;for(let lt=0;lt<q.length;lt++){let at=q[lt];x.format!==Ze?Et!==null?Lt?R&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,0,0,at.width,at.height,Et,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,qt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,0,0,at.width,at.height,Et,ft,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,qt,at.width,at.height,0,Et,ft,at.data)}}}else{if(q=x.mipmaps,Lt&&ee){q.length>0&&nt++;let j=yt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,qt,j.width,j.height)}for(let j=0;j<6;j++)if(J){Lt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,dt[j].width,dt[j].height,Et,ft,dt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,dt[j].width,dt[j].height,0,Et,ft,dt[j].data);for(let lt=0;lt<q.length;lt++){let Vt=q[lt].image[j].image;Lt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,0,0,Vt.width,Vt.height,Et,ft,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,qt,Vt.width,Vt.height,0,Et,ft,Vt.data)}}else{Lt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Et,ft,dt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,Et,ft,dt[j]);for(let lt=0;lt<q.length;lt++){let at=q[lt];Lt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,0,0,Et,ft,at.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,qt,Et,ft,at.image[j])}}}p(x)&&d(i.TEXTURE_CUBE_MAP),W.__version=K.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function At(M,x,N,Y,K,W){let xt=r.convert(N.format,N.colorSpace),rt=r.convert(N.type),ut=I(N.internalFormat,xt,rt,N.colorSpace),Gt=n.get(x),J=n.get(N);if(J.__renderTarget=x,!Gt.__hasExternalTextures){let dt=Math.max(1,x.width>>W),Mt=Math.max(1,x.height>>W);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,W,ut,dt,Mt,x.depth,0,xt,rt,null):e.texImage2D(K,W,ut,dt,Mt,0,xt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),Ot(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,J.__webglTexture,0,zt(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,J.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(M,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,M),x.depthBuffer){let Y=x.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,W=C(x.stencilBuffer,K),xt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=zt(x);Ot(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,W,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,W,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,W,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,M)}else{let Y=x.textures;for(let K=0;K<Y.length;K++){let W=Y[K],xt=r.convert(W.format,W.colorSpace),rt=r.convert(W.type),ut=I(W.internalFormat,xt,rt,W.colorSpace),Gt=zt(x);N&&Ot(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,ut,x.width,x.height):Ot(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,ut,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ut,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);let K=Y.__webglTexture,W=zt(x);if(x.depthTexture.format===Mi)Ot(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(x.depthTexture.format===Pi)Ot(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Tt(M){let x=n.get(M),N=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){let Y=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=Y}if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");bt(x.__webglFramebuffer,M)}else if(N){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),st(x.__webglDepthbuffer[Y],M,!1);else{let K=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),st(x.__webglDepthbuffer,M,!1);else{let Y=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(M,x,N){let Y=n.get(M);x!==void 0&&At(Y.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Tt(M)}function oe(M){let x=M.texture,N=n.get(M),Y=n.get(x);M.addEventListener("dispose",E);let K=M.textures,W=M.isWebGLCubeRenderTarget===!0,xt=K.length>1;if(xt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,a.memory.textures++),W){N.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[rt]=[];for(let ut=0;ut<x.mipmaps.length;ut++)N.__webglFramebuffer[rt][ut]=i.createFramebuffer()}else N.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let rt=0;rt<x.mipmaps.length;rt++)N.__webglFramebuffer[rt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(xt)for(let rt=0,ut=K.length;rt<ut;rt++){let Gt=n.get(K[rt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&Ot(M)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let rt=0;rt<K.length;rt++){let ut=K[rt];N.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[rt]);let Gt=r.convert(ut.format,ut.colorSpace),J=r.convert(ut.type),dt=I(ut.internalFormat,Gt,J,ut.colorSpace,M.isXRRenderTarget===!0),Mt=zt(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,dt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,N.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),st(N.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,x);for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)At(N.__webglFramebuffer[rt][ut],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut);else At(N.__webglFramebuffer[rt],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let rt=0,ut=K.length;rt<ut;rt++){let Gt=K[rt],J=n.get(Gt);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),Dt(i.TEXTURE_2D,Gt),At(N.__webglFramebuffer,M,Gt,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),p(Gt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(rt=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),Dt(rt,x),x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)At(N.__webglFramebuffer[ut],M,x,i.COLOR_ATTACHMENT0,rt,ut);else At(N.__webglFramebuffer,M,x,i.COLOR_ATTACHMENT0,rt,0);p(x)&&d(rt),e.unbindTexture()}M.depthBuffer&&Tt(M)}function Ht(M){let x=M.textures;for(let N=0,Y=x.length;N<Y;N++){let K=x[N];if(p(K)){let W=b(M),xt=n.get(K).__webglTexture;e.bindTexture(W,xt),d(W),e.unbindTexture()}}}let ue=[],D=[];function Be(M){if(M.samples>0){if(Ot(M)===!1){let x=M.textures,N=M.width,Y=M.height,K=i.COLOR_BUFFER_BIT,W=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(M),rt=x.length>1;if(rt)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);let Gt=n.get(x[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,K,i.NEAREST),l===!0&&(ue.length=0,D.length=0,ue.push(i.COLOR_ATTACHMENT0+ut),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ue.push(W),D.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);let Gt=n.get(x[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){let x=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function zt(M){return Math.min(s.maxSamples,M.samples)}function Ot(M){let x=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function It(M){let x=a.render.frame;h.get(M)!==x&&(h.set(M,x),M.update())}function ie(M,x){let N=M.colorSpace,Y=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==Oi&&N!==Pn&&(Bt.getTransfer(N)===Zt?(Y!==Ze||K!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function yt(M){return typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame!="undefined"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=k,this.rebindTextures=Nt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Ot}function rm(i,t){function e(n,s=Pn){let r,a=Bt.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===Jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uc)return i.BYTE;if(n===Dc)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===Ko)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===Qe)return i.HALF_FLOAT;if(n===Fc)return i.ALPHA;if(n===Bc)return i.RGB;if(n===Ze)return i.RGBA;if(n===zc)return i.LUMINANCE;if(n===Oc)return i.LUMINANCE_ALPHA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===Pi)return i.DEPTH_STENCIL;if(n===$o)return i.RED;if(n===tl)return i.RED_INTEGER;if(n===qc)return i.RG;if(n===el)return i.RG_INTEGER;if(n===nl)return i.RGBA_INTEGER;if(n===Zs||n===Ks||n===Js||n===Qs)if(a===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Pa||n===La||n===Ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Da||n===Na||n===Fa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Da||n===Na)return a===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ba||n===za||n===Oa||n===qa||n===ka||n===Ha||n===Ga||n===Wa||n===Xa||n===Ya||n===ja||n===Za||n===Ka||n===Ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ba)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ka)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ga)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Za)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ja)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$s||n===Qa||n===$a)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===$s)return a===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kc||n===to||n===eo||n===no)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$s)return r.COMPRESSED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var vo=class extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},le=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},am={type:"move"},ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let A of t.hand.values()){let p=e.getJointPose(A,n),d=this._getHandJoint(c,A);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),g=.02,m=.005;c.inputState.pinching&&f>g+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=g-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(am)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},om=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lm=`
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

}`,Co=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Te,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ge({vertexShader:om,fragmentShader:lm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_o=class extends Dn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,g=null,m=null,A=new Co,p=e.getContextAttributes(),d=null,b=null,I=[],C=[],V=new ct,S=null,E=new we;E.viewport=new he;let U=new we;U.viewport=new he;let y=[E,U],_=new vo,T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=I[X];return tt===void 0&&(tt=new ns,I[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=I[X];return tt===void 0&&(tt=new ns,I[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=I[X];return tt===void 0&&(tt=new ns,I[X]=tt),tt.getHandSpace()};function z(X){let tt=C.indexOf(X.inputSource);if(tt===-1)return;let At=I[tt];At!==void 0&&(At.update(X.inputSource,X.frame,c||a),At.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Z);for(let X=0;X<I.length;X++){let tt=C[X];tt!==null&&(C[X]=null,I[X].disconnect(tt))}T=null,O=null,A.reset(),t.setRenderTarget(d),g=null,f=null,u=null,s=null,b=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(V),s.renderState.layers===void 0){let tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new Ve(g.framebufferWidth,g.framebufferHeight,{format:Ze,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,At=null,st=null;p.depth&&(st=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?Pi:Mi,At=p.stencil?Ri:ei);let bt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Ve(f.textureWidth,f.textureHeight,{format:Ze,type:_n,depthTexture:new ur(f.textureWidth,f.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function Z(X){for(let tt=0;tt<X.removed.length;tt++){let At=X.removed[tt],st=C.indexOf(At);st>=0&&(C[st]=null,I[st].disconnect(At))}for(let tt=0;tt<X.added.length;tt++){let At=X.added[tt],st=C.indexOf(At);if(st===-1){for(let Tt=0;Tt<I.length;Tt++)if(Tt>=C.length){C.push(At),st=Tt;break}else if(C[Tt]===null){C[Tt]=At,st=Tt;break}if(st===-1)break}let bt=I[st];bt&&bt.connect(At)}}let G=new w,$=new w;function k(X,tt,At){G.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(At.matrixWorld);let st=G.distanceTo($),bt=tt.projectionMatrix.elements,Tt=At.projectionMatrix.elements,Nt=bt[14]/(bt[10]-1),oe=bt[14]/(bt[10]+1),Ht=(bt[9]+1)/bt[5],ue=(bt[9]-1)/bt[5],D=(bt[8]-1)/bt[0],Be=(Tt[8]+1)/Tt[0],zt=Nt*D,Ot=Nt*Be,It=st/(-D+Be),ie=It*-D;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ie),X.translateZ(It),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),bt[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let yt=Nt+It,M=oe+It,x=zt-ie,N=Ot+(st-ie),Y=Ht*oe/M*yt,K=ue*oe/M*yt;X.projectionMatrix.makePerspective(x,N,Y,K,yt,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function it(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let tt=X.near,At=X.far;A.texture!==null&&(A.depthNear>0&&(tt=A.depthNear),A.depthFar>0&&(At=A.depthFar)),_.near=U.near=E.near=tt,_.far=U.far=E.far=At,(T!==_.near||O!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,O=_.far),E.layers.mask=X.layers.mask|2,U.layers.mask=X.layers.mask|4,_.layers.mask=E.layers.mask|U.layers.mask;let st=X.parent,bt=_.cameras;it(_,st);for(let Tt=0;Tt<bt.length;Tt++)it(bt[Tt],st);bt.length===2?k(_,E,U):_.projectionMatrix.copy(E.projectionMatrix),ht(X,_,st)};function ht(X,tt,At){At===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(At.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=so*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(_)};let _t=null;function Dt(X,tt){if(h=tt.getViewerPose(c||a),m=tt,h!==null){let At=h.views;g!==null&&(t.setRenderTargetFramebuffer(b,g.framebuffer),t.setRenderTarget(b));let st=!1;At.length!==_.cameras.length&&(_.cameras.length=0,st=!0);for(let Tt=0;Tt<At.length;Tt++){let Nt=At[Tt],oe=null;if(g!==null)oe=g.getViewport(Nt);else{let ue=u.getViewSubImage(f,Nt);oe=ue.viewport,Tt===0&&(t.setRenderTargetTextures(b,ue.colorTexture,f.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(b))}let Ht=y[Tt];Ht===void 0&&(Ht=new we,Ht.layers.enable(Tt),Ht.viewport=new he,y[Tt]=Ht),Ht.matrix.fromArray(Nt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Nt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(oe.x,oe.y,oe.width,oe.height),Tt===0&&(_.matrix.copy(Ht.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),st===!0&&_.cameras.push(Ht)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){let Tt=u.getDepthInformation(At[0]);Tt&&Tt.isValid&&Tt.texture&&A.init(t,Tt,s.renderState)}}for(let At=0;At<I.length;At++){let st=C[At],bt=I[At];st!==null&&bt!==void 0&&bt.update(st,tt,c||a)}_t&&_t(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}let $t=new jc;$t.setAnimationLoop(Dt),this.setAnimationLoop=function(X){_t=X},this.dispose=function(){}}},Yn=new an,cm=new Qt;function hm(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Yc(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,b,I,C){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&g(p,d,C)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),A(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,b,I):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===be&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===be&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let b=t.get(d),I=b.envMap,C=b.envMapRotation;I&&(p.envMap.value=I,Yn.copy(C),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),p.envMapRotation.value.setFromMatrix4(cm.makeRotationFromEuler(Yn)),p.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,b,I){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=I*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function g(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===be&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function A(p,d){let b=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function um(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,I){let C=I.program;n.uniformBlockBinding(b,C)}function c(b,I){let C=s[b.id];C===void 0&&(m(b),C=h(b),s[b.id]=C,b.addEventListener("dispose",p));let V=I.program;n.updateUBOMapping(b,V);let S=t.render.frame;r[b.id]!==S&&(f(b),r[b.id]=S)}function h(b){let I=u();b.__bindingPointIndex=I;let C=i.createBuffer(),V=b.__size,S=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,V,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,C),C}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let I=s[b.id],C=b.uniforms,V=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let S=0,E=C.length;S<E;S++){let U=Array.isArray(C[S])?C[S]:[C[S]];for(let y=0,_=U.length;y<_;y++){let T=U[y];if(g(T,S,y,V)===!0){let O=T.__offset,z=Array.isArray(T.value)?T.value:[T.value],H=0;for(let Z=0;Z<z.length;Z++){let G=z[Z],$=A(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+H,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(b,I,C,V){let S=b.value,E=I+"_"+C;if(V[E]===void 0)return typeof S=="number"||typeof S=="boolean"?V[E]=S:V[E]=S.clone(),!0;{let U=V[E];if(typeof S=="number"||typeof S=="boolean"){if(U!==S)return V[E]=S,!0}else if(U.equals(S)===!1)return U.copy(S),!0}return!1}function m(b){let I=b.uniforms,C=0,V=16;for(let E=0,U=I.length;E<U;E++){let y=Array.isArray(I[E])?I[E]:[I[E]];for(let _=0,T=y.length;_<T;_++){let O=y[_],z=Array.isArray(O.value)?O.value:[O.value];for(let H=0,Z=z.length;H<Z;H++){let G=z[H],$=A(G),k=C%V,it=k%$.boundary,ht=k+it;C+=it,ht!==0&&V-ht<$.storage&&(C+=V-ht),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=C,C+=$.storage}}}let S=C%V;return S>0&&(C+=V-S),b.__size=C,b.__cache={},this}function A(b){let I={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(I.boundary=4,I.storage=4):b.isVector2?(I.boundary=8,I.storage=8):b.isVector3||b.isColor?(I.boundary=16,I.storage=12):b.isVector4?(I.boundary=16,I.storage=16):b.isMatrix3?(I.boundary=48,I.storage=48):b.isMatrix4?(I.boundary=64,I.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),I}function p(b){let I=b.target;I.removeEventListener("dispose",p);let C=a.indexOf(I.__bindingPointIndex);a.splice(C,1),i.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function d(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var dr=class{constructor(t={}){let{canvas:e=gu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let m=new Uint32Array(4),A=new Int32Array(4),p=null,d=null,b=[],I=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fe,this.toneMapping=Ln,this.toneMappingExposure=1;let C=this,V=!1,S=0,E=0,U=null,y=-1,_=null,T=new he,O=new he,z=null,H=new St(0),Z=0,G=e.width,$=e.height,k=1,it=null,ht=null,_t=new he(0,0,G,$),Dt=new he(0,0,G,$),$t=!1,X=new ls,tt=!1,At=!1,st=new Qt,bt=new Qt,Tt=new w,Nt=new he,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function ue(){return U===null?k:1}let D=n;function Be(v,P){return e.getContext(v,P)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ho}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",at,!1),D===null){let P="webgl2";if(D=Be(P,v),D===null)throw Be(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let zt,Ot,It,ie,yt,M,x,N,Y,K,W,xt,rt,ut,Gt,J,dt,Mt,Et,ft,qt,Lt,ee,R;function nt(){zt=new Ep(D),zt.init(),Lt=new rm(D,zt),Ot=new _p(D,zt,t,Lt),It=new nm(D,zt),Ot.reverseDepthBuffer&&f&&It.buffers.depth.setReversed(!0),ie=new Vp(D),yt=new Hg,M=new sm(D,zt,It,yt,Ot,Lt,ie),x=new Ip(C),N=new Sp(C),Y=new Nu(D),ee=new vp(D,Y),K=new wp(D,Y,ie,ee),W=new Pp(D,K,Y,ie),Et=new Rp(D,Ot,M),J=new yp(yt),xt=new kg(C,x,N,zt,Ot,ee,J),rt=new hm(C,yt),ut=new Wg,Gt=new Jg(zt),Mt=new xp(C,x,N,It,W,g,l),dt=new tm(C,W,Ot),R=new um(D,ie,Ot,It),ft=new Cp(D,zt,ie),qt=new Tp(D,zt,ie),ie.programs=xt.programs,C.capabilities=Ot,C.extensions=zt,C.properties=yt,C.renderLists=ut,C.shadowMap=dt,C.state=It,C.info=ie}nt();let q=new _o(C,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let v=zt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=zt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(v){v!==void 0&&(k=v,this.setSize(G,$,!1))},this.getSize=function(v){return v.set(G,$)},this.setSize=function(v,P,F=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=v,$=P,e.width=Math.floor(v*k),e.height=Math.floor(P*k),F===!0&&(e.style.width=v+"px",e.style.height=P+"px"),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(G*k,$*k).floor()},this.setDrawingBufferSize=function(v,P,F){G=v,$=P,k=F,e.width=Math.floor(v*F),e.height=Math.floor(P*F),this.setViewport(0,0,v,P)},this.getCurrentViewport=function(v){return v.copy(T)},this.getViewport=function(v){return v.copy(_t)},this.setViewport=function(v,P,F,B){v.isVector4?_t.set(v.x,v.y,v.z,v.w):_t.set(v,P,F,B),It.viewport(T.copy(_t).multiplyScalar(k).round())},this.getScissor=function(v){return v.copy(Dt)},this.setScissor=function(v,P,F,B){v.isVector4?Dt.set(v.x,v.y,v.z,v.w):Dt.set(v,P,F,B),It.scissor(O.copy(Dt).multiplyScalar(k).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(v){It.setScissorTest($t=v)},this.setOpaqueSort=function(v){it=v},this.setTransparentSort=function(v){ht=v},this.getClearColor=function(v){return v.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(v=!0,P=!0,F=!0){let B=0;if(v){let L=!1;if(U!==null){let Q=U.texture.format;L=Q===nl||Q===el||Q===tl}if(L){let Q=U.texture.type,ot=Q===_n||Q===ei||Q===as||Q===Ri||Q===Jo||Q===Qo,pt=Mt.getClearColor(),gt=Mt.getClearAlpha(),wt=pt.r,Rt=pt.g,mt=pt.b;ot?(m[0]=wt,m[1]=Rt,m[2]=mt,m[3]=gt,D.clearBufferuiv(D.COLOR,0,m)):(A[0]=wt,A[1]=Rt,A[2]=mt,A[3]=gt,D.clearBufferiv(D.COLOR,0,A))}else B|=D.COLOR_BUFFER_BIT}P&&(B|=D.DEPTH_BUFFER_BIT),F&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ut.dispose(),Gt.dispose(),yt.dispose(),x.dispose(),N.dispose(),W.dispose(),ee.dispose(),R.dispose(),xt.dispose(),q.dispose(),q.removeEventListener("sessionstart",ml),q.removeEventListener("sessionend",Al),qn.stop()};function j(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;let v=ie.autoReset,P=dt.enabled,F=dt.autoUpdate,B=dt.needsUpdate,L=dt.type;nt(),ie.autoReset=v,dt.enabled=P,dt.autoUpdate=F,dt.needsUpdate=B,dt.type=L}function at(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Vt(v){let P=v.target;P.removeEventListener("dispose",Vt),ce(P)}function ce(v){_e(v),yt.remove(v)}function _e(v){let P=yt.get(v).programs;P!==void 0&&(P.forEach(function(F){xt.releaseProgram(F)}),v.isShaderMaterial&&xt.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,F,B,L,Q){P===null&&(P=oe);let ot=L.isMesh&&L.matrixWorld.determinant()<0,pt=Vh(v,P,F,B,L);It.setMaterial(B,ot);let gt=F.index,wt=1;if(B.wireframe===!0){if(gt=K.getWireframeAttribute(F),gt===void 0)return;wt=2}let Rt=F.drawRange,mt=F.attributes.position,Wt=Rt.start*wt,ne=(Rt.start+Rt.count)*wt;Q!==null&&(Wt=Math.max(Wt,Q.start*wt),ne=Math.min(ne,(Q.start+Q.count)*wt)),gt!==null?(Wt=Math.max(Wt,0),ne=Math.min(ne,gt.count)):mt!=null&&(Wt=Math.max(Wt,0),ne=Math.min(ne,mt.count));let se=ne-Wt;if(se<0||se===1/0)return;ee.setup(L,B,pt,F,gt);let Re,Yt=ft;if(gt!==null&&(Re=Y.get(gt),Yt=qt,Yt.setIndex(Re)),L.isMesh)B.wireframe===!0?(It.setLineWidth(B.wireframeLinewidth*ue()),Yt.setMode(D.LINES)):Yt.setMode(D.TRIANGLES);else if(L.isLine){let vt=B.linewidth;vt===void 0&&(vt=1),It.setLineWidth(vt*ue()),L.isLineSegments?Yt.setMode(D.LINES):L.isLineLoop?Yt.setMode(D.LINE_LOOP):Yt.setMode(D.LINE_STRIP)}else L.isPoints?Yt.setMode(D.POINTS):L.isSprite&&Yt.setMode(D.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Yt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let vt=L._multiDrawStarts,un=L._multiDrawCounts,jt=L._multiDrawCount,We=gt?Y.get(gt).bytesPerElement:1,ai=yt.get(B).currentProgram.getUniforms();for(let Le=0;Le<jt;Le++)ai.setValue(D,"_gl_DrawID",Le),Yt.render(vt[Le]/We,un[Le])}else if(L.isInstancedMesh)Yt.renderInstances(Wt,se,L.count);else if(F.isInstancedBufferGeometry){let vt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,un=Math.min(F.instanceCount,vt);Yt.renderInstances(Wt,se,un)}else Yt.render(Wt,se)};function Kt(v,P,F){v.transparent===!0&&v.side===qe&&v.forceSinglePass===!1?(v.side=be,v.needsUpdate=!0,ys(v,P,F),v.side=Un,v.needsUpdate=!0,ys(v,P,F),v.side=qe):ys(v,P,F)}this.compile=function(v,P,F=null){F===null&&(F=v),d=Gt.get(F),d.init(P),I.push(d),F.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),v!==F&&v.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),d.setupLights();let B=new Set;return v.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let Q=L.material;if(Q)if(Array.isArray(Q))for(let ot=0;ot<Q.length;ot++){let pt=Q[ot];Kt(pt,F,L),B.add(pt)}else Kt(Q,F,L),B.add(Q)}),I.pop(),d=null,B},this.compileAsync=function(v,P,F=null){let B=this.compile(v,P,F);return new Promise(L=>{function Q(){if(B.forEach(function(ot){yt.get(ot).currentProgram.isReady()&&B.delete(ot)}),B.size===0){L(v);return}setTimeout(Q,10)}zt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ge=null;function hn(v){Ge&&Ge(v)}function ml(){qn.stop()}function Al(){qn.start()}let qn=new jc;qn.setAnimationLoop(hn),typeof self!="undefined"&&qn.setContext(self),this.setAnimationLoop=function(v){Ge=v,q.setAnimationLoop(v),v===null?qn.stop():qn.start()},q.addEventListener("sessionstart",ml),q.addEventListener("sessionend",Al),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(P),P=q.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,P,U),d=Gt.get(v,I.length),d.init(P),I.push(d),bt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),X.setFromProjectionMatrix(bt),At=this.localClippingEnabled,tt=J.init(this.clippingPlanes,At),p=ut.get(v,b.length),p.init(),b.push(p),q.enabled===!0&&q.isPresenting===!0){let Q=C.xr.getDepthSensingMesh();Q!==null&&zr(Q,P,-1/0,C.sortObjects)}zr(v,P,0,C.sortObjects),p.finish(),C.sortObjects===!0&&p.sort(it,ht),Ht=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ht&&Mt.addToRenderList(p,v),this.info.render.frame++,tt===!0&&J.beginShadows();let F=d.state.shadowsArray;dt.render(F,v,P),tt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=p.opaque,L=p.transmissive;if(d.setupLights(),P.isArrayCamera){let Q=P.cameras;if(L.length>0)for(let ot=0,pt=Q.length;ot<pt;ot++){let gt=Q[ot];vl(B,L,v,gt)}Ht&&Mt.render(v);for(let ot=0,pt=Q.length;ot<pt;ot++){let gt=Q[ot];xl(p,v,gt,gt.viewport)}}else L.length>0&&vl(B,L,v,P),Ht&&Mt.render(v),xl(p,v,P);U!==null&&(M.updateMultisampleRenderTarget(U),M.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(C,v,P),ee.resetDefaultState(),y=-1,_=null,I.pop(),I.length>0?(d=I[I.length-1],tt===!0&&J.setGlobalState(C.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function zr(v,P,F,B){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||X.intersectsSprite(v)){B&&Nt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(bt);let ot=W.update(v),pt=v.material;pt.visible&&p.push(v,ot,pt,F,Nt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||X.intersectsObject(v))){let ot=W.update(v),pt=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Nt.copy(v.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Nt.copy(ot.boundingSphere.center)),Nt.applyMatrix4(v.matrixWorld).applyMatrix4(bt)),Array.isArray(pt)){let gt=ot.groups;for(let wt=0,Rt=gt.length;wt<Rt;wt++){let mt=gt[wt],Wt=pt[mt.materialIndex];Wt&&Wt.visible&&p.push(v,ot,Wt,F,Nt.z,mt)}}else pt.visible&&p.push(v,ot,pt,F,Nt.z,null)}}let Q=v.children;for(let ot=0,pt=Q.length;ot<pt;ot++)zr(Q[ot],P,F,B)}function xl(v,P,F,B){let L=v.opaque,Q=v.transmissive,ot=v.transparent;d.setupLightsView(F),tt===!0&&J.setGlobalState(C.clippingPlanes,F),B&&It.viewport(T.copy(B)),L.length>0&&_s(L,P,F),Q.length>0&&_s(Q,P,F),ot.length>0&&_s(ot,P,F),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function vl(v,P,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[B.id]===void 0&&(d.state.transmissionRenderTarget[B.id]=new Ve(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Qe:_n,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace}));let Q=d.state.transmissionRenderTarget[B.id],ot=B.viewport||T;Q.setSize(ot.z,ot.w);let pt=C.getRenderTarget();C.setRenderTarget(Q),C.getClearColor(H),Z=C.getClearAlpha(),Z<1&&C.setClearColor(16777215,.5),C.clear(),Ht&&Mt.render(F);let gt=C.toneMapping;C.toneMapping=Ln;let wt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),d.setupLightsView(B),tt===!0&&J.setGlobalState(C.clippingPlanes,B),_s(v,F,B),M.updateMultisampleRenderTarget(Q),M.updateRenderTargetMipmap(Q),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let mt=0,Wt=P.length;mt<Wt;mt++){let ne=P[mt],se=ne.object,Re=ne.geometry,Yt=ne.material,vt=ne.group;if(Yt.side===qe&&se.layers.test(B.layers)){let un=Yt.side;Yt.side=be,Yt.needsUpdate=!0,Cl(se,F,B,Re,Yt,vt),Yt.side=un,Yt.needsUpdate=!0,Rt=!0}}Rt===!0&&(M.updateMultisampleRenderTarget(Q),M.updateRenderTargetMipmap(Q))}C.setRenderTarget(pt),C.setClearColor(H,Z),wt!==void 0&&(B.viewport=wt),C.toneMapping=gt}function _s(v,P,F){let B=P.isScene===!0?P.overrideMaterial:null;for(let L=0,Q=v.length;L<Q;L++){let ot=v[L],pt=ot.object,gt=ot.geometry,wt=B===null?ot.material:B,Rt=ot.group;pt.layers.test(F.layers)&&Cl(pt,P,F,gt,wt,Rt)}}function Cl(v,P,F,B,L,Q){v.onBeforeRender(C,P,F,B,L,Q),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),L.onBeforeRender(C,P,F,B,v,Q),L.transparent===!0&&L.side===qe&&L.forceSinglePass===!1?(L.side=be,L.needsUpdate=!0,C.renderBufferDirect(F,P,B,L,v,Q),L.side=Un,L.needsUpdate=!0,C.renderBufferDirect(F,P,B,L,v,Q),L.side=qe):C.renderBufferDirect(F,P,B,L,v,Q),v.onAfterRender(C,P,F,B,L,Q)}function ys(v,P,F){P.isScene!==!0&&(P=oe);let B=yt.get(v),L=d.state.lights,Q=d.state.shadowsArray,ot=L.state.version,pt=xt.getParameters(v,L.state,Q,P,F),gt=xt.getProgramCacheKey(pt),wt=B.programs;B.environment=v.isMeshStandardMaterial?P.environment:null,B.fog=P.fog,B.envMap=(v.isMeshStandardMaterial?N:x).get(v.envMap||B.environment),B.envMapRotation=B.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,wt===void 0&&(v.addEventListener("dispose",Vt),wt=new Map,B.programs=wt);let Rt=wt.get(gt);if(Rt!==void 0){if(B.currentProgram===Rt&&B.lightsStateVersion===ot)return yl(v,pt),Rt}else pt.uniforms=xt.getUniforms(v),v.onBeforeCompile(pt,C),Rt=xt.acquireProgram(pt,gt),wt.set(gt,Rt),B.uniforms=pt.uniforms;let mt=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(mt.clippingPlanes=J.uniform),yl(v,pt),B.needsLights=Ph(v),B.lightsStateVersion=ot,B.needsLights&&(mt.ambientLightColor.value=L.state.ambient,mt.lightProbe.value=L.state.probe,mt.directionalLights.value=L.state.directional,mt.directionalLightShadows.value=L.state.directionalShadow,mt.spotLights.value=L.state.spot,mt.spotLightShadows.value=L.state.spotShadow,mt.rectAreaLights.value=L.state.rectArea,mt.ltc_1.value=L.state.rectAreaLTC1,mt.ltc_2.value=L.state.rectAreaLTC2,mt.pointLights.value=L.state.point,mt.pointLightShadows.value=L.state.pointShadow,mt.hemisphereLights.value=L.state.hemi,mt.directionalShadowMap.value=L.state.directionalShadowMap,mt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,mt.spotShadowMap.value=L.state.spotShadowMap,mt.spotLightMatrix.value=L.state.spotLightMatrix,mt.spotLightMap.value=L.state.spotLightMap,mt.pointShadowMap.value=L.state.pointShadowMap,mt.pointShadowMatrix.value=L.state.pointShadowMatrix),B.currentProgram=Rt,B.uniformsList=null,Rt}function _l(v){if(v.uniformsList===null){let P=v.currentProgram.getUniforms();v.uniformsList=Si.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function yl(v,P){let F=yt.get(v);F.outputColorSpace=P.outputColorSpace,F.batching=P.batching,F.batchingColor=P.batchingColor,F.instancing=P.instancing,F.instancingColor=P.instancingColor,F.instancingMorph=P.instancingMorph,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function Vh(v,P,F,B,L){P.isScene!==!0&&(P=oe),M.resetTextureUnits();let Q=P.fog,ot=B.isMeshStandardMaterial?P.environment:null,pt=U===null?C.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Oi,gt=(B.isMeshStandardMaterial?N:x).get(B.envMap||ot),wt=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Rt=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),mt=!!F.morphAttributes.position,Wt=!!F.morphAttributes.normal,ne=!!F.morphAttributes.color,se=Ln;B.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(se=C.toneMapping);let Re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Yt=Re!==void 0?Re.length:0,vt=yt.get(B),un=d.state.lights;if(tt===!0&&(At===!0||v!==_)){let ze=v===_&&B.id===y;J.setState(B,v,ze)}let jt=!1;B.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==un.state.version||vt.outputColorSpace!==pt||L.isBatchedMesh&&vt.batching===!1||!L.isBatchedMesh&&vt.batching===!0||L.isBatchedMesh&&vt.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&vt.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&vt.instancing===!1||!L.isInstancedMesh&&vt.instancing===!0||L.isSkinnedMesh&&vt.skinning===!1||!L.isSkinnedMesh&&vt.skinning===!0||L.isInstancedMesh&&vt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&vt.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&vt.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&vt.instancingMorph===!1&&L.morphTexture!==null||vt.envMap!==gt||B.fog===!0&&vt.fog!==Q||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==J.numPlanes||vt.numIntersection!==J.numIntersection)||vt.vertexAlphas!==wt||vt.vertexTangents!==Rt||vt.morphTargets!==mt||vt.morphNormals!==Wt||vt.morphColors!==ne||vt.toneMapping!==se||vt.morphTargetsCount!==Yt)&&(jt=!0):(jt=!0,vt.__version=B.version);let We=vt.currentProgram;jt===!0&&(We=ys(B,P,L));let ai=!1,Le=!1,Wi=!1,re=We.getUniforms(),$e=vt.uniforms;if(It.useProgram(We.program)&&(ai=!0,Le=!0,Wi=!0),B.id!==y&&(y=B.id,Le=!0),ai||_!==v){It.buffers.depth.getReversed()?(st.copy(v.projectionMatrix),Au(st),xu(st),re.setValue(D,"projectionMatrix",st)):re.setValue(D,"projectionMatrix",v.projectionMatrix),re.setValue(D,"viewMatrix",v.matrixWorldInverse);let Mn=re.map.cameraPosition;Mn!==void 0&&Mn.setValue(D,Tt.setFromMatrixPosition(v.matrixWorld)),Ot.logarithmicDepthBuffer&&re.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&re.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),_!==v&&(_=v,Le=!0,Wi=!0)}if(L.isSkinnedMesh){re.setOptional(D,L,"bindMatrix"),re.setOptional(D,L,"bindMatrixInverse");let ze=L.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),re.setValue(D,"boneTexture",ze.boneTexture,M))}L.isBatchedMesh&&(re.setOptional(D,L,"batchingTexture"),re.setValue(D,"batchingTexture",L._matricesTexture,M),re.setOptional(D,L,"batchingIdTexture"),re.setValue(D,"batchingIdTexture",L._indirectTexture,M),re.setOptional(D,L,"batchingColorTexture"),L._colorsTexture!==null&&re.setValue(D,"batchingColorTexture",L._colorsTexture,M));let Xi=F.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&Et.update(L,F,We),(Le||vt.receiveShadow!==L.receiveShadow)&&(vt.receiveShadow=L.receiveShadow,re.setValue(D,"receiveShadow",L.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&($e.envMap.value=gt,$e.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&P.environment!==null&&($e.envMapIntensity.value=P.environmentIntensity),Le&&(re.setValue(D,"toneMappingExposure",C.toneMappingExposure),vt.needsLights&&Rh($e,Wi),Q&&B.fog===!0&&rt.refreshFogUniforms($e,Q),rt.refreshMaterialUniforms($e,B,k,$,d.state.transmissionRenderTarget[v.id]),Si.upload(D,_l(vt),$e,M)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Si.upload(D,_l(vt),$e,M),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&re.setValue(D,"center",L.center),re.setValue(D,"modelViewMatrix",L.modelViewMatrix),re.setValue(D,"normalMatrix",L.normalMatrix),re.setValue(D,"modelMatrix",L.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let ze=B.uniformsGroups;for(let Mn=0,bn=ze.length;Mn<bn;Mn++){let Il=ze[Mn];R.update(Il,We),R.bind(Il,We)}}return We}function Rh(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function Ph(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,P,F){yt.get(v.texture).__webglTexture=P,yt.get(v.depthTexture).__webglTexture=F;let B=yt.get(v);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,P){let F=yt.get(v);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,F=0){U=v,S=P,E=F;let B=!0,L=null,Q=!1,ot=!1;if(v){let gt=yt.get(v);if(gt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(D.FRAMEBUFFER,null),B=!1;else if(gt.__webglFramebuffer===void 0)M.setupRenderTarget(v);else if(gt.__hasExternalTextures)M.rebindTextures(v,yt.get(v.texture).__webglTexture,yt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let mt=v.depthTexture;if(gt.__boundDepthTexture!==mt){if(mt!==null&&yt.has(mt)&&(v.width!==mt.image.width||v.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(v)}}let wt=v.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(ot=!0);let Rt=yt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Rt[P])?L=Rt[P][F]:L=Rt[P],Q=!0):v.samples>0&&M.useMultisampledRTT(v)===!1?L=yt.get(v).__webglMultisampledFramebuffer:Array.isArray(Rt)?L=Rt[F]:L=Rt,T.copy(v.viewport),O.copy(v.scissor),z=v.scissorTest}else T.copy(_t).multiplyScalar(k).floor(),O.copy(Dt).multiplyScalar(k).floor(),z=$t;if(It.bindFramebuffer(D.FRAMEBUFFER,L)&&B&&It.drawBuffers(v,L),It.viewport(T),It.scissor(O),It.setScissorTest(z),Q){let gt=yt.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,gt.__webglTexture,F)}else if(ot){let gt=yt.get(v.texture),wt=P||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,gt.__webglTexture,F||0,wt)}y=-1},this.readRenderTargetPixels=function(v,P,F,B,L,Q,ot){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=yt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt){It.bindFramebuffer(D.FRAMEBUFFER,pt);try{let gt=v.texture,wt=gt.format,Rt=gt.type;if(!Ot.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-B&&F>=0&&F<=v.height-L&&D.readPixels(P,F,B,L,Lt.convert(wt),Lt.convert(Rt),Q)}finally{let gt=U!==null?yt.get(U).__webglFramebuffer:null;It.bindFramebuffer(D.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(v,P,F,B,L,Q,ot){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=yt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt){let gt=v.texture,wt=gt.format,Rt=gt.type;if(!Ot.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=v.width-B&&F>=0&&F<=v.height-L){It.bindFramebuffer(D.FRAMEBUFFER,pt);let mt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,mt),D.bufferData(D.PIXEL_PACK_BUFFER,Q.byteLength,D.STREAM_READ),D.readPixels(P,F,B,L,Lt.convert(wt),Lt.convert(Rt),0);let Wt=U!==null?yt.get(U).__webglFramebuffer:null;It.bindFramebuffer(D.FRAMEBUFFER,Wt);let ne=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await mu(D,ne,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,mt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Q),D.deleteBuffer(mt),D.deleteSync(ne),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,P=null,F=0){v.isTexture!==!0&&(ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,v=arguments[1]);let B=Math.pow(2,-F),L=Math.floor(v.image.width*B),Q=Math.floor(v.image.height*B),ot=P!==null?P.x:0,pt=P!==null?P.y:0;M.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,ot,pt,L,Q),It.unbindTexture()},this.copyTextureToTexture=function(v,P,F=null,B=null,L=0){v.isTexture!==!0&&(ts("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,v=arguments[1],P=arguments[2],L=arguments[3]||0,F=null);let Q,ot,pt,gt,wt,Rt,mt,Wt,ne,se=v.isCompressedTexture?v.mipmaps[L]:v.image;F!==null?(Q=F.max.x-F.min.x,ot=F.max.y-F.min.y,pt=F.isBox3?F.max.z-F.min.z:1,gt=F.min.x,wt=F.min.y,Rt=F.isBox3?F.min.z:0):(Q=se.width,ot=se.height,pt=se.depth||1,gt=0,wt=0,Rt=0),B!==null?(mt=B.x,Wt=B.y,ne=B.z):(mt=0,Wt=0,ne=0);let Re=Lt.convert(P.format),Yt=Lt.convert(P.type),vt;P.isData3DTexture?(M.setTexture3D(P,0),vt=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(M.setTexture2DArray(P,0),vt=D.TEXTURE_2D_ARRAY):(M.setTexture2D(P,0),vt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);let un=D.getParameter(D.UNPACK_ROW_LENGTH),jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),We=D.getParameter(D.UNPACK_SKIP_PIXELS),ai=D.getParameter(D.UNPACK_SKIP_ROWS),Le=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,se.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,se.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,gt),D.pixelStorei(D.UNPACK_SKIP_ROWS,wt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rt);let Wi=v.isDataArrayTexture||v.isData3DTexture,re=P.isDataArrayTexture||P.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){let $e=yt.get(v),Xi=yt.get(P),ze=yt.get($e.__renderTarget),Mn=yt.get(Xi.__renderTarget);It.bindFramebuffer(D.READ_FRAMEBUFFER,ze.__webglFramebuffer),It.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let bn=0;bn<pt;bn++)Wi&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(v).__webglTexture,L,Rt+bn),v.isDepthTexture?(re&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(P).__webglTexture,L,ne+bn),D.blitFramebuffer(gt,wt,Q,ot,mt,Wt,Q,ot,D.DEPTH_BUFFER_BIT,D.NEAREST)):re?D.copyTexSubImage3D(vt,L,mt,Wt,ne+bn,gt,wt,Q,ot):D.copyTexSubImage2D(vt,L,mt,Wt,ne+bn,gt,wt,Q,ot);It.bindFramebuffer(D.READ_FRAMEBUFFER,null),It.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else re?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(vt,L,mt,Wt,ne,Q,ot,pt,Re,Yt,se.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(vt,L,mt,Wt,ne,Q,ot,pt,Re,se.data):D.texSubImage3D(vt,L,mt,Wt,ne,Q,ot,pt,Re,Yt,se):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,L,mt,Wt,Q,ot,Re,Yt,se.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,L,mt,Wt,se.width,se.height,Re,se.data):D.texSubImage2D(D.TEXTURE_2D,L,mt,Wt,Q,ot,Re,Yt,se);D.pixelStorei(D.UNPACK_ROW_LENGTH,un),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,We),D.pixelStorei(D.UNPACK_SKIP_ROWS,ai),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le),L===0&&P.generateMipmaps&&D.generateMipmap(vt),It.unbindTexture()},this.copyTextureToTexture3D=function(v,P,F=null,B=null,L=0){return v.isTexture!==!0&&(ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,B=arguments[1]||null,v=arguments[2],P=arguments[3],L=arguments[4]||0),ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,P,F,B,L)},this.initRenderTarget=function(v){yt.get(v).__webglFramebuffer===void 0&&M.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?M.setTextureCube(v,0):v.isData3DTexture?M.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?M.setTexture2DArray(v,0):M.setTexture2D(v,0),It.unbindTexture()},this.resetState=function(){S=0,E=0,U=null,It.reset(),ee.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Bt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Bt._getUnpackColorSpace()}};var fr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new St(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},pr=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var yo=class extends Te{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ne,h=Ne,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gr=class extends ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},_i=new Qt,Ic=new Qt,Gs=[],Mc=new yn,dm=new Qt,Qi=new Xt,$i=new Nn,mr=class extends Xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_i),Mc.copy(t.boundingBox).applyMatrix4(_i),this.boundingBox.union(Mc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_i),$i.copy(t.boundingSphere).applyMatrix4(_i),this.boundingSphere.union($i)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Qi.geometry=this.geometry,Qi.material=this.material,Qi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$i.copy(this.boundingSphere),$i.applyMatrix4(n),t.ray.intersectsSphere($i)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_i),Ic.multiplyMatrices(n,_i),Qi.matrixWorld=Ic,Qi.raycast(t,Gs);for(let a=0,o=Gs.length;a<o;a++){let l=Gs[a];l.instanceId=r,l.object=this,e.push(l)}Gs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yo(new Float32Array(s*this.count),s,this.count,$o,nn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ii=class extends Fn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},bc=new Qt,Io=new sr,Ws=new Nn,Xs=new w,Di=class extends Se{constructor(t=new pe,e=new ii){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(s),Ws.radius+=r,t.ray.intersectsSphere(Ws)===!1)return;bc.copy(s).invert(),Io.copy(t.ray).applyMatrix4(bc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let m=f,A=g;m<A;m++){let p=c.getX(m);Xs.fromBufferAttribute(u,p),Sc(Xs,p,l,s,t,e,this)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let m=f,A=g;m<A;m++)Xs.fromBufferAttribute(u,m),Sc(Xs,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Sc(i,t,e,n,s,r,a){let o=Io.distanceSqToPoint(i);if(o<e){let l=new w;Io.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ln=class extends Te{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ke=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,g=(a-h)/f;return(s+g)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ct:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new w,s=[],r=[],a=[],o=new w,l=new Qt;for(let g=0;g<=t;g++){let m=g/t;s[g]=this.getTangentAt(m,new w)}r[0]=new w,a[0]=new w;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),a[g]=a[g-1].clone(),o.crossVectors(s[g-1],s[g]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Me(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(o,m))}a[g].crossVectors(s[g],r[g])}if(e===!0){let g=Math.acos(Me(r[0].dot(r[t]),-1,1));g/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(g=-g);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],g*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ar=class extends Ke{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,g=c-this.aY;l=f*h-g*u+this.aX,c=f*u+g*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Mo=class extends Ar{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function sl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,g=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,g*=h,s(a,o,f,g)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Ys=new w,ma=new sl,Aa=new sl,xa=new sl,cs=class extends Ke{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new w){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ys.subVectors(s[0],s[1]).add(s[0]),c=Ys);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ys.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ys),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),g),A=Math.pow(u.distanceToSquared(f),g),p=Math.pow(f.distanceToSquared(h),g);A<1e-4&&(A=1),m<1e-4&&(m=A),p<1e-4&&(p=A),ma.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,A,p),Aa.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,A,p),xa.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,A,p)}else this.curveType==="catmullrom"&&(ma.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Aa.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),xa.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ma.calc(l),Aa.calc(l),xa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ec(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function fm(i,t){let e=1-i;return e*e*t}function pm(i,t){return 2*(1-i)*i*t}function gm(i,t){return i*i*t}function is(i,t,e,n){return fm(i,t)+pm(i,e)+gm(i,n)}function mm(i,t){let e=1-i;return e*e*e*t}function Am(i,t){let e=1-i;return 3*e*e*i*t}function xm(i,t){return 3*(1-i)*i*i*t}function vm(i,t){return i*i*i*t}function ss(i,t,e,n,s){return mm(i,t)+Am(i,e)+xm(i,n)+vm(i,s)}var bo=class extends Ke{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ss(t,s.x,r.x,a.x,o.x),ss(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},So=class extends Ke{constructor(t=new w,e=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new w){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ss(t,s.x,r.x,a.x,o.x),ss(t,s.y,r.y,a.y,o.y),ss(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Eo=class extends Ke{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wo=class extends Ke{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},To=class extends Ke{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(is(t,s.x,r.x,a.x),is(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xr=class extends Ke{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(is(t,s.x,r.x,a.x),is(t,s.y,r.y,a.y),is(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vo=class extends Ke{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Ec(o,l.x,c.x,h.x,u.x),Ec(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},Cm=Object.freeze({__proto__:null,ArcCurve:Mo,CatmullRomCurve3:cs,CubicBezierCurve:bo,CubicBezierCurve3:So,EllipseCurve:Ar,LineCurve:Eo,LineCurve3:wo,QuadraticBezierCurve:To,QuadraticBezierCurve3:xr,SplineCurve:Vo});var Ni=class i extends pe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],g=[],m=0,A=[],p=n/2,d=0;b(),a===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(g,2));function b(){let C=new w,V=new w,S=0,E=(e-t)/n;for(let U=0;U<=r;U++){let y=[],_=U/r,T=_*(e-t)+t;for(let O=0;O<=s;O++){let z=O/s,H=z*l+o,Z=Math.sin(H),G=Math.cos(H);V.x=T*Z,V.y=-_*n+p,V.z=T*G,u.push(V.x,V.y,V.z),C.set(Z,E,G).normalize(),f.push(C.x,C.y,C.z),g.push(z,1-_),y.push(m++)}A.push(y)}for(let U=0;U<s;U++)for(let y=0;y<r;y++){let _=A[y][U],T=A[y+1][U],O=A[y+1][U+1],z=A[y][U+1];(t>0||y!==0)&&(h.push(_,T,z),S+=3),(e>0||y!==r-1)&&(h.push(T,O,z),S+=3)}c.addGroup(d,S,0),d+=S}function I(C){let V=m,S=new ct,E=new w,U=0,y=C===!0?t:e,_=C===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,p*_,0),f.push(0,_,0),g.push(.5,.5),m++;let T=m;for(let O=0;O<=s;O++){let H=O/s*l+o,Z=Math.cos(H),G=Math.sin(H);E.x=y*G,E.y=p*_,E.z=y*Z,u.push(E.x,E.y,E.z),f.push(0,_,0),S.x=Z*.5+.5,S.y=G*.5*_+.5,g.push(S.x,S.y),m++}for(let O=0;O<s;O++){let z=V+O,H=T+O;C===!0?h.push(H,H+1,z):h.push(H+1,H,z),U+=3}c.addGroup(d,U,C===!0?1:2),d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var vr=class i extends pe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/s,g=new w,m=new ct;for(let A=0;A<=s;A++){for(let p=0;p<=n;p++){let d=r+p/n*a;g.x=u*Math.cos(d),g.y=u*Math.sin(d),l.push(g.x,g.y,g.z),c.push(0,0,1),m.x=(g.x/e+1)/2,m.y=(g.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let A=0;A<s;A++){let p=A*(n+1);for(let d=0;d<n;d++){let b=d+p,I=b,C=b+n+1,V=b+n+2,S=b+1;o.push(I,C,S),o.push(C,V,S)}}this.setIndex(o),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var hs=class i extends pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new w,f=new w,g=[],m=[],A=[],p=[];for(let d=0;d<=n;d++){let b=[],I=d/n,C=0;d===0&&a===0?C=.5/e:d===n&&l===Math.PI&&(C=-.5/e);for(let V=0;V<=e;V++){let S=V/e;u.x=-t*Math.cos(s+S*r)*Math.sin(a+I*o),u.y=t*Math.cos(a+I*o),u.z=t*Math.sin(s+S*r)*Math.sin(a+I*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),A.push(f.x,f.y,f.z),p.push(S+C,1-I),b.push(c++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<e;b++){let I=h[d][b+1],C=h[d][b],V=h[d+1][b],S=h[d+1][b+1];(d!==0||a>0)&&g.push(I,C,S),(d!==n-1||l<Math.PI)&&g.push(C,V,S)}this.setIndex(g),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(A,3)),this.setAttribute("uv",new te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Fi=class i extends pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new w,u=new w,f=new w;for(let g=0;g<=n;g++)for(let m=0;m<=s;m++){let A=m/s*r,p=g/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(A),u.y=(t+e*Math.cos(p))*Math.sin(A),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(A),h.y=t*Math.sin(A),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(g/n)}for(let g=1;g<=n;g++)for(let m=1;m<=s;m++){let A=(s+1)*g+m-1,p=(s+1)*(g-1)+m-1,d=(s+1)*(g-1)+m,b=(s+1)*g+m;a.push(A,p,b),a.push(p,d,b)}this.setIndex(a),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var us=class i extends pe{constructor(t=new xr(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new w,l=new w,c=new ct,h=new w,u=[],f=[],g=[],m=[];A(),this.setIndex(m),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(g,2));function A(){for(let I=0;I<e;I++)p(I);p(r===!1?e:0),b(),d()}function p(I){h=t.getPointAt(I/e,h);let C=a.normals[I],V=a.binormals[I];for(let S=0;S<=s;S++){let E=S/s*Math.PI*2,U=Math.sin(E),y=-Math.cos(E);l.x=y*C.x+U*V.x,l.y=y*C.y+U*V.y,l.z=y*C.z+U*V.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function d(){for(let I=1;I<=e;I++)for(let C=1;C<=s;C++){let V=(s+1)*(I-1)+(C-1),S=(s+1)*I+(C-1),E=(s+1)*I+C,U=(s+1)*(I-1)+C;m.push(V,S,U),m.push(S,E,U)}}function b(){for(let I=0;I<=e;I++)for(let C=0;C<=s;C++)c.x=I/e,c.y=C/s,g.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Cm[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Cr=class extends ge{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};var In=class extends Fn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function js(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function _m(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Bi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ro=class extends Bi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case wl:r=t,o=2*e-n;break;case Tl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wl:a=t,l=2*n-e;break;case Tl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,g=this._weightNext,m=(n-e)/(s-e),A=m*m,p=A*m,d=-f*p+2*f*A-f*m,b=(1+f)*p+(-1.5-2*f)*A+(-.5+f)*m+1,I=(-1-g)*p+(1.5+g)*A+.5*m,C=g*p-g*A;for(let V=0;V!==o;++V)r[V]=d*a[h+V]+b*a[c+V]+I*a[l+V]+C*a[u+V];return r}},Po=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Lo=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Je=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=js(e,this.TimeBufferType),this.values=js(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:js(t.times,Array),values:js(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ro(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case tr:e=this.InterpolantFactoryMethodDiscrete;break;case io:e=this.InterpolantFactoryMethodLinear;break;case qr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return io;case this.InterpolantFactoryMethodSmooth:return qr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&_m(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,f=u-n,g=u+n;for(let m=0;m!==n;++m){let A=e[u+m];if(A!==e[f+m]||A!==e[g+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let g=0;g!==n;++g)e[f+g]=e[u+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Je.prototype.TimeBufferType=Float32Array;Je.prototype.ValueBufferType=Float32Array;Je.prototype.DefaultInterpolation=io;var si=class extends Je{constructor(t,e,n){super(t,e,n)}};si.prototype.ValueTypeName="bool";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=tr;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var Uo=class extends Je{};Uo.prototype.ValueTypeName="color";var Do=class extends Je{};Do.prototype.ValueTypeName="number";var No=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)rn.slerpFlat(r,0,a,c-o,a,c,l);return r}},_r=class extends Je{InterpolantFactoryMethodLinear(t){return new No(this.times,this.values,this.getValueSize(),t)}};_r.prototype.ValueTypeName="quaternion";_r.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends Je{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="string";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=tr;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends Je{};Fo.prototype.ValueTypeName="vector";var wc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Bo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let g=c[u],m=c[u+1];if(g.global&&(g.lastIndex=0),g.test(h))return m}return null}}},ym=new Bo,ds=class{constructor(t){this.manager=t!==void 0?t:ym,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ds.DEFAULT_MATERIAL_NAME="__DEFAULT";var zo=class extends ds{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=wc.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=os("img");function l(){h(),wc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var yr=class extends ds{constructor(t){super(t)}load(t,e,n,s){let r=new Te,a=new zo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Ir=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Mr=class extends Ir{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},va=new Qt,Tc=new w,Vc=new w,Oo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ls,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tc),Vc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vc),e.updateMatrixWorld(),va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(va)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var qo=class extends Oo{constructor(){super(new Ui(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},br=class extends Ir{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new qo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var zi=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Rc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Rc(){return performance.now()}var rl="\\[\\]\\.:\\/",Im=new RegExp("["+rl+"]","g"),al="[^"+rl+"]",Mm="[^"+rl.replace("\\.","")+"]",bm=/((?:WC+[\/:])*)/.source.replace("WC",al),Sm=/(WCOD+)?/.source.replace("WCOD",Mm),Em=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",al),wm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",al),Tm=new RegExp("^"+bm+Sm+Em+wm+"$"),Vm=["material","materials","bones","map"],ko=class{constructor(t,e,n){let s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Im,"")}static parseTrackName(t){let e=Tm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=ko;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qm=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ho}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ho);var cn=[{id:1,ar:"\u0623\u0643\u0648\u0627 \u0628\u0627\u0631\u0643",en:"Aqua Park",swimmers:12,qualify:8,len:250,bpm:100,bumpers:10,noodles:1,walls:1,waves:1,slides:1},{id:2,ar:"\u062F\u0631\u064A\u0645 \u0628\u0627\u0631\u0643",en:"Dream Park",swimmers:10,qualify:6,len:280,bpm:104,bumpers:10,noodles:3,walls:2,waves:1,slides:1},{id:3,ar:"\u0628\u062D\u064A\u0631\u0629 \u0642\u0627\u0631\u0648\u0646",en:"Qarun Lake",swimmers:8,qualify:4,len:300,bpm:108,bumpers:12,noodles:3,walls:3,waves:2,slides:2},{id:4,ar:"\u0639\u064A\u0648\u0646 \u0645\u0648\u0633\u0649",en:"Moses Springs",swimmers:8,qualify:4,len:310,bpm:110,bumpers:12,noodles:3,walls:3,waves:2,slides:2},{id:5,ar:"\u062C\u0632\u064A\u0631\u0629 \u0623\u0633\u0648\u0627\u0646",en:"Aswan Island",swimmers:7,qualify:3,len:320,bpm:112,bumpers:14,noodles:4,walls:3,waves:2,slides:2},{id:6,ar:"\u0646\u0647\u0627\u0626\u064A \u0627\u0644\u0623\u0628\u0637\u0627\u0644",en:"Champions Final",swimmers:6,qualify:1,len:340,bpm:114,bumpers:14,noodles:4,walls:3,waves:3,slides:2}],Rm=[{kind:"otter",ar:"\u0623\u0646\u062A",en:"You",cap:2799816},{kind:"penguin",ar:"\u0628\u0637\u0631\u064A\u0642",en:"Pingo",cap:15217706},{kind:"beaver",ar:"\u0642\u0646\u062F\u0633",en:"Benny",cap:16765498},{kind:"seal",ar:"\u0641\u0642\u0645\u0629",en:"Sealy",cap:16743096},{kind:"duck",ar:"\u0628\u0637\u0651\u0648\u0637\u0629",en:"Ducky",cap:9059048},{kind:"otter",ar:"\u0642\u0636\u0627\u0639\u0629",en:"Ollie",cap:3852394},{kind:"penguin",ar:"\u0628\u0646\u062C\u0648",en:"Peppy",cap:16747050},{kind:"beaver",ar:"\u0628\u0648\u0628\u0648",en:"Bobo",cap:2779880},{kind:"seal",ar:"\u0633\u064A\u0644\u0648",en:"Silo",cap:16777215},{kind:"duck",ar:"\u062F\u0648\u062F\u0648",en:"Dodo",cap:15217706},{kind:"otter",ar:"\u062A\u064A\u062A\u0648",en:"Tito",cap:16765498},{kind:"penguin",ar:"\u0628\u064A\u0628\u0648",en:"Bibo",cap:2799816}];function Pm(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var gs=(i,t,e)=>i<t?t:i>e?e:i;function Lm(i,t){let e=i.len,n={bumpers:[],noodles:[],walls:[],waves:[],slides:[]},s=[],r=(o,l=9)=>s.every(c=>Math.abs(c-o)>l),a=(o,l,c=18,h=e-15)=>{for(let u=0,f=0;u<l&&f<300;f++){let g=c+t()*(h-c);r(g)&&(s.push(g),o(g),u++)}};a(o=>n.walls.push({s:o,x0:t()<.5?-7:-3,x1:t()<.5?7:3}),i.walls,30),a(o=>n.noodles.push({s:o,x:(t()*2-1)*3,len:4.2,w:(t()<.5?1:-1)*(1.2+t()*.5),a:t()*6}),i.noodles,25),a(o=>n.waves.push({s:o,len:14}),i.waves,20),a(o=>n.slides.push({s:o,side:t()<.5?-1:1,len:26}),i.slides,25,e-45);for(let o=0;o<i.bumpers;o++){let l=14+t()*(e-30);n.bumpers.push({s:l,x:(t()*2-1)*(7-1.5),r:.9})}return n}var Tr=class{constructor(t={}){var n,s;this.round=cn[(n=t.round)!=null?n:0],this.easy=!!t.easy,this.rand=Pm((s=t.seed)!=null?s:6),this.course=Lm(this.round,this.rand),this.beat=60/this.round.bpm,this.time=0,this.state="start",this.countT=3,this.events=[],this.finished=0;let e=this.round.swimmers;this.swimmers=Rm.slice(0,e).map((r,a)=>({id:a,...r,x:(a-(e-1)/2)*((7*2-2)/e),s:0,y:0,v:0,air:0,dive:!1,breath:1,stun:0,slide:null,done:!1,place:0,isPlayer:a===0,skill:.45+this.rand()*.38+this.round.id*.015,next:0,lane:0,lastStroke:-9})),this.player=this.swimmers[0],this.perfects=0,this.bonks=0}beatOffset(t=this.time){let e=t/this.beat;return(e-Math.round(e))*this.beat}stroke(t=this.player){if(this.state!=="race"||t.done||t.stun>0||t.slide||t.air>0||this.time-t.lastStroke<this.beat*.45)return null;t.lastStroke=this.time;let e=Math.abs(this.beatOffset()),n=e<=.1?"perfect":e<=.2?"good":"off";if(t.v=Math.min(10,t.v+(n==="perfect"?2.3:n==="good"?1.5:.45)*(t.dive?.7:1)),t.isPlayer&&n==="perfect"&&this.perfects++,n!=="off"&&!t.dive)for(let s of this.course.walls){let r=s.s-t.s;if(r>0&&r<4.5&&t.x>s.x0-.5&&t.x<s.x1+.5){t.air=.9,t.v=Math.max(t.v,5.5),this.events.push({type:"leap",id:t.id});break}}return this.events.push({type:"stroke",id:t.id,grade:n}),n}setDive(t,e=this.player){let n=!!t&&e.breath>.05&&e.air<=0&&!e.slide&&this.state==="race";t&&e.dive&&!n&&e.breath<=.05&&e.isPlayer&&this.events.push({type:"breath"}),e.dive=n}step(t,e={}){var s;if(this.events=[],this.state==="done")return this.events;if(this.state==="start"){let r=Math.ceil(this.countT);if(this.countT-=t,Math.ceil(this.countT)!==r&&this.countT>0&&this.events.push({type:"count",n:Math.ceil(this.countT)}),this.countT<=0){this.state="race",this.events.push({type:"go"});for(let a of this.swimmers)a.v=2.3}return this.events}let n=Math.floor(this.time/this.beat+.5);this.time+=t,Math.floor(this.time/this.beat+.5)!==n&&this.events.push({type:"beat"});for(let r of this.course.noodles)r.a+=r.w*t;for(let r of this.swimmers){if(r.done){r.s+=r.v*t,r.v=Math.max(1,r.v-t*2);continue}r.isPlayer?(this.setDive(!!e.dive,r),this._swim(r,gs((s=e.x)!=null?s:0,-1,1),t)):this._swim(r,this._ai(r,t),t)}return this._contacts(),this._places(),this.events}_swim(t,e,n){if(t.stun=Math.max(0,t.stun-n),t.dive?(t.breath=Math.max(0,t.breath-n*.28),t.breath<=0&&(t.dive=!1,t.isPlayer&&this.events.push({type:"breath"}))):t.breath=Math.min(1,t.breath+n*.32),t.slide){let a=t.slide;a.t+=n;let o=Math.min(1,a.t/1.3);t.s=a.s0+(a.s1-a.s0)*o,t.x=a.side*(7+1.5-Math.sin(o*Math.PI)*.5),t.y=1.5*(1-o),o>=1&&(t.slide=null,t.x=a.side*6,t.y=0,t.v=7,this.events.push({type:"splash",id:t.id,x:t.x,s:t.s}));return}t.air=Math.max(0,t.air-n),t.y=t.air>0?Math.sin((1-t.air/.9)*Math.PI)*1.4:t.dive?-.8:0;let s=!t.dive&&this.course.waves.some(a=>t.s>a.s&&t.s<a.s+a.len),r=2.3*(this.easy&&t.isPlayer?1.25:1)+(s?3:0);t.v+=(r-t.v)*Math.min(1,n*(t.v>r?.5:1.2)),t.stun>0&&(t.v=Math.min(t.v,1.2)),t.s+=t.v*n,t.x=gs(t.x+e*3.4*n*(t.stun>0?.3:1),-7+.5,7-.5),this._obstacles(t),t.s>=this.round.len&&this._finish(t)}_bonk(t,e,n){t.stun>0||(t.stun=.7,t.v=.6,t.x=gs(t.x+n*.8,-7+.5,7-.5),t.isPlayer&&this.bonks++,this.events.push({type:"bonk",id:t.id,why:e,x:t.x,s:t.s}))}_obstacles(t){let e=this.course;for(let n of e.bumpers)Math.hypot(t.x-n.x,t.s-n.s)<n.r+.45&&t.air<=0&&this._bonk(t,"bumper",Math.sign(t.x-n.x)||1);for(let n of e.noodles){if(Math.abs(t.s-n.s)>n.len+1||t.dive||t.air>0)continue;let s=n.x+Math.cos(n.a)*n.len,r=n.s+Math.sin(n.a)*n.len;Um(n.x,n.s,s,r,t.x,t.s)<.55&&this._bonk(t,"noodle",Math.sign(t.x-n.x)||1)}for(let n of e.walls)t.air>0||t.s<n.s-.6||t.s>n.s+.2||t.x<n.x0-.3||t.x>n.x1+.3||(t.s=n.s-.7,this._bonk(t,"wall",0));for(let n of e.slides)Math.abs(t.s-n.s)<2.2&&t.x*n.side>7-1.3&&!t.slide&&t.air<=0&&!t.dive&&(t.slide={s0:t.s,s1:t.s+n.len,side:n.side,t:0},this.events.push({type:"slide",id:t.id}))}_contacts(){let t=this.swimmers;for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){let s=t[e],r=t[n];if(s.slide||r.slide||Math.abs(s.y-r.y)>.6)continue;let a=r.x-s.x,o=r.s-s.s,l=Math.hypot(a,o);if(l>.85||l<1e-4)continue;let c=(.85-l)/2;s.x-=a/l*c,s.s-=o/l*c,r.x+=a/l*c,r.s+=o/l*c}}_finish(t){t.done=!0,this.finished++,t.place=this.finished,t.finishT=this.time;let e=t.place<=this.round.qualify;this.events.push({type:"finish",id:t.id,place:t.place,qualified:e}),t.isPlayer?(this.state="done",this.events.push({type:"over",place:t.place,qualified:e})):this.finished>=this.round.qualify&&!this.player.done&&(this.state="done",this.player.place=this.swimmers.filter(n=>!n.done).sort((n,s)=>s.s-n.s).indexOf(this.player)+this.finished+1,this.events.push({type:"over",place:this.player.place,qualified:!1}))}_places(){let t=[...this.swimmers].sort((e,n)=>e.done&&n.done?e.place-n.place:e.done?-1:n.done?1:n.s-e.s);t.forEach((e,n)=>{e.done?e.rank=e.place:e.rank=n+1}),this.order=t}get qualifiedCount(){return this.swimmers.filter(t=>t.done&&t.place<=this.round.qualify).length}_ai(t,e){if(t.next-=e,t.next<=0){let l=(this.rand()-.5)*2*(1-t.skill)*.35,c=this.beatOffset(this.time+l);(Math.abs(c)<.03||this.rand()<.05)&&(this.stroke(t),t.next=this.beat*(.9+this.rand()*.6*(1.2-t.skill)))}let n=this.course,s=n.noodles.find(l=>l.s-t.s>-1&&l.s-t.s<l.len+2.5&&Math.abs(l.x-t.x)<l.len+1);this.setDive(s&&this.rand()<.04+t.skill*.9?!0:t.dive&&!!s,t);let r=t.lane,a=n.slides.find(l=>l.s-t.s>2&&l.s-t.s<18);a&&t.skill>.7&&(r=a.side*7);for(let l of n.bumpers){let c=l.s-t.s;c>0&&c<7&&Math.abs(l.x-t.x)<1.6&&(r=l.x+(t.x>l.x?2.4:-2.4))}let o=n.walls.find(l=>l.s-t.s>0&&l.s-t.s<10);return o&&t.skill<.75&&(o.x0>-6?r=-6:o.x1<6&&(r=6)),this.rand()<e*.3&&(t.lane=(this.rand()*2-1)*5),gs((r-t.x)*.8,-1,1)}get result(){let t=this.player,e=t.done&&t.place<=this.round.qualify,n=t.done&&t.place===1;return{place:t.place||t.rank,qualified:e,stars:e?n?3:t.place<=Math.max(3,Math.ceil(this.round.qualify/2))?2:1:0}}};function Um(i,t,e,n,s,r){let a=e-i,o=n-t,l=a*a+o*o,c=l?Math.max(0,Math.min(1,((s-i)*a+(r-t)*o)/l)):0;return Math.hypot(i+a*c-s,t+o*c-r)}function $c(i){let t=i&&typeof i=="object"?i:{},e={};if(t.stars&&typeof t.stars=="object")for(let s of cn){let r=Math.floor(Number(t.stars[s.id]));r>=1&&r<=3&&(e[s.id]=r)}let n=Math.floor(Number(t.unlocked));return{unlocked:gs(Math.max(Number.isFinite(n)?n:1,...Object.keys(e).map(s=>Number(s)+1)),1,cn.length),stars:e,muted:t.muted===!0}}var ll=new Map;function Ft(i,t=0,e=1){let n=`${i}|${t}|${e}`;return ll.has(n)||ll.set(n,new In({color:i,emissive:t,emissiveIntensity:e})),ll.get(n)}function ms(i,t,e,n,s=0,r=0,a=0){let o=new Xt(new ni(i,t,e),n);return o.position.set(s,r,a),o}function zn(i,t,e,n,s=0,r=0,a=0,o=14){let l=new Xt(new Ni(i,t,e,o),n);return l.position.set(s,r,a),l}function Jt(i,t,e=0,n=0,s=0,r=1,a=1,o=1,l=14){let c=new Xt(new hs(i,l,Math.max(8,l-4)),t);return c.position.set(e,n,s),c.scale.set(r,a,o),c}var th=[15909530,14196848,10119750,16767416,13208154,8014382,16175016,12089936],eh=[3810328,15773744,1710618,13127722,6961690,2759216,15253600,4860436],nh=[16730682,3832560,16765498,16743096,3852394,10504944,16747050,2803912];function cl(i="otter",t=2799816,e=!0,n=0){let s=new le,r=new le;s.add(r);let a=th[n%th.length],o=Ft(a),l=Ft(n===0?16726586:nh[(n*3+1)%nh.length]);r.add(Jt(.4,l,0,0,.2,.85,.6,1.2,14)),r.add(Jt(.2,o,0,.12,.05,.9,.5,.8,10));let c=new le;c.position.set(0,.2,-.48),c.add(Jt(.36,o,0,0,0,1,.95,1,18)),c.add(Jt(.375,Ft(t),0,.07,.08,1,.85,1,18)),c.add(Jt(.09,Ft(t),0,.36,0,1,1,1,8));for(let m of[-1,1])c.add(Jt(.115,Ft(16777215),m*.14,.01,-.3,1,1.1,.55,12)),c.add(Jt(.065,Ft(1708064),m*.14,0,-.345,1,1.15,.5,10)),c.add(Jt(.025,Ft(16777215,16777215,.6),m*.12,.04,-.375,1,1,.5,6)),c.add(Jt(.07,Ft(16747158),m*.24,-.11,-.22,1,.7,.4,8)),c.add(Jt(.05,o,m*.36,-.02,0,.5,1,1,8));c.add(Jt(.045,Ft(14254938),0,-.06,-.36,1,.9,.8,8));let h=new Xt(new Fi(.1,.022,6,14,Math.PI),Ft(9054762));if(h.position.set(0,-.14,-.33),h.rotation.z=Math.PI,c.add(h),e){let m=Ft(n===0?16765498:2775768);c.add(ms(.74,.05,.06,m,0,.14,-.1));for(let A of[-1,1]){let p=new Xt(new Fi(.09,.03,6,14),m);p.position.set(A*.14,.2,-.32),c.add(p),c.add(Jt(.075,Ft(9099519,3836632,.4),A*.14,.2,-.33,1,1,.4,10))}}let u=Ft(eh[(n*5+2)%eh.length]);if(n%2===0)for(let m of[-1,1])c.add(Jt(.13,u,m*.3,-.04,.3,1,1.5,1,10)),c.add(Jt(.05,Ft(16777215),m*.3,.1,.27,1,1,1,6));else c.add(Jt(.17,u,0,.12,.42,1,1,1,10)),c.add(Jt(.19,u,0,-.08,.34,1.1,.8,.9,10));c.scale.setScalar(1.4),c.position.y+=.08,r.add(c);let f=[];for(let m of[-1,1]){let A=new le;A.position.set(m*.38,.06,-.15),A.add(Jt(.095,o,0,0,-.26,.8,.7,3,8)),A.add(Jt(.12,o,0,0,-.55,1,.8,1.2,8)),r.add(A),f.push(A)}let g=[];for(let m of[-1,1]){let A=new le;A.position.set(m*.15,-.02,.6),A.add(Jt(.1,o,0,0,.18,.9,.5,2.2,8)),A.add(Jt(.11,Ft(16777215),0,0,.5,1,.45,1.4,8)),r.add(A),g.push(A)}return{root:s,body:r,head:c,arms:f,legs:g}}function ih(){let i=new le,t=Ft(9067062);i.add(Jt(.45,t,0,.75,0,.9,1.15,.85,14)),i.add(Jt(.32,Ft(14200968),0,.68,.18,.85,1.1,.5,12)),i.add(zn(.4,.4,.3,Ft(15217706),0,.45,0,14));for(let s of[-1,1])i.add(Jt(.13,t,s*.2,.12,.06,1,.7,1.4,8));let e=cl("otter",15217706).head;e.position.set(0,1.45,0),e.rotation.y=Math.PI,i.add(e);let n=new le;return n.position.set(.42,1,0),n.add(Jt(.1,t,0,.25,0,.8,2.6,.8,8)),i.add(n),i.userData.wave=n,i}function sh(i){let t=new le;return t.add(zn(.85,.95,2.2,Ft(i),0,.6,0,18)),t.add(Jt(.85,Ft(i),0,1.7,0,1,.5,1,18)),t.add(new Xt(new Fi(.95,.18,8,22),Ft(16777215)).rotateX(Math.PI/2).translateZ(.2)),t}function rh(i){let t=new le;t.add(zn(.7,.8,.5,Ft(16765498),0,.15,0,16)),t.add(Jt(.35,Ft(15217706),0,.5,0,1,1,1,12));let e=new le,n=[16730762,2799816,9099322,16752672];for(let s=0;s<6;s++){let r=zn(.22,.22,i/6,Ft(n[s%4]),i/6*(s+.5),.35,0,12);r.rotation.z=Math.PI/2,e.add(r)}return t.add(e),t.userData.arm=e,t}function ah(i,t){let e=new le,n=t-i,s=[15217706,2779880,16765498];for(let r=0;r<3;r++){let a=zn(.3,.3,n,Ft(s[r]),(i+t)/2,.25+r*.32,0,14);a.rotation.z=Math.PI/2,a.position.z=(r-1)*.08,e.add(a)}for(let r of[i,t])e.add(Jt(.42,Ft(16777215),r,.55,0,1,1.4,1,12));return e}function oh(i){let t=i.length,e=new mr(new hs(.28,8,6),new In({color:16777215}),t),n=[15217706,16751146,16765498,16777215,2799816,2779880],s=new Qt;return i.forEach(([r,a],o)=>{s.compose(new w(r,.15,a),new rn,new w(1,.8,1.3)),e.setMatrixAt(o,s),e.setColorAt(o,new St(n[Math.floor(o/2)%n.length]))}),e}function lh(i,t){let e=new le,n=ms(2.4,6,2.4,Ft(2799816),0,3,0);e.add(n),e.add(ms(2.8,.3,2.8,Ft(16765498),0,6.1,0));let s=[];for(let a=0;a<=20;a++){let o=a/20;s.push(new w(-t*Math.sin(o*Math.PI)*2.2,6*(1-o)+.2,-o*i))}let r=new cs(s);return e.add(new Xt(new us(r,40,.75,10,!1),new In({color:16742954,side:qe}))),e.add(new Xt(new us(r,40,.5,8,!1),new In({color:9099519,transparent:!0,opacity:.6}))),e}function ch(i){let t=new le,e=[15217706,16765498,2799816,9099322];for(let a=0;a<18;a++){let o=a/17*Math.PI;t.add(Jt(.7,Ft(e[a%4]),Math.cos(o)*(i/2),Math.sin(o)*5.5,0,1,1,1,10))}let n=document.createElement("canvas");n.width=256,n.height=32;let s=n.getContext("2d");for(let a=0;a<16;a++)for(let o=0;o<2;o++)s.fillStyle=(a+o)%2?"#111":"#fff",s.fillRect(a*16,o*16,16,16);let r=new Xt(new on(i*.7,1.1),new ke({map:new ln(n),side:qe}));return r.position.y=4.4,t.add(r),t}function hh(i){let t=new le;return t.add(ms(1,.6,1.4,Ft(i),0,.2,0)),t.add(ms(1.04,.1,1.44,Ft(16777215),0,.52,0)),t}function uh(i){let t=new le;t.add(zn(i,i*1.15,1.2,Ft(15784096),0,.1,0,20)),t.add(zn(i*.7,i*.8,1.4,Ft(7128150),0,.3,0,18));for(let e=0;e<3;e++){let n=e*2.1,s=new le;s.add(zn(.18,.25,4,Ft(10119738),0,2,0,7));for(let r=0;r<6;r++){let a=Jt(1,Ft(r%2?3844170:5423190),Math.cos(r)*1.1,4,Math.sin(r)*1.1,.3,.08,1.5,8);a.rotation.y=-r+Math.PI/2,s.add(a)}s.position.set(Math.cos(n)*i*.4,.8,Math.sin(n)*i*.4),t.add(s)}return t}function dh(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d");t.fillStyle="#38c8e8",t.fillRect(0,0,256,256),t.strokeStyle="rgba(255,255,255,0.55)",t.lineWidth=3;for(let n=0;n<30;n++){let s=n*97%256,r=n*61%256;t.beginPath();for(let a=0;a<=6;a++){let o=a/6*Math.PI*2,l=18+n*a%7*3;a===0?t.moveTo(s+Math.cos(o)*l,r+Math.sin(o)*l):t.quadraticCurveTo(s+Math.cos(o-.5)*l*1.2,r+Math.sin(o-.5)*l*1.2,s+Math.cos(o)*l,r+Math.sin(o)*l)}t.stroke()}let e=new ln(i);return e.wrapS=e.wrapT=ti,e.colorSpace=fe,e}function fh(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,l]of Object.entries(t))try{let c=atob(l.split(",")[1]),h=new Uint8Array(c.length);for(let f=0;f<c.length;f++)h[f]=c.charCodeAt(f);let u=a.ctx.decodeAudioData(h.buffer,f=>{a._smp[o]=f},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let l=this.ctx;if(l&&l.state==="running"&&!this.muted&&this.on!==!1){r(this);let c=this._smp&&this._smp[a];if(c){let h=l.createBufferSource(),u=l.createGain();h.buffer=c,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||l.destination),h.start(l.currentTime+.005);return}}return n.call(this,a,o)}}function ph(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let l=a.ctx;fetch(o).then(c=>c.ok?c.arrayBuffer():Promise.reject()).then(c=>l.decodeAudioData(c)).then(c=>{if(a.ctx!==l)return;let h=l.createBufferSource(),u=l.createGain();h.buffer=c,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||l.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var gh={stroke:"data:audio/mpeg;base64,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",splash:"data:audio/mpeg;base64,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",leap:"data:audio/mpeg;base64,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",go:"data:audio/mpeg;base64,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",finish:"data:audio/mpeg;base64,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",win:"data:audio/mpeg;base64,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ABxHCs4GHpj3n4TTF6o2cFSM93tkSrBGUA3Vwey0opKSRyVBJokXLiBo2lOHDzBlZwMclNl4nHIrfRrD4W5BiYnud36UHXqOGT6u3G8Pclf/+zjE64BL+YUywzxsCZ8xpejzDTgPnSpP0NXkCUqEE0m0GPtOAG1CltGUtaN9NaGaSfjam0d9fvzimjFoRB5X/smPeIi8WVJnCZlEoLwRFmIrAjuy/GtMrMUo5Xb+KJH2KUopE0e3FGZGpIbJmFBlVyeME75kI92YzYyyK1ebCodJgabUhLMhoAiDWyD1GL1RQtOUppVorLrKPAwgu5Lm0KKRU2ohTjkqnaoxHEMFn2mxB0N+cYzin0Tqjqv5ETkzx9S7VVuVSDHl55OZc8oSqb/QvCUpXLn/+zjE6QBL6X8vJhhlyXAw5VizDDnWXHd19pfez8rgV3eHDTrgs04jpXRfBc0g3tAQZkChNhGYZKg++aKGwI2+x9Q4F9OKukBUecmSZNeV1pJlcDXGjpwpGXrFVD5Tdxzma3ZOtjXYCW0aXtZ8L0WNtGFxgPPOlBrhUi0LQsDgTOy3DEaARInruWh+GiK1Hilx3aREaOueAkwGsoaNzU3Z41Gs8cLchezLLUFtWJJcYBALz5ik8dvktBAQJIE1wIGIJkkdyEWXrOL305uIh6E50OkJ+tP0kNn/+zjE7IBMXXcmxRhhyaKwZFjzDTkUN2l8Cyrb3JKiQXS2kNLn8CxjXnF/0ghWQ3zEJaTy4jYcvf1m2acXrEIC0yCcQx48EUTQc+iEk7MTEKvfCBPLvwo/UN5kk4zHz3qvy9J0Y97EOge0ZnOIRGwyoTJilQEigaTCWJaaiblapZBoKpe1CmAoBOAoBO1WfNTUgziYePVDzp08JREIhKIhKzaWThUJhJ+oeMHucwkRLFSyxoz6l/9p08SERFVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVX/+zjE6AOLfQ8aBhhqiZqaokT0mLhVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE6AOUJX8UDDDRyUCPY0STDVBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="};var Dm="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Ce=null,Vr=!1;function mh(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function hl(){mh(),Vr=!0;try{if(Ce||(Ce=document.createElement("audio"),Ce.src=Dm,Ce.loop=!0,Ce.preload="auto",Ce.setAttribute("playsinline",""),Ce.setAttribute("webkit-playsinline",""),Ce.setAttribute("x-webkit-airplay","deny"),Ce.volume=.01,Ce.addEventListener("pause",()=>{Vr&&!document.hidden&&setTimeout(()=>Vr&&Ce.paused&&Ce.play().catch(()=>{}),300)})),Ce.paused){let i=Ce.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function Ah(){Vr=!1;try{Ce&&!Ce.paused&&Ce.pause()}catch{}}function xh(i,t){mh();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var As=i=>440*Math.pow(2,(i-69)/12),Nm=[[48,[60,64,67,72]],[53,[60,65,69,72]],[55,[62,67,71,74]],[48,[60,64,67,72]]],Fm=[[0,0,79],[0,2,81],[0,3,79],[0,5,76],[1,0,77],[1,2,81],[1,4,84],[2,0,83],[2,3,79],[2,5,74],[3,0,76],[3,2,79],[3,4,84]],ki=class{constructor(){this.ctx=null,this.muted=!1,this.mode="off",this.plucks=new Map}unlock(){if(hl(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;xh(this.ctx,()=>!!(this.held||this._held)),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.4,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master);let s=e.createDelay(.8);s.delayTime.value=.36;let r=e.createGain();r.gain.value=.22;let a=e.createGain();a.gain.value=.18,this.music.connect(s),s.connect(r).connect(s),s.connect(a).connect(this.master);let o=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),l=o.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1;this.noiseBuf=o,this._timer=setInterval(()=>this._schedule(),30),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_silentTick(){try{let t=this.ctx,e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01;let e=t.play();e&&e.then&&e.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){Ah(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){hl(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(t,e){this.mode===t&&!e||(this.mode=t,this.ctx&&(this.tempo=this.tempo||100,this.step=0,this.nextTime=this.ctx.currentTime+.12))}dispose(){clearInterval(this._timer),this.ctx&&this.ctx.close(),this.ctx=null}_tone(t,e,n,s,r,a=this.sfx,o=.005){let l=this.ctx,c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,n);let h=l.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),c.connect(h).connect(a),c.start(n),c.stop(n+s+.05),c}_noise(t,e,n,s,r,a=1,o=this.sfx,l){let c=this.ctx,h=c.createBufferSource();h.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),l&&u.frequency.exponentialRampToValueAtTime(l,t+e),u.Q.value=a;let f=c.createGain();f.gain.setValueAtTime(1e-4,t),f.gain.exponentialRampToValueAtTime(n,t+Math.min(.01,e/4)),f.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(f).connect(o),h.start(t,Math.random()*.5),h.stop(t+e+.05)}_slide(t,e,n,s,r,a,o=this.sfx){let l=this.ctx,c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,s),c.frequency.exponentialRampToValueAtTime(n,s+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.015),h.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(h).connect(o),c.start(s),c.stop(s+r+.05)}_pan(t,e,n=.08,s=this.music){this._tone("sine",As(t),e,.7,n,s,.004),this._tone("sine",As(t)*2,e,.35,n*.4,s,.004),this._tone("sine",As(t)*3.01,e,.15,n*.2,s,.003)}_strum(t,e,n=.05){t.forEach((s,r)=>this._tone("triangle",As(s),e+r*.012,.25,n,this.music,.003))}setTempo(t){this.tempo=t,this.ctx&&(this.step=0,this.nextTime=this.ctx.currentTime+.05)}setUnder(t){if(this.ctx){if(!this.under){let e=this.ctx;this.under=e.createBiquadFilter(),this.under.type="lowpass",this.under.frequency.value=2e4,this.music.disconnect(),this.music.connect(this.under).connect(this.master)}this.under.frequency.setTargetAtTime(t?420:2e4,this.ctx.currentTime,.08)}}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||this.mode==="off")return;let e=t.currentTime+.2,n=this.mode==="race",s=60/this.tempo/2;for(;this.nextTime<e;){let r=this.nextTime,a=this.step%32,o=Math.floor(a/8),l=a%8,[c,h]=Nm[o];(l===0||l===4)&&this._slide("sine",130,50,r,.16,n?.26:.2,this.music),(l===2||l===6)&&(this._noise(r,.08,.06,"bandpass",1500,1,this.music),this._noise(r+.01,.05,.04,"highpass",3e3,1,this.music)),this._noise(r,.04,.022,"highpass",7e3,.8,this.music),(l===0||l===3||l===6)&&this._tone("sine",As(c-12),r,s*1.6,.14,this.music,.01),l%2===1&&this._strum(h,r,.035);for(let[u,f,g]of Fm)u===o&&f===l&&this._pan(g,r,n?.06:.08);n&&l%2===0&&(this._tone("sine",2900,r,.07,.035,this.sfx,.004),this._tone("sine",3400,r+.035,.05,.025,this.sfx,.004)),this.step++,this.nextTime+=s}}play(t,e){if(!this.on)return;let n=this.ctx.currentTime+.005,s=this.sfx;switch(t){case"count":this._tone("square",660,n,.12,.05);break;case"go":this._tone("sine",2600,n,.5,.08),this._tone("sine",3100,n,.5,.05),this._noise(n+.2,.5,.12,"bandpass",1400,.7,s,500);break;case"stroke":{let r=e;this._noise(n,.16,r==="perfect"?.14:.1,"bandpass",r==="off"?700:1600,.9,s,r==="off"?400:3200),r==="perfect"?(this._pan(91,n+.02,.07,s),this._pan(96,n+.08,.05,s)):r==="good"?this._pan(86,n+.02,.05,s):this._slide("sine",300,180,n,.14,.06);break}case"dive":this._noise(n,.3,.1,"lowpass",900,.8,s,250);break;case"surface":this._noise(n,.2,.08,"bandpass",1200,1,s,2600);break;case"breath":this._slide("sine",900,500,n,.2,.06),this._slide("sine",900,500,n+.25,.2,.06);break;case"bonk":this._slide("sine",180,420,n,.25,.18),this._noise(n,.1,.07,"lowpass",900);break;case"leap":this._slide("sine",300,900,n,.3,.1),this._noise(n+.75,.4,.14,"bandpass",1300,.7,s,500);break;case"slide":this._slide("sine",1300,500,n,1.1,.07),this._noise(n,1.2,.08,"bandpass",1500,.8,s,700);break;case"splash":this._noise(n,.5,.15,"bandpass",1300,.7,s,400);break;case"wave":this._noise(n,1,.08,"lowpass",600,.8,s,1500);break;case"finish":this._noise(n,2,.07,"bandpass",1200,.5,s),[79,84,88].forEach((r,a)=>this._pan(r,n+a*.1,.09,s));break;case"win":[[72,0],[76,.12],[79,.24],[84,.36],[88,.55],[91,.7],[96,.9]].forEach(([r,a])=>this._pan(r,n+a,.11,s));break;case"lose":[79,76,72,67].forEach((r,a)=>this._pan(r,n+a*.18,.08,s));break;case"tap":this._tone("sine",880,n,.06,.05);break;case"no":this._tone("square",220,n,.12,.04);break;default:}}};fh(ki,gh);ph(ki);var ul={title:["\u0633\u0628\u0627\u0642 \u0627\u0644\u0633\u0628\u0627\u062D\u0629","Swim Race"],round:["\u0627\u0644\u062C\u0648\u0644\u0629","Round"],locked:["\u0627\u062A\u0623\u0647\u0644 \u0645\u0646 \u0627\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627","Qualify in the round before"],swim:["\u064A\u0644\u0627 \u0646\u0639\u0648\u0645!","Swim!"],exit:["\u062E\u0631\u0648\u062C","Exit"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","Paused"],resume:["\u0643\u0645\u0651\u0644","Continue"],menu:["\u0627\u0644\u0642\u0627\u0626\u0645\u0629","Menu"],restart:["\u0645\u0646 \u0627\u0644\u0623\u0648\u0644","Restart"],stroke:["\u062C\u062F\u0651\u0641","STROKE"],dive:["\u063A\u0637\u0633","DIVE"],hint:["\u0627\u0636\u063A\u0637 \xAB\u062C\u062F\u0651\u0641\xBB \u0645\u0639 \u0627\u0644\u0635\u0641\u0651\u0627\u0631\u0629","Tap STROKE on the whistle"],hintDive:["\u0627\u0636\u063A\u0637 \xAB\u063A\u0637\u0633\xBB \u0639\u0634\u0627\u0646 \u062A\u0639\u062F\u0651\u064A \u062A\u062D\u062A \u0627\u0644\u0645\u0643\u0631\u0648\u0646\u0629","Hold DIVE to go under the noodle"],hintLeap:["\u062C\u062F\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u0625\u064A\u0642\u0627\u0639 \u0642\u062F\u0651\u0627\u0645 \u0627\u0644\u062D\u0627\u062C\u0632 \u0639\u0634\u0627\u0646 \u062A\u0646\u0637","Stroke on the beat before the wall to leap"],perfect:["\u0645\u0645\u062A\u0627\u0632!","PERFECT!"],good:["\u062D\u0644\u0648","GOOD"],off:["\u0645\u0634 \u0639\u0644\u0649 \u0627\u0644\u0625\u064A\u0642\u0627\u0639","OFF BEAT"],breath:["\u062E\u062F \u0646\u0641\u064E\u0633!","Need air!"],slide:["\u0632\u062D\u0644\u064A\u0642\u0629! \u{1F6DD}","Slide! \u{1F6DD}"],wave:["\u0645\u0648\u062C\u0629! \u{1F30A}","Wave! \u{1F30A}"],qualified:["\u0627\u062A\u0623\u0647\u0644\u062A!","Qualified!"],final:["\u0627\u0644\u0646\u0647\u0627\u0626\u064A","Final"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631! \u0627\u0644\u0623\u0648\u0644 \u0641\u064A \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u{1F3C6}","Well done! You won the final \u{1F3C6}"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629! \u0627\u0644\u0623\u0648\u0644\u0649 \u0641\u064A \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u{1F3C6}","Well done! You won the final \u{1F3C6}"],qual_m:["\u0628\u0631\u0627\u0641\u0648! \u0627\u062A\u0623\u0647\u0644\u062A \u0644\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u062C\u0627\u064A\u0629 \u{1F389}","Great! You qualified \u{1F389}"],qual_f:["\u0628\u0631\u0627\u0641\u0648! \u0627\u062A\u0623\u0647\u0644\u062A\u064A \u0644\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u062C\u0627\u064A\u0629 \u{1F389}","Great! You qualified \u{1F389}"],out_m:["\u0642\u0631\u0651\u0628\u062A! \u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A \u{1F4AA}","So close! Try again \u{1F4AA}"],out_f:["\u0642\u0631\u0651\u0628\u062A\u064A! \u062C\u0631\u0651\u0628\u064A \u062A\u0627\u0646\u064A \u{1F4AA}","So close! Try again \u{1F4AA}"],place:["\u0627\u0644\u0645\u0631\u0643\u0632","Place"],next:["\u0627\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u062C\u0627\u064A\u0629","Next round"],again:["\u062A\u0627\u0646\u064A","Again"],loading:["\u0628\u0646\u0645\u0644\u0627 \u0627\u0644\u062D\u0645\u0651\u0627\u0645...","Filling the pool..."],noWebgl:["\u0627\u0644\u062C\u0647\u0627\u0632 \u062F\u0647 \u0645\u0634 \u0628\u064A\u0634\u063A\u0651\u0644 \u0627\u0644\u0644\u0639\u0628\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F.","This device cannot run the 3D game."],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"]},xs="ar",vh=!1,Ch=i=>{xs=i==="en"?"en":"ar"},_h=i=>{vh=!!i},vs=()=>xs,kt=i=>{let t=`${i}_${vh?"f":"m"}`,e=ul[t]?t:i;return ul[e]?ul[e][xs==="en"?1:0]:i},He=i=>xs==="en"?String(i):String(i).replace(/[0-9]/g,t=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[t]),dl=i=>xs==="en"?i.en:i.ar;var yh=`
.sp-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#5a3a1a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#9fdcff}
.sp-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.sp-layer{position:absolute;inset:0;pointer-events:none}
.sp-layer button,.sp-layer .sp-card{pointer-events:auto}
.sp-pill{display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);background:#fff7e6;border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*4.4);box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.sp-coin{display:inline-block;width:calc(var(--u)*4.2);height:calc(var(--u)*4.2);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe58a,#f5b72c 60%,#c98a14);border:calc(var(--u)*.35) solid #a8692a;box-sizing:border-box}
.sp-round{position:absolute;width:calc(var(--u)*11);height:calc(var(--u)*11);border-radius:calc(var(--u)*3);border:calc(var(--u)*.5) solid #c98a3a;background:#fff7e6;color:#5a3a1a;font-size:calc(var(--u)*5);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;padding:0;font-family:inherit}
.sp-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline:calc(var(--u)*16);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.2)}
.sp-sign{background:linear-gradient(180deg,#e0a35c,#c27a35);color:#fff;font-weight:900;font-size:calc(var(--u)*3.8);border-radius:calc(var(--u)*1.6);padding:calc(var(--u)*.4) calc(var(--u)*3);border:calc(var(--u)*.4) solid #8a4f1d;text-shadow:0 2px 0 #8a4f1d}
.sp-bar{position:relative;width:100%;max-width:calc(var(--u)*80);height:calc(var(--u)*6);background:#fff7e6;border:calc(var(--u)*.6) solid #c98a3a;border-radius:999px;overflow:hidden;box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.sp-bar i{position:absolute;inset-block:0;inset-inline-start:0;background:linear-gradient(180deg,#ffd75e,#f2a51e);transition:width .25s}
.sp-bar b{position:absolute;inset-inline-end:calc(var(--u)*2);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);color:#5a3a1a}
.sp-bar s{position:absolute;inset-inline-start:calc(var(--u)*1.6);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);text-decoration:none}
.sp-label{position:absolute;transform:translate(-50%,-100%);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:calc(var(--u)*1.2);padding:0 calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.2);white-space:nowrap;pointer-events:none}
.sp-label.full{background:#ffd75e;animation:spPulse2 .5s infinite alternate}
@keyframes spPulse2{to{transform:translate(-50%,-100%) scale(1.12)}}
.sp-toast{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.6);text-align:center;white-space:nowrap;opacity:0;transition:opacity .25s;pointer-events:none;box-shadow:0 calc(var(--u)*.8) 0 #a8692a}
.sp-toast.show{opacity:1}
.sp-joy{position:absolute;width:calc(var(--u)*24);height:calc(var(--u)*24);margin:calc(var(--u)*-12) 0 0 calc(var(--u)*-12);border-radius:50%;border:calc(var(--u)*.8) solid rgba(255,255,255,.7);background:rgba(255,255,255,.15);pointer-events:none;display:none}
.sp-joy i{position:absolute;left:50%;top:50%;width:calc(var(--u)*10);height:calc(var(--u)*10);margin:calc(var(--u)*-5) 0 0 calc(var(--u)*-5);border-radius:50%;background:rgba(255,255,255,.85)}
.sp-float{position:absolute;font-weight:900;font-size:calc(var(--u)*4.6);color:#f2a51e;text-shadow:0 2px 0 #fff,0 0 6px #fff;pointer-events:none;animation:spUp 1s ease-out forwards}
@keyframes spUp{to{transform:translateY(calc(var(--u)*-12));opacity:0}}
.sp-dim{position:absolute;inset:0;background:rgba(40,25,10,.35);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box}
.sp-panel{background:#fff7e6;border:calc(var(--u)*.8) solid #c98a3a;border-radius:calc(var(--u)*4);box-shadow:0 calc(var(--u)*1.2) 0 #a8692a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;pointer-events:auto}
.sp-title{font-size:calc(var(--u)*7);font-weight:900;color:#c2552a;text-align:center;line-height:1.1}
.sp-btn2{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);color:#fff;border:none;border-radius:calc(var(--u)*2.6);padding:calc(var(--u)*1.8) calc(var(--u)*5);min-height:calc(var(--u)*11);cursor:pointer;background:linear-gradient(180deg,#5ccf5a,#33a333);box-shadow:0 calc(var(--u)*.8) 0 #1f7a1f;display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);justify-content:center}
.sp-btn2.wood{background:linear-gradient(180deg,#e0a35c,#c27a35);box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d}
.sp-btn2[disabled]{background:#c9c4bb;box-shadow:0 calc(var(--u)*.8) 0 #9a958c}
.sp-btn2:active{transform:translateY(calc(var(--u)*.5))}
.sp-btn2:focus-visible,.sp-node:focus-visible,.sp-round:focus-visible{outline:calc(var(--u)*.7) solid #2f6fd8;outline-offset:calc(var(--u)*.5)}
.sp-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:calc(var(--u)*2)}
.sp-land .sp-grid{grid-template-columns:repeat(4,minmax(0,1fr))}
.sp-card{background:#fff;border:calc(var(--u)*.5) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.8);text-align:center}
.sp-card .ic{font-size:calc(var(--u)*8)}
.sp-card .nm{font-weight:900;font-size:calc(var(--u)*4.4)}
.sp-card .sb{font-size:calc(var(--u)*3);opacity:.8}
.sp-card .pips{display:flex;gap:calc(var(--u)*.6)}
.sp-card .pip{width:calc(var(--u)*3);height:calc(var(--u)*1.4);border-radius:9px;background:#e0c9a3}
.sp-card .pip.on{background:#f2a51e}
.sp-card .st{font-weight:900;font-size:calc(var(--u)*3.2)}
.sp-map{display:grid;grid-template-columns:repeat(4,calc(var(--u)*17));gap:calc(var(--u)*2.4) calc(var(--u)*3);justify-content:center}
.sp-node{width:calc(var(--u)*17);height:calc(var(--u)*17);border-radius:50%;border:calc(var(--u)*.8) solid #fff;background:radial-gradient(circle at 40% 35%,#e9b46a,#b8742e);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*6.4);cursor:pointer;box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;position:relative;display:flex;align-items:center;justify-content:center;text-shadow:0 2px 0 #8a4f1d}
.sp-node.lock{background:radial-gradient(circle at 40% 35%,#e2e2e2,#a8a8a8);box-shadow:0 calc(var(--u)*.8) 0 #7a7a7a}
.sp-node.next{animation:spPulse22 .8s infinite alternate}
@keyframes spPulse22{to{transform:scale(1.08)}}
.sp-node .stars{position:absolute;bottom:calc(var(--u)*-4.4);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*3);white-space:nowrap;text-shadow:none}
.sp-logo{font-size:calc(var(--u)*9);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.5) #8a4f1d;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;text-align:center}
.sp-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#f2a51e;background:#bfe8ff}
.sp-stars{font-size:calc(var(--u)*10);letter-spacing:calc(var(--u)*1)}
.sp-stars .off{filter:grayscale(1);opacity:.4}
.sp-made{display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center}
.sp-made div{background:#fff;border:calc(var(--u)*.4) solid #e0c9a3;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*2);text-align:center;font-weight:900}
.sp-made b{display:block;font-size:calc(var(--u)*5.4)}
.sp-made span{font-size:calc(var(--u)*2.8)}
.sp-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*16);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
`;function Ct(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var Ih=`
.sp-root{background:#38c8e8;color:#0a3a5a}
.sp-padlbl{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;font-weight:900;pointer-events:none;text-shadow:0 2px 0 #fff,0 0 6px #fff}
.sp-padlbl .ic{font-size:calc(var(--u)*6)}
.sp-padlbl .c{display:inline-flex;align-items:center;gap:calc(var(--u)*.8);font-size:calc(var(--u)*3.8);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:999px;padding:0 calc(var(--u)*1.6)}
.sp-padlbl .n{font-size:calc(var(--u)*2.8);white-space:nowrap}
.sp-bubble{position:absolute;transform:translate(-50%,-100%);background:#fff;border:calc(var(--u)*.4) solid #e0a35c;border-radius:calc(var(--u)*2);padding:calc(var(--u)*.3) calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.6);white-space:nowrap;pointer-events:none}
.sp-bubble:after{content:'';position:absolute;left:50%;bottom:calc(var(--u)*-1.6);margin-left:calc(var(--u)*-1);border:calc(var(--u)*1) solid transparent;border-top-color:#e0a35c}
.sp-hint{position:absolute;left:50%;bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));transform:translateX(-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.2);white-space:nowrap;pointer-events:none;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;transition:opacity .3s}
.sp-chefs{display:flex;gap:calc(var(--u)*3)}
.sp-chef{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);background:#fff;border:calc(var(--u)*.6) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*4);cursor:pointer;color:#5a3a1a}
.sp-chef .f{font-size:calc(var(--u)*9)}
.sp-chef.on{border-color:#f2a51e;background:#fff3d0;box-shadow:0 0 0 calc(var(--u)*.6) #ffd75e}
.sp-big{font-size:calc(var(--u)*6);padding:calc(var(--u)*2.4) calc(var(--u)*8)}
.sp-stat{display:flex;gap:calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.6)}
`,Mh=`
.sp-root .sp-panel{background:rgba(236,252,255,.96);border-color:#1aa8c8;box-shadow:0 calc(var(--u)*1.2) 0 #0a6a8a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3);color:#0a3a5a}
.sp-root .sp-title{color:#0a7aa8}
.sp-root .sp-logo{color:#ffd23a;-webkit-text-stroke-color:#0a5a8a;text-shadow:0 calc(var(--u)*.8) 0 #0a5a8a}
.sp-root .sp-btn2{background:linear-gradient(180deg,#ffd84a,#f0a81a);color:#5a3a00;box-shadow:0 calc(var(--u)*.8) 0 #a86a00}
.sp-root .sp-btn2.wood{background:linear-gradient(180deg,#5ad0e8,#1aa0c8);color:#fff;box-shadow:0 calc(var(--u)*.8) 0 #0a6a8a}
.sp-map{position:relative;width:calc(var(--u)*64);height:calc(var(--u)*58);margin-top:calc(var(--u)*4)}
.sp-isle{position:absolute;width:calc(var(--u)*16);height:calc(var(--u)*16);border-radius:50%;border:calc(var(--u)*.8) solid #fff;background:radial-gradient(circle at 40% 35%,#8ae86a,#3aa84a);box-shadow:0 0 0 calc(var(--u)*1.6) #f0d8a0,0 calc(var(--u)*1) calc(var(--u)*2) rgba(0,0,0,.3);font-family:inherit;font-weight:900;font-size:calc(var(--u)*5.4);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;text-shadow:0 2px 0 #1a6a2a;transform:translate(-50%,-50%)}
.sp-isle.lock{filter:grayscale(1);opacity:.6}
.sp-isle .stars{position:absolute;bottom:calc(var(--u)*-5.4);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*2.6);white-space:nowrap}
.sp-isle small{position:absolute;top:calc(var(--u)*-5);left:50%;transform:translateX(-50%);white-space:nowrap;font-size:calc(var(--u)*2.6);background:#fff;color:#0a5a8a;border-radius:999px;padding:0 calc(var(--u)*1.4);text-shadow:none}
.sp-dots{position:absolute;inset:0;pointer-events:none}
.sp-hudtop{position:absolute;top:max(calc(var(--u)*2),env(safe-area-inset-top));inset-inline:calc(var(--u)*3);display:flex;align-items:center;gap:calc(var(--u)*1.6);pointer-events:none}
.sp-place{width:calc(var(--u)*13);height:calc(var(--u)*13);border-radius:50%;background:radial-gradient(circle at 40% 35%,#5ad8f0,#1a8ab8);border:calc(var(--u)*.7) solid #fff;color:#fff;font-weight:900;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);box-shadow:0 calc(var(--u)*.6) 0 #0a5a8a;flex:none}
.sp-roundbar{flex:1;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6)}
.sp-roundbar b{background:linear-gradient(180deg,#5ad8f0,#1a8ab8);color:#fff;border:calc(var(--u)*.45) solid #fff;border-radius:calc(var(--u)*1.6);padding:0 calc(var(--u)*3);font-size:calc(var(--u)*3.4)}
.sp-prog{position:relative;width:100%;height:calc(var(--u)*4.4);background:rgba(10,58,90,.55);border:calc(var(--u)*.4) solid #fff;border-radius:999px}
.sp-prog i{position:absolute;top:50%;transform:translate(-50%,-50%);font-style:normal;font-size:calc(var(--u)*3.4);transition:left .2s}
.sp-prog i.me{font-size:calc(var(--u)*4.6);z-index:2}
.sp-prog:after{content:'\u{1F3C1}';position:absolute;inset-inline-end:calc(var(--u)*-1);top:50%;transform:translateY(-60%);font-size:calc(var(--u)*4.6)}
.sp-qual{width:calc(var(--u)*13);height:calc(var(--u)*13);border-radius:50%;background:radial-gradient(circle at 40% 35%,#5ad8f0,#1a8ab8);border:calc(var(--u)*.7) solid #fff;color:#fff;font-weight:900;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*3.8);box-shadow:0 calc(var(--u)*.6) 0 #0a5a8a;flex:none}
.sp-breath{position:absolute;top:calc(max(calc(var(--u)*2),env(safe-area-inset-top)) + var(--u)*16);left:50%;transform:translateX(-50%);display:flex;gap:calc(var(--u)*.8);pointer-events:none}
.sp-breath i{width:calc(var(--u)*3.6);height:calc(var(--u)*3.6);border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,#9fe8ff 45%,#3ab8e8);display:block;transition:opacity .2s}
.sp-breath i.off{opacity:.18}
.sp-cbtn{position:absolute;border-radius:50%;border:calc(var(--u)*.7) solid #fff;color:#fff;font-family:inherit;font-weight:900;display:flex;align-items:center;justify-content:center;padding:0;cursor:pointer;pointer-events:auto;font-size:calc(var(--u)*3.6);box-shadow:0 calc(var(--u)*.9) 0 rgba(0,0,0,.3);touch-action:none;user-select:none;-webkit-user-select:none}
.sp-stroke{width:calc(var(--u)*19);height:calc(var(--u)*19);bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*21);background:radial-gradient(circle at 40% 35%,#ff7a5a,#d82a2a)}
.sp-dive{width:calc(var(--u)*17);height:calc(var(--u)*17);bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3);background:radial-gradient(circle at 40% 35%,#5a9aff,#1a4ad8)}
.sp-cbtn:active,.sp-cbtn.on{transform:scale(.92)}
.sp-pulse{position:absolute;inset:calc(var(--u)*-2);border-radius:50%;border:calc(var(--u)*.7) solid #ffd23a;pointer-events:none;opacity:0}
.sp-pulse.go{animation:spPulse var(--b,.6s) linear}
@keyframes spPulse{from{transform:scale(1.6);opacity:.2}to{transform:scale(1);opacity:1}}
.sp-grade{position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*6.4);-webkit-text-stroke:calc(var(--u)*.45) #0a3a5a;paint-order:stroke fill;pointer-events:none;opacity:0;white-space:nowrap}
.sp-grade.show{animation:spGrade .7s ease-out}
@keyframes spGrade{0%{opacity:1;transform:translate(-50%,-50%) scale(1.4)}100%{opacity:0;transform:translate(-50%,-90%) scale(1)}}
.sp-hint{position:absolute;left:50%;bottom:calc(max(calc(var(--u)*4),env(safe-area-inset-bottom)) + var(--u)*24);transform:translateX(-50%);background:rgba(255,255,255,.95);border:calc(var(--u)*.4) solid #1aa8c8;border-radius:999px;padding:calc(var(--u)*1) calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.4);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .3s;color:#0a3a5a}
.sp-hint.show{opacity:1}
.sp-count{position:absolute;left:50%;top:40%;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*18);color:#fff;-webkit-text-stroke:calc(var(--u)*.8) #1a8ab8;paint-order:stroke fill;pointer-events:none}
`;var Rr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Fe=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Bm=new Ui(-1,1,1,-1,0,1),fl=class extends pe{constructor(){super(),this.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new te([0,2,0,0,2,0],2))}},zm=new fl,On=class{constructor(t){this._mesh=new Xt(zm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Bm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Hi=class extends Fe{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Bn.clone(t.uniforms),this.material=new ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new On(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Cs=class extends Fe{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Pr=class extends Fe{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Lr=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new ct);this._width=n.width,this._height=n.height,e=new Ve(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hi(Rr),this.copyPass.material.blending=sn,this.clock=new zi}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Cs!==void 0&&(a instanceof Cs?n=!0:a instanceof Pr&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ur=class extends Fe{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new St}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var bh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new St(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Gi=class i extends Fe{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ct(t.x,t.y):new ct(256,256),this.clearColor=new St(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ve(r,a,{type:Qe}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ve(r,a,{type:Qe});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let g=new Ve(r,a,{type:Qe});g.texture.name="UnrealBloomPass.v"+u,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),r=Math.round(r/2),a=Math.round(a/2)}let o=bh;this.highPassUniforms=Bn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ge({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ct(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Rr;this.copyUniforms=Bn.clone(h.uniforms),this.blendMaterial=new ge({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ei,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new St,this.oldClearAlpha=1,this.basic=new ke,this.fsQuad=new On(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ct(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ge({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ct(.5,.5)},direction:{value:new ct(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new ge({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Gi.BlurDirectionX=new ct(1,0);Gi.BlurDirectionY=new ct(0,1);var Sh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Dr=class extends Fe{constructor(){super();let t=Sh;this.uniforms=Bn.clone(t.uniforms),this.material=new Cr({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new On(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Bt.getTransfer(this._outputColorSpace)===Zt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Zo&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Eh={warm:{bloom:[.32,.55,.82],contrast:1.08,sat:1.12,tint:.05,vig:.38,exposure:1},fresh:{bloom:[.28,.5,.85],contrast:1.06,sat:1.1,tint:-.015,vig:.32,exposure:1},night:{bloom:[.55,.7,.7],contrast:1.12,sat:1.08,tint:-.04,vig:.5,exposure:1.05},candy:{bloom:[.4,.6,.78],contrast:1.05,sat:1.18,tint:.02,vig:.3,exposure:1},epic:{bloom:[.38,.6,.8],contrast:1.14,sat:1.1,tint:.035,vig:.45,exposure:1.02}},Om={uniforms:{tDiffuse:{value:null},contrast:{value:1.08},sat:{value:1.1},tint:{value:.04},vig:{value:.4},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},qm={warm:16773570,fresh:15136511,night:12572927,candy:16765424,epic:16769704};function km(i,t,e,n){let s=Math.min(60,Math.max(6,(t.far||300)*.035)),r=110,a=new Float32Array(r*3),o=new Float32Array(r*3);for(let A=0;A<r;A++)a[A*3]=t.position.x+(Math.random()-.5)*2*s,a[A*3+1]=t.position.y+(Math.random()-.5)*s,a[A*3+2]=t.position.z+(Math.random()-.5)*2*s,o[A*3]=(Math.random()-.5)*.25,o[A*3+1]=.05+Math.random()*.25,o[A*3+2]=(Math.random()-.5)*.25;let l=new pe;l.setAttribute("position",new ve(a,3));let c=document.createElement("canvas");c.width=c.height=32;let h=c.getContext("2d"),u=h.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.35,"rgba(255,255,255,0.45)"),u.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=u,h.fillRect(0,0,32,32);let f=new ln(c);f.colorSpace=fe;let g=new ii({map:f,color:qm[e]||16773570,size:s*.045,transparent:!0,opacity:.75,depthWrite:!1,blending:Ei,fog:!1,sizeAttenuation:!0}),m=new Di(l,g);return m.frustumCulled=!1,m.renderOrder=999,m.name="__motes",i.add(m),{pts:m,pos:a,vel:o,R:s,N:r}}function Hm(i,t,e){let{pos:n,vel:s,R:r,N:a}=i;for(let o=0;o<a;o++)for(let l=0;l<3;l++){let c=o*3+l;n[c]+=s[c]*e*(l===1?r*.1:r*.12);let h=l===1?r*.5:r,u=n[c]-[t.position.x,t.position.y,t.position.z][l];u>h?n[c]-=2*h:u<-h&&(n[c]+=2*h)}i.pts.geometry.attributes.position.needsUpdate=!0}var wh={start:3,good:6,combo:2,oops:4,near:2,win:3,lose:3,idle:2,overtake:3,boost:3,behind:3,collect:3,levelup:3},Gm=/فزت|مبروك|كسبت|فاز|انتصر|أحسنت|برافو|🏆|WIN|Victory|Congrat|You won/i,Wm=/خسر|حاول تاني|حاول مرة|انتهت|معلش|Game over|Try again|Failed/i;function Xm(i,t){if(!i||i.__cheer)return;i.__cheer=!0;let e=new URL("../_voice/",location.href).href,n={},s=null,r=0,a=performance.now(),o=!1,l=0,c=!1,h=p=>{if(!n[p]){let d=new Audio(`${e}${p}_${t}.mp3`);d.preload="auto",d.volume=.95,n[p]=d}return n[p]},u=(p,d)=>{let b=performance.now();if(!d&&b-r<6e3||c)return;let I=p+(1+Math.floor(Math.random()*wh[p])),C=h(I);c=!0,r=b,C.currentTime=0;let V=()=>{c=!1};C.onended=V,C.onerror=V;let S=C.play();S&&S.catch&&S.catch(V),setTimeout(V,4e3)};window.__cheer=(p,d)=>{wh[p]&&(o=!0,u(p,!!d))};let f=()=>{try{s=s||new(window.AudioContext||window.webkitAudioContext);let p=s.createOscillator(),d=s.createGain();p.type="sine",p.frequency.setValueAtTime(520,s.currentTime),p.frequency.exponentialRampToValueAtTime(900,s.currentTime+.08),d.gain.setValueAtTime(.08,s.currentTime),d.gain.exponentialRampToValueAtTime(.001,s.currentTime+.12),p.connect(d),d.connect(s.destination),p.start(),p.stop(s.currentTime+.13)}catch{}},g=()=>{a=performance.now(),f(),o||(o=!0,u("start",!0))};i.addEventListener("pointerdown",g,{passive:!0}),window.addEventListener("keydown",g,{passive:!0});let m="";new MutationObserver(()=>{if(!o)return;let p=(i.innerText||"").slice(0,600);p!==m&&(m=p,Gm.test(p)?u("win",!1):Wm.test(p)&&u("lose",!1))}).observe(i,{childList:!0,subtree:!0}),setInterval(()=>{let p=performance.now();!o||document.hidden||(p-a>14e3?(u("idle",!1),a=p-4e3):p-r>22e3&&(l++,u(l%5===0?"combo":"good",!1)))},2500)}function Th(i,t={}){let e=new URLSearchParams(typeof location!="undefined"?location.search:"");if(e.has("nopolish"))return i;let n=Object.assign({},Eh[e.get("look")||t.preset||"warm"]||Eh.warm,t.tune||{}),s=e.has("low")||!!t.low,r=e.has("rec"),a=i.render.bind(i),o=new WeakMap,l=performance.now(),c=null,h=null,u=null,f=null,g=0,m=0,A=0,p=!1,d=performance.now();function b(I,C){let V=i.getSize(new ct);g=V.x,m=V.y,A=i.getPixelRatio(),c=new Lr(i),c.setPixelRatio(A),c.setSize(g,m),h=new Ur(I,C),c.addPass(h),s||(u=new Gi(new ct(Math.max(2,g>>1),Math.max(2,m>>1)),n.bloom[0],n.bloom[1],n.bloom[2]),c.addPass(u)),c.addPass(new Dr),f=new Hi(Om),f.uniforms.contrast.value=n.contrast,f.uniforms.sat.value=n.sat,f.uniforms.tint.value=n.tint,f.uniforms.vig.value=n.vig,c.addPass(f)}return i.render=function(I,C){if(p||i.getRenderTarget()!==null||i.autoClear===!1||!I||!C||!I.isScene)return a(I,C);try{c||b(I,C);let V=i.getSize(new ct),S=i.getPixelRatio();(V.x!==g||V.y!==m||S!==A)&&(g=V.x,m=V.y,A=S,c.setPixelRatio(S),c.setSize(g,m),u&&u.resolution.set(Math.max(2,g>>1),Math.max(2,m>>1))),h.scene=I,h.camera=C,f.uniforms.time.value=(performance.now()-d)/1e3;let E=performance.now(),U=Math.min(.1,Math.max(0,(E-l)/1e3));if(l=E,!e.has("nomotes")&&t.motes!==!1){let y=o.get(I);y||(y=km(I,C,e.get("look")||t.preset||"warm",r),o.set(I,y)),Hm(y,C,U)}p=!0,c.render(),p=!1}catch(V){p=!1,typeof console!="undefined"&&console.warn("[polish] disabled:",V&&V.message),i.render=a,a(I,C)}},!e.has("nocheer")&&!r&&setTimeout(()=>Xm(i.domElement.parentElement&&i.domElement.parentElement.parentElement||document.body,e.get("voice")||t.voice||"puck"),0),i.__polish={preset:n,rec:r},i}var Ym=()=>{var i,t;return((i=navigator.deviceMemory)!=null?i:4)<=3||((t=navigator.hardwareConcurrency)!=null?t:4)<=4},jm=()=>{try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}},Zm={otter:"\u{1F9A6}",penguin:"\u{1F427}",beaver:"\u{1F9AB}",seal:"\u{1F9AD}",duck:"\u{1F986}"},Km=[2799816,15217706,16765498],Fr;function Jm(){if(Fr)return Fr;let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),Fr=new ln(i),Fr}var Br=class{constructor(t,e,n,s){this.n=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.g=new pe,this.g.setAttribute("position",new ve(this.pos,3)),this.pts=new Di(this.g,new ii({color:s,size:n,map:Jm(),transparent:!0,depthWrite:!1})),this.pts.frustumCulled=!1,t.add(this.pts),this.i=0;for(let r=0;r<e;r++)this.pos[r*3+1]=-50}emit(t,e,n,s,r,a,o=.6){let l=this.i++%this.n;this.pos.set([t,e,n],l*3),this.vel.set([s,r,a],l*3),this.life[l]=o}splash(t,e,n=14,s=3){for(let r=0;r<n;r++){let a=Math.random()*Math.PI*2;this.emit(t,.2,e,Math.cos(a)*s*Math.random(),2+Math.random()*s,Math.sin(a)*s*Math.random(),.7)}}update(t,e=9){for(let n=0;n<this.n;n++)if(!(this.life[n]<=0)){this.life[n]-=t,this.vel[n*3+1]-=e*t;for(let s=0;s<3;s++)this.pos[n*3+s]+=this.vel[n*3+s]*t;this.life[n]<=0&&(this.pos[n*3+1]=-50)}this.g.attributes.position.needsUpdate=!0}},pl=class{constructor(t,e,n){if(this.el=t,this.post=n||(()=>{}),Ch(e.lang),_h(e.gender==="girl"),this.age=Number(e.age)||5,this.save=$c(e.save),this.base=e.base||"./",this.sound=new ki,this.sound.muted=!!this.save.muted,this.quality={low:Ym()},document.getElementById("sp-style")||document.head.append(Ct("style",{id:"sp-style",text:yh+Ih+Mh})),this.root=Ct("div",{class:"sp-root",dir:vs()==="en"?"ltr":"rtl"}),t.append(this.root),this._unit(),!jm()){this.root.append(Ct("div",{class:"sp-loading"},Ct("div",{},kt("noWebgl")," ",Ct("button",{class:"sp-btn2",onclick:()=>this.post({type:"exit"})},kt("exit")))));return}this.loading=Ct("div",{class:"sp-loading"},kt("loading")),this.root.append(this.loading),this.renderer=Th(new dr({antialias:!this.quality.low,powerPreference:"high-performance"}),{preset:"warm",tune:{bloom:[.12,.4,.95],contrast:1.14,sat:1.15,vig:.28}}),this.maxPR=Math.min(window.devicePixelRatio||1,this.quality.low?1.25:1.5),this.pr=this.maxPR,this.renderer.setPixelRatio(this.pr),this.renderer.outputColorSpace=fe,this.renderer.toneMapping=fs,this.root.prepend(this.renderer.domElement),this.layer=Ct("div",{class:"sp-layer"}),this.root.append(this.layer),this.camera=new we(58,1,.3,400),this.input={x:0,pointer:null,ox:0,oy:0,dive:!1,keys:new Set},this.mode="menu",this.paused=!1,this._bind(),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this.frames=[],this.goodWin=0,this.clock=new zi,this._fonts().then(()=>{this.loading.remove(),this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"}),new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-Bold.ttf)`,{weight:"700"})];await Promise.race([Promise.all(t.map(e=>e.load().then(n=>document.fonts.add(n)))),new Promise(e=>setTimeout(e,900))])}catch{}}_unit(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.u=Math.min(this.cw,this.ch)/100,this.root.style.setProperty("--u",`${this.u}px`)}_resize(){this._unit(),this.renderer&&(this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.fov=this.cw<this.ch?66:54,this.camera.updateProjectionMatrix())}_buildWorld(t){this.scene&&this.scene.traverse(h=>{h.geometry&&h.geometry.dispose()}),this.sw=new Tr({round:t,easy:this.age<=4,seed:(Date.now()&65535)+1});let e=this.sw.round.len,n=this.scene=new pr;n.background=new St(9428223),n.fog=new fr(12577535,70,240);{let h=new yr().load(`${this.base}art/pano${t+1}.webp`,()=>{u.visible=!0});h.colorSpace=fe,h.wrapS=rs,h.repeat.set(2,.66),h.offset.set(0,.34);let u=new Xt(new Ni(230,230,160,48,1,!0),new ke({map:h,side:be,fog:!1}));u.visible=!1,u.renderOrder=-10,this.panoMesh=u,n.add(u)}n.add(new Mr(16055551,3840696,1.9));let s=new br(16775392,1.4);s.position.set(-20,40,20),n.add(s),this.water=dh(),this.water.repeat.set(48,150);let r=new Xt(new on(160,e+200),new In({map:this.water,transparent:!0,opacity:.88}));r.rotation.x=-Math.PI/2,r.position.set(0,0,-e/2),n.add(r);let a=new Xt(new on(160,e+200),Ft(8052976));a.rotation.x=-Math.PI/2,a.position.set(0,-1.6,-e/2),n.add(a);for(let h of[-1,1]){let u=[];for(let f=12;f>-e-20;f-=.6)u.push([h*7,f]);n.add(oh(u))}for(let h=0;h<14;h++){let u=h%2?1:-1,f=uh(5+h%3*2.5);f.position.set(u*(26+h%4*9),-.6,10-h*((e+40)/14)),n.add(f)}let o=[15217706,2779880,16765498,2799816];this.sw.swimmers.forEach((h,u)=>{let f=hh(o[u%4]);f.position.set(h.x,0,1.4),n.add(f)});let l=ch(7*2+2);l.position.set(0,0,-e),n.add(l);let c=this.sw.course;c.bumpers.forEach((h,u)=>{let f=sh(Km[u%3]);f.position.set(h.x,-.4,-h.s),n.add(f)}),this.noodles=c.noodles.map(h=>{let u=rh(h.len);return u.position.set(h.x,0,-h.s),n.add(u),u}),c.walls.forEach(h=>{let u=ah(h.x0,h.x1);u.position.z=-h.s,n.add(u)}),this.waves=c.waves.map(h=>{let u=new Xt(new on(7*2,h.len),new ke({map:this._waveTex(),transparent:!0,opacity:.8,depthWrite:!1}));return u.rotation.x=-Math.PI/2,u.position.set(0,.06,-(h.s+h.len/2)),n.add(u),u}),c.slides.forEach(h=>{let u=lh(h.len,h.side);u.position.set(h.side*(7+3.2),0,-h.s+1.5),n.add(u)}),this.models=this.sw.swimmers.map((h,u)=>{let f=cl(h.kind,h.cap,!0,u);return f.root.scale.setScalar(1.55),n.add(f.root),f}),this.ring=new Xt(new vr(.6,.75,28),new ke({color:16765498,transparent:!0,opacity:.9,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,n.add(this.ring),this.drops=new Br(n,260,.35,16777215),this.bubbles=new Br(n,80,.22,14743807),this.cam=null}_waveTex(){let t=document.createElement("canvas");t.width=64,t.height=128;let e=t.getContext("2d");for(let s=0;s<4;s++){e.fillStyle="rgba(255,255,255,0.75)",e.beginPath();for(let r=0;r<=64;r+=4)e.lineTo(r,s*32+8+Math.sin(r/6)*4);e.lineTo(64,s*32+16);for(let r=64;r>=0;r-=4)e.lineTo(r,s*32+16+Math.sin(r/6)*4);e.fill()}let n=new ln(t);return n.wrapS=n.wrapT=ti,n.repeat.set(3,3),n}_bind(){let t=this.root;for(let n of["pointerdown","pointerup","touchend","click","keydown"])t.addEventListener(n,()=>this.sound.unlock(),{capture:!0,passive:!0});this.joy=Ct("div",{class:"sp-joy"},Ct("i")),t.append(this.joy),t.addEventListener("pointerdown",n=>{if(n.target.closest("button")||this.mode!=="race"||this.paused||this.input.pointer!==null)return;this.input.pointer=n.pointerId,this.input.ox=n.clientX,this.input.oy=n.clientY;let s=t.getBoundingClientRect();this.joy.style.left=`${n.clientX-s.left}px`,this.joy.style.top=`${n.clientY-s.top}px`,this.joy.style.display="block",this.joy.firstChild.style.transform="translate(0,0)";try{t.setPointerCapture(n.pointerId)}catch{}}),t.addEventListener("pointermove",n=>{if(n.pointerId!==this.input.pointer)return;let s=this.u*12,r=n.clientX-this.input.ox,a=n.clientY-this.input.oy;r=Math.max(-s,Math.min(s,r)),this.input.x=r/s,this.joy.firstChild.style.transform=`translate(${r}px,${Math.max(-s,Math.min(s,a))*.3}px)`});let e=n=>{n.pointerId===this.input.pointer&&(this.input.pointer=null,this.input.x=0,this._joyHome())};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("click",n=>{n.target.closest("button")&&!n.target.closest(".sp-cbtn")&&this.sound.play("tap")},!0),this._onKey=n=>{let s=n.key.toLowerCase();n.type==="keydown"?(this.input.keys.add(s),this.mode==="race"&&(s==="escape"||s==="p")&&this.pause(),this.mode==="race"&&(s===" "||s==="w"||s==="arrowup")&&!n.repeat&&(this._stroke(),n.preventDefault())):this.input.keys.delete(s),this.mode==="race"&&(s.startsWith("arrow")||s===" ")&&n.preventDefault()},window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._onVis=()=>{document.hidden?(this.mode==="race"&&this.pause(),this.sound.suspend()):this.paused||this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=Ct("button",{class:"sp-soundpill",onclick:n=>{n.stopPropagation(),this.sound.unlock()}},kt("sound")),t.append(this.soundPill),this._tapped=!1,t.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden&&!this.paused?"block":"none"},700)}_joyHome(){this.joy&&(this.joy.style.display=this.mode==="race"?"block":"none",this.joy.style.left=`${vs()==="en"?this.u*18:this.cw-this.u*18}px`,this.joy.style.top=`${this.ch-this.u*18}px`,this.joy.firstChild.style.transform="translate(0,0)")}_readInput(){let t=this.input.keys,e=this.input.x;(t.has("arrowleft")||t.has("a"))&&(e=-1),(t.has("arrowright")||t.has("d"))&&(e=1);let n=this.input.dive||t.has("arrowdown")||t.has("s")||t.has("shift");return{x:e,dive:n}}_stroke(){if(!this.sw||this.mode!=="race"||this.paused)return;let t=this.sw.stroke();t&&(this.hud.grade.textContent=kt(t),this.hud.grade.style.color=t==="perfect"?"#ffd23a":t==="good"?"#8ae86a":"#ffffff",this.hud.grade.classList.remove("show"),this.hud.grade.offsetWidth,this.hud.grade.classList.add("show"))}_clear(){this.layer.replaceChildren()}_saveNow(){this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}_mute(t){let e=Ct("button",{class:"sp-round",style:t,"aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return e.addEventListener("click",n=>{n.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,this._saveNow(),e.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),e}_toastEl(){return this.toastEl=Ct("div",{class:"sp-toast"}),this.toastEl}toast(t,e=1.6){this.toastEl&&(this.toastEl.textContent=t,this.toastEl.classList.add("show"),clearTimeout(this._tt),this._tt=setTimeout(()=>this.toastEl&&this.toastEl.classList.remove("show"),e*1e3))}_topLeft(){return"top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)"}showMenu(){this.mode="menu",this.paused=!1,this.joy&&(this.joy.style.display="none"),this.sound.setUnder(!1),this.sound.setTempo(96),this.sound.setMode("menu"),this._buildWorld(0),this.otter=ih(),this.otter.position.set(0,.6,-6),this.otter.rotation.y=0,this.scene.add(this.otter),this._clear();let t=[[50,86],[24,70],[72,58],[28,44],[70,30],[46,12]],e=cn.map((r,a)=>{var c;let o=a+1>this.save.unlocked,l=(c=this.save.stars[r.id])!=null?c:0;return Ct("button",{class:`sp-isle${o?" lock":""}`,style:`left:${t[a][0]}%;top:${t[a][1]}%`,"aria-label":`${kt("round")} ${r.id} ${dl(r)}`,onclick:()=>{if(o){this.sound.play("no"),this.toast(kt("locked"));return}this.startRound(a)}},o?"\u{1F512}":a===cn.length-1?"\u{1F3C6}":He(r.id),Ct("small",{},dl(r)),Ct("span",{class:"stars"},o?"":"\u2B50".repeat(l)+"\u2606".repeat(3-l)))}),n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("class","sp-dots"),n.setAttribute("viewBox","0 0 100 100"),n.setAttribute("preserveAspectRatio","none");let s=document.createElementNS("http://www.w3.org/2000/svg","polyline");s.setAttribute("points",t.map(r=>r.join(",")).join(" ")),s.setAttribute("fill","none"),s.setAttribute("stroke","#fff"),s.setAttribute("stroke-width","1.2"),s.setAttribute("stroke-dasharray","2 2"),n.append(s),this.layer.append(Ct("button",{class:"sp-round",style:this._topLeft(),"aria-label":kt("exit"),onclick:()=>{this._saveNow(),this.post({type:"exit"})}},vs()==="en"?"\u2190":"\u2192"),Ct("div",{class:"sp-dim",style:"background:rgba(20,120,160,.25)"},Ct("div",{class:"sp-panel"},Ct("div",{class:"sp-logo",style:"font-size:calc(var(--u)*7)"},"\u{1F9A6} ",kt("title")),Ct("div",{class:"sp-map"},n,e),Ct("button",{class:"sp-btn2 sp-big",onclick:()=>this.startRound(this.save.unlocked-1)},"\u25B6 ",kt("swim")))),this._mute("bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)"),this._toastEl())}startRound(t){this.roundIndex=t,this._buildWorld(t),this.otter=null,this.mode="race",this.paused=!1,this.sound.setTempo(this.sw.round.bpm),this.sound.setMode("race"),this._hud(),this._joyHome(),this.hinted={}}_hud(){this._clear();let t=this.sw;this.hud={place:Ct("div",{class:"sp-place"},He(t.swimmers.length)),prog:Ct("div",{class:"sp-prog"},t.swimmers.map(s=>Ct("i",{class:s.isPlayer?"me":""},Zm[s.kind]))),qual:Ct("div",{class:"sp-qual"},`${He(0)}/${He(t.round.qualify)}`),breath:Ct("div",{class:"sp-breath"},[0,1,2,3,4].map(()=>Ct("i"))),grade:Ct("div",{class:"sp-grade"}),hint:Ct("div",{class:"sp-hint"}),count:Ct("div",{class:"sp-count"},""),stroke:Ct("button",{class:"sp-cbtn sp-stroke","aria-label":kt("stroke")},Ct("span",{class:"sp-pulse"}),kt("stroke")),dive:Ct("button",{class:"sp-cbtn sp-dive","aria-label":kt("dive")},kt("dive"))},this.hud.stroke.style.setProperty("--b",`${t.beat}s`),this.hud.stroke.addEventListener("pointerdown",s=>{s.stopPropagation(),s.preventDefault(),this._stroke()});let e=this.hud.dive;e.addEventListener("pointerdown",s=>{s.stopPropagation(),s.preventDefault(),this.input.dive=!0,e.classList.add("on");try{e.setPointerCapture(s.pointerId)}catch{}});let n=()=>{this.input.dive=!1,e.classList.remove("on")};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),this.layer.append(Ct("div",{class:"sp-hudtop"},this.hud.place,Ct("div",{class:"sp-roundbar"},Ct("b",{},t.round.id===4?kt("final"):`${kt("round")} ${He(t.round.id)}`),this.hud.prog),this.hud.qual),Ct("button",{class:"sp-round",style:"top:calc(max(calc(var(--u)*2.4),env(safe-area-inset-top)) + var(--u)*16);inset-inline-start:calc(var(--u)*3)","aria-label":kt("paused"),onclick:s=>{s.stopPropagation(),this.pause()}},"\u23F8"),this.hud.breath,this.hud.grade,this.hud.hint,this.hud.count,this.hud.stroke,this.hud.dive,this._mute("top:calc(max(calc(var(--u)*2.4),env(safe-area-inset-top)) + var(--u)*16);inset-inline-end:calc(var(--u)*3)"),this._toastEl()),this._hc={}}_hint(t,e=2.6){this.hinted[t]||(this.hinted[t]=!0,this.hud.hint.textContent=kt(t),this.hud.hint.classList.add("show"),clearTimeout(this._ht),this._ht=setTimeout(()=>this.hud&&this.hud.hint.classList.remove("show"),e*1e3))}pause(){if(this.mode!=="race"||this.paused)return;this.paused=!0,this.input.pointer=null,this.input.dive=!1,this.joy.style.display="none",this.sound.suspend();let t=Ct("div",{class:"sp-dim"},Ct("div",{class:"sp-panel"},Ct("div",{class:"sp-title"},kt("paused")),Ct("button",{class:"sp-btn2",onclick:()=>{t.remove(),this.paused=!1,this.sound.resume(),this._joyHome()}},"\u25B6 ",kt("resume")),Ct("button",{class:"sp-btn2 wood",onclick:()=>{this.sound.resume(),this.startRound(this.roundIndex)}},"\u21BB ",kt("restart")),Ct("button",{class:"sp-btn2 wood",onclick:()=>{this.sound.resume(),this.showMenu()}},kt("menu"))));this.layer.append(t)}_results(){var o;let t=this.sw,e=t.result,n=this.roundIndex;this.mode="results",this.joy.style.display="none",this.sound.setUnder(!1),this.sound.setMode("menu");let s=n===cn.length-1&&e.place===1;if(e.qualified){let l=cn[n].id;this.save.stars[l]=Math.max((o=this.save.stars[l])!=null?o:0,e.stars),n+2>this.save.unlocked&&n+1<cn.length&&(this.save.unlocked=n+2),this._saveNow(),this.sound.play("win")}else this.sound.play("lose");let r=e.qualified&&n+1<cn.length,a=Ct("div",{class:"sp-dim"},Ct("div",{class:"sp-panel"},Ct("div",{class:"sp-title"},s?kt("win"):e.qualified?kt("qual"):kt("out")),e.qualified?Ct("div",{class:"sp-stars"},[1,2,3].map(l=>Ct("span",{class:l<=e.stars?"":"off"},"\u2B50"))):null,Ct("div",{class:"sp-stat"},Ct("span",{},"\u{1F3C1} ",kt("place")," ",He(e.place)),Ct("span",{},"\u2B50 ",kt("perfect")," ",He(t.perfects))),Ct("div",{style:"display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center"},r?Ct("button",{class:"sp-btn2",onclick:()=>this.startRound(n+1)},kt("next")," \u25B6"):null,Ct("button",{class:r?"sp-btn2 wood":"sp-btn2",onclick:()=>this.startRound(n)},"\u21BB ",kt("again")),Ct("button",{class:"sp-btn2 wood",onclick:()=>this.showMenu()},kt("menu")))));this.hud.stroke.remove(),this.hud.dive.remove(),this.layer.append(a)}_raceFrame(t,e){let n=this.sw,s=this._readInput(),r=n.player.dive,a=n.step(t,s),o=n.player;o.dive!==r&&(this.sound.play(o.dive?"dive":"surface"),this.sound.setUnder(o.dive));for(let h of a)switch(h.type){case"count":this.sound.play("count"),this.hud.count.textContent=He(h.n);break;case"go":window.__cheer&&window.__cheer("start",!0),this.sound.play("go"),this.hud.count.textContent="",this.sound.setTempo(n.round.bpm),this._hint("hint",3.2);for(let u of n.swimmers)this.drops.splash(u.x,.5,10,3);break;case"beat":{let u=this.hud.stroke.firstChild;u.classList.remove("go"),u.offsetWidth,u.classList.add("go");break}case"stroke":{let u=n.swimmers[h.id];h.id===0&&(this.sound.play("stroke",h.grade),h.grade==="perfect"&&window.__cheer&&window.__cheer("combo")),this.drops.splash(u.x,-u.s,h.id===0?10:5,h.grade==="perfect"?3.5:2.2),this.models[h.id].paddle=.45;break}case"leap":h.id===0&&(this.sound.play("leap"),window.__cheer&&window.__cheer("near"));break;case"bonk":h.id===0&&(window.__cheer&&window.__cheer("oops"),this.sound.play("bonk"),this.shake=.35);break;case"breath":this.sound.play("breath"),this.toast(kt("breath"),1.2),this.sound.setUnder(!1);break;case"slide":h.id===0&&(this.sound.play("slide"),this.toast(kt("slide"),1.2));break;case"splash":this.drops.splash(h.x,-h.s,h.id===0?24:10,4),h.id===0&&this.sound.play("splash");break;case"finish":h.id===0&&(this.sound.play("finish"),window.__cheer&&window.__cheer((n.player.rank||9)<=3?"win":"lose",!0));break;case"over":setTimeout(()=>this.mode==="race"&&this._results(),1500);break;default:}let l=n.course;l.noodles.some(h=>h.s-o.s>0&&h.s-o.s<14)&&this._hint("hintDive"),l.walls.some(h=>h.s-o.s>0&&h.s-o.s<14&&o.x>h.x0-.5&&o.x<h.x1+.5)&&this._hint("hintLeap");let c=l.waves.some(h=>o.s>h.s&&o.s<h.s+2);c&&!this._waved&&(this._waved=!0,this.sound.play("wave"),this.toast(kt("wave"),1)),c||(this._waved=!1),this._sync(t,e)}_sync(t,e){var f,g,m,A;let n=this.sw;this.water.offset.y=(this.water.offset.y+t*.05)%1;for(let p of this.waves)p.material.map.offset.y=(p.material.map.offset.y-t*.6)%1;n.course.noodles.forEach((p,d)=>{this.noodles[d].userData.arm.rotation.y=p.a}),n.swimmers.forEach((p,d)=>{var C;let b=this.models[d];b.root.position.set(p.x,p.y-.12+Math.sin(e*4+d)*.04,-p.s),b.root.rotation.x=p.air>0?-.6*Math.cos((1-p.air/.9)*Math.PI):p.slide?.4:0,b.root.rotation.z=p.stun>0?Math.sin(e*25)*.4:0,b.paddle=Math.max(0,((C=b.paddle)!=null?C:0)-t);let I=e*(d===0?15:8)+d;if(b.arms[0].rotation.x=b.paddle>0?-2.6*Math.sin(b.paddle/.45*Math.PI):Math.sin(I)*1.5-.6,b.arms[1].rotation.x=b.paddle>0?2.6*Math.sin(b.paddle/.45*Math.PI)-1:-Math.sin(I)*1.5-.6,b.legs.forEach((V,S)=>{V.rotation.x=Math.sin(e*(d===0?30:18)+S*Math.PI)*.6}),b.head.rotation.z=Math.sin(e*3+d)*.25,b.head.rotation.y=Math.sin(e*(d===0?5:3.4)+d*1.7)*(d===0?1.45:1.2),p.dive&&Math.random()<.3&&this.bubbles.emit(p.x+(Math.random()-.5)*.4,p.y+.2,-p.s,0,1.2,0,.8),d===0&&!p.dive&&p.air<=0&&p.v>1)for(let V=0;V<3;V++)this.drops.emit(p.x+(Math.random()-.5)*1.1,.12,-p.s+.5+Math.random()*.8,(Math.random()-.5)*2.2,2+Math.random()*1.5,1.5+Math.random()*2,.55);!p.dive&&p.air<=0&&!p.slide&&p.v>3&&Math.random()<.25&&this.drops.emit(p.x+(Math.random()-.5)*.6,.1,-p.s+.6,Math.random()-.5,1.4,1,.4)}),this.drops.update(t),this.bubbles.update(t,-3);let s=n.player;this.ring.position.set(s.x,.05,-s.s),this.ring.visible=!s.slide&&this.mode!=="menu";let r=this.cw<this.ch,a=new w(s.x*.55,r?4.9:3.5,-s.s+(r?6.8:5.4));this.cam||(this.cam=a.clone()),this.cam.lerp(a,Math.min(1,t*4)),this.shake=Math.max(0,((f=this.shake)!=null?f:0)-t*2),this.camera.position.set(this.cam.x+(Math.random()-.5)*this.shake*.3,this.cam.y,this.cam.z),this.camera.lookAt(this.cam.x,0,this.cam.z-(r?8.8:7.2)-7);{let p=n.state==="start"||s.done?1:0;this._introK=((g=this._introK)!=null?g:0)+(p-((m=this._introK)!=null?m:0))*Math.min(1,t*(p?4:1.6));let d=this._introK;if(d>.01){let b=d*d*(3-2*d),I=new w(s.x*.5,1.5,-s.s-(n.state==="start"?6.5:5)),C=new w(s.x*.5,.45,-s.s+.2),V=this.camera.position.clone().lerp(I,b),S=new w;this.camera.getWorldDirection(S);let E=this.camera.position.clone().addScaledVector(S,10).lerp(C,b);this.camera.position.copy(V),this.camera.lookAt(E)}}if(this.panoMesh&&this.panoMesh.position.set(this.camera.position.x,52,this.camera.position.z),this.mode!=="race")return;let o=this._hc;o.rank!==s.rank&&(window.__cheer&&o.rank&&s.rank&&window.__cheer(s.rank<o.rank?"overtake":"behind"),o.rank=s.rank,this.hud.place.textContent=He((A=s.rank)!=null?A:n.swimmers.length));let l=n.qualifiedCount;o.q!==l&&(o.q=l,this.hud.qual.textContent=`${He(l)}/${He(n.round.qualify)}`);let c=n.round.len,h=vs()!=="en";n.swimmers.forEach((p,d)=>{let b=Math.min(1,p.s/c)*92+4;this.hud.prog.children[d].style.left=`${h?100-b:b}%`});let u=Math.ceil(s.breath*5);o.b!==u&&(o.b=u,[...this.hud.breath.children].forEach((p,d)=>p.classList.toggle("off",d>=u)))}_frame(){let t=Math.min(this.clock.getDelta(),.1),e=this.clock.elapsedTime;if(this._adapt(t),!!this.scene){if(this.mode==="race"&&!this.paused)this._raceFrame(t,e);else if(this.mode==="results")this.sw.step(t,{}),this._sync(t,e);else if(this.mode==="menu"){this._sync(t,e),this.otter&&(this.otter.userData.wave.rotation.z=-.6+Math.sin(e*6)*.5,this.otter.rotation.y=Math.sin(e*.6)*.3);let n=e*.15;this.camera.position.set(Math.sin(n)*6,2.6,-6+Math.cos(n)*6+2),this.camera.lookAt(0,1.2,-6)}this.renderer.render(this.scene,this.camera)}}_adapt(t){if(this.frames.push(t),this.frames.length<90)return;let e=this.frames.reduce((n,s)=>n+s,0)/this.frames.length;this.frames.length=0,e>1/40&&this.pr>.75?(this.pr=Math.max(.75,this.pr-.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0):e<1/57&&this.pr<this.maxPR&&++this.goodWin>=4&&(this.pr=Math.min(this.maxPR,this.pr+.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0)}dispose(){if(clearInterval(this._pill),this.sound.dispose(),this.renderer){this.renderer.setAnimationLoop(null),this.scene&&this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}}this.ro&&this.ro.disconnect(),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),document.removeEventListener("visibilitychange",this._onVis),this.root.remove()}},gl={start(i,t,e){let n=new pl(i,t||{},e);return gl.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.SplashRace=gl;var QA=gl;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
