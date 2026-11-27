(()=>{var yo="170";var $l=0,Yo=1,th=2;var Zc=1,eh=2,cn=3,En=0,we=1,hn=2,bn=0,mi=1,Ns=2,jo=3,Jo=4,nh=5,kn=100,ih=101,sh=102,rh=103,ah=104,oh=200,ch=201,lh=202,hh=203,na=204,ia=205,uh=206,dh=207,fh=208,ph=209,gh=210,mh=211,Ah=212,xh=213,yh=214,sa=0,ra=1,aa=2,Ci=3,oa=4,ca=5,la=6,ha=7,Co=0,Ch=1,vh=2,Sn=0,_h=1,Ih=2,Mh=3,vo=4,bh=5,Sh=6,Eh=7;var Qc=300,vi=301,_i=302,ua=303,da=304,ur=306,fa=1e3,Gn=1001,pa=1002,He=1003,wh=1004;var os=1005;var Ke=1006,br=1007;var Wn=1008;var pn=1009,$c=1010,tl=1011,Yi=1012,_o=1013,Xn=1014,un=1015,Zi=1016,Io=1017,Mo=1018,Ii=1020,el=35902,nl=1021,il=1022,qe=1023,sl=1024,rl=1025,Ai=1026,Mi=1027,al=1028,bo=1029,ol=1030,So=1031;var Eo=1033,Rs=33776,Ps=33777,Ls=33778,Us=33779,ga=35840,ma=35841,Aa=35842,xa=35843,ya=36196,Ca=37492,va=37496,_a=37808,Ia=37809,Ma=37810,ba=37811,Sa=37812,Ea=37813,wa=37814,Ta=37815,Va=37816,Ra=37817,Pa=37818,La=37819,Ua=37820,Da=37821,Ds=36492,Na=36494,Fa=36495,cl=36283,za=36284,Ba=36285,Oa=36286;var Fs=2300,ka=2301,Sr=2302,Ko=2400,Zo=2401,Qo=2402;var Th=3200,Vh=3201;var ll=0,Rh=1,Mn="",Se="srgb",Ri="srgb-linear",dr="linear",Zt="srgb";var ei=7680;var $o=519,Ph=512,Lh=513,Uh=514,hl=515,Dh=516,Nh=517,Fh=518,zh=519,tc=35044;var ec="300 es",dn=2e3,zs=2001,wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Er=Math.PI/180,qa=180/Math.PI;function Qi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[i&255]+xe[i>>8&255]+xe[i>>16&255]+xe[i>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function Ee(i,t,e){return Math.max(t,Math.min(e,i))}function Bh(i,t){return(i%t+t)%t}function wr(i,t,e){return(1-e)*i+e*t}function Bi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Wt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],p=n[5],m=n[8],A=s[0],g=s[3],u=s[6],M=s[1],b=s[4],v=s[7],U=s[2],S=s[5],E=s[8];return r[0]=a*A+o*M+c*U,r[3]=a*g+o*b+c*S,r[6]=a*u+o*v+c*E,r[1]=l*A+h*M+d*U,r[4]=l*g+h*b+d*S,r[7]=l*u+h*v+d*E,r[2]=f*A+p*M+m*U,r[5]=f*g+p*b+m*S,r[8]=f*u+p*v+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,f=o*c-h*r,p=l*r-a*c,m=e*d+n*f+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=d*A,t[1]=(s*l-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=f*A,t[4]=(h*e-s*c)*A,t[5]=(s*r-o*e)*A,t[6]=p*A,t[7]=(n*c-l*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Tr.makeScale(t,e)),this}rotate(t){return this.premultiply(Tr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Tr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Tr=new Rt;function ul(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Oh(){let i=Bs("canvas");return i.style.display="block",i}var nc={};function Gi(i){i in nc||(nc[i]=!0,console.warn(i))}function kh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function qh(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hh(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Gt={enabled:!0,workingColorSpace:Ri,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Zt&&(i.r=fn(i.r),i.g=fn(i.g),i.b=fn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Zt&&(i.r=xi(i.r),i.g=xi(i.g),i.b=xi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mn?dr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ic=[.64,.33,.3,.6,.15,.06],sc=[.2126,.7152,.0722],rc=[.3127,.329],ac=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oc=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Gt.define({[Ri]:{primaries:ic,whitePoint:rc,transfer:dr,toXYZ:ac,fromXYZ:oc,luminanceCoefficients:sc,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:ic,whitePoint:rc,transfer:Zt,toXYZ:ac,fromXYZ:oc,luminanceCoefficients:sc,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}});var ni,Ha=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ni===void 0&&(ni=Bs("canvas")),ni.width=t.width,ni.height=t.height;let n=ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Bs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fn(e[n]/255)*255):e[n]=fn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gh=0,Os=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Qi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vr(s[a].image)):r.push(Vr(s[a]))}else r=Vr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ha.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wh=0,Le=class i extends wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Gn,s=Gn,r=Ke,a=Wn,o=qe,c=pn,l=i.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Qi(),this.name="",this.source=new Os(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fa:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fa:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Qc;Le.DEFAULT_ANISOTROPY=1;var le=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],m=c[9],A=c[2],g=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-A)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+A)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,v=(p+1)/2,U=(u+1)/2,S=(h+f)/4,E=(d+A)/4,L=(m+g)/4;return b>v&&b>U?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=E/n):v>U?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=L/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=E/r,s=L/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(d-A)*(d-A)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(d-A)/M,this.z=(f-h)/M,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ga=class extends wn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Le(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Os(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends Ga{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ks=class extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wa=class extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],f=r[a+0],p=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=m,t[e+3]=A;return}if(d!==A||c!==f||l!==p||h!==m){let g=1-o,u=c*f+l*p+h*m+d*A,M=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){let U=Math.sqrt(b),S=Math.atan2(U,u*M);g=Math.sin(g*S)/U,o=Math.sin(o*S)/U}let v=o*M;if(c=c*g+f*v,l=l*g+p*v,h=h*g+m*v,d=d*g+A*v,g===1-o){let U=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=U,l*=U,h*=U,d*=U}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],f=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*d+c*p-l*f,t[e+1]=c*m+h*f+l*d-o*p,t[e+2]=l*m+h*p+o*f-c*d,t[e+3]=h*m-o*d-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),f=c(n/2),p=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d-f*p*m;break;case"YXZ":this._x=f*h*d+l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d+f*p*m;break;case"ZXY":this._x=f*h*d-l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d-f*p*m;break;case"ZYX":this._x=f*h*d-l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d+f*p*m;break;case"YZX":this._x=f*h*d+l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d-f*p*m;break;case"XZY":this._x=f*h*d-l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rr.copy(this).projectOnVector(t),this.sub(Rr)}reflect(t){return this.sub(Rr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rr=new D,cc=new Tn,Yn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Be.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Be.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Be.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Be):Be.fromBufferAttribute(r,a),Be.applyMatrix4(t.matrixWorld),this.expandByPoint(Be);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cs.copy(n.boundingBox)),cs.applyMatrix4(t.matrixWorld),this.union(cs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Be),Be.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oi),ls.subVectors(this.max,Oi),ii.subVectors(t.a,Oi),si.subVectors(t.b,Oi),ri.subVectors(t.c,Oi),xn.subVectors(si,ii),yn.subVectors(ri,si),Un.subVectors(ii,ri);let e=[0,-xn.z,xn.y,0,-yn.z,yn.y,0,-Un.z,Un.y,xn.z,0,-xn.x,yn.z,0,-yn.x,Un.z,0,-Un.x,-xn.y,xn.x,0,-yn.y,yn.x,0,-Un.y,Un.x,0];return!Pr(e,ii,si,ri,ls)||(e=[1,0,0,0,1,0,0,0,1],!Pr(e,ii,si,ri,ls))?!1:(hs.crossVectors(xn,yn),e=[hs.x,hs.y,hs.z],Pr(e,ii,si,ri,ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Be).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Be).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},nn=[new D,new D,new D,new D,new D,new D,new D,new D],Be=new D,cs=new Yn,ii=new D,si=new D,ri=new D,xn=new D,yn=new D,Un=new D,Oi=new D,ls=new D,hs=new D,Dn=new D;function Pr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Dn.fromArray(i,r);let o=s.x*Math.abs(Dn.x)+s.y*Math.abs(Dn.y)+s.z*Math.abs(Dn.z),c=t.dot(Dn),l=e.dot(Dn),h=n.dot(Dn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Xh=new Yn,ki=new D,Lr=new D,bi=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Xh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ki.subVectors(t,this.center);let e=ki.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ki,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ki.copy(t.center).add(Lr)),this.expandByPoint(ki.copy(t.center).sub(Lr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},sn=new D,Ur=new D,us=new D,Cn=new D,Dr=new D,ds=new D,Nr=new D,qs=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ur.copy(t).add(e).multiplyScalar(.5),us.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub(Ur);let r=t.distanceTo(e)*.5,a=-this.direction.dot(us),o=Cn.dot(this.direction),c=-Cn.dot(us),l=Cn.lengthSq(),h=Math.abs(1-a*a),d,f,p,m;if(h>0)if(d=a*c-o,f=a*o-c,m=r*h,d>=0)if(f>=-m)if(f<=m){let A=1/h;d*=A,f*=A,p=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f<=-m?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l):f<=m?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ur).addScaledVector(us,f),p}intersectSphere(t,e){sn.subVectors(t.center,this.origin);let n=sn.dot(this.direction),s=sn.dot(sn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,n,s,r){Dr.subVectors(e,t),ds.subVectors(n,t),Nr.crossVectors(Dr,ds);let a=this.direction.dot(Nr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,t);let c=o*this.direction.dot(ds.crossVectors(Cn,ds));if(c<0)return null;let l=o*this.direction.dot(Dr.cross(Cn));if(l<0||c+l>a)return null;let h=-o*Cn.dot(Nr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},he=class i{constructor(t,e,n,s,r,a,o,c,l,h,d,f,p,m,A,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,f,p,m,A,g)}set(t,e,n,s,r,a,o,c,l,h,d,f,p,m,A,g){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=m,u[11]=A,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ai.setFromMatrixColumn(t,0).length(),r=1/ai.setFromMatrixColumn(t,1).length(),a=1/ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*h,p=a*d,m=o*h,A=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+m*l,e[5]=f-A*l,e[9]=-o*c,e[2]=A-f*l,e[6]=m+p*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,p=c*d,m=l*h,A=l*d;e[0]=f+A*o,e[4]=m*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=A+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,p=c*d,m=l*h,A=l*d;e[0]=f-A*o,e[4]=-a*d,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=A-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,p=a*d,m=o*h,A=o*d;e[0]=c*h,e[4]=m*l-p,e[8]=f*l+A,e[1]=c*d,e[5]=A*l+f,e[9]=p*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,p=a*l,m=o*c,A=o*l;e[0]=c*h,e[4]=A-f*d,e[8]=m*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*d+m,e[10]=f-A*d}else if(t.order==="XZY"){let f=a*c,p=a*l,m=o*c,A=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+A,e[5]=a*h,e[9]=p*d-m,e[2]=m*d-p,e[6]=o*h,e[10]=A*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yh,t,jh)}lookAt(t,e,n){let s=this.elements;return Re.subVectors(t,e),Re.lengthSq()===0&&(Re.z=1),Re.normalize(),vn.crossVectors(n,Re),vn.lengthSq()===0&&(Math.abs(n.z)===1?Re.x+=1e-4:Re.z+=1e-4,Re.normalize(),vn.crossVectors(n,Re)),vn.normalize(),fs.crossVectors(Re,vn),s[0]=vn.x,s[4]=fs.x,s[8]=Re.x,s[1]=vn.y,s[5]=fs.y,s[9]=Re.y,s[2]=vn.z,s[6]=fs.z,s[10]=Re.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],p=n[13],m=n[2],A=n[6],g=n[10],u=n[14],M=n[3],b=n[7],v=n[11],U=n[15],S=s[0],E=s[4],L=s[8],_=s[12],C=s[1],w=s[5],O=s[9],B=s[13],H=s[2],J=s[6],G=s[10],$=s[14],q=s[3],it=s[7],lt=s[11],vt=s[15];return r[0]=a*S+o*C+c*H+l*q,r[4]=a*E+o*w+c*J+l*it,r[8]=a*L+o*O+c*G+l*lt,r[12]=a*_+o*B+c*$+l*vt,r[1]=h*S+d*C+f*H+p*q,r[5]=h*E+d*w+f*J+p*it,r[9]=h*L+d*O+f*G+p*lt,r[13]=h*_+d*B+f*$+p*vt,r[2]=m*S+A*C+g*H+u*q,r[6]=m*E+A*w+g*J+u*it,r[10]=m*L+A*O+g*G+u*lt,r[14]=m*_+A*B+g*$+u*vt,r[3]=M*S+b*C+v*H+U*q,r[7]=M*E+b*w+v*J+U*it,r[11]=M*L+b*O+v*G+U*lt,r[15]=M*_+b*B+v*$+U*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],p=t[14],m=t[3],A=t[7],g=t[11],u=t[15];return m*(+r*c*d-s*l*d-r*o*f+n*l*f+s*o*p-n*c*p)+A*(+e*c*p-e*l*f+r*a*f-s*a*p+s*l*h-r*c*h)+g*(+e*l*d-e*o*p-r*a*d+n*a*p+r*o*h-n*l*h)+u*(-s*o*h-e*c*d+e*o*f+s*a*d-n*a*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],p=t[11],m=t[12],A=t[13],g=t[14],u=t[15],M=d*g*l-A*f*l+A*c*p-o*g*p-d*c*u+o*f*u,b=m*f*l-h*g*l-m*c*p+a*g*p+h*c*u-a*f*u,v=h*A*l-m*d*l+m*o*p-a*A*p-h*o*u+a*d*u,U=m*d*c-h*A*c-m*o*f+a*A*f+h*o*g-a*d*g,S=e*M+n*b+s*v+r*U;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return t[0]=M*E,t[1]=(A*f*r-d*g*r-A*s*p+n*g*p+d*s*u-n*f*u)*E,t[2]=(o*g*r-A*c*r+A*s*l-n*g*l-o*s*u+n*c*u)*E,t[3]=(d*c*r-o*f*r-d*s*l+n*f*l+o*s*p-n*c*p)*E,t[4]=b*E,t[5]=(h*g*r-m*f*r+m*s*p-e*g*p-h*s*u+e*f*u)*E,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*u-e*c*u)*E,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*p+e*c*p)*E,t[8]=v*E,t[9]=(m*d*r-h*A*r-m*n*p+e*A*p+h*n*u-e*d*u)*E,t[10]=(a*A*r-m*o*r+m*n*l-e*A*l-a*n*u+e*o*u)*E,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*p-e*o*p)*E,t[12]=U*E,t[13]=(h*A*s-m*d*s+m*n*f-e*A*f-h*n*g+e*d*g)*E,t[14]=(m*o*s-a*A*s-m*n*c+e*A*c+a*n*g-e*o*g)*E,t[15]=(a*d*s-h*o*s+h*n*c-e*d*c-a*n*f+e*o*f)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,f=r*l,p=r*h,m=r*d,A=a*h,g=a*d,u=o*d,M=c*l,b=c*h,v=c*d,U=n.x,S=n.y,E=n.z;return s[0]=(1-(A+u))*U,s[1]=(p+v)*U,s[2]=(m-b)*U,s[3]=0,s[4]=(p-v)*S,s[5]=(1-(f+u))*S,s[6]=(g+M)*S,s[7]=0,s[8]=(m+b)*E,s[9]=(g-M)*E,s[10]=(1-(f+A))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ai.set(s[0],s[1],s[2]).length(),a=ai.set(s[4],s[5],s[6]).length(),o=ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Oe.copy(this);let l=1/r,h=1/a,d=1/o;return Oe.elements[0]*=l,Oe.elements[1]*=l,Oe.elements[2]*=l,Oe.elements[4]*=h,Oe.elements[5]*=h,Oe.elements[6]*=h,Oe.elements[8]*=d,Oe.elements[9]*=d,Oe.elements[10]*=d,e.setFromRotationMatrix(Oe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=dn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),p,m;if(o===dn)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===zs)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=dn){let c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(a-r),f=(e+t)*l,p=(n+s)*h,m,A;if(o===dn)m=(a+r)*d,A=-2*d;else if(o===zs)m=r*d,A=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=A,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ai=new D,Oe=new he,Yh=new D(0,0,0),jh=new D(1,1,1),vn=new D,fs=new D,Re=new D,lc=new he,hc=new Tn,Ze=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hc.setFromEuler(this),this.setFromQuaternion(hc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ze.DEFAULT_ORDER="XYZ";var Hs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Jh=0,uc=new D,oi=new Tn,rn=new he,ps=new D,qi=new D,Kh=new D,Zh=new Tn,dc=new D(1,0,0),fc=new D(0,1,0),pc=new D(0,0,1),gc={type:"added"},Qh={type:"removed"},ci={type:"childadded",child:null},Fr={type:"childremoved",child:null},Ce=class i extends wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new Ze,n=new Tn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Rt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.multiply(oi),this}rotateOnWorldAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.premultiply(oi),this}rotateX(t){return this.rotateOnAxis(dc,t)}rotateY(t){return this.rotateOnAxis(fc,t)}rotateZ(t){return this.rotateOnAxis(pc,t)}translateOnAxis(t,e){return uc.copy(t).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dc,t)}translateY(t){return this.translateOnAxis(fc,t)}translateZ(t){return this.translateOnAxis(pc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ps.copy(t):ps.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(qi,ps,this.up):rn.lookAt(ps,qi,this.up),this.quaternion.setFromRotationMatrix(rn),s&&(rn.extractRotation(s.matrixWorld),oi.setFromRotationMatrix(rn),this.quaternion.premultiply(oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gc),ci.child=t,this.dispatchEvent(ci),ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qh),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gc),ci.child=t,this.dispatchEvent(ci),ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,t,Kh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,Zh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ce.DEFAULT_UP=new D(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ke=new D,an=new D,zr=new D,on=new D,li=new D,hi=new D,mc=new D,Br=new D,Or=new D,kr=new D,qr=new le,Hr=new le,Gr=new le,qn=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ke.subVectors(t,e),s.cross(ke);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ke.subVectors(s,e),an.subVectors(n,e),zr.subVectors(t,e);let a=ke.dot(ke),o=ke.dot(an),c=ke.dot(zr),l=an.dot(an),h=an.dot(zr),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(l*c-o*h)*f,m=(a*h-o*c)*f;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,on)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,on.x),c.addScaledVector(a,on.y),c.addScaledVector(o,on.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return qr.setScalar(0),Hr.setScalar(0),Gr.setScalar(0),qr.fromBufferAttribute(t,e),Hr.fromBufferAttribute(t,n),Gr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(qr,r.x),a.addScaledVector(Hr,r.y),a.addScaledVector(Gr,r.z),a}static isFrontFacing(t,e,n,s){return ke.subVectors(n,e),an.subVectors(t,e),ke.cross(an).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ke.subVectors(this.c,this.b),an.subVectors(this.a,this.b),ke.cross(an).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;li.subVectors(s,n),hi.subVectors(r,n),Br.subVectors(t,n);let c=li.dot(Br),l=hi.dot(Br);if(c<=0&&l<=0)return e.copy(n);Or.subVectors(t,s);let h=li.dot(Or),d=hi.dot(Or);if(h>=0&&d<=h)return e.copy(s);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(li,a);kr.subVectors(t,r);let p=li.dot(kr),m=hi.dot(kr);if(m>=0&&p<=m)return e.copy(r);let A=p*l-c*m;if(A<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(hi,o);let g=h*m-p*d;if(g<=0&&d-h>=0&&p-m>=0)return mc.subVectors(r,s),o=(d-h)/(d-h+(p-m)),e.copy(s).addScaledVector(mc,o);let u=1/(g+A+f);return a=A*u,o=f*u,e.copy(n).addScaledVector(li,a).addScaledVector(hi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},gs={h:0,s:0,l:0};function Wr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Gt.workingColorSpace){if(t=Bh(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Wr(a,r,t+1/3),this.g=Wr(a,r,t),this.b=Wr(a,r,t-1/3)}return Gt.toWorkingColorSpace(this,s),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){let n=dl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fn(t.r),this.g=fn(t.g),this.b=fn(t.b),this}copyLinearToSRGB(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return Gt.fromWorkingColorSpace(ye.copy(this),t),Math.round(Ee(ye.r*255,0,255))*65536+Math.round(Ee(ye.g*255,0,255))*256+Math.round(Ee(ye.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.fromWorkingColorSpace(ye.copy(this),e);let n=ye.r,s=ye.g,r=ye.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=Se){Gt.fromWorkingColorSpace(ye.copy(this),t);let e=ye.r,n=ye.g,s=ye.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_n),this.setHSL(_n.h+t,_n.s+e,_n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_n),t.getHSL(gs);let n=wr(_n.h,gs.h,e),s=wr(_n.s,gs.s,e),r=wr(_n.l,gs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ye=new Dt;Dt.NAMES=dl;var $h=0,Vn=class extends wn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Qi(),this.name="",this.blending=mi,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=ia,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==na&&(n.blendSrc=this.blendSrc),this.blendDst!==ia&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$o&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Si=class extends Vn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var de=new D,ms=new Wt,Te=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tc,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ms.fromBufferAttribute(this,e),ms.applyMatrix3(t),this.setXY(e,ms.x,ms.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tc&&(t.usage=this.usage),t}};var Gs=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ws=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},tu=0,Ne=new he,Xr=new Ce,ui=new D,Pe=new Yn,Hi=new Yn,ge=new D,Ie=class i extends wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ul(t)?Ws:Gs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Rt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ne.makeRotationFromQuaternion(t),this.applyMatrix4(Ne),this}rotateX(t){return Ne.makeRotationX(t),this.applyMatrix4(Ne),this}rotateY(t){return Ne.makeRotationY(t),this.applyMatrix4(Ne),this}rotateZ(t){return Ne.makeRotationZ(t),this.applyMatrix4(Ne),this}translate(t,e,n){return Ne.makeTranslation(t,e,n),this.applyMatrix4(Ne),this}scale(t,e,n){return Ne.makeScale(t,e,n),this.applyMatrix4(Ne),this}lookAt(t){return Xr.lookAt(t),Xr.updateMatrix(),this.applyMatrix4(Xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Pe.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Pe.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Pe.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Pe.min),this.boundingBox.expandByPoint(Pe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Pe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Hi.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Pe.min,Hi.min),Pe.expandByPoint(ge),ge.addVectors(Pe.max,Hi.max),Pe.expandByPoint(ge)):(Pe.expandByPoint(Hi.min),Pe.expandByPoint(Hi.max))}Pe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ge));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ge.fromBufferAttribute(o,l),c&&(ui.fromBufferAttribute(t,l),ge.add(ui)),s=Math.max(s,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new D,c[L]=new D;let l=new D,h=new D,d=new D,f=new Wt,p=new Wt,m=new Wt,A=new D,g=new D;function u(L,_,C){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,_),d.fromBufferAttribute(n,C),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,_),m.fromBufferAttribute(r,C),h.sub(l),d.sub(l),p.sub(f),m.sub(f);let w=1/(p.x*m.y-m.x*p.y);isFinite(w)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(w),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(w),o[L].add(A),o[_].add(A),o[C].add(A),c[L].add(g),c[_].add(g),c[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,_=M.length;L<_;++L){let C=M[L],w=C.start,O=C.count;for(let B=w,H=w+O;B<H;B+=3)u(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let b=new D,v=new D,U=new D,S=new D;function E(L){U.fromBufferAttribute(s,L),S.copy(U);let _=o[L];b.copy(_),b.sub(U.multiplyScalar(U.dot(_))).normalize(),v.crossVectors(S,_);let w=v.dot(c[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,w)}for(let L=0,_=M.length;L<_;++L){let C=M[L],w=C.start,O=C.count;for(let B=w,H=w+O;B<H;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,d=new D;if(t)for(let f=0,p=t.count;f<p;f+=3){let m=t.getX(f+0),A=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,A),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h),p=0,m=0;for(let A=0,g=c.length;A<g;A++){o.isInterleavedBufferAttribute?p=c[A]*o.data.stride+o.offset:p=c[A]*h;for(let u=0;u<h;u++)f[m++]=l[p++]}return new Te(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ac=new he,Nn=new qs,As=new bi,xc=new D,xs=new D,ys=new D,Cs=new D,Yr=new D,vs=new D,yc=new D,_s=new D,$t=class extends Ce{constructor(t=new Ie,e=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){vs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Yr.fromBufferAttribute(d,t),a?vs.addScaledVector(Yr,h):vs.addScaledVector(Yr.sub(e),h))}e.add(vs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(r),Nn.copy(t.ray).recast(t.near),!(As.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(As,xc)===null||Nn.origin.distanceToSquared(xc)>(t.far-t.near)**2))&&(Ac.copy(r).invert(),Nn.copy(t.ray).applyMatrix4(Ac),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=f.length;m<A;m++){let g=f[m],u=a[g.materialIndex],M=Math.max(g.start,p.start),b=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let v=M,U=b;v<U;v+=3){let S=o.getX(v),E=o.getX(v+1),L=o.getX(v+2);s=Is(this,u,t,n,l,h,d,S,E,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),A=Math.min(o.count,p.start+p.count);for(let g=m,u=A;g<u;g+=3){let M=o.getX(g),b=o.getX(g+1),v=o.getX(g+2);s=Is(this,a,t,n,l,h,d,M,b,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,A=f.length;m<A;m++){let g=f[m],u=a[g.materialIndex],M=Math.max(g.start,p.start),b=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let v=M,U=b;v<U;v+=3){let S=v,E=v+1,L=v+2;s=Is(this,u,t,n,l,h,d,S,E,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),A=Math.min(c.count,p.start+p.count);for(let g=m,u=A;g<u;g+=3){let M=g,b=g+1,v=g+2;s=Is(this,a,t,n,l,h,d,M,b,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function eu(i,t,e,n,s,r,a,o){let c;if(t.side===we?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===En,o),c===null)return null;_s.copy(o),_s.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(_s);return l<e.near||l>e.far?null:{distance:l,point:_s.clone(),object:i}}function Is(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,xs),i.getVertexPosition(c,ys),i.getVertexPosition(l,Cs);let h=eu(i,t,e,n,xs,ys,Cs,yc);if(h){let d=new D;qn.getBarycoord(yc,xs,ys,Cs,d),s&&(h.uv=qn.getInterpolatedAttribute(s,o,c,l,d,new Wt)),r&&(h.uv1=qn.getInterpolatedAttribute(r,o,c,l,d,new Wt)),a&&(h.normal=qn.getInterpolatedAttribute(a,o,c,l,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new D,materialIndex:0};qn.getNormal(xs,ys,Cs,f.normal),h.face=f,h.barycoord=d}return h}var jn=class i extends Ie{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],f=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2));function m(A,g,u,M,b,v,U,S,E,L,_){let C=v/E,w=U/L,O=v/2,B=U/2,H=S/2,J=E+1,G=L+1,$=0,q=0,it=new D;for(let lt=0;lt<G;lt++){let vt=lt*w-B;for(let Nt=0;Nt<J;Nt++){let Qt=Nt*C-O;it[A]=Qt*M,it[g]=vt*b,it[u]=H,l.push(it.x,it.y,it.z),it[A]=0,it[g]=0,it[u]=S>0?1:-1,h.push(it.x,it.y,it.z),d.push(Nt/E),d.push(1-lt/L),$+=1}}for(let lt=0;lt<L;lt++)for(let vt=0;vt<E;vt++){let Nt=f+vt+J*lt,Qt=f+vt+J*(lt+1),X=f+(vt+1)+J*(lt+1),tt=f+(vt+1)+J*lt;c.push(Nt,Qt,tt),c.push(Qt,X,tt),q+=6}o.addGroup(p,q,_),p+=q,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ei(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ve(i){let t={};for(let e=0;e<i.length;e++){let n=Ei(i[e]);for(let s in n)t[s]=n[s]}return t}function nu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function fl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}var iu={clone:Ei,merge:ve},su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qe=class extends Vn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=su,this.fragmentShader=ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ei(t.uniforms),this.uniformsGroups=nu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Xs=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},In=new D,Cc=new Wt,vc=new Wt,_e=class extends Xs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qa*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,Cc,vc),e.subVectors(vc,Cc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Er*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},di=-90,fi=1,Xa=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _e(di,fi,t,e);s.layers=this.layers,this.add(s);let r=new _e(di,fi,t,e);r.layers=this.layers,this.add(r);let a=new _e(di,fi,t,e);a.layers=this.layers,this.add(a);let o=new _e(di,fi,t,e);o.layers=this.layers,this.add(o);let c=new _e(di,fi,t,e);c.layers=this.layers,this.add(c);let l=new _e(di,fi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ys=class extends Le{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:vi,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ya=class extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ys(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new jn(5,5,5),r=new Qe({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:bn});r.uniforms.tEquirect.value=e;let a=new $t(s,r),o=e.minFilter;return e.minFilter===Wn&&(e.minFilter=Ke),new Xa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},jr=new D,au=new D,ou=new Rt,ln=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=jr.subVectors(n,e).cross(au.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(jr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ou.getNormalMatrix(t),s=this.coplanarPoint(jr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fn=new bi,Ms=new D,ji=class{constructor(t=new ln,e=new ln,n=new ln,s=new ln,r=new ln,a=new ln){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=dn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],f=s[7],p=s[8],m=s[9],A=s[10],g=s[11],u=s[12],M=s[13],b=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,g-p,v-u).normalize(),n[1].setComponents(c+r,f+l,g+p,v+u).normalize(),n[2].setComponents(c+a,f+h,g+m,v+M).normalize(),n[3].setComponents(c-a,f-h,g-m,v-M).normalize(),n[4].setComponents(c-o,f-d,g-A,v-b).normalize(),e===dn)n[5].setComponents(c+o,f+d,g+A,v+b).normalize();else if(e===zs)n[5].setComponents(o,d,A,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(t){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ms.x=s.normal.x>0?t.max.x:t.min.x,Ms.y=s.normal.y>0?t.max.y:t.min.y,Ms.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function pl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cu(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){let m=d[f],A=d[p];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++f,d[f]=A)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){let A=d[p];i.bufferSubData(l,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var js=class i extends Ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,f=e/c,p=[],m=[],A=[],g=[];for(let u=0;u<h;u++){let M=u*f-a;for(let b=0;b<l;b++){let v=b*d-r;m.push(v,-M,0),A.push(0,0,1),g.push(b/o),g.push(1-u/c)}}for(let u=0;u<c;u++)for(let M=0;M<o;M++){let b=M+l*u,v=M+l*(u+1),U=M+1+l*(u+1),S=M+1+l*u;p.push(b,v,S),p.push(v,U,S)}this.setIndex(p),this.setAttribute("position",new ae(m,3)),this.setAttribute("normal",new ae(A,3)),this.setAttribute("uv",new ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},lu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hu=`#ifdef USE_ALPHAHASH
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
#endif`,uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gu=`#ifdef USE_AOMAP
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
#endif`,mu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Au=`#ifdef USE_BATCHING
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
#endif`,xu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_u=`#ifdef USE_IRIDESCENCE
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
#endif`,Iu=`#ifdef USE_BUMPMAP
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
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pu=`#define PI 3.141592653589793
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
} // validated`,Lu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Uu=`vec3 transformedNormal = objectNormal;
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
#endif`,Du=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ou=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ku=`#ifdef USE_ENVMAP
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
#endif`,qu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hu=`#ifdef USE_ENVMAP
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
#endif`,Gu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
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
#endif`,Xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ju=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ju=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ku=`#ifdef USE_GRADIENTMAP
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
}`,Zu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,td=`uniform bool receiveShadow;
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
#endif`,ed=`#ifdef USE_ENVMAP
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
#endif`,nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ad=`PhysicalMaterial material;
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
#endif`,od=`struct PhysicalMaterial {
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
}`,cd=`
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
#endif`,ld=`#if defined( RE_IndirectDiffuse )
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
#endif`,hd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ud=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,md=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xd=`#if defined( USE_POINTS_UV )
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
#endif`,yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_d=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Md=`#ifdef USE_MORPHTARGETS
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
#endif`,bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ed=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rd=`#ifdef USE_NORMALMAP
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
#endif`,Pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ud=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Od=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yd=`float getShadowMask() {
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
}`,jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jd=`#ifdef USE_SKINNING
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
#endif`,Kd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zd=`#ifdef USE_SKINNING
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
#endif`,Qd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ef=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nf=`#ifdef USE_TRANSMISSION
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
#endif`,sf=`#ifdef USE_TRANSMISSION
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
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hf=`uniform sampler2D t2D;
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
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,df=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`#include <common>
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
}`,mf=`#if DEPTH_PACKING == 3200
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
}`,Af=`#define DISTANCE
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
}`,xf=`#define DISTANCE
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
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`uniform float scale;
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
}`,_f=`uniform vec3 diffuse;
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
}`,If=`#include <common>
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
}`,Mf=`uniform vec3 diffuse;
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
}`,bf=`#define LAMBERT
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
}`,Sf=`#define LAMBERT
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
}`,Ef=`#define MATCAP
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
}`,wf=`#define MATCAP
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
}`,Tf=`#define NORMAL
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
}`,Vf=`#define NORMAL
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
}`,Rf=`#define PHONG
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
}`,Pf=`#define PHONG
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
}`,Lf=`#define STANDARD
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
}`,Uf=`#define STANDARD
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
}`,Df=`#define TOON
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
}`,Nf=`#define TOON
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
}`,Ff=`uniform float size;
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
}`,zf=`uniform vec3 diffuse;
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
}`,Bf=`#include <common>
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
}`,Of=`uniform vec3 color;
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
}`,kf=`uniform float rotation;
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
}`,qf=`uniform vec3 diffuse;
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
}`,Lt={alphahash_fragment:lu,alphahash_pars_fragment:hu,alphamap_fragment:uu,alphamap_pars_fragment:du,alphatest_fragment:fu,alphatest_pars_fragment:pu,aomap_fragment:gu,aomap_pars_fragment:mu,batching_pars_vertex:Au,batching_vertex:xu,begin_vertex:yu,beginnormal_vertex:Cu,bsdfs:vu,iridescence_fragment:_u,bumpmap_pars_fragment:Iu,clipping_planes_fragment:Mu,clipping_planes_pars_fragment:bu,clipping_planes_pars_vertex:Su,clipping_planes_vertex:Eu,color_fragment:wu,color_pars_fragment:Tu,color_pars_vertex:Vu,color_vertex:Ru,common:Pu,cube_uv_reflection_fragment:Lu,defaultnormal_vertex:Uu,displacementmap_pars_vertex:Du,displacementmap_vertex:Nu,emissivemap_fragment:Fu,emissivemap_pars_fragment:zu,colorspace_fragment:Bu,colorspace_pars_fragment:Ou,envmap_fragment:ku,envmap_common_pars_fragment:qu,envmap_pars_fragment:Hu,envmap_pars_vertex:Gu,envmap_physical_pars_fragment:ed,envmap_vertex:Wu,fog_vertex:Xu,fog_pars_vertex:Yu,fog_fragment:ju,fog_pars_fragment:Ju,gradientmap_pars_fragment:Ku,lightmap_pars_fragment:Zu,lights_lambert_fragment:Qu,lights_lambert_pars_fragment:$u,lights_pars_begin:td,lights_toon_fragment:nd,lights_toon_pars_fragment:id,lights_phong_fragment:sd,lights_phong_pars_fragment:rd,lights_physical_fragment:ad,lights_physical_pars_fragment:od,lights_fragment_begin:cd,lights_fragment_maps:ld,lights_fragment_end:hd,logdepthbuf_fragment:ud,logdepthbuf_pars_fragment:dd,logdepthbuf_pars_vertex:fd,logdepthbuf_vertex:pd,map_fragment:gd,map_pars_fragment:md,map_particle_fragment:Ad,map_particle_pars_fragment:xd,metalnessmap_fragment:yd,metalnessmap_pars_fragment:Cd,morphinstance_vertex:vd,morphcolor_vertex:_d,morphnormal_vertex:Id,morphtarget_pars_vertex:Md,morphtarget_vertex:bd,normal_fragment_begin:Sd,normal_fragment_maps:Ed,normal_pars_fragment:wd,normal_pars_vertex:Td,normal_vertex:Vd,normalmap_pars_fragment:Rd,clearcoat_normal_fragment_begin:Pd,clearcoat_normal_fragment_maps:Ld,clearcoat_pars_fragment:Ud,iridescence_pars_fragment:Dd,opaque_fragment:Nd,packing:Fd,premultiplied_alpha_fragment:zd,project_vertex:Bd,dithering_fragment:Od,dithering_pars_fragment:kd,roughnessmap_fragment:qd,roughnessmap_pars_fragment:Hd,shadowmap_pars_fragment:Gd,shadowmap_pars_vertex:Wd,shadowmap_vertex:Xd,shadowmask_pars_fragment:Yd,skinbase_vertex:jd,skinning_pars_vertex:Jd,skinning_vertex:Kd,skinnormal_vertex:Zd,specularmap_fragment:Qd,specularmap_pars_fragment:$d,tonemapping_fragment:tf,tonemapping_pars_fragment:ef,transmission_fragment:nf,transmission_pars_fragment:sf,uv_pars_fragment:rf,uv_pars_vertex:af,uv_vertex:of,worldpos_vertex:cf,background_vert:lf,background_frag:hf,backgroundCube_vert:uf,backgroundCube_frag:df,cube_vert:ff,cube_frag:pf,depth_vert:gf,depth_frag:mf,distanceRGBA_vert:Af,distanceRGBA_frag:xf,equirect_vert:yf,equirect_frag:Cf,linedashed_vert:vf,linedashed_frag:_f,meshbasic_vert:If,meshbasic_frag:Mf,meshlambert_vert:bf,meshlambert_frag:Sf,meshmatcap_vert:Ef,meshmatcap_frag:wf,meshnormal_vert:Tf,meshnormal_frag:Vf,meshphong_vert:Rf,meshphong_frag:Pf,meshphysical_vert:Lf,meshphysical_frag:Uf,meshtoon_vert:Df,meshtoon_frag:Nf,points_vert:Ff,points_frag:zf,shadow_vert:Bf,shadow_frag:Of,sprite_vert:kf,sprite_frag:qf},et={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},Je={basic:{uniforms:ve([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:ve([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:ve([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:ve([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:ve([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:ve([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:ve([et.points,et.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:ve([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:ve([et.common,et.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:ve([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:ve([et.sprite,et.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:ve([et.common,et.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:ve([et.lights,et.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};Je.physical={uniforms:ve([Je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};var bs={r:0,b:0,g:0},zn=new Ze,Hf=new he;function Gf(i,t,e,n,s,r,a){let o=new Dt(0),c=r===!0?0:1,l,h,d=null,f=0,p=null;function m(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?e:t).get(b)),b}function A(M){let b=!1,v=m(M);v===null?u(o,c):v&&v.isColor&&(u(v,1),b=!0);let U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,b){let v=m(b);v&&(v.isCubeTexture||v.mapping===ur)?(h===void 0&&(h=new $t(new jn(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:Ei(Je.backgroundCube.uniforms),vertexShader:Je.backgroundCube.vertexShader,fragmentShader:Je.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),zn.copy(b.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hf.makeRotationFromEuler(zn)),h.material.toneMapped=Gt.getTransfer(v.colorSpace)!==Zt,(d!==v||f!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new $t(new js(2,2),new Qe({name:"BackgroundMaterial",uniforms:Ei(Je.background.uniforms),vertexShader:Je.background.vertexShader,fragmentShader:Je.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Gt.getTransfer(v.colorSpace)!==Zt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,f=v.version,p=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function u(M,b){M.getRGB(bs,fl(i)),n.buffers.color.setClear(bs.r,bs.g,bs.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(M,b=1){o.set(M),c=b,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,u(o,c)},render:A,addToRenderList:g}}function Wf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(C,w,O,B,H){let J=!1,G=d(B,O,w);r!==G&&(r=G,l(r.object)),J=p(C,B,O,H),J&&m(C,B,O,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,v(C,w,O,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function d(C,w,O){let B=O.wireframe===!0,H=n[C.id];H===void 0&&(H={},n[C.id]=H);let J=H[w.id];J===void 0&&(J={},H[w.id]=J);let G=J[B];return G===void 0&&(G=f(c()),J[B]=G),G}function f(C){let w=[],O=[],B=[];for(let H=0;H<e;H++)w[H]=0,O[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:B,object:C,attributes:{},index:null}}function p(C,w,O,B){let H=r.attributes,J=w.attributes,G=0,$=O.getAttributes();for(let q in $)if($[q].location>=0){let lt=H[q],vt=J[q];if(vt===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(vt=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(vt=C.instanceColor)),lt===void 0||lt.attribute!==vt||vt&&lt.data!==vt.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function m(C,w,O,B){let H={},J=w.attributes,G=0,$=O.getAttributes();for(let q in $)if($[q].location>=0){let lt=J[q];lt===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(lt=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(lt=C.instanceColor));let vt={};vt.attribute=lt,lt&&lt.data&&(vt.data=lt.data),H[q]=vt,G++}r.attributes=H,r.attributesNum=G,r.index=B}function A(){let C=r.newAttributes;for(let w=0,O=C.length;w<O;w++)C[w]=0}function g(C){u(C,0)}function u(C,w){let O=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;O[C]=1,B[C]===0&&(i.enableVertexAttribArray(C),B[C]=1),H[C]!==w&&(i.vertexAttribDivisor(C,w),H[C]=w)}function M(){let C=r.newAttributes,w=r.enabledAttributes;for(let O=0,B=w.length;O<B;O++)w[O]!==C[O]&&(i.disableVertexAttribArray(O),w[O]=0)}function b(C,w,O,B,H,J,G){G===!0?i.vertexAttribIPointer(C,w,O,H,J):i.vertexAttribPointer(C,w,O,B,H,J)}function v(C,w,O,B){A();let H=B.attributes,J=O.getAttributes(),G=w.defaultAttributeValues;for(let $ in J){let q=J[$];if(q.location>=0){let it=H[$];if(it===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(it=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(it=C.instanceColor)),it!==void 0){let lt=it.normalized,vt=it.itemSize,Nt=t.get(it);if(Nt===void 0)continue;let Qt=Nt.buffer,X=Nt.type,tt=Nt.bytesPerElement,At=X===i.INT||X===i.UNSIGNED_INT||it.gpuType===_o;if(it.isInterleavedBufferAttribute){let st=it.data,bt=st.stride,wt=it.offset;if(st.isInstancedInterleavedBuffer){for(let Ft=0;Ft<q.locationSize;Ft++)u(q.location+Ft,st.meshPerAttribute);C.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ft=0;Ft<q.locationSize;Ft++)g(q.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Ft=0;Ft<q.locationSize;Ft++)b(q.location+Ft,vt/q.locationSize,X,lt,bt*tt,(wt+vt/q.locationSize*Ft)*tt,At)}else{if(it.isInstancedBufferAttribute){for(let st=0;st<q.locationSize;st++)u(q.location+st,it.meshPerAttribute);C.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let st=0;st<q.locationSize;st++)g(q.location+st);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let st=0;st<q.locationSize;st++)b(q.location+st,vt/q.locationSize,X,lt,vt*tt,vt/q.locationSize*st*tt,At)}}else if(G!==void 0){let lt=G[$];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(q.location,lt);break;case 3:i.vertexAttrib3fv(q.location,lt);break;case 4:i.vertexAttrib4fv(q.location,lt);break;default:i.vertexAttrib1fv(q.location,lt)}}}}M()}function U(){L();for(let C in n){let w=n[C];for(let O in w){let B=w[O];for(let H in B)h(B[H].object),delete B[H];delete w[O]}delete n[C]}}function S(C){if(n[C.id]===void 0)return;let w=n[C.id];for(let O in w){let B=w[O];for(let H in B)h(B[H].object),delete B[H];delete w[O]}delete n[C.id]}function E(C){for(let w in n){let O=n[w];if(O[C.id]===void 0)continue;let B=O[C.id];for(let H in B)h(B[H].object),delete B[H];delete O[C.id]}}function L(){_(),a=!0,r!==s&&(r=s,l(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:_,dispose:U,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:A,enableAttribute:g,disableUnusedAttributes:M}}function Xf(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let m=0;m<d;m++)p+=h[m];e.update(p,n,1)}function c(l,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)a(l[m],h[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let m=0;for(let A=0;A<d;A++)m+=h[A]*f[A];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Yf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==qe&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let L=E===Zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==pn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==un&&!L)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:U,maxSamples:S}}function jf(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ln,o=new Rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){let m=d.clippingPlanes,A=d.clipIntersection,g=d.clipShadows,u=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let M=r?0:n,b=M*4,v=u.clippingState||null;c.value=v,v=h(m,f,b,p);for(let U=0;U!==b;++U)v[U]=e[U];u.clippingState=v,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,m){let A=d!==null?d.length:0,g=null;if(A!==0){if(g=c.value,m!==!0||g===null){let u=p+A*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<u)&&(g=new Float32Array(u));for(let b=0,v=p;b!==A;++b,v+=4)a.copy(d[b]).applyMatrix4(M,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,g}}function Jf(i){let t=new WeakMap;function e(a,o){return o===ua?a.mapping=vi:o===da&&(a.mapping=_i),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ua||o===da)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ya(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Js=class extends Xs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gi=4,_c=[.125,.215,.35,.446,.526,.582],Hn=20,Jr=new Js,Ic=new Dt,Kr=null,Zr=0,Qr=0,$r=!1,On=(1+Math.sqrt(5))/2,pi=1/On,Mc=[new D(-On,pi,0),new D(On,pi,0),new D(-pi,0,On),new D(pi,0,On),new D(0,On,-pi),new D(0,On,pi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Ks=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Kr=this._renderer.getRenderTarget(),Zr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Kr,Zr,Qr),this._renderer.xr.enabled=$r,t.scissorTest=!1,Ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vi||t.mapping===_i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kr=this._renderer.getRenderTarget(),Zr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Zi,format:qe,colorSpace:Ri,depthBuffer:!1},s=bc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kf(r)),this._blurMaterial=Zf(r,t,e)}return s}_compileMaterial(t){let e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,Jr)}_sceneToCubeUV(t,e,n,s){let o=new _e(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ic),h.toneMapping=Sn,h.autoClear=!1;let p=new Si({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),m=new $t(new jn,p),A=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,A=!0):(p.color.copy(Ic),A=!0);for(let u=0;u<6;u++){let M=u%3;M===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):M===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));let b=this._cubeSize;Ss(s,M*b,u>2?b:0,b,b),h.setRenderTarget(s),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===vi||t.mapping===_i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Ss(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Jr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Mc[(s-r-1)%Mc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new $t(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Hn-1),A=r/m,g=isFinite(r)?1+Math.floor(h*A):Hn;g>Hn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Hn}`);let u=[],M=0;for(let E=0;E<Hn;++E){let L=E/A,_=Math.exp(-L*L/2);u.push(_),E===0?M+=_:E<g&&(M+=2*_)}for(let E=0;E<u.length;E++)u[E]=u[E]/M;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:b}=this;f.dTheta.value=m,f.mipInt.value=b-n;let v=this._sizeLods[s],U=3*v*(s>b-gi?s-b+gi:0),S=4*(this._cubeSize-v);Ss(e,U,S,3*v,2*v),c.setRenderTarget(e),c.render(d,Jr)}};function Kf(i){let t=[],e=[],n=[],s=i,r=i-gi+1+_c.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-gi?c=_c[a-i+gi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,m=6,A=3,g=2,u=1,M=new Float32Array(A*m*p),b=new Float32Array(g*m*p),v=new Float32Array(u*m*p);for(let S=0;S<p;S++){let E=S%3*2/3-1,L=S>2?0:-1,_=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];M.set(_,A*m*S),b.set(f,g*m*S);let C=[S,S,S,S,S,S];v.set(C,u*m*S)}let U=new Ie;U.setAttribute("position",new Te(M,A)),U.setAttribute("uv",new Te(b,g)),U.setAttribute("faceIndex",new Te(v,u)),t.push(U),s>gi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bc(i,t,e){let n=new gn(i,t,e);return n.texture.mapping=ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Zf(i,t,e){let n=new Float32Array(Hn),s=new D(0,1,0);return new Qe({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wo(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Sc(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wo(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ec(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function wo(){return`

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
	`}function Qf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===ua||c===da,h=c===vi||c===_i;if(l||h){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ks(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ks(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function $f(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Gi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function tp(i,t,e,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let A=f.morphAttributes[m];for(let g=0,u=A.length;g<u;g++)t.remove(A[g])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(d){let f=d.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let m in p){let A=p[m];for(let g=0,u=A.length;g<u;g++)t.update(A[g],i.ARRAY_BUFFER)}}function l(d){let f=[],p=d.index,m=d.attributes.position,A=0;if(p!==null){let M=p.array;A=p.version;for(let b=0,v=M.length;b<v;b+=3){let U=M[b+0],S=M[b+1],E=M[b+2];f.push(U,S,S,E,E,U)}}else if(m!==void 0){let M=m.array;A=m.version;for(let b=0,v=M.length/3-1;b<v;b+=3){let U=b+0,S=b+1,E=b+2;f.push(U,S,S,E,E,U)}}else return;let g=new(ul(f)?Ws:Gs)(f,1);g.version=A;let u=r.get(d);u&&t.remove(u),r.set(d,g)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function ep(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function l(f,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,f*a,m),e.update(p,n,m))}function h(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,m);let g=0;for(let u=0;u<m;u++)g+=p[u];e.update(g,n,1)}function d(f,p,m,A){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<f.length;u++)l(f[u]/a,p[u],A[u]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,A,0,m);let u=0;for(let M=0;M<m;M++)u+=p[M]*A[M];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function np(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ip(i,t,e){let n=new WeakMap,s=new le;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let _=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],b=0;p===!0&&(b=1),m===!0&&(b=2),A===!0&&(b=3);let v=o.attributes.position.count*b,U=1;v>t.maxTextureSize&&(U=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*U*4*d),E=new ks(S,v,U,d);E.type=un,E.needsUpdate=!0;let L=b*4;for(let C=0;C<d;C++){let w=g[C],O=u[C],B=M[C],H=v*U*4*C;for(let J=0;J<w.count;J++){let G=J*L;p===!0&&(s.fromBufferAttribute(w,J),S[H+G+0]=s.x,S[H+G+1]=s.y,S[H+G+2]=s.z,S[H+G+3]=0),m===!0&&(s.fromBufferAttribute(O,J),S[H+G+4]=s.x,S[H+G+5]=s.y,S[H+G+6]=s.z,S[H+G+7]=0),A===!0&&(s.fromBufferAttribute(B,J),S[H+G+8]=s.x,S[H+G+9]=s.y,S[H+G+10]=s.z,S[H+G+11]=B.itemSize===4?s.w:1)}}f={count:d,texture:E,size:new Wt(v,U)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let A=0;A<l.length;A++)p+=l[A];let m=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function sp(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Zs=class extends Le{constructor(t,e,n,s,r,a,o,c,l,h=Ai){if(h!==Ai&&h!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ai&&(n=Xn),n===void 0&&h===Mi&&(n=Ii),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:He,this.minFilter=c!==void 0?c:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},gl=new Le,wc=new Zs(1,1),ml=new ks,Al=new Wa,xl=new Ys,Tc=[],Vc=[],Rc=new Float32Array(16),Pc=new Float32Array(9),Lc=new Float32Array(4);function Pi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Tc[s];if(r===void 0&&(r=new Float32Array(s),Tc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fr(i,t){let e=Vc[t];e===void 0&&(e=new Int32Array(t),Vc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2fv(this.addr,t),pe(e,t)}}function op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;i.uniform3fv(this.addr,t),pe(e,t)}}function cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4fv(this.addr,t),pe(e,t)}}function lp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Lc.set(n),i.uniformMatrix2fv(this.addr,!1,Lc),pe(e,n)}}function hp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Pc.set(n),i.uniformMatrix3fv(this.addr,!1,Pc),pe(e,n)}}function up(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Rc.set(n),i.uniformMatrix4fv(this.addr,!1,Rc),pe(e,n)}}function dp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2iv(this.addr,t),pe(e,t)}}function pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3iv(this.addr,t),pe(e,t)}}function gp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4iv(this.addr,t),pe(e,t)}}function mp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2uiv(this.addr,t),pe(e,t)}}function xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3uiv(this.addr,t),pe(e,t)}}function yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4uiv(this.addr,t),pe(e,t)}}function Cp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wc.compareFunction=hl,r=wc):r=gl,e.setTexture2D(t||r,s)}function vp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Al,s)}function _p(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xl,s)}function Ip(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ml,s)}function Mp(i){switch(i){case 5126:return rp;case 35664:return ap;case 35665:return op;case 35666:return cp;case 35674:return lp;case 35675:return hp;case 35676:return up;case 5124:case 35670:return dp;case 35667:case 35671:return fp;case 35668:case 35672:return pp;case 35669:case 35673:return gp;case 5125:return mp;case 36294:return Ap;case 36295:return xp;case 36296:return yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return vp;case 35680:case 36300:case 36308:case 36293:return _p;case 36289:case 36303:case 36311:case 36292:return Ip}}function bp(i,t){i.uniform1fv(this.addr,t)}function Sp(i,t){let e=Pi(t,this.size,2);i.uniform2fv(this.addr,e)}function Ep(i,t){let e=Pi(t,this.size,3);i.uniform3fv(this.addr,e)}function wp(i,t){let e=Pi(t,this.size,4);i.uniform4fv(this.addr,e)}function Tp(i,t){let e=Pi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Vp(i,t){let e=Pi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Rp(i,t){let e=Pi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Pp(i,t){i.uniform1iv(this.addr,t)}function Lp(i,t){i.uniform2iv(this.addr,t)}function Up(i,t){i.uniform3iv(this.addr,t)}function Dp(i,t){i.uniform4iv(this.addr,t)}function Np(i,t){i.uniform1uiv(this.addr,t)}function Fp(i,t){i.uniform2uiv(this.addr,t)}function zp(i,t){i.uniform3uiv(this.addr,t)}function Bp(i,t){i.uniform4uiv(this.addr,t)}function Op(i,t,e){let n=this.cache,s=t.length,r=fr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||gl,r[a])}function kp(i,t,e){let n=this.cache,s=t.length,r=fr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Al,r[a])}function qp(i,t,e){let n=this.cache,s=t.length,r=fr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||xl,r[a])}function Hp(i,t,e){let n=this.cache,s=t.length,r=fr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ml,r[a])}function Gp(i){switch(i){case 5126:return bp;case 35664:return Sp;case 35665:return Ep;case 35666:return wp;case 35674:return Tp;case 35675:return Vp;case 35676:return Rp;case 5124:case 35670:return Pp;case 35667:case 35671:return Lp;case 35668:case 35672:return Up;case 35669:case 35673:return Dp;case 5125:return Np;case 36294:return Fp;case 36295:return zp;case 36296:return Bp;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Hp}}var ja=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mp(e.type)}},Ja=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gp(e.type)}},Ka=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ta=/(\w+)(\])?(\[|\.)?/g;function Uc(i,t){i.seq.push(t),i.map[t.id]=t}function Wp(i,t,e){let n=i.name,s=n.length;for(ta.lastIndex=0;;){let r=ta.exec(n),a=ta.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Uc(e,l===void 0?new ja(o,i,t):new Ja(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Ka(o),Uc(e,d)),e=d}}}var yi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Wp(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Dc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Xp=37297,Yp=0;function jp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Nc=new Rt;function Jp(i){Gt._getMatrix(Nc,Gt.workingColorSpace,i);let t=`mat3( ${Nc.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(i)){case dr:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+jp(i.getShaderSource(t),a)}else return s}function Kp(i,t){let e=Jp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Zp(i,t){let e;switch(t){case _h:e="Linear";break;case Ih:e="Reinhard";break;case Mh:e="Cineon";break;case vo:e="ACESFilmic";break;case Sh:e="AgX";break;case Eh:e="Neutral";break;case bh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Es=new D;function Qp(){Gt.getLuminanceCoefficients(Es);let i=Es.x.toFixed(4),t=Es.y.toFixed(4),e=Es.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $p(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wi).join(`
`)}function tg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function eg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Wi(i){return i!==""}function zc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function Za(i){return i.replace(ng,sg)}var ig=new Map;function sg(i,t){let e=Lt[t];if(e===void 0){let n=ig.get(t);if(n!==void 0)e=Lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Za(e)}var rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(i){return i.replace(rg,ag)}function ag(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function og(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===eh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cn&&(t="SHADOWMAP_TYPE_VSM"),t}function cg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vi:case _i:t="ENVMAP_TYPE_CUBE";break;case ur:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _i:t="ENVMAP_MODE_REFRACTION";break}return t}function hg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Co:t="ENVMAP_BLENDING_MULTIPLY";break;case Ch:t="ENVMAP_BLENDING_MIX";break;case vh:t="ENVMAP_BLENDING_ADD";break}return t}function ug(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function dg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=og(e),l=cg(e),h=lg(e),d=hg(e),f=ug(e),p=$p(e),m=tg(r),A=s.createProgram(),g,u,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Wi).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Wi).join(`
`),u.length>0&&(u+=`
`)):(g=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),u=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Lt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?Zp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,Kp("linearToOutputTexel",e.outputColorSpace),Qp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wi).join(`
`)),a=Za(a),a=zc(a,e),a=Bc(a,e),o=Za(o),o=zc(o,e),o=Bc(o,e),a=Oc(a),o=Oc(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",e.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let b=M+g+a,v=M+u+o,U=Dc(s,s.VERTEX_SHADER,b),S=Dc(s,s.FRAGMENT_SHADER,v);s.attachShader(A,U),s.attachShader(A,S),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function E(w){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(A).trim(),B=s.getShaderInfoLog(U).trim(),H=s.getShaderInfoLog(S).trim(),J=!0,G=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,U,S);else{let $=Fc(s,U,"vertex"),q=Fc(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+$+`
`+q)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||H==="")&&(G=!1);G&&(w.diagnostics={runnable:J,programLog:O,vertexShader:{log:B,prefix:g},fragmentShader:{log:H,prefix:u}})}s.deleteShader(U),s.deleteShader(S),L=new yi(s,A),_=eg(s,A)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let _;this.getAttributes=function(){return _===void 0&&E(this),_};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(A,Xp)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yp++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=U,this.fragmentShader=S,this}var fg=0,Qa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new $a(t),e.set(t,n)),n}},$a=class{constructor(t){this.id=fg++,this.code=t,this.usedTimes=0}};function pg(i,t,e,n,s,r,a){let o=new Hs,c=new Qa,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,C,w,O,B){let H=O.fog,J=B.geometry,G=_.isMeshStandardMaterial?O.environment:null,$=(_.isMeshStandardMaterial?e:t).get(_.envMap||G),q=$&&$.mapping===ur?$.image.height:null,it=m[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let lt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,vt=lt!==void 0?lt.length:0,Nt=0;J.morphAttributes.position!==void 0&&(Nt=1),J.morphAttributes.normal!==void 0&&(Nt=2),J.morphAttributes.color!==void 0&&(Nt=3);let Qt,X,tt,At;if(it){let Kt=Je[it];Qt=Kt.vertexShader,X=Kt.fragmentShader}else Qt=_.vertexShader,X=_.fragmentShader,c.update(_),tt=c.getVertexShaderID(_),At=c.getFragmentShaderID(_);let st=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),wt=B.isInstancedMesh===!0,Ft=B.isBatchedMesh===!0,oe=!!_.map,qt=!!_.matcap,ue=!!$,P=!!_.aoMap,Ue=!!_.lightMap,Bt=!!_.bumpMap,Ot=!!_.normalMap,It=!!_.displacementMap,ne=!!_.emissiveMap,_t=!!_.metalnessMap,I=!!_.roughnessMap,x=_.anisotropy>0,N=_.clearcoat>0,Y=_.dispersion>0,K=_.iridescence>0,W=_.sheen>0,yt=_.transmission>0,rt=x&&!!_.anisotropyMap,ht=N&&!!_.clearcoatMap,Ht=N&&!!_.clearcoatNormalMap,Z=N&&!!_.clearcoatRoughnessMap,ut=K&&!!_.iridescenceMap,Mt=K&&!!_.iridescenceThicknessMap,St=W&&!!_.sheenColorMap,dt=W&&!!_.sheenRoughnessMap,kt=!!_.specularMap,Pt=!!_.specularColorMap,te=!!_.specularIntensityMap,T=yt&&!!_.transmissionMap,nt=yt&&!!_.thicknessMap,k=!!_.gradientMap,j=!!_.alphaMap,ct=_.alphaTest>0,at=!!_.alphaHash,Tt=!!_.extensions,ce=Sn;_.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ce=i.toneMapping);let Ae={shaderID:it,shaderType:_.type,shaderName:_.name,vertexShader:Qt,fragmentShader:X,defines:_.defines,customVertexShaderID:tt,customFragmentShaderID:At,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&B._colorsTexture!==null,instancing:wt,instancingColor:wt&&B.instanceColor!==null,instancingMorph:wt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Ri,alphaToCoverage:!!_.alphaToCoverage,map:oe,matcap:qt,envMap:ue,envMapMode:ue&&$.mapping,envMapCubeUVHeight:q,aoMap:P,lightMap:Ue,bumpMap:Bt,normalMap:Ot,displacementMap:f&&It,emissiveMap:ne,normalMapObjectSpace:Ot&&_.normalMapType===Rh,normalMapTangentSpace:Ot&&_.normalMapType===ll,metalnessMap:_t,roughnessMap:I,anisotropy:x,anisotropyMap:rt,clearcoat:N,clearcoatMap:ht,clearcoatNormalMap:Ht,clearcoatRoughnessMap:Z,dispersion:Y,iridescence:K,iridescenceMap:ut,iridescenceThicknessMap:Mt,sheen:W,sheenColorMap:St,sheenRoughnessMap:dt,specularMap:kt,specularColorMap:Pt,specularIntensityMap:te,transmission:yt,transmissionMap:T,thicknessMap:nt,gradientMap:k,opaque:_.transparent===!1&&_.blending===mi&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:ct,alphaHash:at,combine:_.combine,mapUv:oe&&A(_.map.channel),aoMapUv:P&&A(_.aoMap.channel),lightMapUv:Ue&&A(_.lightMap.channel),bumpMapUv:Bt&&A(_.bumpMap.channel),normalMapUv:Ot&&A(_.normalMap.channel),displacementMapUv:It&&A(_.displacementMap.channel),emissiveMapUv:ne&&A(_.emissiveMap.channel),metalnessMapUv:_t&&A(_.metalnessMap.channel),roughnessMapUv:I&&A(_.roughnessMap.channel),anisotropyMapUv:rt&&A(_.anisotropyMap.channel),clearcoatMapUv:ht&&A(_.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&A(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&A(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&A(_.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&A(_.iridescenceThicknessMap.channel),sheenColorMapUv:St&&A(_.sheenColorMap.channel),sheenRoughnessMapUv:dt&&A(_.sheenRoughnessMap.channel),specularMapUv:kt&&A(_.specularMap.channel),specularColorMapUv:Pt&&A(_.specularColorMap.channel),specularIntensityMapUv:te&&A(_.specularIntensityMap.channel),transmissionMapUv:T&&A(_.transmissionMap.channel),thicknessMapUv:nt&&A(_.thicknessMap.channel),alphaMapUv:j&&A(_.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ot||x),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(oe||j),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:bt,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Nt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:oe&&_.map.isVideoTexture===!0&&Gt.getTransfer(_.map.colorSpace)===Zt,decodeVideoTextureEmissive:ne&&_.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(_.emissiveMap.colorSpace)===Zt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===hn,flipSided:_.side===we,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Tt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&_.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function u(_){let C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(let w in _.defines)C.push(w),C.push(_.defines[w]);return _.isRawShaderMaterial===!1&&(M(C,_),b(C,_),C.push(i.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function M(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function b(_,C){o.disableAll(),C.supportsVertexTextures&&o.enable(0),C.instancing&&o.enable(1),C.instancingColor&&o.enable(2),C.instancingMorph&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),C.dispersion&&o.enable(20),C.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reverseDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),_.push(o.mask)}function v(_){let C=m[_.type],w;if(C){let O=Je[C];w=iu.clone(O.uniforms)}else w=_.uniforms;return w}function U(_,C){let w;for(let O=0,B=h.length;O<B;O++){let H=h[O];if(H.cacheKey===C){w=H,++w.usedTimes;break}}return w===void 0&&(w=new dg(i,C,_,r),h.push(w)),w}function S(_){if(--_.usedTimes===0){let C=h.indexOf(_);h[C]=h[h.length-1],h.pop(),_.destroy()}}function E(_){c.remove(_)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:v,acquireProgram:U,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:L}}function gg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function mg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function qc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,p,m,A,g){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:m,renderOrder:d.renderOrder,z:A,group:g},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=m,u.renderOrder=d.renderOrder,u.z=A,u.group=g),t++,u}function o(d,f,p,m,A,g){let u=a(d,f,p,m,A,g);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function c(d,f,p,m,A,g){let u=a(d,f,p,m,A,g);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function l(d,f){e.length>1&&e.sort(d||mg),n.length>1&&n.sort(f||qc),s.length>1&&s.sort(f||qc)}function h(){for(let d=t,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Ag(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Hc,i.set(n,[a])):s>=r.length?(a=new Hc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function xg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Dt};break;case"SpotLight":e={position:new D,direction:new D,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function yg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Cg=0;function vg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _g(i){let t=new xg,e=yg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new he,a=new he;function o(l){let h=0,d=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let p=0,m=0,A=0,g=0,u=0,M=0,b=0,v=0,U=0,S=0,E=0;l.sort(vg);for(let _=0,C=l.length;_<C;_++){let w=l[_],O=w.color,B=w.intensity,H=w.distance,J=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=O.r*B,d+=O.g*B,f+=O.b*B;else if(w.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(w.sh.coefficients[G],B);E++}else if(w.isDirectionalLight){let G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let $=w.shadow,q=e.get(w);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=w.shadow.matrix,M++}n.directional[p]=G,p++}else if(w.isSpotLight){let G=t.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(O).multiplyScalar(B),G.distance=H,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,n.spot[A]=G;let $=w.shadow;if(w.map&&(n.spotLightMap[U]=w.map,U++,$.updateMatrices(w),w.castShadow&&S++),n.spotLightMatrix[A]=$.matrix,w.castShadow){let q=e.get(w);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,n.spotShadow[A]=q,n.spotShadowMap[A]=J,v++}A++}else if(w.isRectAreaLight){let G=t.get(w);G.color.copy(O).multiplyScalar(B),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=G,g++}else if(w.isPointLight){let G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){let $=w.shadow,q=e.get(w);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,q.shadowCameraNear=$.camera.near,q.shadowCameraFar=$.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=w.shadow.matrix,b++}n.point[m]=G,m++}else if(w.isHemisphereLight){let G=t.get(w);G.skyColor.copy(w.color).multiplyScalar(B),G.groundColor.copy(w.groundColor).multiplyScalar(B),n.hemi[u]=G,u++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let L=n.hash;(L.directionalLength!==p||L.pointLength!==m||L.spotLength!==A||L.rectAreaLength!==g||L.hemiLength!==u||L.numDirectionalShadows!==M||L.numPointShadows!==b||L.numSpotShadows!==v||L.numSpotMaps!==U||L.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=A,n.rectArea.length=g,n.point.length=m,n.hemi.length=u,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+U-S,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,L.directionalLength=p,L.pointLength=m,L.spotLength=A,L.rectAreaLength=g,L.hemiLength=u,L.numDirectionalShadows=M,L.numPointShadows=b,L.numSpotShadows=v,L.numSpotMaps=U,L.numLightProbes=E,n.version=Cg++)}function c(l,h){let d=0,f=0,p=0,m=0,A=0,g=h.matrixWorldInverse;for(let u=0,M=l.length;u<M;u++){let b=l[u];if(b.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(b.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let v=n.hemi[A];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(g),A++}}}return{setup:o,setupView:c,state:n}}function Gc(i){let t=new _g(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Ig(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Gc(i),t.set(s,[o])):r>=a.length?(o=new Gc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var to=class extends Vn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},eo=class extends Vn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bg=`uniform sampler2D shadow_pass;
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
}`;function Sg(i,t,e){let n=new ji,s=new Wt,r=new Wt,a=new le,o=new to({depthPacking:Vh}),c=new eo,l={},h=e.maxTextureSize,d={[En]:we,[we]:En,[hn]:hn},f=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:Mg,fragmentShader:bg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ie;m.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new $t(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zc;let u=this.type;this.render=function(S,E,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let _=i.getRenderTarget(),C=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),O=i.state;O.setBlending(bn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let B=u!==cn&&this.type===cn,H=u===cn&&this.type!==cn;for(let J=0,G=S.length;J<G;J++){let $=S[J],q=$.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let it=q.getFrameExtents();if(s.multiply(it),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,q.mapSize.y=r.y)),q.map===null||B===!0||H===!0){let vt=this.type!==cn?{minFilter:He,magFilter:He}:{};q.map!==null&&q.map.dispose(),q.map=new gn(s.x,s.y,vt),q.map.texture.name=$.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let lt=q.getViewportCount();for(let vt=0;vt<lt;vt++){let Nt=q.getViewport(vt);a.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),O.viewport(a),q.updateMatrices($,vt),n=q.getFrustum(),v(E,L,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===cn&&M(q,L),q.needsUpdate=!1}u=this.type,g.needsUpdate=!1,i.setRenderTarget(_,C,w)};function M(S,E){let L=t.update(A);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new gn(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,L,f,A,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,L,p,A,null)}function b(S,E,L,_){let C=null,w=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)C=w;else if(C=L.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let O=C.uuid,B=E.uuid,H=l[O];H===void 0&&(H={},l[O]=H);let J=H[B];J===void 0&&(J=C.clone(),H[B]=J,E.addEventListener("dispose",U)),C=J}if(C.visible=E.visible,C.wireframe=E.wireframe,_===cn?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:d[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,L.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let O=i.properties.get(C);O.light=L}return C}function v(S,E,L,_,C){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===cn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);let B=t.update(S),H=S.material;if(Array.isArray(H)){let J=B.groups;for(let G=0,$=J.length;G<$;G++){let q=J[G],it=H[q.materialIndex];if(it&&it.visible){let lt=b(S,it,_,C);S.onBeforeShadow(i,S,E,L,B,lt,q),i.renderBufferDirect(L,null,B,lt,S,q),S.onAfterShadow(i,S,E,L,B,lt,q)}}}else if(H.visible){let J=b(S,H,_,C);S.onBeforeShadow(i,S,E,L,B,J,null),i.renderBufferDirect(L,null,B,J,S,null),S.onAfterShadow(i,S,E,L,B,J,null)}}let O=S.children;for(let B=0,H=O.length;B<H;B++)v(O[B],E,L,_,C)}function U(S){S.target.removeEventListener("dispose",U);for(let L in l){let _=l[L],C=S.target.uuid;C in _&&(_[C].dispose(),delete _[C])}}}var Eg={[sa]:ra,[aa]:la,[oa]:ha,[Ci]:ca,[ra]:sa,[la]:aa,[ha]:oa,[ca]:Ci};function wg(i,t){function e(){let T=!1,nt=new le,k=null,j=new le(0,0,0,0);return{setMask:function(ct){k!==ct&&!T&&(i.colorMask(ct,ct,ct,ct),k=ct)},setLocked:function(ct){T=ct},setClear:function(ct,at,Tt,ce,Ae){Ae===!0&&(ct*=ce,at*=ce,Tt*=ce),nt.set(ct,at,Tt,ce),j.equals(nt)===!1&&(i.clearColor(ct,at,Tt,ce),j.copy(nt))},reset:function(){T=!1,k=null,j.set(-1,0,0,0)}}}function n(){let T=!1,nt=!1,k=null,j=null,ct=null;return{setReversed:function(at){if(nt!==at){let Tt=t.get("EXT_clip_control");nt?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT);let ce=ct;ct=null,this.setClear(ce)}nt=at},getReversed:function(){return nt},setTest:function(at){at?st(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(at){k!==at&&!T&&(i.depthMask(at),k=at)},setFunc:function(at){if(nt&&(at=Eg[at]),j!==at){switch(at){case sa:i.depthFunc(i.NEVER);break;case ra:i.depthFunc(i.ALWAYS);break;case aa:i.depthFunc(i.LESS);break;case Ci:i.depthFunc(i.LEQUAL);break;case oa:i.depthFunc(i.EQUAL);break;case ca:i.depthFunc(i.GEQUAL);break;case la:i.depthFunc(i.GREATER);break;case ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=at}},setLocked:function(at){T=at},setClear:function(at){ct!==at&&(nt&&(at=1-at),i.clearDepth(at),ct=at)},reset:function(){T=!1,k=null,j=null,ct=null,nt=!1}}}function s(){let T=!1,nt=null,k=null,j=null,ct=null,at=null,Tt=null,ce=null,Ae=null;return{setTest:function(Kt){T||(Kt?st(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Kt){nt!==Kt&&!T&&(i.stencilMask(Kt),nt=Kt)},setFunc:function(Kt,Fe,tn){(k!==Kt||j!==Fe||ct!==tn)&&(i.stencilFunc(Kt,Fe,tn),k=Kt,j=Fe,ct=tn)},setOp:function(Kt,Fe,tn){(at!==Kt||Tt!==Fe||ce!==tn)&&(i.stencilOp(Kt,Fe,tn),at=Kt,Tt=Fe,ce=tn)},setLocked:function(Kt){T=Kt},setClear:function(Kt){Ae!==Kt&&(i.clearStencil(Kt),Ae=Kt)},reset:function(){T=!1,nt=null,k=null,j=null,ct=null,at=null,Tt=null,ce=null,Ae=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},f=new WeakMap,p=[],m=null,A=!1,g=null,u=null,M=null,b=null,v=null,U=null,S=null,E=new Dt(0,0,0),L=0,_=!1,C=null,w=null,O=null,B=null,H=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,$=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=$>=2);let it=null,lt={},vt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Qt=new le().fromArray(vt),X=new le().fromArray(Nt);function tt(T,nt,k,j){let ct=new Uint8Array(4),at=i.createTexture();i.bindTexture(T,at),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<k;Tt++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(nt+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return at}let At={};At[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(Ci),Bt(!1),Ot(Yo),st(i.CULL_FACE),P(bn);function st(T){h[T]!==!0&&(i.enable(T),h[T]=!0)}function bt(T){h[T]!==!1&&(i.disable(T),h[T]=!1)}function wt(T,nt){return d[T]!==nt?(i.bindFramebuffer(T,nt),d[T]=nt,T===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=nt),T===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function Ft(T,nt){let k=p,j=!1;if(T){k=f.get(nt),k===void 0&&(k=[],f.set(nt,k));let ct=T.textures;if(k.length!==ct.length||k[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Tt=ct.length;at<Tt;at++)k[at]=i.COLOR_ATTACHMENT0+at;k.length=ct.length,j=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,j=!0);j&&i.drawBuffers(k)}function oe(T){return m!==T?(i.useProgram(T),m=T,!0):!1}let qt={[kn]:i.FUNC_ADD,[ih]:i.FUNC_SUBTRACT,[sh]:i.FUNC_REVERSE_SUBTRACT};qt[rh]=i.MIN,qt[ah]=i.MAX;let ue={[oh]:i.ZERO,[ch]:i.ONE,[lh]:i.SRC_COLOR,[na]:i.SRC_ALPHA,[gh]:i.SRC_ALPHA_SATURATE,[fh]:i.DST_COLOR,[uh]:i.DST_ALPHA,[hh]:i.ONE_MINUS_SRC_COLOR,[ia]:i.ONE_MINUS_SRC_ALPHA,[ph]:i.ONE_MINUS_DST_COLOR,[dh]:i.ONE_MINUS_DST_ALPHA,[mh]:i.CONSTANT_COLOR,[Ah]:i.ONE_MINUS_CONSTANT_COLOR,[xh]:i.CONSTANT_ALPHA,[yh]:i.ONE_MINUS_CONSTANT_ALPHA};function P(T,nt,k,j,ct,at,Tt,ce,Ae,Kt){if(T===bn){A===!0&&(bt(i.BLEND),A=!1);return}if(A===!1&&(st(i.BLEND),A=!0),T!==nh){if(T!==g||Kt!==_){if((u!==kn||v!==kn)&&(i.blendEquation(i.FUNC_ADD),u=kn,v=kn),Kt)switch(T){case mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ns:i.blendFunc(i.ONE,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ns:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}M=null,b=null,U=null,S=null,E.set(0,0,0),L=0,g=T,_=Kt}return}ct=ct||nt,at=at||k,Tt=Tt||j,(nt!==u||ct!==v)&&(i.blendEquationSeparate(qt[nt],qt[ct]),u=nt,v=ct),(k!==M||j!==b||at!==U||Tt!==S)&&(i.blendFuncSeparate(ue[k],ue[j],ue[at],ue[Tt]),M=k,b=j,U=at,S=Tt),(ce.equals(E)===!1||Ae!==L)&&(i.blendColor(ce.r,ce.g,ce.b,Ae),E.copy(ce),L=Ae),g=T,_=!1}function Ue(T,nt){T.side===hn?bt(i.CULL_FACE):st(i.CULL_FACE);let k=T.side===we;nt&&(k=!k),Bt(k),T.blending===mi&&T.transparent===!1?P(bn):P(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),a.setFunc(T.depthFunc),a.setTest(T.depthTest),a.setMask(T.depthWrite),r.setMask(T.colorWrite);let j=T.stencilWrite;o.setTest(j),j&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),ne(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(T){C!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),C=T)}function Ot(T){T!==$l?(st(i.CULL_FACE),T!==w&&(T===Yo?i.cullFace(i.BACK):T===th?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),w=T}function It(T){T!==O&&(G&&i.lineWidth(T),O=T)}function ne(T,nt,k){T?(st(i.POLYGON_OFFSET_FILL),(B!==nt||H!==k)&&(i.polygonOffset(nt,k),B=nt,H=k)):bt(i.POLYGON_OFFSET_FILL)}function _t(T){T?st(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function I(T){T===void 0&&(T=i.TEXTURE0+J-1),it!==T&&(i.activeTexture(T),it=T)}function x(T,nt,k){k===void 0&&(it===null?k=i.TEXTURE0+J-1:k=it);let j=lt[k];j===void 0&&(j={type:void 0,texture:void 0},lt[k]=j),(j.type!==T||j.texture!==nt)&&(it!==k&&(i.activeTexture(k),it=k),i.bindTexture(T,nt||At[T]),j.type=T,j.texture=nt)}function N(){let T=lt[it];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Z(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Mt(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function St(T){Qt.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),Qt.copy(T))}function dt(T){X.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),X.copy(T))}function kt(T,nt){let k=l.get(nt);k===void 0&&(k=new WeakMap,l.set(nt,k));let j=k.get(T);j===void 0&&(j=i.getUniformBlockIndex(nt,T.name),k.set(T,j))}function Pt(T,nt){let j=l.get(nt).get(T);c.get(nt)!==j&&(i.uniformBlockBinding(nt,j,T.__bindingPointIndex),c.set(nt,j))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,lt={},d={},f=new WeakMap,p=[],m=null,A=!1,g=null,u=null,M=null,b=null,v=null,U=null,S=null,E=new Dt(0,0,0),L=0,_=!1,C=null,w=null,O=null,B=null,H=null,Qt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:bt,bindFramebuffer:wt,drawBuffers:Ft,useProgram:oe,setBlending:P,setMaterial:Ue,setFlipSided:Bt,setCullFace:Ot,setLineWidth:It,setPolygonOffset:ne,setScissorTest:_t,activeTexture:I,bindTexture:x,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:K,texImage2D:ut,texImage3D:Mt,updateUBOMapping:kt,uniformBlockBinding:Pt,texStorage2D:Ht,texStorage3D:Z,texSubImage2D:W,texSubImage3D:yt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ht,scissor:St,viewport:dt,reset:te}}function Wc(i,t,e,n){let s=Tg(n);switch(e){case nl:return i*t;case sl:return i*t;case rl:return i*t*2;case al:return i*t/s.components*s.byteLength;case bo:return i*t/s.components*s.byteLength;case ol:return i*t*2/s.components*s.byteLength;case So:return i*t*2/s.components*s.byteLength;case il:return i*t*3/s.components*s.byteLength;case qe:return i*t*4/s.components*s.byteLength;case Eo:return i*t*4/s.components*s.byteLength;case Rs:case Ps:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ls:case Us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ma:case xa:return Math.max(i,16)*Math.max(t,8)/4;case ga:case Aa:return Math.max(i,8)*Math.max(t,8)/2;case ya:case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ds:case Na:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case cl:case za:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ba:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tg(i){switch(i){case pn:case $c:return{byteLength:1,components:1};case Yi:case tl:case Zi:return{byteLength:2,components:1};case Io:case Mo:return{byteLength:2,components:4};case Xn:case _o:case un:return{byteLength:4,components:1};case el:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Vg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Wt,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,x){return p?new OffscreenCanvas(I,x):Bs("canvas")}function A(I,x,N){let Y=1,K=_t(I);if((K.width>N||K.height>N)&&(Y=N/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let W=Math.floor(Y*K.width),yt=Math.floor(Y*K.height);d===void 0&&(d=m(W,yt));let rt=x?m(W,yt):d;return rt.width=W,rt.height=yt,rt.getContext("2d").drawImage(I,0,0,W,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+yt+")."),rt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),I;return I}function g(I){return I.generateMipmaps}function u(I){i.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(I,x,N,Y,K=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let W=x;if(x===i.RED&&(N===i.FLOAT&&(W=i.R32F),N===i.HALF_FLOAT&&(W=i.R16F),N===i.UNSIGNED_BYTE&&(W=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.R8UI),N===i.UNSIGNED_SHORT&&(W=i.R16UI),N===i.UNSIGNED_INT&&(W=i.R32UI),N===i.BYTE&&(W=i.R8I),N===i.SHORT&&(W=i.R16I),N===i.INT&&(W=i.R32I)),x===i.RG&&(N===i.FLOAT&&(W=i.RG32F),N===i.HALF_FLOAT&&(W=i.RG16F),N===i.UNSIGNED_BYTE&&(W=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RG8UI),N===i.UNSIGNED_SHORT&&(W=i.RG16UI),N===i.UNSIGNED_INT&&(W=i.RG32UI),N===i.BYTE&&(W=i.RG8I),N===i.SHORT&&(W=i.RG16I),N===i.INT&&(W=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGB8UI),N===i.UNSIGNED_SHORT&&(W=i.RGB16UI),N===i.UNSIGNED_INT&&(W=i.RGB32UI),N===i.BYTE&&(W=i.RGB8I),N===i.SHORT&&(W=i.RGB16I),N===i.INT&&(W=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),N===i.UNSIGNED_INT&&(W=i.RGBA32UI),N===i.BYTE&&(W=i.RGBA8I),N===i.SHORT&&(W=i.RGBA16I),N===i.INT&&(W=i.RGBA32I)),x===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),x===i.RGBA){let yt=K?dr:Gt.getTransfer(Y);N===i.FLOAT&&(W=i.RGBA32F),N===i.HALF_FLOAT&&(W=i.RGBA16F),N===i.UNSIGNED_BYTE&&(W=yt===Zt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(I,x){let N;return I?x===null||x===Xn||x===Ii?N=i.DEPTH24_STENCIL8:x===un?N=i.DEPTH32F_STENCIL8:x===Yi&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Xn||x===Ii?N=i.DEPTH_COMPONENT24:x===un?N=i.DEPTH_COMPONENT32F:x===Yi&&(N=i.DEPTH_COMPONENT16),N}function U(I,x){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==He&&I.minFilter!==Ke?Math.log2(Math.max(x.width,x.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?x.mipmaps.length:1}function S(I){let x=I.target;x.removeEventListener("dispose",S),L(x),x.isVideoTexture&&h.delete(x)}function E(I){let x=I.target;x.removeEventListener("dispose",E),C(x)}function L(I){let x=n.get(I);if(x.__webglInit===void 0)return;let N=I.source,Y=f.get(N);if(Y){let K=Y[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&_(I),Object.keys(Y).length===0&&f.delete(N)}n.remove(I)}function _(I){let x=n.get(I);i.deleteTexture(x.__webglTexture);let N=I.source,Y=f.get(N);delete Y[x.__cacheKey],a.memory.textures--}function C(I){let x=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let K=0;K<x.__webglFramebuffer[Y].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[Y][K]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=I.textures;for(let Y=0,K=N.length;Y<K;Y++){let W=n.get(N[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(I)}let w=0;function O(){w=0}function B(){let I=w;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),w+=1,I}function H(I){let x=[];return x.push(I.wrapS),x.push(I.wrapT),x.push(I.wrapR||0),x.push(I.magFilter),x.push(I.minFilter),x.push(I.anisotropy),x.push(I.internalFormat),x.push(I.format),x.push(I.type),x.push(I.generateMipmaps),x.push(I.premultiplyAlpha),x.push(I.flipY),x.push(I.unpackAlignment),x.push(I.colorSpace),x.join()}function J(I,x){let N=n.get(I);if(I.isVideoTexture&&It(I),I.isRenderTargetTexture===!1&&I.version>0&&N.__version!==I.version){let Y=I.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,I,x);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function G(I,x){let N=n.get(I);if(I.version>0&&N.__version!==I.version){X(N,I,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function $(I,x){let N=n.get(I);if(I.version>0&&N.__version!==I.version){X(N,I,x);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function q(I,x){let N=n.get(I);if(I.version>0&&N.__version!==I.version){tt(N,I,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}let it={[fa]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},lt={[He]:i.NEAREST,[wh]:i.NEAREST_MIPMAP_NEAREST,[os]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[br]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},vt={[Ph]:i.NEVER,[zh]:i.ALWAYS,[Lh]:i.LESS,[hl]:i.LEQUAL,[Uh]:i.EQUAL,[Fh]:i.GEQUAL,[Dh]:i.GREATER,[Nh]:i.NOTEQUAL};function Nt(I,x){if(x.type===un&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ke||x.magFilter===br||x.magFilter===os||x.magFilter===Wn||x.minFilter===Ke||x.minFilter===br||x.minFilter===os||x.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,it[x.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,it[x.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,it[x.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,lt[x.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,lt[x.minFilter]),x.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,vt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===He||x.minFilter!==os&&x.minFilter!==Wn||x.type===un&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Qt(I,x){let N=!1;I.__webglInit===void 0&&(I.__webglInit=!0,x.addEventListener("dispose",S));let Y=x.source,K=f.get(Y);K===void 0&&(K={},f.set(Y,K));let W=H(x);if(W!==I.__cacheKey){K[W]===void 0&&(K[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[W].usedTimes++;let yt=K[I.__cacheKey];yt!==void 0&&(K[I.__cacheKey].usedTimes--,yt.usedTimes===0&&_(x)),I.__cacheKey=W,I.__webglTexture=K[W].texture}return N}function X(I,x,N){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);let K=Qt(I,x),W=x.source;e.bindTexture(Y,I.__webglTexture,i.TEXTURE0+N);let yt=n.get(W);if(W.version!==yt.__version||K===!0){e.activeTexture(i.TEXTURE0+N);let rt=Gt.getPrimaries(Gt.workingColorSpace),ht=x.colorSpace===Mn?null:Gt.getPrimaries(x.colorSpace),Ht=x.colorSpace===Mn||rt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let Z=A(x.image,!1,s.maxTextureSize);Z=ne(x,Z);let ut=r.convert(x.format,x.colorSpace),Mt=r.convert(x.type),St=b(x.internalFormat,ut,Mt,x.colorSpace,x.isVideoTexture);Nt(Y,x);let dt,kt=x.mipmaps,Pt=x.isVideoTexture!==!0,te=yt.__version===void 0||K===!0,T=W.dataReady,nt=U(x,Z);if(x.isDepthTexture)St=v(x.format===Mi,x.type),te&&(Pt?e.texStorage2D(i.TEXTURE_2D,1,St,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,St,Z.width,Z.height,0,ut,Mt,null));else if(x.isDataTexture)if(kt.length>0){Pt&&te&&e.texStorage2D(i.TEXTURE_2D,nt,St,kt[0].width,kt[0].height);for(let k=0,j=kt.length;k<j;k++)dt=kt[k],Pt?T&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,dt.width,dt.height,ut,Mt,dt.data):e.texImage2D(i.TEXTURE_2D,k,St,dt.width,dt.height,0,ut,Mt,dt.data);x.generateMipmaps=!1}else Pt?(te&&e.texStorage2D(i.TEXTURE_2D,nt,St,Z.width,Z.height),T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,ut,Mt,Z.data)):e.texImage2D(i.TEXTURE_2D,0,St,Z.width,Z.height,0,ut,Mt,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Pt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,St,kt[0].width,kt[0].height,Z.depth);for(let k=0,j=kt.length;k<j;k++)if(dt=kt[k],x.format!==qe)if(ut!==null)if(Pt){if(T)if(x.layerUpdates.size>0){let ct=Wc(dt.width,dt.height,x.format,x.type);for(let at of x.layerUpdates){let Tt=dt.data.subarray(at*ct/dt.data.BYTES_PER_ELEMENT,(at+1)*ct/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,at,dt.width,dt.height,1,ut,Tt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,dt.width,dt.height,Z.depth,ut,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,St,dt.width,dt.height,Z.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?T&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,dt.width,dt.height,Z.depth,ut,Mt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,k,St,dt.width,dt.height,Z.depth,0,ut,Mt,dt.data)}else{Pt&&te&&e.texStorage2D(i.TEXTURE_2D,nt,St,kt[0].width,kt[0].height);for(let k=0,j=kt.length;k<j;k++)dt=kt[k],x.format!==qe?ut!==null?Pt?T&&e.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,k,St,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?T&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,dt.width,dt.height,ut,Mt,dt.data):e.texImage2D(i.TEXTURE_2D,k,St,dt.width,dt.height,0,ut,Mt,dt.data)}else if(x.isDataArrayTexture)if(Pt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,St,Z.width,Z.height,Z.depth),T)if(x.layerUpdates.size>0){let k=Wc(Z.width,Z.height,x.format,x.type);for(let j of x.layerUpdates){let ct=Z.data.subarray(j*k/Z.data.BYTES_PER_ELEMENT,(j+1)*k/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,Z.width,Z.height,1,ut,Mt,ct)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ut,Mt,Z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,Z.width,Z.height,Z.depth,0,ut,Mt,Z.data);else if(x.isData3DTexture)Pt?(te&&e.texStorage3D(i.TEXTURE_3D,nt,St,Z.width,Z.height,Z.depth),T&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ut,Mt,Z.data)):e.texImage3D(i.TEXTURE_3D,0,St,Z.width,Z.height,Z.depth,0,ut,Mt,Z.data);else if(x.isFramebufferTexture){if(te)if(Pt)e.texStorage2D(i.TEXTURE_2D,nt,St,Z.width,Z.height);else{let k=Z.width,j=Z.height;for(let ct=0;ct<nt;ct++)e.texImage2D(i.TEXTURE_2D,ct,St,k,j,0,ut,Mt,null),k>>=1,j>>=1}}else if(kt.length>0){if(Pt&&te){let k=_t(kt[0]);e.texStorage2D(i.TEXTURE_2D,nt,St,k.width,k.height)}for(let k=0,j=kt.length;k<j;k++)dt=kt[k],Pt?T&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,ut,Mt,dt):e.texImage2D(i.TEXTURE_2D,k,St,ut,Mt,dt);x.generateMipmaps=!1}else if(Pt){if(te){let k=_t(Z);e.texStorage2D(i.TEXTURE_2D,nt,St,k.width,k.height)}T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Mt,Z)}else e.texImage2D(i.TEXTURE_2D,0,St,ut,Mt,Z);g(x)&&u(Y),yt.__version=W.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function tt(I,x,N){if(x.image.length!==6)return;let Y=Qt(I,x),K=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+N);let W=n.get(K);if(K.version!==W.__version||Y===!0){e.activeTexture(i.TEXTURE0+N);let yt=Gt.getPrimaries(Gt.workingColorSpace),rt=x.colorSpace===Mn?null:Gt.getPrimaries(x.colorSpace),ht=x.colorSpace===Mn||yt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Ht=x.isCompressedTexture||x.image[0].isCompressedTexture,Z=x.image[0]&&x.image[0].isDataTexture,ut=[];for(let j=0;j<6;j++)!Ht&&!Z?ut[j]=A(x.image[j],!0,s.maxCubemapSize):ut[j]=Z?x.image[j].image:x.image[j],ut[j]=ne(x,ut[j]);let Mt=ut[0],St=r.convert(x.format,x.colorSpace),dt=r.convert(x.type),kt=b(x.internalFormat,St,dt,x.colorSpace),Pt=x.isVideoTexture!==!0,te=W.__version===void 0||Y===!0,T=K.dataReady,nt=U(x,Mt);Nt(i.TEXTURE_CUBE_MAP,x);let k;if(Ht){Pt&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,kt,Mt.width,Mt.height);for(let j=0;j<6;j++){k=ut[j].mipmaps;for(let ct=0;ct<k.length;ct++){let at=k[ct];x.format!==qe?St!==null?Pt?T&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,at.width,at.height,St,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,kt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,at.width,at.height,St,dt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,kt,at.width,at.height,0,St,dt,at.data)}}}else{if(k=x.mipmaps,Pt&&te){k.length>0&&nt++;let j=_t(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,kt,j.width,j.height)}for(let j=0;j<6;j++)if(Z){Pt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ut[j].width,ut[j].height,St,dt,ut[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,kt,ut[j].width,ut[j].height,0,St,dt,ut[j].data);for(let ct=0;ct<k.length;ct++){let Tt=k[ct].image[j].image;Pt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,Tt.width,Tt.height,St,dt,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,kt,Tt.width,Tt.height,0,St,dt,Tt.data)}}else{Pt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,St,dt,ut[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,kt,St,dt,ut[j]);for(let ct=0;ct<k.length;ct++){let at=k[ct];Pt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,St,dt,at.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,kt,St,dt,at.image[j])}}}g(x)&&u(i.TEXTURE_CUBE_MAP),W.__version=K.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function At(I,x,N,Y,K,W){let yt=r.convert(N.format,N.colorSpace),rt=r.convert(N.type),ht=b(N.internalFormat,yt,rt,N.colorSpace),Ht=n.get(x),Z=n.get(N);if(Z.__renderTarget=x,!Ht.__hasExternalTextures){let ut=Math.max(1,x.width>>W),Mt=Math.max(1,x.height>>W);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,W,ht,ut,Mt,x.depth,0,yt,rt,null):e.texImage2D(K,W,ht,ut,Mt,0,yt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Ot(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,Z.__webglTexture,0,Bt(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,Z.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(I,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,I),x.depthBuffer){let Y=x.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,W=v(x.stencilBuffer,K),yt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=Bt(x);Ot(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,W,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,W,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,W,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,I)}else{let Y=x.textures;for(let K=0;K<Y.length;K++){let W=Y[K],yt=r.convert(W.format,W.colorSpace),rt=r.convert(W.type),ht=b(W.internalFormat,yt,rt,W.colorSpace),Ht=Bt(x);N&&Ot(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,ht,x.width,x.height):Ot(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,ht,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ht,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(I,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);let K=Y.__webglTexture,W=Bt(x);if(x.depthTexture.format===Ai)Ot(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(x.depthTexture.format===Mi)Ot(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function wt(I){let x=n.get(I),N=I.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==I.depthTexture){let Y=I.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=Y}if(I.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");bt(x.__webglFramebuffer,I)}else if(N){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),st(x.__webglDepthbuffer[Y],I,!1);else{let K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),st(x.__webglDepthbuffer,I,!1);else{let Y=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(I,x,N){let Y=n.get(I);x!==void 0&&At(Y.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&wt(I)}function oe(I){let x=I.texture,N=n.get(I),Y=n.get(x);I.addEventListener("dispose",E);let K=I.textures,W=I.isWebGLCubeRenderTarget===!0,yt=K.length>1;if(yt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,a.memory.textures++),W){N.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[rt]=[];for(let ht=0;ht<x.mipmaps.length;ht++)N.__webglFramebuffer[rt][ht]=i.createFramebuffer()}else N.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let rt=0;rt<x.mipmaps.length;rt++)N.__webglFramebuffer[rt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(yt)for(let rt=0,ht=K.length;rt<ht;rt++){let Ht=n.get(K[rt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Ot(I)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let rt=0;rt<K.length;rt++){let ht=K[rt];N.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[rt]);let Ht=r.convert(ht.format,ht.colorSpace),Z=r.convert(ht.type),ut=b(ht.internalFormat,Ht,Z,ht.colorSpace,I.isXRRenderTarget===!0),Mt=Bt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,ut,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,N.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),st(N.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,x);for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)At(N.__webglFramebuffer[rt][ht],I,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht);else At(N.__webglFramebuffer[rt],I,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);g(x)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let rt=0,ht=K.length;rt<ht;rt++){let Ht=K[rt],Z=n.get(Ht);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture),Nt(i.TEXTURE_2D,Ht),At(N.__webglFramebuffer,I,Ht,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),g(Ht)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(rt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),Nt(rt,x),x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)At(N.__webglFramebuffer[ht],I,x,i.COLOR_ATTACHMENT0,rt,ht);else At(N.__webglFramebuffer,I,x,i.COLOR_ATTACHMENT0,rt,0);g(x)&&u(rt),e.unbindTexture()}I.depthBuffer&&wt(I)}function qt(I){let x=I.textures;for(let N=0,Y=x.length;N<Y;N++){let K=x[N];if(g(K)){let W=M(I),yt=n.get(K).__webglTexture;e.bindTexture(W,yt),u(W),e.unbindTexture()}}}let ue=[],P=[];function Ue(I){if(I.samples>0){if(Ot(I)===!1){let x=I.textures,N=I.width,Y=I.height,K=i.COLOR_BUFFER_BIT,W=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(I),rt=x.length>1;if(rt)for(let ht=0;ht<x.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let ht=0;ht<x.length;ht++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[ht]);let Ht=n.get(x[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,K,i.NEAREST),c===!0&&(ue.length=0,P.length=0,ue.push(i.COLOR_ATTACHMENT0+ht),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ue.push(W),P.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let ht=0;ht<x.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,yt.__webglColorRenderbuffer[ht]);let Ht=n.get(x[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let x=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Bt(I){return Math.min(s.maxSamples,I.samples)}function Ot(I){let x=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function It(I){let x=a.render.frame;h.get(I)!==x&&(h.set(I,x),I.update())}function ne(I,x){let N=I.colorSpace,Y=I.format,K=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||N!==Ri&&N!==Mn&&(Gt.getTransfer(N)===Zt?(Y!==qe||K!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function _t(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=q,this.rebindTextures=Ft,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Ot}function Rg(i,t){function e(n,s=Mn){let r,a=Gt.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===Io)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===el)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$c)return i.BYTE;if(n===tl)return i.SHORT;if(n===Yi)return i.UNSIGNED_SHORT;if(n===_o)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Zi)return i.HALF_FLOAT;if(n===nl)return i.ALPHA;if(n===il)return i.RGB;if(n===qe)return i.RGBA;if(n===sl)return i.LUMINANCE;if(n===rl)return i.LUMINANCE_ALPHA;if(n===Ai)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===al)return i.RED;if(n===bo)return i.RED_INTEGER;if(n===ol)return i.RG;if(n===So)return i.RG_INTEGER;if(n===Eo)return i.RGBA_INTEGER;if(n===Rs||n===Ps||n===Ls||n===Us)if(a===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ga||n===ma||n===Aa||n===xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ya||n===Ca||n===va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ya||n===Ca)return a===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===va)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_a||n===Ia||n===Ma||n===ba||n===Sa||n===Ea||n===wa||n===Ta||n===Va||n===Ra||n===Pa||n===La||n===Ua||n===Da)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_a)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ma)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ba)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ea)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ta)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Va)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ra)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===La)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Da)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ds||n===Na||n===Fa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ds)return a===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cl||n===za||n===Ba||n===Oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ds)return r.COMPRESSED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ii?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var no=class extends _e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Yt=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pg={type:"move"},Xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let A of t.hand.values()){let g=e.getJointPose(A,n),u=this._getHandJoint(l,A);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,m=.005;l.inputState.pinching&&f>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Lg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ug=`
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

}`,io=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Le,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Qe({vertexShader:Lg,fragmentShader:Ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new js(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},so=class extends wn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,m=null,A=new io,g=e.getContextAttributes(),u=null,M=null,b=[],v=[],U=new Wt,S=null,E=new _e;E.viewport=new le;let L=new _e;L.viewport=new le;let _=[E,L],C=new no,w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=b[X];return tt===void 0&&(tt=new Xi,b[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=b[X];return tt===void 0&&(tt=new Xi,b[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=b[X];return tt===void 0&&(tt=new Xi,b[X]=tt),tt.getHandSpace()};function B(X){let tt=v.indexOf(X.inputSource);if(tt===-1)return;let At=b[tt];At!==void 0&&(At.update(X.inputSource,X.frame,l||a),At.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let X=0;X<b.length;X++){let tt=v[X];tt!==null&&(v[X]=null,b[X].disconnect(tt))}w=null,O=null,A.reset(),t.setRenderTarget(u),p=null,f=null,d=null,s=null,M=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){let tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new gn(p.framebufferWidth,p.framebufferHeight,{format:qe,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let tt=null,At=null,st=null;g.depth&&(st=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=g.stencil?Mi:Ai,At=g.stencil?Ii:Xn);let bt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new gn(f.textureWidth,f.textureHeight,{format:qe,type:pn,depthTexture:new Zs(f.textureWidth,f.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function J(X){for(let tt=0;tt<X.removed.length;tt++){let At=X.removed[tt],st=v.indexOf(At);st>=0&&(v[st]=null,b[st].disconnect(At))}for(let tt=0;tt<X.added.length;tt++){let At=X.added[tt],st=v.indexOf(At);if(st===-1){for(let wt=0;wt<b.length;wt++)if(wt>=v.length){v.push(At),st=wt;break}else if(v[wt]===null){v[wt]=At,st=wt;break}if(st===-1)break}let bt=b[st];bt&&bt.connect(At)}}let G=new D,$=new D;function q(X,tt,At){G.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(At.matrixWorld);let st=G.distanceTo($),bt=tt.projectionMatrix.elements,wt=At.projectionMatrix.elements,Ft=bt[14]/(bt[10]-1),oe=bt[14]/(bt[10]+1),qt=(bt[9]+1)/bt[5],ue=(bt[9]-1)/bt[5],P=(bt[8]-1)/bt[0],Ue=(wt[8]+1)/wt[0],Bt=Ft*P,Ot=Ft*Ue,It=st/(-P+Ue),ne=It*-P;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ne),X.translateZ(It),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),bt[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let _t=Ft+It,I=oe+It,x=Bt-ne,N=Ot+(st-ne),Y=qt*oe/I*_t,K=ue*oe/I*_t;X.projectionMatrix.makePerspective(x,N,Y,K,_t,I),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function it(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let tt=X.near,At=X.far;A.texture!==null&&(A.depthNear>0&&(tt=A.depthNear),A.depthFar>0&&(At=A.depthFar)),C.near=L.near=E.near=tt,C.far=L.far=E.far=At,(w!==C.near||O!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),w=C.near,O=C.far),E.layers.mask=X.layers.mask|2,L.layers.mask=X.layers.mask|4,C.layers.mask=E.layers.mask|L.layers.mask;let st=X.parent,bt=C.cameras;it(C,st);for(let wt=0;wt<bt.length;wt++)it(bt[wt],st);bt.length===2?q(C,E,L):C.projectionMatrix.copy(E.projectionMatrix),lt(X,C,st)};function lt(X,tt,At){At===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(At.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=qa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let vt=null;function Nt(X,tt){if(h=tt.getViewerPose(l||a),m=tt,h!==null){let At=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let st=!1;At.length!==C.cameras.length&&(C.cameras.length=0,st=!0);for(let wt=0;wt<At.length;wt++){let Ft=At[wt],oe=null;if(p!==null)oe=p.getViewport(Ft);else{let ue=d.getViewSubImage(f,Ft);oe=ue.viewport,wt===0&&(t.setRenderTargetTextures(M,ue.colorTexture,f.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(M))}let qt=_[wt];qt===void 0&&(qt=new _e,qt.layers.enable(wt),qt.viewport=new le,_[wt]=qt),qt.matrix.fromArray(Ft.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(Ft.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(oe.x,oe.y,oe.width,oe.height),wt===0&&(C.matrix.copy(qt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),st===!0&&C.cameras.push(qt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){let wt=d.getDepthInformation(At[0]);wt&&wt.isValid&&wt.texture&&A.init(t,wt,s.renderState)}}for(let At=0;At<b.length;At++){let st=v[At],bt=b[At];st!==null&&bt!==void 0&&bt.update(st,tt,l||a)}vt&&vt(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}let Qt=new pl;Qt.setAnimationLoop(Nt),this.setAnimationLoop=function(X){vt=X},this.dispose=function(){}}},Bn=new Ze,Dg=new he;function Ng(i,t){function e(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function n(g,u){u.color.getRGB(g.fogColor.value,fl(i)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function s(g,u,M,b,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(g,u):u.isMeshToonMaterial?(r(g,u),d(g,u)):u.isMeshPhongMaterial?(r(g,u),h(g,u)):u.isMeshStandardMaterial?(r(g,u),f(g,u),u.isMeshPhysicalMaterial&&p(g,u,v)):u.isMeshMatcapMaterial?(r(g,u),m(g,u)):u.isMeshDepthMaterial?r(g,u):u.isMeshDistanceMaterial?(r(g,u),A(g,u)):u.isMeshNormalMaterial?r(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?c(g,u,M,b):u.isSpriteMaterial?l(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,e(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,e(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===we&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,e(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===we&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,e(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,e(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);let M=t.get(u),b=M.envMap,v=M.envMapRotation;b&&(g.envMap.value=b,Bn.copy(v),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),g.envMapRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(Bn)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,e(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function c(g,u,M,b){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*M,g.scale.value=b*.5,u.map&&(g.map.value=u.map,e(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function l(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,e(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function f(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,M){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===we&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,u){u.matcap&&(g.matcap.value=u.matcap)}function A(g,u){let M=t.get(u).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){let v=b.program;n.uniformBlockBinding(M,v)}function l(M,b){let v=s[M.id];v===void 0&&(m(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",g));let U=b.program;n.updateUBOMapping(M,U);let S=t.render.frame;r[M.id]!==S&&(f(M),r[M.id]=S)}function h(M){let b=d();M.__bindingPointIndex=b;let v=i.createBuffer(),U=M.__size,S=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,U,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let b=s[M.id],v=M.uniforms,U=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let S=0,E=v.length;S<E;S++){let L=Array.isArray(v[S])?v[S]:[v[S]];for(let _=0,C=L.length;_<C;_++){let w=L[_];if(p(w,S,_,U)===!0){let O=w.__offset,B=Array.isArray(w.value)?w.value:[w.value],H=0;for(let J=0;J<B.length;J++){let G=B[J],$=A(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+H,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,b,v,U){let S=M.value,E=b+"_"+v;if(U[E]===void 0)return typeof S=="number"||typeof S=="boolean"?U[E]=S:U[E]=S.clone(),!0;{let L=U[E];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return U[E]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function m(M){let b=M.uniforms,v=0,U=16;for(let E=0,L=b.length;E<L;E++){let _=Array.isArray(b[E])?b[E]:[b[E]];for(let C=0,w=_.length;C<w;C++){let O=_[C],B=Array.isArray(O.value)?O.value:[O.value];for(let H=0,J=B.length;H<J;H++){let G=B[H],$=A(G),q=v%U,it=q%$.boundary,lt=q+it;v+=it,lt!==0&&U-lt<$.storage&&(v+=U-lt),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=$.storage}}}let S=v%U;return S>0&&(v+=U-S),M.__size=v,M.__cache={},this}function A(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function g(M){let b=M.target;b.removeEventListener("dispose",g);let v=a.indexOf(b.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function u(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:u}}var Qs=class{constructor(t={}){let{canvas:e=Oh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),A=new Int32Array(4),g=null,u=null,M=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Se,this.toneMapping=Sn,this.toneMappingExposure=1;let v=this,U=!1,S=0,E=0,L=null,_=-1,C=null,w=new le,O=new le,B=null,H=new Dt(0),J=0,G=e.width,$=e.height,q=1,it=null,lt=null,vt=new le(0,0,G,$),Nt=new le(0,0,G,$),Qt=!1,X=new ji,tt=!1,At=!1,st=new he,bt=new he,wt=new D,Ft=new le,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function ue(){return L===null?q:1}let P=n;function Ue(y,V){return e.getContext(y,V)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yo}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",at,!1),P===null){let V="webgl2";if(P=Ue(V,y),P===null)throw Ue(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Bt,Ot,It,ne,_t,I,x,N,Y,K,W,yt,rt,ht,Ht,Z,ut,Mt,St,dt,kt,Pt,te,T;function nt(){Bt=new $f(P),Bt.init(),Pt=new Rg(P,Bt),Ot=new Yf(P,Bt,t,Pt),It=new wg(P,Bt),Ot.reverseDepthBuffer&&f&&It.buffers.depth.setReversed(!0),ne=new np(P),_t=new gg,I=new Vg(P,Bt,It,_t,Ot,Pt,ne),x=new Jf(v),N=new Qf(v),Y=new cu(P),te=new Wf(P,Y),K=new tp(P,Y,ne,te),W=new sp(P,K,Y,ne),St=new ip(P,Ot,I),Z=new jf(_t),yt=new pg(v,x,N,Bt,Ot,te,Z),rt=new Ng(v,_t),ht=new Ag,Ht=new Ig(Bt),Mt=new Gf(v,x,N,It,W,p,c),ut=new Sg(v,W,Ot),T=new Fg(P,ne,Ot,It),dt=new Xf(P,Bt,ne),kt=new ep(P,Bt,ne),ne.programs=yt.programs,v.capabilities=Ot,v.extensions=Bt,v.properties=_t,v.renderLists=ht,v.shadowMap=ut,v.state=It,v.info=ne}nt();let k=new so(v,P);this.xr=k,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let y=Bt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Bt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(y){y!==void 0&&(q=y,this.setSize(G,$,!1))},this.getSize=function(y){return y.set(G,$)},this.setSize=function(y,V,F=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=y,$=V,e.width=Math.floor(y*q),e.height=Math.floor(V*q),F===!0&&(e.style.width=y+"px",e.style.height=V+"px"),this.setViewport(0,0,y,V)},this.getDrawingBufferSize=function(y){return y.set(G*q,$*q).floor()},this.setDrawingBufferSize=function(y,V,F){G=y,$=V,q=F,e.width=Math.floor(y*F),e.height=Math.floor(V*F),this.setViewport(0,0,y,V)},this.getCurrentViewport=function(y){return y.copy(w)},this.getViewport=function(y){return y.copy(vt)},this.setViewport=function(y,V,F,z){y.isVector4?vt.set(y.x,y.y,y.z,y.w):vt.set(y,V,F,z),It.viewport(w.copy(vt).multiplyScalar(q).round())},this.getScissor=function(y){return y.copy(Nt)},this.setScissor=function(y,V,F,z){y.isVector4?Nt.set(y.x,y.y,y.z,y.w):Nt.set(y,V,F,z),It.scissor(O.copy(Nt).multiplyScalar(q).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(y){It.setScissorTest(Qt=y)},this.setOpaqueSort=function(y){it=y},this.setTransparentSort=function(y){lt=y},this.getClearColor=function(y){return y.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(y=!0,V=!0,F=!0){let z=0;if(y){let R=!1;if(L!==null){let Q=L.texture.format;R=Q===Eo||Q===So||Q===bo}if(R){let Q=L.texture.type,ot=Q===pn||Q===Xn||Q===Yi||Q===Ii||Q===Io||Q===Mo,pt=Mt.getClearColor(),gt=Mt.getClearAlpha(),Et=pt.r,Vt=pt.g,mt=pt.b;ot?(m[0]=Et,m[1]=Vt,m[2]=mt,m[3]=gt,P.clearBufferuiv(P.COLOR,0,m)):(A[0]=Et,A[1]=Vt,A[2]=mt,A[3]=gt,P.clearBufferiv(P.COLOR,0,A))}else z|=P.COLOR_BUFFER_BIT}V&&(z|=P.DEPTH_BUFFER_BIT),F&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ht.dispose(),Ht.dispose(),_t.dispose(),x.dispose(),N.dispose(),W.dispose(),te.dispose(),T.dispose(),yt.dispose(),k.dispose(),k.removeEventListener("sessionstart",Bo),k.removeEventListener("sessionend",Oo),Ln.stop()};function j(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let y=ne.autoReset,V=ut.enabled,F=ut.autoUpdate,z=ut.needsUpdate,R=ut.type;nt(),ne.autoReset=y,ut.enabled=V,ut.autoUpdate=F,ut.needsUpdate=z,ut.type=R}function at(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Tt(y){let V=y.target;V.removeEventListener("dispose",Tt),ce(V)}function ce(y){Ae(y),_t.remove(y)}function Ae(y){let V=_t.get(y).programs;V!==void 0&&(V.forEach(function(F){yt.releaseProgram(F)}),y.isShaderMaterial&&yt.releaseShaderCache(y))}this.renderBufferDirect=function(y,V,F,z,R,Q){V===null&&(V=oe);let ot=R.isMesh&&R.matrixWorld.determinant()<0,pt=Kl(y,V,F,z,R);It.setMaterial(z,ot);let gt=F.index,Et=1;if(z.wireframe===!0){if(gt=K.getWireframeAttribute(F),gt===void 0)return;Et=2}let Vt=F.drawRange,mt=F.attributes.position,Xt=Vt.start*Et,ee=(Vt.start+Vt.count)*Et;Q!==null&&(Xt=Math.max(Xt,Q.start*Et),ee=Math.min(ee,(Q.start+Q.count)*Et)),gt!==null?(Xt=Math.max(Xt,0),ee=Math.min(ee,gt.count)):mt!=null&&(Xt=Math.max(Xt,0),ee=Math.min(ee,mt.count));let ie=ee-Xt;if(ie<0||ie===1/0)return;te.setup(R,z,pt,F,gt);let Me,jt=dt;if(gt!==null&&(Me=Y.get(gt),jt=kt,jt.setIndex(Me)),R.isMesh)z.wireframe===!0?(It.setLineWidth(z.wireframeLinewidth*ue()),jt.setMode(P.LINES)):jt.setMode(P.TRIANGLES);else if(R.isLine){let Ct=z.linewidth;Ct===void 0&&(Ct=1),It.setLineWidth(Ct*ue()),R.isLineSegments?jt.setMode(P.LINES):R.isLineLoop?jt.setMode(P.LINE_LOOP):jt.setMode(P.LINE_STRIP)}else R.isPoints?jt.setMode(P.POINTS):R.isSprite&&jt.setMode(P.TRIANGLES);if(R.isBatchedMesh)if(R._multiDrawInstances!==null)jt.renderMultiDrawInstances(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount,R._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))jt.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else{let Ct=R._multiDrawStarts,en=R._multiDrawCounts,Jt=R._multiDrawCount,ze=gt?Y.get(gt).bytesPerElement:1,ti=_t.get(z).currentProgram.getUniforms();for(let Ve=0;Ve<Jt;Ve++)ti.setValue(P,"_gl_DrawID",Ve),jt.render(Ct[Ve]/ze,en[Ve])}else if(R.isInstancedMesh)jt.renderInstances(Xt,ie,R.count);else if(F.isInstancedBufferGeometry){let Ct=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,en=Math.min(F.instanceCount,Ct);jt.renderInstances(Xt,ie,en)}else jt.render(Xt,ie)};function Kt(y,V,F){y.transparent===!0&&y.side===hn&&y.forceSinglePass===!1?(y.side=we,y.needsUpdate=!0,as(y,V,F),y.side=En,y.needsUpdate=!0,as(y,V,F),y.side=hn):as(y,V,F)}this.compile=function(y,V,F=null){F===null&&(F=y),u=Ht.get(F),u.init(V),b.push(u),F.traverseVisible(function(R){R.isLight&&R.layers.test(V.layers)&&(u.pushLight(R),R.castShadow&&u.pushShadow(R))}),y!==F&&y.traverseVisible(function(R){R.isLight&&R.layers.test(V.layers)&&(u.pushLight(R),R.castShadow&&u.pushShadow(R))}),u.setupLights();let z=new Set;return y.traverse(function(R){if(!(R.isMesh||R.isPoints||R.isLine||R.isSprite))return;let Q=R.material;if(Q)if(Array.isArray(Q))for(let ot=0;ot<Q.length;ot++){let pt=Q[ot];Kt(pt,F,R),z.add(pt)}else Kt(Q,F,R),z.add(Q)}),b.pop(),u=null,z},this.compileAsync=function(y,V,F=null){let z=this.compile(y,V,F);return new Promise(R=>{function Q(){if(z.forEach(function(ot){_t.get(ot).currentProgram.isReady()&&z.delete(ot)}),z.size===0){R(y);return}setTimeout(Q,10)}Bt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Fe=null;function tn(y){Fe&&Fe(y)}function Bo(){Ln.stop()}function Oo(){Ln.start()}let Ln=new pl;Ln.setAnimationLoop(tn),typeof self!="undefined"&&Ln.setContext(self),this.setAnimationLoop=function(y){Fe=y,k.setAnimationLoop(y),y===null?Ln.stop():Ln.start()},k.addEventListener("sessionstart",Bo),k.addEventListener("sessionend",Oo),this.render=function(y,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(V),V=k.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,V,L),u=Ht.get(y,b.length),u.init(V),b.push(u),bt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),X.setFromProjectionMatrix(bt),At=this.localClippingEnabled,tt=Z.init(this.clippingPlanes,At),g=ht.get(y,M.length),g.init(),M.push(g),k.enabled===!0&&k.isPresenting===!0){let Q=v.xr.getDepthSensingMesh();Q!==null&&Mr(Q,V,-1/0,v.sortObjects)}Mr(y,V,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(it,lt),qt=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,qt&&Mt.addToRenderList(g,y),this.info.render.frame++,tt===!0&&Z.beginShadows();let F=u.state.shadowsArray;ut.render(F,y,V),tt===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=g.opaque,R=g.transmissive;if(u.setupLights(),V.isArrayCamera){let Q=V.cameras;if(R.length>0)for(let ot=0,pt=Q.length;ot<pt;ot++){let gt=Q[ot];qo(z,R,y,gt)}qt&&Mt.render(y);for(let ot=0,pt=Q.length;ot<pt;ot++){let gt=Q[ot];ko(g,y,gt,gt.viewport)}}else R.length>0&&qo(z,R,y,V),qt&&Mt.render(y),ko(g,y,V);L!==null&&(I.updateMultisampleRenderTarget(L),I.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(v,y,V),te.resetDefaultState(),_=-1,C=null,b.pop(),b.length>0?(u=b[b.length-1],tt===!0&&Z.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Mr(y,V,F,z){if(y.visible===!1)return;if(y.layers.test(V.layers)){if(y.isGroup)F=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(V);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||X.intersectsSprite(y)){z&&Ft.setFromMatrixPosition(y.matrixWorld).applyMatrix4(bt);let ot=W.update(y),pt=y.material;pt.visible&&g.push(y,ot,pt,F,Ft.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||X.intersectsObject(y))){let ot=W.update(y),pt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ft.copy(y.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Ft.copy(ot.boundingSphere.center)),Ft.applyMatrix4(y.matrixWorld).applyMatrix4(bt)),Array.isArray(pt)){let gt=ot.groups;for(let Et=0,Vt=gt.length;Et<Vt;Et++){let mt=gt[Et],Xt=pt[mt.materialIndex];Xt&&Xt.visible&&g.push(y,ot,Xt,F,Ft.z,mt)}}else pt.visible&&g.push(y,ot,pt,F,Ft.z,null)}}let Q=y.children;for(let ot=0,pt=Q.length;ot<pt;ot++)Mr(Q[ot],V,F,z)}function ko(y,V,F,z){let R=y.opaque,Q=y.transmissive,ot=y.transparent;u.setupLightsView(F),tt===!0&&Z.setGlobalState(v.clippingPlanes,F),z&&It.viewport(w.copy(z)),R.length>0&&rs(R,V,F),Q.length>0&&rs(Q,V,F),ot.length>0&&rs(ot,V,F),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function qo(y,V,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[z.id]===void 0&&(u.state.transmissionRenderTarget[z.id]=new gn(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Zi:pn,minFilter:Wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));let Q=u.state.transmissionRenderTarget[z.id],ot=z.viewport||w;Q.setSize(ot.z,ot.w);let pt=v.getRenderTarget();v.setRenderTarget(Q),v.getClearColor(H),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),qt&&Mt.render(F);let gt=v.toneMapping;v.toneMapping=Sn;let Et=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),u.setupLightsView(z),tt===!0&&Z.setGlobalState(v.clippingPlanes,z),rs(y,F,z),I.updateMultisampleRenderTarget(Q),I.updateRenderTargetMipmap(Q),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let mt=0,Xt=V.length;mt<Xt;mt++){let ee=V[mt],ie=ee.object,Me=ee.geometry,jt=ee.material,Ct=ee.group;if(jt.side===hn&&ie.layers.test(z.layers)){let en=jt.side;jt.side=we,jt.needsUpdate=!0,Ho(ie,F,z,Me,jt,Ct),jt.side=en,jt.needsUpdate=!0,Vt=!0}}Vt===!0&&(I.updateMultisampleRenderTarget(Q),I.updateRenderTargetMipmap(Q))}v.setRenderTarget(pt),v.setClearColor(H,J),Et!==void 0&&(z.viewport=Et),v.toneMapping=gt}function rs(y,V,F){let z=V.isScene===!0?V.overrideMaterial:null;for(let R=0,Q=y.length;R<Q;R++){let ot=y[R],pt=ot.object,gt=ot.geometry,Et=z===null?ot.material:z,Vt=ot.group;pt.layers.test(F.layers)&&Ho(pt,V,F,gt,Et,Vt)}}function Ho(y,V,F,z,R,Q){y.onBeforeRender(v,V,F,z,R,Q),y.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),R.onBeforeRender(v,V,F,z,y,Q),R.transparent===!0&&R.side===hn&&R.forceSinglePass===!1?(R.side=we,R.needsUpdate=!0,v.renderBufferDirect(F,V,z,R,y,Q),R.side=En,R.needsUpdate=!0,v.renderBufferDirect(F,V,z,R,y,Q),R.side=hn):v.renderBufferDirect(F,V,z,R,y,Q),y.onAfterRender(v,V,F,z,R,Q)}function as(y,V,F){V.isScene!==!0&&(V=oe);let z=_t.get(y),R=u.state.lights,Q=u.state.shadowsArray,ot=R.state.version,pt=yt.getParameters(y,R.state,Q,V,F),gt=yt.getProgramCacheKey(pt),Et=z.programs;z.environment=y.isMeshStandardMaterial?V.environment:null,z.fog=V.fog,z.envMap=(y.isMeshStandardMaterial?N:x).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?V.environmentRotation:y.envMapRotation,Et===void 0&&(y.addEventListener("dispose",Tt),Et=new Map,z.programs=Et);let Vt=Et.get(gt);if(Vt!==void 0){if(z.currentProgram===Vt&&z.lightsStateVersion===ot)return Wo(y,pt),Vt}else pt.uniforms=yt.getUniforms(y),y.onBeforeCompile(pt,v),Vt=yt.acquireProgram(pt,gt),Et.set(gt,Vt),z.uniforms=pt.uniforms;let mt=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(mt.clippingPlanes=Z.uniform),Wo(y,pt),z.needsLights=Ql(y),z.lightsStateVersion=ot,z.needsLights&&(mt.ambientLightColor.value=R.state.ambient,mt.lightProbe.value=R.state.probe,mt.directionalLights.value=R.state.directional,mt.directionalLightShadows.value=R.state.directionalShadow,mt.spotLights.value=R.state.spot,mt.spotLightShadows.value=R.state.spotShadow,mt.rectAreaLights.value=R.state.rectArea,mt.ltc_1.value=R.state.rectAreaLTC1,mt.ltc_2.value=R.state.rectAreaLTC2,mt.pointLights.value=R.state.point,mt.pointLightShadows.value=R.state.pointShadow,mt.hemisphereLights.value=R.state.hemi,mt.directionalShadowMap.value=R.state.directionalShadowMap,mt.directionalShadowMatrix.value=R.state.directionalShadowMatrix,mt.spotShadowMap.value=R.state.spotShadowMap,mt.spotLightMatrix.value=R.state.spotLightMatrix,mt.spotLightMap.value=R.state.spotLightMap,mt.pointShadowMap.value=R.state.pointShadowMap,mt.pointShadowMatrix.value=R.state.pointShadowMatrix),z.currentProgram=Vt,z.uniformsList=null,Vt}function Go(y){if(y.uniformsList===null){let V=y.currentProgram.getUniforms();y.uniformsList=yi.seqWithValue(V.seq,y.uniforms)}return y.uniformsList}function Wo(y,V){let F=_t.get(y);F.outputColorSpace=V.outputColorSpace,F.batching=V.batching,F.batchingColor=V.batchingColor,F.instancing=V.instancing,F.instancingColor=V.instancingColor,F.instancingMorph=V.instancingMorph,F.skinning=V.skinning,F.morphTargets=V.morphTargets,F.morphNormals=V.morphNormals,F.morphColors=V.morphColors,F.morphTargetsCount=V.morphTargetsCount,F.numClippingPlanes=V.numClippingPlanes,F.numIntersection=V.numClipIntersection,F.vertexAlphas=V.vertexAlphas,F.vertexTangents=V.vertexTangents,F.toneMapping=V.toneMapping}function Kl(y,V,F,z,R){V.isScene!==!0&&(V=oe),I.resetTextureUnits();let Q=V.fog,ot=z.isMeshStandardMaterial?V.environment:null,pt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ri,gt=(z.isMeshStandardMaterial?N:x).get(z.envMap||ot),Et=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Vt=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),mt=!!F.morphAttributes.position,Xt=!!F.morphAttributes.normal,ee=!!F.morphAttributes.color,ie=Sn;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ie=v.toneMapping);let Me=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,jt=Me!==void 0?Me.length:0,Ct=_t.get(z),en=u.state.lights;if(tt===!0&&(At===!0||y!==C)){let De=y===C&&z.id===_;Z.setState(z,y,De)}let Jt=!1;z.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==en.state.version||Ct.outputColorSpace!==pt||R.isBatchedMesh&&Ct.batching===!1||!R.isBatchedMesh&&Ct.batching===!0||R.isBatchedMesh&&Ct.batchingColor===!0&&R.colorTexture===null||R.isBatchedMesh&&Ct.batchingColor===!1&&R.colorTexture!==null||R.isInstancedMesh&&Ct.instancing===!1||!R.isInstancedMesh&&Ct.instancing===!0||R.isSkinnedMesh&&Ct.skinning===!1||!R.isSkinnedMesh&&Ct.skinning===!0||R.isInstancedMesh&&Ct.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&Ct.instancingColor===!1&&R.instanceColor!==null||R.isInstancedMesh&&Ct.instancingMorph===!0&&R.morphTexture===null||R.isInstancedMesh&&Ct.instancingMorph===!1&&R.morphTexture!==null||Ct.envMap!==gt||z.fog===!0&&Ct.fog!==Q||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Z.numPlanes||Ct.numIntersection!==Z.numIntersection)||Ct.vertexAlphas!==Et||Ct.vertexTangents!==Vt||Ct.morphTargets!==mt||Ct.morphNormals!==Xt||Ct.morphColors!==ee||Ct.toneMapping!==ie||Ct.morphTargetsCount!==jt)&&(Jt=!0):(Jt=!0,Ct.__version=z.version);let ze=Ct.currentProgram;Jt===!0&&(ze=as(z,V,R));let ti=!1,Ve=!1,Fi=!1,se=ze.getUniforms(),je=Ct.uniforms;if(It.useProgram(ze.program)&&(ti=!0,Ve=!0,Fi=!0),z.id!==_&&(_=z.id,Ve=!0),ti||C!==y){It.buffers.depth.getReversed()?(st.copy(y.projectionMatrix),qh(st),Hh(st),se.setValue(P,"projectionMatrix",st)):se.setValue(P,"projectionMatrix",y.projectionMatrix),se.setValue(P,"viewMatrix",y.matrixWorldInverse);let mn=se.map.cameraPosition;mn!==void 0&&mn.setValue(P,wt.setFromMatrixPosition(y.matrixWorld)),Ot.logarithmicDepthBuffer&&se.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&se.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),C!==y&&(C=y,Ve=!0,Fi=!0)}if(R.isSkinnedMesh){se.setOptional(P,R,"bindMatrix"),se.setOptional(P,R,"bindMatrixInverse");let De=R.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),se.setValue(P,"boneTexture",De.boneTexture,I))}R.isBatchedMesh&&(se.setOptional(P,R,"batchingTexture"),se.setValue(P,"batchingTexture",R._matricesTexture,I),se.setOptional(P,R,"batchingIdTexture"),se.setValue(P,"batchingIdTexture",R._indirectTexture,I),se.setOptional(P,R,"batchingColorTexture"),R._colorsTexture!==null&&se.setValue(P,"batchingColorTexture",R._colorsTexture,I));let zi=F.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&St.update(R,F,ze),(Ve||Ct.receiveShadow!==R.receiveShadow)&&(Ct.receiveShadow=R.receiveShadow,se.setValue(P,"receiveShadow",R.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(je.envMap.value=gt,je.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&V.environment!==null&&(je.envMapIntensity.value=V.environmentIntensity),Ve&&(se.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ct.needsLights&&Zl(je,Fi),Q&&z.fog===!0&&rt.refreshFogUniforms(je,Q),rt.refreshMaterialUniforms(je,z,q,$,u.state.transmissionRenderTarget[y.id]),yi.upload(P,Go(Ct),je,I)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(yi.upload(P,Go(Ct),je,I),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&se.setValue(P,"center",R.center),se.setValue(P,"modelViewMatrix",R.modelViewMatrix),se.setValue(P,"normalMatrix",R.normalMatrix),se.setValue(P,"modelMatrix",R.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let De=z.uniformsGroups;for(let mn=0,An=De.length;mn<An;mn++){let Xo=De[mn];T.update(Xo,ze),T.bind(Xo,ze)}}return ze}function Zl(y,V){y.ambientLightColor.needsUpdate=V,y.lightProbe.needsUpdate=V,y.directionalLights.needsUpdate=V,y.directionalLightShadows.needsUpdate=V,y.pointLights.needsUpdate=V,y.pointLightShadows.needsUpdate=V,y.spotLights.needsUpdate=V,y.spotLightShadows.needsUpdate=V,y.rectAreaLights.needsUpdate=V,y.hemisphereLights.needsUpdate=V}function Ql(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,V,F){_t.get(y.texture).__webglTexture=V,_t.get(y.depthTexture).__webglTexture=F;let z=_t.get(y);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=F===void 0,z.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,V){let F=_t.get(y);F.__webglFramebuffer=V,F.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(y,V=0,F=0){L=y,S=V,E=F;let z=!0,R=null,Q=!1,ot=!1;if(y){let gt=_t.get(y);if(gt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(P.FRAMEBUFFER,null),z=!1;else if(gt.__webglFramebuffer===void 0)I.setupRenderTarget(y);else if(gt.__hasExternalTextures)I.rebindTextures(y,_t.get(y.texture).__webglTexture,_t.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let mt=y.depthTexture;if(gt.__boundDepthTexture!==mt){if(mt!==null&&_t.has(mt)&&(y.width!==mt.image.width||y.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(y)}}let Et=y.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(ot=!0);let Vt=_t.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Vt[V])?R=Vt[V][F]:R=Vt[V],Q=!0):y.samples>0&&I.useMultisampledRTT(y)===!1?R=_t.get(y).__webglMultisampledFramebuffer:Array.isArray(Vt)?R=Vt[F]:R=Vt,w.copy(y.viewport),O.copy(y.scissor),B=y.scissorTest}else w.copy(vt).multiplyScalar(q).floor(),O.copy(Nt).multiplyScalar(q).floor(),B=Qt;if(It.bindFramebuffer(P.FRAMEBUFFER,R)&&z&&It.drawBuffers(y,R),It.viewport(w),It.scissor(O),It.setScissorTest(B),Q){let gt=_t.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+V,gt.__webglTexture,F)}else if(ot){let gt=_t.get(y.texture),Et=V||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,gt.__webglTexture,F||0,Et)}_=-1},this.readRenderTargetPixels=function(y,V,F,z,R,Q,ot){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=_t.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt){It.bindFramebuffer(P.FRAMEBUFFER,pt);try{let gt=y.texture,Et=gt.format,Vt=gt.type;if(!Ot.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=y.width-z&&F>=0&&F<=y.height-R&&P.readPixels(V,F,z,R,Pt.convert(Et),Pt.convert(Vt),Q)}finally{let gt=L!==null?_t.get(L).__webglFramebuffer:null;It.bindFramebuffer(P.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(y,V,F,z,R,Q,ot){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=_t.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt){let gt=y.texture,Et=gt.format,Vt=gt.type;if(!Ot.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=y.width-z&&F>=0&&F<=y.height-R){It.bindFramebuffer(P.FRAMEBUFFER,pt);let mt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,mt),P.bufferData(P.PIXEL_PACK_BUFFER,Q.byteLength,P.STREAM_READ),P.readPixels(V,F,z,R,Pt.convert(Et),Pt.convert(Vt),0);let Xt=L!==null?_t.get(L).__webglFramebuffer:null;It.bindFramebuffer(P.FRAMEBUFFER,Xt);let ee=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await kh(P,ee,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,mt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Q),P.deleteBuffer(mt),P.deleteSync(ee),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,V=null,F=0){y.isTexture!==!0&&(Gi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,y=arguments[1]);let z=Math.pow(2,-F),R=Math.floor(y.image.width*z),Q=Math.floor(y.image.height*z),ot=V!==null?V.x:0,pt=V!==null?V.y:0;I.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,F,0,0,ot,pt,R,Q),It.unbindTexture()},this.copyTextureToTexture=function(y,V,F=null,z=null,R=0){y.isTexture!==!0&&(Gi("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,y=arguments[1],V=arguments[2],R=arguments[3]||0,F=null);let Q,ot,pt,gt,Et,Vt,mt,Xt,ee,ie=y.isCompressedTexture?y.mipmaps[R]:y.image;F!==null?(Q=F.max.x-F.min.x,ot=F.max.y-F.min.y,pt=F.isBox3?F.max.z-F.min.z:1,gt=F.min.x,Et=F.min.y,Vt=F.isBox3?F.min.z:0):(Q=ie.width,ot=ie.height,pt=ie.depth||1,gt=0,Et=0,Vt=0),z!==null?(mt=z.x,Xt=z.y,ee=z.z):(mt=0,Xt=0,ee=0);let Me=Pt.convert(V.format),jt=Pt.convert(V.type),Ct;V.isData3DTexture?(I.setTexture3D(V,0),Ct=P.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(I.setTexture2DArray(V,0),Ct=P.TEXTURE_2D_ARRAY):(I.setTexture2D(V,0),Ct=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,V.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,V.unpackAlignment);let en=P.getParameter(P.UNPACK_ROW_LENGTH),Jt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ze=P.getParameter(P.UNPACK_SKIP_PIXELS),ti=P.getParameter(P.UNPACK_SKIP_ROWS),Ve=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ie.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ie.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Et),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Vt);let Fi=y.isDataArrayTexture||y.isData3DTexture,se=V.isDataArrayTexture||V.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let je=_t.get(y),zi=_t.get(V),De=_t.get(je.__renderTarget),mn=_t.get(zi.__renderTarget);It.bindFramebuffer(P.READ_FRAMEBUFFER,De.__webglFramebuffer),It.bindFramebuffer(P.DRAW_FRAMEBUFFER,mn.__webglFramebuffer);for(let An=0;An<pt;An++)Fi&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_t.get(y).__webglTexture,R,Vt+An),y.isDepthTexture?(se&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_t.get(V).__webglTexture,R,ee+An),P.blitFramebuffer(gt,Et,Q,ot,mt,Xt,Q,ot,P.DEPTH_BUFFER_BIT,P.NEAREST)):se?P.copyTexSubImage3D(Ct,R,mt,Xt,ee+An,gt,Et,Q,ot):P.copyTexSubImage2D(Ct,R,mt,Xt,ee+An,gt,Et,Q,ot);It.bindFramebuffer(P.READ_FRAMEBUFFER,null),It.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else se?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Ct,R,mt,Xt,ee,Q,ot,pt,Me,jt,ie.data):V.isCompressedArrayTexture?P.compressedTexSubImage3D(Ct,R,mt,Xt,ee,Q,ot,pt,Me,ie.data):P.texSubImage3D(Ct,R,mt,Xt,ee,Q,ot,pt,Me,jt,ie):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,R,mt,Xt,Q,ot,Me,jt,ie.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,R,mt,Xt,ie.width,ie.height,Me,ie.data):P.texSubImage2D(P.TEXTURE_2D,R,mt,Xt,Q,ot,Me,jt,ie);P.pixelStorei(P.UNPACK_ROW_LENGTH,en),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Jt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ze),P.pixelStorei(P.UNPACK_SKIP_ROWS,ti),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ve),R===0&&V.generateMipmaps&&P.generateMipmap(Ct),It.unbindTexture()},this.copyTextureToTexture3D=function(y,V,F=null,z=null,R=0){return y.isTexture!==!0&&(Gi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,z=arguments[1]||null,y=arguments[2],V=arguments[3],R=arguments[4]||0),Gi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,V,F,z,R)},this.initRenderTarget=function(y){_t.get(y).__webglFramebuffer===void 0&&I.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?I.setTextureCube(y,0):y.isData3DTexture?I.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?I.setTexture2DArray(y,0):I.setTexture2D(y,0),It.unbindTexture()},this.resetState=function(){S=0,E=0,L=null,It.reset(),te.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}};var $s=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},tr=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ze,this.environmentIntensity=1,this.environmentRotation=new Ze,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ji=class extends Vn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xc=new he,ro=new qs,ws=new bi,Ts=new D,er=class extends Ce{constructor(t=new Ie,e=new Ji){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(s),ws.radius+=r,t.ray.intersectsSphere(ws)===!1)return;Xc.copy(s).invert(),ro.copy(t.ray).applyMatrix4(Xc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let m=f,A=p;m<A;m++){let g=l.getX(m);Ts.fromBufferAttribute(d,g),Yc(Ts,g,c,s,t,e,this)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let m=f,A=p;m<A;m++)Ts.fromBufferAttribute(d,m),Yc(Ts,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Yc(i,t,e,n,s,r,a){let o=ro.distanceSqToPoint(i);if(o<e){let c=new D;ro.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var nr=class extends Le{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ki=class i extends Ie{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new D,h=new Wt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let p=n+d/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},wi=class i extends Ie{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],p=[],m=0,A=[],g=n/2,u=0;M(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(p,2));function M(){let v=new D,U=new D,S=0,E=(e-t)/n;for(let L=0;L<=r;L++){let _=[],C=L/r,w=C*(e-t)+t;for(let O=0;O<=s;O++){let B=O/s,H=B*c+o,J=Math.sin(H),G=Math.cos(H);U.x=w*J,U.y=-C*n+g,U.z=w*G,d.push(U.x,U.y,U.z),v.set(J,E,G).normalize(),f.push(v.x,v.y,v.z),p.push(B,1-C),_.push(m++)}A.push(_)}for(let L=0;L<s;L++)for(let _=0;_<r;_++){let C=A[_][L],w=A[_+1][L],O=A[_+1][L+1],B=A[_][L+1];(t>0||_!==0)&&(h.push(C,w,B),S+=3),(e>0||_!==r-1)&&(h.push(w,O,B),S+=3)}l.addGroup(u,S,0),u+=S}function b(v){let U=m,S=new Wt,E=new D,L=0,_=v===!0?t:e,C=v===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,g*C,0),f.push(0,C,0),p.push(.5,.5),m++;let w=m;for(let O=0;O<=s;O++){let H=O/s*c+o,J=Math.cos(H),G=Math.sin(H);E.x=_*G,E.y=g*C,E.z=_*J,d.push(E.x,E.y,E.z),f.push(0,C,0),S.x=J*.5+.5,S.y=G*.5*C+.5,p.push(S.x,S.y),m++}for(let O=0;O<s;O++){let B=U+O,H=w+O;v===!0?h.push(H,H+1,B):h.push(H+1,H,B),L+=3}l.addGroup(u,L,v===!0?1:2),u+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ir=class i extends wi{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var sr=class i extends Ie{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],d=t,f=(e-t)/s,p=new D,m=new Wt;for(let A=0;A<=s;A++){for(let g=0;g<=n;g++){let u=r+g/n*a;p.x=d*Math.cos(u),p.y=d*Math.sin(u),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}d+=f}for(let A=0;A<s;A++){let g=A*(n+1);for(let u=0;u<n;u++){let M=u+g,b=M,v=M+n+1,U=M+n+2,S=M+1;o.push(b,v,S),o.push(v,U,S)}}this.setIndex(o),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Jn=class i extends Ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new D,f=new D,p=[],m=[],A=[],g=[];for(let u=0;u<=n;u++){let M=[],b=u/n,v=0;u===0&&a===0?v=.5/e:u===n&&c===Math.PI&&(v=-.5/e);for(let U=0;U<=e;U++){let S=U/e;d.x=-t*Math.cos(s+S*r)*Math.sin(a+b*o),d.y=t*Math.cos(a+b*o),d.z=t*Math.sin(s+S*r)*Math.sin(a+b*o),m.push(d.x,d.y,d.z),f.copy(d).normalize(),A.push(f.x,f.y,f.z),g.push(S+v,1-b),M.push(l++)}h.push(M)}for(let u=0;u<n;u++)for(let M=0;M<e;M++){let b=h[u][M+1],v=h[u][M],U=h[u+1][M],S=h[u+1][M+1];(u!==0||a>0)&&p.push(b,v,S),(u!==n-1||c<Math.PI)&&p.push(v,U,S)}this.setIndex(p),this.setAttribute("position",new ae(m,3)),this.setAttribute("normal",new ae(A,3)),this.setAttribute("uv",new ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ti=class i extends Ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new D,d=new D,f=new D;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){let A=m/s*r,g=p/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(A),d.y=(t+e*Math.cos(g))*Math.sin(A),d.z=e*Math.sin(g),o.push(d.x,d.y,d.z),h.x=t*Math.cos(A),h.y=t*Math.sin(A),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){let A=(s+1)*p+m-1,g=(s+1)*(p-1)+m-1,u=(s+1)*(p-1)+m,M=(s+1)*p+m;a.push(A,g,M),a.push(g,u,M)}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var rr=class extends Vn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Vs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function zg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Vi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ao=class extends Vi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ko,endingEnd:Ko}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zo:r=t,o=2*e-n;break;case Qo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Zo:a=t,c=2*n-e;break;case Qo:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),A=m*m,g=A*m,u=-f*g+2*f*A-f*m,M=(1+f)*g+(-1.5-2*f)*A+(-.5+f)*m+1,b=(-1-p)*g+(1.5+p)*A+.5*m,v=p*g-p*A;for(let U=0;U!==o;++U)r[U]=u*a[h+U]+M*a[l+U]+b*a[c+U]+v*a[d+U];return r}},oo=class extends Vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*d+a[c+f]*h;return r}},co=class extends Vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ge=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vs(e,this.TimeBufferType),this.values=Vs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vs(t.times,Array),values:Vs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ao(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Fs:e=this.InterpolantFactoryMethodDiscrete;break;case ka:e=this.InterpolantFactoryMethodLinear;break;case Sr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return ka;case this.InterpolantFactoryMethodSmooth:return Sr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&zg(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,f=d-n,p=d+n;for(let m=0;m!==n;++m){let A=e[d+m];if(A!==e[f+m]||A!==e[p+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ge.prototype.TimeBufferType=Float32Array;Ge.prototype.ValueBufferType=Float32Array;Ge.prototype.DefaultInterpolation=ka;var Kn=class extends Ge{constructor(t,e,n){super(t,e,n)}};Kn.prototype.ValueTypeName="bool";Kn.prototype.ValueBufferType=Array;Kn.prototype.DefaultInterpolation=Fs;Kn.prototype.InterpolantFactoryMethodLinear=void 0;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends Ge{};lo.prototype.ValueTypeName="color";var ho=class extends Ge{};ho.prototype.ValueTypeName="number";var uo=class extends Vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Tn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ar=class extends Ge{InterpolantFactoryMethodLinear(t){return new uo(this.times,this.values,this.getValueSize(),t)}};ar.prototype.ValueTypeName="quaternion";ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends Ge{constructor(t,e,n){super(t,e,n)}};Zn.prototype.ValueTypeName="string";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=Fs;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends Ge{};fo.prototype.ValueTypeName="vector";var po=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],m=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},Bg=new po,go=class{constructor(t){this.manager=t!==void 0?t:Bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};go.DEFAULT_MATERIAL_NAME="__DEFAULT";var or=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},cr=class extends or{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ea=new he,jc=new D,Jc=new D,mo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ji,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;jc.setFromMatrixPosition(t.matrixWorld),e.position.copy(jc),Jc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jc),e.updateMatrixWorld(),ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ao=class extends mo{constructor(){super(new Js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lr=class extends or{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Ao}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var hr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Kc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Kc(){return performance.now()}var To="\\[\\]\\.:\\/",Og=new RegExp("["+To+"]","g"),Vo="[^"+To+"]",kg="[^"+To.replace("\\.","")+"]",qg=/((?:WC+[\/:])*)/.source.replace("WC",Vo),Hg=/(WCOD+)?/.source.replace("WCOD",kg),Gg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vo),Wg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vo),Xg=new RegExp("^"+qg+Hg+Gg+Wg+"$"),Yg=["material","materials","bones","map"],xo=class{constructor(t,e,n){let s=n||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Og,"")}static parseTrackName(t){let e=Xg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=xo;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cm=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);var We=[{id:"p0",x:0,z:0,r:3.4,y:3},{id:"p1",x:-10,z:-6,r:2.6,y:4.5},{id:"p2",x:10,z:-6,r:2.6,y:4},{id:"p3",x:-10,z:7,r:2.6,y:2.4},{id:"p4",x:10,z:8,r:2.6,y:5},{id:"p5",x:0,z:-13,r:2.8,y:6},{id:"p6",x:0,z:12.5,r:2.3,y:1.2}],$i=Object.fromEntries(We.map(i=>[i.id,i]));function pr(i,t,e,n,s={}){return{kind:i,ax:t.x,ay:t.y,az:t.z,bx:e.x,by:e.y,bz:e.z,w:n,rails:i!=="ramp",...s}}function ts(i,t,e,n=.3){let s=Math.hypot(t,e);return{x:i.x+t/s*(i.r-n),y:i.y,z:i.z+e/s*(i.r-n)}}function Li(i,t,e){let n=$i[i],s=$i[t];return pr("bridge",ts(n,s.x-n.x,s.z-n.z),ts(s,n.x-s.x,n.z-s.z),1.5,{from:i,to:t,...e})}function Ui(i,t,e,n,s){let r=ts($i[t],e,n),a=Math.hypot(e,n);return pr(i,r,{x:r.x+e/a*s,y:0,z:r.z+n/a*s},i==="slide"?1.3:1.8,{from:t})}var Qn=[Li("p0","p1"),Li("p0","p3"),Li("p1","p5"),Li("p2","p5"),Li("p0","p6"),Li("p2","p4"),Ui("ramp","p3",-1,0,4.6),Ui("ramp","p6",0,1,3.4),Ui("ramp","p2",1,0,6),Ui("slide","p5",.8,-.6,8.4),Ui("slide","p4",.6,.8,7),Ui("slide","p1",-.8,-.6,6.3)];{let i=ts($i.p0,1,-.6),t=ts($i.p2,-1,.6),e=(i.x+t.x)/2,n=(i.z+t.z)/2,s=(i.y+t.y)/2,r=t.x-i.x,a=t.z-i.z,o=Math.hypot(r,a),c=.9;Qn.push(pr("bridge",i,{x:e-r/o*c,y:s,z:n-a/o*c},1.5,{broken:!0})),Qn.push(pr("bridge",{x:e+r/o*c,y:s,z:n+a/o*c},t,1.5,{broken:!0}))}var Di=[{x:-4.5,z:-4.5,to:"p1"},{x:-4,z:-17.5,to:"p5"},{x:14.5,z:2.5,to:"p4"},{x:-5.2,z:8.6,to:"p0"}].map(i=>({...i,r:.8})),Cl=We.map(i=>({x:i.x,z:i.z,r:.75,top:i.y-.3})),Xe=[{id:1,ar:"\u0633\u0627\u062D\u0629 \u0627\u0644\u0634\u062C\u0631",en:"Canopy Commons",time:40,rivals:2,speed:3.7},{id:2,ar:"\u062C\u0633\u0631 \u0627\u0644\u062D\u0628\u0627\u0644",en:"Rope Bridges",time:45,rivals:3,speed:3.9},{id:3,ar:"\u0627\u0644\u0645\u0634\u0631\u0648\u0645 \u0627\u0644\u0646\u0637\u0651\u0627\u0637",en:"Bouncy Mushrooms",time:50,rivals:3,speed:4.1},{id:4,ar:"\u0627\u0644\u0632\u062D\u0627\u0644\u064A\u0642",en:"Slide Hill",time:55,rivals:4,speed:4.2},{id:5,ar:"\u0628\u0631\u062C \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629",en:"Lookout Tower",time:60,rivals:4,speed:4.25},{id:6,ar:"\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u063A\u0627\u0628\u0629",en:"Forest Cup",time:60,rivals:4,speed:4.3}],gr=[{kind:"raccoon",ar:"\u0631\u0627\u0643\u0648\u0646",en:"Rocky"},{kind:"bear",ar:"\u062F\u0628\u062F\u0648\u0628",en:"Bruno"},{kind:"fox",ar:"\u062B\u0639\u0644\u0648\u0628",en:"Foxy"},{kind:"bunny",ar:"\u0623\u0631\u0646\u0648\u0628\u0629",en:"Bunny"},{kind:"cat",ar:"\u0642\u0637\u0642\u0648\u0637\u0629",en:"Kitty"}];function jg(i,t,e){let n=i.bx-i.ax,s=i.bz-i.az,r=n*n+s*s,a=((t-i.ax)*n+(e-i.az)*s)/r,o=Math.sqrt(r),c=((t-i.ax)*s-(e-i.az)*n)/o;return{t:a,side:c,y:i.ay+(i.by-i.ay)*Math.max(0,Math.min(1,a))}}function Ro(i,t,e,n=.45){let s=0,r=null;for(let a of We)a.y<=e+n&&a.y>s&&Math.hypot(i-a.x,t-a.z)<=a.r&&(s=a.y,r=a);for(let a of Qn){let o=jg(a,i,t);o.t<-.02||o.t>1.02||Math.abs(o.side)>a.w/2||o.y<=e+n&&o.y>s-.001&&(s=o.y,r=a)}return{y:s,surf:r}}function vl(){let i=[],t=(a,o,c,l)=>(i.push({i:i.length,x:a,y:o,z:c,tag:l,out:[]}),i.length-1),e=(a,o,c=!0,l=0)=>{let h=Math.hypot(i[a].x-i[o].x,i[a].y-i[o].y,i[a].z-i[o].z)+l;i[a].out.push({to:o,d:h}),c&&i[o].out.push({to:a,d:h})},n={};for(let a of We)n[a.id]=t(a.x,a.y,a.z,a.id);let s={};for(let a of We)s[a.id]=[n[a.id]];let r=[];for(let a of Qn){if(a.broken)continue;let o=t(a.ax,a.ay,a.az,a.kind),c=t(a.bx,a.by,a.bz,a.kind);e(o,c,a.kind!=="slide"),s[a.from].push(o),a.kind==="bridge"?s[a.to].push(c):r.push(c)}for(let a of We)for(let o=0;o<3;o++){let c=o/3*Math.PI*2+.5,l=Math.cos(c),h=Math.sin(c);if(Qn.some(m=>{if(m.from!==a.id&&m.to!==a.id)return!1;let A=m.from===a.id?m.ax:m.bx,g=m.from===a.id?m.az:m.bz,M=Math.atan2(g-a.z,A-a.x)-c;for(;M>Math.PI;)M-=Math.PI*2;for(;M<-Math.PI;)M+=Math.PI*2;return Math.abs(M)<.8}))continue;let f=t(a.x+l*(a.r-.4),a.y,a.z+h*(a.r-.4),"edge");s[a.id].push(f);let p=t(a.x+l*(a.r+1.2),0,a.z+h*(a.r+1.2),"drop");e(f,p,!1,1),r.push(p)}for(let a of Object.keys(s)){let o=s[a];for(let c=0;c<o.length;c++)for(let l=c+1;l<o.length;l++)e(o[c],o[l])}for(let a of Di){let o=t(a.x,0,a.z,"mushroom");e(o,n[a.to],!1,-2),r.push(o)}for(let a=0;a<10;a++){let o=a/10*Math.PI*2;r.push(t(Math.cos(o)*18,0,Math.sin(o)*18,"ground"))}for(let a=0;a<6;a++){let o=a/6*Math.PI*2+.3;r.push(t(Math.cos(o)*6.5,0,Math.sin(o)*6.5,"ground"))}for(let a=0;a<r.length;a++)for(let o=a+1;o<r.length;o++){let c=i[r[a]],l=i[r[o]];Math.hypot(c.x-l.x,c.z-l.z)<13&&e(r[a],r[o])}return i}function _l(i,t){let e=i.length,n=new Float64Array(e).fill(1/0),s=Array.from({length:e},()=>[]);for(let a of i)for(let o of a.out)s[o.to].push({from:a.i,d:o.d});n[t]=0;let r=new Uint8Array(e);for(let a=0;a<e;a++){let o=-1;for(let c=0;c<e;c++)!r[c]&&(o<0||n[c]<n[o])&&(o=c);if(o<0||n[o]===1/0)break;r[o]=1;for(let c of s[o])n[o]+c.d<n[c.from]&&(n[c.from]=n[o]+c.d)}return n}function Il(i){let t=i&&typeof i=="object"?i:{},e={};if(t.stars&&typeof t.stars=="object")for(let s of Xe){let r=Math.floor(Number(t.stars[s.id]));r>=1&&r<=3&&(e[s.id]=r)}let n=Math.floor(Number(t.unlocked));return{unlocked:Number.isFinite(n)?Math.max(1,Math.min(Xe.length,n)):1,stars:e,muted:t.muted===!0}}var Jg=5.2,Kg=8.8,Ml=10,bl=1.6,$n=Object.fromEntries(We.map(i=>[i.id,i]));function Zg(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var es=null,Sl=null;function Qg(){return es||(es=vl(),Sl=es.map(i=>_l(es,i.i))),{nodes:es,dist:Sl}}var Ar=class{constructor(t={}){var r,a;this.level=Xe[(r=t.level)!=null?r:0],this.easy=!!t.easy,this.rand=Zg((a=t.seed)!=null?a:9);let{nodes:e,dist:n}=Qg();this.nodes=e,this.dist=n,this.timeLeft=this.level.time,this.time=0,this.state="ready",this.readyT=3,this.events=[],this.player=this._ent(0,"dino",0,$n.p0.y,1.5,Jg),this.player.isPlayer=!0,this.rivals=[];let s=["p1","p2","p4","p3","p5"];for(let o=0;o<this.level.rivals;o++){let c=gr[o],l=$n[s[o]],h=this.level.speed*(this.easy?.8:1)*(.96+this.rand()*.08),d=this._ent(o+1,c.kind,l.x,l.y,l.z,h);d.name=c,d.think=this.rand(),this.rivals.push(d)}this.all=[this.player,...this.rivals],this.holder=this.rivals[Math.floor(this.rand()*this.rivals.length)],this.holder.immune=1,this.held=0,this.lost=0,this.grabs=0}_ent(t,e,n,s,r,a){return{id:t,kind:e,x:n,y:s,z:r,vy:0,grounded:!0,face:0,moving:0,stun:0,immune:0,grabCd:0,reach:0,speed:a,launch:null,next:-1,goal:-1,repick:0,surf:null,sliding:!1}}get youWin(){return this.holder===this.player}_respawn(t){let e=t.x,n=t.z;if(this.holder===t){let s=this.rivals[0];for(let r of this.rivals)Math.hypot(r.x-e,r.z-n)<Math.hypot(s.x-e,s.z-n)&&(s=r);this.holder=s,s.immune=1.2,this.lost++}Object.assign(t,{x:$n.p0.x,y:$n.p0.y,z:$n.p0.z+1.5,vy:0,grounded:!0,surf:$n.p0,launch:null,stun:.6,immune:1.2,fallFrom:0}),this.events.push({type:"fell",x:e,z:n})}jump(){let t=this.player;return this.state!=="play"||!t.grounded||t.stun>0?!1:(t.vy=Kg,t.grounded=!1,this.events.push({type:"jump",who:0}),!0)}grab(){let t=this.player;return this.state!=="play"||t.grabCd>0||t.stun>0||this.holder===t?!1:(t.grabCd=.35,this._canGrab(t,this.holder,bl)?(this._steal(t),!0):(this.events.push({type:"whiff"}),!1))}_canGrab(t,e,n){return e.immune<=0&&Math.hypot(t.x-e.x,t.z-e.z)<n&&Math.abs(t.y-e.y)<1.4}_steal(t){let e=this.holder;e.stun=.9,e.immune=0,t.immune=t.isPlayer?2.2:1.6,t.grabCd=.5,this.holder=t,e===this.player&&this.lost++,t===this.player&&this.grabs++;for(let n of this.rivals)n!==t&&(n.grabCd=Math.max(n.grabCd,.5));this.events.push({type:"steal",by:t.id,from:e.id,x:t.x,y:t.y,z:t.z})}step(t,e={x:0,z:0}){if(this.events=[],this.state==="over")return this.events;if(this.time+=t,this.state==="ready"){let o=Math.ceil(this.readyT);return this.readyT-=t,Math.ceil(this.readyT)!==o&&this.readyT>0&&this.events.push({type:"count",n:Math.ceil(this.readyT)}),this.readyT<=0&&(this.state="play",this.events.push({type:"go"})),this.events}let n=Math.ceil(this.timeLeft);this.timeLeft-=t,Math.ceil(this.timeLeft)!==n&&this.timeLeft<=10&&this.timeLeft>0&&this.events.push({type:"tick",n:Math.ceil(this.timeLeft)}),this.holder===this.player&&(this.held+=t);for(let o of this.all)o.stun=Math.max(0,o.stun-t),o.immune=Math.max(0,o.immune-t),o.grabCd=Math.max(0,o.grabCd-t);let{x:s,z:r}=e,a=Math.hypot(s,r);a>1&&(s/=a,r/=a),this._move(this.player,s,r,this.player.speed,t),this.easy&&this.holder!==this.player&&this._canGrab(this.player,this.holder,bl*.8)&&this._steal(this.player);for(let o of this.rivals)this._brain(o,t);for(let o of this.rivals){if(this.holder===o||o.stun>0||o.grabCd>0){o.reach=0;continue}this._canGrab(o,this.holder,1.15)?(o.reach+=t,o.reach>(this.easy?.45:.25)&&(o.reach=0,this._steal(o))):o.reach=0}return this._separate(),this.timeLeft<=0&&(this.timeLeft=0,this.state="over",this.events.push({type:"over",win:this.youWin})),this.events}get result(){let t=this.youWin;return{win:t,stars:t?1+(this.held>=this.level.time*.4?1:0)+(this.lost<=2?1:0):0,held:this.held,lost:this.lost,grabs:this.grabs}}_move(t,e,n,s,r){var m;t.stun>0&&(e=0,n=0);let a=Math.hypot(e,n);t.moving=Math.min(1,a);let o=e*s,c=n*s,l=t.grounded?t.surf:null;if(t.sliding=!!(l&&l.kind==="slide"),t.sliding){let A=l.bx-l.ax,g=l.bz-l.az,u=Math.hypot(A,g);o=A/u*Ml+o*.2,c=g/u*Ml+c*.2,t.moving=1}t.launch&&(o=t.launch.vx,c=t.launch.vz),Math.hypot(o,c)>.3&&(t.face=Math.atan2(o,c));let h=t.x,d=t.z;if(t.x+=o*r,t.z+=c*r,l&&l.rails){let A=l.bx-l.ax,g=l.bz-l.az,u=Math.hypot(A,g),M=((t.x-l.ax)*A+(t.z-l.az)*g)/(u*u),b=((t.x-l.ax)*g-(t.z-l.az)*A)/u,v=l.w/2-.25;if(M>.04&&M<.96&&Math.abs(b)>v){let U=(Math.abs(b)-v)*Math.sign(b);t.x-=g/u*U,t.z+=A/u*U}}for(let A of Cl){if(t.y>A.top)continue;let g=Math.hypot(t.x-A.x,t.z-A.z),u=A.r+.35;g<u&&(t.x=A.x+(t.x-A.x)/(g||1)*u,t.z=A.z+(t.z-A.z)/(g||1)*u)}let f=Math.hypot(t.x,t.z);f>25-.6&&(t.x*=(25-.6)/f,t.z*=(25-.6)/f);let p=Ro(t.x,t.z,t.y);if(t.grounded&&t.y-p.y<=.55&&t.vy<=0)t.y=p.y,t.surf=p.surf;else{t.grounded&&(t.grounded=!1,t.vy=Math.min(t.vy,0),t.fallFrom=t.y),t.vy-=24*r,t.y+=t.vy*r;let A=Ro(t.x,t.z,Math.max(t.y,p.y));if(t.vy<=0&&t.y<=A.y){let g=-t.vy;t.y=A.y,t.vy=0,t.grounded=!0,t.surf=A.surf,t.launch=null,t.next=-1,this.events.push({type:"land",who:t.id,hard:g>9}),t.isPlayer&&t.y<.05&&((m=t.fallFrom)!=null?m:0)>1&&this.state==="play"&&this._respawn(t)}}if(t.grounded&&t.y<.05){for(let A of Di)if(Math.hypot(t.x-A.x,t.z-A.z)<A.r){let g=$n[A.to],u=Math.sqrt(2*24*(g.y+2.2)),M=u/24+Math.sqrt(2*2.2/24);t.vy=u,t.grounded=!1,t.launch={vx:(g.x-t.x)/M,vz:(g.z-t.z)/M},t.next=-1,this.events.push({type:"bounce",who:t.id,x:A.x,z:A.z});break}}}_separate(){let t=this.all;for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){let s=t[e],r=t[n];if(Math.abs(s.y-r.y)>1)continue;let a=r.x-s.x,o=r.z-s.z,c=Math.hypot(a,o)||.01;if(c<.8){let l=(.8-c)/2;s.x-=a/c*l,s.z-=o/c*l,r.x+=a/c*l,r.z+=o/c*l}}}nodeNear(t){let e=0,n=1/0;for(let s of this.nodes){let r=Math.hypot(s.x-t.x,s.z-t.z)+Math.abs(s.y-t.y)*4;r<n&&(n=r,e=s.i)}return e}_brain(t,e){if(t.stun>0||!t.grounded){this._move(t,0,0,t.speed,e);return}let n=this.holder,s,r,a=n===t,o=t.speed*(a?.9:1);if(!a&&Math.hypot(n.x-t.x,n.z-t.z)<3.5&&Math.abs(n.y-t.y)<.6)s=n.x,r=n.z,t.next=-1;else{if(t.repick-=e,a){if(Math.hypot(this.player.x-t.x,this.player.z-t.z)<7&&t.repick>.8&&(t.repick=.8),t.goal<0||t.repick<=0){let p=this.nodeNear(this.player),m=0,A=-1/0;for(let g of this.nodes){let u=this.dist[p][g.i]-.35*this.dist[g.i][this.nodeNear(t)]+this.rand()*4;Number.isFinite(u)&&u>A&&(A=u,m=g.i)}t.goal=m,t.repick=2+this.rand(),t.next=-1}}else(t.goal<0||t.repick<=0)&&(t.goal=this.nodeNear(n),t.repick=.6);t.next<0&&(t.next=this.nodeNear(t));let d=this.nodes[t.next];if(Math.hypot(d.x-t.x,d.z-t.z)<.5&&Math.abs(d.y-t.y)<.7){let f=this.dist[t.goal],p=-1,m=1/0;for(let A of d.out){let g=A.d+f[A.to];g<m&&(m=g,p=A.to)}(d.i===t.goal||m>f[d.i]+.01)&&(p=-1),p<0?(a&&(t.repick=0),s=a?t.x+(t.x-this.player.x):n.x,r=a?t.z+(t.z-this.player.z):n.z):(t.next=p,s=this.nodes[p].x,r=this.nodes[p].z)}else s=d.x,r=d.z}let c=s-t.x,l=r-t.z,h=Math.hypot(c,l);h<.05?this._move(t,0,0,o,e):this._move(t,c/h,l/h,o,e)}};var Po=new Map;function xt(i,t=0,e=1){let n=`${i}|${t}|${e}`;return Po.has(n)||Po.set(n,new rr({color:i,emissive:t,emissiveIntensity:e})),Po.get(n)}function xr(i,t,e,n,s=0,r=0,a=0){let o=new $t(new jn(i,t,e),n);return o.position.set(s,r,a),o}function Ye(i,t,e,n,s=0,r=0,a=0,o=14){let c=new $t(new wi(i,t,e,o),n);return c.position.set(s,r,a),c}function Ut(i,t,e=0,n=0,s=0,r=1,a=1,o=1,c=14){let l=new $t(new Jn(i,c,Math.max(8,c-4)),t);return l.position.set(e,n,s),l.scale.set(r,a,o),l}function Pn(i,t,e,n=0,s=0,r=0,a=10){let o=new $t(new ir(i,t,a),e);return o.position.set(n,s,r),o}function wl(i,t,e,n,s=.11){for(let r of[-1,1])i.add(Ut(s,xt(16777215),r*n,t,e,1,1.15,.6,12)),i.add(Ut(s*.62,xt(2759184),r*n,t-s*.05,e+s*.35,1,1.15,.5,10)),i.add(Ut(s*.22,xt(16777215,16777215,.6),r*n+s*.2,t+s*.3,e+s*.62,1,1,.5,6))}function Tl(){let i=new Yt,t=new Yt;i.add(t);let e=xt(6080586),n=xt(3842106),s=xt(15921336),r=[];for(let g of[-.2,.2]){let u=new Yt;u.position.set(g,.36,0),u.add(Ye(.13,.15,.3,e,0,-.16,0,10)),u.add(Ut(.16,e,0,-.33,.06,1,.55,1.3,10));for(let M of[-.07,0,.07])u.add(Ut(.035,s,M,-.34,.24,1,.8,1,6));t.add(u),r.push(u)}t.add(Ut(.42,e,0,.72,0,1,1.05,.95,18)),t.add(Ut(.3,s,0,.66,.2,1,1.15,.6,14));let a=[];for(let g of[-1,1]){let u=new Yt;u.position.set(g*.38,.85,.08),u.add(Ut(.1,e,0,-.1,.05,1,1.4,1,8)),t.add(u),a.push(u)}let o=new Yt;o.position.set(0,.6,-.36),o.add(Pn(.22,.75,e,0,0,-.3,12).rotateX(-Math.PI/2-.35)),t.add(o);let c=new Yt;c.position.set(0,1.32,.05),c.add(Ut(.4,e,0,0,0,1.05,.95,1,18)),c.add(Ut(.3,e,0,-.1,.26,1.15,.75,.9,14)),wl(c,.1,.33,.17,.12);for(let g of[-1,1])c.add(Ut(.03,n,g*.08,-.04,.53,1,1,.5,6));let l=new $t(new Ti(.17,.03,6,16,Math.PI),xt(9054762));l.position.set(0,-.16,.44),l.rotation.z=Math.PI,c.add(l),c.add(Ut(.08,xt(16747162),0,-.22,.44,1.2,.5,.6,8));for(let g of[-1,1])c.add(Ut(.07,xt(16751272),g*.3,-.06,.32,1,.6,.4,8));t.add(c);let h=xt(3842106);for(let g=0;g<7;g++){let u=-.2+g*.32,M=Pn(.09-g*.004,.2,h,0,0,0,6);M.position.set(0,1.32+Math.cos(u)*.42-(g>2?(g-2)*.22:0),Math.sin(-u)*.42-(g>2?.1:0)),M.rotation.x=-u,t.add(M)}let d=xt(15217706),f=Ye(.36,.4,.12,d,0,1,.02,16);t.add(f);let p=Pn(.24,.32,d,0,.86,.33,3);p.rotation.x=Math.PI,p.rotation.y=Math.PI,p.scale.z=.35,t.add(p);let m=new Yt;m.add(Ut(.045,xt(16777215),0,0,0,1,.8,.3,8));for(let[g,u]of[[-.05,.05],[0,.07],[.05,.05]])m.add(Ut(.018,xt(16777215),g,u,0,1,1,.3,6));m.position.set(0,.87,.42),t.add(m);let A=new Yt;return A.position.set(0,.6,-.4),t.add(A),{root:i,body:t,legs:r,arms:a,head:c,back:A,tail:o}}var El={raccoon:{fur:9409692,belly:15263976,ear:5922406},bear:{fur:11037242,belly:15253642,ear:8014374},fox:{fur:15759914,belly:16774374,ear:3811872},bunny:{fur:16184048,belly:16767974,ear:16758472},cat:{fur:14211304,belly:16777215,ear:16758472}};function Vl(i){var d;let t=(d=El[i])!=null?d:El.bear,e=new Yt,n=new Yt;e.add(n);let s=xt(t.fur),r=xt(t.belly),a=[];for(let f of[-.17,.17]){let p=new Yt;p.position.set(f,.34,0),p.add(Ye(.11,.13,.3,s,0,-.15,0,10)),p.add(Ut(.14,i==="raccoon"?xt(3816e3):s,0,-.32,.05,1,.55,1.3,10)),n.add(p),a.push(p)}n.add(Ut(.36,s,0,.68,0,1,1.05,.95,16)),n.add(Ut(.25,r,0,.64,.18,1,1.15,.6,12));let o=[];for(let f of[-1,1]){let p=new Yt;p.position.set(f*.34,.84,.05),p.add(Ut(.09,i==="raccoon"?xt(3816e3):s,0,-.12,.04,1,1.5,1,8)),n.add(p),o.push(p)}let c=new Yt;c.position.set(0,1.25,.03),c.add(Ut(.38,s,0,0,0,1.08,.95,1,16)),c.add(Ut(.17,r,0,-.1,.29,1.25,.85,.75,12)),c.add(Ut(.06,xt(2759194),0,-.03,.44,1.2,.85,.8,8)),i==="raccoon"&&c.add(Ut(.24,xt(3816e3),0,.07,.22,1.45,.48,.6,12)),wl(c,.08,.31,.15,.1);let l=new $t(new Ti(.07,.018,5,12,Math.PI),xt(6957610));l.position.set(0,-.17,.42),l.rotation.z=Math.PI,c.add(l);for(let f of[-1,1]){if(i==="bunny"){let p=Ut(.09,s,f*.13,.5,-.02,1,3,.6,10);p.rotation.z=-f*.15,c.add(p),c.add(Ut(.05,xt(t.ear),f*.13,.5,.03,1,2.6,.4,8))}else if(i==="fox"||i==="cat"){let p=Pn(.13,.3,s,f*.22,.34,0,4);if(p.rotation.z=-f*.3,c.add(p),i==="fox"){let m=Pn(.06,.12,xt(t.ear),f*.27,.46,0,4);m.rotation.z=-f*.3,c.add(m)}}else c.add(Ut(.12,s,f*.26,.29,0,1,1,.6,10)),c.add(Ut(.07,xt(t.ear),f*.26,.29,.04,1,1,.4,8));c.add(Ut(.06,xt(16751272),f*.26,-.08,.3,1,.6,.4,8))}if(i==="cat")for(let f of[-1,1])for(let p of[-1,1])c.add(xr(.2,.012,.012,xt(6974074),f*.25,-.06+p*.03,.4).rotateZ(f*p*.15));if(n.add(c),i==="raccoon"){let f=new Yt;for(let p=0;p<4;p++)f.add(Ut(.13-p*.012,xt(p%2?3816e3:10133158),0,0,-p*.16,1,1,1,10));f.position.set(0,.55,-.35),f.rotation.x=.4,n.add(f)}else if(i==="fox"){let f=Ut(.15,s,0,.5,-.45,1,1,2.2,10);f.rotation.x=.5,n.add(f)}else n.add(Ut(.1,i==="bunny"?xt(16777215):s,0,.5,-.36,1,1,1,8));let h=new Yt;return h.position.set(0,.6,-.38),n.add(h),{root:e,body:n,legs:a,arms:o,head:c,back:h}}function Rl(){let i=new Yt,t=xt(16761370,16751104,.55),e=xt(16770688,16761370,.6),n=[];for(let r=0;r<6;r++){let a=Ut(.15-r*.012,r%2?e:t,0,-r*.04,-.12-r*.17,1,1,1.25,12);i.add(a),n.push(a)}let s=Ut(.1,xt(16774856,16770688,.8),0,-.26,-1.15,1,1,1.3,10);return i.add(s),n.push(s),{root:i,parts:n}}var Pl=12618322,yr=10119738;function Ll(i,t){let e=new Yt;e.position.set(i.x,0,i.z);let n=Ye(.55,.95,i.y+1.3,xt(8015402),0,(i.y+1.3)/2,0,12);e.add(n);let s=18;for(let a=0;a<s;a++){let o=new $t(new wi(i.r,i.r,.18,4,1,!1,a/s*Math.PI*2,Math.PI*2/s*.96),xt(a%2?Pl:11697222));o.position.y=i.y-.09,e.add(o)}e.add(Ye(i.r*.32,i.r*.32,.2,xt(9067056),0,i.y-.08,0,16));let r=new $t(new Ti(i.r,.08,6,36),xt(yr));r.rotation.x=Math.PI/2,r.position.y=i.y-.05,e.add(r);for(let a=0;a<4;a++){let o=a/4*Math.PI*2+.4,c=Ye(.08,.08,i.y*.75,xt(yr),Math.cos(o)*i.r*.45,i.y*.62,Math.sin(o)*i.r*.45,6);c.rotation.z=Math.cos(o)*.5,c.rotation.x=-Math.sin(o)*.5,e.add(c)}return t||(e.add(new $t(new Jn(.75,10,8),xt(5221962)).translateY(i.y+1.5)),e.add(new $t(new Jn(.5,9,7),xt(7128143)).translateY(i.y+1.2).translateX(.55)),e.add(new $t(new Jn(.5,9,7),xt(7128143)).translateY(i.y+1.25).translateX(-.5).translateZ(.2))),e}function Ul(i){let t=new Yt,e=i.bx-i.ax,n=i.by-i.ay,s=i.bz-i.az,r=Math.hypot(e,n,s),a=Math.hypot(e,s),o=new D((i.ax+i.bx)/2,(i.ay+i.by)/2,(i.az+i.bz)/2),c=new Yt;if(c.position.copy(o),c.rotation.order="YXZ",c.rotation.y=Math.atan2(e,s),c.rotation.x=-Math.atan2(n,a),t.add(c),i.kind==="slide"){c.add(xr(i.w,.1,r,xt(16738890),0,-.05,0));for(let h of[-1,1])c.add(xr(.12,.35,r,xt(16761402),h*i.w/2,.1,0))}else{let l=Math.max(3,Math.round(r/.32));for(let h=0;h<l;h++)c.add(xr(i.w,.08,r/l*.82,xt(h%2?Pl:11697222),0,-.04,-r/2+(h+.5)*(r/l)));if(i.rails)for(let h of[-1,1]){let d=Ye(.035,.035,r,xt(15258784),h*i.w/2,.75,0,6);d.rotation.x=Math.PI/2,c.add(d);let f=Math.max(2,Math.round(r/1.4));for(let p=0;p<=f;p++)c.add(Ye(.05,.05,.8,xt(yr),h*i.w/2,.38,-r/2+p*r/f,6))}}if(i.kind!=="bridge")for(let l of[.35,.7]){let h=i.ay+(i.by-i.ay)*l;h<.4||t.add(Ye(.07,.07,h,xt(yr),i.ax+e*l,h/2,i.az+s*l,6))}return t}function Dl(){let i=new Yt;i.add(Ye(.28,.36,.5,xt(16774364),0,.25,0,12));let t=Ut(.8,xt(15217706),0,.5,0,1,.5,1,18);i.add(t);for(let e=0;e<7;e++){let n=e/7*Math.PI*2,s=e===0?0:.48;i.add(Ut(.11,xt(16777215),Math.cos(n)*s,.86-(s?.12:0),Math.sin(n)*s,1,.4,1,8))}return{root:i,cap:t}}function Nl(i=1){let t=new Yt;t.add(Ye(.3*i,.45*i,4*i,xt(6964262),0,2*i,0,8));let e=xt(4168262),n=xt(6076492);return t.add(Ut(1.8*i,e,0,4.6*i,0,1,.85,1,10)),t.add(Ut(1.2*i,n,1*i,4*i,.5*i,1,.85,1,9)),t.add(Ut(1.3*i,n,-1*i,4.3*i,-.4*i,1,.85,1,9)),t}function Fl(i=1){let t=new Yt,e=xt(5681226);return t.add(Ut(.7*i,e,0,.4*i,0,1,.7,1,10)),t.add(Ut(.5*i,xt(7128150),.5*i,.35*i,.2*i,1,.7,1,9)),t}function zl(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,c]of Object.entries(t))try{let l=atob(c.split(",")[1]),h=new Uint8Array(l.length);for(let f=0;f<l.length;f++)h[f]=l.charCodeAt(f);let d=a.ctx.decodeAudioData(h.buffer,f=>{a._smp[o]=f},()=>{});d&&d.catch&&d.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let c=this.ctx;if(c&&c.state==="running"&&!this.muted&&this.on!==!1){r(this);let l=this._smp&&this._smp[a];if(l){let h=c.createBufferSource(),d=c.createGain();h.buffer=l,d.gain.value=e[a]||.8,h.connect(d),d.connect(this.sfx||this.master||c.destination),h.start(c.currentTime+.005);return}}return n.call(this,a,o)}}function Bl(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let c=a.ctx;fetch(o).then(l=>l.ok?l.arrayBuffer():Promise.reject()).then(l=>c.decodeAudioData(l)).then(l=>{if(a.ctx!==c)return;let h=c.createBufferSource(),d=c.createGain();h.buffer=l,h.loop=!0,d.gain.value=t,h.connect(d),d.connect(a.master||c.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var Ol={jump:"data:audio/mpeg;base64,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",bounce:"data:audio/mpeg;base64,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",grab:"data:audio/mpeg;base64,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",slide:"data:audio/mpeg;base64,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",lose:"data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVUapsFJoki4WRDBB1IhICkgZI+oCtHpCVr/wojQ0fqQwYj+r//2f+VJD09gzWkkFDTK1UxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE+AINSSsYR5hxSjYco1j0jxFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEtwPGKBkkQwhmIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",win:"data:audio/mpeg;base64,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"};var $g="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",me=null,Cr=!1;function kl(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Lo(){kl(),Cr=!0;try{if(me||(me=document.createElement("audio"),me.src=$g,me.loop=!0,me.preload="auto",me.setAttribute("playsinline",""),me.setAttribute("webkit-playsinline",""),me.setAttribute("x-webkit-airplay","deny"),me.volume=.01,me.addEventListener("pause",()=>{Cr&&!document.hidden&&setTimeout(()=>Cr&&me.paused&&me.play().catch(()=>{}),300)})),me.paused){let i=me.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function ql(){Cr=!1;try{me&&!me.paused&&me.pause()}catch{}}function Hl(i,t){kl();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var vr=i=>440*Math.pow(2,(i-69)/12),tm=[[36,[60,64,67]],[45,[60,64,69]],[41,[60,65,69]],[43,[59,62,67]],[36,[60,64,67]],[45,[60,64,69]],[38,[62,65,69]],[43,[59,62,67]]],em=[[0,0,79],[0,3,76],[0,6,79],[0,10,81],[1,0,79],[1,6,76],[1,10,72],[2,0,77],[2,3,76],[2,6,74],[2,10,72],[3,0,74],[3,6,79],[4,0,84],[4,3,83],[4,6,81],[4,10,79],[5,0,76],[5,6,79],[6,0,77],[6,6,74],[6,10,77],[7,0,79],[7,8,83]],Ni=class{constructor(){this.ctx=null,this.muted=!1,this.mode="off",this.plucks=new Map}unlock(){if(Lo(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;Hl(this.ctx,()=>!!(this.held||this._held)),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.4,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master);let s=e.createDelay(.8);s.delayTime.value=.36;let r=e.createGain();r.gain.value=.22;let a=e.createGain();a.gain.value=.18,this.music.connect(s),s.connect(r).connect(s),s.connect(a).connect(this.master);let o=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),c=o.getChannelData(0);for(let l=0;l<c.length;l++)c[l]=Math.random()*2-1;this.noiseBuf=o,this._timer=setInterval(()=>this._schedule(),30),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_silentTick(){try{let t=this.ctx,e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01;let e=t.play();e&&e.then&&e.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){ql(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){Lo(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(t,e){this.mode===t&&!e||(this.mode=t,this.ctx&&(this.tempo=t==="play"?118:100,this.step=0,this.nextTime=this.ctx.currentTime+.12))}dispose(){clearInterval(this._timer),this.ctx&&this.ctx.close(),this.ctx=null}_pluckBuffer(t){if(this.plucks.has(t))return this.plucks.get(t);let e=this.ctx,n=e.sampleRate,s=Math.floor(n*1.2),r=e.createBuffer(1,s,n),a=r.getChannelData(0),o=Math.max(2,Math.round(n/vr(t))),c=new Float32Array(o);for(let h=0;h<o;h++)c[h]=(Math.random()*2-1)*.6;let l=0;for(let h=0;h<s;h++){let d=(l+1)%o,f=(c[l]+c[d])*.5*.993;a[h]=c[l],c[l]=f,l=d}return this.plucks.set(t,r),r}pluck(t,e,n=.25,s=this.music){let r=this.ctx.createBufferSource();r.buffer=this._pluckBuffer(t);let a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=1400;let o=this.ctx.createGain();o.gain.value=n,r.connect(a).connect(o).connect(s),r.start(e),r.stop(e+1.2)}marimba(t,e,n=.12,s=this.music){this._tone("sine",vr(t),e,.45,n,s,.002),this._tone("sine",vr(t)*3.93,e,.08,n*.35,s,.001)}bongo(t,e=300,n=.12,s=this.music){this._slide("sine",e*1.5,e,t,.14,n,s)}_tone(t,e,n,s,r,a=this.sfx,o=.005){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,n);let h=c.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),l.connect(h).connect(a),l.start(n),l.stop(n+s+.05),l}_noise(t,e,n,s,r,a=1,o=this.sfx,c){let l=this.ctx,h=l.createBufferSource();h.buffer=this.noiseBuf;let d=l.createBiquadFilter();d.type=s,d.frequency.setValueAtTime(r,t),c&&d.frequency.exponentialRampToValueAtTime(c,t+e),d.Q.value=a;let f=l.createGain();f.gain.setValueAtTime(1e-4,t),f.gain.exponentialRampToValueAtTime(n,t+Math.min(.01,e/4)),f.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(d).connect(f).connect(o),h.start(t,Math.random()*.5),h.stop(t+e+.05)}_slide(t,e,n,s,r,a,o=this.sfx){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,s),l.frequency.exponentialRampToValueAtTime(n,s+r);let h=c.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.015),h.gain.exponentialRampToValueAtTime(1e-4,s+r),l.connect(h).connect(o),l.start(s),l.stop(s+r+.05)}setTension(t){this.tension=t}_schedule(){var a,o;let t=this.ctx;if(!t||t.state!=="running"||this.mode==="off")return;let e=t.currentTime+.2,n=this.mode==="play",r=60/(this.tempo+(n?((a=this.tension)!=null?a:0)*26:0))/4;for(;this.nextTime<e;){let c=this.nextTime,l=this.step%128,h=Math.floor(l/16),d=l%16,[f,p]=tm[h];if((d===0||d===10)&&this.pluck(f,c,.32),(d===6||d===14)&&this.pluck(f+7,c,.22),d%4===2)for(let m of p)this.marimba(m,c,.035);for(let[m,A,g]of em)m===h&&A===d&&this.marimba(g,c,n?.12:.1);if(n)d%4===0&&this.bongo(c,220,.1),d%8===6&&this.bongo(c,330,.08),d%2===1&&this._noise(c,.035,.025,"highpass",7e3,.8,this.music),((o=this.tension)!=null?o:0)>.5&&d%2===0&&this._noise(c,.03,.03,"highpass",9e3,.8,this.music);else if(d===8&&Math.random()<.25){let m=2400+Math.random()*900;this._slide("sine",m,m*1.3,c,.1,.025,this.music),this._slide("sine",m*1.2,m*.9,c+.13,.09,.02,this.music)}this.step++,this.nextTime+=r}}play(t,e){if(!this.on)return;let n=this.ctx.currentTime+.005,s=this.sfx;switch(t){case"step":this._noise(n,.04,.05,"bandpass",e?900:1600,2.5);break;case"jump":this._slide("sine",300,760,n,.18,.12);break;case"land":this._tone("sine",120,n,.12,e?.22:.12),this._noise(n,.06,.06,"lowpass",600);break;case"bounce":{let r=this.ctx,a=r.createOscillator();a.type="sine",a.frequency.setValueAtTime(140,n),a.frequency.exponentialRampToValueAtTime(620,n+.35);let o=r.createOscillator();o.frequency.value=22;let c=r.createGain();c.gain.value=40,o.connect(c).connect(a.frequency);let l=r.createGain();l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(.18,n+.02),l.gain.exponentialRampToValueAtTime(1e-4,n+.55),a.connect(l).connect(s),a.start(n),o.start(n),a.stop(n+.6),o.stop(n+.6);break}case"slide":this._slide("sine",1400,420,n,.7,.06);break;case"grab":this._noise(n,.15,.1,"bandpass",900,1,s,4e3),[84,88,91,96,100].forEach((r,a)=>this._tone("sine",vr(r),n+.05+a*.05,.25,.07));break;case"stolen":this._slide("triangle",660,330,n,.35,.09),this._slide("triangle",520,260,n+.3,.45,.08);break;case"rivalGrab":this._noise(n,.12,.06,"bandpass",1200,1,s,3e3),this._tone("sine",520,n+.05,.12,.05);break;case"whiff":this._noise(n,.12,.05,"bandpass",1500,1.2,s,600);break;case"count":this._tone("square",660,n,.14,.05);break;case"go":this._tone("square",990,n,.35,.06),this._tone("square",1320,n,.35,.03);break;case"tick":this._tone("square",e<=3?1200:900,n,.05,.05);break;case"win":[[72,0],[76,.12],[79,.24],[84,.36],[88,.6],[91,.72],[96,.9]].forEach(([r,a])=>this.marimba(r,n+a,.2,s)),[0,.12,.24,.36].forEach(r=>this.bongo(n+.9+r,260,.14,s));break;case"lose":[79,76,72,67].forEach((r,a)=>this.marimba(r,n+a*.18,.16,s));break;case"tap":this._tone("sine",880,n,.06,.05);break;case"no":this._tone("square",220,n,.12,.04);break;default:}}};zl(Ni,Ol);Bl(Ni);var Uo={title:["\u0645\u063A\u0627\u0645\u0631\u0629 \u0627\u0644\u0630\u064A\u0644 \u0627\u0644\u0630\u0647\u0628\u064A","Golden Tail Chase"],level:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629","Level"],locked:["\u0627\u0643\u0633\u0628 \u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627","Win the level before"],play:["\u064A\u0644\u0627 \u0646\u0644\u0639\u0628!","Let's play!"],exit:["\u062E\u0631\u0648\u062C","Exit"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","Paused"],resume:["\u0643\u0645\u0651\u0644","Continue"],menu:["\u0627\u0644\u0642\u0627\u0626\u0645\u0629","Menu"],restart:["\u0645\u0646 \u0627\u0644\u0623\u0648\u0644","Restart"],ready:["\u0627\u0633\u062A\u0639\u062F!","Get ready!"],goal:["\u{1F996} \u062E\u0644\u0651\u064A \u0627\u0644\u0630\u064A\u0644 \u0627\u0644\u0630\u0647\u0628\u064A \u0645\u0639\u0627\u0643 \u0644\u0645\u0627 \u0627\u0644\u0648\u0642\u062A \u064A\u062E\u0644\u0635!","\u{1F996} Wear the golden tail when the clock hits 0:00!"],go:["\u064A\u0644\u0627!","Go!"],you:["\u0623\u0646\u0627","YOU"],me:["\u0645\u0639\u0627\u0643 \u0627\u0644\u0630\u064A\u0644!","You have it!"],grab:["\u0627\u0645\u0633\u0643","GRAB"],jump:["\u0646\u0637","JUMP"],got:["\u0645\u0633\u0643\u062A \u0627\u0644\u0630\u064A\u0644! \u0627\u062C\u0631\u064A! \u{1F3C3}","Got it! Run! \u{1F3C3}"],lost:["\u062E\u062F\u0648\u0647 \u0645\u0646\u0643! \u0627\u0645\u0633\u0643\u0647 \u062A\u0627\u0646\u064A!","They took it! Grab it back!"],fell:["\u0648\u0642\u0639\u062A! \u0627\u0631\u062C\u0639 \u0645\u0646 \u0627\u0644\u0628\u062F\u0627\u064A\u0629 \u{1F996}","You fell! Back to the start \u{1F996}"],hint:["\u0627\u062C\u0631\u064A \u0648\u0631\u0627 \u0627\u0644\u0644\u064A \u0645\u0639\u0627\u0647 \u0627\u0644\u0630\u064A\u0644 \u0648\u0627\u062F\u0648\u0633 \xAB\u0627\u0645\u0633\u0643\xBB","Chase whoever has the tail and press GRAB"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631! \u0627\u0644\u0630\u064A\u0644 \u0645\u0639\u0627\u0643! \u{1F389}","Well done! The tail is yours! \u{1F389}"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629! \u0627\u0644\u0630\u064A\u0644 \u0645\u0639\u0627\u0643\u064A! \u{1F389}","Well done! The tail is yours! \u{1F389}"],lose_m:["\u0642\u0631\u0651\u0628\u062A! \u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A \u{1F4AA}","So close! Try again \u{1F4AA}"],lose_f:["\u0642\u0631\u0651\u0628\u062A\u064A! \u062C\u0631\u0651\u0628\u064A \u062A\u0627\u0646\u064A \u{1F4AA}","So close! Try again \u{1F4AA}"],held:["\u0645\u0639\u0627\u0643 \u0627\u0644\u0630\u064A\u0644","Tail time"],grabs:["\u0645\u0633\u0643\u0627\u062A","Grabs"],sec:["\u062B","s"],next:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062C\u0627\u064A\u0629","Next level"],again:["\u062A\u0627\u0646\u064A","Again"],loading:["\u0628\u0646\u062C\u0647\u0651\u0632 \u0627\u0644\u063A\u0627\u0628\u0629...","Getting the forest ready..."],noWebgl:["\u0627\u0644\u062C\u0647\u0627\u0632 \u062F\u0647 \u0645\u0634 \u0628\u064A\u0634\u063A\u0651\u0644 \u0627\u0644\u0644\u0639\u0628\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F.","This device cannot run the 3D game."],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"]},ns="ar",Gl=!1,Wl=i=>{ns=i==="en"?"en":"ar"},Xl=i=>{Gl=!!i},is=()=>ns,zt=i=>{let t=`${i}_${Gl?"f":"m"}`,e=Uo[t]?t:i;return Uo[e]?Uo[e][ns==="en"?1:0]:i},$e=i=>ns==="en"?String(i):String(i).replace(/[0-9]/g,t=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[t]),ss=i=>ns==="en"?i.en:i.ar;var Do={ar:{go:["\u064A\u0627\u0644\u0627 \u0627\u0646\u0637\u0644\u0642!","\u0627\u0646\u0637\u0644\u0642 \u064A\u0627 \u0628\u0637\u0644!"],nitro:["\u0646\u064A\u062A\u0631\u0648\u0648\u0648! \u0637\u064A\u0631 \u064A\u0627 \u0648\u062D\u0634!","\u064A\u0627 \u0633\u0644\u0627\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0631\u0639\u0629!","\u0646\u064A\u062A\u0631\u0648! \u0627\u0645\u0633\u0643 \u0627\u0644\u0637\u0631\u064A\u0642!"],overtake:["\u0639\u062F\u0651\u064A\u062A\u0647! \u0628\u0631\u0627\u0641\u0648 \u0639\u0644\u064A\u0643!","\u062A\u062C\u0627\u0648\u0632 \u0631\u0627\u0626\u0639 \u064A\u0627 \u0628\u0637\u0644!","\u0627\u064A\u0648\u0647 \u0643\u062F\u0647! \u0633\u0628\u0642\u062A\u0647!"],overtaken:["\u0648\u0644\u0627 \u064A\u0647\u0645\u0643\u060C \u0647\u062A\u0639\u062F\u064A\u0647!","\u062E\u0644\u064A\u0643 \u0648\u0631\u0627\u0647\u060C \u0641\u0631\u0635\u062A\u0643 \u062C\u0627\u064A\u0629!"],near:["\u064A\u0627\u0627\u0627\u0647! \u0643\u0627\u0646\u062A \u0642\u0631\u064A\u0628\u0629!","\u0639\u062F\u0651\u062A \u0639\u0644\u0649 \u062E\u064A\u0631! \u0642\u0644\u0628\u0643 \u062C\u0627\u0645\u062F!","\u0627\u0648\u0648\u0647! \u0642\u0631\u064A\u0628\u0629 \u0642\u0648\u064A!"],bump:["\u0627\u0648\u0628\u0633! \u062E\u0628\u0637\u0629 \u0635\u063A\u064A\u0631\u0629\u060C \u0643\u0645\u0651\u0644!","\u0648\u0644\u0627 \u064A\u0647\u0645\u0643 \u064A\u0627 \u0628\u0637\u0644\u060C \u0643\u0645\u0651\u0644!"],charge:["\u0646\u064A\u062A\u0631\u0648 \u062C\u062F\u064A\u062F \u062C\u0627\u0647\u0632!","\u0639\u0646\u062F\u0643 \u0646\u064A\u062A\u0631\u0648!"],pickup:["\u0623\u064A\u0648\u0647! \u0639\u0645\u0644\u0629!","\u062C\u0645\u0639\u062A \u0639\u0645\u0644\u0629! \u0628\u0631\u0627\u0641\u0648!"],trick:["\u062D\u0631\u0643\u0629 \u0628\u0647\u0644\u0648\u0627\u0646\u064A\u0629! \u0648\u0627\u0648!","\u064A\u0627 \u0633\u0644\u0627\u0645 \u0639\u0644\u0649 \u0627\u0644\u062D\u0631\u0643\u0629!"],draft:["\u0631\u0627\u0643\u0628 \u0648\u0631\u0627\u0647! \u0627\u0644\u0647\u0648\u0627 \u0628\u064A\u0632\u0642\u0651\u0643!","\u0633\u0644\u064A\u0628 \u0633\u062A\u0631\u064A\u0645! \u0633\u0631\u0639\u0629 \u0632\u064A\u0627\u062F\u0629!"],lap:["\u0644\u0641\u0651\u0629 \u062C\u062F\u064A\u062F\u0629! \u0643\u0645\u0651\u0644 \u064A\u0627 \u0628\u0637\u0644!","\u0622\u062E\u0631 \u0644\u0641\u0651\u0629! \u0627\u062F\u064A\u0647\u0627 \u0643\u0644 \u0627\u0644\u0644\u064A \u0639\u0646\u062F\u0643!"],win:["\u0643\u0633\u0628\u062A \u064A\u0627 \u0628\u0637\u0644! \u0627\u0646\u062A \u0627\u0644\u0623\u0648\u0644!","\u0645\u0628\u0631\u0648\u0648\u0648\u0643! \u0628\u0637\u0644 \u0627\u0644\u0633\u0628\u0627\u0642!"],lose:["\u0644\u0639\u0628\u062A \u062D\u0644\u0648 \u0642\u0648\u064A! \u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A \u0648\u0647\u062A\u0643\u0633\u0628!","\u0643\u0646\u062A \u0642\u0631\u064A\u0628! \u0627\u0644\u0645\u0631\u0629 \u0627\u0644\u062C\u0627\u064A\u0629 \u0628\u062A\u0627\u0639\u062A\u0643!"],count:["\u0627\u0633\u062A\u0639\u062F!"]},en:{go:["Let's go!","Go, champion, go!"],nitro:["Nitrooo! Fly, superstar!","Wow, so fast!","Nitro boost! Hold on tight!"],overtake:["You passed him! Bravo!","Great overtake, champion!","Yes! You are ahead!"],overtaken:["Don't worry, you'll pass him!","Stay close, your chance is coming!"],near:["Whoa! That was close!","Phew! Great driving!","Ooh! So close!"],bump:["Oops! Small bump, keep going!","No worries, champion, keep going!"],charge:["New nitro ready!","You have a nitro!"],pickup:["Yes! A coin!","You got a coin! Bravo!"],trick:["Amazing trick! Wow!","What a move!"],draft:["Right behind him! The wind pushes you!","Slipstream! Extra speed!"],lap:["New lap! Keep going, champion!","Last lap! Give it everything!"],win:["You won, champion! First place!","Hooray! Racing star!"],lose:["Great racing! Try again and win!","So close! Next one is yours!"],count:["Get ready!"]}},nm=[[/يا بطل/g,"\u064A\u0627 \u0628\u0637\u0644\u0629"]],_r=class{constructor(t={}){var e,n;this.base=t.base||"./",this.lang=t.lang==="en"?"en":"ar",this.girl=!!t.girl,this.clips=t.clips||{},this.cooldown=(e=t.cooldown)!=null?e:3,this.gap=(n=t.gap)!=null?n:1.4,this.muted=!1,this.unlocked=!1,this.lastSay=-1/0,this.lastEvent={},this.pick={},this.audio=null,this.failed=new Set}setMuted(t){let e=!!t;e!==this.muted&&(this.muted=e,this.muted&&this._stop())}unlock(){this.unlocked=!0;try{let t=window.speechSynthesis;t&&t.getVoices().length===0&&t.getVoices()}catch{}}_stop(){if(this.audio){try{this.audio.pause()}catch{}this.audio=null}try{window.speechSynthesis&&window.speechSynthesis.cancel()}catch{}}_phrase(t){let e=Do[this.lang]&&Do[this.lang][t]||Do.ar[t]||[];if(!e.length)return null;let n=((this.pick[t]=(this.pick[t]||0)+1)-1)%e.length,s=e[n];if(this.girl&&this.lang==="ar")for(let[r,a]of nm)s=s.replace(r,a);return{text:s,n:n+1}}say(t,e=performance.now()/1e3){var a;if(this.muted||!this.unlocked||e-this.lastSay<this.gap||e-((a=this.lastEvent[t])!=null?a:-1/0)<this.cooldown)return!1;let n=this._phrase(t);if(!n)return!1;this.lastSay=e,this.lastEvent[t]=e;let s=this.clips[t]||0,r=`${t}_${n.n}`;if(s>=n.n&&!this.failed.has(r)){let o=new Audio(`${this.base}voice/${this.lang}/${r}.mp3`);o.volume=.95,o.onerror=()=>{this.failed.add(r),this._speak(n.text)};let c=o.play();return c&&c.catch&&c.catch(()=>{this.failed.add(r),this._speak(n.text)}),this.audio=o,!0}return this._speak(n.text)}_speak(t){try{let e=window.speechSynthesis;if(!e)return!1;let n=new SpeechSynthesisUtterance(t);n.lang=this.lang==="ar"?"ar-EG":"en-US",n.rate=1.05,n.pitch=1.15;let r=e.getVoices().find(a=>a.lang&&a.lang.toLowerCase().startsWith(this.lang));return r&&(n.voice=r),e.cancel(),e.speak(n),!0}catch{return!1}}dispose(){this._stop()}};var Yl=`
.gt-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#5a3a1a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#9fdcff}
.gt-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.gt-layer{position:absolute;inset:0;pointer-events:none}
.gt-layer button,.gt-layer .gt-card{pointer-events:auto}
.gt-pill{display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);background:#fff7e6;border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*4.4);box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.gt-coin{display:inline-block;width:calc(var(--u)*4.2);height:calc(var(--u)*4.2);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe58a,#f5b72c 60%,#c98a14);border:calc(var(--u)*.35) solid #a8692a;box-sizing:border-box}
.gt-round{position:absolute;width:calc(var(--u)*11);height:calc(var(--u)*11);border-radius:calc(var(--u)*3);border:calc(var(--u)*.5) solid #c98a3a;background:#fff7e6;color:#5a3a1a;font-size:calc(var(--u)*5);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;padding:0;font-family:inherit}
.gt-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline:calc(var(--u)*16);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.2)}
.gt-sign{background:linear-gradient(180deg,#e0a35c,#c27a35);color:#fff;font-weight:900;font-size:calc(var(--u)*3.8);border-radius:calc(var(--u)*1.6);padding:calc(var(--u)*.4) calc(var(--u)*3);border:calc(var(--u)*.4) solid #8a4f1d;text-shadow:0 2px 0 #8a4f1d}
.gt-bar{position:relative;width:100%;max-width:calc(var(--u)*80);height:calc(var(--u)*6);background:#fff7e6;border:calc(var(--u)*.6) solid #c98a3a;border-radius:999px;overflow:hidden;box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.gt-bar i{position:absolute;inset-block:0;inset-inline-start:0;background:linear-gradient(180deg,#ffd75e,#f2a51e);transition:width .25s}
.gt-bar b{position:absolute;inset-inline-end:calc(var(--u)*2);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);color:#5a3a1a}
.gt-bar s{position:absolute;inset-inline-start:calc(var(--u)*1.6);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);text-decoration:none}
.gt-label{position:absolute;transform:translate(-50%,-100%);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:calc(var(--u)*1.2);padding:0 calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.2);white-space:nowrap;pointer-events:none}
.gt-label.full{background:#ffd75e;animation:gtPulse .5s infinite alternate}
@keyframes gtPulse{to{transform:translate(-50%,-100%) scale(1.12)}}
.gt-toast{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.6);text-align:center;white-space:nowrap;opacity:0;transition:opacity .25s;pointer-events:none;box-shadow:0 calc(var(--u)*.8) 0 #a8692a}
.gt-toast.show{opacity:1}
.gt-joy{position:absolute;width:calc(var(--u)*24);height:calc(var(--u)*24);margin:calc(var(--u)*-12) 0 0 calc(var(--u)*-12);border-radius:50%;border:calc(var(--u)*.8) solid rgba(255,255,255,.7);background:rgba(255,255,255,.15);pointer-events:none;display:none}
.gt-joy i{position:absolute;left:50%;top:50%;width:calc(var(--u)*10);height:calc(var(--u)*10);margin:calc(var(--u)*-5) 0 0 calc(var(--u)*-5);border-radius:50%;background:rgba(255,255,255,.85)}
.gt-float{position:absolute;font-weight:900;font-size:calc(var(--u)*4.6);color:#f2a51e;text-shadow:0 2px 0 #fff,0 0 6px #fff;pointer-events:none;animation:gtUp 1s ease-out forwards}
@keyframes gtUp{to{transform:translateY(calc(var(--u)*-12));opacity:0}}
.gt-dim{position:absolute;inset:0;background:rgba(40,25,10,.35);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box}
.gt-panel{background:#fff7e6;border:calc(var(--u)*.8) solid #c98a3a;border-radius:calc(var(--u)*4);box-shadow:0 calc(var(--u)*1.2) 0 #a8692a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;pointer-events:auto}
.gt-title{font-size:calc(var(--u)*7);font-weight:900;color:#c2552a;text-align:center;line-height:1.1}
.gt-btn2{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);color:#fff;border:none;border-radius:calc(var(--u)*2.6);padding:calc(var(--u)*1.8) calc(var(--u)*5);min-height:calc(var(--u)*11);cursor:pointer;background:linear-gradient(180deg,#5ccf5a,#33a333);box-shadow:0 calc(var(--u)*.8) 0 #1f7a1f;display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);justify-content:center}
.gt-btn2.wood{background:linear-gradient(180deg,#e0a35c,#c27a35);box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d}
.gt-btn2[disabled]{background:#c9c4bb;box-shadow:0 calc(var(--u)*.8) 0 #9a958c}
.gt-btn2:active{transform:translateY(calc(var(--u)*.5))}
.gt-btn2:focus-visible,.gt-node:focus-visible,.gt-round:focus-visible{outline:calc(var(--u)*.7) solid #2f6fd8;outline-offset:calc(var(--u)*.5)}
.gt-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:calc(var(--u)*2)}
.gt-land .gt-grid{grid-template-columns:repeat(4,minmax(0,1fr))}
.gt-card{background:#fff;border:calc(var(--u)*.5) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.8);text-align:center}
.gt-card .ic{font-size:calc(var(--u)*8)}
.gt-card .nm{font-weight:900;font-size:calc(var(--u)*4.4)}
.gt-card .sb{font-size:calc(var(--u)*3);opacity:.8}
.gt-card .pips{display:flex;gap:calc(var(--u)*.6)}
.gt-card .pip{width:calc(var(--u)*3);height:calc(var(--u)*1.4);border-radius:9px;background:#e0c9a3}
.gt-card .pip.on{background:#f2a51e}
.gt-card .st{font-weight:900;font-size:calc(var(--u)*3.2)}
.gt-map{display:grid;grid-template-columns:repeat(4,calc(var(--u)*17));gap:calc(var(--u)*2.4) calc(var(--u)*3);justify-content:center}
.gt-node{width:calc(var(--u)*17);height:calc(var(--u)*17);border-radius:50%;border:calc(var(--u)*.8) solid #fff;background:radial-gradient(circle at 40% 35%,#e9b46a,#b8742e);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*6.4);cursor:pointer;box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;position:relative;display:flex;align-items:center;justify-content:center;text-shadow:0 2px 0 #8a4f1d}
.gt-node.lock{background:radial-gradient(circle at 40% 35%,#e2e2e2,#a8a8a8);box-shadow:0 calc(var(--u)*.8) 0 #7a7a7a}
.gt-node.next{animation:gtPulse2 .8s infinite alternate}
@keyframes gtPulse2{to{transform:scale(1.08)}}
.gt-node .stars{position:absolute;bottom:calc(var(--u)*-4.4);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*3);white-space:nowrap;text-shadow:none}
.gt-logo{font-size:calc(var(--u)*9);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.5) #8a4f1d;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;text-align:center}
.gt-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#f2a51e;background:#bfe8ff}
.gt-stars{font-size:calc(var(--u)*10);letter-spacing:calc(var(--u)*1)}
.gt-stars .off{filter:grayscale(1);opacity:.4}
.gt-made{display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center}
.gt-made div{background:#fff;border:calc(var(--u)*.4) solid #e0c9a3;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*2);text-align:center;font-weight:900}
.gt-made b{display:block;font-size:calc(var(--u)*5.4)}
.gt-made span{font-size:calc(var(--u)*2.8)}
.gt-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*16);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
`;function ft(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var jl=`
.gt-root{background:#7cc8f0;color:#2a3a1a}
.gt-padlbl{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;font-weight:900;pointer-events:none;text-shadow:0 2px 0 #fff,0 0 6px #fff}
.gt-padlbl .ic{font-size:calc(var(--u)*6)}
.gt-padlbl .c{display:inline-flex;align-items:center;gap:calc(var(--u)*.8);font-size:calc(var(--u)*3.8);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:999px;padding:0 calc(var(--u)*1.6)}
.gt-padlbl .n{font-size:calc(var(--u)*2.8);white-space:nowrap}
.gt-bubble{position:absolute;transform:translate(-50%,-100%);background:#fff;border:calc(var(--u)*.4) solid #e0a35c;border-radius:calc(var(--u)*2);padding:calc(var(--u)*.3) calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.6);white-space:nowrap;pointer-events:none}
.gt-bubble:after{content:'';position:absolute;left:50%;bottom:calc(var(--u)*-1.6);margin-left:calc(var(--u)*-1);border:calc(var(--u)*1) solid transparent;border-top-color:#e0a35c}
.gt-hint{position:absolute;left:50%;bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));transform:translateX(-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.2);white-space:nowrap;pointer-events:none;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;transition:opacity .3s}
.gt-chefs{display:flex;gap:calc(var(--u)*3)}
.gt-chef{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);background:#fff;border:calc(var(--u)*.6) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*4);cursor:pointer;color:#5a3a1a}
.gt-chef .f{font-size:calc(var(--u)*9)}
.gt-chef.on{border-color:#f2a51e;background:#fff3d0;box-shadow:0 0 0 calc(var(--u)*.6) #ffd75e}
.gt-big{font-size:calc(var(--u)*6);padding:calc(var(--u)*2.4) calc(var(--u)*8)}
.gt-stat{display:flex;gap:calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.6)}
`,Jl=`
.gt-root .gt-panel{background:rgba(250,255,240,.95);border-color:#2f8a3a;box-shadow:0 calc(var(--u)*1.2) 0 #1f6a2a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.35);color:#1f3a1a}
.gt-root .gt-title{color:#1f7a2a}
.gt-root .gt-logo{-webkit-text-stroke-color:#1f6a2a;text-shadow:0 calc(var(--u)*.8) 0 #1f6a2a;color:#ffd23a}
.gt-root .gt-node{background:radial-gradient(circle at 40% 35%,#3fae4a,#1f6a2a);box-shadow:0 calc(var(--u)*.8) 0 #0f4a1a;border-color:#ffd23a}
.gt-root .gt-node.lock{background:radial-gradient(circle at 40% 35%,#9ab89a,#5a7a5a);border-color:#fff}
.gt-root .gt-map{grid-template-columns:repeat(3,calc(var(--u)*17))}
.gt-timer{position:absolute;left:50%;top:max(calc(var(--u)*2),env(safe-area-inset-top));transform:translateX(-50%);width:calc(var(--u)*19);height:calc(var(--u)*19);border-radius:50%;background:radial-gradient(circle at 40% 35%,#2f9a3a,#14561e);border:calc(var(--u)*.9) solid #ffd23a;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:calc(var(--u)*6.2);color:#fff;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.35);pointer-events:none}
.gt-timer.hot{background:radial-gradient(circle at 40% 35%,#ff5a4a,#a01a14);animation:gtBeat .5s infinite alternate}
@keyframes gtBeat{to{transform:translateX(-50%) scale(1.08)}}
.gt-holder{position:absolute;left:50%;top:calc(max(calc(var(--u)*2),env(safe-area-inset-top)) + var(--u)*21);transform:translateX(-50%);display:flex;align-items:center;gap:calc(var(--u)*1.4);background:linear-gradient(90deg,#1f6a2a,#2f9a3a);border:calc(var(--u)*.45) solid #ffd23a;border-radius:999px;padding:calc(var(--u)*.4) calc(var(--u)*3) calc(var(--u)*.4) calc(var(--u)*.6);color:#fff;font-weight:900;font-size:calc(var(--u)*4.2);white-space:nowrap;pointer-events:none}
.gt-holder .f{width:calc(var(--u)*7.4);height:calc(var(--u)*7.4);border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5)}
.gt-holder.me{background:linear-gradient(90deg,#e0a010,#ffc21a);color:#3a2a00}
.gt-you{position:absolute;transform:translate(-50%,-100%);font-weight:900;font-size:calc(var(--u)*3.6);color:#fff;-webkit-text-stroke:calc(var(--u)*.35) #1f6a2a;paint-order:stroke fill;pointer-events:none;text-align:center;line-height:1}
.gt-pointer{position:absolute;width:calc(var(--u)*11);height:calc(var(--u)*11);margin:calc(var(--u)*-5.5) 0 0 calc(var(--u)*-5.5);border-radius:50%;background:rgba(31,106,42,.85);border:calc(var(--u)*.5) solid #ffd23a;display:none;align-items:center;justify-content:center;flex-direction:column;font-size:calc(var(--u)*4.6);color:#fff;font-weight:900;pointer-events:none}
.gt-pointer small{font-size:calc(var(--u)*2.6)}
.gt-btn{position:absolute;border-radius:50%;border:calc(var(--u)*.7) solid rgba(255,255,255,.95);color:#fff;font-family:inherit;font-weight:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;padding:0;cursor:pointer;pointer-events:auto;box-shadow:0 calc(var(--u)*.9) 0 rgba(0,0,0,.3)}
.gt-btn b{font-size:calc(var(--u)*7);line-height:1}
.gt-btn span{font-size:calc(var(--u)*3)}
.gt-grab{width:calc(var(--u)*21);height:calc(var(--u)*21);background:radial-gradient(circle at 40% 35%,#ffcf3a,#e08a10)}
.gt-grab.near{animation:gtBeat2 .4s infinite alternate}
@keyframes gtBeat2{to{transform:scale(1.12)}}
.gt-jump{width:calc(var(--u)*16);height:calc(var(--u)*16);background:radial-gradient(circle at 40% 35%,#5ac8ff,#1f7ac8)}
.gt-btn:active{transform:scale(.92)}
.gt-count{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*3);pointer-events:none}
.gt-count .n{width:calc(var(--u)*30);height:calc(var(--u)*30);border-radius:50%;background:radial-gradient(circle at 40% 35%,#2f9a3a,#14561e);border:calc(var(--u)*1.2) solid #ffd23a;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*16);font-weight:900;color:#fff;animation:gtPop .9s ease-out infinite}
@keyframes gtPop{from{transform:scale(1.3)}to{transform:scale(1)}}
.gt-count .r{background:#1f6a2a;color:#fff;font-weight:900;font-size:calc(var(--u)*7);padding:calc(var(--u)*1) calc(var(--u)*8);transform:rotate(-4deg);border-top:calc(var(--u)*.6) solid #ffd23a;border-bottom:calc(var(--u)*.6) solid #ffd23a}
.gt-count .s{font-weight:900;font-size:calc(var(--u)*4.2);color:#fff;-webkit-text-stroke:calc(var(--u)*.35) #1f3a1a;paint-order:stroke fill;text-align:center;max-width:90%}
.gt-banner{position:absolute;left:50%;top:40%;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*8);color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.6) #6a3a00;paint-order:stroke fill;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .25s}
.gt-banner.show{opacity:1}
`;var im={go:2,trick:3,bump:3,win:2,lose:2,count:1},sm=()=>{var i,t;return((i=navigator.deviceMemory)!=null?i:4)<=3||((t=navigator.hardwareConcurrency)!=null?t:4)<=4},rm=()=>{try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}},am={dino:"\u{1F996}",raccoon:"\u{1F99D}",bear:"\u{1F43B}",fox:"\u{1F98A}",bunny:"\u{1F430}",cat:"\u{1F431}"},Ir;function om(){if(Ir)return Ir;let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.6,"rgba(255,255,255,0.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),Ir=new nr(i),Ir}var No=class{constructor(t,e){this.n=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.g=new Ie,this.g.setAttribute("position",new Te(this.pos,3)),this.pts=new er(this.g,new Ji({color:16769126,size:.28,map:om(),transparent:!0,depthWrite:!1,blending:Ns})),this.pts.frustumCulled=!1,t.add(this.pts),this.i=0;for(let n=0;n<e;n++)this.pos[n*3+1]=-50}emit(t,e,n,s,r,a,o=.8){let c=this.i++%this.n;this.pos.set([t,e,n],c*3),this.vel.set([s,r,a],c*3),this.life[c]=o}burst(t,e,n,s=30,r=5){for(let a=0;a<s;a++){let o=Math.random()*Math.PI*2,c=r*(.4+Math.random()*.6);this.emit(t,e,n,Math.cos(o)*c,2+Math.random()*r,Math.sin(o)*c,.9)}}update(t){for(let e=0;e<this.n;e++)if(!(this.life[e]<=0)){this.life[e]-=t,this.vel[e*3+1]-=7*t;for(let n=0;n<3;n++)this.pos[e*3+n]+=this.vel[e*3+n]*t;this.life[e]<=0&&(this.pos[e*3+1]=-50)}this.g.attributes.position.needsUpdate=!0}},Fo=class{constructor(t,e,n){if(this.el=t,this.post=n||(()=>{}),Wl(e.lang),Xl(e.gender==="girl"),this.age=Number(e.age)||5,this.save=Il(e.save),this.base=e.base||"./",this.sound=new Ni,this.sound.muted=!!this.save.muted,this.voice=new _r({base:this.base,lang:is(),girl:e.gender==="girl",clips:im}),this.voice.setMuted(this.sound.muted),this._voiceArm=()=>this.voice.unlock(),document.addEventListener("pointerdown",this._voiceArm,!0),this.quality={low:sm()},document.getElementById("gt-style")||document.head.append(ft("style",{id:"gt-style",text:Yl+jl+Jl})),this.root=ft("div",{class:"gt-root",dir:is()==="en"?"ltr":"rtl"}),t.append(this.root),this._unit(),!rm()){this.root.append(ft("div",{class:"gt-loading"},ft("div",{},zt("noWebgl")," ",ft("button",{class:"gt-btn2",onclick:()=>this.post({type:"exit"})},zt("exit")))));return}this.loading=ft("div",{class:"gt-loading"},zt("loading")),this.root.append(this.loading),this.renderer=new Qs({antialias:!this.quality.low,powerPreference:"high-performance"}),this.maxPR=Math.min(window.devicePixelRatio||1,this.quality.low?1.25:1.5),this.pr=this.maxPR,this.renderer.setPixelRatio(this.pr),this.renderer.outputColorSpace=Se,this.renderer.toneMapping=vo,this.root.prepend(this.renderer.domElement),this.layer=ft("div",{class:"gt-layer"}),this.root.append(this.layer),this.camera=new _e(50,1,.3,160),this.input={x:0,z:0,pointer:null,ox:0,oy:0,keys:new Set},this.mode="menu",this.paused=!1,this._bind(),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this.frames=[],this.goodWin=0,this.clock=new hr,this._buildWorld(),this._fonts().then(()=>{this.loading.remove(),this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"}),new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-Bold.ttf)`,{weight:"700"})];await Promise.race([Promise.all(t.map(e=>e.load().then(n=>document.fonts.add(n)))),new Promise(e=>setTimeout(e,900))])}catch{}}_unit(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.u=Math.min(this.cw,this.ch)/100,this.root.style.setProperty("--u",`${this.u}px`),this.root.classList.toggle("gt-land",this.cw>this.ch*1.15)}_resize(){this._unit(),this.renderer&&(this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.fov=this.cw<this.ch?62:50,this.camera.updateProjectionMatrix())}_buildWorld(){let t=this.scene=new tr;t.background=new Dt(10475775),t.fog=new $s(12576511,30,70),t.add(new cr(16776168,4880954,1.9));let e=new lr(16773840,1.5);e.position.set(-10,25,12),t.add(e);let n=new $t(new Ki(55,48),xt(8176726));n.rotation.x=-Math.PI/2,t.add(n);for(let[s,r,a]of[[0,6,3.6],[-6,-9,3],[8,1,3.2],[-12,1,2.6],[12,-14,2.4],[-14,-14,2.6]]){let o=new $t(new Ki(a,24),xt(13152376));o.rotation.x=-Math.PI/2,o.position.set(s,.01,r),t.add(o)}for(let s of We)t.add(Ll(s,!1));for(let s of Qn)t.add(Ul(s));this.mushrooms=Di.map(s=>{let r=Dl();return r.root.position.set(s.x,0,s.z),t.add(r.root),r});for(let s=0;s<28;s++){let r=s/28*Math.PI*2,a=25+1.5+s%3*2.2,o=Nl(1+s%4*.18);o.position.set(Math.cos(r)*a,0,Math.sin(r)*a),t.add(o)}for(let s=0;s<16;s++){let r=s/16*Math.PI*2+.2,a=Fl(.8+s%3*.3);a.position.set(Math.cos(r)*(25-1.5),0,Math.sin(r)*(25-1.5)),t.add(a)}this.dino=Tl(),t.add(this.dino.root),this.tail=Rl(),t.add(this.tail.root),this.marker=Pn(.28,.55,xt(16765498,16752640,.7),0,0,0,4),this.marker.rotation.x=Math.PI,t.add(this.marker),this.ring=new $t(new sr(.55,.7,32),new Si({color:16777215,transparent:!0,opacity:.85,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,t.add(this.ring),this.dizzy=new Yt;for(let s=0;s<3;s++){let r=Pn(.09,.18,xt(16769126,16760832,.7),Math.cos(s/3*Math.PI*2)*.35,0,Math.sin(s/3*Math.PI*2)*.35,5);this.dizzy.add(r)}this.dizzy.visible=!1,t.add(this.dizzy),this.sparkles=new No(t,260),this.animals=[]}_setRivals(t){for(let e of this.animals)this.scene.remove(e.root);this.animals=[];for(let e=0;e<t;e++){let n=Vl(gr[e].kind);this.scene.add(n.root),this.animals.push(n)}}_bind(){let t=this.root;for(let n of["pointerdown","pointerup","touchend","click","keydown"])t.addEventListener(n,()=>this.sound.unlock(),{capture:!0,passive:!0});this.joy=ft("div",{class:"gt-joy"},ft("i")),t.append(this.joy),t.addEventListener("pointerdown",n=>{if(n.target.closest("button")||this.mode!=="play"||this.paused||this.input.pointer!==null)return;this.input.pointer=n.pointerId,this.input.ox=n.clientX,this.input.oy=n.clientY;let s=t.getBoundingClientRect();this.joy.style.left=`${n.clientX-s.left}px`,this.joy.style.top=`${n.clientY-s.top}px`,this.joy.style.display="block",this.joy.firstChild.style.transform="translate(0,0)";try{t.setPointerCapture(n.pointerId)}catch{}}),t.addEventListener("pointermove",n=>{if(n.pointerId!==this.input.pointer)return;let s=this.u*12,r=n.clientX-this.input.ox,a=n.clientY-this.input.oy,o=Math.hypot(r,a);o>s&&(r=r/o*s,a=a/o*s),this.input.x=r/s,this.input.z=a/s,this.joy.firstChild.style.transform=`translate(${r}px,${a}px)`});let e=n=>{n.pointerId===this.input.pointer&&(this.input.pointer=null,this.input.x=0,this.input.z=0,this._joyHome())};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("click",n=>{n.target.closest("button")&&!n.target.closest(".gt-btn")&&this.sound.play("tap")},!0),this._onKey=n=>{let s=n.key.toLowerCase();n.type==="keydown"?(this.input.keys.add(s),this.mode==="play"&&(s==="escape"||s==="p")&&this.pause(),this.mode==="play"&&s===" "&&!n.repeat&&(this.chase&&this.chase.jump(),n.preventDefault()),this.mode==="play"&&(s==="e"||s==="enter"||s==="shift")&&!n.repeat&&(this.chase&&this.chase.grab(),n.preventDefault())):this.input.keys.delete(s),this.mode==="play"&&s.startsWith("arrow")&&n.preventDefault()},window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._onVis=()=>{document.hidden?(this.mode==="play"&&this.pause(),this.sound.suspend()):this.paused||this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=ft("button",{class:"gt-soundpill",onclick:n=>{n.stopPropagation(),this.sound.unlock()}},zt("sound")),t.append(this.soundPill),this._tapped=!1,t.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden&&!this.paused?"block":"none"},700)}_joyHome(){if(!this.joy)return;let t=this.mode==="play";this.joy.style.display=t?"block":"none",this.joy.style.left=`${is()==="en"?this.u*18:this.cw-this.u*18}px`,this.joy.style.top=`${this.ch-this.u*18}px`,this.joy.firstChild.style.transform="translate(0,0)"}_readInput(){let t=this.input.keys,e=this.input.x,n=this.input.z;return(t.has("arrowleft")||t.has("a"))&&(e=-1),(t.has("arrowright")||t.has("d"))&&(e=1),(t.has("arrowup")||t.has("w"))&&(n=-1),(t.has("arrowdown")||t.has("s"))&&(n=1),{x:e,z:n}}_clear(){this.layer.replaceChildren()}_saveNow(){this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}_mute(t){let e=ft("button",{class:"gt-round",style:t,"aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return e.addEventListener("click",n=>{n.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.voice.setMuted(this.sound.muted),this.save.muted=this.sound.muted,this._saveNow(),e.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),e}_toastEl(){return this.toastEl=ft("div",{class:"gt-toast"}),this.toastEl}toast(t,e=1.6){this.toastEl&&(this.toastEl.textContent=t,this.toastEl.classList.add("show"),clearTimeout(this._tt),this._tt=setTimeout(()=>this.toastEl&&this.toastEl.classList.remove("show"),e*1e3))}_topLeft(){return"top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)"}_topEnd(){return"top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-end:calc(var(--u)*3)"}showMenu(){this.mode="menu",this.paused=!1,this.chase=null,this.joy&&(this.joy.style.display="none"),this.sound.setMode("menu"),this._setRivals(5),this._clear();let t=Xe.map((e,n)=>{var a;let s=n+1>this.save.unlocked,r=(a=this.save.stars[e.id])!=null?a:0;return ft("button",{class:`gt-node${s?" lock":""}${n+1===this.save.unlocked?" next":""}`,"aria-label":`${zt("level")} ${e.id} ${ss(e)}`,title:ss(e),onclick:()=>{if(s){this.sound.play("no"),this.toast(zt("locked"));return}this.startLevel(n)}},s?"\u{1F512}":$e(e.id),ft("span",{class:"stars"},s?"":"\u2B50".repeat(r)+"\u2606".repeat(3-r)))});this.layer.append(ft("button",{class:"gt-round",style:this._topLeft(),"aria-label":zt("exit"),onclick:()=>{this._saveNow(),this.post({type:"exit"})}},is()==="en"?"\u2190":"\u2192"),ft("div",{class:"gt-dim",style:"background:none"},ft("div",{class:"gt-panel"},ft("div",{class:"gt-logo"},"\u{1F996} ",zt("title")," \u2728"),ft("div",{class:"gt-map",style:"margin-bottom:calc(var(--u)*4)"},t),ft("button",{class:"gt-btn2 gt-big",onclick:()=>this.startLevel(Math.min(this.save.unlocked,Xe.length)-1)},"\u25B6 ",zt("play")))),this._mute("bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)"),this._toastEl())}startLevel(t){this.levelIndex=t,this.chase=new Ar({level:t,easy:this.age<=4,seed:(Date.now()&65535)+1}),this._setRivals(this.chase.rivals.length),this.mode="play",this.paused=!1,this.sound.setMode("play"),this.sound.setTension(0),this.cam=null,this._hud(),this._lastHolder=this.chase.holder,this._joyHome()}_hud(){this._clear();let t=Xe[this.levelIndex];this.hud={timer:ft("div",{class:"gt-timer"},""),holder:ft("div",{class:"gt-holder"},ft("span",{class:"f"},""),ft("span",{},"")),you:ft("div",{class:"gt-you"},zt("you"),ft("br"),"\u25BC"),pointer:ft("div",{class:"gt-pointer"},"\u2728",ft("small",{},"")),count:ft("div",{class:"gt-count"},ft("div",{class:"n"},$e(3)),ft("div",{class:"r"},zt("ready")),ft("div",{class:"s"},`${zt("level")} ${$e(t.id)} \xB7 ${ss(t)}`),ft("div",{class:"s"},zt("goal"))),banner:ft("div",{class:"gt-banner"}),grab:ft("button",{class:"gt-btn gt-grab","aria-label":zt("grab"),style:"bottom:max(calc(var(--u)*20),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*4)"},ft("b",{},"\u270B"),ft("span",{},zt("grab"))),jump:ft("button",{class:"gt-btn gt-jump","aria-label":zt("jump"),style:"bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*6)"},ft("b",{},"\u2B06"),ft("span",{},zt("jump")))};for(let[e,n]of[[this.hud.grab,()=>this.chase&&this.chase.grab()],[this.hud.jump,()=>this.chase&&this.chase.jump()]])e.addEventListener("pointerdown",s=>{s.stopPropagation(),s.preventDefault(),n()});this.layer.append(ft("button",{class:"gt-round",style:this._topLeft(),"aria-label":zt("paused"),onclick:e=>{e.stopPropagation(),this.pause()}},"\u23F8"),this._mute(this._topEnd()),this.hud.timer,this.hud.holder,this.hud.you,this.hud.pointer,this.hud.banner,this.hud.grab,this.hud.jump,this.hud.count,this._toastEl()),this._hc={}}_banner(t,e=1.4){this.hud.banner.textContent=t,this.hud.banner.classList.add("show"),clearTimeout(this._bt),this._bt=setTimeout(()=>this.hud&&this.hud.banner.classList.remove("show"),e*1e3)}pause(){if(this.mode!=="play"||this.paused)return;this.paused=!0,this.input.pointer=null,this.input.x=this.input.z=0,this.joy.style.display="none",this.sound.suspend();let t=ft("div",{class:"gt-dim"},ft("div",{class:"gt-panel"},ft("div",{class:"gt-title"},zt("paused")),ft("button",{class:"gt-btn2",onclick:()=>{t.remove(),this.paused=!1,this.sound.resume()}},"\u25B6 ",zt("resume")),ft("button",{class:"gt-btn2 wood",onclick:()=>{this.sound.resume(),this.startLevel(this.levelIndex)}},"\u21BB ",zt("restart")),ft("button",{class:"gt-btn2 wood",onclick:()=>{this.sound.resume(),this.showMenu()}},zt("menu"))));this.layer.append(t)}_results(){var a;let t=this.chase,e=t.result,n=this.levelIndex;if(this.mode="results",this.sound.setMode("menu"),this.sound.setTension(0),e.win){let o=Xe[n].id;this.save.stars[o]=Math.max((a=this.save.stars[o])!=null?a:0,e.stars),n+2>this.save.unlocked&&n+1<Xe.length&&(this.save.unlocked=n+2),this._saveNow(),this.sound.play("win"),this.voice.say("win"),this.sparkles.burst(t.player.x,t.player.y+1.5,t.player.z,80,7)}else this.sound.play("lose"),this.voice.say("lose");let s=e.win&&n+1<Xe.length,r=ft("div",{class:e.win?"gt-dim gt-win":"gt-dim"},ft("div",{class:"gt-panel"},ft("div",{class:"gt-title"},e.win?zt("win"):zt("lose")),e.win?ft("div",{class:"gt-stars"},[1,2,3].map(o=>ft("span",{class:o<=e.stars?"":"off"},"\u2B50"))):null,ft("div",{class:"gt-stat"},ft("span",{},"\u2728 ",zt("held")," ",$e(Math.round(e.held)),zt("sec")),ft("span",{},"\u270B ",zt("grabs")," ",$e(e.grabs))),ft("div",{style:"display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center"},s?ft("button",{class:"gt-btn2",onclick:()=>this.startLevel(n+1)},zt("next")," \u25B6"):null,ft("button",{class:e.win?"gt-btn2 wood":"gt-btn2",onclick:()=>this.startLevel(n)},"\u21BB ",zt("again")),ft("button",{class:"gt-btn2 wood",onclick:()=>this.showMenu()},zt("menu")))));this.hud.grab.remove(),this.hud.jump.remove(),this.joy.style.display="none",this.layer.append(r)}_playFrame(t,e){var a;let n=this.chase,s=n.step(t,this._readInput());for(let o of s)switch(o.type){case"count":this.sound.play("count"),o.n>=3&&this.voice.say("count"),this.hud.count.querySelector(".n").textContent=$e(o.n);break;case"go":this.sound.play("go"),this.voice.say("go"),this.hud.count.remove(),this._banner(zt("go"),.8),setTimeout(()=>this.mode==="play"&&this.toast(zt("hint"),2.6),900);break;case"tick":this.sound.play("tick",o.n);break;case"jump":this.sound.play("jump");break;case"land":o.who===0&&this.sound.play("land",o.hard);break;case"bounce":{(o.who===0||Math.hypot(o.x-n.player.x,o.z-n.player.z)<10)&&this.sound.play("bounce");let c=this.mushrooms[Di.findIndex(l=>l.x===o.x&&l.z===o.z)];c&&(c.squash=1);break}case"whiff":this.sound.play("whiff");break;case"fell":this.sound.play("stolen"),this.voice.say("bump"),this.toast(zt("fell"),1.8),this.sparkles.burst(n.player.x,n.player.y+1,n.player.z,30,4),this.cam=null;break;case"steal":this.sparkles.burst(o.x,o.y+1,o.z,o.by===0?40:18,o.by===0?6:4),o.by===0?(this.sound.play("grab"),this.voice.say("trick"),this._banner(zt("got"))):o.from===0?(this.sound.play("stolen"),this.voice.say("bump"),this.toast(zt("lost"),1.6)):this.sound.play("rivalGrab");break;case"over":this.sound.play(o.win?"win":"lose"),setTimeout(()=>this.mode==="play"&&this._results(),900);break;default:}let r=n.player;r.sliding&&!this._wasSliding&&this.sound.play("slide"),this._wasSliding=r.sliding,r.grounded&&r.moving>.3&&n.state==="play"&&(this._stepT=((a=this._stepT)!=null?a:0)-t,this._stepT<=0&&(this._stepT=.26,this.sound.play("step",r.y<.1))),this.sound.setTension(n.timeLeft<=10&&n.state==="play"?1:0),this._sync(t,e)}_pose(t,e,n,s,r){t.root.position.set(e.x,e.y,e.z);let a=e.face-t.root.rotation.y;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;t.root.rotation.y+=a*Math.min(1,n*12);let o=e.grounded?e.moving:0,c=Math.sin(s*15+e.id)*.8*o;t.legs[0].rotation.x=e.grounded?c:-.6,t.legs[1].rotation.x=e.grounded?-c:.4,t.arms[0]&&(t.arms[0].rotation.x=e.grounded?-c*.8:-2.2,t.arms[1].rotation.x=e.grounded?c*.8:-2.2),t.body.position.y=e.grounded?Math.abs(Math.sin(s*15+e.id))*.08*o:0;let l=e.grounded?0:Math.max(-1,Math.min(1,e.vy/10));t.body.scale.set(1-l*.08,1+l*.12,1-l*.08),t.body.rotation.x=e.sliding?-.5:0,t.body.rotation.z=e.stun>0?Math.sin(s*18)*.2:0,r&&t.tail&&(t.tail.rotation.y=Math.sin(s*8)*.3*(.4+o))}_sync(t,e){var u,M,b;let n=this.chase,s=n.player;this._pose(this.dino,s,t,e,!0),n.rivals.forEach((v,U)=>this._pose(this.animals[U],v,t,e,!1));let r=n.holder===s?this.dino:this.animals[n.rivals.indexOf(n.holder)],a=n.holder;this._lastHolder!==a&&(this._lastHolder=a,this.tailPop=0),r.back.updateWorldMatrix(!0,!1);let o=new D;r.back.getWorldPosition(o),this.tail.root.position.copy(o),this.tail.root.rotation.y=r.root.rotation.y,this.tailPop=Math.min(1,((u=this.tailPop)!=null?u:1)+t*4),this.tail.root.scale.setScalar(1.45*(.4+.6*this.tailPop)),this.tail.parts.forEach((v,U)=>{v.position.x=Math.sin(e*9-U*.6)*.06*U}),Math.random()<t*14&&this.sparkles.emit(o.x+(Math.random()-.5)*.5,o.y,o.z+(Math.random()-.5)*.5,0,.6,0,.6),this.marker.position.set(a.x,a.y+2.35+Math.abs(Math.sin(e*5))*.25,a.z),this.marker.rotation.y=e*3,this.marker.visible=a!==s,this.ring.position.set(s.x,s.y+.04,s.z),this.ring.material.color.set(a===s?16765498:16777215);let c=n.all.find(v=>v.stun>0);this.dizzy.visible=!!c,c&&(this.dizzy.position.set(c.x,c.y+1.9,c.z),this.dizzy.rotation.y=e*8);for(let v of this.mushrooms)v.squash=Math.max(0,((M=v.squash)!=null?M:0)-t*3),v.cap.scale.set(1+v.squash*.25,.5-v.squash*.2+Math.sin(e*3)*.02,1+v.squash*.25);this.sparkles.update(t);let l=this.cw<this.ch,h=new D(s.x,s.y+(l?7.5:5.6),s.z+(l?8:6.6));this.cam||(this.cam=h.clone()),this.cam.lerp(h,Math.min(1,t*4)),this.camera.position.copy(this.cam),this.camera.lookAt(this.cam.x,this.cam.y-(l?7.5:5.6)+1,this.cam.z-(l?8:6.6)-1.5);let d=this._hc,f=Math.ceil(n.timeLeft);if(d.secs!==f&&(d.secs=f,this.hud.timer.textContent=`${$e(Math.floor(f/60))}:${$e(String(f%60).padStart(2,"0"))}`,this.hud.timer.classList.toggle("hot",f<=10&&n.state==="play")),d.holder!==a){d.holder=a;let v=a===s;this.hud.holder.classList.toggle("me",v),this.hud.holder.firstChild.textContent=(b=am[a.kind])!=null?b:"\u{1F996}",this.hud.holder.lastChild.textContent=v?zt("me"):ss(a.name)}let p=this._screen(s.x,s.y+2.1,s.z);this.hud.you.style.left=`${p[0]}px`,this.hud.you.style.top=`${p[1]}px`;let m=this._screen(a.x,a.y+1,a.z),A=a!==s&&(m[0]<0||m[0]>this.cw||m[1]<0||m[1]>this.ch||!m[2]);if(this.hud.pointer.style.display=A?"flex":"none",A){let v=this.cw/2,U=this.ch/2,S=a.x-s.x,E=a.z-s.z,L=Math.hypot(S,E)||1;S/=L,E/=L;let _=this.u*10,C=Math.min((v-_)/Math.abs(S||1e-6),(U-_)/Math.abs(E||1e-6));this.hud.pointer.style.left=`${v+S*C}px`,this.hud.pointer.style.top=`${U+E*C}px`,this.hud.pointer.lastChild.textContent=`${$e(Math.round(L))}\u0645`}let g=a!==s&&a.immune<=0&&Math.hypot(a.x-s.x,a.z-s.z)<2.2&&Math.abs(a.y-s.y)<1.4;this.hud.grab.classList.toggle("near",g)}_screen(t,e,n){let s=new D(t,e,n).project(this.camera);return[(s.x*.5+.5)*this.cw,(-s.y*.5+.5)*this.ch,s.z<1]}_frame(){let t=Math.min(this.clock.getDelta(),.1),e=this.clock.elapsedTime;if(this._adapt(t),this.mode==="play"&&!this.paused)this._playFrame(t,e);else if(this.mode==="results")this.sparkles.update(t),this._sync(1e-4,e);else if(this.mode==="menu"){let n=We[0],s=[this.dino,...this.animals];s.forEach((l,h)=>{let d=h/s.length*Math.PI*2+e*.4,f={id:h,x:n.x+Math.cos(d)*1.9,y:n.y,z:n.z+Math.sin(d)*1.9,face:d+Math.PI,moving:.7,grounded:!0,vy:0,stun:0,sliding:!1};this._pose(l,f,t,e,h===0)}),this.dino.back.updateWorldMatrix(!0,!1);let r=new D;this.dino.back.getWorldPosition(r),this.tail.root.position.copy(r),this.tail.root.rotation.y=this.dino.root.rotation.y,this.tail.root.scale.setScalar(1.45),this.marker.visible=!1,this.dizzy.visible=!1,this.ring.position.set(0,-5,0);let a=this.cw<this.ch,o=e*.1,c=a?14:10;this.camera.position.set(Math.sin(o)*c,n.y+(a?9:5),Math.cos(o)*c),this.camera.lookAt(0,n.y+.8,0),this.sparkles.update(t)}this.renderer.render(this.scene,this.camera)}_adapt(t){if(this.frames.push(t),this.frames.length<90)return;let e=this.frames.reduce((n,s)=>n+s,0)/this.frames.length;this.frames.length=0,e>1/40&&this.pr>.75?(this.pr=Math.max(.75,this.pr-.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0):e<1/57&&this.pr<this.maxPR&&++this.goodWin>=4&&(this.pr=Math.min(this.maxPR,this.pr+.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0)}dispose(){if(clearInterval(this._pill),this.sound.dispose(),this.voice.dispose(),document.removeEventListener("pointerdown",this._voiceArm,!0),this.renderer){this.renderer.setAnimationLoop(null),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}}this.ro&&this.ro.disconnect(),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),document.removeEventListener("visibilitychange",this._onVis),this.root.remove()}},zo={start(i,t,e){let n=new Fo(i,t||{},e);return zo.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.GoldenTail=zo;var Vm=zo;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
