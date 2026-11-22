(()=>{var ec="170";var qh=0,Rc=1,Hh=2;var ql=1,Gh=2,pn=3,Nn=0,Le=1,mn=2,Un=0,Si=1,Pc=2,Lc=3,Uc=4,Wh=5,jn=100,Xh=101,Yh=102,Zh=103,Kh=104,Jh=200,jh=201,Qh=202,$h=203,wa=204,Ta=205,tu=206,eu=207,nu=208,iu=209,su=210,ru=211,au=212,ou=213,cu=214,Va=0,Ra=1,Pa=2,Vi=3,La=4,Ua=5,Da=6,Na=7,nc=0,lu=1,hu=2,Dn=0,uu=1,du=2,fu=3,ic=4,pu=5,gu=6,mu=7;var Hl=300,Ri=301,Pi=302,Fa=303,za=304,Lr=306,Li=1e3,ti=1001,Ba=1002,Be=1003,Au=1004;var ws=1005;var nn=1006,Zr=1007;var ei=1008;var Cn=1009,Gl=1010,Wl=1011,cs=1012,sc=1013,ni=1014,sn=1015,ys=1016,rc=1017,ac=1018,Ui=1020,Xl=35902,Yl=1021,Zl=1022,Je=1023,Kl=1024,Jl=1025,Ei=1026,Di=1027,oc=1028,cc=1029,jl=1030,lc=1031;var hc=1033,nr=33776,ir=33777,sr=33778,rr=33779,Oa=35840,ka=35841,qa=35842,Ha=35843,Ga=36196,Wa=37492,Xa=37496,Ya=37808,Za=37809,Ka=37810,Ja=37811,ja=37812,Qa=37813,$a=37814,to=37815,eo=37816,no=37817,io=37818,so=37819,ro=37820,ao=37821,ar=36492,oo=36494,co=36495,Ql=36283,lo=36284,ho=36285,uo=36286;var or=2300,fo=2301,Kr=2302,Dc=2400,Nc=2401,Fc=2402;var xu=3200,Cu=3201;var $l=0,yu=1,Ln="",Ae="srgb",qi="srgb-linear",Ur="linear",se="srgb";var li=7680;var zc=519,_u=512,vu=513,Iu=514,th=515,Mu=516,bu=517,Su=518,Eu=519,Bc=35044;var Oc="300 es",An=2e3,cr=2001,Fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Jr=Math.PI/180,po=180/Math.PI;function Hi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Ee(i,t,e){return Math.max(t,Math.min(e,i))}function wu(i,t){return(i%t+t)%t}function jr(i,t,e){return(1-e)*i+e*t}function Ki(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var at=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],x=s[0],g=s[3],f=s[6],M=s[1],C=s[4],A=s[7],L=s[2],E=s[5],T=s[8];return r[0]=a*x+o*M+c*L,r[3]=a*g+o*C+c*E,r[6]=a*f+o*A+c*T,r[1]=l*x+h*M+u*L,r[4]=l*g+h*C+u*E,r[7]=l*f+h*A+u*T,r[2]=d*x+p*M+m*L,r[5]=d*g+p*C+m*E,r[8]=d*f+p*A+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,m=e*u+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Qr.makeScale(t,e)),this}rotate(t){return this.premultiply(Qr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qr=new qt;function eh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tu(){let i=lr("canvas");return i.style.display="block",i}var kc={};function ns(i){i in kc||(kc[i]=!0,console.warn(i))}function Vu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ru(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Qt={enabled:!0,workingColorSpace:qi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(i.r=xn(i.r),i.g=xn(i.g),i.b=xn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(i.r=wi(i.r),i.g=wi(i.g),i.b=wi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ln?Ur:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qc=[.64,.33,.3,.6,.15,.06],Hc=[.2126,.7152,.0722],Gc=[.3127,.329],Wc=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xc=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[qi]:{primaries:qc,whitePoint:Gc,transfer:Ur,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:Hc,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:qc,whitePoint:Gc,transfer:se,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:Hc,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}});var hi,go=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hi===void 0&&(hi=lr("canvas")),hi.width=t.width,hi.height=t.height;let n=hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=lr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xn(e[n]/255)*255):e[n]=xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Lu=0,hr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($r(s[a].image)):r.push($r(s[a]))}else r=$r(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function $r(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?go.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Uu=0,Ue=class i extends Fn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ti,s=ti,r=nn,a=ei,o=Je,c=Cn,l=i.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Hi(),this.name="",this.source=new hr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Li:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case Ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Li:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case Ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Hl;Ue.DEFAULT_ANISOTROPY=1;var pe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],m=c[9],x=c[2],g=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(l+1)/2,A=(p+1)/2,L=(f+1)/2,E=(h+d)/4,T=(u+x)/4,R=(m+g)/4;return C>A&&C>L?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=E/n,r=T/n):A>L?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=E/s,r=R/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=T/r,s=R/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mo=class extends Fn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new hr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends mo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ur=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ao=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var De=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],m=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==d||l!==p||h!==m){let g=1-o,f=c*d+l*p+h*m+u*x,M=f>=0?1:-1,C=1-f*f;if(C>Number.EPSILON){let L=Math.sqrt(C),E=Math.atan2(L,f*M);g=Math.sin(g*E)/L,o=Math.sin(o*E)/L}let A=o*M;if(c=c*g+d*A,l=l*g+p*A,h=h*g+m*A,u=u*g+x*A,g===1-o){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*p-l*d,t[e+1]=c*m+h*d+l*u-o*p,t[e+2]=l*m+h*p+o*d-c*u,t[e+3]=h*m-o*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),p=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"YZX":this._x=d*h*u+l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u-d*p*m;break;case"XZY":this._x=d*h*u-l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ta.copy(this).projectOnVector(t),this.sub(ta)}reflect(t){return this.sub(ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ta=new P,Yc=new De,_n=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ye):Ye.fromBufferAttribute(r,a),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(t.matrixWorld),this.union(Ts)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ji),Vs.subVectors(this.max,Ji),ui.subVectors(t.a,Ji),di.subVectors(t.b,Ji),fi.subVectors(t.c,Ji),En.subVectors(di,ui),wn.subVectors(fi,di),Gn.subVectors(ui,fi);let e=[0,-En.z,En.y,0,-wn.z,wn.y,0,-Gn.z,Gn.y,En.z,0,-En.x,wn.z,0,-wn.x,Gn.z,0,-Gn.x,-En.y,En.x,0,-wn.y,wn.x,0,-Gn.y,Gn.x,0];return!ea(e,ui,di,fi,Vs)||(e=[1,0,0,0,1,0,0,0,1],!ea(e,ui,di,fi,Vs))?!1:(Rs.crossVectors(En,wn),e=[Rs.x,Rs.y,Rs.z],ea(e,ui,di,fi,Vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ln=[new P,new P,new P,new P,new P,new P,new P,new P],Ye=new P,Ts=new _n,ui=new P,di=new P,fi=new P,En=new P,wn=new P,Gn=new P,Ji=new P,Vs=new P,Rs=new P,Wn=new P;function ea(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Wn.fromArray(i,r);let o=s.x*Math.abs(Wn.x)+s.y*Math.abs(Wn.y)+s.z*Math.abs(Wn.z),c=t.dot(Wn),l=e.dot(Wn),h=n.dot(Wn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Du=new _n,ji=new P,na=new P,zn=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Du.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ji.subVectors(t,this.center);let e=ji.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ji.copy(t.center).add(na)),this.expandByPoint(ji.copy(t.center).sub(na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},hn=new P,ia=new P,Ps=new P,Tn=new P,sa=new P,Ls=new P,ra=new P,dr=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ia.copy(t).add(e).multiplyScalar(.5),Ps.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(ia);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ps),o=Tn.dot(this.direction),c=-Tn.dot(Ps),l=Tn.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ia).addScaledVector(Ps,d),p}intersectSphere(t,e){hn.subVectors(t.center,this.origin);let n=hn.dot(this.direction),s=hn.dot(hn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,n,s,r){sa.subVectors(e,t),Ls.subVectors(n,t),ra.crossVectors(sa,Ls);let a=this.direction.dot(ra),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,t);let c=o*this.direction.dot(Ls.crossVectors(Tn,Ls));if(c<0)return null;let l=o*this.direction.dot(sa.cross(Tn));if(l<0||c+l>a)return null;let h=-o*Tn.dot(ra);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,d,p,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,p,m,x,g)}set(t,e,n,s,r,a,o,c,l,h,u,d,p,m,x,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=x,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/pi.setFromMatrixColumn(t,0).length(),r=1/pi.setFromMatrixColumn(t,1).length(),a=1/pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,m=o*h,x=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+m*l,e[5]=d-x*l,e[9]=-o*c,e[2]=x-d*l,e[6]=m+p*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,m=l*h,x=l*u;e[0]=d+x*o,e[4]=m*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=x+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,m=l*h,x=l*u;e[0]=d-x*o,e[4]=-a*u,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,p=a*u,m=o*h,x=o*u;e[0]=c*h,e[4]=m*l-p,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=p*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,p=a*l,m=o*c,x=o*l;e[0]=c*h,e[4]=x-d*u,e[8]=m*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*c,p=a*l,m=o*c,x=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=a*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nu,t,Fu)}lookAt(t,e,n){let s=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Vn.crossVectors(n,Fe),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Vn.crossVectors(n,Fe)),Vn.normalize(),Us.crossVectors(Fe,Vn),s[0]=Vn.x,s[4]=Us.x,s[8]=Fe.x,s[1]=Vn.y,s[5]=Us.y,s[9]=Fe.y,s[2]=Vn.z,s[6]=Us.z,s[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],x=n[6],g=n[10],f=n[14],M=n[3],C=n[7],A=n[11],L=n[15],E=s[0],T=s[4],R=s[8],I=s[12],_=s[1],w=s[5],G=s[9],B=s[13],V=s[2],H=s[6],F=s[10],K=s[14],O=s[3],$=s[7],it=s[11],ft=s[15];return r[0]=a*E+o*_+c*V+l*O,r[4]=a*T+o*w+c*H+l*$,r[8]=a*R+o*G+c*F+l*it,r[12]=a*I+o*B+c*K+l*ft,r[1]=h*E+u*_+d*V+p*O,r[5]=h*T+u*w+d*H+p*$,r[9]=h*R+u*G+d*F+p*it,r[13]=h*I+u*B+d*K+p*ft,r[2]=m*E+x*_+g*V+f*O,r[6]=m*T+x*w+g*H+f*$,r[10]=m*R+x*G+g*F+f*it,r[14]=m*I+x*B+g*K+f*ft,r[3]=M*E+C*_+A*V+L*O,r[7]=M*T+C*w+A*H+L*$,r[11]=M*R+C*G+A*F+L*it,r[15]=M*I+C*B+A*K+L*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],m=t[3],x=t[7],g=t[11],f=t[15];return m*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*p-n*c*p)+x*(+e*c*p-e*l*d+r*a*d-s*a*p+s*l*h-r*c*h)+g*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+f*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],m=t[12],x=t[13],g=t[14],f=t[15],M=u*g*l-x*d*l+x*c*p-o*g*p-u*c*f+o*d*f,C=m*d*l-h*g*l-m*c*p+a*g*p+h*c*f-a*d*f,A=h*x*l-m*u*l+m*o*p-a*x*p-h*o*f+a*u*f,L=m*u*c-h*x*c-m*o*d+a*x*d+h*o*g-a*u*g,E=e*M+n*C+s*A+r*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=M*T,t[1]=(x*d*r-u*g*r-x*s*p+n*g*p+u*s*f-n*d*f)*T,t[2]=(o*g*r-x*c*r+x*s*l-n*g*l-o*s*f+n*c*f)*T,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*p-n*c*p)*T,t[4]=C*T,t[5]=(h*g*r-m*d*r+m*s*p-e*g*p-h*s*f+e*d*f)*T,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*f-e*c*f)*T,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*p+e*c*p)*T,t[8]=A*T,t[9]=(m*u*r-h*x*r-m*n*p+e*x*p+h*n*f-e*u*f)*T,t[10]=(a*x*r-m*o*r+m*n*l-e*x*l-a*n*f+e*o*f)*T,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*T,t[12]=L*T,t[13]=(h*x*s-m*u*s+m*n*d-e*x*d-h*n*g+e*u*g)*T,t[14]=(m*o*s-a*x*s-m*n*c+e*x*c+a*n*g-e*o*g)*T,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,m=r*u,x=a*h,g=a*u,f=o*u,M=c*l,C=c*h,A=c*u,L=n.x,E=n.y,T=n.z;return s[0]=(1-(x+f))*L,s[1]=(p+A)*L,s[2]=(m-C)*L,s[3]=0,s[4]=(p-A)*E,s[5]=(1-(d+f))*E,s[6]=(g+M)*E,s[7]=0,s[8]=(m+C)*T,s[9]=(g-M)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=pi.set(s[0],s[1],s[2]).length(),a=pi.set(s[4],s[5],s[6]).length(),o=pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ze.copy(this);let l=1/r,h=1/a,u=1/o;return Ze.elements[0]*=l,Ze.elements[1]*=l,Ze.elements[2]*=l,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=u,Ze.elements[9]*=u,Ze.elements[10]*=u,e.setFromRotationMatrix(Ze),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=An){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,m;if(o===An)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===cr)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=An){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,p=(n+s)*h,m,x;if(o===An)m=(a+r)*u,x=-2*u;else if(o===cr)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},pi=new P,Ze=new Xt,Nu=new P(0,0,0),Fu=new P(1,1,1),Vn=new P,Us=new P,Fe=new P,Zc=new Xt,Kc=new De,rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zu=0,Jc=new P,gi=new De,un=new Xt,Ds=new P,Qi=new P,Bu=new P,Ou=new De,jc=new P(1,0,0),Qc=new P(0,1,0),$c=new P(0,0,1),tl={type:"added"},ku={type:"removed"},mi={type:"childadded",child:null},aa={type:"childremoved",child:null},we=class i extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new rn,n=new De,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xt},normalMatrix:{value:new qt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(jc,t)}rotateY(t){return this.rotateOnAxis(Qc,t)}rotateZ(t){return this.rotateOnAxis($c,t)}translateOnAxis(t,e){return Jc.copy(t).applyQuaternion(this.quaternion),this.position.add(Jc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jc,t)}translateY(t){return this.translateOnAxis(Qc,t)}translateZ(t){return this.translateOnAxis($c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ds.copy(t):Ds.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Qi,Ds,this.up):un.lookAt(Ds,Qi,this.up),this.quaternion.setFromRotationMatrix(un),s&&(un.extractRotation(s.matrixWorld),gi.setFromRotationMatrix(un),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tl),mi.child=t,this.dispatchEvent(mi),mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ku),aa.child=t,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tl),mi.child=t,this.dispatchEvent(mi),mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,t,Bu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,Ou,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};we.DEFAULT_UP=new P(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=new P,dn=new P,oa=new P,fn=new P,Ai=new P,xi=new P,el=new P,ca=new P,la=new P,ha=new P,ua=new pe,da=new pe,fa=new pe,Qn=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ke.subVectors(t,e),s.cross(Ke);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ke.subVectors(s,e),dn.subVectors(n,e),oa.subVectors(t,e);let a=Ke.dot(Ke),o=Ke.dot(dn),c=Ke.dot(oa),l=dn.dot(dn),h=dn.dot(oa),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fn.x),c.addScaledVector(a,fn.y),c.addScaledVector(o,fn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return ua.setScalar(0),da.setScalar(0),fa.setScalar(0),ua.fromBufferAttribute(t,e),da.fromBufferAttribute(t,n),fa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ua,r.x),a.addScaledVector(da,r.y),a.addScaledVector(fa,r.z),a}static isFrontFacing(t,e,n,s){return Ke.subVectors(n,e),dn.subVectors(t,e),Ke.cross(dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Ke.cross(dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ai.subVectors(s,n),xi.subVectors(r,n),ca.subVectors(t,n);let c=Ai.dot(ca),l=xi.dot(ca);if(c<=0&&l<=0)return e.copy(n);la.subVectors(t,s);let h=Ai.dot(la),u=xi.dot(la);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ai,a);ha.subVectors(t,r);let p=Ai.dot(ha),m=xi.dot(ha);if(m>=0&&p<=m)return e.copy(r);let x=p*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(xi,o);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return el.subVectors(r,s),o=(u-h)/(u-h+(p-m)),e.copy(s).addScaledVector(el,o);let f=1/(g+x+d);return a=x*f,o=d*f,e.copy(n).addScaledVector(Ai,a).addScaledVector(xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function pa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=wu(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=pa(a,r,t+1/3),this.g=pa(a,r,t),this.b=pa(a,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){let n=nh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xn(t.r),this.g=xn(t.g),this.b=xn(t.b),this}copyLinearToSRGB(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return Qt.fromWorkingColorSpace(Se.copy(this),t),Math.round(Ee(Se.r*255,0,255))*65536+Math.round(Ee(Se.g*255,0,255))*256+Math.round(Ee(Se.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Se.copy(this),e);let n=Se.r,s=Se.g,r=Se.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=Ae){Qt.fromWorkingColorSpace(Se.copy(this),t);let e=Se.r,n=Se.g,s=Se.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(Ns);let n=jr(Rn.h,Ns.h,e),s=jr(Rn.s,Ns.s,e),r=jr(Rn.l,Ns.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Se=new zt;zt.NAMES=nh;var qu=0,Bn=class extends Fn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Hi(),this.name="",this.blending=Si,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Ta,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ta&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},pr=class extends Bn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ge=new P,Fs=new at,xe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bc,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fs.fromBufferAttribute(this,e),Fs.applyMatrix3(t),this.setXY(e,Fs.x,Fs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bc&&(t.usage=this.usage),t}};var gr=class extends xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mr=class extends xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var he=class extends xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hu=0,He=new Xt,ga=new we,Ci=new P,ze=new _n,$i=new _n,_e=new P,ve=class i extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eh(t)?mr:gr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return ga.lookAt(t),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(ze.min,$i.min),ze.expandByPoint(_e),_e.addVectors(ze.max,$i.max),ze.expandByPoint(_e)):(ze.expandByPoint($i.min),ze.expandByPoint($i.max))}ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)_e.fromBufferAttribute(o,l),c&&(Ci.fromBufferAttribute(t,l),_e.add(Ci)),s=Math.max(s,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new P,c[R]=new P;let l=new P,h=new P,u=new P,d=new at,p=new at,m=new at,x=new P,g=new P;function f(R,I,_){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,I),m.fromBufferAttribute(r,_),h.sub(l),u.sub(l),p.sub(d),m.sub(d);let w=1/(p.x*m.y-m.x*p.y);isFinite(w)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(w),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(w),o[R].add(x),o[I].add(x),o[_].add(x),c[R].add(g),c[I].add(g),c[_].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,I=M.length;R<I;++R){let _=M[R],w=_.start,G=_.count;for(let B=w,V=w+G;B<V;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let C=new P,A=new P,L=new P,E=new P;function T(R){L.fromBufferAttribute(s,R),E.copy(L);let I=o[R];C.copy(I),C.sub(L.multiplyScalar(L.dot(I))).normalize(),A.crossVectors(E,I);let w=A.dot(c[R])<0?-1:1;a.setXYZW(R,C.x,C.y,C.z,w)}for(let R=0,I=M.length;R<I;++R){let _=M[R],w=_.start,G=_.count;for(let B=w,V=w+G;B<V;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*h;for(let f=0;f<h;f++)d[m++]=l[p++]}return new xe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nl=new Xt,Xn=new dr,zs=new zn,il=new P,Bs=new P,Os=new P,ks=new P,ma=new P,qs=new P,sl=new P,Hs=new P,Zt=class extends we{constructor(t=new ve,e=new pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){qs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(ma.fromBufferAttribute(u,t),a?qs.addScaledVector(ma,h):qs.addScaledVector(ma.sub(e),h))}e.add(qs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(r),Xn.copy(t.ray).recast(t.near),!(zs.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(zs,il)===null||Xn.origin.distanceToSquared(il)>(t.far-t.near)**2))&&(nl.copy(r).invert(),Xn.copy(t.ray).applyMatrix4(nl),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],f=a[g.materialIndex],M=Math.max(g.start,p.start),C=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let A=M,L=C;A<L;A+=3){let E=o.getX(A),T=o.getX(A+1),R=o.getX(A+2);s=Gs(this,f,t,n,l,h,u,E,T,R),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){let M=o.getX(g),C=o.getX(g+1),A=o.getX(g+2);s=Gs(this,a,t,n,l,h,u,M,C,A),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],f=a[g.materialIndex],M=Math.max(g.start,p.start),C=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let A=M,L=C;A<L;A+=3){let E=A,T=A+1,R=A+2;s=Gs(this,f,t,n,l,h,u,E,T,R),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){let M=g,C=g+1,A=g+2;s=Gs(this,a,t,n,l,h,u,M,C,A),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Gu(i,t,e,n,s,r,a,o){let c;if(t.side===Le?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Nn,o),c===null)return null;Hs.copy(o),Hs.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Hs);return l<e.near||l>e.far?null:{distance:l,point:Hs.clone(),object:i}}function Gs(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Bs),i.getVertexPosition(c,Os),i.getVertexPosition(l,ks);let h=Gu(i,t,e,n,Bs,Os,ks,sl);if(h){let u=new P;Qn.getBarycoord(sl,Bs,Os,ks,u),s&&(h.uv=Qn.getInterpolatedAttribute(s,o,c,l,u,new at)),r&&(h.uv1=Qn.getInterpolatedAttribute(r,o,c,l,u,new at)),a&&(h.normal=Qn.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new P,materialIndex:0};Qn.getNormal(Bs,Os,ks,d.normal),h.face=d,h.barycoord=u}return h}var Oe=class i extends ve{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(u,2));function m(x,g,f,M,C,A,L,E,T,R,I){let _=A/T,w=L/R,G=A/2,B=L/2,V=E/2,H=T+1,F=R+1,K=0,O=0,$=new P;for(let it=0;it<F;it++){let ft=it*w-B;for(let Rt=0;Rt<H;Rt++){let Wt=Rt*_-G;$[x]=Wt*M,$[g]=ft*C,$[f]=V,l.push($.x,$.y,$.z),$[x]=0,$[g]=0,$[f]=E>0?1:-1,h.push($.x,$.y,$.z),u.push(Rt/T),u.push(1-it/R),K+=1}}for(let it=0;it<R;it++)for(let ft=0;ft<T;ft++){let Rt=d+ft+H*it,Wt=d+ft+H*(it+1),X=d+(ft+1)+H*(it+1),et=d+(ft+1)+H*it;c.push(Rt,Wt,et),c.push(Wt,X,et),O+=6}o.addGroup(p,O,I),p+=O,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ni(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Te(i){let t={};for(let e=0;e<i.length;e++){let n=Ni(i[e]);for(let s in n)t[s]=n[s]}return t}function Wu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ih(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var Xu={clone:Ni,merge:Te},Yu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends Bn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yu,this.fragmentShader=Zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=Wu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ar=class extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pn=new P,rl=new at,al=new at,Ve=class extends Ar{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=po*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return po*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,rl,al),e.subVectors(al,rl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},yi=-90,_i=1,xo=class extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(yi,_i,t,e);s.layers=this.layers,this.add(s);let r=new Ve(yi,_i,t,e);r.layers=this.layers,this.add(r);let a=new Ve(yi,_i,t,e);a.layers=this.layers,this.add(a);let o=new Ve(yi,_i,t,e);o.layers=this.layers,this.add(o);let c=new Ve(yi,_i,t,e);c.layers=this.layers,this.add(c);let l=new Ve(yi,_i,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},xr=class extends Ue{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ri,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Co=class extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Oe(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Un});r.uniforms.tEquirect.value=e;let a=new Zt(s,r),o=e.minFilter;return e.minFilter===ei&&(e.minFilter=nn),new xo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Aa=new P,Ku=new P,Ju=new qt,gn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Aa.subVectors(n,e).cross(Ku.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ju.getNormalMatrix(t),s=this.coplanarPoint(Aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yn=new zn,Ws=new P,ls=class{constructor(t=new gn,e=new gn,n=new gn,s=new gn,r=new gn,a=new gn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],m=s[9],x=s[10],g=s[11],f=s[12],M=s[13],C=s[14],A=s[15];if(n[0].setComponents(c-r,d-l,g-p,A-f).normalize(),n[1].setComponents(c+r,d+l,g+p,A+f).normalize(),n[2].setComponents(c+a,d+h,g+m,A+M).normalize(),n[3].setComponents(c-a,d-h,g-m,A-M).normalize(),n[4].setComponents(c-o,d-u,g-x,A-C).normalize(),e===An)n[5].setComponents(c+o,d+u,g+x,A+C).normalize();else if(e===cr)n[5].setComponents(o,u,x,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(t){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ws.x=s.normal.x>0?t.max.x:t.min.x,Ws.y=s.normal.y>0?t.max.y:t.min.y,Ws.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ju(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){let m=u[d],x=u[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){let x=u[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var je=class i extends ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,p=[],m=[],x=[],g=[];for(let f=0;f<h;f++){let M=f*d-a;for(let C=0;C<l;C++){let A=C*u-r;m.push(A,-M,0),x.push(0,0,1),g.push(C/o),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){let C=M+l*f,A=M+l*(f+1),L=M+1+l*(f+1),E=M+1+l*f;p.push(C,A,E),p.push(A,L,E)}this.setIndex(p),this.setAttribute("position",new he(m,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Qu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$u=`#ifdef USE_ALPHAHASH
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
#endif`,td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sd=`#ifdef USE_AOMAP
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
#endif`,rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ad=`#ifdef USE_BATCHING
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
#endif`,od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ud=`#ifdef USE_IRIDESCENCE
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
#endif`,dd=`#ifdef USE_BUMPMAP
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
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_d=`#define PI 3.141592653589793
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
} // validated`,vd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Id=`vec3 transformedNormal = objectNormal;
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
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vd=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bd=`#ifdef USE_GRADIENTMAP
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
}`,Od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hd=`uniform bool receiveShadow;
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
#endif`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kd=`PhysicalMaterial material;
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
#endif`,Jd=`struct PhysicalMaterial {
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
}`,jd=`
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
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
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
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ef=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cf=`#if defined( USE_POINTS_UV )
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
#endif`,lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,df=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ff=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pf=`#ifdef USE_MORPHTARGETS
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
#endif`,gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Af=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_f=`#ifdef USE_NORMALMAP
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
#endif`,vf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,If=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ef=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ff=`float getShadowMask() {
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
}`,zf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bf=`#ifdef USE_SKINNING
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
#endif`,Of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kf=`#ifdef USE_SKINNING
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
#endif`,qf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xf=`#ifdef USE_TRANSMISSION
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
#endif`,Yf=`#ifdef USE_TRANSMISSION
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$f=`uniform sampler2D t2D;
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`#ifdef ENVMAP_TYPE_CUBE
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
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`#include <common>
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
}`,rp=`#if DEPTH_PACKING == 3200
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
}`,ap=`#define DISTANCE
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
}`,op=`#define DISTANCE
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
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`uniform float scale;
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
}`,up=`uniform vec3 diffuse;
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
}`,dp=`#include <common>
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
}`,fp=`uniform vec3 diffuse;
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
}`,pp=`#define LAMBERT
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
}`,gp=`#define LAMBERT
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
}`,mp=`#define MATCAP
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
}`,Ap=`#define MATCAP
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
}`,xp=`#define NORMAL
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
}`,Cp=`#define NORMAL
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
}`,yp=`#define PHONG
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
}`,_p=`#define PHONG
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
}`,vp=`#define STANDARD
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
}`,Ip=`#define STANDARD
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
}`,Mp=`#define TOON
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
}`,bp=`#define TOON
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
}`,Sp=`uniform float size;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,wp=`#include <common>
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
}`,Tp=`uniform vec3 color;
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
}`,Vp=`uniform float rotation;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Qu,alphahash_pars_fragment:$u,alphamap_fragment:td,alphamap_pars_fragment:ed,alphatest_fragment:nd,alphatest_pars_fragment:id,aomap_fragment:sd,aomap_pars_fragment:rd,batching_pars_vertex:ad,batching_vertex:od,begin_vertex:cd,beginnormal_vertex:ld,bsdfs:hd,iridescence_fragment:ud,bumpmap_pars_fragment:dd,clipping_planes_fragment:fd,clipping_planes_pars_fragment:pd,clipping_planes_pars_vertex:gd,clipping_planes_vertex:md,color_fragment:Ad,color_pars_fragment:xd,color_pars_vertex:Cd,color_vertex:yd,common:_d,cube_uv_reflection_fragment:vd,defaultnormal_vertex:Id,displacementmap_pars_vertex:Md,displacementmap_vertex:bd,emissivemap_fragment:Sd,emissivemap_pars_fragment:Ed,colorspace_fragment:wd,colorspace_pars_fragment:Td,envmap_fragment:Vd,envmap_common_pars_fragment:Rd,envmap_pars_fragment:Pd,envmap_pars_vertex:Ld,envmap_physical_pars_fragment:Gd,envmap_vertex:Ud,fog_vertex:Dd,fog_pars_vertex:Nd,fog_fragment:Fd,fog_pars_fragment:zd,gradientmap_pars_fragment:Bd,lightmap_pars_fragment:Od,lights_lambert_fragment:kd,lights_lambert_pars_fragment:qd,lights_pars_begin:Hd,lights_toon_fragment:Wd,lights_toon_pars_fragment:Xd,lights_phong_fragment:Yd,lights_phong_pars_fragment:Zd,lights_physical_fragment:Kd,lights_physical_pars_fragment:Jd,lights_fragment_begin:jd,lights_fragment_maps:Qd,lights_fragment_end:$d,logdepthbuf_fragment:tf,logdepthbuf_pars_fragment:ef,logdepthbuf_pars_vertex:nf,logdepthbuf_vertex:sf,map_fragment:rf,map_pars_fragment:af,map_particle_fragment:of,map_particle_pars_fragment:cf,metalnessmap_fragment:lf,metalnessmap_pars_fragment:hf,morphinstance_vertex:uf,morphcolor_vertex:df,morphnormal_vertex:ff,morphtarget_pars_vertex:pf,morphtarget_vertex:gf,normal_fragment_begin:mf,normal_fragment_maps:Af,normal_pars_fragment:xf,normal_pars_vertex:Cf,normal_vertex:yf,normalmap_pars_fragment:_f,clearcoat_normal_fragment_begin:vf,clearcoat_normal_fragment_maps:If,clearcoat_pars_fragment:Mf,iridescence_pars_fragment:bf,opaque_fragment:Sf,packing:Ef,premultiplied_alpha_fragment:wf,project_vertex:Tf,dithering_fragment:Vf,dithering_pars_fragment:Rf,roughnessmap_fragment:Pf,roughnessmap_pars_fragment:Lf,shadowmap_pars_fragment:Uf,shadowmap_pars_vertex:Df,shadowmap_vertex:Nf,shadowmask_pars_fragment:Ff,skinbase_vertex:zf,skinning_pars_vertex:Bf,skinning_vertex:Of,skinnormal_vertex:kf,specularmap_fragment:qf,specularmap_pars_fragment:Hf,tonemapping_fragment:Gf,tonemapping_pars_fragment:Wf,transmission_fragment:Xf,transmission_pars_fragment:Yf,uv_pars_fragment:Zf,uv_pars_vertex:Kf,uv_vertex:Jf,worldpos_vertex:jf,background_vert:Qf,background_frag:$f,backgroundCube_vert:tp,backgroundCube_frag:ep,cube_vert:np,cube_frag:ip,depth_vert:sp,depth_frag:rp,distanceRGBA_vert:ap,distanceRGBA_frag:op,equirect_vert:cp,equirect_frag:lp,linedashed_vert:hp,linedashed_frag:up,meshbasic_vert:dp,meshbasic_frag:fp,meshlambert_vert:pp,meshlambert_frag:gp,meshmatcap_vert:mp,meshmatcap_frag:Ap,meshnormal_vert:xp,meshnormal_frag:Cp,meshphong_vert:yp,meshphong_frag:_p,meshphysical_vert:vp,meshphysical_frag:Ip,meshtoon_vert:Mp,meshtoon_frag:bp,points_vert:Sp,points_frag:Ep,shadow_vert:wp,shadow_frag:Tp,sprite_vert:Vp,sprite_frag:Rp},ut={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},en={basic:{uniforms:Te([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Te([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new zt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Te([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Te([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Te([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new zt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Te([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Te([ut.points,ut.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Te([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Te([ut.common,ut.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Te([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Te([ut.sprite,ut.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Te([ut.common,ut.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Te([ut.lights,ut.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};en.physical={uniforms:Te([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var Xs={r:0,b:0,g:0},Zn=new rn,Pp=new Xt;function Lp(i,t,e,n,s,r,a){let o=new zt(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function m(M){let C=M.isScene===!0?M.background:null;return C&&C.isTexture&&(C=(M.backgroundBlurriness>0?e:t).get(C)),C}function x(M){let C=!1,A=m(M);A===null?f(o,c):A&&A.isColor&&(f(A,1),C=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||C)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,C){let A=m(C);A&&(A.isCubeTexture||A.mapping===Lr)?(h===void 0&&(h=new Zt(new Oe(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Ni(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Zn.copy(C.backgroundRotation),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(Zn)),h.material.toneMapped=Qt.getTransfer(A.colorSpace)!==se,(u!==A||d!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Zt(new je(2,2),new an({name:"BackgroundMaterial",uniforms:Ni(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(A.colorSpace)!==se,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,p=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,C){M.getRGB(Xs,ih(i)),n.buffers.color.setClear(Xs.r,Xs.g,Xs.b,C,a)}return{getClearColor:function(){return o},setClearColor:function(M,C=1){o.set(M),c=C,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(o,c)},render:x,addToRenderList:g}}function Up(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(_,w,G,B,V){let H=!1,F=u(B,G,w);r!==F&&(r=F,l(r.object)),H=p(_,B,G,V),H&&m(_,B,G,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,A(_,w,G,B),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,w,G){let B=G.wireframe===!0,V=n[_.id];V===void 0&&(V={},n[_.id]=V);let H=V[w.id];H===void 0&&(H={},V[w.id]=H);let F=H[B];return F===void 0&&(F=d(c()),H[B]=F),F}function d(_){let w=[],G=[],B=[];for(let V=0;V<e;V++)w[V]=0,G[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:G,attributeDivisors:B,object:_,attributes:{},index:null}}function p(_,w,G,B){let V=r.attributes,H=w.attributes,F=0,K=G.getAttributes();for(let O in K)if(K[O].location>=0){let it=V[O],ft=H[O];if(ft===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(ft=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(ft=_.instanceColor)),it===void 0||it.attribute!==ft||ft&&it.data!==ft.data)return!0;F++}return r.attributesNum!==F||r.index!==B}function m(_,w,G,B){let V={},H=w.attributes,F=0,K=G.getAttributes();for(let O in K)if(K[O].location>=0){let it=H[O];it===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(it=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(it=_.instanceColor));let ft={};ft.attribute=it,it&&it.data&&(ft.data=it.data),V[O]=ft,F++}r.attributes=V,r.attributesNum=F,r.index=B}function x(){let _=r.newAttributes;for(let w=0,G=_.length;w<G;w++)_[w]=0}function g(_){f(_,0)}function f(_,w){let G=r.newAttributes,B=r.enabledAttributes,V=r.attributeDivisors;G[_]=1,B[_]===0&&(i.enableVertexAttribArray(_),B[_]=1),V[_]!==w&&(i.vertexAttribDivisor(_,w),V[_]=w)}function M(){let _=r.newAttributes,w=r.enabledAttributes;for(let G=0,B=w.length;G<B;G++)w[G]!==_[G]&&(i.disableVertexAttribArray(G),w[G]=0)}function C(_,w,G,B,V,H,F){F===!0?i.vertexAttribIPointer(_,w,G,V,H):i.vertexAttribPointer(_,w,G,B,V,H)}function A(_,w,G,B){x();let V=B.attributes,H=G.getAttributes(),F=w.defaultAttributeValues;for(let K in H){let O=H[K];if(O.location>=0){let $=V[K];if($===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&($=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&($=_.instanceColor)),$!==void 0){let it=$.normalized,ft=$.itemSize,Rt=t.get($);if(Rt===void 0)continue;let Wt=Rt.buffer,X=Rt.type,et=Rt.bytesPerElement,xt=X===i.INT||X===i.UNSIGNED_INT||$.gpuType===sc;if($.isInterleavedBufferAttribute){let st=$.data,Vt=st.stride,Nt=$.offset;if(st.isInstancedInterleavedBuffer){for(let Ut=0;Ut<O.locationSize;Ut++)f(O.location+Ut,st.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ut=0;Ut<O.locationSize;Ut++)g(O.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let Ut=0;Ut<O.locationSize;Ut++)C(O.location+Ut,ft/O.locationSize,X,it,Vt*et,(Nt+ft/O.locationSize*Ut)*et,xt)}else{if($.isInstancedBufferAttribute){for(let st=0;st<O.locationSize;st++)f(O.location+st,$.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let st=0;st<O.locationSize;st++)g(O.location+st);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let st=0;st<O.locationSize;st++)C(O.location+st,ft/O.locationSize,X,it,ft*et,ft/O.locationSize*st*et,xt)}}else if(F!==void 0){let it=F[K];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(O.location,it);break;case 3:i.vertexAttrib3fv(O.location,it);break;case 4:i.vertexAttrib4fv(O.location,it);break;default:i.vertexAttrib1fv(O.location,it)}}}}M()}function L(){R();for(let _ in n){let w=n[_];for(let G in w){let B=w[G];for(let V in B)h(B[V].object),delete B[V];delete w[G]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;let w=n[_.id];for(let G in w){let B=w[G];for(let V in B)h(B[V].object),delete B[V];delete w[G]}delete n[_.id]}function T(_){for(let w in n){let G=n[w];if(G[_.id]===void 0)continue;let B=G[_.id];for(let V in B)h(B[V].object),delete B[V];delete G[_.id]}}function R(){I(),a=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:I,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function Dp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Np(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Je&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let R=T===ys&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Cn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==sn&&!R)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:M,maxVaryings:C,maxFragmentUniforms:A,vertexTextures:L,maxSamples:E}}function Fp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new gn,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let M=r?0:n,C=M*4,A=f.clippingState||null;c.value=A,A=h(m,d,C,p);for(let L=0;L!==C;++L)A[L]=e[L];f.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let f=p+x*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<f)&&(g=new Float32Array(f));for(let C=0,A=p;C!==x;++C,A+=4)a.copy(u[C]).applyMatrix4(M,o),a.normal.toArray(g,A),g[A+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function zp(i){let t=new WeakMap;function e(a,o){return o===Fa?a.mapping=Ri:o===za&&(a.mapping=Pi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Fa||o===za)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Co(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Cr=class extends Ar{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Mi=4,ol=[.125,.215,.35,.446,.526,.582],$n=20,xa=new Cr,cl=new zt,Ca=null,ya=0,_a=0,va=!1,Jn=(1+Math.sqrt(5))/2,vi=1/Jn,ll=[new P(-Jn,vi,0),new P(Jn,vi,0),new P(-vi,0,Jn),new P(vi,0,Jn),new P(0,Jn,-vi),new P(0,Jn,vi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],yr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ca=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ca,ya,_a),this._renderer.xr.enabled=va,t.scissorTest=!1,Ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ri||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ca=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ys,format:Je,colorSpace:qi,depthBuffer:!1},s=hl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bp(r)),this._blurMaterial=Op(r,t,e)}return s}_compileMaterial(t){let e=new Zt(this._lodPlanes[0],t);this._renderer.compile(e,xa)}_sceneToCubeUV(t,e,n,s){let o=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(cl),h.toneMapping=Dn,h.autoClear=!1;let p=new pr({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),m=new Zt(new Oe,p),x=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,x=!0):(p.color.copy(cl),x=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):M===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let C=this._cubeSize;Ys(s,M*C,f>2?C:0,C,C),h.setRenderTarget(s),x&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ri||t.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ul());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Zt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Ys(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,xa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ll[(s-r-1)%ll.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Zt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*$n-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):$n;g>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$n}`);let f=[],M=0;for(let T=0;T<$n;++T){let R=T/x,I=Math.exp(-R*R/2);f.push(I),T===0?M+=I:T<g&&(M+=2*I)}for(let T=0;T<f.length;T++)f[T]=f[T]/M;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:C}=this;d.dTheta.value=m,d.mipInt.value=C-n;let A=this._sizeLods[s],L=3*A*(s>C-Mi?s-C+Mi:0),E=4*(this._cubeSize-A);Ys(e,L,E,3*A,2*A),c.setRenderTarget(e),c.render(u,xa)}};function Bp(i){let t=[],e=[],n=[],s=i,r=i-Mi+1+ol.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Mi?c=ol[a-i+Mi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,x=3,g=2,f=1,M=new Float32Array(x*m*p),C=new Float32Array(g*m*p),A=new Float32Array(f*m*p);for(let E=0;E<p;E++){let T=E%3*2/3-1,R=E>2?0:-1,I=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];M.set(I,x*m*E),C.set(d,g*m*E);let _=[E,E,E,E,E,E];A.set(_,f*m*E)}let L=new ve;L.setAttribute("position",new xe(M,x)),L.setAttribute("uv",new xe(C,g)),L.setAttribute("faceIndex",new xe(A,f)),t.push(L),s>Mi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hl(i,t,e){let n=new yn(i,t,e);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Op(i,t,e){let n=new Float32Array($n),s=new P(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uc(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ul(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function dl(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}function kp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Fa||c===za,h=c===Ri||c===Pi;if(l||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new yr(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new yr(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function qp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ns("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hp(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,f=x.length;g<f;g++)t.remove(x[g])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let m in p){let x=p[m];for(let g=0,f=x.length;g<f;g++)t.update(x[g],i.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,m=u.attributes.position,x=0;if(p!==null){let M=p.array;x=p.version;for(let C=0,A=M.length;C<A;C+=3){let L=M[C+0],E=M[C+1],T=M[C+2];d.push(L,E,E,T,T,L)}}else if(m!==void 0){let M=m.array;x=m.version;for(let C=0,A=M.length/3-1;C<A;C+=3){let L=C+0,E=C+1,T=C+2;d.push(L,E,E,T,T,L)}}else return;let g=new(eh(d)?mr:gr)(d,1);g.version=x;let f=r.get(u);f&&t.remove(f),r.set(u,g)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Gp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function l(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,d*a,m),e.update(p,n,m))}function h(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];e.update(g,n,1)}function u(d,p,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],x[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,m);let f=0;for(let M=0;M<m;M++)f+=p[M]*x[M];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Wp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xp(i,t,e){let n=new WeakMap,s=new pe;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let I=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],C=0;p===!0&&(C=1),m===!0&&(C=2),x===!0&&(C=3);let A=o.attributes.position.count*C,L=1;A>t.maxTextureSize&&(L=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let E=new Float32Array(A*L*4*u),T=new ur(E,A,L,u);T.type=sn,T.needsUpdate=!0;let R=C*4;for(let _=0;_<u;_++){let w=g[_],G=f[_],B=M[_],V=A*L*4*_;for(let H=0;H<w.count;H++){let F=H*R;p===!0&&(s.fromBufferAttribute(w,H),E[V+F+0]=s.x,E[V+F+1]=s.y,E[V+F+2]=s.z,E[V+F+3]=0),m===!0&&(s.fromBufferAttribute(G,H),E[V+F+4]=s.x,E[V+F+5]=s.y,E[V+F+6]=s.z,E[V+F+7]=0),x===!0&&(s.fromBufferAttribute(B,H),E[V+F+8]=s.x,E[V+F+9]=s.y,E[V+F+10]=s.z,E[V+F+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new at(A,L)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let m=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Yp(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var _r=class extends Ue{constructor(t,e,n,s,r,a,o,c,l,h=Ei){if(h!==Ei&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ei&&(n=ni),n===void 0&&h===Di&&(n=Ui),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Be,this.minFilter=c!==void 0?c:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},rh=new Ue,fl=new _r(1,1),ah=new ur,oh=new Ao,ch=new xr,pl=[],gl=[],ml=new Float32Array(16),Al=new Float32Array(9),xl=new Float32Array(4);function Gi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=pl[s];if(r===void 0&&(r=new Float32Array(s),pl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Dr(i,t){let e=gl[t];e===void 0&&(e=new Int32Array(t),gl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function Jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function Qp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Ce(e,n))return;xl.set(n),i.uniformMatrix2fv(this.addr,!1,xl),ye(e,n)}}function $p(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Ce(e,n))return;Al.set(n),i.uniformMatrix3fv(this.addr,!1,Al),ye(e,n)}}function tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Ce(e,n))return;ml.set(n),i.uniformMatrix4fv(this.addr,!1,ml),ye(e,n)}}function eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function lg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fl.compareFunction=th,r=fl):r=rh,e.setTexture2D(t||r,s)}function hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||oh,s)}function ug(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ch,s)}function dg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ah,s)}function fg(i){switch(i){case 5126:return Zp;case 35664:return Kp;case 35665:return Jp;case 35666:return jp;case 35674:return Qp;case 35675:return $p;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return ag;case 36295:return og;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}function pg(i,t){i.uniform1fv(this.addr,t)}function gg(i,t){let e=Gi(t,this.size,2);i.uniform2fv(this.addr,e)}function mg(i,t){let e=Gi(t,this.size,3);i.uniform3fv(this.addr,e)}function Ag(i,t){let e=Gi(t,this.size,4);i.uniform4fv(this.addr,e)}function xg(i,t){let e=Gi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cg(i,t){let e=Gi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yg(i,t){let e=Gi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _g(i,t){i.uniform1iv(this.addr,t)}function vg(i,t){i.uniform2iv(this.addr,t)}function Ig(i,t){i.uniform3iv(this.addr,t)}function Mg(i,t){i.uniform4iv(this.addr,t)}function bg(i,t){i.uniform1uiv(this.addr,t)}function Sg(i,t){i.uniform2uiv(this.addr,t)}function Eg(i,t){i.uniform3uiv(this.addr,t)}function wg(i,t){i.uniform4uiv(this.addr,t)}function Tg(i,t,e){let n=this.cache,s=t.length,r=Dr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||rh,r[a])}function Vg(i,t,e){let n=this.cache,s=t.length,r=Dr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||oh,r[a])}function Rg(i,t,e){let n=this.cache,s=t.length,r=Dr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ch,r[a])}function Pg(i,t,e){let n=this.cache,s=t.length,r=Dr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ah,r[a])}function Lg(i){switch(i){case 5126:return pg;case 35664:return gg;case 35665:return mg;case 35666:return Ag;case 35674:return xg;case 35675:return Cg;case 35676:return yg;case 5124:case 35670:return _g;case 35667:case 35671:return vg;case 35668:case 35672:return Ig;case 35669:case 35673:return Mg;case 5125:return bg;case 36294:return Sg;case 36295:return Eg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Pg}}var yo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fg(e.type)}},_o=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lg(e.type)}},vo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ia=/(\w+)(\])?(\[|\.)?/g;function Cl(i,t){i.seq.push(t),i.map[t.id]=t}function Ug(i,t,e){let n=i.name,s=n.length;for(Ia.lastIndex=0;;){let r=Ia.exec(n),a=Ia.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Cl(e,l===void 0?new yo(o,i,t):new _o(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new vo(o),Cl(e,u)),e=u}}}var Ti=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Ug(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function yl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Dg=37297,Ng=0;function Fg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var _l=new qt;function zg(i){Qt._getMatrix(_l,Qt.workingColorSpace,i);let t=`mat3( ${_l.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Ur:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function vl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Fg(i.getShaderSource(t),a)}else return s}function Bg(i,t){let e=zg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Og(i,t){let e;switch(t){case uu:e="Linear";break;case du:e="Reinhard";break;case fu:e="Cineon";break;case ic:e="ACESFilmic";break;case gu:e="AgX";break;case mu:e="Neutral";break;case pu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zs=new P;function kg(){Qt.getLuminanceCoefficients(Zs);let i=Zs.x.toFixed(4),t=Zs.y.toFixed(4),e=Zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function Hg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function is(i){return i!==""}function Il(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ml(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Io(i){return i.replace(Wg,Yg)}var Xg=new Map;function Yg(i,t){let e=Gt[t];if(e===void 0){let n=Xg.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Io(e)}var Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bl(i){return i.replace(Zg,Kg)}function Kg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Jg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ql?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(t="SHADOWMAP_TYPE_VSM"),t}function jg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ri:case Pi:t="ENVMAP_TYPE_CUBE";break;case Lr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:t="ENVMAP_MODE_REFRACTION";break}return t}function $g(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nc:t="ENVMAP_BLENDING_MULTIPLY";break;case lu:t="ENVMAP_BLENDING_MIX";break;case hu:t="ENVMAP_BLENDING_ADD";break}return t}function tm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function em(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Jg(e),l=jg(e),h=Qg(e),u=$g(e),d=tm(e),p=qg(e),m=Hg(r),x=s.createProgram(),g,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(is).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(is).join(`
`),f.length>0&&(f+=`
`)):(g=[Sl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),f=[Sl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?Og("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Bg("linearToOutputTexel",e.outputColorSpace),kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(is).join(`
`)),a=Io(a),a=Il(a,e),a=Ml(a,e),o=Io(o),o=Il(o,e),o=Ml(o,e),a=bl(a),o=bl(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let C=M+g+a,A=M+f+o,L=yl(s,s.VERTEX_SHADER,C),E=yl(s,s.FRAGMENT_SHADER,A);s.attachShader(x,L),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(w){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(L).trim(),V=s.getShaderInfoLog(E).trim(),H=!0,F=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,L,E);else{let K=vl(s,L,"vertex"),O=vl(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+G+`
`+K+`
`+O)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||V==="")&&(F=!1);F&&(w.diagnostics={runnable:H,programLog:G,vertexShader:{log:B,prefix:g},fragmentShader:{log:V,prefix:f}})}s.deleteShader(L),s.deleteShader(E),R=new Ti(s,x),I=Gg(s,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let I;this.getAttributes=function(){return I===void 0&&T(this),I};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,Dg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ng++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=E,this}var nm=0,Mo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bo(t),e.set(t,n)),n}},bo=class{constructor(t){this.id=nm++,this.code=t,this.usedTimes=0}};function im(i,t,e,n,s,r,a){let o=new fr,c=new Mo,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(I){return l.add(I),I===0?"uv":`uv${I}`}function g(I,_,w,G,B){let V=G.fog,H=B.geometry,F=I.isMeshStandardMaterial?G.environment:null,K=(I.isMeshStandardMaterial?e:t).get(I.envMap||F),O=K&&K.mapping===Lr?K.image.height:null,$=m[I.type];I.precision!==null&&(p=s.getMaxPrecision(I.precision),p!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",p,"instead."));let it=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=it!==void 0?it.length:0,Rt=0;H.morphAttributes.position!==void 0&&(Rt=1),H.morphAttributes.normal!==void 0&&(Rt=2),H.morphAttributes.color!==void 0&&(Rt=3);let Wt,X,et,xt;if($){let ie=en[$];Wt=ie.vertexShader,X=ie.fragmentShader}else Wt=I.vertexShader,X=I.fragmentShader,c.update(I),et=c.getVertexShaderID(I),xt=c.getFragmentShaderID(I);let st=i.getRenderTarget(),Vt=i.state.buffers.depth.getReversed(),Nt=B.isInstancedMesh===!0,Ut=B.isBatchedMesh===!0,jt=!!I.map,j=!!I.matcap,rt=!!K,S=!!I.aoMap,wt=!!I.lightMap,tt=!!I.bumpMap,_t=!!I.normalMap,ct=!!I.displacementMap,Pt=!!I.emissiveMap,Ct=!!I.metalnessMap,b=!!I.roughnessMap,y=I.anisotropy>0,z=I.clearcoat>0,Y=I.dispersion>0,Q=I.iridescence>0,Z=I.sheen>0,Mt=I.transmission>0,dt=y&&!!I.anisotropyMap,yt=z&&!!I.clearcoatMap,Kt=z&&!!I.clearcoatNormalMap,nt=z&&!!I.clearcoatRoughnessMap,vt=Q&&!!I.iridescenceMap,Lt=Q&&!!I.iridescenceThicknessMap,Dt=Z&&!!I.sheenColorMap,It=Z&&!!I.sheenRoughnessMap,Jt=!!I.specularMap,Ht=!!I.specularColorMap,re=!!I.specularIntensityMap,U=Mt&&!!I.transmissionMap,pt=Mt&&!!I.thicknessMap,W=!!I.gradientMap,J=!!I.alphaMap,At=I.alphaTest>0,gt=!!I.alphaHash,Ot=!!I.extensions,fe=Dn;I.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(fe=i.toneMapping);let Me={shaderID:$,shaderType:I.type,shaderName:I.name,vertexShader:Wt,fragmentShader:X,defines:I.defines,customVertexShaderID:et,customFragmentShaderID:xt,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:p,batching:Ut,batchingColor:Ut&&B._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&B.instanceColor!==null,instancingMorph:Nt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:qi,alphaToCoverage:!!I.alphaToCoverage,map:jt,matcap:j,envMap:rt,envMapMode:rt&&K.mapping,envMapCubeUVHeight:O,aoMap:S,lightMap:wt,bumpMap:tt,normalMap:_t,displacementMap:d&&ct,emissiveMap:Pt,normalMapObjectSpace:_t&&I.normalMapType===yu,normalMapTangentSpace:_t&&I.normalMapType===$l,metalnessMap:Ct,roughnessMap:b,anisotropy:y,anisotropyMap:dt,clearcoat:z,clearcoatMap:yt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:nt,dispersion:Y,iridescence:Q,iridescenceMap:vt,iridescenceThicknessMap:Lt,sheen:Z,sheenColorMap:Dt,sheenRoughnessMap:It,specularMap:Jt,specularColorMap:Ht,specularIntensityMap:re,transmission:Mt,transmissionMap:U,thicknessMap:pt,gradientMap:W,opaque:I.transparent===!1&&I.blending===Si&&I.alphaToCoverage===!1,alphaMap:J,alphaTest:At,alphaHash:gt,combine:I.combine,mapUv:jt&&x(I.map.channel),aoMapUv:S&&x(I.aoMap.channel),lightMapUv:wt&&x(I.lightMap.channel),bumpMapUv:tt&&x(I.bumpMap.channel),normalMapUv:_t&&x(I.normalMap.channel),displacementMapUv:ct&&x(I.displacementMap.channel),emissiveMapUv:Pt&&x(I.emissiveMap.channel),metalnessMapUv:Ct&&x(I.metalnessMap.channel),roughnessMapUv:b&&x(I.roughnessMap.channel),anisotropyMapUv:dt&&x(I.anisotropyMap.channel),clearcoatMapUv:yt&&x(I.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&x(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(I.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&x(I.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&x(I.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&x(I.sheenColorMap.channel),sheenRoughnessMapUv:It&&x(I.sheenRoughnessMap.channel),specularMapUv:Jt&&x(I.specularMap.channel),specularColorMapUv:Ht&&x(I.specularColorMap.channel),specularIntensityMapUv:re&&x(I.specularIntensityMap.channel),transmissionMapUv:U&&x(I.transmissionMap.channel),thicknessMapUv:pt&&x(I.thicknessMap.channel),alphaMapUv:J&&x(I.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(_t||y),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&(jt||J),fog:!!V,useFog:I.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Vt,skinning:B.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Rt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,decodeVideoTexture:jt&&I.map.isVideoTexture===!0&&Qt.getTransfer(I.map.colorSpace)===se,decodeVideoTextureEmissive:Pt&&I.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(I.emissiveMap.colorSpace)===se,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===mn,flipSided:I.side===Le,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Ot&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&I.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function f(I){let _=[];if(I.shaderID?_.push(I.shaderID):(_.push(I.customVertexShaderID),_.push(I.customFragmentShaderID)),I.defines!==void 0)for(let w in I.defines)_.push(w),_.push(I.defines[w]);return I.isRawShaderMaterial===!1&&(M(_,I),C(_,I),_.push(i.outputColorSpace)),_.push(I.customProgramCacheKey),_.join()}function M(I,_){I.push(_.precision),I.push(_.outputColorSpace),I.push(_.envMapMode),I.push(_.envMapCubeUVHeight),I.push(_.mapUv),I.push(_.alphaMapUv),I.push(_.lightMapUv),I.push(_.aoMapUv),I.push(_.bumpMapUv),I.push(_.normalMapUv),I.push(_.displacementMapUv),I.push(_.emissiveMapUv),I.push(_.metalnessMapUv),I.push(_.roughnessMapUv),I.push(_.anisotropyMapUv),I.push(_.clearcoatMapUv),I.push(_.clearcoatNormalMapUv),I.push(_.clearcoatRoughnessMapUv),I.push(_.iridescenceMapUv),I.push(_.iridescenceThicknessMapUv),I.push(_.sheenColorMapUv),I.push(_.sheenRoughnessMapUv),I.push(_.specularMapUv),I.push(_.specularColorMapUv),I.push(_.specularIntensityMapUv),I.push(_.transmissionMapUv),I.push(_.thicknessMapUv),I.push(_.combine),I.push(_.fogExp2),I.push(_.sizeAttenuation),I.push(_.morphTargetsCount),I.push(_.morphAttributeCount),I.push(_.numDirLights),I.push(_.numPointLights),I.push(_.numSpotLights),I.push(_.numSpotLightMaps),I.push(_.numHemiLights),I.push(_.numRectAreaLights),I.push(_.numDirLightShadows),I.push(_.numPointLightShadows),I.push(_.numSpotLightShadows),I.push(_.numSpotLightShadowsWithMaps),I.push(_.numLightProbes),I.push(_.shadowMapType),I.push(_.toneMapping),I.push(_.numClippingPlanes),I.push(_.numClipIntersection),I.push(_.depthPacking)}function C(I,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),I.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),I.push(o.mask)}function A(I){let _=m[I.type],w;if(_){let G=en[_];w=Xu.clone(G.uniforms)}else w=I.uniforms;return w}function L(I,_){let w;for(let G=0,B=h.length;G<B;G++){let V=h[G];if(V.cacheKey===_){w=V,++w.usedTimes;break}}return w===void 0&&(w=new em(i,_,I,r),h.push(w)),w}function E(I){if(--I.usedTimes===0){let _=h.indexOf(I);h[_]=h[h.length-1],h.pop(),I.destroy()}}function T(I){c.remove(I)}function R(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:A,acquireProgram:L,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:R}}function sm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function rm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function El(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,m,x,g){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=x,f.group=g),t++,f}function o(u,d,p,m,x,g){let f=a(u,d,p,m,x,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,m,x,g){let f=a(u,d,p,m,x,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||rm),n.length>1&&n.sort(d||El),s.length>1&&s.sort(d||El)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function am(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new wl,i.set(n,[a])):s>=r.length?(a=new wl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function om(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new zt};break;case"SpotLight":e={position:new P,direction:new P,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function cm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var lm=0;function hm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function um(i){let t=new om,e=cm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new Xt,a=new Xt;function o(l){let h=0,u=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let p=0,m=0,x=0,g=0,f=0,M=0,C=0,A=0,L=0,E=0,T=0;l.sort(hm);for(let I=0,_=l.length;I<_;I++){let w=l[I],G=w.color,B=w.intensity,V=w.distance,H=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=G.r*B,u+=G.g*B,d+=G.b*B;else if(w.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(w.sh.coefficients[F],B);T++}else if(w.isDirectionalLight){let F=t.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let K=w.shadow,O=e.get(w);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,n.directionalShadow[p]=O,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=w.shadow.matrix,M++}n.directional[p]=F,p++}else if(w.isSpotLight){let F=t.get(w);F.position.setFromMatrixPosition(w.matrixWorld),F.color.copy(G).multiplyScalar(B),F.distance=V,F.coneCos=Math.cos(w.angle),F.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),F.decay=w.decay,n.spot[x]=F;let K=w.shadow;if(w.map&&(n.spotLightMap[L]=w.map,L++,K.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[x]=K.matrix,w.castShadow){let O=e.get(w);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,n.spotShadow[x]=O,n.spotShadowMap[x]=H,A++}x++}else if(w.isRectAreaLight){let F=t.get(w);F.color.copy(G).multiplyScalar(B),F.halfWidth.set(w.width*.5,0,0),F.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=F,g++}else if(w.isPointLight){let F=t.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity),F.distance=w.distance,F.decay=w.decay,w.castShadow){let K=w.shadow,O=e.get(w);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,O.shadowCameraNear=K.camera.near,O.shadowCameraFar=K.camera.far,n.pointShadow[m]=O,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=w.shadow.matrix,C++}n.point[m]=F,m++}else if(w.isHemisphereLight){let F=t.get(w);F.skyColor.copy(w.color).multiplyScalar(B),F.groundColor.copy(w.groundColor).multiplyScalar(B),n.hemi[f]=F,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==x||R.rectAreaLength!==g||R.hemiLength!==f||R.numDirectionalShadows!==M||R.numPointShadows!==C||R.numSpotShadows!==A||R.numSpotMaps!==L||R.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=A+L-E,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,R.directionalLength=p,R.pointLength=m,R.spotLength=x,R.rectAreaLength=g,R.hemiLength=f,R.numDirectionalShadows=M,R.numPointShadows=C,R.numSpotShadows=A,R.numSpotMaps=L,R.numLightProbes=T,n.version=lm++)}function c(l,h){let u=0,d=0,p=0,m=0,x=0,g=h.matrixWorldInverse;for(let f=0,M=l.length;f<M;f++){let C=l[f];if(C.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),u++}else if(C.isSpotLight){let A=n.spot[p];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),p++}else if(C.isRectAreaLight){let A=n.rectArea[m];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(g),a.identity(),r.copy(C.matrixWorld),r.premultiply(g),a.extractRotation(r),A.halfWidth.set(C.width*.5,0,0),A.halfHeight.set(0,C.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),m++}else if(C.isPointLight){let A=n.point[d];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(g),d++}else if(C.isHemisphereLight){let A=n.hemi[x];A.direction.setFromMatrixPosition(C.matrixWorld),A.direction.transformDirection(g),x++}}}return{setup:o,setupView:c,state:n}}function Tl(i){let t=new um(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function dm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Tl(i),t.set(s,[o])):r>=a.length?(o=new Tl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var So=class extends Bn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Eo=class extends Bn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pm=`uniform sampler2D shadow_pass;
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
}`;function gm(i,t,e){let n=new ls,s=new at,r=new at,a=new pe,o=new So({depthPacking:Cu}),c=new Eo,l={},h=e.maxTextureSize,u={[Nn]:Le,[Le]:Nn,[mn]:mn},d=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:fm,fragmentShader:pm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new ve;m.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Zt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let f=this.type;this.render=function(E,T,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let I=i.getRenderTarget(),_=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Un),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let B=f!==pn&&this.type===pn,V=f===pn&&this.type!==pn;for(let H=0,F=E.length;H<F;H++){let K=E[H],O=K.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let $=O.getFrameExtents();if(s.multiply($),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,O.mapSize.y=r.y)),O.map===null||B===!0||V===!0){let ft=this.type!==pn?{minFilter:Be,magFilter:Be}:{};O.map!==null&&O.map.dispose(),O.map=new yn(s.x,s.y,ft),O.map.texture.name=K.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let it=O.getViewportCount();for(let ft=0;ft<it;ft++){let Rt=O.getViewport(ft);a.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),G.viewport(a),O.updateMatrices(K,ft),n=O.getFrustum(),A(T,R,O.camera,K,this.type)}O.isPointLightShadow!==!0&&this.type===pn&&M(O,R),O.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(I,_,w)};function M(E,T){let R=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new yn(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,R,d,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,R,p,x,null)}function C(E,T,R,I){let _=null,w=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)_=w;else if(_=R.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let G=_.uuid,B=T.uuid,V=l[G];V===void 0&&(V={},l[G]=V);let H=V[B];H===void 0&&(H=_.clone(),V[B]=H,T.addEventListener("dispose",L)),_=H}if(_.visible=T.visible,_.wireframe=T.wireframe,I===pn?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:u[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,R.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let G=i.properties.get(_);G.light=R}return _}function A(E,T,R,I,_){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===pn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let B=t.update(E),V=E.material;if(Array.isArray(V)){let H=B.groups;for(let F=0,K=H.length;F<K;F++){let O=H[F],$=V[O.materialIndex];if($&&$.visible){let it=C(E,$,I,_);E.onBeforeShadow(i,E,T,R,B,it,O),i.renderBufferDirect(R,null,B,it,E,O),E.onAfterShadow(i,E,T,R,B,it,O)}}}else if(V.visible){let H=C(E,V,I,_);E.onBeforeShadow(i,E,T,R,B,H,null),i.renderBufferDirect(R,null,B,H,E,null),E.onAfterShadow(i,E,T,R,B,H,null)}}let G=E.children;for(let B=0,V=G.length;B<V;B++)A(G[B],T,R,I,_)}function L(E){E.target.removeEventListener("dispose",L);for(let R in l){let I=l[R],_=E.target.uuid;_ in I&&(I[_].dispose(),delete I[_])}}}var mm={[Va]:Ra,[Pa]:Da,[La]:Na,[Vi]:Ua,[Ra]:Va,[Da]:Pa,[Na]:La,[Ua]:Vi};function Am(i,t){function e(){let U=!1,pt=new pe,W=null,J=new pe(0,0,0,0);return{setMask:function(At){W!==At&&!U&&(i.colorMask(At,At,At,At),W=At)},setLocked:function(At){U=At},setClear:function(At,gt,Ot,fe,Me){Me===!0&&(At*=fe,gt*=fe,Ot*=fe),pt.set(At,gt,Ot,fe),J.equals(pt)===!1&&(i.clearColor(At,gt,Ot,fe),J.copy(pt))},reset:function(){U=!1,W=null,J.set(-1,0,0,0)}}}function n(){let U=!1,pt=!1,W=null,J=null,At=null;return{setReversed:function(gt){if(pt!==gt){let Ot=t.get("EXT_clip_control");pt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);let fe=At;At=null,this.setClear(fe)}pt=gt},getReversed:function(){return pt},setTest:function(gt){gt?st(i.DEPTH_TEST):Vt(i.DEPTH_TEST)},setMask:function(gt){W!==gt&&!U&&(i.depthMask(gt),W=gt)},setFunc:function(gt){if(pt&&(gt=mm[gt]),J!==gt){switch(gt){case Va:i.depthFunc(i.NEVER);break;case Ra:i.depthFunc(i.ALWAYS);break;case Pa:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case La:i.depthFunc(i.EQUAL);break;case Ua:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case Na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=gt}},setLocked:function(gt){U=gt},setClear:function(gt){At!==gt&&(pt&&(gt=1-gt),i.clearDepth(gt),At=gt)},reset:function(){U=!1,W=null,J=null,At=null,pt=!1}}}function s(){let U=!1,pt=null,W=null,J=null,At=null,gt=null,Ot=null,fe=null,Me=null;return{setTest:function(ie){U||(ie?st(i.STENCIL_TEST):Vt(i.STENCIL_TEST))},setMask:function(ie){pt!==ie&&!U&&(i.stencilMask(ie),pt=ie)},setFunc:function(ie,We,on){(W!==ie||J!==We||At!==on)&&(i.stencilFunc(ie,We,on),W=ie,J=We,At=on)},setOp:function(ie,We,on){(gt!==ie||Ot!==We||fe!==on)&&(i.stencilOp(ie,We,on),gt=ie,Ot=We,fe=on)},setLocked:function(ie){U=ie},setClear:function(ie){Me!==ie&&(i.clearStencil(ie),Me=ie)},reset:function(){U=!1,pt=null,W=null,J=null,At=null,gt=null,Ot=null,fe=null,Me=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],m=null,x=!1,g=null,f=null,M=null,C=null,A=null,L=null,E=null,T=new zt(0,0,0),R=0,I=!1,_=null,w=null,G=null,B=null,V=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,K=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(O)[1]),F=K>=1):O.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),F=K>=2);let $=null,it={},ft=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),Wt=new pe().fromArray(ft),X=new pe().fromArray(Rt);function et(U,pt,W,J){let At=new Uint8Array(4),gt=i.createTexture();i.bindTexture(U,gt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<W;Ot++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(pt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return gt}let xt={};xt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(Vi),tt(!1),_t(Rc),st(i.CULL_FACE),S(Un);function st(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Vt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Nt(U,pt){return u[U]!==pt?(i.bindFramebuffer(U,pt),u[U]=pt,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Ut(U,pt){let W=p,J=!1;if(U){W=d.get(pt),W===void 0&&(W=[],d.set(pt,W));let At=U.textures;if(W.length!==At.length||W[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Ot=At.length;gt<Ot;gt++)W[gt]=i.COLOR_ATTACHMENT0+gt;W.length=At.length,J=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,J=!0);J&&i.drawBuffers(W)}function jt(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let j={[jn]:i.FUNC_ADD,[Xh]:i.FUNC_SUBTRACT,[Yh]:i.FUNC_REVERSE_SUBTRACT};j[Zh]=i.MIN,j[Kh]=i.MAX;let rt={[Jh]:i.ZERO,[jh]:i.ONE,[Qh]:i.SRC_COLOR,[wa]:i.SRC_ALPHA,[su]:i.SRC_ALPHA_SATURATE,[nu]:i.DST_COLOR,[tu]:i.DST_ALPHA,[$h]:i.ONE_MINUS_SRC_COLOR,[Ta]:i.ONE_MINUS_SRC_ALPHA,[iu]:i.ONE_MINUS_DST_COLOR,[eu]:i.ONE_MINUS_DST_ALPHA,[ru]:i.CONSTANT_COLOR,[au]:i.ONE_MINUS_CONSTANT_COLOR,[ou]:i.CONSTANT_ALPHA,[cu]:i.ONE_MINUS_CONSTANT_ALPHA};function S(U,pt,W,J,At,gt,Ot,fe,Me,ie){if(U===Un){x===!0&&(Vt(i.BLEND),x=!1);return}if(x===!1&&(st(i.BLEND),x=!0),U!==Wh){if(U!==g||ie!==I){if((f!==jn||A!==jn)&&(i.blendEquation(i.FUNC_ADD),f=jn,A=jn),ie)switch(U){case Si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pc:i.blendFunc(i.ONE,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,C=null,L=null,E=null,T.set(0,0,0),R=0,g=U,I=ie}return}At=At||pt,gt=gt||W,Ot=Ot||J,(pt!==f||At!==A)&&(i.blendEquationSeparate(j[pt],j[At]),f=pt,A=At),(W!==M||J!==C||gt!==L||Ot!==E)&&(i.blendFuncSeparate(rt[W],rt[J],rt[gt],rt[Ot]),M=W,C=J,L=gt,E=Ot),(fe.equals(T)===!1||Me!==R)&&(i.blendColor(fe.r,fe.g,fe.b,Me),T.copy(fe),R=Me),g=U,I=!1}function wt(U,pt){U.side===mn?Vt(i.CULL_FACE):st(i.CULL_FACE);let W=U.side===Le;pt&&(W=!W),tt(W),U.blending===Si&&U.transparent===!1?S(Un):S(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let J=U.stencilWrite;o.setTest(J),J&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Pt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(U){_!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),_=U)}function _t(U){U!==qh?(st(i.CULL_FACE),U!==w&&(U===Rc?i.cullFace(i.BACK):U===Hh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Vt(i.CULL_FACE),w=U}function ct(U){U!==G&&(F&&i.lineWidth(U),G=U)}function Pt(U,pt,W){U?(st(i.POLYGON_OFFSET_FILL),(B!==pt||V!==W)&&(i.polygonOffset(pt,W),B=pt,V=W)):Vt(i.POLYGON_OFFSET_FILL)}function Ct(U){U?st(i.SCISSOR_TEST):Vt(i.SCISSOR_TEST)}function b(U){U===void 0&&(U=i.TEXTURE0+H-1),$!==U&&(i.activeTexture(U),$=U)}function y(U,pt,W){W===void 0&&($===null?W=i.TEXTURE0+H-1:W=$);let J=it[W];J===void 0&&(J={type:void 0,texture:void 0},it[W]=J),(J.type!==U||J.texture!==pt)&&($!==W&&(i.activeTexture(W),$=W),i.bindTexture(U,pt||xt[U]),J.type=U,J.texture=pt)}function z(){let U=it[$];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(U){Wt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Wt.copy(U))}function It(U){X.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),X.copy(U))}function Jt(U,pt){let W=l.get(pt);W===void 0&&(W=new WeakMap,l.set(pt,W));let J=W.get(U);J===void 0&&(J=i.getUniformBlockIndex(pt,U.name),W.set(U,J))}function Ht(U,pt){let J=l.get(pt).get(U);c.get(pt)!==J&&(i.uniformBlockBinding(pt,J,U.__bindingPointIndex),c.set(pt,J))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},$=null,it={},u={},d=new WeakMap,p=[],m=null,x=!1,g=null,f=null,M=null,C=null,A=null,L=null,E=null,T=new zt(0,0,0),R=0,I=!1,_=null,w=null,G=null,B=null,V=null,Wt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:Vt,bindFramebuffer:Nt,drawBuffers:Ut,useProgram:jt,setBlending:S,setMaterial:wt,setFlipSided:tt,setCullFace:_t,setLineWidth:ct,setPolygonOffset:Pt,setScissorTest:Ct,activeTexture:b,bindTexture:y,unbindTexture:z,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:vt,texImage3D:Lt,updateUBOMapping:Jt,uniformBlockBinding:Ht,texStorage2D:Kt,texStorage3D:nt,texSubImage2D:Z,texSubImage3D:Mt,compressedTexSubImage2D:dt,compressedTexSubImage3D:yt,scissor:Dt,viewport:It,reset:re}}function Vl(i,t,e,n){let s=xm(n);switch(e){case Yl:return i*t;case Kl:return i*t;case Jl:return i*t*2;case oc:return i*t/s.components*s.byteLength;case cc:return i*t/s.components*s.byteLength;case jl:return i*t*2/s.components*s.byteLength;case lc:return i*t*2/s.components*s.byteLength;case Zl:return i*t*3/s.components*s.byteLength;case Je:return i*t*4/s.components*s.byteLength;case hc:return i*t*4/s.components*s.byteLength;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ka:case Ha:return Math.max(i,16)*Math.max(t,8)/4;case Oa:case qa:return Math.max(i,8)*Math.max(t,8)/2;case Ga:case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case to:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case eo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case io:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ro:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ao:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ar:case oo:case co:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ql:case lo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ho:case uo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xm(i){switch(i){case Cn:case Gl:return{byteLength:1,components:1};case cs:case Wl:case ys:return{byteLength:2,components:1};case rc:case ac:return{byteLength:2,components:4};case ni:case sc:case sn:return{byteLength:4,components:1};case Xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Cm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,y){return p?new OffscreenCanvas(b,y):lr("canvas")}function x(b,y,z){let Y=1,Q=Ct(b);if((Q.width>z||Q.height>z)&&(Y=z/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){let Z=Math.floor(Y*Q.width),Mt=Math.floor(Y*Q.height);u===void 0&&(u=m(Z,Mt));let dt=y?m(Z,Mt):u;return dt.width=Z,dt.height=Mt,dt.getContext("2d").drawImage(b,0,0,Z,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+Mt+")."),dt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),b;return b}function g(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(b,y,z,Y,Q=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=y;if(y===i.RED&&(z===i.FLOAT&&(Z=i.R32F),z===i.HALF_FLOAT&&(Z=i.R16F),z===i.UNSIGNED_BYTE&&(Z=i.R8)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.R8UI),z===i.UNSIGNED_SHORT&&(Z=i.R16UI),z===i.UNSIGNED_INT&&(Z=i.R32UI),z===i.BYTE&&(Z=i.R8I),z===i.SHORT&&(Z=i.R16I),z===i.INT&&(Z=i.R32I)),y===i.RG&&(z===i.FLOAT&&(Z=i.RG32F),z===i.HALF_FLOAT&&(Z=i.RG16F),z===i.UNSIGNED_BYTE&&(Z=i.RG8)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RG8UI),z===i.UNSIGNED_SHORT&&(Z=i.RG16UI),z===i.UNSIGNED_INT&&(Z=i.RG32UI),z===i.BYTE&&(Z=i.RG8I),z===i.SHORT&&(Z=i.RG16I),z===i.INT&&(Z=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),z===i.UNSIGNED_INT&&(Z=i.RGB32UI),z===i.BYTE&&(Z=i.RGB8I),z===i.SHORT&&(Z=i.RGB16I),z===i.INT&&(Z=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),z===i.UNSIGNED_INT&&(Z=i.RGBA32UI),z===i.BYTE&&(Z=i.RGBA8I),z===i.SHORT&&(Z=i.RGBA16I),z===i.INT&&(Z=i.RGBA32I)),y===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),y===i.RGBA){let Mt=Q?Ur:Qt.getTransfer(Y);z===i.FLOAT&&(Z=i.RGBA32F),z===i.HALF_FLOAT&&(Z=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Z=Mt===se?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function A(b,y){let z;return b?y===null||y===ni||y===Ui?z=i.DEPTH24_STENCIL8:y===sn?z=i.DEPTH32F_STENCIL8:y===cs&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ni||y===Ui?z=i.DEPTH_COMPONENT24:y===sn?z=i.DEPTH_COMPONENT32F:y===cs&&(z=i.DEPTH_COMPONENT16),z}function L(b,y){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==Be&&b.minFilter!==nn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function E(b){let y=b.target;y.removeEventListener("dispose",E),R(y),y.isVideoTexture&&h.delete(y)}function T(b){let y=b.target;y.removeEventListener("dispose",T),_(y)}function R(b){let y=n.get(b);if(y.__webglInit===void 0)return;let z=b.source,Y=d.get(z);if(Y){let Q=Y[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(b),Object.keys(Y).length===0&&d.delete(z)}n.remove(b)}function I(b){let y=n.get(b);i.deleteTexture(y.__webglTexture);let z=b.source,Y=d.get(z);delete Y[y.__cacheKey],a.memory.textures--}function _(b){let y=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let Q=0;Q<y.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)i.deleteFramebuffer(y.__webglFramebuffer[Y]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=b.textures;for(let Y=0,Q=z.length;Y<Q;Y++){let Z=n.get(z[Y]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(z[Y])}n.remove(b)}let w=0;function G(){w=0}function B(){let b=w;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),w+=1,b}function V(b){let y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function H(b,y){let z=n.get(b);if(b.isVideoTexture&&ct(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){let Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(z,b,y);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function F(b,y){let z=n.get(b);if(b.version>0&&z.__version!==b.version){X(z,b,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function K(b,y){let z=n.get(b);if(b.version>0&&z.__version!==b.version){X(z,b,y);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function O(b,y){let z=n.get(b);if(b.version>0&&z.__version!==b.version){et(z,b,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}let $={[Li]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[Ba]:i.MIRRORED_REPEAT},it={[Be]:i.NEAREST,[Au]:i.NEAREST_MIPMAP_NEAREST,[ws]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[Zr]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},ft={[_u]:i.NEVER,[Eu]:i.ALWAYS,[vu]:i.LESS,[th]:i.LEQUAL,[Iu]:i.EQUAL,[Su]:i.GEQUAL,[Mu]:i.GREATER,[bu]:i.NOTEQUAL};function Rt(b,y){if(y.type===sn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===nn||y.magFilter===Zr||y.magFilter===ws||y.magFilter===ei||y.minFilter===nn||y.minFilter===Zr||y.minFilter===ws||y.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,$[y.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,$[y.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,$[y.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,it[y.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,it[y.minFilter]),y.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ft[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Be||y.minFilter!==ws&&y.minFilter!==ei||y.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Wt(b,y){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",E));let Y=y.source,Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));let Z=V(y);if(Z!==b.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[Z].usedTimes++;let Mt=Q[b.__cacheKey];Mt!==void 0&&(Q[b.__cacheKey].usedTimes--,Mt.usedTimes===0&&I(y)),b.__cacheKey=Z,b.__webglTexture=Q[Z].texture}return z}function X(b,y,z){let Y=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=i.TEXTURE_3D);let Q=Wt(b,y),Z=y.source;e.bindTexture(Y,b.__webglTexture,i.TEXTURE0+z);let Mt=n.get(Z);if(Z.version!==Mt.__version||Q===!0){e.activeTexture(i.TEXTURE0+z);let dt=Qt.getPrimaries(Qt.workingColorSpace),yt=y.colorSpace===Ln?null:Qt.getPrimaries(y.colorSpace),Kt=y.colorSpace===Ln||dt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let nt=x(y.image,!1,s.maxTextureSize);nt=Pt(y,nt);let vt=r.convert(y.format,y.colorSpace),Lt=r.convert(y.type),Dt=C(y.internalFormat,vt,Lt,y.colorSpace,y.isVideoTexture);Rt(Y,y);let It,Jt=y.mipmaps,Ht=y.isVideoTexture!==!0,re=Mt.__version===void 0||Q===!0,U=Z.dataReady,pt=L(y,nt);if(y.isDepthTexture)Dt=A(y.format===Di,y.type),re&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Dt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Dt,nt.width,nt.height,0,vt,Lt,null));else if(y.isDataTexture)if(Jt.length>0){Ht&&re&&e.texStorage2D(i.TEXTURE_2D,pt,Dt,Jt[0].width,Jt[0].height);for(let W=0,J=Jt.length;W<J;W++)It=Jt[W],Ht?U&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,It.width,It.height,vt,Lt,It.data):e.texImage2D(i.TEXTURE_2D,W,Dt,It.width,It.height,0,vt,Lt,It.data);y.generateMipmaps=!1}else Ht?(re&&e.texStorage2D(i.TEXTURE_2D,pt,Dt,nt.width,nt.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,vt,Lt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,nt.width,nt.height,0,vt,Lt,nt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ht&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Dt,Jt[0].width,Jt[0].height,nt.depth);for(let W=0,J=Jt.length;W<J;W++)if(It=Jt[W],y.format!==Je)if(vt!==null)if(Ht){if(U)if(y.layerUpdates.size>0){let At=Vl(It.width,It.height,y.format,y.type);for(let gt of y.layerUpdates){let Ot=It.data.subarray(gt*At/It.data.BYTES_PER_ELEMENT,(gt+1)*At/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,gt,It.width,It.height,1,vt,Ot)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,It.width,It.height,nt.depth,vt,It.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Dt,It.width,It.height,nt.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,It.width,It.height,nt.depth,vt,Lt,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Dt,It.width,It.height,nt.depth,0,vt,Lt,It.data)}else{Ht&&re&&e.texStorage2D(i.TEXTURE_2D,pt,Dt,Jt[0].width,Jt[0].height);for(let W=0,J=Jt.length;W<J;W++)It=Jt[W],y.format!==Je?vt!==null?Ht?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,It.width,It.height,vt,It.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Dt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?U&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,It.width,It.height,vt,Lt,It.data):e.texImage2D(i.TEXTURE_2D,W,Dt,It.width,It.height,0,vt,Lt,It.data)}else if(y.isDataArrayTexture)if(Ht){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Dt,nt.width,nt.height,nt.depth),U)if(y.layerUpdates.size>0){let W=Vl(nt.width,nt.height,y.format,y.type);for(let J of y.layerUpdates){let At=nt.data.subarray(J*W/nt.data.BYTES_PER_ELEMENT,(J+1)*W/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,vt,Lt,At)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,vt,Lt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,nt.width,nt.height,nt.depth,0,vt,Lt,nt.data);else if(y.isData3DTexture)Ht?(re&&e.texStorage3D(i.TEXTURE_3D,pt,Dt,nt.width,nt.height,nt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,vt,Lt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,nt.width,nt.height,nt.depth,0,vt,Lt,nt.data);else if(y.isFramebufferTexture){if(re)if(Ht)e.texStorage2D(i.TEXTURE_2D,pt,Dt,nt.width,nt.height);else{let W=nt.width,J=nt.height;for(let At=0;At<pt;At++)e.texImage2D(i.TEXTURE_2D,At,Dt,W,J,0,vt,Lt,null),W>>=1,J>>=1}}else if(Jt.length>0){if(Ht&&re){let W=Ct(Jt[0]);e.texStorage2D(i.TEXTURE_2D,pt,Dt,W.width,W.height)}for(let W=0,J=Jt.length;W<J;W++)It=Jt[W],Ht?U&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,vt,Lt,It):e.texImage2D(i.TEXTURE_2D,W,Dt,vt,Lt,It);y.generateMipmaps=!1}else if(Ht){if(re){let W=Ct(nt);e.texStorage2D(i.TEXTURE_2D,pt,Dt,W.width,W.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Lt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Dt,vt,Lt,nt);g(y)&&f(Y),Mt.__version=Z.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function et(b,y,z){if(y.image.length!==6)return;let Y=Wt(b,y),Q=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+z);let Z=n.get(Q);if(Q.version!==Z.__version||Y===!0){e.activeTexture(i.TEXTURE0+z);let Mt=Qt.getPrimaries(Qt.workingColorSpace),dt=y.colorSpace===Ln?null:Qt.getPrimaries(y.colorSpace),yt=y.colorSpace===Ln||Mt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Kt=y.isCompressedTexture||y.image[0].isCompressedTexture,nt=y.image[0]&&y.image[0].isDataTexture,vt=[];for(let J=0;J<6;J++)!Kt&&!nt?vt[J]=x(y.image[J],!0,s.maxCubemapSize):vt[J]=nt?y.image[J].image:y.image[J],vt[J]=Pt(y,vt[J]);let Lt=vt[0],Dt=r.convert(y.format,y.colorSpace),It=r.convert(y.type),Jt=C(y.internalFormat,Dt,It,y.colorSpace),Ht=y.isVideoTexture!==!0,re=Z.__version===void 0||Y===!0,U=Q.dataReady,pt=L(y,Lt);Rt(i.TEXTURE_CUBE_MAP,y);let W;if(Kt){Ht&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Jt,Lt.width,Lt.height);for(let J=0;J<6;J++){W=vt[J].mipmaps;for(let At=0;At<W.length;At++){let gt=W[At];y.format!==Je?Dt!==null?Ht?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,At,0,0,gt.width,gt.height,Dt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,At,Jt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,At,0,0,gt.width,gt.height,Dt,It,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,At,Jt,gt.width,gt.height,0,Dt,It,gt.data)}}}else{if(W=y.mipmaps,Ht&&re){W.length>0&&pt++;let J=Ct(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Jt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){Ht?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,vt[J].width,vt[J].height,Dt,It,vt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Jt,vt[J].width,vt[J].height,0,Dt,It,vt[J].data);for(let At=0;At<W.length;At++){let Ot=W[At].image[J].image;Ht?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,At+1,0,0,Ot.width,Ot.height,Dt,It,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,At+1,Jt,Ot.width,Ot.height,0,Dt,It,Ot.data)}}else{Ht?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Dt,It,vt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Jt,Dt,It,vt[J]);for(let At=0;At<W.length;At++){let gt=W[At];Ht?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,At+1,0,0,Dt,It,gt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,At+1,Jt,Dt,It,gt.image[J])}}}g(y)&&f(i.TEXTURE_CUBE_MAP),Z.__version=Q.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function xt(b,y,z,Y,Q,Z){let Mt=r.convert(z.format,z.colorSpace),dt=r.convert(z.type),yt=C(z.internalFormat,Mt,dt,z.colorSpace),Kt=n.get(y),nt=n.get(z);if(nt.__renderTarget=y,!Kt.__hasExternalTextures){let vt=Math.max(1,y.width>>Z),Lt=Math.max(1,y.height>>Z);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Z,yt,vt,Lt,y.depth,0,Mt,dt,null):e.texImage2D(Q,Z,yt,vt,Lt,0,Mt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),_t(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,nt.__webglTexture,0,tt(y)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,nt.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(b,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,b),y.depthBuffer){let Y=y.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,Z=A(y.stencilBuffer,Q),Mt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=tt(y);_t(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,Z,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,Z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Z,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,b)}else{let Y=y.textures;for(let Q=0;Q<Y.length;Q++){let Z=Y[Q],Mt=r.convert(Z.format,Z.colorSpace),dt=r.convert(Z.type),yt=C(Z.internalFormat,Mt,dt,Z.colorSpace),Kt=tt(y);z&&_t(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,yt,y.width,y.height):_t(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,yt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,yt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Vt(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(y.depthTexture);Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);let Q=Y.__webglTexture,Z=tt(y);if(y.depthTexture.format===Ei)_t(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(y.depthTexture.format===Di)_t(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Nt(b){let y=n.get(b),z=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){let Y=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=Y}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Vt(y.__webglFramebuffer,b)}else if(z){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=i.createRenderbuffer(),st(y.__webglDepthbuffer[Y],b,!1);else{let Q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),st(y.__webglDepthbuffer,b,!1);else{let Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(b,y,z){let Y=n.get(b);y!==void 0&&xt(Y.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Nt(b)}function jt(b){let y=b.texture,z=n.get(b),Y=n.get(y);b.addEventListener("dispose",T);let Q=b.textures,Z=b.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=y.version,a.memory.textures++),Z){z.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[dt]=[];for(let yt=0;yt<y.mipmaps.length;yt++)z.__webglFramebuffer[dt][yt]=i.createFramebuffer()}else z.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let dt=0;dt<y.mipmaps.length;dt++)z.__webglFramebuffer[dt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let dt=0,yt=Q.length;dt<yt;dt++){let Kt=n.get(Q[dt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&_t(b)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let dt=0;dt<Q.length;dt++){let yt=Q[dt];z.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[dt]);let Kt=r.convert(yt.format,yt.colorSpace),nt=r.convert(yt.type),vt=C(yt.internalFormat,Kt,nt,yt.colorSpace,b.isXRRenderTarget===!0),Lt=tt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,vt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,z.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),st(z.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Rt(i.TEXTURE_CUBE_MAP,y);for(let dt=0;dt<6;dt++)if(y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)xt(z.__webglFramebuffer[dt][yt],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,yt);else xt(z.__webglFramebuffer[dt],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(y)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let dt=0,yt=Q.length;dt<yt;dt++){let Kt=Q[dt],nt=n.get(Kt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),Rt(i.TEXTURE_2D,Kt),xt(z.__webglFramebuffer,b,Kt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),g(Kt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(dt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Y.__webglTexture),Rt(dt,y),y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)xt(z.__webglFramebuffer[yt],b,y,i.COLOR_ATTACHMENT0,dt,yt);else xt(z.__webglFramebuffer,b,y,i.COLOR_ATTACHMENT0,dt,0);g(y)&&f(dt),e.unbindTexture()}b.depthBuffer&&Nt(b)}function j(b){let y=b.textures;for(let z=0,Y=y.length;z<Y;z++){let Q=y[z];if(g(Q)){let Z=M(b),Mt=n.get(Q).__webglTexture;e.bindTexture(Z,Mt),f(Z),e.unbindTexture()}}}let rt=[],S=[];function wt(b){if(b.samples>0){if(_t(b)===!1){let y=b.textures,z=b.width,Y=b.height,Q=i.COLOR_BUFFER_BIT,Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(b),dt=y.length>1;if(dt)for(let yt=0;yt<y.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let yt=0;yt<y.length;yt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[yt]);let Kt=n.get(y[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,z,Y,0,0,z,Y,Q,i.NEAREST),c===!0&&(rt.length=0,S.length=0,rt.push(i.COLOR_ATTACHMENT0+yt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(rt.push(Z),S.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,S)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let yt=0;yt<y.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[yt]);let Kt=n.get(y[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function tt(b){return Math.min(s.maxSamples,b.samples)}function _t(b){let y=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ct(b){let y=a.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function Pt(b,y){let z=b.colorSpace,Y=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||z!==qi&&z!==Ln&&(Qt.getTransfer(z)===se?(Y!==Je||Q!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function Ct(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=H,this.setTexture2DArray=F,this.setTexture3D=K,this.setTextureCube=O,this.rebindTextures=Ut,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=_t}function ym(i,t){function e(n,s=Ln){let r,a=Qt.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===rc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ac)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gl)return i.BYTE;if(n===Wl)return i.SHORT;if(n===cs)return i.UNSIGNED_SHORT;if(n===sc)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===ys)return i.HALF_FLOAT;if(n===Yl)return i.ALPHA;if(n===Zl)return i.RGB;if(n===Je)return i.RGBA;if(n===Kl)return i.LUMINANCE;if(n===Jl)return i.LUMINANCE_ALPHA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===oc)return i.RED;if(n===cc)return i.RED_INTEGER;if(n===jl)return i.RG;if(n===lc)return i.RG_INTEGER;if(n===hc)return i.RGBA_INTEGER;if(n===nr||n===ir||n===sr||n===rr)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===ka||n===qa||n===Ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ga||n===Wa)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ya||n===Za||n===Ka||n===Ja||n===ja||n===Qa||n===$a||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ya)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Za)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ka)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ja)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ja)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$a)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===to)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===no)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===io)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===so)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ro)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ao)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ar||n===oo||n===co)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ar)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===co)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ql||n===lo||n===ho||n===uo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ar)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ui?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var wo=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},$t=class extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}},_m={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),f=this._getHandJoint(l,x);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_m)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},vm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Im=`
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

}`,To=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ue,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new an({vertexShader:vm,fragmentShader:Im,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vo=class extends Fn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,m=null,x=new To,g=e.getContextAttributes(),f=null,M=null,C=[],A=[],L=new at,E=null,T=new Ve;T.viewport=new pe;let R=new Ve;R.viewport=new pe;let I=[T,R],_=new wo,w=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=C[X];return et===void 0&&(et=new ss,C[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=C[X];return et===void 0&&(et=new ss,C[X]=et),et.getGripSpace()},this.getHand=function(X){let et=C[X];return et===void 0&&(et=new ss,C[X]=et),et.getHandSpace()};function B(X){let et=A.indexOf(X.inputSource);if(et===-1)return;let xt=C[et];xt!==void 0&&(xt.update(X.inputSource,X.frame,l||a),xt.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",H);for(let X=0;X<C.length;X++){let et=A[X];et!==null&&(A[X]=null,C[X].disconnect(et))}w=null,G=null,x.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,M=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",V),s.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let et={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new yn(p.framebufferWidth,p.framebufferHeight,{format:Je,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let et=null,xt=null,st=null;g.depth&&(st=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=g.stencil?Di:Ei,xt=g.stencil?Ui:ni);let Vt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new yn(d.textureWidth,d.textureHeight,{format:Je,type:Cn,depthTexture:new _r(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(X){for(let et=0;et<X.removed.length;et++){let xt=X.removed[et],st=A.indexOf(xt);st>=0&&(A[st]=null,C[st].disconnect(xt))}for(let et=0;et<X.added.length;et++){let xt=X.added[et],st=A.indexOf(xt);if(st===-1){for(let Nt=0;Nt<C.length;Nt++)if(Nt>=A.length){A.push(xt),st=Nt;break}else if(A[Nt]===null){A[Nt]=xt,st=Nt;break}if(st===-1)break}let Vt=C[st];Vt&&Vt.connect(xt)}}let F=new P,K=new P;function O(X,et,xt){F.setFromMatrixPosition(et.matrixWorld),K.setFromMatrixPosition(xt.matrixWorld);let st=F.distanceTo(K),Vt=et.projectionMatrix.elements,Nt=xt.projectionMatrix.elements,Ut=Vt[14]/(Vt[10]-1),jt=Vt[14]/(Vt[10]+1),j=(Vt[9]+1)/Vt[5],rt=(Vt[9]-1)/Vt[5],S=(Vt[8]-1)/Vt[0],wt=(Nt[8]+1)/Nt[0],tt=Ut*S,_t=Ut*wt,ct=st/(-S+wt),Pt=ct*-S;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Pt),X.translateZ(ct),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Vt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let Ct=Ut+ct,b=jt+ct,y=tt-Pt,z=_t+(st-Pt),Y=j*jt/b*Ct,Q=rt*jt/b*Ct;X.projectionMatrix.makePerspective(y,z,Y,Q,Ct,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function $(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let et=X.near,xt=X.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(xt=x.depthFar)),_.near=R.near=T.near=et,_.far=R.far=T.far=xt,(w!==_.near||G!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,G=_.far),T.layers.mask=X.layers.mask|2,R.layers.mask=X.layers.mask|4,_.layers.mask=T.layers.mask|R.layers.mask;let st=X.parent,Vt=_.cameras;$(_,st);for(let Nt=0;Nt<Vt.length;Nt++)$(Vt[Nt],st);Vt.length===2?O(_,T,R):_.projectionMatrix.copy(T.projectionMatrix),it(X,_,st)};function it(X,et,xt){xt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(xt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=po*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let ft=null;function Rt(X,et){if(h=et.getViewerPose(l||a),m=et,h!==null){let xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let st=!1;xt.length!==_.cameras.length&&(_.cameras.length=0,st=!0);for(let Nt=0;Nt<xt.length;Nt++){let Ut=xt[Nt],jt=null;if(p!==null)jt=p.getViewport(Ut);else{let rt=u.getViewSubImage(d,Ut);jt=rt.viewport,Nt===0&&(t.setRenderTargetTextures(M,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(M))}let j=I[Nt];j===void 0&&(j=new Ve,j.layers.enable(Nt),j.viewport=new pe,I[Nt]=j),j.matrix.fromArray(Ut.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Ut.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(jt.x,jt.y,jt.width,jt.height),Nt===0&&(_.matrix.copy(j.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),st===!0&&_.cameras.push(j)}let Vt=s.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")){let Nt=u.getDepthInformation(xt[0]);Nt&&Nt.isValid&&Nt.texture&&x.init(t,Nt,s.renderState)}}for(let xt=0;xt<C.length;xt++){let st=A[xt],Vt=C[xt];st!==null&&Vt!==void 0&&Vt.update(st,et,l||a)}ft&&ft(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}let Wt=new sh;Wt.setAnimationLoop(Rt),this.setAnimationLoop=function(X){ft=X},this.dispose=function(){}}},Kn=new rn,Mm=new Xt;function bm(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,ih(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,M,C,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,A)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),x(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?c(g,f,M,C):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Le&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Le&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let M=t.get(f),C=M.envMap,A=M.envMapRotation;C&&(g.envMap.value=C,Kn.copy(A),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),g.envMapRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(Kn)),g.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,M,C){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*M,g.scale.value=C*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,M){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Le&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function x(g,f){let M=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sm(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,C){let A=C.program;n.uniformBlockBinding(M,A)}function l(M,C){let A=s[M.id];A===void 0&&(m(M),A=h(M),s[M.id]=A,M.addEventListener("dispose",g));let L=C.program;n.updateUBOMapping(M,L);let E=t.render.frame;r[M.id]!==E&&(d(M),r[M.id]=E)}function h(M){let C=u();M.__bindingPointIndex=C;let A=i.createBuffer(),L=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,L,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,A),A}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let C=s[M.id],A=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let E=0,T=A.length;E<T;E++){let R=Array.isArray(A[E])?A[E]:[A[E]];for(let I=0,_=R.length;I<_;I++){let w=R[I];if(p(w,E,I,L)===!0){let G=w.__offset,B=Array.isArray(w.value)?w.value:[w.value],V=0;for(let H=0;H<B.length;H++){let F=B[H],K=x(F);typeof F=="number"||typeof F=="boolean"?(w.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,G+V,w.__data)):F.isMatrix3?(w.__data[0]=F.elements[0],w.__data[1]=F.elements[1],w.__data[2]=F.elements[2],w.__data[3]=0,w.__data[4]=F.elements[3],w.__data[5]=F.elements[4],w.__data[6]=F.elements[5],w.__data[7]=0,w.__data[8]=F.elements[6],w.__data[9]=F.elements[7],w.__data[10]=F.elements[8],w.__data[11]=0):(F.toArray(w.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,C,A,L){let E=M.value,T=C+"_"+A;if(L[T]===void 0)return typeof E=="number"||typeof E=="boolean"?L[T]=E:L[T]=E.clone(),!0;{let R=L[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return L[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function m(M){let C=M.uniforms,A=0,L=16;for(let T=0,R=C.length;T<R;T++){let I=Array.isArray(C[T])?C[T]:[C[T]];for(let _=0,w=I.length;_<w;_++){let G=I[_],B=Array.isArray(G.value)?G.value:[G.value];for(let V=0,H=B.length;V<H;V++){let F=B[V],K=x(F),O=A%L,$=O%K.boundary,it=O+$;A+=$,it!==0&&L-it<K.storage&&(A+=L-it),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=A,A+=K.storage}}}let E=A%L;return E>0&&(A+=L-E),M.__size=A,M.__cache={},this}function x(M){let C={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(C.boundary=4,C.storage=4):M.isVector2?(C.boundary=8,C.storage=8):M.isVector3||M.isColor?(C.boundary=16,C.storage=12):M.isVector4?(C.boundary=16,C.storage=16):M.isMatrix3?(C.boundary=48,C.storage=48):M.isMatrix4?(C.boundary=64,C.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),C}function g(M){let C=M.target;C.removeEventListener("dispose",g);let A=a.indexOf(C.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var vr=class{constructor(t={}){let{canvas:e=Tu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),x=new Int32Array(4),g=null,f=null,M=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=Dn,this.toneMappingExposure=1;let A=this,L=!1,E=0,T=0,R=null,I=-1,_=null,w=new pe,G=new pe,B=null,V=new zt(0),H=0,F=e.width,K=e.height,O=1,$=null,it=null,ft=new pe(0,0,F,K),Rt=new pe(0,0,F,K),Wt=!1,X=new ls,et=!1,xt=!1,st=new Xt,Vt=new Xt,Nt=new P,Ut=new pe,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function rt(){return R===null?O:1}let S=n;function wt(v,D){return e.getContext(v,D)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ec}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",gt,!1),S===null){let D="webgl2";if(S=wt(D,v),S===null)throw wt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let tt,_t,ct,Pt,Ct,b,y,z,Y,Q,Z,Mt,dt,yt,Kt,nt,vt,Lt,Dt,It,Jt,Ht,re,U;function pt(){tt=new qp(S),tt.init(),Ht=new ym(S,tt),_t=new Np(S,tt,t,Ht),ct=new Am(S,tt),_t.reverseDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),Pt=new Wp(S),Ct=new sm,b=new Cm(S,tt,ct,Ct,_t,Ht,Pt),y=new zp(A),z=new kp(A),Y=new ju(S),re=new Up(S,Y),Q=new Hp(S,Y,Pt,re),Z=new Yp(S,Q,Y,Pt),Dt=new Xp(S,_t,b),nt=new Fp(Ct),Mt=new im(A,y,z,tt,_t,re,nt),dt=new bm(A,Ct),yt=new am,Kt=new dm(tt),Lt=new Lp(A,y,z,ct,Z,p,c),vt=new gm(A,Z,_t),U=new Sm(S,Pt,_t,ct),It=new Dp(S,tt,Pt),Jt=new Gp(S,tt,Pt),Pt.programs=Mt.programs,A.capabilities=_t,A.extensions=tt,A.properties=Ct,A.renderLists=yt,A.shadowMap=vt,A.state=ct,A.info=Pt}pt();let W=new Vo(A,S);this.xr=W,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let v=tt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=tt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(v){v!==void 0&&(O=v,this.setSize(F,K,!1))},this.getSize=function(v){return v.set(F,K)},this.setSize=function(v,D,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=v,K=D,e.width=Math.floor(v*O),e.height=Math.floor(D*O),k===!0&&(e.style.width=v+"px",e.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(F*O,K*O).floor()},this.setDrawingBufferSize=function(v,D,k){F=v,K=D,O=k,e.width=Math.floor(v*k),e.height=Math.floor(D*k),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(w)},this.getViewport=function(v){return v.copy(ft)},this.setViewport=function(v,D,k,q){v.isVector4?ft.set(v.x,v.y,v.z,v.w):ft.set(v,D,k,q),ct.viewport(w.copy(ft).multiplyScalar(O).round())},this.getScissor=function(v){return v.copy(Rt)},this.setScissor=function(v,D,k,q){v.isVector4?Rt.set(v.x,v.y,v.z,v.w):Rt.set(v,D,k,q),ct.scissor(G.copy(Rt).multiplyScalar(O).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(v){ct.setScissorTest(Wt=v)},this.setOpaqueSort=function(v){$=v},this.setTransparentSort=function(v){it=v},this.getClearColor=function(v){return v.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(v=!0,D=!0,k=!0){let q=0;if(v){let N=!1;if(R!==null){let ot=R.texture.format;N=ot===hc||ot===lc||ot===cc}if(N){let ot=R.texture.type,mt=ot===Cn||ot===ni||ot===cs||ot===Ui||ot===rc||ot===ac,bt=Lt.getClearColor(),St=Lt.getClearAlpha(),Ft=bt.r,kt=bt.g,Et=bt.b;mt?(m[0]=Ft,m[1]=kt,m[2]=Et,m[3]=St,S.clearBufferuiv(S.COLOR,0,m)):(x[0]=Ft,x[1]=kt,x[2]=Et,x[3]=St,S.clearBufferiv(S.COLOR,0,x))}else q|=S.COLOR_BUFFER_BIT}D&&(q|=S.DEPTH_BUFFER_BIT),k&&(q|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),yt.dispose(),Kt.dispose(),Ct.dispose(),y.dispose(),z.dispose(),Z.dispose(),re.dispose(),U.dispose(),Mt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Ic),W.removeEventListener("sessionend",Mc),Hn.stop()};function J(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let v=Pt.autoReset,D=vt.enabled,k=vt.autoUpdate,q=vt.needsUpdate,N=vt.type;pt(),Pt.autoReset=v,vt.enabled=D,vt.autoUpdate=k,vt.needsUpdate=q,vt.type=N}function gt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ot(v){let D=v.target;D.removeEventListener("dispose",Ot),fe(D)}function fe(v){Me(v),Ct.remove(v)}function Me(v){let D=Ct.get(v).programs;D!==void 0&&(D.forEach(function(k){Mt.releaseProgram(k)}),v.isShaderMaterial&&Mt.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,k,q,N,ot){D===null&&(D=jt);let mt=N.isMesh&&N.matrixWorld.determinant()<0,bt=Bh(v,D,k,q,N);ct.setMaterial(q,mt);let St=k.index,Ft=1;if(q.wireframe===!0){if(St=Q.getWireframeAttribute(k),St===void 0)return;Ft=2}let kt=k.drawRange,Et=k.attributes.position,te=kt.start*Ft,ae=(kt.start+kt.count)*Ft;ot!==null&&(te=Math.max(te,ot.start*Ft),ae=Math.min(ae,(ot.start+ot.count)*Ft)),St!==null?(te=Math.max(te,0),ae=Math.min(ae,St.count)):Et!=null&&(te=Math.max(te,0),ae=Math.min(ae,Et.count));let oe=ae-te;if(oe<0||oe===1/0)return;re.setup(N,q,bt,k,St);let Re,ee=It;if(St!==null&&(Re=Y.get(St),ee=Jt,ee.setIndex(Re)),N.isMesh)q.wireframe===!0?(ct.setLineWidth(q.wireframeLinewidth*rt()),ee.setMode(S.LINES)):ee.setMode(S.TRIANGLES);else if(N.isLine){let Tt=q.linewidth;Tt===void 0&&(Tt=1),ct.setLineWidth(Tt*rt()),N.isLineSegments?ee.setMode(S.LINES):N.isLineLoop?ee.setMode(S.LINE_LOOP):ee.setMode(S.LINE_STRIP)}else N.isPoints?ee.setMode(S.POINTS):N.isSprite&&ee.setMode(S.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ee.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Tt=N._multiDrawStarts,cn=N._multiDrawCounts,ne=N._multiDrawCount,Xe=St?Y.get(St).bytesPerElement:1,ci=Ct.get(q).currentProgram.getUniforms();for(let Ne=0;Ne<ne;Ne++)ci.setValue(S,"_gl_DrawID",Ne),ee.render(Tt[Ne]/Xe,cn[Ne])}else if(N.isInstancedMesh)ee.renderInstances(te,oe,N.count);else if(k.isInstancedBufferGeometry){let Tt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,cn=Math.min(k.instanceCount,Tt);ee.renderInstances(te,oe,cn)}else ee.render(te,oe)};function ie(v,D,k){v.transparent===!0&&v.side===mn&&v.forceSinglePass===!1?(v.side=Le,v.needsUpdate=!0,Es(v,D,k),v.side=Nn,v.needsUpdate=!0,Es(v,D,k),v.side=mn):Es(v,D,k)}this.compile=function(v,D,k=null){k===null&&(k=v),f=Kt.get(k),f.init(D),C.push(f),k.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),v!==k&&v.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let q=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ot=N.material;if(ot)if(Array.isArray(ot))for(let mt=0;mt<ot.length;mt++){let bt=ot[mt];ie(bt,k,N),q.add(bt)}else ie(ot,k,N),q.add(ot)}),C.pop(),f=null,q},this.compileAsync=function(v,D,k=null){let q=this.compile(v,D,k);return new Promise(N=>{function ot(){if(q.forEach(function(mt){Ct.get(mt).currentProgram.isReady()&&q.delete(mt)}),q.size===0){N(v);return}setTimeout(ot,10)}tt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let We=null;function on(v){We&&We(v)}function Ic(){Hn.stop()}function Mc(){Hn.start()}let Hn=new sh;Hn.setAnimationLoop(on),typeof self!="undefined"&&Hn.setContext(self),this.setAnimationLoop=function(v){We=v,W.setAnimationLoop(v),v===null?Hn.stop():Hn.start()},W.addEventListener("sessionstart",Ic),W.addEventListener("sessionend",Mc),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),v.isScene===!0&&v.onBeforeRender(A,v,D,R),f=Kt.get(v,C.length),f.init(D),C.push(f),Vt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),X.setFromProjectionMatrix(Vt),xt=this.localClippingEnabled,et=nt.init(this.clippingPlanes,xt),g=yt.get(v,M.length),g.init(),M.push(g),W.enabled===!0&&W.isPresenting===!0){let ot=A.xr.getDepthSensingMesh();ot!==null&&Yr(ot,D,-1/0,A.sortObjects)}Yr(v,D,0,A.sortObjects),g.finish(),A.sortObjects===!0&&g.sort($,it),j=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,j&&Lt.addToRenderList(g,v),this.info.render.frame++,et===!0&&nt.beginShadows();let k=f.state.shadowsArray;vt.render(k,v,D),et===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,N=g.transmissive;if(f.setupLights(),D.isArrayCamera){let ot=D.cameras;if(N.length>0)for(let mt=0,bt=ot.length;mt<bt;mt++){let St=ot[mt];Sc(q,N,v,St)}j&&Lt.render(v);for(let mt=0,bt=ot.length;mt<bt;mt++){let St=ot[mt];bc(g,v,St,St.viewport)}}else N.length>0&&Sc(q,N,v,D),j&&Lt.render(v),bc(g,v,D);R!==null&&(b.updateMultisampleRenderTarget(R),b.updateRenderTargetMipmap(R)),v.isScene===!0&&v.onAfterRender(A,v,D),re.resetDefaultState(),I=-1,_=null,C.pop(),C.length>0?(f=C[C.length-1],et===!0&&nt.setGlobalState(A.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Yr(v,D,k,q){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||X.intersectsSprite(v)){q&&Ut.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Vt);let mt=Z.update(v),bt=v.material;bt.visible&&g.push(v,mt,bt,k,Ut.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||X.intersectsObject(v))){let mt=Z.update(v),bt=v.material;if(q&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ut.copy(v.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Ut.copy(mt.boundingSphere.center)),Ut.applyMatrix4(v.matrixWorld).applyMatrix4(Vt)),Array.isArray(bt)){let St=mt.groups;for(let Ft=0,kt=St.length;Ft<kt;Ft++){let Et=St[Ft],te=bt[Et.materialIndex];te&&te.visible&&g.push(v,mt,te,k,Ut.z,Et)}}else bt.visible&&g.push(v,mt,bt,k,Ut.z,null)}}let ot=v.children;for(let mt=0,bt=ot.length;mt<bt;mt++)Yr(ot[mt],D,k,q)}function bc(v,D,k,q){let N=v.opaque,ot=v.transmissive,mt=v.transparent;f.setupLightsView(k),et===!0&&nt.setGlobalState(A.clippingPlanes,k),q&&ct.viewport(w.copy(q)),N.length>0&&Ss(N,D,k),ot.length>0&&Ss(ot,D,k),mt.length>0&&Ss(mt,D,k),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Sc(v,D,k,q){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new yn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?ys:Cn,minFilter:ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let ot=f.state.transmissionRenderTarget[q.id],mt=q.viewport||w;ot.setSize(mt.z,mt.w);let bt=A.getRenderTarget();A.setRenderTarget(ot),A.getClearColor(V),H=A.getClearAlpha(),H<1&&A.setClearColor(16777215,.5),A.clear(),j&&Lt.render(k);let St=A.toneMapping;A.toneMapping=Dn;let Ft=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),et===!0&&nt.setGlobalState(A.clippingPlanes,q),Ss(v,k,q),b.updateMultisampleRenderTarget(ot),b.updateRenderTargetMipmap(ot),tt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Et=0,te=D.length;Et<te;Et++){let ae=D[Et],oe=ae.object,Re=ae.geometry,ee=ae.material,Tt=ae.group;if(ee.side===mn&&oe.layers.test(q.layers)){let cn=ee.side;ee.side=Le,ee.needsUpdate=!0,Ec(oe,k,q,Re,ee,Tt),ee.side=cn,ee.needsUpdate=!0,kt=!0}}kt===!0&&(b.updateMultisampleRenderTarget(ot),b.updateRenderTargetMipmap(ot))}A.setRenderTarget(bt),A.setClearColor(V,H),Ft!==void 0&&(q.viewport=Ft),A.toneMapping=St}function Ss(v,D,k){let q=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ot=v.length;N<ot;N++){let mt=v[N],bt=mt.object,St=mt.geometry,Ft=q===null?mt.material:q,kt=mt.group;bt.layers.test(k.layers)&&Ec(bt,D,k,St,Ft,kt)}}function Ec(v,D,k,q,N,ot){v.onBeforeRender(A,D,k,q,N,ot),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(A,D,k,q,v,ot),N.transparent===!0&&N.side===mn&&N.forceSinglePass===!1?(N.side=Le,N.needsUpdate=!0,A.renderBufferDirect(k,D,q,N,v,ot),N.side=Nn,N.needsUpdate=!0,A.renderBufferDirect(k,D,q,N,v,ot),N.side=mn):A.renderBufferDirect(k,D,q,N,v,ot),v.onAfterRender(A,D,k,q,N,ot)}function Es(v,D,k){D.isScene!==!0&&(D=jt);let q=Ct.get(v),N=f.state.lights,ot=f.state.shadowsArray,mt=N.state.version,bt=Mt.getParameters(v,N.state,ot,D,k),St=Mt.getProgramCacheKey(bt),Ft=q.programs;q.environment=v.isMeshStandardMaterial?D.environment:null,q.fog=D.fog,q.envMap=(v.isMeshStandardMaterial?z:y).get(v.envMap||q.environment),q.envMapRotation=q.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Ft===void 0&&(v.addEventListener("dispose",Ot),Ft=new Map,q.programs=Ft);let kt=Ft.get(St);if(kt!==void 0){if(q.currentProgram===kt&&q.lightsStateVersion===mt)return Tc(v,bt),kt}else bt.uniforms=Mt.getUniforms(v),v.onBeforeCompile(bt,A),kt=Mt.acquireProgram(bt,St),Ft.set(St,kt),q.uniforms=bt.uniforms;let Et=q.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Et.clippingPlanes=nt.uniform),Tc(v,bt),q.needsLights=kh(v),q.lightsStateVersion=mt,q.needsLights&&(Et.ambientLightColor.value=N.state.ambient,Et.lightProbe.value=N.state.probe,Et.directionalLights.value=N.state.directional,Et.directionalLightShadows.value=N.state.directionalShadow,Et.spotLights.value=N.state.spot,Et.spotLightShadows.value=N.state.spotShadow,Et.rectAreaLights.value=N.state.rectArea,Et.ltc_1.value=N.state.rectAreaLTC1,Et.ltc_2.value=N.state.rectAreaLTC2,Et.pointLights.value=N.state.point,Et.pointLightShadows.value=N.state.pointShadow,Et.hemisphereLights.value=N.state.hemi,Et.directionalShadowMap.value=N.state.directionalShadowMap,Et.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Et.spotShadowMap.value=N.state.spotShadowMap,Et.spotLightMatrix.value=N.state.spotLightMatrix,Et.spotLightMap.value=N.state.spotLightMap,Et.pointShadowMap.value=N.state.pointShadowMap,Et.pointShadowMatrix.value=N.state.pointShadowMatrix),q.currentProgram=kt,q.uniformsList=null,kt}function wc(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=Ti.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Tc(v,D){let k=Ct.get(v);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function Bh(v,D,k,q,N){D.isScene!==!0&&(D=jt),b.resetTextureUnits();let ot=D.fog,mt=q.isMeshStandardMaterial?D.environment:null,bt=R===null?A.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:qi,St=(q.isMeshStandardMaterial?z:y).get(q.envMap||mt),Ft=q.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,kt=!!k.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Et=!!k.morphAttributes.position,te=!!k.morphAttributes.normal,ae=!!k.morphAttributes.color,oe=Dn;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(oe=A.toneMapping);let Re=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ee=Re!==void 0?Re.length:0,Tt=Ct.get(q),cn=f.state.lights;if(et===!0&&(xt===!0||v!==_)){let qe=v===_&&q.id===I;nt.setState(q,v,qe)}let ne=!1;q.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==cn.state.version||Tt.outputColorSpace!==bt||N.isBatchedMesh&&Tt.batching===!1||!N.isBatchedMesh&&Tt.batching===!0||N.isBatchedMesh&&Tt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Tt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Tt.instancing===!1||!N.isInstancedMesh&&Tt.instancing===!0||N.isSkinnedMesh&&Tt.skinning===!1||!N.isSkinnedMesh&&Tt.skinning===!0||N.isInstancedMesh&&Tt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Tt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Tt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Tt.instancingMorph===!1&&N.morphTexture!==null||Tt.envMap!==St||q.fog===!0&&Tt.fog!==ot||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==nt.numPlanes||Tt.numIntersection!==nt.numIntersection)||Tt.vertexAlphas!==Ft||Tt.vertexTangents!==kt||Tt.morphTargets!==Et||Tt.morphNormals!==te||Tt.morphColors!==ae||Tt.toneMapping!==oe||Tt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Tt.__version=q.version);let Xe=Tt.currentProgram;ne===!0&&(Xe=Es(q,D,N));let ci=!1,Ne=!1,Yi=!1,ce=Xe.getUniforms(),tn=Tt.uniforms;if(ct.useProgram(Xe.program)&&(ci=!0,Ne=!0,Yi=!0),q.id!==I&&(I=q.id,Ne=!0),ci||_!==v){ct.buffers.depth.getReversed()?(st.copy(v.projectionMatrix),Ru(st),Pu(st),ce.setValue(S,"projectionMatrix",st)):ce.setValue(S,"projectionMatrix",v.projectionMatrix),ce.setValue(S,"viewMatrix",v.matrixWorldInverse);let bn=ce.map.cameraPosition;bn!==void 0&&bn.setValue(S,Nt.setFromMatrixPosition(v.matrixWorld)),_t.logarithmicDepthBuffer&&ce.setValue(S,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ce.setValue(S,"isOrthographic",v.isOrthographicCamera===!0),_!==v&&(_=v,Ne=!0,Yi=!0)}if(N.isSkinnedMesh){ce.setOptional(S,N,"bindMatrix"),ce.setOptional(S,N,"bindMatrixInverse");let qe=N.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),ce.setValue(S,"boneTexture",qe.boneTexture,b))}N.isBatchedMesh&&(ce.setOptional(S,N,"batchingTexture"),ce.setValue(S,"batchingTexture",N._matricesTexture,b),ce.setOptional(S,N,"batchingIdTexture"),ce.setValue(S,"batchingIdTexture",N._indirectTexture,b),ce.setOptional(S,N,"batchingColorTexture"),N._colorsTexture!==null&&ce.setValue(S,"batchingColorTexture",N._colorsTexture,b));let Zi=k.morphAttributes;if((Zi.position!==void 0||Zi.normal!==void 0||Zi.color!==void 0)&&Dt.update(N,k,Xe),(Ne||Tt.receiveShadow!==N.receiveShadow)&&(Tt.receiveShadow=N.receiveShadow,ce.setValue(S,"receiveShadow",N.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(tn.envMap.value=St,tn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&D.environment!==null&&(tn.envMapIntensity.value=D.environmentIntensity),Ne&&(ce.setValue(S,"toneMappingExposure",A.toneMappingExposure),Tt.needsLights&&Oh(tn,Yi),ot&&q.fog===!0&&dt.refreshFogUniforms(tn,ot),dt.refreshMaterialUniforms(tn,q,O,K,f.state.transmissionRenderTarget[v.id]),Ti.upload(S,wc(Tt),tn,b)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ti.upload(S,wc(Tt),tn,b),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ce.setValue(S,"center",N.center),ce.setValue(S,"modelViewMatrix",N.modelViewMatrix),ce.setValue(S,"normalMatrix",N.normalMatrix),ce.setValue(S,"modelMatrix",N.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let qe=q.uniformsGroups;for(let bn=0,Sn=qe.length;bn<Sn;bn++){let Vc=qe[bn];U.update(Vc,Xe),U.bind(Vc,Xe)}}return Xe}function Oh(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function kh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(v,D,k){Ct.get(v.texture).__webglTexture=D,Ct.get(v.depthTexture).__webglTexture=k;let q=Ct.get(v);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=k===void 0,q.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,D){let k=Ct.get(v);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,k=0){R=v,E=D,T=k;let q=!0,N=null,ot=!1,mt=!1;if(v){let St=Ct.get(v);if(St.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(S.FRAMEBUFFER,null),q=!1;else if(St.__webglFramebuffer===void 0)b.setupRenderTarget(v);else if(St.__hasExternalTextures)b.rebindTextures(v,Ct.get(v.texture).__webglTexture,Ct.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Et=v.depthTexture;if(St.__boundDepthTexture!==Et){if(Et!==null&&Ct.has(Et)&&(v.width!==Et.image.width||v.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(v)}}let Ft=v.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(mt=!0);let kt=Ct.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(kt[D])?N=kt[D][k]:N=kt[D],ot=!0):v.samples>0&&b.useMultisampledRTT(v)===!1?N=Ct.get(v).__webglMultisampledFramebuffer:Array.isArray(kt)?N=kt[k]:N=kt,w.copy(v.viewport),G.copy(v.scissor),B=v.scissorTest}else w.copy(ft).multiplyScalar(O).floor(),G.copy(Rt).multiplyScalar(O).floor(),B=Wt;if(ct.bindFramebuffer(S.FRAMEBUFFER,N)&&q&&ct.drawBuffers(v,N),ct.viewport(w),ct.scissor(G),ct.setScissorTest(B),ot){let St=Ct.get(v.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+D,St.__webglTexture,k)}else if(mt){let St=Ct.get(v.texture),Ft=D||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,St.__webglTexture,k||0,Ft)}I=-1},this.readRenderTargetPixels=function(v,D,k,q,N,ot,mt){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Ct.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&mt!==void 0&&(bt=bt[mt]),bt){ct.bindFramebuffer(S.FRAMEBUFFER,bt);try{let St=v.texture,Ft=St.format,kt=St.type;if(!_t.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-q&&k>=0&&k<=v.height-N&&S.readPixels(D,k,q,N,Ht.convert(Ft),Ht.convert(kt),ot)}finally{let St=R!==null?Ct.get(R).__webglFramebuffer:null;ct.bindFramebuffer(S.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(v,D,k,q,N,ot,mt){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Ct.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&mt!==void 0&&(bt=bt[mt]),bt){let St=v.texture,Ft=St.format,kt=St.type;if(!_t.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=v.width-q&&k>=0&&k<=v.height-N){ct.bindFramebuffer(S.FRAMEBUFFER,bt);let Et=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Et),S.bufferData(S.PIXEL_PACK_BUFFER,ot.byteLength,S.STREAM_READ),S.readPixels(D,k,q,N,Ht.convert(Ft),Ht.convert(kt),0);let te=R!==null?Ct.get(R).__webglFramebuffer:null;ct.bindFramebuffer(S.FRAMEBUFFER,te);let ae=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await Vu(S,ae,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Et),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,ot),S.deleteBuffer(Et),S.deleteSync(ae),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,D=null,k=0){v.isTexture!==!0&&(ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,v=arguments[1]);let q=Math.pow(2,-k),N=Math.floor(v.image.width*q),ot=Math.floor(v.image.height*q),mt=D!==null?D.x:0,bt=D!==null?D.y:0;b.setTexture2D(v,0),S.copyTexSubImage2D(S.TEXTURE_2D,k,0,0,mt,bt,N,ot),ct.unbindTexture()},this.copyTextureToTexture=function(v,D,k=null,q=null,N=0){v.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,v=arguments[1],D=arguments[2],N=arguments[3]||0,k=null);let ot,mt,bt,St,Ft,kt,Et,te,ae,oe=v.isCompressedTexture?v.mipmaps[N]:v.image;k!==null?(ot=k.max.x-k.min.x,mt=k.max.y-k.min.y,bt=k.isBox3?k.max.z-k.min.z:1,St=k.min.x,Ft=k.min.y,kt=k.isBox3?k.min.z:0):(ot=oe.width,mt=oe.height,bt=oe.depth||1,St=0,Ft=0,kt=0),q!==null?(Et=q.x,te=q.y,ae=q.z):(Et=0,te=0,ae=0);let Re=Ht.convert(D.format),ee=Ht.convert(D.type),Tt;D.isData3DTexture?(b.setTexture3D(D,0),Tt=S.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(b.setTexture2DArray(D,0),Tt=S.TEXTURE_2D_ARRAY):(b.setTexture2D(D,0),Tt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,D.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,D.unpackAlignment);let cn=S.getParameter(S.UNPACK_ROW_LENGTH),ne=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Xe=S.getParameter(S.UNPACK_SKIP_PIXELS),ci=S.getParameter(S.UNPACK_SKIP_ROWS),Ne=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,oe.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,oe.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,St),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ft),S.pixelStorei(S.UNPACK_SKIP_IMAGES,kt);let Yi=v.isDataArrayTexture||v.isData3DTexture,ce=D.isDataArrayTexture||D.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){let tn=Ct.get(v),Zi=Ct.get(D),qe=Ct.get(tn.__renderTarget),bn=Ct.get(Zi.__renderTarget);ct.bindFramebuffer(S.READ_FRAMEBUFFER,qe.__webglFramebuffer),ct.bindFramebuffer(S.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let Sn=0;Sn<bt;Sn++)Yi&&S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ct.get(v).__webglTexture,N,kt+Sn),v.isDepthTexture?(ce&&S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ct.get(D).__webglTexture,N,ae+Sn),S.blitFramebuffer(St,Ft,ot,mt,Et,te,ot,mt,S.DEPTH_BUFFER_BIT,S.NEAREST)):ce?S.copyTexSubImage3D(Tt,N,Et,te,ae+Sn,St,Ft,ot,mt):S.copyTexSubImage2D(Tt,N,Et,te,ae+Sn,St,Ft,ot,mt);ct.bindFramebuffer(S.READ_FRAMEBUFFER,null),ct.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else ce?v.isDataTexture||v.isData3DTexture?S.texSubImage3D(Tt,N,Et,te,ae,ot,mt,bt,Re,ee,oe.data):D.isCompressedArrayTexture?S.compressedTexSubImage3D(Tt,N,Et,te,ae,ot,mt,bt,Re,oe.data):S.texSubImage3D(Tt,N,Et,te,ae,ot,mt,bt,Re,ee,oe):v.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,N,Et,te,ot,mt,Re,ee,oe.data):v.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,N,Et,te,oe.width,oe.height,Re,oe.data):S.texSubImage2D(S.TEXTURE_2D,N,Et,te,ot,mt,Re,ee,oe);S.pixelStorei(S.UNPACK_ROW_LENGTH,cn),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ne),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Xe),S.pixelStorei(S.UNPACK_SKIP_ROWS,ci),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ne),N===0&&D.generateMipmaps&&S.generateMipmap(Tt),ct.unbindTexture()},this.copyTextureToTexture3D=function(v,D,k=null,q=null,N=0){return v.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,q=arguments[1]||null,v=arguments[2],D=arguments[3],N=arguments[4]||0),ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,D,k,q,N)},this.initRenderTarget=function(v){Ct.get(v).__webglFramebuffer===void 0&&b.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?b.setTextureCube(v,0):v.isData3DTexture?b.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?b.setTexture2DArray(v,0):b.setTexture2D(v,0),ct.unbindTexture()},this.resetState=function(){E=0,T=0,R=null,ct.reset(),re.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var Fi=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},hs=class extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ro=class extends Ue{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Be,h=Be,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var us=class extends xe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ii=new Xt,Rl=new Xt,Ks=[],Pl=new _n,Em=new Xt,ts=new Zt,es=new zn,ii=class extends Zt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new us(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Em)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ii),Pl.copy(t.boundingBox).applyMatrix4(Ii),this.boundingBox.union(Pl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ii),es.copy(t.boundingSphere).applyMatrix4(Ii),this.boundingSphere.union(es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),es.copy(this.boundingSphere),es.applyMatrix4(n),t.ray.intersectsSphere(es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ii),Rl.multiplyMatrices(n,Ii),ts.matrixWorld=Rl,ts.raycast(t,Ks);for(let a=0,o=Ks.length;a<o;a++){let c=Ks[a];c.instanceId=r,c.object=this,e.push(c)}Ks.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new us(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ro(new Float32Array(s*this.count),s,this.count,oc,sn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ds=class extends Bn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ll=new Xt,Po=new dr,Js=new zn,js=new P,Ir=class extends we{constructor(t=new ve,e=new ds){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(s),Js.radius+=r,t.ray.intersectsSphere(Js)===!1)return;Ll.copy(s).invert(),Po.copy(t.ray).applyMatrix4(Ll);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let m=d,x=p;m<x;m++){let g=l.getX(m);js.fromBufferAttribute(u,g),Ul(js,g,c,s,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=d,x=p;m<x;m++)js.fromBufferAttribute(u,m),Ul(js,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ul(i,t,e,n,s,r,a){let o=Po.distanceSqToPoint(i);if(o<e){let c=new P;Po.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var vn=class extends Ue{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ge=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new at:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,s=[],r=[],a=[],o=new P,c=new Xt;for(let p=0;p<=t;p++){let m=p/t;s[p]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ee(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,m))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ee(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],p*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},fs=class extends Ge{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new at){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Lo=class extends fs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function dc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Qs=new P,Ma=new dc,ba=new dc,Sa=new dc,Uo=class extends Ge{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Qs.subVectors(s[0],s[1]).add(s[0]),l=Qs);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Qs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qs),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Ma.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,g),ba.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,g),Sa.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Ma.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ba.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Sa.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Ma.calc(c),ba.calc(c),Sa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Dl(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function wm(i,t){let e=1-i;return e*e*t}function Tm(i,t){return 2*(1-i)*i*t}function Vm(i,t){return i*i*t}function rs(i,t,e,n){return wm(i,t)+Tm(i,e)+Vm(i,n)}function Rm(i,t){let e=1-i;return e*e*e*t}function Pm(i,t){let e=1-i;return 3*e*e*i*t}function Lm(i,t){return 3*(1-i)*i*i*t}function Um(i,t){return i*i*i*t}function as(i,t,e,n,s){return Rm(i,t)+Pm(i,e)+Lm(i,n)+Um(i,s)}var Mr=class extends Ge{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(as(t,s.x,r.x,a.x,o.x),as(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Do=class extends Ge{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(as(t,s.x,r.x,a.x,o.x),as(t,s.y,r.y,a.y,o.y),as(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},br=class extends Ge{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},No=class extends Ge{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sr=class extends Ge{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rs(t,s.x,r.x,a.x),rs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fo=class extends Ge{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rs(t,s.x,r.x,a.x),rs(t,s.y,r.y,a.y),rs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Er=class extends Ge{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Dl(o,c.x,l.x,h.x,u.x),Dl(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},zo=Object.freeze({__proto__:null,ArcCurve:Lo,CatmullRomCurve3:Uo,CubicBezierCurve:Mr,CubicBezierCurve3:Do,EllipseCurve:fs,LineCurve:br,LineCurve3:No,QuadraticBezierCurve:Sr,QuadraticBezierCurve3:Fo,SplineCurve:Er}),Bo=class extends Ge{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new zo[s.type]().fromJSON(s))}return this}},wr=class extends Bo{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new br(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Sr(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Mr(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Er(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new fs(t,e,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var On=class i extends ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new P,h=new at;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ps=class i extends ve{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],m=0,x=[],g=n/2,f=0;M(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(p,2));function M(){let A=new P,L=new P,E=0,T=(e-t)/n;for(let R=0;R<=r;R++){let I=[],_=R/r,w=_*(e-t)+t;for(let G=0;G<=s;G++){let B=G/s,V=B*c+o,H=Math.sin(V),F=Math.cos(V);L.x=w*H,L.y=-_*n+g,L.z=w*F,u.push(L.x,L.y,L.z),A.set(H,T,F).normalize(),d.push(A.x,A.y,A.z),p.push(B,1-_),I.push(m++)}x.push(I)}for(let R=0;R<s;R++)for(let I=0;I<r;I++){let _=x[I][R],w=x[I+1][R],G=x[I+1][R+1],B=x[I][R+1];(t>0||I!==0)&&(h.push(_,w,B),E+=3),(e>0||I!==r-1)&&(h.push(w,G,B),E+=3)}l.addGroup(f,E,0),f+=E}function C(A){let L=m,E=new at,T=new P,R=0,I=A===!0?t:e,_=A===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,g*_,0),d.push(0,_,0),p.push(.5,.5),m++;let w=m;for(let G=0;G<=s;G++){let V=G/s*c+o,H=Math.cos(V),F=Math.sin(V);T.x=I*F,T.y=g*_,T.z=I*H,u.push(T.x,T.y,T.z),d.push(0,_,0),E.x=H*.5+.5,E.y=F*.5*_+.5,p.push(E.x,E.y),m++}for(let G=0;G<s;G++){let B=L+G,V=w+G;A===!0?h.push(V,V+1,B):h.push(V+1,V,B),R+=3}l.addGroup(f,R,A===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},gs=class i extends ps{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Oo=class i extends ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let C=new P,A=new P,L=new P;for(let E=0;E<e.length;E+=3)p(e[E+0],C),p(e[E+1],A),p(e[E+2],L),c(C,A,L,M)}function c(M,C,A,L){let E=L+1,T=[];for(let R=0;R<=E;R++){T[R]=[];let I=M.clone().lerp(A,R/E),_=C.clone().lerp(A,R/E),w=E-R;for(let G=0;G<=w;G++)G===0&&R===E?T[R][G]=I:T[R][G]=I.clone().lerp(_,G/w)}for(let R=0;R<E;R++)for(let I=0;I<2*(E-R)-1;I++){let _=Math.floor(I/2);I%2===0?(d(T[R][_+1]),d(T[R+1][_]),d(T[R][_])):(d(T[R][_+1]),d(T[R+1][_+1]),d(T[R+1][_]))}}function l(M){let C=new P;for(let A=0;A<r.length;A+=3)C.x=r[A+0],C.y=r[A+1],C.z=r[A+2],C.normalize().multiplyScalar(M),r[A+0]=C.x,r[A+1]=C.y,r[A+2]=C.z}function h(){let M=new P;for(let C=0;C<r.length;C+=3){M.x=r[C+0],M.y=r[C+1],M.z=r[C+2];let A=g(M)/2/Math.PI+.5,L=f(M)/Math.PI+.5;a.push(A,1-L)}m(),u()}function u(){for(let M=0;M<a.length;M+=6){let C=a[M+0],A=a[M+2],L=a[M+4],E=Math.max(C,A,L),T=Math.min(C,A,L);E>.9&&T<.1&&(C<.2&&(a[M+0]+=1),A<.2&&(a[M+2]+=1),L<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,C){let A=M*3;C.x=t[A+0],C.y=t[A+1],C.z=t[A+2]}function m(){let M=new P,C=new P,A=new P,L=new P,E=new at,T=new at,R=new at;for(let I=0,_=0;I<r.length;I+=9,_+=6){M.set(r[I+0],r[I+1],r[I+2]),C.set(r[I+3],r[I+4],r[I+5]),A.set(r[I+6],r[I+7],r[I+8]),E.set(a[_+0],a[_+1]),T.set(a[_+2],a[_+3]),R.set(a[_+4],a[_+5]),L.copy(M).add(C).add(A).divideScalar(3);let w=g(L);x(E,_+0,M,w),x(T,_+2,C,w),x(R,_+4,A,w)}}function x(M,C,A,L){L<0&&M.x===1&&(a[C]=M.x-1),A.x===0&&A.z===0&&(a[C]=L/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Tr=class i extends Oo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var si=class extends wr{constructor(t){super(t),this.uuid=Hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new wr().fromJSON(s))}return this}},Dm={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=lh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,p;if(n&&(r=Om(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return ms(r,a,e,o,c,p,0),a}};function lh(i,t,e,n,s){let r,a;if(s===jm(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Nl(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Nl(r,i[r],i[r+1],a);return a&&Nr(a,a.next)&&(xs(a),a=a.next),a}function ri(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Nr(e,e.next)||ue(e.prev,e,e.next)===0)){if(xs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ms(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Wm(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Fm(i,n,s,r):Nm(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),xs(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=zm(ri(i),t,e),ms(i,t,e,n,s,r,2)):a===2&&Bm(i,t,e,n,s,r):ms(ri(i),t,e,n,s,r,1);break}}}function Nm(i){let t=i.prev,e=i,n=i.next;if(ue(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,p=o>c?o>l?o:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&bi(s,o,r,c,a,l,m.x,m.y)&&ue(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Fm(i,t,e,n){let s=i.prev,r=i,a=i.next;if(ue(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,p=o<c?o<l?o:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,x=o>c?o>l?o:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,f=ko(p,m,t,e,n),M=ko(x,g,t,e,n),C=i.prevZ,A=i.nextZ;for(;C&&C.z>=f&&A&&A.z<=M;){if(C.x>=p&&C.x<=x&&C.y>=m&&C.y<=g&&C!==s&&C!==a&&bi(o,h,c,u,l,d,C.x,C.y)&&ue(C.prev,C,C.next)>=0||(C=C.prevZ,A.x>=p&&A.x<=x&&A.y>=m&&A.y<=g&&A!==s&&A!==a&&bi(o,h,c,u,l,d,A.x,A.y)&&ue(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;C&&C.z>=f;){if(C.x>=p&&C.x<=x&&C.y>=m&&C.y<=g&&C!==s&&C!==a&&bi(o,h,c,u,l,d,C.x,C.y)&&ue(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;A&&A.z<=M;){if(A.x>=p&&A.x<=x&&A.y>=m&&A.y<=g&&A!==s&&A!==a&&bi(o,h,c,u,l,d,A.x,A.y)&&ue(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function zm(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Nr(s,r)&&hh(s,n,n.next,r)&&As(s,r)&&As(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),xs(n),xs(n.next),n=i=r),n=n.next}while(n!==i);return ri(n)}function Bm(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Zm(a,o)){let c=uh(a,o);a=ri(a,a.next),c=ri(c,c.next),ms(a,t,e,n,s,r,0),ms(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Om(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=lh(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Ym(l));for(s.sort(km),r=0;r<s.length;r++)e=qm(s[r],e);return e}function km(i,t){return i.x-t.x}function qm(i,t){let e=Hm(i,t);if(!e)return t;let n=uh(e,i);return ri(n,n.next),ri(e,e.next)}function Hm(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&bi(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),As(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Gm(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Gm(i,t){return ue(i.prev,i,t.prev)<0&&ue(t.next,i,i.next)<0}function Wm(i,t,e,n){let s=i;do s.z===0&&(s.z=ko(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Xm(s)}function Xm(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function ko(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ym(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function bi(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Zm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Km(i,t)&&(As(i,t)&&As(t,i)&&Jm(i,t)&&(ue(i.prev,i,t.prev)||ue(i,t.prev,t))||Nr(i,t)&&ue(i.prev,i,i.next)>0&&ue(t.prev,t,t.next)>0)}function ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Nr(i,t){return i.x===t.x&&i.y===t.y}function hh(i,t,e,n){let s=tr(ue(i,t,e)),r=tr(ue(i,t,n)),a=tr(ue(e,n,i)),o=tr(ue(e,n,t));return!!(s!==r&&a!==o||s===0&&$s(i,e,t)||r===0&&$s(i,n,t)||a===0&&$s(e,i,n)||o===0&&$s(e,t,n))}function $s(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function tr(i){return i>0?1:i<0?-1:0}function Km(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&hh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function As(i,t){return ue(i.prev,i,i.next)<0?ue(i,t,i.next)>=0&&ue(i,i.prev,t)>=0:ue(i,t,i.prev)<0||ue(i,i.next,t)<0}function Jm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function uh(i,t){let e=new qo(i.i,i.x,i.y),n=new qo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Nl(i,t,e,n){let s=new qo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jm(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var os=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Fl(t),zl(n,t);let a=t.length;e.forEach(Fl);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,zl(n,e[c]);let o=Dm.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Fl(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function zl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var zi=class i extends ve{constructor(t=new si([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new he(s,3)),this.setAttribute("uv",new he(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Qm,C,A=!1,L,E,T,R;f&&(C=f.getSpacedPoints(h),A=!0,d=!1,L=f.computeFrenetFrames(h,!1),E=new P,T=new P,R=new P),d||(g=0,p=0,m=0,x=0);let I=o.extractPoints(l),_=I.shape,w=I.holes;if(!os.isClockWise(_)){_=_.reverse();for(let j=0,rt=w.length;j<rt;j++){let S=w[j];os.isClockWise(S)&&(w[j]=S.reverse())}}let B=os.triangulateShape(_,w),V=_;for(let j=0,rt=w.length;j<rt;j++){let S=w[j];_=_.concat(S)}function H(j,rt,S){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(rt,S)}let F=_.length,K=B.length;function O(j,rt,S){let wt,tt,_t,ct=j.x-rt.x,Pt=j.y-rt.y,Ct=S.x-j.x,b=S.y-j.y,y=ct*ct+Pt*Pt,z=ct*b-Pt*Ct;if(Math.abs(z)>Number.EPSILON){let Y=Math.sqrt(y),Q=Math.sqrt(Ct*Ct+b*b),Z=rt.x-Pt/Y,Mt=rt.y+ct/Y,dt=S.x-b/Q,yt=S.y+Ct/Q,Kt=((dt-Z)*b-(yt-Mt)*Ct)/(ct*b-Pt*Ct);wt=Z+ct*Kt-j.x,tt=Mt+Pt*Kt-j.y;let nt=wt*wt+tt*tt;if(nt<=2)return new at(wt,tt);_t=Math.sqrt(nt/2)}else{let Y=!1;ct>Number.EPSILON?Ct>Number.EPSILON&&(Y=!0):ct<-Number.EPSILON?Ct<-Number.EPSILON&&(Y=!0):Math.sign(Pt)===Math.sign(b)&&(Y=!0),Y?(wt=-Pt,tt=ct,_t=Math.sqrt(y)):(wt=ct,tt=Pt,_t=Math.sqrt(y/2))}return new at(wt/_t,tt/_t)}let $=[];for(let j=0,rt=V.length,S=rt-1,wt=j+1;j<rt;j++,S++,wt++)S===rt&&(S=0),wt===rt&&(wt=0),$[j]=O(V[j],V[S],V[wt]);let it=[],ft,Rt=$.concat();for(let j=0,rt=w.length;j<rt;j++){let S=w[j];ft=[];for(let wt=0,tt=S.length,_t=tt-1,ct=wt+1;wt<tt;wt++,_t++,ct++)_t===tt&&(_t=0),ct===tt&&(ct=0),ft[wt]=O(S[wt],S[_t],S[ct]);it.push(ft),Rt=Rt.concat(ft)}for(let j=0;j<g;j++){let rt=j/g,S=p*Math.cos(rt*Math.PI/2),wt=m*Math.sin(rt*Math.PI/2)+x;for(let tt=0,_t=V.length;tt<_t;tt++){let ct=H(V[tt],$[tt],wt);st(ct.x,ct.y,-S)}for(let tt=0,_t=w.length;tt<_t;tt++){let ct=w[tt];ft=it[tt];for(let Pt=0,Ct=ct.length;Pt<Ct;Pt++){let b=H(ct[Pt],ft[Pt],wt);st(b.x,b.y,-S)}}}let Wt=m+x;for(let j=0;j<F;j++){let rt=d?H(_[j],Rt[j],Wt):_[j];A?(T.copy(L.normals[0]).multiplyScalar(rt.x),E.copy(L.binormals[0]).multiplyScalar(rt.y),R.copy(C[0]).add(T).add(E),st(R.x,R.y,R.z)):st(rt.x,rt.y,0)}for(let j=1;j<=h;j++)for(let rt=0;rt<F;rt++){let S=d?H(_[rt],Rt[rt],Wt):_[rt];A?(T.copy(L.normals[j]).multiplyScalar(S.x),E.copy(L.binormals[j]).multiplyScalar(S.y),R.copy(C[j]).add(T).add(E),st(R.x,R.y,R.z)):st(S.x,S.y,u/h*j)}for(let j=g-1;j>=0;j--){let rt=j/g,S=p*Math.cos(rt*Math.PI/2),wt=m*Math.sin(rt*Math.PI/2)+x;for(let tt=0,_t=V.length;tt<_t;tt++){let ct=H(V[tt],$[tt],wt);st(ct.x,ct.y,u+S)}for(let tt=0,_t=w.length;tt<_t;tt++){let ct=w[tt];ft=it[tt];for(let Pt=0,Ct=ct.length;Pt<Ct;Pt++){let b=H(ct[Pt],ft[Pt],wt);A?st(b.x,b.y+C[h-1].y,C[h-1].x+S):st(b.x,b.y,u+S)}}}X(),et();function X(){let j=s.length/3;if(d){let rt=0,S=F*rt;for(let wt=0;wt<K;wt++){let tt=B[wt];Vt(tt[2]+S,tt[1]+S,tt[0]+S)}rt=h+g*2,S=F*rt;for(let wt=0;wt<K;wt++){let tt=B[wt];Vt(tt[0]+S,tt[1]+S,tt[2]+S)}}else{for(let rt=0;rt<K;rt++){let S=B[rt];Vt(S[2],S[1],S[0])}for(let rt=0;rt<K;rt++){let S=B[rt];Vt(S[0]+F*h,S[1]+F*h,S[2]+F*h)}}n.addGroup(j,s.length/3-j,0)}function et(){let j=s.length/3,rt=0;xt(V,rt),rt+=V.length;for(let S=0,wt=w.length;S<wt;S++){let tt=w[S];xt(tt,rt),rt+=tt.length}n.addGroup(j,s.length/3-j,1)}function xt(j,rt){let S=j.length;for(;--S>=0;){let wt=S,tt=S-1;tt<0&&(tt=j.length-1);for(let _t=0,ct=h+g*2;_t<ct;_t++){let Pt=F*_t,Ct=F*(_t+1),b=rt+wt+Pt,y=rt+tt+Pt,z=rt+tt+Ct,Y=rt+wt+Ct;Nt(b,y,z,Y)}}}function st(j,rt,S){c.push(j),c.push(rt),c.push(S)}function Vt(j,rt,S){Ut(j),Ut(rt),Ut(S);let wt=s.length/3,tt=M.generateTopUV(n,s,wt-3,wt-2,wt-1);jt(tt[0]),jt(tt[1]),jt(tt[2])}function Nt(j,rt,S,wt){Ut(j),Ut(rt),Ut(wt),Ut(rt),Ut(S),Ut(wt);let tt=s.length/3,_t=M.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);jt(_t[0]),jt(_t[1]),jt(_t[3]),jt(_t[1]),jt(_t[2]),jt(_t[3])}function Ut(j){s.push(c[j*3+0]),s.push(c[j*3+1]),s.push(c[j*3+2])}function jt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return $m(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new zo[s.type]().fromJSON(s)),new i(n,t.options)}},Qm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new at(r,a),new at(o,c),new at(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new at(a,1-c),new at(l,1-u),new at(d,1-m),new at(x,1-f)]:[new at(o,1-c),new at(h,1-u),new at(p,1-m),new at(g,1-f)]}};function $m(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Cs=class i extends ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new P,d=new P,p=[],m=[],x=[],g=[];for(let f=0;f<=n;f++){let M=[],C=f/n,A=0;f===0&&a===0?A=.5/e:f===n&&c===Math.PI&&(A=-.5/e);for(let L=0;L<=e;L++){let E=L/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+C*o),u.y=t*Math.cos(a+C*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+C*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(E+A,1-C),M.push(l++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){let C=h[f][M+1],A=h[f][M],L=h[f+1][M],E=h[f+1][M+1];(f!==0||a>0)&&p.push(C,A,E),(f!==n-1||c<Math.PI)&&p.push(A,L,E)}this.setIndex(p),this.setAttribute("position",new he(m,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Qe=class extends Bn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function er(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function tA(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Bi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ho=class extends Bi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dc,endingEnd:Dc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nc:r=t,o=2*e-n;break;case Fc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Nc:a=t,c=2*n-e;break;case Fc:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,f=-d*g+2*d*x-d*m,M=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,C=(-1-p)*g+(1.5+p)*x+.5*m,A=p*g-p*x;for(let L=0;L!==o;++L)r[L]=f*a[h+L]+M*a[l+L]+C*a[c+L]+A*a[u+L];return r}},Go=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Wo=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$e=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=er(e,this.TimeBufferType),this.values=er(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:er(t.times,Array),values:er(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Wo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Go(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ho(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case or:e=this.InterpolantFactoryMethodDiscrete;break;case fo:e=this.InterpolantFactoryMethodLinear;break;case Kr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return or;case this.InterpolantFactoryMethodLinear:return fo;case this.InterpolantFactoryMethodSmooth:return Kr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&tA(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Kr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,p=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[p+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};$e.prototype.TimeBufferType=Float32Array;$e.prototype.ValueBufferType=Float32Array;$e.prototype.DefaultInterpolation=fo;var ai=class extends $e{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="bool";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=or;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends $e{};Xo.prototype.ValueTypeName="color";var Yo=class extends $e{};Yo.prototype.ValueTypeName="number";var Zo=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)De.slerpFlat(r,0,a,l-o,a,l,c);return r}},Vr=class extends $e{InterpolantFactoryMethodLinear(t){return new Zo(this.times,this.values,this.getValueSize(),t)}};Vr.prototype.ValueTypeName="quaternion";Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends $e{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="string";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=or;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ko=class extends $e{};Ko.prototype.ValueTypeName="vector";var Jo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},eA=new Jo,jo=class{constructor(t){this.manager=t!==void 0?t:eA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};jo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rr=class extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Oi=class extends Rr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ea=new Xt,Bl=new P,Ol=new P,Qo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ls,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Bl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bl),Ol.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ol),e.updateMatrixWorld(),Ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var $o=class extends Qo{constructor(){super(new Cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ki=class extends Rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new $o}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Pr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=kl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function kl(){return performance.now()}var fc="\\[\\]\\.:\\/",nA=new RegExp("["+fc+"]","g"),pc="[^"+fc+"]",iA="[^"+fc.replace("\\.","")+"]",sA=/((?:WC+[\/:])*)/.source.replace("WC",pc),rA=/(WCOD+)?/.source.replace("WCOD",iA),aA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pc),oA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pc),cA=new RegExp("^"+sA+rA+aA+oA+"$"),lA=["material","materials","bones","map"],tc=class{constructor(t,e,n){let s=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nA,"")}static parseTrackName(t){let e=cA.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);lA.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=tc;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var MA=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);var _s={wheat:{ar:"\u0642\u0645\u062D",en:"Wheat",yield:1,price:.16,color:15909198,product:"flour"},corn:{ar:"\u0630\u0631\u0629",en:"Corn",yield:1.4,price:.15,color:16241482,product:"corn"},sunflower:{ar:"\u0639\u0628\u0627\u062F \u0627\u0644\u0634\u0645\u0633",en:"Sunflowers",yield:1.2,price:.18,color:16763176,product:"seeds"}},dh={sheep:{ar:"\u062E\u0631\u0641\u0627\u0646",en:"Sheep",r:.55},cow:{ar:"\u0628\u0642\u0631",en:"Cows",r:.8},chicken:{ar:"\u0641\u0631\u0627\u062E",en:"Chickens",r:.35}},kn=[{id:1,ar:"\u0627\u0644\u0648\u0627\u062F\u064A \u0627\u0644\u0630\u0647\u0628\u064A",en:"Golden Valley",w:30,d:34,fields:[[-8,-12,16,12,"wheat"]],rocks:[],animals:[],pen:null},{id:2,ar:"\u062A\u0644\u0629 \u0627\u0644\u0628\u0631\u0633\u064A\u0645",en:"Clover Hill",w:34,d:36,fields:[[-10,-14,20,14,"wheat"]],rocks:[[-4,-9],[5,-5]],animals:[],pen:null},{id:3,ar:"\u0628\u0633\u062A\u0627\u0646 \u0627\u0644\u0630\u0631\u0629",en:"Corn Corner",w:38,d:38,fields:[[-14,-15,14,14,"corn"],[2,-13,10,10,"wheat"]],rocks:[[-8,-9],[6,-8],[-2,-3]],animals:[["sheep",10,2],["sheep",12,4]],pen:[8,6,7,5]},{id:4,ar:"\u062D\u0642\u0648\u0644 \u0627\u0644\u0634\u0645\u0633",en:"Sunny Fields",w:40,d:40,fields:[[-12,-16,22,16,"sunflower"]],rocks:[[-6,-11],[4,-9],[-2,-5],[7,-3]],animals:[["sheep",-10,4],["sheep",-12,2],["sheep",-8,6]],pen:[-16,8,7,5]},{id:5,ar:"\u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0637\u0627\u062D\u0648\u0646\u0629",en:"Windmill Farm",w:44,d:44,fields:[[-18,-18,12,14,"wheat"],[-4,-18,12,12,"corn"],[10,-16,10,12,"sunflower"]],rocks:[[-13,-12],[0,-10],[14,-8],[-8,-2],[5,-1]],animals:[["cow",12,4],["cow",15,6],["cow",10,8]],pen:[13,10,8,6]},{id:6,ar:"\u0627\u0644\u0633\u0647\u0644 \u0627\u0644\u0643\u0628\u064A\u0631",en:"Big Plains",w:48,d:46,fields:[[-16,-20,30,20,"wheat"]],rocks:[[-10,-15],[-2,-12],[6,-16],[9,-6],[-6,-5],[2,-3]],animals:[["sheep",-18,6],["sheep",-14,8],["chicken",-16,4],["chicken",-12,6]],pen:[-20,10,8,6]},{id:7,ar:"\u0648\u0627\u062F\u064A \u0627\u0644\u0646\u0647\u0631",en:"River Valley",w:50,d:48,fields:[[-20,-21,18,16,"corn"],[2,-21,18,16,"sunflower"]],rocks:[[-14,-15],[-6,-9],[-17,-7],[8,-16],[14,-10],[5,-7],[18,-14],[-1,-2]],animals:[["cow",14,6],["sheep",18,4],["sheep",16,8],["chicken",12,4]],pen:[16,11,9,6]},{id:8,ar:"\u0627\u0644\u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0643\u0628\u064A\u0631\u0629",en:"Grand Farm",w:54,d:52,fields:[[-22,-23,14,14,"wheat"],[-6,-23,12,18,"corn"],[8,-23,14,14,"sunflower"],[8,-7,14,8,"wheat"]],rocks:[[-17,-18],[-11,-12],[-2,-17],[2,-9],[12,-18],[18,-13],[-15,-6],[13,-3],[-4,-3],[19,-4]],animals:[["cow",-18,6],["cow",-14,8],["sheep",-20,4],["sheep",-16,2],["chicken",-12,4]],pen:[-22,11,10,6]}];function fh(i){let t=i.d/2-6;return{barn:{x:-6,z:t+1,w:7,d:5},pad:{x:2.5,z:t,w:4,d:4}}}var Fr=[{id:"cutter",ar:"\u0627\u0644\u0633\u0643\u064A\u0646\u0629",en:"Cutter",sub:["\u0623\u0639\u0631\u0636","Wider"],icon:"\u{1F33E}",base:1.8,step:.45,unit:"m"},{id:"engine",ar:"\u0627\u0644\u0645\u0648\u062A\u0648\u0631",en:"Engine",sub:["\u0623\u0633\u0631\u0639","Faster"],icon:"\u2699\uFE0F",base:3.2,step:.4,unit:"m/s"},{id:"trailer",ar:"\u0627\u0644\u0645\u0642\u0637\u0648\u0631\u0629",en:"Trailer",sub:["\u0623\u0643\u0628\u0631","Bigger"],icon:"\u{1F6D2}",base:400,step:200,unit:""},{id:"barn",ar:"\u0627\u0644\u0645\u062E\u0632\u0646",en:"Barn",sub:["\u0623\u0633\u0639\u0627\u0631 \u0623\u062D\u0633\u0646","Better prices"],icon:"\u{1F3E0}",base:0,step:10,unit:"%"}],vs=6,mc=(i,t)=>({cutter:120,engine:150,trailer:100,barn:200})[i]+t*{cutter:100,engine:90,trailer:90,barn:120}[i],In=(i,t)=>{let e=Fr.find(n=>n.id===i);return e.base+e.step*t};function hA(){return{v:1,coins:0,unlocked:1,stars:{},up:{cutter:0,engine:0,trailer:0,barn:0},store:{flour:0,hay:0,corn:0,seeds:0}}}function ph(i){let t=hA();if(!i||typeof i!="object")return t;let e=(n,s,r,a)=>Number.isFinite(n)?Math.max(s,Math.min(r,Math.floor(n))):a;if(t.coins=e(i.coins,0,9999999,0),t.unlocked=e(i.unlocked,1,kn.length,1),i.stars&&typeof i.stars=="object")for(let n of kn)i.stars[n.id]!==void 0&&(t.stars[n.id]=e(i.stars[n.id],0,3,0));if(i.up&&typeof i.up=="object")for(let n of Fr)t.up[n.id]=e(i.up[n.id],0,vs,0);if(i.store&&typeof i.store=="object")for(let n of Object.keys(t.store))t.store[n]=e(i.store[n],0,9999999,0);return i.muted===!0&&(t.muted=!0),t}function gh(i,t){let e=i.up[t];if(e>=vs)return"max";let n=mc(t,e);return i.coins<n?"poor":(i.coins-=n,i.up[t]=e+1,"bought")}function mh(i,t,e){var r;let n=kn[t].id;i.stars[n]=Math.max((r=i.stars[n])!=null?r:0,e);let s=!1;return t+1<kn.length&&i.unlocked<t+2&&(i.unlocked=t+2,s=!0),{opened:s}}var Ah=1.9,uA=.95,qn=(i,t,e)=>i<t?t:i>e?e:i,dA=(i,t)=>Math.atan2(Math.sin(t-i),Math.cos(t-i)),Br=class{constructor(t,e={}){var s,r,a,o;this.level=t,this.events=[],this.time=0,this.W=t.w,this.D=t.d,this.cutter=In("cutter",(s=e.cutter)!=null?s:0),this.maxSpeed=In("engine",(r=e.engine)!=null?r:0),this.capacity=In("trailer",(a=e.trailer)!=null?a:0),this.priceBonus=1+In("barn",(o=e.barn)!=null?o:0)/100;let n=fh(t);this.barn=n.barn,this.pad=n.pad,this.rocks=t.rocks.map(([c,l])=>({x:c,z:l,r:.75})),this.pen=t.pen?{x:t.pen[0],z:t.pen[1],w:t.pen[2],d:t.pen[3]}:null,this.animals=t.animals.map(([c,l,h],u)=>({kind:c,x:l,z:h,r:dh[c].r,vx:0,vz:0,wander:u*1.7,penned:!1,heading:0})),this.cells=[];for(let[c,l,h,u,d]of t.fields)for(let p=0;p<h/.5;p++)for(let m=0;m<u/.5;m++){let x=c+(p+.5)*.5,g=l+(m+.5)*.5;this.rocks.some(M=>(M.x-x)**2+(M.z-g)**2<Ah*Ah)||this.cells.push({x,z:g,crop:d,cut:!1})}this.total=this.cells.length,this.cutCount=0,this.grid=new Map,this.cells.forEach((c,l)=>{let h=`${Math.floor(c.x/2)},${Math.floor(c.z/2)}`;this.grid.has(h)||this.grid.set(h,[]),this.grid.get(h).push(l)}),this.load=0,this.loadMix={wheat:0,corn:0,sunflower:0},this.coins=0,this.sold={flour:0,hay:0,corn:0,seeds:0},this.bumps=0,this.full=!1,this.done=!1,this.unloading=!1,this.t={x:this.pad.x,z:this.pad.z-2.5,heading:-Math.PI/2,speed:0,bump:0}}emit(t,e={}){this.events.push({type:t,...e})}get progress(){return this.total?this.cutCount/this.total:1}get penned(){return this.animals.filter(t=>t.penned).length}step(t,e){this.events.length=0,t=Math.min(t,.1);let n=Math.max(1,Math.ceil(t/(1/60)-1e-6));for(let s=0;s<n;s++)this._step(t/n,e)}_step(t,e){if(this.done)return;this.time+=t;let n=this.t,s=qn(Math.hypot(e.x,e.z),0,1);if(n.bump>0&&(n.bump-=t),s>.15&&n.bump<=0){let u=Math.atan2(e.z,e.x),d=dA(n.heading,u);n.heading+=qn(d,-2.6*t,2.6*t);let p=this.maxSpeed*s*(Math.abs(d)>1.6?.35:1);n.speed+=(p-n.speed)*Math.min(1,t*3)}else n.speed+=(0-n.speed)*Math.min(1,t*4);let r=Math.cos(n.heading),a=Math.sin(n.heading),o=n.x+r*n.speed*t,c=n.z+a*n.speed*t,l=1.4;o=qn(o,-this.W/2+l,this.W/2-l),c=qn(c,-this.D/2+l,this.D/2-l);let h=this.barn;Math.abs(o-h.x)<h.w/2+1.2&&Math.abs(c-h.z)<h.d/2+1.2&&(o=n.x,c=n.z,n.speed*=.5);for(let u of this.rocks)Math.hypot(o+r*1-u.x,c+a*1-u.z)<u.r+.75&&n.bump<=0&&(n.bump=.45,n.speed=-1.5,this.bumps++,this.emit("rock",{x:u.x,z:u.z}),o=n.x,c=n.z);n.x=o,n.z=c,this._cut(t),this._animals(t),this._unload(t)}cutterBox(){let t=this.t;return{cx:t.x+Math.cos(t.heading)*1.8,cz:t.z+Math.sin(t.heading)*1.8,half:this.cutter/2,depth:.45,heading:t.heading}}_cut(){if(this.load>=this.capacity-1e-6)return;let t=this.t;if(Math.abs(t.speed)<.2)return;let e=this.cutterBox(),n=Math.cos(e.heading),s=Math.sin(e.heading),r=e.half+1,a=[];for(let o=Math.floor((e.cx-r)/2);o<=Math.floor((e.cx+r)/2);o++)for(let c=Math.floor((e.cz-r)/2);c<=Math.floor((e.cz+r)/2);c++){let l=this.grid.get(`${o},${c}`);if(l)for(let h of l){let u=this.cells[h];if(u.cut)continue;let d=u.x-e.cx,p=u.z-e.cz,m=d*n+p*s,x=-d*s+p*n;if(Math.abs(m)<=e.depth&&Math.abs(x)<=e.half){if(this.load>=this.capacity)break;u.cut=!0,this.cutCount++;let g=_s[u.crop].yield;this.load=Math.min(this.capacity,this.load+g),this.loadMix[u.crop]+=g,a.push(h)}}}a.length&&this.emit("cut",{cells:a}),this.load>=this.capacity-1e-6&&!this.full&&(this.full=!0,this.emit("full"))}_animals(t){let e=this.t;for(let n of this.animals){if(n.penned){n.wander+=t;let h=this.pen;n.x=qn(n.x+Math.cos(n.wander*.6)*t*.3,h.x+.8,h.x+h.w-.8),n.z=qn(n.z+Math.sin(n.wander*.5)*t*.3,h.z+.8,h.z+h.d-.8);continue}let s=n.x-e.x,r=n.z-e.z,a=Math.hypot(s,r)||1,o=0,c=0;if(a<4.5){let h=(4.5-a)/4.5;o=s/a*3.2*h,c=r/a*3.2*h}else n.wander+=t,o=Math.cos(n.wander*.4)*.25,c=Math.sin(n.wander*.33)*.25;n.vx+=(o-n.vx)*Math.min(1,t*4),n.vz+=(c-n.vz)*Math.min(1,t*4),n.x=qn(n.x+n.vx*t,-this.W/2+1,this.W/2-1),n.z=qn(n.z+n.vz*t,-this.D/2+1,this.D/2-1),Math.hypot(n.vx,n.vz)>.05&&(n.heading=Math.atan2(n.vz,n.vx));let l=this.pen;l&&n.x>l.x&&n.x<l.x+l.w&&n.z>l.z&&n.z<l.z+l.d&&(n.penned=!0,this.emit("penned",{kind:n.kind,n:this.penned,of:this.animals.length}))}}_unload(t){var c;let e=this.t,n=this.pad,s=e.x-Math.cos(e.heading)*3,r=e.z-Math.sin(e.heading)*3,a=(l,h)=>Math.abs(l-n.x)<n.w/2+.6&&Math.abs(h-n.z)<n.d/2+.6;if((a(e.x,e.z)||a(s,r))&&this.load>0){this.unloading||(this.unloading=!0,this.emit("unloadStart"));let l=Math.min(this.load,160*t),h=this.load,u=0;for(let p of Object.keys(this.loadMix)){let m=this.loadMix[p]/h*l;this.loadMix[p]-=m,u+=m*_s[p].price*this.priceBonus;let x=_s[p].product;x==="flour"?(this.sold.flour+=m*.5,this.sold.hay+=m*.5):this.sold[x]+=m}this.load-=l,this._earned=((c=this._earned)!=null?c:0)+u;let d=Math.floor(this._earned);if(d>0&&(this._earned-=d,this.coins+=d,this.emit("coins",{n:d,total:this.coins})),this.load<=1e-6){this.load=0;for(let p of Object.keys(this.loadMix))this.loadMix[p]=0;this.full=!1,this.unloading=!1,this.emit("unloaded")}}else this.unloading&&(this.unloading=!1);if(!this.done&&this.progress>=uA&&this.load===0){this.done=!0;let h=1+(this.animals.length===0||this.penned===this.animals.length?1:0)+(this.bumps<=2?1:0);this.result={stars:h,coins:this.coins,bumps:this.bumps,penned:this.penned,animals:this.animals.length,time:this.time},this.emit("done",this.result)}}};function Is(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new ve,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let m=0;m<p.count;++m)u.push(p.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=xh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let x=0;x<a[h].length;++x)p.push(a[h][x][d]);let m=xh(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function xh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new xe(a,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,p=h.count;d<p;d++)for(let m=0;m<e;m++){let x=h.getComponent(d,m);o.setComponent(d+u,m,x)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Ac=new Map;function lt(i,t=0,e=1){let n=`${i}|${t}|${e}`;return Ac.has(n)||Ac.set(n,new Qe({color:i,emissive:t,emissiveIntensity:e})),Ac.get(n)}function Bt(i,t,e,n,s=0,r=0,a=0){let o=new Zt(new Oe(i,t,e),n);return o.position.set(s,r,a),o}function de(i,t,e,n,s=0,r=0,a=0,o=14){let c=new Zt(new ps(i,t,e,o),n);return c.position.set(s,r,a),c}function ke(i,t,e=0,n=0,s=0,r=1,a=1,o=1,c=12){let l=new Zt(new Cs(i,c,Math.max(6,c-4)),t);return l.position.set(e,n,s),l.scale.set(r,a,o),l}function Mn(i,t=[]){i.updateMatrixWorld(!0);let e=new Xt().copy(i.matrixWorld).invert(),n=new Map,s=[];i.traverse(a=>{if(t.includes(a.name)){s.push(a);return}if(!a.isMesh||s.some(c=>fA(a,c)))return;let o=a.geometry.clone().applyMatrix4(new Xt().multiplyMatrices(e,a.matrixWorld));for(let c of Object.keys(o.attributes))["position","normal","uv"].includes(c)||o.deleteAttribute(c);o.index||o.setIndex([...Array(o.attributes.position.count).keys()]),n.has(a.material)||n.set(a.material,[]),n.get(a.material).push(o)});let r=new $t;for(let[a,o]of n)r.add(new Zt(Is(o,!1),a));for(let a of s){let o=new P,c=new De,l=new P;a.updateMatrixWorld(!0),new Xt().multiplyMatrices(e,a.matrixWorld).decompose(o,c,l),a.removeFromParent(),a.position.copy(o),a.quaternion.copy(c),a.scale.copy(l),r.add(a)}return r}function fA(i,t){for(let e=i.parent;e;e=e.parent)if(e===t)return!0;return!1}function xc(i){let t=new $t,e=lt(4033533,1060970,.25),n=lt(2778052),s=lt(16763955,6965760,.2),r=lt(2829107),a=lt(12577023,4892376,.35),o=lt(14672874);t.add(Bt(2.6,1.1,1.7,e,-.2,1.15,0)),t.add(Bt(2.2,.35,1.75,n,-.3,.6,0)),t.add(Bt(1.4,.5,1.5,e,-.6,1.95,0)),t.add(Bt(1.3,.12,1.4,s,-.6,2.25,0)),t.add(Bt(.95,.9,1.1,a,.75,2.05,0)),t.add(Bt(1.1,.1,1.25,e,.75,2.55,0)),t.add(ke(.2,lt(16239529),.8,2.05,0)),t.add(de(.34,.34,.05,lt(15254122),.8,2.24,0,16)),t.add(de(.18,.2,.18,lt(15254122),.8,2.33,0)),t.add(Bt(.3,.3,.42,lt(15222847),.78,1.78,0));for(let f of[-1,1]){let M=de(.62,.62,.42,r,.45,.62,f*.95,18);M.rotation.x=Math.PI/2,t.add(M);let C=de(.26,.26,.44,s,.45,.62,f*.96,12);C.rotation.x=Math.PI/2,t.add(C);let A=de(.4,.4,.34,r,-1.2,.42,f*.88,14);A.rotation.x=Math.PI/2,t.add(A)}t.add(de(.07,.07,.8,o,-.9,2.5,-.55,8));let c=new $t;c.name="spout";let l=de(.12,.12,1.8,s,0,0,0,10);l.rotation.z=Math.PI/2,l.position.x=-.9,c.add(l),c.position.set(-.8,2.3,.5),c.rotation.y=-.35,t.add(c);let h=Mn(t,["spout"]),u=new $t;u.name="header",u.position.set(1.55,.45,0);let d=Bt(.7,.35,1,s,0,0,0);u.add(d);let p=Bt(.12,.06,1,lt(13620442),.38,-.13,0);u.add(p);for(let f of[-.5,.5])u.add(Bt(.75,.5,.06,s,0,.12,f));let m=new $t;m.position.set(.25,.45,0);let x=de(.05,.05,1,lt(15222847),0,0,0,8);x.rotation.x=Math.PI/2,m.add(x);for(let f=0;f<5;f++){let M=f/5*Math.PI*2,C=Bt(.05,.05,1,lt(15222847),Math.cos(M)*.32,Math.sin(M)*.32,0);m.add(C)}u.add(m),h.add(u);let g=f=>{d.scale.z=f,p.scale.z=f,u.children[2].position.z=-f/2,u.children[3].position.z=f/2,m.scale.z=f*.95};return g(i),{root:h,reel:m,header:u,spout:h.children.find(f=>f.name==="spout"),setWidth:g}}function Cc(){let i=new $t,t=lt(16747050,5908992,.2),e=lt(11883546),n=lt(2829107);i.add(Bt(2.2,.15,1.5,e,0,.7,0));for(let c of[-.72,.72])i.add(Bt(2.2,.7,.08,t,0,1.1,c));for(let c of[-1.08,1.08])i.add(Bt(.08,.7,1.5,t,c,1.1,0));i.add(Bt(1.2,.08,.1,lt(6711923),1.7,.6,0));for(let c of[-.85,.85]){let l=de(.42,.42,.28,n,-.2,.42,c,14);l.rotation.x=Math.PI/2,i.add(l)}let s=Mn(i),r=new Zt(new Oe(2.05,1,1.35),lt(15909198,6965760,.25));r.position.y=.78,r.scale.y=.001,s.add(r);let a=new Zt(new Cs(1,14,8,0,Math.PI*2,0,Math.PI/2),lt(16174944,6965760,.25));return a.scale.set(1,.001,.66),s.add(a),{root:s,setFill:c=>{let l=.05+c*.62;r.scale.y=Math.max(.001,l),r.position.y=.78+l/2,a.position.y=.78+l,a.scale.y=c>.02?.12+c*.25:.001}}}function Or(){let i=new $t,t=lt(14235198,4196362,.25),e=lt(16777215),n=lt(5917250);i.add(Bt(7,4,5,t,0,2,0));let s=new si([new at(-3.8,0),new at(3.8,0),new at(0,2.4)]),r=new zi(s,{depth:5.4,bevelEnabled:!1});r.translate(0,4,-2.7),i.add(new Zt(r,n));let a=new zi(new si([new at(-3.5,0),new at(3.5,0),new at(0,2.1)]),{depth:.05,bevelEnabled:!1});a.translate(0,4,2.5),i.add(new Zt(a,t)),i.add(Bt(2.6,2.8,.1,lt(11872817),0,1.4,2.53));let o=Bt(.18,3.6,.06,e,0,1.4,2.6);o.rotation.z=.75;let c=Bt(.18,3.6,.06,e,0,1.4,2.6);return c.rotation.z=-.75,i.add(o,c),i.add(Bt(2.9,.18,.1,e,0,2.85,2.6),Bt(.18,2.9,.1,e,-1.36,1.4,2.6),Bt(.18,2.9,.1,e,1.36,1.4,2.6)),i.add(Bt(.9,.9,.1,e,0,4.9,2.58),Bt(.7,.7,.1,lt(2829107),0,4.9,2.62)),Mn(i)}function Ch(i,t){let e=new $t,n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d");s.fillStyle="#2f3540",s.fillRect(0,0,128,128),s.fillStyle="#4a5260";for(let o=8;o<128;o+=14)s.fillRect(o,10,6,108);for(let o=0;o<128;o+=16)s.fillStyle=o/16%2?"#ffcc33":"#222",s.fillRect(o,0,16,8),s.fillRect(o,120,16,8),s.fillRect(0,o,8,16),s.fillRect(120,o,8,16);let r=new vn(n);r.colorSpace=Ae;let a=new Zt(new je(i,t),new Qe({map:r}));return a.rotation.x=-Math.PI/2,a.position.y=.04,e.add(a),e}function yh(){let i=new $t,t=lt(16763955,16755200,.6);i.add(Bt(.5,1,.5,t,0,1.2,0));let e=new Zt(new gs(.75,.9,4),t);return e.rotation.x=Math.PI,e.rotation.y=Math.PI/4,e.position.y=.3,i.add(e),i}function _h(){let i=de(.55,.55,.9,lt(15254106,4863232,.15),0,.55,0,14);i.rotation.x=Math.PI/2;let t=new $t;t.add(i);for(let e of[-.2,.2]){let n=de(.56,.56,.06,lt(11883546),0,.55,e,14);n.rotation.x=Math.PI/2,t.add(n)}return Mn(t)}function vh(i=16447210){let t=new $t;return t.add(ke(.38,lt(i),0,.35,0,1,1.1,.8)),t.add(de(.12,.18,.18,lt(i),0,.78,0)),t.add(Bt(.3,.04,.02,lt(14235198),0,.4,.31)),Mn(t)}function Ih(i){i.updateMatrixWorld(!0);let t=new Map;return i.traverse(e=>{if(!e.isMesh)return;let n=e.geometry.clone().applyMatrix4(e.matrixWorld);for(let o of Object.keys(n.attributes))["position","normal"].includes(o)||n.deleteAttribute(o);n.index||n.setIndex([...Array(n.attributes.position.count).keys()]);let s=new zt(e.material.color),r=n.attributes.position.count,a=new Float32Array(r*3);for(let o=0;o<r;o++)a.set([s.r,s.g,s.b],o*3);n.setAttribute("color",new xe(a,3)),t.set(t.size,n)}),Is([...t.values()],!1)}function Mh(i){let t=new $t;if(i==="wheat"){let e=lt(14263866),n=lt(16107596);for(let[s,r,a]of[[-.1,-.08,.95],[.1,.05,1.05],[0,.12,.85],[.12,-.12,.9],[-.12,.12,1]])t.add(de(.018,.022,a,e,s,a/2,r,4)),t.add(ke(.05,n,s,a+.1,r,1,2.6,1,5))}else if(i==="corn"){let e=lt(5940794),n=lt(7126853);t.add(de(.04,.06,1.6,e,0,.8,0,5));for(let s=0;s<4;s++){let r=Bt(.55,.02,.12,n,.22,.45+s*.3,0);r.rotation.y=s*1.6,r.rotation.z=-.5,t.add(r)}t.add(ke(.08,lt(16241482),.08,1,0,1,2.4,1,6)),t.add(de(.02,.04,.3,lt(14729322),0,1.75,0,4))}else{let e=lt(5216821);t.add(de(.035,.05,1.4,e,0,.7,0,5)),t.add(Bt(.35,.02,.16,lt(6534468),.12,.6,0));let n=new $t;n.position.set(.05,1.42,0),n.rotation.z=-.5;let s=de(.26,.26,.05,lt(16763176),0,0,0,12);n.add(s),n.add(de(.14,.14,.07,lt(7028509),0,.02,0,10)),t.add(n)}return Ih(t)}function bh(){let i=new $t,t=lt(13214026);for(let[e,n]of[[-.12,-.1],[.1,.08],[0,.14],[.13,-.12],[-.1,.12],[.02,-.02]])i.add(de(.02,.025,.14,t,e,.07,n,4));return Ih(i)}function Sh(){let i=new $t,t=new Zt(new Tr(.75,0),lt(9278622,1711394,.2));return t.scale.set(1,.65,.9),t.position.y=.35,t.rotation.y=.6,i.add(t),i.add(ke(.32,lt(10134189),.6,.2,.3,1,.7,1,6)),i.add(ke(.35,lt(7319103),-.1,.72,0,1.2,.25,1,6)),Mn(i)}function kr(i=1){let t=new $t;t.add(de(.18*i,.25*i,1.6*i,lt(9065776),0,.8*i,0,7));let e=lt(5025616,670224,.2);return t.add(ke(1.1*i,e,0,2.2*i,0,1,.9,1,9)),t.add(ke(.8*i,lt(6734426),.5*i,2.7*i,.2*i,1,.9,1,8)),t}function Eh(i){let t=new $t;if(i==="sheep"){let e=lt(16447730);for(let[n,s,r]of[[0,.62,0],[.25,.65,.12],[-.25,.62,-.1],[.05,.75,-.15],[-.15,.72,.15]])t.add(ke(.32,e,n,s,r,1,1,1,8));t.add(ke(.2,lt(2829107),.5,.75,0,1.2,1,.9,8));for(let n of[-1,1])t.add(ke(.08,lt(2829107),.48,.88,n*.18,1,.5,1.4,6));for(let[n,s]of[[.25,.15],[.25,-.15],[-.25,.15],[-.25,-.15]])t.add(de(.05,.05,.4,lt(2829107),n,.2,s,6))}else if(i==="cow"){let e=lt(16777215),n=lt(2829107);t.add(Bt(1.4,.75,.8,e,0,.95,0)),t.add(Bt(.5,.45,.82,n,-.25,1.05,0)),t.add(Bt(.3,.35,.82,n,.4,.9,0)),t.add(Bt(.5,.5,.5,e,.85,1.25,0)),t.add(Bt(.2,.28,.46,lt(16752564),1.15,1.13,0));for(let s of[-1,1])t.add(Bt(.1,.12,.18,lt(16115400),.85,1.58,s*.22));for(let[s,r]of[[.5,.28],[.5,-.28],[-.5,.28],[-.5,-.28]])t.add(Bt(.16,.6,.16,e,s,.3,r))}else{t.add(ke(.26,lt(16777215),0,.35,0,1.2,1,1,8)),t.add(ke(.15,lt(16777215),.25,.6,0,1,1,1,8)),t.add(Bt(.1,.12,.04,lt(15222847),.25,.78,0)),t.add(Bt(.1,.05,.06,lt(16755251),.42,.6,0));for(let e of[-1,1])t.add(de(.02,.02,.2,lt(16755251),0,.1,e*.1,4))}return Mn(t)}function wh(){let i=new $t;i.add(Bt(4.2,2.6,3.4,lt(16774112),0,1.3,0));let t=new si([new at(-2.5,0),new at(2.5,0),new at(0,1.8)]),e=new zi(t,{depth:3.8,bevelEnabled:!1});e.translate(0,2.6,-1.9),i.add(new Zt(e,lt(4156356))),i.add(Bt(.9,1.5,.08,lt(10510381),0,.75,1.72));for(let n of[-1.3,1.3])i.add(Bt(.8,.7,.08,lt(12577023,4892376,.3),n,1.6,1.72));return i.add(Bt(.5,1.1,.5,lt(11881018),1.2,4,-.5)),Mn(i)}function Th(){let i=new $t;i.add(de(.9,1.4,6,lt(16774112),0,3,0,10)),i.add(new Zt(new gs(1.2,1.4,10),lt(14235198)).translateY(6.7));let t=Mn(i),e=new $t;e.position.set(0,5.8,1.15);for(let n=0;n<4;n++){let s=Bt(.5,3.2,.06,lt(16447210),0,1.6,0),r=new $t;r.rotation.z=n*Math.PI/2,r.add(s),e.add(r)}return t.add(e),t.userData.blades=e,t}function pA(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d");t.fillStyle="#6cc04a",t.fillRect(0,0,256,256);for(let n=0;n<1400;n++){let s=Math.random();t.fillStyle=s<.5?"rgba(80,160,50,0.6)":s<.85?"rgba(140,215,90,0.6)":"rgba(255,255,255,0.5)",t.fillRect(Math.random()*256,Math.random()*256,2,s<.97?3:2)}let e=new vn(i);return e.wrapS=e.wrapT=Li,e.colorSpace=Ae,e}function gA(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.fillStyle="#b8864f",t.fillRect(0,0,128,128);for(let n=0;n<128;n+=8)t.fillStyle="rgba(120,80,40,0.35)",t.fillRect(0,n,128,3);for(let n=0;n<300;n++)t.fillStyle=Math.random()<.5?"rgba(90,60,30,0.4)":"rgba(220,180,120,0.4)",t.fillRect(Math.random()*128,Math.random()*128,2,2);let e=new vn(i);return e.wrapS=e.wrapT=Li,e.colorSpace=Ae,e}function mA(i){let t=new Qe({vertexColors:!0});return t.onBeforeCompile=e=>{e.uniforms.uTime=i.uTime,e.vertexShader=`uniform float uTime;
`+e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       #ifdef USE_INSTANCING
         float ph = instanceMatrix[3].x * 0.45 + instanceMatrix[3].z * 0.3;
         float bend = position.y * position.y * 0.06;
         transformed.x += sin(uTime * 1.6 + ph) * bend;
         transformed.z += cos(uTime * 1.3 + ph) * bend * 0.6;
       #endif`)},t}var qr=class{constructor(t,e,n){var B;this.scene=t,this.farm=e,this.root=new $t,t.add(this.root);let s=e.level;t.background=new zt(10476799),t.fog=new Fi(12577023,40,110),this.root.add(new Oi(16774358,6262586,1.7));let r=new ki(16773328,1.5);r.position.set(-10,25,12),this.root.add(r);let a=pA();a.repeat.set(s.w/4+10,s.d/4+10);let o=new Zt(new je(s.w+40,s.d+40),new Qe({map:a}));o.rotation.x=-Math.PI/2,this.root.add(o);let c=gA();for(let[V,H,F,K]of s.fields){let O=c.clone();O.needsUpdate=!0,O.repeat.set(F/3,K/3);let $=new Zt(new je(F+.6,K+.6),new Qe({map:O}));$.rotation.x=-Math.PI/2,$.position.set(V+F/2,.02,H+K/2),this.root.add($)}let l=new Zt(new On(7.5,28),lt(11569754));l.rotation.x=-Math.PI/2,l.position.set(e.pad.x-2,.015,e.pad.z),this.root.add(l),this.uniforms={uTime:{value:0}},this.crops={};let h={};for(let V of e.cells)h[V.crop]=((B=h[V.crop])!=null?B:0)+1;let u=new Xt,d=new De,p=new P(0,1,0);this.cellIndex=new Int32Array(e.cells.length),this.baseMatrix=[];for(let V of Object.keys(h)){let H=new ii(Mh(V),mA(this.uniforms),h[V]);H.frustumCulled=!1,this.crops[V]={mesh:H,n:0},this.root.add(H)}let m=new ii(bh(),new Qe({vertexColors:!0}),e.cells.length);m.frustumCulled=!1,this.stubble=m;let x=new Xt().makeScale(0,0,0);e.cells.forEach((V,H)=>{let F=this.crops[V.crop],K=Math.sin(H*12.9898)*43758.5453%1;d.setFromAxisAngle(p,K*Math.PI*2);let O=.85+Math.abs(K)*.3;u.compose(new P(V.x+(K-.5)*.12,0,V.z+(K*7%1-.5)*.12),d,new P(O,O,O)),F.mesh.setMatrixAt(F.n,u),this.cellIndex[H]=F.n,this.baseMatrix.push(u.clone()),F.n++,m.setMatrixAt(H,x)}),this.root.add(m),this.falling=[];for(let V of e.rocks){let H=Sh();H.position.set(V.x,0,V.z),H.rotation.y=V.x*1.3,this.root.add(H)}let g=[],f=[],M=s.w/2,C=s.d/2,A=(V,H,F,K)=>{let O=Math.hypot(F-V,K-H),$=Math.ceil(O/2.5);for(let it=0;it<=$;it++)g.push([V+(F-V)*it/$,H+(K-H)*it/$]);for(let it=0;it<$;it++){let ft=V+(F-V)*it/$,Rt=H+(K-H)*it/$,Wt=V+(F-V)*(it+1)/$,X=H+(K-H)*(it+1)/$;f.push([(ft+Wt)/2,(Rt+X)/2,Math.hypot(Wt-ft,X-Rt),Math.atan2(X-Rt,Wt-ft)])}};A(-M,-C,M,-C),A(-M,C,M,C),A(-M,-C,-M,C),A(M,-C,M,C);let L=new Oe(.18,1.1,.18);L.translate(0,.55,0);let E=new ii(L,lt(16777215),g.length);g.forEach(([V,H],F)=>E.setMatrixAt(F,new Xt().makeTranslation(V,0,H))),this.root.add(E);let T=new Oe(1,.1,.08),R=new ii(T,lt(16777215),f.length*2);f.forEach(([V,H,F,K],O)=>{for(let[$,it]of[[0,.5],[1,.9]])R.setMatrixAt(O*2+$,new Xt().compose(new P(V,it,H),new De().setFromAxisAngle(p,-K),new P(F,1,1)))}),this.root.add(R);let I=n.low?14:26;for(let V=0;V<I;V++){let H=V/I*Math.PI*2,F=(M+4+V%3*3)*Math.cos(H),K=(C+4+V%4*2.5)*Math.sin(H),O=kr(.9+V%3*.25);O.position.set(F,0,K),this.root.add(O)}let _=new Zt(new On(3,28),new Qe({color:5223400,emissive:1727114,emissiveIntensity:.3}));_.rotation.x=-Math.PI/2,_.position.set(M-5,.03,-C+5),_.scale.set(1.4,1,1),this.root.add(_);let w=wh();w.position.set(-M-5,0,C-8),w.rotation.y=Math.PI/2,this.root.add(w),this.windmill=Th(),this.windmill.position.set(M+6,0,C-10),this.windmill.rotation.y=-Math.PI/2,this.root.add(this.windmill);let G=Or();if(G.position.set(e.barn.x,0,e.barn.z),this.root.add(G),this.root.add(Object.assign(Ch(e.pad.w,e.pad.d),{}).translateX(e.pad.x).translateZ(e.pad.z)),this.arrow=yh(),this.arrow.position.set(e.pad.x,1.5,e.pad.z),this.arrow.visible=!1,this.root.add(this.arrow),this.stacks=new $t,this.stacks.position.set(e.barn.x+4.6,0,e.barn.z+3.6),this.root.add(this.stacks),e.pen){let V=e.pen,H=lt(10510381),F=[],K=(it,ft,Rt,Wt)=>{let X=Math.hypot(Rt-it,Wt-ft);for(let xt of[.4,.8]){let st=new Oe(X,.12,.1);st.rotateY(-Math.atan2(Wt-ft,Rt-it)),st.translate((it+Rt)/2,xt,(ft+Wt)/2),F.push(st)}let et=Math.ceil(X/1.5);for(let xt=0;xt<=et;xt++){let st=new Oe(.14,1,.14);st.translate(it+(Rt-it)*xt/et,.5,ft+(Wt-ft)*xt/et),F.push(st)}},O=Math.min(3,V.w/2);K(V.x,V.z,V.x+(V.w-O)/2,V.z),K(V.x+(V.w+O)/2,V.z,V.x+V.w,V.z),K(V.x,V.z+V.d,V.x+V.w,V.z+V.d),K(V.x,V.z,V.x,V.z+V.d),K(V.x+V.w,V.z,V.x+V.w,V.z+V.d),this.root.add(new Zt(Is(F),H));let $=new Zt(new On(Math.min(V.w,V.d)*.4,20),lt(15254106));$.rotation.x=-Math.PI/2,$.position.set(V.x+V.w/2,.03,V.z+V.d/2),this.root.add($),this.penSign={x:V.x+V.w/2,z:V.z-.5}}this.animals=e.animals.map(V=>{let H=Eh(V.kind);return this.root.add(H),H})}cut(t){for(let e of t)this.falling.push({i:e,t:0})}update(t,e){if(this.uniforms.uTime.value=e,this.windmill&&(this.windmill.userData.blades.rotation.z=e*.6),this.falling.length){let n=new Xt,s=new Xt,r=new Set;this.falling=this.falling.filter(a=>{a.t+=t;let o=this.farm.cells[a.i],c=this.crops[o.crop],l=Math.min(1,a.t/.22);if(l>=1){c.mesh.setMatrixAt(this.cellIndex[a.i],n.makeScale(0,0,0));let h=.9+a.i*7%5*.05;this.stubble.setMatrixAt(a.i,n.compose(new P(o.x,0,o.z),new De().setFromAxisAngle(new P(0,1,0),a.i),new P(h,h,h))),this.stubble.instanceMatrix.needsUpdate=!0}else s.makeRotationZ(l*1.2).premultiply(new Xt().makeScale(1+l*.3,1-l*.85,1+l*.3)),n.multiplyMatrices(this.baseMatrix[a.i],s),c.mesh.setMatrixAt(this.cellIndex[a.i],n);return r.add(c.mesh),l<1});for(let a of r)a.instanceMatrix.needsUpdate=!0}this.farm.animals.forEach((n,s)=>{let r=this.animals[s];r.position.set(n.x,Math.abs(Math.sin(e*6+s))*(Math.hypot(n.vx,n.vz)>.3?.08:0),n.z),r.rotation.y=-n.heading}),this.arrow.visible=this.farm.full,this.arrow.position.y=1.5+Math.abs(Math.sin(e*4))*.7}dispose(){this.scene.remove(this.root),this.root.traverse(t=>{t.geometry&&t.geometry.dispose()})}};function Vh(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,c]of Object.entries(t))try{let l=atob(c.split(",")[1]),h=new Uint8Array(l.length);for(let d=0;d<l.length;d++)h[d]=l.charCodeAt(d);let u=a.ctx.decodeAudioData(h.buffer,d=>{a._smp[o]=d},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let c=this.ctx;if(c&&c.state==="running"&&!this.muted&&this.on!==!1){r(this);let l=this._smp&&this._smp[a];if(l){let h=c.createBufferSource(),u=c.createGain();h.buffer=l,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||c.destination),h.start(c.currentTime+.005);return}}return n.call(this,a,o)}}function Rh(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let c=a.ctx;fetch(o).then(l=>l.ok?l.arrayBuffer():Promise.reject()).then(l=>c.decodeAudioData(l)).then(l=>{if(a.ctx!==c)return;let h=c.createBufferSource(),u=c.createGain();h.buffer=l,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||c.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var Ph={coin:"data:audio/mpeg;base64,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",pour:"data:audio/mpeg;base64,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XaaCdw0ohU3BJJLY0iQQPFaev9WXTOCFRUPrb5Fm4scZzQwwDuDQj2wpQjj/+zjEwwALUOVZrCRj0ViYbX2TDLpGdmarMSVOUif+Sw25ZE8zCq8CbFwafnq7DxdRyuKBQegNDFW4xP924MriiQBGpJftGAAAFG084LXx1fHPFy2qUNV4RfJeoL0TPlJRXN6+lt8py6q9tU4mP4bQeuYLXJlV9TI4tcs8U8JJGtFmLqZTZgJJCMJXCyeTTU20YVA4/sgEWO5IwQAAjGesyaNS5qXh+Ztf6TSog9Ke4llVlQ4ZkJjGzWHqscvjdUvKMUO7H7SMpeU1jH+fJb8T2aMx/8P4UO//+zjEzAALIIFJ6ZhhyVoT63TDDSrSi+mu5Kxf9ILfDGpdjUKTdPpNQwovgAEi1vfWXSrGfr3KK/l3mGMfeGKiDHdiq+JZ8bx1GNnxo1k3QILEke8SATEdXPRzVNqRMaUcRnIe3NVymNz0zZ/k/d/b9mZq3/9tfOyhV0r5ARCW4OjAaBlwk3B2MPPZUtT1ubUAAKQQAAABhL2BBjwrtsx0FVJZSKkmyj3BV862mK6r4EqkN+FbcF823PxNjFRNa42mm1pQhcKAbq8xHM8L/8/4zv0YNeaOdqT/+zjE1YAKIMFLp4BmEVOvZ7SAj5mOElrScJBWTNYVvj/ed3j/x6aco7JO4IM0Egxs+c+1syWtBpS83pSn1n0RxwsbGfif0r0Io9W4dfmut+uMWznGtfxL3f7/zf/rphm8rDFXl0uXJzcWLxmoRBNGRRMKSAViKheFHdNiiuBWQ3wXoLwK6N8F//yOi/ibw4K8FhO//8F8K/J4KwM4N+LiKhNmxft8J4KwE+FHRWwV3Dv///oLw7gU8F6KTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE5AAK4YszRYRjwZWf44qwYABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE5wAUQXko2PeAATAAW5+AMAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",done:"data:audio/mpeg;base64,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FW9Z04wnSxtTtw7y1611CteufbH/+tf////9X4frhtZXPM9HjyGz/0sxTGYosCEm5AVBVwiPA0HVgqVBWDURP1nVHoNf/rO9P+IvO//lv9XWGuW/56VVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE8AIMgL0WR+hwQV6X5FqS8ABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE84AXNXkvOYeACKKAHk+GMABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",rock:"data:audio/mpeg;base64,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",penned:"data:audio/mpeg;base64,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625ppZjoYmnENkdUz8jJlZbFOe+bRrnewu7HSVc01nlbnSPI/2kMUHUlSV7/+zjE24AKTGVTR5jAIVUgqWWEjDw8Wl5kRnW9mlHgYhRRWAEIC+ABRNtQFcftaXhKJ+RCSKgViqPCQVWnVOSckjDomxpH5VzXNnHyt1rNRkackFEqAibmy+65HwU0O2GK4wUSqopN5qVPZj2Ofl+1+lDtVxMkp7lpFKlHo9JKgsSOQKWllQApyNNQFRKsip7JcOtlKgPkfb8s0NeZbkqGWAqU2UKJWCNiZmYsv01UYTWHVPKHm9309wwrtchlSqGM/+OBUb+tp7/VAQl/ou6TjXp9rrbwSx7/+zjE6QMLAKM+LDDBgayl5oWWDTiavPKgWIOBaSmpEAIM3geTJUvBpmNw7zQvJ60HnoZUtMGaB0iEhGDi5ZBqjR0zpM689Dd5PiECbcPhPLuFC5FUnoUitsZLKJ9n3RMuiXb3u2d+qspKh6pO+lfn5t1bFXcNmOuznytH//Uff7jnx99x5wAAkgADoV4K8Ig/WiGhY9gXB/KaCxgSZxLRfT5oAyg5hDS4VyomLnFkkaTxkmfdA0FvDjwsIDkyAkyaF4uNNFMHqi4y4MMMiCUzJMumKBt00FP/+zjE6IALFPM7J5hpwYqiZeDzDXgw7RkyGDJDMEPGRGTSWiipJJadDWmm8ghePLLRNlgrFx2qSSdFdK237sVCLmBWJxZVJ84VjRi0k6K6SnRXSUu90//mZeKxokaG5mVy4iWi+d6WYolmKLADVFUBErszbBmbVVhQEpYGoiDqwVKgqoGoNPKuKhriL/Br/ET9Ya4ifrDXEX+rzv+GuWVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE7AIIGKEm5IhlwgktoUKwsAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE7AAVFXUmuPiACMuFnAuGIABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",buy:"data:audio/mpeg;base64,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"};var AA="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Ie=null,Hr=!1;function Lh(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function yc(){Lh(),Hr=!0;try{if(Ie||(Ie=document.createElement("audio"),Ie.src=AA,Ie.loop=!0,Ie.preload="auto",Ie.setAttribute("playsinline",""),Ie.setAttribute("webkit-playsinline",""),Ie.setAttribute("x-webkit-airplay","deny"),Ie.volume=.01,Ie.addEventListener("pause",()=>{Hr&&!document.hidden&&setTimeout(()=>Hr&&Ie.paused&&Ie.play().catch(()=>{}),300)})),Ie.paused){let i=Ie.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function Uh(){Hr=!1;try{Ie&&!Ie.paused&&Ie.pause()}catch{}}function Dh(i,t){Lh();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var Gr=i=>440*Math.pow(2,(i-69)/12),xA=[[43,[55,59,62,67]],[48,[55,60,64,67]],[50,[57,62,66,69]],[52,[55,59,64,67]],[43,[55,59,62,67]],[48,[55,60,64,67]],[50,[57,62,66,69]],[43,[55,59,62,67]]],CA=[[0,0,74],[0,4,71],[0,6,74],[1,0,76],[1,4,72],[2,0,74],[2,3,78],[2,6,76],[3,0,71],[3,4,67],[4,0,74],[4,2,76],[4,4,79],[5,0,76],[5,4,72],[6,0,74],[6,4,78],[7,0,79],[7,4,74]],yA=[0,2,1,3,0,2,1,3],Wi=class{constructor(){this.ctx=null,this.muted=!1,this.mode="off",this.plucks=new Map,this.cutRate=0}unlock(){if(yc(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;Dh(this.ctx,()=>!!(this.held||this._held)),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.42,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master);let s=e.createDelay(.6);s.delayTime.value=.31;let r=e.createGain();r.gain.value=.2;let a=e.createGain();a.gain.value=.16,this.music.connect(s),s.connect(r).connect(s),s.connect(a).connect(this.master);let o=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),c=o.getChannelData(0);for(let l=0;l<c.length;l++)c[l]=Math.random()*2-1;this.noiseBuf=o,this._timer=setInterval(()=>this._schedule(),30),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_silentTick(){try{let t=this.ctx,e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01;let e=t.play();e&&e.then&&e.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){Uh(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){yc(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(t,e){this.mode===t&&!e||(this.mode=t,this.ctx&&(this.tempo=t==="farm"?92:80,this.step=0,this.nextTime=this.ctx.currentTime+.12,t!=="farm"&&this.engine(!1)))}dispose(){clearInterval(this._timer),this.ctx&&this.ctx.close(),this.ctx=null}_pluckBuffer(t){if(this.plucks.has(t))return this.plucks.get(t);let e=this.ctx,n=e.sampleRate,s=Math.floor(n*2.2),r=e.createBuffer(1,s,n),a=r.getChannelData(0),o=Math.max(2,Math.round(n/Gr(t))),c=new Float32Array(o);for(let u=0;u<o;u++)c[u]=(Math.random()*2-1)*.6;let l=0,h=.996-Math.max(0,t-60)*4e-4;for(let u=0;u<s;u++){let d=(l+1)%o,p=(c[l]+c[d])*.5*h;a[u]=c[l],c[l]=p,l=d}return this.plucks.set(t,r),r}pluck(t,e,n=.25,s=this.music){let r=this.ctx.createBufferSource();r.buffer=this._pluckBuffer(t);let a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=3200;let o=this.ctx.createGain();o.gain.value=n,r.connect(a).connect(o).connect(s),r.start(e),r.stop(e+2.2)}_tone(t,e,n,s,r,a=this.sfx,o=.005){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,n);let h=c.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),l.connect(h).connect(a),l.start(n),l.stop(n+s+.05),l}_noise(t,e,n,s,r,a=1,o=this.sfx,c){let l=this.ctx,h=l.createBufferSource();h.buffer=this.noiseBuf;let u=l.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),c&&u.frequency.exponentialRampToValueAtTime(c,t+e),u.Q.value=a;let d=l.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(n,t+Math.min(.01,e/4)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(d).connect(o),h.start(t,Math.random()*.5),h.stop(t+e+.05)}_slide(t,e,n,s,r,a,o=this.sfx){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,s),l.frequency.exponentialRampToValueAtTime(n,s+r);let h=c.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),l.connect(h).connect(o),l.start(s),l.stop(s+r+.05)}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||this.mode==="off")return;let e=t.currentTime+.2,n=60/this.tempo/2,s=this.mode==="farm";for(;this.nextTime<e;){let r=this.nextTime,a=this.step%64,o=Math.floor(a/8),c=a%8,[l,h]=xA[o];c===0&&this.pluck(l,r,.35),c===4&&this.pluck(l+7,r,.22),this.pluck(h[yA[c]],r,c%2?.11:.15);for(let[u,d,p]of CA)u===o&&d===c&&this.pluck(p,r+.01,s?.24:.18);if(s&&c%2===1&&this._noise(r,.05,.025,"highpass",6e3,.7,this.music),c===3&&Math.random()<.12){let u=2200+Math.random()*1200;this._slide("sine",u,u*1.4,r,.12,.03,this.music),this._slide("sine",u*1.2,u*.9,r+.15,.1,.025,this.music)}this.step++,this.nextTime+=n}}engine(t){if(!this.ctx)return;let e=this.ctx;if(t&&!this._eng){let n=e.createOscillator();n.type="square";let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=260;let r=e.createGain();r.gain.value=1e-4;let a=e.createOscillator();a.frequency.value=9;let o=e.createGain();o.gain.value=.02,a.connect(o).connect(r.gain),n.connect(s).connect(r).connect(this.sfx),n.start(),a.start(),this._eng={o:n,lp:s,g:r,lfo:a}}else if(!t&&this._eng){let n=this._eng;n.g.gain.setTargetAtTime(1e-4,e.currentTime,.1),n.o.stop(e.currentTime+.5),n.lfo.stop(e.currentTime+.5),this._eng=null}}engineUpdate(t,e){if(!this._eng||!this.ctx)return;let n=this.ctx.currentTime;this._eng.o.frequency.setTargetAtTime(48+t*9,n,.1),this._eng.lfo.frequency.setTargetAtTime(7+t*2.5,n,.1),this._eng.lp.frequency.setTargetAtTime(220+t*60+(e?120:0),n,.1),this._eng.g.gain.setTargetAtTime(.03+t*.008,n,.15)}cutting(t){if(!this.on||t<=0)return;let e=this.ctx.currentTime;this._lastCut&&e-this._lastCut<.045||(this._lastCut=e,this._noise(e,.07,Math.min(.12,.04+t*.012),"bandpass",2400+Math.random()*900,1.4),this._noise(e,.04,.05,"highpass",5e3,.7))}play(t,e){if(!this.on)return;let n=this.ctx.currentTime+.005,s=this.sfx;switch(t){case"full":this._tone("square",392,n,.18,.06),this._tone("square",392,n+.25,.25,.06),this._tone("square",330,n+.25,.25,.05);break;case"pour":this._noise(n,1,.12,"bandpass",1500,.6,s,600);break;case"coin":{let r=84+(e!=null?e:0)%8*2;this._tone("sine",Gr(r),n,.22,.09),this._tone("sine",Gr(r+7),n+.05,.2,.06);break}case"rock":this._tone("sine",140,n,.2,.25),this._noise(n,.12,.15,"lowpass",700);break;case"sheep":{let r=this._tone("sawtooth",380,n,.55,.05),a=this.ctx.createOscillator();a.frequency.value=7;let o=this.ctx.createGain();o.gain.value=25,a.connect(o).connect(r.frequency),a.start(n),a.stop(n+.6);break}case"cow":this._slide("sawtooth",150,105,n,.9,.06),this._slide("sine",300,210,n,.9,.04);break;case"chicken":for(let r=0;r<3;r++)this._slide("square",900,650,n+r*.09,.07,.03);break;case"penned":[79,83,86,91].forEach((r,a)=>this.pluck(r,n+a*.07,.3,s));break;case"done":[[67,0],[71,.15],[74,.3],[79,.45],[83,.7],[86,.9]].forEach(([r,a])=>this.pluck(r,n+a,.4,s)),this._noise(n+.9,1.4,.05,"bandpass",1600,.5);break;case"buy":[84,88,91,96].forEach((r,a)=>this._tone("sine",Gr(r),n+a*.06,.3,.08));break;case"tap":this._tone("sine",880,n,.06,.05);break;case"no":this._tone("square",220,n,.12,.05),this._tone("square",196,n+.13,.14,.05);break;default:}}};Vh(Wi,Ph);Rh(Wi);var Nh={title:["\u0645\u0632\u0631\u0639\u062A\u064A \u0627\u0644\u0633\u0639\u064A\u062F\u0629","Happy Farm"],farm:["\u0645\u0632\u0631\u0639\u0629","Farm"],pick:["\u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u0645\u0632\u0631\u0639\u0629","Choose a farm"],shed:["\u0645\u062E\u0632\u0646 \u0627\u0644\u0639\u062F\u0629","Tool shed"],exit:["\u062E\u0631\u0648\u062C","Exit"],back:["\u0631\u062C\u0648\u0639","Back"],locked:["\u062E\u0644\u0651\u0635 \u0627\u0644\u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627","Finish the farm before"],drag:["\u062D\u0637 \u0635\u0628\u0627\u0639\u0643 \u0648\u0627\u0633\u062D\u0628 \u0639\u0634\u0627\u0646 \u062A\u0633\u0648\u0642","Touch and drag to drive"],full:["\u0627\u0644\u0645\u0642\u0637\u0648\u0631\u0629 \u0627\u062A\u0645\u0644\u062A! \u0641\u0636\u0651\u064A\u0647\u0627 \u0639\u0646\u062F \u0627\u0644\u0645\u062E\u0632\u0646","Trailer full! Empty it at the barn"],emptied:["\u0641\u0636\u0651\u064A\u062A\u0647\u0627! \u064A\u0644\u0627 \u0646\u0643\u0645\u0651\u0644","Emptied! Back to work"],rock:["\u062D\u062C\u0631! \u0644\u0641 \u062D\u0648\u0627\u0644\u064A\u0647","A rock! Go around it"],herd:["\u0648\u062F\u0651\u064A \u0627\u0644\u062D\u064A\u0648\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0638\u064A\u0631\u0629","Guide the animals to their pen"],penned:["\u0631\u062C\u0639 \u0627\u0644\u0628\u064A\u062A!","Home safe!"],allPenned:["\u0643\u0644 \u0627\u0644\u062D\u064A\u0648\u0627\u0646\u0627\u062A \u0641\u064A \u0627\u0644\u062D\u0638\u064A\u0631\u0629!","Every animal is home!"],done:["\u062E\u0644\u0651\u0635\u062A \u0627\u0644\u0645\u0632\u0631\u0639\u0629!","Farm finished!"],coinsEarned:["\u0627\u0644\u0639\u0645\u0644\u0627\u062A","Coins"],made:["\u0627\u0644\u0644\u064A \u0627\u062A\u0639\u0645\u0644","You made"],flour:["\u062F\u0642\u064A\u0642","Flour"],hay:["\u0628\u0627\u0644\u0627\u062A \u0642\u0634","Hay bales"],corn:["\u0630\u0631\u0629","Corn"],seeds:["\u0628\u0630\u0648\u0631","Seeds"],animals:["\u0627\u0644\u062D\u064A\u0648\u0627\u0646\u0627\u062A","Animals"],next:["\u0627\u0644\u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u062C\u0627\u064A\u0629","Next farm"],again:["\u062A\u0627\u0646\u064A","Again"],map:["\u0627\u0644\u062E\u0631\u064A\u0637\u0629","Map"],newFarm:["\u0645\u0632\u0631\u0639\u0629 \u062C\u062F\u064A\u062F\u0629 \u0627\u062A\u0641\u062A\u062D\u062A!","New farm unlocked!"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","Paused"],resume:["\u0643\u0645\u0651\u0644","Continue"],restart:["\u0645\u0646 \u0627\u0644\u0623\u0648\u0644","Restart"],max:["\u0627\u0644\u0623\u0642\u0635\u0649","Max"],needMore:["\u0645\u062D\u062A\u0627\u062C \u0639\u0645\u0644\u0627\u062A \u0623\u0643\u062A\u0631 \u2014 \u0627\u062D\u0635\u062F \u0648\u0628\u064A\u0639!","Need more coins \u2014 harvest and sell!"],bought:["\u0627\u062A\u0631\u0643\u0651\u0628\u062A!","Installed!"],loading:["\u0628\u0646\u062C\u0647\u0651\u0632 \u0627\u0644\u0645\u0632\u0631\u0639\u0629...","Getting the farm ready..."],noWebgl:["\u0627\u0644\u062C\u0647\u0627\u0632 \u062F\u0647 \u0645\u0634 \u0628\u064A\u0634\u063A\u0651\u0644 \u0627\u0644\u0644\u0639\u0628\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F.","This device cannot run the 3D game."],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"]},Ms="ar",Fh=i=>{Ms=i==="en"?"en":"ar"},Xi=()=>Ms,Yt=i=>Nh[i]?Nh[i][Ms==="en"?1:0]:i,me=i=>Ms==="en"?String(i):String(i).replace(/[0-9]/g,t=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[t]),Wr=i=>Ms==="en"?i.en:i.ar;var zh=`
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
`;function ht(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var _A=()=>{var i,t;return((i=navigator.deviceMemory)!=null?i:4)<=3||((t=navigator.hardwareConcurrency)!=null?t:4)<=4},vA=()=>{try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}},Xr;function IA(){if(Xr)return Xr;let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.6,"rgba(255,255,255,0.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.beginPath(),t.arc(16,16,16,0,Math.PI*2),t.fill(),Xr=new vn(i),Xr}var bs=class{constructor(t,e,n,s){this.n=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.g=new ve,this.g.setAttribute("position",new xe(this.pos,3)),this.pts=new Ir(this.g,new ds({color:s,size:n,map:IA(),alphaTest:.2,sizeAttenuation:!0,transparent:!0,depthWrite:!1})),this.pts.frustumCulled=!1,t.add(this.pts),this.i=0;for(let r=0;r<e;r++)this.pos[r*3+1]=-99}emit(t,e,n,s,r,a,o=.8){let c=this.i++%this.n;this.pos.set([t,e,n],c*3),this.vel.set([s,r,a],c*3),this.life[c]=o}update(t,e=9){for(let n=0;n<this.n;n++)if(!(this.life[n]<=0)){this.life[n]-=t,this.vel[n*3+1]-=e*t;for(let s=0;s<3;s++)this.pos[n*3+s]+=this.vel[n*3+s]*t;(this.life[n]<=0||this.pos[n*3+1]<0)&&(this.life[n]=0,this.pos[n*3+1]=-99)}this.g.attributes.position.needsUpdate=!0}},_c=class{constructor(t,e,n){if(this.el=t,this.post=n||(()=>{}),Fh(e.lang),this.save=ph(e.save),this.base=e.base||"./",this.sound=new Wi,this.sound.muted=!!this.save.muted,this.quality={low:_A()},document.getElementById("hf-style")||document.head.append(ht("style",{id:"hf-style",text:zh})),this.root=ht("div",{class:"hf-root",dir:Xi()==="en"?"ltr":"rtl"}),t.append(this.root),this._unit(),!vA()){this.root.append(ht("div",{class:"hf-loading"},ht("div",{},Yt("noWebgl")," ",ht("button",{class:"hf-btn",onclick:()=>this.post({type:"exit"})},Yt("exit")))));return}this.loading=ht("div",{class:"hf-loading"},Yt("loading")),this.root.append(this.loading),this.renderer=new vr({antialias:!this.quality.low,powerPreference:"high-performance"}),this.maxPR=Math.min(window.devicePixelRatio||1,this.quality.low?1.25:1.5),this.pr=this.maxPR,this.renderer.setPixelRatio(this.pr),this.renderer.outputColorSpace=Ae,this.renderer.toneMapping=ic,this.renderer.toneMappingExposure=1.05,this.root.prepend(this.renderer.domElement),this.layer=ht("div",{class:"hf-layer"}),this.root.append(this.layer),this.camera=new Ve(45,1,.5,300),this.input={x:0,z:0,pointer:null,ox:0,oy:0,keys:new Set},this.mode="menu",this.paused=!1,this._bind(),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this.frames=[],this.goodWin=0,this.clock=new Pr,this._fonts().then(()=>{this.loading.remove(),this._buildShowcase(),this.showMap(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"}),new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-Bold.ttf)`,{weight:"700"})];await Promise.race([Promise.all(t.map(e=>e.load().then(n=>document.fonts.add(n)))),new Promise(e=>setTimeout(e,900))])}catch{}}_unit(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.root.style.setProperty("--u",`${Math.min(this.cw,this.ch)/100}px`),this.root.classList.toggle("hf-land",this.cw>this.ch*1.15)}_resize(){this._unit(),this.renderer&&(this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.fov=this.cw<this.ch?58:42,this.camera.updateProjectionMatrix())}_bind(){let t=this.root;for(let n of["pointerdown","pointerup","touchend","click","keydown"])t.addEventListener(n,()=>this.sound.unlock(),{capture:!0,passive:!0});this.joy=ht("div",{class:"hf-joy"},ht("i")),t.append(this.joy),t.addEventListener("pointerdown",n=>{if(n.target.closest("button")||this.mode!=="play"||this.paused||this.input.pointer!==null)return;this.input.pointer=n.pointerId,this.input.ox=n.clientX,this.input.oy=n.clientY;let s=t.getBoundingClientRect();this.joy.style.left=`${n.clientX-s.left}px`,this.joy.style.top=`${n.clientY-s.top}px`,this.joy.style.display="block",this.joy.firstChild.style.transform="translate(0,0)";try{t.setPointerCapture(n.pointerId)}catch{}}),t.addEventListener("pointermove",n=>{if(n.pointerId!==this.input.pointer)return;let r=Math.min(this.cw,this.ch)/100*12,a=n.clientX-this.input.ox,o=n.clientY-this.input.oy,c=Math.hypot(a,o);c>r&&(a=a/c*r,o=o/c*r),this.input.x=a/r,this.input.z=o/r,this.joy.firstChild.style.transform=`translate(${a}px,${o}px)`});let e=n=>{n.pointerId===this.input.pointer&&(this.input.pointer=null,this.input.x=0,this.input.z=0,this.joy.style.display="none")};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("click",n=>{n.target.closest("button")&&this.sound.play("tap")},!0),this._onKey=n=>{let s=n.key.toLowerCase();n.type==="keydown"?(this.input.keys.add(s),this.mode==="play"&&(s==="escape"||s==="p")&&this.pause()):this.input.keys.delete(s),this.mode==="play"&&s.startsWith("arrow")&&n.preventDefault()},window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._onVis=()=>{document.hidden?(this.mode==="play"&&this.pause(),this.sound.suspend()):this.paused||this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=ht("button",{class:"hf-soundpill",onclick:n=>{n.stopPropagation(),this.sound.unlock()}},Yt("sound")),t.append(this.soundPill),this._tapped=!1,t.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden&&!this.paused?"block":"none"},700)}_readInput(){let t=this.input.keys,e=this.input.x,n=this.input.z;return(t.has("arrowleft")||t.has("a"))&&(e=-1),(t.has("arrowright")||t.has("d"))&&(e=1),(t.has("arrowup")||t.has("w"))&&(n=-1),(t.has("arrowdown")||t.has("s"))&&(n=1),{x:e,z:n}}_clear(){this.layer.replaceChildren()}_saveNow(){this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}_coins(){return this.coinEl=ht("span",{},me(this.save.coins)),ht("div",{class:"hf-pill"},ht("span",{class:"hf-coin"}),this.coinEl)}_mute(t){let e=ht("button",{class:"hf-round",style:t,"aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return e.addEventListener("click",n=>{n.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,this._saveNow(),e.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),e}_toastEl(){return this.toastEl=ht("div",{class:"hf-toast"}),this.toastEl}toast(t,e=1.6){this.toastEl&&(this.toastEl.textContent=t,this.toastEl.classList.add("show"),clearTimeout(this._tt),this._tt=setTimeout(()=>this.toastEl&&this.toastEl.classList.remove("show"),e*1e3))}_buildShowcase(){let t=new hs;t.background=new zt(10476799),t.fog=new Fi(12577023,30,90),t.add(new Oi(16774358,6262586,1.8));let e=new ki(16773328,1.4);e.position.set(-8,20,10),t.add(e);let n=new Zt(new On(80,40),lt(7127114));n.rotation.x=-Math.PI/2,t.add(n);let s=new Zt(new je(14,10),lt(15909198,6965760,.25));s.rotation.x=-Math.PI/2,s.position.set(-6,.3,-9),t.add(s);let r=Or();r.position.set(9,0,-8),r.rotation.y=-.5,t.add(r);for(let c=0;c<16;c++){let l=c/16*Math.PI*2,h=kr(.9+c%3*.3);h.position.set(Math.cos(l)*(20+c%3*4),0,Math.sin(l)*(16+c%4*3)-6),t.add(h)}let a=xc(2.2);this.showCombine=new $t,this.showCombine.add(a.root);let o=Cc();o.root.position.x=-3.4,o.setFill(.7),this.showCombine.add(o.root),this.showReel=a.reel,t.add(this.showCombine),this.showcase=t}showMap(){this._endFarm(),this.mode="menu",this.sound.setMode("menu"),this._clear();let t=kn.map((e,n)=>{var a;let s=n+1>this.save.unlocked,r=(a=this.save.stars[e.id])!=null?a:0;return ht("button",{class:`hf-node${s?" lock":""}${n+1===this.save.unlocked?" next":""}`,"aria-label":`${Yt("farm")} ${e.id} ${Wr(e)}`,title:Wr(e),onclick:()=>{if(s){this.sound.play("no"),this.toast(Yt("locked"));return}this.startFarm(n)}},s?"\u{1F512}":me(e.id),ht("span",{class:"stars"},s?"":"\u2B50".repeat(r)+"\u2606".repeat(3-r)))});this.layer.append(ht("button",{class:"hf-round",style:"top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)","aria-label":Yt("exit"),onclick:()=>this.post({type:"exit"})},Xi()==="en"?"\u2190":"\u2192"),ht("div",{class:"hf-top"},this._coins()),ht("div",{class:"hf-dim",style:"background:none"},ht("div",{class:"hf-panel",style:"background:rgba(255,247,230,.9)"},ht("div",{class:"hf-logo"},"\u{1F69C} ",Yt("title")),ht("div",{style:"font-weight:900;font-size:calc(var(--u)*4)"},Yt("pick")),ht("div",{class:"hf-map"},t),ht("button",{class:"hf-btn wood",style:"margin-top:calc(var(--u)*3)",onclick:()=>this.showShed()},"\u{1F3DA}\uFE0F ",Yt("shed")))),this._mute("bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)"),this._toastEl())}showShed(){this.mode="shed",this.sound.setMode("menu"),this._clear();let t=(n,s)=>n.id==="barn"?`+${me(s)}%`:n.id==="trailer"?me(s):`${me(Math.round(s*100)/100)} ${Xi()==="en"?n.unit:n.unit==="m"?"\u0645":"\u0645/\u062B"}`,e=Fr.map(n=>{let s=this.save.up[n.id],r=s>=vs,a=mc(n.id,s);return ht("div",{class:"hf-card"},ht("div",{class:"ic"},n.icon),ht("div",{class:"nm"},Wr(n)),ht("div",{class:"sb"},n.sub[Xi()==="en"?1:0]),ht("div",{class:"pips"},Array.from({length:vs},(o,c)=>ht("span",{class:`pip${c<s?" on":""}`}))),ht("div",{class:"st"},r?t(n,In(n.id,s)):`${t(n,In(n.id,s))} \u2190 ${t(n,In(n.id,s+1))}`),ht("button",{class:"hf-btn",disabled:r||this.save.coins<a,onclick:()=>{gh(this.save,n.id)==="bought"?(this.sound.play("buy"),this._saveNow(),this.showShed(),this.toast(Yt("bought"),1)):(this.sound.play("no"),this.toast(Yt("needMore"),2))}},r?Yt("max"):ht("span",{style:"display:inline-flex;align-items:center;gap:calc(var(--u)*1)"},ht("span",{class:"hf-coin"}),me(a))))});this.layer.append(ht("button",{class:"hf-round",style:"top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)","aria-label":Yt("back"),onclick:()=>this.showMap()},Xi()==="en"?"\u2190":"\u2192"),ht("div",{class:"hf-dim",style:"background:none"},ht("div",{class:"hf-panel"},ht("div",{class:"hf-title"},"\u{1F3DA}\uFE0F ",Yt("shed")),this._coins(),ht("div",{class:"hf-grid"},e))),this._toastEl())}startFarm(t){this._endFarm(),this.levelIndex=t;let e=kn[t],n=new Br(e,this.save.up),s=new hs,r=new qr(s,n,this.quality),a=xc(n.cutter);s.add(a.root);let o=Cc();s.add(o.root);let c=new bs(s,260,.22,16175978),l=new bs(s,200,.2,16763176),h=new bs(s,60,.6,15132390);this.f={farm:n,scene:s,world:r,comb:a,trailer:o,chaff:c,grain:l,smoke:h,tr:{x:n.t.x-3,z:n.t.z,heading:n.t.heading},cam:null,endT:-1,coinsAtStart:this.save.coins,cutFlash:0},this.mode="play",this.paused=!1,this.sound.setMode("farm"),this._hud(),t===0?setTimeout(()=>this.mode==="play"&&this.toast(Yt("drag"),3),600):n.animals.length&&setTimeout(()=>this.mode==="play"&&this.toast(Yt("herd"),3),600)}_endFarm(){this.f&&(this.f.world.dispose(),this.f.scene.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.f=null,this.sound.engine(!1))}_hud(){this._clear();let t=this.f;this.hud={fill:ht("i",{style:"width:0%"}),pct:ht("b",{},me(0)+"%"),animals:ht("span",{}),label:ht("div",{class:"hf-label"},"")},this.layer.append(ht("button",{class:"hf-round",style:"top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)","aria-label":Yt("paused"),onclick:e=>{e.stopPropagation(),this.pause()}},"\u23F8"),ht("div",{class:"hf-top"},this._coins(),ht("div",{class:"hf-sign"},`${Yt("farm")} ${me(t.farm.level.id)}`),ht("div",{class:"hf-bar"},this.hud.fill,ht("s",{},"\u{1F33E}"),this.hud.pct),t.farm.animals.length?ht("div",{class:"hf-pill",style:"font-size:calc(var(--u)*3.6)"},this.hud.animals):null),this.hud.label,this._mute("bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)"),this._toastEl()),this._hc={}}pause(){if(this.mode!=="play"||this.paused)return;this.paused=!0,this.input.pointer=null,this.input.x=this.input.z=0,this.joy.style.display="none",this.sound.suspend();let t=ht("div",{class:"hf-dim"},ht("div",{class:"hf-panel"},ht("div",{class:"hf-title"},Yt("paused")),ht("button",{class:"hf-btn",onclick:()=>{t.remove(),this.paused=!1,this.sound.resume()}},"\u25B6 ",Yt("resume")),ht("button",{class:"hf-btn wood",onclick:()=>{this.sound.resume(),this.startFarm(this.levelIndex)}},"\u21BB ",Yt("restart")),ht("button",{class:"hf-btn wood",onclick:()=>{this.sound.resume(),this.showMap()}},Yt("map"))));this.layer.append(t)}_floatCoin(t){let e=ht("div",{class:"hf-float",style:`left:${this.cw/2-20}px;top:${this.ch*.42}px`},`+${me(t)}`);this.layer.append(e),setTimeout(()=>e.remove(),1e3)}_farmFrame(t,e){let n=this.f,s=n.farm,r=this._readInput();s.step(t,r);let a=0;for(let C of s.events)switch(C.type){case"cut":{a+=C.cells.length,n.world.cut(C.cells);let A=s.cutterBox();for(let L=0;L<Math.min(6,C.cells.length*2);L++){let E=(Math.random()-.5)*s.cutter;n.chaff.emit(A.cx-Math.sin(A.heading)*E,.6+Math.random()*.4,A.cz+Math.cos(A.heading)*E,(Math.random()-.5)*3,2+Math.random()*3,(Math.random()-.5)*3,.9)}n.cutFlash=.3;break}case"full":this.sound.play("full"),this.toast(Yt("full"),2.4);break;case"unloadStart":this.sound.play("pour");break;case"coins":this.save.coins+=C.n,this.sound.play("coin",C.total),Math.random()<.35&&this._floatCoin(C.n);break;case"unloaded":this.toast(Yt("emptied"),1.4),this._saveNow(),this._stack();break;case"rock":this.sound.play("rock"),this.toast(Yt("rock"),1.2);break;case"penned":this.sound.play(C.kind==="cow"?"cow":C.kind==="chicken"?"chicken":"sheep"),setTimeout(()=>this.sound.play("penned"),300),this.toast(C.n===C.of?Yt("allPenned"):Yt("penned"),1.6);break;case"done":this.sound.play("done"),this.toast(Yt("done"),2),n.endT=1.6;break;default:}this.sound.cutting(a),this.sound.engine(!0),this.sound.engineUpdate(Math.abs(s.t.speed),n.cutFlash>0);for(let C of s.animals)!C.penned&&Math.hypot(C.x-s.t.x,C.z-s.t.z)<5&&Math.random()<t*.25&&this.sound.play(C.kind==="cow"?"cow":C.kind==="chicken"?"chicken":"sheep");let o=s.t;n.comb.root.position.set(o.x,Math.sin(e*18)*.02*Math.min(1,Math.abs(o.speed)),o.z),n.comb.root.rotation.y=-o.heading,n.comb.reel.rotation.z-=t*(2+Math.abs(o.speed)*2);let c=o.x-Math.cos(o.heading)*1.6,l=o.z-Math.sin(o.heading)*1.6,h=Math.atan2(l-n.tr.z,c-n.tr.x);if(n.tr.heading=h,n.tr.x=c-Math.cos(h)*2.4,n.tr.z=l-Math.sin(h)*2.4,n.trailer.root.position.set(n.tr.x,0,n.tr.z),n.trailer.root.rotation.y=-n.tr.heading,n.trailer.setFill(s.load/s.capacity),n.cutFlash=Math.max(0,n.cutFlash-t),n.cutFlash>0)for(let C=0;C<3;C++){let A=o.x-Math.cos(o.heading)*.9-Math.sin(o.heading)*.6,L=o.z-Math.sin(o.heading)*.9+Math.cos(o.heading)*.6,E=n.tr.x-A,T=n.tr.z-L;n.grain.emit(A,2.4,L,E*1.6+(Math.random()-.5)*.4,1.5,T*1.6+(Math.random()-.5)*.4,.55)}if(s.unloading)for(let C=0;C<4;C++)n.grain.emit(n.tr.x+(Math.random()-.5),1.4,n.tr.z+(Math.random()-.5),(s.pad.x-n.tr.x)*1.2,1,(s.pad.z-n.tr.z)*1.2,.6);Math.random()<t*6&&n.smoke.emit(o.x-Math.cos(o.heading)*.9+Math.sin(o.heading)*.55,2.9,o.z-Math.sin(o.heading)*.9-Math.cos(o.heading)*.55,0,1.2,0,1.2),n.chaff.update(t,7),n.grain.update(t,9),n.smoke.update(t,-.6),n.world.update(t,e);let u=this.cw<this.ch,d=o.x,p=o.z+(u?13:11),m=u?22:17;n.cam||(n.cam=new P(d,m,p)),n.cam.lerp(new P(d,m,p),Math.min(1,t*3)),this.camera.position.copy(n.cam),this.camera.up.set(0,1,0),this.camera.lookAt(n.cam.x,0,n.cam.z-(u?13:11)-1);let x=this._hc,g=Math.min(100,Math.round(s.progress*100/.95));x.pct!==g&&(x.pct=g,this.hud.fill.style.width=`${g}%`,this.hud.pct.textContent=me(g)+"%"),this.coinEl&&x.coins!==this.save.coins&&(x.coins=this.save.coins,this.coinEl.textContent=me(this.save.coins)),s.animals.length&&x.pen!==s.penned&&(x.pen=s.penned,this.hud.animals.textContent=`\u{1F411} ${me(s.penned)}/${me(s.animals.length)}`);let f=new P(n.tr.x,2.6,n.tr.z).project(this.camera);this.hud.label.style.left=`${(f.x*.5+.5)*this.cw}px`,this.hud.label.style.top=`${(-f.y*.5+.5)*this.ch}px`;let M=`${me(Math.floor(s.load))}/${me(s.capacity)}`;x.lbl!==M&&(x.lbl=M,this.hud.label.textContent=M),this.hud.label.classList.toggle("full",s.full),n.endT>=0&&(n.endT-=t,n.endT<0&&this.showResults())}_stack(){let t=this.f,e=t.world.stacks.children.length;if(e>=18)return;let n=e%2?vh(e%4===1?16447210:16241482):_h();n.position.set(e%3*1.3,Math.floor(e/6)*1,Math.floor(e%6/3)*1.3),t.world.stacks.add(n)}showResults(){let t=this.f,e=t.farm.result,n=this.levelIndex,s=t.farm.sold;for(let h of Object.keys(this.save.store))this.save.store[h]+=Math.round(s[h]);let r=mh(this.save,n,e.stars);this._saveNow(),this.mode="results",this.sound.engine(!1),this.sound.setMode("menu");let a=this.save.coins-t.coinsAtStart,o=n+1<kn.length,c=[["flour","\u{1F956}"],["hay","\u{1F33E}"],["corn","\u{1F33D}"],["seeds","\u{1F33B}"]].filter(([h])=>s[h]>=1),l=ht("div",{class:"hf-dim"},ht("div",{class:"hf-panel"},ht("div",{class:"hf-title"},"\u{1F389} ",Yt("done")),ht("div",{class:"hf-stars"},[1,2,3].map(h=>ht("span",{class:h<=e.stars?"":"off"},"\u2B50"))),ht("div",{class:"hf-pill",style:"font-size:calc(var(--u)*5.4)"},ht("span",{class:"hf-coin"}),"+",me(a)),c.length?ht("div",{style:"font-weight:900"},Yt("made")):null,c.length?ht("div",{class:"hf-made"},c.map(([h,u])=>ht("div",{},ht("b",{},u," ",me(Math.round(s[h]/10))),ht("span",{},Yt(h))))):null,e.animals?ht("div",{style:"font-weight:900"},`\u{1F411} ${Yt("animals")}: ${me(e.penned)}/${me(e.animals)}`):null,r.opened?ht("div",{style:"font-weight:900;color:#33a333"},"\u{1F389} ",Yt("newFarm")):null,ht("div",{style:"display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center"},o?ht("button",{class:"hf-btn",onclick:()=>this.startFarm(n+1)},Yt("next")," \u25B6"):null,ht("button",{class:"hf-btn wood",onclick:()=>this.showShed()},"\u{1F3DA}\uFE0F ",Yt("shed")),ht("button",{class:"hf-btn wood",onclick:()=>this.showMap()},Yt("map")))));this.layer.querySelectorAll(".hf-label").forEach(h=>h.remove()),this.layer.append(l)}_frame(){let t=Math.min(this.clock.getDelta(),.1),e=this.clock.elapsedTime;if(this._adapt(t),(this.mode==="play"||this.mode==="results")&&this.f)this.mode==="play"&&!this.paused?this._farmFrame(t,e):this.f.world.update(t,e),this.f&&this.renderer.render(this.f.scene,this.camera);else if(this.showcase){this.showCombine.rotation.y=e*.25,this.showReel.rotation.z-=t*3;let n=this.cw<this.ch;this.camera.position.set(Math.sin(e*.05)*3,n?13:9,n?20:14),this.camera.lookAt(0,1.5,0),this.renderer.render(this.showcase,this.camera)}}_adapt(t){if(this.frames.push(t),this.frames.length<90)return;let e=this.frames.reduce((n,s)=>n+s,0)/this.frames.length;this.frames.length=0,e>1/40&&this.pr>.75?(this.pr=Math.max(.75,this.pr-.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0):e<1/57&&this.pr<this.maxPR&&++this.goodWin>=4&&(this.pr=Math.min(this.maxPR,this.pr+.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0)}dispose(){if(clearInterval(this._pill),this.sound.dispose(),this.renderer){this.renderer.setAnimationLoop(null),this._endFarm(),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}}this.ro&&this.ro.disconnect(),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),document.removeEventListener("visibilitychange",this._onVis),this.root.remove()}},vc={start(i,t,e){let n=new _c(i,t||{},e);return vc.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.HappyFarm=vc;var s0=vc;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
