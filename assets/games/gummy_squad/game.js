(()=>{var qo="170";var Sh=0,_l=1,Eh=2;var Tc=1,wh=2,yn=3,On=0,Le=1,ze=2,hn=0,Li=1,Xe=2,Il=3,Ml=4,Th=5,ii=100,Vh=101,Rh=102,Ph=103,Uh=104,Lh=200,Dh=201,Nh=202,Bh=203,Ma=204,ba=205,Fh=206,Oh=207,zh=208,kh=209,qh=210,Hh=211,Gh=212,Wh=213,Xh=214,Sa=0,Ea=1,wa=2,Fi=3,Ta=4,Va=5,Ra=6,Pa=7,Vc=0,Yh=1,Zh=2,Fn=0,Ho=1,Go=2,Wo=3,xs=4,Jh=5,Xo=6,Yo=7;var Rc=300,Oi=301,zi=302,Ua=303,La=304,Vr=306,Mn=1e3,ai=1001,Da=1002,ke=1003,jh=1004;var Es=1005;var ln=1006,Xr=1007;var oi=1008;var bn=1009,Pc=1010,Uc=1011,us=1012,Zo=1013,li=1014,cn=1015,nn=1016,Jo=1017,jo=1018,ki=1020,Lc=35902,Dc=1021,Nc=1022,tn=1023,Bc=1024,Fc=1025,Di=1026,qi=1027,Ko=1028,Qo=1029,Oc=1030,$o=1031;var tl=1033,Qs=33776,$s=33777,tr=33778,er=33779,Na=35840,Ba=35841,Fa=35842,Oa=35843,za=36196,ka=37492,qa=37496,Ha=37808,Ga=37809,Wa=37810,Xa=37811,Ya=37812,Za=37813,Ja=37814,ja=37815,Ka=37816,Qa=37817,$a=37818,to=37819,eo=37820,no=37821,nr=36492,io=36494,so=36495,zc=36283,ro=36284,ao=36285,oo=36286;var ir=2300,lo=2301,Yr=2302,bl=2400,Sl=2401,El=2402;var Kh=3200,Qh=3201;var kc=0,$h=1,Bn="",me="srgb",Xi="srgb-linear",Rr="linear",$t="srgb";var xi=7680;var wl=519,tu=512,eu=513,nu=514,qc=515,iu=516,su=517,ru=518,au=519,Tl=35044,Hc=35048;var Vl="300 es",_n=2e3,sr=2001,zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zr=Math.PI/180,co=180/Math.PI;function vs(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[s&255]+Se[s>>8&255]+Se[s>>16&255]+Se[s>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Ue(s,t,e){return Math.max(t,Math.min(e,s))}function ou(s,t){return(s%t+t)%t}function Jr(s,t,e){return(1-e)*s+e*t}function ts(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var bt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],m=n[8],A=i[0],g=i[3],d=i[6],_=i[1],I=i[4],x=i[7],V=i[2],S=i[5],E=i[8];return r[0]=a*A+o*_+l*V,r[3]=a*g+o*I+l*S,r[6]=a*d+o*x+l*E,r[1]=c*A+h*_+u*V,r[4]=c*g+h*I+u*S,r[7]=c*d+h*x+u*E,r[2]=f*A+p*_+m*V,r[5]=f*g+p*I+m*S,r[8]=f*d+p*x+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,m=e*u+n*f+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=u*A,t[1]=(i*c-h*n)*A,t[2]=(o*n-i*a)*A,t[3]=f*A,t[4]=(h*e-i*l)*A,t[5]=(i*r-o*e)*A,t[6]=p*A,t[7]=(n*l-c*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(jr.makeScale(t,e)),this}rotate(t){return this.premultiply(jr.makeRotation(-t)),this}translate(t,e){return this.premultiply(jr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},jr=new Nt;function Gc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function rr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lu(){let s=rr("canvas");return s.style.display="block",s}var Rl={};function ls(s){s in Rl||(Rl[s]=!0,console.warn(s))}function cu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function hu(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function uu(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var qt={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===$t&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===$t&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?Rr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function In(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ni(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Pl=[.64,.33,.3,.6,.15,.06],Ul=[.2126,.7152,.0722],Ll=[.3127,.329],Dl=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nl=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[Xi]:{primaries:Pl,whitePoint:Ll,transfer:Rr,toXYZ:Dl,fromXYZ:Nl,luminanceCoefficients:Ul,workingColorSpaceConfig:{unpackColorSpace:me},outputColorSpaceConfig:{drawingBufferColorSpace:me}},[me]:{primaries:Pl,whitePoint:Ll,transfer:$t,toXYZ:Dl,fromXYZ:Nl,luminanceCoefficients:Ul,outputColorSpaceConfig:{drawingBufferColorSpace:me}}});var vi,ho=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=rr("canvas")),vi.width=t.width,vi.height=t.height;let n=vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=rr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},du=0,ar=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=vs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Kr(i[a].image)):r.push(Kr(i[a]))}else r=Kr(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Kr(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ho.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var fu=0,De=class s extends zn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=ai,i=ai,r=ln,a=oi,o=tn,l=bn,c=s.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=vs(),this.name="",this.source=new ar(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mn:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case Da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mn:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case Da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Rc;De.DEFAULT_ANISOTROPY=1;var ne=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],m=l[9],A=l[2],g=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-A)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+A)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(c+1)/2,x=(p+1)/2,V=(d+1)/2,S=(h+f)/4,E=(u+A)/4,w=(m+g)/4;return I>x&&I>V?I<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(I),i=S/n,r=E/n):x>V?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=S/i,r=w/i):V<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(V),n=E/r,i=w/r),this.set(n,i,r,e),this}let _=Math.sqrt((g-m)*(g-m)+(u-A)*(u-A)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-A)/_,this.z=(f-h)/_,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},uo=class extends zn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new De(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ar(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ve=class extends uo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},or=class extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fo=class extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],p=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=m,t[e+3]=A;return}if(u!==A||l!==f||c!==p||h!==m){let g=1-o,d=l*f+c*p+h*m+u*A,_=d>=0?1:-1,I=1-d*d;if(I>Number.EPSILON){let V=Math.sqrt(I),S=Math.atan2(V,d*_);g=Math.sin(g*S)/V,o=Math.sin(o*S)/V}let x=o*_;if(l=l*g+f*x,c=c*g+p*x,h=h*g+m*x,u=u*g+A*x,g===1-o){let V=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=V,c*=V,h*=V,u*=V}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*p-c*f,t[e+1]=l*m+h*f+c*u-o*p,t[e+2]=c*m+h*p+o*f-l*u,t[e+3]=h*m-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),p=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u-f*p*m;break;case"YXZ":this._x=f*h*u+c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u+f*p*m;break;case"ZXY":this._x=f*h*u-c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u-f*p*m;break;case"ZYX":this._x=f*h*u-c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u+f*p*m;break;case"YZX":this._x=f*h*u+c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u-f*p*m;break;case"XZY":this._x=f*h*u-c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qr.copy(this).projectOnVector(t),this.sub(Qr)}reflect(t){return this.sub(Qr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qr=new R,Bl=new kn,Sn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ke):Ke.fromBufferAttribute(r,a),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox)),ws.applyMatrix4(t.matrixWorld),this.union(ws)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(es),Ts.subVectors(this.max,es),yi.subVectors(t.a,es),Ci.subVectors(t.b,es),_i.subVectors(t.c,es),Rn.subVectors(Ci,yi),Pn.subVectors(_i,Ci),jn.subVectors(yi,_i);let e=[0,-Rn.z,Rn.y,0,-Pn.z,Pn.y,0,-jn.z,jn.y,Rn.z,0,-Rn.x,Pn.z,0,-Pn.x,jn.z,0,-jn.x,-Rn.y,Rn.x,0,-Pn.y,Pn.x,0,-jn.y,jn.x,0];return!$r(e,yi,Ci,_i,Ts)||(e=[1,0,0,0,1,0,0,0,1],!$r(e,yi,Ci,_i,Ts))?!1:(Vs.crossVectors(Rn,Pn),e=[Vs.x,Vs.y,Vs.z],$r(e,yi,Ci,_i,Ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},gn=[new R,new R,new R,new R,new R,new R,new R,new R],Ke=new R,ws=new Sn,yi=new R,Ci=new R,_i=new R,Rn=new R,Pn=new R,jn=new R,es=new R,Ts=new R,Vs=new R,Kn=new R;function $r(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Kn.fromArray(s,r);let o=i.x*Math.abs(Kn.x)+i.y*Math.abs(Kn.y)+i.z*Math.abs(Kn.z),l=t.dot(Kn),c=e.dot(Kn),h=n.dot(Kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var pu=new Sn,ns=new R,ta=new R,qn=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):pu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ns.subVectors(t,this.center);let e=ns.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ns,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ns.copy(t.center).add(ta)),this.expandByPoint(ns.copy(t.center).sub(ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},mn=new R,ea=new R,Rs=new R,Un=new R,na=new R,Ps=new R,ia=new R,lr=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ea.copy(t).add(e).multiplyScalar(.5),Rs.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(ea);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Rs),o=Un.dot(this.direction),l=-Un.dot(Rs),c=Un.lengthSq(),h=Math.abs(1-a*a),u,f,p,m;if(h>0)if(u=a*l-o,f=a*o-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let A=1/h;u*=A,f*=A,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ea).addScaledVector(Rs,f),p}intersectSphere(t,e){mn.subVectors(t.center,this.origin);let n=mn.dot(this.direction),i=mn.dot(mn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,i,r){na.subVectors(e,t),Ps.subVectors(n,t),ia.crossVectors(na,Ps);let a=this.direction.dot(ia),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Un.subVectors(this.origin,t);let l=o*this.direction.dot(Ps.crossVectors(Un,Ps));if(l<0)return null;let c=o*this.direction.dot(na.cross(Un));if(c<0||l+c>a)return null;let h=-o*Un.dot(ia);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,f,p,m,A,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,f,p,m,A,g)}set(t,e,n,i,r,a,o,l,c,h,u,f,p,m,A,g){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=m,d[11]=A,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),a=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,p=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+m*c,e[5]=f-A*c,e[9]=-o*l,e[2]=A-f*c,e[6]=m+p*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,p=l*u,m=c*h,A=c*u;e[0]=f+A*o,e[4]=m*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=A+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,p=l*u,m=c*h,A=c*u;e[0]=f-A*o,e[4]=-a*u,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=A-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,p=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=m*c-p,e[8]=f*c+A,e[1]=l*u,e[5]=A*c+f,e[9]=p*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=A-f*u,e[8]=m*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+m,e[10]=f-A*u}else if(t.order==="XZY"){let f=a*l,p=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+A,e[5]=a*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=o*h,e[10]=A*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gu,t,mu)}lookAt(t,e,n){let i=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Ln.crossVectors(n,Fe),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Ln.crossVectors(n,Fe)),Ln.normalize(),Us.crossVectors(Fe,Ln),i[0]=Ln.x,i[4]=Us.x,i[8]=Fe.x,i[1]=Ln.y,i[5]=Us.y,i[9]=Fe.y,i[2]=Ln.z,i[6]=Us.z,i[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],m=n[2],A=n[6],g=n[10],d=n[14],_=n[3],I=n[7],x=n[11],V=n[15],S=i[0],E=i[4],w=i[8],M=i[12],y=i[1],T=i[5],z=i[9],O=i[13],H=i[2],J=i[6],G=i[10],tt=i[14],q=i[3],rt=i[7],dt=i[11],Mt=i[15];return r[0]=a*S+o*y+l*H+c*q,r[4]=a*E+o*T+l*J+c*rt,r[8]=a*w+o*z+l*G+c*dt,r[12]=a*M+o*O+l*tt+c*Mt,r[1]=h*S+u*y+f*H+p*q,r[5]=h*E+u*T+f*J+p*rt,r[9]=h*w+u*z+f*G+p*dt,r[13]=h*M+u*O+f*tt+p*Mt,r[2]=m*S+A*y+g*H+d*q,r[6]=m*E+A*T+g*J+d*rt,r[10]=m*w+A*z+g*G+d*dt,r[14]=m*M+A*O+g*tt+d*Mt,r[3]=_*S+I*y+x*H+V*q,r[7]=_*E+I*T+x*J+V*rt,r[11]=_*w+I*z+x*G+V*dt,r[15]=_*M+I*O+x*tt+V*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],m=t[3],A=t[7],g=t[11],d=t[15];return m*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*p-n*l*p)+A*(+e*l*p-e*c*f+r*a*f-i*a*p+i*c*h-r*l*h)+g*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],m=t[12],A=t[13],g=t[14],d=t[15],_=u*g*c-A*f*c+A*l*p-o*g*p-u*l*d+o*f*d,I=m*f*c-h*g*c-m*l*p+a*g*p+h*l*d-a*f*d,x=h*A*c-m*u*c+m*o*p-a*A*p-h*o*d+a*u*d,V=m*u*l-h*A*l-m*o*f+a*A*f+h*o*g-a*u*g,S=e*_+n*I+i*x+r*V;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return t[0]=_*E,t[1]=(A*f*r-u*g*r-A*i*p+n*g*p+u*i*d-n*f*d)*E,t[2]=(o*g*r-A*l*r+A*i*c-n*g*c-o*i*d+n*l*d)*E,t[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*p-n*l*p)*E,t[4]=I*E,t[5]=(h*g*r-m*f*r+m*i*p-e*g*p-h*i*d+e*f*d)*E,t[6]=(m*l*r-a*g*r-m*i*c+e*g*c+a*i*d-e*l*d)*E,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*p+e*l*p)*E,t[8]=x*E,t[9]=(m*u*r-h*A*r-m*n*p+e*A*p+h*n*d-e*u*d)*E,t[10]=(a*A*r-m*o*r+m*n*c-e*A*c-a*n*d+e*o*d)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*E,t[12]=V*E,t[13]=(h*A*i-m*u*i+m*n*f-e*A*f-h*n*g+e*u*g)*E,t[14]=(m*o*i-a*A*i-m*n*l+e*A*l+a*n*g-e*o*g)*E,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*E,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,m=r*u,A=a*h,g=a*u,d=o*u,_=l*c,I=l*h,x=l*u,V=n.x,S=n.y,E=n.z;return i[0]=(1-(A+d))*V,i[1]=(p+x)*V,i[2]=(m-I)*V,i[3]=0,i[4]=(p-x)*S,i[5]=(1-(f+d))*S,i[6]=(g+_)*S,i[7]=0,i[8]=(m+I)*E,i[9]=(g-_)*E,i[10]=(1-(f+A))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Ii.set(i[0],i[1],i[2]).length(),a=Ii.set(i[4],i[5],i[6]).length(),o=Ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Qe.copy(this);let c=1/r,h=1/a,u=1/o;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=_n){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,m;if(o===_n)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===sr)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=_n){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*c,p=(n+i)*h,m,A;if(o===_n)m=(a+r)*u,A=-2*u;else if(o===sr)m=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=A,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ii=new R,Qe=new ae,gu=new R(0,0,0),mu=new R(1,1,1),Ln=new R,Us=new R,Fe=new R,Fl=new ae,Ol=new kn,un=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var cr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Au=0,zl=new R,Mi=new kn,An=new ae,Ls=new R,is=new R,xu=new R,vu=new kn,kl=new R(1,0,0),ql=new R(0,1,0),Hl=new R(0,0,1),Gl={type:"added"},yu={type:"removed"},bi={type:"childadded",child:null},sa={type:"childremoved",child:null},_e=class s extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new R,e=new un,n=new kn,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new Nt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.premultiply(Mi),this}rotateX(t){return this.rotateOnAxis(kl,t)}rotateY(t){return this.rotateOnAxis(ql,t)}rotateZ(t){return this.rotateOnAxis(Hl,t)}translateOnAxis(t,e){return zl.copy(t).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kl,t)}translateY(t){return this.translateOnAxis(ql,t)}translateZ(t){return this.translateOnAxis(Hl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ls.copy(t):Ls.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(is,Ls,this.up):An.lookAt(Ls,is,this.up),this.quaternion.setFromRotationMatrix(An),i&&(An.extractRotation(i.matrixWorld),Mi.setFromRotationMatrix(An),this.quaternion.premultiply(Mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gl),bi.child=t,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yu),sa.child=t,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gl),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,t,xu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,vu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};_e.DEFAULT_UP=new R(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $e=new R,xn=new R,ra=new R,vn=new R,Si=new R,Ei=new R,Wl=new R,aa=new R,oa=new R,la=new R,ca=new ne,ha=new ne,ua=new ne,si=class s{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$e.subVectors(t,e),i.cross($e);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){$e.subVectors(i,e),xn.subVectors(n,e),ra.subVectors(t,e);let a=$e.dot($e),o=$e.dot(xn),l=$e.dot(ra),c=xn.dot(xn),h=xn.dot(ra),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return ca.setScalar(0),ha.setScalar(0),ua.setScalar(0),ca.fromBufferAttribute(t,e),ha.fromBufferAttribute(t,n),ua.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(ca,r.x),a.addScaledVector(ha,r.y),a.addScaledVector(ua,r.z),a}static isFrontFacing(t,e,n,i){return $e.subVectors(n,e),xn.subVectors(t,e),$e.cross(xn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),$e.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Si.subVectors(i,n),Ei.subVectors(r,n),aa.subVectors(t,n);let l=Si.dot(aa),c=Ei.dot(aa);if(l<=0&&c<=0)return e.copy(n);oa.subVectors(t,i);let h=Si.dot(oa),u=Ei.dot(oa);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Si,a);la.subVectors(t,r);let p=Si.dot(la),m=Ei.dot(la);if(m>=0&&p<=m)return e.copy(r);let A=p*c-l*m;if(A<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Ei,o);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return Wl.subVectors(r,i),o=(u-h)/(u-h+(p-m)),e.copy(i).addScaledVector(Wl,o);let d=1/(g+A+f);return a=A*d,o=f*d,e.copy(n).addScaledVector(Si,a).addScaledVector(Ei,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function da(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=ou(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=da(a,r,t+1/3),this.g=da(a,r,t),this.b=da(a,r,t-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(t,e=me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){let n=Wc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return qt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Ue(Ee.r*255,0,255))*65536+Math.round(Ue(Ee.g*255,0,255))*256+Math.round(Ue(Ee.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ee.copy(this),e);let n=Ee.r,i=Ee.g,r=Ee.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=me){qt.fromWorkingColorSpace(Ee.copy(this),t);let e=Ee.r,n=Ee.g,i=Ee.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(Ds);let n=Jr(Dn.h,Ds.h,e),i=Jr(Dn.s,Ds.s,e),r=Jr(Dn.l,Ds.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ee=new Et;Et.NAMES=Wc;var Cu=0,Hn=class extends zn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=vs(),this.name="",this.blending=Li,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=ba,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ba&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ye=class extends Hn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ge=new R,Ns=new bt,Ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Tl,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ns.fromBufferAttribute(this,e),Ns.applyMatrix3(t),this.setXY(e,Ns.x,Ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ts(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tl&&(t.usage=this.usage),t}};var hr=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ur=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var te=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},_u=0,We=new ae,fa=new _e,wi=new R,Oe=new Sn,ss=new Sn,Ce=new R,pe=class s extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gc(t)?ur:hr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return fa.lookAt(t),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ss.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(Oe.min,ss.min),Oe.expandByPoint(Ce),Ce.addVectors(Oe.max,ss.max),Oe.expandByPoint(Ce)):(Oe.expandByPoint(ss.min),Oe.expandByPoint(ss.max))}Oe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ce.fromBufferAttribute(o,c),l&&(wi.fromBufferAttribute(t,c),Ce.add(wi)),i=Math.max(i,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<n.count;w++)o[w]=new R,l[w]=new R;let c=new R,h=new R,u=new R,f=new bt,p=new bt,m=new bt,A=new R,g=new R;function d(w,M,y){c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,M),m.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(f),m.sub(f);let T=1/(p.x*m.y-m.x*p.y);isFinite(T)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(T),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(T),o[w].add(A),o[M].add(A),o[y].add(A),l[w].add(g),l[M].add(g),l[y].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let w=0,M=_.length;w<M;++w){let y=_[w],T=y.start,z=y.count;for(let O=T,H=T+z;O<H;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let I=new R,x=new R,V=new R,S=new R;function E(w){V.fromBufferAttribute(i,w),S.copy(V);let M=o[w];I.copy(M),I.sub(V.multiplyScalar(V.dot(M))).normalize(),x.crossVectors(S,M);let T=x.dot(l[w])<0?-1:1;a.setXYZW(w,I.x,I.y,I.z,T)}for(let w=0,M=_.length;w<M;++w){let y=_[w],T=y.start,z=y.count;for(let O=T,H=T+z;O<H;O+=3)E(t.getX(O+0)),E(t.getX(O+1)),E(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let f=0,p=t.count;f<p;f+=3){let m=t.getX(f+0),A=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,m=0;for(let A=0,g=l.length;A<g;A++){o.isInterleavedBufferAttribute?p=l[A]*o.data.stride+o.offset:p=l[A]*h;for(let d=0;d<h;d++)f[m++]=c[p++]}return new Ae(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xl=new ae,Qn=new lr,Bs=new qn,Yl=new R,Fs=new R,Os=new R,zs=new R,pa=new R,ks=new R,Zl=new R,qs=new R,Jt=class extends _e{constructor(t=new pe,e=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){ks.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(pa.fromBufferAttribute(u,t),a?ks.addScaledVector(pa,h):ks.addScaledVector(pa.sub(e),h))}e.add(ks)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(Bs.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Bs,Yl)===null||Qn.origin.distanceToSquared(Yl)>(t.far-t.near)**2))&&(Xl.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(Xl),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=f.length;m<A;m++){let g=f[m],d=a[g.materialIndex],_=Math.max(g.start,p.start),I=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let x=_,V=I;x<V;x+=3){let S=o.getX(x),E=o.getX(x+1),w=o.getX(x+2);i=Hs(this,d,t,n,c,h,u,S,E,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),A=Math.min(o.count,p.start+p.count);for(let g=m,d=A;g<d;g+=3){let _=o.getX(g),I=o.getX(g+1),x=o.getX(g+2);i=Hs(this,a,t,n,c,h,u,_,I,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,A=f.length;m<A;m++){let g=f[m],d=a[g.materialIndex],_=Math.max(g.start,p.start),I=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=_,V=I;x<V;x+=3){let S=x,E=x+1,w=x+2;i=Hs(this,d,t,n,c,h,u,S,E,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),A=Math.min(l.count,p.start+p.count);for(let g=m,d=A;g<d;g+=3){let _=g,I=g+1,x=g+2;i=Hs(this,a,t,n,c,h,u,_,I,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Iu(s,t,e,n,i,r,a,o){let l;if(t.side===Le?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===On,o),l===null)return null;qs.copy(o),qs.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(qs);return c<e.near||c>e.far?null:{distance:c,point:qs.clone(),object:s}}function Hs(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Fs),s.getVertexPosition(l,Os),s.getVertexPosition(c,zs);let h=Iu(s,t,e,n,Fs,Os,zs,Zl);if(h){let u=new R;si.getBarycoord(Zl,Fs,Os,zs,u),i&&(h.uv=si.getInterpolatedAttribute(i,o,l,c,u,new bt)),r&&(h.uv1=si.getInterpolatedAttribute(r,o,l,c,u,new bt)),a&&(h.normal=si.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new R,materialIndex:0};si.getNormal(Fs,Os,zs,f.normal),h.face=f,h.barycoord=u}return h}var ci=class s extends pe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function m(A,g,d,_,I,x,V,S,E,w,M){let y=x/E,T=V/w,z=x/2,O=V/2,H=S/2,J=E+1,G=w+1,tt=0,q=0,rt=new R;for(let dt=0;dt<G;dt++){let Mt=dt*T-O;for(let Ot=0;Ot<J;Ot++){let ie=Ot*y-z;rt[A]=ie*_,rt[g]=Mt*I,rt[d]=H,c.push(rt.x,rt.y,rt.z),rt[A]=0,rt[g]=0,rt[d]=S>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Ot/E),u.push(1-dt/w),tt+=1}}for(let dt=0;dt<w;dt++)for(let Mt=0;Mt<E;Mt++){let Ot=f+Mt+J*dt,ie=f+Mt+J*(dt+1),X=f+(Mt+1)+J*(dt+1),et=f+(Mt+1)+J*dt;l.push(Ot,ie,et),l.push(ie,X,et),q+=6}o.addGroup(p,q,M),p+=q,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Hi(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Te(s){let t={};for(let e=0;e<s.length;e++){let n=Hi(s[e]);for(let i in n)t[i]=n[i]}return t}function Mu(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Xc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var Wn={clone:Hi,merge:Te},bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Su=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xe=class extends Hn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bu,this.fragmentShader=Su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=Mu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},dr=class extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=_n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Nn=new R,Jl=new bt,jl=new bt,we=class extends dr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return co*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,Jl,jl),e.subVectors(jl,Jl)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ti=-90,Vi=1,po=class extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new we(Ti,Vi,t,e);i.layers=this.layers,this.add(i);let r=new we(Ti,Vi,t,e);r.layers=this.layers,this.add(r);let a=new we(Ti,Vi,t,e);a.layers=this.layers,this.add(a);let o=new we(Ti,Vi,t,e);o.layers=this.layers,this.add(o);let l=new we(Ti,Vi,t,e);l.layers=this.layers,this.add(l);let c=new we(Ti,Vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},fr=class extends De{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Oi,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},go=class extends Ve{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new fr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ci(5,5,5),r=new xe({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:hn});r.uniforms.tEquirect.value=e;let a=new Jt(i,r),o=e.minFilter;return e.minFilter===oi&&(e.minFilter=ln),new po(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},ga=new R,Eu=new R,wu=new Nt,Cn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ga.subVectors(n,e).cross(Eu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ga),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wu.getNormalMatrix(t),i=this.coplanarPoint(ga).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},$n=new qn,Gs=new R,ds=class{constructor(t=new Cn,e=new Cn,n=new Cn,i=new Cn,r=new Cn,a=new Cn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],p=i[8],m=i[9],A=i[10],g=i[11],d=i[12],_=i[13],I=i[14],x=i[15];if(n[0].setComponents(l-r,f-c,g-p,x-d).normalize(),n[1].setComponents(l+r,f+c,g+p,x+d).normalize(),n[2].setComponents(l+a,f+h,g+m,x+_).normalize(),n[3].setComponents(l-a,f-h,g-m,x-_).normalize(),n[4].setComponents(l-o,f-u,g-A,x-I).normalize(),e===_n)n[5].setComponents(l+o,f+u,g+A,x+I).normalize();else if(e===sr)n[5].setComponents(o,u,A,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Gs.x=i.normal.x>0?t.max.x:t.min.x,Gs.y=i.normal.y>0?t.max.y:t.min.y,Gs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Yc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Tu(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<u.length;p++){let m=u[f],A=u[p];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++f,u[f]=A)}u.length=f+1;for(let p=0,m=u.length;p<m;p++){let A=u[p];s.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var hi=class s extends pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,p=[],m=[],A=[],g=[];for(let d=0;d<h;d++){let _=d*f-a;for(let I=0;I<c;I++){let x=I*u-r;m.push(x,-_,0),A.push(0,0,1),g.push(I/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<o;_++){let I=_+c*d,x=_+c*(d+1),V=_+1+c*(d+1),S=_+1+c*d;p.push(I,x,S),p.push(x,V,S)}this.setIndex(p),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(A,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Vu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ru=`#ifdef USE_ALPHAHASH
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
#endif`,Pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Du=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nu=`#ifdef USE_AOMAP
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
#endif`,Bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fu=`#ifdef USE_BATCHING
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
#endif`,Ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hu=`#ifdef USE_IRIDESCENCE
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
#endif`,Gu=`#ifdef USE_BUMPMAP
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
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$u=`#define PI 3.141592653589793
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
} // validated`,td=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ed=`vec3 transformedNormal = objectNormal;
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
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",od=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dd=`#ifdef USE_ENVMAP
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
#endif`,fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ad=`#ifdef USE_GRADIENTMAP
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
}`,xd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cd=`uniform bool receiveShadow;
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
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,Id=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ed=`PhysicalMaterial material;
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
#endif`,wd=`struct PhysicalMaterial {
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
}`,Td=`
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
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ud=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Od=`#if defined( USE_POINTS_UV )
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
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`#ifdef USE_MORPHTARGETS
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
#endif`,Xd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qd=`#ifdef USE_NORMALMAP
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
#endif`,$d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,af=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gf=`float getShadowMask() {
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
}`,mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Af=`#ifdef USE_SKINNING
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
#endif`,xf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vf=`#ifdef USE_SKINNING
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
#endif`,yf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_f=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,If=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mf=`#ifdef USE_TRANSMISSION
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
#endif`,bf=`#ifdef USE_TRANSMISSION
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
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rf=`uniform sampler2D t2D;
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Df=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`#include <common>
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
}`,Bf=`#if DEPTH_PACKING == 3200
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
}`,Ff=`#define DISTANCE
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
}`,Of=`#define DISTANCE
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`uniform float scale;
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Gf=`#include <common>
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Xf=`#define LAMBERT
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
}`,Yf=`#define LAMBERT
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
}`,Zf=`#define MATCAP
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
}`,Jf=`#define MATCAP
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
}`,jf=`#define NORMAL
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
}`,Kf=`#define NORMAL
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
}`,Qf=`#define PHONG
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
}`,$f=`#define PHONG
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
}`,tp=`#define STANDARD
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
}`,ep=`#define STANDARD
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
}`,np=`#define TOON
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
}`,ip=`#define TOON
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
}`,sp=`uniform float size;
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
}`,rp=`uniform vec3 diffuse;
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
}`,ap=`#include <common>
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
}`,op=`uniform vec3 color;
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
}`,lp=`uniform float rotation;
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
}`,cp=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:Vu,alphahash_pars_fragment:Ru,alphamap_fragment:Pu,alphamap_pars_fragment:Uu,alphatest_fragment:Lu,alphatest_pars_fragment:Du,aomap_fragment:Nu,aomap_pars_fragment:Bu,batching_pars_vertex:Fu,batching_vertex:Ou,begin_vertex:zu,beginnormal_vertex:ku,bsdfs:qu,iridescence_fragment:Hu,bumpmap_pars_fragment:Gu,clipping_planes_fragment:Wu,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:Yu,clipping_planes_vertex:Zu,color_fragment:Ju,color_pars_fragment:ju,color_pars_vertex:Ku,color_vertex:Qu,common:$u,cube_uv_reflection_fragment:td,defaultnormal_vertex:ed,displacementmap_pars_vertex:nd,displacementmap_vertex:id,emissivemap_fragment:sd,emissivemap_pars_fragment:rd,colorspace_fragment:ad,colorspace_pars_fragment:od,envmap_fragment:ld,envmap_common_pars_fragment:cd,envmap_pars_fragment:hd,envmap_pars_vertex:ud,envmap_physical_pars_fragment:_d,envmap_vertex:dd,fog_vertex:fd,fog_pars_vertex:pd,fog_fragment:gd,fog_pars_fragment:md,gradientmap_pars_fragment:Ad,lightmap_pars_fragment:xd,lights_lambert_fragment:vd,lights_lambert_pars_fragment:yd,lights_pars_begin:Cd,lights_toon_fragment:Id,lights_toon_pars_fragment:Md,lights_phong_fragment:bd,lights_phong_pars_fragment:Sd,lights_physical_fragment:Ed,lights_physical_pars_fragment:wd,lights_fragment_begin:Td,lights_fragment_maps:Vd,lights_fragment_end:Rd,logdepthbuf_fragment:Pd,logdepthbuf_pars_fragment:Ud,logdepthbuf_pars_vertex:Ld,logdepthbuf_vertex:Dd,map_fragment:Nd,map_pars_fragment:Bd,map_particle_fragment:Fd,map_particle_pars_fragment:Od,metalnessmap_fragment:zd,metalnessmap_pars_fragment:kd,morphinstance_vertex:qd,morphcolor_vertex:Hd,morphnormal_vertex:Gd,morphtarget_pars_vertex:Wd,morphtarget_vertex:Xd,normal_fragment_begin:Yd,normal_fragment_maps:Zd,normal_pars_fragment:Jd,normal_pars_vertex:jd,normal_vertex:Kd,normalmap_pars_fragment:Qd,clearcoat_normal_fragment_begin:$d,clearcoat_normal_fragment_maps:tf,clearcoat_pars_fragment:ef,iridescence_pars_fragment:nf,opaque_fragment:sf,packing:rf,premultiplied_alpha_fragment:af,project_vertex:of,dithering_fragment:lf,dithering_pars_fragment:cf,roughnessmap_fragment:hf,roughnessmap_pars_fragment:uf,shadowmap_pars_fragment:df,shadowmap_pars_vertex:ff,shadowmap_vertex:pf,shadowmask_pars_fragment:gf,skinbase_vertex:mf,skinning_pars_vertex:Af,skinning_vertex:xf,skinnormal_vertex:vf,specularmap_fragment:yf,specularmap_pars_fragment:Cf,tonemapping_fragment:_f,tonemapping_pars_fragment:If,transmission_fragment:Mf,transmission_pars_fragment:bf,uv_pars_fragment:Sf,uv_pars_vertex:Ef,uv_vertex:wf,worldpos_vertex:Tf,background_vert:Vf,background_frag:Rf,backgroundCube_vert:Pf,backgroundCube_frag:Uf,cube_vert:Lf,cube_frag:Df,depth_vert:Nf,depth_frag:Bf,distanceRGBA_vert:Ff,distanceRGBA_frag:Of,equirect_vert:zf,equirect_frag:kf,linedashed_vert:qf,linedashed_frag:Hf,meshbasic_vert:Gf,meshbasic_frag:Wf,meshlambert_vert:Xf,meshlambert_frag:Yf,meshmatcap_vert:Zf,meshmatcap_frag:Jf,meshnormal_vert:jf,meshnormal_frag:Kf,meshphong_vert:Qf,meshphong_frag:$f,meshphysical_vert:tp,meshphysical_frag:ep,meshtoon_vert:np,meshtoon_frag:ip,points_vert:sp,points_frag:rp,shadow_vert:ap,shadow_frag:op,sprite_vert:lp,sprite_frag:cp},it={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},on={basic:{uniforms:Te([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Te([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Te([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Te([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Te([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Te([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Te([it.points,it.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Te([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Te([it.common,it.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Te([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Te([it.sprite,it.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Te([it.common,it.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Te([it.lights,it.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};on.physical={uniforms:Te([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};var Ws={r:0,b:0,g:0},ti=new un,hp=new ae;function up(s,t,e,n,i,r,a){let o=new Et(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function m(_){let I=_.isScene===!0?_.background:null;return I&&I.isTexture&&(I=(_.backgroundBlurriness>0?e:t).get(I)),I}function A(_){let I=!1,x=m(_);x===null?d(o,l):x&&x.isColor&&(d(x,1),I=!0);let V=s.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,a):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||I)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(_,I){let x=m(I);x&&(x.isCubeTexture||x.mapping===Vr)?(h===void 0&&(h=new Jt(new ci(1,1,1),new xe({name:"BackgroundCubeMaterial",uniforms:Hi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ti.copy(I.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hp.makeRotationFromEuler(ti)),h.material.toneMapped=qt.getTransfer(x.colorSpace)!==$t,(u!==x||f!==x.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Jt(new hi(2,2),new xe({name:"BackgroundMaterial",uniforms:Hi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.toneMapped=qt.getTransfer(x.colorSpace)!==$t,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,p=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,I){_.getRGB(Ws,Xc(s)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,I,a)}return{getClearColor:function(){return o},setClearColor:function(_,I=1){o.set(_),l=I,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(o,l)},render:A,addToRenderList:g}}function dp(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(y,T,z,O,H){let J=!1,G=u(O,z,T);r!==G&&(r=G,c(r.object)),J=p(y,O,z,H),J&&m(y,O,z,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,x(y,T,z,O),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,T,z){let O=z.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let J=H[T.id];J===void 0&&(J={},H[T.id]=J);let G=J[O];return G===void 0&&(G=f(l()),J[O]=G),G}function f(y){let T=[],z=[],O=[];for(let H=0;H<e;H++)T[H]=0,z[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:z,attributeDivisors:O,object:y,attributes:{},index:null}}function p(y,T,z,O){let H=r.attributes,J=T.attributes,G=0,tt=z.getAttributes();for(let q in tt)if(tt[q].location>=0){let dt=H[q],Mt=J[q];if(Mt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(Mt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(Mt=y.instanceColor)),dt===void 0||dt.attribute!==Mt||Mt&&dt.data!==Mt.data)return!0;G++}return r.attributesNum!==G||r.index!==O}function m(y,T,z,O){let H={},J=T.attributes,G=0,tt=z.getAttributes();for(let q in tt)if(tt[q].location>=0){let dt=J[q];dt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor));let Mt={};Mt.attribute=dt,dt&&dt.data&&(Mt.data=dt.data),H[q]=Mt,G++}r.attributes=H,r.attributesNum=G,r.index=O}function A(){let y=r.newAttributes;for(let T=0,z=y.length;T<z;T++)y[T]=0}function g(y){d(y,0)}function d(y,T){let z=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;z[y]=1,O[y]===0&&(s.enableVertexAttribArray(y),O[y]=1),H[y]!==T&&(s.vertexAttribDivisor(y,T),H[y]=T)}function _(){let y=r.newAttributes,T=r.enabledAttributes;for(let z=0,O=T.length;z<O;z++)T[z]!==y[z]&&(s.disableVertexAttribArray(z),T[z]=0)}function I(y,T,z,O,H,J,G){G===!0?s.vertexAttribIPointer(y,T,z,H,J):s.vertexAttribPointer(y,T,z,O,H,J)}function x(y,T,z,O){A();let H=O.attributes,J=z.getAttributes(),G=T.defaultAttributeValues;for(let tt in J){let q=J[tt];if(q.location>=0){let rt=H[tt];if(rt===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),rt!==void 0){let dt=rt.normalized,Mt=rt.itemSize,Ot=t.get(rt);if(Ot===void 0)continue;let ie=Ot.buffer,X=Ot.type,et=Ot.bytesPerElement,yt=X===s.INT||X===s.UNSIGNED_INT||rt.gpuType===Zo;if(rt.isInterleavedBufferAttribute){let at=rt.data,Vt=at.stride,Ut=rt.offset;if(at.isInstancedInterleavedBuffer){for(let zt=0;zt<q.locationSize;zt++)d(q.location+zt,at.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let zt=0;zt<q.locationSize;zt++)g(q.location+zt);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let zt=0;zt<q.locationSize;zt++)I(q.location+zt,Mt/q.locationSize,X,dt,Vt*et,(Ut+Mt/q.locationSize*zt)*et,yt)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<q.locationSize;at++)d(q.location+at,rt.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<q.locationSize;at++)g(q.location+at);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let at=0;at<q.locationSize;at++)I(q.location+at,Mt/q.locationSize,X,dt,Mt*et,Mt/q.locationSize*at*et,yt)}}else if(G!==void 0){let dt=G[tt];if(dt!==void 0)switch(dt.length){case 2:s.vertexAttrib2fv(q.location,dt);break;case 3:s.vertexAttrib3fv(q.location,dt);break;case 4:s.vertexAttrib4fv(q.location,dt);break;default:s.vertexAttrib1fv(q.location,dt)}}}}_()}function V(){w();for(let y in n){let T=n[y];for(let z in T){let O=T[z];for(let H in O)h(O[H].object),delete O[H];delete T[z]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;let T=n[y.id];for(let z in T){let O=T[z];for(let H in O)h(O[H].object),delete O[H];delete T[z]}delete n[y.id]}function E(y){for(let T in n){let z=n[T];if(z[y.id]===void 0)continue;let O=z[y.id];for(let H in O)h(O[H].object),delete O[H];delete z[y.id]}}function w(){M(),a=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:M,dispose:V,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:A,enableAttribute:g,disableUnusedAttributes:_}}function fp(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],h[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A]*f[A];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function pp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==tn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let w=E===nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==bn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==cn&&!w)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=m>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:_,maxVaryings:I,maxFragmentUniforms:x,vertexTextures:V,maxSamples:S}}function gp(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Cn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let m=u.clippingPlanes,A=u.clipIntersection,g=u.clipShadows,d=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let _=r?0:n,I=_*4,x=d.clippingState||null;l.value=x,x=h(m,f,I,p);for(let V=0;V!==I;++V)x[V]=e[V];d.clippingState=x,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,m){let A=u!==null?u.length:0,g=null;if(A!==0){if(g=l.value,m!==!0||g===null){let d=p+A*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<d)&&(g=new Float32Array(d));for(let I=0,x=p;I!==A;++I,x+=4)a.copy(u[I]).applyMatrix4(_,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,g}}function mp(s){let t=new WeakMap;function e(a,o){return o===Ua?a.mapping=Oi:o===La&&(a.mapping=zi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ua||o===La)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new go(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Gi=class extends dr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ui=4,Kl=[.125,.215,.35,.446,.526,.582],ri=20,ma=new Gi,Ql=new Et,Aa=null,xa=0,va=0,ya=!1,ni=(1+Math.sqrt(5))/2,Ri=1/ni,$l=[new R(-ni,Ri,0),new R(ni,Ri,0),new R(-Ri,0,ni),new R(Ri,0,ni),new R(0,ni,-Ri),new R(0,ni,Ri),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],pr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Aa=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Aa,xa,va),this._renderer.xr.enabled=ya,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Aa=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:nn,format:tn,colorSpace:Xi,depthBuffer:!1},i=tc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ap(r)),this._blurMaterial=xp(r,t,e)}return i}_compileMaterial(t){let e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,ma)}_sceneToCubeUV(t,e,n,i){let o=new we(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ql),h.toneMapping=Fn,h.autoClear=!1;let p=new Ye({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),m=new Jt(new ci,p),A=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,A=!0):(p.color.copy(Ql),A=!0);for(let d=0;d<6;d++){let _=d%3;_===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):_===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let I=this._cubeSize;Xs(i,_*I,d>2?I:0,I,I),h.setRenderTarget(i),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Oi||t.mapping===zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ec());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Jt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Xs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ma)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$l[(i-r-1)%$l.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Jt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ri-1),A=r/m,g=isFinite(r)?1+Math.floor(h*A):ri;g>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ri}`);let d=[],_=0;for(let E=0;E<ri;++E){let w=E/A,M=Math.exp(-w*w/2);d.push(M),E===0?_+=M:E<g&&(_+=2*M)}for(let E=0;E<d.length;E++)d[E]=d[E]/_;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:I}=this;f.dTheta.value=m,f.mipInt.value=I-n;let x=this._sizeLods[i],V=3*x*(i>I-Ui?i-I+Ui:0),S=4*(this._cubeSize-x);Xs(e,V,S,3*x,2*x),l.setRenderTarget(e),l.render(u,ma)}};function Ap(s){let t=[],e=[],n=[],i=s,r=s-Ui+1+Kl.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Ui?l=Kl[a-s+Ui-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,A=3,g=2,d=1,_=new Float32Array(A*m*p),I=new Float32Array(g*m*p),x=new Float32Array(d*m*p);for(let S=0;S<p;S++){let E=S%3*2/3-1,w=S>2?0:-1,M=[E,w,0,E+2/3,w,0,E+2/3,w+1,0,E,w,0,E+2/3,w+1,0,E,w+1,0];_.set(M,A*m*S),I.set(f,g*m*S);let y=[S,S,S,S,S,S];x.set(y,d*m*S)}let V=new pe;V.setAttribute("position",new Ae(_,A)),V.setAttribute("uv",new Ae(I,g)),V.setAttribute("faceIndex",new Ae(x,d)),t.push(V),i>Ui&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function tc(s,t,e){let n=new Ve(s,t,e);return n.texture.mapping=Vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function xp(s,t,e){let n=new Float32Array(ri),i=new R(0,1,0);return new xe({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:el(),fragmentShader:`

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
		`,blending:hn,depthTest:!1,depthWrite:!1})}function ec(){return new xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

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
		`,blending:hn,depthTest:!1,depthWrite:!1})}function nc(){return new xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function el(){return`

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
	`}function vp(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ua||l===La,h=l===Oi||l===zi;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new pr(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new pr(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function yp(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ls("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Cp(s,t,e,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let A=f.morphAttributes[m];for(let g=0,d=A.length;g<d;g++)t.remove(A[g])}f.removeEventListener("dispose",a),delete i[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)t.update(f[m],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let m in p){let A=p[m];for(let g=0,d=A.length;g<d;g++)t.update(A[g],s.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,m=u.attributes.position,A=0;if(p!==null){let _=p.array;A=p.version;for(let I=0,x=_.length;I<x;I+=3){let V=_[I+0],S=_[I+1],E=_[I+2];f.push(V,S,S,E,E,V)}}else if(m!==void 0){let _=m.array;A=m.version;for(let I=0,x=_.length/3-1;I<x;I+=3){let V=I+0,S=I+1,E=I+2;f.push(V,S,S,E,E,V)}}else return;let g=new(Gc(f)?ur:hr)(f,1);g.version=A;let d=r.get(u);d&&t.remove(d),r.set(u,g)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function _p(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,m){m!==0&&(s.drawElementsInstanced(n,p,r,f*a,m),e.update(p,n,m))}function h(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,m);let g=0;for(let d=0;d<m;d++)g+=p[d];e.update(g,n,1)}function u(f,p,m,A){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],A[d]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,A,0,m);let d=0;for(let _=0;_<m;_++)d+=p[_]*A[_];e.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ip(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Mp(s,t,e){let n=new WeakMap,i=new ne;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let M=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],I=0;p===!0&&(I=1),m===!0&&(I=2),A===!0&&(I=3);let x=o.attributes.position.count*I,V=1;x>t.maxTextureSize&&(V=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let S=new Float32Array(x*V*4*u),E=new or(S,x,V,u);E.type=cn,E.needsUpdate=!0;let w=I*4;for(let y=0;y<u;y++){let T=g[y],z=d[y],O=_[y],H=x*V*4*y;for(let J=0;J<T.count;J++){let G=J*w;p===!0&&(i.fromBufferAttribute(T,J),S[H+G+0]=i.x,S[H+G+1]=i.y,S[H+G+2]=i.z,S[H+G+3]=0),m===!0&&(i.fromBufferAttribute(z,J),S[H+G+4]=i.x,S[H+G+5]=i.y,S[H+G+6]=i.z,S[H+G+7]=0),A===!0&&(i.fromBufferAttribute(O,J),S[H+G+8]=i.x,S[H+G+9]=i.y,S[H+G+10]=i.z,S[H+G+11]=O.itemSize===4?i.w:1)}}f={count:u,texture:E,size:new bt(x,V)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let A=0;A<c.length;A++)p+=c[A];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function bp(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var gr=class extends De{constructor(t,e,n,i,r,a,o,l,c,h=Di){if(h!==Di&&h!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Di&&(n=li),n===void 0&&h===qi&&(n=ki),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Zc=new De,ic=new gr(1,1),Jc=new or,jc=new fo,Kc=new fr,sc=[],rc=[],ac=new Float32Array(16),oc=new Float32Array(9),lc=new Float32Array(4);function Yi(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=sc[i];if(r===void 0&&(r=new Float32Array(i),sc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ye(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Pr(s,t){let e=rc[t];e===void 0&&(e=new Int32Array(t),rc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Sp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ep(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2fv(this.addr,t),ye(e,t)}}function wp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;s.uniform3fv(this.addr,t),ye(e,t)}}function Tp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4fv(this.addr,t),ye(e,t)}}function Vp(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;lc.set(n),s.uniformMatrix2fv(this.addr,!1,lc),ye(e,n)}}function Rp(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;oc.set(n),s.uniformMatrix3fv(this.addr,!1,oc),ye(e,n)}}function Pp(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;ac.set(n),s.uniformMatrix4fv(this.addr,!1,ac),ye(e,n)}}function Up(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Lp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2iv(this.addr,t),ye(e,t)}}function Dp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3iv(this.addr,t),ye(e,t)}}function Np(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4iv(this.addr,t),ye(e,t)}}function Bp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Fp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2uiv(this.addr,t),ye(e,t)}}function Op(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3uiv(this.addr,t),ye(e,t)}}function zp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4uiv(this.addr,t),ye(e,t)}}function kp(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ic.compareFunction=qc,r=ic):r=Zc,e.setTexture2D(t||r,i)}function qp(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||jc,i)}function Hp(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Kc,i)}function Gp(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Jc,i)}function Wp(s){switch(s){case 5126:return Sp;case 35664:return Ep;case 35665:return wp;case 35666:return Tp;case 35674:return Vp;case 35675:return Rp;case 35676:return Pp;case 5124:case 35670:return Up;case 35667:case 35671:return Lp;case 35668:case 35672:return Dp;case 35669:case 35673:return Np;case 5125:return Bp;case 36294:return Fp;case 36295:return Op;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return Hp;case 36289:case 36303:case 36311:case 36292:return Gp}}function Xp(s,t){s.uniform1fv(this.addr,t)}function Yp(s,t){let e=Yi(t,this.size,2);s.uniform2fv(this.addr,e)}function Zp(s,t){let e=Yi(t,this.size,3);s.uniform3fv(this.addr,e)}function Jp(s,t){let e=Yi(t,this.size,4);s.uniform4fv(this.addr,e)}function jp(s,t){let e=Yi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Kp(s,t){let e=Yi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Qp(s,t){let e=Yi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function $p(s,t){s.uniform1iv(this.addr,t)}function tg(s,t){s.uniform2iv(this.addr,t)}function eg(s,t){s.uniform3iv(this.addr,t)}function ng(s,t){s.uniform4iv(this.addr,t)}function ig(s,t){s.uniform1uiv(this.addr,t)}function sg(s,t){s.uniform2uiv(this.addr,t)}function rg(s,t){s.uniform3uiv(this.addr,t)}function ag(s,t){s.uniform4uiv(this.addr,t)}function og(s,t,e){let n=this.cache,i=t.length,r=Pr(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Zc,r[a])}function lg(s,t,e){let n=this.cache,i=t.length,r=Pr(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||jc,r[a])}function cg(s,t,e){let n=this.cache,i=t.length,r=Pr(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Kc,r[a])}function hg(s,t,e){let n=this.cache,i=t.length,r=Pr(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Jc,r[a])}function ug(s){switch(s){case 5126:return Xp;case 35664:return Yp;case 35665:return Zp;case 35666:return Jp;case 35674:return jp;case 35675:return Kp;case 35676:return Qp;case 5124:case 35670:return $p;case 35667:case 35671:return tg;case 35668:case 35672:return eg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return rg;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}var mo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wp(e.type)}},Ao=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ug(e.type)}},xo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Ca=/(\w+)(\])?(\[|\.)?/g;function cc(s,t){s.seq.push(t),s.map[t.id]=t}function dg(s,t,e){let n=s.name,i=n.length;for(Ca.lastIndex=0;;){let r=Ca.exec(n),a=Ca.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){cc(e,c===void 0?new mo(o,s,t):new Ao(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new xo(o),cc(e,u)),e=u}}}var Bi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);dg(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function hc(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var fg=37297,pg=0;function gg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var uc=new Nt;function mg(s){qt._getMatrix(uc,qt.workingColorSpace,s);let t=`mat3( ${uc.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(s)){case Rr:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function dc(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+gg(s.getShaderSource(t),a)}else return i}function Ag(s,t){let e=mg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xg(s,t){let e;switch(t){case Ho:e="Linear";break;case Go:e="Reinhard";break;case Wo:e="Cineon";break;case xs:e="ACESFilmic";break;case Xo:e="AgX";break;case Yo:e="Neutral";break;case Jh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ys=new R;function vg(){qt.getLuminanceCoefficients(Ys);let s=Ys.x.toFixed(4),t=Ys.y.toFixed(4),e=Ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function Cg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _g(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function cs(s){return s!==""}function fc(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(s){return s.replace(Ig,bg)}var Mg=new Map;function bg(s,t){let e=Ft[t];if(e===void 0){let n=Mg.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vo(e)}var Sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(s){return s.replace(Sg,Eg)}function Eg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function mc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Tc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===wh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function Tg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Oi:case zi:t="ENVMAP_TYPE_CUBE";break;case Vr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case zi:t="ENVMAP_MODE_REFRACTION";break}return t}function Rg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vc:t="ENVMAP_BLENDING_MULTIPLY";break;case Yh:t="ENVMAP_BLENDING_MIX";break;case Zh:t="ENVMAP_BLENDING_ADD";break}return t}function Pg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ug(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=wg(e),c=Tg(e),h=Vg(e),u=Rg(e),f=Pg(e),p=yg(e),m=Cg(r),A=i.createProgram(),g,d,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(cs).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(cs).join(`
`),d.length>0&&(d+=`
`)):(g=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),d=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Fn?xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Ag("linearToOutputTexel",e.outputColorSpace),vg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cs).join(`
`)),a=vo(a),a=fc(a,e),a=pc(a,e),o=vo(o),o=fc(o,e),o=pc(o,e),a=gc(a),o=gc(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let I=_+g+a,x=_+d+o,V=hc(i,i.VERTEX_SHADER,I),S=hc(i,i.FRAGMENT_SHADER,x);i.attachShader(A,V),i.attachShader(A,S),e.index0AttributeName!==void 0?i.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(A,0,"position"),i.linkProgram(A);function E(T){if(s.debug.checkShaderErrors){let z=i.getProgramInfoLog(A).trim(),O=i.getShaderInfoLog(V).trim(),H=i.getShaderInfoLog(S).trim(),J=!0,G=!0;if(i.getProgramParameter(A,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,A,V,S);else{let tt=dc(i,V,"vertex"),q=dc(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(A,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+z+`
`+tt+`
`+q)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||H==="")&&(G=!1);G&&(T.diagnostics={runnable:J,programLog:z,vertexShader:{log:O,prefix:g},fragmentShader:{log:H,prefix:d}})}i.deleteShader(V),i.deleteShader(S),w=new Bi(i,A),M=_g(i,A)}let w;this.getUniforms=function(){return w===void 0&&E(this),w};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(A,fg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pg++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=V,this.fragmentShader=S,this}var Lg=0,yo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Co(t),e.set(t,n)),n}},Co=class{constructor(t){this.id=Lg++,this.code=t,this.usedTimes=0}};function Dg(s,t,e,n,i,r,a){let o=new cr,l=new yo,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,y,T,z,O){let H=z.fog,J=O.geometry,G=M.isMeshStandardMaterial?z.environment:null,tt=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),q=tt&&tt.mapping===Vr?tt.image.height:null,rt=m[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let dt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Mt=dt!==void 0?dt.length:0,Ot=0;J.morphAttributes.position!==void 0&&(Ot=1),J.morphAttributes.normal!==void 0&&(Ot=2),J.morphAttributes.color!==void 0&&(Ot=3);let ie,X,et,yt;if(rt){let ee=on[rt];ie=ee.vertexShader,X=ee.fragmentShader}else ie=M.vertexShader,X=M.fragmentShader,l.update(M),et=l.getVertexShaderID(M),yt=l.getFragmentShaderID(M);let at=s.getRenderTarget(),Vt=s.state.buffers.depth.getReversed(),Ut=O.isInstancedMesh===!0,zt=O.isBatchedMesh===!0,ue=!!M.map,Yt=!!M.matcap,fe=!!tt,D=!!M.aoMap,He=!!M.lightMap,Ht=!!M.bumpMap,Gt=!!M.normalMap,wt=!!M.displacementMap,oe=!!M.emissiveMap,St=!!M.metalnessMap,b=!!M.roughnessMap,v=M.anisotropy>0,N=M.clearcoat>0,Y=M.dispersion>0,j=M.iridescence>0,W=M.sheen>0,Ct=M.transmission>0,ot=v&&!!M.anisotropyMap,ft=N&&!!M.clearcoatMap,Zt=N&&!!M.clearcoatNormalMap,Q=N&&!!M.clearcoatRoughnessMap,pt=j&&!!M.iridescenceMap,Tt=j&&!!M.iridescenceThicknessMap,Rt=W&&!!M.sheenColorMap,gt=W&&!!M.sheenRoughnessMap,Wt=!!M.specularMap,Bt=!!M.specularColorMap,se=!!M.specularIntensityMap,P=Ct&&!!M.transmissionMap,st=Ct&&!!M.thicknessMap,k=!!M.gradientMap,Z=!!M.alphaMap,ht=M.alphaTest>0,lt=!!M.alphaHash,Lt=!!M.extensions,de=Fn;M.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(de=s.toneMapping);let be={shaderID:rt,shaderType:M.type,shaderName:M.name,vertexShader:ie,fragmentShader:X,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:yt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:zt,batchingColor:zt&&O._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&O.instanceColor!==null,instancingMorph:Ut&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Xi,alphaToCoverage:!!M.alphaToCoverage,map:ue,matcap:Yt,envMap:fe,envMapMode:fe&&tt.mapping,envMapCubeUVHeight:q,aoMap:D,lightMap:He,bumpMap:Ht,normalMap:Gt,displacementMap:f&&wt,emissiveMap:oe,normalMapObjectSpace:Gt&&M.normalMapType===$h,normalMapTangentSpace:Gt&&M.normalMapType===kc,metalnessMap:St,roughnessMap:b,anisotropy:v,anisotropyMap:ot,clearcoat:N,clearcoatMap:ft,clearcoatNormalMap:Zt,clearcoatRoughnessMap:Q,dispersion:Y,iridescence:j,iridescenceMap:pt,iridescenceThicknessMap:Tt,sheen:W,sheenColorMap:Rt,sheenRoughnessMap:gt,specularMap:Wt,specularColorMap:Bt,specularIntensityMap:se,transmission:Ct,transmissionMap:P,thicknessMap:st,gradientMap:k,opaque:M.transparent===!1&&M.blending===Li&&M.alphaToCoverage===!1,alphaMap:Z,alphaTest:ht,alphaHash:lt,combine:M.combine,mapUv:ue&&A(M.map.channel),aoMapUv:D&&A(M.aoMap.channel),lightMapUv:He&&A(M.lightMap.channel),bumpMapUv:Ht&&A(M.bumpMap.channel),normalMapUv:Gt&&A(M.normalMap.channel),displacementMapUv:wt&&A(M.displacementMap.channel),emissiveMapUv:oe&&A(M.emissiveMap.channel),metalnessMapUv:St&&A(M.metalnessMap.channel),roughnessMapUv:b&&A(M.roughnessMap.channel),anisotropyMapUv:ot&&A(M.anisotropyMap.channel),clearcoatMapUv:ft&&A(M.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&A(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&A(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&A(M.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&A(M.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&A(M.sheenColorMap.channel),sheenRoughnessMapUv:gt&&A(M.sheenRoughnessMap.channel),specularMapUv:Wt&&A(M.specularMap.channel),specularColorMapUv:Bt&&A(M.specularColorMap.channel),specularIntensityMapUv:se&&A(M.specularIntensityMap.channel),transmissionMapUv:P&&A(M.transmissionMap.channel),thicknessMapUv:st&&A(M.thicknessMap.channel),alphaMapUv:Z&&A(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Gt||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!J.attributes.uv&&(ue||Z),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Vt,skinning:O.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Ot,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:de,decodeVideoTexture:ue&&M.map.isVideoTexture===!0&&qt.getTransfer(M.map.colorSpace)===$t,decodeVideoTextureEmissive:oe&&M.emissiveMap.isVideoTexture===!0&&qt.getTransfer(M.emissiveMap.colorSpace)===$t,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ze,flipSided:M.side===Le,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Lt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&M.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function d(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let T in M.defines)y.push(T),y.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(_(y,M),I(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function _(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function I(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){let y=m[M.type],T;if(y){let z=on[y];T=Wn.clone(z.uniforms)}else T=M.uniforms;return T}function V(M,y){let T;for(let z=0,O=h.length;z<O;z++){let H=h[z];if(H.cacheKey===y){T=H,++T.usedTimes;break}}return T===void 0&&(T=new Ug(s,y,M,r),h.push(T)),T}function S(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function E(M){l.remove(M)}function w(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:x,acquireProgram:V,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:w}}function Ng(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Bg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ac(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function xc(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,p,m,A,g){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:m,renderOrder:u.renderOrder,z:A,group:g},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=m,d.renderOrder=u.renderOrder,d.z=A,d.group=g),t++,d}function o(u,f,p,m,A,g){let d=a(u,f,p,m,A,g);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function l(u,f,p,m,A,g){let d=a(u,f,p,m,A,g);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Bg),n.length>1&&n.sort(f||Ac),i.length>1&&i.sort(f||Ac)}function h(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Fg(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new xc,s.set(n,[a])):i>=r.length?(a=new xc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Og(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Et};break;case"SpotLight":e={position:new R,direction:new R,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function zg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var kg=0;function qg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Hg(s){let t=new Og,e=zg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let i=new R,r=new ae,a=new ae;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,m=0,A=0,g=0,d=0,_=0,I=0,x=0,V=0,S=0,E=0;c.sort(qg);for(let M=0,y=c.length;M<y;M++){let T=c[M],z=T.color,O=T.intensity,H=T.distance,J=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=z.r*O,u+=z.g*O,f+=z.b*O;else if(T.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(T.sh.coefficients[G],O);E++}else if(T.isDirectionalLight){let G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let tt=T.shadow,q=e.get(T);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=T.shadow.matrix,_++}n.directional[p]=G,p++}else if(T.isSpotLight){let G=t.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(z).multiplyScalar(O),G.distance=H,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,n.spot[A]=G;let tt=T.shadow;if(T.map&&(n.spotLightMap[V]=T.map,V++,tt.updateMatrices(T),T.castShadow&&S++),n.spotLightMatrix[A]=tt.matrix,T.castShadow){let q=e.get(T);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,n.spotShadow[A]=q,n.spotShadowMap[A]=J,x++}A++}else if(T.isRectAreaLight){let G=t.get(T);G.color.copy(z).multiplyScalar(O),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=G,g++}else if(T.isPointLight){let G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){let tt=T.shadow,q=e.get(T);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,q.shadowCameraNear=tt.camera.near,q.shadowCameraFar=tt.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=T.shadow.matrix,I++}n.point[m]=G,m++}else if(T.isHemisphereLight){let G=t.get(T);G.skyColor.copy(T.color).multiplyScalar(O),G.groundColor.copy(T.groundColor).multiplyScalar(O),n.hemi[d]=G,d++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let w=n.hash;(w.directionalLength!==p||w.pointLength!==m||w.spotLength!==A||w.rectAreaLength!==g||w.hemiLength!==d||w.numDirectionalShadows!==_||w.numPointShadows!==I||w.numSpotShadows!==x||w.numSpotMaps!==V||w.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=A,n.rectArea.length=g,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=x+V-S,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,w.directionalLength=p,w.pointLength=m,w.spotLength=A,w.rectAreaLength=g,w.hemiLength=d,w.numDirectionalShadows=_,w.numPointShadows=I,w.numSpotShadows=x,w.numSpotMaps=V,w.numLightProbes=E,n.version=kg++)}function l(c,h){let u=0,f=0,p=0,m=0,A=0,g=h.matrixWorldInverse;for(let d=0,_=c.length;d<_;d++){let I=c[d];if(I.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(I.matrixWorld),i.setFromMatrixPosition(I.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(I.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(I.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(I.matrixWorld),i.setFromMatrixPosition(I.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),p++}else if(I.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(I.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(I.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(I.width*.5,0,0),x.halfHeight.set(0,I.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(I.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(I.matrixWorld),x.position.applyMatrix4(g),f++}else if(I.isHemisphereLight){let x=n.hemi[A];x.direction.setFromMatrixPosition(I.matrixWorld),x.direction.transformDirection(g),A++}}}return{setup:o,setupView:l,state:n}}function vc(s){let t=new Hg(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Gg(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new vc(s),t.set(i,[o])):r>=a.length?(o=new vc(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var _o=class extends Hn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Io=class extends Hn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xg=`uniform sampler2D shadow_pass;
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
}`;function Yg(s,t,e){let n=new ds,i=new bt,r=new bt,a=new ne,o=new _o({depthPacking:Qh}),l=new Io,c={},h=e.maxTextureSize,u={[On]:Le,[Le]:On,[ze]:ze},f=new xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:Wg,fragmentShader:Xg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new pe;m.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new Jt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let d=this.type;this.render=function(S,E,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let M=s.getRenderTarget(),y=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),z=s.state;z.setBlending(hn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let O=d!==yn&&this.type===yn,H=d===yn&&this.type!==yn;for(let J=0,G=S.length;J<G;J++){let tt=S[J],q=tt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let rt=q.getFrameExtents();if(i.multiply(rt),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,q.mapSize.y=r.y)),q.map===null||O===!0||H===!0){let Mt=this.type!==yn?{minFilter:ke,magFilter:ke}:{};q.map!==null&&q.map.dispose(),q.map=new Ve(i.x,i.y,Mt),q.map.texture.name=tt.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();let dt=q.getViewportCount();for(let Mt=0;Mt<dt;Mt++){let Ot=q.getViewport(Mt);a.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),z.viewport(a),q.updateMatrices(tt,Mt),n=q.getFrustum(),x(E,w,q.camera,tt,this.type)}q.isPointLightShadow!==!0&&this.type===yn&&_(q,w),q.needsUpdate=!1}d=this.type,g.needsUpdate=!1,s.setRenderTarget(M,y,T)};function _(S,E){let w=t.update(A);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ve(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(E,null,w,f,A,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(E,null,w,p,A,null)}function I(S,E,w,M){let y=null,T=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)y=T;else if(y=w.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let z=y.uuid,O=E.uuid,H=c[z];H===void 0&&(H={},c[z]=H);let J=H[O];J===void 0&&(J=y.clone(),H[O]=J,E.addEventListener("dispose",V)),y=J}if(y.visible=E.visible,y.wireframe=E.wireframe,M===yn?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:u[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,w.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let z=s.properties.get(y);z.light=w}return y}function x(S,E,w,M,y){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===yn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);let O=t.update(S),H=S.material;if(Array.isArray(H)){let J=O.groups;for(let G=0,tt=J.length;G<tt;G++){let q=J[G],rt=H[q.materialIndex];if(rt&&rt.visible){let dt=I(S,rt,M,y);S.onBeforeShadow(s,S,E,w,O,dt,q),s.renderBufferDirect(w,null,O,dt,S,q),S.onAfterShadow(s,S,E,w,O,dt,q)}}}else if(H.visible){let J=I(S,H,M,y);S.onBeforeShadow(s,S,E,w,O,J,null),s.renderBufferDirect(w,null,O,J,S,null),S.onAfterShadow(s,S,E,w,O,J,null)}}let z=S.children;for(let O=0,H=z.length;O<H;O++)x(z[O],E,w,M,y)}function V(S){S.target.removeEventListener("dispose",V);for(let w in c){let M=c[w],y=S.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var Zg={[Sa]:Ea,[wa]:Ra,[Ta]:Pa,[Fi]:Va,[Ea]:Sa,[Ra]:wa,[Pa]:Ta,[Va]:Fi};function Jg(s,t){function e(){let P=!1,st=new ne,k=null,Z=new ne(0,0,0,0);return{setMask:function(ht){k!==ht&&!P&&(s.colorMask(ht,ht,ht,ht),k=ht)},setLocked:function(ht){P=ht},setClear:function(ht,lt,Lt,de,be){be===!0&&(ht*=de,lt*=de,Lt*=de),st.set(ht,lt,Lt,de),Z.equals(st)===!1&&(s.clearColor(ht,lt,Lt,de),Z.copy(st))},reset:function(){P=!1,k=null,Z.set(-1,0,0,0)}}}function n(){let P=!1,st=!1,k=null,Z=null,ht=null;return{setReversed:function(lt){if(st!==lt){let Lt=t.get("EXT_clip_control");st?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);let de=ht;ht=null,this.setClear(de)}st=lt},getReversed:function(){return st},setTest:function(lt){lt?at(s.DEPTH_TEST):Vt(s.DEPTH_TEST)},setMask:function(lt){k!==lt&&!P&&(s.depthMask(lt),k=lt)},setFunc:function(lt){if(st&&(lt=Zg[lt]),Z!==lt){switch(lt){case Sa:s.depthFunc(s.NEVER);break;case Ea:s.depthFunc(s.ALWAYS);break;case wa:s.depthFunc(s.LESS);break;case Fi:s.depthFunc(s.LEQUAL);break;case Ta:s.depthFunc(s.EQUAL);break;case Va:s.depthFunc(s.GEQUAL);break;case Ra:s.depthFunc(s.GREATER);break;case Pa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=lt}},setLocked:function(lt){P=lt},setClear:function(lt){ht!==lt&&(st&&(lt=1-lt),s.clearDepth(lt),ht=lt)},reset:function(){P=!1,k=null,Z=null,ht=null,st=!1}}}function i(){let P=!1,st=null,k=null,Z=null,ht=null,lt=null,Lt=null,de=null,be=null;return{setTest:function(ee){P||(ee?at(s.STENCIL_TEST):Vt(s.STENCIL_TEST))},setMask:function(ee){st!==ee&&!P&&(s.stencilMask(ee),st=ee)},setFunc:function(ee,Je,fn){(k!==ee||Z!==Je||ht!==fn)&&(s.stencilFunc(ee,Je,fn),k=ee,Z=Je,ht=fn)},setOp:function(ee,Je,fn){(lt!==ee||Lt!==Je||de!==fn)&&(s.stencilOp(ee,Je,fn),lt=ee,Lt=Je,de=fn)},setLocked:function(ee){P=ee},setClear:function(ee){be!==ee&&(s.clearStencil(ee),be=ee)},reset:function(){P=!1,st=null,k=null,Z=null,ht=null,lt=null,Lt=null,de=null,be=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],m=null,A=!1,g=null,d=null,_=null,I=null,x=null,V=null,S=null,E=new Et(0,0,0),w=0,M=!1,y=null,T=null,z=null,O=null,H=null,J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,tt=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=tt>=1):q.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=tt>=2);let rt=null,dt={},Mt=s.getParameter(s.SCISSOR_BOX),Ot=s.getParameter(s.VIEWPORT),ie=new ne().fromArray(Mt),X=new ne().fromArray(Ot);function et(P,st,k,Z){let ht=new Uint8Array(4),lt=s.createTexture();s.bindTexture(P,lt),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Lt=0;Lt<k;Lt++)P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?s.texImage3D(st,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(st+Lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return lt}let yt={};yt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(s.DEPTH_TEST),a.setFunc(Fi),Ht(!1),Gt(_l),at(s.CULL_FACE),D(hn);function at(P){h[P]!==!0&&(s.enable(P),h[P]=!0)}function Vt(P){h[P]!==!1&&(s.disable(P),h[P]=!1)}function Ut(P,st){return u[P]!==st?(s.bindFramebuffer(P,st),u[P]=st,P===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=st),P===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=st),!0):!1}function zt(P,st){let k=p,Z=!1;if(P){k=f.get(st),k===void 0&&(k=[],f.set(st,k));let ht=P.textures;if(k.length!==ht.length||k[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,Lt=ht.length;lt<Lt;lt++)k[lt]=s.COLOR_ATTACHMENT0+lt;k.length=ht.length,Z=!0}}else k[0]!==s.BACK&&(k[0]=s.BACK,Z=!0);Z&&s.drawBuffers(k)}function ue(P){return m!==P?(s.useProgram(P),m=P,!0):!1}let Yt={[ii]:s.FUNC_ADD,[Vh]:s.FUNC_SUBTRACT,[Rh]:s.FUNC_REVERSE_SUBTRACT};Yt[Ph]=s.MIN,Yt[Uh]=s.MAX;let fe={[Lh]:s.ZERO,[Dh]:s.ONE,[Nh]:s.SRC_COLOR,[Ma]:s.SRC_ALPHA,[qh]:s.SRC_ALPHA_SATURATE,[zh]:s.DST_COLOR,[Fh]:s.DST_ALPHA,[Bh]:s.ONE_MINUS_SRC_COLOR,[ba]:s.ONE_MINUS_SRC_ALPHA,[kh]:s.ONE_MINUS_DST_COLOR,[Oh]:s.ONE_MINUS_DST_ALPHA,[Hh]:s.CONSTANT_COLOR,[Gh]:s.ONE_MINUS_CONSTANT_COLOR,[Wh]:s.CONSTANT_ALPHA,[Xh]:s.ONE_MINUS_CONSTANT_ALPHA};function D(P,st,k,Z,ht,lt,Lt,de,be,ee){if(P===hn){A===!0&&(Vt(s.BLEND),A=!1);return}if(A===!1&&(at(s.BLEND),A=!0),P!==Th){if(P!==g||ee!==M){if((d!==ii||x!==ii)&&(s.blendEquation(s.FUNC_ADD),d=ii,x=ii),ee)switch(P){case Li:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xe:s.blendFunc(s.ONE,s.ONE);break;case Il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ml:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Li:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xe:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ml:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}_=null,I=null,V=null,S=null,E.set(0,0,0),w=0,g=P,M=ee}return}ht=ht||st,lt=lt||k,Lt=Lt||Z,(st!==d||ht!==x)&&(s.blendEquationSeparate(Yt[st],Yt[ht]),d=st,x=ht),(k!==_||Z!==I||lt!==V||Lt!==S)&&(s.blendFuncSeparate(fe[k],fe[Z],fe[lt],fe[Lt]),_=k,I=Z,V=lt,S=Lt),(de.equals(E)===!1||be!==w)&&(s.blendColor(de.r,de.g,de.b,be),E.copy(de),w=be),g=P,M=!1}function He(P,st){P.side===ze?Vt(s.CULL_FACE):at(s.CULL_FACE);let k=P.side===Le;st&&(k=!k),Ht(k),P.blending===Li&&P.transparent===!1?D(hn):D(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let Z=P.stencilWrite;o.setTest(Z),Z&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),oe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):Vt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(P){y!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),y=P)}function Gt(P){P!==Sh?(at(s.CULL_FACE),P!==T&&(P===_l?s.cullFace(s.BACK):P===Eh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Vt(s.CULL_FACE),T=P}function wt(P){P!==z&&(G&&s.lineWidth(P),z=P)}function oe(P,st,k){P?(at(s.POLYGON_OFFSET_FILL),(O!==st||H!==k)&&(s.polygonOffset(st,k),O=st,H=k)):Vt(s.POLYGON_OFFSET_FILL)}function St(P){P?at(s.SCISSOR_TEST):Vt(s.SCISSOR_TEST)}function b(P){P===void 0&&(P=s.TEXTURE0+J-1),rt!==P&&(s.activeTexture(P),rt=P)}function v(P,st,k){k===void 0&&(rt===null?k=s.TEXTURE0+J-1:k=rt);let Z=dt[k];Z===void 0&&(Z={type:void 0,texture:void 0},dt[k]=Z),(Z.type!==P||Z.texture!==st)&&(rt!==k&&(s.activeTexture(k),rt=k),s.bindTexture(P,st||yt[P]),Z.type=P,Z.texture=st)}function N(){let P=dt[rt];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Zt(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Rt(P){ie.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),ie.copy(P))}function gt(P){X.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),X.copy(P))}function Wt(P,st){let k=c.get(st);k===void 0&&(k=new WeakMap,c.set(st,k));let Z=k.get(P);Z===void 0&&(Z=s.getUniformBlockIndex(st,P.name),k.set(P,Z))}function Bt(P,st){let Z=c.get(st).get(P);l.get(st)!==Z&&(s.uniformBlockBinding(st,Z,P.__bindingPointIndex),l.set(st,Z))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},rt=null,dt={},u={},f=new WeakMap,p=[],m=null,A=!1,g=null,d=null,_=null,I=null,x=null,V=null,S=null,E=new Et(0,0,0),w=0,M=!1,y=null,T=null,z=null,O=null,H=null,ie.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Vt,bindFramebuffer:Ut,drawBuffers:zt,useProgram:ue,setBlending:D,setMaterial:He,setFlipSided:Ht,setCullFace:Gt,setLineWidth:wt,setPolygonOffset:oe,setScissorTest:St,activeTexture:b,bindTexture:v,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:pt,texImage3D:Tt,updateUBOMapping:Wt,uniformBlockBinding:Bt,texStorage2D:Zt,texStorage3D:Q,texSubImage2D:W,texSubImage3D:Ct,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:Rt,viewport:gt,reset:se}}function yc(s,t,e,n){let i=jg(n);switch(e){case Dc:return s*t;case Bc:return s*t;case Fc:return s*t*2;case Ko:return s*t/i.components*i.byteLength;case Qo:return s*t/i.components*i.byteLength;case Oc:return s*t*2/i.components*i.byteLength;case $o:return s*t*2/i.components*i.byteLength;case Nc:return s*t*3/i.components*i.byteLength;case tn:return s*t*4/i.components*i.byteLength;case tl:return s*t*4/i.components*i.byteLength;case Qs:case $s:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case tr:case er:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ba:case Oa:return Math.max(s,16)*Math.max(t,8)/4;case Na:case Fa:return Math.max(s,8)*Math.max(t,8)/2;case za:case ka:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case qa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Za:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ja:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ka:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case $a:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case to:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case eo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case no:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case nr:case io:case so:return Math.ceil(s/4)*Math.ceil(t/4)*16;case zc:case ro:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ao:case oo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jg(s){switch(s){case bn:case Pc:return{byteLength:1,components:1};case us:case Uc:case nn:return{byteLength:2,components:1};case Jo:case jo:return{byteLength:2,components:4};case li:case Zo:case cn:return{byteLength:4,components:1};case Lc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Kg(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,v){return p?new OffscreenCanvas(b,v):rr("canvas")}function A(b,v,N){let Y=1,j=St(b);if((j.width>N||j.height>N)&&(Y=N/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){let W=Math.floor(Y*j.width),Ct=Math.floor(Y*j.height);u===void 0&&(u=m(W,Ct));let ot=v?m(W,Ct):u;return ot.width=W,ot.height=Ct,ot.getContext("2d").drawImage(b,0,0,W,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+Ct+")."),ot}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function g(b){return b.generateMipmaps}function d(b){s.generateMipmap(b)}function _(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(b,v,N,Y,j=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=v;if(v===s.RED&&(N===s.FLOAT&&(W=s.R32F),N===s.HALF_FLOAT&&(W=s.R16F),N===s.UNSIGNED_BYTE&&(W=s.R8)),v===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(W=s.R8UI),N===s.UNSIGNED_SHORT&&(W=s.R16UI),N===s.UNSIGNED_INT&&(W=s.R32UI),N===s.BYTE&&(W=s.R8I),N===s.SHORT&&(W=s.R16I),N===s.INT&&(W=s.R32I)),v===s.RG&&(N===s.FLOAT&&(W=s.RG32F),N===s.HALF_FLOAT&&(W=s.RG16F),N===s.UNSIGNED_BYTE&&(W=s.RG8)),v===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(W=s.RG8UI),N===s.UNSIGNED_SHORT&&(W=s.RG16UI),N===s.UNSIGNED_INT&&(W=s.RG32UI),N===s.BYTE&&(W=s.RG8I),N===s.SHORT&&(W=s.RG16I),N===s.INT&&(W=s.RG32I)),v===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(W=s.RGB8UI),N===s.UNSIGNED_SHORT&&(W=s.RGB16UI),N===s.UNSIGNED_INT&&(W=s.RGB32UI),N===s.BYTE&&(W=s.RGB8I),N===s.SHORT&&(W=s.RGB16I),N===s.INT&&(W=s.RGB32I)),v===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),N===s.UNSIGNED_INT&&(W=s.RGBA32UI),N===s.BYTE&&(W=s.RGBA8I),N===s.SHORT&&(W=s.RGBA16I),N===s.INT&&(W=s.RGBA32I)),v===s.RGB&&N===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),v===s.RGBA){let Ct=j?Rr:qt.getTransfer(Y);N===s.FLOAT&&(W=s.RGBA32F),N===s.HALF_FLOAT&&(W=s.RGBA16F),N===s.UNSIGNED_BYTE&&(W=Ct===$t?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function x(b,v){let N;return b?v===null||v===li||v===ki?N=s.DEPTH24_STENCIL8:v===cn?N=s.DEPTH32F_STENCIL8:v===us&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===li||v===ki?N=s.DEPTH_COMPONENT24:v===cn?N=s.DEPTH_COMPONENT32F:v===us&&(N=s.DEPTH_COMPONENT16),N}function V(b,v){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==ke&&b.minFilter!==ln?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function S(b){let v=b.target;v.removeEventListener("dispose",S),w(v),v.isVideoTexture&&h.delete(v)}function E(b){let v=b.target;v.removeEventListener("dispose",E),y(v)}function w(b){let v=n.get(b);if(v.__webglInit===void 0)return;let N=b.source,Y=f.get(N);if(Y){let j=Y[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(b),Object.keys(Y).length===0&&f.delete(N)}n.remove(b)}function M(b){let v=n.get(b);s.deleteTexture(v.__webglTexture);let N=b.source,Y=f.get(N);delete Y[v.__cacheKey],a.memory.textures--}function y(b){let v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let j=0;j<v.__webglFramebuffer[Y].length;j++)s.deleteFramebuffer(v.__webglFramebuffer[Y][j]);else s.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)s.deleteFramebuffer(v.__webglFramebuffer[Y]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let N=b.textures;for(let Y=0,j=N.length;Y<j;Y++){let W=n.get(N[Y]);W.__webglTexture&&(s.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(b)}let T=0;function z(){T=0}function O(){let b=T;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),T+=1,b}function H(b){let v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function J(b,v){let N=n.get(b);if(b.isVideoTexture&&wt(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){let Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,b,v);return}}e.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+v)}function G(b,v){let N=n.get(b);if(b.version>0&&N.__version!==b.version){X(N,b,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+v)}function tt(b,v){let N=n.get(b);if(b.version>0&&N.__version!==b.version){X(N,b,v);return}e.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+v)}function q(b,v){let N=n.get(b);if(b.version>0&&N.__version!==b.version){et(N,b,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+v)}let rt={[Mn]:s.REPEAT,[ai]:s.CLAMP_TO_EDGE,[Da]:s.MIRRORED_REPEAT},dt={[ke]:s.NEAREST,[jh]:s.NEAREST_MIPMAP_NEAREST,[Es]:s.NEAREST_MIPMAP_LINEAR,[ln]:s.LINEAR,[Xr]:s.LINEAR_MIPMAP_NEAREST,[oi]:s.LINEAR_MIPMAP_LINEAR},Mt={[tu]:s.NEVER,[au]:s.ALWAYS,[eu]:s.LESS,[qc]:s.LEQUAL,[nu]:s.EQUAL,[ru]:s.GEQUAL,[iu]:s.GREATER,[su]:s.NOTEQUAL};function Ot(b,v){if(v.type===cn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ln||v.magFilter===Xr||v.magFilter===Es||v.magFilter===oi||v.minFilter===ln||v.minFilter===Xr||v.minFilter===Es||v.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,rt[v.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,rt[v.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,rt[v.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,dt[v.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,dt[v.minFilter]),v.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,Mt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ke||v.minFilter!==Es&&v.minFilter!==oi||v.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");s.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ie(b,v){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",S));let Y=v.source,j=f.get(Y);j===void 0&&(j={},f.set(Y,j));let W=H(v);if(W!==b.__cacheKey){j[W]===void 0&&(j[W]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,N=!0),j[W].usedTimes++;let Ct=j[b.__cacheKey];Ct!==void 0&&(j[b.__cacheKey].usedTimes--,Ct.usedTimes===0&&M(v)),b.__cacheKey=W,b.__webglTexture=j[W].texture}return N}function X(b,v,N){let Y=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=s.TEXTURE_3D);let j=ie(b,v),W=v.source;e.bindTexture(Y,b.__webglTexture,s.TEXTURE0+N);let Ct=n.get(W);if(W.version!==Ct.__version||j===!0){e.activeTexture(s.TEXTURE0+N);let ot=qt.getPrimaries(qt.workingColorSpace),ft=v.colorSpace===Bn?null:qt.getPrimaries(v.colorSpace),Zt=v.colorSpace===Bn||ot===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let Q=A(v.image,!1,i.maxTextureSize);Q=oe(v,Q);let pt=r.convert(v.format,v.colorSpace),Tt=r.convert(v.type),Rt=I(v.internalFormat,pt,Tt,v.colorSpace,v.isVideoTexture);Ot(Y,v);let gt,Wt=v.mipmaps,Bt=v.isVideoTexture!==!0,se=Ct.__version===void 0||j===!0,P=W.dataReady,st=V(v,Q);if(v.isDepthTexture)Rt=x(v.format===qi,v.type),se&&(Bt?e.texStorage2D(s.TEXTURE_2D,1,Rt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,Rt,Q.width,Q.height,0,pt,Tt,null));else if(v.isDataTexture)if(Wt.length>0){Bt&&se&&e.texStorage2D(s.TEXTURE_2D,st,Rt,Wt[0].width,Wt[0].height);for(let k=0,Z=Wt.length;k<Z;k++)gt=Wt[k],Bt?P&&e.texSubImage2D(s.TEXTURE_2D,k,0,0,gt.width,gt.height,pt,Tt,gt.data):e.texImage2D(s.TEXTURE_2D,k,Rt,gt.width,gt.height,0,pt,Tt,gt.data);v.generateMipmaps=!1}else Bt?(se&&e.texStorage2D(s.TEXTURE_2D,st,Rt,Q.width,Q.height),P&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,pt,Tt,Q.data)):e.texImage2D(s.TEXTURE_2D,0,Rt,Q.width,Q.height,0,pt,Tt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Bt&&se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Rt,Wt[0].width,Wt[0].height,Q.depth);for(let k=0,Z=Wt.length;k<Z;k++)if(gt=Wt[k],v.format!==tn)if(pt!==null)if(Bt){if(P)if(v.layerUpdates.size>0){let ht=yc(gt.width,gt.height,v.format,v.type);for(let lt of v.layerUpdates){let Lt=gt.data.subarray(lt*ht/gt.data.BYTES_PER_ELEMENT,(lt+1)*ht/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,lt,gt.width,gt.height,1,pt,Lt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,0,gt.width,gt.height,Q.depth,pt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,k,Rt,gt.width,gt.height,Q.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?P&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,0,gt.width,gt.height,Q.depth,pt,Tt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,k,Rt,gt.width,gt.height,Q.depth,0,pt,Tt,gt.data)}else{Bt&&se&&e.texStorage2D(s.TEXTURE_2D,st,Rt,Wt[0].width,Wt[0].height);for(let k=0,Z=Wt.length;k<Z;k++)gt=Wt[k],v.format!==tn?pt!==null?Bt?P&&e.compressedTexSubImage2D(s.TEXTURE_2D,k,0,0,gt.width,gt.height,pt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,k,Rt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?P&&e.texSubImage2D(s.TEXTURE_2D,k,0,0,gt.width,gt.height,pt,Tt,gt.data):e.texImage2D(s.TEXTURE_2D,k,Rt,gt.width,gt.height,0,pt,Tt,gt.data)}else if(v.isDataArrayTexture)if(Bt){if(se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Rt,Q.width,Q.height,Q.depth),P)if(v.layerUpdates.size>0){let k=yc(Q.width,Q.height,v.format,v.type);for(let Z of v.layerUpdates){let ht=Q.data.subarray(Z*k/Q.data.BYTES_PER_ELEMENT,(Z+1)*k/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,pt,Tt,ht)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,Tt,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Rt,Q.width,Q.height,Q.depth,0,pt,Tt,Q.data);else if(v.isData3DTexture)Bt?(se&&e.texStorage3D(s.TEXTURE_3D,st,Rt,Q.width,Q.height,Q.depth),P&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,Tt,Q.data)):e.texImage3D(s.TEXTURE_3D,0,Rt,Q.width,Q.height,Q.depth,0,pt,Tt,Q.data);else if(v.isFramebufferTexture){if(se)if(Bt)e.texStorage2D(s.TEXTURE_2D,st,Rt,Q.width,Q.height);else{let k=Q.width,Z=Q.height;for(let ht=0;ht<st;ht++)e.texImage2D(s.TEXTURE_2D,ht,Rt,k,Z,0,pt,Tt,null),k>>=1,Z>>=1}}else if(Wt.length>0){if(Bt&&se){let k=St(Wt[0]);e.texStorage2D(s.TEXTURE_2D,st,Rt,k.width,k.height)}for(let k=0,Z=Wt.length;k<Z;k++)gt=Wt[k],Bt?P&&e.texSubImage2D(s.TEXTURE_2D,k,0,0,pt,Tt,gt):e.texImage2D(s.TEXTURE_2D,k,Rt,pt,Tt,gt);v.generateMipmaps=!1}else if(Bt){if(se){let k=St(Q);e.texStorage2D(s.TEXTURE_2D,st,Rt,k.width,k.height)}P&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,Tt,Q)}else e.texImage2D(s.TEXTURE_2D,0,Rt,pt,Tt,Q);g(v)&&d(Y),Ct.__version=W.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function et(b,v,N){if(v.image.length!==6)return;let Y=ie(b,v),j=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+N);let W=n.get(j);if(j.version!==W.__version||Y===!0){e.activeTexture(s.TEXTURE0+N);let Ct=qt.getPrimaries(qt.workingColorSpace),ot=v.colorSpace===Bn?null:qt.getPrimaries(v.colorSpace),ft=v.colorSpace===Bn||Ct===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Zt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!Zt&&!Q?pt[Z]=A(v.image[Z],!0,i.maxCubemapSize):pt[Z]=Q?v.image[Z].image:v.image[Z],pt[Z]=oe(v,pt[Z]);let Tt=pt[0],Rt=r.convert(v.format,v.colorSpace),gt=r.convert(v.type),Wt=I(v.internalFormat,Rt,gt,v.colorSpace),Bt=v.isVideoTexture!==!0,se=W.__version===void 0||Y===!0,P=j.dataReady,st=V(v,Tt);Ot(s.TEXTURE_CUBE_MAP,v);let k;if(Zt){Bt&&se&&e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Wt,Tt.width,Tt.height);for(let Z=0;Z<6;Z++){k=pt[Z].mipmaps;for(let ht=0;ht<k.length;ht++){let lt=k[ht];v.format!==tn?Rt!==null?Bt?P&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,lt.width,lt.height,Rt,lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Wt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,lt.width,lt.height,Rt,gt,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Wt,lt.width,lt.height,0,Rt,gt,lt.data)}}}else{if(k=v.mipmaps,Bt&&se){k.length>0&&st++;let Z=St(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Wt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){Bt?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,Rt,gt,pt[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,pt[Z].width,pt[Z].height,0,Rt,gt,pt[Z].data);for(let ht=0;ht<k.length;ht++){let Lt=k[ht].image[Z].image;Bt?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Lt.width,Lt.height,Rt,gt,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Wt,Lt.width,Lt.height,0,Rt,gt,Lt.data)}}else{Bt?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Rt,gt,pt[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,Rt,gt,pt[Z]);for(let ht=0;ht<k.length;ht++){let lt=k[ht];Bt?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Rt,gt,lt.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Wt,Rt,gt,lt.image[Z])}}}g(v)&&d(s.TEXTURE_CUBE_MAP),W.__version=j.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function yt(b,v,N,Y,j,W){let Ct=r.convert(N.format,N.colorSpace),ot=r.convert(N.type),ft=I(N.internalFormat,Ct,ot,N.colorSpace),Zt=n.get(v),Q=n.get(N);if(Q.__renderTarget=v,!Zt.__hasExternalTextures){let pt=Math.max(1,v.width>>W),Tt=Math.max(1,v.height>>W);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,W,ft,pt,Tt,v.depth,0,Ct,ot,null):e.texImage2D(j,W,ft,pt,Tt,0,Ct,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),Gt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,j,Q.__webglTexture,0,Ht(v)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,j,Q.__webglTexture,W),e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(b,v,N){if(s.bindRenderbuffer(s.RENDERBUFFER,b),v.depthBuffer){let Y=v.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,W=x(v.stencilBuffer,j),Ct=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=Ht(v);Gt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,W,v.width,v.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,W,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,W,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,b)}else{let Y=v.textures;for(let j=0;j<Y.length;j++){let W=Y[j],Ct=r.convert(W.format,W.colorSpace),ot=r.convert(W.type),ft=I(W.internalFormat,Ct,ot,W.colorSpace),Zt=Ht(v);N&&Gt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,ft,v.width,v.height):Gt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt,ft,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ft,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Vt(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);let j=Y.__webglTexture,W=Ht(v);if(v.depthTexture.format===Di)Gt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(v.depthTexture.format===qi)Gt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ut(b){let v=n.get(b),N=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){let Y=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){let j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=Y}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Vt(v.__webglFramebuffer,b)}else if(N){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=s.createRenderbuffer(),at(v.__webglDepthbuffer[Y],b,!1);else{let j=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,W)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),at(v.__webglDepthbuffer,b,!1);else{let Y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,j)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(b,v,N){let Y=n.get(b);v!==void 0&&yt(Y.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Ut(b)}function ue(b){let v=b.texture,N=n.get(b),Y=n.get(v);b.addEventListener("dispose",E);let j=b.textures,W=b.isWebGLCubeRenderTarget===!0,Ct=j.length>1;if(Ct||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=v.version,a.memory.textures++),W){N.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[ot]=[];for(let ft=0;ft<v.mipmaps.length;ft++)N.__webglFramebuffer[ot][ft]=s.createFramebuffer()}else N.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let ot=0;ot<v.mipmaps.length;ot++)N.__webglFramebuffer[ot]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let ot=0,ft=j.length;ot<ft;ot++){let Zt=n.get(j[ot]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&Gt(b)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){let ft=j[ot];N.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[ot]);let Zt=r.convert(ft.format,ft.colorSpace),Q=r.convert(ft.type),pt=I(ft.internalFormat,Zt,Q,ft.colorSpace,b.isXRRenderTarget===!0),Tt=Ht(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,pt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,N.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),at(N.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(W){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Ot(s.TEXTURE_CUBE_MAP,v);for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)yt(N.__webglFramebuffer[ot][ft],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else yt(N.__webglFramebuffer[ot],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);g(v)&&d(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ot=0,ft=j.length;ot<ft;ot++){let Zt=j[ot],Q=n.get(Zt);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),Ot(s.TEXTURE_2D,Zt),yt(N.__webglFramebuffer,b,Zt,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,0),g(Zt)&&d(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ot=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,Y.__webglTexture),Ot(ot,v),v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)yt(N.__webglFramebuffer[ft],b,v,s.COLOR_ATTACHMENT0,ot,ft);else yt(N.__webglFramebuffer,b,v,s.COLOR_ATTACHMENT0,ot,0);g(v)&&d(ot),e.unbindTexture()}b.depthBuffer&&Ut(b)}function Yt(b){let v=b.textures;for(let N=0,Y=v.length;N<Y;N++){let j=v[N];if(g(j)){let W=_(b),Ct=n.get(j).__webglTexture;e.bindTexture(W,Ct),d(W),e.unbindTexture()}}}let fe=[],D=[];function He(b){if(b.samples>0){if(Gt(b)===!1){let v=b.textures,N=b.width,Y=b.height,j=s.COLOR_BUFFER_BIT,W=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(b),ot=v.length>1;if(ot)for(let ft=0;ft<v.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let ft=0;ft<v.length;ft++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[ft]);let Zt=n.get(v[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Zt,0)}s.blitFramebuffer(0,0,N,Y,0,0,N,Y,j,s.NEAREST),l===!0&&(fe.length=0,D.length=0,fe.push(s.COLOR_ATTACHMENT0+ft),b.depthBuffer&&b.resolveDepthBuffer===!1&&(fe.push(W),D.push(W),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let ft=0;ft<v.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[ft]);let Zt=n.get(v[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,Zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let v=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Ht(b){return Math.min(i.maxSamples,b.samples)}function Gt(b){let v=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function wt(b){let v=a.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function oe(b,v){let N=b.colorSpace,Y=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==Xi&&N!==Bn&&(qt.getTransfer(N)===$t?(Y!==tn||j!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function St(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=tt,this.setTextureCube=q,this.rebindTextures=zt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Gt}function Qg(s,t){function e(n,i=Bn){let r,a=qt.getTransfer(i);if(n===bn)return s.UNSIGNED_BYTE;if(n===Jo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===jo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Lc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return s.BYTE;if(n===Uc)return s.SHORT;if(n===us)return s.UNSIGNED_SHORT;if(n===Zo)return s.INT;if(n===li)return s.UNSIGNED_INT;if(n===cn)return s.FLOAT;if(n===nn)return s.HALF_FLOAT;if(n===Dc)return s.ALPHA;if(n===Nc)return s.RGB;if(n===tn)return s.RGBA;if(n===Bc)return s.LUMINANCE;if(n===Fc)return s.LUMINANCE_ALPHA;if(n===Di)return s.DEPTH_COMPONENT;if(n===qi)return s.DEPTH_STENCIL;if(n===Ko)return s.RED;if(n===Qo)return s.RED_INTEGER;if(n===Oc)return s.RG;if(n===$o)return s.RG_INTEGER;if(n===tl)return s.RGBA_INTEGER;if(n===Qs||n===$s||n===tr||n===er)if(a===$t)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Na||n===Ba||n===Fa||n===Oa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===ka||n===qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===za||n===ka)return a===$t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qa)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ha||n===Ga||n===Wa||n===Xa||n===Ya||n===Za||n===Ja||n===ja||n===Ka||n===Qa||n===$a||n===to||n===eo||n===no)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ha)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ga)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$a)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===to)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eo)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===no)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nr||n===io||n===so)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===nr)return a===$t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===so)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zc||n===ro||n===ao||n===oo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===nr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Mo=class extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Xt=class extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}},$g={type:"move"},hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let A of t.hand.values()){let g=e.getJointPose(A,n),d=this._getHandJoint(c,A);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($g)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},tm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,em=`
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

}`,bo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new De,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xe({vertexShader:tm,fragmentShader:em,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},So=class extends zn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,m=null,A=new bo,g=e.getContextAttributes(),d=null,_=null,I=[],x=[],V=new bt,S=null,E=new we;E.viewport=new ne;let w=new we;w.viewport=new ne;let M=[E,w],y=new Mo,T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=I[X];return et===void 0&&(et=new hs,I[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=I[X];return et===void 0&&(et=new hs,I[X]=et),et.getGripSpace()},this.getHand=function(X){let et=I[X];return et===void 0&&(et=new hs,I[X]=et),et.getHandSpace()};function O(X){let et=x.indexOf(X.inputSource);if(et===-1)return;let yt=I[et];yt!==void 0&&(yt.update(X.inputSource,X.frame,c||a),yt.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",J);for(let X=0;X<I.length;X++){let et=x[X];et!==null&&(x[X]=null,I[X].disconnect(et))}T=null,z=null,A.reset(),t.setRenderTarget(d),p=null,f=null,u=null,i=null,_=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",H),i.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(V),i.renderState.layers===void 0){let et={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ve(p.framebufferWidth,p.framebufferHeight,{format:tn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let et=null,yt=null,at=null;g.depth&&(at=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=g.stencil?qi:Di,yt=g.stencil?ki:li);let Vt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Vt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Ve(f.textureWidth,f.textureHeight,{format:tn,type:bn,depthTexture:new gr(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function J(X){for(let et=0;et<X.removed.length;et++){let yt=X.removed[et],at=x.indexOf(yt);at>=0&&(x[at]=null,I[at].disconnect(yt))}for(let et=0;et<X.added.length;et++){let yt=X.added[et],at=x.indexOf(yt);if(at===-1){for(let Ut=0;Ut<I.length;Ut++)if(Ut>=x.length){x.push(yt),at=Ut;break}else if(x[Ut]===null){x[Ut]=yt,at=Ut;break}if(at===-1)break}let Vt=I[at];Vt&&Vt.connect(yt)}}let G=new R,tt=new R;function q(X,et,yt){G.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(yt.matrixWorld);let at=G.distanceTo(tt),Vt=et.projectionMatrix.elements,Ut=yt.projectionMatrix.elements,zt=Vt[14]/(Vt[10]-1),ue=Vt[14]/(Vt[10]+1),Yt=(Vt[9]+1)/Vt[5],fe=(Vt[9]-1)/Vt[5],D=(Vt[8]-1)/Vt[0],He=(Ut[8]+1)/Ut[0],Ht=zt*D,Gt=zt*He,wt=at/(-D+He),oe=wt*-D;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(oe),X.translateZ(wt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Vt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let St=zt+wt,b=ue+wt,v=Ht-oe,N=Gt+(at-oe),Y=Yt*ue/b*St,j=fe*ue/b*St;X.projectionMatrix.makePerspective(v,N,Y,j,St,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function rt(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let et=X.near,yt=X.far;A.texture!==null&&(A.depthNear>0&&(et=A.depthNear),A.depthFar>0&&(yt=A.depthFar)),y.near=w.near=E.near=et,y.far=w.far=E.far=yt,(T!==y.near||z!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,z=y.far),E.layers.mask=X.layers.mask|2,w.layers.mask=X.layers.mask|4,y.layers.mask=E.layers.mask|w.layers.mask;let at=X.parent,Vt=y.cameras;rt(y,at);for(let Ut=0;Ut<Vt.length;Ut++)rt(Vt[Ut],at);Vt.length===2?q(y,E,w):y.projectionMatrix.copy(E.projectionMatrix),dt(X,y,at)};function dt(X,et,yt){yt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(yt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=co*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(y)};let Mt=null;function Ot(X,et){if(h=et.getViewerPose(c||a),m=et,h!==null){let yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let at=!1;yt.length!==y.cameras.length&&(y.cameras.length=0,at=!0);for(let Ut=0;Ut<yt.length;Ut++){let zt=yt[Ut],ue=null;if(p!==null)ue=p.getViewport(zt);else{let fe=u.getViewSubImage(f,zt);ue=fe.viewport,Ut===0&&(t.setRenderTargetTextures(_,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(_))}let Yt=M[Ut];Yt===void 0&&(Yt=new we,Yt.layers.enable(Ut),Yt.viewport=new ne,M[Ut]=Yt),Yt.matrix.fromArray(zt.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(zt.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(ue.x,ue.y,ue.width,ue.height),Ut===0&&(y.matrix.copy(Yt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),at===!0&&y.cameras.push(Yt)}let Vt=i.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")){let Ut=u.getDepthInformation(yt[0]);Ut&&Ut.isValid&&Ut.texture&&A.init(t,Ut,i.renderState)}}for(let yt=0;yt<I.length;yt++){let at=x[yt],Vt=I[yt];at!==null&&Vt!==void 0&&Vt.update(at,et,c||a)}Mt&&Mt(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}let ie=new Yc;ie.setAnimationLoop(Ot),this.setAnimationLoop=function(X){Mt=X},this.dispose=function(){}}},ei=new un,nm=new ae;function im(s,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,Xc(s)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function i(g,d,_,I,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),u(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d)):d.isMeshStandardMaterial?(r(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,x)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),A(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,_,I):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Le&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Le&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let _=t.get(d),I=_.envMap,x=_.envMapRotation;I&&(g.envMap.value=I,ei.copy(x),ei.x*=-1,ei.y*=-1,ei.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),g.envMapRotation.value.setFromMatrix4(nm.makeRotationFromEuler(ei)),g.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,_,I){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*_,g.scale.value=I*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,_){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Le&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function A(g,d){let _=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sm(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,I){let x=I.program;n.uniformBlockBinding(_,x)}function c(_,I){let x=i[_.id];x===void 0&&(m(_),x=h(_),i[_.id]=x,_.addEventListener("dispose",g));let V=I.program;n.updateUBOMapping(_,V);let S=t.render.frame;r[_.id]!==S&&(f(_),r[_.id]=S)}function h(_){let I=u();_.__bindingPointIndex=I;let x=s.createBuffer(),V=_.__size,S=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,V,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,x),x}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let I=i[_.id],x=_.uniforms,V=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let S=0,E=x.length;S<E;S++){let w=Array.isArray(x[S])?x[S]:[x[S]];for(let M=0,y=w.length;M<y;M++){let T=w[M];if(p(T,S,M,V)===!0){let z=T.__offset,O=Array.isArray(T.value)?T.value:[T.value],H=0;for(let J=0;J<O.length;J++){let G=O[J],tt=A(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,z+H,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,H),H+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(_,I,x,V){let S=_.value,E=I+"_"+x;if(V[E]===void 0)return typeof S=="number"||typeof S=="boolean"?V[E]=S:V[E]=S.clone(),!0;{let w=V[E];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return V[E]=S,!0}else if(w.equals(S)===!1)return w.copy(S),!0}return!1}function m(_){let I=_.uniforms,x=0,V=16;for(let E=0,w=I.length;E<w;E++){let M=Array.isArray(I[E])?I[E]:[I[E]];for(let y=0,T=M.length;y<T;y++){let z=M[y],O=Array.isArray(z.value)?z.value:[z.value];for(let H=0,J=O.length;H<J;H++){let G=O[H],tt=A(G),q=x%V,rt=q%tt.boundary,dt=q+rt;x+=rt,dt!==0&&V-dt<tt.storage&&(x+=V-dt),z.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=tt.storage}}}let S=x%V;return S>0&&(x+=V-S),_.__size=x,_.__cache={},this}function A(_){let I={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(I.boundary=4,I.storage=4):_.isVector2?(I.boundary=8,I.storage=8):_.isVector3||_.isColor?(I.boundary=16,I.storage=12):_.isVector4?(I.boundary=16,I.storage=16):_.isMatrix3?(I.boundary=48,I.storage=48):_.isMatrix4?(I.boundary=64,I.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),I}function g(_){let I=_.target;I.removeEventListener("dispose",g);let x=a.indexOf(I.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[I.id]),delete i[I.id],delete r[I.id]}function d(){for(let _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:l,update:c,dispose:d}}var mr=class{constructor(t={}){let{canvas:e=lu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),A=new Int32Array(4),g=null,d=null,_=[],I=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this.toneMapping=Fn,this.toneMappingExposure=1;let x=this,V=!1,S=0,E=0,w=null,M=-1,y=null,T=new ne,z=new ne,O=null,H=new Et(0),J=0,G=e.width,tt=e.height,q=1,rt=null,dt=null,Mt=new ne(0,0,G,tt),Ot=new ne(0,0,G,tt),ie=!1,X=new ds,et=!1,yt=!1,at=new ae,Vt=new ae,Ut=new R,zt=new ne,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function fe(){return w===null?q:1}let D=n;function He(C,U){return e.getContext(C,U)}try{let C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qo}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",lt,!1),D===null){let U="webgl2";if(D=He(U,C),D===null)throw He(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ht,Gt,wt,oe,St,b,v,N,Y,j,W,Ct,ot,ft,Zt,Q,pt,Tt,Rt,gt,Wt,Bt,se,P;function st(){Ht=new yp(D),Ht.init(),Bt=new Qg(D,Ht),Gt=new pp(D,Ht,t,Bt),wt=new Jg(D,Ht),Gt.reverseDepthBuffer&&f&&wt.buffers.depth.setReversed(!0),oe=new Ip(D),St=new Ng,b=new Kg(D,Ht,wt,St,Gt,Bt,oe),v=new mp(x),N=new vp(x),Y=new Tu(D),se=new dp(D,Y),j=new Cp(D,Y,oe,se),W=new bp(D,j,Y,oe),Rt=new Mp(D,Gt,b),Q=new gp(St),Ct=new Dg(x,v,N,Ht,Gt,se,Q),ot=new im(x,St),ft=new Fg,Zt=new Gg(Ht),Tt=new up(x,v,N,wt,W,p,l),pt=new Yg(x,W,Gt),P=new sm(D,oe,Gt,wt),gt=new fp(D,Ht,oe),Wt=new _p(D,Ht,oe),oe.programs=Ct.programs,x.capabilities=Gt,x.extensions=Ht,x.properties=St,x.renderLists=ft,x.shadowMap=pt,x.state=wt,x.info=oe}st();let k=new So(x,D);this.xr=k,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let C=Ht.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Ht.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(G,tt,!1))},this.getSize=function(C){return C.set(G,tt)},this.setSize=function(C,U,B=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,tt=U,e.width=Math.floor(C*q),e.height=Math.floor(U*q),B===!0&&(e.style.width=C+"px",e.style.height=U+"px"),this.setViewport(0,0,C,U)},this.getDrawingBufferSize=function(C){return C.set(G*q,tt*q).floor()},this.setDrawingBufferSize=function(C,U,B){G=C,tt=U,q=B,e.width=Math.floor(C*B),e.height=Math.floor(U*B),this.setViewport(0,0,C,U)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(Mt)},this.setViewport=function(C,U,B,F){C.isVector4?Mt.set(C.x,C.y,C.z,C.w):Mt.set(C,U,B,F),wt.viewport(T.copy(Mt).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(Ot)},this.setScissor=function(C,U,B,F){C.isVector4?Ot.set(C.x,C.y,C.z,C.w):Ot.set(C,U,B,F),wt.scissor(z.copy(Ot).multiplyScalar(q).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(C){wt.setScissorTest(ie=C)},this.setOpaqueSort=function(C){rt=C},this.setTransparentSort=function(C){dt=C},this.getClearColor=function(C){return C.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(C=!0,U=!0,B=!0){let F=0;if(C){let L=!1;if(w!==null){let $=w.texture.format;L=$===tl||$===$o||$===Qo}if(L){let $=w.texture.type,ct=$===bn||$===li||$===us||$===ki||$===Jo||$===jo,At=Tt.getClearColor(),xt=Tt.getClearAlpha(),Pt=At.r,Dt=At.g,vt=At.b;ct?(m[0]=Pt,m[1]=Dt,m[2]=vt,m[3]=xt,D.clearBufferuiv(D.COLOR,0,m)):(A[0]=Pt,A[1]=Dt,A[2]=vt,A[3]=xt,D.clearBufferiv(D.COLOR,0,A))}else F|=D.COLOR_BUFFER_BIT}U&&(F|=D.DEPTH_BUFFER_BIT),B&&(F|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ft.dispose(),Zt.dispose(),St.dispose(),v.dispose(),N.dispose(),W.dispose(),se.dispose(),P.dispose(),Ct.dispose(),k.dispose(),k.removeEventListener("sessionstart",pl),k.removeEventListener("sessionend",gl),Jn.stop()};function Z(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;let C=oe.autoReset,U=pt.enabled,B=pt.autoUpdate,F=pt.needsUpdate,L=pt.type;st(),oe.autoReset=C,pt.enabled=U,pt.autoUpdate=B,pt.needsUpdate=F,pt.type=L}function lt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Lt(C){let U=C.target;U.removeEventListener("dispose",Lt),de(U)}function de(C){be(C),St.remove(C)}function be(C){let U=St.get(C).programs;U!==void 0&&(U.forEach(function(B){Ct.releaseProgram(B)}),C.isShaderMaterial&&Ct.releaseShaderCache(C))}this.renderBufferDirect=function(C,U,B,F,L,$){U===null&&(U=ue);let ct=L.isMesh&&L.matrixWorld.determinant()<0,At=Ih(C,U,B,F,L);wt.setMaterial(F,ct);let xt=B.index,Pt=1;if(F.wireframe===!0){if(xt=j.getWireframeAttribute(B),xt===void 0)return;Pt=2}let Dt=B.drawRange,vt=B.attributes.position,jt=Dt.start*Pt,re=(Dt.start+Dt.count)*Pt;$!==null&&(jt=Math.max(jt,$.start*Pt),re=Math.min(re,($.start+$.count)*Pt)),xt!==null?(jt=Math.max(jt,0),re=Math.min(re,xt.count)):vt!=null&&(jt=Math.max(jt,0),re=Math.min(re,vt.count));let le=re-jt;if(le<0||le===1/0)return;se.setup(L,F,At,B,xt);let Re,Kt=gt;if(xt!==null&&(Re=Y.get(xt),Kt=Wt,Kt.setIndex(Re)),L.isMesh)F.wireframe===!0?(wt.setLineWidth(F.wireframeLinewidth*fe()),Kt.setMode(D.LINES)):Kt.setMode(D.TRIANGLES);else if(L.isLine){let _t=F.linewidth;_t===void 0&&(_t=1),wt.setLineWidth(_t*fe()),L.isLineSegments?Kt.setMode(D.LINES):L.isLineLoop?Kt.setMode(D.LINE_LOOP):Kt.setMode(D.LINE_STRIP)}else L.isPoints?Kt.setMode(D.POINTS):L.isSprite&&Kt.setMode(D.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Kt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Kt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let _t=L._multiDrawStarts,pn=L._multiDrawCounts,Qt=L._multiDrawCount,je=xt?Y.get(xt).bytesPerElement:1,Ai=St.get(F).currentProgram.getUniforms();for(let Be=0;Be<Qt;Be++)Ai.setValue(D,"_gl_DrawID",Be),Kt.render(_t[Be]/je,pn[Be])}else if(L.isInstancedMesh)Kt.renderInstances(jt,le,L.count);else if(B.isInstancedBufferGeometry){let _t=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,pn=Math.min(B.instanceCount,_t);Kt.renderInstances(jt,le,pn)}else Kt.render(jt,le)};function ee(C,U,B){C.transparent===!0&&C.side===ze&&C.forceSinglePass===!1?(C.side=Le,C.needsUpdate=!0,Ss(C,U,B),C.side=On,C.needsUpdate=!0,Ss(C,U,B),C.side=ze):Ss(C,U,B)}this.compile=function(C,U,B=null){B===null&&(B=C),d=Zt.get(B),d.init(U),I.push(d),B.traverseVisible(function(L){L.isLight&&L.layers.test(U.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),C!==B&&C.traverseVisible(function(L){L.isLight&&L.layers.test(U.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),d.setupLights();let F=new Set;return C.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let $=L.material;if($)if(Array.isArray($))for(let ct=0;ct<$.length;ct++){let At=$[ct];ee(At,B,L),F.add(At)}else ee($,B,L),F.add($)}),I.pop(),d=null,F},this.compileAsync=function(C,U,B=null){let F=this.compile(C,U,B);return new Promise(L=>{function $(){if(F.forEach(function(ct){St.get(ct).currentProgram.isReady()&&F.delete(ct)}),F.size===0){L(C);return}setTimeout($,10)}Ht.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let Je=null;function fn(C){Je&&Je(C)}function pl(){Jn.stop()}function gl(){Jn.start()}let Jn=new Yc;Jn.setAnimationLoop(fn),typeof self!="undefined"&&Jn.setContext(self),this.setAnimationLoop=function(C){Je=C,k.setAnimationLoop(C),C===null?Jn.stop():Jn.start()},k.addEventListener("sessionstart",pl),k.addEventListener("sessionend",gl),this.render=function(C,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(U),U=k.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,U,w),d=Zt.get(C,I.length),d.init(U),I.push(d),Vt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Vt),yt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,yt),g=ft.get(C,_.length),g.init(),_.push(g),k.enabled===!0&&k.isPresenting===!0){let $=x.xr.getDepthSensingMesh();$!==null&&Wr($,U,-1/0,x.sortObjects)}Wr(C,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(rt,dt),Yt=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,Yt&&Tt.addToRenderList(g,C),this.info.render.frame++,et===!0&&Q.beginShadows();let B=d.state.shadowsArray;pt.render(B,C,U),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let F=g.opaque,L=g.transmissive;if(d.setupLights(),U.isArrayCamera){let $=U.cameras;if(L.length>0)for(let ct=0,At=$.length;ct<At;ct++){let xt=$[ct];Al(F,L,C,xt)}Yt&&Tt.render(C);for(let ct=0,At=$.length;ct<At;ct++){let xt=$[ct];ml(g,C,xt,xt.viewport)}}else L.length>0&&Al(F,L,C,U),Yt&&Tt.render(C),ml(g,C,U);w!==null&&(b.updateMultisampleRenderTarget(w),b.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(x,C,U),se.resetDefaultState(),M=-1,y=null,I.pop(),I.length>0?(d=I[I.length-1],et===!0&&Q.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Wr(C,U,B,F){if(C.visible===!1)return;if(C.layers.test(U.layers)){if(C.isGroup)B=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(U);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){F&&zt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Vt);let ct=W.update(C),At=C.material;At.visible&&g.push(C,ct,At,B,zt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||X.intersectsObject(C))){let ct=W.update(C),At=C.material;if(F&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),zt.copy(C.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),zt.copy(ct.boundingSphere.center)),zt.applyMatrix4(C.matrixWorld).applyMatrix4(Vt)),Array.isArray(At)){let xt=ct.groups;for(let Pt=0,Dt=xt.length;Pt<Dt;Pt++){let vt=xt[Pt],jt=At[vt.materialIndex];jt&&jt.visible&&g.push(C,ct,jt,B,zt.z,vt)}}else At.visible&&g.push(C,ct,At,B,zt.z,null)}}let $=C.children;for(let ct=0,At=$.length;ct<At;ct++)Wr($[ct],U,B,F)}function ml(C,U,B,F){let L=C.opaque,$=C.transmissive,ct=C.transparent;d.setupLightsView(B),et===!0&&Q.setGlobalState(x.clippingPlanes,B),F&&wt.viewport(T.copy(F)),L.length>0&&bs(L,U,B),$.length>0&&bs($,U,B),ct.length>0&&bs(ct,U,B),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Al(C,U,B,F){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[F.id]===void 0&&(d.state.transmissionRenderTarget[F.id]=new Ve(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?nn:bn,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));let $=d.state.transmissionRenderTarget[F.id],ct=F.viewport||T;$.setSize(ct.z,ct.w);let At=x.getRenderTarget();x.setRenderTarget($),x.getClearColor(H),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),Yt&&Tt.render(B);let xt=x.toneMapping;x.toneMapping=Fn;let Pt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),d.setupLightsView(F),et===!0&&Q.setGlobalState(x.clippingPlanes,F),bs(C,B,F),b.updateMultisampleRenderTarget($),b.updateRenderTargetMipmap($),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let vt=0,jt=U.length;vt<jt;vt++){let re=U[vt],le=re.object,Re=re.geometry,Kt=re.material,_t=re.group;if(Kt.side===ze&&le.layers.test(F.layers)){let pn=Kt.side;Kt.side=Le,Kt.needsUpdate=!0,xl(le,B,F,Re,Kt,_t),Kt.side=pn,Kt.needsUpdate=!0,Dt=!0}}Dt===!0&&(b.updateMultisampleRenderTarget($),b.updateRenderTargetMipmap($))}x.setRenderTarget(At),x.setClearColor(H,J),Pt!==void 0&&(F.viewport=Pt),x.toneMapping=xt}function bs(C,U,B){let F=U.isScene===!0?U.overrideMaterial:null;for(let L=0,$=C.length;L<$;L++){let ct=C[L],At=ct.object,xt=ct.geometry,Pt=F===null?ct.material:F,Dt=ct.group;At.layers.test(B.layers)&&xl(At,U,B,xt,Pt,Dt)}}function xl(C,U,B,F,L,$){C.onBeforeRender(x,U,B,F,L,$),C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),L.onBeforeRender(x,U,B,F,C,$),L.transparent===!0&&L.side===ze&&L.forceSinglePass===!1?(L.side=Le,L.needsUpdate=!0,x.renderBufferDirect(B,U,F,L,C,$),L.side=On,L.needsUpdate=!0,x.renderBufferDirect(B,U,F,L,C,$),L.side=ze):x.renderBufferDirect(B,U,F,L,C,$),C.onAfterRender(x,U,B,F,L,$)}function Ss(C,U,B){U.isScene!==!0&&(U=ue);let F=St.get(C),L=d.state.lights,$=d.state.shadowsArray,ct=L.state.version,At=Ct.getParameters(C,L.state,$,U,B),xt=Ct.getProgramCacheKey(At),Pt=F.programs;F.environment=C.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(C.isMeshStandardMaterial?N:v).get(C.envMap||F.environment),F.envMapRotation=F.environment!==null&&C.envMap===null?U.environmentRotation:C.envMapRotation,Pt===void 0&&(C.addEventListener("dispose",Lt),Pt=new Map,F.programs=Pt);let Dt=Pt.get(xt);if(Dt!==void 0){if(F.currentProgram===Dt&&F.lightsStateVersion===ct)return yl(C,At),Dt}else At.uniforms=Ct.getUniforms(C),C.onBeforeCompile(At,x),Dt=Ct.acquireProgram(At,xt),Pt.set(xt,Dt),F.uniforms=At.uniforms;let vt=F.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(vt.clippingPlanes=Q.uniform),yl(C,At),F.needsLights=bh(C),F.lightsStateVersion=ct,F.needsLights&&(vt.ambientLightColor.value=L.state.ambient,vt.lightProbe.value=L.state.probe,vt.directionalLights.value=L.state.directional,vt.directionalLightShadows.value=L.state.directionalShadow,vt.spotLights.value=L.state.spot,vt.spotLightShadows.value=L.state.spotShadow,vt.rectAreaLights.value=L.state.rectArea,vt.ltc_1.value=L.state.rectAreaLTC1,vt.ltc_2.value=L.state.rectAreaLTC2,vt.pointLights.value=L.state.point,vt.pointLightShadows.value=L.state.pointShadow,vt.hemisphereLights.value=L.state.hemi,vt.directionalShadowMap.value=L.state.directionalShadowMap,vt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,vt.spotShadowMap.value=L.state.spotShadowMap,vt.spotLightMatrix.value=L.state.spotLightMatrix,vt.spotLightMap.value=L.state.spotLightMap,vt.pointShadowMap.value=L.state.pointShadowMap,vt.pointShadowMatrix.value=L.state.pointShadowMatrix),F.currentProgram=Dt,F.uniformsList=null,Dt}function vl(C){if(C.uniformsList===null){let U=C.currentProgram.getUniforms();C.uniformsList=Bi.seqWithValue(U.seq,C.uniforms)}return C.uniformsList}function yl(C,U){let B=St.get(C);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Ih(C,U,B,F,L){U.isScene!==!0&&(U=ue),b.resetTextureUnits();let $=U.fog,ct=F.isMeshStandardMaterial?U.environment:null,At=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Xi,xt=(F.isMeshStandardMaterial?N:v).get(F.envMap||ct),Pt=F.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Dt=!!B.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),vt=!!B.morphAttributes.position,jt=!!B.morphAttributes.normal,re=!!B.morphAttributes.color,le=Fn;F.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(le=x.toneMapping);let Re=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Kt=Re!==void 0?Re.length:0,_t=St.get(F),pn=d.state.lights;if(et===!0&&(yt===!0||C!==y)){let Ge=C===y&&F.id===M;Q.setState(F,C,Ge)}let Qt=!1;F.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==pn.state.version||_t.outputColorSpace!==At||L.isBatchedMesh&&_t.batching===!1||!L.isBatchedMesh&&_t.batching===!0||L.isBatchedMesh&&_t.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&_t.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&_t.instancing===!1||!L.isInstancedMesh&&_t.instancing===!0||L.isSkinnedMesh&&_t.skinning===!1||!L.isSkinnedMesh&&_t.skinning===!0||L.isInstancedMesh&&_t.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&_t.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&_t.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&_t.instancingMorph===!1&&L.morphTexture!==null||_t.envMap!==xt||F.fog===!0&&_t.fog!==$||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==Q.numPlanes||_t.numIntersection!==Q.numIntersection)||_t.vertexAlphas!==Pt||_t.vertexTangents!==Dt||_t.morphTargets!==vt||_t.morphNormals!==jt||_t.morphColors!==re||_t.toneMapping!==le||_t.morphTargetsCount!==Kt)&&(Qt=!0):(Qt=!0,_t.__version=F.version);let je=_t.currentProgram;Qt===!0&&(je=Ss(F,U,L));let Ai=!1,Be=!1,Qi=!1,ce=je.getUniforms(),an=_t.uniforms;if(wt.useProgram(je.program)&&(Ai=!0,Be=!0,Qi=!0),F.id!==M&&(M=F.id,Be=!0),Ai||y!==C){wt.buffers.depth.getReversed()?(at.copy(C.projectionMatrix),hu(at),uu(at),ce.setValue(D,"projectionMatrix",at)):ce.setValue(D,"projectionMatrix",C.projectionMatrix),ce.setValue(D,"viewMatrix",C.matrixWorldInverse);let Tn=ce.map.cameraPosition;Tn!==void 0&&Tn.setValue(D,Ut.setFromMatrixPosition(C.matrixWorld)),Gt.logarithmicDepthBuffer&&ce.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ce.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,Be=!0,Qi=!0)}if(L.isSkinnedMesh){ce.setOptional(D,L,"bindMatrix"),ce.setOptional(D,L,"bindMatrixInverse");let Ge=L.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),ce.setValue(D,"boneTexture",Ge.boneTexture,b))}L.isBatchedMesh&&(ce.setOptional(D,L,"batchingTexture"),ce.setValue(D,"batchingTexture",L._matricesTexture,b),ce.setOptional(D,L,"batchingIdTexture"),ce.setValue(D,"batchingIdTexture",L._indirectTexture,b),ce.setOptional(D,L,"batchingColorTexture"),L._colorsTexture!==null&&ce.setValue(D,"batchingColorTexture",L._colorsTexture,b));let $i=B.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&Rt.update(L,B,je),(Be||_t.receiveShadow!==L.receiveShadow)&&(_t.receiveShadow=L.receiveShadow,ce.setValue(D,"receiveShadow",L.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(an.envMap.value=xt,an.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&U.environment!==null&&(an.envMapIntensity.value=U.environmentIntensity),Be&&(ce.setValue(D,"toneMappingExposure",x.toneMappingExposure),_t.needsLights&&Mh(an,Qi),$&&F.fog===!0&&ot.refreshFogUniforms(an,$),ot.refreshMaterialUniforms(an,F,q,tt,d.state.transmissionRenderTarget[C.id]),Bi.upload(D,vl(_t),an,b)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Bi.upload(D,vl(_t),an,b),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ce.setValue(D,"center",L.center),ce.setValue(D,"modelViewMatrix",L.modelViewMatrix),ce.setValue(D,"normalMatrix",L.normalMatrix),ce.setValue(D,"modelMatrix",L.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let Ge=F.uniformsGroups;for(let Tn=0,Vn=Ge.length;Tn<Vn;Tn++){let Cl=Ge[Tn];P.update(Cl,je),P.bind(Cl,je)}}return je}function Mh(C,U){C.ambientLightColor.needsUpdate=U,C.lightProbe.needsUpdate=U,C.directionalLights.needsUpdate=U,C.directionalLightShadows.needsUpdate=U,C.pointLights.needsUpdate=U,C.pointLightShadows.needsUpdate=U,C.spotLights.needsUpdate=U,C.spotLightShadows.needsUpdate=U,C.rectAreaLights.needsUpdate=U,C.hemisphereLights.needsUpdate=U}function bh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,U,B){St.get(C.texture).__webglTexture=U,St.get(C.depthTexture).__webglTexture=B;let F=St.get(C);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=B===void 0,F.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,U){let B=St.get(C);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(C,U=0,B=0){w=C,S=U,E=B;let F=!0,L=null,$=!1,ct=!1;if(C){let xt=St.get(C);if(xt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(D.FRAMEBUFFER,null),F=!1;else if(xt.__webglFramebuffer===void 0)b.setupRenderTarget(C);else if(xt.__hasExternalTextures)b.rebindTextures(C,St.get(C.texture).__webglTexture,St.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let vt=C.depthTexture;if(xt.__boundDepthTexture!==vt){if(vt!==null&&St.has(vt)&&(C.width!==vt.image.width||C.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(C)}}let Pt=C.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ct=!0);let Dt=St.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?L=Dt[U][B]:L=Dt[U],$=!0):C.samples>0&&b.useMultisampledRTT(C)===!1?L=St.get(C).__webglMultisampledFramebuffer:Array.isArray(Dt)?L=Dt[B]:L=Dt,T.copy(C.viewport),z.copy(C.scissor),O=C.scissorTest}else T.copy(Mt).multiplyScalar(q).floor(),z.copy(Ot).multiplyScalar(q).floor(),O=ie;if(wt.bindFramebuffer(D.FRAMEBUFFER,L)&&F&&wt.drawBuffers(C,L),wt.viewport(T),wt.scissor(z),wt.setScissorTest(O),$){let xt=St.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,xt.__webglTexture,B)}else if(ct){let xt=St.get(C.texture),Pt=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.__webglTexture,B||0,Pt)}M=-1},this.readRenderTargetPixels=function(C,U,B,F,L,$,ct){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=St.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ct!==void 0&&(At=At[ct]),At){wt.bindFramebuffer(D.FRAMEBUFFER,At);try{let xt=C.texture,Pt=xt.format,Dt=xt.type;if(!Gt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=C.width-F&&B>=0&&B<=C.height-L&&D.readPixels(U,B,F,L,Bt.convert(Pt),Bt.convert(Dt),$)}finally{let xt=w!==null?St.get(w).__webglFramebuffer:null;wt.bindFramebuffer(D.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(C,U,B,F,L,$,ct){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=St.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ct!==void 0&&(At=At[ct]),At){let xt=C.texture,Pt=xt.format,Dt=xt.type;if(!Gt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=C.width-F&&B>=0&&B<=C.height-L){wt.bindFramebuffer(D.FRAMEBUFFER,At);let vt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,vt),D.bufferData(D.PIXEL_PACK_BUFFER,$.byteLength,D.STREAM_READ),D.readPixels(U,B,F,L,Bt.convert(Pt),Bt.convert(Dt),0);let jt=w!==null?St.get(w).__webglFramebuffer:null;wt.bindFramebuffer(D.FRAMEBUFFER,jt);let re=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await cu(D,re,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,vt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,$),D.deleteBuffer(vt),D.deleteSync(re),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,U=null,B=0){C.isTexture!==!0&&(ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,C=arguments[1]);let F=Math.pow(2,-B),L=Math.floor(C.image.width*F),$=Math.floor(C.image.height*F),ct=U!==null?U.x:0,At=U!==null?U.y:0;b.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,ct,At,L,$),wt.unbindTexture()},this.copyTextureToTexture=function(C,U,B=null,F=null,L=0){C.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,C=arguments[1],U=arguments[2],L=arguments[3]||0,B=null);let $,ct,At,xt,Pt,Dt,vt,jt,re,le=C.isCompressedTexture?C.mipmaps[L]:C.image;B!==null?($=B.max.x-B.min.x,ct=B.max.y-B.min.y,At=B.isBox3?B.max.z-B.min.z:1,xt=B.min.x,Pt=B.min.y,Dt=B.isBox3?B.min.z:0):($=le.width,ct=le.height,At=le.depth||1,xt=0,Pt=0,Dt=0),F!==null?(vt=F.x,jt=F.y,re=F.z):(vt=0,jt=0,re=0);let Re=Bt.convert(U.format),Kt=Bt.convert(U.type),_t;U.isData3DTexture?(b.setTexture3D(U,0),_t=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(b.setTexture2DArray(U,0),_t=D.TEXTURE_2D_ARRAY):(b.setTexture2D(U,0),_t=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let pn=D.getParameter(D.UNPACK_ROW_LENGTH),Qt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),je=D.getParameter(D.UNPACK_SKIP_PIXELS),Ai=D.getParameter(D.UNPACK_SKIP_ROWS),Be=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,le.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,le.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Dt);let Qi=C.isDataArrayTexture||C.isData3DTexture,ce=U.isDataArrayTexture||U.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let an=St.get(C),$i=St.get(U),Ge=St.get(an.__renderTarget),Tn=St.get($i.__renderTarget);wt.bindFramebuffer(D.READ_FRAMEBUFFER,Ge.__webglFramebuffer),wt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let Vn=0;Vn<At;Vn++)Qi&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(C).__webglTexture,L,Dt+Vn),C.isDepthTexture?(ce&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(U).__webglTexture,L,re+Vn),D.blitFramebuffer(xt,Pt,$,ct,vt,jt,$,ct,D.DEPTH_BUFFER_BIT,D.NEAREST)):ce?D.copyTexSubImage3D(_t,L,vt,jt,re+Vn,xt,Pt,$,ct):D.copyTexSubImage2D(_t,L,vt,jt,re+Vn,xt,Pt,$,ct);wt.bindFramebuffer(D.READ_FRAMEBUFFER,null),wt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ce?C.isDataTexture||C.isData3DTexture?D.texSubImage3D(_t,L,vt,jt,re,$,ct,At,Re,Kt,le.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(_t,L,vt,jt,re,$,ct,At,Re,le.data):D.texSubImage3D(_t,L,vt,jt,re,$,ct,At,Re,Kt,le):C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,L,vt,jt,$,ct,Re,Kt,le.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,L,vt,jt,le.width,le.height,Re,le.data):D.texSubImage2D(D.TEXTURE_2D,L,vt,jt,$,ct,Re,Kt,le);D.pixelStorei(D.UNPACK_ROW_LENGTH,pn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,je),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ai),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Be),L===0&&U.generateMipmaps&&D.generateMipmap(_t),wt.unbindTexture()},this.copyTextureToTexture3D=function(C,U,B=null,F=null,L=0){return C.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,F=arguments[1]||null,C=arguments[2],U=arguments[3],L=arguments[4]||0),ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,U,B,F,L)},this.initRenderTarget=function(C){St.get(C).__webglFramebuffer===void 0&&b.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?b.setTextureCube(C,0):C.isData3DTexture?b.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?b.setTexture2DArray(C,0):b.setTexture2D(C,0),wt.unbindTexture()},this.resetState=function(){S=0,E=0,w=null,wt.reset(),se.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};var Ar=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xr=class extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Eo=class extends De{constructor(t=null,e=1,n=1,i,r,a,o,l,c=ke,h=ke,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vr=class extends Ae{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Pi=new ae,Cc=new ae,Zs=[],_c=new Sn,rm=new ae,rs=new Jt,as=new qn,yr=class extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,rm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pi),_c.copy(t.boundingBox).applyMatrix4(Pi),this.boundingBox.union(_c)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pi),as.copy(t.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(as)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),as.copy(this.boundingSphere),as.applyMatrix4(n),t.ray.intersectsSphere(as)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Pi),Cc.multiplyMatrices(n,Pi),rs.matrixWorld=Cc,rs.raycast(t,Zs);for(let a=0,o=Zs.length;a<o;a++){let l=Zs[a];l.instanceId=r,l.object=this,e.push(l)}Zs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Eo(new Float32Array(i*this.count),i,this.count,Ko,cn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Gn=class extends Hn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ic=new ae,wo=new lr,Js=new qn,js=new R,ui=class extends _e{constructor(t=new pe,e=new Gn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(i),Js.radius+=r,t.ray.intersectsSphere(Js)===!1)return;Ic.copy(i).invert(),wo.copy(t.ray).applyMatrix4(Ic);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=f,A=p;m<A;m++){let g=c.getX(m);js.fromBufferAttribute(u,g),Mc(js,g,l,i,t,e,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=f,A=p;m<A;m++)js.fromBufferAttribute(u,m),Mc(js,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Mc(s,t,e,n,i,r,a){let o=wo.distanceSqToPoint(s);if(o<e){let l=new R;wo.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var dn=class extends De{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Cr=class s extends pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new R,h=new bt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fs=class s extends pe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],p=[],m=0,A=[],g=n/2,d=0;_(),a===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(p,2));function _(){let x=new R,V=new R,S=0,E=(e-t)/n;for(let w=0;w<=r;w++){let M=[],y=w/r,T=y*(e-t)+t;for(let z=0;z<=i;z++){let O=z/i,H=O*l+o,J=Math.sin(H),G=Math.cos(H);V.x=T*J,V.y=-y*n+g,V.z=T*G,u.push(V.x,V.y,V.z),x.set(J,E,G).normalize(),f.push(x.x,x.y,x.z),p.push(O,1-y),M.push(m++)}A.push(M)}for(let w=0;w<i;w++)for(let M=0;M<r;M++){let y=A[M][w],T=A[M+1][w],z=A[M+1][w+1],O=A[M][w+1];(t>0||M!==0)&&(h.push(y,T,O),S+=3),(e>0||M!==r-1)&&(h.push(T,z,O),S+=3)}c.addGroup(d,S,0),d+=S}function I(x){let V=m,S=new bt,E=new R,w=0,M=x===!0?t:e,y=x===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,g*y,0),f.push(0,y,0),p.push(.5,.5),m++;let T=m;for(let z=0;z<=i;z++){let H=z/i*l+o,J=Math.cos(H),G=Math.sin(H);E.x=M*G,E.y=g*y,E.z=M*J,u.push(E.x,E.y,E.z),f.push(0,y,0),S.x=J*.5+.5,S.y=G*.5*y+.5,p.push(S.x,S.y),m++}for(let z=0;z<i;z++){let O=V+z,H=T+z;x===!0?h.push(H,H+1,O):h.push(H+1,H,O),w+=3}c.addGroup(d,w,x===!0?1:2),d+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_r=class s extends fs{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},To=class s extends pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let I=new R,x=new R,V=new R;for(let S=0;S<e.length;S+=3)p(e[S+0],I),p(e[S+1],x),p(e[S+2],V),l(I,x,V,_)}function l(_,I,x,V){let S=V+1,E=[];for(let w=0;w<=S;w++){E[w]=[];let M=_.clone().lerp(x,w/S),y=I.clone().lerp(x,w/S),T=S-w;for(let z=0;z<=T;z++)z===0&&w===S?E[w][z]=M:E[w][z]=M.clone().lerp(y,z/T)}for(let w=0;w<S;w++)for(let M=0;M<2*(S-w)-1;M++){let y=Math.floor(M/2);M%2===0?(f(E[w][y+1]),f(E[w+1][y]),f(E[w][y])):(f(E[w][y+1]),f(E[w+1][y+1]),f(E[w+1][y]))}}function c(_){let I=new R;for(let x=0;x<r.length;x+=3)I.x=r[x+0],I.y=r[x+1],I.z=r[x+2],I.normalize().multiplyScalar(_),r[x+0]=I.x,r[x+1]=I.y,r[x+2]=I.z}function h(){let _=new R;for(let I=0;I<r.length;I+=3){_.x=r[I+0],_.y=r[I+1],_.z=r[I+2];let x=g(_)/2/Math.PI+.5,V=d(_)/Math.PI+.5;a.push(x,1-V)}m(),u()}function u(){for(let _=0;_<a.length;_+=6){let I=a[_+0],x=a[_+2],V=a[_+4],S=Math.max(I,x,V),E=Math.min(I,x,V);S>.9&&E<.1&&(I<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),V<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function p(_,I){let x=_*3;I.x=t[x+0],I.y=t[x+1],I.z=t[x+2]}function m(){let _=new R,I=new R,x=new R,V=new R,S=new bt,E=new bt,w=new bt;for(let M=0,y=0;M<r.length;M+=9,y+=6){_.set(r[M+0],r[M+1],r[M+2]),I.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),S.set(a[y+0],a[y+1]),E.set(a[y+2],a[y+3]),w.set(a[y+4],a[y+5]),V.copy(_).add(I).add(x).divideScalar(3);let T=g(V);A(S,y+0,_,T),A(E,y+2,I,T),A(w,y+4,x,T)}}function A(_,I,x,V){V<0&&_.x===1&&(a[I]=_.x-1),x.x===0&&x.z===0&&(a[I]=V/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function d(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Ir=class s extends To{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Mr=class s extends pe{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/i,p=new R,m=new bt;for(let A=0;A<=i;A++){for(let g=0;g<=n;g++){let d=r+g/n*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let A=0;A<i;A++){let g=A*(n+1);for(let d=0;d<n;d++){let _=d+g,I=_,x=_+n+1,V=_+n+2,S=_+1;o.push(I,x,S),o.push(x,V,S)}}this.setIndex(o),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ps=class s extends pe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,f=new R,p=[],m=[],A=[],g=[];for(let d=0;d<=n;d++){let _=[],I=d/n,x=0;d===0&&a===0?x=.5/e:d===n&&l===Math.PI&&(x=-.5/e);for(let V=0;V<=e;V++){let S=V/e;u.x=-t*Math.cos(i+S*r)*Math.sin(a+I*o),u.y=t*Math.cos(a+I*o),u.z=t*Math.sin(i+S*r)*Math.sin(a+I*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),A.push(f.x,f.y,f.z),g.push(S+x,1-I),_.push(c++)}h.push(_)}for(let d=0;d<n;d++)for(let _=0;_<e;_++){let I=h[d][_+1],x=h[d][_],V=h[d+1][_],S=h[d+1][_+1];(d!==0||a>0)&&p.push(I,x,S),(d!==n-1||l<Math.PI)&&p.push(x,V,S)}this.setIndex(p),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(A,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var di=class s extends pe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new R,u=new R,f=new R;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){let A=m/i*r,g=p/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(A),u.y=(t+e*Math.cos(g))*Math.sin(A),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(A),h.y=t*Math.sin(A),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){let A=(i+1)*p+m-1,g=(i+1)*(p-1)+m-1,d=(i+1)*(p-1)+m,_=(i+1)*p+m;a.push(A,g,_),a.push(g,d,_)}this.setIndex(a),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var br=class extends xe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},En=class extends Hn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kc,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ks(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function am(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Wi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vo=class extends Wi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bl,endingEnd:bl}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Sl:r=t,o=2*e-n;break;case El:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sl:a=t,l=2*n-e;break;case El:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-e)/(i-e),A=m*m,g=A*m,d=-f*g+2*f*A-f*m,_=(1+f)*g+(-1.5-2*f)*A+(-.5+f)*m+1,I=(-1-p)*g+(1.5+p)*A+.5*m,x=p*g-p*A;for(let V=0;V!==o;++V)r[V]=d*a[h+V]+_*a[c+V]+I*a[l+V]+x*a[u+V];return r}},Ro=class extends Wi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Po=class extends Wi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},en=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ks(e,this.TimeBufferType),this.values=Ks(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ks(t.times,Array),values:Ks(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Vo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ir:e=this.InterpolantFactoryMethodDiscrete;break;case lo:e=this.InterpolantFactoryMethodLinear;break;case Yr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return lo;case this.InterpolantFactoryMethodSmooth:return Yr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&am(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Yr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let m=0;m!==n;++m){let A=e[u+m];if(A!==e[f+m]||A!==e[p+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=lo;var fi=class extends en{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=ir;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Uo=class extends en{};Uo.prototype.ValueTypeName="color";var Lo=class extends en{};Lo.prototype.ValueTypeName="number";var Do=class extends Wi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)kn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Sr=class extends en{InterpolantFactoryMethodLinear(t){return new Do(this.times,this.values,this.getValueSize(),t)}};Sr.prototype.ValueTypeName="quaternion";Sr.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends en{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=ir;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends en{};No.prototype.ValueTypeName="vector";var Bo=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},om=new Bo,Fo=class{constructor(t){this.manager=t!==void 0?t:om,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Fo.DEFAULT_MATERIAL_NAME="__DEFAULT";var gs=class extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Er=class extends gs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},_a=new ae,bc=new R,Sc=new R,wr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(bc),Sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sc),e.updateMatrixWorld(),_a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_a)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ec=new ae,os=new R,Ia=new R,Oo=class extends wr{constructor(){super(new we(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),os.setFromMatrixPosition(t.matrixWorld),n.position.copy(os),Ia.copy(n.position),Ia.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ia),n.updateMatrixWorld(),i.makeTranslation(-os.x,-os.y,-os.z),Ec.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec)}},ms=class extends gs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Oo}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},zo=class extends wr{constructor(){super(new Gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},As=class extends gs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new zo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Tr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=wc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function wc(){return performance.now()}var nl="\\[\\]\\.:\\/",lm=new RegExp("["+nl+"]","g"),il="[^"+nl+"]",cm="[^"+nl.replace("\\.","")+"]",hm=/((?:WC+[\/:])*)/.source.replace("WC",il),um=/(WCOD+)?/.source.replace("WCOD",cm),dm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",il),fm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",il),pm=new RegExp("^"+hm+um+dm+fm+"$"),gm=["material","materials","bones","map"],ko=class{constructor(t,e,n){let i=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lm,"")}static parseTrackName(t){let e=pm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);gm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=ko;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nm=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qo);var It={hx:12,hy:12},ys=.62,Zi=Math.PI*2,Ie=(s,t,e)=>s<t?t:s>e?e:s,Qc=(s,t)=>{let e=(t-s)%Zi;return e>Math.PI&&(e-=Zi),e<-Math.PI&&(e+=Zi),e};function mm(s){let t=s>>>0||1;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var _s=[{id:"strawberry",role:"melee",hp:120,range:3.1,arc:1.25,cd:.62,dmg:15,color:16730722},{id:"lime",role:"magic",hp:85,range:9.5,cd:1,dmg:12,splash:1.7,speed:11,color:8054842},{id:"blueberry",role:"ranged",hp:85,range:10.5,cd:.4,dmg:6,speed:17,color:4885247}],$c=[[1.7,0],[-.9,1.5],[-.9,-1.5]],sn={gummy:{hp:32,speed:2.3,r:.7,touch:7,reward:1,color:16742986},sour:{hp:20,speed:3.9,r:.55,touch:5,reward:1,color:10157882},spitter:{hp:26,speed:1.9,r:.65,touch:4,reward:2,color:11563263,shoot:!0,keep:6.5,shotCd:2.5,projDmg:8,projSpeed:6.5},tank:{hp:110,speed:1.4,r:1.1,touch:12,reward:4,color:16765498},bomber:{hp:22,speed:3,r:.6,touch:0,reward:2,color:16751146,bomb:!0}},th=[[[.5,"gummy",3],[3,"sour",3],[7,"gummy",3],[10,"sour",2]],[[.5,"gummy",3],[2.5,"spitter",2],[5,"sour",3],[8,"tank",1],[10,"bomber",2],[13,"spitter",2],[15,"gummy",3]]],Dr=6,Am=[[.5,"gummy",4],[2.5,"sour",4],[5,"spitter",2],[7.5,"bomber",2],[10,"sour",3]],xm=s=>({hp:1+.25*s,boss:1+.35*s,spd:1+.04*s}),Cs={hp:1100,r:1.9,speed:2,touch:10},rl={warn:[1.5,1.3,1.1],r:[1.9,2,2.2],dmg:14},Ur={warn:[1.35,1.2,1.05],speed:[14,16,18],dmg:22,stun:[1.9,1.7,1.4]},vm=[["rain","charge","summon"],["charge","rain","summon","charge"],["rain","charge","rain","summon","charge"]];var wn={damage:{max:5,costs:[30,60,100,160,240],per:.12},health:{max:5,costs:[30,60,100,160,240],per:.15},charge:{max:5,costs:[25,50,90,140,210],per:.25}};function Is(s){let t=s&&typeof s=="object"?s:{},e=(i,r,a,o=0)=>Number.isFinite(Number(i))?Ie(Math.floor(Number(i)),r,a):o,n=t.upgrades&&typeof t.upgrades=="object"?t.upgrades:{};return{candies:e(t.candies,0,999999),upgrades:{damage:e(n.damage,0,wn.damage.max),health:e(n.health,0,wn.health.max),charge:e(n.charge,0,wn.charge.max)},bestStars:e(t.bestStars,0,3),stage:e(t.stage,0,5),runs:e(t.runs,0,999999),wins:e(t.wins,0,999999),muted:!!t.muted,lang:t.lang==="en"?"en":t.lang==="ar"?"ar":""}}function al(s,t){let e=wn[t],n=s.upgrades[t];return n>=e.max?null:e.costs[n]}function eh(s,t){let e=al(s,t);if(e===null||s.candies<e)return null;let n=Is(s);return n.candies-=e,n.upgrades[t]+=1,n}function nh(s,t){let e=Is(s);return e.candies=Math.min(999999,e.candies+t.candies+(t.bonus||0)),e.runs+=1,t.win&&(e.wins+=1,e.bestStars=Math.max(e.bestStars,t.stars),t.stage===e.stage&&e.stage<Dr-1&&(e.stage+=1)),e}var Lr=class{constructor(t={}){this.rng=mm(t.seed||1);let e=Is({upgrades:t.upgrades}).upgrades;this.up=e,this.dmgMul=1+wn.damage.per*e.damage,this.hpMul=1+wn.health.per*e.health,this.chargeMul=1+wn.charge.per*e.charge,this.easy=!!t.easy,this.stage=Math.max(0,Math.min(Dr-1,t.stage|0)),this.mul=xm(this.stage),this.waves=this.stage>=2?[Am,...th]:th,this.t=0,this.state="wave",this.wave=0,this.waveT=0,this.spawnIdx=0,this.gapT=0,this.squad={x:0,y:7,face:-Math.PI/2,moving:!1},this.bears=_s.map((n,i)=>({id:n.id,idx:i,def:n,x:$c[i][1]*0+this.squad.x,y:this.squad.y+1,hp:Math.round(n.hp*this.hpMul),maxHp:Math.round(n.hp*this.hpMul),alive:!0,inv:0,cd:.3+i*.1,aim:-Math.PI/2,flash:0,swing:0,hasTarget:!1})),this.enemies=[],this.projectiles=[],this.hazards=[],this.pickups=[],this.jaws=[],this.boss=null,this.charge=0,this.candies=0,this.mintT=0,this.events=[],this.over=!1,this.result=null,this.nextId=1,this.hazardHits=[],this.kills=0,this.ev({type:"wave",n:1})}ev(t){this.events.push(t)}drain(){let t=this.events;return this.events=[],t}get aliveBears(){return this.bears.filter(t=>t.alive)}get fallenBears(){return this.bears.filter(t=>!t.alive)}get stars(){return this.bears.filter(t=>t.alive).length}get bossFight(){return!!this.boss&&this.boss.state!=="dead"}targets(){let t=this.enemies.filter(e=>e.hp>0);return this.boss&&this.boss.hp>0&&this.boss.state!=="intro"&&t.push(this.boss),t}nearest(t,e,n){let i=null,r=1e9;for(let a of n){let o=Math.hypot(a.x-t,a.y-e)-(a.r||0);o<r&&(r=o,i=a)}return i?{e:i,d:r}:null}step(t,e={}){if(this.over){this.t+=t;return}t=Math.min(t,.05),this.t+=t,this._squad(t,e),this._waves(t),this._enemies(t),this._boss(t),this._bears(t),this._projectiles(t),this._hazards(t),this._jaws(t),e.super&&this.useSuper(),this._pickups(t),this._mintTimer(t),this._ending()}_squad(t,e){let n=this.squad,i=Number(e.x)||0,r=Number(e.y)||0,a=Math.hypot(i,r);if(n.moving=a>.05,n.moving){let f=Math.min(1,a)/a;n.x=Ie(n.x+i*f*6.2*t,-It.hx+1.9,It.hx-1.9),n.y=Ie(n.y+r*f*6.2*t,-It.hy+1.9,It.hy-1.9)}let o=this.nearest(n.x,n.y,this.targets()),l=n.face;o?l=Math.atan2(o.e.y-n.y,o.e.x-n.x):n.moving&&(l=Math.atan2(r,i));let c=Qc(n.face,l);n.face+=Ie(c,-8*t,8*t);let h=Math.cos(n.face),u=Math.sin(n.face);for(let f of this.bears){if(!f.alive)continue;let[p,m]=$c[f.idx],A=n.x+p*h-m*u,g=n.y+p*u+m*h,d=Math.min(1,t*9);f.x=Ie(f.x+(A-f.x)*d,-It.hx+.7,It.hx-.7),f.y=Ie(f.y+(g-f.y)*d,-It.hy+.7,It.hy-.7)}}_waves(t){if(this.state==="wave"){this.waveT+=t;let e=this.waves[this.wave];for(;this.spawnIdx<e.length&&e[this.spawnIdx][0]<=this.waveT;){let[,n,i]=e[this.spawnIdx++];for(let r=0;r<i;r++)this.spawn(n)}this.spawnIdx>=e.length&&this.enemies.every(n=>n.hp<=0)&&(this.state="gap",this.gapT=2.4,this.ev({type:"waveClear",n:this.wave+1}))}else this.state==="gap"&&(this.gapT-=t,this.gapT<=0&&(this.wave+1<this.waves.length?(this.wave++,this.state="wave",this.waveT=0,this.spawnIdx=0,this.ev({type:"wave",n:this.wave+1})):(this.state="boss",this._spawnBoss())))}spawn(t,e){let n=sn[t],i=0,r=0;if(e)i=e.x,r=e.y;else for(let o=0;o<8;o++){let l=Math.floor(this.rng()*4),c=(this.rng()*2-1)*(It.hx-1);if(i=l===0?-It.hx+.8:l===1?It.hx-.8:c,r=l===2?-It.hy+.8:l===3?It.hy-.8:c,Math.hypot(i-this.squad.x,r-this.squad.y)>7)break}let a={id:this.nextId++,kind:t,x:i,y:r,r:n.r,hp:n.hp*this.mul.hp,maxHp:n.hp*this.mul.hp,speed:n.speed*this.mul.spd*(this.easy?.85:1),flash:0,touchCd:.6,shotCd:1+this.rng()*1.5,wind:0,fuse:0,age:0,aim:0};return this.enemies.push(a),this.ev({type:"spawn",kind:t,x:i,y:r}),a}_spawnBoss(){this.boss={x:0,y:-5,r:Cs.r,hp:Cs.hp*this.mul.boss*(this.easy?.8:1),maxHp:Cs.hp*this.mul.boss*(this.easy?.8:1),state:"intro",t:0,phase:1,atk:0,dir:Math.PI/2,hazard:null,hit:new Set,flash:0,touchCd:0,volley:0,face:Math.PI/2,kind:"boss"},this.ev({type:"bossIntro"})}_enemies(t){let e=this.enemies.filter(i=>i.hp>0),n=this.aliveBears;for(let i of e){i.age+=t,i.flash=Math.max(0,i.flash-t),i.touchCd-=t;let r=sn[i.kind],a=this.nearest(i.x,i.y,n.map(c=>({x:c.x,y:c.y,r:0,b:c}))),o=0,l=0;if(a){let c=a.e.x-i.x,h=a.e.y-i.y,u=Math.hypot(c,h)||1;i.aim=Math.atan2(h,c),r.bomb?i.fuse>0||(u<3.1?(i.fuse=1,this.hazards.push({kind:"blast",from:"blast",x:i.x,y:i.y,r:2.4,warn:1,t:0,dmg:18,owner:i,done:!1}),this.ev({type:"fuse",x:i.x,y:i.y})):(o=c/u,l=h/u)):r.shoot?i.wind>0?(i.wind-=t,i.wind<=0&&this._enemyShot(i,a.e,r)):(u>r.keep+1?(o=c/u,l=h/u):u<r.keep-1.2&&(o=-c/u,l=-h/u),i.shotCd-=t,i.shotCd<=0&&u<12&&(i.wind=.55,i.shotCd=r.shotCd,this.ev({type:"wind",x:i.x,y:i.y,id:i.id}))):(o=c/u,l=h/u),r.touch&&u<i.r+ys+.15&&i.touchCd<=0&&(i.touchCd=1.1,this.hurtBear(a.e.b,r.touch,{kind:"touch"}))}i.x+=o*i.speed*t,i.y+=l*i.speed*t;for(let c of e){if(c===i)continue;let h=i.x-c.x,u=i.y-c.y,f=Math.hypot(h,u),p=i.r+c.r;if(f<p&&f>1e-4){let m=(p-f)*.5*Math.min(1,t*10);i.x+=h/f*m,i.y+=u/f*m}}i.x=Ie(i.x,-It.hx+.5,It.hx-.5),i.y=Ie(i.y,-It.hy+.5,It.hy-.5)}this.enemies=this.enemies.filter(i=>i.hp>0||i.dying)}_enemyShot(t,e,n){let i=Math.atan2(e.y-t.y,e.x-t.x);this.projectiles.push({from:"enemy",kind:"spit",x:t.x+Math.cos(i)*.8,y:t.y+Math.sin(i)*.8,vx:Math.cos(i)*n.projSpeed,vy:Math.sin(i)*n.projSpeed,dmg:n.projDmg,splash:0,life:3,r:.28}),this.ev({type:"spit",x:t.x,y:t.y})}_boss(t){let e=this.boss;if(!e||e.state==="dead")return;e.t+=t,e.flash=Math.max(0,e.flash-t),e.touchCd-=t;let n=this.aliveBears,i=this.nearest(e.x,e.y,n);e.phase=e.hp/e.maxHp>.6?1:e.hp/e.maxHp>.3?2:3,e.phase!==(e.lastPhase||1)&&(e.lastPhase=e.phase,this.ev({type:"phase",n:e.phase}));let r=e.phase-1,a=l=>{if(!i)return;let c=i.e.x-e.x,h=i.e.y-e.y,u=Math.hypot(c,h)||1;u>e.r+1.4&&(e.x+=c/u*l*t,e.y+=h/u*l*t),e.face=Math.atan2(h,c)},o=()=>{if(!(e.touchCd>0)){for(let l of n)if(Math.hypot(l.x-e.x,l.y-e.y)<e.r+ys+.1){e.touchCd=1.2,this.hurtBear(l,Cs.touch,{kind:"touch"});break}}};switch(e.state){case"intro":e.t>=2.6&&(e.state="idle",e.t=0,e.idleDur=1.6,this.ev({type:"bossLand",x:e.x,y:e.y}));break;case"idle":if(a(Cs.speed*(1+r*.2)),o(),e.t>=e.idleDur){let l=vm[r],c=l[e.atk++%l.length];this._startAttack(e,c,i)}break;case"rain":{let l=[.55,1.35];e.volley<l.length&&e.t>=l[e.volley]&&(this._rainVolley(e,e.volley),e.volley++),e.t>=1.9&&this._toIdle(e);break}case"summon":!e.summoned&&e.t>=.6&&(e.summoned=!0,this._summon(e)),e.t>=1.4&&this._toIdle(e);break;case"windCharge":e.t>=e.hazard.warn&&(e.state="charge",e.t=0,e.hit=new Set,this.ev({type:"chargeGo",x:e.x,y:e.y}));break;case"charge":{let l=Ur.speed[r];e.x+=Math.cos(e.dir)*l*t,e.y+=Math.sin(e.dir)*l*t;for(let c of n)e.hit.has(c.id)||Math.hypot(c.x-e.x,c.y-e.y)<e.r+ys&&(e.hit.add(c.id),this.hurtBear(c,Ur.dmg*(1+r*.1),{kind:"charge",age:e.hazard.t,warn:e.hazard.warn}));(Math.abs(e.x)>It.hx-e.r-.2||Math.abs(e.y)>It.hy-e.r-.2)&&(e.x=Ie(e.x,-It.hx+e.r+.2,It.hx-e.r-.2),e.y=Ie(e.y,-It.hy+e.r+.2,It.hy-e.r-.2),e.state="stun",e.t=0,this._dropHazard(e.hazard),e.hazard=null,this.ev({type:"bossSlam",x:e.x,y:e.y}));break}case"stun":e.t>=Ur.stun[r]&&this._toIdle(e);break;default:break}e.x=Ie(e.x,-It.hx+e.r,It.hx-e.r),e.y=Ie(e.y,-It.hy+e.r,It.hy-e.r)}_toIdle(t){t.state="idle",t.t=0,t.idleDur=[2.2,1.6,1.1][t.phase-1],t.summoned=!1,t.volley=0}_startAttack(t,e,n){if(t.t=0,t.state=e==="charge"?"windCharge":e,t.volley=0,t.summoned=!1,e==="charge"){let i=t.phase-1,r=n?n.e.x:0,a=n?n.e.y:0;t.dir=Math.atan2(a-t.y,r-t.x),t.face=t.dir;let o=Math.cos(t.dir),l=Math.sin(t.dir),c=0;for(;c<60;){let h=t.x+o*c,u=t.y+l*c;if(Math.abs(h)>It.hx-t.r-.2||Math.abs(u)>It.hy-t.r-.2)break;c+=.25}t.hazard={kind:"path",from:"charge",x:t.x,y:t.y,dx:o,dy:l,len:c,width:t.r*2,warn:Ur.warn[i],t:0,owner:t},this.hazards.push(t.hazard),this.ev({type:"chargeWarn",x:t.x,y:t.y,dir:t.dir})}else this.ev({type:e==="rain"?"rainWarn":"summonWarn",x:t.x,y:t.y})}_dropHazard(t){let e=this.hazards.indexOf(t);e>=0&&this.hazards.splice(e,1)}_rainVolley(t,e){let n=t.phase-1,i=this.aliveBears,r=2+t.phase,a=[];if(e===0)for(let o of i)a.push({x:o.x,y:o.y});for(let o=0;o<r;o++)a.push({x:(this.rng()*2-1)*(It.hx-2),y:(this.rng()*2-1)*(It.hy-2)});for(let o of a)this.hazards.push({kind:"circle",from:"rain",x:o.x,y:o.y,r:rl.r[n],warn:rl.warn[n],t:0,dmg:rl.dmg*(1+n*.1),done:!1});this.ev({type:"rain",n:a.length})}_summon(t){let e=[3,4,5][t.phase-1],n=this.enemies.filter(i=>i.hp>0).length;for(let i=0;i<e&&n+i<9;i++){let r=i/e*Zi+this.rng(),a=this.spawn(i%2?"sour":"gummy",{x:Ie(t.x+Math.cos(r)*3,-It.hx+1,It.hx-1),y:Ie(t.y+Math.sin(r)*3,-It.hy+1,It.hy-1)});a.touchCd=1}this.ev({type:"summon",x:t.x,y:t.y})}_bears(t){let e=this.targets();for(let n of this.bears){if(n.flash=Math.max(0,n.flash-t),n.inv=Math.max(0,n.inv-t),n.swing=Math.max(0,n.swing-t),n.cd-=t,!n.alive)continue;let i=n.def,r=this.nearest(n.x,n.y,e);if(n.hasTarget=!!(r&&r.d<=i.range),!r){n.aim=this.squad.face;continue}if(n.aim=Math.atan2(r.e.y-n.y,r.e.x-n.x),!(!n.hasTarget||n.cd>0))if(n.cd=i.cd,i.role==="melee"){n.swing=.28;for(let a of e){let o=Math.hypot(a.x-n.x,a.y-n.y);o-(a.r||0)>i.range||Math.abs(Qc(n.aim,Math.atan2(a.y-n.y,a.x-n.x)))>i.arc&&o>(a.r||0)+.8||this.hurtEnemy(a,i.dmg,{bear:n})}this.ev({type:"swing",x:n.x,y:n.y,a:n.aim,idx:n.idx})}else{let a=n.aim+(this.rng()-.5)*(i.role==="ranged"?.07:.02);this.projectiles.push({from:"bear",kind:i.role==="magic"?"magic":"gum",x:n.x+Math.cos(a)*.7,y:n.y+Math.sin(a)*.7,vx:Math.cos(a)*i.speed,vy:Math.sin(a)*i.speed,dmg:i.dmg,splash:i.splash||0,life:i.range/i.speed+.35,r:i.role==="magic"?.4:.25,idx:n.idx}),this.ev({type:"shoot",x:n.x,y:n.y,a,idx:n.idx})}}}hurtEnemy(t,e,n={}){if(t.hp<=0||t.kind==="boss"&&t.state==="intro")return 0;let i=e*this.dmgMul*(t.kind==="boss"&&t.state==="stun"?1.5:1);return i=Math.min(i,t.hp),t.hp-=i,t.flash=.12,n.noCharge||(this.charge=Math.min(100,this.charge+i*.16*this.chargeMul)),this.ev({type:"hit",x:t.x,y:t.y,boss:t.kind==="boss",dmg:i}),t.hp<=1e-6&&(t.hp=0,this._die(t)),i}_die(t){if(t.kind==="boss"){t.state="dead",this.hazards=this.hazards.filter(i=>i.kind==="splat"),this.ev({type:"bossDown",x:t.x,y:t.y});for(let i of this.enemies)i.hp>0&&(i.hp=0,this.kills++,this.ev({type:"crumble",kind:i.kind,x:i.x,y:i.y}));this._drop(t.x,t.y,12,3);return}this.kills++;let e=sn[t.kind];this.ev({type:"crumble",kind:t.kind,x:t.x,y:t.y}),this._drop(t.x,t.y,e.reward,1);let n=this.fallenBears.length>0;!this.pickups.some(i=>i.type==="mint")&&this.rng()<(n?.35:.04)&&this._mint(t.x,t.y)}_drop(t,e,n,i){for(let r=0;r<n;r++){let a=this.rng()*Zi,o=1.5+this.rng()*2.5;this.pickups.push({type:"candy",x:t,y:e,v:i,vx:Math.cos(a)*o,vy:Math.sin(a)*o,t:0,hue:Math.floor(this.rng()*6)})}}_mint(t,e){this.pickups.push({type:"mint",x:t,y:e,v:0,vx:0,vy:0,t:0,life:28}),this.mintT=this.t,this.ev({type:"mintDrop",x:t,y:e})}hurtBear(t,e,n={}){var r,a;if(!t.alive||t.inv>0)return!1;let i=e*(this.easy?.6:1);return t.hp-=i,t.flash=.25,t.inv=.5,(n.kind==="charge"||n.kind==="rain"||n.kind==="blast")&&this.hazardHits.push({kind:n.kind,warn:(r=n.warn)!=null?r:0,age:(a=n.age)!=null?a:0}),this.ev({type:"bearHit",x:t.x,y:t.y,idx:t.idx,dmg:i}),t.hp<=0&&(t.hp=0,t.alive=!1,t.fallT=this.t,this.ev({type:"bearDown",x:t.x,y:t.y,idx:t.idx})),!0}_projectiles(t){let e=this.targets(),n=[];for(let i of this.projectiles){i.x+=i.vx*t,i.y+=i.vy*t,i.life-=t;let r=i.life<=0||Math.abs(i.x)>It.hx+3||Math.abs(i.y)>It.hy+3;if(!r&&i.from==="bear"){for(let a of e)if(!(a.hp<=0)&&Math.hypot(a.x-i.x,a.y-i.y)<(a.r||.6)+i.r){if(i.splash>0)for(let o of e)o.hp>0&&Math.hypot(o.x-i.x,o.y-i.y)-(o.r||0)<=i.splash&&this.hurtEnemy(o,i.dmg,{bear:i.idx});else this.hurtEnemy(a,i.dmg,{bear:i.idx});this.ev({type:"impact",x:i.x,y:i.y,kind:i.kind}),r=!0;break}}else if(!r&&i.from==="enemy"){for(let a of this.bears)if(a.alive&&Math.hypot(a.x-i.x,a.y-i.y)<ys+i.r&&(this.hurtBear(a,i.dmg,{kind:"spit"})||a.inv>0)){this.ev({type:"impact",x:i.x,y:i.y,kind:"spit"}),r=!0;break}}r||n.push(i)}this.projectiles=n}_hazards(t){let e=[];for(let n of this.hazards)if(n.t+=t,!(n.kind==="blast"&&n.owner.hp<=0&&!n.done)){if((n.kind==="circle"||n.kind==="blast")&&!n.done&&n.t>=n.warn){n.done=!0;for(let i of this.bears)i.alive&&Math.hypot(i.x-n.x,i.y-n.y)<=n.r+ys*.4&&this.hurtBear(i,n.dmg,{kind:n.from,age:n.t,warn:n.warn});this.ev({type:n.kind==="blast"?"blast":"splat",x:n.x,y:n.y,r:n.r}),n.kind==="blast"&&n.owner.hp>0&&(n.owner.hp=0,n.owner.dying=!1,this.kills++,this.ev({type:"crumble",kind:n.owner.kind,x:n.owner.x,y:n.owner.y}),this._drop(n.owner.x,n.owner.y,sn.bomber.reward,1))}n.done&&n.t>=n.warn+.5||e.push(n)}this.hazards=e}useSuper(){if(this.over||this.charge<100||!(this.state==="wave"||this.state==="boss"))return!1;let t=this.targets();if(!t.length)return!1;let e=null,n=-1;for(let i of t){let r=i.kind==="boss"?4:1;for(let a of t)a!==i&&Math.hypot(a.x-i.x,a.y-i.y)<3.6&&(r+=a.kind==="boss"?4:1);r>n&&(n=r,e=i)}return this.charge=0,this.jaws.push({x:e.x,y:e.y,t:0,delay:.95,r:4.4,dmg:120,bossDmg:170}),this.ev({type:"super",x:e.x,y:e.y}),!0}_jaws(t){let e=[];for(let n of this.jaws){if(n.t+=t,n.t<n.delay){e.push(n);continue}for(let i of this.targets())Math.hypot(i.x-n.x,i.y-n.y)-(i.r||0)<=n.r&&this.hurtEnemy(i,i.kind==="boss"?n.bossDmg:n.dmg,{noCharge:!0});this.projectiles=this.projectiles.filter(i=>i.from!=="enemy"||Math.hypot(i.x-n.x,i.y-n.y)>n.r),this.ev({type:"jawLand",x:n.x,y:n.y,r:n.r})}this.jaws=e}_pickups(t){let e=this.aliveBears,n=[];for(let i of this.pickups){if(i.t+=t,i.type==="candy"){i.x=Ie(i.x+i.vx*t,-It.hx+.4,It.hx-.4),i.y=Ie(i.y+i.vy*t,-It.hy+.4,It.hy-.4);let r=Math.max(0,1-t*5);if(i.vx*=r,i.vy*=r,i.t>.35){let a=this.nearest(i.x,i.y,e);if(a&&a.d<4.2){let o=a.e.x-i.x,l=a.e.y-i.y,c=Math.hypot(o,l)||1;i.x+=o/c*9*t,i.y+=l/c*9*t}if(a&&a.d<.95){this.candies+=i.v,this.ev({type:"candy",x:i.x,y:i.y,v:i.v});continue}}}else{if(i.life-=t,i.life<=0)continue;let r=this.nearest(i.x,i.y,e);if(r&&r.d<1.1){this._useMint(i);continue}}n.push(i)}this.pickups=n}_useMint(t){let e=this.fallenBears.sort((n,i)=>n.fallT-i.fallT)[0];if(e)e.alive=!0,e.hp=Math.ceil(e.maxHp*.5),e.inv=1.5,e.flash=.4,this.ev({type:"revive",x:e.x,y:e.y,idx:e.idx});else{for(let n of this.aliveBears)n.hp=Math.min(n.maxHp,n.hp+n.maxHp*.25);this.ev({type:"heal",x:t.x,y:t.y})}}_mintTimer(){if(this.fallenBears.length&&this.aliveBears.length&&!this.pickups.some(t=>t.type==="mint")&&this.t-this.mintT>14&&(this.state==="wave"||this.state==="boss")){let t=this.rng()*Zi,e=4+this.rng()*4;this._mint(Ie(this.squad.x+Math.cos(t)*e,-It.hx+1.2,It.hx-1.2),Ie(this.squad.y+Math.sin(t)*e,-It.hy+1.2,It.hy-1.2))}}_ending(){if(!this.over)if(this.boss&&this.boss.state==="dead"){this.over=!0,this.state="won";let t=this.stars;this.result={win:!0,stars:t,candies:this.candies,bonus:20+10*t+6*this.stage,stage:this.stage},this.ev({type:"won",stars:t})}else this.aliveBears.length||(this.over=!0,this.state="lost",this.result={win:!1,stars:0,candies:this.candies,bonus:0,stage:this.stage},this.ev({type:"lost"}))}};function ih(s,t,e={}){let n=s.prototype.play,i=s.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,l]of Object.entries(t))try{let c=atob(l.split(",")[1]),h=new Uint8Array(c.length);for(let f=0;f<c.length;f++)h[f]=c.charCodeAt(f);let u=a.ctx.decodeAudioData(h.buffer,f=>{a._smp[o]=f},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}i&&(s.prototype.unlock=function(...a){let o=i.apply(this,a);return r(this),o}),s.prototype.play=function(a,o){let l=this.ctx;if(l&&l.state==="running"&&!this.muted&&this.on!==!1){r(this);let c=this._smp&&this._smp[a];if(c){let h=l.createBufferSource(),u=l.createGain();h.buffer=c,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||l.destination),h.start(l.currentTime+.005);return}}return n.call(this,a,o)}}function sh(s,{gain:t=.5,file:e="music.mp3"}={}){let n=s.prototype.unlock,i=s.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let l=a.ctx;fetch(o).then(c=>c.ok?c.arrayBuffer():Promise.reject()).then(c=>l.decodeAudioData(c)).then(c=>{if(a.ctx!==l)return;let h=l.createBufferSource(),u=l.createGain();h.buffer=c,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||l.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),i&&i.call(a,null)}).catch(()=>{a._song=null})}s.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},i&&(s.prototype.setTune=function(a){if(!this._song)return i.call(this,a)})}var rh={blast:"data:audio/mpeg;base64,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TbRa0AARH/EILPbPP7pSgemDgbKHyppoOC5iLNFAI5LdLlcsA33d3/7//6EA91IABrCLg/Qvg/A6QhcSbuGRUlWs4TAMEgRIA0VPNK3AVLkqT8RLHxSUEwhJA0MnwqgJlYTQqIavOrBEmiVZRPFDfyxxJoj/+zjEagMISMEgTaRCwSYQpIm2GAg32IWpQWDC/Fj4v+8qa3sAkAJZwAqNA6C1JTRxcDsDIhCQefxVPiwvxbqF//qFmaxT+Kini3/4o3+pTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEhYIK4Ikmx7EiyKsDnSiTCCBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",hit:"data:audio/mpeg;base64,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",splat:"data:audio/mpeg;base64,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BItmcSf7/TyMBGHYf6cEMOVIv8PWAJKkWcA84BxwtwISotxbQtNAJKIBGRDiJJeFhAfoGAAbAxUh90kjEipFfwxSJ2E2B0AXBiFxSoeuTReJoyPkyZL/yCEkUz5sXESPNlI0UfRb/1MX0VkHJZBiuUSDndb/+zjEsYAJVMcYFZEAAlqxpAMw8AGReS0azH//OMUzdMghoooEUNDYuL9dbGRNEWRQMkQVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEogAT+XMzuYmACAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",roar:"data:audio/mpeg;base64,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hBRVu9y4AH//+zjE4YMLDT0SJ4xTQSKUI0hgiUB8UGOy4KCfALQsTehrjh8xMMWRPGkdSufMSdNE0UNBEEQzly1VCzlSl5SVCoIhkUoUSKXVQgpHHnGqmqvXmZmZre/7HEpFZdFeFBSb8Tf+/jeBIKaCgoUcFBVgUVkFf7v8b/wjfxBTe8CgqKCu/wobTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE8oMOFYkQR5htyU6mIsjBielVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE8YIMLLslR4TCga4UooT0mhlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",super:"data:audio/mpeg;base64,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/EL5/x/X/WerHkqtZkIoc62aComf4hPsvXsKNbD583/D4RDwnAd0qEgahIcqMBqrXnGr1TzLEgEwYCFOpStUpSshjMhjGqUspS7y///9S6Go/ob////0erTGZDGM6hQF1KUrIYVMBB2riUNlXKBpQNRKd4NQalTtTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE74AWhXEMNPeAAmwm5zce8ABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEqQPJVSbyPGEAEAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",wave:"data:audio/mpeg;base64,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V4tKsJ+BercPEgirsWHRhb3rl+RiaNGwnXLTgusZ253U+4h1y0Rp/HB6yL3/+zjE8wONBYEOLiSn2ZiwIcnUFbgttxJzWeOnj0v/7ryZ5P8mea+O+r/8peTCEAgUHRAQvKSp4WbMATqgnXLDfiC1sZcOZGS+WQVBgbca1D/Udm7NnwsuJpMxVGjkmq2ok9uuftw9o3ar+ym1HN98vPs2rVLRNBTKzIj6XWsll4t8YmY4dOoAghAUkFGBOBh2dh6K7oZ4fhOvKculbRSDkcs93XGG0bHqghqOdC+TJUT3MyM1BQmCaah14kPaIPGp+O0/8mpdWxudO+2i2dkKOahFQeQhRU7/+zjE7QFMGXMSziBHyXAwIoXDCbmi77bXVVdPt4m/SosDYHuoMAEuGGyuLvvWzlEh/POZp6ebHlD4BhriAsPGsiDhaok5znJDyXFrIINcgqUTKsVOOR2IAoiLEKc4fIQQFabXqhNdRzSH30fP+lUM21k5UjDyXF7XHVzkoeBNR1TDk5EWVaVk6gBAQBJpBQAAACfj/mEpsE0mEbd9XYcRrUSqyMilQRtyYB0ABRbYMBRnI6J4CpGC+hR1AdamMhbFrAkAxy+n6yIdhsWCEHBwrQyh+VRryFL/+zjE8AAOSX8MDuEBAWSuYlnEFLnT4th48j78TRkqI3zrJYk0a5W29gxH1t/N9++/+q0uhlECebA5KyPBg6fQr1ri28f/3v9/9kQtWPtQFlzs5sF3ls6/tbdc6tb++///n33/+r2yM2SumfEdknpHf6W5TG5TQClYaCgEjlEiSTEiSQlBVYKnQaPKBp4lOgqdBoOiIOiU7/lTolOz0GpU6Cp1RFQd/zazteRUHa3CV0OqDsrErrFB3iV2oGpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqr/+zjE64ALhYEZTaCniaCiYsq2UACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE6oAWDXUtOYeACRmDXIuMMACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo="};var ym="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Ne=null,ol=!1;function ah(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function oh(){ah(),ol=!0;try{if(Ne||(Ne=document.createElement("audio"),Ne.src=ym,Ne.loop=!0,Ne.preload="auto",Ne.setAttribute("playsinline",""),Ne.setAttribute("webkit-playsinline",""),Ne.setAttribute("x-webkit-airplay","deny"),Ne.volume=.01,Ne.addEventListener("pause",()=>{ol&&!document.hidden&&setTimeout(()=>ol&&Ne.paused&&Ne.play().catch(()=>{}),300)})),Ne.paused){let s=Ne.play();s&&s.catch&&s.catch(()=>{})}}catch{}}function lh(s,t){ah();try{s.addEventListener("statechange",()=>{s.state==="interrupted"&&!t()&&!document.hidden&&s.resume().catch(()=>{})})}catch{}}var Ze=s=>440*Math.pow(2,(s-69)/12),Nr=class{constructor(){this.ctx=null,this.muted=!1,this.tune=null,this.bed=null}unlock(){if(oh(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;lh(e,()=>!1),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.35,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master);let i=e.createBuffer(1,e.sampleRate*2,e.sampleRate),r=i.getChannelData(0);for(let a=0;a<r.length;a++)r[a]=Math.random()*2-1;this.noiseBuf=i,this.nextBeat=0,this._timer=setInterval(()=>this._schedule(),40),this.bedName&&this.setBed(this.bedName)}if(this.ctx.state!=="running"){try{let t=this.ctx.createBufferSource();t.buffer=this.ctx.createBuffer(1,1,this.ctx.sampleRate),t.connect(this.ctx.destination),t.start(0)}catch{}try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01,t.play().catch(()=>{})}catch{}this.ctx.resume()}}get on(){return!!this.ctx&&this.ctx.state==="running"}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}dispose(){if(clearInterval(this._timer),this.setBed(null),this.ctx)try{this.ctx.close()}catch{}this.ctx=null}tone(t,e,n,i,r,a=this.sfx,o=.005){let l=this.ctx;if(!l)return;let c=l.createOscillator();c.type=t,c.frequency.value=e;let h=l.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+i),c.connect(h).connect(a),c.start(n),c.stop(n+i+.05)}noise(t,e,n,i="lowpass",r=1e3,a=1,o=this.sfx,l){let c=this.ctx;if(!c)return;let h=c.createBufferSource();h.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=i,u.frequency.setValueAtTime(r,t),l&&u.frequency.exponentialRampToValueAtTime(l,t+e),u.Q.value=a;let f=c.createGain();f.gain.setValueAtTime(1e-4,t),f.gain.exponentialRampToValueAtTime(n,t+Math.min(.03,e/3)),f.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(f).connect(o),h.start(t,Math.random()),h.stop(t+e+.05)}slide(t,e,n,i,r,a,o=this.sfx){let l=this.ctx;if(!l)return;let c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,i),c.frequency.exponentialRampToValueAtTime(n,i+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,i),h.gain.exponentialRampToValueAtTime(a,i+.02),h.gain.exponentialRampToValueAtTime(1e-4,i+r),c.connect(h).connect(o),c.start(i),c.stop(i+r+.05)}setBed(t){this.bedName=t;let e=this.ctx;if(!e)return;if(this.bed){let l=this.bed;l.g.gain.setTargetAtTime(1e-4,e.currentTime,.2),setTimeout(()=>{try{l.s.stop(),l.lfo.stop()}catch{}},900),this.bed=null}if(!t)return;let n=e.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;let i=e.createBiquadFilter();i.type=t==="wind"?"bandpass":"lowpass",i.frequency.value=t==="wind"?420:520,i.Q.value=t==="wind"?1.4:.6;let r=e.createGain();r.gain.value=1e-4;let a=e.createOscillator();a.frequency.value=t==="wind"?.12:.17;let o=e.createGain();o.gain.value=t==="wind"?.03:.045,a.connect(o).connect(r.gain),n.connect(i).connect(r).connect(this.sfx),n.start(),a.start(),r.gain.setTargetAtTime(t==="wind"?.06:.07,e.currentTime,.5),this.bed={s:n,g:r,lfo:a,f:i}}setTune(t){this.tune=t,this.nextBeat=0,this.loopStart=null}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||!this.tune||this.muted)return;let e=this.tune,n=60/e.tempo;this.loopStart==null&&(this.loopStart=t.currentTime+.1);let i=t.currentTime+.25;for(;this.loopStart+this.nextBeat*n<i;){let r=this.nextBeat%e.beats,a=this.loopStart+this.nextBeat*n;if(a<t.currentTime-.5){this.loopStart=t.currentTime+.1,this.nextBeat=0;break}for(let[o,l,c]of e.notes)Math.abs(o-r)<1e-6&&this.tone(e.wave||"triangle",Ze(l),a,c*n*1.4,e.vol||.12,this.music,.01);this.nextBeat+=.5}}};var Cm={tempo:76,beats:16,wave:"sine",vol:.11,notes:[[0,72,1],[1,76,1],[2,79,1.5],[4,77,1],[5,74,1],[6,72,1.5],[8,69,1],[9,72,1],[10,76,1.5],[12,74,1],[13,71,1],[14,67,2],[0,48,3],[4,53,3],[8,45,3],[12,43,3]]},_m={tempo:128,beats:16,wave:"triangle",vol:.1,notes:[[0,69,.5],[.5,72,.5],[1,76,1],[2,74,.5],[2.5,72,.5],[3,69,1],[4,67,.5],[4.5,71,.5],[5,74,1],[6,72,.5],[6.5,71,.5],[7,67,1],[8,69,.5],[8.5,72,.5],[9,76,1],[10,79,1],[11,76,1],[12,74,.5],[12.5,72,.5],[13,71,1],[14,72,2],[0,45,1],[2,45,1],[4,43,1],[6,43,1],[8,45,1],[10,45,1],[12,43,1],[14,40,1],[1,52,.5],[3,52,.5],[5,50,.5],[7,50,.5],[9,52,.5],[11,52,.5],[13,50,.5],[15,47,.5]]},Ji=class extends Nr{play(t){let e=this.ctx;if(!e||e.state!=="running"||this.muted)return;let n=e.currentTime;switch(t){case"straw":this.noise(n,.16,.12,"bandpass",1800,1.2,this.sfx,500),this.tone("triangle",Ze(76),n,.1,.07);break;case"lime":this.slide("sine",500,1100,n,.2,.09),this.tone("triangle",Ze(88),n+.12,.2,.06);break;case"blue":this.slide("square",700,260,n,.07,.04);break;case"hit":this.tone("sine",220,n,.06,.08);break;case"impact":this.noise(n,.08,.07,"bandpass",1200,1);break;case"limeBoom":this.noise(n,.2,.1,"lowpass",1400,1,this.sfx,300),this.tone("triangle",Ze(60),n,.2,.08);break;case"crumble":this.noise(n,.22,.14,"highpass",1800,.8,this.sfx,5e3),this.tone("triangle",Ze(84),n+.03,.1,.05);break;case"candy":this.tone("triangle",Ze(88+Math.floor(Math.random()*3)*2),n,.12,.07);break;case"mint":[0,4,7,12,16].forEach((i,r)=>this.tone("sine",Ze(79+i),n+r*.07,.3,.1));break;case"revive":[0,7,12,19].forEach((i,r)=>this.tone("triangle",Ze(67+i),n+r*.09,.4,.11));break;case"bearHit":this.slide("triangle",420,200,n,.2,.12);break;case"bearDown":this.slide("triangle",400,90,n,.7,.12),this.noise(n,.4,.06,"lowpass",500);break;case"warn":this.tone("sine",520,n,.1,.05);break;case"splat":this.noise(n,.3,.14,"lowpass",900,1,this.sfx,200),this.tone("sine",120,n,.2,.1);break;case"blast":this.noise(n,.4,.18,"lowpass",1e3,1,this.sfx,120),this.slide("sawtooth",200,40,n,.4,.1);break;case"spit":this.slide("sine",300,600,n,.12,.06);break;case"super":this.slide("sine",100,800,n,.9,.1);break;case"superBoom":this.noise(n,.9,.3,"lowpass",800,1,this.sfx,60),this.slide("sawtooth",160,28,n,.8,.22),this.tone("sine",55,n,.9,.25);break;case"roar":this.slide("sawtooth",160,60,n,.9,.16),this.noise(n,.9,.1,"bandpass",300,1.5,this.sfx,120);break;case"slam":this.noise(n,.4,.22,"lowpass",500,1,this.sfx,80),this.tone("sine",70,n,.4,.22);break;case"charge":this.slide("sawtooth",90,240,n,.5,.1);break;case"wave":[0,4,7].forEach((i,r)=>this.tone("triangle",Ze(72+i),n+r*.1,.3,.1));break;case"win":[0,4,7,12,16,19,24].forEach((i,r)=>this.tone("triangle",Ze(72+i),n+r*.11,.6,.13));break;case"lose":[0,-3,-7,-12].forEach((i,r)=>this.tone("sine",Ze(64+i),n+r*.25,.7,.12));break;case"tap":this.tone("sine",700,n,.06,.08);break;default:break}}mode(t){this.setTune(t==="battle"?_m:t==="calm"?Cm:null)}};ih(Ji,rh);sh(Ji);var Xn=Math.PI*2,nt={sph:new ps(1,22,16),half:new ps(1,22,10,0,Xn,0,Math.PI/2),cyl:new fs(1,1,1,16),cone:new _r(1,1,12),box:new ci(1,1,1),disc:new Cr(1,40),ring:new Mr(.86,1,48)};function Br(s,t,e,n){let i=document.createElement("canvas");i.width=s,i.height=t,e(i.getContext("2d"),s,t);let r=new dn(i);return r.colorSpace=me,n&&(r.wrapS=r.wrapT=Mn,r.repeat.set(n[0],n[1])),r.anisotropy=4,r}var gi;function Im(){if(gi)return gi;let s=document.createElement("canvas");s.width=s.height=128;let t=s.getContext("2d");t.fillStyle="#808080",t.fillRect(0,0,128,128);let e=7,n=()=>(e=e*16807%2147483647,e/2147483647);for(let i=0;i<260;i++){let r=n()*128,a=n()*128,o=2+n()*7,l=t.createRadialGradient(r,a,0,r,a,o),c=n()>.5?255:0;l.addColorStop(0,`rgba(${c},${c},${c},.22)`),l.addColorStop(1,`rgba(${c},${c},${c},0)`),t.fillStyle=l,t.fillRect(r-o,a-o,o*2,o*2)}t.strokeStyle="rgba(255,255,255,.16)",t.lineWidth=1.3;for(let i=0;i<4;i++){let r=20+n()*90,a=20+n()*90;for(let o=1;o<7;o++)t.beginPath(),t.ellipse(r,a,o*2.4,o*1.9,n()*.4,.3,Math.PI*1.7),t.stroke()}return gi=new dn(s),gi.wrapS=gi.wrapT=Mn,gi.repeat.set(2,2),gi}var Fr=(s,t)=>Br(128,128,(e,n,i)=>{e.fillStyle=s,e.fillRect(0,0,n,i),e.strokeStyle=t,e.lineWidth=14,e.lineCap="round",e.beginPath();for(let r=0;r<22;r+=.15){let a=r*2.7,o=n/2+Math.cos(r)*a,l=i/2+Math.sin(r)*a;r===0?e.moveTo(o,l):e.lineTo(o,l)}e.stroke()}),ch=(s,t,e=8)=>Br(128,128,(n,i,r)=>{n.fillStyle=s,n.fillRect(0,0,i,r),n.fillStyle=t;for(let a=0;a<e;a+=2)n.beginPath(),n.moveTo(a*i/e-r,r),n.lineTo((a+1)*i/e-r,r),n.lineTo((a+1)*i/e,0),n.lineTo(a*i/e,0),n.fill()}),Or=()=>Br(64,64,(s,t,e)=>{let n=s.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.4,"rgba(255,255,255,.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=n,s.fillRect(0,0,t,e)}),ll=new Map;function kt(s,t={}){var i,r,a,o,l,c;let e=`${s}|${(i=t.rough)!=null?i:""}|${(r=t.em)!=null?r:""}|${t.map?1:0}`;if(!t.fresh&&ll.has(e))return ll.get(e);let n=new En({color:s,roughness:(a=t.rough)!=null?a:.62,metalness:0,bumpMap:Im(),bumpScale:(o=t.bump)!=null?o:.5,emissive:s,emissiveIntensity:(l=t.em)!=null?l:.12,map:t.map||null,transparent:!!t.transparent,opacity:(c=t.opacity)!=null?c:1});return t.fresh||ll.set(e,n),n}var Me=(s,t=1,e={})=>new Ye({color:s,transparent:t<1,opacity:t,depthWrite:t>=1,...e});function ut(s,t,e=0,n=0,i=0,r=1,a=r,o=r){let l=new Jt(s,t);return l.position.set(e,n,i),l.scale.set(r,a,o),l}var rn=()=>kt(1840176,{rough:.3,em:0}),cl=()=>kt(16777215,{rough:.3,em:.3});function hl(s=.8){let t=new Jt(nt.disc,new Ye({color:656928,transparent:!0,opacity:.38,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.position.y=.04,t.scale.setScalar(s),t.renderOrder=1,t}function hh(s){let t=s.color,e=kt(t,{rough:.34,em:.2,fresh:!0}),n=kt(new Et(t).lerp(new Et(16777215),.5).getHex(),{rough:.5,em:.2,fresh:!0}),i=new Xt,r=new Xt;i.add(r),r.add(ut(nt.sph,e,0,.78,0,.5,.56,.45)),r.add(ut(nt.sph,n,0,.72,.28,.27,.3,.17));let a=new Xt;a.position.set(0,1.5,.04),r.add(a),a.add(ut(nt.sph,e,0,0,0,.44,.4,.42));for(let p of[-1,1])a.add(ut(nt.sph,e,p*.31,.34,-.02,.17,.17,.12)),a.add(ut(nt.sph,n,p*.31,.34,.06,.09,.09,.05)),a.add(ut(nt.sph,rn(),p*.16,.07,.38,.065,.085,.05)),a.add(ut(nt.sph,cl(),p*.14,.1,.42,.022,.022,.02)),a.add(ut(nt.sph,kt(16747176,{em:.2}),p*.27,-.06,.34,.07,.045,.03));a.add(ut(nt.sph,n,0,-.1,.34,.19,.14,.12)),a.add(ut(nt.sph,rn(),0,-.06,.45,.05,.035,.03));let o=[];for(let p of[-1,1]){let m=new Xt;m.position.set(p*.52,1.08,0),m.add(ut(nt.sph,e,0,-.18,0,.15,.3,.15)),r.add(m),o.push(m),r.add(ut(nt.sph,e,p*.22,.24,.02,.19,.26,.21))}let l=new Xt;l.position.set(0,-.4,.05),o[1].add(l);let c;if(s.role==="melee"){c=new Xt;let p=kt(15213626,{em:.25}),m=kt(16777215,{em:.3});for(let g=0;g<6;g++)c.add(ut(nt.cyl,g%2?p:m,0,.15+g*.2,0,.065,.2,.065));let A=new Jt(new di(.2,.065,8,14,Math.PI),p);A.position.set(.2,1.35,0),c.add(A),c.add(ut(nt.sph,m,0,0,0,.1)),c.rotation.x=Math.PI/2-.15,c.position.set(0,0,.05)}else if(s.role==="magic"){c=new Xt,c.add(ut(nt.cyl,kt(15794136,{em:.3}),0,.7,0,.05,1.4,.05));let p=ut(nt.cyl,kt(16777215,{em:.45,map:Fr("#ff8ad0","#fff4a8")}),0,1.5,0,.34,.09,.34);p.rotation.x=Math.PI/2,c.add(p);let m=ut(nt.sph,Me(14221194,.8),0,1.5,.08,.2);c.add(m),c.userData.orb=m,c.rotation.x=.35,c.position.set(0,-.1,.05)}else{c=new Xt,c.add(ut(nt.sph,kt(2775768,{rough:.3,em:.25}),0,0,.1,.22,.2,.3));let p=ut(nt.cyl,kt(14214399,{em:.3}),0,0,.5,.085,.5,.085);p.rotation.x=Math.PI/2,c.add(p),c.add(ut(nt.sph,new En({color:12574975,transparent:!0,opacity:.6,roughness:.1,emissive:5933823,emissiveIntensity:.3}),0,.28,.05,.17));for(let m=0;m<3;m++)c.add(ut(nt.sph,kt([16734842,16769098,8060810][m],{em:.4}),-.05+m*.05,.26+m%2*.04,.05,.05));c.position.set(0,0,.1)}l.add(c);let h=[];for(let p of[-1,1]){let m=new Xt;m.position.set(p*.2,.36,.02),m.add(ut(nt.sph,e,0,-.1,.04,.2,.24,.24)),r.add(m),h.push(m)}let u=hl(.75);i.add(u);let f=new Jt(nt.ring,Me(16777215,.8));return f.rotation.x=-Math.PI/2,f.position.y=.06,f.scale.setScalar(1),f.visible=!1,i.add(f),i.userData={body:r,head:a,arms:o,legs:h,weapon:c,mat:e,pale:n,ring:f,shadow:u,kick:0,def:s},i}function uh(s){let t=sn[s],e=t.r,n=kt(t.color,{rough:.72,em:.14,bump:.9}),i=new Xt,r=new Xt;i.add(r),r.add(ut(nt.half,n,0,.18*e,0,e,e*1.05,e)),r.add(ut(nt.cyl,n,0,.1*e,0,e*.98,e*.4,e*.98));let a=kt(16777215,{em:.5,rough:.9}),o=(()=>{let u=s.length*13+5;return()=>(u=u*16807%2147483647,u/2147483647)})();for(let u=0;u<12;u++){let f=o()*Xn,p=.2+o()*1.1;r.add(ut(nt.sph,a,Math.cos(f)*Math.sin(p)*e*.97,.18*e+Math.cos(p)*e*1,Math.sin(f)*Math.sin(p)*e*.97,.05*e+.015,.05*e+.015,.05*e+.015))}let l=e*.95,c=e*.62;for(let u of[-1,1]){r.add(ut(nt.sph,cl(),u*e*.34,c,l*.8,e*.2,e*.24,e*.12)),r.add(ut(nt.sph,rn(),u*e*.32,c-e*.02,l*.8+e*.1,e*.1,e*.13,e*.06));let f=ut(nt.box,rn(),u*e*.36,c+e*.28,l*.8,e*.34,e*.07,e*.07);f.rotation.z=u*-.45,r.add(f)}if(s==="spitter")r.add(ut(nt.sph,kt(2755130,{em:0,rough:.4}),0,e*.2,l*.82,e*.28,e*.22,e*.14)),r.add(ut(nt.sph,kt(16743080,{em:.3}),0,e*.1,l*.9,e*.16,e*.08,e*.08));else if(s==="tank"){for(let u=0;u<2;u++){let f=new Jt(new di(e*(.95-u*.28),e*.07,8,28),kt(16747050,{em:.25}));f.rotation.x=Math.PI/2,f.position.y=e*(.35+u*.5),r.add(f)}r.add(ut(nt.box,rn(),0,e*.16,l*.9,e*.45,e*.07,e*.07))}else if(s==="bomber"){r.add(ut(nt.cyl,kt(6965802),0,e*1.35,0,.05,e*.5,.05));let u=ut(nt.sph,Me(16769098),0,e*1.65,0,.14);r.add(u),i.userData.spark=u,r.add(ut(nt.box,rn(),0,e*.2,l*.9,e*.4,e*.06,e*.06))}else if(s==="sour"){for(let u=0;u<5;u++){let f=u/5*Xn;r.add(ut(nt.cone,a,Math.cos(f)*e*.55,e*1,Math.sin(f)*e*.55-e*.1,.07,.2,.07))}r.add(ut(nt.box,rn(),0,e*.18,l*.9,e*.36,e*.07,e*.07))}else r.add(ut(nt.box,rn(),0,e*.18,l*.9,e*.36,e*.07,e*.07));let h=hl(e*1.1);return i.add(h),i.userData={body:r,mat:n,r:e,kind:s},i}function dh(){let s=new Xt,t=new Xt,e=new Xt;s.add(t),t.add(e);let n=1.25,i=.75,r=kt(14195290,{rough:.8,em:.1,bump:1}),a=kt(16739e3,{rough:.38,em:.22}),o=new Jt(new di(n,i,20,40),r);e.add(o);let l=new Jt(new di(n,i+.04,20,40,Math.PI*1.3),a);l.rotation.z=Math.PI*.35-Math.PI*.15,e.add(l);for(let g=0;g<9;g++){let d=g/9*Math.PI*1.3+Math.PI*.2;e.add(ut(nt.sph,a,Math.cos(d)*(n+.4),Math.sin(d)*(n+.4),.3*(g%3-1),.2,.3,.18))}let c=[16769098,7006975,16777215,8060810,11569919],h=11,u=()=>(h=h*16807%2147483647,h/2147483647);for(let g=0;g<22;g++){let d=.2+u()*2.6,_=n+(u()-.5)*.8,I=Math.sqrt(Math.max(.05,i*i-(_-n)*(_-n)))+.02,x=ut(nt.cyl,kt(c[g%5],{em:.4}),Math.cos(d)*_,Math.sin(d)*_,I,.045,.2,.045);x.rotation.set(Math.PI/2+(u()-.5),0,u()*Xn),e.add(x)}for(let g of[-1,1]){e.add(ut(nt.sph,cl(),g*.62,.55,.62,.2,.26,.1)),e.add(ut(nt.sph,rn(),g*.6,.52,.72,.1,.13,.06));let d=ut(nt.box,rn(),g*.62,.92,.66,.36,.08,.08);d.rotation.z=g*-.5,e.add(d)}e.add(ut(nt.box,rn(),0,-.8,.62,.7,.1,.1));let f=kt(16765498,{rough:.3,em:.4}),p=new Xt;p.position.set(0,n+i*.75,.35),p.add(ut(nt.cyl,f,0,0,0,.55,.22,.55));for(let g=0;g<5;g++){let d=g/5*Xn;p.add(ut(nt.cone,f,Math.cos(d)*.5,.33,Math.sin(d)*.5,.15,.4,.15)),p.add(ut(nt.sph,kt([16730730,4915082,4885247][g%3],{em:.6}),Math.cos(d)*.5,.58,Math.sin(d)*.5,.07))}p.rotation.x=.35,e.add(p);let m=new Xt;for(let g=0;g<4;g++)m.add(ut(nt.sph,Me(16769098),Math.cos(g/4*Xn)*1.3,0,Math.sin(g/4*Xn)*1.3,.16));m.position.y=3.3,m.visible=!1,s.add(m);let A=hl(2.3);return s.add(A),s.userData={lean:t,ring:e,stars:m,dough:r,glaze:a,shadow:A},s}function fh(s){let t=[16730746,4892927,16765498,7012234,11561727,16751162][s%6],e=new Xt;e.add(ut(nt.sph,kt(t,{rough:.4,em:.5}),0,0,0,.17,.14,.14));for(let n of[-1,1]){let i=ut(nt.cone,kt(16777215,{em:.6}),n*.2,0,0,.1,.12,.1);i.rotation.z=n*-Math.PI/2,e.add(i)}return e}function ph(){let s=new Xt,t=ut(nt.cyl,kt(16777215,{rough:.3,em:.6,map:Fr("#ffffff","#e8244a")}),0,0,0,.5,.2,.5);t.rotation.x=Math.PI/2,s.add(t);let e=ut(nt.cyl,Me(9109464,.22,{blending:Xe}),0,2,0,.45,4,.45);s.add(e);let n=new Jt(nt.ring,Me(9109464,.7));return n.rotation.x=-Math.PI/2,n.position.y=-.55,n.scale.setScalar(.9),s.add(n),s.userData={disc:t,ground:n},s}function gh(){let s=new Xt,t=Br(256,256,(n,i,r)=>{let a=["#ff5a8a","#ffe04a","#6aeaff","#b08aff","#ffffff"];for(let o=6;o>=0;o--)n.fillStyle=a[o%5],n.beginPath(),n.arc(i/2,r/2,(o+1)*18,0,Xn),n.fill()}),e=ut(nt.sph,new En({map:t,roughness:.25,emissive:16777215,emissiveMap:t,emissiveIntensity:.25}),0,0,0,2.2);return s.add(e),s.userData={ball:e},s}function K(s,t={},...e){let n=document.createElement(s);for(let[i,r]of Object.entries(t))r==null||r===!1||(i==="class"?n.className=r:i.startsWith("on")?n.addEventListener(i.slice(2).toLowerCase(),r):i==="style"?n.style.cssText=r:n.setAttribute(i,r===!0?"":r));for(let i of e.flat())i!=null&&i!==!1&&n.append(i.nodeType?i:document.createTextNode(String(i)));return n}function mh(s){let t="ar",e=!1;return{setLang:n=>{t=n==="en"?"en":"ar"},setGirl:n=>{e=!!n},getLang:()=>t,t:n=>{let i=`${n}_${e?"f":"m"}`,r=s[i]?i:n;return s[r]?s[r][t==="en"?1:0]:n},num:n=>t==="en"?String(n):String(n).replace(/[0-9]/g,i=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[i])}}function Ah(s,t,e,n="#ffd23a"){return`
.${s}-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#fff;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:${e}}
.${s}-root canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.${s}-layer{position:absolute;inset:0;pointer-events:none}
.${s}-layer button,.${s}-layer .${s}-card{pointer-events:auto}
.${s}-top{position:absolute;top:max(calc(var(--u)*2.5),env(safe-area-inset-top));left:calc(var(--u)*3);right:calc(var(--u)*3);display:flex;gap:calc(var(--u)*1.6);direction:ltr;align-items:center;justify-content:space-between}
.${s}-pill{background:linear-gradient(180deg,${t},${e});border:calc(var(--u)*.5) solid #fff;border-radius:999px;color:#fff;font-weight:900;font-size:calc(var(--u)*4);padding:calc(var(--u)*1) calc(var(--u)*3);display:flex;align-items:center;gap:calc(var(--u)*1.4);box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,20,40,.4);white-space:nowrap}
.${s}-bar{flex:1;height:calc(var(--u)*2.4);border-radius:99px;background:rgba(0,0,0,.4);border:calc(var(--u)*.35) solid #fff;overflow:hidden;position:relative}
.${s}-bar b{display:block;height:100%;background:linear-gradient(180deg,#7af0d0,#2ab898);border-radius:99px}
.${s}-round{width:calc(var(--u)*10.5);height:calc(var(--u)*10.5);border-radius:50%;font-size:calc(var(--u)*5);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;font-family:inherit;background:linear-gradient(180deg,${t},${e});border:calc(var(--u)*.5) solid #fff;color:#fff;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,20,40,.4)}
.${s}-round:active{transform:scale(.94)}
.${s}-hint{position:absolute;left:50%;top:calc(var(--u)*17);transform:translateX(-50%);background:rgba(10,40,60,.78);border:calc(var(--u)*.4) solid #fff;border-radius:999px;color:#fff;font-weight:900;font-size:calc(var(--u)*3.8);padding:calc(var(--u)*1.2) calc(var(--u)*4);white-space:nowrap;opacity:0;transition:opacity .35s;pointer-events:none;max-width:94%;overflow:hidden;text-overflow:ellipsis}
.${s}-hint.show{opacity:1}
.${s}-dim{position:absolute;inset:0;background:rgba(5,25,40,.55);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*4);box-sizing:border-box;pointer-events:auto}
.${s}-card{background:linear-gradient(180deg,${t},${e});border:calc(var(--u)*.7) solid ${n};border-radius:calc(var(--u)*5);padding:calc(var(--u)*3.4) calc(var(--u)*5);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);width:calc(var(--u)*80);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;color:#fff;box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,10,30,.5)}
.${s}-logo{font-size:calc(var(--u)*10);font-weight:900;color:${n};-webkit-text-stroke:calc(var(--u)*.8) rgba(0,30,50,.9);paint-order:stroke fill;text-align:center;line-height:1.1}
.${s}-title{font-size:calc(var(--u)*8);font-weight:900;color:${n};-webkit-text-stroke:calc(var(--u)*.5) rgba(0,30,50,.8);paint-order:stroke fill;text-align:center;line-height:1.1}
.${s}-small{font-size:calc(var(--u)*3.8);font-weight:700;text-align:center;opacity:.95}
.${s}-stars{font-size:calc(var(--u)*11)}.${s}-stars .off{filter:grayscale(1);opacity:.3}
.${s}-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*5);color:#fff;border:none;border-radius:999px;padding:calc(var(--u)*1.6) calc(var(--u)*6);min-height:calc(var(--u)*11.5);cursor:pointer;background:linear-gradient(180deg,#6ae08a,#2fa85a);box-shadow:0 calc(var(--u)*.9) 0 #1a6a3a,inset 0 calc(var(--u)*.5) 0 rgba(255,255,255,.35);width:100%}
.${s}-btn.alt{background:linear-gradient(180deg,#ff8a6a,#e0502a);box-shadow:0 calc(var(--u)*.9) 0 #902a0a}
.${s}-btn.dark{background:linear-gradient(180deg,#4a9ab8,#2a6a88);box-shadow:0 calc(var(--u)*.9) 0 #0a3a50;font-size:calc(var(--u)*4.2)}
.${s}-btn:active{transform:translateY(calc(var(--u)*.5))}
.${s}-btn:focus-visible,.${s}-round:focus-visible,.${s}-lv:focus-visible,.${s}-bld:focus-visible{outline:calc(var(--u)*.7) solid ${n};outline-offset:calc(var(--u)*.5)}
.${s}-lvs{display:grid;grid-template-columns:repeat(4,1fr);gap:calc(var(--u)*1.8);width:100%}
.${s}-lv{border:none;font-family:inherit;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*.6);color:#fff;font-weight:900;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);font-size:calc(var(--u)*2.8);background:linear-gradient(180deg,#4ab8d8,#2a78a8);box-shadow:0 calc(var(--u)*.6) 0 #0a3a60;min-height:calc(var(--u)*18)}
.${s}-lv i{font-style:normal;font-size:calc(var(--u)*6.5)}
.${s}-lv.lock{background:linear-gradient(180deg,#b8c4cc,#8a98a4);box-shadow:0 calc(var(--u)*.6) 0 #5a6a78}
.${s}-bot{position:absolute;left:calc(var(--u)*2);right:calc(var(--u)*2);bottom:max(calc(var(--u)*2),env(safe-area-inset-bottom));display:flex;gap:calc(var(--u)*1.6);justify-content:center;direction:ltr;align-items:flex-end}
.${s}-bld{font-family:inherit;font-weight:900;border:calc(var(--u)*.45) solid #fff;border-radius:calc(var(--u)*3);color:#fff;background:linear-gradient(180deg,${t},${e});padding:calc(var(--u)*1) calc(var(--u)*2);min-width:calc(var(--u)*17);font-size:calc(var(--u)*3);display:flex;flex-direction:column;align-items:center;cursor:pointer;gap:calc(var(--u)*.2);box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,20,40,.4)}
.${s}-bld i{font-style:normal;font-size:calc(var(--u)*6)}
.${s}-bld.can{background:linear-gradient(180deg,#6ae08a,#2fa85a);animation:${s}pulse 1s infinite}
.${s}-bld.done{opacity:.55;filter:grayscale(.5)}
.${s}-bld small{font-size:calc(var(--u)*2.5);opacity:.95;font-weight:700}
@keyframes ${s}pulse{50%{transform:scale(1.07)}}
@media (orientation:landscape){.${s}-card{width:calc(var(--u)*115);max-width:94vw}.${s}-logo{font-size:calc(var(--u)*8)}.${s}-lvs{grid-template-columns:repeat(8,1fr)}.${s}-lv{min-height:calc(var(--u)*24);font-size:calc(var(--u)*3.2)}}
.${s}-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*22);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
`}var zr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var qe=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Mm=new Gi(-1,1,1,-1,0,1),ul=class extends pe{constructor(){super(),this.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new te([0,2,0,0,2,0],2))}},bm=new ul,Yn=class{constructor(t){this._mesh=new Jt(bm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Mm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ji=class extends qe{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Wn.clone(t.uniforms),this.material=new xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Yn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ms=class extends qe{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},kr=class extends qe{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var qr=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new bt);this._width=n.width,this._height=n.height,e=new Ve(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ji(zr),this.copyPass.material.blending=hn,this.clock=new Tr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ms!==void 0&&(a instanceof Ms?n=!0:a instanceof kr&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new bt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Hr=class extends qe{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Et}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}};var xh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Et(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ki=class s extends qe{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new bt(t.x,t.y):new bt(256,256),this.clearColor=new Et(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ve(r,a,{type:nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ve(r,a,{type:nn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new Ve(r,a,{type:nn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=xh;this.highPassUniforms=Wn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new bt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=zr;this.copyUniforms=Wn.clone(h.uniforms),this.blendMaterial=new xe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Xe,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Et,this.oldClearAlpha=1,this.basic=new Ye,this.fsQuad=new Yn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new bt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new bt(.5,.5)},direction:{value:new bt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ki.BlurDirectionX=new bt(1,0);Ki.BlurDirectionY=new bt(0,1);var vh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Gr=class extends qe{constructor(){super();let t=vh;this.uniforms=Wn.clone(t.uniforms),this.material=new br({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Yn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===$t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ho?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Go?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Yo&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var yh={warm:{bloom:[.32,.55,.82],contrast:1.08,sat:1.12,tint:.05,vig:.38,exposure:1},fresh:{bloom:[.28,.5,.85],contrast:1.06,sat:1.1,tint:-.015,vig:.32,exposure:1},night:{bloom:[.55,.7,.7],contrast:1.12,sat:1.08,tint:-.04,vig:.5,exposure:1.05},candy:{bloom:[.4,.6,.78],contrast:1.05,sat:1.18,tint:.02,vig:.3,exposure:1},epic:{bloom:[.38,.6,.8],contrast:1.14,sat:1.1,tint:.035,vig:.45,exposure:1.02}},Sm={uniforms:{tDiffuse:{value:null},contrast:{value:1.08},sat:{value:1.1},tint:{value:.04},vig:{value:.4},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},Em={warm:16773570,fresh:15136511,night:12572927,candy:16765424,epic:16769704};function wm(s,t,e,n){let i=Math.min(60,Math.max(6,(t.far||300)*.035)),r=110,a=new Float32Array(r*3),o=new Float32Array(r*3);for(let A=0;A<r;A++)a[A*3]=t.position.x+(Math.random()-.5)*2*i,a[A*3+1]=t.position.y+(Math.random()-.5)*i,a[A*3+2]=t.position.z+(Math.random()-.5)*2*i,o[A*3]=(Math.random()-.5)*.25,o[A*3+1]=.05+Math.random()*.25,o[A*3+2]=(Math.random()-.5)*.25;let l=new pe;l.setAttribute("position",new Ae(a,3));let c=document.createElement("canvas");c.width=c.height=32;let h=c.getContext("2d"),u=h.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.35,"rgba(255,255,255,0.45)"),u.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=u,h.fillRect(0,0,32,32);let f=new dn(c);f.colorSpace=me;let p=new Gn({map:f,color:Em[e]||16773570,size:i*.045,transparent:!0,opacity:.75,depthWrite:!1,blending:Xe,fog:!1,sizeAttenuation:!0}),m=new ui(l,p);return m.frustumCulled=!1,m.renderOrder=999,m.name="__motes",s.add(m),{pts:m,pos:a,vel:o,R:i,N:r}}function Tm(s,t,e){let{pos:n,vel:i,R:r,N:a}=s;for(let o=0;o<a;o++)for(let l=0;l<3;l++){let c=o*3+l;n[c]+=i[c]*e*(l===1?r*.1:r*.12);let h=l===1?r*.5:r,u=n[c]-[t.position.x,t.position.y,t.position.z][l];u>h?n[c]-=2*h:u<-h&&(n[c]+=2*h)}s.pts.geometry.attributes.position.needsUpdate=!0}var Ch={start:3,good:6,combo:2,oops:4,near:2,win:3,lose:3,idle:2,overtake:3,boost:3,behind:3,collect:3,levelup:3},Vm=/فزت|مبروك|كسبت|فاز|انتصر|أحسنت|برافو|🏆|WIN|Victory|Congrat|You won/i,Rm=/خسر|حاول تاني|حاول مرة|انتهت|معلش|Game over|Try again|Failed/i;function Pm(s,t){if(!s||s.__cheer)return;s.__cheer=!0;let e=new URL("../_voice/",location.href).href,n={},i=null,r=0,a=performance.now(),o=!1,l=0,c=!1,h=g=>{if(!n[g]){let d=new Audio(`${e}${g}_${t}.mp3`);d.preload="auto",d.volume=.95,n[g]=d}return n[g]},u=(g,d)=>{let _=performance.now();if(!d&&_-r<6e3||c)return;let I=g+(1+Math.floor(Math.random()*Ch[g])),x=h(I);c=!0,r=_,x.currentTime=0;let V=()=>{c=!1};x.onended=V,x.onerror=V;let S=x.play();S&&S.catch&&S.catch(V),setTimeout(V,4e3)};window.__cheer=(g,d)=>{Ch[g]&&(o=!0,u(g,!!d))};let f=()=>{try{i=i||new(window.AudioContext||window.webkitAudioContext);let g=i.createOscillator(),d=i.createGain();g.type="sine",g.frequency.setValueAtTime(520,i.currentTime),g.frequency.exponentialRampToValueAtTime(900,i.currentTime+.08),d.gain.setValueAtTime(.08,i.currentTime),d.gain.exponentialRampToValueAtTime(.001,i.currentTime+.12),g.connect(d),d.connect(i.destination),g.start(),g.stop(i.currentTime+.13)}catch{}},p=()=>{a=performance.now(),f(),o||(o=!0,u("start",!0))};s.addEventListener("pointerdown",p,{passive:!0}),window.addEventListener("keydown",p,{passive:!0});let m="";new MutationObserver(()=>{if(!o)return;let g=(s.innerText||"").slice(0,600);g!==m&&(m=g,Vm.test(g)?u("win",!1):Rm.test(g)&&u("lose",!1))}).observe(s,{childList:!0,subtree:!0}),setInterval(()=>{let g=performance.now();!o||document.hidden||(g-a>14e3?(u("idle",!1),a=g-4e3):g-r>22e3&&(l++,u(l%5===0?"combo":"good",!1)))},2500)}function _h(s,t={}){let e=new URLSearchParams(typeof location!="undefined"?location.search:"");if(e.has("nopolish"))return s;let n=Object.assign({},yh[e.get("look")||t.preset||"warm"]||yh.warm,t.tune||{}),i=e.has("low")||!!t.low,r=e.has("rec"),a=s.render.bind(s),o=new WeakMap,l=performance.now(),c=null,h=null,u=null,f=null,p=0,m=0,A=0,g=!1,d=performance.now();function _(I,x){let V=s.getSize(new bt);p=V.x,m=V.y,A=s.getPixelRatio(),c=new qr(s),c.setPixelRatio(A),c.setSize(p,m),h=new Hr(I,x),c.addPass(h),i||(u=new Ki(new bt(Math.max(2,p>>1),Math.max(2,m>>1)),n.bloom[0],n.bloom[1],n.bloom[2]),c.addPass(u)),c.addPass(new Gr),f=new ji(Sm),f.uniforms.contrast.value=n.contrast,f.uniforms.sat.value=n.sat,f.uniforms.tint.value=n.tint,f.uniforms.vig.value=n.vig,c.addPass(f)}return s.render=function(I,x){if(g||s.getRenderTarget()!==null||s.autoClear===!1||!I||!x||!I.isScene)return a(I,x);try{c||_(I,x);let V=s.getSize(new bt),S=s.getPixelRatio();(V.x!==p||V.y!==m||S!==A)&&(p=V.x,m=V.y,A=S,c.setPixelRatio(S),c.setSize(p,m),u&&u.resolution.set(Math.max(2,p>>1),Math.max(2,m>>1))),h.scene=I,h.camera=x,f.uniforms.time.value=(performance.now()-d)/1e3;let E=performance.now(),w=Math.min(.1,Math.max(0,(E-l)/1e3));if(l=E,!e.has("nomotes")&&t.motes!==!1){let M=o.get(I);M||(M=wm(I,x,e.get("look")||t.preset||"warm",r),o.set(I,M)),Tm(M,x,w)}g=!0,c.render(),g=!1}catch(V){g=!1,typeof console!="undefined"&&console.warn("[polish] disabled:",V&&V.message),s.render=a,a(I,x)}},!e.has("nocheer")&&!r&&setTimeout(()=>Pm(s.domElement.parentElement&&s.domElement.parentElement.parentElement||document.body,e.get("voice")||t.voice||"puck"),0),s.__polish={preset:n,rec:r},s}var Um={title:["\u0641\u0631\u0642\u0629 \u0627\u0644\u062F\u0628\u0628\u0629 \u0627\u0644\u062C\u064A\u0644\u064A","GUMMY SQUAD"],play:["\u0627\u0644\u0639\u0628","PLAY"],stage:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629","Stage"],nextStage:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062C\u0627\u064A\u0629","Next stage"],upgrades:["\u0627\u0644\u062A\u0637\u0648\u064A\u0631\u0627\u062A","UPGRADES"],settings:["\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A","SETTINGS"],back:["\u0631\u062C\u0648\u0639","Back"],sound:["\u0627\u0644\u0635\u0648\u062A","Sound"],on:["\u0634\u063A\u0651\u0627\u0644","On"],off:["\u0645\u0642\u0641\u0648\u0644","Off"],language:["\u0627\u0644\u0644\u063A\u0629","Language"],quit:["\u062E\u0631\u0648\u062C","Quit"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","PAUSED"],resume:["\u0643\u0645\u0651\u0644","RESUME"],restart:["\u0645\u0646 \u0627\u0644\u0623\u0648\u0644","RESTART"],home:["\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629","HOME"],wave:["\u0627\u0644\u0645\u0648\u062C\u0629","WAVE"],boss:["\u0627\u0644\u0645\u0644\u0643 \u062F\u0648\u0646\u0627\u062A","KING DONUT"],bossIntro:["\u0627\u0644\u0645\u0644\u0643 \u062F\u0648\u0646\u0627\u062A \u0648\u0635\u0644!","King Donut is here!"],super:["\u0633\u0648\u0628\u0631","SUPER"],won:["\u0643\u0633\u0628\u062A\u0648\u0627! \u0627\u0644\u0645\u0644\u0643 \u0628\u0642\u0649 \u0641\u062A\u0627\u0641\u064A\u062A \u{1F369}","You win! King Donut is crumbs \u{1F369}"],lost:["\u0627\u0644\u062F\u0628\u0628\u0629 \u062F\u0627\u0628\u062A \u{1F4A7}","The bears melted \u{1F4A7}"],again:["\u0627\u0644\u0639\u0628 \u062A\u0627\u0646\u064A","Play again"],earned:["\u062D\u0644\u0648\u064A\u0627\u062A \u062C\u0645\u0639\u062A\u0647\u0627","Candies collected"],bonus:["\u0645\u0643\u0627\u0641\u0623\u0629 \u0627\u0644\u0641\u0648\u0632","Win bonus"],total:["\u0645\u0639\u0627\u0643","You have"],dmg:["\u0642\u0648\u0629 \u0627\u0644\u0636\u0631\u0628","Sweet Power"],dmgD:["\u0627\u0644\u062F\u0628\u0628\u0629 \u0628\u062A\u0636\u0631\u0628 \u0623\u0642\u0648\u0649","Bears hit harder"],hp:["\u0635\u062D\u0629 \u0627\u0644\u062F\u0628\u0628\u0629","Bear Health"],hpD:["\u0627\u0644\u062F\u0628\u0628\u0629 \u062A\u062A\u062D\u0645\u0644 \u0623\u0643\u062A\u0631","Bears take more"],chg:["\u0634\u062D\u0646 \u0627\u0644\u0633\u0648\u0628\u0631","Super Charge"],chgD:["\u0627\u0644\u0633\u0648\u0628\u0631 \u064A\u062A\u0634\u062D\u0646 \u0623\u0633\u0631\u0639","Super charges faster"],buy:["\u0627\u0634\u062A\u0631\u064A","Buy"],max:["\u0623\u0642\u0635\u0649 \u0645\u0633\u062A\u0648\u0649","MAX"],how:["\u0627\u0633\u062D\u0628 \u0641\u064A \u0623\u064A \u0645\u0643\u0627\u0646 \u0644\u062A\u062D\u0631\u064A\u0643 \u0627\u0644\u0641\u0631\u0642\u0629. \u0627\u0644\u062F\u0628\u0628\u0629 \u0628\u062A\u0636\u0631\u0628 \u0644\u0648\u062D\u062F\u0647\u0627!","Drag anywhere to move the squad. The bears fight by themselves!"],tapSound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],mintHint:["\u062E\u062F \u0627\u0644\u0646\u0639\u0646\u0627\u0639 \u0644\u062A\u0635\u062D\u0651\u064A \u062F\u0628\u062F\u0648\u0628!","Grab the mint to wake a bear!"],dodge:["\u0627\u0647\u0631\u0628 \u0645\u0646 \u0627\u0644\u062F\u0648\u0627\u0626\u0631 \u0627\u0644\u062D\u0645\u0631\u0627!","Dodge the red circles!"],b0:["\u0641\u0631\u0627\u0648\u0644\u0629","Strawberry"],b1:["\u0644\u064A\u0645\u0648\u0646","Lime"],b2:["\u062A\u0648\u062A\u0629","Blueberry"],stars:["\u0646\u062C\u0648\u0645","stars"],best:["\u0623\u0641\u0636\u0644 \u0646\u062A\u064A\u062C\u0629","Best"]},mt=mh(Um),mi=Math.PI*2,Zn=(s,t,e)=>s<t?t:s>e?e:s,Lm=["#ff4a62","#7ae83a","#4a8aff"],Dm=Ah("gs","#6a4ad0","#2a1a78","#ffd0f0")+`
.gs-root{background:#1d1645}
.gs-menu{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:calc(var(--u)*5) calc(var(--u)*4) calc(var(--u)*6);box-sizing:border-box;pointer-events:none}
.gs-menu>*{pointer-events:auto}
.gs-menu .gs-logo{font-size:calc(var(--u)*11);margin-top:calc(var(--u)*3);filter:drop-shadow(0 calc(var(--u)*.8) 0 rgba(60,10,90,.8))}
.gs-stagebar{white-space:nowrap;display:flex;align-items:center;justify-content:center;gap:calc(var(--u)*3);color:#fff;font-weight:900;font-size:calc(var(--u)*4.2);text-shadow:0 2px 0 rgba(0,0,0,.35)}
.gs-btns{display:flex;flex-direction:column;gap:calc(var(--u)*2);width:min(calc(var(--u)*70),90%)}
@media (orientation:landscape){.gs-btns{flex-direction:row;width:min(calc(var(--u)*150),94%)}.gs-menu .gs-logo{font-size:calc(var(--u)*8);margin-top:0}}
.gs-btn{background:linear-gradient(180deg,#ff9ad8,#e8509a);box-shadow:0 calc(var(--u)*.9) 0 #902a62,inset 0 calc(var(--u)*.5) 0 rgba(255,255,255,.4)}
.gs-btn.dark{background:linear-gradient(180deg,#8a7aff,#5a44d0);box-shadow:0 calc(var(--u)*.9) 0 #2a1a80}
.gs-btn.go{background:linear-gradient(180deg,#8aff9a,#2fc86a);box-shadow:0 calc(var(--u)*.9) 0 #1a7a3a}
.gs-btn[disabled]{opacity:.5;filter:grayscale(.6)}
.gs-hud{position:absolute;inset:0;pointer-events:none}
.gs-portraits{position:absolute;left:calc(var(--u)*2.5);bottom:max(calc(var(--u)*2.5),env(safe-area-inset-bottom));display:flex;gap:calc(var(--u)*1.6);direction:ltr}
.gs-por{width:calc(var(--u)*14);background:rgba(30,16,80,.72);border:calc(var(--u)*.4) solid #fff;border-radius:calc(var(--u)*3);padding:calc(var(--u)*.8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.7)}
.gs-por.down{filter:grayscale(1);opacity:.6}
.gs-face{position:relative;width:calc(var(--u)*7.4);height:calc(var(--u)*7);border-radius:50%;border:calc(var(--u)*.3) solid rgba(255,255,255,.9)}
.gs-face i{position:absolute;top:calc(var(--u)*-1.1);width:calc(var(--u)*3);height:calc(var(--u)*3);border-radius:50%;background:inherit;border:calc(var(--u)*.3) solid rgba(255,255,255,.9)}
.gs-face i:first-child{left:calc(var(--u)*-.5)}.gs-face i:nth-child(2){right:calc(var(--u)*-.5)}
.gs-face b{position:absolute;top:calc(var(--u)*2.6);width:calc(var(--u)*.9);height:calc(var(--u)*1.2);border-radius:50%;background:#1c1430}
.gs-face b:nth-child(3){left:calc(var(--u)*2)}.gs-face b:nth-child(4){right:calc(var(--u)*2)}
.gs-face u{position:absolute;left:50%;top:calc(var(--u)*4);width:calc(var(--u)*2.4);height:calc(var(--u)*1.8);transform:translateX(-50%);border-radius:50%;background:rgba(255,255,255,.7)}
.gs-hp{width:100%;height:calc(var(--u)*1.7);border-radius:99px;background:rgba(0,0,0,.5);overflow:hidden}
.gs-hp b{display:block;height:100%;background:linear-gradient(180deg,#8aff9a,#2fc86a);transition:width .12s}
.gs-hp.low b{background:linear-gradient(180deg,#ff9a8a,#e83a3a)}
.gs-super{position:absolute;right:calc(var(--u)*3);bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));width:calc(var(--u)*21);height:calc(var(--u)*21);border-radius:50%;border:none;padding:0;font-family:inherit;font-weight:900;cursor:pointer;pointer-events:auto;color:#fff;font-size:calc(var(--u)*4);display:flex;align-items:center;justify-content:center;background:conic-gradient(#ffd23a var(--p,0%),rgba(30,16,80,.8) 0);box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.5)}
.gs-super span{width:84%;height:84%;border-radius:50%;background:linear-gradient(180deg,#6a4ad0,#3a2490);display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1;gap:calc(var(--u)*.4);border:calc(var(--u)*.4) solid rgba(255,255,255,.8);box-sizing:border-box}
.gs-super span i{font-style:normal;font-size:calc(var(--u)*7)}
.gs-super.ready{animation:gspulse .7s infinite}.gs-super.ready span{background:linear-gradient(180deg,#ff9ad8,#e8309a)}
@keyframes gspulse{50%{transform:scale(1.1)}}
.gs-bossbar{position:absolute;left:50%;transform:translateX(-50%);bottom:calc(var(--u)*3.5);width:min(calc(var(--u)*60),44%);display:none;flex-direction:column;align-items:center;gap:calc(var(--u)*.5);font-weight:900;font-size:calc(var(--u)*3.4);text-shadow:0 0 calc(var(--u)*1) #000}
.gs-bossbar .gs-hp{height:calc(var(--u)*2.8);border:calc(var(--u)*.4) solid #fff}.gs-bossbar .gs-hp b{background:linear-gradient(180deg,#ff9ad8,#e8309a)}
.gs-banner{position:absolute;left:0;right:0;top:34%;text-align:center;font-weight:900;font-size:calc(var(--u)*10);color:#ffe0f8;-webkit-text-stroke:calc(var(--u)*.7) rgba(60,10,90,.9);paint-order:stroke fill;opacity:0;transform:scale(.7);transition:opacity .3s,transform .3s;pointer-events:none}
.gs-banner.show{opacity:1;transform:scale(1)}
.gs-stick{position:absolute;width:calc(var(--u)*18);height:calc(var(--u)*18);margin:calc(var(--u)*-9) 0 0 calc(var(--u)*-9);border-radius:50%;border:calc(var(--u)*.6) solid rgba(255,255,255,.55);background:rgba(255,255,255,.1);display:none;pointer-events:none}
.gs-stick i{position:absolute;left:50%;top:50%;width:calc(var(--u)*8);height:calc(var(--u)*8);margin:calc(var(--u)*-4) 0 0 calc(var(--u)*-4);border-radius:50%;background:rgba(255,255,255,.55)}
.gs-up{display:flex;flex-direction:column;gap:calc(var(--u)*1.6);width:100%}
.gs-urow{display:flex;align-items:center;gap:calc(var(--u)*2);background:rgba(20,10,60,.55);border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6)}
.gs-urow>div:nth-child(2){flex:1;display:flex;flex-direction:column;gap:calc(var(--u)*.6);font-weight:900;font-size:calc(var(--u)*3.6)}
.gs-urow small{font-size:calc(var(--u)*2.8);opacity:.85;font-weight:700}
.gs-uico{font-size:calc(var(--u)*8)}
.gs-pips{display:flex;gap:calc(var(--u)*.6)}.gs-pips i{width:calc(var(--u)*2.4);height:calc(var(--u)*2.4);border-radius:50%;background:rgba(255,255,255,.25)}.gs-pips i.on{background:#ffd23a}
.gs-buy{font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.8);border:none;border-radius:999px;padding:calc(var(--u)*1.4) calc(var(--u)*3);min-width:calc(var(--u)*16);cursor:pointer;color:#fff;background:linear-gradient(180deg,#8aff9a,#2fc86a);box-shadow:0 calc(var(--u)*.6) 0 #1a7a3a}
.gs-buy[disabled]{background:#7a7a9a;box-shadow:none;opacity:.7;cursor:default}
.gs-row{display:flex;justify-content:space-between;align-items:center;width:100%;font-weight:900;font-size:calc(var(--u)*4)}
.gs-stars{font-size:calc(var(--u)*11);letter-spacing:calc(var(--u)*1)}.gs-stars .off{filter:grayscale(1);opacity:.3}
.gs-soundpill{background:#ffd166}
`,dl=class{constructor(t,e,n){this.el=t,this.post=n||(()=>{}),this.save=Is(e.save),mt.setLang(this.save.lang||e.lang),this.age=Number(e.age)||5,this.base=e.base||"./",this.sound=new Ji,this.sound.muted=!!this.save.muted,document.getElementById("gs-style")||document.head.append(K("style",{id:"gs-style"},Dm)),this.root=K("div",{class:"gs-root"}),t.append(this.root),this.layer=K("div",{class:"gs-layer"}),this.mode="menu",this.clock=0,this.keys={},this.stick=null,this.paused=!1,this.run=null,this.shake=0,this.maps={enemies:new Map,hazards:new Map,projs:new Map,picks:new Map,jaws:new Map},this.decals=[],this.camPos=new R,this.camTarget=new R,this.camInit=!1,this._three(),this.root.append(this.layer),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this._bind(),this.last=performance.now(),this._fonts().then(()=>{this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"});await Promise.race([t.load().then(e=>document.fonts.add(e)),new Promise(e=>setTimeout(e,900))])}catch{}}get dir(){return mt.getLang()==="en"?"ltr":"rtl"}_three(){let t=this.renderer=_h(new mr({antialias:!0}),{preset:"warm"});t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),t.outputColorSpace=me,t.toneMapping=xs,t.toneMappingExposure=1.25,this.root.prepend(t.domElement);let e=this.scene=new xr,n=document.createElement("canvas");n.width=8,n.height=256;let i=n.getContext("2d"),r=i.createLinearGradient(0,0,0,256);r.addColorStop(0,"#171040"),r.addColorStop(.6,"#3a2a80"),r.addColorStop(1,"#6a4aa8"),i.fillStyle=r,i.fillRect(0,0,8,256);let a=new dn(n);a.colorSpace=me,e.background=a,e.fog=new Ar(3811968,55,140),this.camera=new we(48,1,.5,300),e.add(new Er(12103935,5913208,1.5));let o=new As(14214399,2.2);o.position.set(-10,24,12),e.add(o);let l=new As(16751320,.8);l.position.set(12,10,-14),e.add(l),this.glow=new ms(16761072,55,22,1.6),this.glow.position.set(0,5,0),e.add(this.glow),this._buildWorld(),this.bearVis=_s.map(c=>{let h=hh(c);return e.add(h),h}),this.bossVis=dh(),this.bossVis.visible=!1,e.add(this.bossVis),this.bossBar=null,this._particles3d()}_buildWorld(){let t=this.scene,e=(()=>{let d=document.createElement("canvas");d.width=d.height=512;let _=d.getContext("2d"),I=8,x=512/I;for(let M=0;M<I;M++)for(let y=0;y<I;y++)_.fillStyle=(M+y)%2?"#7a62c8":"#6c54ba",_.fillRect(M*x,y*x,x,x);let V=3,S=()=>(V=V*16807%2147483647,V/2147483647),E=["#ff9ad0","#ffe08a","#8affd8","#9ad0ff","#ffffff"];for(let M=0;M<90;M++){_.strokeStyle=E[M%5],_.lineWidth=5,_.lineCap="round";let y=S()*512,T=S()*512,z=S()*mi;_.beginPath(),_.moveTo(y,T),_.lineTo(y+Math.cos(z)*12,T+Math.sin(z)*12),_.stroke()}let w=new dn(d);return w.colorSpace=me,w.wrapS=w.wrapT=Mn,w.repeat.set(2,2),w.anisotropy=4,w})(),n=ut(nt.box,new En({map:e,roughness:.75,bumpMap:kt(0).bumpMap,bumpScale:.4,emissive:5913248,emissiveIntensity:.18}),0,-.4,0,It.hx*2+1,.8,It.hy*2+1);t.add(n);let i=ut(nt.box,new En({color:3811968,roughness:.9,emissive:2759264,emissiveIntensity:.3}),0,-.9,0,220,.8,220);t.add(i);let r=[16743096,16769098,8060872,9091327,12618495],a=It.hx+.75,o=It.hy+.75,l=0;for(let d=-a;d<=a;d+=1.5)for(let[_,I]of[[d,-o],[d,o]])t.add(ut(nt.half,kt(r[l++%5],{em:.25}),_,0,I,.8,.75,.8));for(let d=-o+1.5;d<o;d+=1.5)for(let[_,I]of[[-a,d],[a,d]])t.add(ut(nt.half,kt(r[l++%5],{em:.25}),_,0,I,.8,.75,.8));let c=21,h=()=>(c=c*16807%2147483647,c/2147483647),f=[["#ff7ab8","#fff0a8"],["#7affc8","#ffffff"],["#8ab8ff","#ffd0f0"],["#ffd23a","#ff8ad0"]].map(([d,_])=>Fr(d,_));for(let d=0;d<34;d++){let _=d/34*mi+h()*.2,I=20+h()*26,x=Math.cos(_)*I*1.15,V=Math.sin(_)*I;if(Math.abs(x)<14.5&&Math.abs(V)<14.5)continue;let S=4+h()*5,E=new Xt;E.position.set(x,0,V),E.add(ut(nt.cyl,kt(16773368,{em:.35}),0,S/2,0,.18,S,.18));let w=ut(nt.cyl,kt(16777215,{em:.22,map:f[d%4],fresh:!0}),0,S+1.1,0,1.5+h(),.35,1.5+h());w.scale.z=w.scale.x,w.rotation.x=Math.PI/2-.35,w.rotation.y=h()*mi,E.add(w),t.add(E)}for(let d=0;d<22;d++){let _=h()*mi,I=18+h()*30,x=Math.cos(_)*I,V=Math.sin(_)*I;Math.abs(x)<14.5&&Math.abs(V)<14.5||t.add(ut(nt.half,kt(r[d%5],{em:.2}),x,-.2,V,2+h()*3,1.5+h()*2.5,2+h()*3))}for(let[d,_]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let I=new Xt;I.position.set(d*(It.hx+1.8),0,_*(It.hy+1.8));let x=kt(15213626,{em:.3}),V=kt(16777215,{em:.35});for(let E=0;E<8;E++)I.add(ut(nt.cyl,E%2?x:V,0,.4+E*.6,0,.22,.6,.22));I.add(ut(nt.sph,Me(16773288),0,5.2,0,.42));let S=new ms(16769184,14,12,1.5);S.position.y=5.2,I.add(S),t.add(I)}let p=260,m=new Float32Array(p*3);for(let d=0;d<p;d++){let _=h()*mi,I=.15+h()*1.1,x=140;m[d*3]=Math.cos(_)*Math.cos(I)*x,m[d*3+1]=Math.sin(I)*x*.7+10,m[d*3+2]=Math.sin(_)*Math.cos(I)*x}let A=new pe;A.setAttribute("position",new Ae(m,3)),this.starPts=new ui(A,new Gn({color:16774352,size:2.2,map:Or(),transparent:!0,depthWrite:!1,fog:!1,blending:Xe})),t.add(this.starPts);let g=new Jt(nt.sph,new Ye({color:16774872,fog:!1}));g.position.set(-60,55,-110),g.scale.setScalar(9),t.add(g)}_particles3d(){let t=this.scene;this.bitMax=320,this.bits=new yr(new Ir(.13,0),kt(16777215,{em:.35,fresh:!0}),this.bitMax),this.bits.instanceMatrix.setUsage(Hc),this.bits.frustumCulled=!1,this.bits.setColorAt(0,new Et(1,1,1)),t.add(this.bits),this.bitList=[],this._dummy=new _e;for(let n=0;n<this.bitMax;n++)this._dummy.scale.setScalar(0),this._dummy.updateMatrix(),this.bits.setMatrixAt(n,this._dummy.matrix);this.sparkMax=240,this.sparks=[];let e=new pe;this.sparkPos=new Float32Array(this.sparkMax*3).fill(-999),this.sparkCol=new Float32Array(this.sparkMax*3),e.setAttribute("position",new Ae(this.sparkPos,3)),e.setAttribute("color",new Ae(this.sparkCol,3)),this.sparkPts=new ui(e,new Gn({size:.7,vertexColors:!0,map:Or(),transparent:!0,depthWrite:!1,blending:Xe,fog:!1})),this.sparkPts.frustumCulled=!1,t.add(this.sparkPts),this.barGeo=new hi(1,1),this.dotTex=Or()}addBits(t,e,n,i,r,a=4,o=4){let l=new Et(i);for(let c=0;c<r;c++){this.bitList.length>=this.bitMax&&this.bitList.shift();let h=Math.random()*mi,u=a*(.4+Math.random()*.8),f=l.clone().offsetHSL((Math.random()-.5)*.08,0,(Math.random()-.5)*.15);this.bitList.push({x:t,y:e,z:n,vx:Math.cos(h)*u,vy:o*(.5+Math.random()),vz:Math.sin(h)*u,life:.9+Math.random()*.5,age:0,s:.6+Math.random()*.9,rx:Math.random()*6,rv:(Math.random()-.5)*12,c:f})}}addSparks(t,e,n,i,r,a=3){let o=new Et(i);for(let l=0;l<r;l++){this.sparks.length>=this.sparkMax&&this.sparks.shift();let c=Math.random()*mi,h=a*Math.random();this.sparks.push({x:t,y:e,z:n,vx:Math.cos(c)*h,vy:1+Math.random()*a,vz:Math.sin(c)*h,life:.5+Math.random()*.5,age:0,c:o})}}_tickParticles(t){let e=this._dummy,n=0;this.bitList=this.bitList.filter(r=>(r.age+=t,r.age<r.life));for(let r of this.bitList)r.vy-=14*t,r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t,r.y<.1&&(r.y=.1,r.vy*=-.3,r.vx*=.7,r.vz*=.7),r.rx+=r.rv*t,e.position.set(r.x,r.y,r.z),e.rotation.set(r.rx,r.rx*.7,0),e.scale.setScalar(r.s*Math.min(1,(r.life-r.age)*3)),e.updateMatrix(),this.bits.setMatrixAt(n,e.matrix),this.bits.setColorAt(n,r.c),n++;for(;n<this.bitMax;n++)e.scale.setScalar(0),e.updateMatrix(),this.bits.setMatrixAt(n,e.matrix);this.bits.instanceMatrix.needsUpdate=!0,this.bits.instanceColor&&(this.bits.instanceColor.needsUpdate=!0),this.sparks=this.sparks.filter(r=>(r.age+=t,r.age<r.life));let i=0;for(let r of this.sparks){r.vy-=4*t,r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t;let a=1-r.age/r.life;this.sparkPos[i*3]=r.x,this.sparkPos[i*3+1]=r.y,this.sparkPos[i*3+2]=r.z,this.sparkCol[i*3]=r.c.r*a,this.sparkCol[i*3+1]=r.c.g*a,this.sparkCol[i*3+2]=r.c.b*a,i++}for(;i<this.sparkMax;i++)this.sparkPos[i*3+1]=-999;this.sparkPts.geometry.attributes.position.needsUpdate=!0,this.sparkPts.geometry.attributes.color.needsUpdate=!0}decal(t,e,n,i,r=1.2,a=.6,o=!1){let l=new Jt(o?nt.ring:nt.disc,Me(i,a,{side:ze}));l.rotation.x=-Math.PI/2,l.position.set(t,.05,e),l.scale.setScalar(n),l.renderOrder=2,this.scene.add(l),this.decals.push({m:l,life:r,age:0,r:n,o:a,grow:o})}_resize(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.u=Math.min(this.cw,this.ch)/100,this.root.style.setProperty("--u",`${this.u}px`),this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.updateProjectionMatrix()}_camFit(){let t=this.camera.aspect,e=t<1,n=this.camera.fov*Math.PI/360,i=(e?66:58)*Math.PI/180,r=e?8.4:11.5*Math.min(t,1.9),a=e?14:11.5,o=r/(Math.tan(n)*t)+12*Math.cos(i)*.6,l=2*a*Math.sin(i)*1.08/(2*Math.tan(n));return{d:e?o:l,e:i,H:r,Vd:a,portrait:e}}_bind(){let t=this.root,e=()=>{this.sound.unlock()};t.addEventListener("pointerdown",i=>{if(i.target.closest("button")||this.mode!=="play"||this.paused)return;let r=t.getBoundingClientRect();this.stick={id:i.pointerId,ox:i.clientX-r.left,oy:i.clientY-r.top,x:0,y:0},this.stickEl.style.display="block",this.stickEl.style.left=`${this.stick.ox}px`,this.stickEl.style.top=`${this.stick.oy}px`;try{t.setPointerCapture(i.pointerId)}catch{}}),t.addEventListener("pointermove",i=>{let r=this.stick;if(!r||r.id!==i.pointerId)return;let a=t.getBoundingClientRect();r.x=i.clientX-a.left-r.ox,r.y=i.clientY-a.top-r.oy;let o=Math.hypot(r.x,r.y),l=this.u*9,c=o>l?l/o:1;this.knob.style.transform=`translate(${r.x*c}px,${r.y*c}px)`});let n=i=>{e(),this.stick&&this.stick.id===i.pointerId&&(this.stick=null,this.stickEl.style.display="none",this.knob.style.transform="")};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),t.addEventListener("click",e),this._onKey=i=>{let r=i.key.toLowerCase(),a=i.type==="keydown";this.keys[r]=a,a&&(this.sound.unlock(),(r===" "||r==="enter")&&this.mode==="play"&&!this.paused&&(this.superQ=!0),(r==="escape"||r==="p")&&this.mode==="play"&&this.togglePause()),["arrowup","arrowdown","arrowleft","arrowright"," "].includes(r)&&this.mode==="play"&&i.preventDefault()},window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._onVis=()=>{document.hidden?(this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()):this.sound.resume()},document.addEventListener("visibilitychange",this._onVis)}_input(){let t=0,e=0,n=this.stick;if(n){let l=Math.hypot(n.x,n.y),c=this.u*9;if(l>this.u*1.2){let h=Math.min(1,l/c)/l;t=n.x*h,e=n.y*h}}let i=this.keys,r=(i.arrowright||i.d?1:0)-(i.arrowleft||i.a?1:0),a=(i.arrowdown||i.s?1:0)-(i.arrowup||i.w?1:0);if(r||a){let l=Math.hypot(r,a);t=r/l,e=a/l}let o=this.superQ;return this.superQ=!1,{x:t,y:e,super:o}}_clear(){this.layer.replaceChildren(),this.hud=null}_persist(){this.post({type:"save",save:this.save})}_soundPill(){let t=K("button",{class:"gs-soundpill",onclick:()=>this.sound.unlock()},mt.t("tapSound"));this.layer.append(t);let e=()=>{this.root.isConnected&&(t.style.display=!this.sound.ctx||this.sound.on||this.sound.muted?"none":"block",setTimeout(e,600))};e()}_tap(t){return()=>{this.sound.unlock(),this.sound.play("tap"),t()}}showMenu(){var e;this.selStage=Math.min((e=this.selStage)!=null?e:this.save.stage,this.save.stage),this.mode="menu",this._clear(),this._endRunVisuals(),this.root.setAttribute("dir",this.dir),this.sound.mode("calm");let t=this.save.bestStars;this.layer.append(K("div",{class:"gs-menu"},K("div",{style:"display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1)"},K("div",{class:"gs-logo"},mt.t("title")),K("div",{class:"gs-pill"},"\u{1F36C} ",mt.num(this.save.candies),t?` \xB7 ${"\u2B50".repeat(t)}`:"")),K("div",{class:"gs-btns"},K("div",{class:"gs-stagebar"},K("button",{class:"gs-round","aria-label":"-",onclick:this._tap(()=>{this.selStage=Math.max(0,this.selStage-1),this.showMenu()})},"\u25C0"),K("b",{},mt.t("stage")," ",mt.num(this.selStage+1)," / ",mt.num(Dr)),K("button",{class:"gs-round","aria-label":"+",onclick:this._tap(()=>{this.selStage=Math.min(this.save.stage,this.selStage+1),this.showMenu()})},"\u25B6")),K("button",{class:"gs-btn go",onclick:this._tap(()=>this.startRun())},"\u25B6 ",mt.t("play")),K("button",{class:"gs-btn",onclick:this._tap(()=>this.showUpgrades())},"\u{1F36D} ",mt.t("upgrades")),K("button",{class:"gs-btn dark",onclick:this._tap(()=>this.showSettings())},"\u2699 ",mt.t("settings"))),K("button",{class:"gs-round",style:"position:absolute;top:max(calc(var(--u)*2.5),env(safe-area-inset-top));left:calc(var(--u)*3);direction:ltr","aria-label":mt.t("quit"),onclick:this._tap(()=>this.post({type:"exit"}))},"\u2715"))),this._soundPill()}showUpgrades(){this.mode="menu",this._clear();let t=[["damage","\u2694\uFE0F","dmg","dmgD"],["health","\u{1F496}","hp","hpD"],["charge","\u26A1","chg","chgD"]].map(([e,n,i,r])=>{let a=this.save.upgrades[e],o=al(this.save,e),l=o!==null&&this.save.candies>=o,c=K("div",{class:"gs-pips"},...Array.from({length:wn[e].max},(h,u)=>K("i",{class:u<a?"on":""})));return K("div",{class:"gs-urow"},K("div",{class:"gs-uico"},n),K("div",{},K("div",{},mt.t(i)),K("small",{},mt.t(r)),c),K("button",{class:"gs-buy",disabled:!l,onclick:this._tap(()=>{let h=eh(this.save,e);h&&(this.save=h,this._persist(),this.sound.play("mint"),this.showUpgrades())})},o===null?mt.t("max"):`\u{1F36C} ${mt.num(o)}`))});this.layer.append(K("div",{class:"gs-dim"},K("div",{class:"gs-card"},K("div",{class:"gs-title"},mt.t("upgrades")),K("div",{class:"gs-row"},K("span",{},mt.t("total")),K("span",{},"\u{1F36C} ",mt.num(this.save.candies))),K("div",{class:"gs-up"},...t),K("button",{class:"gs-btn dark",onclick:this._tap(()=>this.showMenu())},mt.t("back")))))}showSettings(){this.mode="menu",this._clear();let t=K("button",{class:"gs-btn dark",onclick:this._tap(()=>{this.save.muted=!this.save.muted,this.sound.setMuted(this.save.muted),this._persist(),this.showSettings()})},`\u{1F50A} ${mt.t("sound")}: ${this.save.muted?mt.t("off"):mt.t("on")}`),e=K("button",{class:"gs-btn dark",onclick:this._tap(()=>{this.save.lang=mt.getLang()==="ar"?"en":"ar",mt.setLang(this.save.lang),this._persist(),this.root.setAttribute("dir",this.dir),this.showSettings()})},`\u{1F310} ${mt.t("language")}: ${mt.getLang()==="ar"?"\u0627\u0644\u0639\u0631\u0628\u064A\u0629":"English"}`);this.layer.append(K("div",{class:"gs-dim"},K("div",{class:"gs-card"},K("div",{class:"gs-title"},mt.t("settings")),t,e,K("div",{class:"gs-small"},mt.t("how")),K("button",{class:"gs-btn",onclick:this._tap(()=>this.showMenu())},mt.t("back")))))}startRun(){var t;this._endRunVisuals(),this.run=new Lr({seed:Date.now()&16777215|1,upgrades:this.save.upgrades,easy:this.age<=3,stage:(t=this.selStage)!=null?t:0}),this.mode="play",this.paused=!1,this.shake=0,this.endT=0,this.bossDeadAt=null,this.camInit=!1,this.hintShown=0,this.sound.mode("calm"),this._clear(),this._buildHud(),this.banner(`${mt.t("wave")} ${mt.num(1)}`),this.hint(mt.t("how"),4200)}_endRunVisuals(){for(let t of Object.values(this.maps)){for(let e of t.values())this.scene.remove(e.g||e);t.clear()}this.bossVis.visible=!1,this.run=null;for(let t of this.decals)this.scene.remove(t.m);this.decals=[],this.bitList=[],this.sparks=[],this.bearVis.forEach(t=>{t.userData.ring.visible=!1})}_buildHud(){let t=_s.map((n,i)=>{let r=K("b"),a=K("div",{class:"gs-hp"},r);return{el:K("div",{class:"gs-por"},K("div",{class:"gs-face",style:`background:${Lm[i]}`},K("i"),K("i"),K("b"),K("b"),K("u")),a),hp:r,bar:a}});this.hud={por:t,last:[]},this.candyEl=K("span",{},"0"),this.waveEl=K("span",{});let e=K("button",{class:"gs-round","aria-label":mt.t("paused"),onclick:this._tap(()=>this.togglePause())},"\u23F8");this.superBtn=K("button",{class:"gs-super",onclick:n=>{n.stopPropagation(),this.superQ=!0}},K("span",{},K("i",{},"\u{1F36C}"),mt.t("super"))),this.bossHp=K("b"),this.bossBarEl=K("div",{class:"gs-bossbar"},K("div",{},"\u{1F369} ",mt.t("boss")),K("div",{class:"gs-hp",style:"width:100%"},this.bossHp)),this.bannerEl=K("div",{class:"gs-banner"}),this.hintEl=K("div",{class:"gs-hint",style:"top:calc(var(--u)*24)"}),this.knob=K("i"),this.stickEl=K("div",{class:"gs-stick"},this.knob),this.layer.append(this.stickEl,K("div",{class:"gs-hud"},K("div",{class:"gs-top"},e,K("div",{class:"gs-pill"},"\u{1F36C} ",this.candyEl),K("div",{class:"gs-pill"},this.waveEl)),this.bossBarEl,K("div",{class:"gs-portraits"},...t.map(n=>n.el)),this.superBtn,this.bannerEl,this.hintEl)),this._soundPill()}banner(t,e=1800){this.bannerEl&&(this.bannerEl.textContent=t,this.bannerEl.classList.add("show"),clearTimeout(this._bt),this._bt=setTimeout(()=>this.bannerEl&&this.bannerEl.classList.remove("show"),e))}hint(t,e=3e3){this.hintEl&&(this.hintEl.textContent=t,this.hintEl.classList.add("show"),clearTimeout(this._ht),this._ht=setTimeout(()=>this.hintEl&&this.hintEl.classList.remove("show"),e))}togglePause(){this.mode!=="play"||this.run&&this.run.over||(this.paused=!this.paused,this.paused?(this.stick=null,this.stickEl&&(this.stickEl.style.display="none"),this.pauseEl=K("div",{class:"gs-dim"},K("div",{class:"gs-card"},K("div",{class:"gs-title"},mt.t("paused")),K("button",{class:"gs-btn go",onclick:this._tap(()=>this.togglePause())},"\u25B6 ",mt.t("resume")),K("button",{class:"gs-btn dark",onclick:this._tap(()=>{this.paused=!1,this.startRun()})},"\u{1F504} ",mt.t("restart")),K("button",{class:"gs-btn dark",onclick:this._tap(()=>{this.paused=!1,this.showMenu()})},"\u{1F3E0} ",mt.t("home")))),this.layer.append(this.pauseEl)):this.pauseEl&&this.pauseEl.remove())}_end(){let e=this.run.result;this.endShown=!0,this.save=nh(this.save,e),this._persist(),this.sound.mode("calm"),this.sound.play(e.win?"win":"lose");let n=K("div",{class:"gs-stars"},...[0,1,2].map(i=>K("span",{class:i<e.stars?"":"off"},"\u2B50")));this.layer.append(K("div",{class:"gs-dim"},K("div",{class:"gs-card"},K("div",{class:"gs-title",style:"font-size:calc(var(--u)*6.5)"},mt.t(e.win?"won":"lost")),e.win?n:null,K("div",{class:"gs-row"},K("span",{},mt.t("earned")),K("span",{},"\u{1F36C} ",mt.num(e.candies))),e.win?K("div",{class:"gs-row"},K("span",{},mt.t("bonus")),K("span",{},"\u{1F36C} ",mt.num(e.bonus))):null,K("div",{class:"gs-row"},K("span",{},mt.t("total")),K("span",{},"\u{1F36C} ",mt.num(this.save.candies))),e.win&&this.selStage<this.save.stage?K("button",{class:"gs-btn go",onclick:this._tap(()=>{this.endShown=!1,this.selStage+=1,this.startRun()})},"\u25B6 ",mt.t("nextStage")):null,K("button",{class:"gs-btn go",onclick:this._tap(()=>{this.endShown=!1,this.startRun()})},"\u25B6 ",mt.t("again")),K("button",{class:"gs-btn",onclick:this._tap(()=>{this.endShown=!1,this.showUpgrades()})},"\u{1F36D} ",mt.t("upgrades")),K("button",{class:"gs-btn dark",onclick:this._tap(()=>{this.endShown=!1,this.showMenu()})},"\u{1F3E0} ",mt.t("home"))))),this.mode="result"}_frame(){let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.clock+=e;let n=this.run;n&&this.mode==="play"&&!this.paused&&(n.step(e,n.over?{}:this._input()),this._events(n.drain()),this._hudUpdate(),n.over&&!this.endShown&&(this.endT+=e,this.endT>(n.state==="won"?2.6:1.6)&&this._end())),this._sync(e),this._tickParticles(this.paused?0:e),this._camera(e),this.starPts.material.opacity=.75+Math.sin(this.clock*1.7)*.2,this.renderer.render(this.scene,this.camera)}_hudUpdate(){let t=this.run;if(!this.hud)return;this.candyEl.textContent=mt.num(t.candies),this.waveEl.textContent=t.bossFight||t.boss?mt.t("boss"):`${mt.t("wave")} ${mt.num(t.wave+1)}/${mt.num(2)}`,t.bears.forEach((n,i)=>{let r=this.hud.por[i],a=n.hp/n.maxHp,o=`${Math.round(a*100)}%`;this.hud.last[i]!==o&&(r.hp.style.width=o,this.hud.last[i]=o,r.bar.classList.toggle("low",a<.34)),r.el.classList.toggle("down",!n.alive)});let e=Math.round(t.charge);this._pct!==e&&(this._pct=e,this.superBtn.style.setProperty("--p",`${e}%`),this.superBtn.classList.toggle("ready",e>=100)),t.boss&&(this.bossBarEl.style.display="flex",this.bossHp.style.width=`${Math.max(0,t.boss.hp/t.boss.maxHp*100)}%`)}_throttle(t,e){let n=performance.now();return this._th=this._th||{},n-(this._th[t]||0)<e?!1:(this._th[t]=n,!0)}_events(t){let e=this.sound;for(let n of t)switch(n.type){case"swing":e.play("straw"),this.bearVis[0].userData.kick=1;{let i=n.a;this.addSparks(n.x+Math.cos(i)*2,1,n.y+Math.sin(i)*2,16751288,6,2)}break;case"shoot":e.play(n.idx===1?"lime":"blue"),this.bearVis[n.idx].userData.kick=1;break;case"hit":this._throttle("hit",70)&&e.play("hit"),this.addSparks(n.x,1.2,n.y,16777215,2,2);break;case"impact":n.kind==="magic"?(e.play("limeBoom"),this.addSparks(n.x,1,n.y,11599722,12,4),this.decal(n.x,n.y,1.7,11599722,.35,.4)):n.kind==="gum"?(this._throttle("imp",60)&&e.play("impact"),this.addSparks(n.x,1,n.y,9091327,3,2)):this.addSparks(n.x,1,n.y,12618495,5,2);break;case"crumble":{e.play("crumble");let i=n.kind==="boss"?16739e3:sn[n.kind].color;this.addBits(n.x,.8,n.y,i,n.kind==="tank"?22:12,5,5),this.addBits(n.x,.8,n.y,16777215,4,4,4),this.addSparks(n.x,1,n.y,i,14,4);break}case"candy":this._throttle("candy",50)&&e.play("candy");break;case"mintDrop":this.hint(mt.t("mintHint"),3500),e.play("warn");break;case"revive":e.play("revive"),this.addSparks(n.x,1,n.y,9109464,30,5),this.decal(n.x,n.y,2.4,9109464,.7,.6,!0);break;case"heal":e.play("mint"),this.addSparks(this.squad().x,1,this.squad().y,9109464,20,4);break;case"bearHit":e.play("bearHit"),this.shake=Math.max(this.shake,.25),this.addSparks(n.x,1.2,n.y,16734826,6,3);break;case"bearDown":e.play("bearDown"),this.addBits(n.x,.8,n.y,_s[n.idx].color,14,3,4),this.shake=.5;break;case"wave":n.n>1&&(this.banner(`${mt.t("wave")} ${mt.num(n.n)}`),e.play("wave"));break;case"waveClear":e.play("wave");break;case"spit":e.play("spit");break;case"fuse":e.play("warn");break;case"rainWarn":case"chargeWarn":case"summonWarn":e.play("warn"),n.type==="chargeWarn"&&(e.play("roar"),this.hint(mt.t("dodge"),2200));break;case"rain":e.play("warn");break;case"chargeGo":e.play("charge");break;case"splat":e.play("splat"),this.addBits(n.x,.5,n.y,16739e3,14,4,4),this.decal(n.x,n.y,n.r,16739e3,5,.38),this.shake=Math.max(this.shake,.15);break;case"blast":e.play("blast"),this.addBits(n.x,.5,n.y,16753210,18,6,5),this.addSparks(n.x,1,n.y,16769098,24,6),this.decal(n.x,n.y,n.r,3811888,6,.35),this.shake=Math.max(this.shake,.4);break;case"bossSlam":e.play("slam"),this.shake=.9,this.addBits(n.x,.8,n.y,14195290,16,6,6);break;case"bossIntro":e.mode("battle"),e.play("roar"),this.banner(mt.t("bossIntro"),2400);break;case"bossLand":e.play("slam"),this.shake=1,this.addBits(n.x,.8,n.y,16739e3,24,7,6);break;case"phase":e.play("roar"),this.shake=.7;break;case"summon":e.play("roar"),this.addSparks(n.x,2,n.y,16739e3,24,5);break;case"super":e.play("super"),this.banner(mt.t("super"),900);break;case"jawLand":e.play("superBoom"),this.shake=1.4,this.addBits(n.x,1,n.y,16747216,40,9,8),this.addBits(n.x,1,n.y,7006975,24,8,8),this.addSparks(n.x,1,n.y,16777215,40,9),this.decal(n.x,n.y,n.r,16777215,.6,.7,!0),this.decal(n.x,n.y,n.r*.9,16747216,6,.3);break;case"bossDown":this.bossDeadAt=this.clock,e.play("roar"),this.shake=1.2,this.addBits(n.x,1.5,n.y,16739e3,60,8,8),this.addBits(n.x,1.5,n.y,14195290,40,8,8),this.addSparks(n.x,2,n.y,16769098,60,8),this.bossBarEl.style.display="none";break;case"won":this.banner("\u{1F389}",2400);break;default:break}}squad(){return this.run?this.run.squad:{x:0,y:0}}_bar(t,e,n){let i=new Xt,r=ut(this.barGeo,Me(1706560,.7),0,0,0,e,.18),a=ut(this.barGeo,Me(16738954),0,0,.01,e,.18);return i.add(r,a),i.position.y=n,i.visible=!1,t.add(i),{g:i,fg:a,w:e}}_setBar(t,e){t.g.visible=e<.999&&e>0,t.fg.scale.x=Math.max(.001,e*t.w),t.fg.position.x=-(t.w-e*t.w)/2,t.g.quaternion.copy(this.camera.quaternion)}_sync(t){let e=this.run,n=this.clock;if(!e){this._showcase(n);return}let i=e.squad;e.bears.forEach((h,u)=>{let f=this.bearVis[u],p=f.userData;f.visible=!0,f.position.x=h.x,f.position.z=h.y,f.rotation.y=Math.PI/2-(h.hasTarget||!i.moving?h.aim:i.face);let m=i.moving&&h.alive,A=m?Math.abs(Math.sin(n*11+u))*.16:Math.sin(n*2.5+u)*.025;if(p.kick=Math.max(0,p.kick-t*5),h.alive){p.body.scale.set(1,1,1),p.body.position.y=A,p.body.rotation.z=m?Math.sin(n*11+u)*.08:0,p.legs[0].rotation.x=m?Math.sin(n*11+u)*.7:0,p.legs[1].rotation.x=m?-Math.sin(n*11+u)*.7:0,p.arms[0].rotation.x=m?-Math.sin(n*11+u)*.5:0;let g=h.def.role;g==="melee"?p.arms[1].rotation.x=-1.2+(h.swing>0?(1-h.swing/.28)*2.3:0):p.arms[1].rotation.x=-1.35+p.kick*.3,p.weapon.position.z=(g==="melee"?.05:.1)-p.kick*.15,p.weapon.userData.orb&&p.weapon.userData.orb.scale.setScalar(.2+Math.sin(n*6)*.03+p.kick*.1),p.mat.emissiveIntensity=.2+(h.flash>0?.9:0)+(h.inv>0&&h.inv<1.4&&Math.floor(n*14)%2?.4:0),p.pale.emissiveIntensity=p.mat.emissiveIntensity,p.ring.visible=!1,p.weapon.visible=!0,f.scale.setScalar(1.15)}else p.body.scale.set(1.25,.22,1.25),p.body.position.y=0,p.body.rotation.z=0,p.weapon.visible=!1,p.arms.forEach(g=>g.rotation.x=0),p.mat.emissiveIntensity=.05,p.ring.visible=!0,p.ring.scale.setScalar(1.1+Math.sin(n*4)*.25),f.scale.setScalar(1.15)}),this.glow.position.set(i.x,5,i.y);let r=new Set;for(let h of e.enemies){if(h.hp<=0)continue;r.add(h.id);let u=this.maps.enemies.get(h.id);if(!u){let _=uh(h.kind);_.userData.bar=this._bar(_,sn[h.kind].r*1.8,sn[h.kind].r*2.1+.4),this.scene.add(_),u={g:_},this.maps.enemies.set(h.id,u),this.addSparks(h.x,.6,h.y,sn[h.kind].color,8,2)}let f=u.g,p=f.userData,m=Math.min(1,h.age/.4),A=m<1?1-Math.pow(1-m,3)*Math.cos(m*9)*.35-(1-m)*.65:1;f.position.set(h.x,0,h.y),f.rotation.y=Math.PI/2-h.aim;let g=Math.abs(Math.sin(h.age*(h.kind==="sour"?14:8)))*.18;p.body.position.y=g,p.body.rotation.z=Math.sin(h.age*8)*.1;let d=Math.max(.05,A)*(h.flash>0?1.12:1);h.fuse>0&&(d*=1+Math.sin(h.age*40)*.08),h.wind>0&&(d*=1+(.55-h.wind)*.3),f.scale.setScalar(d),p.mat.emissiveIntensity=h.flash>0?1:h.fuse>0?.4+Math.sin(h.age*40)*.4:h.wind>0?.6:.14,this._setBar(p.bar,h.hp/h.maxHp)}for(let[h,u]of this.maps.enemies)r.has(h)||(this.scene.remove(u.g),this.maps.enemies.delete(h));this._syncBoss(e,t);let a=new Set;for(let h of e.projectiles){a.add(h);let u=this.maps.projs.get(h);if(!u){let f=h.kind==="gum"?9091327:h.kind==="magic"?11599722:12611839,p=new Xt;p.add(ut(nt.sph,Me(f),0,0,0,h.kind==="magic"?.34:.24)),p.add(ut(nt.sph,Me(f,.3,{blending:Xe}),0,0,0,h.kind==="magic"?.7:.45)),this.scene.add(p),u={g:p},this.maps.projs.set(h,u)}u.g.position.set(h.x,1,h.y),h.kind==="magic"&&Math.random()<.5&&this.addSparks(h.x,1,h.y,13696906,1,.5)}for(let[h,u]of this.maps.projs)a.has(h)||(this.scene.remove(u.g),this.maps.projs.delete(h));let o=new Set;for(let h of e.hazards){if(h.done)continue;o.add(h);let u=this.maps.hazards.get(h);u||(u=this._makeHazard(h),this.maps.hazards.set(h,u)),this._updHazard(h,u,n)}for(let[h,u]of this.maps.hazards)o.has(h)||(this.scene.remove(u.g),this.maps.hazards.delete(h));let l=new Set;for(let h of e.jaws){l.add(h);let u=this.maps.jaws.get(h);if(!u){let p=new Xt,m=gh();p.add(m);let A=new Jt(nt.ring,Me(16777215,.7,{side:ze}));A.rotation.x=-Math.PI/2,A.position.y=.07,A.scale.setScalar(h.r),p.add(A);let g=new Jt(nt.disc,Me(16747216,.3));g.rotation.x=-Math.PI/2,g.position.y=.06,p.add(g),p.userData={ball:m,fill:g},this.scene.add(p),u={g:p},this.maps.jaws.set(h,u)}let f=Zn(h.t/h.delay,0,1);u.g.position.set(h.x,0,h.y),u.g.userData.ball.position.y=2.2+(1-f*f)*24,u.g.userData.ball.rotation.x=n*3,u.g.userData.fill.scale.setScalar(h.r*f)}for(let[h,u]of this.maps.jaws)l.has(h)||(this.scene.remove(u.g),this.maps.jaws.delete(h));let c=new Set;for(let h of e.pickups){c.add(h);let u=this.maps.picks.get(h);if(!u){let p=h.type==="mint"?ph():fh(h.hue);this.scene.add(p),u={g:p},this.maps.picks.set(h,u)}let f=Math.sin(n*5+h.x)*.12;u.g.position.set(h.x,(h.type==="mint"?.9:.4)+f+Math.max(0,.6-h.t*2)*1.2,h.y),h.type==="mint"?(u.g.userData.disc.rotation.z=n*2,u.g.userData.ground.scale.setScalar(.9+Math.sin(n*5)*.15),u.g.userData.ground.position.y=-.8-f,u.g.scale.setScalar(h.life<5&&Math.floor(n*8)%2?.5:1)):u.g.rotation.y=n*4+h.x}for(let[h,u]of this.maps.picks)c.has(h)||(this.scene.remove(u.g),this.maps.picks.delete(h));this.decals=this.decals.filter(h=>{h.age+=t;let u=h.age/h.life;return u>=1?(this.scene.remove(h.m),!1):(h.m.material.opacity=h.o*(1-u*u),h.grow&&h.m.scale.setScalar(h.r*(.6+u*.6)),!0)})}_makeHazard(t){let e=new Xt;if(t.kind==="path"){let n=ch("#ff2a5a","#ffd0d8",8);n.repeat.set(1,Math.max(2,Math.round(t.len/3))),n.wrapS=n.wrapT=Mn;let i=new Jt(new hi(t.width,t.len),new Ye({map:n,transparent:!0,opacity:.45,depthWrite:!1}));i.rotation.x=-Math.PI/2;let r=new Xt;r.position.set(t.x+t.dx*t.len/2,.07,t.y+t.dy*t.len/2),r.rotation.y=Math.atan2(-t.dx,-t.dy),r.add(i),e.add(r),e.userData={path:i,tex:n}}else{let n=t.kind==="blast"?16747050:16726650,i=new Jt(nt.disc,Me(n,.28));i.rotation.x=-Math.PI/2,i.position.y=.06,i.scale.setScalar(t.r);let r=new Jt(nt.disc,Me(n,.5));r.rotation.x=-Math.PI/2,r.position.y=.07,r.scale.setScalar(.01);let a=new Jt(nt.ring,Me(16777215,.9,{side:ze}));a.rotation.x=-Math.PI/2,a.position.y=.08,a.scale.setScalar(t.r),e.add(i,r,a);let o=null;t.kind==="circle"&&(o=ut(nt.sph,kt(16739e3,{rough:.3,em:.5}),0,20,0,.7,.95,.7),e.add(o)),e.userData={fill:r,edge:a,drop:o}}return e.position.set(t.kind==="path"?0:t.x,0,t.kind==="path"?0:t.y),this.scene.add(e),{g:e}}_updHazard(t,e,n){let i=Zn(t.t/t.warn,0,1),r=e.g.userData;if(t.kind==="path"){r.path.material.opacity=.3+i*.35+(Math.sin(n*18)>0?.08:0),r.tex.offset.y=-n*1.5;return}r.fill.scale.setScalar(Math.max(.01,t.r*i)),r.edge.material.opacity=.5+(Math.sin(n*(10+i*14))>0?.4:0),r.drop&&(r.drop.position.y=.6+(1-i*i*i)*20,r.drop.scale.set(.7,.95+(1-i)*.3,.7))}_syncBoss(t,e){var p;let n=t.boss,i=this.bossVis,r=this.clock;if(!n){i.visible=!1;return}let a=i.userData;if(n.state==="dead"){let m=Zn((r-((p=this.bossDeadAt)!=null?p:r))/.9,0,1);i.visible=m<1,i.scale.setScalar(Math.max(.01,1-m)),i.rotation.y+=e*10,i.position.y=0;return}i.visible=!0,i.scale.setScalar(1),this.bossBar||(this.bossBar=this._bar(i,4,4.4));let o=0,l=-1,c=0,h=0,u=n.phase;if(n.state==="intro"){let m=Zn(n.t/2.6,0,1);o=(1-m*m)*26,a.shadow.scale.setScalar(.4+m*2.2)}else a.shadow.scale.setScalar(2.4);n.state==="windCharge"&&(l=-1*(1-Zn(n.t/.5,0,1)),c=Math.PI/2-n.dir+Math.PI/2,i.position.x=n.x+Math.sin(r*60)*.08),n.state==="charge"&&(l=0,c=Math.PI/2-n.dir+Math.PI/2,h=1,Math.random()<.6&&this.addBits(n.x,.2,n.y,14195290,1,2,1.5)),n.state==="rain"&&(o=Math.abs(Math.sin(Zn(n.t/.55,0,1)*Math.PI))*1.8),n.state==="summon"&&(l=-1+Math.sin(n.t*20)*.1),n.state==="idle"&&(o=Math.abs(Math.sin(r*5))*.35,c=Math.sin(r*2)*.25),a.lean.rotation.x+=(l-a.lean.rotation.x)*Math.min(1,e*8),i.rotation.y=c,h?a.ring.rotation.z-=e*14:a.ring.rotation.z*=.85,i.position.set(n.state==="windCharge"?n.x+Math.sin(r*60)*.08:n.x,o+(a.lean.rotation.x>-.5,0),n.y),a.lean.position.y=1+(1-Math.abs(a.lean.rotation.x))*.9;let f=n.flash>0?.9:u===3?.28+Math.sin(r*12)*.12:.1;a.dough.emissiveIntensity=f,a.glaze.emissiveIntensity=f+.12,a.stars.visible=n.state==="stun",a.stars.visible&&(a.stars.rotation.y=r*4),this._setBar(this.bossBar,n.hp/n.maxHp),this.bossBar.g.visible=!1}_showcase(t){this.bossVis.visible=!1;let e=[-2.9,0,2.9],n=[.6,-.4,.6];this.bearVis.forEach((i,r)=>{i.visible=!0,i.position.set(e[r],0,n[r]),i.scale.setScalar(1.55),i.rotation.y=Math.sin(t*.8+r)*.25;let a=i.userData;a.body.scale.set(1,1,1),a.weapon.visible=!0,a.ring.visible=!1,a.body.position.y=Math.abs(Math.sin(t*2.4+r*1.3))*.18,a.arms[1].rotation.x=-1.2+Math.sin(t*3+r)*.35,a.arms[0].rotation.x=Math.sin(t*3+r+1)*.3,a.mat.emissiveIntensity=.2,a.pale.emissiveIntensity=.2}),this.glow.position.set(0,5,3)}_camera(t){let e=this.camera,n=this.run;if(!n){let m=Math.sin(this.clock*.25)*.35,A=e.aspect<1,g=A?18:11.5;e.position.set(Math.sin(m)*g,A?7.5:4.2,Math.cos(m)*g+1),e.lookAt(0,A?.2:1.1,.4),e.fov=50,e.updateProjectionMatrix();return}let i=this._camFit(),r=n.squad;e.fov!==48&&(e.fov=48,e.updateProjectionMatrix());let a=(m,A)=>Zn(m,-Math.max(0,It.hx+1.4-A),Math.max(0,It.hx+1.4-A)),o=n.boss&&n.boss.state!=="dead"?n.boss:null,l=o?r.x+(o.x-r.x)*.4:r.x,c=o?r.y+(o.y-r.y)*.4:r.y,h=a(l,i.H),u=i.portrait?Zn(c*.5,-5,5):a(c,i.Vd);this.camInit||(this.camTarget.set(h,0,u),this.camInit=!0),this.camTarget.x+=(h-this.camTarget.x)*Math.min(1,t*5),this.camTarget.z+=(u-this.camTarget.z)*Math.min(1,t*5),this.shake=Math.max(0,this.shake-t*2.2);let f=this.shake*.45,p=i.d*.86;e.position.set(this.camTarget.x+(Math.random()-.5)*f,Math.sin(i.e)*p,this.camTarget.z+Math.cos(i.e)*p+(Math.random()-.5)*f),e.lookAt(this.camTarget.x,0,this.camTarget.z)}pause(){this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()}dispose(){this.renderer.setAnimationLoop(null),this.sound.dispose(),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}this.root.remove()}},fl={start(s,t,e){let n=new dl(s,t||{},e);return fl.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.GummySquad=fl;var B0=fl;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
