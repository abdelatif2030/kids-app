(()=>{var To="170";var dh=0,cl=1,fh=2;var gc=1,ph=2,yn=3,Nn=0,qe=1,He=2,cn=0,Si=1,Ri=2,hl=3,ul=4,gh=5,jn=100,mh=101,Ah=102,xh=103,vh=104,Ch=200,yh=201,_h=202,Ih=203,da=204,fa=205,Mh=206,bh=207,Sh=208,Eh=209,wh=210,Th=211,Rh=212,Vh=213,Ph=214,pa=0,ga=1,ma=2,Vi=3,Aa=4,xa=5,va=6,Ca=7,Ro=0,Lh=1,Uh=2,qn=0,Vo=1,Po=2,Lo=3,Uo=4,Dh=5,Do=6,qo=7;var mc=300,Pi=301,Li=302,ya=303,_a=304,_r=306,rs=1e3,ei=1001,Ia=1002,Ge=1003,qh=1004;var ms=1005;var on=1006,Dr=1007;var ni=1008;var bn=1009,Ac=1010,xc=1011,as=1012,No=1013,ii=1014,ln=1015,nn=1016,zo=1017,Fo=1018,Ui=1020,vc=35902,Cc=1021,yc=1022,tn=1023,_c=1024,Ic=1025,Ei=1026,Di=1027,Oo=1028,Bo=1029,Mc=1030,ko=1031;var Ho=1033,Bs=33776,ks=33777,Hs=33778,Gs=33779,Ma=35840,ba=35841,Sa=35842,Ea=35843,wa=36196,Ta=37492,Ra=37496,Va=37808,Pa=37809,La=37810,Ua=37811,Da=37812,qa=37813,Na=37814,za=37815,Fa=37816,Oa=37817,Ba=37818,ka=37819,Ha=37820,Ga=37821,Ws=36492,Wa=36494,Xa=36495,bc=36283,Ya=36284,Ka=36285,Ja=36286;var Xs=2300,Za=2301,qr=2302,dl=2400,fl=2401,pl=2402;var Nh=3200,zh=3201;var Sc=0,Fh=1,Dn="",Ie="srgb",ki="srgb-linear",Ir="linear",$t="srgb";var hi=7680;var gl=519,Oh=512,Bh=513,kh=514,Ec=515,Hh=516,Gh=517,Wh=518,Xh=519,ml=35044;var Al="300 es",In=2e3,Ys=2001,zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Nr=Math.PI/180,Qa=180/Math.PI;function hs(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[s&255]+Se[s>>8&255]+Se[s>>16&255]+Se[s>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Re(s,t,e){return Math.max(t,Math.min(e,s))}function Yh(s,t){return(s%t+t)%t}function zr(s,t,e){return(1-e)*s+e*t}function Ji(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function De(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ct=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],m=n[8],A=i[0],g=i[3],d=i[6],x=i[1],y=i[4],v=i[7],w=i[2],b=i[5],E=i[8];return r[0]=a*A+o*x+l*w,r[3]=a*g+o*y+l*b,r[6]=a*d+o*v+l*E,r[1]=c*A+h*x+u*w,r[4]=c*g+h*y+u*b,r[7]=c*d+h*v+u*E,r[2]=f*A+p*x+m*w,r[5]=f*g+p*y+m*b,r[8]=f*d+p*v+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,m=e*u+n*f+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=u*A,t[1]=(i*c-h*n)*A,t[2]=(o*n-i*a)*A,t[3]=f*A,t[4]=(h*e-i*l)*A,t[5]=(i*r-o*e)*A,t[6]=p*A,t[7]=(n*l-c*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Fr.makeScale(t,e)),this}rotate(t){return this.premultiply(Fr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Fr=new qt;function wc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Kh(){let s=Ks("canvas");return s.style.display="block",s}var xl={};function ns(s){s in xl||(xl[s]=!0,console.warn(s))}function Jh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Zh(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qh(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Bt={enabled:!0,workingColorSpace:ki,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===$t&&(s.r=Mn(s.r),s.g=Mn(s.g),s.b=Mn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===$t&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Dn?Ir:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Mn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function wi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var vl=[.64,.33,.3,.6,.15,.06],Cl=[.2126,.7152,.0722],yl=[.3127,.329],_l=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Il=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Bt.define({[ki]:{primaries:vl,whitePoint:yl,transfer:Ir,toXYZ:_l,fromXYZ:Il,luminanceCoefficients:Cl,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:vl,whitePoint:yl,transfer:$t,toXYZ:_l,fromXYZ:Il,luminanceCoefficients:Cl,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});var ui,ja=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ui===void 0&&(ui=Ks("canvas")),ui.width=t.width,ui.height=t.height;let n=ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ks("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Mn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mn(e[n]/255)*255):e[n]=Mn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jh=0,Js=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=hs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Or(i[a].image)):r.push(Or(i[a]))}else r=Or(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Or(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ja.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $h=0,Ne=class s extends zn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=ei,i=ei,r=on,a=ni,o=tn,l=bn,c=s.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=hs(),this.name="",this.source=new Js(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rs:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case Ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rs:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case Ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=mc;Ne.DEFAULT_ANISOTROPY=1;var de=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],m=l[9],A=l[2],g=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-A)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+A)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(p+1)/2,w=(d+1)/2,b=(h+f)/4,E=(u+A)/4,T=(m+g)/4;return y>v&&y>w?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=b/n,r=E/n):v>w?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=b/i,r=T/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=E/r,i=T/r),this.set(n,i,r,e),this}let x=Math.sqrt((g-m)*(g-m)+(u-A)*(u-A)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-A)/x,this.z=(f-h)/x,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$a=class extends zn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ne(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Js(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pe=class extends $a{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Zs=class extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var to=class extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],p=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=m,t[e+3]=A;return}if(u!==A||l!==f||c!==p||h!==m){let g=1-o,d=l*f+c*p+h*m+u*A,x=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let w=Math.sqrt(y),b=Math.atan2(w,d*x);g=Math.sin(g*b)/w,o=Math.sin(o*b)/w}let v=o*x;if(l=l*g+f*v,c=c*g+p*v,h=h*g+m*v,u=u*g+A*v,g===1-o){let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*p-c*f,t[e+1]=l*m+h*f+c*u-o*p,t[e+2]=c*m+h*p+o*f-l*u,t[e+3]=h*m-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),p=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u-f*p*m;break;case"YXZ":this._x=f*h*u+c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u+f*p*m;break;case"ZXY":this._x=f*h*u-c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u-f*p*m;break;case"ZYX":this._x=f*h*u-c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u+f*p*m;break;case"YZX":this._x=f*h*u+c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u-f*p*m;break;case"XZY":this._x=f*h*u-c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ml.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ml.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Br.copy(this).projectOnVector(t),this.sub(Br)}reflect(t){return this.sub(Br.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Br=new L,Ml=new hn,Sn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qe):Qe.fromBufferAttribute(r,a),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),As.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),As.copy(n.boundingBox)),As.applyMatrix4(t.matrixWorld),this.union(As)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zi),xs.subVectors(this.max,Zi),di.subVectors(t.a,Zi),fi.subVectors(t.b,Zi),pi.subVectors(t.c,Zi),Tn.subVectors(fi,di),Rn.subVectors(pi,fi),Wn.subVectors(di,pi);let e=[0,-Tn.z,Tn.y,0,-Rn.z,Rn.y,0,-Wn.z,Wn.y,Tn.z,0,-Tn.x,Rn.z,0,-Rn.x,Wn.z,0,-Wn.x,-Tn.y,Tn.x,0,-Rn.y,Rn.x,0,-Wn.y,Wn.x,0];return!kr(e,di,fi,pi,xs)||(e=[1,0,0,0,1,0,0,0,1],!kr(e,di,fi,pi,xs))?!1:(vs.crossVectors(Tn,Rn),e=[vs.x,vs.y,vs.z],kr(e,di,fi,pi,xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},mn=[new L,new L,new L,new L,new L,new L,new L,new L],Qe=new L,As=new Sn,di=new L,fi=new L,pi=new L,Tn=new L,Rn=new L,Wn=new L,Zi=new L,xs=new L,vs=new L,Xn=new L;function kr(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Xn.fromArray(s,r);let o=i.x*Math.abs(Xn.x)+i.y*Math.abs(Xn.y)+i.z*Math.abs(Xn.z),l=t.dot(Xn),c=e.dot(Xn),h=n.dot(Xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var tu=new Sn,Qi=new L,Hr=new L,Fn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):tu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qi.subVectors(t,this.center);let e=Qi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Qi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qi.copy(t.center).add(Hr)),this.expandByPoint(Qi.copy(t.center).sub(Hr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},An=new L,Gr=new L,Cs=new L,Vn=new L,Wr=new L,ys=new L,Xr=new L,Qs=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Gr.copy(t).add(e).multiplyScalar(.5),Cs.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(Gr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Cs),o=Vn.dot(this.direction),l=-Vn.dot(Cs),c=Vn.lengthSq(),h=Math.abs(1-a*a),u,f,p,m;if(h>0)if(u=a*l-o,f=a*o-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let A=1/h;u*=A,f*=A,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Gr).addScaledVector(Cs,f),p}intersectSphere(t,e){An.subVectors(t.center,this.origin);let n=An.dot(this.direction),i=An.dot(An)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,i,r){Wr.subVectors(e,t),ys.subVectors(n,t),Xr.crossVectors(Wr,ys);let a=this.direction.dot(Xr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,t);let l=o*this.direction.dot(ys.crossVectors(Vn,ys));if(l<0)return null;let c=o*this.direction.dot(Wr.cross(Vn));if(c<0||l+c>a)return null;let h=-o*Vn.dot(Xr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,f,p,m,A,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,f,p,m,A,g)}set(t,e,n,i,r,a,o,l,c,h,u,f,p,m,A,g){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=m,d[11]=A,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/gi.setFromMatrixColumn(t,0).length(),r=1/gi.setFromMatrixColumn(t,1).length(),a=1/gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,p=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+m*c,e[5]=f-A*c,e[9]=-o*l,e[2]=A-f*c,e[6]=m+p*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,p=l*u,m=c*h,A=c*u;e[0]=f+A*o,e[4]=m*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=A+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,p=l*u,m=c*h,A=c*u;e[0]=f-A*o,e[4]=-a*u,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=A-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,p=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=m*c-p,e[8]=f*c+A,e[1]=l*u,e[5]=A*c+f,e[9]=p*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=A-f*u,e[8]=m*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+m,e[10]=f-A*u}else if(t.order==="XZY"){let f=a*l,p=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+A,e[5]=a*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=o*h,e[10]=A*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eu,t,nu)}lookAt(t,e,n){let i=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Pn.crossVectors(n,Be),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Pn.crossVectors(n,Be)),Pn.normalize(),_s.crossVectors(Be,Pn),i[0]=Pn.x,i[4]=_s.x,i[8]=Be.x,i[1]=Pn.y,i[5]=_s.y,i[9]=Be.y,i[2]=Pn.z,i[6]=_s.z,i[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],m=n[2],A=n[6],g=n[10],d=n[14],x=n[3],y=n[7],v=n[11],w=n[15],b=i[0],E=i[4],T=i[8],M=i[12],_=i[1],R=i[5],O=i[9],N=i[13],H=i[2],J=i[6],G=i[10],$=i[14],B=i[3],rt=i[7],ft=i[11],Mt=i[15];return r[0]=a*b+o*_+l*H+c*B,r[4]=a*E+o*R+l*J+c*rt,r[8]=a*T+o*O+l*G+c*ft,r[12]=a*M+o*N+l*$+c*Mt,r[1]=h*b+u*_+f*H+p*B,r[5]=h*E+u*R+f*J+p*rt,r[9]=h*T+u*O+f*G+p*ft,r[13]=h*M+u*N+f*$+p*Mt,r[2]=m*b+A*_+g*H+d*B,r[6]=m*E+A*R+g*J+d*rt,r[10]=m*T+A*O+g*G+d*ft,r[14]=m*M+A*N+g*$+d*Mt,r[3]=x*b+y*_+v*H+w*B,r[7]=x*E+y*R+v*J+w*rt,r[11]=x*T+y*O+v*G+w*ft,r[15]=x*M+y*N+v*$+w*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],m=t[3],A=t[7],g=t[11],d=t[15];return m*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*p-n*l*p)+A*(+e*l*p-e*c*f+r*a*f-i*a*p+i*c*h-r*l*h)+g*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],m=t[12],A=t[13],g=t[14],d=t[15],x=u*g*c-A*f*c+A*l*p-o*g*p-u*l*d+o*f*d,y=m*f*c-h*g*c-m*l*p+a*g*p+h*l*d-a*f*d,v=h*A*c-m*u*c+m*o*p-a*A*p-h*o*d+a*u*d,w=m*u*l-h*A*l-m*o*f+a*A*f+h*o*g-a*u*g,b=e*x+n*y+i*v+r*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/b;return t[0]=x*E,t[1]=(A*f*r-u*g*r-A*i*p+n*g*p+u*i*d-n*f*d)*E,t[2]=(o*g*r-A*l*r+A*i*c-n*g*c-o*i*d+n*l*d)*E,t[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*p-n*l*p)*E,t[4]=y*E,t[5]=(h*g*r-m*f*r+m*i*p-e*g*p-h*i*d+e*f*d)*E,t[6]=(m*l*r-a*g*r-m*i*c+e*g*c+a*i*d-e*l*d)*E,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*p+e*l*p)*E,t[8]=v*E,t[9]=(m*u*r-h*A*r-m*n*p+e*A*p+h*n*d-e*u*d)*E,t[10]=(a*A*r-m*o*r+m*n*c-e*A*c-a*n*d+e*o*d)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*E,t[12]=w*E,t[13]=(h*A*i-m*u*i+m*n*f-e*A*f-h*n*g+e*u*g)*E,t[14]=(m*o*i-a*A*i-m*n*l+e*A*l+a*n*g-e*o*g)*E,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*E,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,m=r*u,A=a*h,g=a*u,d=o*u,x=l*c,y=l*h,v=l*u,w=n.x,b=n.y,E=n.z;return i[0]=(1-(A+d))*w,i[1]=(p+v)*w,i[2]=(m-y)*w,i[3]=0,i[4]=(p-v)*b,i[5]=(1-(f+d))*b,i[6]=(g+x)*b,i[7]=0,i[8]=(m+y)*E,i[9]=(g-x)*E,i[10]=(1-(f+A))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=gi.set(i[0],i[1],i[2]).length(),a=gi.set(i[4],i[5],i[6]).length(),o=gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],je.copy(this);let c=1/r,h=1/a,u=1/o;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=u,je.elements[9]*=u,je.elements[10]*=u,e.setFromRotationMatrix(je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=In){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,m;if(o===In)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Ys)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=In){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*c,p=(n+i)*h,m,A;if(o===In)m=(a+r)*u,A=-2*u;else if(o===Ys)m=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=A,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},gi=new L,je=new ne,eu=new L(0,0,0),nu=new L(1,1,1),Pn=new L,_s=new L,Be=new L,bl=new ne,Sl=new hn,un=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sl.setFromEuler(this),this.setFromQuaternion(Sl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},iu=0,El=new L,mi=new hn,xn=new ne,Is=new L,ji=new L,su=new L,ru=new hn,wl=new L(1,0,0),Tl=new L(0,1,0),Rl=new L(0,0,1),Vl={type:"added"},au={type:"removed"},Ai={type:"childadded",child:null},Yr={type:"childremoved",child:null},we=class s extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new un,n=new hn,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new qt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis(wl,t)}rotateY(t){return this.rotateOnAxis(Tl,t)}rotateZ(t){return this.rotateOnAxis(Rl,t)}translateOnAxis(t,e){return El.copy(t).applyQuaternion(this.quaternion),this.position.add(El.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wl,t)}translateY(t){return this.translateOnAxis(Tl,t)}translateZ(t){return this.translateOnAxis(Rl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Is.copy(t):Is.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(ji,Is,this.up):xn.lookAt(Is,ji,this.up),this.quaternion.setFromRotationMatrix(xn),i&&(xn.extractRotation(i.matrixWorld),mi.setFromRotationMatrix(xn),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vl),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(au),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vl),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,t,su),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,ru,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};we.DEFAULT_UP=new L(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $e=new L,vn=new L,Kr=new L,Cn=new L,xi=new L,vi=new L,Pl=new L,Jr=new L,Zr=new L,Qr=new L,jr=new de,$r=new de,ta=new de,$n=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$e.subVectors(t,e),i.cross($e);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){$e.subVectors(i,e),vn.subVectors(n,e),Kr.subVectors(t,e);let a=$e.dot($e),o=$e.dot(vn),l=$e.dot(Kr),c=vn.dot(vn),h=vn.dot(Kr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return jr.setScalar(0),$r.setScalar(0),ta.setScalar(0),jr.fromBufferAttribute(t,e),$r.fromBufferAttribute(t,n),ta.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(jr,r.x),a.addScaledVector($r,r.y),a.addScaledVector(ta,r.z),a}static isFrontFacing(t,e,n,i){return $e.subVectors(n,e),vn.subVectors(t,e),$e.cross(vn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),$e.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;xi.subVectors(i,n),vi.subVectors(r,n),Jr.subVectors(t,n);let l=xi.dot(Jr),c=vi.dot(Jr);if(l<=0&&c<=0)return e.copy(n);Zr.subVectors(t,i);let h=xi.dot(Zr),u=vi.dot(Zr);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(xi,a);Qr.subVectors(t,r);let p=xi.dot(Qr),m=vi.dot(Qr);if(m>=0&&p<=m)return e.copy(r);let A=p*c-l*m;if(A<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(vi,o);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return Pl.subVectors(r,i),o=(u-h)/(u-h+(p-m)),e.copy(i).addScaledVector(Pl,o);let d=1/(g+A+f);return a=A*d,o=f*d,e.copy(n).addScaledVector(xi,a).addScaledVector(vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function ea(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Bt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Bt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Bt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Bt.workingColorSpace){if(t=Yh(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ea(a,r,t+1/3),this.g=ea(a,r,t),this.b=ea(a,r,t-1/3)}return Bt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=Tc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return Bt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Re(Ee.r*255,0,255))*65536+Math.round(Re(Ee.g*255,0,255))*256+Math.round(Re(Ee.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Bt.workingColorSpace){Bt.fromWorkingColorSpace(Ee.copy(this),e);let n=Ee.r,i=Ee.g,r=Ee.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Bt.workingColorSpace){return Bt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=Ie){Bt.fromWorkingColorSpace(Ee.copy(this),t);let e=Ee.r,n=Ee.g,i=Ee.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(Ms);let n=zr(Ln.h,Ms.h,e),i=zr(Ln.s,Ms.s,e),r=zr(Ln.l,Ms.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ee=new Rt;Rt.NAMES=Tc;var ou=0,On=class extends zn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=hs(),this.name="",this.blending=Si,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=da,this.blendDst=fa,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==da&&(n.blendSrc=this.blendSrc),this.blendDst!==fa&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ae=class extends On{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ge=new L,bs=new Ct,_e=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ml,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bs.fromBufferAttribute(this,e),bs.applyMatrix3(t),this.setXY(e,bs.x,bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ml&&(t.usage=this.usage),t}};var $s=class extends _e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var tr=class extends _e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends _e{constructor(t,e,n){super(new Float32Array(t),e,n)}},lu=0,Ke=new ne,na=new we,Ci=new L,ke=new Sn,$i=new Sn,ye=new L,pe=class s extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wc(t)?tr:$s)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return na.lookAt(t),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(ke.min,$i.min),ke.expandByPoint(ye),ye.addVectors(ke.max,$i.max),ke.expandByPoint(ye)):(ke.expandByPoint($i.min),ke.expandByPoint($i.max))}ke.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ye.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(t,c),ye.add(Ci)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<n.count;T++)o[T]=new L,l[T]=new L;let c=new L,h=new L,u=new L,f=new Ct,p=new Ct,m=new Ct,A=new L,g=new L;function d(T,M,_){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,M),m.fromBufferAttribute(r,_),h.sub(c),u.sub(c),p.sub(f),m.sub(f);let R=1/(p.x*m.y-m.x*p.y);isFinite(R)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(R),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(R),o[T].add(A),o[M].add(A),o[_].add(A),l[T].add(g),l[M].add(g),l[_].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let T=0,M=x.length;T<M;++T){let _=x[T],R=_.start,O=_.count;for(let N=R,H=R+O;N<H;N+=3)d(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let y=new L,v=new L,w=new L,b=new L;function E(T){w.fromBufferAttribute(i,T),b.copy(w);let M=o[T];y.copy(M),y.sub(w.multiplyScalar(w.dot(M))).normalize(),v.crossVectors(b,M);let R=v.dot(l[T])<0?-1:1;a.setXYZW(T,y.x,y.y,y.z,R)}for(let T=0,M=x.length;T<M;++T){let _=x[T],R=_.start,O=_.count;for(let N=R,H=R+O;N<H;N+=3)E(t.getX(N+0)),E(t.getX(N+1)),E(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){let m=t.getX(f+0),A=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,m=0;for(let A=0,g=l.length;A<g;A++){o.isInterleavedBufferAttribute?p=l[A]*o.data.stride+o.offset:p=l[A]*h;for(let d=0;d<h;d++)f[m++]=c[p++]}return new _e(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ll=new ne,Yn=new Qs,Ss=new Fn,Ul=new L,Es=new L,ws=new L,Ts=new L,ia=new L,Rs=new L,Dl=new L,Vs=new L,me=class extends we{constructor(t=new pe,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Rs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(ia.fromBufferAttribute(u,t),a?Rs.addScaledVector(ia,h):Rs.addScaledVector(ia.sub(e),h))}e.add(Rs)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(r),Yn.copy(t.ray).recast(t.near),!(Ss.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Ss,Ul)===null||Yn.origin.distanceToSquared(Ul)>(t.far-t.near)**2))&&(Ll.copy(r).invert(),Yn.copy(t.ray).applyMatrix4(Ll),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yn)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=f.length;m<A;m++){let g=f[m],d=a[g.materialIndex],x=Math.max(g.start,p.start),y=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let v=x,w=y;v<w;v+=3){let b=o.getX(v),E=o.getX(v+1),T=o.getX(v+2);i=Ps(this,d,t,n,c,h,u,b,E,T),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),A=Math.min(o.count,p.start+p.count);for(let g=m,d=A;g<d;g+=3){let x=o.getX(g),y=o.getX(g+1),v=o.getX(g+2);i=Ps(this,a,t,n,c,h,u,x,y,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,A=f.length;m<A;m++){let g=f[m],d=a[g.materialIndex],x=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let v=x,w=y;v<w;v+=3){let b=v,E=v+1,T=v+2;i=Ps(this,d,t,n,c,h,u,b,E,T),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),A=Math.min(l.count,p.start+p.count);for(let g=m,d=A;g<d;g+=3){let x=g,y=g+1,v=g+2;i=Ps(this,a,t,n,c,h,u,x,y,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function cu(s,t,e,n,i,r,a,o){let l;if(t.side===qe?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Nn,o),l===null)return null;Vs.copy(o),Vs.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Vs);return c<e.near||c>e.far?null:{distance:c,point:Vs.clone(),object:s}}function Ps(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Es),s.getVertexPosition(l,ws),s.getVertexPosition(c,Ts);let h=cu(s,t,e,n,Es,ws,Ts,Dl);if(h){let u=new L;$n.getBarycoord(Dl,Es,ws,Ts,u),i&&(h.uv=$n.getInterpolatedAttribute(i,o,l,c,u,new Ct)),r&&(h.uv1=$n.getInterpolatedAttribute(r,o,l,c,u,new Ct)),a&&(h.normal=$n.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new L,materialIndex:0};$n.getNormal(Es,ws,Ts,f.normal),h.face=f,h.barycoord=u}return h}var si=class s extends pe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function m(A,g,d,x,y,v,w,b,E,T,M){let _=v/E,R=w/T,O=v/2,N=w/2,H=b/2,J=E+1,G=T+1,$=0,B=0,rt=new L;for(let ft=0;ft<G;ft++){let Mt=ft*R-N;for(let Ft=0;Ft<J;Ft++){let ee=Ft*_-O;rt[A]=ee*x,rt[g]=Mt*y,rt[d]=H,c.push(rt.x,rt.y,rt.z),rt[A]=0,rt[g]=0,rt[d]=b>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Ft/E),u.push(1-ft/T),$+=1}}for(let ft=0;ft<T;ft++)for(let Mt=0;Mt<E;Mt++){let Ft=f+Mt+J*ft,ee=f+Mt+J*(ft+1),X=f+(Mt+1)+J*(ft+1),nt=f+(Mt+1)+J*ft;l.push(Ft,ee,nt),l.push(ee,X,nt),B+=6}o.addGroup(p,B,M),p+=B,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function qi(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Te(s){let t={};for(let e=0;e<s.length;e++){let n=qi(s[e]);for(let i in n)t[i]=n[i]}return t}function hu(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Rc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Bt.workingColorSpace}var Bn={clone:qi,merge:Te},uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xe=class extends On{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uu,this.fragmentShader=du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=hu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},er=class extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Un=new L,ql=new Ct,Nl=new Ct,Ve=class extends er{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qa*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,ql,Nl),e.subVectors(Nl,ql)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},yi=-90,_i=1,eo=class extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ve(yi,_i,t,e);i.layers=this.layers,this.add(i);let r=new Ve(yi,_i,t,e);r.layers=this.layers,this.add(r);let a=new Ve(yi,_i,t,e);a.layers=this.layers,this.add(a);let o=new Ve(yi,_i,t,e);o.layers=this.layers,this.add(o);let l=new Ve(yi,_i,t,e);l.layers=this.layers,this.add(l);let c=new Ve(yi,_i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},nr=class extends Ne{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Pi,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},no=class extends Pe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new nr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new si(5,5,5),r=new xe({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:cn});r.uniforms.tEquirect.value=e;let a=new me(i,r),o=e.minFilter;return e.minFilter===ni&&(e.minFilter=on),new eo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},sa=new L,fu=new L,pu=new qt,_n=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=sa.subVectors(n,e).cross(fu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(sa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||pu.getNormalMatrix(t),i=this.coplanarPoint(sa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Kn=new Fn,Ls=new L,os=class{constructor(t=new _n,e=new _n,n=new _n,i=new _n,r=new _n,a=new _n){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],p=i[8],m=i[9],A=i[10],g=i[11],d=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-r,f-c,g-p,v-d).normalize(),n[1].setComponents(l+r,f+c,g+p,v+d).normalize(),n[2].setComponents(l+a,f+h,g+m,v+x).normalize(),n[3].setComponents(l-a,f-h,g-m,v-x).normalize(),n[4].setComponents(l-o,f-u,g-A,v-y).normalize(),e===In)n[5].setComponents(l+o,f+u,g+A,v+y).normalize();else if(e===Ys)n[5].setComponents(o,u,A,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ls.x=i.normal.x>0?t.max.x:t.min.x,Ls.y=i.normal.y>0?t.max.y:t.min.y,Ls.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Vc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function gu(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<u.length;p++){let m=u[f],A=u[p];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++f,u[f]=A)}u.length=f+1;for(let p=0,m=u.length;p<m;p++){let A=u[p];s.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var dn=class s extends pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,p=[],m=[],A=[],g=[];for(let d=0;d<h;d++){let x=d*f-a;for(let y=0;y<c;y++){let v=y*u-r;m.push(v,-x,0),A.push(0,0,1),g.push(y/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){let y=x+c*d,v=x+c*(d+1),w=x+1+c*(d+1),b=x+1+c*d;p.push(y,v,b),p.push(v,w,b)}this.setIndex(p),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(A,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},mu=`#ifdef USE_ALPHAHASH
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
#endif`,yu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_u=`#ifdef USE_AOMAP
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
#endif`,wu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tu=`#ifdef USE_IRIDESCENCE
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
#endif`,Ru=`#ifdef USE_BUMPMAP
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
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fu=`#define PI 3.141592653589793
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
} // validated`,Ou=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bu=`vec3 transformedNormal = objectNormal;
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
}`,Ku=`#ifdef USE_ENVMAP
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
#endif`,Ju=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zu=`#ifdef USE_ENVMAP
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
#endif`,ju=`#ifdef USE_ENVMAP
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
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_d=`#ifdef USE_MAP
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
#endif`,wd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Td=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vd=`#ifdef USE_MORPHTARGETS
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
#endif`,Ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zd=`#ifdef USE_NORMALMAP
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
#endif`,Fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bd=`#ifdef USE_CLEARCOATMAP
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
#endif`,Kd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zd=`#ifdef USE_ROUGHNESSMAP
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
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
}`,yf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_f=`#include <common>
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
}`,wf=`uniform float scale;
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
}`,Tf=`uniform vec3 diffuse;
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
}`,Rf=`#include <common>
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
}`,Vf=`uniform vec3 diffuse;
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
}`,Lf=`#define LAMBERT
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
}`,Uf=`#define MATCAP
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
}`,zf=`#define PHONG
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
}`,Ff=`#define PHONG
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
}`,Of=`#define STANDARD
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
}`,Bf=`#define STANDARD
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
}`,Kf=`uniform float rotation;
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
}`,Jf=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:mu,alphahash_pars_fragment:Au,alphamap_fragment:xu,alphamap_pars_fragment:vu,alphatest_fragment:Cu,alphatest_pars_fragment:yu,aomap_fragment:_u,aomap_pars_fragment:Iu,batching_pars_vertex:Mu,batching_vertex:bu,begin_vertex:Su,beginnormal_vertex:Eu,bsdfs:wu,iridescence_fragment:Tu,bumpmap_pars_fragment:Ru,clipping_planes_fragment:Vu,clipping_planes_pars_fragment:Pu,clipping_planes_pars_vertex:Lu,clipping_planes_vertex:Uu,color_fragment:Du,color_pars_fragment:qu,color_pars_vertex:Nu,color_vertex:zu,common:Fu,cube_uv_reflection_fragment:Ou,defaultnormal_vertex:Bu,displacementmap_pars_vertex:ku,displacementmap_vertex:Hu,emissivemap_fragment:Gu,emissivemap_pars_fragment:Wu,colorspace_fragment:Xu,colorspace_pars_fragment:Yu,envmap_fragment:Ku,envmap_common_pars_fragment:Ju,envmap_pars_fragment:Zu,envmap_pars_vertex:Qu,envmap_physical_pars_fragment:ld,envmap_vertex:ju,fog_vertex:$u,fog_pars_vertex:td,fog_fragment:ed,fog_pars_fragment:nd,gradientmap_pars_fragment:id,lightmap_pars_fragment:sd,lights_lambert_fragment:rd,lights_lambert_pars_fragment:ad,lights_pars_begin:od,lights_toon_fragment:cd,lights_toon_pars_fragment:hd,lights_phong_fragment:ud,lights_phong_pars_fragment:dd,lights_physical_fragment:fd,lights_physical_pars_fragment:pd,lights_fragment_begin:gd,lights_fragment_maps:md,lights_fragment_end:Ad,logdepthbuf_fragment:xd,logdepthbuf_pars_fragment:vd,logdepthbuf_pars_vertex:Cd,logdepthbuf_vertex:yd,map_fragment:_d,map_pars_fragment:Id,map_particle_fragment:Md,map_particle_pars_fragment:bd,metalnessmap_fragment:Sd,metalnessmap_pars_fragment:Ed,morphinstance_vertex:wd,morphcolor_vertex:Td,morphnormal_vertex:Rd,morphtarget_pars_vertex:Vd,morphtarget_vertex:Pd,normal_fragment_begin:Ld,normal_fragment_maps:Ud,normal_pars_fragment:Dd,normal_pars_vertex:qd,normal_vertex:Nd,normalmap_pars_fragment:zd,clearcoat_normal_fragment_begin:Fd,clearcoat_normal_fragment_maps:Od,clearcoat_pars_fragment:Bd,iridescence_pars_fragment:kd,opaque_fragment:Hd,packing:Gd,premultiplied_alpha_fragment:Wd,project_vertex:Xd,dithering_fragment:Yd,dithering_pars_fragment:Kd,roughnessmap_fragment:Jd,roughnessmap_pars_fragment:Zd,shadowmap_pars_fragment:Qd,shadowmap_pars_vertex:jd,shadowmap_vertex:$d,shadowmask_pars_fragment:tf,skinbase_vertex:ef,skinning_pars_vertex:nf,skinning_vertex:sf,skinnormal_vertex:rf,specularmap_fragment:af,specularmap_pars_fragment:of,tonemapping_fragment:lf,tonemapping_pars_fragment:cf,transmission_fragment:hf,transmission_pars_fragment:uf,uv_pars_fragment:df,uv_pars_vertex:ff,uv_vertex:pf,worldpos_vertex:gf,background_vert:mf,background_frag:Af,backgroundCube_vert:xf,backgroundCube_frag:vf,cube_vert:Cf,cube_frag:yf,depth_vert:_f,depth_frag:If,distanceRGBA_vert:Mf,distanceRGBA_frag:bf,equirect_vert:Sf,equirect_frag:Ef,linedashed_vert:wf,linedashed_frag:Tf,meshbasic_vert:Rf,meshbasic_frag:Vf,meshlambert_vert:Pf,meshlambert_frag:Lf,meshmatcap_vert:Uf,meshmatcap_frag:Df,meshnormal_vert:qf,meshnormal_frag:Nf,meshphong_vert:zf,meshphong_frag:Ff,meshphysical_vert:Of,meshphysical_frag:Bf,meshtoon_vert:kf,meshtoon_frag:Hf,points_vert:Gf,points_frag:Wf,shadow_vert:Xf,shadow_frag:Yf,sprite_vert:Kf,sprite_frag:Jf},it={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},an={basic:{uniforms:Te([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Te([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Rt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Te([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Te([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Te([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Rt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Te([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Te([it.points,it.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Te([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Te([it.common,it.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Te([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Te([it.sprite,it.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Te([it.common,it.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Te([it.lights,it.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};an.physical={uniforms:Te([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var Us={r:0,b:0,g:0},Jn=new un,Zf=new ne;function Qf(s,t,e,n,i,r,a){let o=new Rt(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function m(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function A(x){let y=!1,v=m(x);v===null?d(o,l):v&&v.isColor&&(d(v,1),y=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(x,y){let v=m(y);v&&(v.isCubeTexture||v.mapping===_r)?(h===void 0&&(h=new me(new si(1,1,1),new xe({name:"BackgroundCubeMaterial",uniforms:qi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Jn.copy(y.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zf.makeRotationFromEuler(Jn)),h.material.toneMapped=Bt.getTransfer(v.colorSpace)!==$t,(u!==v||f!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new me(new dn(2,2),new xe({name:"BackgroundMaterial",uniforms:qi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Bt.getTransfer(v.colorSpace)!==$t,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,p=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function d(x,y){x.getRGB(Us,Rc(s)),n.buffers.color.setClear(Us.r,Us.g,Us.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(o,l)},render:A,addToRenderList:g}}function jf(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(_,R,O,N,H){let J=!1,G=u(N,O,R);r!==G&&(r=G,c(r.object)),J=p(_,N,O,H),J&&m(_,N,O,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,v(_,R,O,N),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function u(_,R,O){let N=O.wireframe===!0,H=n[_.id];H===void 0&&(H={},n[_.id]=H);let J=H[R.id];J===void 0&&(J={},H[R.id]=J);let G=J[N];return G===void 0&&(G=f(l()),J[N]=G),G}function f(_){let R=[],O=[],N=[];for(let H=0;H<e;H++)R[H]=0,O[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:N,object:_,attributes:{},index:null}}function p(_,R,O,N){let H=r.attributes,J=R.attributes,G=0,$=O.getAttributes();for(let B in $)if($[B].location>=0){let ft=H[B],Mt=J[B];if(Mt===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(Mt=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(Mt=_.instanceColor)),ft===void 0||ft.attribute!==Mt||Mt&&ft.data!==Mt.data)return!0;G++}return r.attributesNum!==G||r.index!==N}function m(_,R,O,N){let H={},J=R.attributes,G=0,$=O.getAttributes();for(let B in $)if($[B].location>=0){let ft=J[B];ft===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(ft=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(ft=_.instanceColor));let Mt={};Mt.attribute=ft,ft&&ft.data&&(Mt.data=ft.data),H[B]=Mt,G++}r.attributes=H,r.attributesNum=G,r.index=N}function A(){let _=r.newAttributes;for(let R=0,O=_.length;R<O;R++)_[R]=0}function g(_){d(_,0)}function d(_,R){let O=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;O[_]=1,N[_]===0&&(s.enableVertexAttribArray(_),N[_]=1),H[_]!==R&&(s.vertexAttribDivisor(_,R),H[_]=R)}function x(){let _=r.newAttributes,R=r.enabledAttributes;for(let O=0,N=R.length;O<N;O++)R[O]!==_[O]&&(s.disableVertexAttribArray(O),R[O]=0)}function y(_,R,O,N,H,J,G){G===!0?s.vertexAttribIPointer(_,R,O,H,J):s.vertexAttribPointer(_,R,O,N,H,J)}function v(_,R,O,N){A();let H=N.attributes,J=O.getAttributes(),G=R.defaultAttributeValues;for(let $ in J){let B=J[$];if(B.location>=0){let rt=H[$];if(rt===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor)),rt!==void 0){let ft=rt.normalized,Mt=rt.itemSize,Ft=t.get(rt);if(Ft===void 0)continue;let ee=Ft.buffer,X=Ft.type,nt=Ft.bytesPerElement,yt=X===s.INT||X===s.UNSIGNED_INT||rt.gpuType===No;if(rt.isInterleavedBufferAttribute){let ot=rt.data,Tt=ot.stride,Lt=rt.offset;if(ot.isInstancedInterleavedBuffer){for(let Ot=0;Ot<B.locationSize;Ot++)d(B.location+Ot,ot.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ot=0;Ot<B.locationSize;Ot++)g(B.location+Ot);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let Ot=0;Ot<B.locationSize;Ot++)y(B.location+Ot,Mt/B.locationSize,X,ft,Tt*nt,(Lt+Mt/B.locationSize*Ot)*nt,yt)}else{if(rt.isInstancedBufferAttribute){for(let ot=0;ot<B.locationSize;ot++)d(B.location+ot,rt.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ot=0;ot<B.locationSize;ot++)g(B.location+ot);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let ot=0;ot<B.locationSize;ot++)y(B.location+ot,Mt/B.locationSize,X,ft,Mt*nt,Mt/B.locationSize*ot*nt,yt)}}else if(G!==void 0){let ft=G[$];if(ft!==void 0)switch(ft.length){case 2:s.vertexAttrib2fv(B.location,ft);break;case 3:s.vertexAttrib3fv(B.location,ft);break;case 4:s.vertexAttrib4fv(B.location,ft);break;default:s.vertexAttrib1fv(B.location,ft)}}}}x()}function w(){T();for(let _ in n){let R=n[_];for(let O in R){let N=R[O];for(let H in N)h(N[H].object),delete N[H];delete R[O]}delete n[_]}}function b(_){if(n[_.id]===void 0)return;let R=n[_.id];for(let O in R){let N=R[O];for(let H in N)h(N[H].object),delete N[H];delete R[O]}delete n[_.id]}function E(_){for(let R in n){let O=n[R];if(O[_.id]===void 0)continue;let N=O[_.id];for(let H in N)h(N[H].object),delete N[H];delete O[_.id]}}function T(){M(),a=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:A,enableAttribute:g,disableUnusedAttributes:x}}function $f(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],h[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A]*f[A];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function tp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==tn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let T=E===nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==bn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ln&&!T)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:w,maxSamples:b}}function ep(s){let t=this,e=null,n=0,i=!1,r=!1,a=new _n,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let m=u.clippingPlanes,A=u.clipIntersection,g=u.clipShadows,d=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let x=r?0:n,y=x*4,v=d.clippingState||null;l.value=v,v=h(m,f,y,p);for(let w=0;w!==y;++w)v[w]=e[w];d.clippingState=v,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,m){let A=u!==null?u.length:0,g=null;if(A!==0){if(g=l.value,m!==!0||g===null){let d=p+A*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let y=0,v=p;y!==A;++y,v+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,g}}function np(s){let t=new WeakMap;function e(a,o){return o===ya?a.mapping=Pi:o===_a&&(a.mapping=Li),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ya||o===_a)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new no(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ni=class extends er{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},bi=4,zl=[.125,.215,.35,.446,.526,.582],ti=20,ra=new Ni,Fl=new Rt,aa=null,oa=0,la=0,ca=!1,Qn=(1+Math.sqrt(5))/2,Ii=1/Qn,Ol=[new L(-Qn,Ii,0),new L(Qn,Ii,0),new L(-Ii,0,Qn),new L(Ii,0,Qn),new L(0,Qn,-Ii),new L(0,Qn,Ii),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],ir=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){aa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(aa,oa,la),this._renderer.xr.enabled=ca,t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),aa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:nn,format:tn,colorSpace:ki,depthBuffer:!1},i=Bl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ip(r)),this._blurMaterial=sp(r,t,e)}return i}_compileMaterial(t){let e=new me(this._lodPlanes[0],t);this._renderer.compile(e,ra)}_sceneToCubeUV(t,e,n,i){let o=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Fl),h.toneMapping=qn,h.autoClear=!1;let p=new Ae({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),m=new me(new si,p),A=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,A=!0):(p.color.copy(Fl),A=!0);for(let d=0;d<6;d++){let x=d%3;x===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):x===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let y=this._cubeSize;Ds(i,x*y,d>2?y:0,y,y),h.setRenderTarget(i),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Pi||t.mapping===Li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new me(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ds(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ra)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ol[(i-r-1)%Ol.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new me(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ti-1),A=r/m,g=isFinite(r)?1+Math.floor(h*A):ti;g>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ti}`);let d=[],x=0;for(let E=0;E<ti;++E){let T=E/A,M=Math.exp(-T*T/2);d.push(M),E===0?x+=M:E<g&&(x+=2*M)}for(let E=0;E<d.length;E++)d[E]=d[E]/x;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-n;let v=this._sizeLods[i],w=3*v*(i>y-bi?i-y+bi:0),b=4*(this._cubeSize-v);Ds(e,w,b,3*v,2*v),l.setRenderTarget(e),l.render(u,ra)}};function ip(s){let t=[],e=[],n=[],i=s,r=s-bi+1+zl.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-bi?l=zl[a-s+bi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,A=3,g=2,d=1,x=new Float32Array(A*m*p),y=new Float32Array(g*m*p),v=new Float32Array(d*m*p);for(let b=0;b<p;b++){let E=b%3*2/3-1,T=b>2?0:-1,M=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];x.set(M,A*m*b),y.set(f,g*m*b);let _=[b,b,b,b,b,b];v.set(_,d*m*b)}let w=new pe;w.setAttribute("position",new _e(x,A)),w.setAttribute("uv",new _e(y,g)),w.setAttribute("faceIndex",new _e(v,d)),t.push(w),i>bi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bl(s,t,e){let n=new Pe(s,t,e);return n.texture.mapping=_r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function sp(s,t,e){let n=new Float32Array(ti),i=new L(0,1,0);return new xe({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Go(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function kl(){return new xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Hl(){return new xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Go(){return`

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
	`}function rp(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ya||l===_a,h=l===Pi||l===Li;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new ir(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new ir(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ap(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ns("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function op(s,t,e,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let A=f.morphAttributes[m];for(let g=0,d=A.length;g<d;g++)t.remove(A[g])}f.removeEventListener("dispose",a),delete i[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)t.update(f[m],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let m in p){let A=p[m];for(let g=0,d=A.length;g<d;g++)t.update(A[g],s.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,m=u.attributes.position,A=0;if(p!==null){let x=p.array;A=p.version;for(let y=0,v=x.length;y<v;y+=3){let w=x[y+0],b=x[y+1],E=x[y+2];f.push(w,b,b,E,E,w)}}else if(m!==void 0){let x=m.array;A=m.version;for(let y=0,v=x.length/3-1;y<v;y+=3){let w=y+0,b=y+1,E=y+2;f.push(w,b,b,E,E,w)}}else return;let g=new(wc(f)?tr:$s)(f,1);g.version=A;let d=r.get(u);d&&t.remove(d),r.set(u,g)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function lp(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,m){m!==0&&(s.drawElementsInstanced(n,p,r,f*a,m),e.update(p,n,m))}function h(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,m);let g=0;for(let d=0;d<m;d++)g+=p[d];e.update(g,n,1)}function u(f,p,m,A){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],A[d]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,A,0,m);let d=0;for(let x=0;x<m;x++)d+=p[x]*A[x];e.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cp(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function hp(s,t,e){let n=new WeakMap,i=new de;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let M=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],y=0;p===!0&&(y=1),m===!0&&(y=2),A===!0&&(y=3);let v=o.attributes.position.count*y,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*w*4*u),E=new Zs(b,v,w,u);E.type=ln,E.needsUpdate=!0;let T=y*4;for(let _=0;_<u;_++){let R=g[_],O=d[_],N=x[_],H=v*w*4*_;for(let J=0;J<R.count;J++){let G=J*T;p===!0&&(i.fromBufferAttribute(R,J),b[H+G+0]=i.x,b[H+G+1]=i.y,b[H+G+2]=i.z,b[H+G+3]=0),m===!0&&(i.fromBufferAttribute(O,J),b[H+G+4]=i.x,b[H+G+5]=i.y,b[H+G+6]=i.z,b[H+G+7]=0),A===!0&&(i.fromBufferAttribute(N,J),b[H+G+8]=i.x,b[H+G+9]=i.y,b[H+G+10]=i.z,b[H+G+11]=N.itemSize===4?i.w:1)}}f={count:u,texture:E,size:new Ct(v,w)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let A=0;A<c.length;A++)p+=c[A];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function up(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var sr=class extends Ne{constructor(t,e,n,i,r,a,o,l,c,h=Ei){if(h!==Ei&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ei&&(n=ii),n===void 0&&h===Di&&(n=Ui),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Pc=new Ne,Gl=new sr(1,1),Lc=new Zs,Uc=new to,Dc=new nr,Wl=[],Xl=[],Yl=new Float32Array(16),Kl=new Float32Array(9),Jl=new Float32Array(4);function Hi(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Wl[i];if(r===void 0&&(r=new Float32Array(i),Wl[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Mr(s,t){let e=Xl[t];e===void 0&&(e=new Int32Array(t),Xl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function dp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function fp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function pp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function gp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function mp(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(ve(e,n))return;Jl.set(n),s.uniformMatrix2fv(this.addr,!1,Jl),Ce(e,n)}}function Ap(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(ve(e,n))return;Kl.set(n),s.uniformMatrix3fv(this.addr,!1,Kl),Ce(e,n)}}function xp(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(ve(e,n))return;Yl.set(n),s.uniformMatrix4fv(this.addr,!1,Yl),Ce(e,n)}}function vp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Cp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function yp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function _p(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function Ip(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Mp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function bp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function Sp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function Ep(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Gl.compareFunction=Ec,r=Gl):r=Pc,e.setTexture2D(t||r,i)}function wp(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Uc,i)}function Tp(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Dc,i)}function Rp(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Lc,i)}function Vp(s){switch(s){case 5126:return dp;case 35664:return fp;case 35665:return pp;case 35666:return gp;case 35674:return mp;case 35675:return Ap;case 35676:return xp;case 5124:case 35670:return vp;case 35667:case 35671:return Cp;case 35668:case 35672:return yp;case 35669:case 35673:return _p;case 5125:return Ip;case 36294:return Mp;case 36295:return bp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return Tp;case 36289:case 36303:case 36311:case 36292:return Rp}}function Pp(s,t){s.uniform1fv(this.addr,t)}function Lp(s,t){let e=Hi(t,this.size,2);s.uniform2fv(this.addr,e)}function Up(s,t){let e=Hi(t,this.size,3);s.uniform3fv(this.addr,e)}function Dp(s,t){let e=Hi(t,this.size,4);s.uniform4fv(this.addr,e)}function qp(s,t){let e=Hi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Np(s,t){let e=Hi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function zp(s,t){let e=Hi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Fp(s,t){s.uniform1iv(this.addr,t)}function Op(s,t){s.uniform2iv(this.addr,t)}function Bp(s,t){s.uniform3iv(this.addr,t)}function kp(s,t){s.uniform4iv(this.addr,t)}function Hp(s,t){s.uniform1uiv(this.addr,t)}function Gp(s,t){s.uniform2uiv(this.addr,t)}function Wp(s,t){s.uniform3uiv(this.addr,t)}function Xp(s,t){s.uniform4uiv(this.addr,t)}function Yp(s,t,e){let n=this.cache,i=t.length,r=Mr(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Pc,r[a])}function Kp(s,t,e){let n=this.cache,i=t.length,r=Mr(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Uc,r[a])}function Jp(s,t,e){let n=this.cache,i=t.length,r=Mr(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Dc,r[a])}function Zp(s,t,e){let n=this.cache,i=t.length,r=Mr(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Lc,r[a])}function Qp(s){switch(s){case 5126:return Pp;case 35664:return Lp;case 35665:return Up;case 35666:return Dp;case 35674:return qp;case 35675:return Np;case 35676:return zp;case 5124:case 35670:return Fp;case 35667:case 35671:return Op;case 35668:case 35672:return Bp;case 35669:case 35673:return kp;case 5125:return Hp;case 36294:return Gp;case 36295:return Wp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return Kp;case 35680:case 36300:case 36308:case 36293:return Jp;case 36289:case 36303:case 36311:case 36292:return Zp}}var io=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vp(e.type)}},so=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qp(e.type)}},ro=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},ha=/(\w+)(\])?(\[|\.)?/g;function Zl(s,t){s.seq.push(t),s.map[t.id]=t}function jp(s,t,e){let n=s.name,i=n.length;for(ha.lastIndex=0;;){let r=ha.exec(n),a=ha.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Zl(e,c===void 0?new io(o,s,t):new so(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new ro(o),Zl(e,u)),e=u}}}var Ti=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);jp(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Ql(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var $p=37297,tg=0;function eg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var jl=new qt;function ng(s){Bt._getMatrix(jl,Bt.workingColorSpace,s);let t=`mat3( ${jl.elements.map(e=>e.toFixed(4))} )`;switch(Bt.getTransfer(s)){case Ir:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function $l(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+eg(s.getShaderSource(t),a)}else return i}function ig(s,t){let e=ng(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sg(s,t){let e;switch(t){case Vo:e="Linear";break;case Po:e="Reinhard";break;case Lo:e="Cineon";break;case Uo:e="ACESFilmic";break;case Do:e="AgX";break;case qo:e="Neutral";break;case Dh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var qs=new L;function rg(){Bt.getLuminanceCoefficients(qs);let s=qs.x.toFixed(4),t=qs.y.toFixed(4),e=qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ag(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function og(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function is(s){return s!==""}function tc(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ec(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(s){return s.replace(cg,ug)}var hg=new Map;function ug(s,t){let e=zt[t];if(e===void 0){let n=hg.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ao(e)}var dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nc(s){return s.replace(dg,fg)}function fg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ic(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function pg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ph?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function gg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Pi:case Li:t="ENVMAP_TYPE_CUBE";break;case _r:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Li:t="ENVMAP_MODE_REFRACTION";break}return t}function Ag(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ro:t="ENVMAP_BLENDING_MULTIPLY";break;case Lh:t="ENVMAP_BLENDING_MIX";break;case Uh:t="ENVMAP_BLENDING_ADD";break}return t}function xg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function vg(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=pg(e),c=gg(e),h=mg(e),u=Ag(e),f=xg(e),p=ag(e),m=og(r),A=i.createProgram(),g,d,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(is).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(is).join(`
`),d.length>0&&(d+=`
`)):(g=[ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),d=[ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?zt.tonemapping_pars_fragment:"",e.toneMapping!==qn?sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,ig("linearToOutputTexel",e.outputColorSpace),rg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(is).join(`
`)),a=ao(a),a=tc(a,e),a=ec(a,e),o=ao(o),o=tc(o,e),o=ec(o,e),a=nc(a),o=nc(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let y=x+g+a,v=x+d+o,w=Ql(i,i.VERTEX_SHADER,y),b=Ql(i,i.FRAGMENT_SHADER,v);i.attachShader(A,w),i.attachShader(A,b),e.index0AttributeName!==void 0?i.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(A,0,"position"),i.linkProgram(A);function E(R){if(s.debug.checkShaderErrors){let O=i.getProgramInfoLog(A).trim(),N=i.getShaderInfoLog(w).trim(),H=i.getShaderInfoLog(b).trim(),J=!0,G=!0;if(i.getProgramParameter(A,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,A,w,b);else{let $=$l(i,w,"vertex"),B=$l(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(A,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+$+`
`+B)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||H==="")&&(G=!1);G&&(R.diagnostics={runnable:J,programLog:O,vertexShader:{log:N,prefix:g},fragmentShader:{log:H,prefix:d}})}i.deleteShader(w),i.deleteShader(b),T=new Ti(i,A),M=lg(i,A)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(A,$p)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tg++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=w,this.fragmentShader=b,this}var Cg=0,oo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new lo(t),e.set(t,n)),n}},lo=class{constructor(t){this.id=Cg++,this.code=t,this.usedTimes=0}};function yg(s,t,e,n,i,r,a){let o=new js,l=new oo,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,_,R,O,N){let H=O.fog,J=N.geometry,G=M.isMeshStandardMaterial?O.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),B=$&&$.mapping===_r?$.image.height:null,rt=m[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ft=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Mt=ft!==void 0?ft.length:0,Ft=0;J.morphAttributes.position!==void 0&&(Ft=1),J.morphAttributes.normal!==void 0&&(Ft=2),J.morphAttributes.color!==void 0&&(Ft=3);let ee,X,nt,yt;if(rt){let te=an[rt];ee=te.vertexShader,X=te.fragmentShader}else ee=M.vertexShader,X=M.fragmentShader,l.update(M),nt=l.getVertexShaderID(M),yt=l.getFragmentShaderID(M);let ot=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),Lt=N.isInstancedMesh===!0,Ot=N.isBatchedMesh===!0,he=!!M.map,Xt=!!M.matcap,fe=!!$,D=!!M.aoMap,Xe=!!M.lightMap,kt=!!M.bumpMap,Ht=!!M.normalMap,St=!!M.displacementMap,re=!!M.emissiveMap,bt=!!M.metalnessMap,S=!!M.roughnessMap,C=M.anisotropy>0,q=M.clearcoat>0,Y=M.dispersion>0,Z=M.iridescence>0,W=M.sheen>0,_t=M.transmission>0,lt=C&&!!M.anisotropyMap,pt=q&&!!M.clearcoatMap,Yt=q&&!!M.clearcoatNormalMap,j=q&&!!M.clearcoatRoughnessMap,gt=Z&&!!M.iridescenceMap,wt=Z&&!!M.iridescenceThicknessMap,Vt=W&&!!M.sheenColorMap,mt=W&&!!M.sheenRoughnessMap,Gt=!!M.specularMap,Nt=!!M.specularColorMap,ie=!!M.specularIntensityMap,V=_t&&!!M.transmissionMap,at=_t&&!!M.thicknessMap,k=!!M.gradientMap,K=!!M.alphaMap,ut=M.alphaTest>0,ct=!!M.alphaHash,Ut=!!M.extensions,ue=qn;M.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ue=s.toneMapping);let be={shaderID:rt,shaderType:M.type,shaderName:M.name,vertexShader:ee,fragmentShader:X,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:yt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&N._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&N.instanceColor!==null,instancingMorph:Lt&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?s.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ki,alphaToCoverage:!!M.alphaToCoverage,map:he,matcap:Xt,envMap:fe,envMapMode:fe&&$.mapping,envMapCubeUVHeight:B,aoMap:D,lightMap:Xe,bumpMap:kt,normalMap:Ht,displacementMap:f&&St,emissiveMap:re,normalMapObjectSpace:Ht&&M.normalMapType===Fh,normalMapTangentSpace:Ht&&M.normalMapType===Sc,metalnessMap:bt,roughnessMap:S,anisotropy:C,anisotropyMap:lt,clearcoat:q,clearcoatMap:pt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:j,dispersion:Y,iridescence:Z,iridescenceMap:gt,iridescenceThicknessMap:wt,sheen:W,sheenColorMap:Vt,sheenRoughnessMap:mt,specularMap:Gt,specularColorMap:Nt,specularIntensityMap:ie,transmission:_t,transmissionMap:V,thicknessMap:at,gradientMap:k,opaque:M.transparent===!1&&M.blending===Si&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:ut,alphaHash:ct,combine:M.combine,mapUv:he&&A(M.map.channel),aoMapUv:D&&A(M.aoMap.channel),lightMapUv:Xe&&A(M.lightMap.channel),bumpMapUv:kt&&A(M.bumpMap.channel),normalMapUv:Ht&&A(M.normalMap.channel),displacementMapUv:St&&A(M.displacementMap.channel),emissiveMapUv:re&&A(M.emissiveMap.channel),metalnessMapUv:bt&&A(M.metalnessMap.channel),roughnessMapUv:S&&A(M.roughnessMap.channel),anisotropyMapUv:lt&&A(M.anisotropyMap.channel),clearcoatMapUv:pt&&A(M.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&A(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&A(M.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&A(M.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&A(M.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&A(M.sheenColorMap.channel),sheenRoughnessMapUv:mt&&A(M.sheenRoughnessMap.channel),specularMapUv:Gt&&A(M.specularMap.channel),specularColorMapUv:Nt&&A(M.specularColorMap.channel),specularIntensityMapUv:ie&&A(M.specularIntensityMap.channel),transmissionMapUv:V&&A(M.transmissionMap.channel),thicknessMapUv:at&&A(M.thicknessMap.channel),alphaMapUv:K&&A(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ht||C),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!J.attributes.uv&&(he||K),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:N.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Ft,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:he&&M.map.isVideoTexture===!0&&Bt.getTransfer(M.map.colorSpace)===$t,decodeVideoTextureEmissive:re&&M.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(M.emissiveMap.colorSpace)===$t,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===He,flipSided:M.side===qe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ut&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&M.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function d(M){let _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)_.push(R),_.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(x(_,M),y(_,M),_.push(s.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function x(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function y(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){let _=m[M.type],R;if(_){let O=an[_];R=Bn.clone(O.uniforms)}else R=M.uniforms;return R}function w(M,_){let R;for(let O=0,N=h.length;O<N;O++){let H=h[O];if(H.cacheKey===_){R=H,++R.usedTimes;break}}return R===void 0&&(R=new vg(s,_,M,r),h.push(R)),R}function b(M){if(--M.usedTimes===0){let _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function E(M){l.remove(M)}function T(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:v,acquireProgram:w,releaseProgram:b,releaseShaderCache:E,programs:h,dispose:T}}function _g(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Ig(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function sc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function rc(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,p,m,A,g){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:m,renderOrder:u.renderOrder,z:A,group:g},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=m,d.renderOrder=u.renderOrder,d.z=A,d.group=g),t++,d}function o(u,f,p,m,A,g){let d=a(u,f,p,m,A,g);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function l(u,f,p,m,A,g){let d=a(u,f,p,m,A,g);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Ig),n.length>1&&n.sort(f||sc),i.length>1&&i.sort(f||sc)}function h(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Mg(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new rc,s.set(n,[a])):i>=r.length?(a=new rc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function bg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Rt};break;case"SpotLight":e={position:new L,direction:new L,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Sg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Eg=0;function wg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Tg(s){let t=new bg,e=Sg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,r=new ne,a=new ne;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,m=0,A=0,g=0,d=0,x=0,y=0,v=0,w=0,b=0,E=0;c.sort(wg);for(let M=0,_=c.length;M<_;M++){let R=c[M],O=R.color,N=R.intensity,H=R.distance,J=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=O.r*N,u+=O.g*N,f+=O.b*N;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],N);E++}else if(R.isDirectionalLight){let G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let $=R.shadow,B=e.get(R);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=R.shadow.matrix,x++}n.directional[p]=G,p++}else if(R.isSpotLight){let G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(O).multiplyScalar(N),G.distance=H,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[A]=G;let $=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,$.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[A]=$.matrix,R.castShadow){let B=e.get(R);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,n.spotShadow[A]=B,n.spotShadowMap[A]=J,v++}A++}else if(R.isRectAreaLight){let G=t.get(R);G.color.copy(O).multiplyScalar(N),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=G,g++}else if(R.isPointLight){let G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){let $=R.shadow,B=e.get(R);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,B.shadowCameraNear=$.camera.near,B.shadowCameraFar=$.camera.far,n.pointShadow[m]=B,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=R.shadow.matrix,y++}n.point[m]=G,m++}else if(R.isHemisphereLight){let G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(N),G.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[d]=G,d++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let T=n.hash;(T.directionalLength!==p||T.pointLength!==m||T.spotLength!==A||T.rectAreaLength!==g||T.hemiLength!==d||T.numDirectionalShadows!==x||T.numPointShadows!==y||T.numSpotShadows!==v||T.numSpotMaps!==w||T.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=A,n.rectArea.length=g,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+w-b,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,T.directionalLength=p,T.pointLength=m,T.spotLength=A,T.rectAreaLength=g,T.hemiLength=d,T.numDirectionalShadows=x,T.numPointShadows=y,T.numSpotShadows=v,T.numSpotMaps=w,T.numLightProbes=E,n.version=Eg++)}function l(c,h){let u=0,f=0,p=0,m=0,A=0,g=h.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){let y=c[d];if(y.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(y.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let v=n.hemi[A];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),A++}}}return{setup:o,setupView:l,state:n}}function ac(s){let t=new Tg(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Rg(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new ac(s),t.set(i,[o])):r>=a.length?(o=new ac(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var co=class extends On{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ho=class extends On{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Vg=`void main() {
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
}`;function Lg(s,t,e){let n=new os,i=new Ct,r=new Ct,a=new de,o=new co({depthPacking:zh}),l=new ho,c={},h=e.maxTextureSize,u={[Nn]:qe,[qe]:Nn,[He]:He},f=new xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Vg,fragmentShader:Pg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new pe;m.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new me(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gc;let d=this.type;this.render=function(b,E,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;let M=s.getRenderTarget(),_=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),O=s.state;O.setBlending(cn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let N=d!==yn&&this.type===yn,H=d===yn&&this.type!==yn;for(let J=0,G=b.length;J<G;J++){let $=b[J],B=$.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let rt=B.getFrameExtents();if(i.multiply(rt),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,B.mapSize.y=r.y)),B.map===null||N===!0||H===!0){let Mt=this.type!==yn?{minFilter:Ge,magFilter:Ge}:{};B.map!==null&&B.map.dispose(),B.map=new Pe(i.x,i.y,Mt),B.map.texture.name=$.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();let ft=B.getViewportCount();for(let Mt=0;Mt<ft;Mt++){let Ft=B.getViewport(Mt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),O.viewport(a),B.updateMatrices($,Mt),n=B.getFrustum(),v(E,T,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===yn&&x(B,T),B.needsUpdate=!1}d=this.type,g.needsUpdate=!1,s.setRenderTarget(M,_,R)};function x(b,E){let T=t.update(A);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Pe(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(E,null,T,f,A,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(E,null,T,p,A,null)}function y(b,E,T,M){let _=null,R=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)_=R;else if(_=T.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let O=_.uuid,N=E.uuid,H=c[O];H===void 0&&(H={},c[O]=H);let J=H[N];J===void 0&&(J=_.clone(),H[N]=J,E.addEventListener("dispose",w)),_=J}if(_.visible=E.visible,_.wireframe=E.wireframe,M===yn?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:u[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,T.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let O=s.properties.get(_);O.light=T}return _}function v(b,E,T,M,_){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&_===yn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);let N=t.update(b),H=b.material;if(Array.isArray(H)){let J=N.groups;for(let G=0,$=J.length;G<$;G++){let B=J[G],rt=H[B.materialIndex];if(rt&&rt.visible){let ft=y(b,rt,M,_);b.onBeforeShadow(s,b,E,T,N,ft,B),s.renderBufferDirect(T,null,N,ft,b,B),b.onAfterShadow(s,b,E,T,N,ft,B)}}}else if(H.visible){let J=y(b,H,M,_);b.onBeforeShadow(s,b,E,T,N,J,null),s.renderBufferDirect(T,null,N,J,b,null),b.onAfterShadow(s,b,E,T,N,J,null)}}let O=b.children;for(let N=0,H=O.length;N<H;N++)v(O[N],E,T,M,_)}function w(b){b.target.removeEventListener("dispose",w);for(let T in c){let M=c[T],_=b.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}var Ug={[pa]:ga,[ma]:va,[Aa]:Ca,[Vi]:xa,[ga]:pa,[va]:ma,[Ca]:Aa,[xa]:Vi};function Dg(s,t){function e(){let V=!1,at=new de,k=null,K=new de(0,0,0,0);return{setMask:function(ut){k!==ut&&!V&&(s.colorMask(ut,ut,ut,ut),k=ut)},setLocked:function(ut){V=ut},setClear:function(ut,ct,Ut,ue,be){be===!0&&(ut*=ue,ct*=ue,Ut*=ue),at.set(ut,ct,Ut,ue),K.equals(at)===!1&&(s.clearColor(ut,ct,Ut,ue),K.copy(at))},reset:function(){V=!1,k=null,K.set(-1,0,0,0)}}}function n(){let V=!1,at=!1,k=null,K=null,ut=null;return{setReversed:function(ct){if(at!==ct){let Ut=t.get("EXT_clip_control");at?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);let ue=ut;ut=null,this.setClear(ue)}at=ct},getReversed:function(){return at},setTest:function(ct){ct?ot(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(ct){k!==ct&&!V&&(s.depthMask(ct),k=ct)},setFunc:function(ct){if(at&&(ct=Ug[ct]),K!==ct){switch(ct){case pa:s.depthFunc(s.NEVER);break;case ga:s.depthFunc(s.ALWAYS);break;case ma:s.depthFunc(s.LESS);break;case Vi:s.depthFunc(s.LEQUAL);break;case Aa:s.depthFunc(s.EQUAL);break;case xa:s.depthFunc(s.GEQUAL);break;case va:s.depthFunc(s.GREATER);break;case Ca:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=ct}},setLocked:function(ct){V=ct},setClear:function(ct){ut!==ct&&(at&&(ct=1-ct),s.clearDepth(ct),ut=ct)},reset:function(){V=!1,k=null,K=null,ut=null,at=!1}}}function i(){let V=!1,at=null,k=null,K=null,ut=null,ct=null,Ut=null,ue=null,be=null;return{setTest:function(te){V||(te?ot(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(te){at!==te&&!V&&(s.stencilMask(te),at=te)},setFunc:function(te,Je,pn){(k!==te||K!==Je||ut!==pn)&&(s.stencilFunc(te,Je,pn),k=te,K=Je,ut=pn)},setOp:function(te,Je,pn){(ct!==te||Ut!==Je||ue!==pn)&&(s.stencilOp(te,Je,pn),ct=te,Ut=Je,ue=pn)},setLocked:function(te){V=te},setClear:function(te){be!==te&&(s.clearStencil(te),be=te)},reset:function(){V=!1,at=null,k=null,K=null,ut=null,ct=null,Ut=null,ue=null,be=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],m=null,A=!1,g=null,d=null,x=null,y=null,v=null,w=null,b=null,E=new Rt(0,0,0),T=0,M=!1,_=null,R=null,O=null,N=null,H=null,J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,$=0,B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=$>=2);let rt=null,ft={},Mt=s.getParameter(s.SCISSOR_BOX),Ft=s.getParameter(s.VIEWPORT),ee=new de().fromArray(Mt),X=new de().fromArray(Ft);function nt(V,at,k,K){let ut=new Uint8Array(4),ct=s.createTexture();s.bindTexture(V,ct),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<k;Ut++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(at+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return ct}let yt={};yt[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(s.DEPTH_TEST),a.setFunc(Vi),kt(!1),Ht(cl),ot(s.CULL_FACE),D(cn);function ot(V){h[V]!==!0&&(s.enable(V),h[V]=!0)}function Tt(V){h[V]!==!1&&(s.disable(V),h[V]=!1)}function Lt(V,at){return u[V]!==at?(s.bindFramebuffer(V,at),u[V]=at,V===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=at),V===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=at),!0):!1}function Ot(V,at){let k=p,K=!1;if(V){k=f.get(at),k===void 0&&(k=[],f.set(at,k));let ut=V.textures;if(k.length!==ut.length||k[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,Ut=ut.length;ct<Ut;ct++)k[ct]=s.COLOR_ATTACHMENT0+ct;k.length=ut.length,K=!0}}else k[0]!==s.BACK&&(k[0]=s.BACK,K=!0);K&&s.drawBuffers(k)}function he(V){return m!==V?(s.useProgram(V),m=V,!0):!1}let Xt={[jn]:s.FUNC_ADD,[mh]:s.FUNC_SUBTRACT,[Ah]:s.FUNC_REVERSE_SUBTRACT};Xt[xh]=s.MIN,Xt[vh]=s.MAX;let fe={[Ch]:s.ZERO,[yh]:s.ONE,[_h]:s.SRC_COLOR,[da]:s.SRC_ALPHA,[wh]:s.SRC_ALPHA_SATURATE,[Sh]:s.DST_COLOR,[Mh]:s.DST_ALPHA,[Ih]:s.ONE_MINUS_SRC_COLOR,[fa]:s.ONE_MINUS_SRC_ALPHA,[Eh]:s.ONE_MINUS_DST_COLOR,[bh]:s.ONE_MINUS_DST_ALPHA,[Th]:s.CONSTANT_COLOR,[Rh]:s.ONE_MINUS_CONSTANT_COLOR,[Vh]:s.CONSTANT_ALPHA,[Ph]:s.ONE_MINUS_CONSTANT_ALPHA};function D(V,at,k,K,ut,ct,Ut,ue,be,te){if(V===cn){A===!0&&(Tt(s.BLEND),A=!1);return}if(A===!1&&(ot(s.BLEND),A=!0),V!==gh){if(V!==g||te!==M){if((d!==jn||v!==jn)&&(s.blendEquation(s.FUNC_ADD),d=jn,v=jn),te)switch(V){case Si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ri:s.blendFunc(s.ONE,s.ONE);break;case hl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ul:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ri:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case hl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ul:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}x=null,y=null,w=null,b=null,E.set(0,0,0),T=0,g=V,M=te}return}ut=ut||at,ct=ct||k,Ut=Ut||K,(at!==d||ut!==v)&&(s.blendEquationSeparate(Xt[at],Xt[ut]),d=at,v=ut),(k!==x||K!==y||ct!==w||Ut!==b)&&(s.blendFuncSeparate(fe[k],fe[K],fe[ct],fe[Ut]),x=k,y=K,w=ct,b=Ut),(ue.equals(E)===!1||be!==T)&&(s.blendColor(ue.r,ue.g,ue.b,be),E.copy(ue),T=be),g=V,M=!1}function Xe(V,at){V.side===He?Tt(s.CULL_FACE):ot(s.CULL_FACE);let k=V.side===qe;at&&(k=!k),kt(k),V.blending===Si&&V.transparent===!1?D(cn):D(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);let K=V.stencilWrite;o.setTest(K),K&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),re(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ot(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(V){_!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),_=V)}function Ht(V){V!==dh?(ot(s.CULL_FACE),V!==R&&(V===cl?s.cullFace(s.BACK):V===fh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),R=V}function St(V){V!==O&&(G&&s.lineWidth(V),O=V)}function re(V,at,k){V?(ot(s.POLYGON_OFFSET_FILL),(N!==at||H!==k)&&(s.polygonOffset(at,k),N=at,H=k)):Tt(s.POLYGON_OFFSET_FILL)}function bt(V){V?ot(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function S(V){V===void 0&&(V=s.TEXTURE0+J-1),rt!==V&&(s.activeTexture(V),rt=V)}function C(V,at,k){k===void 0&&(rt===null?k=s.TEXTURE0+J-1:k=rt);let K=ft[k];K===void 0&&(K={type:void 0,texture:void 0},ft[k]=K),(K.type!==V||K.texture!==at)&&(rt!==k&&(s.activeTexture(k),rt=k),s.bindTexture(V,at||yt[V]),K.type=V,K.texture=at)}function q(){let V=ft[rt];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function W(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Yt(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function j(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function wt(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Vt(V){ee.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),ee.copy(V))}function mt(V){X.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),X.copy(V))}function Gt(V,at){let k=c.get(at);k===void 0&&(k=new WeakMap,c.set(at,k));let K=k.get(V);K===void 0&&(K=s.getUniformBlockIndex(at,V.name),k.set(V,K))}function Nt(V,at){let K=c.get(at).get(V);l.get(at)!==K&&(s.uniformBlockBinding(at,K,V.__bindingPointIndex),l.set(at,K))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},rt=null,ft={},u={},f=new WeakMap,p=[],m=null,A=!1,g=null,d=null,x=null,y=null,v=null,w=null,b=null,E=new Rt(0,0,0),T=0,M=!1,_=null,R=null,O=null,N=null,H=null,ee.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:Tt,bindFramebuffer:Lt,drawBuffers:Ot,useProgram:he,setBlending:D,setMaterial:Xe,setFlipSided:kt,setCullFace:Ht,setLineWidth:St,setPolygonOffset:re,setScissorTest:bt,activeTexture:S,bindTexture:C,unbindTexture:q,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:gt,texImage3D:wt,updateUBOMapping:Gt,uniformBlockBinding:Nt,texStorage2D:Yt,texStorage3D:j,texSubImage2D:W,texSubImage3D:_t,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:Vt,viewport:mt,reset:ie}}function oc(s,t,e,n){let i=qg(n);switch(e){case Cc:return s*t;case _c:return s*t;case Ic:return s*t*2;case Oo:return s*t/i.components*i.byteLength;case Bo:return s*t/i.components*i.byteLength;case Mc:return s*t*2/i.components*i.byteLength;case ko:return s*t*2/i.components*i.byteLength;case yc:return s*t*3/i.components*i.byteLength;case tn:return s*t*4/i.components*i.byteLength;case Ho:return s*t*4/i.components*i.byteLength;case Bs:case ks:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Hs:case Gs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ba:case Ea:return Math.max(s,16)*Math.max(t,8)/4;case Ma:case Sa:return Math.max(s,8)*Math.max(t,8)/2;case wa:case Ta:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ra:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case La:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Da:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case qa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Na:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case za:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ws:case Wa:case Xa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case bc:case Ya:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ka:case Ja:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qg(s){switch(s){case bn:case Ac:return{byteLength:1,components:1};case as:case xc:case nn:return{byteLength:2,components:1};case zo:case Fo:return{byteLength:2,components:4};case ii:case No:case ln:return{byteLength:4,components:1};case vc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Ng(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(S,C){return p?new OffscreenCanvas(S,C):Ks("canvas")}function A(S,C,q){let Y=1,Z=bt(S);if((Z.width>q||Z.height>q)&&(Y=q/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap||typeof VideoFrame!="undefined"&&S instanceof VideoFrame){let W=Math.floor(Y*Z.width),_t=Math.floor(Y*Z.height);u===void 0&&(u=m(W,_t));let lt=C?m(W,_t):u;return lt.width=W,lt.height=_t,lt.getContext("2d").drawImage(S,0,0,W,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+W+"x"+_t+")."),lt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),S;return S}function g(S){return S.generateMipmaps}function d(S){s.generateMipmap(S)}function x(S){return S.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?s.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(S,C,q,Y,Z=!1){if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let W=C;if(C===s.RED&&(q===s.FLOAT&&(W=s.R32F),q===s.HALF_FLOAT&&(W=s.R16F),q===s.UNSIGNED_BYTE&&(W=s.R8)),C===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(W=s.R8UI),q===s.UNSIGNED_SHORT&&(W=s.R16UI),q===s.UNSIGNED_INT&&(W=s.R32UI),q===s.BYTE&&(W=s.R8I),q===s.SHORT&&(W=s.R16I),q===s.INT&&(W=s.R32I)),C===s.RG&&(q===s.FLOAT&&(W=s.RG32F),q===s.HALF_FLOAT&&(W=s.RG16F),q===s.UNSIGNED_BYTE&&(W=s.RG8)),C===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(W=s.RG8UI),q===s.UNSIGNED_SHORT&&(W=s.RG16UI),q===s.UNSIGNED_INT&&(W=s.RG32UI),q===s.BYTE&&(W=s.RG8I),q===s.SHORT&&(W=s.RG16I),q===s.INT&&(W=s.RG32I)),C===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(W=s.RGB8UI),q===s.UNSIGNED_SHORT&&(W=s.RGB16UI),q===s.UNSIGNED_INT&&(W=s.RGB32UI),q===s.BYTE&&(W=s.RGB8I),q===s.SHORT&&(W=s.RGB16I),q===s.INT&&(W=s.RGB32I)),C===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),q===s.UNSIGNED_INT&&(W=s.RGBA32UI),q===s.BYTE&&(W=s.RGBA8I),q===s.SHORT&&(W=s.RGBA16I),q===s.INT&&(W=s.RGBA32I)),C===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),C===s.RGBA){let _t=Z?Ir:Bt.getTransfer(Y);q===s.FLOAT&&(W=s.RGBA32F),q===s.HALF_FLOAT&&(W=s.RGBA16F),q===s.UNSIGNED_BYTE&&(W=_t===$t?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(S,C){let q;return S?C===null||C===ii||C===Ui?q=s.DEPTH24_STENCIL8:C===ln?q=s.DEPTH32F_STENCIL8:C===as&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===ii||C===Ui?q=s.DEPTH_COMPONENT24:C===ln?q=s.DEPTH_COMPONENT32F:C===as&&(q=s.DEPTH_COMPONENT16),q}function w(S,C){return g(S)===!0||S.isFramebufferTexture&&S.minFilter!==Ge&&S.minFilter!==on?Math.log2(Math.max(C.width,C.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?C.mipmaps.length:1}function b(S){let C=S.target;C.removeEventListener("dispose",b),T(C),C.isVideoTexture&&h.delete(C)}function E(S){let C=S.target;C.removeEventListener("dispose",E),_(C)}function T(S){let C=n.get(S);if(C.__webglInit===void 0)return;let q=S.source,Y=f.get(q);if(Y){let Z=Y[C.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(S),Object.keys(Y).length===0&&f.delete(q)}n.remove(S)}function M(S){let C=n.get(S);s.deleteTexture(C.__webglTexture);let q=S.source,Y=f.get(q);delete Y[C.__cacheKey],a.memory.textures--}function _(S){let C=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(C.__webglFramebuffer[Y]))for(let Z=0;Z<C.__webglFramebuffer[Y].length;Z++)s.deleteFramebuffer(C.__webglFramebuffer[Y][Z]);else s.deleteFramebuffer(C.__webglFramebuffer[Y]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[Y])}else{if(Array.isArray(C.__webglFramebuffer))for(let Y=0;Y<C.__webglFramebuffer.length;Y++)s.deleteFramebuffer(C.__webglFramebuffer[Y]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Y=0;Y<C.__webglColorRenderbuffer.length;Y++)C.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[Y]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let q=S.textures;for(let Y=0,Z=q.length;Y<Z;Y++){let W=n.get(q[Y]);W.__webglTexture&&(s.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(q[Y])}n.remove(S)}let R=0;function O(){R=0}function N(){let S=R;return S>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),R+=1,S}function H(S){let C=[];return C.push(S.wrapS),C.push(S.wrapT),C.push(S.wrapR||0),C.push(S.magFilter),C.push(S.minFilter),C.push(S.anisotropy),C.push(S.internalFormat),C.push(S.format),C.push(S.type),C.push(S.generateMipmaps),C.push(S.premultiplyAlpha),C.push(S.flipY),C.push(S.unpackAlignment),C.push(S.colorSpace),C.join()}function J(S,C){let q=n.get(S);if(S.isVideoTexture&&St(S),S.isRenderTargetTexture===!1&&S.version>0&&q.__version!==S.version){let Y=S.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(q,S,C);return}}e.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+C)}function G(S,C){let q=n.get(S);if(S.version>0&&q.__version!==S.version){X(q,S,C);return}e.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+C)}function $(S,C){let q=n.get(S);if(S.version>0&&q.__version!==S.version){X(q,S,C);return}e.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+C)}function B(S,C){let q=n.get(S);if(S.version>0&&q.__version!==S.version){nt(q,S,C);return}e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+C)}let rt={[rs]:s.REPEAT,[ei]:s.CLAMP_TO_EDGE,[Ia]:s.MIRRORED_REPEAT},ft={[Ge]:s.NEAREST,[qh]:s.NEAREST_MIPMAP_NEAREST,[ms]:s.NEAREST_MIPMAP_LINEAR,[on]:s.LINEAR,[Dr]:s.LINEAR_MIPMAP_NEAREST,[ni]:s.LINEAR_MIPMAP_LINEAR},Mt={[Oh]:s.NEVER,[Xh]:s.ALWAYS,[Bh]:s.LESS,[Ec]:s.LEQUAL,[kh]:s.EQUAL,[Wh]:s.GEQUAL,[Hh]:s.GREATER,[Gh]:s.NOTEQUAL};function Ft(S,C){if(C.type===ln&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===on||C.magFilter===Dr||C.magFilter===ms||C.magFilter===ni||C.minFilter===on||C.minFilter===Dr||C.minFilter===ms||C.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(S,s.TEXTURE_WRAP_S,rt[C.wrapS]),s.texParameteri(S,s.TEXTURE_WRAP_T,rt[C.wrapT]),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,rt[C.wrapR]),s.texParameteri(S,s.TEXTURE_MAG_FILTER,ft[C.magFilter]),s.texParameteri(S,s.TEXTURE_MIN_FILTER,ft[C.minFilter]),C.compareFunction&&(s.texParameteri(S,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(S,s.TEXTURE_COMPARE_FUNC,Mt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Ge||C.minFilter!==ms&&C.minFilter!==ni||C.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(S,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function ee(S,C){let q=!1;S.__webglInit===void 0&&(S.__webglInit=!0,C.addEventListener("dispose",b));let Y=C.source,Z=f.get(Y);Z===void 0&&(Z={},f.set(Y,Z));let W=H(C);if(W!==S.__cacheKey){Z[W]===void 0&&(Z[W]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,q=!0),Z[W].usedTimes++;let _t=Z[S.__cacheKey];_t!==void 0&&(Z[S.__cacheKey].usedTimes--,_t.usedTimes===0&&M(C)),S.__cacheKey=W,S.__webglTexture=Z[W].texture}return q}function X(S,C,q){let Y=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Y=s.TEXTURE_3D);let Z=ee(S,C),W=C.source;e.bindTexture(Y,S.__webglTexture,s.TEXTURE0+q);let _t=n.get(W);if(W.version!==_t.__version||Z===!0){e.activeTexture(s.TEXTURE0+q);let lt=Bt.getPrimaries(Bt.workingColorSpace),pt=C.colorSpace===Dn?null:Bt.getPrimaries(C.colorSpace),Yt=C.colorSpace===Dn||lt===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let j=A(C.image,!1,i.maxTextureSize);j=re(C,j);let gt=r.convert(C.format,C.colorSpace),wt=r.convert(C.type),Vt=y(C.internalFormat,gt,wt,C.colorSpace,C.isVideoTexture);Ft(Y,C);let mt,Gt=C.mipmaps,Nt=C.isVideoTexture!==!0,ie=_t.__version===void 0||Z===!0,V=W.dataReady,at=w(C,j);if(C.isDepthTexture)Vt=v(C.format===Di,C.type),ie&&(Nt?e.texStorage2D(s.TEXTURE_2D,1,Vt,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,Vt,j.width,j.height,0,gt,wt,null));else if(C.isDataTexture)if(Gt.length>0){Nt&&ie&&e.texStorage2D(s.TEXTURE_2D,at,Vt,Gt[0].width,Gt[0].height);for(let k=0,K=Gt.length;k<K;k++)mt=Gt[k],Nt?V&&e.texSubImage2D(s.TEXTURE_2D,k,0,0,mt.width,mt.height,gt,wt,mt.data):e.texImage2D(s.TEXTURE_2D,k,Vt,mt.width,mt.height,0,gt,wt,mt.data);C.generateMipmaps=!1}else Nt?(ie&&e.texStorage2D(s.TEXTURE_2D,at,Vt,j.width,j.height),V&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,j.width,j.height,gt,wt,j.data)):e.texImage2D(s.TEXTURE_2D,0,Vt,j.width,j.height,0,gt,wt,j.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Nt&&ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Vt,Gt[0].width,Gt[0].height,j.depth);for(let k=0,K=Gt.length;k<K;k++)if(mt=Gt[k],C.format!==tn)if(gt!==null)if(Nt){if(V)if(C.layerUpdates.size>0){let ut=oc(mt.width,mt.height,C.format,C.type);for(let ct of C.layerUpdates){let Ut=mt.data.subarray(ct*ut/mt.data.BYTES_PER_ELEMENT,(ct+1)*ut/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,ct,mt.width,mt.height,1,gt,Ut)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,0,mt.width,mt.height,j.depth,gt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,k,Vt,mt.width,mt.height,j.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?V&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,0,mt.width,mt.height,j.depth,gt,wt,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,k,Vt,mt.width,mt.height,j.depth,0,gt,wt,mt.data)}else{Nt&&ie&&e.texStorage2D(s.TEXTURE_2D,at,Vt,Gt[0].width,Gt[0].height);for(let k=0,K=Gt.length;k<K;k++)mt=Gt[k],C.format!==tn?gt!==null?Nt?V&&e.compressedTexSubImage2D(s.TEXTURE_2D,k,0,0,mt.width,mt.height,gt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,k,Vt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?V&&e.texSubImage2D(s.TEXTURE_2D,k,0,0,mt.width,mt.height,gt,wt,mt.data):e.texImage2D(s.TEXTURE_2D,k,Vt,mt.width,mt.height,0,gt,wt,mt.data)}else if(C.isDataArrayTexture)if(Nt){if(ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Vt,j.width,j.height,j.depth),V)if(C.layerUpdates.size>0){let k=oc(j.width,j.height,C.format,C.type);for(let K of C.layerUpdates){let ut=j.data.subarray(K*k/j.data.BYTES_PER_ELEMENT,(K+1)*k/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,j.width,j.height,1,gt,wt,ut)}C.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,gt,wt,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Vt,j.width,j.height,j.depth,0,gt,wt,j.data);else if(C.isData3DTexture)Nt?(ie&&e.texStorage3D(s.TEXTURE_3D,at,Vt,j.width,j.height,j.depth),V&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,gt,wt,j.data)):e.texImage3D(s.TEXTURE_3D,0,Vt,j.width,j.height,j.depth,0,gt,wt,j.data);else if(C.isFramebufferTexture){if(ie)if(Nt)e.texStorage2D(s.TEXTURE_2D,at,Vt,j.width,j.height);else{let k=j.width,K=j.height;for(let ut=0;ut<at;ut++)e.texImage2D(s.TEXTURE_2D,ut,Vt,k,K,0,gt,wt,null),k>>=1,K>>=1}}else if(Gt.length>0){if(Nt&&ie){let k=bt(Gt[0]);e.texStorage2D(s.TEXTURE_2D,at,Vt,k.width,k.height)}for(let k=0,K=Gt.length;k<K;k++)mt=Gt[k],Nt?V&&e.texSubImage2D(s.TEXTURE_2D,k,0,0,gt,wt,mt):e.texImage2D(s.TEXTURE_2D,k,Vt,gt,wt,mt);C.generateMipmaps=!1}else if(Nt){if(ie){let k=bt(j);e.texStorage2D(s.TEXTURE_2D,at,Vt,k.width,k.height)}V&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,wt,j)}else e.texImage2D(s.TEXTURE_2D,0,Vt,gt,wt,j);g(C)&&d(Y),_t.__version=W.version,C.onUpdate&&C.onUpdate(C)}S.__version=C.version}function nt(S,C,q){if(C.image.length!==6)return;let Y=ee(S,C),Z=C.source;e.bindTexture(s.TEXTURE_CUBE_MAP,S.__webglTexture,s.TEXTURE0+q);let W=n.get(Z);if(Z.version!==W.__version||Y===!0){e.activeTexture(s.TEXTURE0+q);let _t=Bt.getPrimaries(Bt.workingColorSpace),lt=C.colorSpace===Dn?null:Bt.getPrimaries(C.colorSpace),pt=C.colorSpace===Dn||_t===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Yt=C.isCompressedTexture||C.image[0].isCompressedTexture,j=C.image[0]&&C.image[0].isDataTexture,gt=[];for(let K=0;K<6;K++)!Yt&&!j?gt[K]=A(C.image[K],!0,i.maxCubemapSize):gt[K]=j?C.image[K].image:C.image[K],gt[K]=re(C,gt[K]);let wt=gt[0],Vt=r.convert(C.format,C.colorSpace),mt=r.convert(C.type),Gt=y(C.internalFormat,Vt,mt,C.colorSpace),Nt=C.isVideoTexture!==!0,ie=W.__version===void 0||Y===!0,V=Z.dataReady,at=w(C,wt);Ft(s.TEXTURE_CUBE_MAP,C);let k;if(Yt){Nt&&ie&&e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Gt,wt.width,wt.height);for(let K=0;K<6;K++){k=gt[K].mipmaps;for(let ut=0;ut<k.length;ut++){let ct=k[ut];C.format!==tn?Vt!==null?Nt?V&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,ct.width,ct.height,Vt,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Gt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,ct.width,ct.height,Vt,mt,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Gt,ct.width,ct.height,0,Vt,mt,ct.data)}}}else{if(k=C.mipmaps,Nt&&ie){k.length>0&&at++;let K=bt(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Gt,K.width,K.height)}for(let K=0;K<6;K++)if(j){Nt?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,gt[K].width,gt[K].height,Vt,mt,gt[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Gt,gt[K].width,gt[K].height,0,Vt,mt,gt[K].data);for(let ut=0;ut<k.length;ut++){let Ut=k[ut].image[K].image;Nt?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Ut.width,Ut.height,Vt,mt,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Gt,Ut.width,Ut.height,0,Vt,mt,Ut.data)}}else{Nt?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Vt,mt,gt[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Gt,Vt,mt,gt[K]);for(let ut=0;ut<k.length;ut++){let ct=k[ut];Nt?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Vt,mt,ct.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Gt,Vt,mt,ct.image[K])}}}g(C)&&d(s.TEXTURE_CUBE_MAP),W.__version=Z.version,C.onUpdate&&C.onUpdate(C)}S.__version=C.version}function yt(S,C,q,Y,Z,W){let _t=r.convert(q.format,q.colorSpace),lt=r.convert(q.type),pt=y(q.internalFormat,_t,lt,q.colorSpace),Yt=n.get(C),j=n.get(q);if(j.__renderTarget=C,!Yt.__hasExternalTextures){let gt=Math.max(1,C.width>>W),wt=Math.max(1,C.height>>W);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,W,pt,gt,wt,C.depth,0,_t,lt,null):e.texImage2D(Z,W,pt,gt,wt,0,_t,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,S),Ht(C)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Z,j.__webglTexture,0,kt(C)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Z,j.__webglTexture,W),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(S,C,q){if(s.bindRenderbuffer(s.RENDERBUFFER,S),C.depthBuffer){let Y=C.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,W=v(C.stencilBuffer,Z),_t=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=kt(C);Ht(C)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,W,C.width,C.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,W,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,W,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,S)}else{let Y=C.textures;for(let Z=0;Z<Y.length;Z++){let W=Y[Z],_t=r.convert(W.format,W.colorSpace),lt=r.convert(W.type),pt=y(W.internalFormat,_t,lt,W.colorSpace),Yt=kt(C);q&&Ht(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,pt,C.width,C.height):Ht(C)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Yt,pt,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,pt,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(S,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,S),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(C.depthTexture);Y.__renderTarget=C,(!Y.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),J(C.depthTexture,0);let Z=Y.__webglTexture,W=kt(C);if(C.depthTexture.format===Ei)Ht(C)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(C.depthTexture.format===Di)Ht(C)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Lt(S){let C=n.get(S),q=S.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==S.depthTexture){let Y=S.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),Y){let Z=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),C.__depthDisposeCallback=Z}C.__boundDepthTexture=Y}if(S.depthTexture&&!C.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Tt(C.__webglFramebuffer,S)}else if(q){C.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[Y]),C.__webglDepthbuffer[Y]===void 0)C.__webglDepthbuffer[Y]=s.createRenderbuffer(),ot(C.__webglDepthbuffer[Y],S,!1);else{let Z=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=C.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,W)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),ot(C.__webglDepthbuffer,S,!1);else{let Y=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,Z)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(S,C,q){let Y=n.get(S);C!==void 0&&yt(Y.__webglFramebuffer,S,S.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Lt(S)}function he(S){let C=S.texture,q=n.get(S),Y=n.get(C);S.addEventListener("dispose",E);let Z=S.textures,W=S.isWebGLCubeRenderTarget===!0,_t=Z.length>1;if(_t||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=C.version,a.memory.textures++),W){q.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(C.mipmaps&&C.mipmaps.length>0){q.__webglFramebuffer[lt]=[];for(let pt=0;pt<C.mipmaps.length;pt++)q.__webglFramebuffer[lt][pt]=s.createFramebuffer()}else q.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){q.__webglFramebuffer=[];for(let lt=0;lt<C.mipmaps.length;lt++)q.__webglFramebuffer[lt]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(_t)for(let lt=0,pt=Z.length;lt<pt;lt++){let Yt=n.get(Z[lt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=s.createTexture(),a.memory.textures++)}if(S.samples>0&&Ht(S)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let lt=0;lt<Z.length;lt++){let pt=Z[lt];q.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[lt]);let Yt=r.convert(pt.format,pt.colorSpace),j=r.convert(pt.type),gt=y(pt.internalFormat,Yt,j,pt.colorSpace,S.isXRRenderTarget===!0),wt=kt(S);s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,gt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,q.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),S.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(q.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(W){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,C);for(let lt=0;lt<6;lt++)if(C.mipmaps&&C.mipmaps.length>0)for(let pt=0;pt<C.mipmaps.length;pt++)yt(q.__webglFramebuffer[lt][pt],S,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt);else yt(q.__webglFramebuffer[lt],S,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(C)&&d(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let lt=0,pt=Z.length;lt<pt;lt++){let Yt=Z[lt],j=n.get(Yt);e.bindTexture(s.TEXTURE_2D,j.__webglTexture),Ft(s.TEXTURE_2D,Yt),yt(q.__webglFramebuffer,S,Yt,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),g(Yt)&&d(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(lt=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,Y.__webglTexture),Ft(lt,C),C.mipmaps&&C.mipmaps.length>0)for(let pt=0;pt<C.mipmaps.length;pt++)yt(q.__webglFramebuffer[pt],S,C,s.COLOR_ATTACHMENT0,lt,pt);else yt(q.__webglFramebuffer,S,C,s.COLOR_ATTACHMENT0,lt,0);g(C)&&d(lt),e.unbindTexture()}S.depthBuffer&&Lt(S)}function Xt(S){let C=S.textures;for(let q=0,Y=C.length;q<Y;q++){let Z=C[q];if(g(Z)){let W=x(S),_t=n.get(Z).__webglTexture;e.bindTexture(W,_t),d(W),e.unbindTexture()}}}let fe=[],D=[];function Xe(S){if(S.samples>0){if(Ht(S)===!1){let C=S.textures,q=S.width,Y=S.height,Z=s.COLOR_BUFFER_BIT,W=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=n.get(S),lt=C.length>1;if(lt)for(let pt=0;pt<C.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let pt=0;pt<C.length;pt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_t.__webglColorRenderbuffer[pt]);let Yt=n.get(C[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Yt,0)}s.blitFramebuffer(0,0,q,Y,0,0,q,Y,Z,s.NEAREST),l===!0&&(fe.length=0,D.length=0,fe.push(s.COLOR_ATTACHMENT0+pt),S.depthBuffer&&S.resolveDepthBuffer===!1&&(fe.push(W),D.push(W),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let pt=0;pt<C.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,_t.__webglColorRenderbuffer[pt]);let Yt=n.get(C[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,Yt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let C=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function kt(S){return Math.min(i.maxSamples,S.samples)}function Ht(S){let C=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function St(S){let C=a.render.frame;h.get(S)!==C&&(h.set(S,C),S.update())}function re(S,C){let q=S.colorSpace,Y=S.format,Z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||q!==ki&&q!==Dn&&(Bt.getTransfer(q)===$t?(Y!==tn||Z!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),C}function bt(S){return typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame!="undefined"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=B,this.rebindTextures=Ot,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Ht}function zg(s,t){function e(n,i=Dn){let r,a=Bt.getTransfer(i);if(n===bn)return s.UNSIGNED_BYTE;if(n===zo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Fo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===vc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ac)return s.BYTE;if(n===xc)return s.SHORT;if(n===as)return s.UNSIGNED_SHORT;if(n===No)return s.INT;if(n===ii)return s.UNSIGNED_INT;if(n===ln)return s.FLOAT;if(n===nn)return s.HALF_FLOAT;if(n===Cc)return s.ALPHA;if(n===yc)return s.RGB;if(n===tn)return s.RGBA;if(n===_c)return s.LUMINANCE;if(n===Ic)return s.LUMINANCE_ALPHA;if(n===Ei)return s.DEPTH_COMPONENT;if(n===Di)return s.DEPTH_STENCIL;if(n===Oo)return s.RED;if(n===Bo)return s.RED_INTEGER;if(n===Mc)return s.RG;if(n===ko)return s.RG_INTEGER;if(n===Ho)return s.RGBA_INTEGER;if(n===Bs||n===ks||n===Hs||n===Gs)if(a===$t)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===ba||n===Sa||n===Ea)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wa||n===Ta||n===Ra)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wa||n===Ta)return a===$t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ra)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Va||n===Pa||n===La||n===Ua||n===Da||n===qa||n===Na||n===za||n===Fa||n===Oa||n===Ba||n===ka||n===Ha||n===Ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Va)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ua)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qa)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Na)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===za)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ws||n===Wa||n===Xa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ws)return a===$t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bc||n===Ya||n===Ka||n===Ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ws)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ui?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var uo=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Wt=class extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fg={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let A of t.hand.values()){let g=e.getJointPose(A,n),d=this._getHandJoint(c,A);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Og=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bg=`
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

}`,fo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Ne,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xe({vertexShader:Og,fragmentShader:Bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},po=class extends zn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,m=null,A=new fo,g=e.getContextAttributes(),d=null,x=null,y=[],v=[],w=new Ct,b=null,E=new Ve;E.viewport=new de;let T=new Ve;T.viewport=new de;let M=[E,T],_=new uo,R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let nt=y[X];return nt===void 0&&(nt=new ss,y[X]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(X){let nt=y[X];return nt===void 0&&(nt=new ss,y[X]=nt),nt.getGripSpace()},this.getHand=function(X){let nt=y[X];return nt===void 0&&(nt=new ss,y[X]=nt),nt.getHandSpace()};function N(X){let nt=v.indexOf(X.inputSource);if(nt===-1)return;let yt=y[nt];yt!==void 0&&(yt.update(X.inputSource,X.frame,c||a),yt.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",J);for(let X=0;X<y.length;X++){let nt=v[X];nt!==null&&(v[X]=null,y[X].disconnect(nt))}R=null,O=null,A.reset(),t.setRenderTarget(d),p=null,f=null,u=null,i=null,x=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",H),i.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(w),i.renderState.layers===void 0){let nt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Pe(p.framebufferWidth,p.framebufferHeight,{format:tn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let nt=null,yt=null,ot=null;g.depth&&(ot=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=g.stencil?Di:Ei,yt=g.stencil?Ui:ii);let Tt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Tt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Pe(f.textureWidth,f.textureHeight,{format:tn,type:bn,depthTexture:new sr(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function J(X){for(let nt=0;nt<X.removed.length;nt++){let yt=X.removed[nt],ot=v.indexOf(yt);ot>=0&&(v[ot]=null,y[ot].disconnect(yt))}for(let nt=0;nt<X.added.length;nt++){let yt=X.added[nt],ot=v.indexOf(yt);if(ot===-1){for(let Lt=0;Lt<y.length;Lt++)if(Lt>=v.length){v.push(yt),ot=Lt;break}else if(v[Lt]===null){v[Lt]=yt,ot=Lt;break}if(ot===-1)break}let Tt=y[ot];Tt&&Tt.connect(yt)}}let G=new L,$=new L;function B(X,nt,yt){G.setFromMatrixPosition(nt.matrixWorld),$.setFromMatrixPosition(yt.matrixWorld);let ot=G.distanceTo($),Tt=nt.projectionMatrix.elements,Lt=yt.projectionMatrix.elements,Ot=Tt[14]/(Tt[10]-1),he=Tt[14]/(Tt[10]+1),Xt=(Tt[9]+1)/Tt[5],fe=(Tt[9]-1)/Tt[5],D=(Tt[8]-1)/Tt[0],Xe=(Lt[8]+1)/Lt[0],kt=Ot*D,Ht=Ot*Xe,St=ot/(-D+Xe),re=St*-D;if(nt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(re),X.translateZ(St),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Tt[10]===-1)X.projectionMatrix.copy(nt.projectionMatrix),X.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let bt=Ot+St,S=he+St,C=kt-re,q=Ht+(ot-re),Y=Xt*he/S*bt,Z=fe*he/S*bt;X.projectionMatrix.makePerspective(C,q,Y,Z,bt,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function rt(X,nt){nt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(nt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let nt=X.near,yt=X.far;A.texture!==null&&(A.depthNear>0&&(nt=A.depthNear),A.depthFar>0&&(yt=A.depthFar)),_.near=T.near=E.near=nt,_.far=T.far=E.far=yt,(R!==_.near||O!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),R=_.near,O=_.far),E.layers.mask=X.layers.mask|2,T.layers.mask=X.layers.mask|4,_.layers.mask=E.layers.mask|T.layers.mask;let ot=X.parent,Tt=_.cameras;rt(_,ot);for(let Lt=0;Lt<Tt.length;Lt++)rt(Tt[Lt],ot);Tt.length===2?B(_,E,T):_.projectionMatrix.copy(E.projectionMatrix),ft(X,_,ot)};function ft(X,nt,yt){yt===null?X.matrix.copy(nt.matrixWorld):(X.matrix.copy(yt.matrixWorld),X.matrix.invert(),X.matrix.multiply(nt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(nt.projectionMatrix),X.projectionMatrixInverse.copy(nt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Qa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(_)};let Mt=null;function Ft(X,nt){if(h=nt.getViewerPose(c||a),m=nt,h!==null){let yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let ot=!1;yt.length!==_.cameras.length&&(_.cameras.length=0,ot=!0);for(let Lt=0;Lt<yt.length;Lt++){let Ot=yt[Lt],he=null;if(p!==null)he=p.getViewport(Ot);else{let fe=u.getViewSubImage(f,Ot);he=fe.viewport,Lt===0&&(t.setRenderTargetTextures(x,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(x))}let Xt=M[Lt];Xt===void 0&&(Xt=new Ve,Xt.layers.enable(Lt),Xt.viewport=new de,M[Lt]=Xt),Xt.matrix.fromArray(Ot.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Ot.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(he.x,he.y,he.width,he.height),Lt===0&&(_.matrix.copy(Xt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ot===!0&&_.cameras.push(Xt)}let Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let Lt=u.getDepthInformation(yt[0]);Lt&&Lt.isValid&&Lt.texture&&A.init(t,Lt,i.renderState)}}for(let yt=0;yt<y.length;yt++){let ot=v[yt],Tt=y[yt];ot!==null&&Tt!==void 0&&Tt.update(ot,nt,c||a)}Mt&&Mt(X,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),m=null}let ee=new Vc;ee.setAnimationLoop(Ft),this.setAnimationLoop=function(X){Mt=X},this.dispose=function(){}}},Zn=new un,kg=new ne;function Hg(s,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,Rc(s)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function i(g,d,x,y,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),u(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d)):d.isMeshStandardMaterial?(r(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,v)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),A(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,x,y):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===qe&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===qe&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let x=t.get(d),y=x.envMap,v=x.envMapRotation;y&&(g.envMap.value=y,Zn.copy(v),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),g.envMapRotation.value.setFromMatrix4(kg.makeRotationFromEuler(Zn)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,x,y){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=y*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===qe&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function A(g,d){let x=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gg(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){let v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(m(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",g));let w=y.program;n.updateUBOMapping(x,w);let b=t.render.frame;r[x.id]!==b&&(f(x),r[x.id]=b)}function h(x){let y=u();x.__bindingPointIndex=y;let v=s.createBuffer(),w=x.__size,b=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,w,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let y=i[x.id],v=x.uniforms,w=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let b=0,E=v.length;b<E;b++){let T=Array.isArray(v[b])?v[b]:[v[b]];for(let M=0,_=T.length;M<_;M++){let R=T[M];if(p(R,b,M,w)===!0){let O=R.__offset,N=Array.isArray(R.value)?R.value:[R.value],H=0;for(let J=0;J<N.length;J++){let G=N[J],$=A(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,O+H,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,y,v,w){let b=x.value,E=y+"_"+v;if(w[E]===void 0)return typeof b=="number"||typeof b=="boolean"?w[E]=b:w[E]=b.clone(),!0;{let T=w[E];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return w[E]=b,!0}else if(T.equals(b)===!1)return T.copy(b),!0}return!1}function m(x){let y=x.uniforms,v=0,w=16;for(let E=0,T=y.length;E<T;E++){let M=Array.isArray(y[E])?y[E]:[y[E]];for(let _=0,R=M.length;_<R;_++){let O=M[_],N=Array.isArray(O.value)?O.value:[O.value];for(let H=0,J=N.length;H<J;H++){let G=N[H],$=A(G),B=v%w,rt=B%$.boundary,ft=B+rt;v+=rt,ft!==0&&w-ft<$.storage&&(v+=w-ft),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=$.storage}}}let b=v%w;return b>0&&(v+=w-b),x.__size=v,x.__cache={},this}function A(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){let y=x.target;y.removeEventListener("dispose",g);let v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function d(){for(let x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:d}}var rr=class{constructor(t={}){let{canvas:e=Kh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),A=new Int32Array(4),g=null,d=null,x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=qn,this.toneMappingExposure=1;let v=this,w=!1,b=0,E=0,T=null,M=-1,_=null,R=new de,O=new de,N=null,H=new Rt(0),J=0,G=e.width,$=e.height,B=1,rt=null,ft=null,Mt=new de(0,0,G,$),Ft=new de(0,0,G,$),ee=!1,X=new os,nt=!1,yt=!1,ot=new ne,Tt=new ne,Lt=new L,Ot=new de,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xt=!1;function fe(){return T===null?B:1}let D=n;function Xe(I,P){return e.getContext(I,P)}try{let I={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${To}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ct,!1),D===null){let P="webgl2";if(D=Xe(P,I),D===null)throw Xe(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let kt,Ht,St,re,bt,S,C,q,Y,Z,W,_t,lt,pt,Yt,j,gt,wt,Vt,mt,Gt,Nt,ie,V;function at(){kt=new ap(D),kt.init(),Nt=new zg(D,kt),Ht=new tp(D,kt,t,Nt),St=new Dg(D,kt),Ht.reverseDepthBuffer&&f&&St.buffers.depth.setReversed(!0),re=new cp(D),bt=new _g,S=new Ng(D,kt,St,bt,Ht,Nt,re),C=new np(v),q=new rp(v),Y=new gu(D),ie=new jf(D,Y),Z=new op(D,Y,re,ie),W=new up(D,Z,Y,re),Vt=new hp(D,Ht,S),j=new ep(bt),_t=new yg(v,C,q,kt,Ht,ie,j),lt=new Hg(v,bt),pt=new Mg,Yt=new Rg(kt),wt=new Qf(v,C,q,St,W,p,l),gt=new Lg(v,W,Ht),V=new Gg(D,re,Ht,St),mt=new $f(D,kt,re),Gt=new lp(D,kt,re),re.programs=_t.programs,v.capabilities=Ht,v.extensions=kt,v.properties=bt,v.renderLists=pt,v.shadowMap=gt,v.state=St,v.info=re}at();let k=new po(v,D);this.xr=k,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let I=kt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=kt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(I){I!==void 0&&(B=I,this.setSize(G,$,!1))},this.getSize=function(I){return I.set(G,$)},this.setSize=function(I,P,z=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=I,$=P,e.width=Math.floor(I*B),e.height=Math.floor(P*B),z===!0&&(e.style.width=I+"px",e.style.height=P+"px"),this.setViewport(0,0,I,P)},this.getDrawingBufferSize=function(I){return I.set(G*B,$*B).floor()},this.setDrawingBufferSize=function(I,P,z){G=I,$=P,B=z,e.width=Math.floor(I*z),e.height=Math.floor(P*z),this.setViewport(0,0,I,P)},this.getCurrentViewport=function(I){return I.copy(R)},this.getViewport=function(I){return I.copy(Mt)},this.setViewport=function(I,P,z,F){I.isVector4?Mt.set(I.x,I.y,I.z,I.w):Mt.set(I,P,z,F),St.viewport(R.copy(Mt).multiplyScalar(B).round())},this.getScissor=function(I){return I.copy(Ft)},this.setScissor=function(I,P,z,F){I.isVector4?Ft.set(I.x,I.y,I.z,I.w):Ft.set(I,P,z,F),St.scissor(O.copy(Ft).multiplyScalar(B).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(I){St.setScissorTest(ee=I)},this.setOpaqueSort=function(I){rt=I},this.setTransparentSort=function(I){ft=I},this.getClearColor=function(I){return I.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(I=!0,P=!0,z=!0){let F=0;if(I){let U=!1;if(T!==null){let tt=T.texture.format;U=tt===Ho||tt===ko||tt===Bo}if(U){let tt=T.texture.type,ht=tt===bn||tt===ii||tt===as||tt===Ui||tt===zo||tt===Fo,At=wt.getClearColor(),xt=wt.getClearAlpha(),Pt=At.r,Dt=At.g,vt=At.b;ht?(m[0]=Pt,m[1]=Dt,m[2]=vt,m[3]=xt,D.clearBufferuiv(D.COLOR,0,m)):(A[0]=Pt,A[1]=Dt,A[2]=vt,A[3]=xt,D.clearBufferiv(D.COLOR,0,A))}else F|=D.COLOR_BUFFER_BIT}P&&(F|=D.DEPTH_BUFFER_BIT),z&&(F|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),pt.dispose(),Yt.dispose(),bt.dispose(),C.dispose(),q.dispose(),W.dispose(),ie.dispose(),V.dispose(),_t.dispose(),k.dispose(),k.removeEventListener("sessionstart",el),k.removeEventListener("sessionend",nl),Gn.stop()};function K(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let I=re.autoReset,P=gt.enabled,z=gt.autoUpdate,F=gt.needsUpdate,U=gt.type;at(),re.autoReset=I,gt.enabled=P,gt.autoUpdate=z,gt.needsUpdate=F,gt.type=U}function ct(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Ut(I){let P=I.target;P.removeEventListener("dispose",Ut),ue(P)}function ue(I){be(I),bt.remove(I)}function be(I){let P=bt.get(I).programs;P!==void 0&&(P.forEach(function(z){_t.releaseProgram(z)}),I.isShaderMaterial&&_t.releaseShaderCache(I))}this.renderBufferDirect=function(I,P,z,F,U,tt){P===null&&(P=he);let ht=U.isMesh&&U.matrixWorld.determinant()<0,At=ch(I,P,z,F,U);St.setMaterial(F,ht);let xt=z.index,Pt=1;if(F.wireframe===!0){if(xt=Z.getWireframeAttribute(z),xt===void 0)return;Pt=2}let Dt=z.drawRange,vt=z.attributes.position,Zt=Dt.start*Pt,se=(Dt.start+Dt.count)*Pt;tt!==null&&(Zt=Math.max(Zt,tt.start*Pt),se=Math.min(se,(tt.start+tt.count)*Pt)),xt!==null?(Zt=Math.max(Zt,0),se=Math.min(se,xt.count)):vt!=null&&(Zt=Math.max(Zt,0),se=Math.min(se,vt.count));let ae=se-Zt;if(ae<0||ae===1/0)return;ie.setup(U,F,At,z,xt);let Ue,Qt=mt;if(xt!==null&&(Ue=Y.get(xt),Qt=Gt,Qt.setIndex(Ue)),U.isMesh)F.wireframe===!0?(St.setLineWidth(F.wireframeLinewidth*fe()),Qt.setMode(D.LINES)):Qt.setMode(D.TRIANGLES);else if(U.isLine){let It=F.linewidth;It===void 0&&(It=1),St.setLineWidth(It*fe()),U.isLineSegments?Qt.setMode(D.LINES):U.isLineLoop?Qt.setMode(D.LINE_LOOP):Qt.setMode(D.LINE_STRIP)}else U.isPoints?Qt.setMode(D.POINTS):U.isSprite&&Qt.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Qt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let It=U._multiDrawStarts,gn=U._multiDrawCounts,jt=U._multiDrawCount,Ze=xt?Y.get(xt).bytesPerElement:1,ci=bt.get(F).currentProgram.getUniforms();for(let Oe=0;Oe<jt;Oe++)ci.setValue(D,"_gl_DrawID",Oe),Qt.render(It[Oe]/Ze,gn[Oe])}else if(U.isInstancedMesh)Qt.renderInstances(Zt,ae,U.count);else if(z.isInstancedBufferGeometry){let It=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,gn=Math.min(z.instanceCount,It);Qt.renderInstances(Zt,ae,gn)}else Qt.render(Zt,ae)};function te(I,P,z){I.transparent===!0&&I.side===He&&I.forceSinglePass===!1?(I.side=qe,I.needsUpdate=!0,gs(I,P,z),I.side=Nn,I.needsUpdate=!0,gs(I,P,z),I.side=He):gs(I,P,z)}this.compile=function(I,P,z=null){z===null&&(z=I),d=Yt.get(z),d.init(P),y.push(d),z.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),I!==z&&I.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();let F=new Set;return I.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let tt=U.material;if(tt)if(Array.isArray(tt))for(let ht=0;ht<tt.length;ht++){let At=tt[ht];te(At,z,U),F.add(At)}else te(tt,z,U),F.add(tt)}),y.pop(),d=null,F},this.compileAsync=function(I,P,z=null){let F=this.compile(I,P,z);return new Promise(U=>{function tt(){if(F.forEach(function(ht){bt.get(ht).currentProgram.isReady()&&F.delete(ht)}),F.size===0){U(I);return}setTimeout(tt,10)}kt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Je=null;function pn(I){Je&&Je(I)}function el(){Gn.stop()}function nl(){Gn.start()}let Gn=new Vc;Gn.setAnimationLoop(pn),typeof self!="undefined"&&Gn.setContext(self),this.setAnimationLoop=function(I){Je=I,k.setAnimationLoop(I),I===null?Gn.stop():Gn.start()},k.addEventListener("sessionstart",el),k.addEventListener("sessionend",nl),this.render=function(I,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(P),P=k.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,P,T),d=Yt.get(I,y.length),d.init(P),y.push(d),Tt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),X.setFromProjectionMatrix(Tt),yt=this.localClippingEnabled,nt=j.init(this.clippingPlanes,yt),g=pt.get(I,x.length),g.init(),x.push(g),k.enabled===!0&&k.isPresenting===!0){let tt=v.xr.getDepthSensingMesh();tt!==null&&Ur(tt,P,-1/0,v.sortObjects)}Ur(I,P,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(rt,ft),Xt=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,Xt&&wt.addToRenderList(g,I),this.info.render.frame++,nt===!0&&j.beginShadows();let z=d.state.shadowsArray;gt.render(z,I,P),nt===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();let F=g.opaque,U=g.transmissive;if(d.setupLights(),P.isArrayCamera){let tt=P.cameras;if(U.length>0)for(let ht=0,At=tt.length;ht<At;ht++){let xt=tt[ht];sl(F,U,I,xt)}Xt&&wt.render(I);for(let ht=0,At=tt.length;ht<At;ht++){let xt=tt[ht];il(g,I,xt,xt.viewport)}}else U.length>0&&sl(F,U,I,P),Xt&&wt.render(I),il(g,I,P);T!==null&&(S.updateMultisampleRenderTarget(T),S.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(v,I,P),ie.resetDefaultState(),M=-1,_=null,y.pop(),y.length>0?(d=y[y.length-1],nt===!0&&j.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Ur(I,P,z,F){if(I.visible===!1)return;if(I.layers.test(P.layers)){if(I.isGroup)z=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(P);else if(I.isLight)d.pushLight(I),I.castShadow&&d.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||X.intersectsSprite(I)){F&&Ot.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Tt);let ht=W.update(I),At=I.material;At.visible&&g.push(I,ht,At,z,Ot.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||X.intersectsObject(I))){let ht=W.update(I),At=I.material;if(F&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ot.copy(I.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Ot.copy(ht.boundingSphere.center)),Ot.applyMatrix4(I.matrixWorld).applyMatrix4(Tt)),Array.isArray(At)){let xt=ht.groups;for(let Pt=0,Dt=xt.length;Pt<Dt;Pt++){let vt=xt[Pt],Zt=At[vt.materialIndex];Zt&&Zt.visible&&g.push(I,ht,Zt,z,Ot.z,vt)}}else At.visible&&g.push(I,ht,At,z,Ot.z,null)}}let tt=I.children;for(let ht=0,At=tt.length;ht<At;ht++)Ur(tt[ht],P,z,F)}function il(I,P,z,F){let U=I.opaque,tt=I.transmissive,ht=I.transparent;d.setupLightsView(z),nt===!0&&j.setGlobalState(v.clippingPlanes,z),F&&St.viewport(R.copy(F)),U.length>0&&ps(U,P,z),tt.length>0&&ps(tt,P,z),ht.length>0&&ps(ht,P,z),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function sl(I,P,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[F.id]===void 0&&(d.state.transmissionRenderTarget[F.id]=new Pe(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?nn:bn,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace}));let tt=d.state.transmissionRenderTarget[F.id],ht=F.viewport||R;tt.setSize(ht.z,ht.w);let At=v.getRenderTarget();v.setRenderTarget(tt),v.getClearColor(H),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),Xt&&wt.render(z);let xt=v.toneMapping;v.toneMapping=qn;let Pt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),d.setupLightsView(F),nt===!0&&j.setGlobalState(v.clippingPlanes,F),ps(I,z,F),S.updateMultisampleRenderTarget(tt),S.updateRenderTargetMipmap(tt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let vt=0,Zt=P.length;vt<Zt;vt++){let se=P[vt],ae=se.object,Ue=se.geometry,Qt=se.material,It=se.group;if(Qt.side===He&&ae.layers.test(F.layers)){let gn=Qt.side;Qt.side=qe,Qt.needsUpdate=!0,rl(ae,z,F,Ue,Qt,It),Qt.side=gn,Qt.needsUpdate=!0,Dt=!0}}Dt===!0&&(S.updateMultisampleRenderTarget(tt),S.updateRenderTargetMipmap(tt))}v.setRenderTarget(At),v.setClearColor(H,J),Pt!==void 0&&(F.viewport=Pt),v.toneMapping=xt}function ps(I,P,z){let F=P.isScene===!0?P.overrideMaterial:null;for(let U=0,tt=I.length;U<tt;U++){let ht=I[U],At=ht.object,xt=ht.geometry,Pt=F===null?ht.material:F,Dt=ht.group;At.layers.test(z.layers)&&rl(At,P,z,xt,Pt,Dt)}}function rl(I,P,z,F,U,tt){I.onBeforeRender(v,P,z,F,U,tt),I.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),U.onBeforeRender(v,P,z,F,I,tt),U.transparent===!0&&U.side===He&&U.forceSinglePass===!1?(U.side=qe,U.needsUpdate=!0,v.renderBufferDirect(z,P,F,U,I,tt),U.side=Nn,U.needsUpdate=!0,v.renderBufferDirect(z,P,F,U,I,tt),U.side=He):v.renderBufferDirect(z,P,F,U,I,tt),I.onAfterRender(v,P,z,F,U,tt)}function gs(I,P,z){P.isScene!==!0&&(P=he);let F=bt.get(I),U=d.state.lights,tt=d.state.shadowsArray,ht=U.state.version,At=_t.getParameters(I,U.state,tt,P,z),xt=_t.getProgramCacheKey(At),Pt=F.programs;F.environment=I.isMeshStandardMaterial?P.environment:null,F.fog=P.fog,F.envMap=(I.isMeshStandardMaterial?q:C).get(I.envMap||F.environment),F.envMapRotation=F.environment!==null&&I.envMap===null?P.environmentRotation:I.envMapRotation,Pt===void 0&&(I.addEventListener("dispose",Ut),Pt=new Map,F.programs=Pt);let Dt=Pt.get(xt);if(Dt!==void 0){if(F.currentProgram===Dt&&F.lightsStateVersion===ht)return ol(I,At),Dt}else At.uniforms=_t.getUniforms(I),I.onBeforeCompile(At,v),Dt=_t.acquireProgram(At,xt),Pt.set(xt,Dt),F.uniforms=At.uniforms;let vt=F.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(vt.clippingPlanes=j.uniform),ol(I,At),F.needsLights=uh(I),F.lightsStateVersion=ht,F.needsLights&&(vt.ambientLightColor.value=U.state.ambient,vt.lightProbe.value=U.state.probe,vt.directionalLights.value=U.state.directional,vt.directionalLightShadows.value=U.state.directionalShadow,vt.spotLights.value=U.state.spot,vt.spotLightShadows.value=U.state.spotShadow,vt.rectAreaLights.value=U.state.rectArea,vt.ltc_1.value=U.state.rectAreaLTC1,vt.ltc_2.value=U.state.rectAreaLTC2,vt.pointLights.value=U.state.point,vt.pointLightShadows.value=U.state.pointShadow,vt.hemisphereLights.value=U.state.hemi,vt.directionalShadowMap.value=U.state.directionalShadowMap,vt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,vt.spotShadowMap.value=U.state.spotShadowMap,vt.spotLightMatrix.value=U.state.spotLightMatrix,vt.spotLightMap.value=U.state.spotLightMap,vt.pointShadowMap.value=U.state.pointShadowMap,vt.pointShadowMatrix.value=U.state.pointShadowMatrix),F.currentProgram=Dt,F.uniformsList=null,Dt}function al(I){if(I.uniformsList===null){let P=I.currentProgram.getUniforms();I.uniformsList=Ti.seqWithValue(P.seq,I.uniforms)}return I.uniformsList}function ol(I,P){let z=bt.get(I);z.outputColorSpace=P.outputColorSpace,z.batching=P.batching,z.batchingColor=P.batchingColor,z.instancing=P.instancing,z.instancingColor=P.instancingColor,z.instancingMorph=P.instancingMorph,z.skinning=P.skinning,z.morphTargets=P.morphTargets,z.morphNormals=P.morphNormals,z.morphColors=P.morphColors,z.morphTargetsCount=P.morphTargetsCount,z.numClippingPlanes=P.numClippingPlanes,z.numIntersection=P.numClipIntersection,z.vertexAlphas=P.vertexAlphas,z.vertexTangents=P.vertexTangents,z.toneMapping=P.toneMapping}function ch(I,P,z,F,U){P.isScene!==!0&&(P=he),S.resetTextureUnits();let tt=P.fog,ht=F.isMeshStandardMaterial?P.environment:null,At=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ki,xt=(F.isMeshStandardMaterial?q:C).get(F.envMap||ht),Pt=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Dt=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),vt=!!z.morphAttributes.position,Zt=!!z.morphAttributes.normal,se=!!z.morphAttributes.color,ae=qn;F.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ae=v.toneMapping);let Ue=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Qt=Ue!==void 0?Ue.length:0,It=bt.get(F),gn=d.state.lights;if(nt===!0&&(yt===!0||I!==_)){let Ye=I===_&&F.id===M;j.setState(F,I,Ye)}let jt=!1;F.version===It.__version?(It.needsLights&&It.lightsStateVersion!==gn.state.version||It.outputColorSpace!==At||U.isBatchedMesh&&It.batching===!1||!U.isBatchedMesh&&It.batching===!0||U.isBatchedMesh&&It.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&It.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&It.instancing===!1||!U.isInstancedMesh&&It.instancing===!0||U.isSkinnedMesh&&It.skinning===!1||!U.isSkinnedMesh&&It.skinning===!0||U.isInstancedMesh&&It.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&It.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&It.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&It.instancingMorph===!1&&U.morphTexture!==null||It.envMap!==xt||F.fog===!0&&It.fog!==tt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==j.numPlanes||It.numIntersection!==j.numIntersection)||It.vertexAlphas!==Pt||It.vertexTangents!==Dt||It.morphTargets!==vt||It.morphNormals!==Zt||It.morphColors!==se||It.toneMapping!==ae||It.morphTargetsCount!==Qt)&&(jt=!0):(jt=!0,It.__version=F.version);let Ze=It.currentProgram;jt===!0&&(Ze=gs(F,P,U));let ci=!1,Oe=!1,Yi=!1,oe=Ze.getUniforms(),rn=It.uniforms;if(St.useProgram(Ze.program)&&(ci=!0,Oe=!0,Yi=!0),F.id!==M&&(M=F.id,Oe=!0),ci||_!==I){St.buffers.depth.getReversed()?(ot.copy(I.projectionMatrix),Zh(ot),Qh(ot),oe.setValue(D,"projectionMatrix",ot)):oe.setValue(D,"projectionMatrix",I.projectionMatrix),oe.setValue(D,"viewMatrix",I.matrixWorldInverse);let En=oe.map.cameraPosition;En!==void 0&&En.setValue(D,Lt.setFromMatrixPosition(I.matrixWorld)),Ht.logarithmicDepthBuffer&&oe.setValue(D,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&oe.setValue(D,"isOrthographic",I.isOrthographicCamera===!0),_!==I&&(_=I,Oe=!0,Yi=!0)}if(U.isSkinnedMesh){oe.setOptional(D,U,"bindMatrix"),oe.setOptional(D,U,"bindMatrixInverse");let Ye=U.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),oe.setValue(D,"boneTexture",Ye.boneTexture,S))}U.isBatchedMesh&&(oe.setOptional(D,U,"batchingTexture"),oe.setValue(D,"batchingTexture",U._matricesTexture,S),oe.setOptional(D,U,"batchingIdTexture"),oe.setValue(D,"batchingIdTexture",U._indirectTexture,S),oe.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&oe.setValue(D,"batchingColorTexture",U._colorsTexture,S));let Ki=z.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&Vt.update(U,z,Ze),(Oe||It.receiveShadow!==U.receiveShadow)&&(It.receiveShadow=U.receiveShadow,oe.setValue(D,"receiveShadow",U.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(rn.envMap.value=xt,rn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&P.environment!==null&&(rn.envMapIntensity.value=P.environmentIntensity),Oe&&(oe.setValue(D,"toneMappingExposure",v.toneMappingExposure),It.needsLights&&hh(rn,Yi),tt&&F.fog===!0&&lt.refreshFogUniforms(rn,tt),lt.refreshMaterialUniforms(rn,F,B,$,d.state.transmissionRenderTarget[I.id]),Ti.upload(D,al(It),rn,S)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ti.upload(D,al(It),rn,S),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&oe.setValue(D,"center",U.center),oe.setValue(D,"modelViewMatrix",U.modelViewMatrix),oe.setValue(D,"normalMatrix",U.normalMatrix),oe.setValue(D,"modelMatrix",U.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let Ye=F.uniformsGroups;for(let En=0,wn=Ye.length;En<wn;En++){let ll=Ye[En];V.update(ll,Ze),V.bind(ll,Ze)}}return Ze}function hh(I,P){I.ambientLightColor.needsUpdate=P,I.lightProbe.needsUpdate=P,I.directionalLights.needsUpdate=P,I.directionalLightShadows.needsUpdate=P,I.pointLights.needsUpdate=P,I.pointLightShadows.needsUpdate=P,I.spotLights.needsUpdate=P,I.spotLightShadows.needsUpdate=P,I.rectAreaLights.needsUpdate=P,I.hemisphereLights.needsUpdate=P}function uh(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,P,z){bt.get(I.texture).__webglTexture=P,bt.get(I.depthTexture).__webglTexture=z;let F=bt.get(I);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=z===void 0,F.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,P){let z=bt.get(I);z.__webglFramebuffer=P,z.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(I,P=0,z=0){T=I,b=P,E=z;let F=!0,U=null,tt=!1,ht=!1;if(I){let xt=bt.get(I);if(xt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(D.FRAMEBUFFER,null),F=!1;else if(xt.__webglFramebuffer===void 0)S.setupRenderTarget(I);else if(xt.__hasExternalTextures)S.rebindTextures(I,bt.get(I.texture).__webglTexture,bt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let vt=I.depthTexture;if(xt.__boundDepthTexture!==vt){if(vt!==null&&bt.has(vt)&&(I.width!==vt.image.width||I.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(I)}}let Pt=I.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ht=!0);let Dt=bt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Dt[P])?U=Dt[P][z]:U=Dt[P],tt=!0):I.samples>0&&S.useMultisampledRTT(I)===!1?U=bt.get(I).__webglMultisampledFramebuffer:Array.isArray(Dt)?U=Dt[z]:U=Dt,R.copy(I.viewport),O.copy(I.scissor),N=I.scissorTest}else R.copy(Mt).multiplyScalar(B).floor(),O.copy(Ft).multiplyScalar(B).floor(),N=ee;if(St.bindFramebuffer(D.FRAMEBUFFER,U)&&F&&St.drawBuffers(I,U),St.viewport(R),St.scissor(O),St.setScissorTest(N),tt){let xt=bt.get(I.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,xt.__webglTexture,z)}else if(ht){let xt=bt.get(I.texture),Pt=P||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.__webglTexture,z||0,Pt)}M=-1},this.readRenderTargetPixels=function(I,P,z,F,U,tt,ht){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=bt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ht!==void 0&&(At=At[ht]),At){St.bindFramebuffer(D.FRAMEBUFFER,At);try{let xt=I.texture,Pt=xt.format,Dt=xt.type;if(!Ht.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=I.width-F&&z>=0&&z<=I.height-U&&D.readPixels(P,z,F,U,Nt.convert(Pt),Nt.convert(Dt),tt)}finally{let xt=T!==null?bt.get(T).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(I,P,z,F,U,tt,ht){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=bt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ht!==void 0&&(At=At[ht]),At){let xt=I.texture,Pt=xt.format,Dt=xt.type;if(!Ht.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=I.width-F&&z>=0&&z<=I.height-U){St.bindFramebuffer(D.FRAMEBUFFER,At);let vt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,vt),D.bufferData(D.PIXEL_PACK_BUFFER,tt.byteLength,D.STREAM_READ),D.readPixels(P,z,F,U,Nt.convert(Pt),Nt.convert(Dt),0);let Zt=T!==null?bt.get(T).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,Zt);let se=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Jh(D,se,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,vt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,tt),D.deleteBuffer(vt),D.deleteSync(se),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,P=null,z=0){I.isTexture!==!0&&(ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,I=arguments[1]);let F=Math.pow(2,-z),U=Math.floor(I.image.width*F),tt=Math.floor(I.image.height*F),ht=P!==null?P.x:0,At=P!==null?P.y:0;S.setTexture2D(I,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,ht,At,U,tt),St.unbindTexture()},this.copyTextureToTexture=function(I,P,z=null,F=null,U=0){I.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,I=arguments[1],P=arguments[2],U=arguments[3]||0,z=null);let tt,ht,At,xt,Pt,Dt,vt,Zt,se,ae=I.isCompressedTexture?I.mipmaps[U]:I.image;z!==null?(tt=z.max.x-z.min.x,ht=z.max.y-z.min.y,At=z.isBox3?z.max.z-z.min.z:1,xt=z.min.x,Pt=z.min.y,Dt=z.isBox3?z.min.z:0):(tt=ae.width,ht=ae.height,At=ae.depth||1,xt=0,Pt=0,Dt=0),F!==null?(vt=F.x,Zt=F.y,se=F.z):(vt=0,Zt=0,se=0);let Ue=Nt.convert(P.format),Qt=Nt.convert(P.type),It;P.isData3DTexture?(S.setTexture3D(P,0),It=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(S.setTexture2DArray(P,0),It=D.TEXTURE_2D_ARRAY):(S.setTexture2D(P,0),It=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);let gn=D.getParameter(D.UNPACK_ROW_LENGTH),jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ze=D.getParameter(D.UNPACK_SKIP_PIXELS),ci=D.getParameter(D.UNPACK_SKIP_ROWS),Oe=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ae.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Dt);let Yi=I.isDataArrayTexture||I.isData3DTexture,oe=P.isDataArrayTexture||P.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let rn=bt.get(I),Ki=bt.get(P),Ye=bt.get(rn.__renderTarget),En=bt.get(Ki.__renderTarget);St.bindFramebuffer(D.READ_FRAMEBUFFER,Ye.__webglFramebuffer),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let wn=0;wn<At;wn++)Yi&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.get(I).__webglTexture,U,Dt+wn),I.isDepthTexture?(oe&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.get(P).__webglTexture,U,se+wn),D.blitFramebuffer(xt,Pt,tt,ht,vt,Zt,tt,ht,D.DEPTH_BUFFER_BIT,D.NEAREST)):oe?D.copyTexSubImage3D(It,U,vt,Zt,se+wn,xt,Pt,tt,ht):D.copyTexSubImage2D(It,U,vt,Zt,se+wn,xt,Pt,tt,ht);St.bindFramebuffer(D.READ_FRAMEBUFFER,null),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else oe?I.isDataTexture||I.isData3DTexture?D.texSubImage3D(It,U,vt,Zt,se,tt,ht,At,Ue,Qt,ae.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(It,U,vt,Zt,se,tt,ht,At,Ue,ae.data):D.texSubImage3D(It,U,vt,Zt,se,tt,ht,At,Ue,Qt,ae):I.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,vt,Zt,tt,ht,Ue,Qt,ae.data):I.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,vt,Zt,ae.width,ae.height,Ue,ae.data):D.texSubImage2D(D.TEXTURE_2D,U,vt,Zt,tt,ht,Ue,Qt,ae);D.pixelStorei(D.UNPACK_ROW_LENGTH,gn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ze),D.pixelStorei(D.UNPACK_SKIP_ROWS,ci),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Oe),U===0&&P.generateMipmaps&&D.generateMipmap(It),St.unbindTexture()},this.copyTextureToTexture3D=function(I,P,z=null,F=null,U=0){return I.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,F=arguments[1]||null,I=arguments[2],P=arguments[3],U=arguments[4]||0),ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,P,z,F,U)},this.initRenderTarget=function(I){bt.get(I).__webglFramebuffer===void 0&&S.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?S.setTextureCube(I,0):I.isData3DTexture?S.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?S.setTexture2DArray(I,0):S.setTexture2D(I,0),St.unbindTexture()},this.resetState=function(){b=0,E=0,T=null,St.reset(),ie.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Bt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Bt._getUnpackColorSpace()}};var ar=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Rt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},or=class extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var go=class extends Ne{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ge,h=Ge,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lr=class extends _e{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Mi=new ne,lc=new ne,Ns=[],cc=new Sn,Wg=new ne,ts=new me,es=new Fn,ls=class extends me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new lr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Wg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mi),cc.copy(t.boundingBox).applyMatrix4(Mi),this.boundingBox.union(cc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mi),es.copy(t.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union(es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),es.copy(this.boundingSphere),es.applyMatrix4(n),t.ray.intersectsSphere(es)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Mi),lc.multiplyMatrices(n,Mi),ts.matrixWorld=lc,ts.raycast(t,Ns);for(let a=0,o=Ns.length;a<o;a++){let l=Ns[a];l.instanceId=r,l.object=this,e.push(l)}Ns.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new go(new Float32Array(i*this.count),i,this.count,Oo,ln));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ri=class extends On{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},hc=new ne,mo=new Qs,zs=new Fn,Fs=new L,zi=class extends we{constructor(t=new pe,e=new ri){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(i),zs.radius+=r,t.ray.intersectsSphere(zs)===!1)return;hc.copy(i).invert(),mo.copy(t.ray).applyMatrix4(hc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=f,A=p;m<A;m++){let g=c.getX(m);Fs.fromBufferAttribute(u,g),uc(Fs,g,l,i,t,e,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=f,A=p;m<A;m++)Fs.fromBufferAttribute(u,m),uc(Fs,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function uc(s,t,e,n,i,r,a){let o=mo.distanceSqToPoint(s);if(o<e){let l=new L;mo.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Fi=class extends Ne{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var cr=class s extends pe{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Re(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new L,f=new Ct,p=new L,m=new L,A=new L,g=0,d=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,d=t[x+1].y-t[x].y,p.x=d*1,p.y=-g,p.z=d*0,A.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(A.x,A.y,A.z);break;default:g=t[x+1].x-t[x].x,d=t[x+1].y-t[x].y,p.x=d*1,p.y=-g,p.z=d*0,m.copy(p),p.x+=A.x,p.y+=A.y,p.z+=A.z,p.normalize(),l.push(p.x,p.y,p.z),A.copy(m)}for(let x=0;x<=e;x++){let y=n+x*h*i,v=Math.sin(y),w=Math.cos(y);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*v,u.y=t[b].y,u.z=t[b].x*w,a.push(u.x,u.y,u.z),f.x=x/e,f.y=b/(t.length-1),o.push(f.x,f.y);let E=l[3*b+0]*v,T=l[3*b+1],M=l[3*b+0]*w;c.push(E,T,M)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){let v=y+x*t.length,w=v,b=v+t.length,E=v+t.length+1,T=v+1;r.push(w,b,T),r.push(E,T,b)}this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("uv",new Kt(o,2)),this.setAttribute("normal",new Kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var ai=class s extends pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new L,h=new Ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(o,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},cs=class s extends pe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],p=[],m=0,A=[],g=n/2,d=0;x(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(f,3)),this.setAttribute("uv",new Kt(p,2));function x(){let v=new L,w=new L,b=0,E=(e-t)/n;for(let T=0;T<=r;T++){let M=[],_=T/r,R=_*(e-t)+t;for(let O=0;O<=i;O++){let N=O/i,H=N*l+o,J=Math.sin(H),G=Math.cos(H);w.x=R*J,w.y=-_*n+g,w.z=R*G,u.push(w.x,w.y,w.z),v.set(J,E,G).normalize(),f.push(v.x,v.y,v.z),p.push(N,1-_),M.push(m++)}A.push(M)}for(let T=0;T<i;T++)for(let M=0;M<r;M++){let _=A[M][T],R=A[M+1][T],O=A[M+1][T+1],N=A[M][T+1];(t>0||M!==0)&&(h.push(_,R,N),b+=3),(e>0||M!==r-1)&&(h.push(R,O,N),b+=3)}c.addGroup(d,b,0),d+=b}function y(v){let w=m,b=new Ct,E=new L,T=0,M=v===!0?t:e,_=v===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,g*_,0),f.push(0,_,0),p.push(.5,.5),m++;let R=m;for(let O=0;O<=i;O++){let H=O/i*l+o,J=Math.cos(H),G=Math.sin(H);E.x=M*G,E.y=g*_,E.z=M*J,u.push(E.x,E.y,E.z),f.push(0,_,0),b.x=J*.5+.5,b.y=G*.5*_+.5,p.push(b.x,b.y),m++}for(let O=0;O<i;O++){let N=w+O,H=R+O;v===!0?h.push(H,H+1,N):h.push(H+1,H,N),T+=3}c.addGroup(d,T,v===!0?1:2),d+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hr=class s extends cs{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ur=class s extends pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let y=new L,v=new L,w=new L;for(let b=0;b<e.length;b+=3)p(e[b+0],y),p(e[b+1],v),p(e[b+2],w),l(y,v,w,x)}function l(x,y,v,w){let b=w+1,E=[];for(let T=0;T<=b;T++){E[T]=[];let M=x.clone().lerp(v,T/b),_=y.clone().lerp(v,T/b),R=b-T;for(let O=0;O<=R;O++)O===0&&T===b?E[T][O]=M:E[T][O]=M.clone().lerp(_,O/R)}for(let T=0;T<b;T++)for(let M=0;M<2*(b-T)-1;M++){let _=Math.floor(M/2);M%2===0?(f(E[T][_+1]),f(E[T+1][_]),f(E[T][_])):(f(E[T][_+1]),f(E[T+1][_+1]),f(E[T+1][_]))}}function c(x){let y=new L;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){let x=new L;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];let v=g(x)/2/Math.PI+.5,w=d(x)/Math.PI+.5;a.push(v,1-w)}m(),u()}function u(){for(let x=0;x<a.length;x+=6){let y=a[x+0],v=a[x+2],w=a[x+4],b=Math.max(y,v,w),E=Math.min(y,v,w);b>.9&&E<.1&&(y<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function p(x,y){let v=x*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function m(){let x=new L,y=new L,v=new L,w=new L,b=new Ct,E=new Ct,T=new Ct;for(let M=0,_=0;M<r.length;M+=9,_+=6){x.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),b.set(a[_+0],a[_+1]),E.set(a[_+2],a[_+3]),T.set(a[_+4],a[_+5]),w.copy(x).add(y).add(v).divideScalar(3);let R=g(w);A(b,_+0,x,R),A(E,_+2,y,R),A(T,_+4,v,R)}}function A(x,y,v,w){w<0&&x.x===1&&(a[y]=x.x-1),v.x===0&&v.z===0&&(a[y]=w/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var dr=class s extends ur{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},fr=class s extends ur{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Oi=class s extends pe{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/i,p=new L,m=new Ct;for(let A=0;A<=i;A++){for(let g=0;g<=n;g++){let d=r+g/n*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let A=0;A<i;A++){let g=A*(n+1);for(let d=0;d<n;d++){let x=d+g,y=x,v=x+n+1,w=x+n+2,b=x+1;o.push(y,v,b),o.push(v,w,b)}}this.setIndex(o),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var pr=class s extends pe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,f=new L,p=[],m=[],A=[],g=[];for(let d=0;d<=n;d++){let x=[],y=d/n,v=0;d===0&&a===0?v=.5/e:d===n&&l===Math.PI&&(v=-.5/e);for(let w=0;w<=e;w++){let b=w/e;u.x=-t*Math.cos(i+b*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(i+b*r)*Math.sin(a+y*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),A.push(f.x,f.y,f.z),g.push(b+v,1-y),x.push(c++)}h.push(x)}for(let d=0;d<n;d++)for(let x=0;x<e;x++){let y=h[d][x+1],v=h[d][x],w=h[d+1][x],b=h[d+1][x+1];(d!==0||a>0)&&p.push(y,v,b),(d!==n-1||l<Math.PI)&&p.push(v,w,b)}this.setIndex(p),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(A,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var gr=class s extends pe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new L,u=new L,f=new L;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){let A=m/i*r,g=p/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(A),u.y=(t+e*Math.cos(g))*Math.sin(A),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(A),h.y=t*Math.sin(A),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){let A=(i+1)*p+m-1,g=(i+1)*(p-1)+m-1,d=(i+1)*(p-1)+m,x=(i+1)*p+m;a.push(A,g,x),a.push(g,d,x)}this.setIndex(a),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var mr=class extends xe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};var ze=class extends On{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sc,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Os(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Xg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Bi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ao=class extends Bi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dl,endingEnd:dl}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case fl:r=t,o=2*e-n;break;case pl:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fl:a=t,l=2*n-e;break;case pl:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-e)/(i-e),A=m*m,g=A*m,d=-f*g+2*f*A-f*m,x=(1+f)*g+(-1.5-2*f)*A+(-.5+f)*m+1,y=(-1-p)*g+(1.5+p)*A+.5*m,v=p*g-p*A;for(let w=0;w!==o;++w)r[w]=d*a[h+w]+x*a[c+w]+y*a[l+w]+v*a[u+w];return r}},xo=class extends Bi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},vo=class extends Bi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},en=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Os(e,this.TimeBufferType),this.values=Os(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Os(t.times,Array),values:Os(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ao(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Xs:e=this.InterpolantFactoryMethodDiscrete;break;case Za:e=this.InterpolantFactoryMethodLinear;break;case qr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return qr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Xg(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let m=0;m!==n;++m){let A=e[u+m];if(A!==e[f+m]||A!==e[p+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=Za;var oi=class extends en{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=Xs;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Co=class extends en{};Co.prototype.ValueTypeName="color";var yo=class extends en{};yo.prototype.ValueTypeName="number";var _o=class extends Bi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)hn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ar=class extends en{InterpolantFactoryMethodLinear(t){return new _o(this.times,this.values,this.getValueSize(),t)}};Ar.prototype.ValueTypeName="quaternion";Ar.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends en{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Xs;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends en{};Io.prototype.ValueTypeName="vector";var Mo=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},Yg=new Mo,bo=class{constructor(t){this.manager=t!==void 0?t:Yg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};bo.DEFAULT_MATERIAL_NAME="__DEFAULT";var xr=class extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},vr=class extends xr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ua=new ne,dc=new L,fc=new L,So=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new os,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;dc.setFromMatrixPosition(t.matrixWorld),e.position.copy(dc),fc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fc),e.updateMatrixWorld(),ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Eo=class extends So{constructor(){super(new Ni(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cr=class extends xr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new Eo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var yr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=pc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function pc(){return performance.now()}var Wo="\\[\\]\\.:\\/",Kg=new RegExp("["+Wo+"]","g"),Xo="[^"+Wo+"]",Jg="[^"+Wo.replace("\\.","")+"]",Zg=/((?:WC+[\/:])*)/.source.replace("WC",Xo),Qg=/(WCOD+)?/.source.replace("WCOD",Jg),jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xo),$g=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xo),tm=new RegExp("^"+Zg+Qg+jg+$g+"$"),em=["material","materials","bones","map"],wo=class{constructor(t,e,n){let i=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kg,"")}static parseTrackName(t){let e=tm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);em.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=wo;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qm=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);var Jt={hw:15,hl:20,gate:5,pocket:3.5},ce=1.6,Me=.7,kc=60,nm=2,Nc=30,Hc=["easy","normal","hard"],zc=7.2,Fc=17.5,im=.28,sm=40,rm=1.9,am=5,om=1.4,lm=2.4,Yo=1.1,cm=1.6,Oc=11,hm=3.2,fn=[{id:"squire",ar:"\u0643\u0623\u0633 \u0627\u0644\u0641\u0631\u0633\u0627\u0646 \u0627\u0644\u0635\u063A\u0627\u0631",en:"Squire Cup",skill:0,mud:0,doors:0,boulderEvery:0,look:"day"},{id:"meadow",ar:"\u0643\u0623\u0633 \u0627\u0644\u0645\u0631\u062C",en:"Meadow Cup",skill:.04,mud:2,doors:0,boulderEvery:0,look:"day"},{id:"trap",ar:"\u0643\u0623\u0633 \u0627\u0644\u0623\u0628\u0648\u0627\u0628 \u0627\u0644\u0633\u0631\u064A\u0629",en:"Trapdoor Cup",skill:.08,mud:0,doors:2,boulderEvery:0,look:"day"},{id:"rock",ar:"\u0643\u0623\u0633 \u0627\u0644\u0635\u062E\u0648\u0631",en:"Boulder Cup",skill:.12,mud:0,doors:0,boulderEvery:9,look:"dusk"},{id:"swamp",ar:"\u0643\u0623\u0633 \u0627\u0644\u0645\u0633\u062A\u0646\u0642\u0639",en:"Swamp Cup",skill:.16,mud:4,doors:2,boulderEvery:0,look:"dusk"},{id:"castle",ar:"\u0643\u0623\u0633 \u0627\u0644\u0642\u0644\u0639\u0629",en:"Castle Cup",skill:.2,mud:2,doors:4,boulderEvery:9,look:"dusk"},{id:"storm",ar:"\u0643\u0623\u0633 \u0627\u0644\u0639\u0627\u0635\u0641\u0629",en:"Storm Cup",skill:.24,mud:3,doors:4,boulderEvery:7,look:"night"},{id:"dragon",ar:"\u0643\u0623\u0633 \u0627\u0644\u062A\u0646\u064A\u0646",en:"Dragon Cup",skill:.28,mud:4,doors:6,boulderEvery:6,look:"night"},{id:"royal",ar:"\u0627\u0644\u0643\u0623\u0633 \u0627\u0644\u0645\u0644\u0643\u064A",en:"Royal Final",skill:.32,mud:4,doors:6,boulderEvery:5.5,look:"royal",final:!0}],um=[[-8,-6],[8,6],[8,-6],[-8,6],[0,-12],[0,12],[-9,-15],[9,15]],dm=[[-7,0],[7,0],[0,-9],[0,9],[-9,-12],[9,12]],Bc=[-15,-10,-5,5,10,15],kn=[{id:"blue",hex:2779880,price:0,ar:"\u0623\u0632\u0631\u0642",en:"Blue"},{id:"green",hex:2799706,price:30,ar:"\u0623\u062E\u0636\u0631",en:"Green"},{id:"teal",hex:2017480,price:30,ar:"\u062A\u0631\u0643\u0648\u0627\u0632\u064A",en:"Teal"},{id:"purple",hex:9063144,price:40,ar:"\u0628\u0646\u0641\u0633\u062C\u064A",en:"Purple"},{id:"orange",hex:16742938,price:40,ar:"\u0628\u0631\u062A\u0642\u0627\u0644\u064A",en:"Orange"},{id:"pink",hex:16734888,price:40,ar:"\u0648\u0631\u062F\u064A",en:"Pink"},{id:"gold",hex:15773728,price:50,ar:"\u0630\u0647\u0628\u064A",en:"Gold"},{id:"white",hex:15921906,price:60,ar:"\u0623\u0628\u064A\u0636",en:"White"}],br=[{id:"bucket",price:0,ar:"\u062E\u0648\u0630\u0629 \u0639\u0627\u062F\u064A\u0629",en:"Plain"},{id:"plume",price:40,ar:"\u0631\u064A\u0634\u0629",en:"Plume"},{id:"crest",price:50,ar:"\u062A\u0627\u062C \u0645\u0634\u0637",en:"Crest"},{id:"horns",price:70,ar:"\u0642\u0631\u0648\u0646",en:"Horns"},{id:"jester",price:90,ar:"\u0645\u0647\u0631\u062C",en:"Jester"},{id:"crown",price:120,ar:"\u062A\u0627\u062C",en:"Crown"}],Sr=14170682,Le=(s,t,e)=>s<t?t:s>e?e:s;function fm(s){let t=s>>>0||1;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Gc(s){let t=s&&typeof s=="object"?s:{},e=(l,c,h,u)=>Number.isFinite(l)?Le(Math.floor(l),h,u):c,n=Array.from({length:fn.length},(l,c)=>e(Array.isArray(t.stars)?t.stars[c]:0,0,0,3)),i=new Set(["blue"]),r=new Set(["bucket"]);if(t.owned&&Array.isArray(t.owned.colors))for(let l of t.owned.colors)kn.some(c=>c.id===l)&&i.add(l);if(t.owned&&Array.isArray(t.owned.helmets))for(let l of t.owned.helmets)br.some(c=>c.id===l)&&r.add(l);let a=i.has(t.color)?t.color:"blue",o=r.has(t.helmet)?t.helmet:"bucket";return{v:1,coins:e(t.coins,0,0,1e7),unlocked:e(t.unlocked,1,1,fn.length),stars:n,owned:{colors:[...i],helmets:[...r]},color:a,helmet:o,diff:Hc.includes(t.diff)?t.diff:"normal",muted:!!t.muted,wins:e(t.wins,0,0,1e6),goals:e(t.goals,0,0,1e6),played:e(t.played,0,0,1e6)}}function Wc(s,t,e){return s.coins+=e.coins,s.played++,s.goals+=e.goals[0],e.win&&(s.wins++,s.stars[t]=Math.max(s.stars[t]||0,e.stars),s.unlocked=Math.max(s.unlocked,Math.min(fn.length,t+2))),s}function Xc(s,t,e){let i=(t==="color"?kn:br).find(a=>a.id===e);if(!i)return{ok:!1,reason:"unknown"};let r=t==="color"?s.owned.colors:s.owned.helmets;return r.includes(e)?{ok:!0,reason:"owned"}:s.coins<i.price?{ok:!1,reason:"coins"}:(s.coins-=i.price,r.push(e),{ok:!0,reason:"bought"})}function Ko(s,t,e){return(t==="color"?s.owned.colors:s.owned.helmets).includes(e)?(t==="color"?s.color=e:s.helmet=e,!0):!1}var us=class{constructor(t={}){var n;this.round=Le(t.round|0,0,fn.length-1),this.cfg=fn[this.round],this.diff=Hc.includes(t.diff)?t.diff:"normal",this.young=(t.age||5)<=4,this.rand=fm((n=t.seed)!=null?n:1),this.autoPlayer=!!t.autoPlayer,this.input={x:0,z:0},this.dashBuf=0;let e={easy:.04,normal:.42,hard:.68}[this.diff];this.skill=[{easy:.75,normal:.55,hard:.5}[this.diff],Le(e+this.cfg.skill-(this.young?.15:0),0,1)],this.score=[0,0],this.timeLeft=kc,this.overtime=!1,this.t=0,this.playTime=0,this.goalLimit=nm,this.ev=[],this.knights=[];for(let i=0;i<2;i++)for(let r=0;r<4;r++)this.knights.push({id:i*4+r,team:i,slot:r,human:i===0&&r===0,x:0,z:0,vx:0,vz:0,fx:0,fz:i===0?-1:1,stun:0,stunDur:0,immune:0,dash:0,dx:0,dz:0,cd:0,role:"attacker",cmd:{x:0,z:0,dash:!1},aiT:0,err:0,errT:0,fall:null,mud:!1,speed:0});this.barrel={x:0,z:0,vx:0,vz:0,hitCd:0,idle:0,onDoor:!1},this.doors=um.slice(0,this.cfg.doors).map((i,r)=>({id:r,x:i[0],z:i[1],half:rm,state:"closed",t:0})),this.muds=dm.slice(0,this.cfg.mud).map((i,r)=>({id:r,x:i[0],z:i[1],r:hm})),this.boulders=[],this.boulderId=0,this.lastLane=-1,this.phase="kickoff",this.phaseT=0,this.lastCount=99,this._roleT=0,this.acc=0,this.kickoffs=0,this._kickoff(3.2)}attackDir(t){return t===0?-1:1}ownGoalZ(t){return-this.attackDir(t)*Jt.hl}pressDash(){this.dashBuf=.3}_emit(t){t.t=this.t,this.ev.push(t)}_kickoff(t){this.phase="kickoff",this.phaseT=t,this.lastCount=99,this.kickoffs++;for(let n of this.knights){let i=n.team===0?1:-1,r=[[0,5],[-6,7],[6,7],[0,13]][n.slot];n.x=r[0],n.z=i*r[1],n.vx=n.vz=0,n.fx=0,n.fz=-i,n.stun=0,n.immune=0,n.dash=0,n.cd=.5,n.fall=null,n.cmd={x:0,z:0,dash:!1}}let e=this.barrel;e.x=0,e.z=0,e.vx=e.vz=0,e.idle=0;for(let n of this.doors)n.state="closed",n.t=4+n.id*1.3;this.boulders=[],this.bTimer=6+this.rand()*2,this._assignRoles()}_assignRoles(){for(let t=0;t<2;t++){let e=this.knights.filter(a=>a.team===t&&(!a.human||this.autoPlayer));if(!e.length)continue;let n=this.barrel;e.sort((a,o)=>Math.hypot(a.x-n.x,a.z-n.z)-Math.hypot(o.x-n.x,o.z-n.z)),e[0].role="attacker";let i=e.slice(1),r=this.ownGoalZ(t);i.sort((a,o)=>Math.abs(a.z-r)-Math.abs(o.z-r)),i.forEach((a,o)=>{a.role=o===0?"defender":"support"})}}step(t){this.ev=[],this.acc+=Math.min(t,.1);let e=1/120;for(;this.acc>=e;)this.acc-=e,this.t+=e,this._sub(e);return this.dashBuf>0&&(this.dashBuf=Math.max(0,this.dashBuf-t)),this.ev}_sub(t){let e=this.phase;if(e==="over")return;if(e==="kickoff"){this.phaseT-=t;let i=Math.ceil(this.phaseT-.2);i<this.lastCount&&i>=1&&(this.lastCount=i,this._emit({type:"count",n:i})),this.phaseT<=0&&(this.phase="play",this._emit({type:"go"}));return}if(e==="goal"){this.phaseT-=t;for(let i of this.knights)i.vx*=Math.exp(-4*t),i.vz*=Math.exp(-4*t);this._physics(t,!1),this.phaseT<=0&&this._afterGoal();return}this.playTime+=t,this.timeLeft-=t,this._control(t),this._hazards(t),this._physics(t,!0);let n=this.barrel;if(Math.abs(n.x)<Jt.gate&&Math.abs(n.z)>Jt.hl+.3){let i=n.z<0?0:1;this.score[i]++,this.phase="goal",this.phaseT=2.6,this.lastScorer=i,this._emit({type:"goal",team:i,score:this.score.slice()});return}this.timeLeft<=0&&(this.timeLeft=0,this.score[0]!==this.score[1]?this._end():this.overtime?this._end():(this.overtime=!0,this.timeLeft=Nc,this._emit({type:"overtime"})))}_afterGoal(){if(Math.max(this.score[0],this.score[1])>=this.goalLimit||this.overtime)return this._end();if(this.timeLeft<=0){if(this.score[0]!==this.score[1])return this._end();this.overtime=!0,this.timeLeft=Nc,this._emit({type:"overtime"})}this._kickoff(2.2)}_end(){this.phase="over",this._emit({type:"over",result:this.result()})}result(){let[t,e]=this.score,n=t>e,i=t===e,r=t-e,a=n?e===0||r>=2?3:e===1?2:1:0,o=t*3+(n?12+a*4:i?5:3);return{win:n,draw:i,goals:[t,e],stars:a,coins:o}}_control(t){this._roleT-=t,this._roleT<=0&&(this._assignRoles(),this._roleT=.4);let e=this.barrel;for(let n of this.knights){let i=n.human&&!this.autoPlayer;if(n.stun>0){n.stun-=t;let r=Math.exp(-3*t);n.vx*=r,n.vz*=r,n.stun<=0&&(n.stun=0,n.immune=1.4,n.fall&&this._relocate(n))}else{if(n.immune>0&&(n.immune-=t),n.cd-=t,i){let l=Math.hypot(this.input.x,this.input.z);n.cmd={x:l>1?this.input.x/l:this.input.x,z:l>1?this.input.z/l:this.input.z,dash:this.dashBuf>0}}else n.aiT-=t,n.aiT<=0?(n.aiT=.05,this._ai(n)):n.cmd.dash=!1;n.cmd.dash&&n.cd<=0&&n.dash<=0&&this._startDash(n,i);let r=1;n.mud=!1;for(let l of this.muds)Math.hypot(n.x-l.x,n.z-l.z)<l.r&&(r=.55,n.mud=!0);let a=(i?zc*1.05:zc*(.72+.28*this.skill[n.team]))*r;if(n.speed=a,n.dash>0)n.dash-=t,n.vx=n.dx*Fc,n.vz=n.dz*Fc;else{let l=n.cmd.x*a,c=n.cmd.z*a,h=l-n.vx,u=c-n.vz,f=Math.hypot(h,u),p=sm*t;f>p&&(h=h/f*p,u=u/f*p),n.vx+=h,n.vz+=u}let o=Math.hypot(n.cmd.x,n.cmd.z);if(n.dash<=0&&o>.15){let l=Math.hypot(n.cmd.x,n.cmd.z);n.fx=n.cmd.x/l,n.fz=n.cmd.z/l}}n.x+=n.vx*t,n.z+=n.vz*t}}_startDash(t,e){let n=t.cmd.x,i=t.cmd.z,r=Math.hypot(n,i);r<.2&&(n=t.fx,i=t.fz,r=Math.hypot(n,i)||1),n/=r,i/=r;let a=this.barrel;if(e){let o=a.x-t.x,l=a.z-t.z,c=Math.hypot(o,l);if(c<6.5&&c>.1&&(n*o+i*l)/c>(this.young?.5:.72)){n=n*.4+o/c*.6,i=i*.4+l/c*.6;let u=Math.hypot(n,i);n/=u,i/=u}}t.dash=im,t.dx=n,t.dz=i,t.fx=n,t.fz=i,t.cd=e?this.young?1.1:1.5:2.8-1.4*this.skill[t.team],this.dashBuf=0,this._emit({type:"dash",id:t.id})}_stun(t,e,n,i,r){t.stun=e,t.stunDur=e,t.dash=0,t.vx=n,t.vz=i,t.immune=0,this._emit({type:"stun",id:t.id,kind:r})}_relocate(t){let e=t.fall;t.fall=null;let n=t.x-e.x,i=t.z-e.z,r=e.half-Math.abs(n),a=e.half-Math.abs(i),o=Me+.4;r<a?t.x=e.x+(n>=0?1:-1)*(e.half+o):t.z=e.z+(i>=0?1:-1)*(e.half+o),t.x=Le(t.x,-Jt.hw+Me,Jt.hw-Me),t.z=Le(t.z,-Jt.hl+Me,Jt.hl-Me)}_ai(t){let e=this.barrel,n=this.skill[t.team],i=this.attackDir(t.team),r=this.ownGoalZ(t.team);t.errT-=.05,t.errT<=0&&(t.errT=.8,t.err=(this.rand()-.5)*2*(1-n)*.4);let a=0,o=0,l=!1,c=Math.hypot(e.x-t.x,e.z-t.z),h=(e.z-r)*i,u=()=>{let x=this._chase(t,n,i);a=x.tx,o=x.tz,l=x.dash};if(t.role==="attacker")u();else if(t.role==="defender")c<8||h<14&&e.vz*i<-1?u():(a=Le(e.x*.45,-5.5,5.5),o=r+i*Le(h*.35,5,11));else if(h>Jt.hl){a=(e.x>1?-1:e.x<-1||t.slot%2?1:-1)*8,o=Le(e.z+i*7,-Jt.hl+3,Jt.hl-3);let y=null,v=99;for(let w of this.knights)if(w.team!==t.team&&w.stun<=0&&w.immune<=0){let b=Math.hypot(w.x-t.x,w.z-t.z),E=Math.hypot(w.x-e.x,w.z-e.z);b<6&&E<7&&b<v&&(v=b,y=w)}y&&(a=y.x,o=y.z,v<3.4&&t.cd<=0&&this.rand()<.1+.5*n&&(l=!0))}else c<7?u():(a=Le(-e.x*.7,-8,8),o=r+i*14);let f=0,p=0;for(let x of this.doors)if(x.state!=="closed"){let y=t.x-x.x,v=t.z-x.z;if(Math.max(Math.abs(y),Math.abs(v))<x.half+1.6){let w=Math.hypot(y,v)||1;f+=y/w*2.5,p+=v/w*2.5}}for(let x of this.boulders){let y=t.z-x.z;Math.abs(y)<2.6&&(x.state==="warn"||Math.abs(t.x-x.x)<9)&&(p+=(y>=0?1:-1)*2)}let m=a-t.x,A=o-t.z,g=Math.hypot(m,A);if(g>.01){let x=Math.min(1,g/.6);m=m/g*x,A=A/g*x}else m=0,A=0;m+=f,A+=p;let d=Math.hypot(m,A);d>1&&(m/=d,A/=d),t.cmd={x:m,z:A,dash:l&&t.cd<=0}}_chase(t,e,n){let i=this.barrel,r=ce+Me,a=i.x+i.vx*.2,o=i.z+i.vz*.2,l=0-a,c=n*Jt.hl-o,h=Math.hypot(l,c)||1;l/=h,c/=h;let u=Math.cos(t.err),f=Math.sin(t.err),p=l*u-c*f,m=l*f+c*u;l=p,c=m;let A=-n*Jt.hl;(Math.abs(a)>Jt.hw-3||Math.abs(o-A)<3)&&(l+=-Math.sign(a||1)*(Math.abs(a)>Jt.hw-3?.9:.5),c+=n*(Math.abs(o-A)<3?.3:.6),h=Math.hypot(l,c),l/=h,c/=h);let g=t.x-a,d=t.z-o,x=g*l+d*c,y=-g*c+d*l,v=y>=0?1:-1,w=-c*v,b=l*v,E=a-l*(r+.9),T=o-c*(r+.9),M,_,R=!1;if(x<-r*.6&&Math.abs(y)<r*1.15)M=a+l*1.5,_=o+c*1.5,Math.hypot(g,d)<r+2.6&&t.cd<=0&&this.rand()<.1+.6*e&&(R=!0);else{let H=Le(x+.5*r,0,r+2.2);M=E+w*H,_=T+b*H;let J=M-t.x,G=_-t.z,$=J*J+G*G||1,B=Le(((a-t.x)*J+(o-t.z)*G)/$,0,1);Math.hypot(t.x+J*B-a,t.z+G*B-o)<r+.5&&x>-r&&(M=a+w*(r+1.5)-l*.6,_=o+b*(r+1.5)-c*.6)}let O=Jt.hw-Me,N=Jt.hl-Me;return{tx:Le(M,-O,O),tz:Le(_,-N,N),dash:R}}_hazards(t){for(let n of this.doors)if(n.t-=t,n.state==="closed"&&n.t<=0)n.state="warn",n.t=om,n.warnAt=this.t,this._emit({type:"doorWarn",id:n.id});else if(n.state==="warn"&&n.t<=0)n.state="open",n.t=lm,this._emit({type:"doorOpen",id:n.id});else if(n.state==="open")if(n.t<=0)n.state="closed",n.t=am,this._emit({type:"doorClose",id:n.id});else for(let i of this.knights)!i.fall&&Math.abs(i.x-n.x)<n.half-.15&&Math.abs(i.z-n.z)<n.half-.15&&(i.fall=n,this._stun(i,1.5,0,0,"fall"),this._emit({type:"fall",id:i.id,door:n.id}));if(this.cfg.boulderEvery>0&&(this.bTimer-=t,this.bTimer<=0&&this.boulders.length<2)){let n;do n=Math.floor(this.rand()*Bc.length);while(n===this.lastLane);this.lastLane=n;let i=this.rand()<.5?1:-1,r={id:this.boulderId++,state:"warn",t:cm,z:Bc[n],dir:i,x:-i*(Jt.hw+3),hitB:0,rot:0};this.boulders.push(r),this.bTimer=this.cfg.boulderEvery*(.8+.4*this.rand()),this._emit({type:"boulderWarn",id:r.id,z:r.z,dir:i})}let e=this.barrel;for(let n of this.boulders){if(n.state==="warn"){n.t-=t,n.t<=0&&(n.state="go",this._emit({type:"boulderGo",id:n.id}));continue}n.x+=n.dir*Oc*t,n.rot+=Oc*t/Yo,n.hitB-=t;for(let i of this.knights)i.stun<=0&&i.immune<=0&&Math.hypot(i.x-n.x,i.z-n.z)<Yo+Me&&this._stun(i,i.human?1:1.2,n.dir*7,0,"boulder");n.hitB<=0&&Math.hypot(e.x-n.x,e.z-n.z)<Yo+ce&&(e.vx+=n.dir*10,n.hitB=.8,this._emit({type:"boulderBarrel",id:n.id}))}this.boulders=this.boulders.filter(n=>Math.abs(n.x)<Jt.hw+4||n.state==="warn")}_physics(t,e){let n=this.barrel,i=this.knights;n.hitCd-=t;for(let l of i){let c=n.x-l.x,h=n.z-l.z,u=Math.hypot(c,h),f=ce+Me;if(u<f&&u>1e-6){let p=c/u,m=h/u,A=(l.vx-n.vx)*p+(l.vz-n.vz)*m,g=l.dash>0?4.2:1.3,d=4;if(A>0){let y=1.35*A/(1/g+1/d);n.vx+=p*y/d,n.vz+=m*y/d,l.vx-=p*y/g*.2,l.vz-=m*y/g*.2,A>3&&n.hitCd<=0&&(n.hitCd=.12,this._emit({type:"barrelHit",id:l.id,power:Math.min(1,y/40),dash:l.dash>0})),n.last=l.team}let x=f-u;n.x+=p*x*.85,n.z+=m*x*.85,l.x-=p*x*.15,l.z-=m*x*.15}}for(let l=0;l<i.length;l++)for(let c=l+1;c<i.length;c++){let h=i[l],u=i[c],f=u.x-h.x,p=u.z-h.z,m=Math.hypot(f,p),A=Me*2;if(m<A&&m>1e-6){let g=f/m,d=p/m,x=(A-m)/2;if(h.x-=g*x,h.z-=d*x,u.x+=g*x,u.z+=d*x,e&&h.team!==u.team){let y=(v,w,b,E)=>{v.dash>0&&w.dash<=0&&w.stun<=0&&w.immune<=0&&(this._stun(w,w.human?this.young?.7:1:1.2,b*9,E*9,"dash"),v.dash=Math.min(v.dash,.05),this._emit({type:"clash",id:v.id,victim:w.id}))};h.dash>0&&u.dash>0?(!h._clash||this.t-h._clash>.3)&&(h._clash=this.t,this._emit({type:"clang"})):(y(h,u,g,d),y(u,h,-g,-d))}}}let r=.55;for(let l of this.muds)Math.hypot(n.x-l.x,n.z-l.z)<l.r&&(r+=3.2);n.onDoor=!1;for(let l of this.doors)l.state==="open"&&Math.abs(n.x-l.x)<l.half&&Math.abs(n.z-l.z)<l.half&&(r+=6,n.onDoor||(n.onDoor=!0));let a=Math.exp(-r*t);n.vx*=a,n.vz*=a;let o=Math.hypot(n.vx,n.vz);o>22&&(n.vx*=22/o,n.vz*=22/o),n.x+=n.vx*t,n.z+=n.vz*t,this._barrelWalls(),e&&(o<.5?(n.idle+=t,n.idle>7&&(n.idle=0,n.vx+=-Math.sign(n.x||1)*2+(this.rand()-.5),n.vz+=-Math.sign(n.z||1)*2,this._emit({type:"nudge"}))):n.idle=0);for(let l of i){let c=l.x-n.x,h=l.z-n.z,u=Math.hypot(c,h),f=ce+Me;u<f&&u>1e-6&&(l.x=n.x+c/u*f,l.z=n.z+h/u*f),l.x=Le(l.x,-Jt.hw+Me,Jt.hw-Me),l.z=Le(l.z,-Jt.hl+Me,Jt.hl-Me)}}_barrelWalls(){let t=this.barrel,{hw:e,hl:n,gate:i,pocket:r}=Jt,a=o=>{let l=-t["v"+o]*.6;Math.abs(t["v"+o])>2.5&&this._emit({type:"fence",power:Math.min(1,Math.abs(t["v"+o])/14)}),t["v"+o]=l};t.x>e-ce?(t.x=e-ce,t.vx>0&&a("x")):t.x<-e+ce&&(t.x=-e+ce,t.vx<0&&a("x"));for(let o of[-1,1]){let l=o*t.z;for(let c of[-i,i]){let h=t.x-c,u=t.z-o*n,f=Math.hypot(h,u),p=ce+.3;if(f<p&&f>1e-6){let m=h/f,A=u/f;t.x=c+m*p,t.z=o*n+A*p;let g=t.vx*m+t.vz*A;g<0&&(t.vx-=1.6*g*m,t.vz-=1.6*g*A)}}Math.abs(t.x)>=i&&l>n-ce?(t.z=o*(n-ce),o*t.vz>0&&a("z")):Math.abs(t.x)<i&&l>n-0&&(Math.abs(t.x)>i-.2&&(t.x=Math.sign(t.x)*(i-.2),t.x*t.vx>0&&a("x")),l>n+r-ce&&(t.z=o*(n+r-ce),o*t.vz>0&&a("z")))}}};function Yc(s,t,e={}){let n=s.prototype.play,i=s.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,l]of Object.entries(t))try{let c=atob(l.split(",")[1]),h=new Uint8Array(c.length);for(let f=0;f<c.length;f++)h[f]=c.charCodeAt(f);let u=a.ctx.decodeAudioData(h.buffer,f=>{a._smp[o]=f},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}i&&(s.prototype.unlock=function(...a){let o=i.apply(this,a);return r(this),o}),s.prototype.play=function(a,o){let l=this.ctx;if(l&&l.state==="running"&&!this.muted&&this.on!==!1){r(this);let c=this._smp&&this._smp[a];if(c){let h=l.createBufferSource(),u=l.createGain();h.buffer=c,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||l.destination),h.start(l.currentTime+.005);return}}return n.call(this,a,o)}}function Kc(s,{gain:t=.5,file:e="music.mp3"}={}){let n=s.prototype.unlock,i=s.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let l=a.ctx;fetch(o).then(c=>c.ok?c.arrayBuffer():Promise.reject()).then(c=>l.decodeAudioData(c)).then(c=>{if(a.ctx!==l)return;let h=l.createBufferSource(),u=l.createGain();h.buffer=c,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||l.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),i&&i.call(a,null)}).catch(()=>{a._song=null})}s.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},i&&(s.prototype.setTune=function(a){if(!this._song)return i.call(this,a)})}var Jc={clang:"data:audio/mpeg;base64,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",thud:"data:audio/mpeg;base64,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",dooropen:"data:audio/mpeg;base64,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",doorfall:"data:audio/mpeg;base64,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",stun:"data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+zjAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAABoAABbIABISEhwcHBwlJSUlLy8vLzg4ODhCQkJCS0tLVVVVVV5eXl5oaGhocXFxcXt7e3uEhISOjo6Ol5eXl6GhoaGqqqqqtLS0tL29vb3Hx8fQ0NDQ2tra2uPj4+Pt7e3t9vb29v///wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkBMAAAAAAAAAWyF80m7YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+zjEAAAJoIVYFGQAAZqmLrMS0ACIiIjHsgQQiIhwcBQBQFgeJLi7oiIiJX7li4uLvAuLnu98uiJ7u5YoKGAgUBAHw/WDgIAgCAIA+D4Pn8QOn/5QH/8Hwff8oD4Ph//+GHIQimC7aQBR6AhgIKzQOKMo78L4jsa9CZlgyS+B0KRAN1D1OUWU5wYBKcEMZx8EqEoqmbLNE1FZfKSaMrEvHke/mv8+1B1egpJmU/dRi9/sbJ/+mn/9Z76tndAvdnp5isabZlNYHMpneXe0OmAH9uoxQjEypon/+zjEB4AM2X15/JUAAXYobnyGlpBnOE5htRT7ojA4LLD4kLk5vaf7i2IziDLCuv/xUSJZyRYcnILVofHhxhhZ5qnaU8w0eIxUVR4clNWt/T/6XqYw9DQfuyerbr3KlTWRfb/6lphIPSYoaXctjeZZzGHAGkqQU5lJYaUIJc6um0iQBgj2rO0820x1jvDMNKxkD3H7q/pjqaJjtKLtZBRqEZBkiiiTXR2/6oawccdFuvf9dm/KVlMWLhAJgYRQyv/6uJAc//oakGUa6rLb+hKALmEQhbEUaen/+zjEBoAL6XttpCz1AYio7jxmnlgKQNGDT9pcOA3z/9vK1M+HkJEQ8SgFUaiJ/66F4fzrVUVt0LLXbnLTevD4VXUh1KXF/9qJVzn1/U5vRv//eYG1Sf/o9ShpqHHu3//6KyoVOaAq5hqhYUIYpfVpAaCGl0TgMcg2F9vUAZiX3tV60r9QFIPIzSJwMSv9lnQgRSNymdQNUBsKzzDDDEIdFOQuaq5t29ZrdDkRdGx59Jytp/pWlFBwY5l//U1Djh0kv/D5AYeDtIPVeFmJcwhgR9CQFAWHD2r/+zjEBwAMdXlt5Kz2gYGu7jyTirGINaZaMJbHNiMrN+ti9M9qrf/rCMDRnJmwfTj+r/68Vg0qZzm+VktiBfEnITUzEvTKllMU1uc3VH9P0zJz6qVTN//3UCZaar/7LNYsSHjn///6rKPxLMRVNSnEgDfNIEoJkiImV5qa9+bkXuKqJfwv9clxfbV41BVnUBKmP/46MjqVGyC8wfHzCNDGQgUesspppzbd1Yxf7d0acrTUdt//3RyoBA1HnX/1nIQhDp//+2dAoXJr5FZZi7U6UAPVAjFbK4v/+zjEBoAMIXtr5LTygYoxrLxlCngoO6wQtxaM+7Sevvb7AznausZiRPmhwNDqff+Oi9Q5HDkDzkZW+einHGisYdz307HIqe93q1zz0dckU//eyGHsBgBph13//ImGkXf//+zMYhEeAOxVWIaCKEAAqJIM1jAoJQGIkCuFZf7inT2MiS3dlVtx8AYeJZwAsCA7v+YC4H4wIyhASnk3dvU9bkgyI30f56nnHfvptVuhxxn/+00qaYBabQ//mRTlGBwKif/6spkBGnv7x3WYSrmpWpAF2aQGMxf/+zjEBgAMNXVr4yFQiXmu7fzCqnGUcxKSoL2phzkR2/nirojRP5IOGEYXo/b/0DxHGzGOo6ecUPvPZ2eWSVL26fNIV+1T2lDUU5VJ2Rz1v/X9S54EZ555//VlIBerEzujf/5tlqSwC7v6pdRPX2PcAG/5wBi7di6xqwsLy3ipc91qjcR9+/d6tVOhPZg/MGP/8JCg1LCyi7Mj6mdRI5qOcrPJ/RP/0bdxdDmd0nW+z73qGIhicjYYv/+pGSliif//scaaeQFXO1yqiWq5W3AE2KIFvs3RL4b/+zjEB4ALXXVp5iiygZIuLDyWnlHZQx5WuVWmiG69L21ibVVmeoPsKjmh+d/8IArApygrD/TRlUYWUBTmb/0UxNu9koiolVFSsf//okLG2f/9FlGDxR///LQrjxAUDiso8uzxLlKAB3MIAR2EKajfZYc0xaCOwTvfmqC0dz6aq6BKC3ISZgK3/4KBhyYXcSzA0j6+qDpCOEx4ean/YePpXc788eMOOOLsX/+ucpcgCoPh8oc3/znFI2MVr//++SF11/+wIUqbnoqbfpAE/SYHcSLErJCDElH/+zjECQAK8UNr5LDwQWuuLLykqDhHSlNWcTst8DKpRSbLBk5/QQONbBv/9CZpc0uiEm/pQkYxxIsVL//0dFtmb9ijsh5ip//6sgImX//RjiA1Rv/KtImCeLEIh7q82cYAP5FANeK60wNlkDBlfnLL2QgVuYyG60AwOl/YfEgtUCw319EHhGQDwmKmX/fMMLTS6k7//KGkLKifp3OdrKRt//0WIAReazf+jqYYd///WeXMBFXCtVdWZoZWQEOspAPI8H9QkOScduHrKgegMsQ6wZPzRz+Eoz//+zjEEQAKmXFt5ijwUVsoLryRHoYqw7gvf6flWLFNCKrqrmbkzTxUOEDFOV+n2Lf/6n/X//6UOZv/+wUG6Kn//1mDwEA6tqmaGV3h4YEKQgASS0uKguslUR20+010wcEW3czo5LpthxH/CuCqC0v1r+SSc23/yrQfDIsPb/1qXoaqe5mqMxR1ONP//+cNACyBf//UwcEYNf6JoJgs3qVWZmd4ZkACsaQBnwYRoWEyJ0pGZGDTRoHkB6vtHo+CrpV4gPG4m//4KguJtjk+7ajKEA4HNt9tWGn/+zjEHIAKeT9p5JVVUVWua7zDlshfvv6WRXrMb//nnD0uGim5zf/MHwon/wVHu6ElaXd3sMAHYBCLsb/W1H6BQvvVO33zgBYMRaOLFSovjnN7tmd8HnjCygRDfavygFyAJBU+hf/jiQms//9TJt296GVLVX//7QR+v/0Zhf///4ooqtvJqpbbt9WSE4SQgdzl0Z+3i0f61jKx64XgKlWrD42fF6F31YnGgi6Begqau31Jo2Mdr2u1C6lOgkSb//JbT9HVFOCdrKK//8pChzI6P/9zhAYVH///+zjEKQAKyXVhpihREVIoK/w2HdD/3CEk0eKapzOkAPZlAR7Cg0HhBz8aIpVGtW226hk4tVThafmFewhNGlAJEvv8wSRSPIyy/d6dUY8fm//qiN//qhr6G//+Ycw3ANJmOn/6qxM9/4JkQk1WPleIeZmJcku0Eh3sZIV7dTGm14D7TvhfafTvRifWTAUSRx4i4vhH/+LKKnbdvz6DTYcKLN+jZRoSMn/c0iIj3iR///SUAh7f/5RSIihf//op3nGK8MrD4+XmYwAW6TCKdYs0TDzlh0zkrFn/+zjENQAKlXVz5LyusVKuq7zDllneUhxGdmJIRFiwiQl8xyLqFif/1DKjA7r/m4kqDyof/9Zd/6tzq2gmKf/+qCYoOM3/+NHiQIVv//5Itobjc8Oql23//gAdpSBpOnbhNUHz5SOqPtQ2x46iDJD2peEeKjio74UhsaP//HkKvFv1ahBMxTCodFXr/yIN6duy1UdZWCQr//9DCS//8pBAk5hT//78LGbQkS7XcTLAh6koDvwUkzaGS2FyVDEi+7RLkJ3Ce60TQ//sG5Yi9gobfP/8HIgNE5z/+zjEQYAKfXVjphRTkVkvKryVnaiXXtl3Q4yaQHiyHN/93/9H/47//9WCwQo//+qDYIzmP//9eTLLKOVVJSd3uplQApwCEU4umhzfHFvtIQtZrh26ql0DIfVy6ovQHyUVC6gTCb0b8wShKGYkjd7fx4+Y9mIW//7fpRWbsuhUm//+c4Xhi//8w8RRo9/wfMlAbEB+k0eHlJqGABnJAHEyYn5SJlaB77u1SBN3mvKpGbTxadtf+wVPnoWGE11J/1DOPgvnTep/575RzmJmf/93/6C2zGGPd0//+zjETYAK8UFR5iFQQWUuqfy2nsn/9GMOAaSO/6fQ8Hx3//7KrIS0kUglJVd3iJhQQrkABb2KITonYQrJVFjLXbPsVCfCPqfNdT3XBQXJdIgCA27fyILw8IirvJW60HndJccJjp379yL276GOjIa2hAX//+eMALCfRv/3cWf//617LIF4YyUhzXf/4AK4gAN+t1SH3n5RZvc2ksvJKLbGED8E3oB2QFkpYOY1S/8fB+CoJATL72zqBDnFUNHwlInJZ/+Z5z5aqkUR2p3//9WHBMAMBR//6MP/+zjEVoALjYVL5Kh3gXkwaPRmnonm2PX//9TTCtWepo6K2go3Nb0AAYAALfUKi8chac6iirprbHN6Ifr4tLtVWQAsdAOYWALonaDJvv1k8KUKEkBYlu6+1z7a9Z49//+yu7vS0aXrNP/93NDIaBJU0nq/+pEd5JLP3//+qxRGHhKXSfaYIxup0hzwOQxwwa6Oxwt1ffjKaZZa1HQBFEURnNwAlDyzFGqqphpCrBNQPAcI8nvepOZlrs5i06izr//+i1bVK7X9bf/6qRLh+Eycydl//l8mk+f/+zjEWoBMOYFBpLTXiXqwJ5B2mriW3//1No7CpQYp8nUAhBOwAACgAAxOIY6YmFj8/Us+HnslI+nPOwRoMkQJzwByTXZ0a7IKFDh7JVC1kyKyN73SLxZqxY6pGd//72VtaHE1z0Xz21//RR6GAlEBASo3/5AQioXt//9UOMGgxFo4xXfzSioBIQTjAHAAhwaPZBdfH7O1ba+K2kJF81FS8xaAf0iBIoFkC4is1StLY6KaF/g/AW0fY9kmpamrRYslteSaJ9ZuVqH//r9KpJLq162//60iCCL/+zjEW4AMvY05pE1SyaOxprC5orlC0GDlRv/5WL5iVV///6scLBSCS5/8uFUAtKR2AAKgAAx51SWFqqVcYTqW9b1RQrNdlwSsuqcLLDYmHKAMgzdaSP6y6I7EuRKBJkET585CpB8jOKDUXKZ/9P+yLqxylCJ+hv//qcFAIgtYa//zC4Qgt///9DUGiIcxcEpJN6AAvIEDxWTNRiaMpn0s6+gpMpE+u9lluqTArw8F9FMC7LfV+yxXBTBtkcQYurQ644yAKaQPJCQoLHb++qOzacXJ3ZVRHaj/+zjEVYAMMXU5pEj0gYYupzUSt1Cf/66zpwN0vnz6Tf/U6RLspX//93SMxSwBJrgAHAQAjWRGNzKtB3rem+4vY8u64hp22MErChm0wxSZAVA1asu/nDwavE8B2x8ESJJFXvOFLm5xNy0ZpIpt6n0DH/oLWgzVK0K017f/a5gYCNVrNn//UxDTIwWr//9zq1F4qP4oAAFIABhAAoorGOm5wxznP513U2ZqbRW6fcaFPAlDNx6tHiydHvf2v3vetagxS16iiUBT+PkrO9HFwFVznHpp0VS2ren/+zjEVYAM3XczRb5UCcSwZejcKpCiIk/PzVqUNZqmFVqp+d/508oLgGwvEU5Hb/yEwqSEhdf//9IgyAWi9SElqBkAoopRAA2hADpWXHpENKm2hnUtWiWI17oLwSYNkX1qPgJQ9qbUpSlD8PYd4IMyPm3faZDBH2UbLKIcIORk5T430DVU15y7eYd1T//qeaMQUiyYd//dCgsEwP/6RyjCusBBWQCwAEnYWqlRaqvKtKvqtCX5xuavgZo3xtuMdcBnuO/i3+v7YkEBBwlytO40fzlOAJshEZP/+zjESwAL6UM1po1cAWOoZeSnnpBJixGOn20fT/y1UfSbbR//+a4pB2AKYR3/+xsbRn/Oi50NqgAEGAKABRxiuZGJQZm2L2df6j9mTZZbhS3lDhFCHoxPEeCERz/dKo4R4lwaOGYJQrGO1lMzjiWzlg3qPOynalqT09urUndDr/V//1HXOi7KBVMSp+KgwB3f+DCRGa2ABMFJUEO1EAjZVWgUWq7Z199z+ko2MSApJy6FTIByZAkJ5Pr/OkqYgyoOrrMR6hpKGqc0D7xtDKSeHnq5SuzzNP3/+zjEUAALzR8rJuIUAUgj5rTUH0i///0InBCLyZ5Fn5ICf/W5FQCQAMM0r881WnNd1H7HXut676DTdRidMw3gnzYiI3ARjK2ikqvU46yQE8AW6QIyT3/8UFmgzrex0mfFna/TL+/fXrq23w8UTZQYp+ul+C4a/8JIBlxgBxeQUQHNUiO7LbQzF9Wx7R0XXUTgc5uI84IKCiOqZ0WdS0JiH8lQIYJybLP7drS4mtqhQJR4pHPguYX69FXf9v1/Vt/SrCMDpH//0Q8oSZ/402CIeQAAQCoyJIz/+zjEWQNKuR0mRkytgVQoJMjRn0gQey8zrSsd69b69SO10iRRZEYoT4ukqU1gQE0T/tURSmLhakttU3c6ZnZhUUs9FPto+U97JtVH/6PtrzftMAgTCxOr6P/oAYACFaqCu0pLHNperS4K79lcJ9xDqXpfOAKLQZz8qgY+c09r2xisLWjjD4K6fUX0kmWiybOiymQSJWhQTPn9T51Gzfv+v9XfW2r6Nw6EuCiK920f/5cBgQHFgw5VhMOkCKjUKv9i+iu5Jvd3gZc79wRYEa1KfXzvV4VjASz/+zjEZQAJoRkxpoz6AVgjJEi3tpB7CJ7iZ8pz3T2Q0oXmq5aYbnKjOan9P//9W/1OhELnt/v/+sBQcCGcP2ZAoi6oNuKJHzv/fzNNeVizDaj1FBNuAw5kh7h3+5b+/WweKINiSz33vkty8o+TKaj0XDYNmxkOAZ7ZXox/Rp/7+3ur+mNHKgJlMGUZlIlkM2hNECddONS+MazXOsapnGnlUSFS8gXOABZZ482bf/Ujx+o3i6LFEtjP9fj/W838uPfGdf5y++Kb+YfGGxdhOc97/1yum7//QoD/+zjEdQMJSRkkRTz0gTOUZAiMDpAAAACVsEBRQCjkoVWBdMKFM8fqg1Yl42jXQxI8mkgMst2NDRx9rk6RcT0IBGROlw+UQ/UU4UCYKLiZ5EcwqEuRci6IYVC/4BkKUEmGQQZJNbVqSRTWbsxOFckh3DwfLRE2dL6tNroeRQyW5eM2c8t3osrv639N/NUzBJSZ1BJToIfqf/9Wq2301OcY8bmmiXXNKgAAqAAhKltxxYLAkysiauMcrP+1VVP///M+ZmcOBgEjRKnnKJZVV/6rGqt8kSI8FSz/+zjEioAKKL8cFJeAAkgzJOcfAAANHhEsNFoiDs7/LPwV4NLO/7+CvER4Rflj3VVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEegPJbJEXPJMAAAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",coin:"data:audio/mpeg;base64,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"};var pm="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Fe=null,Jo=!1;function Zc(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Qc(){Zc(),Jo=!0;try{if(Fe||(Fe=document.createElement("audio"),Fe.src=pm,Fe.loop=!0,Fe.preload="auto",Fe.setAttribute("playsinline",""),Fe.setAttribute("webkit-playsinline",""),Fe.setAttribute("x-webkit-airplay","deny"),Fe.volume=.01,Fe.addEventListener("pause",()=>{Jo&&!document.hidden&&setTimeout(()=>Jo&&Fe.paused&&Fe.play().catch(()=>{}),300)})),Fe.paused){let s=Fe.play();s&&s.catch&&s.catch(()=>{})}}catch{}}function jc(s,t){Zc();try{s.addEventListener("statechange",()=>{s.state==="interrupted"&&!t()&&!document.hidden&&s.resume().catch(()=>{})})}catch{}}var sn=s=>440*Math.pow(2,(s-69)/12),Er=class{constructor(){this.ctx=null,this.muted=!1,this.tune=null,this.bed=null}unlock(){if(Qc(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;jc(e,()=>!1),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination);let i=Math.floor(e.sampleRate*1.7),r=e.createBuffer(2,i,e.sampleRate);for(let c=0;c<2;c++){let h=r.getChannelData(c);for(let u=0;u<i;u++)h[u]=(Math.random()*2-1)*Math.pow(1-u/i,2.6)}let a=e.createConvolver();a.buffer=r,this.rev=e.createGain(),this.rev.gain.value=.22,this.rev.connect(a).connect(this.master),this.music=e.createGain(),this.music.gain.value=.35,this.music.connect(this.master),this.music.connect(this.rev),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master),this.sfx.connect(this.rev);let o=e.createBuffer(1,e.sampleRate*2,e.sampleRate),l=o.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1;this.noiseBuf=o,this.nextBeat=0,this._timer=setInterval(()=>this._schedule(),40),this.bedName&&this.setBed(this.bedName)}if(this.ctx.state!=="running"){try{let t=this.ctx.createBufferSource();t.buffer=this.ctx.createBuffer(1,1,this.ctx.sampleRate),t.connect(this.ctx.destination),t.start(0)}catch{}try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01,t.play().catch(()=>{})}catch{}this.ctx.resume()}}get on(){return!!this.ctx&&this.ctx.state==="running"}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}dispose(){if(clearInterval(this._timer),this.setBed(null),this.ctx)try{this.ctx.close()}catch{}this.ctx=null}tone(t,e,n,i,r,a=this.sfx,o=.005){let l=this.ctx;if(!l)return;let c=l.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(r,n+o),c.gain.exponentialRampToValueAtTime(1e-4,n+i);let h=c;if(t==="sawtooth"||t==="square"){let f=l.createBiquadFilter();f.type="lowpass",f.frequency.value=Math.min(9e3,e*6+800),f.Q.value=.7,c.connect(f),h=f}h.connect(a);let u=t==="sine"?[0]:[-6,6];for(let f of u){let p=l.createOscillator();p.type=t,p.frequency.value=e,p.detune.value=f,p.connect(c),p.start(n),p.stop(n+i+.05)}}noise(t,e,n,i="lowpass",r=1e3,a=1,o=this.sfx,l){let c=this.ctx;if(!c)return;let h=c.createBufferSource();h.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=i,u.frequency.setValueAtTime(r,t),l&&u.frequency.exponentialRampToValueAtTime(l,t+e),u.Q.value=a;let f=c.createGain();f.gain.setValueAtTime(1e-4,t),f.gain.exponentialRampToValueAtTime(n,t+Math.min(.03,e/3)),f.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(f).connect(o),h.start(t,Math.random()),h.stop(t+e+.05)}slide(t,e,n,i,r,a,o=this.sfx){let l=this.ctx;if(!l)return;let c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,i),c.frequency.exponentialRampToValueAtTime(n,i+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,i),h.gain.exponentialRampToValueAtTime(a,i+.02),h.gain.exponentialRampToValueAtTime(1e-4,i+r),c.connect(h).connect(o),c.start(i),c.stop(i+r+.05)}setBed(t){this.bedName=t;let e=this.ctx;if(!e)return;if(this.bed){let l=this.bed;l.g.gain.setTargetAtTime(1e-4,e.currentTime,.2),setTimeout(()=>{try{l.s.stop(),l.lfo.stop()}catch{}},900),this.bed=null}if(!t)return;let n=e.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;let i=e.createBiquadFilter();i.type=t==="wind"?"bandpass":"lowpass",i.frequency.value=t==="wind"?420:520,i.Q.value=t==="wind"?1.4:.6;let r=e.createGain();r.gain.value=1e-4;let a=e.createOscillator();a.frequency.value=t==="wind"?.12:.17;let o=e.createGain();o.gain.value=t==="wind"?.03:.045,a.connect(o).connect(r.gain),n.connect(i).connect(r).connect(this.sfx),n.start(),a.start(),r.gain.setTargetAtTime(t==="wind"?.06:.07,e.currentTime,.5),this.bed={s:n,g:r,lfo:a,f:i}}setTune(t){this.tune=t,this.nextBeat=0,this.loopStart=null}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||!this.tune||this.muted)return;let e=this.tune,n=60/e.tempo;this.loopStart==null&&(this.loopStart=t.currentTime+.1);let i=t.currentTime+.25;for(;this.loopStart+this.nextBeat*n<i;){let r=this.nextBeat%e.beats,a=this.loopStart+this.nextBeat*n;if(a<t.currentTime-.5){this.loopStart=t.currentTime+.1,this.nextBeat=0;break}for(let[o,l,c]of e.notes)Math.abs(o-r)<1e-6&&this.tone(e.wave||"triangle",sn(l),a,c*n*1.4,e.vol||.12,this.music,.01);e.groove!==!1&&!e.noGroove&&this._groove(e,r,a,n),this.nextBeat+=.5}}_groove(t,e,n,i){let r=Math.min(.2,(t.vol||.1)*1.3),a=c=>Math.abs(e-c)<1e-6,o=Math.abs(e-Math.round(e))<1e-6,l=e%4;o&&(l===0||l===2&&t.tempo>=100)&&(this.slide("sine",150,42,n,.17,r*1.9,this.music),this.noise(n,.02,r*.5,"lowpass",900,1,this.music)),o&&(l===1||l===3)&&t.tempo>=100&&this.noise(n,.12,r*.9,"bandpass",1800,.8,this.music),o||this.noise(n,.04,r*.45,"highpass",7e3,1,this.music),(a(0)||o&&l===0&&e%8===0)&&this.tone("sine",55,n,i*1.6,r*1.1,this.music,.02)}};var gm={tempo:132,beats:16,wave:"square",vol:.045,notes:[[0,62,1],[1.5,62,.5],[2,65,1],[3,69,1],[4,67,1.5],[5.5,65,.5],[6,62,1],[7,60,1],[8,62,1],[9.5,62,.5],[10,65,1],[11,69,1],[12,72,1.5],[13.5,70,.5],[14,69,1],[15,65,1],[0,38,1],[2,38,1],[4,43,1],[6,38,1],[8,38,1],[10,38,1],[12,41,1],[14,43,1]]},mm={tempo:90,beats:16,wave:"triangle",vol:.07,notes:[[0,62,2],[2,65,2],[4,69,2],[6,67,2],[8,65,2],[10,62,2],[12,60,2],[14,62,2],[0,43,4],[4,41,4],[8,38,4],[12,43,4]]},Gi=class extends Er{unlock(){super.unlock(),this.ctx&&!this.crowdNode&&this.wantCrowd&&this._startCrowd()}_startCrowd(){let t=this.ctx;if(!t)return;let e=t.createBufferSource();e.buffer=this.noiseBuf,e.loop=!0;let n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=650,n.Q.value=.5;let i=t.createGain();i.gain.value=.02;let r=t.createOscillator();r.frequency.value=.3;let a=t.createGain();a.gain.value=.008,r.connect(a).connect(i.gain),e.connect(n).connect(i).connect(this.sfx),e.start(),r.start(),this.crowdNode={s:e,g:i,lfo:r}}crowd(t){this.wantCrowd=t,this.ctx&&(t&&!this.crowdNode&&this._startCrowd(),this.crowdNode&&this.crowdNode.g.gain.setTargetAtTime(t?.02:1e-4,this.ctx.currentTime,.3))}swell(t=.09,e=2.2){let n=this.ctx;if(!n||!this.crowdNode||this.muted)return;let i=this.crowdNode.g.gain,r=n.currentTime;i.cancelScheduledValues(r),i.setTargetAtTime(t,r,.15),i.setTargetAtTime(.02,r+e,.6)}setMode(t){if(!t){this.setTune(null),this.crowd(!1);return}this.setTune(t==="play"?gm:mm),this.crowd(t==="play")}play(t,e=1){typeof window!="undefined"&&window.__cheerSfx&&window.__cheerSfx(t);let n=this.ctx;if(!n||n.state!=="running"||this.muted)return;let i=n.currentTime;switch(t){case"tap":this.tone("triangle",640,i,.07,.09);break;case"count":this.tone("square",440,i,.18,.07),this.tone("triangle",220,i,.18,.1);break;case"go":[0,4,7,12].forEach((r,a)=>this.tone("square",sn(72+r),i+a*.07,.35,.06)),this.noise(i,.25,.08,"highpass",3e3);break;case"dash":this.noise(i,.28,.12,"bandpass",1200,1.2,this.sfx,380),this.tone("triangle",180,i,.2,.06);break;case"clang":this.tone("square",1320,i,.25,.07),this.tone("square",1760,i,.18,.05),this.tone("triangle",660,i,.35,.08),this.noise(i,.06,.1,"highpass",4e3);break;case"thud":this.slide("sine",140,48,i,.22,.28*e+.1),this.noise(i,.12,.12*e+.04,"lowpass",500),this.tone("triangle",520,i,.06,.04*e);break;case"fence":this.noise(i,.12,.12*e+.03,"bandpass",700,1.5),this.tone("triangle",200,i,.1,.07);break;case"stun":this.slide("triangle",700,200,i,.25,.1),[0,3,7].forEach((r,a)=>this.tone("sine",sn(84+r),i+.25+a*.08,.15,.05)),this.noise(i,.08,.1,"highpass",3e3);break;case"goal":[0,4,7,12,7,12,16,19].forEach((r,a)=>this.tone("sawtooth",sn(60+r),i+a*.12,.5,.07)),[0,7,12].forEach(r=>this.tone("square",sn(48+r),i,1.1,.05)),this.swell(.1,2.4),this.noise(i,1.6,.1,"bandpass",900,.5);break;case"conceded":[0,-3,-5].forEach((r,a)=>this.tone("triangle",sn(60+r),i+a*.2,.5,.1));break;case"creak":this.slide("sawtooth",120,85,i,.5,.05),this.slide("sawtooth",250,160,i+.1,.4,.03),this.noise(i,.5,.04,"bandpass",500,4);break;case"dooropen":this.noise(i,.35,.16,"lowpass",400),this.slide("sawtooth",160,60,i,.35,.07);break;case"doorfall":this.slide("sine",600,90,i,.6,.1);break;case"rumble":this.noise(i,.5,.1,"lowpass",160,1),this.slide("sine",70,45,i,.5,.16);break;case"warn":this.tone("square",520,i,.12,.05),this.tone("square",390,i+.14,.12,.05);break;case"mud":this.noise(i,.16,.06,"lowpass",300,2);break;case"win":[0,4,7,12,16,19,24].forEach((r,a)=>this.tone("triangle",sn(67+r),i+a*.11,.6,.12)),this.swell(.1,3);break;case"lose":[0,-3,-7,-12].forEach((r,a)=>this.tone("triangle",sn(64+r),i+a*.22,.55,.1));break;case"coin":this.tone("square",sn(88),i,.05,.04),this.tone("square",sn(95),i+.05,.1,.04);break;case"whistle":this.slide("sine",2400,2900,i,.35,.06);break;default:break}}};Yc(Gi,Jc);Kc(Gi);function Q(s,t={},...e){let n=document.createElement(s);for(let[i,r]of Object.entries(t))r==null||r===!1||(i==="class"?n.className=r:i.startsWith("on")?n.addEventListener(i.slice(2).toLowerCase(),r):i==="style"?n.style.cssText=r:n.setAttribute(i,r===!0?"":r));for(let i of e.flat())i!=null&&i!==!1&&n.append(i.nodeType?i:document.createTextNode(String(i)));return n}function $c(s){let t="ar",e=!1;return{setLang:n=>{t=n==="en"?"en":"ar"},setGirl:n=>{e=!!n},getLang:()=>t,t:n=>{let i=`${n}_${e?"f":"m"}`,r=s[i]?i:n;return s[r]?s[r][t==="en"?1:0]:n},num:n=>t==="en"?String(n):String(n).replace(/[0-9]/g,i=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[i])}}function th(s,t,e,n="#ffd23a"){return`
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
`}var wr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var We=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Am=new Ni(-1,1,1,-1,0,1),Zo=class extends pe{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}},xm=new Zo,Hn=class{constructor(t){this._mesh=new me(xm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Am)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Wi=class extends We{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Bn.clone(t.uniforms),this.material=new xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Hn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ds=class extends We{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Tr=class extends We{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Rr=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Ct);this._width=n.width,this._height=n.height,e=new Pe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wi(wr),this.copyPass.material.blending=cn,this.clock=new yr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ds!==void 0&&(a instanceof ds?n=!0:a instanceof Tr&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Vr=class extends We{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Rt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}};var eh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Rt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Xi=class s extends We{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Ct(t.x,t.y):new Ct(256,256),this.clearColor=new Rt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Pe(r,a,{type:nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Pe(r,a,{type:nn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new Pe(r,a,{type:nn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=eh;this.highPassUniforms=Bn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ct(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=wr;this.copyUniforms=Bn.clone(h.uniforms),this.blendMaterial=new xe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ri,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Rt,this.oldClearAlpha=1,this.basic=new Ae,this.fsQuad=new Hn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Ct(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ct(.5,.5)},direction:{value:new Ct(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}};Xi.BlurDirectionX=new Ct(1,0);Xi.BlurDirectionY=new Ct(0,1);var nh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Pr=class extends We{constructor(){super();let t=nh;this.uniforms=Bn.clone(t.uniforms),this.material=new mr({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Hn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Bt.getTransfer(this._outputColorSpace)===$t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Po?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Lo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Uo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Do?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===qo&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};if(typeof document!="undefined"&&!document.getElementById("tw-emoji-font")){let s=document.createElement("style");s.id="tw-emoji-font";let t=new URL("../../fonts/TwemojiMozilla.ttf",location.href).href,e="U+1F000-1FAFF,U+2600-27BF,U+2B00-2BFF,U+2300-23FF,U+FE0F,U+200D,U+2122,U+2139,U+2194-21AA,U+2934-2935,U+3030,U+303D,U+3297,U+3299,U+00A9,U+00AE,U+203C,U+2049,U+25AA-25FE";s.textContent=`@font-face{font-family:Tajawal;src:url(${t});unicode-range:${e};font-weight:100 900;font-display:swap}`,document.head.appendChild(s);try{let n=document.fonts.add.bind(document.fonts);document.fonts.add=i=>{let r=n(i);if(i&&!i.__tw&&String(i.family).replace(/["']/g,"")==="Tajawal"){let a=new FontFace("Tajawal",`url(${t})`,{unicodeRange:e,weight:"100 900"});a.__tw=1,a.load().then(()=>n(a)).catch(()=>{})}return r}}catch{}}if(typeof document!="undefined"&&!document.getElementById("tw-icons")){let s=document.createElement("style");s.id="tw-icons",s.textContent=`.tw-lock{display:inline-block;position:relative;width:.85em;height:.62em;background:linear-gradient(#f2f6fc,#b8c6dc);border-radius:.12em;vertical-align:-.04em;margin:.25em .2em 0}
.tw-lock::before{content:"";position:absolute;left:18%;top:-.42em;width:64%;height:.5em;border:.13em solid #c9d6ea;border-bottom:0;border-radius:.4em .4em 0 0;box-sizing:border-box}
.tw-lock::after{content:"";position:absolute;left:44%;top:.18em;width:12%;height:.22em;background:#5a6a88;border-radius:.1em}
.tw-star{display:inline-block;width:.95em;height:.95em;background:linear-gradient(#ffe680,#ffb300);clip-path:polygon(50% 0,62% 36%,100% 38%,70% 60%,80% 100%,50% 76%,20% 100%,30% 60%,0 38%,38% 36%);vertical-align:-.12em;margin:0 .08em}
.tw-coin{display:inline-block;width:.88em;height:.88em;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff1a8,#f5b400 60%,#c98400);border:.09em solid #b87400;box-sizing:border-box;vertical-align:-.12em;margin:0 .1em;position:relative}
.tw-coin::after{content:"";position:absolute;inset:.17em;border:.07em solid rgba(150,90,0,.55);border-radius:50%}`,document.head.appendChild(s);let t=/(\u{1F512}|\u2B50|\u{1FA99})\uFE0F?/gu,e={"\u{1F512}":"tw-lock","\u2B50":"tw-star","\u{1FA99}":"tw-coin"},n=()=>{if(!document.body)return;let o=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),l=[];for(let c=o.nextNode();c;c=o.nextNode()){let h=c.parentNode;h&&/^(SCRIPT|STYLE|TEXTAREA|OPTION)$/.test(h.nodeName)||(t.lastIndex=0,t.test(c.nodeValue)&&l.push(c))}for(let c of l){let h=document.createDocumentFragment(),u=0,f=c.nodeValue;t.lastIndex=0;let p;for(;p=t.exec(f);){p.index>u&&h.append(f.slice(u,p.index));let m=document.createElement("span");m.className=e[p[1]],h.append(m),u=p.index+p[0].length}u<f.length&&h.append(f.slice(u)),c.parentNode.replaceChild(h,c)}},i=0,r=()=>{i||(i=setTimeout(()=>{i=0,n()},30))},a=()=>{new MutationObserver(r).observe(document.body,{childList:!0,subtree:!0,characterData:!0}),n()};document.body?a():document.addEventListener("DOMContentLoaded",a)}var ih={warm:{bloom:[.32,.55,.82],contrast:1.08,sat:1.12,tint:.05,vig:.38,exposure:1},fresh:{bloom:[.28,.5,.85],contrast:1.06,sat:1.1,tint:-.015,vig:.32,exposure:1},night:{bloom:[.55,.7,.7],contrast:1.12,sat:1.08,tint:-.04,vig:.5,exposure:1.05},candy:{bloom:[.4,.6,.78],contrast:1.05,sat:1.18,tint:.02,vig:.3,exposure:1},epic:{bloom:[.38,.6,.8],contrast:1.14,sat:1.1,tint:.035,vig:.45,exposure:1.02}},vm={uniforms:{tDiffuse:{value:null},contrast:{value:1.08},sat:{value:1.1},tint:{value:.04},vig:{value:.4},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},Cm={warm:16773570,fresh:15136511,night:12572927,candy:16765424,epic:16769704};function ym(s,t,e,n){let i=Math.min(60,Math.max(6,(t.far||300)*.035)),r=110,a=new Float32Array(r*3),o=new Float32Array(r*3);for(let A=0;A<r;A++)a[A*3]=t.position.x+(Math.random()-.5)*2*i,a[A*3+1]=t.position.y+(Math.random()-.5)*i,a[A*3+2]=t.position.z+(Math.random()-.5)*2*i,o[A*3]=(Math.random()-.5)*.25,o[A*3+1]=.05+Math.random()*.25,o[A*3+2]=(Math.random()-.5)*.25;let l=new pe;l.setAttribute("position",new _e(a,3));let c=document.createElement("canvas");c.width=c.height=32;let h=c.getContext("2d"),u=h.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.35,"rgba(255,255,255,0.45)"),u.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=u,h.fillRect(0,0,32,32);let f=new Fi(c);f.colorSpace=Ie;let p=new ri({map:f,color:Cm[e]||16773570,size:i*.045,transparent:!0,opacity:.75,depthWrite:!1,blending:Ri,fog:!1,sizeAttenuation:!0}),m=new zi(l,p);return m.frustumCulled=!1,m.renderOrder=999,m.name="__motes",s.add(m),{pts:m,pos:a,vel:o,R:i,N:r}}function _m(s,t,e){let{pos:n,vel:i,R:r,N:a}=s;for(let o=0;o<a;o++)for(let l=0;l<3;l++){let c=o*3+l;n[c]+=i[c]*e*(l===1?r*.1:r*.12);let h=l===1?r*.5:r,u=n[c]-[t.position.x,t.position.y,t.position.z][l];u>h?n[c]-=2*h:u<-h&&(n[c]+=2*h)}s.pts.geometry.attributes.position.needsUpdate=!0}var sh={start:3,good:6,combo:2,oops:4,near:2,win:3,lose:3,idle:2,overtake:3,boost:3,behind:3,collect:3,levelup:3},Im=/فزت|مبروك|كسبت|فاز|انتصر|أحسنت|برافو|🏆|WIN|Victory|Congrat|You won/i,Mm=/خسر|حاول تاني|حاول مرة|انتهت|معلش|Game over|Try again|Failed/i,bm={win:"win",finish:"win",goal:"win",arrive:"win",lose:"lose",lost:"lose",crash:"oops",hit:"oops",hurt:"oops",bump:"oops",splat:"oops",fall:"oops",coin:"collect",star:"collect",pick:"collect",crystal:"collect",power:"collect",overtake:"overtake",nitro:"boost",boost:"boost",dash:"boost",combo:"combo",unlock:"levelup",lap:"levelup",wave:"levelup",miss:"near",draft:"near",leap:"near",go:"start"},rh={};typeof window!="undefined"&&(window.__cheerSfx=s=>{let t=bm[s];if(!t||!window.__cheer)return;let e=performance.now(),n=t==="collect"||t==="oops"?9e3:4500;e-(rh[t]||-1e9)<n||(rh[t]=e,window.__cheer(t,t==="win"||t==="lose"||t==="levelup"))});function Sm(s,t){if(!s||s.__cheer)return;s.__cheer=!0;let e=new URL("../_voice/",location.href).href,n={},i=null,r=0,a=performance.now(),o=!1,l=0,c=!1,h=g=>{if(!n[g]){let d=new Audio(`${e}${g}_${t}.mp3`);d.preload="auto",d.volume=.95,n[g]=d}return n[g]},u=(g,d)=>{let x=performance.now();if(!d&&x-r<6e3||c)return;let y=g+(1+Math.floor(Math.random()*sh[g])),v=h(y);c=!0,r=x,v.currentTime=0;let w=()=>{c=!1};v.onended=w,v.onerror=w;let b=v.play();b&&b.catch&&b.catch(w),setTimeout(w,4e3)};window.__cheer=(g,d)=>{sh[g]&&(o=!0,u(g,!!d))};let f=()=>{try{i=i||new(window.AudioContext||window.webkitAudioContext);let g=i.createOscillator(),d=i.createGain();g.type="sine",g.frequency.setValueAtTime(520,i.currentTime),g.frequency.exponentialRampToValueAtTime(900,i.currentTime+.08),d.gain.setValueAtTime(.08,i.currentTime),d.gain.exponentialRampToValueAtTime(.001,i.currentTime+.12),g.connect(d),d.connect(i.destination),g.start(),g.stop(i.currentTime+.13)}catch{}},p=()=>{a=performance.now(),f(),o||(o=!0,u("start",!0))};s.addEventListener("pointerdown",p,{passive:!0}),window.addEventListener("keydown",p,{passive:!0});let m="";new MutationObserver(()=>{if(!o)return;let g=(s.innerText||"").slice(0,600);g!==m&&(m=g,Im.test(g)?u("win",!1):Mm.test(g)&&u("lose",!1))}).observe(s,{childList:!0,subtree:!0}),setInterval(()=>{let g=performance.now();!o||document.hidden||(g-a>14e3?(u("idle",!1),a=g-4e3):g-r>22e3&&(l++,u(l%5===0?"combo":"good",!1)))},2500)}function ah(s,t={}){let e=new URLSearchParams(typeof location!="undefined"?location.search:"");if(e.has("nopolish"))return s;let n=Object.assign({},ih[e.get("look")||t.preset||"warm"]||ih.warm,t.tune||{}),i=e.has("low")||!!t.low,r=e.has("rec"),a=s.render.bind(s),o=new WeakMap,l=performance.now(),c=null,h=null,u=null,f=null,p=0,m=0,A=0,g=!1,d=performance.now();function x(y,v){let w=s.getSize(new Ct);p=w.x,m=w.y,A=s.getPixelRatio(),c=new Rr(s),c.setPixelRatio(A),c.setSize(p,m),h=new Vr(y,v),c.addPass(h),i||(u=new Xi(new Ct(Math.max(2,p>>1),Math.max(2,m>>1)),n.bloom[0],n.bloom[1],n.bloom[2]),c.addPass(u)),c.addPass(new Pr),f=new Wi(vm),f.uniforms.contrast.value=n.contrast,f.uniforms.sat.value=n.sat,f.uniforms.tint.value=n.tint,f.uniforms.vig.value=n.vig,c.addPass(f)}return s.render=function(y,v){if(g||s.getRenderTarget()!==null||s.autoClear===!1||!y||!v||!y.isScene)return a(y,v);try{c||x(y,v);let w=s.getSize(new Ct),b=s.getPixelRatio();(w.x!==p||w.y!==m||b!==A)&&(p=w.x,m=w.y,A=b,c.setPixelRatio(b),c.setSize(p,m),u&&u.resolution.set(Math.max(2,p>>1),Math.max(2,m>>1))),h.scene=y,h.camera=v,f.uniforms.time.value=(performance.now()-d)/1e3;let E=performance.now(),T=Math.min(.1,Math.max(0,(E-l)/1e3));if(l=E,!e.has("nomotes")&&t.motes!==!1){let M=o.get(y);M||(M=ym(y,v,e.get("look")||t.preset||"warm",r),o.set(y,M)),_m(M,v,T)}g=!0,c.render(),g=!1}catch(w){g=!1,typeof console!="undefined"&&console.warn("[polish] disabled:",w&&w.message),s.render=a,a(y,v)}},!e.has("nocheer")&&!r&&setTimeout(()=>Sm(s.domElement.parentElement&&s.domElement.parentElement.parentElement||document.body,e.get("voice")||t.voice||"puck"),0),s.__polish={preset:n,rec:r},s}var Em={title:["\u0641\u0631\u0633\u0627\u0646 \u0627\u0644\u0628\u0631\u0645\u064A\u0644","BARREL KNIGHTS"],play:["\u0627\u0644\u0639\u0628","PLAY"],rounds:["\u0627\u0644\u062C\u0648\u0644\u0627\u062A","ROUNDS"],knights:["\u0627\u0644\u0641\u0631\u0633\u0627\u0646","KNIGHTS"],settings:["\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A","SETTINGS"],quit:["\u062E\u0631\u0648\u062C","QUIT"],back:["\u0631\u062C\u0648\u0639","Back"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","PAUSED"],resume:["\u0643\u0645\u0651\u0644","RESUME"],restart:["\u0625\u0639\u0627\u062F\u0629","RESTART"],home:["\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629","HOME"],next:["\u0627\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629","NEXT ROUND"],dash:["\u0627\u0646\u062F\u0641\u0627\u0639","DASH"],goal:["\u0647\u062F\u0641!","GOAL!"],go:["\u064A\u0644\u0627!","GO!"],round:["\u0627\u0644\u062C\u0648\u0644\u0629","Round"],sound:["\u0627\u0644\u0635\u0648\u062A","Sound"],diff:["\u0627\u0644\u0635\u0639\u0648\u0628\u0629","Difficulty"],easy:["\u0633\u0647\u0644","Easy"],normal:["\u0639\u0627\u062F\u064A","Normal"],hard:["\u0635\u0639\u0628","Hard"],victory:["\u0641\u0632\u062A\u0645! \u{1F3C6}","YOU WIN! \u{1F3C6}"],lose:["\u062D\u0638 \u0623\u0648\u0641\u0631 \u0627\u0644\u0645\u0631\u0629 \u0627\u0644\u062C\u0627\u064A\u0629","Good try!"],draw:["\u062A\u0639\u0627\u062F\u0644","DRAW"],coins:["\u0639\u0645\u0644\u0627\u062A","Coins"],earned:["\u0643\u0633\u0628\u062A","Earned"],locked:["\u062E\u0644\u0651\u0635 \u0627\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627","Finish the round before"],overtime:["\u0648\u0642\u062A \u0625\u0636\u0627\u0641\u064A!","OVERTIME!"],how:["\u0627\u0633\u062D\u0628 \u0628\u0625\u0635\u0628\u0639\u0643 \u0644\u0644\u062D\u0631\u0643\u0629\u060C \u0648\u0627\u0636\u063A\u0637 \u0627\u0646\u062F\u0641\u0627\u0639 \u0644\u062F\u0641\u0639 \u0627\u0644\u0628\u0631\u0645\u064A\u0644 \u0648\u0625\u0628\u0639\u0627\u062F \u0627\u0644\u062E\u0635\u0648\u0645","Drag to move, press DASH to shove the barrel and bump rivals"],how2:["\u0627\u062F\u0641\u0639 \u0627\u0644\u0628\u0631\u0645\u064A\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0642 \u062F\u0627\u062E\u0644 \u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u062E\u0635\u0645! \u0627\u0644\u0623\u0628\u0648\u0627\u0628 \u0627\u0644\u0645\u062E\u0641\u064A\u0629 \u0648\u0627\u0644\u0635\u062E\u0648\u0631 \u0648\u0627\u0644\u0637\u064A\u0646 \u0628\u062A\u062A\u0646\u0628\u0651\u0647 \u0642\u0628\u0644 \u0645\u0627 \u062A\u0634\u062A\u063A\u0644.","Push the giant barrel through the rival gate! Trapdoors, boulders and mud always warn you first."],colors:["\u0623\u0644\u0648\u0627\u0646 \u0627\u0644\u062F\u0631\u0639","Armour"],helmets:["\u0627\u0644\u062E\u0648\u0630\u0627\u062A","Helmets"],equipped:["\u0644\u0627\u0628\u0633\u0647","On"],notEnough:["\u0627\u0644\u0639\u0645\u0644\u0627\u062A \u0645\u0634 \u0643\u0641\u0627\u064A\u0629","Not enough coins"],tapSound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],final:["\u0627\u0644\u0646\u0647\u0627\u0626\u064A","FINAL"],match:["\u0645\u0628\u0627\u0631\u0627\u0629","MATCH"],first:["\u0627\u0644\u0623\u0648\u0644 \u0644\u0647\u062F\u0641\u064A\u0646","FIRST TO 2"],ready:["\u0627\u0633\u062A\u0639\u062F\u061F","READY?"],tip:["\u0627\u062F\u0641\u0639 \u0627\u0644\u0628\u0631\u0645\u064A\u0644 \u062F\u0627\u062E\u0644 \u0628\u0648\u0627\u0628\u062A\u0647\u0645!","SHOVE IT THROUGH THEIR GATE!"],yourTeam:["\u0641\u0631\u064A\u0642\u0643","You"],rivals:["\u0627\u0644\u062E\u0635\u0648\u0645","Rivals"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631!","Well done!"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629!","Well done!"]},dt=$c(Em),oh={day:{sky:9097471,fog:13495039,sand:[15323290,14664840],hemi:1.5,sun:1.3,sunC:16774360,torch:!1},dusk:{sky:16752752,fog:16763040,sand:[14858362,14067818],hemi:1.25,sun:1.1,sunC:16760960,torch:!0},night:{sky:1845336,fog:2766960,sand:[12098164,11308648],hemi:.95,sun:.55,sunC:10137855,torch:!0},royal:{sky:8046847,fog:13166847,sand:[15784080,15125632],hemi:1.6,sun:1.35,sunC:16773312,torch:!1}},st={sphere:new pr(.5,16,12),cyl:new cs(.5,.5,1,16),box:new si(1,1,1),cone:new hr(.5,1,12),torus:new gr(.5,.08,8,24),star:new fr(.5,0)},Qo=new Map,Et=(s,t=0,e)=>{let n=`${s}|${t}|${e?JSON.stringify(e):""}`;return Qo.has(n)||Qo.set(n,new ze({color:s,emissive:t,...e||{}})),Qo.get(n)};function et(s,t,e=0,n=0,i=0,r=1,a=1,o=1){let l=new me(s,t);return l.position.set(e,n,i),l.scale.set(r,a,o),l}var Lr=(s,t,e)=>s+(t-s)*e,jo=(s,t,e)=>s<t?t:s>e?e:s;function fs(s,t,e,n){let i=document.createElement("canvas");i.width=s,i.height=t,e(i.getContext("2d"),s,t);let r=new Fi(i);return r.colorSpace=Ie,r.anisotropy=4,n&&(r.wrapS=r.wrapT=rs,r.repeat.set(n[0],n[1])),r}function wm(){return fs(256,256,(s,t,e)=>{let n=["#b87a3c","#a86c34","#c48646","#9c6230"];for(let r=0;r<12;r++){s.fillStyle=n[r%4],s.fillRect(r*t/12,0,t/12+1,e),s.fillStyle="rgba(60,30,10,.85)",s.fillRect(r*t/12,0,3,e),s.strokeStyle="rgba(70,35,10,.25)";for(let a=0;a<6;a++){s.beginPath();let o=r*t/12+6+a*3;s.moveTo(o,0),s.lineTo(o+2,e),s.stroke()}}})}function Tm(s,t){let e=n=>`#${n.toString(16).padStart(6,"0")}`;return fs(256,256,(n,i,r)=>{n.fillStyle=e(s),n.fillRect(0,0,i,r/2),n.fillStyle=e(t),n.fillRect(0,r/2,i,r/2);let a=7,o=()=>(a=a*16807%2147483647,a/2147483647);for(let l=0;l<700;l++)n.fillStyle=`rgba(${o()>.5?"255,245,210":"120,90,50"},${.08+o()*.12})`,n.fillRect(o()*i,o()*r,1+o()*3,1+o()*2)},[1,1])}function Rm(){return fs(32,32,s=>{let t=s.createRadialGradient(16,16,1,16,16,15);t.addColorStop(0,"#fff"),t.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=t,s.fillRect(0,0,32,32)})}function Vm(s){return fs(128,64,(t,e,n)=>{t.clearRect(0,0,e,n),t.fillStyle=s;for(let i=0;i<2;i++){let r=i*64;t.beginPath(),t.moveTo(r+8,8),t.lineTo(r+36,n/2),t.lineTo(r+8,n-8),t.lineTo(r+24,n-8),t.lineTo(r+52,n/2),t.lineTo(r+24,8),t.fill()}},[8,1])}function Pm(){return fs(128,128,(s,t,e)=>{s.clearRect(0,0,t,e),s.strokeStyle="rgba(255,255,255,.8)",s.lineWidth=3;for(let n=0;n<=8;n++)s.beginPath(),s.moveTo(n*t/8,0),s.lineTo(n*t/8,e),s.stroke(),s.beginPath(),s.moveTo(0,n*e/8),s.lineTo(t,n*e/8),s.stroke()},[3,1])}function Lm(){let s=new Wt,t=new Wt,e=new Wt;s.add(t),t.add(e);let n=wm(),i=new Wt;i.rotation.z=Math.PI/2,e.add(i);let r=[],a=.95*ce/1.15;for(let u=0;u<=10;u++){let f=-a+2*a*u/10,p=f/a;r.push(new Ct(ce*(1-.16*p*p),f))}let o=new ze({map:n});i.add(new me(new cr(r,28),o));let l=new ze({color:10906162});for(let u of[-1,1]){let f=new me(new ai(ce*.84,24),l);f.position.y=u*a,f.rotation.x=u*-Math.PI/2,i.add(f);let p=et(st.torus,Et(5593700),0,u*(a-.02),0,ce*1.72,ce*1.72,1.4);p.rotation.x=Math.PI/2,i.add(p)}for(let u of[-.5,.5]){let f=ce*(1-.16*(u/a)**2)*2.02,p=et(st.torus,Et(4869720),0,u,0,f,f,1.8);p.rotation.x=Math.PI/2,i.add(p)}let c=et(st.star,Et(16765498,8939008),ce*.98,0,0,.5,.5,.2);c.rotation.z=.7,i.add(c);let h=et(st.star,Et(16765498,8939008),-ce*.98,0,0,.5,.5,.2);return i.add(h),s.userData={yaw:t,roll:e,y:ce},s}function Um(s,t,e){let n=Et(16764730,6702080),i=Et(16184040);if(t==="plume"){let r=et(st.sphere,Et(e,2236962),0,.5,-.18,.2,.55,.5);r.rotation.x=-.5,s.add(r)}else if(t==="crest")for(let r=0;r<5;r++)s.add(et(st.box,Et(e,2236962),0,.44+Math.sin(r/4*Math.PI)*.1,-.3+r*.15,.1,.22+Math.sin(r/4*Math.PI)*.15,.14));else if(t==="horns")for(let r of[-1,1]){let a=et(st.cone,i,r*.5,.4,0,.2,.6,.2);a.rotation.z=-r*.7,s.add(a)}else if(t==="jester")for(let r of[-1,1]){let a=et(st.cone,Et(r>0?15219338:6961896),r*.34,.5,0,.3,.75,.3);a.rotation.z=-r*.9,s.add(a),s.add(et(st.sphere,n,r*.72,.62,0,.14,.14,.14))}else if(t==="crown"){s.add(et(st.cyl,n,0,.47,0,.62,.16,.62));for(let r=0;r<5;r++){let a=r/5*Math.PI*2;s.add(et(st.cone,n,Math.cos(a)*.28,.65,Math.sin(a)*.28,.14,.28,.14))}s.add(et(st.sphere,Et(15219258,4456448),0,.5,.31,.1,.1,.1))}}function lh(s,t,e){let n=new Wt,i=new Wt;i.scale.setScalar(1.25),n.add(i);let r=Et(s,0),a=Et(12897496,1711656),o=Et(2764346);i.add(et(st.sphere,r,0,1,0,.95,1.05,.75)),i.add(et(st.cyl,Et(6964256),0,.82,0,.98,.13,.8)),i.add(et(st.box,Et(16764730,6702080),0,.82,.4,.2,.18,.06));let l=new Wt,c=new Wt;for(let[d,x]of[[l,-.26],[c,.26]])d.position.set(x,.55,0),d.add(et(st.cyl,a,0,-.2,0,.3,.45,.3),et(st.box,o,0,-.45,.1,.34,.18,.5)),i.add(d);let h=new Wt,u=new Wt;for(let[d,x]of[[h,-.58],[u,.58]])d.position.set(x,1.35,0),d.add(et(st.cyl,a,0,-.3,0,.26,.6,.26),et(st.sphere,a,0,-.62,0,.3,.3,.3)),i.add(d);let f=new Wt;f.position.set(-.24,-.32,.12),f.add(et(st.cyl,r,0,0,0,.62,.08,.62),et(st.torus,Et(16053492),0,0,0,.94,.94,1.4),et(st.cyl,Et(16777215),0,.05,0,.22,.04,.22)),f.children[0].rotation.z=Math.PI/2,f.children[1].rotation.y=Math.PI/2,f.children[2].rotation.z=Math.PI/2,f.children[2].position.set(-.05,0,0),h.add(f);let p=new Wt;p.position.set(0,1.95,0),i.add(p),p.add(et(st.sphere,a,0,0,0,.82,.78,.8)),p.add(et(st.box,Et(1316895),0,.02,.36,.5,.12,.1)),p.add(et(st.box,Et(1316895),0,-.1,.38,.06,.22,.08)),Um(p,t,s);let m=et(new ai(.85,18),new Ae({color:0,transparent:!0,opacity:.28,depthWrite:!1}),0,.03,0);m.rotation.x=-Math.PI/2,n.add(m);let A=new Wt;A.position.y=2.75;for(let d=0;d<3;d++)A.add(et(st.star,Et(16769098,11175936),0,0,0,.36,.36,.16));A.visible=!1,n.add(A);let g=null;if(e){g=new Wt;let d=et(new Oi(1,1.25,28),new Ae({color:16769098,transparent:!0,opacity:.9,side:He,depthWrite:!1}),0,.05,0);d.rotation.x=-Math.PI/2,g.add(d);let x=et(st.cone,Et(16769098,11175936),0,3.5,0,.7,.8,.7);x.rotation.x=Math.PI,g.add(x),g.userData.arrow=x,n.add(g)}return n.userData={inner:i,legL:l,legR:c,armL:h,armR:u,head:p,stars:A,shadow:m,marker:g,phase:Math.random()*6,sink:0},n}var $o=class{constructor(t,e,n){this.el=t,this.post=n||(()=>{}),dt.setLang(e.lang),dt.setGirl(e.gender==="girl"),this.age=Number(e.age)||5,this.save=Gc(e.save),this.base=e.base||"./",this.sound=new Gi,this.sound.muted=!!this.save.muted,document.getElementById("bk-style")||document.head.append(Q("style",{id:"bk-style"},th("bk","#8a5a2a","#4a2a10","#ffd23a")+Dm)),this.root=Q("div",{class:"bk-root",dir:dt.getLang()==="en"?"ltr":"rtl"}),t.append(this.root),this.layer=Q("div",{class:"bk-layer"}),this.mode="menu",this.clock=0,this.paused=!1,this.keys=new Set,this.shakeT=0,this.cheer=0,this.puffs=[],this._three(),this.root.append(this.layer),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this._bind(),this.last=performance.now(),this._fonts().then(()=>{this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"});await Promise.race([t.load().then(e=>document.fonts.add(e)),new Promise(e=>setTimeout(e,900))])}catch{}}_three(){this.renderer=ah(new rr({antialias:!0}),{preset:"warm"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=Ie,this.root.prepend(this.renderer.domElement),this.scene=new or,this.camera=new Ve(48,1,.5,400),this.hemi=new vr(16777215,10127992,1.5),this.scene.add(this.hemi),this.sun=new Cr(16774360,1.3),this.sun.position.set(-14,30,18),this.scene.add(this.sun),this.arena=new Wt,this.scene.add(this.arena),this.dyn=new Wt,this.scene.add(this.dyn),this.dotTex=Rm(),this._buildArena(),this._buildParticles(),this.camPos=new L(0,30,30),this.camT=new L(0,0,0),this._look("day"),this.preview=null}_look(t){let e=oh[t]||oh.day;this.lookId=t,this.scene.background=new Rt(e.sky),this.scene.fog=new ar(e.fog,70,190),this.hemi.intensity=e.hemi,this.sun.intensity=e.sun,this.sun.color.set(e.sunC);let n=Tm(e.sand[0],e.sand[1]);n.repeat.set(1,1),this.pitchMat.map=n,this.pitchMat.needsUpdate=!0;for(let i of this.torches)i.visible=e.torch;this.groundMat.color.set(t==="night"?3489834:6989898)}_buildArena(){let t=this.arena,{hw:e,hl:n,gate:i,pocket:r}=Jt;this.groundMat=new ze({color:6989898});let a=et(new dn(300,300),this.groundMat);a.rotation.x=-Math.PI/2,a.position.y=-.05,t.add(a),this.pitchMat=new ze({color:16777215});let o=et(new dn(e*2+.6,n*2+.6),this.pitchMat);o.rotation.x=-Math.PI/2,t.add(o);let l=new Ae({color:16774876,transparent:!0,opacity:.55}),c=new Ae({color:16777215,transparent:!0,opacity:.07,depthWrite:!1});for(let A=-4;A<4;A+=2){let g=et(st.box,c,0,.012,(A+.5)*6.5,e*2,.01,6.5);t.add(g)}t.add(et(st.box,l,0,.02,0,e*2,.01,.22));let h=et(new Oi(4.6,4.85,40),l,0,.02,0);h.rotation.x=-Math.PI/2,t.add(h);for(let A of[-1,1]){t.add(et(st.box,l,0,.02,A*(n-6),i*2+6,.01,.2));for(let g of[-1,1])t.add(et(st.box,l,g*(i+3),.02,A*(n-3),.2,.01,6))}let u=Et(9067054),f=Et(5913114),p=(A,g,d,x)=>{let y=Math.hypot(d-A,x-g),v=Math.max(1,Math.round(y/3)),w=Math.atan2(d-A,x-g),b=new Wt;b.position.set(A,0,g),b.rotation.y=w;for(let E=0;E<=v;E++)b.add(et(st.cyl,f,0,.8,E/v*y,.34,1.7,.34),et(st.sphere,u,0,1.7,E/v*y,.42,.42,.42));b.add(et(st.box,u,0,1.3,y/2,.16,.22,y),et(st.box,u,0,.7,y/2,.16,.22,y)),t.add(b)};p(-e-.4,-n-.4,-e-.4,n+.4),p(e+.4,-n-.4,e+.4,n+.4);for(let A of[-1,1])p(-e-.4,A*(n+.4),-i,A*(n+.4)),p(i,A*(n+.4),e+.4,A*(n+.4));let m=Pm();for(let A of[-1,1]){let g=A>0?2779880:Sr,d=new Wt;d.position.z=A*n,t.add(d);let x=Et(11696722),y=Et(9067066),v=new Ae({color:1182730});for(let T of[-i,i])d.add(et(st.box,x,T,2.6,0,1.5,5.2,1.5),et(st.box,y,T,5.35,0,1.9,.35,1.9));d.add(et(st.box,x,0,5.4,0,i*2+1.5,1.3,1.5));for(let T=-3;T<=3;T++)d.add(et(st.box,y,T*(i*2/6),6.2,0,1.1,.5,1.7));let w=et(st.box,Et(g,1118481),0,4.55,A*.9,i*2-.4,.7,.12);d.add(w),d.add(et(st.box,x,0,4,A*(r+.9),e*2+8,8,1.6),et(st.box,v,0,2.2,A*(r+.05),i*2-.5,4.4,.1));for(let T of[-e-3,e+3])d.add(et(st.cyl,y,T,5,A*(r+.9),3.2,10,3.2));let b=et(new dn(i*2,3.4),new Ae({map:m,transparent:!0,side:He,depthWrite:!1}),0,1.7,A*r);d.add(b);for(let T of[-i,i]){let M=et(new dn(r,3.4),new Ae({map:m,transparent:!0,side:He,depthWrite:!1}),T,1.7,A*r/2);M.rotation.y=Math.PI/2,d.add(M)}let E=et(st.box,Et(g,0),0,.02,A*r/2,i*2,.02,r);E.material=new ze({color:g,transparent:!0,opacity:.4}),d.add(E)}this._buildStands(),this._buildCastle(),this.torches=[];for(let A of[-e-3,e+3])for(let g of[-n+4,0,n-4]){let d=new Wt;d.position.set(A,0,g),d.add(et(st.cyl,Et(4861976),0,1.6,0,.22,3.2,.22));let x=et(st.cone,new Ae({color:16754746}),0,3.5,0,.55,1.1,.55);d.add(x),d.userData.fl=x,d.visible=!1,t.add(d),this.torches.push(d)}}_buildStands(){let t=this.arena,{hw:e,hl:n}=Jt,i=Et(8015400),r=[],a=(p,m,A,g,d,x)=>r.push({x:p,z:m,rowsAlong:A,rows:g,along:d,face:x});a(-e-3.5,0,"z",4,n*2,1),a(e+3.5,0,"z",4,n*2,-1);let o=[],l=[15223370,4885224,15777840,4900976,15231672,15921906,10115816,16747050];for(let p of r)for(let m=0;m<p.rows;m++){let A=1.4+m*1.7,g=.9+m*1.1,d=p.rowsAlong==="z",x=p.along,y=d?et(st.box,i,p.x+p.face*-(-A+1.4)*0+p.x*0+(p.x<0?-1:1)*(A-1.4),g/2,0,1.7,g,x+3):et(st.box,i,0,g/2,p.z+(p.z<0?-1:1)*(A-1.4),x+3,g,1.7);t.add(y);let v=Math.floor(x/1.6);for(let w=0;w<v;w++){let b=-x/2+(w+m%2*.5)*(x/v),E=d?p.x+(p.x<0?-1:1)*(A-1.4):b,T=d?b:p.z+(p.z<0?-1:1)*(A-1.4);o.push({x:E,y:g+.95,z:T,c:l[(w*5+m*3+(E>0?1:0))%l.length],ph:w*1.7+m})}}let c=st.cone,h=st.sphere;this.crowd=o,this.crowdBody=new ls(c,new ze({color:16777215}),o.length),this.crowdHead=new ls(h,new ze({color:1578e4}),o.length);let u=new Rt;o.forEach((p,m)=>{u.set(p.c),this.crowdBody.setColorAt(m,u)}),t.add(this.crowdBody,this.crowdHead),this._crowdTick=0,this._updateCrowd(0,0);let f=[2779880,14170682,15777840];for(let p of[-e-1,e+1])for(let m=-2;m<=2;m++){let A=m*10;t.add(et(st.cyl,Et(4861976),p,3.2,A,.18,6.4,.18)),t.add(et(st.box,Et(f[(m+2)%3]),p+(p<0?.7:-.7),5.4,A,1.3,1.9,.08))}}_updateCrowd(t,e){let n=new ne,i=new L,r=new hn,a=new L,o=new L;this.crowd.forEach((l,c)=>{let h=Math.max(0,Math.sin(t*(e>0?9:2.2)+l.ph))*(e>0?.55:.08);i.set(l.x,l.y-.45+h,l.z),a.set(.7,1,.7),n.compose(i,r,a),this.crowdBody.setMatrixAt(c,n),i.set(l.x,l.y+.28+h,l.z),o.set(.5,.5,.5),n.compose(i,r,o),this.crowdHead.setMatrixAt(c,n)}),this.crowdBody.instanceMatrix.needsUpdate=!0,this.crowdHead.instanceMatrix.needsUpdate=!0,this.crowdBody.instanceColor&&(this.crowdBody.instanceColor.needsUpdate=!0)}_buildCastle(){let t=this.arena,e=Et(12103840),n=Et(10130050),i=Et(13126202);for(let r of[-1,1]){let a=r*62,o=new Wt;o.position.z=a,t.add(o),o.add(et(st.box,e,0,6,0,70,12,4));for(let l=-17;l<=17;l++)o.add(et(st.box,n,l*2,12.7,r*0,1.2,1.4,4.2));for(let l of[-34,-14,14,34])o.add(et(st.cyl,e,l,10,0,6,20,6),et(st.cone,i,l,22.5,0,7.4,6,7.4),et(st.cyl,Et(4861976),l,28,0,.14,4,.14),et(st.box,Et(l<0?2779880:14170682),l+1.1,28.6,0,2,1.1,.06));o.add(et(st.box,Et(3811866),0,3.5,r*-2.05,7,7,.3),et(st.cyl,Et(3811866),0,7,r*-2.05,7,.3,.3)),o.add(et(st.cyl,e,0,14,0,9,28,9),et(st.cone,i,0,31,0,11,8,11))}for(let r=0;r<14;r++){let a=r/14*Math.PI*2;t.add(et(st.sphere,Et(4885066),Math.cos(a)*110,0,Math.sin(a)*110,60,22,60))}}_buildParticles(){this.pN=220;let e=new Float32Array(220*3),n=new Float32Array(220*3);this.pGeo=new pe,this.pGeo.setAttribute("position",new _e(e,3)),this.pGeo.setAttribute("color",new _e(n,3)),this.pMat=new ri({size:.9,map:this.dotTex,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!0}),this.points=new zi(this.pGeo,this.pMat),this.points.frustumCulled=!1,this.scene.add(this.points),this.parts=Array.from({length:220},()=>({life:0,x:0,y:-50,z:0,vx:0,vy:0,vz:0,r:1,g:1,b:1,grav:0})),this.pI=0}puff(t,e,n,i,r,a=3,o=-2,l=1.5){let c=new Rt(r);for(let h=0;h<i;h++){let u=this.parts[this.pI];this.pI=(this.pI+1)%this.pN;let f=Math.random()*Math.PI*2,p=(.3+Math.random())*a;Object.assign(u,{life:.5+Math.random()*.7,x:t,y:e,z:n,vx:Math.cos(f)*p,vz:Math.sin(f)*p,vy:Math.random()*l*2,r:c.r,g:c.g,b:c.b,grav:o})}}_tickParticles(t){let e=this.pGeo.attributes.position.array,n=this.pGeo.attributes.color.array;this.parts.forEach((i,r)=>{i.life>0&&(i.life-=t,i.vy+=i.grav*t,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t,i.y<.05&&i.grav&&(i.y=.05,i.vy*=-.3,i.vx*=.8,i.vz*=.8));let a=i.life>0?Math.min(1,i.life*2):0;e[r*3]=i.x,e[r*3+1]=i.life>0?i.y:-50,e[r*3+2]=i.z,n[r*3]=i.r*a,n[r*3+1]=i.g*a,n[r*3+2]=i.b*a}),this.pGeo.attributes.position.needsUpdate=!0,this.pGeo.attributes.color.needsUpdate=!0}_clearDyn(){for(let t of[...this.dyn.children])this.dyn.remove(t);this.kMesh=[],this.barrelMesh=null,this.doorMesh=[],this.mudMesh=[],this.bouldMesh=new Map,this.lastEvt=null}_setupEntities(){this._clearDyn();let t=this.m,e=(kn.find(a=>a.id===this.save.color)||kn[0]).hex;this.playerColor=e;for(let a of t.knights){let o=lh(a.team===0?e:Sr,a.human?this.save.helmet:a.team===0?"bucket":a.slot===0?"horns":a.slot===1?"crest":"bucket",a.human&&this.real);o.userData.inner.scale.setScalar(1.1),this.dyn.add(o),this.kMesh.push(o)}this.barrelMesh=Lm(),this.dyn.add(this.barrelMesh);let n=et(new ai(1.5,20),new Ae({color:0,transparent:!0,opacity:.3,depthWrite:!1}),0,.03,0);n.rotation.x=-Math.PI/2,this.dyn.add(n),this.barrelShadow=n;let i=Et(6964258),r=Et(9067054);for(let a of t.doors){let o=new Wt;o.position.set(a.x,0,a.z);let l=a.half;o.add(et(st.box,Et(1314828),0,.03,0,l*2,.04,l*2)),o.add(et(st.box,Et(4861976),0,.06,-l-.12,l*2+.5,.14,.26),et(st.box,Et(4861976),0,.06,l+.12,l*2+.5,.14,.26),et(st.box,Et(4861976),-l-.12,.06,0,.26,.14,l*2),et(st.box,Et(4861976),l+.12,.06,0,.26,.14,l*2));let c=[];for(let u of[-1,1]){let f=new Wt;f.position.set(u*l,.1,0);let p=new Wt;p.position.x=-u*l/2,f.add(p),p.add(et(st.box,i,0,0,0,l,.12,l*2));for(let m=0;m<4;m++)p.add(et(st.box,r,0,.07,(m-1.5)*l*.5,l-.1,.02,.06));p.add(et(st.cyl,Et(5593700),0,.09,0,.14,.04,.14)),o.add(f),c.push(f)}let h=et(st.box,new Ae({color:16726570,transparent:!0,opacity:0}),0,.2,0,l*2+.7,.05,l*2+.7);o.add(h),this.dyn.add(o),this.doorMesh.push({g:o,panels:c,tape:h,d:a})}for(let a of t.muds){let o=new Wt;o.position.set(a.x,0,a.z),o.add(et(new ai(a.r,28),new ze({color:5913120}),0,.03,0)),o.children[0].rotation.x=-Math.PI/2;let l=et(new Oi(a.r-.4,a.r,28),new ze({color:4073490}),0,.035,0);l.rotation.x=-Math.PI/2,o.add(l);for(let c=0;c<7;c++){let h=c*2.4;o.add(et(st.sphere,Et(8016432),Math.cos(h)*a.r*.6*(c%3/3+.4),.05,Math.sin(h)*a.r*.6*(c%3/3+.4),.7,.18,.7))}this.dyn.add(o)}this.chev=Vm("#ffffff")}_boulderMesh(t){let e=this.bouldMesh.get(t.id);if(!e){let n=new Wt,i=new me(new dr(1.1,1),new ze({color:9077880,flatShading:!0}));n.add(i);let r=et(st.box,new Ae({map:null,color:16726570,transparent:!0,opacity:.3,depthWrite:!1}),0,.05,0,Jt.hw*2+2,.02,2.6),a=this.chev.clone();a.needsUpdate=!0,a.repeat.set(10,1);let o=et(new dn(Jt.hw*2+2,2.2),new Ae({map:a,transparent:!0,opacity:.8,color:16769098,depthWrite:!1}),0,.08,0);o.rotation.x=-Math.PI/2,t.dir<0&&(o.rotation.z=Math.PI);let l=new Wt;l.add(r,o,n),this.dyn.add(l),e={wrap:l,rock:n,lane:r,arrows:o,ch:a},this.bouldMesh.set(t.id,e)}return e}_resize(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.u=Math.min(this.cw,this.ch)/100,this.root.style.setProperty("--u",`${this.u}px`),this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.fov=this.cw<this.ch?50:42,this.camera.updateProjectionMatrix()}_bind(){let t=()=>this.sound.unlock();for(let n of["pointerdown","pointerup","touchend","click","keydown"])this.root.addEventListener(n,t,{capture:!0,passive:!0});this.root.addEventListener("pointerdown",n=>{if(!(n.target.closest("button")||this.mode!=="play"||this.paused||this.stick)){if(this.stick={id:n.pointerId,ox:n.clientX,oy:n.clientY,x:0,z:0,fixed:!1},this.baseEl){let i=this.baseEl.getBoundingClientRect(),r=i.left+i.width/2,a=i.top+i.height/2;Math.hypot(n.clientX-r,n.clientY-a)<i.width*.75&&(this.stick.ox=r,this.stick.oy=a,this.stick.fixed=!0)}this._stickUi(!0,n)}}),this.root.addEventListener("pointermove",n=>{let i=this.stick;if(!i||i.id!==n.pointerId)return;let r=this.u*9,a=n.clientX-i.ox,o=n.clientY-i.oy,l=Math.hypot(a,o);l>r*1.6&&(i.ox+=a/l*(l-r*1.6),i.oy+=o/l*(l-r*1.6),a=n.clientX-i.ox,o=n.clientY-i.oy);let c=Math.min(1,Math.hypot(a,o)/r),h=Math.hypot(a,o)<this.u*1.2,u=Math.hypot(a,o)||1;i.x=h?0:a/u*c,i.z=h?0:o/u*c,this._stickUi(!0,n)});let e=n=>{this.stick&&this.stick.id===n.pointerId&&(this.stick=null,this._stickUi(!1))};this.root.addEventListener("pointerup",e),this.root.addEventListener("pointercancel",e),this._onKey=n=>{let i=n.key.toLowerCase();if(this.mode==="play"){if(["arrowleft","arrowright","arrowup","arrowdown"," ","w","a","s","d"].includes(i)&&n.preventDefault(),i===" "||i==="shift"){!this.paused&&this.m&&this.m.pressDash();return}if(i==="p"||i==="escape"){this.togglePause();return}this.keys.add(i)}},this._onKeyUp=n=>this.keys.delete(n.key.toLowerCase()),window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKeyUp),this._onVis=()=>{document.hidden?(this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()):this.sound.resume()},document.addEventListener("visibilitychange",this._onVis)}_stickUi(t,e){if(!this.stickEl)return;if(!t){this.stickEl.style.display="none",this.baseKnob&&(this.baseKnob.style.transform="");return}let n=this.root.getBoundingClientRect(),i=this.stick;if(i.fixed&&this.baseKnob){this.stickEl.style.display="none";let a=this.u*9;this.baseKnob.style.transform=`translate(${i.x*a}px,${i.z*a}px)`;return}this.stickEl.style.display="block",this.stickEl.style.left=`${i.ox-n.left}px`,this.stickEl.style.top=`${i.oy-n.top}px`;let r=this.u*9;this.knobEl.style.transform=`translate(${i.x*r}px,${i.z*r}px)`}_readInput(){let t=this.m,e=0,n=0,i=this.keys;if((i.has("arrowleft")||i.has("a"))&&(e-=1),(i.has("arrowright")||i.has("d"))&&(e+=1),(i.has("arrowup")||i.has("w"))&&(n-=1),(i.has("arrowdown")||i.has("s"))&&(n+=1),e||n){let r=Math.hypot(e,n);e/=r,n/=r}else this.stick&&(e=this.stick.x,n=this.stick.z);t.input.x=e,t.input.z=n}_clear(){this.layer.replaceChildren(),this.hudEls=null,this.stickEl=null}_soundPill(){let t=Q("button",{class:"bk-soundpill",onclick:()=>this.sound.unlock()},dt.t("tapSound"));this.layer.append(t);let e=()=>{this.root.isConnected&&(t.style.display=!this.sound.ctx||this.sound.on||this.sound.muted?"none":"block",setTimeout(e,600))};e()}hint(t,e=2200){this.hintEl&&(this.hintEl.textContent=t,this.hintEl.classList.add("show"),clearTimeout(this._ht),this._ht=setTimeout(()=>this.hintEl&&this.hintEl.classList.remove("show"),e))}_persist(){this.post({type:"save",save:this.save})}_tap(t){return()=>{this.sound.play("tap"),t()}}_demo(){this.real=!1,this.m=new us({round:Math.floor(Math.random()*fn.length),diff:"normal",seed:(Date.now()&65535)+1,autoPlayer:!0,age:this.age}),this.m.knights.forEach(t=>{t.human=!1}),this._look(this.m.cfg.look),this._setupEntities()}showMenu(){this.mode="menu",this.paused=!1,this._clear(),this.sound.setMode("menu"),this.dyn.visible=!0,this.preview&&(this.preview.visible=!1),this._demo();let t=Math.min(this.save.unlocked-1,fn.length-1);this.layer.append(Q("div",{class:"bk-dim bk-clear"},Q("div",{class:"bk-card"},Q("div",{class:"bk-logo"},dt.t("title")),Q("div",{class:"bk-coins"},`\u{1FA99} ${dt.num(this.save.coins)}`),Q("div",{class:"bk-menu"},Q("button",{class:"bk-btn",onclick:this._tap(()=>this.start(t))},"\u25B6 ",dt.t("play")),Q("button",{class:"bk-btn dark",onclick:this._tap(()=>this.showRounds())},"\u{1F3C6} ",dt.t("rounds")),Q("button",{class:"bk-btn dark",onclick:this._tap(()=>this.showShop())},"\u{1F6E1}\uFE0F ",dt.t("knights")),Q("button",{class:"bk-btn dark",onclick:this._tap(()=>this.showSettings())},"\u2699\uFE0F ",dt.t("settings")),Q("button",{class:"bk-btn alt",onclick:()=>this.post({type:"exit"})},dt.t("quit")))))),this._soundPill()}showRounds(){this._clear();let t=dt.getLang()!=="en",e=fn.map((n,i)=>{let r=i+1>this.save.unlocked,a=this.save.stars[i]||0;return Q("button",{class:`bk-lv${r?" lock":""}${n.final?" fin":""}`,onclick:()=>{if(r){this.hint(dt.t("locked"));return}this.sound.play("tap"),this.start(i)}},Q("i",{},r?"\u{1F512}":n.final?"\u{1F451}":dt.num(i+1)),Q("span",{class:"bk-lvn"},t?n.ar:n.en),Q("span",{},"\u2605".repeat(a)+"\u2606".repeat(3-a)))});this.layer.append(Q("div",{class:"bk-dim"},Q("div",{class:"bk-card"},Q("div",{class:"bk-title"},"\u{1F3C6} ",dt.t("rounds")),Q("div",{class:"bk-lvs"},e),Q("button",{class:"bk-btn dark",onclick:this._tap(()=>this.showMenu())},dt.t("back"))))),this.hintEl=Q("div",{class:"bk-hint"}),this.layer.append(this.hintEl),this._soundPill()}showSettings(){this._clear();let t=Q("button",{class:"bk-btn",onclick:()=>{this.save.muted=!this.save.muted,this.sound.setMuted(this.save.muted),this._persist(),t.textContent=`${this.save.muted?"\u{1F507}":"\u{1F50A}"} ${dt.t("sound")}`,this.sound.play("tap")}},`${this.save.muted?"\u{1F507}":"\u{1F50A}"} ${dt.t("sound")}`),e=n=>Q("button",{class:`bk-seg${this.save.diff===n?" on":""}`,onclick:()=>{this.save.diff=n,this._persist(),this.showSettings()}},dt.t(n));this.layer.append(Q("div",{class:"bk-dim"},Q("div",{class:"bk-card"},Q("div",{class:"bk-title"},"\u2699\uFE0F ",dt.t("settings")),t,Q("div",{class:"bk-small"},dt.t("diff")),Q("div",{class:"bk-segs"},e("easy"),e("normal"),e("hard")),Q("div",{class:"bk-small"},dt.t("how")),Q("div",{class:"bk-small"},dt.t("how2")),Q("button",{class:"bk-btn dark",onclick:this._tap(()=>this.showMenu())},dt.t("back")))))}showShop(t="color"){this.mode="shop",this._clear(),this.dyn.visible=!1,this._ensurePreview();let e=dt.getLang()!=="en",n=Q("div",{class:"bk-coins"},`\u{1FA99} ${dt.num(this.save.coins)}`),i=t==="color"?kn:br,r=t==="color"?this.save.owned.colors:this.save.owned.helmets,a=t==="color"?this.save.color:this.save.helmet,o=i.map(l=>{let c=r.includes(l.id),h=a===l.id,u=t==="color"?Q("span",{class:"bk-sw",style:`background:#${l.hex.toString(16).padStart(6,"0")}`}):Q("span",{class:"bk-sw hm"},{bucket:"\u{1FA96}",plume:"\u{1FAB6}",crest:"\u{1F3DB}\uFE0F",horns:"\u{1F402}",jester:"\u{1F921}",crown:"\u{1F451}"}[l.id]);return Q("button",{class:`bk-item${h?" on":""}${c?"":" buy"}`,onclick:()=>{if(c)Ko(this.save,t,l.id),this.sound.play("tap");else{if(!Xc(this.save,t,l.id).ok){this.hint(dt.t("notEnough")),this.sound.play("warn");return}Ko(this.save,t,l.id),this.sound.play("coin")}this._persist(),this._previewRebuild(),this.showShop(t)}},u,Q("span",{},e?l.ar:l.en),Q("small",{},h?`\u2713 ${dt.t("equipped")}`:c?"":`\u{1FA99} ${dt.num(l.price)}`))});this.layer.append(Q("div",{class:"bk-dim bk-bottom"},Q("div",{class:"bk-card wide"},n,Q("div",{class:"bk-segs"},Q("button",{class:`bk-seg${t==="color"?" on":""}`,onclick:()=>this.showShop("color")},dt.t("colors")),Q("button",{class:`bk-seg${t==="helmet"?" on":""}`,onclick:()=>this.showShop("helmet")},dt.t("helmets"))),Q("div",{class:"bk-items"},o),Q("button",{class:"bk-btn dark",onclick:this._tap(()=>this.showMenu())},dt.t("back"))))),this.hintEl=Q("div",{class:"bk-hint",style:"top:calc(var(--u)*12)"}),this.layer.append(this.hintEl),this._soundPill()}_ensurePreview(){this.preview||(this.preview=new Wt,this.scene.add(this.preview)),this._previewRebuild(),this.preview.visible=!0}_previewRebuild(){for(let i of[...this.preview.children])this.preview.remove(i);let t=(kn.find(i=>i.id===this.save.color)||kn[0]).hex,e=lh(t,this.save.helmet,!1);e.scale.setScalar(1.1),this.preview.add(e),this.previewKnight=e;let n=et(st.cyl,Et(9067054),0,-.1,0,5,.3,5);this.preview.add(n)}start(t){this.round=t,this.real=!0,this.m=new us({round:t,diff:this.save.diff,seed:(Date.now()&65535)+1,age:this.age}),this._look(this.m.cfg.look),this.dyn.visible=!0,this.preview&&(this.preview.visible=!1),this._setupEntities(),this.mode="play",this.paused=!1,this.over=!1,this.overT=0,this.stick=null,this.keys.clear(),this.cheer=0,this.lastScore=[0,0],this._clear(),this.sound.setMode("play"),this._hud(),this.camSnap=!0;let e=dt.getLang()!=="en",n=this.m.cfg;this.introT=1.9,this.introEl=Q("div",{class:"bk-intro"},Q("div",{class:"bk-plaque"},Q("div",{class:"bk-ribbon"},`${dt.t("match")} ${dt.num(t+1)}`),Q("div",{class:"bk-mname"},e?n.ar:n.en),Q("div",{class:"bk-first"},dt.t("first")))),this.layer.append(this.introEl)}_hud(){let t=Q("button",{class:"bk-round","aria-label":dt.t("paused"),onclick:()=>this.togglePause()},"\u23F8");this.scoreA=Q("b",{},"0"),this.scoreB=Q("b",{},"0"),this.timeEl=Q("span",{class:"bk-time"},"2:00");let e=(i,r)=>Q("i",{class:"bk-shield",style:`--c:#${i.toString(16).padStart(6,"0")}`},r),n=Q("div",{class:"bk-board"},Q("div",{class:"bk-score"},e(this.playerColor,"\u{1F3F0}"),this.scoreA,Q("em",{},"-"),this.scoreB,e(Sr,"\u2600")),this.timeEl);this.matchBadge=Q("div",{class:"bk-mbadge"},Q("small",{},dt.t("match")),Q("b",{},dt.num(this.round+1))),this.baseKnob=Q("div",{class:"bk-bknob"}),this.baseEl=Q("div",{class:"bk-base"},this.baseKnob),this.dashFill=Q("div",{class:"bk-dashfill"}),this.dashBtn=Q("button",{class:"bk-dash","aria-label":dt.t("dash"),onpointerdown:i=>{i.preventDefault(),this.m&&!this.paused&&this.m.pressDash()}},this.dashFill,Q("span",{},"\u{1F6E1}\uFE0F"),Q("small",{},dt.t("dash"))),this.knobEl=Q("div",{class:"bk-knob"}),this.stickEl=Q("div",{class:"bk-stick"},this.knobEl),this.bannerEl=Q("div",{class:"bk-banner"}),this.hintEl=Q("div",{class:"bk-hint",style:"top:calc(var(--u)*22)"}),this.layer.append(Q("div",{class:"bk-top",style:"direction:ltr"},this.matchBadge,n,t),this.baseEl,this.stickEl,this.dashBtn,this.bannerEl,this.hintEl),this._soundPill()}_banner(t,e,n=1800,i="#ffd23a",r=!1){let a=this.bannerEl;a&&(a.replaceChildren(...[Q("div",{class:r?"bk-goalrib":"bk-bigtxt",style:r?"":`color:${i}`},t),e?Q("div",{class:"bk-subtxt"},e):null].filter(Boolean)),a.classList.remove("show"),a.offsetWidth,a.classList.add("show"),clearTimeout(this._bt),this._bt=setTimeout(()=>a.classList.remove("show"),n))}togglePause(){this.mode!=="play"||this.over||(this.paused=!this.paused,this.paused?(this.pauseEl=Q("div",{class:"bk-dim"},Q("div",{class:"bk-card"},Q("div",{class:"bk-title"},dt.t("paused")),Q("button",{class:"bk-btn",onclick:()=>this.togglePause()},"\u25B6 ",dt.t("resume")),Q("button",{class:"bk-btn dark",onclick:()=>{this.sound.play("tap"),this.start(this.round)}},"\u{1F504} ",dt.t("restart")),Q("button",{class:"bk-btn dark",onclick:()=>{this.sound.play("tap"),this.showMenu()}},"\u{1F3E0} ",dt.t("home")))),this.layer.append(this.pauseEl)):this.pauseEl&&(this.pauseEl.remove(),this.pauseEl=null))}_results(t){let e=dt.getLang()!=="en";this.over=!0;let n=this.save.stars[this.round]||0;Wc(this.save,this.round,t),this._persist(),this.sound.play(t.win?"win":"lose"),this.sound.setMode(null);let i=Q("div",{class:"bk-stars"},[1,2,3].map(a=>Q("span",{class:a<=t.stars?"":"off",style:`animation-delay:${a*.25}s`},"\u2B50"))),r=this.round===fn.length-1;if(this.layer.append(Q("div",{class:"bk-dim"},Q("div",{class:"bk-card res"},Q("div",{class:"bk-logo",style:`color:${t.win?"#ffd23a":t.draw?"#bcd":"#ff8a6a"}`},t.win?dt.t("victory"):t.draw?dt.t("draw"):dt.t("lose")),Q("div",{class:"bk-bigscore"},`${dt.num(t.goals[0])} - ${dt.num(t.goals[1])}`),i,Q("div",{class:"bk-small"},`${dt.t("earned")} \u{1FA99} ${dt.num(t.coins)}`,t.win?` \xB7 ${dt.t(this.age&&this.gender==="girl"?"win_f":"win_m")}`:""),t.win&&!r?Q("button",{class:"bk-btn",onclick:()=>{this.sound.play("tap"),this.start(this.round+1)}},"\u25B6 ",dt.t("next")):null,Q("button",{class:t.win?"bk-btn alt":"bk-btn",onclick:()=>{this.sound.play("tap"),this.start(this.round)}},"\u{1F504} ",dt.t("restart")),Q("button",{class:"bk-btn dark",onclick:()=>{this.sound.play("tap"),this.showRounds()}},"\u{1F3C6} ",dt.t("rounds")),Q("button",{class:"bk-btn dark",onclick:()=>{this.sound.play("tap"),this.showMenu()}},"\u{1F3E0} ",dt.t("home"))))),t.win)for(let a=0;a<40;a++)this.puff(this.camT.x+(Math.random()-.5)*14,8+Math.random()*5,this.camT.z-6+Math.random()*6,1,[16765498,16734858,5957887,8056954][a%4],2,-3,.5)}_events(t){let e=this.m,n=this.real;for(let i of t){let r=i.id!==void 0&&e.knights[i.id];switch(i.type){case"count":n&&(this.sound.play("count"),this._banner(dt.num(i.n),dt.t("ready"),900,"#fff"));break;case"go":n&&(this.sound.play("go"),this.sound.play("whistle"),this._banner(dt.t("go"),"",900,"#7af07a"),e.kickoffs===1&&this.hint(dt.t("tip"),3600));break;case"dash":r&&(this.puff(r.x,.3,r.z,8,15259824,2.5),n&&this.sound.play("dash"));break;case"barrelHit":{let a=e.barrel;this.puff(a.x,.8,a.z,5+Math.round(i.power*10),i.dash?16771488:15259824,3+i.power*4),n&&(this.sound.play("thud",i.power),i.dash&&this.sound.play("clang")),i.power>.5&&(this.shakeT=Math.max(this.shakeT,.25+i.power*.2));break}case"fence":n&&this.sound.play("fence",i.power);break;case"stun":r&&(this.puff(r.x,1.8,r.z,14,16769098,4,-4,2),n&&this.sound.play("stun"));break;case"clash":n&&this.sound.play("clang");break;case"clang":n&&this.sound.play("clang");break;case"doorWarn":n&&this.sound.play("creak");break;case"doorOpen":n&&this.sound.play("dooropen");break;case"fall":r&&(this.puff(r.x,.4,r.z,12,6965802,3),n&&this.sound.play("doorfall"));break;case"boulderWarn":n&&this.sound.play("warn");break;case"boulderGo":n&&this.sound.play("rumble");break;case"goal":{this.cheer=3,this.goalTeam=i.team,this.shakeT=.5,n&&(this.sound.play(i.team===0?"goal":"conceded"),i.team!==0&&this.sound.swell(.07,1.6),this._banner(dt.t("goal"),"",2300,i.team===0?"#ffd23a":"#ff8a8a",!0));let a=i.team===0?-Jt.hl:Jt.hl;for(let o=0;o<70;o++)this.puff((Math.random()-.5)*10,1+Math.random()*3,a+(i.team===0?1:-1)*Math.random()*3,1,[16765498,16734858,5957887,8056954,16777215][o%5],5,-4,3);break}case"overtime":n&&(this._banner(dt.t("overtime"),"",2e3,"#ff8a3a"),this.sound.play("whistle"));break;case"over":n&&(this.over=!0,this.overT=1.2,this.resEv=i.result,this.sound.play("whistle"));break;default:break}}}_frame(){let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.clock+=e;let n=this.m;n&&this.dyn.visible&&(this.mode==="play"&&!this.paused&&this.introT>0?(this.introT-=e,this.introT<=0&&this.introEl&&(this.introEl.remove(),this.introEl=null)):this.mode==="play"&&!this.paused?(!this.over||this.overT>0)&&(this._readInput(),this._events(n.step(e))):this.mode==="menu"&&(this._events(n.step(e)),n.phase==="over"&&this._demo()),this.mode==="play"&&this.over&&this.resEv&&!this.resShown&&(this.overT-=e,this.overT<=0&&(this.resShown=!0,this._results(this.resEv))),this.mode==="play"&&!this.over&&(this.resShown=!1),this.mode==="play"&&this._hudUpdate()),this.cheer=Math.max(0,this.cheer-e),this.shakeT=Math.max(0,this.shakeT-e),this._crowdTick-=e,this._crowdTick<=0&&(this._crowdTick=1/20,this._updateCrowd(this.clock,this.cheer));for(let i of this.torches)i.visible&&i.userData.fl.scale.set(.55+Math.sin(this.clock*12+i.position.z)*.08,1.1+Math.sin(this.clock*9+i.position.x)*.2,.55);this._render(e)}_hudUpdate(){let t=this.m;this.scoreA.textContent!==String(t.score[0])&&(this.scoreA.textContent=dt.num(t.score[0])),this.scoreB.textContent!==String(t.score[1])&&(this.scoreB.textContent=dt.num(t.score[1]));let e=Math.ceil(Math.max(0,t.timeLeft)),n=`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,i=t.overtime?`\u23F1 ${n}`:n;this.timeEl.textContent!==(dt.getLang()==="en"?i:i.replace(/[0-9]/g,o=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[o]))&&(this.timeEl.textContent=dt.getLang()==="en"?i:i.replace(/[0-9]/g,o=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[o])),this.timeEl.classList.toggle("low",e<=15&&!t.overtime);let r=t.knights[0],a=jo(1-r.cd/(this.age<=4?1.1:1.5),0,1);this.dashFill.style.setProperty("--f",`${Math.round(a*100)}%`),this.dashBtn.classList.toggle("ready",a>=1)}_syncKnight(t,e,n){let i=e.userData,r=Math.hypot(t.vx,t.vz);e.position.set(t.x,0,t.z);let o=Math.atan2(t.fx,t.fz)-e.rotation.y;o=Math.atan2(Math.sin(o),Math.cos(o)),e.rotation.y+=o*Math.min(1,n*14),i.phase+=r*n*1.7;let l=Math.sin(i.phase)*Math.min(1,r/6),c=t.stun>0,h=!!t.fall&&c,u=this.cheer>0&&this.m.phase==="goal",f=u&&t.team===this.goalTeam,p=t.dash>0?.55:Math.min(.25,r*.03);i.legL.rotation.x=l*.9,i.legR.rotation.x=-l*.9,i.armL.rotation.x=t.dash>0?.9:-l*.8,i.armR.rotation.x=t.dash>0?.9:l*.8,i.armL.rotation.z=0,i.armR.rotation.z=0;let m=Math.abs(l)*.1*Math.min(1,r/6),A=p,g=0,d=1;if(f?(m=Math.abs(Math.sin(this.clock*8+t.id))*.9,i.armL.rotation.x=i.armR.rotation.x=-2.8,i.armL.rotation.z=-.3,i.armR.rotation.z=.3,A=0):u&&(A=.35,i.armL.rotation.x=i.armR.rotation.x=.2,m=0),c&&!h){let x=1-t.stun/(t.stunDur||1),y=Math.min(1,x*5);A=-y*1.45+Math.sin(this.clock*20)*.04*(1-y),g=Math.sin(this.clock*7)*.12*y,m=-.15*y,i.legL.rotation.x=i.legR.rotation.x=.3,i.armL.rotation.x=i.armR.rotation.x=-1.6,x<.2&&(g=x*18)}if(h){let x=1-t.stun/(t.stunDur||1);d=x<.2?1-x*5:x>.85?(x-.85)/.15:.001,t.fall&&e.position.set(t.fall.x+(t.x-t.fall.x),0,t.z)}i.inner.rotation.x=A,i.inner.rotation.z=g,i.inner.position.y=m,e.scale.set(1,Math.max(.001,d),1),i.shadow.scale.setScalar(Math.max(.5,1-m*.4)),i.stars.visible=c&&!h,i.stars.visible&&i.stars.children.forEach((x,y)=>{let v=this.clock*5+y*2.1;x.position.set(Math.cos(v)*.7,Math.sin(this.clock*8+y)*.1,Math.sin(v)*.7),x.rotation.y=v*2}),i.inner.visible=!(h&&d<.01),i.marker&&(i.marker.userData.arrow.position.y=3.5+Math.sin(this.clock*6)*.2,i.marker.visible=!c),t.mud&&r>1&&Math.random()<n*8&&this.puff(t.x,.2,t.z,1,6965802,1.2,-3)}_render(t){let e=this.m,n=this.mode==="play"||this.mode==="menu";if(e&&this.dyn.visible){e.knights.forEach((c,h)=>this._syncKnight(c,this.kMesh[h],t));let i=e.barrel,r=this.barrelMesh,a=r.userData;r.position.set(i.x,a.y,i.z);let o=Math.hypot(i.vx,i.vz);if(o>.8){let h=Math.atan2(i.vx,i.vz)-a.yaw.rotation.y;h=Math.atan2(Math.sin(h),Math.cos(h)),a.yaw.rotation.y+=h*Math.min(1,t*10)}a.roll.rotation.x+=o*t/ce,this.barrelShadow.position.set(i.x,.03,i.z),o>7&&Math.random()<t*14&&this.puff(i.x,.2,i.z,1,15259824,1.2,-1);for(let c of this.doorMesh){let h=c.d,u=h.state==="open"?1:0,f=0;h.state==="open"&&(u=Math.min(1,(2.4-h.t)*5)*Math.min(1,h.t*3)),h.state==="warn"&&(f=Math.sin(this.clock*40)*.04,u=0),c.panels[0].rotation.z=u*1.45+f,c.panels[1].rotation.z=-u*1.45-f,c.tape.material.opacity=h.state==="warn"?.35+Math.sin(this.clock*16)*.3:0,c.tape.scale.y=1}let l=new Set;for(let c of e.boulders){let h=this._boulderMesh(c);l.add(c.id),h.wrap.position.set(0,0,c.z),c.state==="warn"?(h.lane.material.opacity=.18+(Math.sin(this.clock*14)*.5+.5)*.3,h.arrows.visible=!0,h.ch.offset.x=-this.clock*.8*c.dir,h.rock.position.set(-c.dir*(Jt.hw+1.4),1.1,0),h.rock.rotation.z+=t):(h.lane.material.opacity=.1,h.arrows.visible=!1,h.rock.position.set(c.x,1.1,0),h.rock.rotation.z-=c.dir*t*10,h.rock.rotation.x+=t*2,Math.random()<t*20&&this.puff(c.x,.3,c.z,1,12101768,1.5,-2))}for(let[c,h]of this.bouldMesh)l.has(c)||(this.dyn.remove(h.wrap),this.bouldMesh.delete(c))}this._tickParticles(t),this._camera(t,n),this.renderer.render(this.scene,this.camera)}_camera(t,e){let n=this.camera,i=this.cw/this.ch,r=i<1;if(this.mode==="shop"&&this.preview){this.preview.rotation.y+=t*.8,n.position.set(0,3,13),n.lookAt(0,r?-1.2:-1.8,0);return}let a=this.m;if(!a)return;let o=n.fov*Math.PI/180,l=2*Math.atan(Math.tan(o/2)*i),c=r?17:30,h=r?21:28,u=Math.max(c/2/Math.tan(l/2),h/2/Math.tan(o/2)*.95),f=.95,p=a.barrel,m=a.knights[0],A=Lr(p.x,m.x,this.real?.35:0),g=Lr(p.z,m.z,this.real?.35:0),d=Math.max(0,Jt.hl-8);g=jo(g,-d,d);let x=Math.max(0,Jt.hw-(r?3:5));A=jo(A*(r?1:.4),-x,x),this.mode==="menu"&&(A=Math.sin(this.clock*.1)*3,g=Math.sin(this.clock*.15)*8);let v=this.camSnap?1:Math.min(1,t*3.5);this.camSnap=!1,this.camT.x=Lr(this.camT.x,A,v),this.camT.z=Lr(this.camT.z,g,v);let w=this.shakeT>0?this.shakeT*.35:0;n.position.set(this.camT.x+(Math.random()-.5)*w,Math.sin(f)*u,this.camT.z+Math.cos(f)*u+(Math.random()-.5)*w),n.lookAt(this.camT.x,0,this.camT.z-1)}pause(){this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()}dispose(){this.renderer.setAnimationLoop(null),this.sound.dispose(),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKeyUp),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}this.root.remove()}},Dm=`
.bk-logo{font-size:calc(var(--u)*7.4)!important}
.bk-dim.bk-clear{background:rgba(30,15,5,.28)}
.bk-dim.bk-bottom{align-items:flex-end;background:linear-gradient(180deg,rgba(0,0,0,0) 35%,rgba(20,10,0,.45))}
.bk-card.wide{width:calc(var(--u)*115);max-width:100%}
.bk-menu{display:flex;flex-direction:column;gap:calc(var(--u)*1.6);width:100%}
.bk-coins{font-weight:900;font-size:calc(var(--u)*4.4);background:rgba(0,0,0,.3);border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*3.5)}
.bk-lv{border:calc(var(--u)*.45) solid #fff;font-family:inherit;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.2) calc(var(--u)*.6);color:#fff;font-weight:900;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.3);background:linear-gradient(180deg,#e8a84a,#b8742a);box-shadow:0 calc(var(--u)*.6) 0 #6a3a10;min-height:calc(var(--u)*19);justify-content:center}
.bk-lv i{font-style:normal;font-size:calc(var(--u)*6)}.bk-lv .bk-lvn{font-size:calc(var(--u)*2.5);line-height:1.1;text-align:center}.bk-lv span:last-child{color:#ffe04a;font-size:calc(var(--u)*3)}
.bk-lv.fin{background:linear-gradient(180deg,#ffe04a,#d89a1a);color:#4a2a00}.bk-lv.fin span:last-child{color:#8a3a00}
.bk-lv.lock{filter:grayscale(1) brightness(.75)}
.bk-lvs{grid-template-columns:repeat(3,1fr)}
@media (orientation:landscape){.bk-lvs{grid-template-columns:repeat(5,1fr)}}
.bk-board{display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);direction:ltr}
.bk-score{display:flex;align-items:center;gap:calc(var(--u)*1.6);background:linear-gradient(180deg,#5a3a1a,#2a1608);border:calc(var(--u)*.55) solid #ffd23a;border-radius:calc(var(--u)*4);padding:calc(var(--u)*.7) calc(var(--u)*3);box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,0,0,.45)}
.bk-score b{font-size:calc(var(--u)*7.5);font-weight:900;color:#fff;min-width:calc(var(--u)*5);text-align:center;line-height:1}.bk-score em{font-style:normal;color:#ffd23a;font-size:calc(var(--u)*6);font-weight:900}
.bk-dot{display:block;width:calc(var(--u)*3.4);height:calc(var(--u)*3.4);border-radius:50%;border:calc(var(--u)*.4) solid #fff}
.bk-time{background:rgba(20,10,0,.72);color:#fff;font-weight:900;font-size:calc(var(--u)*4.4);border-radius:999px;padding:calc(var(--u)*.2) calc(var(--u)*3);border:calc(var(--u)*.3) solid #ffd23a}.bk-time.low{color:#ff8a6a;animation:bkpulse .6s infinite}
.bk-dash{position:absolute;right:max(calc(var(--u)*4),env(safe-area-inset-right));bottom:max(calc(var(--u)*5),env(safe-area-inset-bottom));width:calc(var(--u)*21);height:calc(var(--u)*21);border-radius:50%;border:calc(var(--u)*.9) solid #fff;font-family:inherit;color:#fff;font-weight:900;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#6a3a1a;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.5);overflow:hidden;padding:0;pointer-events:auto;touch-action:none}
.bk-dashfill{position:absolute;inset:0;--f:100%;background:conic-gradient(#ffb02a var(--f),rgba(40,20,5,.85) 0)}
.bk-dash span,.bk-dash small{position:relative}.bk-dash span{font-size:calc(var(--u)*8)}.bk-dash small{font-size:calc(var(--u)*3.2)}
.bk-dash.ready{animation:bkpulse 1s infinite;box-shadow:0 0 calc(var(--u)*3) #ffd23a}
.bk-stick{position:absolute;display:none;width:0;height:0;pointer-events:none}.bk-stick:before{content:'';position:absolute;left:calc(var(--u)*-14.4);top:calc(var(--u)*-14.4);width:calc(var(--u)*28.8);height:calc(var(--u)*28.8);border-radius:50%;border:calc(var(--u)*.6) solid rgba(255,255,255,.55);background:rgba(255,255,255,.12)}
.bk-knob{position:absolute;left:calc(var(--u)*-5);top:calc(var(--u)*-5);width:calc(var(--u)*10);height:calc(var(--u)*10);border-radius:50%;background:rgba(255,255,255,.7);box-shadow:0 0 calc(var(--u)*1.5) rgba(0,0,0,.4)}
.bk-banner{position:absolute;left:0;right:0;top:34%;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1);opacity:0;pointer-events:none;transform:scale(.6)}
.bk-banner.show{animation:bkpop 2s ease-out forwards}
.bk-bigtxt{font-size:calc(var(--u)*17);font-weight:900;-webkit-text-stroke:calc(var(--u)*1) rgba(40,15,0,.95);paint-order:stroke fill;text-shadow:0 calc(var(--u)*1) calc(var(--u)*2) rgba(0,0,0,.4);line-height:1}
.bk-subtxt{font-size:calc(var(--u)*6);font-weight:900;color:#fff;background:rgba(30,15,0,.6);border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*4)}
@keyframes bkpop{0%{opacity:0;transform:scale(.5)}12%{opacity:1;transform:scale(1.12)}22%{transform:scale(1)}80%{opacity:1}100%{opacity:0;transform:scale(1)}}
@keyframes bkpulse{50%{transform:scale(1.07)}}
.bk-card.res{gap:calc(var(--u)*1.2)}.bk-stars{direction:ltr}
@media (orientation:landscape){.bk-card.res{display:grid;grid-template-columns:1fr 1fr;width:calc(var(--u)*130);align-items:center}.bk-card.res>.bk-logo,.bk-card.res>.bk-bigscore,.bk-card.res>.bk-stars,.bk-card.res>.bk-small{grid-column:1/3}.bk-card.res .bk-btn{min-height:calc(var(--u)*9);font-size:calc(var(--u)*4)}.bk-card.res .bk-bigscore{font-size:calc(var(--u)*8)}.bk-card.res .bk-stars{font-size:calc(var(--u)*7)}.bk-card.res .bk-logo{font-size:calc(var(--u)*6)!important}}
.bk-top{align-items:flex-start}
.bk-mbadge{width:calc(var(--u)*10);height:calc(var(--u)*11);background:linear-gradient(180deg,#6a6a70,#34343a);border:calc(var(--u)*.5) solid #d8b45a;border-radius:calc(var(--u)*1.6) calc(var(--u)*1.6) calc(var(--u)*5) calc(var(--u)*5);display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;font-weight:900;line-height:1}.bk-mbadge small{font-size:calc(var(--u)*2.1)}.bk-mbadge b{font-size:calc(var(--u)*5)}
.bk-shield{width:calc(var(--u)*7);height:calc(var(--u)*8);margin:calc(var(--u)*-1.6) 0;background:linear-gradient(180deg,var(--c),#0006);border:calc(var(--u)*.5) solid #e8c860;border-radius:calc(var(--u)*1.2) calc(var(--u)*1.2) calc(var(--u)*4) calc(var(--u)*4);display:flex;align-items:center;justify-content:center;font-style:normal;font-size:calc(var(--u)*4.2);color:#fff}
.bk-score{border-color:#2a8a6a;background:linear-gradient(180deg,#1f6a52,#0f3a2c);padding:calc(var(--u)*.5) calc(var(--u)*2)}
.bk-score b{font-size:calc(var(--u)*6.4)}
.bk-time{font-size:calc(var(--u)*3.4);padding:0 calc(var(--u)*2.6);background:linear-gradient(180deg,#5a5a60,#2e2e34);border-color:#d8b45a}
.bk-intro{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;background:rgba(10,6,4,.35);animation:bkfade 1.9s linear forwards}
@keyframes bkfade{0%{opacity:0}8%{opacity:1}86%{opacity:1}100%{opacity:0}}
.bk-plaque{background:linear-gradient(180deg,#3a3a40,#1c1c22);border:calc(var(--u)*.9) solid #d8a840;border-radius:calc(var(--u)*3);padding:calc(var(--u)*5) calc(var(--u)*8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2.6);min-width:calc(var(--u)*60);box-shadow:0 0 calc(var(--u)*3) #000a}
.bk-ribbon{background:linear-gradient(180deg,#2aa86a,#127a48);color:#fff;font-weight:900;font-size:calc(var(--u)*5.6);padding:calc(var(--u)*.8) calc(var(--u)*6);border-radius:calc(var(--u)*1);border:calc(var(--u)*.4) solid #e8c860;margin-top:calc(var(--u)*-9)}
.bk-mname{color:#fff;font-weight:900;font-size:calc(var(--u)*7.4);text-align:center;line-height:1.15;text-shadow:0 calc(var(--u)*.6) 0 #000}
.bk-first{background:linear-gradient(180deg,#fff,#d9d3c4);color:#2a2a2a;font-weight:900;font-size:calc(var(--u)*3.8);padding:calc(var(--u)*.7) calc(var(--u)*6);border-radius:999px;border:calc(var(--u)*.4) solid #b89040}
.bk-goalrib{background:linear-gradient(180deg,#2aa86a,#127a48);color:#fff;font-weight:900;font-size:calc(var(--u)*13);padding:calc(var(--u)*1) calc(var(--u)*10);border:calc(var(--u)*.8) solid #e8c860;border-radius:calc(var(--u)*1.6);text-shadow:0 calc(var(--u)*.8) 0 #0a4a2a;box-shadow:0 calc(var(--u)*1) calc(var(--u)*2) #0008;line-height:1.1}
.bk-hint{background:linear-gradient(180deg,#f2eee0,#d8d2bc)!important;color:#2a2418!important;border:calc(var(--u)*.4) solid #7a6a40;font-weight:900;border-radius:calc(var(--u)*3)!important}
.bk-base{position:absolute;left:max(calc(var(--u)*4),env(safe-area-inset-left));bottom:max(calc(var(--u)*5),env(safe-area-inset-bottom));width:calc(var(--u)*24);height:calc(var(--u)*24);border-radius:50%;border:calc(var(--u)*1.1) solid #d8b45a;background:radial-gradient(circle,#5a7a62,#2f4a3a);opacity:.9;pointer-events:none;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) #0007}
.bk-bknob{position:absolute;left:50%;top:50%;width:calc(var(--u)*10);height:calc(var(--u)*10);margin:calc(var(--u)*-5) 0 0 calc(var(--u)*-5);border-radius:50%;background:radial-gradient(circle at 35% 30%,#8af0b0,#1f9a64);border:calc(var(--u)*.6) solid #e8c860}
.bk-dash{background:radial-gradient(circle,#ff8a2a,#d03a08)!important;border-color:#e8c060!important}
.bk-dash:not(.ready){background:radial-gradient(circle,#6a7078,#383c42)!important}
.bk-dash .bk-dashfill{background:conic-gradient(#35e0b0 var(--f),rgba(0,0,0,.25) 0);-webkit-mask:radial-gradient(circle,transparent 66%,#000 68%);mask:radial-gradient(circle,transparent 66%,#000 68%)}
.bk-dash span{display:none}.bk-dash small{font-size:calc(var(--u)*5.4)!important;text-shadow:0 calc(var(--u)*.4) 0 #0007}
.bk-bigscore{font-size:calc(var(--u)*12);font-weight:900;color:#fff;direction:ltr}
.bk-stars{font-size:calc(var(--u)*11)}.bk-stars span{display:inline-block;animation:bkpop2 .5s both}.bk-stars .off{filter:grayscale(1);opacity:.3}
@keyframes bkpop2{from{transform:scale(0) rotate(-90deg)}to{transform:scale(1)}}
.bk-segs{display:flex;gap:calc(var(--u)*1.4);width:100%}.bk-seg{flex:1;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4);color:#fff;border:calc(var(--u)*.4) solid #fff;border-radius:999px;padding:calc(var(--u)*1.2);cursor:pointer;background:rgba(0,0,0,.3);min-height:calc(var(--u)*10)}.bk-seg.on{background:linear-gradient(180deg,#ffd23a,#e0951a);color:#4a2a00}
.bk-items{display:grid;grid-template-columns:repeat(4,1fr);gap:calc(var(--u)*1.4);width:100%}
.bk-item{font-family:inherit;font-weight:900;color:#fff;border:calc(var(--u)*.4) solid rgba(255,255,255,.6);border-radius:calc(var(--u)*3);padding:calc(var(--u)*1) calc(var(--u)*.4);cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.3);background:rgba(0,0,0,.28);font-size:calc(var(--u)*2.7);min-height:calc(var(--u)*17)}
.bk-item.on{border-color:#ffd23a;background:rgba(255,210,58,.25)}.bk-item small{font-size:calc(var(--u)*2.6);color:#ffe04a}
.bk-sw{width:calc(var(--u)*7.5);height:calc(var(--u)*7.5);border-radius:50%;border:calc(var(--u)*.5) solid #fff;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5)}.bk-sw.hm{background:rgba(255,255,255,.15)}
@media (orientation:landscape){.bk-items{grid-template-columns:repeat(8,1fr)}.bk-card.wide{width:calc(var(--u)*150)}}
`,tl={start(s,t,e){let n=new $o(s,t||{},e);return tl.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.BarrelKnights=tl;var L0=tl;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
