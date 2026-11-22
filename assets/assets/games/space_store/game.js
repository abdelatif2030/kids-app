(()=>{var qo="170";var Rh=0,vc=1,Ph=2;var Tl=1,Uh=2,mn=3,Fn=0,De=1,Ge=2,Ln=0,bi=1,er=2,_c=3,yc=4,Dh=5,Qn=100,Lh=101,Nh=102,Fh=103,Bh=104,zh=200,Oh=201,kh=202,Hh=203,va=204,_a=205,Gh=206,qh=207,Wh=208,Xh=209,Yh=210,Zh=211,Kh=212,Qh=213,Jh=214,ya=0,Ia=1,Ma=2,Vi=3,Sa=4,ba=5,Ea=6,wa=7,Wo=0,jh=1,$h=2,Nn=0,tu=1,eu=2,nu=3,Xo=4,iu=5,su=6,ru=7;var Vl=300,Ri=301,Pi=302,Ta=303,Va=304,Tr=306,Ui=1e3,$n=1001,Ra=1002,Je=1003,au=1004;var Is=1005;var sn=1006,Or=1007;var ti=1008;var _n=1009,Rl=1010,Pl=1011,hs=1012,Yo=1013,ei=1014,xn=1015,As=1016,Zo=1017,Ko=1018,Di=1020,Ul=35902,Dl=1021,Ll=1022,Qe=1023,Nl=1024,Fl=1025,Ei=1026,Li=1027,Bl=1028,Qo=1029,zl=1030,Jo=1031;var jo=1033,Qs=33776,Js=33777,js=33778,$s=33779,Pa=35840,Ua=35841,Da=35842,La=35843,Na=36196,Fa=37492,Ba=37496,za=37808,Oa=37809,ka=37810,Ha=37811,Ga=37812,qa=37813,Wa=37814,Xa=37815,Ya=37816,Za=37817,Ka=37818,Qa=37819,Ja=37820,ja=37821,tr=36492,$a=36494,to=36495,Ol=36283,eo=36284,no=36285,io=36286;var nr=2300,so=2301,kr=2302,Ic=2400,Mc=2401,Sc=2402;var ou=3200,cu=3201;var kl=0,lu=1,Dn="",Ce="srgb",Gi="srgb-linear",Vr="linear",Qt="srgb";var hi=7680;var bc=519,hu=512,uu=513,du=514,Hl=515,fu=516,pu=517,gu=518,mu=519,Ec=35044;var wc="300 es",Cn=2e3,ir=2001,Bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Hr=Math.PI/180,ro=180/Math.PI;function qi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function Au(i,t){return(i%t+t)%t}function Gr(i,t,e){return(1-e)*i+e*t}function $i(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var pt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],A=s[0],g=s[3],p=s[6],S=s[1],I=s[4],v=s[7],L=s[2],b=s[5],E=s[8];return r[0]=a*A+o*S+c*L,r[3]=a*g+o*I+c*b,r[6]=a*p+o*v+c*E,r[1]=l*A+h*S+d*L,r[4]=l*g+h*I+d*b,r[7]=l*p+h*v+d*E,r[2]=u*A+f*S+m*L,r[5]=u*g+f*I+m*b,r[8]=u*p+f*v+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=d*A,t[1]=(s*l-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=u*A,t[4]=(h*e-s*c)*A,t[5]=(s*r-o*e)*A,t[6]=f*A,t[7]=(n*c-l*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(qr.makeScale(t,e)),this}rotate(t){return this.premultiply(qr.makeRotation(-t)),this}translate(t,e){return this.premultiply(qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},qr=new Pt;function Gl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xu(){let i=sr("canvas");return i.style.display="block",i}var Tc={};function ss(i){i in Tc||(Tc[i]=!0,console.warn(i))}function Cu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function vu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _u(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Wt={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(i.r=vn(i.r),i.g=vn(i.g),i.b=vn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(i.r=wi(i.r),i.g=wi(i.g),i.b=wi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Dn?Vr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vc=[.64,.33,.3,.6,.15,.06],Rc=[.2126,.7152,.0722],Pc=[.3127,.329],Uc=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dc=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[Gi]:{primaries:Vc,whitePoint:Pc,transfer:Vr,toXYZ:Uc,fromXYZ:Dc,luminanceCoefficients:Rc,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:Vc,whitePoint:Pc,transfer:Qt,toXYZ:Uc,fromXYZ:Dc,luminanceCoefficients:Rc,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}});var ui,ao=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ui===void 0&&(ui=sr("canvas")),ui.width=t.width,ui.height=t.height;let n=ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=sr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vn(e[n]/255)*255):e[n]=vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},yu=0,rr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=qi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wr(s[a].image)):r.push(Wr(s[a]))}else r=Wr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ao.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Iu=0,Be=class i extends Bn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$n,s=$n,r=sn,a=ti,o=Qe,c=_n,l=i.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=qi(),this.name="",this.source=new rr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ui:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case Ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ui:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case Ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=Vl;Be.DEFAULT_ANISOTROPY=1;var ue=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],m=c[9],A=c[2],g=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-A)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+A)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(l+1)/2,v=(f+1)/2,L=(p+1)/2,b=(h+u)/4,E=(d+A)/4,D=(m+g)/4;return I>v&&I>L?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=b/n,r=E/n):v>L?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=D/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=E/r,s=D/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(d-A)*(d-A)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(d-A)/S,this.z=(u-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oo=class extends Bn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Be(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new rr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends oo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ar=class extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var co=class extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=A;return}if(d!==A||c!==u||l!==f||h!==m){let g=1-o,p=c*u+l*f+h*m+d*A,S=p>=0?1:-1,I=1-p*p;if(I>Number.EPSILON){let L=Math.sqrt(I),b=Math.atan2(L,p*S);g=Math.sin(g*b)/L,o=Math.sin(o*b)/L}let v=o*S;if(c=c*g+u*v,l=l*g+f*v,h=h*g+m*v,d=d*g+A*v,g===1-o){let L=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=L,l*=L,h*=L,d*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*d+c*f-l*u,t[e+1]=c*m+h*u+l*d-o*f,t[e+2]=l*m+h*f+o*u-c*d,t[e+3]=h*m-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"YZX":this._x=u*h*d+l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d-u*f*m;break;case"XZY":this._x=u*h*d-l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xr.copy(this).projectOnVector(t),this.sub(Xr)}reflect(t){return this.sub(Xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xr=new R,Lc=new zn,ni=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ye):Ye.fromBufferAttribute(r,a),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ms.copy(n.boundingBox)),Ms.applyMatrix4(t.matrixWorld),this.union(Ms)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ts),Ss.subVectors(this.max,ts),di.subVectors(t.a,ts),fi.subVectors(t.b,ts),pi.subVectors(t.c,ts),wn.subVectors(fi,di),Tn.subVectors(pi,fi),Gn.subVectors(di,pi);let e=[0,-wn.z,wn.y,0,-Tn.z,Tn.y,0,-Gn.z,Gn.y,wn.z,0,-wn.x,Tn.z,0,-Tn.x,Gn.z,0,-Gn.x,-wn.y,wn.x,0,-Tn.y,Tn.x,0,-Gn.y,Gn.x,0];return!Yr(e,di,fi,pi,Ss)||(e=[1,0,0,0,1,0,0,0,1],!Yr(e,di,fi,pi,Ss))?!1:(bs.crossVectors(wn,Tn),e=[bs.x,bs.y,bs.z],Yr(e,di,fi,pi,Ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},un=[new R,new R,new R,new R,new R,new R,new R,new R],Ye=new R,Ms=new ni,di=new R,fi=new R,pi=new R,wn=new R,Tn=new R,Gn=new R,ts=new R,Ss=new R,bs=new R,qn=new R;function Yr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qn.fromArray(i,r);let o=s.x*Math.abs(qn.x)+s.y*Math.abs(qn.y)+s.z*Math.abs(qn.z),c=t.dot(qn),l=e.dot(qn),h=n.dot(qn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Mu=new ni,es=new R,Zr=new R,Ni=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Mu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;es.subVectors(t,this.center);let e=es.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(es.copy(t.center).add(Zr)),this.expandByPoint(es.copy(t.center).sub(Zr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},dn=new R,Kr=new R,Es=new R,Vn=new R,Qr=new R,ws=new R,Jr=new R,or=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Kr.copy(t).add(e).multiplyScalar(.5),Es.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(Kr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Es),o=Vn.dot(this.direction),c=-Vn.dot(Es),l=Vn.lengthSq(),h=Math.abs(1-a*a),d,u,f,m;if(h>0)if(d=a*c-o,u=a*o-c,m=r*h,d>=0)if(u>=-m)if(u<=m){let A=1/h;d*=A,u*=A,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Kr).addScaledVector(Es,u),f}intersectSphere(t,e){dn.subVectors(t.center,this.origin);let n=dn.dot(this.direction),s=dn.dot(dn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,s,r){Qr.subVectors(e,t),ws.subVectors(n,t),Jr.crossVectors(Qr,ws);let a=this.direction.dot(Jr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,t);let c=o*this.direction.dot(ws.crossVectors(Vn,ws));if(c<0)return null;let l=o*this.direction.dot(Qr.cross(Vn));if(l<0||c+l>a)return null;let h=-o*Vn.dot(Jr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class i{constructor(t,e,n,s,r,a,o,c,l,h,d,u,f,m,A,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,u,f,m,A,g)}set(t,e,n,s,r,a,o,c,l,h,d,u,f,m,A,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=A,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/gi.setFromMatrixColumn(t,0).length(),r=1/gi.setFromMatrixColumn(t,1).length(),a=1/gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,m=o*h,A=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+m*l,e[5]=u-A*l,e[9]=-o*c,e[2]=A-u*l,e[6]=m+f*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,m=l*h,A=l*d;e[0]=u+A*o,e[4]=m*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=A+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,m=l*h,A=l*d;e[0]=u-A*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=A-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,f=a*d,m=o*h,A=o*d;e[0]=c*h,e[4]=m*l-f,e[8]=u*l+A,e[1]=c*d,e[5]=A*l+u,e[9]=f*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,f=a*l,m=o*c,A=o*l;e[0]=c*h,e[4]=A-u*d,e[8]=m*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+m,e[10]=u-A*d}else if(t.order==="XZY"){let u=a*c,f=a*l,m=o*c,A=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+A,e[5]=a*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*h,e[10]=A*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Su,t,bu)}lookAt(t,e,n){let s=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Rn.crossVectors(n,Ne),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Rn.crossVectors(n,Ne)),Rn.normalize(),Ts.crossVectors(Ne,Rn),s[0]=Rn.x,s[4]=Ts.x,s[8]=Ne.x,s[1]=Rn.y,s[5]=Ts.y,s[9]=Ne.y,s[2]=Rn.z,s[6]=Ts.z,s[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],A=n[6],g=n[10],p=n[14],S=n[3],I=n[7],v=n[11],L=n[15],b=s[0],E=s[4],D=s[8],y=s[12],_=s[1],w=s[5],O=s[9],z=s[13],G=s[2],K=s[6],q=s[10],$=s[14],H=s[3],it=s[7],lt=s[11],_t=s[15];return r[0]=a*b+o*_+c*G+l*H,r[4]=a*E+o*w+c*K+l*it,r[8]=a*D+o*O+c*q+l*lt,r[12]=a*y+o*z+c*$+l*_t,r[1]=h*b+d*_+u*G+f*H,r[5]=h*E+d*w+u*K+f*it,r[9]=h*D+d*O+u*q+f*lt,r[13]=h*y+d*z+u*$+f*_t,r[2]=m*b+A*_+g*G+p*H,r[6]=m*E+A*w+g*K+p*it,r[10]=m*D+A*O+g*q+p*lt,r[14]=m*y+A*z+g*$+p*_t,r[3]=S*b+I*_+v*G+L*H,r[7]=S*E+I*w+v*K+L*it,r[11]=S*D+I*O+v*q+L*lt,r[15]=S*y+I*z+v*$+L*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],A=t[7],g=t[11],p=t[15];return m*(+r*c*d-s*l*d-r*o*u+n*l*u+s*o*f-n*c*f)+A*(+e*c*f-e*l*u+r*a*u-s*a*f+s*l*h-r*c*h)+g*(+e*l*d-e*o*f-r*a*d+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-e*c*d+e*o*u+s*a*d-n*a*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],A=t[13],g=t[14],p=t[15],S=d*g*l-A*u*l+A*c*f-o*g*f-d*c*p+o*u*p,I=m*u*l-h*g*l-m*c*f+a*g*f+h*c*p-a*u*p,v=h*A*l-m*d*l+m*o*f-a*A*f-h*o*p+a*d*p,L=m*d*c-h*A*c-m*o*u+a*A*u+h*o*g-a*d*g,b=e*S+n*I+s*v+r*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/b;return t[0]=S*E,t[1]=(A*u*r-d*g*r-A*s*f+n*g*f+d*s*p-n*u*p)*E,t[2]=(o*g*r-A*c*r+A*s*l-n*g*l-o*s*p+n*c*p)*E,t[3]=(d*c*r-o*u*r-d*s*l+n*u*l+o*s*f-n*c*f)*E,t[4]=I*E,t[5]=(h*g*r-m*u*r+m*s*f-e*g*f-h*s*p+e*u*p)*E,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*p-e*c*p)*E,t[7]=(a*u*r-h*c*r+h*s*l-e*u*l-a*s*f+e*c*f)*E,t[8]=v*E,t[9]=(m*d*r-h*A*r-m*n*f+e*A*f+h*n*p-e*d*p)*E,t[10]=(a*A*r-m*o*r+m*n*l-e*A*l-a*n*p+e*o*p)*E,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*f-e*o*f)*E,t[12]=L*E,t[13]=(h*A*s-m*d*s+m*n*u-e*A*u-h*n*g+e*d*g)*E,t[14]=(m*o*s-a*A*s-m*n*c+e*A*c+a*n*g-e*o*g)*E,t[15]=(a*d*s-h*o*s+h*n*c-e*d*c-a*n*u+e*o*u)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,m=r*d,A=a*h,g=a*d,p=o*d,S=c*l,I=c*h,v=c*d,L=n.x,b=n.y,E=n.z;return s[0]=(1-(A+p))*L,s[1]=(f+v)*L,s[2]=(m-I)*L,s[3]=0,s[4]=(f-v)*b,s[5]=(1-(u+p))*b,s[6]=(g+S)*b,s[7]=0,s[8]=(m+I)*E,s[9]=(g-S)*E,s[10]=(1-(u+A))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=gi.set(s[0],s[1],s[2]).length(),a=gi.set(s[4],s[5],s[6]).length(),o=gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ze.copy(this);let l=1/r,h=1/a,d=1/o;return Ze.elements[0]*=l,Ze.elements[1]*=l,Ze.elements[2]*=l,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=d,Ze.elements[9]*=d,Ze.elements[10]*=d,e.setFromRotationMatrix(Ze),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Cn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),f,m;if(o===Cn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===ir)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Cn){let c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(a-r),u=(e+t)*l,f=(n+s)*h,m,A;if(o===Cn)m=(a+r)*d,A=-2*d;else if(o===ir)m=r*d,A=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=A,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},gi=new R,Ze=new ce,Su=new R(0,0,0),bu=new R(1,1,1),Rn=new R,Ts=new R,Ne=new R,Nc=new ce,Fc=new zn,rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var cr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Eu=0,Bc=new R,mi=new zn,fn=new ce,Vs=new R,ns=new R,wu=new R,Tu=new zn,zc=new R(1,0,0),Oc=new R(0,1,0),kc=new R(0,0,1),Hc={type:"added"},Vu={type:"removed"},Ai={type:"childadded",child:null},jr={type:"childremoved",child:null},be=class i extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new rn,n=new zn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Pt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis(zc,t)}rotateY(t){return this.rotateOnAxis(Oc,t)}rotateZ(t){return this.rotateOnAxis(kc,t)}translateOnAxis(t,e){return Bc.copy(t).applyQuaternion(this.quaternion),this.position.add(Bc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zc,t)}translateY(t){return this.translateOnAxis(Oc,t)}translateZ(t){return this.translateOnAxis(kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vs.copy(t):Vs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(ns,Vs,this.up):fn.lookAt(Vs,ns,this.up),this.quaternion.setFromRotationMatrix(fn),s&&(fn.extractRotation(s.matrixWorld),mi.setFromRotationMatrix(fn),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vu),jr.child=t,this.dispatchEvent(jr),jr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,t,wu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,Tu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};be.DEFAULT_UP=new R(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=new R,pn=new R,$r=new R,gn=new R,xi=new R,Ci=new R,Gc=new R,ta=new R,ea=new R,na=new R,ia=new ue,sa=new ue,ra=new ue,Jn=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ke.subVectors(t,e),s.cross(Ke);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ke.subVectors(s,e),pn.subVectors(n,e),$r.subVectors(t,e);let a=Ke.dot(Ke),o=Ke.dot(pn),c=Ke.dot($r),l=pn.dot(pn),h=pn.dot($r),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,m=(a*h-o*c)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gn.x),c.addScaledVector(a,gn.y),c.addScaledVector(o,gn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return ia.setScalar(0),sa.setScalar(0),ra.setScalar(0),ia.fromBufferAttribute(t,e),sa.fromBufferAttribute(t,n),ra.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ia,r.x),a.addScaledVector(sa,r.y),a.addScaledVector(ra,r.z),a}static isFrontFacing(t,e,n,s){return Ke.subVectors(n,e),pn.subVectors(t,e),Ke.cross(pn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Ke.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;xi.subVectors(s,n),Ci.subVectors(r,n),ta.subVectors(t,n);let c=xi.dot(ta),l=Ci.dot(ta);if(c<=0&&l<=0)return e.copy(n);ea.subVectors(t,s);let h=xi.dot(ea),d=Ci.dot(ea);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(xi,a);na.subVectors(t,r);let f=xi.dot(na),m=Ci.dot(na);if(m>=0&&f<=m)return e.copy(r);let A=f*l-c*m;if(A<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(Ci,o);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Gc.subVectors(r,s),o=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(Gc,o);let p=1/(g+A+u);return a=A*p,o=u*p,e.copy(n).addScaledVector(xi,a).addScaledVector(Ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=Au(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=aa(a,r,t+1/3),this.g=aa(a,r,t),this.b=aa(a,r,t-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=ql[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vn(t.r),this.g=vn(t.g),this.b=vn(t.b),this}copyLinearToSRGB(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return Wt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Me(Ie.r*255,0,255))*65536+Math.round(Me(Ie.g*255,0,255))*256+Math.round(Me(Ie.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Ie.copy(this),e);let n=Ie.r,s=Ie.g,r=Ie.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Ce){Wt.fromWorkingColorSpace(Ie.copy(this),t);let e=Ie.r,n=Ie.g,s=Ie.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(Rs);let n=Gr(Pn.h,Rs.h,e),s=Gr(Pn.s,Rs.s,e),r=Gr(Pn.l,Rs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new Bt;Bt.NAMES=ql;var Ru=0,On=class extends Bn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=qi(),this.name="",this.blending=bi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=_a,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==va&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ve=class extends On{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pe=new R,Ps=new pt,Se=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ec,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$i(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$i(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$i(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ec&&(t.usage=this.usage),t}};var lr=class extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var hr=class extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var jt=class extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}},Pu=0,He=new ce,oa=new be,vi=new R,Fe=new ni,is=new ni,Ae=new R,xe=class i extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gl(t)?hr:lr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Pt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];is.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(Fe.min,is.min),Fe.expandByPoint(Ae),Ae.addVectors(Fe.max,is.max),Fe.expandByPoint(Ae)):(Fe.expandByPoint(is.min),Fe.expandByPoint(is.max))}Fe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ae.fromBufferAttribute(o,l),c&&(vi.fromBufferAttribute(t,l),Ae.add(vi)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new R,c[D]=new R;let l=new R,h=new R,d=new R,u=new pt,f=new pt,m=new pt,A=new R,g=new R;function p(D,y,_){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,_),u.fromBufferAttribute(r,D),f.fromBufferAttribute(r,y),m.fromBufferAttribute(r,_),h.sub(l),d.sub(l),f.sub(u),m.sub(u);let w=1/(f.x*m.y-m.x*f.y);isFinite(w)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(w),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(w),o[D].add(A),o[y].add(A),o[_].add(A),c[D].add(g),c[y].add(g),c[_].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,y=S.length;D<y;++D){let _=S[D],w=_.start,O=_.count;for(let z=w,G=w+O;z<G;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let I=new R,v=new R,L=new R,b=new R;function E(D){L.fromBufferAttribute(s,D),b.copy(L);let y=o[D];I.copy(y),I.sub(L.multiplyScalar(L.dot(y))).normalize(),v.crossVectors(b,y);let w=v.dot(c[D])<0?-1:1;a.setXYZW(D,I.x,I.y,I.z,w)}for(let D=0,y=S.length;D<y;++D){let _=S[D],w=_.start,O=_.count;for(let z=w,G=w+O;z<G;z+=3)E(t.getX(z+0)),E(t.getX(z+1)),E(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),A=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,A),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,m=0;for(let A=0,g=c.length;A<g;A++){o.isInterleavedBufferAttribute?f=c[A]*o.data.stride+o.offset:f=c[A]*h;for(let p=0;p<h;p++)u[m++]=l[f++]}return new Se(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qc=new ce,Wn=new or,Us=new Ni,Wc=new R,Ds=new R,Ls=new R,Ns=new R,ca=new R,Fs=new R,Xc=new R,Bs=new R,Ut=class extends be{constructor(t=new xe,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Fs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(ca.fromBufferAttribute(d,t),a?Fs.addScaledVector(ca,h):Fs.addScaledVector(ca.sub(e),h))}e.add(Fs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(r),Wn.copy(t.ray).recast(t.near),!(Us.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Us,Wc)===null||Wn.origin.distanceToSquared(Wc)>(t.far-t.near)**2))&&(qc.copy(r).invert(),Wn.copy(t.ray).applyMatrix4(qc),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=u.length;m<A;m++){let g=u[m],p=a[g.materialIndex],S=Math.max(g.start,f.start),I=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=S,L=I;v<L;v+=3){let b=o.getX(v),E=o.getX(v+1),D=o.getX(v+2);s=zs(this,p,t,n,l,h,d,b,E,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),A=Math.min(o.count,f.start+f.count);for(let g=m,p=A;g<p;g+=3){let S=o.getX(g),I=o.getX(g+1),v=o.getX(g+2);s=zs(this,a,t,n,l,h,d,S,I,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,A=u.length;m<A;m++){let g=u[m],p=a[g.materialIndex],S=Math.max(g.start,f.start),I=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=S,L=I;v<L;v+=3){let b=v,E=v+1,D=v+2;s=zs(this,p,t,n,l,h,d,b,E,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),A=Math.min(c.count,f.start+f.count);for(let g=m,p=A;g<p;g+=3){let S=g,I=g+1,v=g+2;s=zs(this,a,t,n,l,h,d,S,I,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Uu(i,t,e,n,s,r,a,o){let c;if(t.side===De?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Fn,o),c===null)return null;Bs.copy(o),Bs.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Bs);return l<e.near||l>e.far?null:{distance:l,point:Bs.clone(),object:i}}function zs(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Ds),i.getVertexPosition(c,Ls),i.getVertexPosition(l,Ns);let h=Uu(i,t,e,n,Ds,Ls,Ns,Xc);if(h){let d=new R;Jn.getBarycoord(Xc,Ds,Ls,Ns,d),s&&(h.uv=Jn.getInterpolatedAttribute(s,o,c,l,d,new pt)),r&&(h.uv1=Jn.getInterpolatedAttribute(r,o,c,l,d,new pt)),a&&(h.normal=Jn.getInterpolatedAttribute(a,o,c,l,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new R,materialIndex:0};Jn.getNormal(Ds,Ls,Ns,u.normal),h.face=u,h.barycoord=d}return h}var In=class i extends xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(d,2));function m(A,g,p,S,I,v,L,b,E,D,y){let _=v/E,w=L/D,O=v/2,z=L/2,G=b/2,K=E+1,q=D+1,$=0,H=0,it=new R;for(let lt=0;lt<q;lt++){let _t=lt*w-z;for(let Nt=0;Nt<K;Nt++){let Jt=Nt*_-O;it[A]=Jt*S,it[g]=_t*I,it[p]=G,l.push(it.x,it.y,it.z),it[A]=0,it[g]=0,it[p]=b>0?1:-1,h.push(it.x,it.y,it.z),d.push(Nt/E),d.push(1-lt/D),$+=1}}for(let lt=0;lt<D;lt++)for(let _t=0;_t<E;_t++){let Nt=u+_t+K*lt,Jt=u+_t+K*(lt+1),X=u+(_t+1)+K*(lt+1),tt=u+(_t+1)+K*lt;c.push(Nt,Jt,tt),c.push(Jt,X,tt),H+=6}o.addGroup(f,H,y),f+=H,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function we(i){let t={};for(let e=0;e<i.length;e++){let n=Fi(i[e]);for(let s in n)t[s]=n[s]}return t}function Du(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var Lu={clone:Fi,merge:we},Nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends On{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nu,this.fragmentShader=Fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fi(t.uniforms),this.uniformsGroups=Du(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ur=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Un=new R,Yc=new pt,Zc=new pt,Te=class extends ur{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,Yc,Zc),e.subVectors(Zc,Yc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},_i=-90,yi=1,lo=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Te(_i,yi,t,e);s.layers=this.layers,this.add(s);let r=new Te(_i,yi,t,e);r.layers=this.layers,this.add(r);let a=new Te(_i,yi,t,e);a.layers=this.layers,this.add(a);let o=new Te(_i,yi,t,e);o.layers=this.layers,this.add(o);let c=new Te(_i,yi,t,e);c.layers=this.layers,this.add(c);let l=new Te(_i,yi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},dr=class extends Be{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ri,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ho=class extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new dr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new In(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Ln});r.uniforms.tEquirect.value=e;let a=new Ut(s,r),o=e.minFilter;return e.minFilter===ti&&(e.minFilter=sn),new lo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},la=new R,Bu=new R,zu=new Pt,An=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=la.subVectors(n,e).cross(Bu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(la),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||zu.getNormalMatrix(t),s=this.coplanarPoint(la).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xn=new Ni,Os=new R,us=class{constructor(t=new An,e=new An,n=new An,s=new An,r=new An,a=new An){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],f=s[8],m=s[9],A=s[10],g=s[11],p=s[12],S=s[13],I=s[14],v=s[15];if(n[0].setComponents(c-r,u-l,g-f,v-p).normalize(),n[1].setComponents(c+r,u+l,g+f,v+p).normalize(),n[2].setComponents(c+a,u+h,g+m,v+S).normalize(),n[3].setComponents(c-a,u-h,g-m,v-S).normalize(),n[4].setComponents(c-o,u-d,g-A,v-I).normalize(),e===Cn)n[5].setComponents(c+o,u+d,g+A,v+I).normalize();else if(e===ir)n[5].setComponents(o,d,A,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Os.x=s.normal.x>0?t.max.x:t.min.x,Os.y=s.normal.y>0?t.max.y:t.min.y,Os.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Os)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ou(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],A=d[f];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++u,d[u]=A)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let A=d[f];i.bufferSubData(l,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Bi=class i extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,u=e/c,f=[],m=[],A=[],g=[];for(let p=0;p<h;p++){let S=p*u-a;for(let I=0;I<l;I++){let v=I*d-r;m.push(v,-S,0),A.push(0,0,1),g.push(I/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){let I=S+l*p,v=S+l*(p+1),L=S+1+l*(p+1),b=S+1+l*p;f.push(I,v,b),f.push(v,L,b)}this.setIndex(f),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(A,3)),this.setAttribute("uv",new jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ku=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hu=`#ifdef USE_ALPHAHASH
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
#endif`,Gu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yu=`#ifdef USE_AOMAP
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
#endif`,Zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ku=`#ifdef USE_BATCHING
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
#endif`,Qu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ju=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ju=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$u=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,td=`#ifdef USE_IRIDESCENCE
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
#endif`,ed=`#ifdef USE_BUMPMAP
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
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hd=`#define PI 3.141592653589793
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
} // validated`,ud=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dd=`vec3 transformedNormal = objectNormal;
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
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,md=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",xd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cd=`#ifdef USE_ENVMAP
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
	
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,yd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
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
#endif`,Md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wd=`#ifdef USE_GRADIENTMAP
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
}`,Td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pd=`uniform bool receiveShadow;
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
#endif`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bd=`PhysicalMaterial material;
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
#endif`,zd=`struct PhysicalMaterial {
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
}`,Od=`
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
#endif`,kd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qd=`#if defined( USE_POINTS_UV )
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
#endif`,Jd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$d=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ef=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nf=`#ifdef USE_MORPHTARGETS
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
#endif`,sf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,af=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cf=`#ifndef FLAT_SHADED
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
#endif`,hf=`#ifdef USE_NORMALMAP
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
#endif`,uf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ff=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Af=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,Ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wf=`#ifdef USE_SKINNING
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
#endif`,Tf=`#ifdef USE_SKINNING
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
#endif`,Rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Df=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lf=`#ifdef USE_TRANSMISSION
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
#endif`,Nf=`#ifdef USE_TRANSMISSION
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
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Of=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hf=`uniform sampler2D t2D;
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
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yf=`#include <common>
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
}`,Zf=`#if DEPTH_PACKING == 3200
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
}`,Kf=`#define DISTANCE
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
}`,Qf=`#define DISTANCE
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
}`,Jf=`varying vec3 vWorldDirection;
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
}`,$f=`uniform float scale;
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
}`,tp=`uniform vec3 diffuse;
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
}`,ep=`#include <common>
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
}`,np=`uniform vec3 diffuse;
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
}`,ip=`#define LAMBERT
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
}`,sp=`#define LAMBERT
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
}`,rp=`#define MATCAP
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
}`,ap=`#define MATCAP
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
}`,op=`#define NORMAL
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
}`,cp=`#define NORMAL
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
}`,hp=`#define PHONG
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
}`,up=`#define STANDARD
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
}`,dp=`#define STANDARD
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
}`,fp=`#define TOON
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
}`,pp=`#define TOON
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
}`,gp=`uniform float size;
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
}`,mp=`uniform vec3 diffuse;
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
}`,Ap=`#include <common>
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
}`,xp=`uniform vec3 color;
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
}`,Cp=`uniform float rotation;
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
}`,Lt={alphahash_fragment:ku,alphahash_pars_fragment:Hu,alphamap_fragment:Gu,alphamap_pars_fragment:qu,alphatest_fragment:Wu,alphatest_pars_fragment:Xu,aomap_fragment:Yu,aomap_pars_fragment:Zu,batching_pars_vertex:Ku,batching_vertex:Qu,begin_vertex:Ju,beginnormal_vertex:ju,bsdfs:$u,iridescence_fragment:td,bumpmap_pars_fragment:ed,clipping_planes_fragment:nd,clipping_planes_pars_fragment:id,clipping_planes_pars_vertex:sd,clipping_planes_vertex:rd,color_fragment:ad,color_pars_fragment:od,color_pars_vertex:cd,color_vertex:ld,common:hd,cube_uv_reflection_fragment:ud,defaultnormal_vertex:dd,displacementmap_pars_vertex:fd,displacementmap_vertex:pd,emissivemap_fragment:gd,emissivemap_pars_fragment:md,colorspace_fragment:Ad,colorspace_pars_fragment:xd,envmap_fragment:Cd,envmap_common_pars_fragment:vd,envmap_pars_fragment:_d,envmap_pars_vertex:yd,envmap_physical_pars_fragment:Ud,envmap_vertex:Id,fog_vertex:Md,fog_pars_vertex:Sd,fog_fragment:bd,fog_pars_fragment:Ed,gradientmap_pars_fragment:wd,lightmap_pars_fragment:Td,lights_lambert_fragment:Vd,lights_lambert_pars_fragment:Rd,lights_pars_begin:Pd,lights_toon_fragment:Dd,lights_toon_pars_fragment:Ld,lights_phong_fragment:Nd,lights_phong_pars_fragment:Fd,lights_physical_fragment:Bd,lights_physical_pars_fragment:zd,lights_fragment_begin:Od,lights_fragment_maps:kd,lights_fragment_end:Hd,logdepthbuf_fragment:Gd,logdepthbuf_pars_fragment:qd,logdepthbuf_pars_vertex:Wd,logdepthbuf_vertex:Xd,map_fragment:Yd,map_pars_fragment:Zd,map_particle_fragment:Kd,map_particle_pars_fragment:Qd,metalnessmap_fragment:Jd,metalnessmap_pars_fragment:jd,morphinstance_vertex:$d,morphcolor_vertex:tf,morphnormal_vertex:ef,morphtarget_pars_vertex:nf,morphtarget_vertex:sf,normal_fragment_begin:rf,normal_fragment_maps:af,normal_pars_fragment:of,normal_pars_vertex:cf,normal_vertex:lf,normalmap_pars_fragment:hf,clearcoat_normal_fragment_begin:uf,clearcoat_normal_fragment_maps:df,clearcoat_pars_fragment:ff,iridescence_pars_fragment:pf,opaque_fragment:gf,packing:mf,premultiplied_alpha_fragment:Af,project_vertex:xf,dithering_fragment:Cf,dithering_pars_fragment:vf,roughnessmap_fragment:_f,roughnessmap_pars_fragment:yf,shadowmap_pars_fragment:If,shadowmap_pars_vertex:Mf,shadowmap_vertex:Sf,shadowmask_pars_fragment:bf,skinbase_vertex:Ef,skinning_pars_vertex:wf,skinning_vertex:Tf,skinnormal_vertex:Vf,specularmap_fragment:Rf,specularmap_pars_fragment:Pf,tonemapping_fragment:Uf,tonemapping_pars_fragment:Df,transmission_fragment:Lf,transmission_pars_fragment:Nf,uv_pars_fragment:Ff,uv_pars_vertex:Bf,uv_vertex:zf,worldpos_vertex:Of,background_vert:kf,background_frag:Hf,backgroundCube_vert:Gf,backgroundCube_frag:qf,cube_vert:Wf,cube_frag:Xf,depth_vert:Yf,depth_frag:Zf,distanceRGBA_vert:Kf,distanceRGBA_frag:Qf,equirect_vert:Jf,equirect_frag:jf,linedashed_vert:$f,linedashed_frag:tp,meshbasic_vert:ep,meshbasic_frag:np,meshlambert_vert:ip,meshlambert_frag:sp,meshmatcap_vert:rp,meshmatcap_frag:ap,meshnormal_vert:op,meshnormal_frag:cp,meshphong_vert:lp,meshphong_frag:hp,meshphysical_vert:up,meshphysical_frag:dp,meshtoon_vert:fp,meshtoon_frag:pp,points_vert:gp,points_frag:mp,shadow_vert:Ap,shadow_frag:xp,sprite_vert:Cp,sprite_frag:vp},et={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},nn={basic:{uniforms:we([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:we([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:we([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:we([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:we([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:we([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:we([et.points,et.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:we([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:we([et.common,et.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:we([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:we([et.sprite,et.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:we([et.common,et.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:we([et.lights,et.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};nn.physical={uniforms:we([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};var ks={r:0,b:0,g:0},Yn=new rn,_p=new ce;function yp(i,t,e,n,s,r,a){let o=new Bt(0),c=r===!0?0:1,l,h,d=null,u=0,f=null;function m(S){let I=S.isScene===!0?S.background:null;return I&&I.isTexture&&(I=(S.backgroundBlurriness>0?e:t).get(I)),I}function A(S){let I=!1,v=m(S);v===null?p(o,c):v&&v.isColor&&(p(v,1),I=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||I)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,I){let v=m(I);v&&(v.isCubeTexture||v.mapping===Tr)?(h===void 0&&(h=new Ut(new In(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Fi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Yn.copy(I.backgroundRotation),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_p.makeRotationFromEuler(Yn)),h.material.toneMapped=Wt.getTransfer(v.colorSpace)!==Qt,(d!==v||u!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ut(new Bi(2,2),new an({name:"BackgroundMaterial",uniforms:Fi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=Wt.getTransfer(v.colorSpace)!==Qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,I){S.getRGB(ks,Wl(i)),n.buffers.color.setClear(ks.r,ks.g,ks.b,I,a)}return{getClearColor:function(){return o},setClearColor:function(S,I=1){o.set(S),c=I,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(o,c)},render:A,addToRenderList:g}}function Ip(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(_,w,O,z,G){let K=!1,q=d(z,O,w);r!==q&&(r=q,l(r.object)),K=f(_,z,O,G),K&&m(_,z,O,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,v(_,w,O,z),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function d(_,w,O){let z=O.wireframe===!0,G=n[_.id];G===void 0&&(G={},n[_.id]=G);let K=G[w.id];K===void 0&&(K={},G[w.id]=K);let q=K[z];return q===void 0&&(q=u(c()),K[z]=q),q}function u(_){let w=[],O=[],z=[];for(let G=0;G<e;G++)w[G]=0,O[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:z,object:_,attributes:{},index:null}}function f(_,w,O,z){let G=r.attributes,K=w.attributes,q=0,$=O.getAttributes();for(let H in $)if($[H].location>=0){let lt=G[H],_t=K[H];if(_t===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(_t=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(_t=_.instanceColor)),lt===void 0||lt.attribute!==_t||_t&&lt.data!==_t.data)return!0;q++}return r.attributesNum!==q||r.index!==z}function m(_,w,O,z){let G={},K=w.attributes,q=0,$=O.getAttributes();for(let H in $)if($[H].location>=0){let lt=K[H];lt===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(lt=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(lt=_.instanceColor));let _t={};_t.attribute=lt,lt&&lt.data&&(_t.data=lt.data),G[H]=_t,q++}r.attributes=G,r.attributesNum=q,r.index=z}function A(){let _=r.newAttributes;for(let w=0,O=_.length;w<O;w++)_[w]=0}function g(_){p(_,0)}function p(_,w){let O=r.newAttributes,z=r.enabledAttributes,G=r.attributeDivisors;O[_]=1,z[_]===0&&(i.enableVertexAttribArray(_),z[_]=1),G[_]!==w&&(i.vertexAttribDivisor(_,w),G[_]=w)}function S(){let _=r.newAttributes,w=r.enabledAttributes;for(let O=0,z=w.length;O<z;O++)w[O]!==_[O]&&(i.disableVertexAttribArray(O),w[O]=0)}function I(_,w,O,z,G,K,q){q===!0?i.vertexAttribIPointer(_,w,O,G,K):i.vertexAttribPointer(_,w,O,z,G,K)}function v(_,w,O,z){A();let G=z.attributes,K=O.getAttributes(),q=w.defaultAttributeValues;for(let $ in K){let H=K[$];if(H.location>=0){let it=G[$];if(it===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(it=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(it=_.instanceColor)),it!==void 0){let lt=it.normalized,_t=it.itemSize,Nt=t.get(it);if(Nt===void 0)continue;let Jt=Nt.buffer,X=Nt.type,tt=Nt.bytesPerElement,xt=X===i.INT||X===i.UNSIGNED_INT||it.gpuType===Yo;if(it.isInterleavedBufferAttribute){let st=it.data,bt=st.stride,Tt=it.offset;if(st.isInstancedInterleavedBuffer){for(let Ft=0;Ft<H.locationSize;Ft++)p(H.location+Ft,st.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ft=0;Ft<H.locationSize;Ft++)g(H.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let Ft=0;Ft<H.locationSize;Ft++)I(H.location+Ft,_t/H.locationSize,X,lt,bt*tt,(Tt+_t/H.locationSize*Ft)*tt,xt)}else{if(it.isInstancedBufferAttribute){for(let st=0;st<H.locationSize;st++)p(H.location+st,it.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let st=0;st<H.locationSize;st++)g(H.location+st);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let st=0;st<H.locationSize;st++)I(H.location+st,_t/H.locationSize,X,lt,_t*tt,_t/H.locationSize*st*tt,xt)}}else if(q!==void 0){let lt=q[$];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(H.location,lt);break;case 3:i.vertexAttrib3fv(H.location,lt);break;case 4:i.vertexAttrib4fv(H.location,lt);break;default:i.vertexAttrib1fv(H.location,lt)}}}}S()}function L(){D();for(let _ in n){let w=n[_];for(let O in w){let z=w[O];for(let G in z)h(z[G].object),delete z[G];delete w[O]}delete n[_]}}function b(_){if(n[_.id]===void 0)return;let w=n[_.id];for(let O in w){let z=w[O];for(let G in z)h(z[G].object),delete z[G];delete w[O]}delete n[_.id]}function E(_){for(let w in n){let O=n[w];if(O[_.id]===void 0)continue;let z=O[_.id];for(let G in z)h(z[G].object),delete z[G];delete O[_.id]}}function D(){y(),a=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:A,enableAttribute:g,disableUnusedAttributes:S}}function Mp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];e.update(f,n,1)}function c(l,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let m=0;for(let A=0;A<d;A++)m+=h[A]*u[A];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Sp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Qe&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let D=E===As&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==_n&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==xn&&!D)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:I,maxFragmentUniforms:v,vertexTextures:L,maxSamples:b}}function bp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new An,o=new Pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,A=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let S=r?0:n,I=S*4,v=p.clippingState||null;c.value=v,v=h(m,u,I,f);for(let L=0;L!==I;++L)v[L]=e[L];p.clippingState=v,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let A=d!==null?d.length:0,g=null;if(A!==0){if(g=c.value,m!==!0||g===null){let p=f+A*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let I=0,v=f;I!==A;++I,v+=4)a.copy(d[I]).applyMatrix4(S,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,g}}function Ep(i){let t=new WeakMap;function e(a,o){return o===Ta?a.mapping=Ri:o===Va&&(a.mapping=Pi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ta||o===Va)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new ho(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var fr=class extends ur{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Mi=4,Kc=[.125,.215,.35,.446,.526,.582],jn=20,ha=new fr,Qc=new Bt,ua=null,da=0,fa=0,pa=!1,Kn=(1+Math.sqrt(5))/2,Ii=1/Kn,Jc=[new R(-Kn,Ii,0),new R(Kn,Ii,0),new R(-Ii,0,Kn),new R(Ii,0,Kn),new R(0,Kn,-Ii),new R(0,Kn,Ii),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],pr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,da,fa),this._renderer.xr.enabled=pa,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ri||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:As,format:Qe,colorSpace:Gi,depthBuffer:!1},s=jc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wp(r)),this._blurMaterial=Tp(r,t,e)}return s}_compileMaterial(t){let e=new Ut(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,s){let o=new Te(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Qc),h.toneMapping=Nn,h.autoClear=!1;let f=new Ve({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),m=new Ut(new In,f),A=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,A=!0):(f.color.copy(Qc),A=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):S===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let I=this._cubeSize;Hs(s,S*I,p>2?I:0,I,I),h.setRenderTarget(s),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ri||t.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Hs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ha)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jc[(s-r-1)%Jc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ut(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*jn-1),A=r/m,g=isFinite(r)?1+Math.floor(h*A):jn;g>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${jn}`);let p=[],S=0;for(let E=0;E<jn;++E){let D=E/A,y=Math.exp(-D*D/2);p.push(y),E===0?S+=y:E<g&&(S+=2*y)}for(let E=0;E<p.length;E++)p[E]=p[E]/S;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:I}=this;u.dTheta.value=m,u.mipInt.value=I-n;let v=this._sizeLods[s],L=3*v*(s>I-Mi?s-I+Mi:0),b=4*(this._cubeSize-v);Hs(e,L,b,3*v,2*v),c.setRenderTarget(e),c.render(d,ha)}};function wp(i){let t=[],e=[],n=[],s=i,r=i-Mi+1+Kc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Mi?c=Kc[a-i+Mi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,A=3,g=2,p=1,S=new Float32Array(A*m*f),I=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let b=0;b<f;b++){let E=b%3*2/3-1,D=b>2?0:-1,y=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];S.set(y,A*m*b),I.set(u,g*m*b);let _=[b,b,b,b,b,b];v.set(_,p*m*b)}let L=new xe;L.setAttribute("position",new Se(S,A)),L.setAttribute("uv",new Se(I,g)),L.setAttribute("faceIndex",new Se(v,p)),t.push(L),s>Mi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jc(i,t,e){let n=new yn(i,t,e);return n.texture.mapping=Tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Tp(i,t,e){let n=new Float32Array(jn),s=new R(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$o(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function $c(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$o(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function tl(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function $o(){return`

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
	`}function Vp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Ta||c===Va,h=c===Ri||c===Pi;if(l||h){let d=t.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new pr(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new pr(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Rp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ss("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Pp(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);for(let m in u.morphAttributes){let A=u.morphAttributes[m];for(let g=0,p=A.length;g<p;g++)t.remove(A[g])}u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let m in f){let A=f[m];for(let g=0,p=A.length;g<p;g++)t.update(A[g],i.ARRAY_BUFFER)}}function l(d){let u=[],f=d.index,m=d.attributes.position,A=0;if(f!==null){let S=f.array;A=f.version;for(let I=0,v=S.length;I<v;I+=3){let L=S[I+0],b=S[I+1],E=S[I+2];u.push(L,b,b,E,E,L)}}else if(m!==void 0){let S=m.array;A=m.version;for(let I=0,v=S.length/3-1;I<v;I+=3){let L=I+0,b=I+1,E=I+2;u.push(L,b,b,E,E,L)}}else return;let g=new(Gl(u)?hr:lr)(u,1);g.version=A;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Up(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function l(u,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,u*a,m),e.update(f,n,m))}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function d(u,f,m,A){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)l(u[p]/a,f[p],A[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,A,0,m);let p=0;for(let S=0;S<m;S++)p+=f[S]*A[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Dp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Lp(i,t,e){let n=new WeakMap,s=new ue;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let y=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],I=0;f===!0&&(I=1),m===!0&&(I=2),A===!0&&(I=3);let v=o.attributes.position.count*I,L=1;v>t.maxTextureSize&&(L=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*L*4*d),E=new ar(b,v,L,d);E.type=xn,E.needsUpdate=!0;let D=I*4;for(let _=0;_<d;_++){let w=g[_],O=p[_],z=S[_],G=v*L*4*_;for(let K=0;K<w.count;K++){let q=K*D;f===!0&&(s.fromBufferAttribute(w,K),b[G+q+0]=s.x,b[G+q+1]=s.y,b[G+q+2]=s.z,b[G+q+3]=0),m===!0&&(s.fromBufferAttribute(O,K),b[G+q+4]=s.x,b[G+q+5]=s.y,b[G+q+6]=s.z,b[G+q+7]=0),A===!0&&(s.fromBufferAttribute(z,K),b[G+q+8]=s.x,b[G+q+9]=s.y,b[G+q+10]=s.z,b[G+q+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:E,size:new pt(v,L)},n.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let A=0;A<l.length;A++)f+=l[A];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Np(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var gr=class extends Be{constructor(t,e,n,s,r,a,o,c,l,h=Ei){if(h!==Ei&&h!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ei&&(n=ei),n===void 0&&h===Li&&(n=Di),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Je,this.minFilter=c!==void 0?c:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Yl=new Be,el=new gr(1,1),Zl=new ar,Kl=new co,Ql=new dr,nl=[],il=[],sl=new Float32Array(16),rl=new Float32Array(9),al=new Float32Array(4);function Wi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=nl[s];if(r===void 0&&(r=new Float32Array(s),nl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rr(i,t){let e=il[t];e===void 0&&(e=new Int32Array(t),il[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Fp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function Op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function kp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;al.set(n),i.uniformMatrix2fv(this.addr,!1,al),me(e,n)}}function Hp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;rl.set(n),i.uniformMatrix3fv(this.addr,!1,rl),me(e,n)}}function Gp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;sl.set(n),i.uniformMatrix4fv(this.addr,!1,sl),me(e,n)}}function qp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function Xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function Yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function Zp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function Qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function Jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function jp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(el.compareFunction=Hl,r=el):r=Yl,e.setTexture2D(t||r,s)}function $p(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kl,s)}function tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ql,s)}function eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zl,s)}function ng(i){switch(i){case 5126:return Fp;case 35664:return Bp;case 35665:return zp;case 35666:return Op;case 35674:return kp;case 35675:return Hp;case 35676:return Gp;case 5124:case 35670:return qp;case 35667:case 35671:return Wp;case 35668:case 35672:return Xp;case 35669:case 35673:return Yp;case 5125:return Zp;case 36294:return Kp;case 36295:return Qp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return eg}}function ig(i,t){i.uniform1fv(this.addr,t)}function sg(i,t){let e=Wi(t,this.size,2);i.uniform2fv(this.addr,e)}function rg(i,t){let e=Wi(t,this.size,3);i.uniform3fv(this.addr,e)}function ag(i,t){let e=Wi(t,this.size,4);i.uniform4fv(this.addr,e)}function og(i,t){let e=Wi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cg(i,t){let e=Wi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lg(i,t){let e=Wi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function hg(i,t){i.uniform1iv(this.addr,t)}function ug(i,t){i.uniform2iv(this.addr,t)}function dg(i,t){i.uniform3iv(this.addr,t)}function fg(i,t){i.uniform4iv(this.addr,t)}function pg(i,t){i.uniform1uiv(this.addr,t)}function gg(i,t){i.uniform2uiv(this.addr,t)}function mg(i,t){i.uniform3uiv(this.addr,t)}function Ag(i,t){i.uniform4uiv(this.addr,t)}function xg(i,t,e){let n=this.cache,s=t.length,r=Rr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Yl,r[a])}function Cg(i,t,e){let n=this.cache,s=t.length,r=Rr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Kl,r[a])}function vg(i,t,e){let n=this.cache,s=t.length,r=Rr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ql,r[a])}function _g(i,t,e){let n=this.cache,s=t.length,r=Rr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Zl,r[a])}function yg(i){switch(i){case 5126:return ig;case 35664:return sg;case 35665:return rg;case 35666:return ag;case 35674:return og;case 35675:return cg;case 35676:return lg;case 5124:case 35670:return hg;case 35667:case 35671:return ug;case 35668:case 35672:return dg;case 35669:case 35673:return fg;case 5125:return pg;case 36294:return gg;case 36295:return mg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return _g}}var uo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ng(e.type)}},fo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yg(e.type)}},po=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ga=/(\w+)(\])?(\[|\.)?/g;function ol(i,t){i.seq.push(t),i.map[t.id]=t}function Ig(i,t,e){let n=i.name,s=n.length;for(ga.lastIndex=0;;){let r=ga.exec(n),a=ga.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ol(e,l===void 0?new uo(o,i,t):new fo(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new po(o),ol(e,d)),e=d}}}var Ti=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Ig(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function cl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Mg=37297,Sg=0;function bg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var ll=new Pt;function Eg(i){Wt._getMatrix(ll,Wt.workingColorSpace,i);let t=`mat3( ${ll.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(i)){case Vr:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+bg(i.getShaderSource(t),a)}else return s}function wg(i,t){let e=Eg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Tg(i,t){let e;switch(t){case tu:e="Linear";break;case eu:e="Reinhard";break;case nu:e="Cineon";break;case Xo:e="ACESFilmic";break;case su:e="AgX";break;case ru:e="Neutral";break;case iu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Gs=new R;function Vg(){Wt.getLuminanceCoefficients(Gs);let i=Gs.x.toFixed(4),t=Gs.y.toFixed(4),e=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function Pg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ug(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function rs(i){return i!==""}function ul(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(i){return i.replace(Dg,Ng)}var Lg=new Map;function Ng(i,t){let e=Lt[t];if(e===void 0){let n=Lg.get(t);if(n!==void 0)e=Lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return go(e)}var Fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(i){return i.replace(Fg,Bg)}function Bg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function zg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mn&&(t="SHADOWMAP_TYPE_VSM"),t}function Og(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ri:case Pi:t="ENVMAP_TYPE_CUBE";break;case Tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:t="ENVMAP_MODE_REFRACTION";break}return t}function Hg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wo:t="ENVMAP_BLENDING_MULTIPLY";break;case jh:t="ENVMAP_BLENDING_MIX";break;case $h:t="ENVMAP_BLENDING_ADD";break}return t}function Gg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function qg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=zg(e),l=Og(e),h=kg(e),d=Hg(e),u=Gg(e),f=Rg(e),m=Pg(r),A=s.createProgram(),g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(rs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(rs).join(`
`),p.length>0&&(p+=`
`)):(g=[pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),p=[pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Lt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?Tg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,wg("linearToOutputTexel",e.outputColorSpace),Vg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rs).join(`
`)),a=go(a),a=ul(a,e),a=dl(a,e),o=go(o),o=ul(o,e),o=dl(o,e),a=fl(a),o=fl(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let I=S+g+a,v=S+p+o,L=cl(s,s.VERTEX_SHADER,I),b=cl(s,s.FRAGMENT_SHADER,v);s.attachShader(A,L),s.attachShader(A,b),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function E(w){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(A).trim(),z=s.getShaderInfoLog(L).trim(),G=s.getShaderInfoLog(b).trim(),K=!0,q=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,L,b);else{let $=hl(s,L,"vertex"),H=hl(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+$+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||G==="")&&(q=!1);q&&(w.diagnostics={runnable:K,programLog:O,vertexShader:{log:z,prefix:g},fragmentShader:{log:G,prefix:p}})}s.deleteShader(L),s.deleteShader(b),D=new Ti(s,A),y=Ug(s,A)}let D;this.getUniforms=function(){return D===void 0&&E(this),D};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(A,Mg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sg++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=b,this}var Wg=0,mo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ao(t),e.set(t,n)),n}},Ao=class{constructor(t){this.id=Wg++,this.code=t,this.usedTimes=0}};function Xg(i,t,e,n,s,r,a){let o=new cr,c=new mo,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,_,w,O,z){let G=O.fog,K=z.geometry,q=y.isMeshStandardMaterial?O.environment:null,$=(y.isMeshStandardMaterial?e:t).get(y.envMap||q),H=$&&$.mapping===Tr?$.image.height:null,it=m[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let lt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_t=lt!==void 0?lt.length:0,Nt=0;K.morphAttributes.position!==void 0&&(Nt=1),K.morphAttributes.normal!==void 0&&(Nt=2),K.morphAttributes.color!==void 0&&(Nt=3);let Jt,X,tt,xt;if(it){let Kt=nn[it];Jt=Kt.vertexShader,X=Kt.fragmentShader}else Jt=y.vertexShader,X=y.fragmentShader,c.update(y),tt=c.getVertexShaderID(y),xt=c.getFragmentShaderID(y);let st=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Tt=z.isInstancedMesh===!0,Ft=z.isBatchedMesh===!0,ae=!!y.map,Gt=!!y.matcap,de=!!$,U=!!y.aoMap,Oe=!!y.lightMap,zt=!!y.bumpMap,Ot=!!y.normalMap,It=!!y.displacementMap,ne=!!y.emissiveMap,yt=!!y.metalnessMap,M=!!y.roughnessMap,x=y.anisotropy>0,N=y.clearcoat>0,Y=y.dispersion>0,Q=y.iridescence>0,W=y.sheen>0,Ct=y.transmission>0,rt=x&&!!y.anisotropyMap,ht=N&&!!y.clearcoatMap,qt=N&&!!y.clearcoatNormalMap,J=N&&!!y.clearcoatRoughnessMap,dt=Q&&!!y.iridescenceMap,Mt=Q&&!!y.iridescenceThicknessMap,Et=W&&!!y.sheenColorMap,ft=W&&!!y.sheenRoughnessMap,kt=!!y.specularMap,Dt=!!y.specularColorMap,$t=!!y.specularIntensityMap,T=Ct&&!!y.transmissionMap,nt=Ct&&!!y.thicknessMap,k=!!y.gradientMap,Z=!!y.alphaMap,ct=y.alphaTest>0,at=!!y.alphaHash,Vt=!!y.extensions,he=Nn;y.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(he=i.toneMapping);let _e={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:Jt,fragmentShader:X,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:xt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ft,batchingColor:Ft&&z._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&z.instanceColor!==null,instancingMorph:Tt&&z.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Gi,alphaToCoverage:!!y.alphaToCoverage,map:ae,matcap:Gt,envMap:de,envMapMode:de&&$.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:Oe,bumpMap:zt,normalMap:Ot,displacementMap:u&&It,emissiveMap:ne,normalMapObjectSpace:Ot&&y.normalMapType===lu,normalMapTangentSpace:Ot&&y.normalMapType===kl,metalnessMap:yt,roughnessMap:M,anisotropy:x,anisotropyMap:rt,clearcoat:N,clearcoatMap:ht,clearcoatNormalMap:qt,clearcoatRoughnessMap:J,dispersion:Y,iridescence:Q,iridescenceMap:dt,iridescenceThicknessMap:Mt,sheen:W,sheenColorMap:Et,sheenRoughnessMap:ft,specularMap:kt,specularColorMap:Dt,specularIntensityMap:$t,transmission:Ct,transmissionMap:T,thicknessMap:nt,gradientMap:k,opaque:y.transparent===!1&&y.blending===bi&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:ct,alphaHash:at,combine:y.combine,mapUv:ae&&A(y.map.channel),aoMapUv:U&&A(y.aoMap.channel),lightMapUv:Oe&&A(y.lightMap.channel),bumpMapUv:zt&&A(y.bumpMap.channel),normalMapUv:Ot&&A(y.normalMap.channel),displacementMapUv:It&&A(y.displacementMap.channel),emissiveMapUv:ne&&A(y.emissiveMap.channel),metalnessMapUv:yt&&A(y.metalnessMap.channel),roughnessMapUv:M&&A(y.roughnessMap.channel),anisotropyMapUv:rt&&A(y.anisotropyMap.channel),clearcoatMapUv:ht&&A(y.clearcoatMap.channel),clearcoatNormalMapUv:qt&&A(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&A(y.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&A(y.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&A(y.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&A(y.sheenColorMap.channel),sheenRoughnessMapUv:ft&&A(y.sheenRoughnessMap.channel),specularMapUv:kt&&A(y.specularMap.channel),specularColorMapUv:Dt&&A(y.specularColorMap.channel),specularIntensityMapUv:$t&&A(y.specularIntensityMap.channel),transmissionMapUv:T&&A(y.transmissionMap.channel),thicknessMapUv:nt&&A(y.thicknessMap.channel),alphaMapUv:Z&&A(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ot||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(ae||Z),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:bt,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Nt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:ae&&y.map.isVideoTexture===!0&&Wt.getTransfer(y.map.colorSpace)===Qt,decodeVideoTextureEmissive:ne&&y.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(y.emissiveMap.colorSpace)===Qt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ge,flipSided:y.side===De,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&y.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function p(y){let _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(let w in y.defines)_.push(w),_.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(S(_,y),I(_,y),_.push(i.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function S(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function I(y,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){let _=m[y.type],w;if(_){let O=nn[_];w=Lu.clone(O.uniforms)}else w=y.uniforms;return w}function L(y,_){let w;for(let O=0,z=h.length;O<z;O++){let G=h[O];if(G.cacheKey===_){w=G,++w.usedTimes;break}}return w===void 0&&(w=new qg(i,_,y,r),h.push(w)),w}function b(y){if(--y.usedTimes===0){let _=h.indexOf(y);h[_]=h[h.length-1],h.pop(),y.destroy()}}function E(y){c.remove(y)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:L,releaseProgram:b,releaseShaderCache:E,programs:h,dispose:D}}function Yg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Zg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ml(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,u,f,m,A,g){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:A,group:g},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=A,p.group=g),t++,p}function o(d,u,f,m,A,g){let p=a(d,u,f,m,A,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(d,u,f,m,A,g){let p=a(d,u,f,m,A,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||Zg),n.length>1&&n.sort(u||gl),s.length>1&&s.sort(u||gl)}function h(){for(let d=t,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Kg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ml,i.set(n,[a])):s>=r.length?(a=new ml,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Qg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Bt};break;case"SpotLight":e={position:new R,direction:new R,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Jg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var jg=0;function $g(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tm(i){let t=new Qg,e=Jg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let s=new R,r=new ce,a=new ce;function o(l){let h=0,d=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,m=0,A=0,g=0,p=0,S=0,I=0,v=0,L=0,b=0,E=0;l.sort($g);for(let y=0,_=l.length;y<_;y++){let w=l[y],O=w.color,z=w.intensity,G=w.distance,K=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=O.r*z,d+=O.g*z,u+=O.b*z;else if(w.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(w.sh.coefficients[q],z);E++}else if(w.isDirectionalLight){let q=t.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let $=w.shadow,H=e.get(w);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=w.shadow.matrix,S++}n.directional[f]=q,f++}else if(w.isSpotLight){let q=t.get(w);q.position.setFromMatrixPosition(w.matrixWorld),q.color.copy(O).multiplyScalar(z),q.distance=G,q.coneCos=Math.cos(w.angle),q.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),q.decay=w.decay,n.spot[A]=q;let $=w.shadow;if(w.map&&(n.spotLightMap[L]=w.map,L++,$.updateMatrices(w),w.castShadow&&b++),n.spotLightMatrix[A]=$.matrix,w.castShadow){let H=e.get(w);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[A]=H,n.spotShadowMap[A]=K,v++}A++}else if(w.isRectAreaLight){let q=t.get(w);q.color.copy(O).multiplyScalar(z),q.halfWidth.set(w.width*.5,0,0),q.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=q,g++}else if(w.isPointLight){let q=t.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),q.distance=w.distance,q.decay=w.decay,w.castShadow){let $=w.shadow,H=e.get(w);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=w.shadow.matrix,I++}n.point[m]=q,m++}else if(w.isHemisphereLight){let q=t.get(w);q.skyColor.copy(w.color).multiplyScalar(z),q.groundColor.copy(w.groundColor).multiplyScalar(z),n.hemi[p]=q,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.directionalLength!==f||D.pointLength!==m||D.spotLength!==A||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==S||D.numPointShadows!==I||D.numSpotShadows!==v||D.numSpotMaps!==L||D.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=A,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=v+L-b,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,D.directionalLength=f,D.pointLength=m,D.spotLength=A,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=S,D.numPointShadows=I,D.numSpotShadows=v,D.numSpotMaps=L,D.numLightProbes=E,n.version=jg++)}function c(l,h){let d=0,u=0,f=0,m=0,A=0,g=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){let I=l[p];if(I.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(I.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(I.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(I.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(I.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(I.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(I.width*.5,0,0),v.halfHeight.set(0,I.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(I.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(I.matrixWorld),v.position.applyMatrix4(g),u++}else if(I.isHemisphereLight){let v=n.hemi[A];v.direction.setFromMatrixPosition(I.matrixWorld),v.direction.transformDirection(g),A++}}}return{setup:o,setupView:c,state:n}}function Al(i){let t=new tm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function em(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Al(i),t.set(s,[o])):r>=a.length?(o=new Al(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var xo=class extends On{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Co=class extends On{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,im=`uniform sampler2D shadow_pass;
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
}`;function sm(i,t,e){let n=new us,s=new pt,r=new pt,a=new ue,o=new xo({depthPacking:cu}),c=new Co,l={},h=e.maxTextureSize,d={[Fn]:De,[De]:Fn,[Ge]:Ge},u=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:nm,fragmentShader:im}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new xe;m.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new Ut(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl;let p=this.type;this.render=function(b,E,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;let y=i.getRenderTarget(),_=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Ln),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let z=p!==mn&&this.type===mn,G=p===mn&&this.type!==mn;for(let K=0,q=b.length;K<q;K++){let $=b[K],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let it=H.getFrameExtents();if(s.multiply(it),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,H.mapSize.y=r.y)),H.map===null||z===!0||G===!0){let _t=this.type!==mn?{minFilter:Je,magFilter:Je}:{};H.map!==null&&H.map.dispose(),H.map=new yn(s.x,s.y,_t),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let lt=H.getViewportCount();for(let _t=0;_t<lt;_t++){let Nt=H.getViewport(_t);a.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),O.viewport(a),H.updateMatrices($,_t),n=H.getFrustum(),v(E,D,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===mn&&S(H,D),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(y,_,w)};function S(b,E){let D=t.update(A);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new yn(s.x,s.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,D,u,A,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,D,f,A,null)}function I(b,E,D,y){let _=null,w=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)_=w;else if(_=D.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let O=_.uuid,z=E.uuid,G=l[O];G===void 0&&(G={},l[O]=G);let K=G[z];K===void 0&&(K=_.clone(),G[z]=K,E.addEventListener("dispose",L)),_=K}if(_.visible=E.visible,_.wireframe=E.wireframe,y===mn?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:d[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let O=i.properties.get(_);O.light=D}return _}function v(b,E,D,y,_){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&_===mn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);let z=t.update(b),G=b.material;if(Array.isArray(G)){let K=z.groups;for(let q=0,$=K.length;q<$;q++){let H=K[q],it=G[H.materialIndex];if(it&&it.visible){let lt=I(b,it,y,_);b.onBeforeShadow(i,b,E,D,z,lt,H),i.renderBufferDirect(D,null,z,lt,b,H),b.onAfterShadow(i,b,E,D,z,lt,H)}}}else if(G.visible){let K=I(b,G,y,_);b.onBeforeShadow(i,b,E,D,z,K,null),i.renderBufferDirect(D,null,z,K,b,null),b.onAfterShadow(i,b,E,D,z,K,null)}}let O=b.children;for(let z=0,G=O.length;z<G;z++)v(O[z],E,D,y,_)}function L(b){b.target.removeEventListener("dispose",L);for(let D in l){let y=l[D],_=b.target.uuid;_ in y&&(y[_].dispose(),delete y[_])}}}var rm={[ya]:Ia,[Ma]:Ea,[Sa]:wa,[Vi]:ba,[Ia]:ya,[Ea]:Ma,[wa]:Sa,[ba]:Vi};function am(i,t){function e(){let T=!1,nt=new ue,k=null,Z=new ue(0,0,0,0);return{setMask:function(ct){k!==ct&&!T&&(i.colorMask(ct,ct,ct,ct),k=ct)},setLocked:function(ct){T=ct},setClear:function(ct,at,Vt,he,_e){_e===!0&&(ct*=he,at*=he,Vt*=he),nt.set(ct,at,Vt,he),Z.equals(nt)===!1&&(i.clearColor(ct,at,Vt,he),Z.copy(nt))},reset:function(){T=!1,k=null,Z.set(-1,0,0,0)}}}function n(){let T=!1,nt=!1,k=null,Z=null,ct=null;return{setReversed:function(at){if(nt!==at){let Vt=t.get("EXT_clip_control");nt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);let he=ct;ct=null,this.setClear(he)}nt=at},getReversed:function(){return nt},setTest:function(at){at?st(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(at){k!==at&&!T&&(i.depthMask(at),k=at)},setFunc:function(at){if(nt&&(at=rm[at]),Z!==at){switch(at){case ya:i.depthFunc(i.NEVER);break;case Ia:i.depthFunc(i.ALWAYS);break;case Ma:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case Sa:i.depthFunc(i.EQUAL);break;case ba:i.depthFunc(i.GEQUAL);break;case Ea:i.depthFunc(i.GREATER);break;case wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=at}},setLocked:function(at){T=at},setClear:function(at){ct!==at&&(nt&&(at=1-at),i.clearDepth(at),ct=at)},reset:function(){T=!1,k=null,Z=null,ct=null,nt=!1}}}function s(){let T=!1,nt=null,k=null,Z=null,ct=null,at=null,Vt=null,he=null,_e=null;return{setTest:function(Kt){T||(Kt?st(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Kt){nt!==Kt&&!T&&(i.stencilMask(Kt),nt=Kt)},setFunc:function(Kt,We,ln){(k!==Kt||Z!==We||ct!==ln)&&(i.stencilFunc(Kt,We,ln),k=Kt,Z=We,ct=ln)},setOp:function(Kt,We,ln){(at!==Kt||Vt!==We||he!==ln)&&(i.stencilOp(Kt,We,ln),at=Kt,Vt=We,he=ln)},setLocked:function(Kt){T=Kt},setClear:function(Kt){_e!==Kt&&(i.clearStencil(Kt),_e=Kt)},reset:function(){T=!1,nt=null,k=null,Z=null,ct=null,at=null,Vt=null,he=null,_e=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u=new WeakMap,f=[],m=null,A=!1,g=null,p=null,S=null,I=null,v=null,L=null,b=null,E=new Bt(0,0,0),D=0,y=!1,_=null,w=null,O=null,z=null,G=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,$=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=$>=2);let it=null,lt={},_t=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Jt=new ue().fromArray(_t),X=new ue().fromArray(Nt);function tt(T,nt,k,Z){let ct=new Uint8Array(4),at=i.createTexture();i.bindTexture(T,at),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<k;Vt++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(nt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return at}let xt={};xt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(Vi),zt(!1),Ot(vc),st(i.CULL_FACE),U(Ln);function st(T){h[T]!==!0&&(i.enable(T),h[T]=!0)}function bt(T){h[T]!==!1&&(i.disable(T),h[T]=!1)}function Tt(T,nt){return d[T]!==nt?(i.bindFramebuffer(T,nt),d[T]=nt,T===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=nt),T===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function Ft(T,nt){let k=f,Z=!1;if(T){k=u.get(nt),k===void 0&&(k=[],u.set(nt,k));let ct=T.textures;if(k.length!==ct.length||k[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Vt=ct.length;at<Vt;at++)k[at]=i.COLOR_ATTACHMENT0+at;k.length=ct.length,Z=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,Z=!0);Z&&i.drawBuffers(k)}function ae(T){return m!==T?(i.useProgram(T),m=T,!0):!1}let Gt={[Qn]:i.FUNC_ADD,[Lh]:i.FUNC_SUBTRACT,[Nh]:i.FUNC_REVERSE_SUBTRACT};Gt[Fh]=i.MIN,Gt[Bh]=i.MAX;let de={[zh]:i.ZERO,[Oh]:i.ONE,[kh]:i.SRC_COLOR,[va]:i.SRC_ALPHA,[Yh]:i.SRC_ALPHA_SATURATE,[Wh]:i.DST_COLOR,[Gh]:i.DST_ALPHA,[Hh]:i.ONE_MINUS_SRC_COLOR,[_a]:i.ONE_MINUS_SRC_ALPHA,[Xh]:i.ONE_MINUS_DST_COLOR,[qh]:i.ONE_MINUS_DST_ALPHA,[Zh]:i.CONSTANT_COLOR,[Kh]:i.ONE_MINUS_CONSTANT_COLOR,[Qh]:i.CONSTANT_ALPHA,[Jh]:i.ONE_MINUS_CONSTANT_ALPHA};function U(T,nt,k,Z,ct,at,Vt,he,_e,Kt){if(T===Ln){A===!0&&(bt(i.BLEND),A=!1);return}if(A===!1&&(st(i.BLEND),A=!0),T!==Dh){if(T!==g||Kt!==y){if((p!==Qn||v!==Qn)&&(i.blendEquation(i.FUNC_ADD),p=Qn,v=Qn),Kt)switch(T){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case er:i.blendFunc(i.ONE,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case er:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}S=null,I=null,L=null,b=null,E.set(0,0,0),D=0,g=T,y=Kt}return}ct=ct||nt,at=at||k,Vt=Vt||Z,(nt!==p||ct!==v)&&(i.blendEquationSeparate(Gt[nt],Gt[ct]),p=nt,v=ct),(k!==S||Z!==I||at!==L||Vt!==b)&&(i.blendFuncSeparate(de[k],de[Z],de[at],de[Vt]),S=k,I=Z,L=at,b=Vt),(he.equals(E)===!1||_e!==D)&&(i.blendColor(he.r,he.g,he.b,_e),E.copy(he),D=_e),g=T,y=!1}function Oe(T,nt){T.side===Ge?bt(i.CULL_FACE):st(i.CULL_FACE);let k=T.side===De;nt&&(k=!k),zt(k),T.blending===bi&&T.transparent===!1?U(Ln):U(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),a.setFunc(T.depthFunc),a.setTest(T.depthTest),a.setMask(T.depthWrite),r.setMask(T.colorWrite);let Z=T.stencilWrite;o.setTest(Z),Z&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),ne(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(T){_!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),_=T)}function Ot(T){T!==Rh?(st(i.CULL_FACE),T!==w&&(T===vc?i.cullFace(i.BACK):T===Ph?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),w=T}function It(T){T!==O&&(q&&i.lineWidth(T),O=T)}function ne(T,nt,k){T?(st(i.POLYGON_OFFSET_FILL),(z!==nt||G!==k)&&(i.polygonOffset(nt,k),z=nt,G=k)):bt(i.POLYGON_OFFSET_FILL)}function yt(T){T?st(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function M(T){T===void 0&&(T=i.TEXTURE0+K-1),it!==T&&(i.activeTexture(T),it=T)}function x(T,nt,k){k===void 0&&(it===null?k=i.TEXTURE0+K-1:k=it);let Z=lt[k];Z===void 0&&(Z={type:void 0,texture:void 0},lt[k]=Z),(Z.type!==T||Z.texture!==nt)&&(it!==k&&(i.activeTexture(k),it=k),i.bindTexture(T,nt||xt[T]),Z.type=T,Z.texture=nt)}function N(){let T=lt[it];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Mt(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Et(T){Jt.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),Jt.copy(T))}function ft(T){X.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),X.copy(T))}function kt(T,nt){let k=l.get(nt);k===void 0&&(k=new WeakMap,l.set(nt,k));let Z=k.get(T);Z===void 0&&(Z=i.getUniformBlockIndex(nt,T.name),k.set(T,Z))}function Dt(T,nt){let Z=l.get(nt).get(T);c.get(nt)!==Z&&(i.uniformBlockBinding(nt,Z,T.__bindingPointIndex),c.set(nt,Z))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,lt={},d={},u=new WeakMap,f=[],m=null,A=!1,g=null,p=null,S=null,I=null,v=null,L=null,b=null,E=new Bt(0,0,0),D=0,y=!1,_=null,w=null,O=null,z=null,G=null,Jt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:bt,bindFramebuffer:Tt,drawBuffers:Ft,useProgram:ae,setBlending:U,setMaterial:Oe,setFlipSided:zt,setCullFace:Ot,setLineWidth:It,setPolygonOffset:ne,setScissorTest:yt,activeTexture:M,bindTexture:x,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:dt,texImage3D:Mt,updateUBOMapping:kt,uniformBlockBinding:Dt,texStorage2D:qt,texStorage3D:J,texSubImage2D:W,texSubImage3D:Ct,compressedTexSubImage2D:rt,compressedTexSubImage3D:ht,scissor:Et,viewport:ft,reset:$t}}function xl(i,t,e,n){let s=om(n);switch(e){case Dl:return i*t;case Nl:return i*t;case Fl:return i*t*2;case Bl:return i*t/s.components*s.byteLength;case Qo:return i*t/s.components*s.byteLength;case zl:return i*t*2/s.components*s.byteLength;case Jo:return i*t*2/s.components*s.byteLength;case Ll:return i*t*3/s.components*s.byteLength;case Qe:return i*t*4/s.components*s.byteLength;case jo:return i*t*4/s.components*s.byteLength;case Qs:case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case js:case $s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:case La:return Math.max(i,16)*Math.max(t,8)/4;case Pa:case Da:return Math.max(i,8)*Math.max(t,8)/2;case Na:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case tr:case $a:case to:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ol:case eo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case no:case io:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function om(i){switch(i){case _n:case Rl:return{byteLength:1,components:1};case hs:case Pl:case As:return{byteLength:2,components:1};case Zo:case Ko:return{byteLength:2,components:4};case ei:case Yo:case xn:return{byteLength:4,components:1};case Ul:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function cm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(M,x){return f?new OffscreenCanvas(M,x):sr("canvas")}function A(M,x,N){let Y=1,Q=yt(M);if((Q.width>N||Q.height>N)&&(Y=N/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap||typeof VideoFrame!="undefined"&&M instanceof VideoFrame){let W=Math.floor(Y*Q.width),Ct=Math.floor(Y*Q.height);d===void 0&&(d=m(W,Ct));let rt=x?m(W,Ct):d;return rt.width=W,rt.height=Ct,rt.getContext("2d").drawImage(M,0,0,W,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+W+"x"+Ct+")."),rt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),M;return M}function g(M){return M.generateMipmaps}function p(M){i.generateMipmap(M)}function S(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(M,x,N,Y,Q=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let W=x;if(x===i.RED&&(N===i.FLOAT&&(W=i.R32F),N===i.HALF_FLOAT&&(W=i.R16F),N===i.UNSIGNED_BYTE&&(W=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.R8UI),N===i.UNSIGNED_SHORT&&(W=i.R16UI),N===i.UNSIGNED_INT&&(W=i.R32UI),N===i.BYTE&&(W=i.R8I),N===i.SHORT&&(W=i.R16I),N===i.INT&&(W=i.R32I)),x===i.RG&&(N===i.FLOAT&&(W=i.RG32F),N===i.HALF_FLOAT&&(W=i.RG16F),N===i.UNSIGNED_BYTE&&(W=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RG8UI),N===i.UNSIGNED_SHORT&&(W=i.RG16UI),N===i.UNSIGNED_INT&&(W=i.RG32UI),N===i.BYTE&&(W=i.RG8I),N===i.SHORT&&(W=i.RG16I),N===i.INT&&(W=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGB8UI),N===i.UNSIGNED_SHORT&&(W=i.RGB16UI),N===i.UNSIGNED_INT&&(W=i.RGB32UI),N===i.BYTE&&(W=i.RGB8I),N===i.SHORT&&(W=i.RGB16I),N===i.INT&&(W=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),N===i.UNSIGNED_INT&&(W=i.RGBA32UI),N===i.BYTE&&(W=i.RGBA8I),N===i.SHORT&&(W=i.RGBA16I),N===i.INT&&(W=i.RGBA32I)),x===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),x===i.RGBA){let Ct=Q?Vr:Wt.getTransfer(Y);N===i.FLOAT&&(W=i.RGBA32F),N===i.HALF_FLOAT&&(W=i.RGBA16F),N===i.UNSIGNED_BYTE&&(W=Ct===Qt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(M,x){let N;return M?x===null||x===ei||x===Di?N=i.DEPTH24_STENCIL8:x===xn?N=i.DEPTH32F_STENCIL8:x===hs&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ei||x===Di?N=i.DEPTH_COMPONENT24:x===xn?N=i.DEPTH_COMPONENT32F:x===hs&&(N=i.DEPTH_COMPONENT16),N}function L(M,x){return g(M)===!0||M.isFramebufferTexture&&M.minFilter!==Je&&M.minFilter!==sn?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function b(M){let x=M.target;x.removeEventListener("dispose",b),D(x),x.isVideoTexture&&h.delete(x)}function E(M){let x=M.target;x.removeEventListener("dispose",E),_(x)}function D(M){let x=n.get(M);if(x.__webglInit===void 0)return;let N=M.source,Y=u.get(N);if(Y){let Q=Y[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(M),Object.keys(Y).length===0&&u.delete(N)}n.remove(M)}function y(M){let x=n.get(M);i.deleteTexture(x.__webglTexture);let N=M.source,Y=u.get(N);delete Y[x.__cacheKey],a.memory.textures--}function _(M){let x=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let Q=0;Q<x.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=M.textures;for(let Y=0,Q=N.length;Y<Q;Y++){let W=n.get(N[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(M)}let w=0;function O(){w=0}function z(){let M=w;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),w+=1,M}function G(M){let x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function K(M,x){let N=n.get(M);if(M.isVideoTexture&&It(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){let Y=M.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,M,x);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function q(M,x){let N=n.get(M);if(M.version>0&&N.__version!==M.version){X(N,M,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function $(M,x){let N=n.get(M);if(M.version>0&&N.__version!==M.version){X(N,M,x);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function H(M,x){let N=n.get(M);if(M.version>0&&N.__version!==M.version){tt(N,M,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}let it={[Ui]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[Ra]:i.MIRRORED_REPEAT},lt={[Je]:i.NEAREST,[au]:i.NEAREST_MIPMAP_NEAREST,[Is]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},_t={[hu]:i.NEVER,[mu]:i.ALWAYS,[uu]:i.LESS,[Hl]:i.LEQUAL,[du]:i.EQUAL,[gu]:i.GEQUAL,[fu]:i.GREATER,[pu]:i.NOTEQUAL};function Nt(M,x){if(x.type===xn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===sn||x.magFilter===Or||x.magFilter===Is||x.magFilter===ti||x.minFilter===sn||x.minFilter===Or||x.minFilter===Is||x.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,it[x.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,it[x.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,it[x.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,lt[x.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,lt[x.minFilter]),x.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,_t[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Je||x.minFilter!==Is&&x.minFilter!==ti||x.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Jt(M,x){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",b));let Y=x.source,Q=u.get(Y);Q===void 0&&(Q={},u.set(Y,Q));let W=G(x);if(W!==M.__cacheKey){Q[W]===void 0&&(Q[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Q[W].usedTimes++;let Ct=Q[M.__cacheKey];Ct!==void 0&&(Q[M.__cacheKey].usedTimes--,Ct.usedTimes===0&&y(x)),M.__cacheKey=W,M.__webglTexture=Q[W].texture}return N}function X(M,x,N){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);let Q=Jt(M,x),W=x.source;e.bindTexture(Y,M.__webglTexture,i.TEXTURE0+N);let Ct=n.get(W);if(W.version!==Ct.__version||Q===!0){e.activeTexture(i.TEXTURE0+N);let rt=Wt.getPrimaries(Wt.workingColorSpace),ht=x.colorSpace===Dn?null:Wt.getPrimaries(x.colorSpace),qt=x.colorSpace===Dn||rt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let J=A(x.image,!1,s.maxTextureSize);J=ne(x,J);let dt=r.convert(x.format,x.colorSpace),Mt=r.convert(x.type),Et=I(x.internalFormat,dt,Mt,x.colorSpace,x.isVideoTexture);Nt(Y,x);let ft,kt=x.mipmaps,Dt=x.isVideoTexture!==!0,$t=Ct.__version===void 0||Q===!0,T=W.dataReady,nt=L(x,J);if(x.isDepthTexture)Et=v(x.format===Li,x.type),$t&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,Et,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,Et,J.width,J.height,0,dt,Mt,null));else if(x.isDataTexture)if(kt.length>0){Dt&&$t&&e.texStorage2D(i.TEXTURE_2D,nt,Et,kt[0].width,kt[0].height);for(let k=0,Z=kt.length;k<Z;k++)ft=kt[k],Dt?T&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,ft.width,ft.height,dt,Mt,ft.data):e.texImage2D(i.TEXTURE_2D,k,Et,ft.width,ft.height,0,dt,Mt,ft.data);x.generateMipmaps=!1}else Dt?($t&&e.texStorage2D(i.TEXTURE_2D,nt,Et,J.width,J.height),T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,dt,Mt,J.data)):e.texImage2D(i.TEXTURE_2D,0,Et,J.width,J.height,0,dt,Mt,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Dt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Et,kt[0].width,kt[0].height,J.depth);for(let k=0,Z=kt.length;k<Z;k++)if(ft=kt[k],x.format!==Qe)if(dt!==null)if(Dt){if(T)if(x.layerUpdates.size>0){let ct=xl(ft.width,ft.height,x.format,x.type);for(let at of x.layerUpdates){let Vt=ft.data.subarray(at*ct/ft.data.BYTES_PER_ELEMENT,(at+1)*ct/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,at,ft.width,ft.height,1,dt,Vt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,ft.width,ft.height,J.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Et,ft.width,ft.height,J.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?T&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,ft.width,ft.height,J.depth,dt,Mt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,k,Et,ft.width,ft.height,J.depth,0,dt,Mt,ft.data)}else{Dt&&$t&&e.texStorage2D(i.TEXTURE_2D,nt,Et,kt[0].width,kt[0].height);for(let k=0,Z=kt.length;k<Z;k++)ft=kt[k],x.format!==Qe?dt!==null?Dt?T&&e.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,k,Et,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?T&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,ft.width,ft.height,dt,Mt,ft.data):e.texImage2D(i.TEXTURE_2D,k,Et,ft.width,ft.height,0,dt,Mt,ft.data)}else if(x.isDataArrayTexture)if(Dt){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Et,J.width,J.height,J.depth),T)if(x.layerUpdates.size>0){let k=xl(J.width,J.height,x.format,x.type);for(let Z of x.layerUpdates){let ct=J.data.subarray(Z*k/J.data.BYTES_PER_ELEMENT,(Z+1)*k/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,J.width,J.height,1,dt,Mt,ct)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,Mt,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,J.width,J.height,J.depth,0,dt,Mt,J.data);else if(x.isData3DTexture)Dt?($t&&e.texStorage3D(i.TEXTURE_3D,nt,Et,J.width,J.height,J.depth),T&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,Mt,J.data)):e.texImage3D(i.TEXTURE_3D,0,Et,J.width,J.height,J.depth,0,dt,Mt,J.data);else if(x.isFramebufferTexture){if($t)if(Dt)e.texStorage2D(i.TEXTURE_2D,nt,Et,J.width,J.height);else{let k=J.width,Z=J.height;for(let ct=0;ct<nt;ct++)e.texImage2D(i.TEXTURE_2D,ct,Et,k,Z,0,dt,Mt,null),k>>=1,Z>>=1}}else if(kt.length>0){if(Dt&&$t){let k=yt(kt[0]);e.texStorage2D(i.TEXTURE_2D,nt,Et,k.width,k.height)}for(let k=0,Z=kt.length;k<Z;k++)ft=kt[k],Dt?T&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,dt,Mt,ft):e.texImage2D(i.TEXTURE_2D,k,Et,dt,Mt,ft);x.generateMipmaps=!1}else if(Dt){if($t){let k=yt(J);e.texStorage2D(i.TEXTURE_2D,nt,Et,k.width,k.height)}T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Mt,J)}else e.texImage2D(i.TEXTURE_2D,0,Et,dt,Mt,J);g(x)&&p(Y),Ct.__version=W.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function tt(M,x,N){if(x.image.length!==6)return;let Y=Jt(M,x),Q=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+N);let W=n.get(Q);if(Q.version!==W.__version||Y===!0){e.activeTexture(i.TEXTURE0+N);let Ct=Wt.getPrimaries(Wt.workingColorSpace),rt=x.colorSpace===Dn?null:Wt.getPrimaries(x.colorSpace),ht=x.colorSpace===Dn||Ct===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let qt=x.isCompressedTexture||x.image[0].isCompressedTexture,J=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let Z=0;Z<6;Z++)!qt&&!J?dt[Z]=A(x.image[Z],!0,s.maxCubemapSize):dt[Z]=J?x.image[Z].image:x.image[Z],dt[Z]=ne(x,dt[Z]);let Mt=dt[0],Et=r.convert(x.format,x.colorSpace),ft=r.convert(x.type),kt=I(x.internalFormat,Et,ft,x.colorSpace),Dt=x.isVideoTexture!==!0,$t=W.__version===void 0||Y===!0,T=Q.dataReady,nt=L(x,Mt);Nt(i.TEXTURE_CUBE_MAP,x);let k;if(qt){Dt&&$t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,kt,Mt.width,Mt.height);for(let Z=0;Z<6;Z++){k=dt[Z].mipmaps;for(let ct=0;ct<k.length;ct++){let at=k[ct];x.format!==Qe?Et!==null?Dt?T&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,at.width,at.height,Et,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,kt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,at.width,at.height,Et,ft,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,kt,at.width,at.height,0,Et,ft,at.data)}}}else{if(k=x.mipmaps,Dt&&$t){k.length>0&&nt++;let Z=yt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,kt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(J){Dt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,dt[Z].width,dt[Z].height,Et,ft,dt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,dt[Z].width,dt[Z].height,0,Et,ft,dt[Z].data);for(let ct=0;ct<k.length;ct++){let Vt=k[ct].image[Z].image;Dt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,Vt.width,Vt.height,Et,ft,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,kt,Vt.width,Vt.height,0,Et,ft,Vt.data)}}else{Dt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Et,ft,dt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,Et,ft,dt[Z]);for(let ct=0;ct<k.length;ct++){let at=k[ct];Dt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,Et,ft,at.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,kt,Et,ft,at.image[Z])}}}g(x)&&p(i.TEXTURE_CUBE_MAP),W.__version=Q.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function xt(M,x,N,Y,Q,W){let Ct=r.convert(N.format,N.colorSpace),rt=r.convert(N.type),ht=I(N.internalFormat,Ct,rt,N.colorSpace),qt=n.get(x),J=n.get(N);if(J.__renderTarget=x,!qt.__hasExternalTextures){let dt=Math.max(1,x.width>>W),Mt=Math.max(1,x.height>>W);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,W,ht,dt,Mt,x.depth,0,Ct,rt,null):e.texImage2D(Q,W,ht,dt,Mt,0,Ct,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),Ot(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,J.__webglTexture,0,zt(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,J.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(M,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,M),x.depthBuffer){let Y=x.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,W=v(x.stencilBuffer,Q),Ct=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=zt(x);Ot(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,W,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,W,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,W,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,M)}else{let Y=x.textures;for(let Q=0;Q<Y.length;Q++){let W=Y[Q],Ct=r.convert(W.format,W.colorSpace),rt=r.convert(W.type),ht=I(W.internalFormat,Ct,rt,W.colorSpace),qt=zt(x);N&&Ot(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,ht,x.width,x.height):Ot(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,ht,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ht,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);let Q=Y.__webglTexture,W=zt(x);if(x.depthTexture.format===Ei)Ot(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(x.depthTexture.format===Li)Ot(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Tt(M){let x=n.get(M),N=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){let Y=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=Y}if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");bt(x.__webglFramebuffer,M)}else if(N){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),st(x.__webglDepthbuffer[Y],M,!1);else{let Q=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),st(x.__webglDepthbuffer,M,!1);else{let Y=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(M,x,N){let Y=n.get(M);x!==void 0&&xt(Y.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Tt(M)}function ae(M){let x=M.texture,N=n.get(M),Y=n.get(x);M.addEventListener("dispose",E);let Q=M.textures,W=M.isWebGLCubeRenderTarget===!0,Ct=Q.length>1;if(Ct||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,a.memory.textures++),W){N.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[rt]=[];for(let ht=0;ht<x.mipmaps.length;ht++)N.__webglFramebuffer[rt][ht]=i.createFramebuffer()}else N.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let rt=0;rt<x.mipmaps.length;rt++)N.__webglFramebuffer[rt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let rt=0,ht=Q.length;rt<ht;rt++){let qt=n.get(Q[rt]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&Ot(M)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let rt=0;rt<Q.length;rt++){let ht=Q[rt];N.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[rt]);let qt=r.convert(ht.format,ht.colorSpace),J=r.convert(ht.type),dt=I(ht.internalFormat,qt,J,ht.colorSpace,M.isXRRenderTarget===!0),Mt=zt(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,dt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,N.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),st(N.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,x);for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)xt(N.__webglFramebuffer[rt][ht],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht);else xt(N.__webglFramebuffer[rt],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);g(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let rt=0,ht=Q.length;rt<ht;rt++){let qt=Q[rt],J=n.get(qt);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),Nt(i.TEXTURE_2D,qt),xt(N.__webglFramebuffer,M,qt,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),g(qt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(rt=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),Nt(rt,x),x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)xt(N.__webglFramebuffer[ht],M,x,i.COLOR_ATTACHMENT0,rt,ht);else xt(N.__webglFramebuffer,M,x,i.COLOR_ATTACHMENT0,rt,0);g(x)&&p(rt),e.unbindTexture()}M.depthBuffer&&Tt(M)}function Gt(M){let x=M.textures;for(let N=0,Y=x.length;N<Y;N++){let Q=x[N];if(g(Q)){let W=S(M),Ct=n.get(Q).__webglTexture;e.bindTexture(W,Ct),p(W),e.unbindTexture()}}}let de=[],U=[];function Oe(M){if(M.samples>0){if(Ot(M)===!1){let x=M.textures,N=M.width,Y=M.height,Q=i.COLOR_BUFFER_BIT,W=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(M),rt=x.length>1;if(rt)for(let ht=0;ht<x.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let ht=0;ht<x.length;ht++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[ht]);let qt=n.get(x[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,Q,i.NEAREST),c===!0&&(de.length=0,U.length=0,de.push(i.COLOR_ATTACHMENT0+ht),M.depthBuffer&&M.resolveDepthBuffer===!1&&(de.push(W),U.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let ht=0;ht<x.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[ht]);let qt=n.get(x[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){let x=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function zt(M){return Math.min(s.maxSamples,M.samples)}function Ot(M){let x=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function It(M){let x=a.render.frame;h.get(M)!==x&&(h.set(M,x),M.update())}function ne(M,x){let N=M.colorSpace,Y=M.format,Q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==Gi&&N!==Dn&&(Wt.getTransfer(N)===Qt?(Y!==Qe||Q!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function yt(M){return typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame!="undefined"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=Ft,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Ot}function lm(i,t){function e(n,s=Dn){let r,a=Wt.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===Zo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ko)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ul)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rl)return i.BYTE;if(n===Pl)return i.SHORT;if(n===hs)return i.UNSIGNED_SHORT;if(n===Yo)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===As)return i.HALF_FLOAT;if(n===Dl)return i.ALPHA;if(n===Ll)return i.RGB;if(n===Qe)return i.RGBA;if(n===Nl)return i.LUMINANCE;if(n===Fl)return i.LUMINANCE_ALPHA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===Li)return i.DEPTH_STENCIL;if(n===Bl)return i.RED;if(n===Qo)return i.RED_INTEGER;if(n===zl)return i.RG;if(n===Jo)return i.RG_INTEGER;if(n===jo)return i.RGBA_INTEGER;if(n===Qs||n===Js||n===js||n===$s)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pa||n===Ua||n===Da||n===La)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Na||n===Fa||n===Ba)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Na||n===Fa)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===za||n===Oa||n===ka||n===Ha||n===Ga||n===qa||n===Wa||n===Xa||n===Ya||n===Za||n===Ka||n===Qa||n===Ja||n===ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===za)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ha)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ya)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Za)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ja)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tr||n===$a||n===to)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===tr)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===to)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ol||n===eo||n===no||n===io)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===tr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var vo=class extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ht=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},hm={type:"move"},as=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let A of t.hand.values()){let g=e.getJointPose(A,n),p=this._getHandJoint(l,A);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},um=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dm=`
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

}`,_o=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Be,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new an({vertexShader:um,fragmentShader:dm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new Bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yo=class extends Bn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,m=null,A=new _o,g=e.getContextAttributes(),p=null,S=null,I=[],v=[],L=new pt,b=null,E=new Te;E.viewport=new ue;let D=new Te;D.viewport=new ue;let y=[E,D],_=new vo,w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=I[X];return tt===void 0&&(tt=new as,I[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=I[X];return tt===void 0&&(tt=new as,I[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=I[X];return tt===void 0&&(tt=new as,I[X]=tt),tt.getHandSpace()};function z(X){let tt=v.indexOf(X.inputSource);if(tt===-1)return;let xt=I[tt];xt!==void 0&&(xt.update(X.inputSource,X.frame,l||a),xt.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",K);for(let X=0;X<I.length;X++){let tt=v[X];tt!==null&&(v[X]=null,I[X].disconnect(tt))}w=null,O=null,A.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,S=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new yn(f.framebufferWidth,f.framebufferHeight,{format:Qe,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let tt=null,xt=null,st=null;g.depth&&(st=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=g.stencil?Li:Ei,xt=g.stencil?Di:ei);let bt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new yn(u.textureWidth,u.textureHeight,{format:Qe,type:_n,depthTexture:new gr(u.textureWidth,u.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function K(X){for(let tt=0;tt<X.removed.length;tt++){let xt=X.removed[tt],st=v.indexOf(xt);st>=0&&(v[st]=null,I[st].disconnect(xt))}for(let tt=0;tt<X.added.length;tt++){let xt=X.added[tt],st=v.indexOf(xt);if(st===-1){for(let Tt=0;Tt<I.length;Tt++)if(Tt>=v.length){v.push(xt),st=Tt;break}else if(v[Tt]===null){v[Tt]=xt,st=Tt;break}if(st===-1)break}let bt=I[st];bt&&bt.connect(xt)}}let q=new R,$=new R;function H(X,tt,xt){q.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(xt.matrixWorld);let st=q.distanceTo($),bt=tt.projectionMatrix.elements,Tt=xt.projectionMatrix.elements,Ft=bt[14]/(bt[10]-1),ae=bt[14]/(bt[10]+1),Gt=(bt[9]+1)/bt[5],de=(bt[9]-1)/bt[5],U=(bt[8]-1)/bt[0],Oe=(Tt[8]+1)/Tt[0],zt=Ft*U,Ot=Ft*Oe,It=st/(-U+Oe),ne=It*-U;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ne),X.translateZ(It),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),bt[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let yt=Ft+It,M=ae+It,x=zt-ne,N=Ot+(st-ne),Y=Gt*ae/M*yt,Q=de*ae/M*yt;X.projectionMatrix.makePerspective(x,N,Y,Q,yt,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function it(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let tt=X.near,xt=X.far;A.texture!==null&&(A.depthNear>0&&(tt=A.depthNear),A.depthFar>0&&(xt=A.depthFar)),_.near=D.near=E.near=tt,_.far=D.far=E.far=xt,(w!==_.near||O!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,O=_.far),E.layers.mask=X.layers.mask|2,D.layers.mask=X.layers.mask|4,_.layers.mask=E.layers.mask|D.layers.mask;let st=X.parent,bt=_.cameras;it(_,st);for(let Tt=0;Tt<bt.length;Tt++)it(bt[Tt],st);bt.length===2?H(_,E,D):_.projectionMatrix.copy(E.projectionMatrix),lt(X,_,st)};function lt(X,tt,xt){xt===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(xt.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ro*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(X){c=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(_)};let _t=null;function Nt(X,tt){if(h=tt.getViewerPose(l||a),m=tt,h!==null){let xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let st=!1;xt.length!==_.cameras.length&&(_.cameras.length=0,st=!0);for(let Tt=0;Tt<xt.length;Tt++){let Ft=xt[Tt],ae=null;if(f!==null)ae=f.getViewport(Ft);else{let de=d.getViewSubImage(u,Ft);ae=de.viewport,Tt===0&&(t.setRenderTargetTextures(S,de.colorTexture,u.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(S))}let Gt=y[Tt];Gt===void 0&&(Gt=new Te,Gt.layers.enable(Tt),Gt.viewport=new ue,y[Tt]=Gt),Gt.matrix.fromArray(Ft.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ft.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(ae.x,ae.y,ae.width,ae.height),Tt===0&&(_.matrix.copy(Gt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),st===!0&&_.cameras.push(Gt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){let Tt=d.getDepthInformation(xt[0]);Tt&&Tt.isValid&&Tt.texture&&A.init(t,Tt,s.renderState)}}for(let xt=0;xt<I.length;xt++){let st=v[xt],bt=I[xt];st!==null&&bt!==void 0&&bt.update(st,tt,l||a)}_t&&_t(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}let Jt=new Xl;Jt.setAnimationLoop(Nt),this.setAnimationLoop=function(X){_t=X},this.dispose=function(){}}},Zn=new rn,fm=new ce;function pm(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Wl(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,I,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),A(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,S,I):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===De&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===De&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let S=t.get(p),I=S.envMap,v=S.envMapRotation;I&&(g.envMap.value=I,Zn.copy(v),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),g.envMapRotation.value.setFromMatrix4(fm.makeRotationFromEuler(Zn)),g.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,S,I){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=I*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===De&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function A(g,p){let S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gm(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,I){let v=I.program;n.uniformBlockBinding(S,v)}function l(S,I){let v=s[S.id];v===void 0&&(m(S),v=h(S),s[S.id]=v,S.addEventListener("dispose",g));let L=I.program;n.updateUBOMapping(S,L);let b=t.render.frame;r[S.id]!==b&&(u(S),r[S.id]=b)}function h(S){let I=d();S.__bindingPointIndex=I;let v=i.createBuffer(),L=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,L,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,v),v}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let I=s[S.id],v=S.uniforms,L=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let b=0,E=v.length;b<E;b++){let D=Array.isArray(v[b])?v[b]:[v[b]];for(let y=0,_=D.length;y<_;y++){let w=D[y];if(f(w,b,y,L)===!0){let O=w.__offset,z=Array.isArray(w.value)?w.value:[w.value],G=0;for(let K=0;K<z.length;K++){let q=z[K],$=A(q);typeof q=="number"||typeof q=="boolean"?(w.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,O+G,w.__data)):q.isMatrix3?(w.__data[0]=q.elements[0],w.__data[1]=q.elements[1],w.__data[2]=q.elements[2],w.__data[3]=0,w.__data[4]=q.elements[3],w.__data[5]=q.elements[4],w.__data[6]=q.elements[5],w.__data[7]=0,w.__data[8]=q.elements[6],w.__data[9]=q.elements[7],w.__data[10]=q.elements[8],w.__data[11]=0):(q.toArray(w.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,I,v,L){let b=S.value,E=I+"_"+v;if(L[E]===void 0)return typeof b=="number"||typeof b=="boolean"?L[E]=b:L[E]=b.clone(),!0;{let D=L[E];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return L[E]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function m(S){let I=S.uniforms,v=0,L=16;for(let E=0,D=I.length;E<D;E++){let y=Array.isArray(I[E])?I[E]:[I[E]];for(let _=0,w=y.length;_<w;_++){let O=y[_],z=Array.isArray(O.value)?O.value:[O.value];for(let G=0,K=z.length;G<K;G++){let q=z[G],$=A(q),H=v%L,it=H%$.boundary,lt=H+it;v+=it,lt!==0&&L-lt<$.storage&&(v+=L-lt),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=$.storage}}}let b=v%L;return b>0&&(v+=L-b),S.__size=v,S.__cache={},this}function A(S){let I={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(I.boundary=4,I.storage=4):S.isVector2?(I.boundary=8,I.storage=8):S.isVector3||S.isColor?(I.boundary=16,I.storage=12):S.isVector4?(I.boundary=16,I.storage=16):S.isMatrix3?(I.boundary=48,I.storage=48):S.isMatrix4?(I.boundary=64,I.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),I}function g(S){let I=S.target;I.removeEventListener("dispose",g);let v=a.indexOf(I.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var mr=class{constructor(t={}){let{canvas:e=xu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let m=new Uint32Array(4),A=new Int32Array(4),g=null,p=null,S=[],I=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this.toneMapping=Nn,this.toneMappingExposure=1;let v=this,L=!1,b=0,E=0,D=null,y=-1,_=null,w=new ue,O=new ue,z=null,G=new Bt(0),K=0,q=e.width,$=e.height,H=1,it=null,lt=null,_t=new ue(0,0,q,$),Nt=new ue(0,0,q,$),Jt=!1,X=new us,tt=!1,xt=!1,st=new ce,bt=new ce,Tt=new R,Ft=new ue,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function de(){return D===null?H:1}let U=n;function Oe(C,V){return e.getContext(C,V)}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qo}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",at,!1),U===null){let V="webgl2";if(U=Oe(V,C),U===null)throw Oe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let zt,Ot,It,ne,yt,M,x,N,Y,Q,W,Ct,rt,ht,qt,J,dt,Mt,Et,ft,kt,Dt,$t,T;function nt(){zt=new Rp(U),zt.init(),Dt=new lm(U,zt),Ot=new Sp(U,zt,t,Dt),It=new am(U,zt),Ot.reverseDepthBuffer&&u&&It.buffers.depth.setReversed(!0),ne=new Dp(U),yt=new Yg,M=new cm(U,zt,It,yt,Ot,Dt,ne),x=new Ep(v),N=new Vp(v),Y=new Ou(U),$t=new Ip(U,Y),Q=new Pp(U,Y,ne,$t),W=new Np(U,Q,Y,ne),Et=new Lp(U,Ot,M),J=new bp(yt),Ct=new Xg(v,x,N,zt,Ot,$t,J),rt=new pm(v,yt),ht=new Kg,qt=new em(zt),Mt=new yp(v,x,N,It,W,f,c),dt=new sm(v,W,Ot),T=new gm(U,ne,Ot,It),ft=new Mp(U,zt,ne),kt=new Up(U,zt,ne),ne.programs=Ct.programs,v.capabilities=Ot,v.extensions=zt,v.properties=yt,v.renderLists=ht,v.shadowMap=dt,v.state=It,v.info=ne}nt();let k=new yo(v,U);this.xr=k,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let C=zt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=zt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(q,$,!1))},this.getSize=function(C){return C.set(q,$)},this.setSize=function(C,V,F=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=C,$=V,e.width=Math.floor(C*H),e.height=Math.floor(V*H),F===!0&&(e.style.width=C+"px",e.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(q*H,$*H).floor()},this.setDrawingBufferSize=function(C,V,F){q=C,$=V,H=F,e.width=Math.floor(C*F),e.height=Math.floor(V*F),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(_t)},this.setViewport=function(C,V,F,B){C.isVector4?_t.set(C.x,C.y,C.z,C.w):_t.set(C,V,F,B),It.viewport(w.copy(_t).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(Nt)},this.setScissor=function(C,V,F,B){C.isVector4?Nt.set(C.x,C.y,C.z,C.w):Nt.set(C,V,F,B),It.scissor(O.copy(Nt).multiplyScalar(H).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(C){It.setScissorTest(Jt=C)},this.setOpaqueSort=function(C){it=C},this.setTransparentSort=function(C){lt=C},this.getClearColor=function(C){return C.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(C=!0,V=!0,F=!0){let B=0;if(C){let P=!1;if(D!==null){let j=D.texture.format;P=j===jo||j===Jo||j===Qo}if(P){let j=D.texture.type,ot=j===_n||j===ei||j===hs||j===Di||j===Zo||j===Ko,gt=Mt.getClearColor(),mt=Mt.getClearAlpha(),wt=gt.r,Rt=gt.g,At=gt.b;ot?(m[0]=wt,m[1]=Rt,m[2]=At,m[3]=mt,U.clearBufferuiv(U.COLOR,0,m)):(A[0]=wt,A[1]=Rt,A[2]=At,A[3]=mt,U.clearBufferiv(U.COLOR,0,A))}else B|=U.COLOR_BUFFER_BIT}V&&(B|=U.DEPTH_BUFFER_BIT),F&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ht.dispose(),qt.dispose(),yt.dispose(),x.dispose(),N.dispose(),W.dispose(),$t.dispose(),T.dispose(),Ct.dispose(),k.dispose(),k.removeEventListener("sessionstart",dc),k.removeEventListener("sessionend",fc),Hn.stop()};function Z(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let C=ne.autoReset,V=dt.enabled,F=dt.autoUpdate,B=dt.needsUpdate,P=dt.type;nt(),ne.autoReset=C,dt.enabled=V,dt.autoUpdate=F,dt.needsUpdate=B,dt.type=P}function at(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Vt(C){let V=C.target;V.removeEventListener("dispose",Vt),he(V)}function he(C){_e(C),yt.remove(C)}function _e(C){let V=yt.get(C).programs;V!==void 0&&(V.forEach(function(F){Ct.releaseProgram(F)}),C.isShaderMaterial&&Ct.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,F,B,P,j){V===null&&(V=ae);let ot=P.isMesh&&P.matrixWorld.determinant()<0,gt=wh(C,V,F,B,P);It.setMaterial(B,ot);let mt=F.index,wt=1;if(B.wireframe===!0){if(mt=Q.getWireframeAttribute(F),mt===void 0)return;wt=2}let Rt=F.drawRange,At=F.attributes.position,Xt=Rt.start*wt,te=(Rt.start+Rt.count)*wt;j!==null&&(Xt=Math.max(Xt,j.start*wt),te=Math.min(te,(j.start+j.count)*wt)),mt!==null?(Xt=Math.max(Xt,0),te=Math.min(te,mt.count)):At!=null&&(Xt=Math.max(Xt,0),te=Math.min(te,At.count));let ie=te-Xt;if(ie<0||ie===1/0)return;$t.setup(P,B,gt,F,mt);let Pe,Yt=ft;if(mt!==null&&(Pe=Y.get(mt),Yt=kt,Yt.setIndex(Pe)),P.isMesh)B.wireframe===!0?(It.setLineWidth(B.wireframeLinewidth*de()),Yt.setMode(U.LINES)):Yt.setMode(U.TRIANGLES);else if(P.isLine){let vt=B.linewidth;vt===void 0&&(vt=1),It.setLineWidth(vt*de()),P.isLineSegments?Yt.setMode(U.LINES):P.isLineLoop?Yt.setMode(U.LINE_LOOP):Yt.setMode(U.LINE_STRIP)}else P.isPoints?Yt.setMode(U.POINTS):P.isSprite&&Yt.setMode(U.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Yt.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let vt=P._multiDrawStarts,hn=P._multiDrawCounts,Zt=P._multiDrawCount,Xe=mt?Y.get(mt).bytesPerElement:1,li=yt.get(B).currentProgram.getUniforms();for(let Le=0;Le<Zt;Le++)li.setValue(U,"_gl_DrawID",Le),Yt.render(vt[Le]/Xe,hn[Le])}else if(P.isInstancedMesh)Yt.renderInstances(Xt,ie,P.count);else if(F.isInstancedBufferGeometry){let vt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,hn=Math.min(F.instanceCount,vt);Yt.renderInstances(Xt,ie,hn)}else Yt.render(Xt,ie)};function Kt(C,V,F){C.transparent===!0&&C.side===Ge&&C.forceSinglePass===!1?(C.side=De,C.needsUpdate=!0,ys(C,V,F),C.side=Fn,C.needsUpdate=!0,ys(C,V,F),C.side=Ge):ys(C,V,F)}this.compile=function(C,V,F=null){F===null&&(F=C),p=qt.get(F),p.init(V),I.push(p),F.traverseVisible(function(P){P.isLight&&P.layers.test(V.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),C!==F&&C.traverseVisible(function(P){P.isLight&&P.layers.test(V.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),p.setupLights();let B=new Set;return C.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let j=P.material;if(j)if(Array.isArray(j))for(let ot=0;ot<j.length;ot++){let gt=j[ot];Kt(gt,F,P),B.add(gt)}else Kt(j,F,P),B.add(j)}),I.pop(),p=null,B},this.compileAsync=function(C,V,F=null){let B=this.compile(C,V,F);return new Promise(P=>{function j(){if(B.forEach(function(ot){yt.get(ot).currentProgram.isReady()&&B.delete(ot)}),B.size===0){P(C);return}setTimeout(j,10)}zt.get("KHR_parallel_shader_compile")!==null?j():setTimeout(j,10)})};let We=null;function ln(C){We&&We(C)}function dc(){Hn.stop()}function fc(){Hn.start()}let Hn=new Xl;Hn.setAnimationLoop(ln),typeof self!="undefined"&&Hn.setContext(self),this.setAnimationLoop=function(C){We=C,k.setAnimationLoop(C),C===null?Hn.stop():Hn.start()},k.addEventListener("sessionstart",dc),k.addEventListener("sessionend",fc),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(V),V=k.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,V,D),p=qt.get(C,I.length),p.init(V),I.push(p),bt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),X.setFromProjectionMatrix(bt),xt=this.localClippingEnabled,tt=J.init(this.clippingPlanes,xt),g=ht.get(C,S.length),g.init(),S.push(g),k.enabled===!0&&k.isPresenting===!0){let j=v.xr.getDepthSensingMesh();j!==null&&zr(j,V,-1/0,v.sortObjects)}zr(C,V,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(it,lt),Gt=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,Gt&&Mt.addToRenderList(g,C),this.info.render.frame++,tt===!0&&J.beginShadows();let F=p.state.shadowsArray;dt.render(F,C,V),tt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=g.opaque,P=g.transmissive;if(p.setupLights(),V.isArrayCamera){let j=V.cameras;if(P.length>0)for(let ot=0,gt=j.length;ot<gt;ot++){let mt=j[ot];gc(B,P,C,mt)}Gt&&Mt.render(C);for(let ot=0,gt=j.length;ot<gt;ot++){let mt=j[ot];pc(g,C,mt,mt.viewport)}}else P.length>0&&gc(B,P,C,V),Gt&&Mt.render(C),pc(g,C,V);D!==null&&(M.updateMultisampleRenderTarget(D),M.updateRenderTargetMipmap(D)),C.isScene===!0&&C.onAfterRender(v,C,V),$t.resetDefaultState(),y=-1,_=null,I.pop(),I.length>0?(p=I[I.length-1],tt===!0&&J.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function zr(C,V,F,B){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)F=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){B&&Ft.setFromMatrixPosition(C.matrixWorld).applyMatrix4(bt);let ot=W.update(C),gt=C.material;gt.visible&&g.push(C,ot,gt,F,Ft.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||X.intersectsObject(C))){let ot=W.update(C),gt=C.material;if(B&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ft.copy(C.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Ft.copy(ot.boundingSphere.center)),Ft.applyMatrix4(C.matrixWorld).applyMatrix4(bt)),Array.isArray(gt)){let mt=ot.groups;for(let wt=0,Rt=mt.length;wt<Rt;wt++){let At=mt[wt],Xt=gt[At.materialIndex];Xt&&Xt.visible&&g.push(C,ot,Xt,F,Ft.z,At)}}else gt.visible&&g.push(C,ot,gt,F,Ft.z,null)}}let j=C.children;for(let ot=0,gt=j.length;ot<gt;ot++)zr(j[ot],V,F,B)}function pc(C,V,F,B){let P=C.opaque,j=C.transmissive,ot=C.transparent;p.setupLightsView(F),tt===!0&&J.setGlobalState(v.clippingPlanes,F),B&&It.viewport(w.copy(B)),P.length>0&&_s(P,V,F),j.length>0&&_s(j,V,F),ot.length>0&&_s(ot,V,F),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function gc(C,V,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new yn(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?As:_n,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));let j=p.state.transmissionRenderTarget[B.id],ot=B.viewport||w;j.setSize(ot.z,ot.w);let gt=v.getRenderTarget();v.setRenderTarget(j),v.getClearColor(G),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),Gt&&Mt.render(F);let mt=v.toneMapping;v.toneMapping=Nn;let wt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),tt===!0&&J.setGlobalState(v.clippingPlanes,B),_s(C,F,B),M.updateMultisampleRenderTarget(j),M.updateRenderTargetMipmap(j),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let At=0,Xt=V.length;At<Xt;At++){let te=V[At],ie=te.object,Pe=te.geometry,Yt=te.material,vt=te.group;if(Yt.side===Ge&&ie.layers.test(B.layers)){let hn=Yt.side;Yt.side=De,Yt.needsUpdate=!0,mc(ie,F,B,Pe,Yt,vt),Yt.side=hn,Yt.needsUpdate=!0,Rt=!0}}Rt===!0&&(M.updateMultisampleRenderTarget(j),M.updateRenderTargetMipmap(j))}v.setRenderTarget(gt),v.setClearColor(G,K),wt!==void 0&&(B.viewport=wt),v.toneMapping=mt}function _s(C,V,F){let B=V.isScene===!0?V.overrideMaterial:null;for(let P=0,j=C.length;P<j;P++){let ot=C[P],gt=ot.object,mt=ot.geometry,wt=B===null?ot.material:B,Rt=ot.group;gt.layers.test(F.layers)&&mc(gt,V,F,mt,wt,Rt)}}function mc(C,V,F,B,P,j){C.onBeforeRender(v,V,F,B,P,j),C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),P.onBeforeRender(v,V,F,B,C,j),P.transparent===!0&&P.side===Ge&&P.forceSinglePass===!1?(P.side=De,P.needsUpdate=!0,v.renderBufferDirect(F,V,B,P,C,j),P.side=Fn,P.needsUpdate=!0,v.renderBufferDirect(F,V,B,P,C,j),P.side=Ge):v.renderBufferDirect(F,V,B,P,C,j),C.onAfterRender(v,V,F,B,P,j)}function ys(C,V,F){V.isScene!==!0&&(V=ae);let B=yt.get(C),P=p.state.lights,j=p.state.shadowsArray,ot=P.state.version,gt=Ct.getParameters(C,P.state,j,V,F),mt=Ct.getProgramCacheKey(gt),wt=B.programs;B.environment=C.isMeshStandardMaterial?V.environment:null,B.fog=V.fog,B.envMap=(C.isMeshStandardMaterial?N:x).get(C.envMap||B.environment),B.envMapRotation=B.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,wt===void 0&&(C.addEventListener("dispose",Vt),wt=new Map,B.programs=wt);let Rt=wt.get(mt);if(Rt!==void 0){if(B.currentProgram===Rt&&B.lightsStateVersion===ot)return xc(C,gt),Rt}else gt.uniforms=Ct.getUniforms(C),C.onBeforeCompile(gt,v),Rt=Ct.acquireProgram(gt,mt),wt.set(mt,Rt),B.uniforms=gt.uniforms;let At=B.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(At.clippingPlanes=J.uniform),xc(C,gt),B.needsLights=Vh(C),B.lightsStateVersion=ot,B.needsLights&&(At.ambientLightColor.value=P.state.ambient,At.lightProbe.value=P.state.probe,At.directionalLights.value=P.state.directional,At.directionalLightShadows.value=P.state.directionalShadow,At.spotLights.value=P.state.spot,At.spotLightShadows.value=P.state.spotShadow,At.rectAreaLights.value=P.state.rectArea,At.ltc_1.value=P.state.rectAreaLTC1,At.ltc_2.value=P.state.rectAreaLTC2,At.pointLights.value=P.state.point,At.pointLightShadows.value=P.state.pointShadow,At.hemisphereLights.value=P.state.hemi,At.directionalShadowMap.value=P.state.directionalShadowMap,At.directionalShadowMatrix.value=P.state.directionalShadowMatrix,At.spotShadowMap.value=P.state.spotShadowMap,At.spotLightMatrix.value=P.state.spotLightMatrix,At.spotLightMap.value=P.state.spotLightMap,At.pointShadowMap.value=P.state.pointShadowMap,At.pointShadowMatrix.value=P.state.pointShadowMatrix),B.currentProgram=Rt,B.uniformsList=null,Rt}function Ac(C){if(C.uniformsList===null){let V=C.currentProgram.getUniforms();C.uniformsList=Ti.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function xc(C,V){let F=yt.get(C);F.outputColorSpace=V.outputColorSpace,F.batching=V.batching,F.batchingColor=V.batchingColor,F.instancing=V.instancing,F.instancingColor=V.instancingColor,F.instancingMorph=V.instancingMorph,F.skinning=V.skinning,F.morphTargets=V.morphTargets,F.morphNormals=V.morphNormals,F.morphColors=V.morphColors,F.morphTargetsCount=V.morphTargetsCount,F.numClippingPlanes=V.numClippingPlanes,F.numIntersection=V.numClipIntersection,F.vertexAlphas=V.vertexAlphas,F.vertexTangents=V.vertexTangents,F.toneMapping=V.toneMapping}function wh(C,V,F,B,P){V.isScene!==!0&&(V=ae),M.resetTextureUnits();let j=V.fog,ot=B.isMeshStandardMaterial?V.environment:null,gt=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Gi,mt=(B.isMeshStandardMaterial?N:x).get(B.envMap||ot),wt=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Rt=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),At=!!F.morphAttributes.position,Xt=!!F.morphAttributes.normal,te=!!F.morphAttributes.color,ie=Nn;B.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ie=v.toneMapping);let Pe=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Yt=Pe!==void 0?Pe.length:0,vt=yt.get(B),hn=p.state.lights;if(tt===!0&&(xt===!0||C!==_)){let ke=C===_&&B.id===y;J.setState(B,C,ke)}let Zt=!1;B.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==hn.state.version||vt.outputColorSpace!==gt||P.isBatchedMesh&&vt.batching===!1||!P.isBatchedMesh&&vt.batching===!0||P.isBatchedMesh&&vt.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&vt.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&vt.instancing===!1||!P.isInstancedMesh&&vt.instancing===!0||P.isSkinnedMesh&&vt.skinning===!1||!P.isSkinnedMesh&&vt.skinning===!0||P.isInstancedMesh&&vt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&vt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&vt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&vt.instancingMorph===!1&&P.morphTexture!==null||vt.envMap!==mt||B.fog===!0&&vt.fog!==j||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==J.numPlanes||vt.numIntersection!==J.numIntersection)||vt.vertexAlphas!==wt||vt.vertexTangents!==Rt||vt.morphTargets!==At||vt.morphNormals!==Xt||vt.morphColors!==te||vt.toneMapping!==ie||vt.morphTargetsCount!==Yt)&&(Zt=!0):(Zt=!0,vt.__version=B.version);let Xe=vt.currentProgram;Zt===!0&&(Xe=ys(B,V,P));let li=!1,Le=!1,Ji=!1,se=Xe.getUniforms(),en=vt.uniforms;if(It.useProgram(Xe.program)&&(li=!0,Le=!0,Ji=!0),B.id!==y&&(y=B.id,Le=!0),li||_!==C){It.buffers.depth.getReversed()?(st.copy(C.projectionMatrix),vu(st),_u(st),se.setValue(U,"projectionMatrix",st)):se.setValue(U,"projectionMatrix",C.projectionMatrix),se.setValue(U,"viewMatrix",C.matrixWorldInverse);let bn=se.map.cameraPosition;bn!==void 0&&bn.setValue(U,Tt.setFromMatrixPosition(C.matrixWorld)),Ot.logarithmicDepthBuffer&&se.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&se.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),_!==C&&(_=C,Le=!0,Ji=!0)}if(P.isSkinnedMesh){se.setOptional(U,P,"bindMatrix"),se.setOptional(U,P,"bindMatrixInverse");let ke=P.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),se.setValue(U,"boneTexture",ke.boneTexture,M))}P.isBatchedMesh&&(se.setOptional(U,P,"batchingTexture"),se.setValue(U,"batchingTexture",P._matricesTexture,M),se.setOptional(U,P,"batchingIdTexture"),se.setValue(U,"batchingIdTexture",P._indirectTexture,M),se.setOptional(U,P,"batchingColorTexture"),P._colorsTexture!==null&&se.setValue(U,"batchingColorTexture",P._colorsTexture,M));let ji=F.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&Et.update(P,F,Xe),(Le||vt.receiveShadow!==P.receiveShadow)&&(vt.receiveShadow=P.receiveShadow,se.setValue(U,"receiveShadow",P.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(en.envMap.value=mt,en.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&V.environment!==null&&(en.envMapIntensity.value=V.environmentIntensity),Le&&(se.setValue(U,"toneMappingExposure",v.toneMappingExposure),vt.needsLights&&Th(en,Ji),j&&B.fog===!0&&rt.refreshFogUniforms(en,j),rt.refreshMaterialUniforms(en,B,H,$,p.state.transmissionRenderTarget[C.id]),Ti.upload(U,Ac(vt),en,M)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ti.upload(U,Ac(vt),en,M),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&se.setValue(U,"center",P.center),se.setValue(U,"modelViewMatrix",P.modelViewMatrix),se.setValue(U,"normalMatrix",P.normalMatrix),se.setValue(U,"modelMatrix",P.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let ke=B.uniformsGroups;for(let bn=0,En=ke.length;bn<En;bn++){let Cc=ke[bn];T.update(Cc,Xe),T.bind(Cc,Xe)}}return Xe}function Th(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function Vh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(C,V,F){yt.get(C.texture).__webglTexture=V,yt.get(C.depthTexture).__webglTexture=F;let B=yt.get(C);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,V){let F=yt.get(C);F.__webglFramebuffer=V,F.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,F=0){D=C,b=V,E=F;let B=!0,P=null,j=!1,ot=!1;if(C){let mt=yt.get(C);if(mt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(U.FRAMEBUFFER,null),B=!1;else if(mt.__webglFramebuffer===void 0)M.setupRenderTarget(C);else if(mt.__hasExternalTextures)M.rebindTextures(C,yt.get(C.texture).__webglTexture,yt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let At=C.depthTexture;if(mt.__boundDepthTexture!==At){if(At!==null&&yt.has(At)&&(C.width!==At.image.width||C.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(C)}}let wt=C.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(ot=!0);let Rt=yt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Rt[V])?P=Rt[V][F]:P=Rt[V],j=!0):C.samples>0&&M.useMultisampledRTT(C)===!1?P=yt.get(C).__webglMultisampledFramebuffer:Array.isArray(Rt)?P=Rt[F]:P=Rt,w.copy(C.viewport),O.copy(C.scissor),z=C.scissorTest}else w.copy(_t).multiplyScalar(H).floor(),O.copy(Nt).multiplyScalar(H).floor(),z=Jt;if(It.bindFramebuffer(U.FRAMEBUFFER,P)&&B&&It.drawBuffers(C,P),It.viewport(w),It.scissor(O),It.setScissorTest(z),j){let mt=yt.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,mt.__webglTexture,F)}else if(ot){let mt=yt.get(C.texture),wt=V||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,mt.__webglTexture,F||0,wt)}y=-1},this.readRenderTargetPixels=function(C,V,F,B,P,j,ot){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=yt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ot!==void 0&&(gt=gt[ot]),gt){It.bindFramebuffer(U.FRAMEBUFFER,gt);try{let mt=C.texture,wt=mt.format,Rt=mt.type;if(!Ot.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-B&&F>=0&&F<=C.height-P&&U.readPixels(V,F,B,P,Dt.convert(wt),Dt.convert(Rt),j)}finally{let mt=D!==null?yt.get(D).__webglFramebuffer:null;It.bindFramebuffer(U.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(C,V,F,B,P,j,ot){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=yt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ot!==void 0&&(gt=gt[ot]),gt){let mt=C.texture,wt=mt.format,Rt=mt.type;if(!Ot.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=C.width-B&&F>=0&&F<=C.height-P){It.bindFramebuffer(U.FRAMEBUFFER,gt);let At=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,At),U.bufferData(U.PIXEL_PACK_BUFFER,j.byteLength,U.STREAM_READ),U.readPixels(V,F,B,P,Dt.convert(wt),Dt.convert(Rt),0);let Xt=D!==null?yt.get(D).__webglFramebuffer:null;It.bindFramebuffer(U.FRAMEBUFFER,Xt);let te=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Cu(U,te,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,At),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,j),U.deleteBuffer(At),U.deleteSync(te),j}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,V=null,F=0){C.isTexture!==!0&&(ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,C=arguments[1]);let B=Math.pow(2,-F),P=Math.floor(C.image.width*B),j=Math.floor(C.image.height*B),ot=V!==null?V.x:0,gt=V!==null?V.y:0;M.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,ot,gt,P,j),It.unbindTexture()},this.copyTextureToTexture=function(C,V,F=null,B=null,P=0){C.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,C=arguments[1],V=arguments[2],P=arguments[3]||0,F=null);let j,ot,gt,mt,wt,Rt,At,Xt,te,ie=C.isCompressedTexture?C.mipmaps[P]:C.image;F!==null?(j=F.max.x-F.min.x,ot=F.max.y-F.min.y,gt=F.isBox3?F.max.z-F.min.z:1,mt=F.min.x,wt=F.min.y,Rt=F.isBox3?F.min.z:0):(j=ie.width,ot=ie.height,gt=ie.depth||1,mt=0,wt=0,Rt=0),B!==null?(At=B.x,Xt=B.y,te=B.z):(At=0,Xt=0,te=0);let Pe=Dt.convert(V.format),Yt=Dt.convert(V.type),vt;V.isData3DTexture?(M.setTexture3D(V,0),vt=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(M.setTexture2DArray(V,0),vt=U.TEXTURE_2D_ARRAY):(M.setTexture2D(V,0),vt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);let hn=U.getParameter(U.UNPACK_ROW_LENGTH),Zt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Xe=U.getParameter(U.UNPACK_SKIP_PIXELS),li=U.getParameter(U.UNPACK_SKIP_ROWS),Le=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ie.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ie.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,mt),U.pixelStorei(U.UNPACK_SKIP_ROWS,wt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Rt);let Ji=C.isDataArrayTexture||C.isData3DTexture,se=V.isDataArrayTexture||V.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let en=yt.get(C),ji=yt.get(V),ke=yt.get(en.__renderTarget),bn=yt.get(ji.__renderTarget);It.bindFramebuffer(U.READ_FRAMEBUFFER,ke.__webglFramebuffer),It.bindFramebuffer(U.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let En=0;En<gt;En++)Ji&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(C).__webglTexture,P,Rt+En),C.isDepthTexture?(se&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(V).__webglTexture,P,te+En),U.blitFramebuffer(mt,wt,j,ot,At,Xt,j,ot,U.DEPTH_BUFFER_BIT,U.NEAREST)):se?U.copyTexSubImage3D(vt,P,At,Xt,te+En,mt,wt,j,ot):U.copyTexSubImage2D(vt,P,At,Xt,te+En,mt,wt,j,ot);It.bindFramebuffer(U.READ_FRAMEBUFFER,null),It.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else se?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(vt,P,At,Xt,te,j,ot,gt,Pe,Yt,ie.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(vt,P,At,Xt,te,j,ot,gt,Pe,ie.data):U.texSubImage3D(vt,P,At,Xt,te,j,ot,gt,Pe,Yt,ie):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,P,At,Xt,j,ot,Pe,Yt,ie.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,P,At,Xt,ie.width,ie.height,Pe,ie.data):U.texSubImage2D(U.TEXTURE_2D,P,At,Xt,j,ot,Pe,Yt,ie);U.pixelStorei(U.UNPACK_ROW_LENGTH,hn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Zt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Xe),U.pixelStorei(U.UNPACK_SKIP_ROWS,li),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Le),P===0&&V.generateMipmaps&&U.generateMipmap(vt),It.unbindTexture()},this.copyTextureToTexture3D=function(C,V,F=null,B=null,P=0){return C.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,B=arguments[1]||null,C=arguments[2],V=arguments[3],P=arguments[4]||0),ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,V,F,B,P)},this.initRenderTarget=function(C){yt.get(C).__webglFramebuffer===void 0&&M.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?M.setTextureCube(C,0):C.isData3DTexture?M.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?M.setTexture2DArray(C,0):M.setTexture2D(C,0),It.unbindTexture()},this.resetState=function(){b=0,E=0,D=null,It.reset(),$t.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}};var Ar=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ii=class extends On{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Cl=new ce,Io=new or,qs=new Ni,Ws=new R,zi=class extends be{constructor(t=new xe,e=new ii){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(s),qs.radius+=r,t.ray.intersectsSphere(qs)===!1)return;Cl.copy(s).invert(),Io.copy(t.ray).applyMatrix4(Cl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=u,A=f;m<A;m++){let g=l.getX(m);Ws.fromBufferAttribute(d,g),vl(Ws,g,c,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,A=f;m<A;m++)Ws.fromBufferAttribute(d,m),vl(Ws,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vl(i,t,e,n,s,r,a){let o=Io.distanceSqToPoint(i);if(o<e){let c=new R;Io.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Mn=class extends Be{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},qe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new pt:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],a=[],o=new R,c=new ce;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Me(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Me(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ds=class extends qe{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Mo=class extends ds{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function tc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Xs=new R,ma=new tc,Aa=new tc,xa=new tc,So=class extends qe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Xs.subVectors(s[0],s[1]).add(s[0]),l=Xs);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Xs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xs),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(d),f),A=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);A<1e-4&&(A=1),m<1e-4&&(m=A),g<1e-4&&(g=A),ma.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,m,A,g),Aa.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,m,A,g),xa.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,m,A,g)}else this.curveType==="catmullrom"&&(ma.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Aa.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),xa.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(ma.calc(c),Aa.calc(c),xa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function _l(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function mm(i,t){let e=1-i;return e*e*t}function Am(i,t){return 2*(1-i)*i*t}function xm(i,t){return i*i*t}function os(i,t,e,n){return mm(i,t)+Am(i,e)+xm(i,n)}function Cm(i,t){let e=1-i;return e*e*e*t}function vm(i,t){let e=1-i;return 3*e*e*i*t}function _m(i,t){return 3*(1-i)*i*i*t}function ym(i,t){return i*i*i*t}function cs(i,t,e,n,s){return Cm(i,t)+vm(i,e)+_m(i,n)+ym(i,s)}var xr=class extends qe{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cs(t,s.x,r.x,a.x,o.x),cs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bo=class extends qe{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cs(t,s.x,r.x,a.x,o.x),cs(t,s.y,r.y,a.y,o.y),cs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Cr=class extends qe{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends qe{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vr=class extends qe{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(os(t,s.x,r.x,a.x),os(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wo=class extends qe{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(os(t,s.x,r.x,a.x),os(t,s.y,r.y,a.y),os(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_r=class extends qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(_l(o,c.x,l.x,h.x,d.x),_l(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},yl=Object.freeze({__proto__:null,ArcCurve:Mo,CatmullRomCurve3:So,CubicBezierCurve:xr,CubicBezierCurve3:bo,EllipseCurve:ds,LineCurve:Cr,LineCurve3:Eo,QuadraticBezierCurve:vr,QuadraticBezierCurve3:wo,SplineCurve:_r}),To=class extends qe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new yl[s.type]().fromJSON(s))}return this}},yr=class extends To{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Cr(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new vr(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new xr(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new _r(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new ds(t,e,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var si=class i extends xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new R,h=new pt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(o,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Oi=class i extends xe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,A=[],g=n/2,p=0;S(),a===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(h),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(f,2));function S(){let v=new R,L=new R,b=0,E=(e-t)/n;for(let D=0;D<=r;D++){let y=[],_=D/r,w=_*(e-t)+t;for(let O=0;O<=s;O++){let z=O/s,G=z*c+o,K=Math.sin(G),q=Math.cos(G);L.x=w*K,L.y=-_*n+g,L.z=w*q,d.push(L.x,L.y,L.z),v.set(K,E,q).normalize(),u.push(v.x,v.y,v.z),f.push(z,1-_),y.push(m++)}A.push(y)}for(let D=0;D<s;D++)for(let y=0;y<r;y++){let _=A[y][D],w=A[y+1][D],O=A[y+1][D+1],z=A[y][D+1];(t>0||y!==0)&&(h.push(_,w,z),b+=3),(e>0||y!==r-1)&&(h.push(w,O,z),b+=3)}l.addGroup(p,b,0),p+=b}function I(v){let L=m,b=new pt,E=new R,D=0,y=v===!0?t:e,_=v===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,g*_,0),u.push(0,_,0),f.push(.5,.5),m++;let w=m;for(let O=0;O<=s;O++){let G=O/s*c+o,K=Math.cos(G),q=Math.sin(G);E.x=y*q,E.y=g*_,E.z=y*K,d.push(E.x,E.y,E.z),u.push(0,_,0),b.x=K*.5+.5,b.y=q*.5*_+.5,f.push(b.x,b.y),m++}for(let O=0;O<s;O++){let z=L+O,G=w+O;v===!0?h.push(G,G+1,z):h.push(G+1,G,z),D+=3}l.addGroup(p,D,v===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ki=class i extends Oi{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var fs=class extends yr{constructor(t){super(t),this.uuid=qi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new yr().fromJSON(s))}return this}},Im={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Jl(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,d,u,f;if(n&&(r=wm(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)d=i[m],u=i[m+1],d<o&&(o=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return ps(r,a,e,o,c,f,0),a}};function Jl(i,t,e,n,s){let r,a;if(s===zm(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Il(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Il(r,i[r],i[r+1],a);return a&&Pr(a,a.next)&&(ms(a),a=a.next),a}function ri(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Pr(e,e.next)||oe(e.prev,e,e.next)===0)){if(ms(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ps(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Um(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Sm(i,n,s,r):Mm(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ms(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=bm(ri(i),t,e),ps(i,t,e,n,s,r,2)):a===2&&Em(i,t,e,n,s,r):ps(ri(i),t,e,n,s,r,1);break}}}function Mm(i){let t=i.prev,e=i,n=i.next;if(oe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,d=o<c?o<l?o:l:c<l?c:l,u=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&Si(s,o,r,c,a,l,m.x,m.y)&&oe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Sm(i,t,e,n){let s=i.prev,r=i,a=i.next;if(oe(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,u=a.y,f=o<c?o<l?o:l:c<l?c:l,m=h<d?h<u?h:u:d<u?d:u,A=o>c?o>l?o:l:c>l?c:l,g=h>d?h>u?h:u:d>u?d:u,p=Vo(f,m,t,e,n),S=Vo(A,g,t,e,n),I=i.prevZ,v=i.nextZ;for(;I&&I.z>=p&&v&&v.z<=S;){if(I.x>=f&&I.x<=A&&I.y>=m&&I.y<=g&&I!==s&&I!==a&&Si(o,h,c,d,l,u,I.x,I.y)&&oe(I.prev,I,I.next)>=0||(I=I.prevZ,v.x>=f&&v.x<=A&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&Si(o,h,c,d,l,u,v.x,v.y)&&oe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;I&&I.z>=p;){if(I.x>=f&&I.x<=A&&I.y>=m&&I.y<=g&&I!==s&&I!==a&&Si(o,h,c,d,l,u,I.x,I.y)&&oe(I.prev,I,I.next)>=0)return!1;I=I.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=A&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&Si(o,h,c,d,l,u,v.x,v.y)&&oe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function bm(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Pr(s,r)&&jl(s,n,n.next,r)&&gs(s,r)&&gs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ms(n),ms(n.next),n=i=r),n=n.next}while(n!==i);return ri(n)}function Em(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Nm(a,o)){let c=$l(a,o);a=ri(a,a.next),c=ri(c,c.next),ps(a,t,e,n,s,r,0),ps(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function wm(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Jl(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Lm(l));for(s.sort(Tm),r=0;r<s.length;r++)e=Vm(s[r],e);return e}function Tm(i,t){return i.x-t.x}function Vm(i,t){let e=Rm(i,t);if(!e)return t;let n=$l(e,i);return ri(n,n.next),ri(e,e.next)}function Rm(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let u=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Si(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(d=Math.abs(a-e.y)/(r-e.x),gs(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Pm(s,e)))&&(s=e,h=d)),e=e.next;while(e!==o);return s}function Pm(i,t){return oe(i.prev,i,t.prev)<0&&oe(t.next,i,i.next)<0}function Um(i,t,e,n){let s=i;do s.z===0&&(s.z=Vo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Dm(s)}function Dm(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function Vo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Lm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Si(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Nm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Fm(i,t)&&(gs(i,t)&&gs(t,i)&&Bm(i,t)&&(oe(i.prev,i,t.prev)||oe(i,t.prev,t))||Pr(i,t)&&oe(i.prev,i,i.next)>0&&oe(t.prev,t,t.next)>0)}function oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Pr(i,t){return i.x===t.x&&i.y===t.y}function jl(i,t,e,n){let s=Zs(oe(i,t,e)),r=Zs(oe(i,t,n)),a=Zs(oe(e,n,i)),o=Zs(oe(e,n,t));return!!(s!==r&&a!==o||s===0&&Ys(i,e,t)||r===0&&Ys(i,n,t)||a===0&&Ys(e,i,n)||o===0&&Ys(e,t,n))}function Ys(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Zs(i){return i>0?1:i<0?-1:0}function Fm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&jl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function gs(i,t){return oe(i.prev,i,i.next)<0?oe(i,t,i.next)>=0&&oe(i,i.prev,t)>=0:oe(i,t,i.prev)<0||oe(i,i.next,t)<0}function Bm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function $l(i,t){let e=new Ro(i.i,i.x,i.y),n=new Ro(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Il(i,t,e,n){let s=new Ro(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ms(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ro(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function zm(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ls=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ml(t),Sl(n,t);let a=t.length;e.forEach(Ml);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Sl(n,e[c]);let o=Im.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Ml(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var je=class i extends xe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],d=t,u=(e-t)/s,f=new R,m=new pt;for(let A=0;A<=s;A++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}d+=u}for(let A=0;A<s;A++){let g=A*(n+1);for(let p=0;p<n;p++){let S=p+g,I=S,v=S+n+1,L=S+n+2,b=S+1;o.push(I,v,b),o.push(v,L,b)}}this.setIndex(o),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ir=class i extends xe{constructor(t=new fs([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new jt(s,3)),this.setAttribute("normal",new jt(r,3)),this.setAttribute("uv",new jt(a,2));function l(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,m=u.holes;ls.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let S=m[g];ls.isClockWise(S)===!0&&(m[g]=S.reverse())}let A=ls.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let S=m[g];f=f.concat(S)}for(let g=0,p=f.length;g<p;g++){let S=f[g];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let g=0,p=A.length;g<p;g++){let S=A[g],I=S[0]+d,v=S[1]+d,L=S[2]+d;n.push(I,v,L),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Om(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Om(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Sn=class i extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new R,u=new R,f=[],m=[],A=[],g=[];for(let p=0;p<=n;p++){let S=[],I=p/n,v=0;p===0&&a===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let L=0;L<=e;L++){let b=L/e;d.x=-t*Math.cos(s+b*r)*Math.sin(a+I*o),d.y=t*Math.cos(a+I*o),d.z=t*Math.sin(s+b*r)*Math.sin(a+I*o),m.push(d.x,d.y,d.z),u.copy(d).normalize(),A.push(u.x,u.y,u.z),g.push(b+v,1-I),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let I=h[p][S+1],v=h[p][S],L=h[p+1][S],b=h[p+1][S+1];(p!==0||a>0)&&f.push(I,v,b),(p!==n-1||c<Math.PI)&&f.push(v,L,b)}this.setIndex(f),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(A,3)),this.setAttribute("uv",new jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var kn=class i extends xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new R,d=new R,u=new R;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let A=m/s*r,g=f/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(A),d.y=(t+e*Math.cos(g))*Math.sin(A),d.z=e*Math.sin(g),o.push(d.x,d.y,d.z),h.x=t*Math.cos(A),h.y=t*Math.sin(A),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let A=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,S=(s+1)*f+m;a.push(A,g,S),a.push(g,p,S)}this.setIndex(a),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var on=class extends On{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ks(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function km(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Hi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Po=class extends Hi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ic,endingEnd:Ic}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mc:r=t,o=2*e-n;break;case Sc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Mc:a=t,c=2*n-e;break;case Sc:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),A=m*m,g=A*m,p=-u*g+2*u*A-u*m,S=(1+u)*g+(-1.5-2*u)*A+(-.5+u)*m+1,I=(-1-f)*g+(1.5+f)*A+.5*m,v=f*g-f*A;for(let L=0;L!==o;++L)r[L]=p*a[h+L]+S*a[l+L]+I*a[c+L]+v*a[d+L];return r}},Uo=class extends Hi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},Do=class extends Hi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$e=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ks(e,this.TimeBufferType),this.values=Ks(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ks(t.times,Array),values:Ks(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Do(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Po(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case nr:e=this.InterpolantFactoryMethodDiscrete;break;case so:e=this.InterpolantFactoryMethodLinear;break;case kr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return so;case this.InterpolantFactoryMethodSmooth:return kr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&km(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===kr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let A=e[d+m];if(A!==e[u+m]||A!==e[f+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};$e.prototype.TimeBufferType=Float32Array;$e.prototype.ValueBufferType=Float32Array;$e.prototype.DefaultInterpolation=so;var ai=class extends $e{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="bool";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=nr;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Lo=class extends $e{};Lo.prototype.ValueTypeName="color";var No=class extends $e{};No.prototype.ValueTypeName="number";var Fo=class extends Hi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)zn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Mr=class extends $e{InterpolantFactoryMethodLinear(t){return new Fo(this.times,this.values,this.getValueSize(),t)}};Mr.prototype.ValueTypeName="quaternion";Mr.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends $e{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="string";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=nr;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends $e{};Bo.prototype.ValueTypeName="vector";var zo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],m=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},Hm=new zo,Oo=class{constructor(t){this.manager=t!==void 0?t:Hm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Oo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sr=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},br=class extends Sr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ca=new ce,bl=new R,El=new R,ko=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new us,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;bl.setFromMatrixPosition(t.matrixWorld),e.position.copy(bl),El.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(El),e.updateMatrixWorld(),Ca.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ca)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ho=class extends ko{constructor(){super(new fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Er=class extends Sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Ho}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var wr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=wl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function wl(){return performance.now()}var ec="\\[\\]\\.:\\/",Gm=new RegExp("["+ec+"]","g"),nc="[^"+ec+"]",qm="[^"+ec.replace("\\.","")+"]",Wm=/((?:WC+[\/:])*)/.source.replace("WC",nc),Xm=/(WCOD+)?/.source.replace("WCOD",qm),Ym=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nc),Zm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nc),Km=new RegExp("^"+Wm+Xm+Ym+Zm+"$"),Qm=["material","materials","bones","map"],Go=class{constructor(t,e,n){let s=n||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gm,"")}static parseTrackName(t){let e=Km.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=Go;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var oA=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qo);var Xi={x0:-9.5,x1:9.5,z0:-8.5,z1:8.5},Jm=5.2,Ee=.35,Ur=.14,ci=(i,t)=>Math.hypot(i.x-t.x,i.z-t.z),ze={x:-6.5,z:4.5,r:1.4,cap:14,every:.7},Nr=[{id:"rack1",x:-2.5,z:1.5,r:1.3,cap:12},{id:"rack2",x:-2.5,z:-2.5,r:1.3,cap:12,needs:"rack2"}],Dr=[{x:3,z:-6.2},{x:5.5,z:-6.2},{x:8,z:-6.2},{x:3,z:-3.8,needs:"shelves2"},{x:5.5,z:-3.8,needs:"shelves2"},{x:8,z:-3.8,needs:"shelves2"}],ic=[{id:"main",x:3,z:3,till:{x:4.6,z:3},coins:{x:3,z:5.2},serve:1,robot:!1},{id:"robot1",x:7.4,z:3,till:{x:9,z:3},coins:{x:7.4,z:5.2},serve:1.5,robot:!0,needs:"robot1"},{id:"robot2",x:7.4,z:-.4,till:{x:9,z:-.4},coins:{x:7.4,z:1.4},serve:1.5,robot:!0,needs:"robot2"},{id:"hyper",x:-1,z:6.4,till:{x:.6,z:6.4},coins:{x:-3,z:7.2},serve:.45,robot:!0,needs:"hyper"}],sc=[{x:-7.4,z:-6.4},{x:.5,z:-7.2,needs:"shuttle2"}],tn=[{id:"rack2",cost:25,x:-5.4,z:-2.5,icon:"\u{1F9FA}",ar:"\u0631\u0641 \u0633\u0644\u0627\u0644 \u062A\u0627\u0646\u064A",en:"Second basket rack"},{id:"bigstack",cost:35,x:-7,z:1.2,icon:"\u{1F392}",ar:"\u062A\u0634\u064A\u0644 \u0633\u0644\u0627\u0644 \u0623\u0643\u062A\u0631",en:"Carry more baskets"},{id:"robot1",cost:55,x:7.4,z:6.8,icon:"\u{1F916}",ar:"\u0631\u0648\u0628\u0648\u062A \u0643\u0627\u0634\u064A\u0631",en:"Robot cashier"},{id:"shelves2",cost:65,x:5.5,z:-1.6,icon:"\u{1F34E}",ar:"\u0631\u0641\u0648\u0641 \u0623\u0643\u062A\u0631",en:"More shelves"},{id:"shuttle2",cost:80,x:.5,z:-4.6,icon:"\u{1F680}",ar:"\u0645\u0643\u0648\u0643 \u062A\u0627\u0646\u064A",en:"Second shuttle"},{id:"robot2",cost:95,x:9,z:-2.6,icon:"\u{1F916}",ar:"\u0631\u0648\u0628\u0648\u062A \u0643\u0627\u0634\u064A\u0631 \u062A\u0627\u0646\u064A",en:"Second robot cashier"},{id:"hyper",cost:140,x:-1,z:4.3,icon:"\u26A1",ar:"\u0627\u0644\u0643\u0627\u0634\u064A\u0631 \u0627\u0644\u062E\u0627\u0631\u0642",en:"Hyper checkout"}],eh=["astro","alien","astro2","blob","alien2","squid"];function jm(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var Lr=class{constructor(t,e=3){this.save=t,this.rand=jm(e),this.p={x:-4,z:4,heading:Math.PI,moving:0,stack:0,tick:0},this.dispenser=6,this.dispT=0,this.racks=Nr.map(n=>({...n,n:0})),this.checkouts=ic.map(n=>({...n,t:0,cash:0})),this.shoppers=[],this.spawnT=1,this.nextId=1,this.events=[],this.time=0}has(t){return this.save.unlocked.includes(t)}open(t){return!t.needs||this.has(t.needs)}get capacity(){return this.has("bigstack")?10:6}get pads(){return tn.filter(t=>!this.has(t.id)).slice(0,2)}get complete(){return this.save.unlocked.length===tn.length}step(t,e={x:0,z:0}){return this.events=[],this.time+=t,this._move(this.p,e,t),this._dispense(t),this._player(t),this._shoppers(t),this._checkouts(t),this.events}_solids(){let t=[];for(let e of this.checkouts)this.open(e)&&t.push([e.x-1.1,e.z-.5,e.x+1.1,e.z+.5]);for(let e of this.racks)this.open(e)&&t.push([e.x-.8,e.z-.35,e.x+.8,e.z+.35]);for(let e of Dr)this.open(e)&&t.push([e.x-.7,e.z-.5,e.x+.7,e.z+.5]);return t}_move(t,e,n,s=Jm,r=this._solids()){let{x:a,z:o}=e,c=Math.hypot(a,o);if(c>1&&(a/=c,o/=c),t.moving=Math.min(1,c),c<.08){t.moving=0;return}t.heading=Math.atan2(a,o),t.x=Math.max(Xi.x0+Ee,Math.min(Xi.x1-Ee,t.x+a*s*n)),t.z=Math.max(Xi.z0+Ee,Math.min(Xi.z1-Ee,t.z+o*s*n));for(let[l,h,d,u]of r)if(t.x>l-Ee&&t.x<d+Ee&&t.z>h-Ee&&t.z<u+Ee){let f=[[t.x-(l-Ee),"x",l-Ee],[d+Ee-t.x,"x",d+Ee],[t.z-(h-Ee),"z",h-Ee],[u+Ee-t.z,"z",u+Ee]];f.sort((m,A)=>m[0]-A[0]),t[f[0][1]]=f[0][2]}}_dispense(t){this.dispT+=t,this.dispT>=ze.every&&this.dispenser<ze.cap&&(this.dispT=0,this.dispenser++,this.events.push({type:"spawnBasket"}))}_player(t){var n;let e=this.p;if(e.tick-=t,!(e.tick>0)){if(ci(e,ze)<ze.r&&this.dispenser>0&&e.stack<this.capacity){this.dispenser--,e.stack++,e.tick=Ur,this.events.push({type:"pick",n:e.stack}),e.stack===this.capacity&&this.events.push({type:"full"});return}for(let s of this.racks)if(this.open(s)&&e.stack>0&&s.n<s.cap&&ci(e,s)<s.r+.4){e.stack--,s.n++,e.tick=Ur,this.events.push({type:"rack",rack:s.id});return}for(let s of this.checkouts)if(s.cash>0&&ci(e,s.coins)<1.2){let r=Math.min(s.cash,Math.max(1,Math.ceil(s.cash/6)));s.cash-=r,this.save.coins+=r,e.tick=Ur*.7,this.events.push({type:"collect",n:r,at:s.id});return}for(let s of this.pads)if(ci(e,s)<1&&this.save.coins>0){let r=(n=this.save.paid[s.id])!=null?n:0,a=Math.min(this.save.coins,s.cost-r,Math.max(1,Math.ceil(s.cost/18)));this.save.coins-=a,this.save.paid[s.id]=r+a,e.tick=Ur,this.events.push({type:"pay",pad:s.id,paid:r+a,cost:s.cost}),r+a>=s.cost&&(delete this.save.paid[s.id],this.save.unlocked.push(s.id),this.events.push({type:"unlock",pad:s.id}),this.complete&&!this.save.complete&&(this.save.complete=!0,this.events.push({type:"complete"})));return}}}_shoppers(t){let e=sc.filter(s=>this.open(s));this.spawnT-=t;let n=6+(this.has("shuttle2")?4:0)+(this.has("hyper")?2:0);if(this.spawnT<=0&&this.shoppers.length<n){this.spawnT=(this.has("shuttle2")?2.2:3.4)*(.8+this.rand()*.4);let s=e[Math.floor(this.rand()*e.length)];this.shoppers.push({id:this.nextId++,kind:eh[Math.floor(this.rand()*eh.length)],x:s.x,z:s.z,home:s,state:"toRack",basket:!1,goods:0,t:0,heading:0,moving:0,target:null,lane:null,happy:0}),this.events.push({type:"arrive",x:s.x,z:s.z})}for(let s of this.shoppers)if(s.t-=t,s.state==="toRack"){let r=this.racks.filter(a=>this.open(a)).sort((a,o)=>o.n-a.n)[0];s.target={x:r.x-1.2,z:r.z+(s.id%3-1)*.5},this._walk(s,s.target,t)&&r.n>0?(r.n--,s.basket=!0,s.state="shop",s.t=2.5+this.rand()*2,s.target=null,this.events.push({type:"takeBasket",id:s.id})):ci(s,s.target)<.3&&(s.waiting=r.n===0)}else if(s.state==="shop"){if(s.waiting=!1,!s.target||this._walk(s,s.target,t)){let r=Dr.filter(o=>this.open(o)),a=r[Math.floor(this.rand()*r.length)];s.target={x:a.x+(this.rand()-.5)*1.2,z:a.z+.9},s.goods++}s.t<=0&&(s.state="queue",s.target=null)}else if(s.state==="queue"){if(!s.lane){let l=this.checkouts.filter(h=>this.open(h));s.lane=l.sort((h,d)=>this._queue(h).length-this._queue(d).length)[0].id}let r=this.checkouts.find(l=>l.id===s.lane),o=this._queue(r).indexOf(s),c={x:r.x-1.4-o*.9,z:r.z-.8};this._walk(s,c,t),s.front=o===0&&ci(s,c)<.3}else s.state==="leave"&&(s.happy=Math.max(0,s.happy-t),this._walk(s,s.home,t)&&(s.gone=!0));this.shoppers=this.shoppers.filter(s=>!s.gone)}_queue(t){return this.shoppers.filter(e=>e.state==="queue"&&e.lane===t.id)}_walk(t,e,n){let s=e.x-t.x,r=e.z-t.z,a=Math.hypot(s,r);if(a<.15)return t.moving=0,!0;let o=Math.min(a,2.6*n);return t.x+=s/a*o,t.z+=r/a*o,t.heading=Math.atan2(s,r),t.moving=1,!1}_checkouts(t){for(let e of this.checkouts){if(!this.open(e))continue;let n=this._queue(e).find(r=>r.front),s=e.robot||ci(this.p,e.till)<1.3;if(e.busy=!!n&&s,!n||!s){e.t=0;continue}if(e.t+=t,e.t>=e.serve){e.t=0;let r=3+Math.min(4,n.goods)+(this.has("shelves2")?1:0);e.cash+=r,this.save.served++,n.state="leave",n.happy=1.4,n.lane=null,this.events.push({type:"sold",at:e.id,coins:r,x:e.x,z:e.z,by:e.robot?"robot":"child"})}}}};function nh(i){let t=i&&typeof i=="object"?i:{},e=new Set(tn.map(a=>a.id)),n=Array.isArray(t.unlocked)?[...new Set(t.unlocked.filter(a=>e.has(a)))]:[],s={};if(t.paid&&typeof t.paid=="object")for(let a of tn){let o=Math.floor(Number(t.paid[a.id]));o>0&&o<a.cost&&!n.includes(a.id)&&(s[a.id]=o)}let r=a=>Number.isFinite(Number(a))&&Number(a)>0?Math.floor(Number(a)):0;return{coins:Math.min(r(t.coins),999999),unlocked:n,paid:s,served:r(t.served),complete:t.complete===!0&&n.length===tn.length,muted:t.muted===!0}}var rc=new Map;function ut(i,t=0,e=1){let n=`${i}|${t}|${e}`;return rc.has(n)||rc.set(n,new on({color:i,emissive:t,emissiveIntensity:e})),rc.get(n)}function fe(i,t,e,n,s=0,r=0,a=0){let o=new Ut(new In(i,t,e),n);return o.position.set(s,r,a),o}function Re(i,t,e,n,s=0,r=0,a=0,o=14){let c=new Ut(new Oi(i,t,e,o),n);return c.position.set(s,r,a),c}function le(i,t,e=0,n=0,s=0,r=1,a=1,o=1,c=14){let l=new Ut(new Sn(i,c,Math.max(8,c-4)),t);return l.position.set(e,n,s),l.scale.set(r,a,o),l}function $m(i,t,e,n=0,s=0,r=0,a=10){let o=new Ut(new ki(i,t,a),e);return o.position.set(n,s,r),o}var tA=15922938,Yi=3856584;function ac(i=tA,t=Yi,e=15777946,n=3810324,s=!0){let r=new Ht,a=new Ht;r.add(a);let o=ut(i),c=ut(t),l=[];for(let f of[-.14,.14]){let m=new Ht;m.position.set(f,.42,0),m.add(Re(.11,.12,.36,o,0,-.18,0,10)),m.add(le(.13,c,0,-.38,.04,1,.65,1.3,10)),a.add(m),l.push(m)}a.add(Re(.28,.32,.55,o,0,.72,0,16)),a.add(fe(.3,.2,.06,c,0,.8,.28)),a.add(le(.04,ut(16734810,16719904,.8),-.07,.82,.31,1,1,.5,8)),a.add(le(.04,ut(5963674,2162528,.8),.07,.82,.31,1,1,.5,8)),a.add(fe(.5,.42,.22,o,0,.78,-.3));let h=[];for(let f of[-1,1]){let m=new Ht;m.position.set(f*.34,.92,0),m.add(Re(.09,.1,.36,o,0,-.17,0,8)),m.add(le(.1,c,0,-.37,0,1,1,1,8)),a.add(m),h.push(m)}let d=new Ht;d.position.y=1.3,d.add(le(.3,ut(e))),d.add(le(.315,ut(n),0,.08,-.06,1,.85,.95));for(let f of[-1,1])d.add(le(.05,ut(2759184),f*.11,0,.27,1,1.3,.6,8)),d.add(le(.045,ut(16751258),f*.18,-.09,.23,1,.6,.4,8));if(d.add(new Ut(new kn(.06,.015,5,10,Math.PI),ut(9058858)).translateY(-.1).translateZ(.28).rotateZ(Math.PI)),d.add(Re(.33,.35,.1,o,0,-.27,0,16)),s){let f=new Ut(new kn(.32,.035,6,18,Math.PI),ut(2763834));d.add(f);for(let A of[-1,1])d.add(Re(.1,.1,.08,ut(t),A*.32,0,0,12).rotateZ(Math.PI/2));let m=Re(.015,.015,.28,ut(2763834),.24,-.1,.16,6);m.rotation.x=Math.PI/2.4,d.add(m)}a.add(d);let u=new Ht;return u.position.set(0,.55,.42),a.add(u),{root:r,body:a,legs:l,arms:h,head:d,back:u}}function ih(i="alien"){let t=new Ht,e=new Ht;t.add(e);let n=i==="blob"?11561704:i==="squid"?16747192:i==="alien2"?5953776:8052826,s=ut(n),r=[];if(i==="squid")for(let l=0;l<6;l++){let h=l/6*Math.PI*2,d=le(.08,s,Math.cos(h)*.22,.15,Math.sin(h)*.22,1,2.2,1,8);e.add(d),r.push(d)}else for(let l of[-.14,.14]){let h=new Ht;h.position.set(l,.35,0),h.add(Re(.08,.1,.32,s,0,-.16,0,8)),e.add(h),r.push(h)}e.add(le(.36,s,0,.72,0,1,1.1,.95,16)),e.add(le(.24,ut(16777215),0,.68,.2,1,1,.5,12));let a=new Ht;if(a.position.y=1.25,a.add(le(.32,s,0,0,0,1.1,1,1,16)),i==="blob")a.add(le(.15,ut(16777215),0,.03,.26,1,1,.6,12)),a.add(le(.08,ut(1708048),0,.03,.33,1,1,.5,10));else for(let l of[-1,1])a.add(le(.09,ut(16777215),l*.12,.05,.26,1,1.2,.6,10)),a.add(le(.05,ut(1708048),l*.12,.04,.31,1,1.2,.5,8));if(a.add(new Ut(new kn(.08,.018,5,10,Math.PI),ut(3807802)).translateY(-.12).translateZ(.29).rotateZ(Math.PI)),i==="alien"||i==="alien2")for(let l of[-1,1]){let h=Re(.02,.02,.35,ut(n),l*.12,.42,0,6);h.rotation.z=-l*.3,a.add(h),a.add(le(.07,ut(16765498,16755200,.6),l*.18,.6,0,1,1,1,8))}e.add(a);let o=[];for(let l of[-1,1]){let h=new Ht;h.position.set(l*.36,.85,0),h.add(le(.08,s,0,-.16,0,.9,2.2,.9,8)),e.add(h),o.push(h)}let c=new Ht;return c.position.set(0,.7,.4),e.add(c),{root:t,body:e,legs:r,arms:o,head:a,back:c}}var eA;function Cs(i=1){let t=new Ht;t.add(fe(.62*i,.32*i,.44*i,new on({color:9105640,transparent:!0,opacity:.8}),0,.16*i,0)),t.add(fe(.66*i,.05*i,.48*i,ut(2799792),0,.33*i,0));let e=new Ut(new kn(.2*i,.025*i,6,12,Math.PI),ut(2799792));return e.position.y=.35*i,t.add(e),t.add(Re(.18*i,.18*i,.03*i,ut(10158079,3866623,.9),0,0,0,12)),t}function sh(){let i=new Ht,t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");e.fillStyle="#2a2a5a",e.fillRect(0,0,128,128),e.fillStyle="#ffc83a";for(let s=-128;s<256;s+=32)e.beginPath(),e.moveTo(s,0),e.lineTo(s+16,0),e.lineTo(s+144,128),e.lineTo(s+128,128),e.fill();let n=new Ut(new In(2.8,.12,2.8),new on({map:new Mn(t)}));return n.position.y=.06,i.add(n),i.add(fe(.2,.5,2.8,ut(14211312),-1.5,.25,0)),i.add(fe(2.8,.5,.2,ut(14211312),0,.25,-1.5)),i}function rh(){let i=new Ht,t=ut(13159644);for(let e of[-.75,.75])i.add(fe(.08,1.6,.08,t,e,.8,0));for(let e=0;e<3;e++)i.add(fe(1.6,.05,.6,ut(15264500),0,.2+e*.55,0));return i.add(fe(1.64,.14,.12,ut(Yi,2799792,.4),0,1.65,0)),i}function ah(){let i=new Ht;i.add(fe(1.4,.3,1,ut(15264500),0,.15,0));let t=new Ut(new Oi(.62,.62,1.3,20,1,!1,0,Math.PI),new on({color:12121343,transparent:!0,opacity:.35,side:Ge}));t.position.y=.95,t.rotation.y=-Math.PI/2,t.scale.z=.7,i.add(t),i.add(fe(1.4,.06,1,ut(15264500),0,1.62,0));let e=[16730698,16752672,8052826,16769098,11553512];for(let n=0;n<2;n++){i.add(fe(1.2,.04,.8,ut(14212328),0,.55+n*.5,0));for(let s=0;s<5;s++)i.add(le(.11,ut(e[(s+n)%5]),-.45+s*.22,.67+n*.5,.15+s%2*.12,1,1,1,8))}return i.add(fe(1.42,.06,.06,ut(10158079,3866623,.8),0,.31,.5)),i}function oh(i=!1){let t=new Ht,e=2.2;t.add(fe(e,1,1,ut(15922426),0,.5,0)),t.add(fe(e+.04,.12,1.04,ut(i?16762938:Yi,i?11171584:2799792,.4),0,1,0)),t.add(fe(e*.7,.06,.5,ut(2763834),-.2,1.07,0));let n=fe(.6,.45,.06,ut(2779880,2788095,.7),.8,1.45,0);if(n.rotation.y=-.4,t.add(n),t.add(Re(.04,.04,.4,ut(10133674),.8,1.2,0,6)),i){let s=new Ut(new kn(1.6,.14,8,32,Math.PI),ut(16762938,16755200,.6));s.position.y=.2,t.add(s)}return t}function ch(){let i=new Ht,t=ut(15922938);i.add(Re(.3,.38,.6,t,0,.4,0,16)),i.add(le(.32,t,0,.95,0,1.1,.9,1,16)),i.add(fe(.46,.2,.1,ut(1714762),0,.98,.27));for(let n of[-1,1])i.add(le(.05,ut(5963775,3866623,1),n*.1,.98,.33,1,1,.5,8));i.add(Re(.02,.02,.3,ut(10133674),0,1.35,0,6));let e=le(.07,ut(16734810,16719904,1),0,1.52,0,1,1,1,8);return i.add(e),i.userData.light=e,i}function lh(){let i=new Ht;i.add(Re(.22,.22,.06,ut(16762938,11171584,.4),0,.03,0,18));let t=new fs;for(let n=0;n<10;n++){let s=n%2?.06:.14,r=n/10*Math.PI*2+Math.PI/2;n===0?t.moveTo(Math.cos(r)*s,Math.sin(r)*s):t.lineTo(Math.cos(r)*s,Math.sin(r)*s)}let e=new Ut(new Ir(t),ut(16773280,16764992,.5));return e.rotation.x=-Math.PI/2,e.position.y=.065,i.add(e),i}function hh(){let i=new Ht,t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.fillStyle="#3a2a9a",e.beginPath(),e.arc(128,128,126,0,Math.PI*2),e.fill(),e.strokeStyle="#8a7aff",e.lineWidth=8;for(let r of[0,Math.PI/3,-Math.PI/3])e.save(),e.translate(128,128),e.rotate(r),e.beginPath(),e.ellipse(0,0,90,34,0,0,Math.PI*2),e.stroke(),e.restore();e.fillStyle="#ffc83a",e.beginPath();for(let r=0;r<10;r++){let a=r%2?14:32,o=r/10*Math.PI*2-Math.PI/2;e.lineTo(128+Math.cos(o)*a,128+Math.sin(o)*a)}e.fill();let n=new Ut(new si(1.6,40),new on({map:new Mn(t)}));n.rotation.x=-Math.PI/2,n.position.y=.03,i.add(n);let s=new Ht;return s.add(Re(.45,.6,1.5,ut(15922938),0,0,0,16).rotateX(Math.PI/2)),s.add($m(.45,.7,ut(Yi),0,0,1.1,16).rotateX(Math.PI/2)),s.add(fe(1.8,.06,.5,ut(Yi),0,-.1,-.4)),s.add(le(.18,ut(9099519,3836671,.5),0,.3,.5,1,.6,1.4,10)),s.position.y=.6,i.add(s),i.userData.shuttle=s,i}function uh(i){let t=new Ht,e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d");n.fillStyle="#b4acea",n.fillRect(0,0,256,256),n.strokeStyle="#9c94d8",n.lineWidth=4;for(let c=0;c<=256;c+=64)n.beginPath(),n.moveTo(c,0),n.lineTo(c,256),n.stroke(),n.beginPath(),n.moveTo(0,c),n.lineTo(256,c),n.stroke();let s=new Mn(e);s.wrapS=s.wrapT=Ui,s.repeat.set(5,4.5);let r=i.x1-i.x0+1,a=i.z1-i.z0+1;t.add(new Ut(new In(r,.6,a),[ut(9078472),ut(9078472),new on({map:s}),ut(6973096),ut(9078472),ut(9078472)]).translateY(-.3));let o=ut(Yi,2799792,.5);for(let[c,l,h,d]of[[0,i.z0-.5,r,.12],[0,i.z1+.5,r,.12],[i.x0-.5,0,.12,a],[i.x1+.5,0,.12,a]]){t.add(fe(h,.1,d,o,c,.8,l));let u=Math.round(Math.max(h,d)/1.2);for(let f=0;f<=u;f++){let m=h>d?-h/2+f*h/u:c,A=h>d?l:-d/2+f*d/u;t.add(Re(.04,.04,.8,ut(15264500),h>d?m:c,.4,h>d?l:A,6))}}for(let[c,l,h]of[[-5.5,-4.5,2.2],[5.5,3.5,2.4],[-1.5,5.5,1.8]]){let d=new Ut(new si(h,40),new Ve({map:nA()}));d.rotation.x=-Math.PI/2,d.position.set(c,.012,l),t.add(d)}for(let c=0;c<16;c++)t.add(fe(.4,.02,.1,ut(16762938),-4+c*.6,.01,-.5));return t}function dh(){let i=new Ht,t=document.createElement("canvas");t.width=256,t.height=128;let e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,128);n.addColorStop(0,"#ffb08a"),n.addColorStop(.5,"#ff7a5a"),n.addColorStop(1,"#e85a4a"),e.fillStyle=n,e.fillRect(0,0,256,128);for(let a=0;a<14;a++)e.fillStyle=`rgba(255,${180+a%3*20},140,0.35)`,e.fillRect(0,a*37%128,256,4+a%4*3);let s=new Ut(new Sn(30,40,28),new on({map:new Mn(t),emissive:6957594,emissiveIntensity:.3}));i.add(s);let r=new Ut(new je(38,46,64),new Ve({color:10158079,transparent:!0,opacity:.35,side:Ge}));return r.rotation.x=-Math.PI/2.4,i.add(r),i}function fh(i){let t=new Float32Array(i*3);for(let n=0;n<i;n++){let s=Math.random()*Math.PI*2,r=Math.random()*Math.PI,a=200+Math.random()*80;t.set([Math.cos(s)*Math.sin(r)*a,Math.cos(r)*a,Math.sin(s)*Math.sin(r)*a],n*3)}let e=new xe;return e.setAttribute("position",new Se(t,3)),new zi(e,new ii({color:16777215,size:1.6,sizeAttenuation:!0,fog:!1}))}var xs;function nA(){if(xs)return xs;let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d");t.fillStyle="#2a2470",t.beginPath(),t.arc(128,128,128,0,Math.PI*2),t.fill(),t.strokeStyle="#4a44a8",t.lineWidth=10,t.beginPath(),t.arc(128,128,112,0,Math.PI*2),t.stroke(),t.strokeStyle="#8a7aff",t.lineWidth=6;for(let e=0;e<3;e++)t.save(),t.translate(128,128),t.rotate(e*Math.PI/3),t.beginPath(),t.ellipse(0,0,70,26,0,0,Math.PI*2),t.stroke(),t.restore();return t.fillStyle="#ffd23a",t.beginPath(),t.arc(128,128,14,0,Math.PI*2),t.fill(),xs=new Mn(i),xs.colorSpace=Ce,xs}function ph(i,t){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");n.fillStyle="#1e1e28",n.fillRect(0,0,128,128),n.fillStyle="#ffc83a";for(let a=-128;a<256;a+=32)n.beginPath(),n.moveTo(a,0),n.lineTo(a+16,0),n.lineTo(a+16+128,128),n.lineTo(a+128,128),n.closePath(),n.fill();let s=new Mn(e);s.wrapS=s.wrapT=Ui,s.repeat.set(i/1.2,t/1.2),s.colorSpace=Ce;let r=new Ut(new Bi(i,t),new Ve({map:s}));return r.rotation.x=-Math.PI/2,r}function gh(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,c]of Object.entries(t))try{let l=atob(c.split(",")[1]),h=new Uint8Array(l.length);for(let u=0;u<l.length;u++)h[u]=l.charCodeAt(u);let d=a.ctx.decodeAudioData(h.buffer,u=>{a._smp[o]=u},()=>{});d&&d.catch&&d.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let c=this.ctx;if(c&&c.state==="running"&&!this.muted&&this.on!==!1){r(this);let l=this._smp&&this._smp[a];if(l){let h=c.createBufferSource(),d=c.createGain();h.buffer=l,d.gain.value=e[a]||.8,h.connect(d),d.connect(this.sfx||this.master||c.destination),h.start(c.currentTime+.005);return}}return n.call(this,a,o)}}function mh(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let c=a.ctx;fetch(o).then(l=>l.ok?l.arrayBuffer():Promise.reject()).then(l=>c.decodeAudioData(l)).then(l=>{if(a.ctx!==c)return;let h=c.createBufferSource(),d=c.createGain();h.buffer=l,h.loop=!0,d.gain.value=t,h.connect(d),d.connect(a.master||c.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var Ah={beep:"data:audio/mpeg;base64,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",coin:"data:audio/mpeg;base64,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",pay:"data:audio/mpeg;base64,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",unlock:"data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+zjAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAAB8AABsAABAQEBgYGCAgICgoKDAwMDA4ODhAQEBISEhQUFBQWFhYYGBgaGhocHBweHh4eICAgIiIiJCQkJiYmJigoKCoqKiwsLC4uLjAwMDAyMjI0NDQ2NjY4ODg4Ojo6PDw8Pj4+P///wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkAkAAAAAAAAAbANOtRAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+zjEAAAJ4TdjtBKACagnL78SgACpKTWVtUAAAQSAAGAEAAAAA/89CEIRrHP+xzv/85//6nOc5zt/5znOc5yEJ+Rv5CEb53oQn/6EDgCAQOEnDgo7/zD3/4eHh4eGAAAAAAePZ2iZmZmZmZaYuyQAAABAAQWq5rA/Kk2cafeVylqbkRQmkgbNp8M7mW8odxdrVRNRxxq474LRKhr5MKWP4j/riq+K7n4jev+v1+bOp6iRCUcb1UjrincGoRD5h6hpqEcOXD8Q6mZZFYxWHGeHepd2a6toFhX/+zjEBQAL5X+F/JEAGXsnL/yRlioegLhBJBCLAjE6zhVqLQ4oOFBKqucEIc4m5mVWuYKQp3YxWlS8js4r7aXIVmUwplsz0rUhDbmRDuQliKRj1ozG//9/9FQFFiggi9fb//+9iEvBrw7SOrS8wzMtsaJCCoJ2qZ0FWdkBIbcPMxjFvzNqujq5soUgODDHEMHmhqoD2/Za7vzaUj5bSKrms15ls1HfqmbdpjaX1vRXvvd7y1zFZh4ugmFSmEKmn/41syaIANoTOCr3//ba2togEAK10QJmCAL/+zjEB4AMIXV7pIzz0YUmr/yRllpo+RFkkvHoY9Mm6jULIkYcQ8QI2/CRTBHQy/0vmp5R24QRoRIlf7LnL5/0o3S5x2S3KmRGaCP43mU9c/jfYOZLDzmCo3HVNv7d81bf6VL8cTWMdneIdnZrY2SEABBmQjQlhNQCGRtSRWtmmu2OTbOQXSZTdBkVUoZIibOYnCGzkVsLqzq+juru7KCOzzE21IjTNc2Q2/lVdukjHoY/VX/fQ1hAwuJKbn6rWN+FzwOuEY4OgKrXfbza2xogABUvNUMBkhH/+zjEB4AMaTF3pIzZEW4mL7yQioop2CckeIP7mrh47utybgxe+D8pD6nlGt1fX0550pWodVJ+6eY94gDlz7n7Hx6Uhks2iUFmhJM0ik9/+fL9+FssocCGUCRLKIF3st6HLNGw0EONcsVZniph3dra2gCAWU5FhE0KBcWFCMyySTirTnMTnpNObC9x0bptJrEZGxVIcYwYy62S1y1Nsk5szvLuTei2zrqxHMhgRnaVP69f7dWKxRBgVIs0632EZbeAoCeqZlZnd4d2bWtEAgkOJ0NqIrLfYB7/+zjECYAMxTd35gxW0Yiw7vyRiptOdwklc5uwod8i2riEz9f59hdTYkjcJSajAVCqzYEoMAQqcCcufiDTjkXJSONSbepU61+z7Fro29bIU7zp7/DnEggwAQhxkBbcqxj8/WUPtQIKiCtDM0OrNbWiAgJ3KgIShsqLt000LSIXM14ZjE0kDdWiN7I8OWRlHe4I3rjkoiGHryuTel0mjnQ9JP1OqQbsZqVrs++jGzIifpP7zvVkY5FKHOKZ0Ms9///f5RJUMpJUIPoBqlV3eqhmW2NoAgx/WyT/+zjEBoAL1S935gxsEXix7z2DCeKqXGcTYVNtDuQ44WswIUYFqEB6swJ8akjSHCIac3ciXIqc6RUiPzyQLJc9iyq0mCG0VE0r/P12z8lPhZZuaT5/0/llJzGoIGG1a2fpUEStsoDKNLRFw7NdGkAhrP5ZqHNV8JBE6ZFFaQ8mRW73SHGvDSfFXhdV97vTwfFhTbOTWiPpRJbZtcrStdfvZJWzE2Kfa6O/tn9qt218zUe7WM5Sq9k2/+3+7MQgtHRMIAVFFneImJh4baxskgjekTOAogQIlsb/+zjECYCKXRt95IRY0U0TL3jzDSosng3O5SSanErNemr8buCufc9ZcXr39kWabNjGUO92ZmW5fwktqsTbo6ZYocw9v17+gqKtYFibw3kP/EEsIGqZDRERERD6gVaHXa0PboK7P+KKo9OR5BBIjKD3KKBuXhhK1iNmJjOlHhDHCSrj+XO5/rvhQcnx4HiQXQ0sgOij9oPwD3aJHfI7A2c6/9YWaCB1QDXVZnd5mIiP9G0QFG5ok5t6tgJKKnjQ0RhQ1UKyODMNhxCbI5vCdsR1jyq5MaN7vb//+zjEF4BKRLd/5IytkUItr3zxihtHZUW8jHD8eoHF3GGEEFKEOaY4cVFIh9NKFO//+QCxUUDOxCvEvEPDv9mrRnp7lcvM7NFiMcOLTWaUlu0QXPQ6R5MosY4pM+tnbE4VmCJy/+piSk3KQqYkfvsuj/ZtaPspn1r2+j/zS////+3McNXLHTZ90mZ4Z4eIj7JNgCULJA2iAgeh9HjgIdpcp1sGRY6Q8pUyWotghJbu6uCkSi3BFjts3/rlW1CWZ0AnrXRrBXhoOpJl2lB4iUMKJc+///Q3rHD/+zjEJ4AK4Mt35JhH0Vet7zxhioNcUDpc45guInZnd4mIj7pOAgcBEIIA6kzcde2UBg0c2IP1j5QzrcXeKaEPS7pzOzkBigB3Jb/6oiGFo5KZQrnX05SfpOnpVjEBt6qzvv//////0YjOqAg4UUBaogVPaIZ3eIh/sS4CM3JeMwxHETqHN0raiVhY2KnVrQIZrrUrkM7u7PbLmechzf//O5t8gGcU6U8frz7LNarMhpmvRqgpm//////+UI9XMWKQ5AModHGGKzq0Q7u31RTABRUHR8VEMnL/+zjEMoAKhX9155hD2VGvbbyTCaM1C6r1xMvH6vl7p1d2jxiZWPegpNakUg+i/nCf/0stLmDODDTKabNp37f/Wr99V6Kdn1/////UEjmFKhQwuQwYA5rNZVVnd4iHf7ItgB8EzIVi+xsSCtkKpp2/GxzVoZWWYmlnTAqMjC9aYzS51vP+EdUSt5lv/2QTu8giYxjHzaHIzf537fL/9zPt//////YUaHRJzO4woCXpVnd3h4d/+i4CEt7eYmwUEs4YKd4y+tpix0mnzhn2D6ZsR1shrq3hFsP/+zjEP4AKwXlp5JhRGViwLXzDFbOvvGZTIkVaXn/r6He6tKXY2ipz///612pr+3+tG///8v0F6zxRAmJiJodjgpOqB2d3mHiP+1ICPzBKnxThQ8QGikRCgmszUIjAdFBRG4uqmSnUM1LWZghZOEcQOzX/9dTqV3KSVgys0rcY7gzW/7Pb6pZ/0JR//////+qXYwZSMwE8rrju3///+rLgAvLhkXh8XtkrBo3KSFSXbQKSgmSs53iyRnNY97g8ULYElFJRHqq3/ppnml5FdEo6A27r1Y2mTn7/+zjESoAKvXtr5IxNmVsvbHTDCWuKX0IarIjM4J/////+9t0YU5VlOwSkVhVGZoeHiX/zToI3V1Aq+BgGOwxNUcM5a+QEvSZILPya5HT5hTlxmU/a8Oq5+ENVP/7CUVLOSt3s4ketv/+n7T5mTkMe///////TdFMKQozFYQKEO7d9vv/qzKAIZQYcsLaGGwX6/jT91zEOyNMSZ4KHHbBrtJWK2NeRDXursjdv5btUMxHVE5rDskDKK9f7uvMjUFlIhnMZHdX//////QxuqkKUGxN41212Tb7/+zjEVYAKVYNp5JhNUVSubDSTCTPf/VFwALaQnJNPaExKFWwATXrn7lrNcGQOYHIZJGLE0lLy9TrpYRtJ3+TTvpeBP/3n1ZzAnKJK5gZDCmeBH7t9f/oj0Skhk//y////rwpSHFDugiHQF1h2nLtttvrUZABjB4aiUVwMjdseTIyWwu0Zq2N17vDRdrUSbM1mkyfvaftwU7rpOHi1f/106uyQVqVuc24ohVoPZ9qoSnd0a19K2b/83////oMOKorGKIKImaof1RJLbdvtUWwB+HhEiQkLT6H/+zjEYwALaXVbpJhL2WkvazTDFXtS33YRVnkiyWIagMxNIyNLTqpbmtqgGgdBQWnLd7woDGX9j726K51NqMIVgU4qpl++c7z9dr6aXKurU6Eaf/////ykQqmKiRTNCjhQbHU5LLbtrUYwBkSfoEahoQXibjXSPW3PCnMGG+Dqw8/JWYLPN8qcVAcDI7QgyligGz/86d7sDjMkD0Mdl1jHsbR5xE9A4xvk1qa1tkbb////X/5WQICAMLIo9BZ0GYhZKcklttsQbAEM1ai4MIOLMfdXBp16QTz/+zjEaYALuYNTpJhUmXgvajRhlttHbwrJnaWaDHZ4L3GZScXMZrZdb25Sf70caTKxxBHZFdFdRjSDqE54gjodlvNfpIcqGzJL/R2f////e9yiQSAjiY8PMiB8UFxR3GVhON7ff/sFc5S8l0MRcL1RedmJFkCd8UMKZ0SGrDrcmAyQ6EbZFn8Lj9JDOotJ5orPPl6D7se5zqeama5br77LdXefqZSjfuRdP///40EY8dHnMEkDAAlk2WQ8MCMNsiF4+mjkiioBxuTb30BIATzqPUR+U9Jin7L/+zjEbQBMTYlNpBir2ZQx6HQzp5hN+EHmFzdQtk2syWWrED1mrW3hpSr4r//07iO5Z0SxyEOSEgqNGDDppydUqb537+75ynbmH/Q7s+6P/6//OIjmRDUG4lD4AS3NCIVlWjihsKm1k9CQ1G5JLZEWwB+gQbhODU5tM4SS4vc9fwqpscpGEVPV4yc76zUpUequLpVyap672KritGRQmggDKIucRd2uyNy0JR2Vlq9MyTLZzvVkYn9P///0+dBwsAhTAzDjIJBp3VTMMNUFuS27/5BsAF0yPEn/+zjEaoAM0Ys/pCk+iYexaTSTFToqlwtgc8G0h8BdgtxwovaZoTxzBGELcDBCE2MV5+Z/JyjsqO7jQePNIjomEcsct4wzmKaYz9TW7vSvv9/XpRjWp//f/2lS6HCI41A8hXkqhKBgwuTQ2CMUAS5JJdYQ0AOGVmMqhzc/w55+WfgiuyGBjw0U6fGUTOqTkM1eqKL/LPr26NtqHWMOw1FhKTKPkSPo6HTW2MdTV9rbo2bsy15n9///0etDybhMKBh4UFnBQOLA/OJJhB4YBKShkskITABUgz7/+zjEZ4AMfYk/oZ08yYAxp3Qzm9EYKi2iLPsKOR2dWhIaHXcoyd3mVbweT1Hxr/z7TjFiOcxE00qVKHkh1TDzI8pzaGP6vR9F9Fq1nZmaz0dp1v/6/8/PPc1TxMeGQCwFTPOJmg88yerzpkowAEGC7JGAjKe4wNzP9ew8hxVlGq7Dzup1exUsi3KyOq3Q9HFf7aXnjxFjh0RFQRRogAwqWFlU/1lYjTZjXq6UWttk1oPytxjf/f/ylvigmcBwKHgDPGRqqYuHgN0JlezIRQEkpJLZGIwAXkn/+zjEZwBMXY85oZ07AYMw5vRSsrlUVEiIg50O3n3KL8YbzF1iY73sMz5mwh4rVl5p+eiiU/I9NjOqfwNmzgxflGKL7epHGfk7/9/qs/nmoh6X///o2eQzxq4QkR0DBpJDU0bmEi+AARTTcsiEQAJJfDgp0jiwwZyUzh7hMqZaj5MxHqpMGGRyC5lHRefMvYz0F4PWaqhqlsCNiTwNLYRSb9sMOv9kWS1Klt9EtvRmRU0fS1/////Riw0FZMbmDArDLkBoKjyp0GAHqgABXkYCYAATYT+I4t//+zjEZoALdYU5oYzzyY4wZrQzH4k/B/z89Q12iWvMmJRVB9JnMk0Bwty//3LHTjTZIg5YdHhaXZRoKiU+vXQ7z2S5zTDXKHkFqim+5DHUKL139f7f+aaSIiUVHQiESiZCJVCcLlosrxag+xq7CgDVJK66upv/xrazF2zS45uWejp6bmJfX9lnvl3ZZ/5+Z5rs9YlmNFRUkT4vx0CK0UXm/+ktJauSRlOy1JR2agsYz8iL/6/+spEUaEQCgix5UhxwhmoEUBaeAAK9xEJAArrkhsRH+VC5kNX/+zjEaAIMYY8xQZ07AXAwpeSCp9AMpg7TNYo8rrWED4tKKLP5E5LW6MzUtL7ojHKQoMcjjhAejSKyovahEazuVk9mOZurUqRkc7a/+tv/6GiQkNEjIEczBjhUVXcQAmka70ZAQmNkYpiT+eD4h+hH0UmRxYSzUFjnaII/firVJ16X1iuhQc/oLSHFHJUCQWasWYqM5PM0tqpOft7IdVXRV37dfcj9H/9XwYkZclmOOwKP1YkMABASTltQTABN2e1bJ4PZS0Z6CNzcESizCIjwOPsLgeNH3GL/+zjEagILgY0xQZR7AVQwZeQxG9GQDFvlbkVLsaIuffEmPMfapSSGh+kMiPPy900I60hffq2nGlI+bf///6txDQrm7xjhcMABKpIgkAC1V0xiR78tc4ym+UTsRWNYfiw8iFpoDJ6woOsJ5yaoheUWfblswEUcwaCsqAw2ADVkkkTpD6y4YIIQPkwkl27/ffeDqBEswNabQuoAEbpGwkgCUJEsyw5/Se1XrzvGzFO9CoWwckgKG29uZRywZICpnMjrkS798sigxsAvSXYghZNjjMCUxdrhr0H/+zjEcwAKqXEzoQxTyUQYJegwjNDzrFLTq9kU0ng1Rkc4AFkEAKBXGrEhel5korbOyvjas+zORMeFKor6LTKyx4dvauWi+fTKq/gTV8IlNTPep6uqMT2bmc16bF05Zr2V/kvt/Kv2/lRiFagn8Cl29wABaTiCRARIBhYlIqmz7IzUQRaSET3ZShiBMdVaqABWZAoA4o6tKeQIvty+9m3FoJjGKYUU7pudOfO2bK1zytdaQ7rBRSG51+m1Sw+pb1jJ7vyIagEBQFC3SvJMIifDJHLkTNSE3Zf/+zjEgQAJfLUxQYBqATwupRhRiqGNxaQIxGQm8YnNO79JoRpGl+2w5clhRApE2PeJTDCSi0DEBG9wxgogOmqSC39FCdMKMpDrqxpVKAAEakSJJAU0ZRomtVyK9SkdL/i3wIO8dCE9OhSPFkLIzpBVISJCOmEa5KzbrnGeMEc28ROLRdbM8t0whKy7JVFwv5H3baXsYwc1CFlugQBtlnO4S8O7dKBWCn7dpNkhkG4TwOGDg8LrIP8XN2wvg6R09Llbe/8rOdBgzDSQYSOUmLGhdE+0aOEgs7L/+zjElQIKVREtQIxRgTGXpRhgjSjKWHO5FU1+4hTvw8oAAUlI0iQEIyOTFC6KtQd8H+1yYr/N68exWco0XUwsYRv+5FDKu698YyhPbCRnD1q3vrizu5LhWZIXPfIU+mrWSoAAAoMIAhI448MOFwTRTFoWWoE87oRkH1TOfXXyZZypwlgK9IpZrllfDCjDiAcUbY82ushelC1DRcJMXBzLnRjpOxlRIeWK1pkHLpoBRdnJY0iAJCQo5kPZZlrRS9JZVEMaZ845LZJ9mLjjdGrDQMoKHYFBYmL/+zjEpwIJdL8tQYR4QSsXZNhhDGjGzZRhwk57KIT+tMJ/zX2N7c36KQEpxxIkQ3BjqqwMNqx58uRVA9P3NY1cspfg65jB/+oY5KsO4rDuEMxwAUAQaJDSEMhexgxgTWmsQChVw/Mi9a3V+hCPfp7aEANgYlIBDFwTD14sLSpbo+dbZKcTLL1DfLtiQdSw5tmPiLQWRaiHSpJMtFzlXqGAayAolYWHjmcDG0qEwVypjIRlqLjHfTjnIIpOCPiFNXa6/7mxMixKWh6bAzYoQoNTlZA4Y5HOQNr/+zjEvQIH/LErQIxTATKXZEggjWiV3MMO/6HS81Eq71wTn+wIKhE0gFoCZ6OywkvOJ1r9D6Jwh61j0tc1zZva29xneXxr539D3z7Wsy30dVSCNaQEw6igG3HtM0bfJvtD1YFoxFNCQ/c4z+VWrGjYPiqTNXNqX3tH7Pnmpfb/xAUQT7/3/z1bUDQMQlLJxC+k1mqhtpeU7ayLUJQqoozYUo+32+eLGILeEseBsGS1quQLBpSC0waei2shAWXJ5UmpU5tJ8IyB24anE86ryXpB7LP1WaD4mG7/+zjE2AAHwJ0tQIRpwRoVpNwwjPjRDL8K/6ZwoU6Q223oP3OgugMHHKByB/InlkSzyq0KMqK824iHSudvfZRADwYZbOUKg+I45hgOB4LCDIdiINZJtxHscLnxbjA8rc8YKCouRUsHBj3P8vfUf/9zff/+jkTApUvb//CSOkYDRR6h/6SZfrehDsKqbAA1Mr3wBAK/bCofF6BmVs9ZwyFdrEVVgK51w84xmwt7IdGfr0ePKUT4+0L+/n6fp9ag42liwF5HoJCRfvmnrb4lhoxjds+xcy7DpHL/+zjE9wNPNYMQJhhziYAh4kDDDXmaZIH55/5/195+t6xNf5+lA4l/Mt6iMsb5T//NZtYt5LZ1vXxqldbgRNIHq9GnOXMQAYA8A4x6h4JT/718//////6v8Z3r//X/nhotpVD5QX1AlexhUMTZCUBYjAQEBAQEBMqqvaqtqqqqqzMzMx/6qqqrH8ZmYv/1U9VVS//qqX/VVVrMzMfV9f/v/GZmX//4zMzMzf//KqqAgrsgo7/xBQU3/hBRXEFBQUKG1UxBTUUzLjEwMFVVVVVVVVVVVVVVVVX/+zjE64IMBQ8QBhhuyZkl45qQgABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE6YAUMZcmOPeAAV6lZquGMAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",rack:"data:audio/mpeg;base64,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",complete:"data:audio/mpeg;base64,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7Kpn2umIC9mKyEa69mlIhFJFDUH90SkxFsnf2dUBACREdDriAFvyImTOUGqzVTQ+Nfbvro37vGNUVphmy4rI0Tl5iQsnFV+eIF5JAOzakCxJh9M0g0xalJWlbsTiQ0WMgJ7QCb2Xq2GDwyCXugTUv5HMnvn/+zjE9YONKY8MJ5R1UZkuIcj0Feh/SYGio2xSGmwpKTGu1LG6kMpgI7z6Qowp+zhOK8tnyybnW4JhYg5dTvg1guR11bM0GF9HrcXhl+hb0rgnyrD/NBNj5SH/+O4vaAi5iE/MlTJZUMaltVD4gD3P87jMvN93ne5dJulTO+vaGd86y4g057Oy73I6GHhK6iYQML/MxQlJVqXoB3AlsFCNy4FtFiE4PHIHpm3QtDDBA9nyW6TZH7EsZDH+XzLYgb3u92M/W3tWxPg8xUKrOSv/e4OyFrf5j8f/+zjE7wMMmNUMB5kQwXosYcjzFdFhYcCcwSLvLmhOzm8VasduvtRKX7oipGnJGgAIYeoatRLggiwb5Y1PFGF2hAYpkMGF0YrROICQiEjBtxGchEkC4rGBxpDOyeTwbriQAQrqwTI5MEMAM3SCATFGDwgXYosE8CbS0lgbP0wiCAIgmiQAxSJYl3cXnaGDcnsFYmAYWJxELA+D2DcnxkgGg7lwmIl9FkJ/FbubXr2jA/gcpSmr3+v/XX+ws9Yzpy3951GeAIx35lhGDv5gjUxBTUVVACBQiA3/+zjE7oIIsHUY5ISmQk0x38WWGnA2FSWAWJhKTU5FFjiWHJbVXYBRmbXOHV2PU6qxm6zVVLZv/h1WOqpbMUZv9W1VSjMUDCgKCoBOsvlngqNDURP1hoQ/+Giz+7yylUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE44IK+NUOB6TCwogkpFz0sTFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjExYPJyM8kpJhnAAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="};var iA="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",ve=null,Fr=!1;function xh(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function oc(){xh(),Fr=!0;try{if(ve||(ve=document.createElement("audio"),ve.src=iA,ve.loop=!0,ve.preload="auto",ve.setAttribute("playsinline",""),ve.setAttribute("webkit-playsinline",""),ve.setAttribute("x-webkit-airplay","deny"),ve.volume=.01,ve.addEventListener("pause",()=>{Fr&&!document.hidden&&setTimeout(()=>Fr&&ve.paused&&ve.play().catch(()=>{}),300)})),ve.paused){let i=ve.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function Ch(){Fr=!1;try{ve&&!ve.paused&&ve.pause()}catch{}}function vh(i,t){xh();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var cn=i=>440*Math.pow(2,(i-69)/12),sA=[[45,[57,60,64,67]],[41,[57,60,65,69]],[43,[59,62,67,71]],[40,[55,59,64,67]]],Zi=class{constructor(){this.ctx=null,this.muted=!1,this.mode="off",this.plucks=new Map}unlock(){if(oc(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;vh(this.ctx,()=>!!(this.held||this._held)),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.4,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master);let s=e.createDelay(.8);s.delayTime.value=.36;let r=e.createGain();r.gain.value=.22;let a=e.createGain();a.gain.value=.18,this.music.connect(s),s.connect(r).connect(s),s.connect(a).connect(this.master);let o=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),c=o.getChannelData(0);for(let l=0;l<c.length;l++)c[l]=Math.random()*2-1;this.noiseBuf=o,this._timer=setInterval(()=>this._schedule(),30),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_silentTick(){try{let t=this.ctx,e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01;let e=t.play();e&&e.then&&e.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){Ch(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){oc(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(t,e){this.mode===t&&!e||(this.mode=t,this.ctx&&(this.tempo=t==="play"?112:100,this.step=0,this.nextTime=this.ctx.currentTime+.12))}dispose(){clearInterval(this._timer),this.ctx&&this.ctx.close(),this.ctx=null}_tone(t,e,n,s,r,a=this.sfx,o=.005){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,n);let h=c.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),l.connect(h).connect(a),l.start(n),l.stop(n+s+.05),l}_noise(t,e,n,s,r,a=1,o=this.sfx,c){let l=this.ctx,h=l.createBufferSource();h.buffer=this.noiseBuf;let d=l.createBiquadFilter();d.type=s,d.frequency.setValueAtTime(r,t),c&&d.frequency.exponentialRampToValueAtTime(c,t+e),d.Q.value=a;let u=l.createGain();u.gain.setValueAtTime(1e-4,t),u.gain.exponentialRampToValueAtTime(n,t+Math.min(.01,e/4)),u.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(d).connect(u).connect(o),h.start(t,Math.random()*.5),h.stop(t+e+.05)}_slide(t,e,n,s,r,a,o=this.sfx){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,s),l.frequency.exponentialRampToValueAtTime(n,s+r);let h=c.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.015),h.gain.exponentialRampToValueAtTime(1e-4,s+r),l.connect(h).connect(o),l.start(s),l.stop(s+r+.05)}_synth(t,e,n,s,r=2200){let a=this.ctx,o=a.createOscillator();o.type="sawtooth",o.frequency.value=cn(t);let c=a.createBiquadFilter();c.type="lowpass",c.Q.value=6,c.frequency.setValueAtTime(r,e),c.frequency.exponentialRampToValueAtTime(400,e+n);let l=a.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(s,e+.005),l.gain.exponentialRampToValueAtTime(1e-4,e+n),o.connect(c).connect(l).connect(this.music),o.start(e),o.stop(e+n+.05)}_padChord(t,e,n,s){let r=this.ctx,a=r.createBiquadFilter();a.type="lowpass",a.frequency.value=900;let o=r.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(s,e+n*.3),o.gain.exponentialRampToValueAtTime(1e-4,e+n),a.connect(o).connect(this.music);for(let c of t)for(let l of[-7,7]){let h=r.createOscillator();h.type="triangle",h.frequency.value=cn(c),h.detune.value=l,h.connect(a),h.start(e),h.stop(e+n+.05)}}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||this.mode==="off")return;let e=t.currentTime+.2,n=this.mode==="play",s=60/this.tempo/4;for(;this.nextTime<e;){let r=this.nextTime,a=this.step%64,o=Math.floor(a/16),c=a%16,[l,h]=sA[o];c===0&&this._padChord(h,r,s*16,n?.03:.04),c%4===0&&this._slide("sine",140,48,r,.16,n?.24:.16,this.music),(c===4||c===12)&&this._noise(r,.12,.07,"bandpass",2200,.8,this.music),c%2===1&&this._noise(r,.03,.02,"highpass",8e3,.8,this.music),c%4===2&&this._tone("sine",cn(l-12),r,s*2.5,.12,this.music,.01);let d=[0,1,2,3,2,1][c%6];this._synth(h[d%h.length]+12,r,s*1.6,n?.022:.03,n?1800:2600),this.step++,this.nextTime+=s}}play(t,e){if(!this.on)return;let n=this.ctx.currentTime+.005,s=this.sfx;switch(t){case"pick":this._slide("sine",400+(e!=null?e:1)*40,900+(e!=null?e:1)*60,n,.1,.1);break;case"rack":this._tone("square",330,n,.05,.04),this._tone("sine",200,n,.08,.1);break;case"full":this._tone("sine",660,n,.1,.06),this._tone("sine",880,n+.1,.12,.06);break;case"arrive":this._noise(n,.9,.06,"bandpass",500,.8,s,2200),this._slide("sine",600,200,n+.6,.3,.05);break;case"beep":this._tone("square",1800,n,.09,.04);break;case"sold":this._tone("square",1800,n,.08,.04),this._tone("sine",cn(96),n+.1,.25,.08),this._tone("sine",cn(100),n+.16,.25,.06);break;case"coin":{let r=84+Math.min(14,e!=null?e:0);this._tone("sine",cn(r),n,.15,.07),this._tone("sine",cn(r+7),n+.04,.12,.05);break}case"pay":this._tone("triangle",500+(e!=null?e:0)*800,n,.06,.05);break;case"unlock":[72,76,79,84,88].forEach((r,a)=>this._tone("square",cn(r),n+a*.06,.18,.04)),this._noise(n+.3,.8,.05,"highpass",6e3,.6);break;case"robot":[88,81,91,84].forEach((r,a)=>this._tone("square",cn(r),n+a*.08,.07,.04));break;case"complete":[[72,0],[76,.12],[79,.24],[84,.36],[88,.6],[91,.75],[96,.95]].forEach(([r,a])=>this._tone("square",cn(r),n+a,.3,.05)),this._noise(n+.9,1.5,.05,"highpass",5e3,.6);break;case"tap":this._tone("sine",880,n,.06,.05);break;case"no":this._tone("square",220,n,.12,.04);break;default:}}};gh(Zi,Ah);mh(Zi);var cc={title:["\u0645\u062A\u062C\u0631 \u0627\u0644\u0641\u0636\u0627\u0621 \u0627\u0644\u0630\u0643\u064A","Space Store Manager"],sub:["\u0627\u0639\u0645\u0644 \u0623\u0646\u0634\u0637 \u0633\u0648\u0628\u0631\u0645\u0627\u0631\u0643\u062A \u0641\u064A \u0627\u0644\u0645\u062F\u0627\u0631!","Run the busiest pantry in orbit!"],play:["\u064A\u0644\u0627 \u0646\u0634\u062A\u063A\u0644!","Play now!"],exit:["\u062E\u0631\u0648\u062C","Exit"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","Paused"],resume:["\u0643\u0645\u0651\u0644","Continue"],menu:["\u0627\u0644\u0642\u0627\u0626\u0645\u0629","Menu"],drag:["\u062D\u0637 \u0635\u0628\u0627\u0639\u0643 \u0648\u0627\u0633\u062D\u0628 \u0639\u0634\u0627\u0646 \u062A\u0645\u0634\u064A","Touch and drag to walk"],oGrab:["\u062E\u062F \u0627\u0644\u0633\u0644\u0627\u0644 \u0627\u0644\u0637\u0627\u064A\u0631\u0629!","Grab hover-baskets!"],oStock:["\u062D\u0637 \u0627\u0644\u0633\u0644\u0627\u0644 \u0639\u0644\u0649 \u0627\u0644\u0631\u0641!","Stock the basket rack!"],oServe:["\u0642\u0641 \u0639\u0646\u062F \u0627\u0644\u0643\u0627\u0634\u064A\u0631 \u0648\u062E\u062F\u0651\u0645 \u0627\u0644\u0632\u0628\u0627\u064A\u0646!","Serve shoppers at the checkout!"],oCoins:["\u0644\u0645\u0651 \u0627\u0644\u0639\u0645\u0644\u0627\u062A \u0627\u0644\u0646\u062C\u0645\u0629!","Collect the star coins!"],oBuild:["\u0627\u0628\u0646\u064A:","Build:"],full:["\u0625\u064A\u062F\u0643 \u0645\u0644\u064A\u0627\u0646\u0629!","Hands full!"],opened:["\u0627\u062A\u0641\u062A\u062D","New"],robot:["\u0631\u0648\u0628\u0648\u062A \u0634\u063A\u0651\u0627\u0644! \u{1F916}","Robot at work! \u{1F916}"],done_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631! \u0628\u0642\u064A\u062A \u0633\u0648\u0628\u0631\u0645\u0627\u0631\u0643\u062A \u0641\u0636\u0627\u0621 \u0643\u0628\u064A\u0631 \u{1F680}","Well done! A busy space supermarket \u{1F680}"],done_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629! \u0628\u0642\u064A\u062A \u0633\u0648\u0628\u0631\u0645\u0627\u0631\u0643\u062A \u0641\u0636\u0627\u0621 \u0643\u0628\u064A\u0631 \u{1F680}","Well done! A busy space supermarket \u{1F680}"],served:["\u0632\u0628\u0648\u0646 \u0627\u062A\u0628\u0633\u0637","happy shoppers"],keep:["\u0643\u0645\u0651\u0644 \u0627\u0644\u0634\u063A\u0644","Keep going"],loading:["\u0627\u0644\u0645\u0643\u0648\u0643 \u062C\u0627\u064A...","The shuttle is coming..."],noWebgl:["\u0627\u0644\u062C\u0647\u0627\u0632 \u062F\u0647 \u0645\u0634 \u0628\u064A\u0634\u063A\u0651\u0644 \u0627\u0644\u0644\u0639\u0628\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F.","This device cannot run the 3D game."],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"]},vs="ar",_h=!1,yh=i=>{vs=i==="en"?"en":"ar"},Ih=i=>{_h=!!i},lc=()=>vs,ee=i=>{let t=`${i}_${_h?"f":"m"}`,e=cc[t]?t:i;return cc[e]?cc[e][vs==="en"?1:0]:i},Ki=i=>vs==="en"?String(i):String(i).replace(/[0-9]/g,t=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[t]),Br=i=>vs==="en"?i.en:i.ar;var Mh=`
.ss-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#5a3a1a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#9fdcff}
.ss-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.ss-layer{position:absolute;inset:0;pointer-events:none}
.ss-layer button,.ss-layer .ss-card{pointer-events:auto}
.ss-pill{display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);background:#fff7e6;border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*4.4);box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.ss-coin{display:inline-block;width:calc(var(--u)*4.2);height:calc(var(--u)*4.2);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe58a,#f5b72c 60%,#c98a14);border:calc(var(--u)*.35) solid #a8692a;box-sizing:border-box}
.ss-round{position:absolute;width:calc(var(--u)*11);height:calc(var(--u)*11);border-radius:calc(var(--u)*3);border:calc(var(--u)*.5) solid #c98a3a;background:#fff7e6;color:#5a3a1a;font-size:calc(var(--u)*5);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;padding:0;font-family:inherit}
.ss-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline:calc(var(--u)*16);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.2)}
.ss-sign{background:linear-gradient(180deg,#e0a35c,#c27a35);color:#fff;font-weight:900;font-size:calc(var(--u)*3.8);border-radius:calc(var(--u)*1.6);padding:calc(var(--u)*.4) calc(var(--u)*3);border:calc(var(--u)*.4) solid #8a4f1d;text-shadow:0 2px 0 #8a4f1d}
.ss-bar{position:relative;width:100%;max-width:calc(var(--u)*80);height:calc(var(--u)*6);background:#fff7e6;border:calc(var(--u)*.6) solid #c98a3a;border-radius:999px;overflow:hidden;box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.ss-bar i{position:absolute;inset-block:0;inset-inline-start:0;background:linear-gradient(180deg,#ffd75e,#f2a51e);transition:width .25s}
.ss-bar b{position:absolute;inset-inline-end:calc(var(--u)*2);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);color:#5a3a1a}
.ss-bar s{position:absolute;inset-inline-start:calc(var(--u)*1.6);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);text-decoration:none}
.ss-label{position:absolute;transform:translate(-50%,-100%);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:calc(var(--u)*1.2);padding:0 calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.2);white-space:nowrap;pointer-events:none}
.ss-label.full{background:#ffd75e;animation:ssPulse .5s infinite alternate}
@keyframes ssPulse{to{transform:translate(-50%,-100%) scale(1.12)}}
.ss-toast{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.6);text-align:center;white-space:nowrap;opacity:0;transition:opacity .25s;pointer-events:none;box-shadow:0 calc(var(--u)*.8) 0 #a8692a}
.ss-toast.show{opacity:1}
.ss-joy{position:absolute;width:calc(var(--u)*24);height:calc(var(--u)*24);margin:calc(var(--u)*-12) 0 0 calc(var(--u)*-12);border-radius:50%;border:calc(var(--u)*.8) solid rgba(255,255,255,.7);background:rgba(255,255,255,.15);pointer-events:none;display:none}
.ss-joy i{position:absolute;left:50%;top:50%;width:calc(var(--u)*10);height:calc(var(--u)*10);margin:calc(var(--u)*-5) 0 0 calc(var(--u)*-5);border-radius:50%;background:rgba(255,255,255,.85)}
.ss-float{position:absolute;font-weight:900;font-size:calc(var(--u)*4.6);color:#f2a51e;text-shadow:0 2px 0 #fff,0 0 6px #fff;pointer-events:none;animation:ssUp 1s ease-out forwards}
@keyframes ssUp{to{transform:translateY(calc(var(--u)*-12));opacity:0}}
.ss-dim{position:absolute;inset:0;background:rgba(40,25,10,.35);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box}
.ss-panel{background:#fff7e6;border:calc(var(--u)*.8) solid #c98a3a;border-radius:calc(var(--u)*4);box-shadow:0 calc(var(--u)*1.2) 0 #a8692a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;pointer-events:auto}
.ss-title{font-size:calc(var(--u)*7);font-weight:900;color:#c2552a;text-align:center;line-height:1.1}
.ss-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);color:#fff;border:none;border-radius:calc(var(--u)*2.6);padding:calc(var(--u)*1.8) calc(var(--u)*5);min-height:calc(var(--u)*11);cursor:pointer;background:linear-gradient(180deg,#5ccf5a,#33a333);box-shadow:0 calc(var(--u)*.8) 0 #1f7a1f;display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);justify-content:center}
.ss-btn.wood{background:linear-gradient(180deg,#e0a35c,#c27a35);box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d}
.ss-btn[disabled]{background:#c9c4bb;box-shadow:0 calc(var(--u)*.8) 0 #9a958c}
.ss-btn:active{transform:translateY(calc(var(--u)*.5))}
.ss-btn:focus-visible,.ss-node:focus-visible,.ss-round:focus-visible{outline:calc(var(--u)*.7) solid #2f6fd8;outline-offset:calc(var(--u)*.5)}
.ss-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:calc(var(--u)*2)}
.ss-land .ss-grid{grid-template-columns:repeat(4,minmax(0,1fr))}
.ss-card{background:#fff;border:calc(var(--u)*.5) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.8);text-align:center}
.ss-card .ic{font-size:calc(var(--u)*8)}
.ss-card .nm{font-weight:900;font-size:calc(var(--u)*4.4)}
.ss-card .sb{font-size:calc(var(--u)*3);opacity:.8}
.ss-card .pips{display:flex;gap:calc(var(--u)*.6)}
.ss-card .pip{width:calc(var(--u)*3);height:calc(var(--u)*1.4);border-radius:9px;background:#e0c9a3}
.ss-card .pip.on{background:#f2a51e}
.ss-card .st{font-weight:900;font-size:calc(var(--u)*3.2)}
.ss-map{display:grid;grid-template-columns:repeat(4,calc(var(--u)*17));gap:calc(var(--u)*2.4) calc(var(--u)*3);justify-content:center}
.ss-node{width:calc(var(--u)*17);height:calc(var(--u)*17);border-radius:50%;border:calc(var(--u)*.8) solid #fff;background:radial-gradient(circle at 40% 35%,#e9b46a,#b8742e);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*6.4);cursor:pointer;box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;position:relative;display:flex;align-items:center;justify-content:center;text-shadow:0 2px 0 #8a4f1d}
.ss-node.lock{background:radial-gradient(circle at 40% 35%,#e2e2e2,#a8a8a8);box-shadow:0 calc(var(--u)*.8) 0 #7a7a7a}
.ss-node.next{animation:ssPulse2 .8s infinite alternate}
@keyframes ssPulse2{to{transform:scale(1.08)}}
.ss-node .stars{position:absolute;bottom:calc(var(--u)*-4.4);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*3);white-space:nowrap;text-shadow:none}
.ss-logo{font-size:calc(var(--u)*9);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.5) #8a4f1d;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;text-align:center}
.ss-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#f2a51e;background:#bfe8ff}
.ss-stars{font-size:calc(var(--u)*10);letter-spacing:calc(var(--u)*1)}
.ss-stars .off{filter:grayscale(1);opacity:.4}
.ss-made{display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center}
.ss-made div{background:#fff;border:calc(var(--u)*.4) solid #e0c9a3;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*2);text-align:center;font-weight:900}
.ss-made b{display:block;font-size:calc(var(--u)*5.4)}
.ss-made span{font-size:calc(var(--u)*2.8)}
.ss-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*16);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
`;function St(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var Sh=`
.ss-root .ss-panel{background:linear-gradient(180deg,#2a1e6a,#1a1440);border-color:#3ad8c8;box-shadow:0 0 0 calc(var(--u)*.4) #3ad8c8,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.5);color:#fff}
.ss-root .ss-title{color:#ffc83a}
.ss-root .ss-logo{color:#fff;-webkit-text-stroke-color:#3a2a9a;text-shadow:0 calc(var(--u)*.8) 0 #3ad8c8}
.ss-root .ss-btn{background:linear-gradient(180deg,#ff6aa8,#e8347a);box-shadow:0 calc(var(--u)*.8) 0 #8a1a4a;border-radius:999px}
.ss-root .ss-btn.wood{background:linear-gradient(180deg,#3a2e7a,#2a1e5a);box-shadow:0 calc(var(--u)*.8) 0 #10083a;border:calc(var(--u)*.3) solid #3ad8c8}
.ss-root .ss-pill{background:#2a1e6a;color:#fff;border-color:#ffc83a;box-shadow:0 calc(var(--u)*.5) 0 #10083a}
.ss-root .ss-round{background:#2a1e6a;color:#fff;border-color:#3ad8c8;box-shadow:0 calc(var(--u)*.5) 0 #10083a;border-radius:50%}
.ss-root .ss-toast{background:rgba(42,30,106,.95);border-color:#3ad8c8;color:#fff;box-shadow:0 calc(var(--u)*.8) 0 #10083a}
.ss-obj{position:absolute;top:calc(max(calc(var(--u)*2.4),env(safe-area-inset-top)) + var(--u)*13);left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:calc(var(--u)*1.4);background:#2a1e6a;border:calc(var(--u)*.5) solid #3ad8c8;border-radius:999px;padding:calc(var(--u)*1) calc(var(--u)*3.4);font-weight:900;font-size:calc(var(--u)*4);white-space:nowrap;pointer-events:none;box-shadow:0 calc(var(--u)*.6) 0 #10083a}
.ss-obj i{width:calc(var(--u)*3);height:calc(var(--u)*3);border-radius:50%;background:#ffc83a;display:block}

.ss-root{background:#1a1440;color:#fff}
.ss-padlbl{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;font-weight:900;pointer-events:none;text-shadow:0 2px 0 #fff,0 0 6px #fff}
.ss-padlbl .ic{font-size:calc(var(--u)*6)}
.ss-padlbl{color:#fff;text-shadow:0 2px 0 #10083a,0 0 6px #10083a}
.ss-padlbl .c{color:#2a1e6a;display:inline-flex;align-items:center;gap:calc(var(--u)*.8);font-size:calc(var(--u)*3.8);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:999px;padding:0 calc(var(--u)*1.6)}
.ss-padlbl .n{font-size:calc(var(--u)*2.8);white-space:nowrap}
.ss-bubble{position:absolute;transform:translate(-50%,-100%);background:#fff;border:calc(var(--u)*.4) solid #e0a35c;border-radius:calc(var(--u)*2);padding:calc(var(--u)*.3) calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.6);white-space:nowrap;pointer-events:none}
.ss-bubble:after{content:'';position:absolute;left:50%;bottom:calc(var(--u)*-1.6);margin-left:calc(var(--u)*-1);border:calc(var(--u)*1) solid transparent;border-top-color:#e0a35c}
.ss-hint{position:absolute;left:50%;bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));transform:translateX(-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.2);white-space:nowrap;pointer-events:none;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;transition:opacity .3s}
.ss-chefs{display:flex;gap:calc(var(--u)*3)}
.ss-chef{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);background:#fff;border:calc(var(--u)*.6) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*4);cursor:pointer;color:#5a3a1a}
.ss-chef .f{font-size:calc(var(--u)*9)}
.ss-chef.on{border-color:#f2a51e;background:#fff3d0;box-shadow:0 0 0 calc(var(--u)*.6) #ffd75e}
.ss-big{font-size:calc(var(--u)*6);padding:calc(var(--u)*2.4) calc(var(--u)*8)}
.ss-stat{display:flex;gap:calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.6)}
`;var rA=()=>{var i,t;return((i=navigator.deviceMemory)!=null?i:4)<=3||((t=navigator.hardwareConcurrency)!=null?t:4)<=4},aA=()=>{try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}},bh=(i,t)=>Math.hypot(i.x-t.x,i.z-t.z),Eh=i=>1+(1.7+1)*Math.pow(i-1,3)+1.7*Math.pow(i-1,2),Qi=class{constructor(t,e,n,s){this.items=[];for(let r=0;r<n;r++){let a=e(r);s(a,r),a.visible=!1,t.add(a),this.items.push(a)}}show(t){this.items.forEach((e,n)=>{let s=n<t;s&&!e.visible&&(e.userData.pop=0),e.visible=s,e.userData.pop!==void 0&&(e.userData.pop=Math.min(1,e.userData.pop+.12),e.scale.setScalar(Math.max(.01,Eh(e.userData.pop))),e.userData.pop>=1&&delete e.userData.pop)})}},hc=class{constructor(t,e,n){if(this.el=t,this.post=n||(()=>{}),yh(e.lang),Ih(e.gender==="girl"),this.age=Number(e.age)||5,this.girl=e.gender==="girl",this.save=nh(e.save),this.base=e.base||"./",this.sound=new Zi,this.sound.muted=!!this.save.muted,this.quality={low:rA()},document.getElementById("ss-style")||document.head.append(St("style",{id:"ss-style",text:Mh+Sh})),this.root=St("div",{class:"ss-root",dir:lc()==="en"?"ltr":"rtl"}),t.append(this.root),this._unit(),!aA()){this.root.append(St("div",{class:"ss-loading"},St("div",{},ee("noWebgl")," ",St("button",{class:"ss-btn",onclick:()=>this.post({type:"exit"})},ee("exit")))));return}this.loading=St("div",{class:"ss-loading",style:"background:#1a1440;color:#3ad8c8"},ee("loading")),this.root.append(this.loading),this.renderer=new mr({antialias:!this.quality.low,powerPreference:"high-performance"}),this.maxPR=Math.min(window.devicePixelRatio||1,this.quality.low?1.25:1.5),this.pr=this.maxPR,this.renderer.setPixelRatio(this.pr),this.renderer.outputColorSpace=Ce,this.renderer.toneMapping=Xo,this.root.prepend(this.renderer.domElement),this.layer=St("div",{class:"ss-layer"}),this.root.append(this.layer),this.camera=new Te(45,1,.5,600),this.input={x:0,z:0,pointer:null,ox:0,oy:0,keys:new Set},this.mode="menu",this.paused=!1,this._bind(),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this.frames=[],this.goodWin=0,this.clock=new wr,this.store=new Lr(this.save,(Date.now()&65535)+1),this._buildWorld(),this._fonts().then(()=>{this.loading.remove(),this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"}),new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-Bold.ttf)`,{weight:"700"})];await Promise.race([Promise.all(t.map(e=>e.load().then(n=>document.fonts.add(n)))),new Promise(e=>setTimeout(e,900))])}catch{}}_unit(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.root.style.setProperty("--u",`${Math.min(this.cw,this.ch)/100}px`),this.root.classList.toggle("ss-land",this.cw>this.ch*1.15)}_resize(){this._unit(),this.renderer&&(this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.fov=this.cw<this.ch?56:42,this.camera.updateProjectionMatrix())}_buildWorld(){let t=this.scene=new Ar;t.background=new Bt(1709120),t.add(new br(15261951,3811978,1.5));let e=new Er(16773344,1.3);e.position.set(-8,20,10),t.add(e),t.add(fh(this.quality.low?300:700));let n=dh();n.position.set(-8,-25,33),t.add(n),this.planet=n,t.add(uh(Xi));let s=sh();s.position.set(ze.x,0,ze.z),t.add(s);let r=ph(3.2,2.6);r.position.set(ze.x,.015,ze.z),t.add(r),this.dispBaskets=new Qi(t,()=>Cs(.9),ze.cap,(a,o)=>a.position.set(ze.x-.5+o%2*1,.15+Math.floor(o/2)*.32,ze.z)),this.rackModels=Nr.map(a=>{let o=new Ht,c=rh();o.add(c),o.position.set(a.x,0,a.z),t.add(o);let l=new Qi(o,()=>Cs(.55),a.cap,(h,d)=>h.position.set(-.55+d%4*.37,.24+Math.floor(d/4)*.55,0));return{g:o,pool:l,id:a.id}}),this.shelfModels=Dr.map(a=>{let o=ah();return o.position.set(a.x,0,a.z),t.add(o),{m:o,sh:a}}),this.checkoutModels=ic.map(a=>{let o=new Ht;o.add(oh(a.id==="hyper")),o.position.set(a.x,0,a.z),t.add(o);let c=null;a.robot&&(c=ch(),c.position.set(a.till.x,0,a.till.z),c.rotation.y=-Math.PI/2,t.add(c));let l=new Qi(t,()=>lh(),24,(u,f)=>u.position.set(a.coins.x-.5+f%3*.48,.02+Math.floor(f/6)*.07,a.coins.z-.2+Math.floor(f/3)%2*.45)),h=new Ut(new je(.9,1.05,28),new Ve({color:16762938,transparent:!0,opacity:.7}));h.rotation.x=-Math.PI/2,h.position.set(a.coins.x,.03,a.coins.z),t.add(h);let d=null;return a.robot||(d=new Ut(new je(.9,1.05,28),new Ve({color:3856584,transparent:!0,opacity:.8})),d.rotation.x=-Math.PI/2,d.position.set(a.till.x,.03,a.till.z),t.add(d)),{g:o,robot:c,coins:l,ring:h,till:d,c:a}}),this.shuttles=sc.map(a=>{let o=hh();return o.position.set(a.x,0,a.z),t.add(o),{m:o,sh:a,land:0}}),this.hero=ac(15922938,this.girl?16738984:3856584,15777946,this.girl?6961690:3810324),this.girl&&this.hero.head.add(new Ut(new Sn(.16,10,8),ut(6961690)).translateY(-.05).translateZ(-.32)),t.add(this.hero.root),this.heroStack=new Qi(this.hero.back,()=>Cs(.7),10,(a,o)=>a.position.set(0,-.1+o*.25,.1)),this.ring=new Ut(new je(.45,.6,28),new Ve({color:16762938,transparent:!0,opacity:.9})),this.ring.rotation.x=-Math.PI/2,t.add(this.ring),this.arrow=new Ut(new ki(.4,.9,4),ut(16762938,16751104,.7)),this.arrow.rotation.x=Math.PI,t.add(this.arrow),this.padModels=new Map;for(let a of tn){let o=new Ht,c=new Ut(new si(.85,32),new Ve({color:3811994,transparent:!0,opacity:.85}));c.rotation.x=-Math.PI/2,c.position.y=.03,o.add(c);let l=new Ut(new je(.82,.98,32),new Ve({color:3856584}));l.rotation.x=-Math.PI/2,l.position.y=.04,o.add(l);let h=new Ut(new je(.82,.98,32,1,Math.PI/2,.001),new Ve({color:16762938}));h.rotation.x=-Math.PI/2,h.position.y=.05,o.add(h),o.position.set(a.x,0,a.z),o.visible=!1,t.add(o),this.padModels.set(a.id,{g:o,prog:h,ring:l,f:-1})}this.shopperModels=new Map,this.sparks=this._sparks(t),this.syncUnlocked(!0)}_sparks(t){let n=new Float32Array(600),s=new xe;s.setAttribute("position",new Se(n,3));let r=new zi(s,new ii({color:16769152,size:.25,transparent:!0,depthWrite:!1,blending:er}));r.frustumCulled=!1,t.add(r);for(let a=0;a<200;a++)n[a*3+1]=-50;return{pos:n,vel:new Float32Array(200*3),life:new Float32Array(200),g:s,i:0,n:200}}_burst(t,e,n,s=30){let r=this.sparks;for(let a=0;a<s;a++){let o=r.i++%r.n,c=Math.random()*Math.PI*2;r.pos.set([t,e,n],o*3),r.vel.set([Math.cos(c)*3*Math.random(),2+Math.random()*4,Math.sin(c)*3*Math.random()],o*3),r.life[o]=.9}}syncUnlocked(t=!1){let e=this.store;for(let n of this.rackModels)this._show(n.g,e.open(Nr.find(s=>s.id===n.id)),t);for(let n of this.shelfModels)this._show(n.m,e.open(n.sh),t);for(let n of this.checkoutModels){let s=e.open(n.c);this._show(n.g,s,t),n.robot&&this._show(n.robot,s,t),n.ring.visible=s}for(let n of this.shuttles)this._show(n.m,e.open(n.sh),t)}_show(t,e,n){t.visible===e&&t.userData.inited||(t.userData.inited=!0,t.visible=e,e&&!n&&(t.scale.setScalar(.01),t.userData.grow=0))}_bind(){let t=this.root;for(let n of["pointerdown","pointerup","touchend","click","keydown"])t.addEventListener(n,()=>this.sound.unlock(),{capture:!0,passive:!0});this.joy=St("div",{class:"ss-joy"},St("i")),t.append(this.joy),t.addEventListener("pointerdown",n=>{if(n.target.closest("button")||this.mode!=="play"||this.paused||this.input.pointer!==null)return;this.input.pointer=n.pointerId,this.input.ox=n.clientX,this.input.oy=n.clientY;let s=t.getBoundingClientRect();this.joy.style.left=`${n.clientX-s.left}px`,this.joy.style.top=`${n.clientY-s.top}px`,this.joy.style.display="block",this.joy.firstChild.style.transform="translate(0,0)";try{t.setPointerCapture(n.pointerId)}catch{}}),t.addEventListener("pointermove",n=>{if(n.pointerId!==this.input.pointer)return;let r=Math.min(this.cw,this.ch)/100*12,a=n.clientX-this.input.ox,o=n.clientY-this.input.oy,c=Math.hypot(a,o);c>r&&(a=a/c*r,o=o/c*r),this.input.x=a/r,this.input.z=o/r,this.joy.firstChild.style.transform=`translate(${a}px,${o}px)`});let e=n=>{n.pointerId===this.input.pointer&&(this.input.pointer=null,this.input.x=0,this.input.z=0,this.joy.style.display="none")};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("click",n=>{n.target.closest("button")&&this.sound.play("tap")},!0),this._onKey=n=>{let s=n.key.toLowerCase();n.type==="keydown"?(this.input.keys.add(s),this.mode==="play"&&(s==="escape"||s==="p")&&this.pause()):this.input.keys.delete(s),this.mode==="play"&&s.startsWith("arrow")&&n.preventDefault()},window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._onVis=()=>{document.hidden?(this.mode==="play"&&this.pause(),this._saveNow(),this.sound.suspend()):this.paused||this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=St("button",{class:"ss-soundpill",onclick:n=>{n.stopPropagation(),this.sound.unlock()}},ee("sound")),t.append(this.soundPill),this._tapped=!1,t.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden&&!this.paused?"block":"none"},700)}_readInput(){let t=this.input.keys,e=this.input.x,n=this.input.z;return(t.has("arrowleft")||t.has("a"))&&(e=-1),(t.has("arrowright")||t.has("d"))&&(e=1),(t.has("arrowup")||t.has("w"))&&(n=-1),(t.has("arrowdown")||t.has("s"))&&(n=1),{x:e,z:n}}_clear(){this.layer.replaceChildren()}_saveNow(){this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}_coins(){return this.coinEl=St("span",{},Ki(this.save.coins)),St("div",{class:"ss-pill"},"\u2B50 ",this.coinEl)}_mute(t){let e=St("button",{class:"ss-round",style:t,"aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return e.addEventListener("click",n=>{n.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,this._saveNow(),e.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),e}_toastEl(){return this.toastEl=St("div",{class:"ss-toast"}),this.toastEl}toast(t,e=1.6){this.toastEl&&(this.toastEl.textContent=t,this.toastEl.classList.add("show"),clearTimeout(this._tt),this._tt=setTimeout(()=>this.toastEl&&this.toastEl.classList.remove("show"),e*1e3))}_topLeft(){return"top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)"}showMenu(){this.mode="menu",this.paused=!1,this.sound.setMode("menu"),this._clear(),this.layer.append(St("button",{class:"ss-round",style:this._topLeft(),"aria-label":ee("exit"),onclick:()=>{this._saveNow(),this.post({type:"exit"})}},lc()==="en"?"\u2190":"\u2192"),St("div",{class:"ss-top"},this._coins()),St("div",{class:"ss-dim",style:"background:rgba(16,8,58,.35)"},St("div",{class:"ss-panel"},St("div",{style:"font-size:calc(var(--u)*14)"},"\u{1FA90}"),St("div",{class:"ss-logo"},ee("title")),St("div",{style:"font-weight:700;font-size:calc(var(--u)*4);opacity:.9"},ee("sub")),this.save.served?St("div",{class:"ss-stat"},St("span",{},"\u{1F60A} ",Ki(this.save.served)," ",ee("served"))):null,St("button",{class:"ss-btn ss-big",onclick:()=>this.play()},ee("play")))),this._mute("bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)"),this._toastEl())}play(){this.mode="play",this.paused=!1,this.sound.setMode("play"),this._clear(),this.hud={obj:St("div",{class:"ss-obj"},St("i"),St("span",{},"")),max:St("div",{class:"ss-bubble",style:"display:none;color:#2a1e6a"},"MAX")},this.padLbls=new Map;for(let t of tn){let e=St("div",{class:"ss-padlbl",style:"display:none"},St("span",{class:"ic"},t.icon),St("span",{class:"c"},"\u2B50 ",St("b",{},"")),St("span",{class:"n"},Br(t)));this.padLbls.set(t.id,e),this.layer.append(e)}this.layer.append(St("button",{class:"ss-round",style:this._topLeft(),"aria-label":ee("paused"),onclick:t=>{t.stopPropagation(),this.pause()}},"\u23F8"),St("div",{class:"ss-top",style:"inset-inline-start:auto;inset-inline-end:calc(var(--u)*3)"},this._coins()),this.hud.obj,this.hud.max,this._mute("top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*16)"),this._toastEl()),this._hc={},this.save.served||setTimeout(()=>this.mode==="play"&&this.toast(ee("drag"),3),500)}pause(){if(this.mode!=="play"||this.paused)return;this.paused=!0,this.input.pointer=null,this.input.x=this.input.z=0,this.joy.style.display="none",this._saveNow(),this.sound.suspend();let t=St("div",{class:"ss-dim"},St("div",{class:"ss-panel"},St("div",{class:"ss-title"},ee("paused")),St("button",{class:"ss-btn",onclick:()=>{t.remove(),this.paused=!1,this.sound.resume()}},"\u25B6 ",ee("resume")),St("button",{class:"ss-btn wood",onclick:()=>{this.sound.resume(),this.showMenu()}},ee("menu"))));this.layer.append(t)}_complete(){this.sound.play("complete"),this._burst(this.store.p.x,2,this.store.p.z,120);let t=St("div",{class:"ss-dim"},St("div",{class:"ss-panel"},St("div",{class:"ss-title"},ee("done")),St("div",{class:"ss-stars"},"\u2B50\u2B50\u2B50"),St("div",{class:"ss-stat"},St("span",{},"\u{1F60A} ",Ki(this.save.served)," ",ee("served"))),St("button",{class:"ss-btn",onclick:()=>{t.remove(),this.paused=!1}},"\u25B6 ",ee("keep"))));this.paused=!0,this.layer.append(t)}_playFrame(t,e){var u;let n=this.store,s=n.step(t,this._readInput());for(let f of s)switch(f.type){case"pick":this.sound.play("pick",f.n);break;case"full":this.sound.play("full"),this.toast(ee("full"),1);break;case"rack":this.sound.play("rack");break;case"arrive":Math.random()<.6&&this.sound.play("arrive");{let m=this.shuttles.find(A=>Math.abs(A.sh.x-f.x)<.1);m&&(m.land=1)}break;case"sold":{this.sound.play(f.by==="robot"&&bh(n.p,f)>6?"beep":"sold"),this._burst(f.x,1.4,f.z,10);break}case"collect":this.sound.play("coin",this._run=((u=this._run)!=null?u:0)+1),this._dirty=!0;break;case"pay":this.sound.play("pay",f.paid/f.cost),this._dirty=!0;break;case"unlock":{let m=tn.find(A=>A.id===f.pad);this.sound.play(f.pad.startsWith("robot")?"robot":"unlock"),f.pad.startsWith("robot")&&setTimeout(()=>this.sound.play("unlock"),350),this.syncUnlocked(),this._burst(m.x,1,m.z,50),this.toast(`\u2728 ${ee("opened")}: ${Br(m)} ${m.icon}`,2.4),this._saveNow();break}case"complete":setTimeout(()=>this._complete(),1200);break;default:}s.some(f=>f.type==="collect")||(this._run=0);let r=n.checkouts[0];r.busy&&r.t>0&&r.t<t*1.5&&this.sound.play("beep"),this._dirty&&(!this._lastSave||e-this._lastSave>8)&&(this._lastSave=e,this._dirty=!1,this._saveNow()),this._sync(t,e);let a=this.cw<this.ch,o=Math.max(-4,Math.min(4,n.p.x)),c=Math.max(-5,Math.min(5,n.p.z)),l=a?5.5:6.5,h=a?9.5:8,d=new R(o+l,a?12.5:9.5,c+h);this.cam||(this.cam=d.clone()),this.cam.lerp(d,Math.min(1,t*3)),this.camera.position.copy(this.cam),this.camera.lookAt(this.cam.x-l,0,this.cam.z-h-1),this._guide(e),this._labels()}_sync(t,e){var d;let n=this.store,s=n.p;this.dispBaskets.show(n.dispenser),this.dispBaskets.items.forEach((u,f)=>{u.position.y=.15+Math.floor(f/2)*.32+Math.sin(e*3+f)*.04}),n.racks.forEach((u,f)=>this.rackModels[f].pool.show(u.n)),n.checkouts.forEach((u,f)=>{let m=this.checkoutModels[f];m.coins.show(Math.min(24,Math.ceil(u.cash/2))),m.robot&&m.robot.visible&&(m.robot.position.y=Math.abs(Math.sin(e*(u.busy?10:2)))*.08,m.robot.userData.light.material.emissiveIntensity=u.busy?1:.2)});for(let u of[...this.rackModels.map(f=>f.g),...this.shelfModels.map(f=>f.m),...this.checkoutModels.flatMap(f=>[f.g,f.robot].filter(Boolean)),...this.shuttles.map(f=>f.m)])u.userData.grow!==void 0&&(u.userData.grow=Math.min(1,u.userData.grow+t*2),u.scale.setScalar(Math.max(.01,Eh(u.userData.grow))),u.userData.grow>=1&&delete u.userData.grow);for(let u of this.shuttles)u.land=Math.max(0,u.land-t*.8),u.m.userData.shuttle.position.y=.6+u.land*u.land*8,u.m.userData.shuttle.rotation.y=e*.3;let r=this.hero;r.root.position.set(s.x,0,s.z);let a=s.heading-r.root.rotation.y;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;r.root.rotation.y+=a*Math.min(1,t*12);let o=Math.sin(e*13)*.6*s.moving;r.legs[0].rotation.x=o,r.legs[1].rotation.x=-o,r.arms.forEach(u=>{u.rotation.x=s.stack>0?-1.3:-o*.8}),r.body.position.y=Math.abs(Math.sin(e*13))*.05*s.moving,this.heroStack.show(s.stack),this.ring.position.set(s.x,.03,s.z);let c=new Set;for(let u of n.shoppers){c.add(u.id);let f=this.shopperModels.get(u.id);if(!f){f=u.kind.startsWith("astro")?ac(u.kind==="astro"?16767144:14215423,[16738922,6982399,16762938,9103466][u.id%4],[15777946,13144154,9067066][u.id%3],[2759184,15253616,1708048][u.id%3],!1):ih(u.kind),f.basket=Cs(.6),f.basket.position.set(0,0,.05),f.fruit=[];for(let g=0;g<4;g++){let p=new Ut(new Sn(.08,8,6),ut([16730698,16752672,8052826,16769098][g]));p.position.set(-.15+g*.1,.25,0),p.visible=!1,f.basket.add(p),f.fruit.push(p)}f.back.add(f.basket),f.root.scale.setScalar(.9),f.bubble=new Ut(new Sn(.18,10,8),ut(16777215)),f.bubble.position.y=2,f.root.add(f.bubble),this.scene.add(f.root),this.shopperModels.set(u.id,f)}f.root.position.set(u.x,0,u.z);let m=u.heading-f.root.rotation.y;for(;m>Math.PI;)m-=Math.PI*2;for(;m<-Math.PI;)m+=Math.PI*2;f.root.rotation.y+=m*Math.min(1,t*10);let A=Math.sin(e*12+u.id)*.5*u.moving;f.legs.forEach((g,p)=>{g.rotation&&(g.rotation.x=p%2?-A:A)}),f.basket.visible=u.basket,f.fruit.forEach((g,p)=>{g.visible=p<u.goods}),f.bubble.visible=!!u.waiting,f.body.position.y=u.happy>0?Math.abs(Math.sin(e*10))*.25:0}for(let[u,f]of this.shopperModels)c.has(u)||(this.scene.remove(f.root),this.shopperModels.delete(u));let l=new Set(n.pads.map(u=>u.id));for(let[u,f]of this.padModels){let m=l.has(u);if(f.g.visible=m,!m)continue;let A=tn.find(p=>p.id===u),g=((d=this.save.paid[u])!=null?d:0)/A.cost;f.f!==g&&(f.f=g,f.prog.geometry.dispose(),f.prog.geometry=new je(.8,1,32,1,Math.PI/2,Math.max(.001,g*Math.PI*2))),f.ring.scale.setScalar(1+Math.sin(e*4)*.04)}let h=this.sparks;for(let u=0;u<h.n;u++)if(!(h.life[u]<=0)){h.life[u]-=t,h.vel[u*3+1]-=8*t;for(let f=0;f<3;f++)h.pos[u*3+f]+=h.vel[u*3+f]*t;h.life[u]<=0&&(h.pos[u*3+1]=-50)}h.g.attributes.position.needsUpdate=!0,this.planet.rotation.y+=t*.02}_guide(t){let e=this.store,n=e.p,s=e.checkouts[0],r=e.racks.filter(u=>e.open(u)).sort((u,f)=>u.n-f.n)[0],a=e.pads.find(u=>{var f;return this.save.coins>=Math.min(10,u.cost-((f=this.save.paid[u.id])!=null?f:0))}),o=e.checkouts.filter(u=>u.cash>=3).sort((u,f)=>f.cash-u.cash)[0],c=e._queue(s).some(u=>u.front)&&!e.has("hyper"),l,h;n.stack>0?(l={x:r.x,z:r.z+.9},h=ee("oStock")):a?(l=a,h=`${ee("oBuild")} ${Br(a)}`):c&&r.n>1?(l=s.till,h=ee("oServe")):o?(l=o.coins,h=ee("oCoins")):r.n<6?(l=ze,h=ee("oGrab")):(l=s.till,h=ee("oServe"));let d=bh(l,n)>1.1;this.arrow.visible=d,d&&(this.arrow.position.set(l.x,2.2+Math.abs(Math.sin(t*4))*.5,l.z),this.arrow.rotation.y=t*2),this._hc.obj!==h&&(this._hc.obj=h,this.hud.obj.lastChild.textContent=h)}_screen(t,e,n){let s=new R(t,e,n).project(this.camera);return[(s.x*.5+.5)*this.cw,(-s.y*.5+.5)*this.ch,s.z<1]}_labels(){var r;let t=this.store,e=this._hc;this.coinEl&&e.coins!==this.save.coins&&(e.coins=this.save.coins,this.coinEl.textContent=Ki(this.save.coins));let n=new Set(t.pads.map(a=>a.id));for(let[a,o]of this.padLbls){if(!n.has(a)){o.style.display="none";continue}let c=tn.find(f=>f.id===a),[l,h,d]=this._screen(c.x,.2,c.z);o.style.display=d?"flex":"none",o.style.left=`${l}px`,o.style.top=`${h}px`;let u=c.cost-((r=this.save.paid[a])!=null?r:0);o.dataset.left!==String(u)&&(o.dataset.left=String(u),o.querySelector("b").textContent=Ki(u))}let s=t.p.stack>=t.capacity;if(this.hud.max.style.display=s?"block":"none",s){let[a,o]=this._screen(t.p.x,1.6+t.capacity*.25,t.p.z);this.hud.max.style.left=`${a}px`,this.hud.max.style.top=`${o}px`}}_frame(){let t=Math.min(this.clock.getDelta(),.1),e=this.clock.elapsedTime;if(this._adapt(t),this.mode==="play"&&!this.paused)this._playFrame(t,e);else{if(this.mode==="menu"){this.store.step(t,{x:0,z:0});let n=e*.08;this.camera.position.set(Math.sin(n)*6+2,15,13+Math.cos(n)*3),this.camera.lookAt(0,0,0),this.cam=null}this._sync(t,e)}this.renderer.render(this.scene,this.camera)}_adapt(t){if(this.frames.push(t),this.frames.length<90)return;let e=this.frames.reduce((n,s)=>n+s,0)/this.frames.length;this.frames.length=0,e>1/40&&this.pr>.75?(this.pr=Math.max(.75,this.pr-.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0):e<1/57&&this.pr<this.maxPR&&++this.goodWin>=4&&(this.pr=Math.min(this.maxPR,this.pr+.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0)}dispose(){if(clearInterval(this._pill),this.save&&this._saveNow(),this.sound.dispose(),this.renderer){this.renderer.setAnimationLoop(null),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}}this.ro&&this.ro.disconnect(),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),document.removeEventListener("visibilitychange",this._onVis),this.root.remove()}},uc={start(i,t,e){let n=new hc(i,t||{},e);return uc.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.SpaceStore=uc;var MA=uc;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
