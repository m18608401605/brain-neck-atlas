var pn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cl=0,hc=1,kl=2;var us=1,Nl=2,yi=3,Ia=0,Wt=1,pt=2,Pn=0,vi=1,lc=2,dc=3,fc=4,Pl=5;var Dn=100,Dl=101,Ll=102,Fl=103,Ol=104,Ul=200,zl=201,Bl=202,jl=203,uc=204,bc=205,Gl=206,Hl=207,Vl=208,Wl=209,Xl=210,ql=211,Kl=212,Jl=213,Yl=214,tr=0,ar=1,nr=2,ti=3,ir=4,sr=5,rr=6,or=7,pc=0,Zl=1,Ql=2,Ca=0,mc=1,gc=2,xc=3,yc=4,vc=5,_c=6,Mc=7,Zo="attached",$l="detached",Sc=300,Ln=301,_i=302,Ar=303,Er=304,dn=1e3,la=1001,ai=1002,dt=1003,Tr=1004;var Fn=1005;var yt=1006,Mi=1007;var fa=1008;var Zt=1009,wc=1010,Ac=1011,Si=1012,Rr=1013,va=1014,ia=1015,_a=1016,Ir=1017,Cr=1018,On=1020,Ec=35902,Tc=35899,Rc=1021,Ic=1022,ua=1023,Ha=1026,$a=1027,kr=1028,Nr=1029,gn=1030,Pr=1031;var Dr=1033,bs=33776,ps=33777,ms=33778,gs=33779,Lr=35840,Fr=35841,Or=35842,Ur=35843,zr=36196,Br=37492,jr=37496,Gr=37488,Hr=37489,xs=37490,Vr=37491,Wr=37808,Xr=37809,qr=37810,Kr=37811,Jr=37812,Yr=37813,Zr=37814,Qr=37815,$r=37816,eo=37817,to=37818,ao=37819,no=37820,io=37821,so=36492,ro=36494,oo=36495,co=36283,ho=36284,ys=36285,lo=36286;var Tn=2300,Rn=2301,$s=2302,Qo=2303,$o=2400,ec=2401,tc=2402,ed=2500;var Cc=0,vs=1,wi=2,td=3200;var fo=0,ad=1,en="",lt="srgb",jt="srgb-linear",ji="linear",Ye="srgb";var er=7680;var nd=519,id=512,sd=513,rd=514,kc=515,od=516,cd=517,Nc=518,Pc=519,Dc=35044;var Lc="300 es",da=2e3,ni=2001;function uf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ii(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hd(){let n=ii("canvas");return n.style.display="block",n}var Vh={},si=null;function Gi(...n){let e="THREE."+n.shift();si?si("log",e,...n):console.log(e,...n)}function ld(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Se(...n){n=ld(n);let e="THREE."+n.shift();if(si)si("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ne(...n){n=ld(n);let e="THREE."+n.shift();if(si)si("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function En(...n){let e=n.join(" ");e in Vh||(Vh[e]=!0,Se(...n))}function dd(n,e,t){return new Promise(function(a,i){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:a()}}setTimeout(s,t)})}var fd={[tr]:tr,[nr]:rr,[ir]:ir,[ti]:sr,[ar]:ar,[rr]:nr,[or]:or,[sr]:ti},ya=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){let a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){let a=this._listeners;if(a===void 0)return;let i=a[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let a=t[e.type];if(a!==void 0){e.target=this;let i=a.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}},Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wh=1234567,zi=Math.PI/180,In=180/Math.PI;function ka(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[a&255]+Pt[a>>8&255]+Pt[a>>16&255]+Pt[a>>24&255]).toLowerCase()}function Ge(n,e,t){return Math.max(e,Math.min(t,n))}function Fc(n,e){return(n%e+e)%e}function pf(n,e,t,a,i){return a+(n-e)*(i-a)/(t-e)}function mf(n,e,t){return n!==e?(t-n)/(e-n):0}function Bi(n,e,t){return(1-t)*n+t*e}function gf(n,e,t,a){return Bi(n,e,1-Math.exp(-t*a))}function xf(n,e=1){return e-Math.abs(Fc(n,e*2)-e)}function yf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function vf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function _f(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Mf(n,e){return n+Math.random()*(e-n)}function Sf(n){return n*(.5-Math.random())}function wf(n){n!==void 0&&(Wh=n);let e=Wh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Af(n){return n*zi}function Ef(n){return n*In}function Tf(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Rf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Oc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function If(n,e,t,a,i){let s=Math.cos,r=Math.sin,o=s(t/2),c=r(t/2),h=s((e+a)/2),l=r((e+a)/2),d=s((e-a)/2),f=r((e-a)/2),b=s((a-e)/2),x=r((a-e)/2);switch(i){case"XYX":n.set(o*l,c*d,c*f,o*h);break;case"YZY":n.set(c*f,o*l,c*d,o*h);break;case"ZXZ":n.set(c*d,c*f,o*l,o*h);break;case"XZX":n.set(o*l,c*x,c*b,o*h);break;case"YXY":n.set(c*b,o*l,c*x,o*h);break;case"ZYZ":n.set(c*x,c*b,o*l,o*h);break;default:Se("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function uo(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Uc(n,e){if(e.constructor===Float32Array)return n;let t=uo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function zc(n,e){if(e.constructor===Float32Array)return n;let t=uo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Ai={DEG2RAD:zi,RAD2DEG:In,generateUUID:ka,clamp:Ge,euclideanModulo:Fc,mapLinear:pf,inverseLerp:mf,lerp:Bi,damp:gf,pingpong:xf,smoothstep:yf,smootherstep:vf,randInt:_f,randFloat:Mf,randFloatSpread:Sf,seededRandom:wf,degToRad:Af,radToDeg:Ef,isPowerOfTwo:Tf,ceilPowerOfTwo:Rf,floorPowerOfTwo:Oc,setQuaternionFromProperEuler:If,normalize:zc,denormalize:Uc},Ie=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,a=this.y,i=e.elements;return this.x=i[0]*t+i[3]*a+i[6],this.y=i[1]*t+i[4]*a+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){let a=this.length();return this.divideScalar(a||1).multiplyScalar(Ge(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let a=this.dot(e)/t;return Math.acos(Ge(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let a=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*a-r*i+e.x,this.y=s*i+r*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Lt=class{constructor(e=0,t=0,a=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=i}static slerpFlat(e,t,a,i,s,r,o){let c=a[i+0],h=a[i+1],l=a[i+2],d=a[i+3],f=s[r+0],b=s[r+1],x=s[r+2],y=s[r+3];if(d!==y||c!==f||h!==b||l!==x){let u=c*f+h*b+l*x+d*y;u<0&&(f=-f,b=-b,x=-x,y=-y,u=-u);let p=1-o;if(u<.9995){let v=Math.acos(u),E=Math.sin(v);p=Math.sin(p*v)/E,o=Math.sin(o*v)/E,c=c*p+f*o,h=h*p+b*o,l=l*p+x*o,d=d*p+y*o}else{c=c*p+f*o,h=h*p+b*o,l=l*p+x*o,d=d*p+y*o;let v=1/Math.sqrt(c*c+h*h+l*l+d*d);c*=v,h*=v,l*=v,d*=v}}e[t]=c,e[t+1]=h,e[t+2]=l,e[t+3]=d}static multiplyQuaternionsFlat(e,t,a,i,s,r){let o=a[i],c=a[i+1],h=a[i+2],l=a[i+3],d=s[r],f=s[r+1],b=s[r+2],x=s[r+3];return e[t]=o*x+l*d+c*b-h*f,e[t+1]=c*x+l*f+h*d-o*b,e[t+2]=h*x+l*b+o*f-c*d,e[t+3]=l*x-o*d-c*f-h*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,i){return this._x=e,this._y=t,this._z=a,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let a=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,c=Math.sin,h=o(a/2),l=o(i/2),d=o(s/2),f=c(a/2),b=c(i/2),x=c(s/2);switch(r){case"XYZ":this._x=f*l*d+h*b*x,this._y=h*b*d-f*l*x,this._z=h*l*x+f*b*d,this._w=h*l*d-f*b*x;break;case"YXZ":this._x=f*l*d+h*b*x,this._y=h*b*d-f*l*x,this._z=h*l*x-f*b*d,this._w=h*l*d+f*b*x;break;case"ZXY":this._x=f*l*d-h*b*x,this._y=h*b*d+f*l*x,this._z=h*l*x+f*b*d,this._w=h*l*d-f*b*x;break;case"ZYX":this._x=f*l*d-h*b*x,this._y=h*b*d+f*l*x,this._z=h*l*x-f*b*d,this._w=h*l*d+f*b*x;break;case"YZX":this._x=f*l*d+h*b*x,this._y=h*b*d+f*l*x,this._z=h*l*x-f*b*d,this._w=h*l*d-f*b*x;break;case"XZY":this._x=f*l*d-h*b*x,this._y=h*b*d-f*l*x,this._z=h*l*x+f*b*d,this._w=h*l*d+f*b*x;break;default:Se("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let a=t/2,i=Math.sin(a);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,a=t[0],i=t[4],s=t[8],r=t[1],o=t[5],c=t[9],h=t[2],l=t[6],d=t[10],f=a+o+d;if(f>0){let b=.5/Math.sqrt(f+1);this._w=.25/b,this._x=(l-c)*b,this._y=(s-h)*b,this._z=(r-i)*b}else if(a>o&&a>d){let b=2*Math.sqrt(1+a-o-d);this._w=(l-c)/b,this._x=.25*b,this._y=(i+r)/b,this._z=(s+h)/b}else if(o>d){let b=2*Math.sqrt(1+o-a-d);this._w=(s-h)/b,this._x=(i+r)/b,this._y=.25*b,this._z=(c+l)/b}else{let b=2*Math.sqrt(1+d-a-o);this._w=(r-i)/b,this._x=(s+h)/b,this._y=(c+l)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){let a=this.angleTo(e);if(a===0)return this;let i=Math.min(1,t/a);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let a=e._x,i=e._y,s=e._z,r=e._w,o=t._x,c=t._y,h=t._z,l=t._w;return this._x=a*l+r*o+i*h-s*c,this._y=i*l+r*c+s*o-a*h,this._z=s*l+r*h+a*c-i*o,this._w=r*l-a*o-i*c-s*h,this._onChangeCallback(),this}slerp(e,t){let a=e._x,i=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(a=-a,i=-i,s=-s,r=-r,o=-o);let c=1-t;if(o<.9995){let h=Math.acos(o),l=Math.sin(h);c=Math.sin(c*h)/l,t=Math.sin(t*h)/l,this._x=this._x*c+a*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this._onChangeCallback()}else this._x=this._x*c+a*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this.normalize();return this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),i=Math.sqrt(1-a),s=Math.sqrt(a);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,a=0){this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,a=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*a+s[6]*i,this.y=s[1]*t+s[4]*a+s[7]*i,this.z=s[2]*t+s[5]*a+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,a=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*a+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*a+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*a+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*a+s[10]*i+s[14])*r,this}applyQuaternion(e){let t=this.x,a=this.y,i=this.z,s=e.x,r=e.y,o=e.z,c=e.w,h=2*(r*i-o*a),l=2*(o*t-s*i),d=2*(s*a-r*t);return this.x=t+c*h+r*d-o*l,this.y=a+c*l+o*h-s*d,this.z=i+c*d+s*l-r*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,a=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*a+s[8]*i,this.y=s[1]*t+s[5]*a+s[9]*i,this.z=s[2]*t+s[6]*a+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){let a=this.length();return this.divideScalar(a||1).multiplyScalar(Ge(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let a=e.x,i=e.y,s=e.z,r=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*r-a*c,this.z=a*o-i*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return To.copy(this).projectOnVector(e),this.sub(To)}reflect(e){return this.sub(To.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let a=this.dot(e)/t;return Math.acos(Ge(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,a=this.y-e.y,i=this.z-e.z;return t*t+a*a+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){let i=Math.sin(t)*e;return this.x=i*Math.sin(a),this.y=Math.cos(t)*e,this.z=i*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},To=new U,Xh=new Lt,Pe=class{static{this.prototype.isMatrix3=!0}constructor(e,t,a,i,s,r,o,c,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,i,s,r,o,c,h)}set(e,t,a,i,s,r,o,c,h){let l=this.elements;return l[0]=e,l[1]=i,l[2]=o,l[3]=t,l[4]=s,l[5]=c,l[6]=a,l[7]=r,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let a=e.elements,i=t.elements,s=this.elements,r=a[0],o=a[3],c=a[6],h=a[1],l=a[4],d=a[7],f=a[2],b=a[5],x=a[8],y=i[0],u=i[3],p=i[6],v=i[1],E=i[4],g=i[7],_=i[2],M=i[5],m=i[8];return s[0]=r*y+o*v+c*_,s[3]=r*u+o*E+c*M,s[6]=r*p+o*g+c*m,s[1]=h*y+l*v+d*_,s[4]=h*u+l*E+d*M,s[7]=h*p+l*g+d*m,s[2]=f*y+b*v+x*_,s[5]=f*u+b*E+x*M,s[8]=f*p+b*g+x*m,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],a=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],h=e[7],l=e[8];return t*r*l-t*o*h-a*s*l+a*o*c+i*s*h-i*r*c}invert(){let e=this.elements,t=e[0],a=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],h=e[7],l=e[8],d=l*r-o*h,f=o*c-l*s,b=h*s-r*c,x=t*d+a*f+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=d*y,e[1]=(i*h-l*a)*y,e[2]=(o*a-i*r)*y,e[3]=f*y,e[4]=(l*t-i*c)*y,e[5]=(i*s-o*t)*y,e[6]=b*y,e[7]=(a*c-h*t)*y,e[8]=(r*t-a*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,i,s,r,o){let c=Math.cos(s),h=Math.sin(s);return this.set(a*c,a*h,-a*(c*r+h*o)+r+e,-i*h,i*c,-i*(-h*r+c*o)+o+t,0,0,1),this}scale(e,t){return En("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ro.makeScale(e,t)),this}rotate(e){return En("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ro.makeRotation(-e)),this}translate(e,t){return En("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,a=e.elements;for(let i=0;i<9;i++)if(t[i]!==a[i])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){let a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ro=new Pe,qh=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kh=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cf(){let n={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===Ye&&(i.r=Ga(i.r),i.g=Ga(i.g),i.b=Ga(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Ye&&(i.r=ei(i.r),i.g=ei(i.g),i.b=ei(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===en?ji:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[r].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return n.define({[jt]:{primaries:e,whitePoint:a,transfer:ji,toXYZ:qh,fromXYZ:Kh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:lt},outputColorSpaceConfig:{drawingBufferColorSpace:lt}},[lt]:{primaries:e,whitePoint:a,transfer:Ye,toXYZ:qh,fromXYZ:Kh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:lt}}}),n}var je=Cf();function Ga(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ei(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Bn,cr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Bn===void 0&&(Bn=ii("canvas")),Bn.width=e.width,Bn.height=e.height;let i=Bn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),a=Bn}return a.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ii("canvas");t.width=e.width,t.height=e.height;let a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);let i=a.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Ga(s[r]/255)*255;return a.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(Ga(t[a]/255)*255):t[a]=Ga(t[a]);return{data:t,width:e.width,height:e.height}}else return Se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},kf=0,ri=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=ka(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let a={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Io(i[r].image)):s.push(Io(i[r]))}else s=Io(i);a.url=s}return t||(e.images[this.uuid]=a),a}};function Io(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Se("Texture: Unable to serialize Texture."),{})}var Nf=0,Co=new U,Tt=class n extends ya{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,a=la,i=la,s=yt,r=fa,o=ua,c=Zt,h=n.DEFAULT_ANISOTROPY,l=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=ka(),this.name="",this.source=new ri(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Co).x}get height(){return this.source.getSize(Co).y}get depth(){return this.source.getSize(Co).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let a=e[t];if(a===void 0){Se(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Se(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&a&&i.isVector2&&a.isVector2||i&&a&&i.isVector3&&a.isVector3||i&&a&&i.isMatrix3&&a.isMatrix3?i.copy(a):this[t]=a}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dn:e.x=e.x-Math.floor(e.x);break;case la:e.x=e.x<0?0:1;break;case ai:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dn:e.y=e.y-Math.floor(e.y);break;case la:e.y=e.y<0?0:1;break;case ai:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Sc;Tt.DEFAULT_ANISOTROPY=1;var $e=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,a=0,i=1){this.x=e,this.y=t,this.z=a,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,i){return this.x=e,this.y=t,this.z=a,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,a=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*a+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*a+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*a+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*a+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,i,s,c=e.elements,h=c[0],l=c[4],d=c[8],f=c[1],b=c[5],x=c[9],y=c[2],u=c[6],p=c[10];if(Math.abs(l-f)<.01&&Math.abs(d-y)<.01&&Math.abs(x-u)<.01){if(Math.abs(l+f)<.1&&Math.abs(d+y)<.1&&Math.abs(x+u)<.1&&Math.abs(h+b+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(h+1)/2,g=(b+1)/2,_=(p+1)/2,M=(l+f)/4,m=(d+y)/4,S=(x+u)/4;return E>g&&E>_?E<.01?(a=0,i=.707106781,s=.707106781):(a=Math.sqrt(E),i=M/a,s=m/a):g>_?g<.01?(a=.707106781,i=0,s=.707106781):(i=Math.sqrt(g),a=M/i,s=S/i):_<.01?(a=.707106781,i=.707106781,s=0):(s=Math.sqrt(_),a=m/s,i=S/s),this.set(a,i,s,t),this}let v=Math.sqrt((u-x)*(u-x)+(d-y)*(d-y)+(f-l)*(f-l));return Math.abs(v)<.001&&(v=1),this.x=(u-x)/v,this.y=(d-y)/v,this.z=(f-l)/v,this.w=Math.acos((h+b+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){let a=this.length();return this.divideScalar(a||1).multiplyScalar(Ge(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hr=class extends ya{constructor(e=1,t=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=a.depth,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t),this.textures=[];let i=a.count;for(let s=0;s<i;s++)this.textures[s]=new Tt({width:e,height:t,depth:a.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveColorBuffer=a.resolveColorBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.storeMultisampledColorBuffer=a.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=a.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=a.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=a,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,a=e.textures.length;t<a;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ri(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},aa=class extends hr{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}},Hi=class extends Tt{constructor(e=null,t=1,a=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=la,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var lr=class extends Tt{constructor(e=null,t=1,a=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=la,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Oe=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,a,i,s,r,o,c,h,l,d,f,b,x,y,u){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,i,s,r,o,c,h,l,d,f,b,x,y,u)}set(e,t,a,i,s,r,o,c,h,l,d,f,b,x,y,u){let p=this.elements;return p[0]=e,p[4]=t,p[8]=a,p[12]=i,p[1]=s,p[5]=r,p[9]=o,p[13]=c,p[2]=h,p[6]=l,p[10]=d,p[14]=f,p[3]=b,p[7]=x,p[11]=y,p[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){let t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,a=e.elements,i=1/jn.setFromMatrixColumn(e,0).length(),s=1/jn.setFromMatrixColumn(e,1).length(),r=1/jn.setFromMatrixColumn(e,2).length();return t[0]=a[0]*i,t[1]=a[1]*i,t[2]=a[2]*i,t[3]=0,t[4]=a[4]*s,t[5]=a[5]*s,t[6]=a[6]*s,t[7]=0,t[8]=a[8]*r,t[9]=a[9]*r,t[10]=a[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,a=e.x,i=e.y,s=e.z,r=Math.cos(a),o=Math.sin(a),c=Math.cos(i),h=Math.sin(i),l=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=r*l,b=r*d,x=o*l,y=o*d;t[0]=c*l,t[4]=-c*d,t[8]=h,t[1]=b+x*h,t[5]=f-y*h,t[9]=-o*c,t[2]=y-f*h,t[6]=x+b*h,t[10]=r*c}else if(e.order==="YXZ"){let f=c*l,b=c*d,x=h*l,y=h*d;t[0]=f+y*o,t[4]=x*o-b,t[8]=r*h,t[1]=r*d,t[5]=r*l,t[9]=-o,t[2]=b*o-x,t[6]=y+f*o,t[10]=r*c}else if(e.order==="ZXY"){let f=c*l,b=c*d,x=h*l,y=h*d;t[0]=f-y*o,t[4]=-r*d,t[8]=x+b*o,t[1]=b+x*o,t[5]=r*l,t[9]=y-f*o,t[2]=-r*h,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){let f=r*l,b=r*d,x=o*l,y=o*d;t[0]=c*l,t[4]=x*h-b,t[8]=f*h+y,t[1]=c*d,t[5]=y*h+f,t[9]=b*h-x,t[2]=-h,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){let f=r*c,b=r*h,x=o*c,y=o*h;t[0]=c*l,t[4]=y-f*d,t[8]=x*d+b,t[1]=d,t[5]=r*l,t[9]=-o*l,t[2]=-h*l,t[6]=b*d+x,t[10]=f-y*d}else if(e.order==="XZY"){let f=r*c,b=r*h,x=o*c,y=o*h;t[0]=c*l,t[4]=-d,t[8]=h*l,t[1]=f*d+y,t[5]=r*l,t[9]=b*d-x,t[2]=x*d-b,t[6]=o*l,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pf,e,Df)}lookAt(e,t,a){let i=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),nn.crossVectors(a,$t),nn.lengthSq()===0&&(Math.abs(a.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),nn.crossVectors(a,$t)),nn.normalize(),Rs.crossVectors($t,nn),i[0]=nn.x,i[4]=Rs.x,i[8]=$t.x,i[1]=nn.y,i[5]=Rs.y,i[9]=$t.y,i[2]=nn.z,i[6]=Rs.z,i[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let a=e.elements,i=t.elements,s=this.elements,r=a[0],o=a[4],c=a[8],h=a[12],l=a[1],d=a[5],f=a[9],b=a[13],x=a[2],y=a[6],u=a[10],p=a[14],v=a[3],E=a[7],g=a[11],_=a[15],M=i[0],m=i[4],S=i[8],C=i[12],R=i[1],k=i[5],D=i[9],F=i[13],I=i[2],z=i[6],V=i[10],L=i[14],Z=i[3],j=i[7],K=i[11],ee=i[15];return s[0]=r*M+o*R+c*I+h*Z,s[4]=r*m+o*k+c*z+h*j,s[8]=r*S+o*D+c*V+h*K,s[12]=r*C+o*F+c*L+h*ee,s[1]=l*M+d*R+f*I+b*Z,s[5]=l*m+d*k+f*z+b*j,s[9]=l*S+d*D+f*V+b*K,s[13]=l*C+d*F+f*L+b*ee,s[2]=x*M+y*R+u*I+p*Z,s[6]=x*m+y*k+u*z+p*j,s[10]=x*S+y*D+u*V+p*K,s[14]=x*C+y*F+u*L+p*ee,s[3]=v*M+E*R+g*I+_*Z,s[7]=v*m+E*k+g*z+_*j,s[11]=v*S+E*D+g*V+_*K,s[15]=v*C+E*F+g*L+_*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],a=e[4],i=e[8],s=e[12],r=e[1],o=e[5],c=e[9],h=e[13],l=e[2],d=e[6],f=e[10],b=e[14],x=e[3],y=e[7],u=e[11],p=e[15],v=c*b-h*f,E=o*b-h*d,g=o*f-c*d,_=r*b-h*l,M=r*f-c*l,m=r*d-o*l;return t*(y*v-u*E+p*g)-a*(x*v-u*_+p*M)+i*(x*E-y*_+p*m)-s*(x*g-y*M+u*m)}determinantAffine(){let e=this.elements,t=e[0],a=e[4],i=e[8],s=e[1],r=e[5],o=e[9],c=e[2],h=e[6],l=e[10];return t*(r*l-o*h)-a*(s*l-o*c)+i*(s*h-r*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=a),this}invert(){let e=this.elements,t=e[0],a=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],h=e[7],l=e[8],d=e[9],f=e[10],b=e[11],x=e[12],y=e[13],u=e[14],p=e[15],v=t*o-a*r,E=t*c-i*r,g=t*h-s*r,_=a*c-i*o,M=a*h-s*o,m=i*h-s*c,S=l*y-d*x,C=l*u-f*x,R=l*p-b*x,k=d*u-f*y,D=d*p-b*y,F=f*p-b*u,I=v*F-E*D+g*k+_*R-M*C+m*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/I;return e[0]=(o*F-c*D+h*k)*z,e[1]=(i*D-a*F-s*k)*z,e[2]=(y*m-u*M+p*_)*z,e[3]=(f*M-d*m-b*_)*z,e[4]=(c*R-r*F-h*C)*z,e[5]=(t*F-i*R+s*C)*z,e[6]=(u*g-x*m-p*E)*z,e[7]=(l*m-f*g+b*E)*z,e[8]=(r*D-o*R+h*S)*z,e[9]=(a*R-t*D-s*S)*z,e[10]=(x*M-y*g+p*v)*z,e[11]=(d*g-l*M-b*v)*z,e[12]=(o*C-r*k-c*S)*z,e[13]=(t*k-a*C+i*S)*z,e[14]=(y*E-x*_-u*v)*z,e[15]=(l*_-d*E+f*v)*z,this}scale(e){let t=this.elements,a=e.x,i=e.y,s=e.z;return t[0]*=a,t[4]*=i,t[8]*=s,t[1]*=a,t[5]*=i,t[9]*=s,t[2]*=a,t[6]*=i,t[10]*=s,t[3]*=a,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,i))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let a=Math.cos(t),i=Math.sin(t),s=1-a,r=e.x,o=e.y,c=e.z,h=s*r,l=s*o;return this.set(h*r+a,h*o-i*c,h*c+i*o,0,h*o+i*c,l*o+a,l*c-i*r,0,h*c-i*o,l*c+i*r,s*c*c+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,i,s,r){return this.set(1,a,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,a){let i=this.elements,s=t._x,r=t._y,o=t._z,c=t._w,h=s+s,l=r+r,d=o+o,f=s*h,b=s*l,x=s*d,y=r*l,u=r*d,p=o*d,v=c*h,E=c*l,g=c*d,_=a.x,M=a.y,m=a.z;return i[0]=(1-(y+p))*_,i[1]=(b+g)*_,i[2]=(x-E)*_,i[3]=0,i[4]=(b-g)*M,i[5]=(1-(f+p))*M,i[6]=(u+v)*M,i[7]=0,i[8]=(x+E)*m,i[9]=(u-v)*m,i[10]=(1-(f+y))*m,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,a){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return a.set(1,1,1),t.identity(),this;let r=jn.set(i[0],i[1],i[2]).length(),o=jn.set(i[4],i[5],i[6]).length(),c=jn.set(i[8],i[9],i[10]).length();s<0&&(r=-r),ma.copy(this);let h=1/r,l=1/o,d=1/c;return ma.elements[0]*=h,ma.elements[1]*=h,ma.elements[2]*=h,ma.elements[4]*=l,ma.elements[5]*=l,ma.elements[6]*=l,ma.elements[8]*=d,ma.elements[9]*=d,ma.elements[10]*=d,t.setFromRotationMatrix(ma),a.x=r,a.y=o,a.z=c,this}makePerspective(e,t,a,i,s,r,o=da,c=!1){let h=this.elements,l=2*s/(t-e),d=2*s/(a-i),f=(t+e)/(t-e),b=(a+i)/(a-i),x,y;if(c)x=s/(r-s),y=r*s/(r-s);else if(o===da)x=-(r+s)/(r-s),y=-2*r*s/(r-s);else if(o===ni)x=-r/(r-s),y=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=l,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=d,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,a,i,s,r,o=da,c=!1){let h=this.elements,l=2/(t-e),d=2/(a-i),f=-(t+e)/(t-e),b=-(a+i)/(a-i),x,y;if(c)x=1/(r-s),y=r/(r-s);else if(o===da)x=-2/(r-s),y=-(r+s)/(r-s);else if(o===ni)x=-1/(r-s),y=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=l,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=d,h[9]=0,h[13]=b,h[2]=0,h[6]=0,h[10]=x,h[14]=y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let t=this.elements,a=e.elements;for(let i=0;i<16;i++)if(t[i]!==a[i])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){let a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}},jn=new U,ma=new Oe,Pf=new U(0,0,0),Df=new U(1,1,1),nn=new U,Rs=new U,$t=new U,Jh=new Oe,Yh=new Lt,Va=class n{constructor(e=0,t=0,a=0,i=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,i=this._order){return this._x=e,this._y=t,this._z=a,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){let i=e.elements,s=i[0],r=i[4],o=i[8],c=i[1],h=i[5],l=i[9],d=i[2],f=i[6],b=i[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,b),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,b),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,b),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,b),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,b));break;case"XZY":this._z=Math.asin(-Ge(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,b),this._y=0);break;default:Se("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return Jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jh,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Va.DEFAULT_ORDER="XYZ";var Vi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Lf=0,Zh=new U,Gn=new Lt,Fa=new Oe,Is=new U,Ci=new U,Ff=new U,Of=new Lt,Qh=new U(1,0,0),$h=new U(0,1,0),el=new U(0,0,1),tl={type:"added"},Uf={type:"removed"},Hn={type:"childadded",child:null},ko={type:"childremoved",child:null},rt=class n extends ya{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new Va,a=new Lt,i=new U(1,1,1);function s(){a.setFromEuler(t,!1)}function r(){t.setFromQuaternion(a,void 0,!1)}t._onChange(s),a._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Pe}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.premultiply(Gn),this}rotateX(e){return this.rotateOnAxis(Qh,e)}rotateY(e){return this.rotateOnAxis($h,e)}rotateZ(e){return this.rotateOnAxis(el,e)}translateOnAxis(e,t){return Zh.copy(e).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qh,e)}translateY(e){return this.translateOnAxis($h,e)}translateZ(e){return this.translateOnAxis(el,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fa.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?Is.copy(e):Is.set(e,t,a);let i=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fa.lookAt(Ci,Is,this.up):Fa.lookAt(Is,Ci,this.up),this.quaternion.setFromRotationMatrix(Fa),i&&(Fa.extractRotation(i.matrixWorld),Gn.setFromRotationMatrix(Fa),this.quaternion.premultiply(Gn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tl),Hn.child=e,this.dispatchEvent(Hn),Hn.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uf),ko.child=e,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tl),Hn.child=e,this.dispatchEvent(Hn),Hn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,i=this.children.length;a<i;a++){let r=this.children[a].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,e,Ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,Of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let a=0,i=t.length;a<i;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let a=0,i=t.length;a<i;a++)t[a].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,a=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*a-s[8]*i,s[13]+=a-s[1]*t-s[5]*a-s[9]*i,s[14]+=i-s[2]*t-s[6]*a-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let a=0,i=t.length;a<i;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t,a=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,a)}}toJSON(e){let t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let d=c[h];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=r(e.geometries),c=r(e.materials),h=r(e.textures),l=r(e.images),d=r(e.shapes),f=r(e.skeletons),b=r(e.animations),x=r(e.nodes);o.length>0&&(a.geometries=o),c.length>0&&(a.materials=c),h.length>0&&(a.textures=h),l.length>0&&(a.images=l),d.length>0&&(a.shapes=d),f.length>0&&(a.skeletons=f),b.length>0&&(a.animations=b),x.length>0&&(a.nodes=x)}return a.object=i,a;function r(o){let c=[];for(let h in o){let l=o[h];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){let i=e.children[a];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rt.DEFAULT_UP=new U(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zt=class extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},zf={type:"move"},oi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let i=null,s=null,r=null,o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){r=!0;for(let y of e.hand.values()){let u=t.getJointPose(y,a),p=this._getHandJoint(h,y);u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=u.radius),p.visible=u!==null}let l=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],f=l.position.distanceTo(d.position),b=.02,x=.005;h.inputState.pinching&&f>b+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=b-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,a),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zf)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let a=new zt;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}},ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sn={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function No(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ce=class{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,a,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=a,je.colorSpaceToWorking(this,i),this}setHSL(e,t,a,i=je.workingColorSpace){if(e=Fc(e,1),t=Ge(t,0,1),a=Ge(a,0,1),t===0)this.r=this.g=this.b=a;else{let s=a<=.5?a*(1+t):a+t-a*t,r=2*a-s;this.r=No(r,s,e+1/3),this.g=No(r,s,e),this.b=No(r,s,e-1/3)}return je.colorSpaceToWorking(this,i),this}setStyle(e,t=lt){function a(s){s!==void 0&&parseFloat(s)<1&&Se("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return a(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return a(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return a(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Se("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);Se("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){let a=ud[e.toLowerCase()];return a!==void 0?this.setHex(a,t):Se("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}copyLinearToSRGB(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return je.workingToColorSpace(Dt.copy(this),e),Math.round(Ge(Dt.r*255,0,255))*65536+Math.round(Ge(Dt.g*255,0,255))*256+Math.round(Ge(Dt.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Dt.copy(this),t);let a=Dt.r,i=Dt.g,s=Dt.b,r=Math.max(a,i,s),o=Math.min(a,i,s),c,h,l=(o+r)/2;if(o===r)c=0,h=0;else{let d=r-o;switch(h=l<=.5?d/(r+o):d/(2-r-o),r){case a:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-a)/d+2;break;case s:c=(a-i)/d+4;break}c/=6}return e.h=c,e.s=h,e.l=l,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=lt){je.workingToColorSpace(Dt.copy(this),e);let t=Dt.r,a=Dt.g,i=Dt.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(i*255)})`}offsetHSL(e,t,a){return this.getHSL(sn),this.setHSL(sn.h+e,sn.s+t,sn.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(sn),e.getHSL(Cs);let a=Bi(sn.h,Cs.h,t),i=Bi(sn.s,Cs.s,t),s=Bi(sn.l,Cs.l,t);return this.setHSL(a,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,a=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*a+s[6]*i,this.g=s[1]*t+s[4]*a+s[7]*i,this.b=s[2]*t+s[5]*a+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dt=new Ce;Ce.NAMES=ud;var Wi=class extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Va,this.environmentIntensity=1,this.environmentRotation=new Va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ga=new U,Oa=new U,Po=new U,Ua=new U,Vn=new U,Wn=new U,al=new U,Do=new U,Lo=new U,Fo=new U,Oo=new $e,Uo=new $e,zo=new $e,ln=class n{constructor(e=new U,t=new U,a=new U){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,i){i.subVectors(a,t),ga.subVectors(e,t),i.cross(ga);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,a,i,s){ga.subVectors(i,t),Oa.subVectors(a,t),Po.subVectors(e,t);let r=ga.dot(ga),o=ga.dot(Oa),c=ga.dot(Po),h=Oa.dot(Oa),l=Oa.dot(Po),d=r*h-o*o;if(d===0)return s.set(0,0,0),null;let f=1/d,b=(h*c-o*l)*f,x=(r*l-o*c)*f;return s.set(1-b-x,x,b)}static containsPoint(e,t,a,i){return this.getBarycoord(e,t,a,i,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(e,t,a,i,s,r,o,c){return this.getBarycoord(e,t,a,i,Ua)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ua.x),c.addScaledVector(r,Ua.y),c.addScaledVector(o,Ua.z),c)}static getInterpolatedAttribute(e,t,a,i,s,r){return Oo.setScalar(0),Uo.setScalar(0),zo.setScalar(0),Oo.fromBufferAttribute(e,t),Uo.fromBufferAttribute(e,a),zo.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Oo,s.x),r.addScaledVector(Uo,s.y),r.addScaledVector(zo,s.z),r}static isFrontFacing(e,t,a,i){return ga.subVectors(a,t),Oa.subVectors(e,t),ga.cross(Oa).dot(i)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,i){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,a,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ga.subVectors(this.c,this.b),Oa.subVectors(this.a,this.b),ga.cross(Oa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,i,s){return n.getInterpolation(e,this.a,this.b,this.c,t,a,i,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let a=this.a,i=this.b,s=this.c,r,o;Vn.subVectors(i,a),Wn.subVectors(s,a),Do.subVectors(e,a);let c=Vn.dot(Do),h=Wn.dot(Do);if(c<=0&&h<=0)return t.copy(a);Lo.subVectors(e,i);let l=Vn.dot(Lo),d=Wn.dot(Lo);if(l>=0&&d<=l)return t.copy(i);let f=c*d-l*h;if(f<=0&&c>=0&&l<=0&&c-l>0)return r=c/(c-l),t.copy(a).addScaledVector(Vn,r);Fo.subVectors(e,s);let b=Vn.dot(Fo),x=Wn.dot(Fo);if(x>=0&&b<=x)return t.copy(s);let y=b*h-c*x;if(y<=0&&h>=0&&x<=0)return o=h/(h-x),t.copy(a).addScaledVector(Wn,o);let u=l*x-b*d;if(u<=0&&d-l>=0&&b-x>=0)return al.subVectors(s,i),o=(d-l)/(d-l+(b-x)),t.copy(i).addScaledVector(al,o);let p=1/(u+y+f);return r=y*p,o=f*p,t.copy(a).addScaledVector(Vn,r).addScaledVector(Wn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},na=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(xa.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(xa.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let a=xa.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let a=e.geometry;if(a!==void 0){let s=a.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,xa):xa.fromBufferAttribute(s,r),xa.applyMatrix4(e.matrixWorld),this.expandByPoint(xa);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),ks.copy(a.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xa),xa.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ki),Ns.subVectors(this.max,ki),Xn.subVectors(e.a,ki),qn.subVectors(e.b,ki),Kn.subVectors(e.c,ki),rn.subVectors(qn,Xn),on.subVectors(Kn,qn),Mn.subVectors(Xn,Kn);let t=[0,-rn.z,rn.y,0,-on.z,on.y,0,-Mn.z,Mn.y,rn.z,0,-rn.x,on.z,0,-on.x,Mn.z,0,-Mn.x,-rn.y,rn.x,0,-on.y,on.x,0,-Mn.y,Mn.x,0];return!Bo(t,Xn,qn,Kn,Ns)||(t=[1,0,0,0,1,0,0,0,1],!Bo(t,Xn,qn,Kn,Ns))?!1:(Ps.crossVectors(rn,on),t=[Ps.x,Ps.y,Ps.z],Bo(t,Xn,qn,Kn,Ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xa).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xa).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(za),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},za=[new U,new U,new U,new U,new U,new U,new U,new U],xa=new U,ks=new na,Xn=new U,qn=new U,Kn=new U,rn=new U,on=new U,Mn=new U,ki=new U,Ns=new U,Ps=new U,Sn=new U;function Bo(n,e,t,a,i){for(let s=0,r=n.length-3;s<=r;s+=3){Sn.fromArray(n,s);let o=i.x*Math.abs(Sn.x)+i.y*Math.abs(Sn.y)+i.z*Math.abs(Sn.z),c=e.dot(Sn),h=t.dot(Sn),l=a.dot(Sn);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}var bt=new U,Ds=new Ie,Bf=0,Ct=class extends ya{constructor(e,t,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=Dc,this.updateRanges=[],this.gpuType=ia,this.version=0,this._normalizationScale=e!==void 0?uo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[a+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)Ds.fromBufferAttribute(this,t),Ds.applyMatrix3(e),this.setXY(t,Ds.x,Ds.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=this._denormalize(a)),a}setComponent(e,t,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),a=this._normalize(a),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=i,this}setXYZW(e,t,a,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),a=this._normalize(a),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Uc(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):zc(e,this.array)}};var Xi=class extends Ct{constructor(e,t,a){super(new Uint16Array(e),t,a)}};var qi=class extends Ct{constructor(e,t,a){super(new Uint32Array(e),t,a)}};var Bt=class extends Ct{constructor(e,t,a){super(new Float32Array(e),t,a)}},jf=new na,Ni=new U,jo=new U,qt=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let a=this.center;t!==void 0?a.copy(t):jf.setFromPoints(e).getCenter(a);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,a.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ni.subVectors(e,this.center);let t=Ni.lengthSq();if(t>this.radius*this.radius){let a=Math.sqrt(t),i=(a-this.radius)*.5;this.center.addScaledVector(Ni,i/a),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ni.copy(e.center).add(jo)),this.expandByPoint(Ni.copy(e.center).sub(jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Gf=0,ha=new Oe,Go=new rt,Jn=new U,ea=new na,Pi=new na,Et=new U,Kt=class n extends ya{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uf(e)?qi:Xi)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let a=this.attributes.normal;if(a!==void 0){let s=new Pe().getNormalMatrix(e);a.applyNormalMatrix(s),a.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ha.makeRotationFromQuaternion(e),this.applyMatrix4(ha),this}rotateX(e){return ha.makeRotationX(e),this.applyMatrix4(ha),this}rotateY(e){return ha.makeRotationY(e),this.applyMatrix4(ha),this}rotateZ(e){return ha.makeRotationZ(e),this.applyMatrix4(ha),this}translate(e,t,a){return ha.makeTranslation(e,t,a),this.applyMatrix4(ha),this}scale(e,t,a){return ha.makeScale(e,t,a),this.applyMatrix4(ha),this}lookAt(e){return Go.lookAt(e),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let a=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];a.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Bt(a,3))}else{let a=Math.min(e.length,t.count);for(let i=0;i<a;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new na);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,i=t.length;a<i;a++){let s=t[a];ea.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,ea.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,ea.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(ea.min),this.boundingBox.expandByPoint(ea.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let a=this.boundingSphere.center;if(ea.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let o=t[s];Pi.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(ea.min,Pi.min),ea.expandByPoint(Et),Et.addVectors(ea.max,Pi.max),ea.expandByPoint(Et)):(ea.expandByPoint(Pi.min),ea.expandByPoint(Pi.max))}ea.getCenter(a);let i=0;for(let s=0,r=e.count;s<r;s++)Et.fromBufferAttribute(e,s),i=Math.max(i,a.distanceToSquared(Et));if(t)for(let s=0,r=t.length;s<r;s++){let o=t[s],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)Et.fromBufferAttribute(o,h),c&&(Jn.fromBufferAttribute(e,h),Et.add(Jn)),i=Math.max(i,a.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let a=t.position,i=t.normal,s=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==a.count)&&(r=new Ct(new Float32Array(4*a.count),4),this.setAttribute("tangent",r));let o=[],c=[],h=new Uint8Array(a.count);for(let C=0;C<a.count;C++)o[C]=new U,c[C]=new U;let l=new U,d=new U,f=new U,b=new Ie,x=new Ie,y=new Ie,u=new U,p=new U;function v(C,R,k){h[C]=h[R]=h[k]=1,l.fromBufferAttribute(a,C),d.fromBufferAttribute(a,R),f.fromBufferAttribute(a,k),b.fromBufferAttribute(s,C),x.fromBufferAttribute(s,R),y.fromBufferAttribute(s,k),d.sub(l),f.sub(l),x.sub(b),y.sub(b);let D=1/(x.x*y.y-y.x*x.y);isFinite(D)&&(u.copy(d).multiplyScalar(y.y).addScaledVector(f,-x.y).multiplyScalar(D),p.copy(f).multiplyScalar(x.x).addScaledVector(d,-y.x).multiplyScalar(D),o[C].add(u),o[R].add(u),o[k].add(u),c[C].add(p),c[R].add(p),c[k].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,R=E.length;C<R;++C){let k=E[C],D=k.start,F=k.count;for(let I=D,z=D+F;I<z;I+=3)v(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let g=new U,_=new U,M=new U,m=new U;function S(C){M.fromBufferAttribute(i,C),m.copy(M);let R=o[C];g.copy(R),g.sub(M.multiplyScalar(M.dot(R))).normalize(),_.crossVectors(m,R);let D=_.dot(c[C])<0?-1:1;r.setXYZW(C,g.x,g.y,g.z,D)}for(let C=0,R=a.count;C<R;++C)h[C]&&S(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==t.count)a=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let f=0,b=a.count;f<b;f++)a.setXYZ(f,0,0,0);let i=new U,s=new U,r=new U,o=new U,c=new U,h=new U,l=new U,d=new U;if(e)for(let f=0,b=e.count;f<b;f+=3){let x=e.getX(f+0),y=e.getX(f+1),u=e.getX(f+2);i.fromBufferAttribute(t,x),s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,u),l.subVectors(r,s),d.subVectors(i,s),l.cross(d),o.fromBufferAttribute(a,x),c.fromBufferAttribute(a,y),h.fromBufferAttribute(a,u),o.add(l),c.add(l),h.add(l),a.setXYZ(x,o.x,o.y,o.z),a.setXYZ(y,c.x,c.y,c.z),a.setXYZ(u,h.x,h.y,h.z)}else for(let f=0,b=t.count;f<b;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),l.subVectors(r,s),d.subVectors(i,s),l.cross(d),a.setXYZ(f+0,l.x,l.y,l.z),a.setXYZ(f+1,l.x,l.y,l.z),a.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,c){let h=o.array,l=o.itemSize,d=o.normalized,f=new h.constructor(c.length*l),b=0,x=0;for(let y=0,u=c.length;y<u;y++){o.isInterleavedBufferAttribute?b=c[y]*o.data.stride+o.offset:b=c[y]*l;for(let p=0;p<l;p++)f[x++]=h[b++]}return new Ct(f,l,d)}if(this.index===null)return Se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,a=this.index.array,i=this.attributes;for(let o in i){let c=i[o],h=e(c,a);t.setAttribute(o,h)}let s=this.morphAttributes;for(let o in s){let c=[],h=s[o];for(let l=0,d=h.length;l<d;l++){let f=h[l],b=e(f,a);c.push(b)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,c=r.length;o<c;o++){let h=r[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let a=this.attributes;for(let c in a){let h=a[c];e.data.attributes[c]=h.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let d=0,f=h.length;d<f;d++){let b=h[d];l.push(b.toJSON(e.data))}l.length>0&&(i[c]=l,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let a=e.index;a!==null&&this.setIndex(a.clone());let i=e.attributes;for(let h in i){let l=i[h];this.setAttribute(h,l.clone(t))}let s=e.morphAttributes;for(let h in s){let l=[],d=s[h];for(let f=0,b=d.length;f<b;f++)l.push(d[f].clone(t));this.morphAttributes[h]=l}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let h=0,l=r.length;h<l;h++){let d=r[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dc,this.updateRanges=[],this.version=0,this.uuid=ka()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,a){e*=this.stride,a*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[a+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=nl(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let a=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(a,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=nl(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let a={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return a.usage=this.usage,a}};function nl(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=ka()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Ut=new U,hi=class n{constructor(e,t,a,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=a,this.normalized=i,this._normalizationScale=e!==void 0?uo(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,a=this.data.count;t<a;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let a=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(a=this._denormalize(a)),a}setComponent(e,t,a){return this.normalized&&(a=this._normalize(a)),this.data.array[e*this.data.stride+this.offset+t]=a,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),a=this._normalize(a)),this.data.array[e+0]=t,this.data.array[e+1]=a,this}setXYZ(e,t,a,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),a=this._normalize(a),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=i,this}setXYZW(e,t,a,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),a=this._normalize(a),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Gi("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let a=0;a<this.count;a++){let i=a*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Gi("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let a=0;a<this.count;a++){let i=a*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Uc(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):zc(e,this.data.array)}},Ho=new U,Hf=new U,Vf=new Pe,ta=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,i){return this.normal.set(e,t,a),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){let i=Ho.subVectors(a,t).cross(Hf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,a=!0){let i=e.delta(Ho),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return a===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let a=t||Vf.getNormalMatrix(e),i=this.coplanarPoint(Ho).applyMatrix4(e),s=this.normal.applyMatrix3(a).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Wf=0,Jt=class extends ya{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=ka(),this.name="",this.type="Material",this.blending=vi,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=bc,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let a=e[t];if(a===void 0){Se(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Se(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(a):i&&i.isVector2&&a&&a.isVector2||i&&i.isEuler&&a&&a.isEuler||i&&i.isVector3&&a&&a.isVector3?i.copy(a):this[t]=a}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,a.blending=this.blending,a.side=this.side,a.shadowSide=this.shadowSide,a.vertexColors=this.vertexColors,a.opacity=this.opacity,a.transparent=this.transparent,a.blendSrc=this.blendSrc,a.blendDst=this.blendDst,a.blendEquation=this.blendEquation,a.blendSrcAlpha=this.blendSrcAlpha,a.blendDstAlpha=this.blendDstAlpha,a.blendEquationAlpha=this.blendEquationAlpha,a.blendColor=this.blendColor.getHex(),a.blendAlpha=this.blendAlpha,a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.clipIntersection=this.clipIntersection,a.clipShadows=this.clipShadows,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,a.stencilWrite=this.stencilWrite,a.polygonOffset=this.polygonOffset,a.polygonOffsetFactor=this.polygonOffsetFactor,a.polygonOffsetUnits=this.polygonOffsetUnits,a.dithering=this.dithering,a.alphaTest=this.alphaTest,a.alphaHash=this.alphaHash,a.alphaToCoverage=this.alphaToCoverage,a.premultipliedAlpha=this.premultipliedAlpha,a.forceSinglePass=this.forceSinglePass,a.allowOverride=this.allowOverride,a.visible=this.visible,a.toneMapped=this.toneMapped,a.name=this.name,this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(a.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(a.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(a.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(a.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(a.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(a.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(a.rotation=this.rotation),this.depthPacking!==void 0&&(a.depthPacking=this.depthPacking),this.linewidth!==void 0&&(a.linewidth=this.linewidth),this.linecap!==void 0&&(a.linecap=this.linecap),this.linejoin!==void 0&&(a.linejoin=this.linejoin),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.wireframe!==void 0&&(a.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(a.flatShading=this.flatShading),this.fog!==void 0&&(a.fog=this.fog),Object.keys(this.userData).length>0&&(a.userData=this.userData);function i(s){let r=[];for(let o in s){let c=s[o];delete c.metadata,r.push(c)}return r}if(t){let s=i(e.textures),r=i(e.images);s.length>0&&(a.textures=s),r.length>0&&(a.images=r)}return a}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(a=>new ta().fromJSON(a))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new Ie().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,a=null;if(t!==null){let i=t.length;a=new Array(i);for(let s=0;s!==i;++s)a[s]=t[s].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ba=new U,Vo=new U,Ls=new U,Fs=new U,Wa=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ba)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ba.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ba.copy(this.origin).addScaledVector(this.direction,t),Ba.distanceToSquared(e))}distanceSqToSegment(e,t,a,i){Vo.copy(e).add(t).multiplyScalar(.5),Ls.copy(t).sub(e).normalize(),Fs.copy(this.origin).sub(Vo);let s=e.distanceTo(t)*.5,r=-this.direction.dot(Ls),o=Fs.dot(this.direction),c=-Fs.dot(Ls),h=Fs.lengthSq(),l=Math.abs(1-r*r),d,f,b,x;if(l>0)if(d=r*c-o,f=r*o-c,x=s*l,d>=0)if(f>=-x)if(f<=x){let y=1/l;d*=y,f*=y,b=d*(d+r*f+2*o)+f*(r*d+f+2*c)+h}else f=s,d=Math.max(0,-(r*f+o)),b=-d*d+f*(f+2*c)+h;else f=-s,d=Math.max(0,-(r*f+o)),b=-d*d+f*(f+2*c)+h;else f<=-x?(d=Math.max(0,-(-r*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),b=-d*d+f*(f+2*c)+h):f<=x?(d=0,f=Math.min(Math.max(-s,-c),s),b=f*(f+2*c)+h):(d=Math.max(0,-(r*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),b=-d*d+f*(f+2*c)+h);else f=r>0?-s:s,d=Math.max(0,-(r*f+o)),b=-d*d+f*(f+2*c)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Vo).addScaledVector(Ls,f),b}intersectSphere(e,t){if(e.radius<0)return null;Ba.subVectors(e.center,this.origin);let a=Ba.dot(this.direction),i=Ba.dot(Ba)-a*a,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=a-r,c=a+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){let a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,i,s,r,o,c,h=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,f=this.origin;return h>=0?(a=(e.min.x-f.x)*h,i=(e.max.x-f.x)*h):(a=(e.max.x-f.x)*h,i=(e.min.x-f.x)*h),l>=0?(s=(e.min.y-f.y)*l,r=(e.max.y-f.y)*l):(s=(e.max.y-f.y)*l,r=(e.min.y-f.y)*l),a>r||s>i||((s>a||isNaN(a))&&(a=s),(r<i||isNaN(i))&&(i=r),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),a>c||o>i)||((o>a||a!==a)&&(a=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(a>=0?a:i,t)}intersectsBox(e){return this.intersectBox(e,Ba)!==null}intersectTriangle(e,t,a,i,s){let r=this.origin,o=this.direction,c=o.x,h=o.y,l=o.z,d=e.x-r.x,f=e.y-r.y,b=e.z-r.z,x=t.x-r.x,y=t.y-r.y,u=t.z-r.z,p=a.x-r.x,v=a.y-r.y,E=a.z-r.z,g=Math.abs(c),_=Math.abs(h),M=Math.abs(l),m,S,C,R,k,D,F,I,z,V,L,Z;if(g>=_&&g>=M?(C=c,D=d,z=x,Z=p,c>=0?(m=h,S=l,R=f,k=b,F=y,I=u,V=v,L=E):(m=l,S=h,R=b,k=f,F=u,I=y,V=E,L=v)):_>=M?(C=h,D=f,z=y,Z=v,h>=0?(m=l,S=c,R=b,k=d,F=u,I=x,V=E,L=p):(m=c,S=l,R=d,k=b,F=x,I=u,V=p,L=E)):(C=l,D=b,z=u,Z=E,l>=0?(m=c,S=h,R=d,k=f,F=x,I=y,V=p,L=v):(m=h,S=c,R=f,k=d,F=y,I=x,V=v,L=p)),C===0)return null;let j=m/C,K=S/C,ee=1/C,me=R-j*D,Te=k-K*D,X=F-j*z,ne=I-K*z,xe=V-j*Z,Ae=L-K*Z,ue=xe*ne-Ae*X,Fe=me*Ae-Te*xe,ft=X*Te-ne*me;if(i){if(ue<0||Fe<0||ft<0)return null}else if((ue<0||Fe<0||ft<0)&&(ue>0||Fe>0||ft>0))return null;let ke=ue+Fe+ft;if(ke===0)return null;let Ze=ee*(ue*D+Fe*z+ft*Z);return(ke>0?Ze<0:Ze>0)?null:this.at(Ze/ke,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Aa=class extends Jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Va,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},il=new Oe,wn=new Wa,Os=new qt,sl=new U,Us=new U,zs=new U,Bs=new U,Wo=new U,js=new U,rl=new U,Gs=new U,Gt=class extends rt{constructor(e=new Kt,t=new Aa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){let i=t[a[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let a=this.geometry,i=a.attributes.position,s=a.morphAttributes.position,r=a.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){js.set(0,0,0);for(let c=0,h=s.length;c<h;c++){let l=o[c],d=s[c];l!==0&&(Wo.fromBufferAttribute(d,e),r?js.addScaledVector(Wo,l):js.addScaledVector(Wo.sub(t),l))}t.add(js)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let a=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Os.copy(a.boundingSphere),Os.applyMatrix4(s),wn.copy(e.ray).recast(e.near),!(Os.containsPoint(wn.origin)===!1&&(wn.intersectSphere(Os,sl)===null||wn.origin.distanceToSquared(sl)>(e.far-e.near)**2))&&(il.copy(s).invert(),wn.copy(e.ray).applyMatrix4(il),!(a.boundingBox!==null&&wn.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,wn)))}_computeIntersections(e,t,a){let i,s=this.geometry,r=this.material,o=s.index,c=s.attributes.position,h=s.attributes.uv,l=s.attributes.uv1,d=s.attributes.normal,f=s.groups,b=s.drawRange;if(o!==null)if(Array.isArray(r))for(let x=0,y=f.length;x<y;x++){let u=f[x],p=r[u.materialIndex],v=Math.max(u.start,b.start),E=Math.min(o.count,Math.min(u.start+u.count,b.start+b.count));for(let g=v,_=E;g<_;g+=3){let M=o.getX(g),m=o.getX(g+1),S=o.getX(g+2);i=Hs(this,p,e,a,h,l,d,M,m,S),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=u.materialIndex,t.push(i))}}else{let x=Math.max(0,b.start),y=Math.min(o.count,b.start+b.count);for(let u=x,p=y;u<p;u+=3){let v=o.getX(u),E=o.getX(u+1),g=o.getX(u+2);i=Hs(this,r,e,a,h,l,d,v,E,g),i&&(i.faceIndex=Math.floor(u/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let x=0,y=f.length;x<y;x++){let u=f[x],p=r[u.materialIndex],v=Math.max(u.start,b.start),E=Math.min(c.count,Math.min(u.start+u.count,b.start+b.count));for(let g=v,_=E;g<_;g+=3){let M=g,m=g+1,S=g+2;i=Hs(this,p,e,a,h,l,d,M,m,S),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=u.materialIndex,t.push(i))}}else{let x=Math.max(0,b.start),y=Math.min(c.count,b.start+b.count);for(let u=x,p=y;u<p;u+=3){let v=u,E=u+1,g=u+2;i=Hs(this,r,e,a,h,l,d,v,E,g),i&&(i.faceIndex=Math.floor(u/3),t.push(i))}}}};function Xf(n,e,t,a,i,s,r,o){let c;if(e.side===Wt?c=a.intersectTriangle(r,s,i,!0,o):c=a.intersectTriangle(i,s,r,e.side===Ia,o),c===null)return null;Gs.copy(o),Gs.applyMatrix4(n.matrixWorld);let h=t.ray.origin.distanceTo(Gs);return h<t.near||h>t.far?null:{distance:h,point:Gs.clone(),object:n}}function Hs(n,e,t,a,i,s,r,o,c,h){n.getVertexPosition(o,Us),n.getVertexPosition(c,zs),n.getVertexPosition(h,Bs);let l=Xf(n,e,t,a,Us,zs,Bs,rl);if(l){let d=new U;ln.getBarycoord(rl,Us,zs,Bs,d),i&&(l.uv=ln.getInterpolatedAttribute(i,o,c,h,d,new Ie)),s&&(l.uv1=ln.getInterpolatedAttribute(s,o,c,h,d,new Ie)),r&&(l.normal=ln.getInterpolatedAttribute(r,o,c,h,d,new U),l.normal.dot(a.direction)>0&&l.normal.multiplyScalar(-1));let f={a:o,b:c,c:h,normal:new U,materialIndex:0};ln.getNormal(Us,zs,Bs,f.normal),l.face=f,l.barycoord=d}return l}var Di=new $e,ol=new $e,cl=new $e,qf=new $e,hl=new Oe,Vs=new U,Xo=new qt,ll=new Oe,qo=new Wa,Ki=class extends Gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zo,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new na),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let a=0;a<t.count;a++)this.getVertexPosition(a,Vs),this.boundingBox.expandByPoint(Vs)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let a=0;a<t.count;a++)this.getVertexPosition(a,Vs),this.boundingSphere.expandByPoint(Vs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let a=this.material,i=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xo.copy(this.boundingSphere),Xo.applyMatrix4(i),e.ray.intersectsSphere(Xo)!==!1&&(ll.copy(i).invert(),qo.copy(e.ray).applyMatrix4(ll),!(this.boundingBox!==null&&qo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,qo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new $e,t=this.geometry.attributes.skinWeight;for(let a=0,i=t.count;a<i;a++){e.fromBufferAttribute(t,a);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$l?this.bindMatrixInverse.copy(this.bindMatrix).invert():Se("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let a=this.skeleton,i=this.geometry;ol.fromBufferAttribute(i.attributes.skinIndex,e),cl.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Di.copy(t),t.set(0,0,0,0)):(Di.set(t.x,t.y,t.z,1),t.set(0,0,0)),Di.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let r=cl.getComponent(s);if(r!==0){let o=ol.getComponent(s);hl.multiplyMatrices(a.bones[o].matrixWorld,a.boneInverses[o]),t.addScaledVector(qf.copy(Di).applyMatrix4(hl),r)}}return t.isVector4&&(t.w=Di.w),t.applyMatrix4(this.bindMatrixInverse)}},li=class extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},di=class extends Tt{constructor(e=null,t=1,a=1,i,s,r,o,c,h=dt,l=dt,d,f){super(null,r,o,c,h,l,i,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},dl=new Oe,Kf=new Oe,Ji=class n{constructor(e=[],t=[]){this.uuid=ka(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Se("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,i=this.bones.length;a<i;a++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let a=new Oe;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){let e=this.bones,t=this.boneInverses,a=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){let o=e[s]?e[s].matrixWorld:Kf;dl.multiplyMatrices(o,t[s]),dl.toArray(a,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let a=new di(t,e,e,ua,ia);return a.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=a,this}getBoneByName(e){for(let t=0,a=this.bones.length;t<a;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let a=0,i=e.bones.length;a<i;a++){let s=e.bones[a],r=t[s];r===void 0&&(Se("Skeleton: No bone found with UUID:",s),r=new li),this.bones.push(r),this.boneInverses.push(new Oe().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,a=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let r=t[i];e.bones.push(r.uuid);let o=a[i];e.boneInverses.push(o.toArray())}return e}},Xa=class extends Ct{constructor(e,t,a,i=1){super(e,t,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Yn=new Oe,fl=new Oe,Ws=[],ul=new na,Jf=new Oe,Li=new Gt,Fi=new qt,Yi=class extends Gt{constructor(e,t,a){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xa(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<a;i++)this.setMatrixAt(i,Jf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new na),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,Yn),ul.copy(e.boundingBox).applyMatrix4(Yn),this.boundingBox.union(ul)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,Yn),Fi.copy(e.boundingSphere).applyMatrix4(Yn),this.boundingSphere.union(Fi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let a=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=a.length+1,r=e*s+1;for(let o=0;o<a.length;o++)a[o]=i[r+o]}raycast(e,t){let a=this.matrixWorld,i=this.count;if(Li.geometry=this.geometry,Li.material=this.material,Li.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fi.copy(this.boundingSphere),Fi.applyMatrix4(a),e.ray.intersectsSphere(Fi)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Yn),fl.multiplyMatrices(a,Yn),Li.matrixWorld=fl,Li.raycast(e,Ws);for(let r=0,o=Ws.length;r<o;r++){let c=Ws[r];c.instanceId=s,c.object=this,t.push(c)}Ws.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let a=t.morphTargetInfluences,i=a.length+1;this.morphTexture===null&&(this.morphTexture=new di(new Float32Array(i*this.count),i,this.count,kr,ia));let s=this.morphTexture.source.data.data,r=0;for(let h=0;h<a.length;h++)r+=a[h];let o=this.geometry.morphTargetsRelative?1:1-r,c=i*e;return s[c]=o,s.set(a,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},An=new qt,Yf=new Ie(.5,.5),Xs=new U,fn=class{constructor(e=new ta,t=new ta,a=new ta,i=new ta,s=new ta,r=new ta){this.planes=[e,t,a,i,s,r]}set(e,t,a,i,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(a),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){let t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=da,a=!1){let i=this.planes,s=e.elements,r=s[0],o=s[1],c=s[2],h=s[3],l=s[4],d=s[5],f=s[6],b=s[7],x=s[8],y=s[9],u=s[10],p=s[11],v=s[12],E=s[13],g=s[14],_=s[15];if(i[0].setComponents(h-r,b-l,p-x,_-v).normalize(),i[1].setComponents(h+r,b+l,p+x,_+v).normalize(),i[2].setComponents(h+o,b+d,p+y,_+E).normalize(),i[3].setComponents(h-o,b-d,p-y,_-E).normalize(),a)i[4].setComponents(c,f,u,g).normalize(),i[5].setComponents(h-c,b-f,p-u,_-g).normalize();else if(i[4].setComponents(h-c,b-f,p-u,_-g).normalize(),t===da)i[5].setComponents(h+c,b+f,p+u,_+g).normalize();else if(t===ni)i[5].setComponents(c,f,u,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),An.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),An.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(An)}intersectsSprite(e){An.center.set(0,0,0);let t=Yf.distanceTo(e.center);return An.radius=.7071067811865476+t,An.applyMatrix4(e.matrixWorld),this.intersectsSphere(An)}intersectsSphere(e){let t=this.planes,a=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(a)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let a=0;a<6;a++){let i=t[a];if(Xs.x=i.normal.x>0?e.max.x:e.min.x,Xs.y=i.normal.y>0?e.max.y:e.min.y,Xs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},bl=new Oe,dr=class n{constructor(){this.coordinateSystem=da,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,a=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];bl.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),a[i]===void 0&&(a[i]=new fn),a[i].setFromProjectionMatrix(bl,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let a=0;a<this._count;a++)if(t[a].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let a=0;a<this._count;a++)if(t[a].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let a=0;a<this._count;a++)if(t[a].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let a=0;a<this._count;a++)if(t[a].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let a=0;a<this._count;a++)if(t[a].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,a=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new fn),t[i].copy(a[i]);return this._count=e._count,this}clone(){return new n().copy(this)}};var fi=class extends Jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},fr=new U,ur=new U,pl=new Oe,Oi=new Wa,qs=new qt,Ko=new U,ml=new U,Cn=class extends rt{constructor(e=new Kt,t=new fi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,a=[0];for(let i=1,s=t.count;i<s;i++)fr.fromBufferAttribute(t,i-1),ur.fromBufferAttribute(t,i),a[i]=a[i-1],a[i]+=fr.distanceTo(ur);e.setAttribute("lineDistance",new Bt(a,1))}else Se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let a=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),qs.copy(a.boundingSphere),qs.applyMatrix4(i),qs.radius+=s,e.ray.intersectsSphere(qs)===!1)return;pl.copy(i).invert(),Oi.copy(e.ray).applyMatrix4(pl);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,l=a.index,f=a.attributes.position;if(l!==null){let b=Math.max(0,r.start),x=Math.min(l.count,r.start+r.count);for(let y=b,u=x-1;y<u;y+=h){let p=l.getX(y),v=l.getX(y+1),E=Ks(this,e,Oi,c,p,v,y);E&&t.push(E)}if(this.isLineLoop){let y=l.getX(x-1),u=l.getX(b),p=Ks(this,e,Oi,c,y,u,x-1);p&&t.push(p)}}else{let b=Math.max(0,r.start),x=Math.min(f.count,r.start+r.count);for(let y=b,u=x-1;y<u;y+=h){let p=Ks(this,e,Oi,c,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=Ks(this,e,Oi,c,x-1,b,x-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){let i=t[a[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Ks(n,e,t,a,i,s,r){let o=n.geometry.attributes.position;if(fr.fromBufferAttribute(o,i),ur.fromBufferAttribute(o,s),t.distanceSqToSegment(fr,ur,Ko,ml)>a)return;Ko.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(Ko);if(!(h<e.near||h>e.far))return{distance:h,point:ml.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}var gl=new U,xl=new U,Zi=class extends Cn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,a=[];for(let i=0,s=t.count;i<s;i+=2)gl.fromBufferAttribute(t,i),xl.fromBufferAttribute(t,i+1),a[i]=i===0?0:a[i-1],a[i+1]=a[i]+gl.distanceTo(xl);e.setAttribute("lineDistance",new Bt(a,1))}else Se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Qi=class extends Cn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ui=class extends Jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yl=new Oe,ac=new Wa,Js=new qt,Ys=new U,$i=class extends rt{constructor(e=new Kt,t=new ui){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let a=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Js.copy(a.boundingSphere),Js.applyMatrix4(i),Js.radius+=s,e.ray.intersectsSphere(Js)===!1)return;yl.copy(i).invert(),ac.copy(e.ray).applyMatrix4(yl);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=a.index,d=a.attributes.position;if(h!==null){let f=Math.max(0,r.start),b=Math.min(h.count,r.start+r.count);for(let x=f,y=b;x<y;x++){let u=h.getX(x);Ys.fromBufferAttribute(d,u),vl(Ys,u,c,i,e,t,this)}}else{let f=Math.max(0,r.start),b=Math.min(d.count,r.start+r.count);for(let x=f,y=b;x<y;x++)Ys.fromBufferAttribute(d,x),vl(Ys,x,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){let i=t[a[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function vl(n,e,t,a,i,s,r){let o=ac.distanceSqToPoint(n);if(o<t){let c=new U;ac.closestPointToPoint(n,c),c.applyMatrix4(a);let h=i.ray.origin.distanceTo(c);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var es=class extends Tt{constructor(e=[],t=Ln,a,i,s,r,o,c,h,l){super(e,t,a,i,s,r,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var qa=class extends Tt{constructor(e,t,a=va,i,s,r,o=dt,c=dt,h,l=Ha,d=1){if(l!==Ha&&l!==$a)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,i,s,r,o,c,l,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ri(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ts=class extends qa{constructor(e,t=va,a=Ln,i,s,r=dt,o=dt,c,h=Ha){let l={width:e,height:e,depth:1},d=[l,l,l,l,l,l];super(e,e,t,a,i,s,r,o,c,h),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},as=class extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},bi=class n extends Kt{constructor(e=1,t=1,a=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:i,heightSegments:s,depthSegments:r};let o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let c=[],h=[],l=[],d=[],f=0,b=0;x("z","y","x",-1,-1,a,t,e,r,s,0),x("z","y","x",1,-1,a,t,-e,r,s,1),x("x","z","y",1,1,e,a,t,i,r,2),x("x","z","y",1,-1,e,a,-t,i,r,3),x("x","y","z",1,-1,e,t,a,i,s,4),x("x","y","z",-1,-1,e,t,-a,i,s,5),this.setIndex(c),this.setAttribute("position",new Bt(h,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(d,2));function x(y,u,p,v,E,g,_,M,m,S,C){let R=g/m,k=_/S,D=g/2,F=_/2,I=M/2,z=m+1,V=S+1,L=0,Z=0,j=new U;for(let K=0;K<V;K++){let ee=K*k-F;for(let me=0;me<z;me++){let Te=me*R-D;j[y]=Te*v,j[u]=ee*E,j[p]=I,h.push(j.x,j.y,j.z),j[y]=0,j[u]=0,j[p]=M>0?1:-1,l.push(j.x,j.y,j.z),d.push(me/m),d.push(1-K/S),L+=1}}for(let K=0;K<S;K++)for(let ee=0;ee<m;ee++){let me=f+ee+z*K,Te=f+ee+z*(K+1),X=f+(ee+1)+z*(K+1),ne=f+(ee+1)+z*K;c.push(me,Te,ne),c.push(Te,X,ne),Z+=6}o.addGroup(b,Z,C),b+=Z,f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ns=class n extends Kt{constructor(e=1,t=1,a=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:i};let s=e/2,r=t/2,o=Math.floor(a),c=Math.floor(i),h=o+1,l=c+1,d=e/o,f=t/c,b=[],x=[],y=[],u=[];for(let p=0;p<l;p++){let v=p*f-r;for(let E=0;E<h;E++){let g=E*d-s;x.push(g,-v,0),y.push(0,0,1),u.push(E/o),u.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){let E=v+h*p,g=v+h*(p+1),_=v+1+h*(p+1),M=v+1+h*p;b.push(E,g,M),b.push(g,_,M)}this.setIndex(b),this.setAttribute("position",new Bt(x,3)),this.setAttribute("normal",new Bt(y,3)),this.setAttribute("uv",new Bt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function Un(n){let e={};for(let t in n){e[t]={};for(let a in n[t]){let i=n[t][a];if(_l(i))i.isRenderTargetTexture?(Se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=i.clone();else if(Array.isArray(i))if(_l(i[0])){let s=[];for(let r=0,o=i.length;r<o;r++)s[r]=i[r].clone();e[t][a]=s}else e[t][a]=i.slice();else e[t][a]=i}}return e}function Ft(n){let e={};for(let t=0;t<n.length;t++){let a=Un(n[t]);for(let i in a)e[i]=a[i]}return e}function _l(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Zf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var bd={clone:Un,merge:Ft},Qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ea=class extends Jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qf,this.fragmentShader=$f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Un(e.uniforms),this.uniformsGroups=Zf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let a={};for(let i in this.extensions)this.extensions[i]===!0&&(a[i]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let a in e.uniforms){let i=e.uniforms[a];switch(this.uniforms[a]={},i.type){case"t":this.uniforms[a].value=t[i.value]||null;break;case"c":this.uniforms[a].value=new Ce().setHex(i.value);break;case"v2":this.uniforms[a].value=new Ie().fromArray(i.value);break;case"v3":this.uniforms[a].value=new U().fromArray(i.value);break;case"v4":this.uniforms[a].value=new $e().fromArray(i.value);break;case"m3":this.uniforms[a].value=new Pe().fromArray(i.value);break;case"m4":this.uniforms[a].value=new Oe().fromArray(i.value);break;default:this.uniforms[a].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},br=class extends Ea{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ht=class extends Jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Va,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Vt=class extends Ht{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return En('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){En('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var pr=class extends Jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mr=class extends Jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function hn(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ui(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function eu(n){function e(i,s){return n[i]-n[s]}let t=n.length,a=new Array(t);for(let i=0;i!==t;++i)a[i]=i;return a.sort(e),a}function Ml(n,e,t){let a=n.length,i=new n.constructor(a);for(let s=0,r=0;r!==a;++s){let o=t[s]*e;for(let c=0;c!==e;++c)i[r++]=n[o+c]}return i}function tu(n,e,t,a){let i=1,s=n[0];for(;s!==void 0&&s[a]===void 0;)s=n[i++];if(s===void 0)return;let r=s[a];if(r!==void 0)if(Array.isArray(r))do r=s[a],r!==void 0&&(e.push(s.time),t.push(...r)),s=n[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[a],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=n[i++];while(s!==void 0);else do r=s[a],r!==void 0&&(e.push(s.time),t.push(r)),s=n[i++];while(s!==void 0)}var Ta=class{constructor(e,t,a,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(a),this.sampleValues=t,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,a=this._cachedIndex,i=t[a],s=t[a-1];a:{e:{let r;t:{n:if(!(e<i)){for(let o=a+2;;){if(i===void 0){if(e<s)break n;return a=t.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===o)break;if(s=i,i=t[++a],e<i)break e}r=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(a=2,s=o);for(let c=a-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===c)break;if(i=s,s=t[--a-1],e>=s)break e}r=a,a=0;break t}break a}for(;a<r;){let o=a+r>>>1;e<t[o]?r=o:a=o+1}if(i=t[a],s=t[a-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return a=t.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,s,i)}return this.interpolate_(a,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,a=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=a[s+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},gr=class extends Ta{constructor(e,t,a,i){super(e,t,a,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$o,endingEnd:$o}}intervalChanged_(e,t,a){let i=this.parameterPositions,s=e-2,r=e+1,o=i[s],c=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case ec:s=e,o=2*t-a;break;case tc:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=a}if(c===void 0)switch(this.getSettings_().endingEnd){case ec:r=e,c=2*a-t;break;case tc:r=1,c=a+i[1]-i[0];break;default:r=e-1,c=t}let h=(a-t)*.5,l=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(c-a),this._offsetPrev=s*l,this._offsetNext=r*l}interpolate_(e,t,a,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,l=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,b=this._weightNext,x=(a-t)/(i-t),y=x*x,u=y*x,p=-f*u+2*f*y-f*x,v=(1+f)*u+(-1.5-2*f)*y+(-.5+f)*x+1,E=(-1-b)*u+(1.5+b)*y+.5*x,g=b*u-b*y;for(let _=0;_!==o;++_)s[_]=p*r[l+_]+v*r[h+_]+E*r[c+_]+g*r[d+_];return s}},xr=class extends Ta{constructor(e,t,a,i){super(e,t,a,i)}interpolate_(e,t,a,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,l=(a-t)/(i-t),d=1-l;for(let f=0;f!==o;++f)s[f]=r[h+f]*d+r[c+f]*l;return s}},yr=class extends Ta{constructor(e,t,a,i){super(e,t,a,i)}interpolate_(e){return this.copySampleValue_(e-1)}},vr=class extends Ta{interpolate_(e,t,a,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,l=this.inTangents,d=this.outTangents;if(!l||!d){let x=(a-t)/(i-t),y=1-x;for(let u=0;u!==o;++u)s[u]=r[h+u]*y+r[c+u]*x;return s}let f=o*2,b=e-1;for(let x=0;x!==o;++x){let y=r[h+x],u=r[c+x],p=b*f+x*2,v=d[p],E=d[p+1],g=e*f+x*2,_=l[g],M=l[g+1],m=nu(a,t,v,_,i);s[x]=pd(m,y,E,M,u)}return s}};function pd(n,e,t,a,i){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*a+n*n*n*i}function au(n,e,t,a,i){let s=1-n;return 3*s*s*(t-e)+6*s*n*(a-t)+3*n*n*(i-a)}function nu(n,e,t,a,i){let s=(n-e)/(i-e);for(let r=0;r<8;r++){let o=pd(s,e,t,a,i)-n;if(Math.abs(o)<1e-10)break;let c=au(s,e,t,a,i);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var Yt=class{constructor(e,t,a,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hn(t,this.TimeBufferType),this.values=hn(a,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,a;if(t.toJSON!==this.toJSON)a=t.toJSON(e);else{a={name:e.name,times:hn(e.times,Array),values:hn(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(a.interpolation=i),Ui(e.settings)&&(a.settings={inTangents:hn(e.settings.inTangents,Array),outTangents:hn(e.settings.outTangents,Array)})}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new yr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new vr(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Tn:t=this.InterpolantFactoryMethodDiscrete;break;case Rn:t=this.InterpolantFactoryMethodLinear;break;case $s:t=this.InterpolantFactoryMethodSmooth;break;case Qo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return Se("KeyframeTrack:",a),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tn;case this.InterpolantFactoryMethodLinear:return Rn;case this.InterpolantFactoryMethodSmooth:return $s;case this.InterpolantFactoryMethodBezier:return Qo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let a=0,i=t.length;a!==i;++a)t[a]+=e;Ui(this.settings)&&(Sl(this.settings.inTangents,e),Sl(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let a=0,i=t.length;a!==i;++a)t[a]*=e;Ui(this.settings)&&(wl(this.settings.inTangents,e),wl(this.settings.outTangents,e))}return this}trim(e,t){let a=this.times,i=a.length,s=0,r=i-1;for(;s!==i&&a[s]<e;)++s;for(;r!==-1&&a[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=a.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);let a=this.times,i=this.values,s=a.length;s===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let c=a[o];if(typeof c=="number"&&isNaN(c)){Ne("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){Ne("KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(i!==void 0&&bf(i))for(let o=0,c=i.length;o!==c;++o){let h=i[o];if(isNaN(h)){Ne("KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),a=this.getValueSize(),i=this.getInterpolation()===$s,s=e.length-1,r=1;for(let o=1;o<s;++o){let c=!1,h=e[o],l=e[o+1];if(h!==l&&(o!==1||h!==e[0]))if(i)c=!0;else{let d=o*a,f=d-a,b=d+a;for(let x=0;x!==a;++x){let y=t[d+x];if(y!==t[f+x]||y!==t[b+x]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];let d=o*a,f=r*a;for(let b=0;b!==a;++b)t[f+b]=t[d+b]}++r}}if(s>0){e[r]=e[s];for(let o=s*a,c=r*a,h=0;h!==a;++h)t[c+h]=t[o+h];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*a)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),a=this.constructor,i=new a(this.name,e,t);return i.createInterpolant=this.createInterpolant,Ui(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Sl(n,e){for(let t=0,a=n.length;t!==a;t+=2)n[t]+=e}function wl(n,e){for(let t=0,a=n.length;t!==a;t+=2)n[t]*=e}Yt.prototype.ValueTypeName="";Yt.prototype.TimeBufferType=Float32Array;Yt.prototype.ValueBufferType=Float32Array;Yt.prototype.DefaultInterpolation=Rn;var Ka=class extends Yt{constructor(e,t,a){super(e,t,a)}};Ka.prototype.ValueTypeName="bool";Ka.prototype.ValueBufferType=Array;Ka.prototype.DefaultInterpolation=Tn;Ka.prototype.InterpolantFactoryMethodLinear=void 0;Ka.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Yt{constructor(e,t,a,i){super(e,t,a,i)}};is.prototype.ValueTypeName="color";var Ja=class extends Yt{constructor(e,t,a,i){super(e,t,a,i)}};Ja.prototype.ValueTypeName="number";var _r=class extends Ta{constructor(e,t,a,i){super(e,t,a,i)}interpolate_(e,t,a,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(a-t)/(i-t),h=e*o;for(let l=h+o;h!==l;h+=4)Lt.slerpFlat(s,0,r,h-o,r,h,c);return s}},Ya=class extends Yt{constructor(e,t,a,i){super(e,t,a,i)}InterpolantFactoryMethodLinear(e){return new _r(this.times,this.values,this.getValueSize(),e)}};Ya.prototype.ValueTypeName="quaternion";Ya.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends Yt{constructor(e,t,a){super(e,t,a)}};Za.prototype.ValueTypeName="string";Za.prototype.ValueBufferType=Array;Za.prototype.DefaultInterpolation=Tn;Za.prototype.InterpolantFactoryMethodLinear=void 0;Za.prototype.InterpolantFactoryMethodSmooth=void 0;var un=class extends Yt{constructor(e,t,a,i){super(e,t,a,i)}};un.prototype.ValueTypeName="vector";var ss=class{constructor(e="",t=-1,a=[],i=ed){this.name=e,this.tracks=a,this.duration=t,this.blendMode=i,this.uuid=ka(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],a=e.tracks,i=1/(e.fps||1);for(let r=0,o=a.length;r!==o;++r)t.push(su(a[r]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],a=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,r=a.length;s!==r;++s)t.push(Yt.toJSON(a[s]));return i}static CreateFromMorphTargetSequence(e,t,a,i){let s=t.length,r=[];for(let o=0;o<s;o++){let c=[],h=[];c.push((o+s-1)%s,o,(o+1)%s),h.push(0,1,0);let l=eu(c);c=Ml(c,1,l),h=Ml(h,1,l),!i&&c[0]===0&&(c.push(s),h.push(h[0])),r.push(new Ja(".morphTargetInfluences["+t[o].name+"]",c,h).scale(1/a))}return new this(e,-1,r)}static findByName(e,t){let a=e;if(!Array.isArray(e)){let i=e;a=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<a.length;i++)if(a[i].name===t)return a[i];return null}static CreateClipsFromMorphTargetSequences(e,t,a){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let h=e[o],l=h.name.match(s);if(l&&l.length>1){let d=l[1],f=i[d];f||(i[d]=f=[]),f.push(h)}}let r=[];for(let o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,a));return r}resetDuration(){let e=this.tracks,t=0;for(let a=0,i=e.length;a!==i;++a){let s=this.tracks[a];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let a=0;a<this.tracks.length;a++)e.push(this.tracks[a].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function iu(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ja;case"vector":case"vector2":case"vector3":case"vector4":return un;case"color":return is;case"quaternion":return Ya;case"bool":case"boolean":return Ka;case"string":return Za}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function su(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=iu(n.type);if(n.times===void 0){let a=[],i=[];tu(n.keys,a,i,"value"),n.times=a,n.values=i}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),Ui(n.settings)&&(t.settings={inTangents:hn(n.settings.inTangents,Float32Array),outTangents:hn(n.settings.outTangents,Float32Array)}),t}var wa={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Al(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Al(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Al(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Mr=class{constructor(e,t,a){let i=this,s=!1,r=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=a,this._abortController=null,this.itemStart=function(l){o++,s===!1&&i.onStart!==void 0&&i.onStart(l,r,o),s=!0},this.itemEnd=function(l){r++,i.onProgress!==void 0&&i.onProgress(l,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,d){return h.push(l,d),this},this.removeHandler=function(l){let d=h.indexOf(l);return d!==-1&&h.splice(d,2),this},this.getHandler=function(l){for(let d=0,f=h.length;d<f;d+=2){let b=h[d],x=h[d+1];if(b.global&&(b.lastIndex=0),b.test(l))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},md=new Mr,Ra=class{constructor(e){this.manager=e!==void 0?e:md,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let a=this;return new Promise(function(i,s){a.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ra.DEFAULT_MATERIAL_NAME="__DEFAULT";var ja={},nc=class extends Error{constructor(e,t){super(e),this.response=t}},pi=class extends Ra{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,a,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=wa.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(ja[e]!==void 0){ja[e].push({onLoad:t,onProgress:a,onError:i});return}ja[e]=[],ja[e].push({onLoad:t,onProgress:a,onError:i});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(r).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&Se("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;let l=ja[e],d=h.body.getReader(),f=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),b=f?parseInt(f):0,x=b!==0,y=0,u=new ReadableStream({start(p){v();function v(){d.read().then(({done:E,value:g})=>{if(E)p.close();else{y+=g.byteLength;let _=new ProgressEvent("progress",{lengthComputable:x,loaded:y,total:b});for(let M=0,m=l.length;M<m;M++){let S=l[M];S.onProgress&&S.onProgress(_)}p.enqueue(g),v()}},E=>{p.error(E)})}}});return new Response(u)}else throw new nc(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return h.json();default:if(o==="")return h.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,b=new TextDecoder(f);return h.arrayBuffer().then(x=>b.decode(x))}}}).then(h=>{wa.add(`file:${e}`,h);let l=ja[e];delete ja[e];for(let d=0,f=l.length;d<f;d++){let b=l[d];b.onLoad&&b.onLoad(h)}}).catch(h=>{let l=ja[e];if(l===void 0)throw this.manager.itemError(e),h;delete ja[e];for(let d=0,f=l.length;d<f;d++){let b=l[d];b.onError&&b.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Zn=new WeakMap,Sr=class extends Ra{constructor(e){super(e)}load(e,t,a,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=wa.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let d=Zn.get(r);d===void 0&&(d=[],Zn.set(r,d)),d.push({onLoad:t,onError:i})}return r}let o=ii("img");function c(){l(),t&&t(this);let d=Zn.get(this)||[];for(let f=0;f<d.length;f++){let b=d[f];b.onLoad&&b.onLoad(this)}Zn.delete(this),s.manager.itemEnd(e)}function h(d){l(),i&&i(d),wa.remove(`image:${e}`);let f=Zn.get(this)||[];for(let b=0;b<f.length;b++){let x=f[b];x.onError&&x.onError(d)}Zn.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),wa.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var rs=class extends Ra{constructor(e){super(e)}load(e,t,a,i){let s=new Tt,r=new Sr(this.manager);return r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},a,i),s}},kn=class extends rt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},os=class extends kn{constructor(e,t,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Jo=new Oe,El=new U,Tl=new U,mi=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fn,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;El.setFromMatrixPosition(e.matrixWorld),t.position.copy(El),Tl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,a,i){Jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),a.setFromProjectionMatrix(Jo,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,o=i?i.w/s.y:1,c=i?i.x/s.x:0,h=i?i.y/s.y:0;e.coordinateSystem===ni||e.reversedDepth?t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),t.multiply(Jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zs=new U,Qs=new Lt,Sa=new U,cs=class extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=da,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zs,Qs,Sa),Sa.x===1&&Sa.y===1&&Sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zs,Qs,Sa.set(1,1,1)).invert()}updateWorldMatrix(e,t,a=!1){super.updateWorldMatrix(e,t,a),this.matrixWorld.decompose(Zs,Qs,Sa),Sa.x===1&&Sa.y===1&&Sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zs,Qs,Sa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},cn=new U,Rl=new Ie,Il=new Ie,xt=class extends cs{constructor(e=50,t=1,a=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=In*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(zi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return In*2*Math.atan(Math.tan(zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cn.x,cn.y).multiplyScalar(-e/cn.z),cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(cn.x,cn.y).multiplyScalar(-e/cn.z)}getViewSize(e,t){return this.getViewBounds(e,Rl,Il),t.subVectors(Il,Rl)}setViewOffset(e,t,a,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(zi*.5*this.fov)/this.zoom,a=2*t,i=this.aspect*a,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,h=r.fullHeight;s+=r.offsetX*i/c,t-=r.offsetY*a/h,i*=r.width/c,a*=r.height/h}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ic=class extends mi{constructor(){super(new xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,a=In*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(a!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=a,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},hs=class extends kn{constructor(e,t,a=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=a,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new ic}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},sc=class extends mi{constructor(){super(new xt(90,1,.5,500)),this.isPointLightShadow=!0}},ls=class extends kn{constructor(e,t,a=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=i,this.shadow=new sc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Nn=class extends cs{constructor(e=-1,t=1,a=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=a-e,r=a+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,r=s+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},rc=class extends mi{constructor(){super(new Nn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bn=class extends kn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new rc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Qa=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Yo=new WeakMap,ds=class extends Ra{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Se("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Se("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,a,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=wa.get(`image-bitmap:${e}`);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(h=>{Yo.has(r)===!0?(i&&i(Yo.get(r)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(h),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(h){return wa.add(`image-bitmap:${e}`,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),Yo.set(c,h),wa.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});wa.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Qn=-90,$n=1,gi=class extends rt{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new xt(Qn,$n,e,t);i.layers=this.layers,this.add(i);let s=new xt(Qn,$n,e,t);s.layers=this.layers,this.add(s);let r=new xt(Qn,$n,e,t);r.layers=this.layers,this.add(r);let o=new xt(Qn,$n,e,t);o.layers=this.layers,this.add(o);let c=new xt(Qn,$n,e,t);c.layers=this.layers,this.add(c);let h=new xt(Qn,$n,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[a,i,s,r,o,c]=t;for(let h of t)this.remove(h);if(e===da)a.up.set(0,1,0),a.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ni)a.up.set(0,-1,0),a.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:a,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,c,h,l]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=a.texture.mipmapsAutoUpdate;a.texture.mipmapsAutoUpdate=!1;let u=!1;e.isWebGLRenderer===!0?u=e.state.buffers.depth.getReversed():u=e.reversedDepthBuffer,e.setRenderTarget(a,0,i),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(a,1,i),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(a,2,i),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(a,3,i),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(a,4,i),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),a.texture.mipmapsAutoUpdate=y,e.setRenderTarget(a,5,i),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(d,f,b),e.xr.enabled=x,a.texture.needsPMREMUpdate=!0}},wr=class extends xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var jc="\\[\\]\\.:\\/",ru=new RegExp("["+jc+"]","g"),Gc="[^"+jc+"]",ou="[^"+jc.replace("\\.","")+"]",cu=/((?:WC+[\/:])*)/.source.replace("WC",Gc),hu=/(WCOD+)?/.source.replace("WCOD",ou),lu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gc),du=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gc),fu=new RegExp("^"+cu+hu+lu+du+"$"),uu=["material","materials","bones","map"],oc=class{constructor(e,t,a){let i=a||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let a=this._targetGroup.nCachedObjects_,i=this._bindings[a];i!==void 0&&i.getValue(e,t)}setValue(e,t){let a=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=a.length;i!==s;++i)a[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,a=e.length;t!==a;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,a=e.length;t!==a;++t)e[t].unbind()}},at=class n{constructor(e,t,a){this.path=t,this.parsedPath=a||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,a){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,a):new n(e,t,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ru,"")}static parseTrackName(e){let t=fu.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let a={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=a.nodeName&&a.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=a.nodeName.substring(i+1);uu.indexOf(s)!==-1&&(a.nodeName=a.nodeName.substring(0,i),a.objectName=s)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let a=e.skeleton.getBoneByName(t);if(a!==void 0)return a}if(e.children){let a=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===t||o.uuid===t)return o;let c=a(o.children);if(c)return c}return null},i=a(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let a=this.resolvedProperty;for(let i=0,s=a.length;i!==s;++i)e[t++]=a[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let a=this.resolvedProperty;for(let i=0,s=a.length;i!==s;++i)a[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let a=this.resolvedProperty;for(let i=0,s=a.length;i!==s;++i)a[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let a=this.resolvedProperty;for(let i=0,s=a.length;i!==s;++i)a[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,a=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Se("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let h=t.objectIndex;switch(a){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===h){h=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(h!==void 0){if(e[h]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let r=e[i];if(r===void 0){let h=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=oc;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ax=new Float32Array(1);var xi=class{constructor(e=1,t=0,a=0){this.radius=e,this.phi=t,this.theta=a}set(e,t,a){return this.radius=e,this.phi=t,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,a){return this.radius=Math.sqrt(e*e+t*t+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(Ge(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var cc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,a,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,a,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let a=0;a<4;a++)this.elements[a]=e[a+t];return this}set(e,t,a,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=a,s[3]=i,this}};var fs=class extends ya{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Hc(n,e,t,a){let i=bu(a);switch(t){case Rc:return n*e;case kr:return n*e/i.components*i.byteLength;case Nr:return n*e/i.components*i.byteLength;case gn:return n*e*2/i.components*i.byteLength;case Pr:return n*e*2/i.components*i.byteLength;case Ic:return n*e*3/i.components*i.byteLength;case ua:return n*e*4/i.components*i.byteLength;case Dr:return n*e*4/i.components*i.byteLength;case bs:case ps:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ms:case gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fr:case Ur:return Math.max(n,16)*Math.max(e,8)/4;case Lr:case Or:return Math.max(n,8)*Math.max(e,8)/2;case zr:case Br:case Gr:case Hr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jr:case xs:case Vr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xr:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case qr:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Kr:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Jr:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Yr:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Zr:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Qr:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $r:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case eo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case to:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ao:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case no:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case io:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case so:case ro:case oo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case co:case ho:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ys:case lo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bu(n){switch(n){case Zt:case wc:return{byteLength:1,components:1};case Si:case Ac:case _a:return{byteLength:2,components:1};case Ir:case Cr:return{byteLength:2,components:4};case va:case Rr:case ia:return{byteLength:4,components:1};case Ec:case Tc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Ud(){let n=null,e=!1,t=null,a=null;function i(s,r){a=n.requestAnimationFrame(i),t(s,r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(a=n.requestAnimationFrame(i),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function mu(n){let e=new WeakMap;function t(o,c){let h=o.array,l=o.usage,d=h.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,h,l),o.onUploadCallback();let b;if(h instanceof Float32Array)b=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)b=n.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?b=n.HALF_FLOAT:b=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=n.SHORT;else if(h instanceof Uint32Array)b=n.UNSIGNED_INT;else if(h instanceof Int32Array)b=n.INT;else if(h instanceof Int8Array)b=n.BYTE;else if(h instanceof Uint8Array)b=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function a(o,c,h){let l=c.array,d=c.updateRanges;if(n.bindBuffer(h,o),d.length===0)n.bufferSubData(h,0,l);else{d.sort((b,x)=>b.start-x.start);let f=0;for(let b=1;b<d.length;b++){let x=d[f],y=d[b];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++f,d[f]=y)}d.length=f+1;for(let b=0,x=d.length;b<x;b++){let y=d[b];n.bufferSubData(h,y.start*l.BYTES_PER_ELEMENT,l,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=e.get(o);if(h===void 0)e.set(o,t(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,o,c),h.version=o.version}}return{get:i,remove:s,update:r}}var gu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xu=`#ifdef USE_ALPHAHASH
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
#endif`,yu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_u=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Su=`#ifdef USE_AOMAP
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
#endif`,wu=`#ifdef USE_AOMAP
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Eu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ru=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cu=`#ifdef USE_IRIDESCENCE
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
#endif`,ku=`#ifdef USE_BUMPMAP
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
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ou=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Uu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,ju=`vec3 transformedNormal = objectNormal;
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
#endif`,Gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xu="gl_FragColor = linearToOutputTexel( gl_FragColor );",qu=`vec4 LinearTransferOETF( in vec4 value ) {
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
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ju=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Yu=`#ifdef USE_ENVMAP
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
#endif`,Zu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$u=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ab=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nb=`#ifdef USE_GRADIENTMAP
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
}`,ib=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ob=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,cb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,db=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ub=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,bb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pb=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xb=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Eb=`#if defined( USE_POINTS_UV )
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
#endif`,Tb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ib=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cb=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nb=`#ifdef USE_MORPHTARGETS
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
#endif`,Pb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zb=`#ifdef USE_NORMALMAP
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
#endif`,Bb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$b=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,tp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,np=`#ifdef USE_SKINNING
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
#endif`,ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sp=`#ifdef USE_SKINNING
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
#endif`,rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lp=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dp=`#ifdef USE_TRANSMISSION
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gp=`uniform sampler2D t2D;
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`#include <common>
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
}`,Sp=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wp=`#define DISTANCE
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
}`,Ap=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`uniform float scale;
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
}`,Ip=`uniform vec3 diffuse;
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
}`,Cp=`#include <common>
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
}`,kp=`uniform vec3 diffuse;
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
}`,Np=`#define LAMBERT
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
}`,Pp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Dp=`#define MATCAP
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
}`,Lp=`#define MATCAP
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
}`,Fp=`#define NORMAL
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
}`,Op=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Up=`#define PHONG
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
}`,zp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Bp=`#define STANDARD
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
}`,jp=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Gp=`#define TOON
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
}`,Hp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Vp=`uniform float size;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,qp=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Kp=`uniform float rotation;
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:gu,alphahash_pars_fragment:xu,alphamap_fragment:yu,alphamap_pars_fragment:vu,alphatest_fragment:_u,alphatest_pars_fragment:Mu,aomap_fragment:Su,aomap_pars_fragment:wu,batching_pars_vertex:Au,batching_vertex:Eu,begin_vertex:Tu,beginnormal_vertex:Ru,bsdfs:Iu,iridescence_fragment:Cu,bumpmap_pars_fragment:ku,clipping_planes_fragment:Nu,clipping_planes_pars_fragment:Pu,clipping_planes_pars_vertex:Du,clipping_planes_vertex:Lu,color_fragment:Fu,color_pars_fragment:Ou,color_pars_vertex:Uu,color_vertex:zu,common:Bu,defaultnormal_vertex:ju,displacementmap_pars_vertex:Gu,displacementmap_vertex:Hu,emissivemap_fragment:Vu,emissivemap_pars_fragment:Wu,colorspace_fragment:Xu,colorspace_pars_fragment:qu,envmap_fragment:Ku,envmap_common_pars_fragment:Ju,envmap_pars_fragment:Yu,envmap_pars_vertex:Zu,envmap_physical_pars_fragment:cb,envmap_vertex:Qu,fog_vertex:$u,fog_pars_vertex:eb,fog_fragment:tb,fog_pars_fragment:ab,gradientmap_pars_fragment:nb,lightmap_pars_fragment:ib,lights_lambert_fragment:sb,lights_lambert_pars_fragment:rb,lights_pars_begin:ob,lights_toon_fragment:hb,lights_toon_pars_fragment:lb,lights_phong_fragment:db,lights_phong_pars_fragment:fb,lights_physical_fragment:ub,lights_physical_pars_fragment:bb,lights_fragment_begin:pb,lights_fragment_maps:mb,lights_fragment_end:gb,lightprobes_pars_fragment:xb,logdepthbuf_fragment:yb,logdepthbuf_pars_fragment:vb,logdepthbuf_pars_vertex:_b,logdepthbuf_vertex:Mb,map_fragment:Sb,map_pars_fragment:wb,map_particle_fragment:Ab,map_particle_pars_fragment:Eb,metalnessmap_fragment:Tb,metalnessmap_pars_fragment:Rb,morphinstance_vertex:Ib,morphcolor_vertex:Cb,morphnormal_vertex:kb,morphtarget_pars_vertex:Nb,morphtarget_vertex:Pb,normal_fragment_begin:Db,normal_fragment_maps:Lb,normal_pars_fragment:Fb,normal_pars_vertex:Ob,normal_vertex:Ub,normalmap_pars_fragment:zb,clearcoat_normal_fragment_begin:Bb,clearcoat_normal_fragment_maps:jb,clearcoat_pars_fragment:Gb,iridescence_pars_fragment:Hb,opaque_fragment:Vb,packing:Wb,premultiplied_alpha_fragment:Xb,project_vertex:qb,dithering_fragment:Kb,dithering_pars_fragment:Jb,roughnessmap_fragment:Yb,roughnessmap_pars_fragment:Zb,shadowmap_pars_fragment:Qb,shadowmap_pars_vertex:$b,shadowmap_vertex:ep,shadowmask_pars_fragment:tp,skinbase_vertex:ap,skinning_pars_vertex:np,skinning_vertex:ip,skinnormal_vertex:sp,specularmap_fragment:rp,specularmap_pars_fragment:op,tonemapping_fragment:cp,tonemapping_pars_fragment:hp,transmission_fragment:lp,transmission_pars_fragment:dp,uv_pars_fragment:fp,uv_pars_vertex:up,uv_vertex:bp,worldpos_vertex:pp,background_vert:mp,background_frag:gp,backgroundCube_vert:xp,backgroundCube_frag:yp,cube_vert:vp,cube_frag:_p,depth_vert:Mp,depth_frag:Sp,distance_vert:wp,distance_frag:Ap,equirect_vert:Ep,equirect_frag:Tp,linedashed_vert:Rp,linedashed_frag:Ip,meshbasic_vert:Cp,meshbasic_frag:kp,meshlambert_vert:Np,meshlambert_frag:Pp,meshmatcap_vert:Dp,meshmatcap_frag:Lp,meshnormal_vert:Fp,meshnormal_frag:Op,meshphong_vert:Up,meshphong_frag:zp,meshphysical_vert:Bp,meshphysical_frag:jp,meshtoon_vert:Gp,meshtoon_frag:Hp,points_vert:Vp,points_frag:Wp,shadow_vert:Xp,shadow_frag:qp,sprite_vert:Kp,sprite_frag:Jp},pe={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},Pa={basic:{uniforms:Ft([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Ft([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Ft([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Ft([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Ft([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Ft([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Ft([pe.points,pe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Ft([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Ft([pe.common,pe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Ft([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Ft([pe.sprite,pe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Ft([pe.common,pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Ft([pe.lights,pe.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Pa.physical={uniforms:Ft([Pa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var bo={r:0,b:0,g:0},Yp=new Oe,zd=new Pe;zd.set(-1,0,0,0,1,0,0,0,1);function Zp(n,e,t,a,i,s){let r=new Ce(0),o=i===!0?0:1,c,h,l=null,d=0,f=null;function b(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let g=v.backgroundBlurriness>0;E=e.get(E,g)}return E}function x(v){let E=!1,g=b(v);g===null?u(r,o):g&&g.isColor&&(u(g,1),E=!0);let _=n.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,s):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(v,E){let g=b(E);g&&g.isCubeTexture?(h===void 0&&(h=new Gt(new bi(1,1,1),new Ea({name:"BackgroundCubeMaterial",uniforms:Un(Pa.backgroundCube.uniforms),vertexShader:Pa.backgroundCube.vertexShader,fragmentShader:Pa.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(_,M,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yp.makeRotationFromEuler(E.backgroundRotation)).transpose(),g.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(zd),h.material.toneMapped=je.getTransfer(g.colorSpace)!==Ye,(l!==g||d!==g.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,l=g,d=g.version,f=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Gt(new ns(2,2),new Ea({name:"BackgroundMaterial",uniforms:Un(Pa.background.uniforms),vertexShader:Pa.background.vertexShader,fragmentShader:Pa.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=je.getTransfer(g.colorSpace)!==Ye,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(l!==g||d!==g.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,l=g,d=g.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,E){v.getRGB(bo,Bc(n)),t.buffers.color.setClear(bo.r,bo.g,bo.b,E,s)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,E=1){r.set(v),o=E,u(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,u(r,o)},render:x,addToRenderList:y,dispose:p}}function Qp(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),a={},i=f(null),s=i,r=!1;function o(k,D,F,I,z){let V=!1,L=d(k,I,F,D);s!==L&&(s=L,h(s.object)),V=b(k,I,F,z),V&&x(k,I,F,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,g(k,D,F,I),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return n.createVertexArray()}function h(k){return n.bindVertexArray(k)}function l(k){return n.deleteVertexArray(k)}function d(k,D,F,I){let z=I.wireframe===!0,V=a[D.id];V===void 0&&(V={},a[D.id]=V);let L=k.isInstancedMesh===!0?k.id:0,Z=V[L];Z===void 0&&(Z={},V[L]=Z);let j=Z[F.id];j===void 0&&(j={},Z[F.id]=j);let K=j[z];return K===void 0&&(K=f(c()),j[z]=K),K}function f(k){let D=[],F=[],I=[];for(let z=0;z<t;z++)D[z]=0,F[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:I,object:k,attributes:{},index:null}}function b(k,D,F,I){let z=s.attributes,V=D.attributes,L=0,Z=F.getAttributes();for(let j in Z)if(Z[j].location>=0){let ee=z[j],me=V[j];if(me===void 0&&(j==="instanceMatrix"&&k.instanceMatrix&&(me=k.instanceMatrix),j==="instanceColor"&&k.instanceColor&&(me=k.instanceColor)),ee===void 0||ee.attribute!==me||me&&ee.data!==me.data)return!0;L++}return s.attributesNum!==L||s.index!==I}function x(k,D,F,I){let z={},V=D.attributes,L=0,Z=F.getAttributes();for(let j in Z)if(Z[j].location>=0){let ee=V[j];ee===void 0&&(j==="instanceMatrix"&&k.instanceMatrix&&(ee=k.instanceMatrix),j==="instanceColor"&&k.instanceColor&&(ee=k.instanceColor));let me={};me.attribute=ee,ee&&ee.data&&(me.data=ee.data),z[j]=me,L++}s.attributes=z,s.attributesNum=L,s.index=I}function y(){let k=s.newAttributes;for(let D=0,F=k.length;D<F;D++)k[D]=0}function u(k){p(k,0)}function p(k,D){let F=s.newAttributes,I=s.enabledAttributes,z=s.attributeDivisors;F[k]=1,I[k]===0&&(n.enableVertexAttribArray(k),I[k]=1),z[k]!==D&&(n.vertexAttribDivisor(k,D),z[k]=D)}function v(){let k=s.newAttributes,D=s.enabledAttributes;for(let F=0,I=D.length;F<I;F++)D[F]!==k[F]&&(n.disableVertexAttribArray(F),D[F]=0)}function E(k,D,F,I,z,V,L){L===!0?n.vertexAttribIPointer(k,D,F,z,V):n.vertexAttribPointer(k,D,F,I,z,V)}function g(k,D,F,I){y();let z=I.attributes,V=F.getAttributes(),L=D.defaultAttributeValues;for(let Z in V){let j=V[Z];if(j.location>=0){let K=z[Z];if(K===void 0&&(Z==="instanceMatrix"&&k.instanceMatrix&&(K=k.instanceMatrix),Z==="instanceColor"&&k.instanceColor&&(K=k.instanceColor)),K!==void 0){let ee=K.normalized,me=K.itemSize,Te=e.get(K);if(Te===void 0)continue;let X=Te.buffer,ne=Te.type,xe=Te.bytesPerElement,Ae=ne===n.INT||ne===n.UNSIGNED_INT||K.gpuType===Rr;if(K.isInterleavedBufferAttribute){let ue=K.data,Fe=ue.isInterleavedBuffer===!0?ue.stride:ue.itemSize,ft=K.offset;if(ue.isInstancedInterleavedBuffer||ue.isInstancedBufferAttribute){for(let ke=0;ke<j.locationSize;ke++)p(j.location+ke,ue.meshPerAttribute);k.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ke=0;ke<j.locationSize;ke++)u(j.location+ke);n.bindBuffer(n.ARRAY_BUFFER,X);for(let ke=0;ke<j.locationSize;ke++)E(j.location+ke,me/j.locationSize,ne,ee,Fe*xe,(ft+me/j.locationSize*ke)*xe,Ae)}else{if(K.isInstancedBufferAttribute){for(let ue=0;ue<j.locationSize;ue++)p(j.location+ue,K.meshPerAttribute);k.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ue=0;ue<j.locationSize;ue++)u(j.location+ue);n.bindBuffer(n.ARRAY_BUFFER,X);for(let ue=0;ue<j.locationSize;ue++)E(j.location+ue,me/j.locationSize,ne,ee,me*xe,me/j.locationSize*ue*xe,Ae)}}else if(L!==void 0){let ee=L[Z];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(j.location,ee);break;case 3:n.vertexAttrib3fv(j.location,ee);break;case 4:n.vertexAttrib4fv(j.location,ee);break;default:n.vertexAttrib1fv(j.location,ee)}}}}v()}function _(){C();for(let k in a){let D=a[k];for(let F in D){let I=D[F];for(let z in I){let V=I[z];for(let L in V)l(V[L].object),delete V[L];delete I[z]}}delete a[k]}}function M(k){if(a[k.id]===void 0)return;let D=a[k.id];for(let F in D){let I=D[F];for(let z in I){let V=I[z];for(let L in V)l(V[L].object),delete V[L];delete I[z]}}delete a[k.id]}function m(k){for(let D in a){let F=a[D];for(let I in F){let z=F[I];if(z[k.id]===void 0)continue;let V=z[k.id];for(let L in V)l(V[L].object),delete V[L];delete z[k.id]}}}function S(k){for(let D in a){let F=a[D],I=k.isInstancedMesh===!0?k.id:0,z=F[I];if(z!==void 0){for(let V in z){let L=z[V];for(let Z in L)l(L[Z].object),delete L[Z];delete z[V]}delete F[I],Object.keys(F).length===0&&delete a[D]}}}function C(){R(),r=!0,s!==i&&(s=i,h(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:R,dispose:_,releaseStatesOfGeometry:M,releaseStatesOfObject:S,releaseStatesOfProgram:m,initAttributes:y,enableAttribute:u,disableUnusedAttributes:v}}function $p(n,e,t){let a;function i(c){a=c}function s(c,h){n.drawArrays(a,c,h),t.update(h,a,1)}function r(c,h,l){l!==0&&(n.drawArraysInstanced(a,c,h,l),t.update(h,a,l))}function o(c,h,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,c,0,h,0,l);let f=0;for(let b=0;b<l;b++)f+=h[b];t.update(f,a,1)}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function em(n,e,t,a){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let m=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(m){return!(m!==ua&&a.convert(m)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(m){let S=m===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(m!==Zt&&m!==ia&&!S&&a.convert(m)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(m){if(m==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp",l=c(h);l!==h&&(Se("WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Se("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let b=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),u=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:b,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:u,maxAttributes:p,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:g,maxSamples:_,samples:M}}function tm(n){let e=this,t=null,a=0,i=!1,s=!1,r=new ta,o=new Pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let b=d.length!==0||f||a!==0||i;return i=f,a=d.length,b},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=l(d,f,0)},this.setState=function(d,f,b){let x=d.clippingPlanes,y=d.clipIntersection,u=d.clipShadows,p=n.get(d);if(!i||x===null||x.length===0||s&&!u)s?l(null):h();else{let v=s?0:a,E=v*4,g=p.clippingState||null;c.value=g,g=l(x,f,E,b);for(let _=0;_!==E;++_)g[_]=t[_];p.clippingState=g,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function l(d,f,b,x){let y=d!==null?d.length:0,u=null;if(y!==0){if(u=c.value,x!==!0||u===null){let p=b+y*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(u===null||u.length<p)&&(u=new Float32Array(p));for(let E=0,g=b;E!==y;++E,g+=4)r.copy(d[E]).applyMatrix4(v,o),r.normal.toArray(u,g),u[g+3]=r.constant}c.value=u,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,u}}var Ss=class extends aa{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let a={width:e,height:e,depth:1},i=[a,a,a,a,a,a];this.texture=new es(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new bi(5,5,5),s=new Ea({name:"CubemapFromEquirect",uniforms:Un(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Wt,blending:Pn});s.uniforms.tEquirect.value=t;let r=new Gt(i,s),o=t.minFilter;return t.minFilter===fa&&(t.minFilter=yt),new gi(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,a=!0,i=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,a,i);e.setRenderTarget(s)}},gd=256,am=3,nm=20,Bd=256,jd=16,im=3,sm=new U,rm=new Ce,mo=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new gi(1,10,null),this._boxMesh=new Gt(new bi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,a=.1,i=100,s={}){let{size:r=256,position:o=sm}=s,c=this._renderer;this._setSize(r);let h=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,f=c.autoClearColor,b=c.autoClearDepth,x=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(rm));let u=new gi(a,i,l);return u.position.copy(o),u.update(c,e),c.autoClear=d,c.autoClearColor=f,c.autoClearDepth=b,c.autoClearStencil=x,e.background=y,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(h,t)),this._applyPMREM(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(gd,Oc(e))}_fromTexture(e,t){e.mapping===Ln||e.mapping===_i?this._setSize(e.image.length===0?gd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let a=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(a),a}_allocateTarget(){let e=this._cubeSize,t=xd(e,!1,!1),a=Math.log2(e)-am;for(let i=0;i<=a;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,a=this._sourceTarget;return(a===null||a.width!==t||e&&a.depthBuffer===!1)&&(a!==null&&a.dispose(),this._sourceTarget=xd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,a){let i=this._boxMesh,s=this._cubeCamera;i.material=a,s.renderTarget=e,s.activeMipmapLevel=t;let r=e.width>>t;e.viewport.set(0,0,r,r),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ln||e.mapping===_i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=yd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=om(),this._integrationMaterial=cm());let t=this._cubeSize,a=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/jd);for(let r=0;r<=a;r++){let o=n.lodToRoughness(r,a);if(r>a-im)s.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Bd*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=c,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=hm());let a=this._blurMaterial,i=a.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,a),i.envMap.value=e.texture,this._renderCube(s,0,a)}};function xd(n,e,t){return new Ss(n,{minFilter:fa,generateMipmaps:e,type:_a,colorSpace:jt,depthBuffer:t})}function ws(n,e,t){return new Ea({name:n,uniforms:e,vertexShader:Be.cube_vert,fragmentShader:t,side:Wt,blending:Pn,depthTest:!1,depthWrite:!1})}function om(){return ws("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Bd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function cm(){return ws("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:jd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function hm(){return ws("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${nm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function yd(){return ws("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function vd(){return ws("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function lm(n){let e=new WeakMap,t=new WeakMap,a=null;function i(f,b=!1){return f==null?null:b?r(f):s(f)}function s(f){if(f&&f.isTexture){let b=f.mapping;if(b===Ar||b===Er)if(e.has(f)){let x=e.get(f).texture;return o(x,f.mapping)}else{let x=f.image;if(x&&x.height>0){let y=new Ss(x.height);return y.fromEquirectangularTexture(n,f),e.set(f,y),f.addEventListener("dispose",h),o(y.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let b=f.mapping,x=b===Ar||b===Er,y=b===Ln||b===_i;if(x||y){let u=t.get(f),p=u!==void 0?u.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return a===null&&(a=new mo(n)),u=x?a.fromEquirectangular(f,u):a.fromCubemap(f,u),u.texture.pmremVersion=f.pmremVersion,t.set(f,u),u.texture;if(u!==void 0)return u.texture;{let v=f.image;return x&&v&&v.height>0||y&&v&&c(v)?(a===null&&(a=new mo(n)),u=x?a.fromEquirectangular(f):a.fromCubemap(f),u.texture.pmremVersion=f.pmremVersion,t.set(f,u),f.addEventListener("dispose",l),u.texture):null}}}return f}function o(f,b){return b===Ar?f.mapping=Ln:b===Er&&(f.mapping=_i),f}function c(f){let b=0,x=6;for(let y=0;y<x;y++)f[y]!==void 0&&b++;return b===x}function h(f){let b=f.target;b.removeEventListener("dispose",h);let x=e.get(b);x!==void 0&&(e.delete(b),x.dispose())}function l(f){let b=f.target;b.removeEventListener("dispose",l);let x=t.get(b);x!==void 0&&(t.delete(b),x.dispose())}function d(){e=new WeakMap,t=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:i,dispose:d}}function dm(n){let e={};function t(a){if(e[a]!==void 0)return e[a];let i=n.getExtension(a);return e[a]=i,i}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){let i=t(a);return i===null&&En("WebGLRenderer: "+a+" extension not supported."),i}}}function fm(n,e,t,a){let i={},s=new WeakMap,r=new FinalizationRegistry(x=>delete i[x]);function o(x){c(x.target)}function c(x){x.index!==null&&e.remove(x.index);for(let u in x.attributes)e.remove(x.attributes[u]);x.removeEventListener("dispose",o),delete i[x.id],r.unregister(x);let y=s.get(x);y&&(e.remove(y),s.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function h(x,y){return i[y.id]!==void 0||(y.addEventListener("dispose",o),i[y.id]=new WeakRef(y),r.register(y,y.id,y),t.memory.geometries++),y}function l(x){let y=x.attributes;for(let u in y)e.update(y[u],n.ARRAY_BUFFER)}function d(x){let y=x.index,u=x.attributes.position,p=0;if(u===void 0)return;let v=y!==null?y.array.length:u.array.length/3-1,E=u.count>=65535?qi:Xi,g=new E(Math.ceil(v/3)*6,1),_=g.array;if(y!==null){let m=y.array;p=y.version;for(let S=0,C=0;S<v;S+=3){let R=m[S+0],k=m[S+1],D=m[S+2];_[C++]=R,_[C++]=k,_[C++]=k,_[C++]=D,_[C++]=D,_[C++]=R}}else{p=u.version;for(let m=0,S=0;m<v;m+=3){let C=m+0,R=m+1,k=m+2;_[S++]=C,_[S++]=R,_[S++]=R,_[S++]=k,_[S++]=k,_[S++]=C}}g.version=p;let M=s.get(x);M&&e.remove(M),s.set(x,g)}function f(x){let y=s.get(x);if(y){let u=x.index;u!==null&&y.version<u.version&&d(x)}else d(x);return s.get(x)}function b(){for(let x in i){let y=i[x].deref();y!==void 0&&c(y)}}return{get:h,update:l,getWireframeAttribute:f,dispose:b}}function um(n,e,t){let a;function i(d){a=d}let s,r;function o(d){s=d.type,r=d.bytesPerElement}function c(d,f){n.drawElements(a,f,s,d*r),t.update(f,a,1)}function h(d,f,b){b!==0&&(n.drawElementsInstanced(a,f,s,d*r,b),t.update(f,a,b))}function l(d,f,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,f,0,s,d,0,b);let y=0;for(let u=0;u<b;u++)y+=f[u];t.update(y,a,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=l}function bm(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(s,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Ne("WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:a}}function pm(n,e,t){let a=new WeakMap,i=new $e;function s(r,o,c){let h=r.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=l!==void 0?l.length:0,f=a.get(o);if(f===void 0||f.count!==d){let C=function(){m.dispose(),a.delete(o),o.removeEventListener("dispose",C)};f!==void 0&&f.texture.dispose();let b=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],E=0;b===!0&&(E=1),x===!0&&(E=2),y===!0&&(E=3);let g=o.attributes.position.count*E,_=1;g>e.maxTextureSize&&(_=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);let M=new Float32Array(g*_*4*d),m=new Hi(M,g,_,d);m.type=ia,m.needsUpdate=!0;let S=E*4;for(let R=0;R<d;R++){let k=u[R],D=p[R],F=v[R],I=g*_*4*R;for(let z=0;z<k.count;z++){let V=z*S;b===!0&&(i.fromBufferAttribute(k,z),M[I+V+0]=i.x,M[I+V+1]=i.y,M[I+V+2]=i.z,M[I+V+3]=0),x===!0&&(i.fromBufferAttribute(D,z),M[I+V+4]=i.x,M[I+V+5]=i.y,M[I+V+6]=i.z,M[I+V+7]=0),y===!0&&(i.fromBufferAttribute(F,z),M[I+V+8]=i.x,M[I+V+9]=i.y,M[I+V+10]=i.z,M[I+V+11]=F.itemSize===4?i.w:1)}}f={count:d,texture:m,size:new Ie(g,_)},a.set(o,f),o.addEventListener("dispose",C)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let b=0;for(let y=0;y<h.length;y++)b+=h[y];let x=o.morphTargetsRelative?1:1-b;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",h)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function mm(n,e,t,a,i){let s=new WeakMap;function r(h){let l=i.render.frame,d=h.geometry,f=e.get(h,d);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),s.get(h)!==l&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),s.set(h,l))),h.isSkinnedMesh){let b=h.skeleton;s.get(b)!==l&&(b.update(),s.set(b,l))}return f}function o(){s=new WeakMap}function c(h){let l=h.target;l.removeEventListener("dispose",c),a.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var gm={[mc]:"LINEAR_TONE_MAPPING",[gc]:"REINHARD_TONE_MAPPING",[xc]:"CINEON_TONE_MAPPING",[yc]:"ACES_FILMIC_TONE_MAPPING",[_c]:"AGX_TONE_MAPPING",[Mc]:"NEUTRAL_TONE_MAPPING",[vc]:"CUSTOM_TONE_MAPPING"};function xm(n,e,t,a,i,s){let r=new aa(e,t,{type:n,depthBuffer:i,stencilBuffer:s,samples:a?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,h=null,l=new Kt;l.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Bt([0,2,0,0,2,0],2));let d=new br({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Gt(l,d),b=new Nn(-1,1,1,-1,0,1),x=null,y=null,u=!1,p,v=null,E=[],g=!1;this.setSize=function(_,M){r.setSize(_,M),o!==null&&o.setSize(_,M),c!==null&&c.setSize(_,M);for(let m=0;m<E.length;m++){let S=E[m];S.setSize&&S.setSize(_,M)}},this.setEffects=function(_){E=_,g=E.length>0&&E[0].isRenderPass===!0;let M=r.width,m=r.height;E.length>0&&o===null&&(o=new aa(M,m,{type:_a,depthBuffer:!1,stencilBuffer:!1}),c=new aa(M,m,{type:_a,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&E.some(C=>C.needsDepthTexture===!0);S!==(r.depthTexture!==null)&&(S===!0&&h===null&&(h=new qa(M,m),s===!0&&(h.format=$a,h.type=On)),r.dispose(),r.depthTexture=S?h:null,r.resolveDepthBuffer=S,r.storeMultisampledDepthBuffer=S);for(let C=0;C<E.length;C++){let R=E[C];R.setSize&&R.setSize(M,m),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(h)}},this.begin=function(_,M){if(u||_.toneMapping===Ca&&E.length===0)return!1;if(v=M,M!==null){let m=M.width,S=M.height;(r.width!==m||r.height!==S)&&this.setSize(m,S)}return g===!1&&_.setRenderTarget(r),p=_.toneMapping,_.toneMapping=Ca,!0},this.hasRenderPass=function(){return g},this.end=function(_,M){_.toneMapping=p,u=!0;let m=r,S=o;for(let C=0;C<E.length;C++){let R=E[C];R.enabled!==!1&&(R.render(_,S,m,M),R.needsSwap!==!1&&(m=S,S=S===o?c:o))}if(x!==_.outputColorSpace||y!==_.toneMapping){x=_.outputColorSpace,y=_.toneMapping,d.defines={},je.getTransfer(x)===Ye&&(d.defines.SRGB_TRANSFER="");let C=gm[y];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=m.texture,_.setRenderTarget(v),_.render(f,b),v=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}var Gd=new Tt,Hd=new qa(1,1),Vd=new ts(1),Wd=new Hi,Xd=new lr,qd=new es,_d=[],Md=[],Sd=new Float32Array(16),wd=new Float32Array(9),Ad=new Float32Array(4);function Ti(n,e,t){let a=n[0];if(a<=0||a>0)return n;let i=e*t,s=_d[i];if(s===void 0&&(s=new Float32Array(i),_d[i]=s),e!==0){a.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(s,o)}return s}function vt(n,e){if(n.length!==e.length)return!1;for(let t=0,a=n.length;t<a;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,a=e.length;t<a;t++)n[t]=e[t]}function xo(n,e){let t=Md[e];t===void 0&&(t=new Int32Array(e),Md[e]=t);for(let a=0;a!==e;++a)t[a]=n.allocateTextureUnit();return t}function ym(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function vm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function _m(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function Mm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function Sm(n,e){let t=this.cache,a=e.elements;if(a===void 0){if(vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,a))return;Ad.set(a),n.uniformMatrix2fv(this.addr,!1,Ad),_t(t,a)}}function wm(n,e){let t=this.cache,a=e.elements;if(a===void 0){if(vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,a))return;wd.set(a),n.uniformMatrix3fv(this.addr,!1,wd),_t(t,a)}}function Am(n,e){let t=this.cache,a=e.elements;if(a===void 0){if(vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,a))return;Sd.set(a),n.uniformMatrix4fv(this.addr,!1,Sd),_t(t,a)}}function Em(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Tm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2iv(this.addr,e),_t(t,e)}}function Rm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3iv(this.addr,e),_t(t,e)}}function Im(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4iv(this.addr,e),_t(t,e)}}function Cm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function km(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2uiv(this.addr,e),_t(t,e)}}function Nm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3uiv(this.addr,e),_t(t,e)}}function Pm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4uiv(this.addr,e),_t(t,e)}}function yo(n){return n.version===0&&(n.compareFunction=Pc,n.needsUpdate=!0),n}function Dm(n,e,t){let a=this.cache,i=t.allocateTextureUnit();a[0]!==i&&(n.uniform1i(this.addr,i),a[0]=i);let s;this.type===n.SAMPLER_2D_SHADOW?s=yo(Hd):s=Gd,t.setTexture2D(e||s,i)}function Lm(n,e,t){let a=this.cache,i=t.allocateTextureUnit();a[0]!==i&&(n.uniform1i(this.addr,i),a[0]=i),t.setTexture3D(e||Xd,i)}function Fm(n,e,t){let a=this.cache,i=t.allocateTextureUnit();a[0]!==i&&(n.uniform1i(this.addr,i),a[0]=i);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=yo(Vd):s=qd,t.setTextureCube(e||s,i)}function Om(n,e,t){let a=this.cache,i=t.allocateTextureUnit();a[0]!==i&&(n.uniform1i(this.addr,i),a[0]=i),t.setTexture2DArray(e||Wd,i)}function Um(n){switch(n){case 5126:return ym;case 35664:return vm;case 35665:return _m;case 35666:return Mm;case 35674:return Sm;case 35675:return wm;case 35676:return Am;case 5124:case 35670:return Em;case 35667:case 35671:return Tm;case 35668:case 35672:return Rm;case 35669:case 35673:return Im;case 5125:return Cm;case 36294:return km;case 36295:return Nm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Lm;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Om}}function zm(n,e){n.uniform1fv(this.addr,e)}function Bm(n,e){let t=Ti(e,this.size,2);n.uniform2fv(this.addr,t)}function jm(n,e){let t=Ti(e,this.size,3);n.uniform3fv(this.addr,t)}function Gm(n,e){let t=Ti(e,this.size,4);n.uniform4fv(this.addr,t)}function Hm(n,e){let t=Ti(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vm(n,e){let t=Ti(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Wm(n,e){let t=Ti(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Xm(n,e){n.uniform1iv(this.addr,e)}function qm(n,e){n.uniform2iv(this.addr,e)}function Km(n,e){n.uniform3iv(this.addr,e)}function Jm(n,e){n.uniform4iv(this.addr,e)}function Ym(n,e){n.uniform1uiv(this.addr,e)}function Zm(n,e){n.uniform2uiv(this.addr,e)}function Qm(n,e){n.uniform3uiv(this.addr,e)}function $m(n,e){n.uniform4uiv(this.addr,e)}function eg(n,e,t){let a=this.cache,i=e.length,s=xo(t,i);vt(a,s)||(n.uniform1iv(this.addr,s),_t(a,s));let r;this.type===n.SAMPLER_2D_SHADOW?r=yo(Hd):r=Gd;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||r,s[o])}function tg(n,e,t){let a=this.cache,i=e.length,s=xo(t,i);vt(a,s)||(n.uniform1iv(this.addr,s),_t(a,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Xd,s[r])}function ag(n,e,t){let a=this.cache,i=e.length,s=xo(t,i);vt(a,s)||(n.uniform1iv(this.addr,s),_t(a,s));let r;this.type===n.SAMPLER_CUBE_SHADOW?r=yo(Vd):r=qd;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||r,s[o])}function ng(n,e,t){let a=this.cache,i=e.length,s=xo(t,i);vt(a,s)||(n.uniform1iv(this.addr,s),_t(a,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Wd,s[r])}function ig(n){switch(n){case 5126:return zm;case 35664:return Bm;case 35665:return jm;case 35666:return Gm;case 35674:return Hm;case 35675:return Vm;case 35676:return Wm;case 5124:case 35670:return Xm;case 35667:case 35671:return qm;case 35668:case 35672:return Km;case 35669:case 35673:return Jm;case 5125:return Ym;case 36294:return Zm;case 36295:return Qm;case 36296:return $m;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return ng}}var Xc=class{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=Um(t.type)}},qc=class{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ig(t.type)}},Kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let o=i[s];o.setValue(e,t[o.id],a)}}},Vc=/(\w+)(\])?(\[|\.)?/g;function Ed(n,e){n.seq.push(e),n.map[e.id]=e}function sg(n,e,t){let a=n.name,i=a.length;for(Vc.lastIndex=0;;){let s=Vc.exec(a),r=Vc.lastIndex,o=s[1],c=s[2]==="]",h=s[3];if(c&&(o=o|0),h===void 0||h==="["&&r+2===i){Ed(t,h===void 0?new Xc(o,n,e):new qc(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Kc(o),Ed(t,d)),t=d}}}var Ei=class{constructor(e,t){this.seq=[],this.map={};let a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){let o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);sg(o,c,this)}let i=[],s=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,a,i){let s=this.map[t];s!==void 0&&s.setValue(e,a,i)}setOptional(e,t,a){let i=t[a];i!==void 0&&this.setValue(e,a,i)}static upload(e,t,a,i){for(let s=0,r=t.length;s!==r;++s){let o=t[s],c=a[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let a=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];r.id in t&&a.push(r)}return a}};function Td(n,e,t){let a=n.createShader(e);return n.shaderSource(a,t),n.compileShader(a),a}var rg=37297,og=0;function cg(n,e){let t=n.split(`
`),a=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){let o=r+1;a.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return a.join(`
`)}var Rd=new Pe;function hg(n){je._getMatrix(Rd,je.workingColorSpace,n);let e=`mat3( ${Rd.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case ji:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return Se("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Id(n,e,t){let a=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(a&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+cg(n.getShaderSource(e),o)}else return s}function lg(n,e){let t=hg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var dg={[mc]:"Linear",[gc]:"Reinhard",[xc]:"Cineon",[yc]:"ACESFilmic",[_c]:"AgX",[Mc]:"Neutral",[vc]:"Custom"};function fg(n,e){let t=dg[e];return t===void 0?(Se("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var po=new U;function ug(){je.getLuminanceCoefficients(po);let n=po.x.toFixed(4),e=po.y.toFixed(4),t=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function pg(n){let e=[];for(let t in n){let a=n[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function mg(n,e){let t={},a=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let i=0;i<a;i++){let s=n.getActiveAttrib(e,i),r=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function Ms(n){return n!==""}function Cd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function kd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(n){return n.replace(gg,xg)}function xg(n,e){let t=Be[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Jc(t)}var yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nd(n){return n.replace(yg,vg)}function vg(n,e,t,a){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=a.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Pd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var _g={[us]:"SHADOWMAP_TYPE_PCF",[yi]:"SHADOWMAP_TYPE_VSM"};function Mg(n){return _g[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Sg={[_i]:"ENVMAP_MODE_REFRACTION"};function wg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Sg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ag={[pc]:"ENVMAP_BLENDING_MULTIPLY",[Zl]:"ENVMAP_BLENDING_MIX",[Ql]:"ENVMAP_BLENDING_ADD"};function Eg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Ag[n.combine]||"ENVMAP_BLENDING_NONE"}function Tg(n,e,t,a){let i=n.getContext(),s=t.defines,r=t.vertexShader,o=t.fragmentShader,c=Mg(t),h=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",l=wg(t),d=Eg(t),f=bg(t),b=pg(s),x=i.createProgram(),y,u,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ms).join(`
`),y.length>0&&(y+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ms).join(`
`),u.length>0&&(u+=`
`)):(y=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),u=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ca?"#define TONE_MAPPING":"",t.toneMapping!==Ca?Be.tonemapping_pars_fragment:"",t.toneMapping!==Ca?fg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,lg("linearToOutputTexel",t.outputColorSpace),ug(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),r=Jc(r),r=Cd(r,t),r=kd(r,t),o=Jc(o),o=Cd(o,t),o=kd(o,t),r=Nd(r),o=Nd(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,u=["#define varying in",t.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let v=p+y+r,E=p+u+o,g=Td(i,i.VERTEX_SHADER,v),_=Td(i,i.FRAGMENT_SHADER,E);i.attachShader(x,g),i.attachShader(x,_),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function M(R){if(n.debug.checkShaderErrors){let k=i.getProgramInfoLog(x)||"",D=i.getShaderInfoLog(g)||"",F=i.getShaderInfoLog(_)||"",I=k.trim(),z=D.trim(),V=F.trim(),L=!0,Z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(L=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,x,g,_);else{let j=Id(i,g,"vertex"),K=Id(i,_,"fragment");Ne("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+j+`
`+K)}else I!==""?Se("WebGLProgram: Program Info Log:",I):(z===""||V==="")&&(Z=!1);Z&&(R.diagnostics={runnable:L,programLog:I,vertexShader:{log:z,prefix:y},fragmentShader:{log:V,prefix:u}})}i.deleteShader(g),i.deleteShader(_),m=new Ei(i,x),S=mg(i,x)}let m;this.getUniforms=function(){return m===void 0&&M(this),m};let S;this.getAttributes=function(){return S===void 0&&M(this),S};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(x,rg)),C},this.destroy=function(){a.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=og++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=g,this.fragmentShader=_,this}var Rg=0,Yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,a){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(a)===!1&&(i.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){let t=this.shaderCache,a=t.get(e);return a===void 0&&(a=new Zc(e),t.set(e,a)),a}},Zc=class{constructor(e){this.id=Rg++,this.code=e,this.usedTimes=0}};function Ig(n){return n===gn||n===xs||n===ys}function Cg(n,e,t,a,i,s){let r=new Vi,o=new Yc,c=new Set,h=[],l=new Map,d=a.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(m){return c.add(m),m===0?"uv":`uv${m}`}function x(m,S,C,R,k,D){let F=R.fog,I=k.geometry,z=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?R.environment:null,V=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,L=e.get(m.envMap||z,V),Z=f[m.type],j=a.precision;m.precision!==null&&(j=a.getMaxPrecision(m.precision),j!==m.precision&&Se("WebGLProgram.getParameters:",m.precision,"not supported, using",j,"instead."));let K=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ee=K!==void 0?K.length:0,me=0;I.morphAttributes.position!==void 0&&(me=1),I.morphAttributes.normal!==void 0&&(me=2),I.morphAttributes.color!==void 0&&(me=3);let Te,X,ne,xe;if(Z){let be=Pa[Z];Te=be.vertexShader,X=be.fragmentShader}else{Te=m.vertexShader,X=m.fragmentShader;let be=o.getVertexShaderStage(m),Qe=o.getFragmentShaderStage(m);o.update(m,be,Qe),ne=be.id,xe=Qe.id}let Ae=n.getRenderTarget(),ue=n.state.buffers.depth.getReversed(),Fe=k.isInstancedMesh===!0,ft=k.isBatchedMesh===!0,ke=!!m.map,Ze=!!m.matcap,et=!!L,Ve=et&&L.isPMREMTexture===!0,Rt=!!m.aoMap,mt=!!m.lightMap,Xt=!!m.bumpMap&&m.wireframe===!1,ot=!!m.normalMap,Ma=!!m.displacementMap,St=!!m.emissiveMap,sa=!!m.metalnessMap,ra=!!m.roughnessMap,oa=m.anisotropy>0,O=m.clearcoat>0,ca=m.diffuseRoughness>0,it=m.dispersion>0,st=m.retroreflectivity>0,fe=m.iridescence>0,gt=m.sheen>0,Re=m.transmission>0,De=oa&&!!m.anisotropyMap,T=O&&!!m.clearcoatMap,w=O&&!!m.clearcoatNormalMap,G=O&&!!m.clearcoatRoughnessMap,te=ca&&!!m.diffuseRoughnessMap,$=fe&&!!m.iridescenceMap,se=fe&&!!m.iridescenceThicknessMap,le=gt&&!!m.sheenColorMap,J=gt&&!!m.sheenRoughnessMap,Y=!!m.specularMap,oe=!!m.specularColorMap,N=!!m.specularIntensityMap,Q=Re&&!!m.transmissionMap,q=Re&&!!m.thicknessMap,ce=!!m.gradientMap,ie=!!m.alphaMap,re=m.alphaTest>0,we=!!m.alphaHash,ze=!!m.extensions,ae=Ca;m.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ae=n.toneMapping);let Ee=Ve?L.isCompressedCubeTexture?L.image[0].mipmaps:L.mipmaps:null,Ue={shaderID:Z,shaderType:m.type,shaderName:m.name,vertexShader:Te,fragmentShader:X,defines:m.defines,customVertexShaderID:ne,customFragmentShaderID:xe,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:j,batching:ft,batchingColor:ft&&k._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&k.instanceColor!==null,instancingMorph:Fe&&k.morphTexture!==null,outputColorSpace:Ae===null?n.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:ke,matcap:Ze,envMap:et,envMapMode:et&&L.mapping,envMapPMREM:Ve,envMapMaxLod:Ve?Ee.length-1:null,envMapSize:Ve?Ee[0].width:null,aoMap:Rt,lightMap:mt,bumpMap:Xt,normalMap:ot,displacementMap:Ma,emissiveMap:St,normalMapObjectSpace:ot&&m.normalMapType===ad,normalMapTangentSpace:ot&&m.normalMapType===fo,packedNormalMap:ot&&m.normalMapType===fo&&Ig(m.normalMap.format),metalnessMap:sa,roughnessMap:ra,anisotropy:oa,anisotropyMap:De,clearcoat:O,clearcoatMap:T,clearcoatNormalMap:w,clearcoatRoughnessMap:G,diffuseRoughness:ca,diffuseRoughnessMap:te,dispersion:it,retroreflection:st,iridescence:fe,iridescenceMap:$,iridescenceThicknessMap:se,sheen:gt,sheenColorMap:le,sheenRoughnessMap:J,specularMap:Y,specularColorMap:oe,specularIntensityMap:N,transmission:Re,transmissionMap:Q,thicknessMap:q,gradientMap:ce,opaque:m.transparent===!1&&m.blending===vi&&m.alphaToCoverage===!1,alphaMap:ie,alphaTest:re,alphaHash:we,combine:m.combine,mapUv:ke&&b(m.map.channel),aoMapUv:Rt&&b(m.aoMap.channel),lightMapUv:mt&&b(m.lightMap.channel),bumpMapUv:Xt&&b(m.bumpMap.channel),normalMapUv:ot&&b(m.normalMap.channel),displacementMapUv:Ma&&b(m.displacementMap.channel),emissiveMapUv:St&&b(m.emissiveMap.channel),metalnessMapUv:sa&&b(m.metalnessMap.channel),roughnessMapUv:ra&&b(m.roughnessMap.channel),anisotropyMapUv:De&&b(m.anisotropyMap.channel),clearcoatMapUv:T&&b(m.clearcoatMap.channel),clearcoatNormalMapUv:w&&b(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&b(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&b(m.diffuseRoughnessMap.channel),iridescenceMapUv:$&&b(m.iridescenceMap.channel),iridescenceThicknessMapUv:se&&b(m.iridescenceThicknessMap.channel),sheenColorMapUv:le&&b(m.sheenColorMap.channel),sheenRoughnessMapUv:J&&b(m.sheenRoughnessMap.channel),specularMapUv:Y&&b(m.specularMap.channel),specularColorMapUv:oe&&b(m.specularColorMap.channel),specularIntensityMapUv:N&&b(m.specularIntensityMap.channel),transmissionMapUv:Q&&b(m.transmissionMap.channel),thicknessMapUv:q&&b(m.thicknessMap.channel),alphaMapUv:ie&&b(m.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ot||oa),vertexNormals:!!I.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!I.attributes.uv&&(ke||ie),fog:!!F,useFog:m.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||I.attributes.normal===void 0&&ot===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ue,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:me,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(be=>be.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:ke&&m.map.isVideoTexture===!0&&je.getTransfer(m.map.colorSpace)===Ye,decodeVideoTextureEmissive:St&&m.emissiveMap.isVideoTexture===!0&&je.getTransfer(m.emissiveMap.colorSpace)===Ye,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===pt,flipSided:m.side===Wt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:ze&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&m.extensions.multiDraw===!0||ft)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function y(m){let S=[];if(m.shaderID?S.push(m.shaderID):(S.push(m.customVertexShaderID),S.push(m.customFragmentShaderID)),m.defines!==void 0)for(let C in m.defines)S.push(C),S.push(m.defines[C]);return m.isRawShaderMaterial===!1&&(u(S,m),p(S,m),S.push(n.outputColorSpace)),S.push(m.customProgramCacheKey),S.join()}function u(m,S){m.push(S.precision),m.push(S.outputColorSpace),m.push(S.envMapMode),m.push(S.envMapPMREM),m.push(S.envMapMaxLod),m.push(S.envMapSize),m.push(S.mapUv),m.push(S.alphaMapUv),m.push(S.lightMapUv),m.push(S.aoMapUv),m.push(S.bumpMapUv),m.push(S.normalMapUv),m.push(S.displacementMapUv),m.push(S.emissiveMapUv),m.push(S.metalnessMapUv),m.push(S.roughnessMapUv),m.push(S.anisotropyMapUv),m.push(S.clearcoatMapUv),m.push(S.clearcoatNormalMapUv),m.push(S.clearcoatRoughnessMapUv),m.push(S.diffuseRoughnessMapUv),m.push(S.iridescenceMapUv),m.push(S.iridescenceThicknessMapUv),m.push(S.sheenColorMapUv),m.push(S.sheenRoughnessMapUv),m.push(S.specularMapUv),m.push(S.specularColorMapUv),m.push(S.specularIntensityMapUv),m.push(S.transmissionMapUv),m.push(S.thicknessMapUv),m.push(S.combine),m.push(S.fogExp2),m.push(S.sizeAttenuation),m.push(S.morphTargetsCount),m.push(S.numSunLights),m.push(S.numDirLights),m.push(S.numPointLights),m.push(S.numSpotLights),m.push(S.numSpotLightMaps),m.push(S.numHemiLights),m.push(S.numRectAreaLights),m.push(S.numSunLightShadows),m.push(S.numDirLightShadows),m.push(S.numPointLightShadows),m.push(S.numSpotLightShadows),m.push(S.numSpotLightShadowsWithMaps),m.push(S.numLightProbes),m.push(S.numLightProbeGrids),m.push(S.shadowMapType),m.push(S.toneMapping),m.push(S.numClippingPlanes),m.push(S.numClipIntersection),m.push(S.depthPacking)}function p(m,S){r.disableAll(),S.instancing&&r.enable(0),S.instancingColor&&r.enable(1),S.instancingMorph&&r.enable(2),S.matcap&&r.enable(3),S.envMap&&r.enable(4),S.normalMapObjectSpace&&r.enable(5),S.normalMapTangentSpace&&r.enable(6),S.clearcoat&&r.enable(7),S.iridescence&&r.enable(8),S.alphaTest&&r.enable(9),S.vertexColors&&r.enable(10),S.vertexAlphas&&r.enable(11),S.vertexUv1s&&r.enable(12),S.vertexUv2s&&r.enable(13),S.vertexUv3s&&r.enable(14),S.vertexTangents&&r.enable(15),S.anisotropy&&r.enable(16),S.alphaHash&&r.enable(17),S.batching&&r.enable(18),S.dispersion&&r.enable(19),S.retroreflection&&r.enable(24),S.diffuseRoughness&&r.enable(25),S.batchingColor&&r.enable(20),S.gradientMap&&r.enable(21),S.packedNormalMap&&r.enable(22),S.vertexNormals&&r.enable(23),m.push(r.mask),r.disableAll(),S.fog&&r.enable(0),S.useFog&&r.enable(1),S.flatShading&&r.enable(2),S.logarithmicDepthBuffer&&r.enable(3),S.reversedDepthBuffer&&r.enable(4),S.skinning&&r.enable(5),S.morphTargets&&r.enable(6),S.morphNormals&&r.enable(7),S.morphColors&&r.enable(8),S.premultipliedAlpha&&r.enable(9),S.shadowMapEnabled&&r.enable(10),S.doubleSided&&r.enable(11),S.flipSided&&r.enable(12),S.useDepthPacking&&r.enable(13),S.dithering&&r.enable(14),S.transmission&&r.enable(15),S.sheen&&r.enable(16),S.opaque&&r.enable(17),S.pointsUvs&&r.enable(18),S.decodeVideoTexture&&r.enable(19),S.decodeVideoTextureEmissive&&r.enable(20),S.alphaToCoverage&&r.enable(21),S.numLightProbeGrids>0&&r.enable(22),S.hasPositionAttribute&&r.enable(23),m.push(r.mask)}function v(m){let S=f[m.type],C;if(S){let R=Pa[S];C=bd.clone(R.uniforms)}else C=m.uniforms;return C}function E(m,S){let C=l.get(S);return C!==void 0?++C.usedTimes:(C=new Tg(n,S,m,i),h.push(C),l.set(S,C)),C}function g(m){if(--m.usedTimes===0){let S=h.indexOf(m);h[S]=h[h.length-1],h.pop(),l.delete(m.cacheKey),m.destroy()}}function _(m){o.remove(m)}function M(){o.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:v,acquireProgram:E,releaseProgram:g,releaseShaderCache:_,programs:h,dispose:M}}function kg(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function a(r){n.delete(r)}function i(r,o,c){n.get(r)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:a,update:i,dispose:s}}function Ng(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Dd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ld(){let n=[],e=0,t=[],a=[],i=[];function s(){e=0,t.length=0,a.length=0,i.length=0}function r(f){let b=0;return f.isInstancedMesh&&(b+=2),f.isSkinnedMesh&&(b+=1),b}function o(f,b,x,y,u,p){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:b,material:x,materialVariant:r(f),groupOrder:y,renderOrder:f.renderOrder,z:u,group:p},n[e]=v):(v.id=f.id,v.object=f,v.geometry=b,v.material=x,v.materialVariant=r(f),v.groupOrder=y,v.renderOrder=f.renderOrder,v.z=u,v.group=p),e++,v}function c(f,b,x,y,u,p,v){v.reversedDepth===!0&&(u=-u);let E=o(f,b,x,y,u,p);x.transmission>0?a.push(E):x.transparent===!0?i.push(E):t.push(E)}function h(f,b,x,y,u,p){let v=o(f,b,x,y,u,p);x.transmission>0?a.unshift(v):x.transparent===!0?i.unshift(v):t.unshift(v)}function l(f,b){t.length>1&&t.sort(f||Ng),a.length>1&&a.sort(b||Dd),i.length>1&&i.sort(b||Dd)}function d(){for(let f=e,b=n.length;f<b;f++){let x=n[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:a,transparent:i,init:s,push:c,unshift:h,finish:d,sort:l}}function Pg(){let n=new WeakMap;function e(a,i){let s=n.get(a),r;return s===void 0?(r=new Ld,n.set(a,[r])):i>=s.length?(r=new Ld,s.push(r)):r=s[i],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function Dg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Ce};break;case"SpotLight":t={position:new U,direction:new U,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Lg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Fg=0;function Og(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ug(n){let e=new Dg,t=Lg(),a={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new U);let i=new U,s=new Oe,r=new Oe;function o(h){let l=0,d=0,f=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let b=0,x=0,y=0,u=0,p=0,v=0,E=0,g=0,_=0,M=0,m=0,S=0,C=0,R=0;h.sort(Og);for(let D=0,F=h.length;D<F;D++){let I=h[D],z=I.color,V=I.intensity,L=I.distance,Z=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===gn?Z=I.shadow.map.texture:Z=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)l+=z.r*V,d+=z.g*V,f+=z.b*V;else if(I.isLightProbe){for(let j=0;j<9;j++)a.probe[j].addScaledVector(I.sh.coefficients[j],V);R++}else if(I.isSunLight){let j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,ee=t.get(I);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),a.sunShadow[x]=ee,a.sunShadowMap[x]=Z;let me=K.getViewportCount();for(let Te=0;Te<me;Te++)a.sunShadowMatrix[y+Te]=K.getMatrix(Te),a.sunShadowCascade[y+Te]=K._cascadeData[Te];y+=me,x++}a.sun[b]=j,b++}else if(I.isDirectionalLight){let j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,ee=t.get(I);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,a.directionalShadow[u]=ee,a.directionalShadowMap[u]=Z,a.directionalShadowMatrix[u]=I.shadow.matrix,_++}a.directional[u]=j,u++}else if(I.isSpotLight){let j=e.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(z).multiplyScalar(V),j.distance=L,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,a.spot[v]=j;let K=I.shadow;if(I.map&&(a.spotLightMap[S]=I.map,S++,K.updateMatrices(I),I.castShadow&&C++),a.spotLightMatrix[v]=K.matrix,I.castShadow){let ee=t.get(I);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,a.spotShadow[v]=ee,a.spotShadowMap[v]=Z,m++}v++}else if(I.isRectAreaLight){let j=e.get(I);j.color.copy(z).multiplyScalar(V),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),a.rectArea[E]=j,E++}else if(I.isPointLight){let j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),j.distance=I.distance,j.decay=I.decay,I.castShadow){let K=I.shadow,ee=t.get(I);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,ee.shadowCameraNear=K.camera.near,ee.shadowCameraFar=K.camera.far,a.pointShadow[p]=ee,a.pointShadowMap[p]=Z,a.pointShadowMatrix[p]=I.shadow.matrix,M++}a.point[p]=j,p++}else if(I.isHemisphereLight){let j=e.get(I);j.skyColor.copy(I.color).multiplyScalar(V),j.groundColor.copy(I.groundColor).multiplyScalar(V),a.hemi[g]=j,g++}}E>0&&(n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=pe.LTC_FLOAT_1,a.rectAreaLTC2=pe.LTC_FLOAT_2):(a.rectAreaLTC1=pe.LTC_HALF_1,a.rectAreaLTC2=pe.LTC_HALF_2)),a.ambient[0]=l,a.ambient[1]=d,a.ambient[2]=f;let k=a.hash;(k.sunLength!==b||k.directionalLength!==u||k.pointLength!==p||k.spotLength!==v||k.rectAreaLength!==E||k.hemiLength!==g||k.numSunShadows!==x||k.numDirectionalShadows!==_||k.numPointShadows!==M||k.numSpotShadows!==m||k.numSpotMaps!==S||k.numLightProbes!==R)&&(a.sun.length=b,a.directional.length=u,a.spot.length=v,a.rectArea.length=E,a.point.length=p,a.hemi.length=g,a.sunShadow.length=x,a.sunShadowMap.length=x,a.sunShadowMatrix.length=y,a.sunShadowCascade.length=y,a.directionalShadow.length=_,a.directionalShadowMap.length=_,a.directionalShadowMatrix.length=_,a.pointShadow.length=M,a.pointShadowMap.length=M,a.pointShadowMatrix.length=M,a.spotShadow.length=m,a.spotShadowMap.length=m,a.spotLightMatrix.length=m+S-C,a.spotLightMap.length=S,a.numSpotLightShadowsWithMaps=C,a.numLightProbes=R,k.sunLength=b,k.directionalLength=u,k.pointLength=p,k.spotLength=v,k.rectAreaLength=E,k.hemiLength=g,k.numSunShadows=x,k.numDirectionalShadows=_,k.numPointShadows=M,k.numSpotShadows=m,k.numSpotMaps=S,k.numLightProbes=R,a.version=Fg++)}function c(h,l){let d=0,f=0,b=0,x=0,y=0,u=0,p=l.matrixWorldInverse;for(let v=0,E=h.length;v<E;v++){let g=h[v];if(g.isSunLight){let _=a.sun[d];_.direction.setFromMatrixPosition(g.matrixWorld),_.direction.transformDirection(p),d++}else if(g.isDirectionalLight){let _=a.directional[f];_.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),f++}else if(g.isSpotLight){let _=a.spot[x];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),x++}else if(g.isRectAreaLight){let _=a.rectArea[y];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(p),r.identity(),s.copy(g.matrixWorld),s.premultiply(p),r.extractRotation(s),_.halfWidth.set(g.width*.5,0,0),_.halfHeight.set(0,g.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),y++}else if(g.isPointLight){let _=a.point[b];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(p),b++}else if(g.isHemisphereLight){let _=a.hemi[u];_.direction.setFromMatrixPosition(g.matrixWorld),_.direction.transformDirection(p),u++}}}return{setup:o,setupView:c,state:a}}function Fd(n){let e=new Ug(n),t=[],a=[],i=[];function s(d){l.camera=d,t.length=0,a.length=0,i.length=0}function r(d){d.isLightProbeGrid?i.push(d):t.push(d)}function o(d){a.push(d)}function c(){e.setup(t),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function h(d){e.setupView(t,d)}let l={lightsArray:t,shadowsArray:a,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:l,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o}}function zg(n){let e=new WeakMap;function t(i,s=0){let r=e.get(i),o;return r===void 0?(o=new Fd(n),e.set(i,[o])):s>=r.length?(o=new Fd(n),r.push(o)):o=r[s],o}function a(){e=new WeakMap}return{get:t,dispose:a}}var Bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Gg=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Hg=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Od=new Oe,_s=new U,Wc=new U;function Vg(n,e,t){let a=new fn,i=new Ie,s=new Ie,r=new $e,o=new pr,c=new mr,h={},l=t.maxTextureSize,d={[Ia]:Wt,[Wt]:Ia,[pt]:pt},f=new Ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:Bg,fragmentShader:jg}),b=f.clone();b.defines.HORIZONTAL_PASS=1;let x=new Kt;x.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Gt(x,f),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=us;let p=this.type;this.render=function(M,m,S){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||M.length===0)return;this.type===Nl&&(Se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=us);let C=n.getRenderTarget(),R=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Pn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let F=p!==this.type;F&&m.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=M.length;I<z;I++){let V=M[I],L=V.shadow;if(L===void 0){Se("WebGLShadowMap:",V,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);let Z=L.getFrameExtents();i.multiply(Z),s.copy(L.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(s.x=Math.floor(l/Z.x),i.x=s.x*Z.x,L.mapSize.x=s.x),i.y>l&&(s.y=Math.floor(l/Z.y),i.y=s.y*Z.y,L.mapSize.y=s.y));let j=n.state.buffers.depth.getReversed();if(L.camera._reversedDepth=j,L.map===null||F===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===yi){if(V.isPointLight){Se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new aa(i.x,i.y,{format:gn,type:_a,minFilter:yt,magFilter:yt,generateMipmaps:!1}),L.map.texture.name=V.name+".shadowMap",L.map.depthTexture=new qa(i.x,i.y,ia),L.map.depthTexture.name=V.name+".shadowMapDepth",L.map.depthTexture.format=Ha,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=dt,L.map.depthTexture.magFilter=dt}else V.isPointLight?(L.map=new Ss(i.x),L.map.depthTexture=new ts(i.x,va)):(L.map=new aa(i.x,i.y),L.map.depthTexture=new qa(i.x,i.y,va)),L.map.depthTexture.name=V.name+".shadowMap",L.map.depthTexture.format=Ha,this.type===us?(L.map.depthTexture.compareFunction=j?Nc:kc,L.map.depthTexture.minFilter=yt,L.map.depthTexture.magFilter=yt):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=dt,L.map.depthTexture.magFilter=dt);L.camera.updateProjectionMatrix()}L.map.isWebGLCubeRenderTarget!==!0&&(L.map.width!==i.x||L.map.height!==i.y)&&L.map.setSize(i.x,i.y);let K=L.map.isWebGLCubeRenderTarget?6:L.getViewportCount();V.isPointLight!==!0&&L.updateMatrices(V,S);let ee=(L.camera.layers.mask&4294967294)!==0?L.camera.layers:S.layers;for(let me=0;me<K;me++){let Te=L.getCamera(me);if(V.isPointLight){let X=L.camera,ne=L.matrix,xe=V.distance||X.far;xe!==X.far&&(X.far=xe,X.updateProjectionMatrix()),_s.setFromMatrixPosition(V.matrixWorld),X.position.copy(_s),Wc.copy(X.position),Wc.add(Gg[me]),X.up.copy(Hg[me]),X.lookAt(Wc),X.updateMatrixWorld(),ne.makeTranslation(-_s.x,-_s.y,-_s.z),Od.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),L._frustum.setFromProjectionMatrix(Od,X.coordinateSystem,X.reversedDepth)}if(L.map.isWebGLCubeRenderTarget)n.setRenderTarget(L.map,me),n.clear();else{me===0&&(n.setRenderTarget(L.map),n.clear());let X=L.getViewport(me);r.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),D.viewport(r)}a=L.getFrustum(me),g(m,S,Te,V,ee,this.type)}L.isPointLightShadow!==!0&&this.type===yi&&v(L,S),L.needsUpdate=!1}p=this.type,u.needsUpdate=!1,n.setRenderTarget(C,R,k)};function v(M,m){let S=e.update(y);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,b.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,b.needsUpdate=!0),M.mapPass===null?M.mapPass=new aa(i.x,i.y,{format:gn,type:_a}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(m,null,S,f,y,null),b.uniforms.shadow_pass.value=M.mapPass.texture,b.uniforms.resolution.value.set(M.map.width,M.map.height),b.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(m,null,S,b,y,null)}function E(M,m,S,C){let R=null,k=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(k!==void 0)R=k;else if(R=S.isPointLight===!0?c:o,n.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let D=R.uuid,F=m.uuid,I=h[D];I===void 0&&(I={},h[D]=I);let z=I[F];z===void 0&&(z=R.clone(),I[F]=z,m.addEventListener("dispose",_)),R=z}if(R.visible=m.visible,R.wireframe=m.wireframe,C===yi?R.side=m.shadowSide!==null?m.shadowSide:m.side:R.side=m.shadowSide!==null?m.shadowSide:d[m.side],R.alphaMap=m.alphaMap,R.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,R.map=m.map,R.clipShadows=m.clipShadows,R.clippingPlanes=m.clippingPlanes,R.clipIntersection=m.clipIntersection,R.displacementMap=m.displacementMap,R.displacementScale=m.displacementScale,R.displacementBias=m.displacementBias,R.wireframeLinewidth=m.wireframeLinewidth,R.linewidth=m.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=n.properties.get(R);D.light=S}return R}function g(M,m,S,C,R,k){if(M.visible===!1)return;if(M.layers.test(R)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&k===yi)&&(!M.frustumCulled||M.intersectsFrustum(a))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);let I=e.update(M),z=M.material;if(Array.isArray(z)){let V=I.groups;for(let L=0,Z=V.length;L<Z;L++){let j=V[L],K=z[j.materialIndex];if(K&&K.visible){let ee=E(M,K,C,k);M.onBeforeShadow(n,M,m,S,I,ee,j),n.renderBufferDirect(S,null,I,ee,M,j),M.onAfterShadow(n,M,m,S,I,ee,j)}}}else if(z.visible){let V=E(M,z,C,k);M.onBeforeShadow(n,M,m,S,I,V,null),n.renderBufferDirect(S,null,I,V,M,null),M.onAfterShadow(n,M,m,S,I,V,null)}}let F=M.children;for(let I=0,z=F.length;I<z;I++)g(F[I],m,S,C,R,k)}function _(M){M.target.removeEventListener("dispose",_);for(let S in h){let C=h[S],R=M.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function Wg(n,e){function t(){let N=!1,Q=new $e,q=null,ce=new $e(0,0,0,0);return{setMask:function(ie){q!==ie&&!N&&(n.colorMask(ie,ie,ie,ie),q=ie)},setLocked:function(ie){N=ie},setClear:function(ie,re,we,ze,ae){ae===!0&&(ie*=ze,re*=ze,we*=ze),Q.set(ie,re,we,ze),ce.equals(Q)===!1&&(n.clearColor(ie,re,we,ze),ce.copy(Q))},reset:function(){N=!1,q=null,ce.set(-1,0,0,0)}}}function a(){let N=!1,Q=!1,q=null,ce=null,ie=null;return{setReversed:function(re){if(Q!==re){let we=e.get("EXT_clip_control");re?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Q=re;let ze=ie;ie=null,this.setClear(ze)}},getReversed:function(){return Q},setTest:function(re){re?ue(n.DEPTH_TEST):Fe(n.DEPTH_TEST)},setMask:function(re){q!==re&&!N&&(n.depthMask(re),q=re)},setFunc:function(re){if(Q&&(re=fd[re]),ce!==re){switch(re){case tr:n.depthFunc(n.NEVER);break;case ar:n.depthFunc(n.ALWAYS);break;case nr:n.depthFunc(n.LESS);break;case ti:n.depthFunc(n.LEQUAL);break;case ir:n.depthFunc(n.EQUAL);break;case sr:n.depthFunc(n.GEQUAL);break;case rr:n.depthFunc(n.GREATER);break;case or:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=re}},setLocked:function(re){N=re},setClear:function(re){ie!==re&&(ie=re,Q&&(re=1-re),n.clearDepth(re))},reset:function(){N=!1,q=null,ce=null,ie=null,Q=!1}}}function i(){let N=!1,Q=null,q=null,ce=null,ie=null,re=null,we=null,ze=null,ae=null;return{setTest:function(Ee){N||(Ee?ue(n.STENCIL_TEST):Fe(n.STENCIL_TEST))},setMask:function(Ee){Q!==Ee&&!N&&(n.stencilMask(Ee),Q=Ee)},setFunc:function(Ee,Ue,be){(q!==Ee||ce!==Ue||ie!==be)&&(n.stencilFunc(Ee,Ue,be),q=Ee,ce=Ue,ie=be)},setOp:function(Ee,Ue,be){(re!==Ee||we!==Ue||ze!==be)&&(n.stencilOp(Ee,Ue,be),re=Ee,we=Ue,ze=be)},setLocked:function(Ee){N=Ee},setClear:function(Ee){ae!==Ee&&(n.clearStencil(Ee),ae=Ee)},reset:function(){N=!1,Q=null,q=null,ce=null,ie=null,re=null,we=null,ze=null,ae=null}}}let s=new t,r=new a,o=new i,c={},h=new WeakMap,l={},d={},f={},b=new WeakMap,x=[],y=null,u=!1,p=null,v=null,E=null,g=null,_=null,M=null,m=null,S=new Ce(0,0,0),C=0,R=!1,k=null,D=null,F=null,I=null,z=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,Z=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),L=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),L=Z>=2);let K=null,ee={},me=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),X=new $e().fromArray(me),ne=new $e().fromArray(Te);function xe(N,Q,q,ce){let ie=new Uint8Array(4),re=n.createTexture();n.bindTexture(N,re),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<q;we++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,ie):n.texImage2D(Q+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ie);return re}let Ae={};Ae[n.TEXTURE_2D]=xe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[n.TEXTURE_2D_ARRAY]=xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ue(n.DEPTH_TEST),r.setFunc(ti),Xt(!1),ot(hc),ue(n.CULL_FACE),Rt(Pn);function ue(N){l[N]!==!0&&(n.enable(N),l[N]=!0)}function Fe(N){l[N]!==!1&&(n.disable(N),l[N]=!1)}function ft(N,Q){return f[N]!==Q?(n.bindFramebuffer(N,Q),f[N]=Q,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Q),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function ke(N,Q){let q=x,ce=!1;if(N){q=b.get(Q),q===void 0&&(q=[],b.set(Q,q));let ie=N.textures;if(q.length!==ie.length||q[0]!==n.COLOR_ATTACHMENT0){for(let re=0,we=ie.length;re<we;re++)q[re]=n.COLOR_ATTACHMENT0+re;q.length=ie.length,ce=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,ce=!0);ce&&n.drawBuffers(q)}function Ze(N){return y!==N?(n.useProgram(N),y=N,!0):!1}let et={[Dn]:n.FUNC_ADD,[Dl]:n.FUNC_SUBTRACT,[Ll]:n.FUNC_REVERSE_SUBTRACT};et[Fl]=n.MIN,et[Ol]=n.MAX;let Ve={[Ul]:n.ZERO,[zl]:n.ONE,[Bl]:n.SRC_COLOR,[uc]:n.SRC_ALPHA,[Xl]:n.SRC_ALPHA_SATURATE,[Vl]:n.DST_COLOR,[Gl]:n.DST_ALPHA,[jl]:n.ONE_MINUS_SRC_COLOR,[bc]:n.ONE_MINUS_SRC_ALPHA,[Wl]:n.ONE_MINUS_DST_COLOR,[Hl]:n.ONE_MINUS_DST_ALPHA,[ql]:n.CONSTANT_COLOR,[Kl]:n.ONE_MINUS_CONSTANT_COLOR,[Jl]:n.CONSTANT_ALPHA,[Yl]:n.ONE_MINUS_CONSTANT_ALPHA};function Rt(N,Q,q,ce,ie,re,we,ze,ae,Ee){if(N===Pn){u===!0&&(Fe(n.BLEND),u=!1);return}if(u===!1&&(ue(n.BLEND),u=!0),N!==Pl){if(N!==p||Ee!==R){if((v!==Dn||_!==Dn)&&(n.blendEquation(n.FUNC_ADD),v=Dn,_=Dn),Ee)switch(N){case vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lc:n.blendFunc(n.ONE,n.ONE);break;case dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ne("WebGLState: Invalid blending: ",N);break}else switch(N){case vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case dc:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fc:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",N);break}E=null,g=null,M=null,m=null,S.set(0,0,0),C=0,p=N,R=Ee}return}ie=ie||Q,re=re||q,we=we||ce,(Q!==v||ie!==_)&&(n.blendEquationSeparate(et[Q],et[ie]),v=Q,_=ie),(q!==E||ce!==g||re!==M||we!==m)&&(n.blendFuncSeparate(Ve[q],Ve[ce],Ve[re],Ve[we]),E=q,g=ce,M=re,m=we),(ze.equals(S)===!1||ae!==C)&&(n.blendColor(ze.r,ze.g,ze.b,ae),S.copy(ze),C=ae),p=N,R=!1}function mt(N,Q){N.side===pt?Fe(n.CULL_FACE):ue(n.CULL_FACE);let q=N.side===Wt;Q&&(q=!q),Xt(q),N.blending===vi&&N.transparent===!1?Rt(Pn):Rt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);let ce=N.stencilWrite;o.setTest(ce),ce&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),St(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(N){k!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),k=N)}function ot(N){N!==Cl?(ue(n.CULL_FACE),N!==D&&(N===hc?n.cullFace(n.BACK):N===kl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Fe(n.CULL_FACE),D=N}function Ma(N){N!==F&&(L&&n.lineWidth(N),F=N)}function St(N,Q,q){N?(ue(n.POLYGON_OFFSET_FILL),(I!==Q||z!==q)&&(I=Q,z=q,r.getReversed()&&(Q=-Q,q=-q),n.polygonOffset(Q,q))):Fe(n.POLYGON_OFFSET_FILL)}function sa(N){N?ue(n.SCISSOR_TEST):Fe(n.SCISSOR_TEST)}function ra(N){N===void 0&&(N=n.TEXTURE0+V-1),K!==N&&(n.activeTexture(N),K=N)}function oa(N,Q,q){q===void 0&&(K===null?q=n.TEXTURE0+V-1:q=K);let ce=ee[q];ce===void 0&&(ce={type:void 0,texture:void 0},ee[q]=ce),(ce.type!==N||ce.texture!==Q)&&(K!==q&&(n.activeTexture(q),K=q),n.bindTexture(N,Q||Ae[N]),ce.type=N,ce.texture=Q)}function O(){let N=ee[K];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ca(){try{n.compressedTexImage2D(...arguments)}catch(N){Ne("WebGLState:",N)}}function it(){try{n.compressedTexImage3D(...arguments)}catch(N){Ne("WebGLState:",N)}}function st(){try{n.texSubImage2D(...arguments)}catch(N){Ne("WebGLState:",N)}}function fe(){try{n.texSubImage3D(...arguments)}catch(N){Ne("WebGLState:",N)}}function gt(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Ne("WebGLState:",N)}}function Re(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Ne("WebGLState:",N)}}function De(){try{n.texStorage2D(...arguments)}catch(N){Ne("WebGLState:",N)}}function T(){try{n.texStorage3D(...arguments)}catch(N){Ne("WebGLState:",N)}}function w(){try{n.texImage2D(...arguments)}catch(N){Ne("WebGLState:",N)}}function G(){try{n.texImage3D(...arguments)}catch(N){Ne("WebGLState:",N)}}function te(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function $(N,Q){d[N]!==Q&&(n.pixelStorei(N,Q),d[N]=Q)}function se(N){X.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),X.copy(N))}function le(N){ne.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ne.copy(N))}function J(N,Q){let q=h.get(Q);q===void 0&&(q=new WeakMap,h.set(Q,q));let ce=q.get(N);ce===void 0&&(ce=n.getUniformBlockIndex(Q,N.name),n.uniformBlockBinding(Q,ce,ce),q.set(N,ce))}function Y(N,Q,q){let ie=h.get(Q).get(N);c[ie]!==q&&(n.bindBufferBase(n.UNIFORM_BUFFER,ie,q),c[ie]=q)}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),l={},d={},K=null,ee={},f={},c={},b=new WeakMap,x=[],y=null,u=!1,p=null,v=null,E=null,g=null,_=null,M=null,m=null,S=new Ce(0,0,0),C=0,R=!1,k=null,D=null,F=null,I=null,z=null,X.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ue,disable:Fe,bindFramebuffer:ft,drawBuffers:ke,useProgram:Ze,setBlending:Rt,setMaterial:mt,setFlipSided:Xt,setCullFace:ot,setLineWidth:Ma,setPolygonOffset:St,setScissorTest:sa,activeTexture:ra,bindTexture:oa,unbindTexture:O,compressedTexImage2D:ca,compressedTexImage3D:it,texImage2D:w,texImage3D:G,pixelStorei:$,getParameter:te,updateUBOMapping:J,uniformBlockBinding:Y,texStorage2D:De,texStorage3D:T,texSubImage2D:st,texSubImage3D:fe,compressedTexSubImage2D:gt,compressedTexSubImage3D:Re,scissor:se,viewport:le,reset:oe}}function Xg(n,e,t,a,i,s,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ie,l=new WeakMap,d=new Set,f,b=new WeakMap,x=new Set,y=new FinalizationRegistry(T=>x.delete(T)),u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,w){return u?new OffscreenCanvas(T,w):ii("canvas")}function v(T,w,G){let te=1,$=De(T);if(($.width>G||$.height>G)&&(te=G/Math.max($.width,$.height)),te<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let se=Math.floor(te*$.width),le=Math.floor(te*$.height);f===void 0&&(f=p(se,le));let J=w?p(se,le):f;return J.width=se,J.height=le,J.getContext("2d").drawImage(T,0,0,se,le),Se("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+se+"x"+le+")."),J}else return"data"in T&&Se("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function E(T){return T.generateMipmaps}function g(T){n.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,w,G,te,$,se=!1){if(T!==null){if(n[T]!==void 0)return n[T];Se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let le;te&&(le=e.get("EXT_texture_norm16"),le||Se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=w;if(w===n.RED&&(G===n.FLOAT&&(J=n.R32F),G===n.HALF_FLOAT&&(J=n.R16F),G===n.UNSIGNED_BYTE&&(J=n.R8),G===n.UNSIGNED_SHORT&&le&&(J=le.R16_EXT),G===n.SHORT&&le&&(J=le.R16_SNORM_EXT)),w===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.R8UI),G===n.UNSIGNED_SHORT&&(J=n.R16UI),G===n.UNSIGNED_INT&&(J=n.R32UI),G===n.BYTE&&(J=n.R8I),G===n.SHORT&&(J=n.R16I),G===n.INT&&(J=n.R32I)),w===n.RG&&(G===n.FLOAT&&(J=n.RG32F),G===n.HALF_FLOAT&&(J=n.RG16F),G===n.UNSIGNED_BYTE&&(J=n.RG8),G===n.UNSIGNED_SHORT&&le&&(J=le.RG16_EXT),G===n.SHORT&&le&&(J=le.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RG8UI),G===n.UNSIGNED_SHORT&&(J=n.RG16UI),G===n.UNSIGNED_INT&&(J=n.RG32UI),G===n.BYTE&&(J=n.RG8I),G===n.SHORT&&(J=n.RG16I),G===n.INT&&(J=n.RG32I)),w===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGB8UI),G===n.UNSIGNED_SHORT&&(J=n.RGB16UI),G===n.UNSIGNED_INT&&(J=n.RGB32UI),G===n.BYTE&&(J=n.RGB8I),G===n.SHORT&&(J=n.RGB16I),G===n.INT&&(J=n.RGB32I)),w===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),G===n.UNSIGNED_INT&&(J=n.RGBA32UI),G===n.BYTE&&(J=n.RGBA8I),G===n.SHORT&&(J=n.RGBA16I),G===n.INT&&(J=n.RGBA32I)),w===n.RGB&&(G===n.UNSIGNED_SHORT&&le&&(J=le.RGB16_EXT),G===n.SHORT&&le&&(J=le.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),w===n.RGBA){let Y=se?ji:je.getTransfer($);G===n.FLOAT&&(J=n.RGBA32F),G===n.HALF_FLOAT&&(J=n.RGBA16F),G===n.UNSIGNED_BYTE&&(J=Y===Ye?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&le&&(J=le.RGBA16_EXT),G===n.SHORT&&le&&(J=le.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function m(T,w){let G;return T?w===null||w===va||w===On?G=n.DEPTH24_STENCIL8:w===ia?G=n.DEPTH32F_STENCIL8:w===Si&&(G=n.DEPTH24_STENCIL8,Se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===va||w===On?G=n.DEPTH_COMPONENT24:w===ia?G=n.DEPTH_COMPONENT32F:w===Si&&(G=n.DEPTH_COMPONENT16),G}function S(T,w){return E(T)===!0||T.isFramebufferTexture&&T.minFilter!==dt&&T.minFilter!==yt?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function C(T){let w=new WeakRef(T);a.get(T).__ref=w,x.add(w),y.register(T,w,w)}function R(T){let w=a.get(T).__ref;w!==void 0&&(x.delete(w),y.unregister(w))}function k(T){F(T.target)}function D(T){I(T.target)}function F(T){T.removeEventListener("dispose",k),R(T),V(T),T.isVideoTexture&&l.delete(T),T.isHTMLTexture&&d.delete(T)}function I(T){T.removeEventListener("dispose",D),R(T),Z(T)}function z(){for(let T of x){let w=T.deref();w!==void 0&&(w.isRenderTarget===!0?I(w):F(w))}x.clear(),d.clear()}function V(T){let w=a.get(T);if(w.__webglInit===void 0)return;let G=T.source,te=b.get(G);if(te){let $=te[w.__cacheKey];$.usedTimes--,$.usedTimes===0&&L(T),Object.keys(te).length===0&&b.delete(G)}a.remove(T)}function L(T){let w=a.get(T);n.deleteTexture(w.__webglTexture);let G=T.source,te=b.get(G);delete te[w.__cacheKey],r.memory.textures--}function Z(T){let w=a.get(T);w.__depthDisposeCallback&&w.__depthDisposeCallback();let G=T.depthTexture;if(G&&G.renderTarget===T&&F(G),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(w.__webglFramebuffer[$]))for(let se=0;se<w.__webglFramebuffer[$].length;se++)n.deleteFramebuffer(w.__webglFramebuffer[$][se]);else n.deleteFramebuffer(w.__webglFramebuffer[$]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[$])}else{if(Array.isArray(w.__webglFramebuffer))for(let $=0;$<w.__webglFramebuffer.length;$++)n.deleteFramebuffer(w.__webglFramebuffer[$]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let $=0;$<w.__webglColorRenderbuffer.length;$++)w.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[$]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let te=T.textures;for(let $=0,se=te.length;$<se;$++){let le=a.get(te[$]);le.__webglTexture&&(n.deleteTexture(le.__webglTexture),r.memory.textures--),a.remove(te[$])}a.remove(T)}let j=0;function K(){j=0}function ee(){return j}function me(T){j=T}function Te(){let T=j;return T>=i.maxTextures&&Se("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+i.maxTextures),j+=1,T}function X(T){let w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.mipmapsAutoUpdate),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.colorSpace),w.join()}function ne(T,w){let G=a.get(T);if(T.isVideoTexture&&gt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&G.__version!==T.version){let te=T.image;if(te===null)Se("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Se("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(G,T,w);return}}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+w)}function xe(T,w){let G=a.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){mt(G,T,w);return}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+w)}function Ae(T,w){let G=a.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){mt(G,T,w);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+w)}function ue(T,w){let G=a.get(T);if(T.version>0&&G.__version!==T.version){Xt(G,T,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+w)}let Fe={[dn]:n.REPEAT,[la]:n.CLAMP_TO_EDGE,[ai]:n.MIRRORED_REPEAT},ft={[dt]:n.NEAREST,[Tr]:n.NEAREST_MIPMAP_NEAREST,[Fn]:n.NEAREST_MIPMAP_LINEAR,[yt]:n.LINEAR,[Mi]:n.LINEAR_MIPMAP_NEAREST,[fa]:n.LINEAR_MIPMAP_LINEAR},ke={[id]:n.NEVER,[Pc]:n.ALWAYS,[sd]:n.LESS,[kc]:n.LEQUAL,[rd]:n.EQUAL,[Nc]:n.GEQUAL,[od]:n.GREATER,[cd]:n.NOTEQUAL};function Ze(T,w){if(w.type===ia&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===yt||w.magFilter===Mi||w.magFilter===Fn||w.magFilter===fa||w.minFilter===yt||w.minFilter===Mi||w.minFilter===Fn||w.minFilter===fa)&&Se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Fe[w.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Fe[w.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Fe[w.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ft[w.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ft[w.minFilter]),w.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ke[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===dt||w.minFilter!==Fn&&w.minFilter!==fa||w.type===ia&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||a.get(w).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),a.get(w).__currentAnisotropy=w.anisotropy}}}function et(T,w){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",k),C(w));let te=w.source,$=b.get(te);$===void 0&&($={},b.set(te,$));let se=X(w);if(se!==T.__cacheKey){$[se]===void 0&&($[se]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,G=!0),$[se].usedTimes++;let le=$[T.__cacheKey];le!==void 0&&($[T.__cacheKey].usedTimes--,le.usedTimes===0&&L(w)),T.__cacheKey=se,T.__webglTexture=$[se].texture}return G}function Ve(T,w,G){return Math.floor(Math.floor(T/G)/w)}function Rt(T,w,G,te){let se=T.updateRanges;if(se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,G,te,w.data);else{se.sort((N,Q)=>N.start-Q.start);let le=0;for(let N=1;N<se.length;N++){let Q=se[le],q=se[N],ce=Q.start+Q.count,ie=Ve(q.start,w.width,4),re=Ve(Q.start,w.width,4);q.start<=ce+1&&ie===re&&Ve(q.start+q.count-1,w.width,4)===ie?Q.count=Math.max(Q.count,q.start+q.count-Q.start):(++le,se[le]=q)}se.length=le+1;let J=t.getParameter(n.UNPACK_ROW_LENGTH),Y=t.getParameter(n.UNPACK_SKIP_PIXELS),oe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let N=0,Q=se.length;N<Q;N++){let q=se[N],ce=Math.floor(q.start/4),ie=Math.ceil(q.count/4),re=ce%w.width,we=Math.floor(ce/w.width),ze=ie,ae=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,re),t.pixelStorei(n.UNPACK_SKIP_ROWS,we),t.texSubImage2D(n.TEXTURE_2D,0,re,we,ze,ae,G,te,w.data)}T.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,J),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(n.UNPACK_SKIP_ROWS,oe)}}function mt(T,w,G){let te=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(te=n.TEXTURE_3D);let $=et(T,w),se=w.source;t.bindTexture(te,T.__webglTexture,n.TEXTURE0+G);let le=a.get(se);if(se.version!==le.__version||$===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let ae=je.getPrimaries(je.workingColorSpace),Ee=w.colorSpace===en?null:je.getPrimaries(w.colorSpace),Ue=w.colorSpace===en||ae===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let Y=v(w.image,!1,i.maxTextureSize);Y=Re(w,Y);let oe=s.convert(w.format,w.colorSpace),N=s.convert(w.type),Q=M(w.internalFormat,oe,N,w.normalized,w.colorSpace,w.isVideoTexture);Ze(te,w);let q,ce=w.mipmaps,ie=w.isVideoTexture!==!0,re=le.__version===void 0||$===!0,we=se.dataReady,ze=S(w,Y);if(w.isDepthTexture)Q=m(w.format===$a,w.type),re&&(ie?t.texStorage2D(n.TEXTURE_2D,1,Q,Y.width,Y.height):t.texImage2D(n.TEXTURE_2D,0,Q,Y.width,Y.height,0,oe,N,null));else if(w.isDataTexture)if(ce.length>0){ie&&re&&t.texStorage2D(n.TEXTURE_2D,ze,Q,ce[0].width,ce[0].height);for(let ae=0,Ee=ce.length;ae<Ee;ae++)q=ce[ae],ie?we&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,q.width,q.height,oe,N,q.data):t.texImage2D(n.TEXTURE_2D,ae,Q,q.width,q.height,0,oe,N,q.data);w.generateMipmaps=!1}else ie?(re&&t.texStorage2D(n.TEXTURE_2D,ze,Q,Y.width,Y.height),we&&Rt(w,Y,oe,N)):t.texImage2D(n.TEXTURE_2D,0,Q,Y.width,Y.height,0,oe,N,Y.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ie&&re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ze,Q,ce[0].width,ce[0].height,Y.depth);for(let ae=0,Ee=ce.length;ae<Ee;ae++)if(q=ce[ae],w.format!==ua)if(oe!==null)if(ie){if(we)if(w.layerUpdates.size>0){let Ue=Hc(q.width,q.height,w.format,w.type);for(let be of w.layerUpdates){let Qe=q.data.subarray(be*Ue/q.data.BYTES_PER_ELEMENT,(be+1)*Ue/q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,be,q.width,q.height,1,oe,Qe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,q.width,q.height,Y.depth,oe,q.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Q,q.width,q.height,Y.depth,0,q.data,0,0);else Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,q.width,q.height,Y.depth,oe,N,q.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Q,q.width,q.height,Y.depth,0,oe,N,q.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ie&&re&&t.texStorage2D(n.TEXTURE_2D,ze,Q,ce[0].width,ce[0].height);for(let ae=0,Ee=ce.length;ae<Ee;ae++)q=ce[ae],w.format!==ua?oe!==null?ie?we&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,q.width,q.height,oe,q.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Q,q.width,q.height,0,q.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?we&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,q.width,q.height,oe,N,q.data):t.texImage2D(n.TEXTURE_2D,ae,Q,q.width,q.height,0,oe,N,q.data)}else if(w.isDataArrayTexture)if(ie){if(re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ze,Q,Y.width,Y.height,Y.depth),we)if(w.layerUpdates.size>0){let ae=Hc(Y.width,Y.height,w.format,w.type);for(let Ee of w.layerUpdates){let Ue=Y.data.subarray(Ee*ae/Y.data.BYTES_PER_ELEMENT,(Ee+1)*ae/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ee,Y.width,Y.height,1,oe,N,Ue)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,oe,N,Y.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,Y.width,Y.height,Y.depth,0,oe,N,Y.data);else if(w.isData3DTexture)ie?(re&&t.texStorage3D(n.TEXTURE_3D,ze,Q,Y.width,Y.height,Y.depth),we&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,oe,N,Y.data)):t.texImage3D(n.TEXTURE_3D,0,Q,Y.width,Y.height,Y.depth,0,oe,N,Y.data);else if(w.isFramebufferTexture){if(re)if(ie)t.texStorage2D(n.TEXTURE_2D,ze,Q,Y.width,Y.height);else{let ae=Y.width,Ee=Y.height;for(let Ue=0;Ue<ze;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,Q,ae,Ee,0,oe,N,null),ae>>=1,Ee>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){let ae=n.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),Y.parentNode!==ae){ae.appendChild(Y),d.add(w),ae.onpaint=Ee=>{let Ue=Ee.changedElements;for(let be of d)Ue.includes(be.image)&&(be.needsUpdate=!0)},ae.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Y);else{let Ue=n.RGBA,be=n.RGBA,Qe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ue,be,Qe,Y)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ce.length>0){if(ie&&re){let ae=De(ce[0]);t.texStorage2D(n.TEXTURE_2D,ze,Q,ae.width,ae.height)}for(let ae=0,Ee=ce.length;ae<Ee;ae++)q=ce[ae],ie?we&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,oe,N,q):t.texImage2D(n.TEXTURE_2D,ae,Q,oe,N,q);w.generateMipmaps=!1}else if(ie){if(re){let ae=De(Y);t.texStorage2D(n.TEXTURE_2D,ze,Q,ae.width,ae.height)}we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,N,Y)}else t.texImage2D(n.TEXTURE_2D,0,Q,oe,N,Y);E(w)&&w.mipmapsAutoUpdate===!0&&g(te),le.__version=se.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function Xt(T,w,G){if(w.image.length!==6)return;let te=et(T,w),$=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+G);let se=a.get($);if($.version!==se.__version||te===!0){t.activeTexture(n.TEXTURE0+G);let le=je.getPrimaries(je.workingColorSpace),J=w.colorSpace===en?null:je.getPrimaries(w.colorSpace),Y=w.colorSpace===en||le===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let oe=w.isCompressedTexture||w.image[0].isCompressedTexture,N=w.image[0]&&w.image[0].isDataTexture,Q=[];for(let be=0;be<6;be++)!oe&&!N?Q[be]=v(w.image[be],!0,i.maxCubemapSize):Q[be]=N?w.image[be].image:w.image[be],Q[be]=Re(w,Q[be]);let q=Q[0],ce=s.convert(w.format,w.colorSpace),ie=s.convert(w.type),re=M(w.internalFormat,ce,ie,w.normalized,w.colorSpace),we=w.isVideoTexture!==!0,ze=se.__version===void 0||te===!0,ae=$.dataReady,Ee=S(w,q);Ze(n.TEXTURE_CUBE_MAP,w);let Ue;if(w.isDepthTexture){if(re=m(w.format===$a,w.type),ze)if(we)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,re,q.width,q.height);else for(let be=0;be<6;be++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,re,q.width,q.height,0,ce,ie,null)}else if(oe){we&&ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,re,q.width,q.height);for(let be=0;be<6;be++){Ue=Q[be].mipmaps;for(let Qe=0;Qe<Ue.length;Qe++){let wt=Ue[Qe];w.format!==ua?ce!==null?we?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Qe,0,0,wt.width,wt.height,ce,wt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Qe,re,wt.width,wt.height,0,wt.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Qe,0,0,wt.width,wt.height,ce,ie,wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Qe,re,wt.width,wt.height,0,ce,ie,wt.data)}}}else{if(Ue=w.mipmaps,we&&ze){Ue.length>0&&Ee++;let be=De(Q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,re,be.width,be.height)}for(let be=0;be<6;be++)if(N){we?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Q[be].width,Q[be].height,ce,ie,Q[be].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,re,Q[be].width,Q[be].height,0,ce,ie,Q[be].data);for(let Qe=0;Qe<Ue.length;Qe++){let tn=Ue[Qe].image[be].image;we?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Qe+1,0,0,tn.width,tn.height,ce,ie,tn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Qe+1,re,tn.width,tn.height,0,ce,ie,tn.data)}}else{we?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ce,ie,Q[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,re,ce,ie,Q[be]);for(let Qe=0;Qe<Ue.length;Qe++){let wt=Ue[Qe];we?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Qe+1,0,0,ce,ie,wt.image[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Qe+1,re,ce,ie,wt.image[be])}}}E(w)&&w.mipmapsAutoUpdate===!0&&g(n.TEXTURE_CUBE_MAP),se.__version=$.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function ot(T,w,G,te,$,se){let le=s.convert(G.format,G.colorSpace),J=s.convert(G.type),Y=M(G.internalFormat,le,J,G.normalized,G.colorSpace),oe=a.get(w),N=a.get(G);if(N.__renderTarget=w,!oe.__hasExternalTextures){let Q=Math.max(1,w.width>>se),q=Math.max(1,w.height>>se);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,se,Y,Q,q,w.depth,0,le,J,null):t.texImage2D($,se,Y,Q,q,0,le,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),fe(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,$,N.__webglTexture,0,st(w)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,$,N.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ma(T,w,G){if(n.bindRenderbuffer(n.RENDERBUFFER,T),w.depthBuffer){let te=w.depthTexture,$=te&&te.isDepthTexture?te.type:null,se=m(w.stencilBuffer,$),le=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;fe(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st(w),se,w.width,w.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,st(w),se,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,se,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,T)}else{let te=w.textures;for(let $=0;$<te.length;$++){let se=te[$],le=s.convert(se.format,se.colorSpace),J=s.convert(se.type),Y=M(se.internalFormat,le,J,se.normalized,se.colorSpace);fe(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st(w),Y,w.width,w.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,st(w),Y,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Y,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function St(T,w,G){let te=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=a.get(w.depthTexture);$.__renderTarget=w;let se=te?w.depthTexture.image[0]:w.depthTexture.image;(!$.__webglTexture||se.width!==w.width||se.height!==w.height)&&(se.width=w.width,se.height=w.height,w.depthTexture.needsUpdate=!0),te?ue(w.depthTexture,0):ne(w.depthTexture,0);let le=$.__webglTexture,J=st(w),Y=te?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,oe=w.depthTexture.format===$a?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ha)fe(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,Y,le,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,oe,Y,le,0);else if(w.depthTexture.format===$a)fe(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,Y,le,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,oe,Y,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function sa(T){let w=a.get(T),G=T.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==T.depthTexture){let te=T.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),te){let $=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,te.removeEventListener("dispose",$)};te.addEventListener("dispose",$),w.__depthDisposeCallback=$}w.__boundDepthTexture=te}if(T.depthTexture&&!w.__autoAllocateDepthBuffer)if(G)for(let te=0;te<6;te++)St(w.__webglFramebuffer[te],T,te);else T.texture.mipmaps.length>0?St(w.__webglFramebuffer[0],T,0):St(w.__webglFramebuffer,T,0);else if(G){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]===void 0)w.__webglDepthbuffer[te]=n.createRenderbuffer(),Ma(w.__webglDepthbuffer[te],T,!1);else{let $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=w.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,se)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Ma(w.__webglDepthbuffer,T,!1);else{let $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,se)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ra(T,w,G){let te=a.get(T);w!==void 0&&ot(te.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&sa(T)}function oa(T){let w=T.texture,G=a.get(T),te=a.get(w);T.addEventListener("dispose",D),C(T);let $=T.textures,se=T.isWebGLCubeRenderTarget===!0,le=$.length>1;if(le||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=w.version,r.memory.textures++),se){G.__webglFramebuffer=[];for(let J=0;J<6;J++)if(w.mipmaps.length>0){G.__webglFramebuffer[J]=[];for(let Y=0;Y<w.mipmaps.length;Y++)G.__webglFramebuffer[J][Y]=n.createFramebuffer()}else G.__webglFramebuffer[J]=n.createFramebuffer()}else{if(w.mipmaps.length>0){G.__webglFramebuffer=[];for(let J=0;J<w.mipmaps.length;J++)G.__webglFramebuffer[J]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(le)for(let J=0,Y=$.length;J<Y;J++){let oe=a.get($[J]);oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture(),r.memory.textures++)}if(T.samples>0&&fe(T)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){let Y=$[J];G.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[J]);let oe=s.convert(Y.format,Y.colorSpace),N=s.convert(Y.type),Q=M(Y.internalFormat,oe,N,Y.normalized,Y.colorSpace,T.isXRRenderTarget===!0),q=st(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,q,Q,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,G.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Ma(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Ze(n.TEXTURE_CUBE_MAP,w);for(let J=0;J<6;J++)if(w.mipmaps.length>0)for(let Y=0;Y<w.mipmaps.length;Y++)ot(G.__webglFramebuffer[J][Y],T,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Y);else ot(G.__webglFramebuffer[J],T,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);E(w)?g(n.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(le){for(let J=0,Y=$.length;J<Y;J++){let oe=$[J],N=a.get(oe),Q=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,N.__webglTexture),Ze(Q,oe),ot(G.__webglFramebuffer,T,oe,n.COLOR_ATTACHMENT0+J,Q,0),E(oe)&&g(Q)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(J=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,te.__webglTexture),Ze(J,w),w.mipmaps.length>0)for(let Y=0;Y<w.mipmaps.length;Y++)ot(G.__webglFramebuffer[Y],T,w,n.COLOR_ATTACHMENT0,J,Y);else ot(G.__webglFramebuffer,T,w,n.COLOR_ATTACHMENT0,J,0);E(w)?g(J):w.mipmaps.length>0&&n.texParameteri(J,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&sa(T)}function O(T){let w=T.textures;for(let G=0,te=w.length;G<te;G++){let $=w[G];if(E($)&&$.mipmapsAutoUpdate===!0){let se=_(T),le=a.get($).__webglTexture;t.bindTexture(se,le),g(se),t.unbindTexture()}}}let ca=[];function it(T){if(T.samples>0){if(fe(T)===!1){let w=T.textures,G=T.width,te=T.height,$=n.COLOR_BUFFER_BIT,se=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=a.get(T),J=w.length>1;if(J)for(let oe=0;oe<w.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let oe=0;oe<w.length;oe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[oe]);let N=a.get(w[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,G,te,0,0,G,te,$,n.NEAREST),c===!0&&(ca.length=0,ca.push(n.COLOR_ATTACHMENT0+oe),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&ca.push(se),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ca))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let oe=0;oe<w.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,le.__webglColorRenderbuffer[oe]);let N=a.get(w[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,N,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let w=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function st(T){return Math.min(i.maxSamples,T.samples)}function fe(T){let w=a.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function gt(T){let w=r.render.frame;l.get(T)!==w&&(l.set(T,w),T.update())}function Re(T,w){let G=T.colorSpace,te=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==jt&&G!==en&&(je.getTransfer(G)===Ye?(te!==ua||$!==Zt)&&Se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",G)),w}function De(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=Te,this.resetTextureUnits=K,this.getTextureUnits=ee,this.setTextureUnits=me,this.setTexture2D=ne,this.setTexture2DArray=xe,this.setTexture3D=Ae,this.setTextureCube=ue,this.rebindTextures=ra,this.setupRenderTarget=oa,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=sa,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=fe,this.dispose=z}function qg(n,e){function t(a,i=en){let s,r=je.getTransfer(i);if(a===Zt)return n.UNSIGNED_BYTE;if(a===Ir)return n.UNSIGNED_SHORT_4_4_4_4;if(a===Cr)return n.UNSIGNED_SHORT_5_5_5_1;if(a===Ec)return n.UNSIGNED_INT_5_9_9_9_REV;if(a===Tc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(a===wc)return n.BYTE;if(a===Ac)return n.SHORT;if(a===Si)return n.UNSIGNED_SHORT;if(a===Rr)return n.INT;if(a===va)return n.UNSIGNED_INT;if(a===ia)return n.FLOAT;if(a===_a)return n.HALF_FLOAT;if(a===Rc)return n.ALPHA;if(a===Ic)return n.RGB;if(a===ua)return n.RGBA;if(a===Ha)return n.DEPTH_COMPONENT;if(a===$a)return n.DEPTH_STENCIL;if(a===kr)return n.RED;if(a===Nr)return n.RED_INTEGER;if(a===gn)return n.RG;if(a===Pr)return n.RG_INTEGER;if(a===Dr)return n.RGBA_INTEGER;if(a===bs||a===ps||a===ms||a===gs)if(r===Ye)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===bs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===bs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ps)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ms)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===gs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Lr||a===Fr||a===Or||a===Ur)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Lr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Fr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Or)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Ur)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===zr||a===Br||a===jr||a===Gr||a===Hr||a===xs||a===Vr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===zr||a===Br)return r===Ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===jr)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(a===Gr)return s.COMPRESSED_R11_EAC;if(a===Hr)return s.COMPRESSED_SIGNED_R11_EAC;if(a===xs)return s.COMPRESSED_RG11_EAC;if(a===Vr)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Wr||a===Xr||a===qr||a===Kr||a===Jr||a===Yr||a===Zr||a===Qr||a===$r||a===eo||a===to||a===ao||a===no||a===io)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Wr)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Xr)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===qr)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Kr)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Jr)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Yr)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Zr)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Qr)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===$r)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===eo)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===to)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ao)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===no)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===io)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===so||a===ro||a===oo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===so)return r===Ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===ro)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===oo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===co||a===ho||a===ys||a===lo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===co)return s.COMPRESSED_RED_RGTC1_EXT;if(a===ho)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ys)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===lo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===On?n.UNSIGNED_INT_24_8:n[a]!==void 0?n[a]:null}return{convert:t}}var Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jg=`
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

}`,Qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let a=new as(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,a=new Ea({vertexShader:Kg,fragmentShader:Jg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new ns(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$c=class extends ya{constructor(e,t){super();let a=this,i=null,s=1,r=null,o="local-floor",c=1,h=null,l=null,d=null,f=null,b=null,x=null,y=typeof XRWebGLBinding<"u",u=new Qc,p={},v=t.getContextAttributes(),E=null,g=null,_=[],M=[],m=new Ie,S=null,C=null,R=new xt;R.viewport=new $e;let k=new xt;k.viewport=new $e;let D=[R,k],F=new wr,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=_[X];return ne===void 0&&(ne=new oi,_[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=_[X];return ne===void 0&&(ne=new oi,_[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=_[X];return ne===void 0&&(ne=new oi,_[X]=ne),ne.getHandSpace()};function V(X){let ne=M.indexOf(X.inputSource);if(ne===-1)return;let xe=_[ne];xe!==void 0&&(xe.update(X.inputSource,X.frame,h||r),xe.dispatchEvent({type:X.type,data:X.inputSource}))}function L(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",Z);for(let X=0;X<_.length;X++){let ne=M[X];ne!==null&&(M[X]=null,_[X].disconnect(ne))}I=null,z=null,u.reset();for(let X in p)delete p[X];if(e.setRenderTarget(E),b=null,f=null,d=null,i=null,g=null,Te.stop(),a.isPresenting=!1,e.setPixelRatio(S),e.setSize(m.width,m.height,!1),C!==null){let X=C.camera;X.fov=C.fov,X.zoom=C.zoom,X.updateProjectionMatrix(),C=null}a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,a.isPresenting===!0&&Se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,a.isPresenting===!0&&Se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return f!==null?f:b},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",L),i.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(m),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ae=null,ue=null;v.depth&&(ue=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=v.stencil?$a:Ha,Ae=v.stencil?On:va);let Fe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Fe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new aa(f.textureWidth,f.textureHeight,{format:ua,type:Zt,depthTexture:new qa(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let xe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};b=new XRWebGLLayer(i,t,xe),i.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),g=new aa(b.framebufferWidth,b.framebufferHeight,{format:ua,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(c),h=null,r=await i.requestReferenceSpace(o),Te.setContext(i),Te.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return u.getDepthTexture()};function Z(X){for(let ne=0;ne<X.removed.length;ne++){let xe=X.removed[ne],Ae=M.indexOf(xe);Ae>=0&&(M[Ae]=null,_[Ae].disconnect(xe))}for(let ne=0;ne<X.added.length;ne++){let xe=X.added[ne],Ae=M.indexOf(xe);if(Ae===-1){for(let Fe=0;Fe<_.length;Fe++)if(Fe>=M.length){M.push(xe),Ae=Fe;break}else if(M[Fe]===null){M[Fe]=xe,Ae=Fe;break}if(Ae===-1)break}let ue=_[Ae];ue&&ue.connect(xe)}}function j(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let ne=X.near,xe=X.far;u.texture!==null&&(u.depthNear>0&&(ne=u.depthNear),u.depthFar>0&&(xe=u.depthFar)),F.near=k.near=R.near=ne,F.far=k.far=R.far=xe,(I!==F.near||z!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),I=F.near,z=F.far),F.layers.mask=X.layers.mask|6,R.layers.mask=F.layers.mask&-5,k.layers.mask=F.layers.mask&-3;let Ae=X.parent,ue=F.cameras;j(F,Ae);for(let Fe=0;Fe<ue.length;Fe++)j(ue[Fe],Ae);F.projectionMatrix.copy(R.projectionMatrix),F.projectionMatrixInverse.copy(R.projectionMatrixInverse),C===null&&X.isPerspectiveCamera&&(C={camera:X,fov:X.fov,zoom:X.zoom}),K(X,F,Ae)};function K(X,ne,xe){xe===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(xe.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=In*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&b===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=X)},this.hasDepthSensing=function(){return u.texture!==null},this.getDepthSensingMesh=function(){return u.getMesh(F)},this.getCameraTexture=function(X){return p[X]};let ee=null;function me(X,ne){if(l=ne.getViewerPose(h||r),x=ne,l!==null){let xe=l.views;b!==null&&(e.setRenderTargetFramebuffer(g,b.framebuffer),e.setRenderTarget(g));let Ae=!1;xe.length!==F.cameras.length&&(F.cameras.length=0,Ae=!0);for(let ke=0;ke<xe.length;ke++){let Ze=xe[ke],et=null;if(b!==null)et=b.getViewport(Ze);else{let Rt=d.getViewSubImage(f,Ze);et=Rt.viewport,ke===0&&(e.setRenderTargetTextures(g,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(g))}let Ve=D[ke];Ve===void 0&&(Ve=new xt,Ve.layers.enable(ke),Ve.viewport=new $e,D[ke]=Ve),Ve.matrix.fromArray(Ze.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ze.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(et.x,et.y,et.width,et.height),ke===0&&(F.matrix.copy(Ve.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ae===!0&&F.cameras.push(Ve)}let ue=i.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){d=a.getBinding();let ke=d.getDepthInformation(xe[0]);ke&&ke.isValid&&ke.texture&&u.init(ke,i.renderState)}if(ue&&ue.includes("camera-access")&&y){e.state.unbindTexture(),d=a.getBinding();for(let ke=0;ke<xe.length;ke++){let Ze=xe[ke].camera;if(Ze){let et=p[Ze];et||(et=new as,p[Ze]=et);let Ve=d.getCameraImage(Ze);et.sourceTexture=Ve}}}}for(let xe=0;xe<_.length;xe++){let Ae=M[xe],ue=_[xe];Ae!==null&&ue!==void 0&&ue.update(Ae,ne,h||r)}ee&&ee(X,ne),ne.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ne}),x=null}let Te=new Ud;Te.setAnimationLoop(me),this.setAnimationLoop=function(X){ee=X},this.dispose=function(){}}},Yg=new Oe,Kd=new Pe;Kd.set(-1,0,0,0,1,0,0,0,1);function Zg(n,e){function t(u,p){u.matrixAutoUpdate===!0&&u.updateMatrix(),p.value.copy(u.matrix)}function a(u,p){p.color.getRGB(u.fogColor.value,Bc(n)),p.isFog?(u.fogNear.value=p.near,u.fogFar.value=p.far):p.isFogExp2&&(u.fogDensity.value=p.density)}function i(u,p,v,E,g){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(u,p):p.isMeshLambertMaterial?(s(u,p),p.envMap&&(u.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(u,p),d(u,p)):p.isMeshPhongMaterial?(s(u,p),l(u,p),p.envMap&&(u.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(u,p),f(u,p),p.isMeshPhysicalMaterial&&b(u,p,g)):p.isMeshMatcapMaterial?(s(u,p),x(u,p)):p.isMeshDepthMaterial?s(u,p):p.isMeshDistanceMaterial?(s(u,p),y(u,p)):p.isMeshNormalMaterial?s(u,p):p.isLineBasicMaterial?(r(u,p),p.isLineDashedMaterial&&o(u,p)):p.isPointsMaterial?c(u,p,v,E):p.isSpriteMaterial?h(u,p):p.isShadowMaterial?(u.color.value.copy(p.color),u.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(u,p){u.opacity.value=p.opacity,p.color&&u.diffuse.value.copy(p.color),p.emissive&&u.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(u.map.value=p.map,t(p.map,u.mapTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,t(p.alphaMap,u.alphaMapTransform)),p.bumpMap&&(u.bumpMap.value=p.bumpMap,t(p.bumpMap,u.bumpMapTransform),u.bumpScale.value=p.bumpScale,p.side===Wt&&(u.bumpScale.value*=-1)),p.normalMap&&(u.normalMap.value=p.normalMap,t(p.normalMap,u.normalMapTransform),u.normalScale.value.copy(p.normalScale),p.side===Wt&&u.normalScale.value.negate()),p.displacementMap&&(u.displacementMap.value=p.displacementMap,t(p.displacementMap,u.displacementMapTransform),u.displacementScale.value=p.displacementScale,u.displacementBias.value=p.displacementBias),p.emissiveMap&&(u.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,u.emissiveMapTransform)),p.specularMap&&(u.specularMap.value=p.specularMap,t(p.specularMap,u.specularMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest);let v=e.get(p),E=v.envMap,g=v.envMapRotation;E&&(u.envMap.value=E,u.envMapRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(g)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&u.envMapRotation.value.premultiply(Kd),u.reflectivity.value=p.reflectivity,u.ior.value=p.ior,u.refractionRatio.value=p.refractionRatio),p.lightMap&&(u.lightMap.value=p.lightMap,u.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,u.lightMapTransform)),p.aoMap&&(u.aoMap.value=p.aoMap,u.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,u.aoMapTransform))}function r(u,p){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,p.map&&(u.map.value=p.map,t(p.map,u.mapTransform))}function o(u,p){u.dashSize.value=p.dashSize,u.totalSize.value=p.dashSize+p.gapSize,u.scale.value=p.scale}function c(u,p,v,E){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,u.size.value=p.size*v,u.scale.value=E*.5,p.map&&(u.map.value=p.map,t(p.map,u.uvTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,t(p.alphaMap,u.alphaMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest)}function h(u,p){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,u.rotation.value=p.rotation,p.map&&(u.map.value=p.map,t(p.map,u.mapTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,t(p.alphaMap,u.alphaMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest)}function l(u,p){u.specular.value.copy(p.specular),u.shininess.value=Math.max(p.shininess,1e-4)}function d(u,p){p.gradientMap&&(u.gradientMap.value=p.gradientMap)}function f(u,p){u.metalness.value=p.metalness,p.metalnessMap&&(u.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,u.metalnessMapTransform)),u.roughness.value=p.roughness,p.roughnessMap&&(u.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,u.roughnessMapTransform)),p.envMap&&(u.envMapIntensity.value=p.envMapIntensity)}function b(u,p,v){u.ior.value=p.ior,p.diffuseRoughness>0&&(u.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(u.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,u.diffuseRoughnessMapTransform))),p.sheen>0&&(u.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),u.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(u.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,u.sheenColorMapTransform)),p.sheenRoughnessMap&&(u.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,u.sheenRoughnessMapTransform))),p.clearcoat>0&&(u.clearcoat.value=p.clearcoat,u.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(u.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,u.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(u.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&u.clearcoatNormalScale.value.negate())),p.dispersion>0&&(u.dispersion.value=p.dispersion),p.retroreflectivity>0&&(u.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(u.iridescence.value=p.iridescence,u.iridescenceIOR.value=p.iridescenceIOR,u.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,u.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(u.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,u.iridescenceMapTransform)),p.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),p.transmission>0&&(u.transmission.value=p.transmission,u.transmissionSamplerMap.value=v.texture,u.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(u.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,u.transmissionMapTransform)),u.thickness.value=p.thickness,p.thicknessMap&&(u.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=p.attenuationDistance,u.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(u.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(u.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=p.specularIntensity,u.specularColor.value.copy(p.specularColor),p.specularColorMap&&(u.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,u.specularColorMapTransform)),p.specularIntensityMap&&(u.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,u.specularIntensityMapTransform))}function x(u,p){p.matcap&&(u.matcap.value=p.matcap)}function y(u,p){let v=e.get(p).light;u.referencePosition.value.setFromMatrixPosition(v.matrixWorld),u.nearDistance.value=v.shadow.camera.near,u.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:i}}function Qg(n,e,t,a){let i={},s={};function r(v,E){let g=E.program;a.uniformBlockBinding(v,g,i[v.id])}function o(v,E){let g=i[v.id];g===void 0&&(x(v),g=c(v),i[v.id]=g,v.addEventListener("dispose",u));let _=E.program;a.updateUBOMapping(v,_);let M=e.render.frame;s[v.id]!==M&&(h(v),s[v.id]=M)}function c(v){let E=n.createBuffer(),g=v.__size,_=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,g,_),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function h(v){let E=i[v.id],g=v.uniforms,_=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let M=0,m=g.length;M<m;M++){let S=g[M];if(Array.isArray(S))for(let C=0,R=S.length;C<R;C++)l(S[C],M,C,_);else l(S,M,0,_)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function l(v,E,g,_){if(f(v,E,g,_)===!0){let M=v.__offset,m=v.value;if(Array.isArray(m)){let S=0;for(let C=0;C<m.length;C++){let R=m[C],k=y(R,!0);d(R,v.__data,S),S+=k.storage/Float32Array.BYTES_PER_ELEMENT}}else d(m,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,v.__data)}}function d(v,E,g){typeof v=="number"||typeof v=="boolean"?E[g]=v:v.isMatrix3?(E[g]=v.elements[0],E[g+1]=v.elements[1],E[g+2]=v.elements[2],E[g+3]=0,E[g+4]=v.elements[3],E[g+5]=v.elements[4],E[g+6]=v.elements[5],E[g+7]=0,E[g+8]=v.elements[6],E[g+9]=v.elements[7],E[g+10]=v.elements[8],E[g+11]=0):ArrayBuffer.isView(v)?E.set(v.subarray(0,E.length-g),g):v.toArray(E,g)}function f(v,E,g,_){let M=v.value,m=E+"_"+g;if(Array.isArray(M)){_[m]===void 0&&(_[m]=[]);let S=_[m],C=!1;for(let R=0;R<M.length;R++)b(M[R],S,R)===!0&&(C=!0);return C}return b(M,_,m)}function b(v,E,g){if(E[g]===void 0)return typeof v=="number"||typeof v=="boolean"?E[g]=v:ArrayBuffer.isView(v)?E[g]=v.slice():E[g]=v.clone(),!0;{let _=E[g];if(typeof v=="number"||typeof v=="boolean"){if(_!==v)return E[g]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(_.equals(v)===!1)return _.copy(v),!0}}return!1}function x(v){let E=v.uniforms,g=0,_=16;for(let m=0,S=E.length;m<S;m++){let C=Array.isArray(E[m])?E[m]:[E[m]];for(let R=0,k=C.length;R<k;R++){let D=C[R],F=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(E[m])||Array.isArray(D.value),z=g;for(let L=0,Z=F.length;L<Z;L++){let j=F[L],K=y(j,I),ee=g%_,me=ee%K.boundary,Te=ee+me;g+=me,Te!==0&&_-Te<K.storage&&(g+=_-Te),L===0&&(z=g),g+=K.storage}let V=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new V((g-z)/Float32Array.BYTES_PER_ELEMENT),D.__offset=z}}let M=g%_;return M>0&&(g+=_-M),v.__size=g,v.__cache={},this}function y(v,E){let g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=16,g.storage=48):v.isMatrix4?(g.boundary=16,g.storage=64):v.isTexture?Se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(g.boundary=16,g.storage=v.byteLength):Se("WebGLRenderer: Unsupported uniform value type.",v),E===!0&&(g.boundary=16,g.storage=Math.ceil(g.storage/16)*16),g}function u(v){let E=v.target;E.removeEventListener("dispose",u),n.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function p(){for(let v in i)n.deleteBuffer(i[v]);i={},s={}}return{bind:r,update:o,dispose:p}}var $g=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Na=null;function ex(){return Na===null&&(Na=new di($g,16,16,gn,_a),Na.name="DFG_LUT",Na.minFilter=yt,Na.magFilter=yt,Na.wrapS=la,Na.wrapT=la,Na.generateMipmaps=!1,Na.needsUpdate=!0),Na}var go=class{constructor(e={}){let{canvas:t=hd(),context:a=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:b=Zt}=e;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=r;let y=b,u=new Set([Dr,Pr,Nr]),p=new Set([Zt,va,Si,On,Ir,Cr]),v=new Uint32Array(4),E=new Int32Array(4),g={textures:[],min:[],max:[],resolution:[]},_=null,M=null,m=[],S=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ca,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,k=!1,D=null,F=null,I=null,z=null;this._outputColorSpace=lt;let V=0,L=0,Z=null,j=-1,K=null,ee=new $e,me=new $e,Te=null,X=new Ce(0),ne=0,xe=t.width,Ae=t.height,ue=1,Fe=null,ft=null,ke=new $e(0,0,xe,Ae),Ze=new $e(0,0,xe,Ae),et=!1,Ve=new fn,Rt=new dr,mt=!1,Xt=!1,ot=new Oe,Ma=new U,St=new $e,sa={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ra=!1;function oa(){return Z===null?ue:1}let O=a;function ca(A,P){return t.getContext(A,P)}let it,st,fe,gt,Re,De,T,w,G,te,$,se,le,J,Y,oe,N,Q,q,ce,ie,re,we;try{let A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",be,!1),O===null){let P="webgl2";if(O=ca(P,A),O===null)throw ca(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(A){throw t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ne("WebGLRenderer: "+A.message),A}function ze(){it=new dm(O),it.init(),ie=new qg(O,it),st=new em(O,it,e,ie),fe=new Wg(O,it),st.reversedDepthBuffer&&f&&fe.buffers.depth.setReversed(!0),F=O.createFramebuffer(),I=O.createFramebuffer(),z=O.createFramebuffer(),gt=new bm(O),Re=new kg,De=new Xg(O,it,fe,Re,st,ie,gt),T=new lm(R),w=new mu(O),re=new Qp(O,w),G=new fm(O,w,gt,re),te=new mm(O,G,w,re,gt),Q=new pm(O,st,De),Y=new tm(Re),$=new Cg(R,T,it,st,re,Y),se=new Zg(R,Re),le=new Pg,J=new zg(it),N=new Zp(R,T,fe,te,x,c),oe=new Vg(R,te,st),we=new Qg(O,gt,st,fe),q=new $p(O,it,gt),ce=new um(O,it,gt),gt.programs=$.programs,R.capabilities=st,R.extensions=it,R.properties=Re,R.renderLists=le,R.shadowMap=oe,R.state=fe,R.info=gt}y!==Zt&&(C=new xm(y,t.width,t.height,o,i,s));let ae=new $c(R,O);this.xr=ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let A=it.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=it.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(A){A!==void 0&&(ue=A,this.setSize(xe,Ae,!1))},this.getSize=function(A){return A.set(xe,Ae)},this.setSize=function(A,P,W=!0){if(ae.isPresenting){Se("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=A,Ae=P,t.width=Math.floor(A*ue),t.height=Math.floor(P*ue),W===!0&&(t.style.width=A+"px",t.style.height=P+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,A,P)},this.getDrawingBufferSize=function(A){return A.set(xe*ue,Ae*ue).floor()},this.setDrawingBufferSize=function(A,P,W){xe=A,Ae=P,ue=W,t.width=Math.floor(A*W),t.height=Math.floor(P*W),this.setViewport(0,0,A,P)},this.setEffects=function(A){if(y===Zt){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let P=0;P<A.length;P++)if(A[P].isOutputPass===!0){Se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ee)},this.getViewport=function(A){return A.copy(ke)},this.setViewport=function(A,P,W,B){A.isVector4?ke.set(A.x,A.y,A.z,A.w):ke.set(A,P,W,B),fe.viewport(ee.copy(ke).multiplyScalar(oa()).round())},this.getScissor=function(A){return A.copy(Ze)},this.setScissor=function(A,P,W,B){A.isVector4?Ze.set(A.x,A.y,A.z,A.w):Ze.set(A,P,W,B),fe.scissor(me.copy(Ze).multiplyScalar(oa()).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(A){fe.setScissorTest(et=A)},this.setOpaqueSort=function(A){Fe=A},this.setTransparentSort=function(A){ft=A},this.getClearColor=function(A){return A.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(A=!0,P=!0,W=!0){let B=0;if(A){let H=!1;if(Z!==null){let de=Z.texture.format;H=u.has(de)}if(H){let de=Z.texture.type,ye=p.has(de),he=N.getClearColor(),ge=N.getClearAlpha(),Me=he.r,Le=he.g,We=he.b;ye?(v[0]=Me,v[1]=Le,v[2]=We,v[3]=ge,O.clearBufferuiv(O.COLOR,0,v)):(E[0]=Me,E[1]=Le,E[2]=We,E[3]=ge,O.clearBufferiv(O.COLOR,0,E))}else B|=O.COLOR_BUFFER_BIT}P&&(B|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&O.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",be,!1),N.dispose(),le.dispose(),J.dispose(),De.dispose(),Re.dispose(),T.dispose(),te.dispose(),G.dispose(),re.dispose(),we.dispose(),$.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Dh),ae.removeEventListener("sessionend",Lh),yn.stop()};function Ee(A){A.preventDefault(),Gi("WebGLRenderer: Context Lost."),k=!0}function Ue(){Gi("WebGLRenderer: Context Restored."),k=!1;let A=gt.autoReset,P=oe.enabled,W=oe.autoUpdate,B=oe.needsUpdate,H=oe.type;ze(),gt.autoReset=A,oe.enabled=P,oe.autoUpdate=W,oe.needsUpdate=B,oe.type=H}function be(A){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qe(A){let P=A.target;P.removeEventListener("dispose",Qe),wt(P)}function wt(A){tn(A),Re.remove(A)}function tn(A){let P=Re.get(A).programs;P!==void 0&&(P.forEach(function(W){$.releaseProgram(W)}),A.isShaderMaterial&&$.releaseShaderCache(A))}this.renderBufferDirect=function(A,P,W,B,H,de){P===null&&(P=sa);let ye=H.isMesh&&H.matrixWorld.determinantAffine()<0,he=lf(A,P,W,B,H);fe.setMaterial(B,ye);let ge=W.index,Me=1;if(B.wireframe===!0){if(ge=G.getWireframeAttribute(W),ge===void 0)return;Me=2}let Le=W.drawRange,We=W.attributes.position,ve=Le.start*Me,Xe=(Le.start+Le.count)*Me;de!==null&&(ve=Math.max(ve,de.start*Me),Xe=Math.min(Xe,(de.start+de.count)*Me)),ge!==null?(ve=Math.max(ve,0),Xe=Math.min(Xe,ge.count)):We!=null&&(ve=Math.max(ve,0),Xe=Math.min(Xe,We.count));let ut=Xe-ve;if(ut<0||ut===1/0)return;re.setup(H,B,he,W,ge);let nt,tt=q;if(ge!==null&&(nt=w.get(ge),tt=ce,tt.setIndex(nt)),H.isMesh)B.wireframe===!0?(fe.setLineWidth(B.wireframeLinewidth*oa()),tt.setMode(O.LINES)):tt.setMode(O.TRIANGLES);else if(H.isLine){let kt=B.linewidth;kt===void 0&&(kt=1),fe.setLineWidth(kt*oa()),H.isLineSegments?tt.setMode(O.LINES):H.isLineLoop?tt.setMode(O.LINE_LOOP):tt.setMode(O.LINE_STRIP)}else H.isPoints?tt.setMode(O.POINTS):H.isSprite&&tt.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(it.get("WEBGL_multi_draw"))tt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let kt=H._multiDrawStarts,_e=H._multiDrawCounts,Ot=H._multiDrawCount,Ke=ge?w.get(ge).bytesPerElement:1,vn=Re.get(B).currentProgram.getUniforms();for(let Nt=0;Nt<Ot;Nt++)vn.setValue(O,"_gl_DrawID",Nt),tt.render(kt[Nt]/Ke,_e[Nt])}else if(H.isInstancedMesh)tt.renderInstances(ve,ut,H.count);else if(W.isInstancedBufferGeometry){let kt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_e=Math.min(W.instanceCount,kt);tt.renderInstances(ve,ut,_e)}else tt.render(ve,ut)};function Ph(A,P,W,B){D!==null&&A.isNodeMaterial&&D.setObject(B,A),mt===!0&&Y.setState(A,W,!1),A.transparent===!0&&A.side===pt&&A.forceSinglePass===!1?(A.side=Wt,A.needsUpdate=!0,Ii(A,P,B),A.side=Ia,A.needsUpdate=!0,Ii(A,P,B),A.side=pt):Ii(A,P,B)}this.compile=function(A,P,W=null){W===null&&(W=A),D!==null&&D.renderStart(A,P,W),M=J.get(W),M.init(P),S.push(M),W.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(M.pushLight(H),H.castShadow&&M.pushShadow(H))}),A!==W&&A.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(M.pushLight(H),H.castShadow&&M.pushShadow(H))}),M.setupLights(),D!==null&&D.updateLights(M.state.lightsArray),Xt=this.localClippingEnabled,mt=Y.init(this.clippingPlanes,Xt),mt===!0&&Y.setGlobalState(this.clippingPlanes,P),D!==null&&oe.render(M.state.shadowsArray,W,P);let B=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let de=H.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){let he=de[ye];Ph(he,W,P,H),B.add(he)}else Ph(de,W,P,H),B.add(de)}),M=S.pop(),D!==null&&D.renderEnd(),B},this.compileAsync=function(A,P,W=null){let B=this.compile(A,P,W);return new Promise(H=>{function de(){if(B.forEach(function(ye){let ge=Re.get(ye).currentProgram;(ge===void 0||ge.isReady())&&B.delete(ye)}),B.size===0){H(A);return}setTimeout(de,10)}it.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ao=null;function cf(A){Ao&&Ao(A)}function Dh(){yn.stop()}function Lh(){yn.start()}let yn=new Ud;yn.setAnimationLoop(cf),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(A){Ao=A,ae.setAnimationLoop(A),A===null?yn.stop():yn.start()},ae.addEventListener("sessionstart",Dh),ae.addEventListener("sessionend",Lh),this.render=function(A,P){if(P!==void 0&&P.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;D!==null&&D.renderStart(A,P);let W=ae.enabled===!0&&ae.isPresenting===!0,B=C!==null&&(Z===null||W)&&C.begin(R,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(P),P=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,P,Z),M=J.get(A,S.length),M.init(P),M.state.textureUnits=De.getTextureUnits(),S.push(M),ot.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?Rt.setFromArrayCamera(P):Ve.setFromProjectionMatrix(ot,da,P.reversedDepth),Xt=this.localClippingEnabled,mt=Y.init(this.clippingPlanes,Xt),_=le.get(A,m.length),_.init(),m.push(_),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){let ye=R.xr.getDepthSensingMesh();ye!==null&&Eo(ye,P,-1/0,R.sortObjects)}Eo(A,P,0,R.sortObjects),_.finish(),D!==null&&D.updateLights(M.state.lightsArray),R.sortObjects===!0&&_.sort(Fe,ft),ra=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,ra&&N.addToRenderList(_,A),this.info.autoReset===!0&&this.info.reset(),mt===!0&&Y.beginShadows();let H=M.state.shadowsArray;if(oe.render(H,A,P),mt===!0&&Y.endShadows(),(B&&C.hasRenderPass())===!1){let ye=_.opaque,he=_.transmissive;if(M.setupLights(),P.isArrayCamera){let ge=P.cameras;if(he.length>0)for(let Me=0,Le=ge.length;Me<Le;Me++){let We=ge[Me];Oh(ye,he,A,We)}ra&&N.render(A);for(let Me=0,Le=ge.length;Me<Le;Me++){let We=ge[Me];Fh(_,A,We,We.viewport)}}else he.length>0&&Oh(ye,he,A,P),ra&&N.render(A),Fh(_,A,P)}Z!==null&&L===0&&(De.updateMultisampleRenderTarget(Z),De.updateRenderTargetMipmap(Z)),B&&C.end(R),A.isScene===!0&&A.onAfterRender(R,A,P),re.resetDefaultState(),j=-1,K=null,S.pop(),S.length>0?(M=S[S.length-1],De.setTextureUnits(M.state.textureUnits),mt===!0&&Y.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,D!==null&&D.renderEnd()};function Eo(A,P,W,B){if(A.visible===!1)return;if(A.layers.test(P.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(P);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){let ye=P.isArrayCamera?Rt:Ve;if(!A.frustumCulled||A.intersectsFrustum(ye)){B&&St.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ot);let he=te.update(A),ge=A.material;ge.visible&&_.push(A,he,ge,W,St.z,null,P)}}else if(A.isMesh||A.isLine||A.isPoints){let ye=P.isArrayCamera?Rt:Ve;if(!A.frustumCulled||A.intersectsFrustum(ye)){let he=te.update(A),ge=A.material;if(B&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),St.copy(A.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),St.copy(he.boundingSphere.center)),St.applyMatrix4(A.matrixWorld).applyMatrix4(ot)),Array.isArray(ge)){let Me=he.groups;for(let Le=0,We=Me.length;Le<We;Le++){let ve=Me[Le],Xe=ge[ve.materialIndex];Xe&&Xe.visible&&_.push(A,he,Xe,W,St.z,ve,P)}}else ge.visible&&_.push(A,he,ge,W,St.z,null,P)}}}let de=A.children;for(let ye=0,he=de.length;ye<he;ye++)Eo(de[ye],P,W,B)}function Fh(A,P,W,B){let{opaque:H,transmissive:de,transparent:ye}=A;M.setupLightsView(W),mt===!0&&Y.setGlobalState(R.clippingPlanes,W),B&&fe.viewport(ee.copy(B)),H.length>0&&Es(H,P,W),de.length>0&&Es(de,P,W),ye.length>0&&Es(ye,P,W),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Oh(A,P,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[B.id]===void 0){let ve=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[B.id]=new aa(1,1,{generateMipmaps:!0,type:ve?_a:Zt,minFilter:fa,samples:Math.max(4,st.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}let de=M.state.transmissionRenderTarget[B.id],ye=B.viewport||ee;de.setSize(ye.z*R.transmissionResolutionScale,ye.w*R.transmissionResolutionScale);let he=R.getRenderTarget(),ge=R.getActiveCubeFace(),Me=R.getActiveMipmapLevel();R.setRenderTarget(de),R.getClearColor(X),ne=R.getClearAlpha(),ne<1&&R.setClearColor(16777215,.5),R.clear(),ra&&N.render(W);let Le=R.toneMapping;R.toneMapping=Ca;let We=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),M.setupLightsView(B),mt===!0&&Y.setGlobalState(R.clippingPlanes,B),Es(A,W,B),De.updateMultisampleRenderTarget(de),De.updateRenderTargetMipmap(de),it.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Xe=0,ut=P.length;Xe<ut;Xe++){let nt=P[Xe],{object:tt,geometry:kt,material:_e,group:Ot}=nt;if(_e.side===pt&&tt.layers.test(B.layers)){let Ke=_e.side;_e.side=Wt,_e.needsUpdate=!0,Uh(tt,W,B,kt,_e,Ot),_e.side=Ke,_e.needsUpdate=!0,ve=!0}}ve===!0&&(De.updateMultisampleRenderTarget(de),De.updateRenderTargetMipmap(de))}R.setRenderTarget(he,ge,Me),R.setClearColor(X,ne),We!==void 0&&(B.viewport=We),R.toneMapping=Le}function Es(A,P,W){let B=P.isScene===!0?P.overrideMaterial:null;for(let H=0,de=A.length;H<de;H++){let ye=A[H],{object:he,geometry:ge,group:Me}=ye,Le=ye.material;Le.allowOverride===!0&&B!==null&&(Le=B),he.layers.test(W.layers)&&Uh(he,P,W,ge,Le,Me)}}function Uh(A,P,W,B,H,de){D!==null&&H.isNodeMaterial&&D.setObject(A,H),A.onBeforeRender(R,P,W,B,H,de),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(R,P,W,B,A,de),H.transparent===!0&&H.side===pt&&H.forceSinglePass===!1?(H.side=Wt,H.needsUpdate=!0,R.renderBufferDirect(W,P,B,H,A,de),H.side=Ia,H.needsUpdate=!0,R.renderBufferDirect(W,P,B,H,A,de),H.side=pt):R.renderBufferDirect(W,P,B,H,A,de),A.onAfterRender(R,P,W,B,H,de)}function zh(A){let P=0;for(let W of A)W.texture!==null&&P++;return P}function Ii(A,P,W){P.isScene!==!0&&(P=sa);let B=Re.get(A),H=M.state.lights,de=M.state.shadowsArray,ye=H.state.version,he=$.getParameters(A,H.state,de,P,W,M.state.lightProbeGridArray),ge=$.getProgramCacheKey(he),Me=B.programs;B.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?P.environment:null,B.fog=P.fog;let Le=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;B.envMap=T.get(A.envMap||B.environment,Le),B.envMapRotation=B.environment!==null&&A.envMap===null?P.environmentRotation:A.envMapRotation,Me===void 0&&(A.addEventListener("dispose",Qe),Me=new Map,B.programs=Me,B.programVariants=new Map);let We=Me.get(ge);if(We!==void 0){if(B.currentProgram===We&&B.lightsStateVersion===ye)return jh(A,he),We}else he.uniforms=$.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,W,he),A.onBeforeCompile(he,R),We=$.acquireProgram(he,ge),Me.set(ge,We),B.uniforms=he.uniforms;let ve=B.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ve.clippingPlanes=Y.uniform),jh(A,he),B.needsLights=ff(A),B.lightsStateVersion=ye,B.needsLights&&(ve.ambientLightColor.value=H.state.ambient,ve.lightProbe.value=H.state.probe,ve.sunLights.value=H.state.sun,ve.sunLightShadows.value=H.state.sunShadow,ve.directionalLights.value=H.state.directional,ve.directionalLightShadows.value=H.state.directionalShadow,ve.spotLights.value=H.state.spot,ve.spotLightShadows.value=H.state.spotShadow,ve.rectAreaLights.value=H.state.rectArea,ve.ltc_1.value=H.state.rectAreaLTC1,ve.ltc_2.value=H.state.rectAreaLTC2,ve.pointLights.value=H.state.point,ve.pointLightShadows.value=H.state.pointShadow,ve.hemisphereLights.value=H.state.hemi,ve.sunShadowMatrix.value=H.state.sunShadowMatrix,ve.sunShadowCascade.value=H.state.sunShadowCascade,ve.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ve.spotLightMatrix.value=H.state.spotLightMatrix,ve.spotLightMap.value=H.state.spotLightMap,ve.pointShadowMatrix.value=H.state.pointShadowMatrix),B.numLightProbeGrids=zh(M.state.lightProbeGridArray),B.currentProgram=We,B.uniformsList=null,We}function hf(A,P,W,B,H){let de=Re.get(A),ye=de.currentProgram.id+","+B+","+H,he=de.programVariants.get(ye);return he===void 0?(he=Ii(A,P,W),de.programVariants.set(ye,he)):(de.currentProgram=he,de.uniformsList=null,de.outputColorSpace=B,de.toneMapping=H),he}function Bh(A){if(A.uniformsList===null){let P=A.currentProgram.getUniforms();A.uniformsList=Ei.seqWithValue(P.seq,A.uniforms)}return A.uniformsList}function jh(A,P){let W=Re.get(A);W.outputColorSpace=P.outputColorSpace,W.batching=P.batching,W.batchingColor=P.batchingColor,W.instancing=P.instancing,W.instancingColor=P.instancingColor,W.instancingMorph=P.instancingMorph,W.skinning=P.skinning,W.morphTargets=P.morphTargets,W.morphNormals=P.morphNormals,W.morphColors=P.morphColors,W.morphTargetsCount=P.morphTargetsCount,W.numClippingPlanes=P.numClippingPlanes,W.numIntersection=P.numClipIntersection,W.vertexAlphas=P.vertexAlphas,W.vertexTangents=P.vertexTangents,W.toneMapping=P.toneMapping}function lf(A,P,W,B,H){P.isScene!==!0&&(P=sa),De.resetTextureUnits();let de=P.fog,ye=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?P.environment:null,he=Z===null?R.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:je.workingColorSpace,ge=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Me=T.get(B.envMap||ye,ge),Le=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ve=!!W.morphAttributes.position,Xe=!!W.morphAttributes.normal,ut=!!W.morphAttributes.color,nt=Ca;B.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(nt=R.toneMapping);let tt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,kt=tt!==void 0?tt.length:0,_e=Re.get(B),Ot=M.state.lights;if(mt===!0&&(Xt===!0||A!==K)){let ct=A===K&&B.id===j;Y.setState(B,A,ct)}let Ke=!1,vn=!1;B.version===_e.__version?_e.needsLights&&_e.lightsStateVersion!==Ot.state.version||H.isBatchedMesh&&_e.batching===!1||!H.isBatchedMesh&&_e.batching===!0||H.isBatchedMesh&&_e.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&_e.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&_e.instancing===!1||!H.isInstancedMesh&&_e.instancing===!0||H.isSkinnedMesh&&_e.skinning===!1||!H.isSkinnedMesh&&_e.skinning===!0||H.isInstancedMesh&&_e.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&_e.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&_e.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&_e.instancingMorph===!1&&H.morphTexture!==null||_e.envMap!==Me||B.fog===!0&&_e.fog!==de||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Y.numPlanes||_e.numIntersection!==Y.numIntersection)||_e.vertexAlphas!==Le||_e.vertexTangents!==We||_e.morphTargets!==ve||_e.morphNormals!==Xe||_e.morphColors!==ut||_e.morphTargetsCount!==kt||_e.numLightProbeGrids!==zh(M.state.lightProbeGridArray)?Ke=!0:(_e.outputColorSpace!==he||_e.toneMapping!==nt)&&(vn=!0):(Ke=!0,_e.__version=B.version);let Nt=_e.currentProgram;(Ke===!0||vn===!0)&&(Nt=vn===!0?hf(B,P,H,he,nt):Ii(B,P,H),D&&B.isNodeMaterial&&D.onUpdateProgram(B,Nt,_e));let Ts=!1,an=!1,_n=!1,qe=Nt.getUniforms(),It=_e.uniforms;if(fe.useProgram(Nt.program)&&(Ts=!0,an=!0,_n=!0),B.id!==j&&(j=B.id,an=!0),Ts||K!==A){fe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),qe.setValue(O,"projectionMatrix",A.projectionMatrix),qe.setValue(O,"viewMatrix",A.matrixWorldInverse);let At=qe.map.cameraPosition;At!==void 0&&At.setValue(O,Ma.setFromMatrixPosition(A.matrixWorld)),st.logarithmicDepthBuffer&&qe.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&qe.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),K!==A&&(K=A,an=!0,_n=!0)}if(_e.needsLights&&(Ot.state.sunShadowMap.length>0&&qe.setValue(O,"sunShadowMap",Ot.state.sunShadowMap,De),Ot.state.directionalShadowMap.length>0&&qe.setValue(O,"directionalShadowMap",Ot.state.directionalShadowMap,De),Ot.state.spotShadowMap.length>0&&qe.setValue(O,"spotShadowMap",Ot.state.spotShadowMap,De),Ot.state.pointShadowMap.length>0&&qe.setValue(O,"pointShadowMap",Ot.state.pointShadowMap,De)),H.isSkinnedMesh){qe.setOptional(O,H,"bindMatrix"),qe.setOptional(O,H,"bindMatrixInverse");let ct=H.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),qe.setValue(O,"boneTexture",ct.boneTexture,De))}H.isBatchedMesh&&(qe.setOptional(O,H,"batchingTexture"),qe.setValue(O,"batchingTexture",H._matricesTexture,De),qe.setOptional(O,H,"batchingIdTexture"),qe.setValue(O,"batchingIdTexture",H._indirectTexture,De),qe.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&qe.setValue(O,"batchingColorTexture",H._colorsTexture,De));let pa=W.morphAttributes;if((pa.position!==void 0||pa.normal!==void 0||pa.color!==void 0)&&Q.update(H,W,Nt),(an||_e.receiveShadow!==H.receiveShadow)&&(_e.receiveShadow=H.receiveShadow,qe.setValue(O,"receiveShadow",H.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&P.environment!==null&&(It.envMapIntensity.value=P.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=ex()),an){if(qe.setValue(O,"toneMappingExposure",R.toneMappingExposure),_e.needsLights&&df(It,_n),de&&B.fog===!0&&se.refreshFogUniforms(It,de),se.refreshMaterialUniforms(It,B,ue,Ae,M.state.transmissionRenderTarget[A.id]),_e.needsLights&&_e.numLightProbeGrids>0){let ct=g,At=0;for(let La of M.state.lightProbeGridArray)La.texture!==null&&(ct.textures[At]=La.texture,ct.min[At]=La.boundingBox.min,ct.max[At]=La.boundingBox.max,ct.resolution[At]=La.resolution,At++);for(let La in ct)ct[La].length=At;It.probesSH.value=ct.textures,It.probesMin.value=ct.min,It.probesMax.value=ct.max,It.probesResolution.value=ct.resolution}Ei.upload(O,Bh(_e),It,De)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ei.upload(O,Bh(_e),It,De),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&qe.setValue(O,"center",H.center),qe.setValue(O,"modelViewMatrix",H.modelViewMatrix),qe.setValue(O,"normalMatrix",H.normalMatrix),qe.setValue(O,"modelMatrix",H.matrixWorld),B.uniformsGroups!==void 0){let ct=B.uniformsGroups;for(let At=0,La=ct.length;At<La;At++){let Hh=ct[At];we.update(Hh,Nt),we.bind(Hh,Nt)}}return Nt}function df(A,P){A.ambientLightColor.needsUpdate=P,A.lightProbe.needsUpdate=P,A.sunLights.needsUpdate=P,A.sunLightShadows.needsUpdate=P,A.directionalLights.needsUpdate=P,A.directionalLightShadows.needsUpdate=P,A.pointLights.needsUpdate=P,A.pointLightShadows.needsUpdate=P,A.spotLights.needsUpdate=P,A.spotLightShadows.needsUpdate=P,A.rectAreaLights.needsUpdate=P,A.hemisphereLights.needsUpdate=P}function ff(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,P,W){let B=Re.get(A);B.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Re.get(A.texture).__webglTexture=P,Re.get(A.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,P){let W=Re.get(A);W.__webglFramebuffer=P,W.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(A,P=0,W=0){Z=A,V=P,L=W;let B=null,H=!1,de=!1;if(A){let he=Re.get(A);if(he.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(O.FRAMEBUFFER,he.__webglFramebuffer),ee.copy(A.viewport),me.copy(A.scissor),Te=A.scissorTest,fe.viewport(ee),fe.scissor(me),fe.setScissorTest(Te),j=-1;return}else if(he.__webglFramebuffer===void 0)De.setupRenderTarget(A);else if(he.__hasExternalTextures)De.rebindTextures(A,Re.get(A.texture).__webglTexture,Re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Le=A.depthTexture;if(he.__boundDepthTexture!==Le){if(Le!==null&&Re.has(Le)&&(A.width!==Le.image.width||A.height!==Le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(A)}}let ge=A.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(de=!0);let Me=Re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Me[P])?B=Me[P][W]:B=Me[P],H=!0):A.samples>0&&De.useMultisampledRTT(A)===!1?B=Re.get(A).__webglMultisampledFramebuffer:Array.isArray(Me)?B=Me[W]:B=Me,ee.copy(A.viewport),me.copy(A.scissor),Te=A.scissorTest}else ee.copy(ke).multiplyScalar(ue).floor(),me.copy(Ze).multiplyScalar(ue).floor(),Te=et;if(W!==0&&(B=F),fe.bindFramebuffer(O.FRAMEBUFFER,B)&&fe.drawBuffers(A,B),fe.viewport(ee),fe.scissor(me),fe.setScissorTest(Te),H){let he=Re.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+P,he.__webglTexture,W)}else if(de){let he=P;for(let ge=0;ge<A.textures.length;ge++){let Me=Re.get(A.textures[ge]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ge,Me.__webglTexture,W,he)}}else if(A!==null&&W!==0){let he=Re.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,he.__webglTexture,W)}j=-1};function Gh(A){let P=Re.get(A);return(P.__readFormat!==A.format||P.__readType!==A.type)&&(P.__readFormat=A.format,P.__readType=A.type,P.__formatReadable=st.textureFormatReadable(A.format),P.__typeReadable=st.textureTypeReadable(A.type)),P}this.readRenderTargetPixels=function(A,P,W,B,H,de,ye,he=0){if(!(A&&A.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(ge=ge[ye],Array.isArray(ge)&&(ge=ge[0])),ge){fe.bindFramebuffer(O.FRAMEBUFFER,ge);try{let Me=A.textures[he],Le=Me.format,We=Me.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+he);let ve=Gh(Me);if(ve.__formatReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ve.__typeReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=A.width-B&&W>=0&&W<=A.height-H&&O.readPixels(P,W,B,H,ie.convert(Le),ie.convert(We),de)}finally{let Me=Z!==null?Re.get(Z).__webglFramebuffer:null;fe.bindFramebuffer(O.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(A,P,W,B,H,de,ye,he=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(ge=ge[ye],Array.isArray(ge)&&(ge=ge[0])),ge)if(P>=0&&P<=A.width-B&&W>=0&&W<=A.height-H){fe.bindFramebuffer(O.FRAMEBUFFER,ge);let Me=A.textures[he],Le=Me.format,We=Me.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+he);let ve=Gh(Me);if(ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Xe),O.bufferData(O.PIXEL_PACK_BUFFER,de.byteLength,O.STREAM_READ),O.readPixels(P,W,B,H,ie.convert(Le),ie.convert(We),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let ut=Z!==null?Re.get(Z).__webglFramebuffer:null;fe.bindFramebuffer(O.FRAMEBUFFER,ut);let nt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await dd(O,nt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Xe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,de),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Xe),O.deleteSync(nt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,P=null,W=0){let B=Math.pow(2,-W),H=Math.floor(A.image.width*B),de=Math.floor(A.image.height*B),ye=P!==null?P.x:0,he=P!==null?P.y:0;De.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,ye,he,H,de),fe.unbindTexture()},this.copyTextureToTexture=function(A,P,W=null,B=null,H=0,de=0){let ye,he,ge,Me,Le,We,ve,Xe,ut,nt=A.isCompressedTexture?A.mipmaps[de]:A.image;if(W!==null)ye=W.max.x-W.min.x,he=W.max.y-W.min.y,ge=W.isBox3?W.max.z-W.min.z:1,Me=W.min.x,Le=W.min.y,We=W.isBox3?W.min.z:0;else{let qe=Math.pow(2,-H);ye=Math.floor(nt.width*qe),he=Math.floor(nt.height*qe),A.isDataArrayTexture?ge=nt.depth:A.isData3DTexture?ge=Math.floor(nt.depth*qe):ge=1,Me=0,Le=0,We=0}B!==null?(ve=B.x,Xe=B.y,ut=B.z):(ve=0,Xe=0,ut=0);let tt=ie.convert(P.format),kt=ie.convert(P.type),_e;P.isData3DTexture?(De.setTexture3D(P,0),_e=O.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(De.setTexture2DArray(P,0),_e=O.TEXTURE_2D_ARRAY):(De.setTexture2D(P,0),_e=O.TEXTURE_2D),fe.activeTexture(O.TEXTURE0),fe.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,P.flipY),fe.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),fe.pixelStorei(O.UNPACK_ALIGNMENT,P.unpackAlignment);let Ot=fe.getParameter(O.UNPACK_ROW_LENGTH),Ke=fe.getParameter(O.UNPACK_IMAGE_HEIGHT),vn=fe.getParameter(O.UNPACK_SKIP_PIXELS),Nt=fe.getParameter(O.UNPACK_SKIP_ROWS),Ts=fe.getParameter(O.UNPACK_SKIP_IMAGES);fe.pixelStorei(O.UNPACK_ROW_LENGTH,nt.width),fe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,nt.height),fe.pixelStorei(O.UNPACK_SKIP_PIXELS,Me),fe.pixelStorei(O.UNPACK_SKIP_ROWS,Le),fe.pixelStorei(O.UNPACK_SKIP_IMAGES,We);let an=A.isDataArrayTexture||A.isData3DTexture,_n=P.isDataArrayTexture||P.isData3DTexture;if(A.isDepthTexture){let qe=Re.get(A),It=Re.get(P),pa=Re.get(qe.__renderTarget),ct=Re.get(It.__renderTarget);fe.bindFramebuffer(O.READ_FRAMEBUFFER,pa.__webglFramebuffer),fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let At=0;At<ge;At++)an&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.get(A).__webglTexture,H,We+At),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.get(P).__webglTexture,de,ut+At)),O.blitFramebuffer(Me,Le,Me+ye,Le+he,ve,Xe,ve+ye,Xe+he,O.DEPTH_BUFFER_BIT,O.NEAREST);fe.bindFramebuffer(O.READ_FRAMEBUFFER,null),fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||Re.has(A)){let qe=Re.get(A),It=Re.get(P);fe.bindFramebuffer(O.READ_FRAMEBUFFER,I),fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,z);for(let pa=0;pa<ge;pa++)an?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,qe.__webglTexture,H,We+pa):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,qe.__webglTexture,H),_n?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.__webglTexture,de,ut+pa):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,It.__webglTexture,de),H!==0?O.blitFramebuffer(Me,Le,Me+ye,Le+he,ve,Xe,ve+ye,Xe+he,O.COLOR_BUFFER_BIT,O.NEAREST):_n?O.copyTexSubImage3D(_e,de,ve,Xe,ut+pa,Me,Le,ye,he):O.copyTexSubImage2D(_e,de,ve,Xe,Me,Le,ye,he);fe.bindFramebuffer(O.READ_FRAMEBUFFER,null),fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else _n?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(_e,de,ve,Xe,ut,ye,he,ge,tt,kt,nt.data):P.isCompressedArrayTexture?O.compressedTexSubImage3D(_e,de,ve,Xe,ut,ye,he,ge,tt,nt.data):O.texSubImage3D(_e,de,ve,Xe,ut,ye,he,ge,tt,kt,nt):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,de,ve,Xe,ye,he,tt,kt,nt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,de,ve,Xe,nt.width,nt.height,tt,nt.data):O.texSubImage2D(O.TEXTURE_2D,de,ve,Xe,ye,he,tt,kt,nt);fe.pixelStorei(O.UNPACK_ROW_LENGTH,Ot),fe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ke),fe.pixelStorei(O.UNPACK_SKIP_PIXELS,vn),fe.pixelStorei(O.UNPACK_SKIP_ROWS,Nt),fe.pixelStorei(O.UNPACK_SKIP_IMAGES,Ts),de===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&O.generateMipmap(_e),fe.unbindTexture()},this.initRenderTarget=function(A){Re.get(A).__webglFramebuffer===void 0&&De.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?De.setTextureCube(A,0):A.isData3DTexture?De.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?De.setTexture2DArray(A,0):De.setTexture2D(A,0),fe.unbindTexture()},this.resetState=function(){V=0,L=0,Z=null,fe.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var Yd={type:"change"},th={type:"start"},Qd={type:"end"},vo=new Wa,Zd=new ta,tx=Math.cos(70*Ai.DEG2RAD),Mt=new U,Qt=2*Math.PI,Je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},eh=1e-6,_o=class extends fs{constructor(e,t=null){super(e,t),this.state=Je.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pn.ROTATE,MIDDLE:pn.DOLLY,RIGHT:pn.PAN},this.touches={ONE:mn.ROTATE,TWO:mn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Lt,this._lastTargetPosition=new U,this._quat=new Lt().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xi,this._sphericalDelta=new xi,this._scale=1,this._panOffset=new U,this._rotateStart=new Ie,this._rotateEnd=new Ie,this._rotateDelta=new Ie,this._panStart=new Ie,this._panEnd=new Ie,this._panDelta=new Ie,this._dollyStart=new Ie,this._dollyEnd=new Ie,this._dollyDelta=new Ie,this._dollyDirection=new U,this._mouse=new Ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nx.bind(this),this._onPointerDown=ax.bind(this),this._onPointerUp=ix.bind(this),this._onContextMenu=dx.bind(this),this._onMouseWheel=ox.bind(this),this._onKeyDown=cx.bind(this),this._onTouchStart=hx.bind(this),this._onTouchMove=lx.bind(this),this._onMouseDown=sx.bind(this),this._onMouseMove=rx.bind(this),this._interceptControlDown=fx.bind(this),this._interceptControlUp=ux.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Je.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yd),this.update(),this.state=Je.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Mt.copy(t).sub(this.target),Mt.applyQuaternion(this._quat),this._spherical.setFromVector3(Mt),this.autoRotate&&this.state===Je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(a)&&isFinite(i)&&(a<-Math.PI?a+=Qt:a>Math.PI&&(a-=Qt),i<-Math.PI?i+=Qt:i>Math.PI&&(i-=Qt),a<=i?this._spherical.theta=Math.max(a,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+i)/2?Math.max(a,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(Mt.setFromSpherical(this._spherical),Mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let o=Mt.length();r=this._clampDistance(o*this._scale);let c=o-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let h=new U(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),r=Mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(vo.origin.copy(this.object.position),vo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vo.direction))<tx?this.object.lookAt(this.target):(Zd.setFromNormalAndCoplanarPoint(this.object.up,this.target),vo.intersectPlane(Zd,this.target))))}else if(this.object.isOrthographicCamera){let r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>eh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>eh||this._lastTargetPosition.distanceToSquared(this.target)>eh?(this.dispatchEvent(Yd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qt/60*this.autoRotateSpeed*e:Qt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mt.setFromMatrixColumn(t,0),Mt.multiplyScalar(-e),this._panOffset.add(Mt)}_panUp(e,t){this.screenSpacePanning===!0?Mt.setFromMatrixColumn(t,1):(Mt.setFromMatrixColumn(t,0),Mt.crossVectors(this.object.up,Mt)),Mt.multiplyScalar(e),this._panOffset.add(Mt)}_pan(e,t){let a=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Mt.copy(i).sub(this.target);let s=Mt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/a.clientHeight,this.object.matrix),this._panUp(2*t*s/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let a=this.domElement.getBoundingClientRect(),i=e-a.left,s=t-a.top,r=a.width,o=a.height;this._mouse.x=i/r*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(a,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(a,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),a=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(a*a+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let a=this._getSecondPointerPosition(e),i=.5*(e.pageX+a.x),s=.5*(e.pageY+a.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(a,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),a=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(a*a+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}};function ax(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function nx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ix(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qd),this.state=Je.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function sx(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case pn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Je.DOLLY;break;case pn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Je.ROTATE}break;case pn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Je.PAN}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(th)}function rx(n){switch(this.state){case Je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ox(n){this.enabled===!1||this.enableZoom===!1||this.state!==Je.NONE||(n.preventDefault(),this.dispatchEvent(th),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Qd))}function cx(n){this.enabled!==!1&&this._handleKeyDown(n)}function hx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case mn.ROTATE:if(this.enableRotate===!1){this.state=Je.NONE;break}this._handleTouchStartRotate(n),this.state=Je.TOUCH_ROTATE;break;case mn.PAN:if(this.enablePan===!1){this.state=Je.NONE;break}this._handleTouchStartPan(n),this.state=Je.TOUCH_PAN;break;default:this.state=Je.NONE}break;case 2:switch(this.touches.TWO){case mn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Je.TOUCH_DOLLY_PAN;break;case mn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Je.TOUCH_DOLLY_ROTATE;break;default:this.state=Je.NONE}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(th)}function lx(n){switch(this._trackPointer(n),this.state){case Je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Je.NONE}}function dx(n){this.enabled!==!1&&n.preventDefault()}function fx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ux(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ah(n,e){if(e===Cc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===wi||e===vs){let t=n.getIndex();if(t===null){let s=[],r=n.getAttribute("position");if(r!==void 0){for(let o=0;o<r.count;o++)s.push(o);n.setIndex(s),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let a=t.count-2,i=[];if(e===wi)for(let s=1;s<=a;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<a;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(i),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function $d(n){let e=new Map,t=new Map,a=n.clone();return ef(n,a,function(i,s){e.set(s,i),t.set(i,s)}),a.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,r=e.get(i),o=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),a}function ef(n,e,t){t(n,e);for(let a=0;a<n.children.length;a++)ef(n.children[a],e.children[a],t)}var Mo=class extends Ra{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hh(t)}),this.register(function(t){return new lh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new ch(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new rh(t)}),this.register(function(t){return new So(t,He.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new So(t,He.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Sh(t)})}load(e,t,a,i){let s=this,r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){let h=Qa.extractUrlBase(e);r=Qa.resolveURL(h,this.path)}else r=Qa.extractUrlBase(e);this.manager.itemStart(e);let o=function(h){i?i(h):console.error(h),s.manager.itemError(e),s.manager.itemEnd(e)},c=new pi(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(h){try{s.parse(h,r,function(l){t(l),s.manager.itemEnd(e)},o)}catch(l){o(l)}},a,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,a,i){let s,r={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===rf){try{r[He.KHR_BINARY_GLTF]=new wh(e)}catch(d){i&&i(d);return}s=JSON.parse(r[He.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let h=new kh(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){let d=this.pluginCallbacks[l](h);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,r[d.name]=!0}if(s.extensionsUsed)for(let l=0;l<s.extensionsUsed.length;++l){let d=s.extensionsUsed[l],f=s.extensionsRequired||[];switch(d){case He.KHR_MATERIALS_UNLIT:r[d]=new oh;break;case He.KHR_DRACO_MESH_COMPRESSION:r[d]=new Ah(s,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:r[d]=new Eh;break;case He.KHR_MESH_QUANTIZATION:r[d]=new Th;break;default:f.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}h.setExtensions(r),h.setPlugins(o),h.parse(a,i)}parseAsync(e,t){let a=this;return new Promise(function(i,s){a.parse(e,t,i,s)})}};function bx(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function ht(n,e,t){let a=n.json.materials[e];return a.extensions&&a.extensions[t]?a.extensions[t]:null}var He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},rh=class{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let a=0,i=t.length;a<i;a++){let s=t[a];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,a="light:"+e,i=t.cache.get(a);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],h,l=new Ce(16777215);c.color!==void 0&&l.setRGB(c.color[0],c.color[1],c.color[2],jt);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":h=new bn(l),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new ls(l),h.distance=d;break;case"spot":h=new hs(l),h.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,h.angle=c.spot.outerConeAngle,h.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return h.position.set(0,0,0),Da(h,c),c.intensity!==void 0&&(h.intensity=c.intensity),h.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(h),t.cache.add(a,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,a=this.parser,s=a.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return a._getNodeRef(t.cache,o,c)})}},oh=class{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return Aa}extendParams(e,t,a){let i=[];e.color=new Ce(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],jt),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(a.assignTexture(e,"map",s.baseColorTexture,lt))}return Promise.all(i)}},ch=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let a=ht(this.parser,e,this.name);return a===null||a.emissiveStrength!==void 0&&(t.emissiveIntensity=a.emissiveStrength),Promise.resolve()}},hh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Vt:null}extendMaterialParams(e,t){let a=ht(this.parser,e,this.name);if(a===null)return Promise.resolve();let i=[];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let s=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(s,s)}return Promise.all(i)}},lh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Vt:null}extendMaterialParams(e,t){let a=ht(this.parser,e,this.name);if(a===null)return Promise.resolve();let i=[];return t.diffuseRoughness=a.diffuseRoughnessFactor!==void 0?a.diffuseRoughnessFactor:0,a.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",a.diffuseRoughnessTexture)),Promise.all(i)}},dh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Vt:null}extendMaterialParams(e,t){let a=ht(this.parser,e,this.name);return a===null||(t.dispersion=a.dispersion!==void 0?a.dispersion:0),Promise.resolve()}},fh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Vt:null}extendMaterialParams(e,t){let a=ht(this.parser,e,this.name);if(a===null)return Promise.resolve();let i=[];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(i)}},uh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Vt:null}extendMaterialParams(e,t){let a=ht(this.parser,e,this.name);if(a===null)return Promise.resolve();let i=[];if(t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1,a.sheenColorFactor!==void 0){let s=a.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],jt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",a.sheenColorTexture,lt)),a.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(i)}},bh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Vt:null}extendMaterialParams(e,t){let a=ht(this.parser,e,this.name);if(a===null)return Promise.resolve();let i=[];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(i)}},ph=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Vt:null}extendMaterialParams(e,t){let a=ht(this.parser,e,this.name);if(a===null)return Promise.resolve();let i=[];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let s=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(s[0],s[1],s[2],jt),Promise.all(i)}},mh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Vt:null}extendMaterialParams(e,t){let a=ht(this.parser,e,this.name);return a===null||(t.ior=a.ior!==void 0?a.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},gh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Vt:null}extendMaterialParams(e,t){let a=ht(this.parser,e,this.name);if(a===null)return Promise.resolve();let i=[];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",a.specularTexture));let s=a.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(s[0],s[1],s[2],jt),a.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",a.specularColorTexture,lt)),Promise.all(i)}},xh=class{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Vt:null}extendMaterialParams(e,t){let a=ht(this.parser,e,this.name);if(a===null)return Promise.resolve();let i=[];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(i)}},yh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return ht(this.parser,e,this.name)!==null?Vt:null}extendMaterialParams(e,t){let a=ht(this.parser,e,this.name);if(a===null)return Promise.resolve();let i=[];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(i)}},vh=class{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,a=t.json,i=a.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}},_h=class{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,a=this.parser,i=a.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let r=s.extensions[t],o=i.images[r.source],c=a.textureLoader;if(o.uri){let h=a.options.manager.getHandler(o.uri);h!==null&&(c=h)}return a.loadTextureImage(e,r.source,c)}},Mh=class{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,a=this.parser,i=a.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let r=s.extensions[t],o=i.images[r.source],c=a.textureLoader;if(o.uri){let h=a.options.manager.getHandler(o.uri);h!==null&&(c=h)}return a.loadTextureImage(e,r.source,c)}},So=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,a=t.bufferViews[e];if(a.extensions&&a.extensions[this.name]){let i=a.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,h=i.byteLength||0,l=i.count,d=i.byteStride,f=new Uint8Array(o,c,h);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(l,d,f,i.mode,i.filter).then(function(b){return b.buffer}):r.ready.then(function(){let b=new ArrayBuffer(l*d);return r.decodeGltfBuffer(new Uint8Array(b),l,d,f,i.mode,i.filter),b})})}else return null}},Sh=class{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,a=t.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;let i=t.meshes[a.mesh];for(let h of i.primitives)if(h.mode!==ba.TRIANGLES&&h.mode!==ba.TRIANGLE_STRIP&&h.mode!==ba.TRIANGLE_FAN&&h.mode!==void 0)return null;let r=a.extensions[this.name].attributes,o=[],c={};for(let h in r)o.push(this.parser.getDependency("accessor",r[h]).then(l=>(c[h]=l,c[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(h=>{let l=h.pop(),d=l.isGroup?l.children:[l],f=h[0].count,b=[];for(let x of d){let y=new Oe,u=new U,p=new Lt,v=new U(1,1,1),E=new Yi(x.geometry,x.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&u.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&v.fromBufferAttribute(c.SCALE,_),E.setMatrixAt(_,y.compose(u,p,v));let g=null;for(let _ in c)if(_==="_COLOR_0"){let M=c[_];E.instanceColor=new Xa(M.array,M.itemSize,M.normalized)}else if(_!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"){if(g===null){let m=E.geometry;g=new Kt,g.name=m.name;for(let S in m.attributes)g.setAttribute(S,m.attributes[S]);for(let S in m.morphAttributes)g.morphAttributes[S]=m.morphAttributes[S];m.index!==null&&g.setIndex(m.index),g.morphTargetsRelative=m.morphTargetsRelative;for(let S of m.groups)g.addGroup(S.start,S.count,S.materialIndex);m.boundingBox!==null&&(g.boundingBox=m.boundingBox.clone()),m.boundingSphere!==null&&(g.boundingSphere=m.boundingSphere.clone()),g.drawRange.start=m.drawRange.start,g.drawRange.count=m.drawRange.count,g.userData=Object.assign({},m.userData),E.geometry=g}let M=c[_];g.setAttribute(_,new Xa(M.array,M.itemSize,M.normalized))}rt.prototype.copy.call(E,x),this.parser.assignFinalMaterial(E),b.push(E)}return l.isGroup?(l.clear(),l.add(...b),l):b[0]}))}},rf="glTF",As=12,tf={JSON:1313821514,BIN:5130562},wh=class{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,As),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==rf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-As,s=new DataView(e,As),r=0;for(;r<i;){let o=s.getUint32(r,!0);r+=4;let c=s.getUint32(r,!0);if(r+=4,c===tf.JSON){let h=new Uint8Array(e,As+r,o);this.content=a.decode(h)}else if(c===tf.BIN){let h=As+r;this.body=e.slice(h,h+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ah=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let a=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},c={},h={};for(let l in r){let d=Ih[l]||l.toLowerCase();o[d]=r[l]}for(let l in e.attributes){let d=Ih[l]||l.toLowerCase();if(r[l]!==void 0){let f=a.accessors[e.attributes[l]],b=Ri[f.componentType];h[d]=b.name,c[d]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(l){return new Promise(function(d,f){i.decodeDracoFile(l,function(b){for(let x in b.attributes){let y=b.attributes[x],u=c[x];u!==void 0&&(y.normalized=u)}d(b)},o,h,jt,f)})})}},Eh=class{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let a=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*a,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*a,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Th=class{constructor(){this.name=He.KHR_MESH_QUANTIZATION}},wo=class extends Ta{constructor(e,t,a,i){super(e,t,a,i)}copySampleValue_(e){let t=this.resultBuffer,a=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=a[s+r];return t}interpolate_(e,t,a,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=o*2,h=o*3,l=i-t,d=(a-t)/l,f=d*d,b=f*d,x=e*h,y=x-h,u=-2*b+3*f,p=b-f,v=1-u,E=p-f+d;for(let g=0;g!==o;g++){let _=r[y+g+o],M=r[y+g+c]*l,m=r[x+g+o],S=r[x+g]*l;s[g]=v*_+E*M+u*m+p*S}return s}},px=new Lt,Rh=class extends wo{interpolate_(e,t,a,i){let s=super.interpolate_(e,t,a,i);return px.fromArray(s).normalize().toArray(s),s}},ba={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ri={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},af={9728:dt,9729:yt,9984:Tr,9985:Mi,9986:Fn,9987:fa},nf={33071:la,33648:ai,10497:dn},nh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ih={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mx={CUBICSPLINE:void 0,LINEAR:Rn,STEP:Tn},ih={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gx(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ht({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ia})),n.DefaultMaterial}function zn(n,e,t){for(let a in t.extensions)n[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=t.extensions[a])}function Da(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xx(n,e,t){let a=!1,i=!1,s=!1;for(let h=0,l=e.length;h<l;h++){let d=e[h];if(d.POSITION!==void 0&&(a=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),a&&i&&s)break}if(!a&&!i&&!s)return Promise.resolve(n);let r=[],o=[],c=[];for(let h=0,l=e.length;h<l;h++){let d=e[h];if(a){let f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;r.push(f)}if(i){let f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;o.push(f)}if(s){let f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;c.push(f)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(h){let l=h[0],d=h[1],f=h[2];return a&&(n.morphAttributes.position=l),i&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function yx(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,a=e.weights.length;t<a;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let a=0,i=t.length;a<i;a++)n.morphTargetDictionary[t[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vx(n){let e,t=n.extensions&&n.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+sh(t.attributes):e=n.indices+":"+sh(n.attributes)+":"+n.mode,n.targets!==void 0)for(let a=0,i=n.targets.length;a<i;a++)e+=":"+sh(n.targets[a]);return e}function sh(n){let e="",t=Object.keys(n).sort();for(let a=0,i=t.length;a<i;a++)e+=t[a]+":"+n[t[a]]+";";return e}function Ch(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _x(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Mx=new Oe,kh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=a&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,r=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&i<17||s&&r<98?(this.textureLoader=new rs(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ds(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new pi(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let a=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(r){let o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:a,userData:{}};return zn(s,o,i),Da(o,i),Promise.all(a._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],a=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i].joints;for(let o=0,c=r.length;o<c;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(a[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,a){if(e.refs[t]<=1)return a;let i=a.clone(),s=(r,o)=>{let c=this.associations.get(r);c!=null&&this.associations.set(o,c);for(let[h,l]of r.children.entries())s(l,o.children[h])};return s(a,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let a=0;a<t.length;a++){let i=e(t[a]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let a=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&a.push(s)}return a}getDependency(e,t){let a=e+":"+t,i=this.cache.get(a);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(a,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let a=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return a.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],a=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,r){a.load(Qa.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(a){let i=t.byteLength||0,s=t.byteOffset||0;return a.slice(s,s+i)})}loadAccessor(e){let t=this,a=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let r=nh[i.type],o=Ri[i.componentType],c=i.normalized===!0,h=new o(i.count*r);return Promise.resolve(new Ct(h,r,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){let o=r[0],c=nh[i.type],h=Ri[i.componentType],l=h.BYTES_PER_ELEMENT,d=l*c,f=i.byteOffset||0,b=i.bufferView!==void 0?a.bufferViews[i.bufferView].byteStride:void 0,x=i.normalized===!0,y,u;if(b&&b!==d){let p=Math.floor(f/b),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,E=t.cache.get(v);E||(y=new h(o,p*b,i.count*b/l),E=new ci(y,b/l),t.cache.add(v,E)),u=new hi(E,c,f%b/l,x)}else o===null?y=new h(i.count*c):y=new h(o,f,i.count*c),u=new Ct(y,c,x);if(i.sparse!==void 0){let p=nh.SCALAR,v=Ri[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,g=i.sparse.values.byteOffset||0,_=new v(r[1],E,i.sparse.count*p),M=new h(r[2],g,i.sparse.count*c);o!==null&&(u=new Ct(u.array.slice(),u.itemSize,u.normalized)),u.normalized=!1;for(let m=0,S=_.length;m<S;m++){let C=_[m];if(u.setX(C,M[m*c]),c>=2&&u.setY(C,M[m*c+1]),c>=3&&u.setZ(C,M[m*c+2]),c>=4&&u.setW(C,M[m*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}u.normalized=x}return u})}loadTexture(e){let t=this.json,a=this.options,s=t.textures[e].source,r=t.images[s],o=this.textureLoader;if(r.uri){let c=a.manager.getHandler(r.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,a){let i=this,s=this.json,r=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];let h=this.loadImageSource(t,a).then(function(l){l.flipY=!1,l.name=r.name||o.name||"",l.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(l.name=o.uri);let f=(s.samplers||{})[r.sampler]||{};return l.magFilter=af[f.magFilter]||yt,l.minFilter=af[f.minFilter]||fa,l.wrapS=nf[f.wrapS]||dn,l.wrapT=nf[f.wrapT]||dn,l.generateMipmaps=!l.isCompressedTexture&&l.minFilter!==dt&&l.minFilter!==yt,i.associations.set(l,{textures:e}),l}).catch(function(){return null});return this.textureCache[c]=h,h}loadImageSource(e,t){let a=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let r=i.images[e],o=self.URL||self.webkitURL,c=r.uri||"",h=!1,l;if(t.isKTX2Loader===!0&&r.bufferView!==void 0)l=a.getDependency("bufferView",r.bufferView).then(function(f){return new Promise(function(b,x){t.parse(f,b,x)})});else{if(r.bufferView!==void 0)c=a.getDependency("bufferView",r.bufferView).then(function(f){h=!0;let b=new Blob([f],{type:r.mimeType});return c=o.createObjectURL(b),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");l=Promise.resolve(c).then(function(f){return new Promise(function(b,x){let y=b;t.isImageBitmapLoader===!0&&(y=function(u){let p=new Tt(u);p.needsUpdate=!0,b(p)}),t.load(Qa.resolveURL(f,s.path),y,void 0,x)})})}let d=l.then(function(f){return h===!0&&o.revokeObjectURL(c),Da(f,r),f.userData.mimeType=r.mimeType||_x(r.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=d,d}assignTexture(e,t,a,i){let s=this;return this.getDependency("texture",a.index).then(function(r){if(!r)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(r=r.clone(),r.channel=a.texCoord),s.extensions[He.KHR_TEXTURE_TRANSFORM]){let o=a.extensions!==void 0?a.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(r);r=s.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,c)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){let t=e.geometry,a=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+a.uuid,c=this.cache.get(o);c||(c=new ui,Jt.prototype.copy.call(c,a),c.color.copy(a.color),c.map=a.map,c.sizeAttenuation=!1,this.cache.add(o,c)),a=c}else if(e.isLine){let o="LineBasicMaterial:"+a.uuid,c=this.cache.get(o);c||(c=new fi,Jt.prototype.copy.call(c,a),c.color.copy(a.color),c.map=a.map,this.cache.add(o,c)),a=c}if(i||s||r){let o="ClonedMaterial:"+a.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=a.clone(),s&&(c.vertexColors=!0),r&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(a))),a=c}e.material=a}getMaterialType(){return Ht}loadMaterial(e){let t=this,a=this.json,i=this.extensions,s=a.materials[e],r,o={},c=s.extensions||{},h=[];if(c[He.KHR_MATERIALS_UNLIT]){let d=i[He.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),h.push(d.extendParams(o,s,t))}else{let d=s.pbrMetallicRoughness||{};if(o.color=new Ce(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let f=d.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],jt),o.opacity=f[3]}d.baseColorTexture!==void 0&&h.push(t.assignTexture(o,"map",d.baseColorTexture,lt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),h.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=pt);let l=s.alphaMode||ih.OPAQUE;if(l===ih.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===ih.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Aa&&(h.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ie(1,1),s.normalTexture.scale!==void 0)){let d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&r!==Aa&&(h.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Aa){let d=s.emissiveFactor;o.emissive=new Ce().setRGB(d[0],d[1],d[2],jt)}return s.emissiveTexture!==void 0&&r!==Aa&&h.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,lt)),Promise.all(h).then(function(){let d=new r(o);return s.name&&(d.name=s.name),Da(d,s),t.associations.set(d,{materials:e}),s.extensions&&zn(i,d,s),d})}createUniqueName(e){let t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,a=this.extensions,i=this.primitiveCache;function s(o){return a[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return sf(c,o,t)})}let r=[];for(let o=0,c=e.length;o<c;o++){let h=e[o],l=vx(h),d=i[l];if(d)r.push(d.promise);else{let f;h.extensions&&h.extensions[He.KHR_DRACO_MESH_COMPRESSION]?f=s(h):f=sf(new Kt,h,t),h.mode===ba.TRIANGLE_STRIP?f=f.then(b=>ah(b,vs)):h.mode===ba.TRIANGLE_FAN&&(f=f.then(b=>ah(b,wi))),i[l]={primitive:h,promise:f},r.push(f)}}return Promise.all(r)}loadMesh(e){let t=this,a=this.json,i=this.extensions,s=a.meshes[e],r=s.primitives,o=[];for(let c=0,h=r.length;c<h;c++){let l=r[c].material===void 0?gx(this.cache):this.getDependency("material",r[c].material);o.push(l)}return o.push(t.loadGeometries(r)),Promise.all(o).then(async function(c){let h=c.slice(0,c.length-1),l=c[c.length-1],d=[];for(let b=0,x=l.length;b<x;b++){let y=l[b],u=r[b],p,v=h[b];if(u.mode===ba.TRIANGLES||u.mode===ba.TRIANGLE_STRIP||u.mode===ba.TRIANGLE_FAN||u.mode===void 0){let E=s.isSkinnedMesh===!0,g=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");E&&g===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=E&&g?new Ki(y,v):new Gt(y,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(u.mode===ba.LINES)p=new Zi(y,v);else if(u.mode===ba.LINE_STRIP)p=new Cn(y,v);else if(u.mode===ba.LINE_LOOP)p=new Qi(y,v);else if(u.mode===ba.POINTS)p=new $i(y,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+u.mode);Object.keys(p.geometry.morphAttributes).length>0&&yx(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Da(p,s),u.extensions&&zn(i,p,u),t.assignFinalMaterial(p),d.push(p)}for(let b=0,x=d.length;b<x;b++)t.associations.set(d[b],{meshes:e,primitives:b});if(d.length===1)return s.extensions&&zn(i,d[0],s),d[0];let f=new zt;s.extensions&&zn(i,f,s),t.associations.set(f,{meshes:e});for(let b=0,x=d.length;b<x;b++)f.add(d[b]);return f})}loadCamera(e){let t,a=this.json.cameras[e],i=a[a.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?t=new xt(Ai.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):a.type==="orthographic"&&(t=new Nn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),a.name&&(t.name=this.createUniqueName(a.name)),Da(t,a),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],a=[];for(let i=0,s=t.joints.length;i<s;i++)a.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",t.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(i){let s=i.pop(),r=i,o=[],c=[];for(let h=0,l=r.length;h<l;h++){let d=r[h];if(d){o.push(d);let f=new Oe;s!==null&&f.fromArray(s.array,h*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Ji(o,c)})}loadAnimation(e){let t=this.json,a=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],o=[],c=[],h=[],l=[];for(let d=0,f=i.channels.length;d<f;d++){let b=i.channels[d],x=i.samplers[b.sampler],y=b.target,u=y.node,p=i.parameters!==void 0?i.parameters[x.input]:x.input,v=i.parameters!==void 0?i.parameters[x.output]:x.output;y.node!==void 0&&(r.push(this.getDependency("node",u)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),h.push(x),l.push(y))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c),Promise.all(h),Promise.all(l)]).then(function(d){let f=d[0],b=d[1],x=d[2],y=d[3],u=d[4],p=[];for(let E=0,g=f.length;E<g;E++){let _=f[E],M=b[E],m=x[E],S=y[E],C=u[E];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let R=a._createAnimationTracks(_,M,m,S,C);if(R)for(let k=0;k<R.length;k++)p.push(R[k])}let v=new ss(s,void 0,p);return Da(v,i),v})}createNodeMesh(e){let t=this.json,a=this,i=t.nodes[e];return i.mesh===void 0?null:a.getDependency("mesh",i.mesh).then(function(s){let r=a._getNodeRef(a.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let c=0,h=i.weights.length;c<h;c++)o.morphTargetInfluences[c]=i.weights[c]}),r})}loadNode(e){let t=this.json,a=this,i=t.nodes[e],s=a._loadNodeShallow(e),r=[],o=i.children||[];for(let h=0,l=o.length;h<l;h++)r.push(a.getDependency("node",o[h]));let c=i.skin===void 0?Promise.resolve(null):a.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),c]).then(function(h){let l=h[0],d=h[1],f=h[2];f!==null&&l.traverse(function(b){b.isSkinnedMesh&&b.bind(f,Mx)});for(let b=0,x=d.length;b<x;b++)l.add(d[b]);if(l.userData.pivot!==void 0&&d.length>0){let b=l.userData.pivot,x=d[0];l.pivot=new U().fromArray(b),l.position.x-=b[0],l.position.y-=b[1],l.position.z-=b[2],x.position.set(0,0,0),delete l.userData.pivot}return l})}_loadNodeShallow(e){let t=this.json,a=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(h){return i._getNodeRef(i.cameraCache,s.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){o.push(h)}),this.nodeCache[e]=Promise.all(o).then(function(h){let l;if(s.isBone===!0?l=new li:h.length>1?l=new zt:h.length===1?l=h[0]:l=new rt,l!==h[0])for(let d=0,f=h.length;d<f;d++)l.add(h[d]);if(s.name&&(l.userData.name=s.name,l.name=r),Da(l,s),s.extensions&&zn(a,l,s),s.matrix!==void 0){let d=new Oe;d.fromArray(s.matrix),l.applyMatrix4(d)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);if(!i.associations.has(l))i.associations.set(l,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let d=i.associations.get(l);i.associations.set(l,{...d})}return i.associations.get(l).nodes=e,l}),this.nodeCache[e]}loadScene(e){let t=this.extensions,a=this.json.scenes[e],i=this,s=new zt;a.name&&(s.name=i.createUniqueName(a.name)),Da(s,a),a.extensions&&zn(t,s,a);let r=a.nodes||[],o=[];for(let c=0,h=r.length;c<h;c++)o.push(i.getDependency("node",r[c]));return Promise.all(o).then(function(c){for(let l=0,d=c.length;l<d;l++){let f=c[l];f.parent!==null?s.add($d(f)):s.add(f)}let h=l=>{let d=new Map;for(let[f,b]of i.associations)(f instanceof Jt||f instanceof Tt)&&d.set(f,b);return l.traverse(f=>{let b=i.associations.get(f);b!=null&&d.set(f,b)}),d};return i.associations=h(s),s})}_createAnimationTracks(e,t,a,i,s){let r=[],o=e.name?e.name:e.uuid,c=[];function h(b){b.morphTargetInfluences&&c.push(b.name?b.name:b.uuid)}xn[s.path]===xn.weights?(h(e),e.isGroup&&e.children.forEach(h)):c.push(o);let l;switch(xn[s.path]){case xn.weights:l=Ja;break;case xn.rotation:l=Ya;break;case xn.translation:case xn.scale:l=un;break;default:a.itemSize===1?l=Ja:l=un;break}let d=i.interpolation!==void 0?mx[i.interpolation]:Rn,f=this._getArrayFromAccessor(a);for(let b=0,x=c.length;b<x;b++){let y=new l(c[b]+"."+xn[s.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),r.push(y)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let a=Ch(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*a;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){let i=this instanceof Ya?Rh:wo;return new i(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Sx(n,e,t){let a=e.attributes,i=new na;if(a.POSITION!==void 0){let o=t.json.accessors[a.POSITION],c=o.min,h=o.max;if(c!==void 0&&h!==void 0){if(i.set(new U(c[0],c[1],c[2]),new U(h[0],h[1],h[2])),o.normalized){let l=Ch(Ri[o.componentType]);i.min.multiplyScalar(l),i.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new U,c=new U;for(let h=0,l=s.length;h<l;h++){let d=s[h];if(d.POSITION!==void 0){let f=t.json.accessors[d.POSITION],b=f.min,x=f.max;if(b!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(b[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(b[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(b[2]),Math.abs(x[2]))),f.normalized){let y=Ch(Ri[f.componentType]);c.multiplyScalar(y)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}n.boundingBox=i;let r=new qt;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,n.boundingSphere=r}function sf(n,e,t){let a=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(c){n.setAttribute(o,c)})}for(let r in a){let o=Ih[r]||r.toLowerCase();o in n.attributes||i.push(s(a[r],o))}if(e.indices!==void 0&&!n.index){let r=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});i.push(r)}return je.workingColorSpace!==jt&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),Da(n,e),Sx(n,e,t),Promise.all(i).then(function(){return e.targets!==void 0?xx(n,e.targets,t):n})}var zv=(function(){var n="b9H79Tebbbe9ok9Geueu9Geub9Gbb9Gruuuuuuueu9Gvuuuuueu9Gduueu9Gluuuueu9Gvuuuuub9Gouuuuuub9Gluuuub9GiuuueuiE8AdilveoveovrrwrrrDDoDrbqqbelve9Weiiviebeoweuecj:Gdkr:PlCo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8F9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWV9mW4W2be8A9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWVbd8F9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWV9c9V919U9KbiE9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949wWV79P9V9UblY9TW79O9V9Wt9FW9U9J9V9KW69U9KW949c919M9MWVbv8E9TW79O9V9Wt9FW9U9J9V9KW69U9KW949c919M9MWV9c9V919U9Kbo8A9TW79O9V9Wt9FW9U9J9V9KW69U9KW949wWV79P9V9UbrE9TW79O9V9Wt9FW9U9J9V9KW69U9KW949tWG91W9U9JWbwa9TW79O9V9Wt9FW9U9J9V9KW69U9KW949tWG91W9U9JW9c9V919U9KbDL9TW79O9V9Wt9FW9U9J9V9KWS9P2tWV9p9JtbqK9TW79O9V9Wt9FW9U9J9V9KWS9P2tWV9r919HtbkL9TW79O9V9Wt9FW9U9J9V9KWS9P2tWVT949WbxY9TW79O9V9Wt9FW9U9J9V9KWS9P2tWVJ9V29VVbmE9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94J9H9J9OWbza9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94J9H9J9OW9ttV9P9WbHa9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9WbOK9TW79O9V9Wt9F79W9Ht9P9H29t9VVt9sW9T9H9WbAl79IV9RbXDwebcekdKYq:Nf8Adbk;wadhud9:8Jjjjjbc;qw9Rgr8KjjjjbcbhwdnaeTmbabcbyd;i:I:cjbaoaocb9iEgDc:GeV86bbarc;adfcbcjdz:xjjjb8AdnaiTmbarc;adfadalz:wjjjb8Akarc;abfalfcbcbcjdal9RalcFe0Ez:xjjjb8Aarc;abfarc;adfalz:wjjjb8Aar9cb83iUar9cb83i8War9cb83iyar9cb83iaar9cb83iKar9cb83izar9cb83iwar9cb83ibcj;abal9Uc;WFbGcjdalca0Ehqdnaicd6mbavcd9imbaDTmbadcefhkaqci2gxal2hmarc;alfclfhParc;qlfceVhsarc;qofclVhzcbhHincdhOcbhAdnavci6mbar9cb83i;Ooar9cb83i;Goar9cb83i;yoar9cb83i;qoadaHfgoybbhCcbhXincbhwcbhQdninaoalfhLaoybbgKaC7aQVhQawcP0meaLhoaKhCawcefgwaXfai6mbkkcbhCarc;qofhwincwhYcwh8AdnaQaC93gocFeGgEcs0mbclh8AaEci0mbcdcbaEEh8Akdnaocw4cFeGgEcs0mbclhYaEci0mbcdcbaEEhYkaYa8AfhEawydbh3cwhYcwh8Adnaocz4cFeGg5cs0mbclh8Aa5ci0mbcdcba5Eh8AkaEa3fhEdnaocFFFFb0mbclhYaocFFF8F0mbcbcdaocjjjw6EhYkawaEa8AfaYfBdbawclfhwaCcefgCcw9hmbkaLhoaKhCaXczfgXai6mbkcbhocehwazhQinawaoaQydbarc;qofaocdtfydb6EhoaQclfhQawcefgwcw9hmbkaoclthAcihOkcbhEarc;qlfcbcjdz:xjjjb8AarcbBd;ilar9cb83i;aladh8Eaqh8Fakh3inarc;qlfadaEaEcb9h9Ral2falz:wjjjb8Aaia8Faia8F6EhadnaqaiaE9RaEaqfai6EgKcsfc9WGgoaK9nmbarc;qofaKfcbaoaK9Rz:xjjjb8AkadaEal2fhhcbhginagaAVcl4hXarc;alfagcdtfh8JaHh8Kcbh8Lina8LaHfhwdndndndndndndnagPlbedibkaKTmvahawfhoarc;qlfawfRbbhQarc;qofhwaahCinawaoRbbgYaQ9RgQcetaQcKtc8F91786bbawcefhwaoalfhoaYhQaEaCcufgC9hmbxvkkaKTmla8Kc9:Ghoa8LcitcwGh8Aarc;qlfawceVfRbbcwtarc;qlfawc9:GfRbbVhQarc;qofhwaahCinawa3aofRbbcwta8EaofRbbVgYaQ9RgQcetaQcztc8F917cFFiGa8A486bbaoalfhoawcefhwaYhQaEaCcufgC9hmbxlkkasa8Kc98GgQfhoa3aQfhYarc;qlfawc98GgQfRbbhCcwhwinaoRbbawtaCVhCaocefhoawcwfgwca9hmbxdkkaKTmdxekaKTmea8Lcith5ahaQfh8AcbhLina8ARbbhQcwhoaYhwinawRbbaotaQVhQawcefhwaocwfgoca9hmbkarc;qofaLfaQaC7aX93a5486bbaYalfhYa8Aalfh8AaQhCaLcefgLaK9hmbkka8Jydbh8AcbhLarc;qofhoincdhQcbhwinaQaoawfRbbcb9hfhQawcefgwcz9hmbkclhCcbhwinaCaoawfRbbcd0fhCawcefgwcz9hmbkcwhYcbhwinaYaoawfRbbcP0fhYawcefgwcz9hmbkaQaCaQaC6EgwaYawaY6Egwczawcz6Ea8Afh8AaoczfhoaLczfgLaK6mbka8Ja8ABdbka8Kcefh8Ka8Lcefg8Lcl9hmbkagcefggaO9hmbka8Eamfh8Ea8Faxfh8Fa3amfh3aEaxfgEai6mbkcbhocehwaPhQinawaoaQydbarc;alfaocdtfydb6EhoaQclfhQaOawcefgw9hmbkaraHcd4faAcdVaoaocdSE86bbaHclfgHal6mbkkabaefhgabcefhoalcd4g8McbaDEhkadcefh8Narc;abfceVhecbhmdndninaiam9nmearc;qofcbcjdz:xjjjb8Aagao9Rak6mdadamal2gwfhxcbhHa8Nawfhzaocbakz:xjjjbg8Fakfh3aqaiam9Ramaqfai6Egscsfgocl4cifcd4hOaoc9WGg8JThPindndndndndndndndndndnaDTmbaraHcd4fRbbgQciGPlbedlbkasTmdaxaHfhoarc;abfaHfRbbhQarc;qofhwashCinawaoRbbgYaQ9RgQcetaQcKtc8F91786bbawcefhwaoalfhoaYhQaCcufgCmbxikkasTmiaHcitcwGh8Aarc;abfaHceVfRbbcwtarc;abfaHc9:GgofRbbVhQaxaofhoarc;qofhwashCinawao8VbbgYaQ9RgQcetaQcztc8F917cFFiGa8A486bbawcefhwaoalfhoaYhQaCcufgCmbxikkaeaHc98Gg8Afhoaza8AfhYarc;abfa8AfRbbhCcwhwinaoRbbawtaCVhCaocefhoawcwfgwca9hmbkasTmdaQcl4hKaHcitcKGhEaxa8Afh8AcbhLina8ARbbhQcwhoaYhwinawRbbaotaQVhQawcefhwaocwfgoca9hmbkarc;qofaLfaQaC7aK93aE486bbaYalfhYa8Aalfh8AaQhCaLcefgLas9hmbkkaDmbcbhoxlka8JTmbcbhodninarc;qofaofgwcwf8Pibaw8Pib:e9qTmeaoczfgoa8J9pmdxbkkdnavmbcehoxikcbh8AaOhLaOhKinarc;qofa8Afgocwf8Pibhyao8Pibh8PcdhQcbhwinaQaoawfRbbcb9hfhQawcefgwcz9hmbkclhCcbhwinaCaoawfRbbcd0fhCawcefgwcz9hmbkcwhYcbhwinaYaoawfRbbcP0fhYawcefgwcz9hmbkaQaCaQaC6EgoaYaoaY6Egoczaocz6EaKfhKaocucbaya8P:e9cb9sEgwaoaw6EaLfhLa8Aczfg8Aa8J9pmdxbkka8FaHcd4fgoaoRbbcdaHcetcoGtV86bbxikdnaLas6mbaKas6mba8FaHcd4fgoaoRbbciaHcetcoGtV86bbaga39Ras6mra3arc;qofasz:wjjjbasfh3xikaLaK9phoka8FaHcd4fgwawRbbaoaHcetcoGtV86bbkaga39RaO6mla3cbaOz:xjjjbgaaOfhKdndna8JmbaPhoxekdnagaK9RcK9pmbaPhoxekaocdtc:q:G:cjbfcj:G:cjbaDEg3ydxghcetc;:FFFeGhAcuhEcuahtcu7cFeGh8Ecbh8Karc;qofhQinarc;qofa8KfhXczh8AdndndnahPDbeeeeeeedekcucbaXcwf8PibaX8Pib:e9cb9sEh8AxekcbhoaAh8Aina8Aa8EaQaofRbb9nfh8Aaocefgocz9hmbkkcih5cbhYinczhwdndndna3aYcdtfydbgLPDbeeeeeeedekcucbaXcwf8PibaX8Pib:e9cb9sEhwxekaLcetc;:FFFeGhwcuaLtcu7cFeGhCcbhoinawaCaQaofRbb9nfhwaocefgocz9hmbkkdndnawa8A6mbaLaE9hmeawa8A9hmea3a5cdtfydbcwSmekaYh5awh8AkaYcefgYci9hmbkaaa8Kco4fgoaoRbba5a8Kci4coGtV86bbdndndna3a5cdtfydbgEPDdbbbbbbbebkdncwaE9Tg5TmbcuaEtcu7hwdndnaEceSmbcbh8LaQhXinaXhoa5hYcbhCinaoRbbg8AawcFeGgLa8AaL6EaCaEtVhCaocefhoaYcufgYmbkaKaC86bbaXa5fhXaKcefhKa8La5fg8Lcz6mbxdkkcbh8LaQhXinaXhoa5hYcbhCinaoRbbg8AawcFeGgLa8AaL6EaCcetVhCaocefhoaYcufgYmbkaKaC:T9cFe:d9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:9ca188bbaXa5fhXaKcefhKa8La5fg8Lcz6mbkkcbhoinaKaQaofRbbgC86bbaKaCawcFeG9pfhKaocefgocz9hmbxikkdnaEceSmbinaKcb86bbaKcefhKxbkkinaKcb86bbaKcefhKxbkkaKaX8Pbw83bwaKaX8Pbb83bbaKczfhKka8Kczfg8Ka8J9pgomeaQczfhQagaK9RcK9pmbkkaoTmlaKh3aKTmlkaHcefgHal9hmbkarc;abfaxascufal2falz:wjjjb8Aasamfhma3hoa3mbkcbhwxdkdnagao9RakalfgwcKcaaDEgQawaQ0EgC9pmbcbhwxdkdnawaQ9pmbaocbaCaw9Rgwz:xjjjbawfhokaoarc;adfalz:wjjjbalfhodnaDTmbaoara8Mz:wjjjba8Mfhokaoab9Rhwxekcbhwkarc;qwf8Kjjjjbawk5babaeadaialcdcbyd;i:I:cjbz:bjjjbk9reduaecd4gdaefgicaaica0Ecj;abae9Uc;WFbGcjdaeca0Egicl4cifcd4aifae2adfabaifcufai9U2fcefkmbcbabBd;i:I:cjbk;HPeLu8Jjjjjbc;ae9Rgl8Kjjjjbcbhvdnaeaici9UgocHf6mbabcbyd;m:I:cjbgrc;GeV86bbalc;abfcFecjez:xjjjb8Aal9cu83iUal9cu83i8Wal9cu83iyal9cu83iaal9cu83iKal9cu83izal9cu83iwal9cu83ibabaefc9WfhwabcefgDaofhednaiTmbcmcsarcb9kgqEhkcbhxcbhmcbhPcbhscbhzindnaeaw9nmbcbhvxikazcufhvadaPcdtfgHydbhOaHcwfydbhAaHclfydbhCcbhXdndndninalc;abfavcsGcitfgoydlhQdndndnaoydbgoaO9hmbaQaCSmekdnaoaC9hmbaQaA9hmbaXcefhXxekaoaA9hmeaQaO9hmeaXcdfhXkaXc870mdascufhvaHaXcdtgAcxGgoyd:4:G:cjbcdtfydbhQaHaoyd:0:G:cjbcdtfydbhCaHaoyd:W:G:cjbcdtfydbhOcbhodnindnalavcsGcdtfydbaQ9hmbaohXxdkcuhXavcufhvaocefgocz9hmbkkaxaQaxSgvaXce9iaXak9oVgoGfhxdndndncbcsavEaXaoEgvcs9hmbarce9imbaQaQamaQcefamSgvEgmcefSmecmcsavEhvkaDavaAc;WeGV86bbavcs9hmeaQam9Rgvcetavc8F917hvinaecbcjeavcje6EavcFbGV86bbaecefheavcr4gvmbkaQhmxvkcPhvaDaAcPV86bbaQhmkavTmiavak9omicdhocehXazhAxlkavcufhvaXclfgXc;ab9hmbkkdnaHcecdcbaAaxSEaCaxSEcdtgvyd:W:G:cjbcdtfydbgOTaHavyd:0:G:cjbcdtfydbgCceSGaHavyd:4:G:cjbcdtfydbgQcdSGaxcb9hGaqGgLce9hmbal9cu83iUal9cu83i8Wal9cu83iyal9cu83iaal9cu83iKal9cu83izal9cu83iwal9cu83ibcbhxkcbhXascufgvhodnindnalaocsGcdtfydbaC9hmbaXhAxdkcuhAaocufhoaXcefgXcz9hmbkkcbhodnindnalavcsGcdtfydbaQ9hmbaohXxdkcuhXavcufhvaocefgocz9hmbkkaxaOaxSgKfhHdndnaAcm0mbaAcefhAxekcbcsaCaHSgvEhAaHavfhHkdndnaXcm0mbaXcefhXxekcbcsaQaHSgvEhXaHavfhHkc9:cuaKEhYcbhvaXaAcltVg8AcFeGhodndndninavc;q:G:cjbfRbbaoSmeavcefgvcz9hmbxdkkaLaOax9havcm0VVmbaDavc;WeV86bbxekaDaY86bbaea8A86bbaecefhekdnaKmbaOam9Rgvcetavc8F917hvinaecbcjeavcje6EavcFbGV86bbaecefheavcr4gvmbkaOhmkdnaAcs9hmbaCam9Rgvcetavc8F917hvinaecbcjeavcje6EavcFbGV86bbaecefheavcr4gvmbkaChmkdnaXcs9hmbaQam9Rgvcetavc8F917hvinaecbcjeavcje6EavcFbGV86bbaecefheavcr4gvmbkaQhmkalascdtfaOBdbascefcsGhvdndnaAPzbeeeeeeeeeeeeeebekalavcdtfaCBdbascdfcsGhvkdndnaXPzbeeeeeeeeeeeeeebekalavcdtfaQBdbavcefcsGhvkcihoalc;abfazcitfgXaOBdlaXaCBdbazcefcsGhAcdhXavhsaHhxxekcdhoalascdtfaQBdbcehXascefcsGhsazhAkalc;abfaAcitfgvaCBdlavaQBdbalc;abfazaXfcsGcitfgvaQBdlavaOBdbaDcefhDazaofcsGhzaPcifgPai6mbkkdnaeaw9nmbcbhvxekcbhvinaeavfavc;q:G:cjbfRbb86bbavcefgvcz9hmbkaeab9Ravfhvkalc;aef8KjjjjbavkZeeucbhddninadcefgdc8F0meaeceadt0mbkkadcrfcFeGcr9Uci2cdfabci9U2cHfkmbcbabBd;m:I:cjbk:zderu8Jjjjjbcz9Rhlcbhvdnaeaicvf6mbabcbRb;m:I:cjbc;qeV86bbal9cb83iwabcefhvabaefc98fhodnaiTmbcbhecbhrcbhwindnavao6mbcbskadawcdtfydbgDalcwfaraDae9Rgeaec8F91ge7ae9Rc507grcdtfgqydb9Rgec8E91c9:Gaecdt7arVheinavcbcjeaecje6EaecFbGV86bbavcefhvaecr4gembkaqaDBdbaDheawcefgwai9hmbkkdnavao9nmbcbskavcbBbbavab9RclfhvkavkBeeucbhddninadcefgdc8F0meaeceadt0mbkkabadcwfcFeGcr9U2cvfk:dvli99dui99ludnaeTmbcuadcetcuftcu7:Zhvdndncuaicuftcu7:ZgoJbbbZMgr:lJbbb9p9DTmbar:Ohwxekcjjjj94hwkcbhicbhDinalclfIdbgrJbbbbJbbjZalIdbgq:lar:lMalcwfIdbgk:lMgr:varJbbbb9BEgrNhxaqarNhralcxfIdbhqdndnakJbbbb9GTmbaxhkxekJbbjZar:l:tgkak:maxJbbbb9GEhkJbbjZax:l:tgxax:marJbbbb9GEhrkdndnaqJbbj:;aqJbbj:;9GEgxJbbjZaxJbbjZ9FEavNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohmxekcjjjj94hmkdndnakJbbj:;akJbbj:;9GEgqJbbjZaqJbbjZ9FEaoNJbbbZJbbb:;akJbbbb9GEMgq:lJbbb9p9DTmbaq:OhPxekcjjjj94hPkdndnarJbbj:;arJbbj:;9GEgqJbbjZaqJbbjZ9FEaoNJbbbZJbbb:;arJbbbb9GEMgr:lJbbb9p9DTmbar:Ohsxekcjjjj94hskdndnadcl9hmbabaDfgzas86bbazcifam86bbazcdfaw86bbazcefaP86bbxekabaifgzas87ebazcofam87ebazclfaw87ebazcdfaP87ebkaicwfhiaDclfhDalczfhlaecufgembkkk;hlld99eud99eudnaeTmbdndncuaicuftcu7:ZgvJbbbZMgo:lJbbb9p9DTmbao:Ohixekcjjjj94hikaic;8FiGhrinabcofcicdalclfIdb:lalIdb:l9EgialcwfIdb:lalaicdtfIdb:l9EEgialcxfIdb:lalaicdtfIdb:l9EEgiarV87ebdndnJbbj:;JbbjZalaicdtfIdbJbbbb9DEgoalaicd7cdtfIdbJ;Zl:1ZNNgwJbbj:;awJbbj:;9GEgDJbbjZaDJbbjZ9FEavNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohqxekcjjjj94hqkabcdfaq87ebdndnalaicefciGcdtfIdbJ;Zl:1ZNaoNgwJbbj:;awJbbj:;9GEgDJbbjZaDJbbjZ9FEavNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohqxekcjjjj94hqkabaq87ebdndnaoalaicufciGcdtfIdbJ;Zl:1ZNNgoJbbj:;aoJbbj:;9GEgwJbbjZawJbbjZ9FEavNJbbbZJbbb:;aoJbbbb9GEMgo:lJbbb9p9DTmbao:Ohixekcjjjj94hikabclfai87ebabcwfhbalczfhlaecufgembkkk;uvdDue998Jjjjjbcjd9Rgo8Kjjjjbdndndnadcd4grTmbc:CucbavEhwaohdarhDinadawBdbadclfhdaDcufgDmbkavcd9hmbaeTmbarcdthqcbhkalhxinaohdaxhDarhwinadadydbgmaDydbcL4cFeGc:cufgPamaP9kEBdbaDclfhDadclfhdawcufgwmbkaxaqfhxakcefgkae9hmbxdkkaeTmekarcdthxavce9hhqcbhkindndndnaqmbarTmdc:CuhwalhdarhDinawadydbcL4cFeGc:cufgmawam9kEhwadclfhdaDcufgDmbxdkkdndndndnavPleddbdkarTmlaohdalhDarhwinadcbaDydbcL4cFeGgmc:cufgPaPam0EBdbadclfhdaDclfhDawcufgwmbxikkarTmicbhdarhDindnaladfIdbgsJbbbb9Bmbaoadfas:8cL4cFeGgwc8Aawc8A0Ec:cufBdbkadclfhdaDcufgDmbxdkkarTmdkc:CuhwkcbhdarhminawhDdnavceSmbaoadfydbhDkdndnaladfIdbgscjjj;8iaDai9RcefgPcLt9R::NJbbbZJbbb:;asJbbbb9GEMgs:lJbbb9p9DTmbas:OhDxekcjjjj94hDkabadfaDcFFFiaDcFFFi9iEcFFFrGaPcKtVBdbadclfhdamcufgmmbkkabaxfhbalaxfhlakcefgkae9hmbkkaocjdf8Kjjjjbk:Olveue99iue99iudnaeTmbceaicufthvcuaitcu7:Zhocbhradcl9hhwcbhDindndnalcwfIdbgqJbbbbaqJbbbb9GEgqJbbjZaqJbbjZ9FEaoNJbbbZMgq:lJbbb9p9DTmbaq:Ohixekcjjjj94hikdndnalIdbgqJbbbbaqJbbbb9GEgqJbbjZaqJbbjZ9FEaoNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkadai9Rcd9TgkaifhidndnalclfIdbgqJbbbbaqJbbbb9GEgqJbbjZaqJbbjZ9FEaoNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkadai9Rcd9ThddndnalcxfIdbgqJbbbbaqJbbbb9GEgqJbbjZaqJbbjZ9FEaoNJbbbZMgq:lJbbb9p9DTmbaq:Ohxxekcjjjj94hxkadaifhiaxce91avVhxdndnawmbabaDfgmai86bbamcifax86bbamcdfad86bbamcefak86bbxekabarfgmai87ebamcofax87ebamclfad87ebamcdfak87ebkarcwfhraDclfhDalczfhlaecufgembkkk;mqdQui998Jjjjjbc:qd9Rgv8Kjjjjbavc:Sefcbc;Kbz:xjjjb8AdnadTmbaiTmbdndnabaeSmbaehoxekavcuadcdtgradcFFFFi0Ecbyd;q:I:cjbHjjjjbbgoBd:SeavceBd:mdaoaearz:wjjjb8AkavcbBd:Oeav9cb83i:Geavc:Gefaoadaiavc:Sefz:pjjjbavyd:Gehwadci9UgDcbyd;q:I:cjbHjjjjbbheavc:Sefavyd:mdgqcdtfaeBdbavaqcefgrBd:mdaecbaDz:xjjjbhkavc:SefarcdtfcuaicdtaicFFFFi0Ecbyd;q:I:cjbHjjjjbbgxBdbavaqcdfgmBd:mdalc;ebfhPawheaxhrinaralIdbaPaeydbgscwascw6EcdtfIdbMUdbaeclfhearclfhraicufgimbkavc:SefamcdtfcuaDcdtadcFFFF970Ecbyd;q:I:cjbHjjjjbbgmBdbdnadci6mbaoheamhraDhiinaraxaeydbcdtfIdbaxaeclfydbcdtfIdbMaxaecwfydbcdtfIdbMUdbaecxfhearclfhraicufgimbkkaqcifhzalc;ebfhHavc;qbfhOavheavyd:KehAavyd:OehCcbhscbhrcbhXcehQinaehLaoarcx2fgKydbhPaKclfydbhdabaXcx2fgecwfaKcwfydbgYBdbaeclfadBdbaeaPBdbakarfce86bbaOaYBdwaOadBdlaOaPBdbamarcdtfcbBdbcih8AdnasTmbaLhiinaOa8AcdtfaiydbgeBdba8AaeaY9haeaP9haead9hGGfh8AaiclfhiascufgsmbkkaXcefhXcbhsinaCaAaKascdtfydbcdtgifydbcdtfgYheawaifgdydbgPhidnaPTmbdninaeydbarSmeaeclfheaicufgiTmdxbkkaeaYaPcdtfc98fydbBdbadadydbcufBdbkascefgsci9hmbkdndndna8ATmbcuhrJbbbbhEcbhdavyd:KehYavyd:OehKindnawaOadcdtfydbcdtgsfydbgeTmbaxasfgiIdbh3aialcuadadcs0EcdtfclfIdbaHaecwaecw6EcdtfIdbMg5Udba5a3:th5aecdthiaKaYasfydbcdtfheinamaeydbgscdtfgPa5aPIdbMg3Udba3aEaEa39DgPEhEasaraPEhraeclfheaic98fgimbkkadcefgda8A9hmbkarcu9hmekaQaD9pmeindnakaQfRbbmbaQhrxdkaDaQcefgQ9hmbxdkka8Acza8Acz6EhsaOheaLhOarcu9hmekkazTmbaqcdtavc:Seffcwfheinaeydbcbyd;u:I:cjbH:bjjjbbaec98fheazcufgzmbkkavc:qdf8Kjjjjbk:0leoucuaicdtgvaicFFFFi0Egocbyd;q:I:cjbHjjjjbbhralalyd9GgwcdtfarBdbalawcefBd9GabarBdbaocbyd;q:I:cjbHjjjjbbhralalyd9GgocdtfarBdbalaocefBd9GabarBdlcuadcdtadcFFFFi0Ecbyd;q:I:cjbHjjjjbbhralalyd9GgocdtfarBdbalaocefBd9GabarBdwabydbcbavz:xjjjb8AabydbhraehladhvinaralydbcdtfgoaoydbcefBdbalclfhlavcufgvmbkcbhvabydlglhoarhwaihDinaoavBdbaoclfhoawydbavfhvawclfhwaDcufgDmbkadci9Uhqdnadcd9nmbabydwhocbhvinaecwfydbhwaeclfydbhDalaeydbcdtfgbabydbgbcefBdbaoabcdtfavBdbalaDcdtfgDaDydbgDcefBdbaoaDcdtfavBdbalawcdtfgwawydbgwcefBdbaoawcdtfavBdbaecxfheaqavcefgv9hmbkkinalalydbarydb9RBdbarclfhralclfhlaicufgimbkkQbabaeadaic;G:G:cjbz:ojjjbkQbabaeadaic;i:H:cjbz:ojjjbk9DeeuabcFeaicdtz:xjjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk:3vioud9:du8Jjjjjbc;Wa9Rgl8Kjjjjbcbhvalcxfcbc;Kbz:xjjjb8AalcuadcitgoadcFFFFe0Ecbyd;q:I:cjbHjjjjbbgrBdxalceBd2araeadaicezNjjjbalcuaoadcjjjjoGEcbyd;q:I:cjbHjjjjbbgwBdzadcdthednadTmbabhiinaiavBdbaiclfhiadavcefgv9hmbkkawaefhDalabBdwalawBdl9cbhqindnadTmbaq9cq9:hkarhvaDhiadheinaiav8Pibak1:NcFrG87ebavcwfhvaicdfhiaecufgembkkalclfaq:NceGcdtfydbhxalclfaq9ce98gq:NceGcdtfydbhmalc;Wbfcbcjaz:xjjjb8AaDhvadhidnadTmbinalc;Wbfav8VebcdtfgeaeydbcefBdbavcdfhvaicufgimbkkcbhvcbhiinalc;WbfavfgeydbhoaeaiBdbaoaifhiavclfgvcja9hmbkadhvdndnadTmbinalc;WbfaDamydbgicetf8VebcdtfgeaeydbgecefBdbaxaecdtfaiBdbamclfhmavcufgvmbkaq9cv9smdcbhvinabawydbcdtfavBdbawclfhwadavcefgv9hmbxdkkaq9cv9smekkcwhvcbhiinalcxfavfc98fydbcbyd;u:I:cjbH:bjjjbbaiceGheclhvcehiaeTmbkalc;Waf8Kjjjjbk:Awliuo99iud9:cbhv8Jjjjjbca9Rgocbyd:4:I:cjbBdKaocb8Pd:W:I:cjb83izaocbyd;e:I:cjbBdwaocb8Pd:8:I:cjb83ibaicd4hrdndnadmbJFFuFhwJFFuuhDJFFuuhqJFFuFhkJFFuuhxJFFuFhmxekarcdthPaehsincbhiinaoczfaifgzasaifIdbgwazIdbgDaDaw9EEUdbaoaifgzawazIdbgDaDaw9DEUdbaiclfgicx9hmbkasaPfhsavcefgvad9hmbkaoIdKhDaoIdwhwaoIdChqaoIdlhkaoIdzhxaoIdbhmkdnadTmbJbbbbJbFu9hJbbbbamax:tgmamJbbbb9DEgmakaq:tgkakam9DEgkawaD:tgwawak9DEgw:vawJbbbb9BEhwdnalmbarcdthoindndnaeclfIdbaq:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:S9cC:ghHdndnaeIdbax:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikaHai:S:ehHdndnaecwfIdbaD:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabaHai:T9cy:g:e83ibaeaofheabcwfhbadcufgdmbxdkkarcdthoindndnaeIdbax:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cv9:9c;j:KM;j:KM;j:Kd:dhOdndnaeclfIdbaq:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cq9:9cM;j:KM;j:KM;jl:daO:ehOdndnaecwfIdbaD:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabaOai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cC9:9c:KM;j:KM;j:KMD:d:e83ibaeaofheabcwfhbadcufgdmbkkk9teiucbcbyd;y:I:cjbgeabcifc98GfgbBd;y:I:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;y:I:cjbgeabcrfc94GfgbBd;y:I:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd;y:I:cjbge9Rcifc98GaefgbBd;y:I:cjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akkk;Sddbcj:Gdk;idbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbbbbbbbbbbbbbbbbebbbdbbbbbbbebbbbbbbbbbbbbbbb4:h9w9N94:P:gW:j9O:ye9Pbbbbbb:l29hZ;69:9kZ;N;76Z;rg97Z;z;o9xZ8J;B85Z;:;u9yZ;b;k9HZ:2;Z9DZ9e:l9mZ59A8KZ:r;T3Z:A:zYZ79OHZ;j4::8::Y:D9V8:bbbb9s:49:Z8R:hBZ9M9M;M8:L;z;o8:;8:PG89q;x:J878R:hQ8::M:B;e87bbbbbbjZbbjZbbjZ:E;V;N8::Y:DsZ9i;H;68:xd;R8:;h0838:;W:NoZbbbb:WV9O8:uf888:9i;H;68:9c9G;L89;n;m9m89;D8Ko8:bbbbf:8tZ9m836ZS:2AZL;zPZZ818EZ9e:lxZ;U98F8:819E;68:FFuuFFuuFFuuFFuFFFuFFFuFbc;i:IdkCebbbebbbebbbdbbb9G:rbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,a=WebAssembly.instantiate(i(n),{}).then(function(b){t=b.instance,t.exports.__wasm_call_ctors(),t.exports.meshopt_encodeVertexVersion(1),t.exports.meshopt_encodeIndexVersion(1)});function i(b){for(var x=new Uint8Array(b.length),y=0;y<b.length;++y){var u=b.charCodeAt(y);x[y]=u>96?u-97:u>64?u-39:u+4}for(var p=0,y=0;y<b.length;++y)x[p++]=x[y]<60?e[x[y]]:(x[y]-60)*64+x[++y];return x.buffer.slice(0,p)}function s(b){if(!b)throw new Error("Assertion failed")}function r(b){return new Uint8Array(b.buffer,b.byteOffset,b.byteLength)}function o(b,x,y,u){var p=t.exports.sbrk,v=p(x.length*4),E=p(y*4),g=new Uint8Array(t.exports.memory.buffer),_=r(x);g.set(_,v),u&&u(v,v,x.length,y);var M=b(E,v,x.length,y);g=new Uint8Array(t.exports.memory.buffer);var m=new Uint32Array(y);new Uint8Array(m.buffer).set(g.subarray(E,E+y*4)),_.set(g.subarray(v,v+x.length*4)),p(v-p(0));for(var S=0;S<x.length;++S)x[S]=m[x[S]];return[m,M]}function c(b,x,y,u){var p=t.exports.sbrk,v=p(y*4),E=p(y*u),g=new Uint8Array(t.exports.memory.buffer);g.set(r(x),E),b(v,E,y,u),g=new Uint8Array(t.exports.memory.buffer);var _=new Uint32Array(y);return new Uint8Array(_.buffer).set(g.subarray(v,v+y*4)),p(v-p(0)),_}function h(b,x,y,u,p,v,E){var g=t.exports.sbrk,_=g(x),M=g(u*p),m=new Uint8Array(t.exports.memory.buffer);m.set(r(y),M);var S=b(_,x,M,u,p,v,E),C=new Uint8Array(S);return C.set(m.subarray(_,_+S)),g(_-g(0)),C}function l(b){for(var x=0,y=0;y<b.length;++y){var u=b[y];x=x<u?u:x}return x}function d(b,x){if(s(x==2||x==4),x==4)return new Uint32Array(b.buffer,b.byteOffset,b.byteLength/4);var y=new Uint16Array(b.buffer,b.byteOffset,b.byteLength/2);return new Uint32Array(y)}function f(b,x,y,u,p,v,E){var g=t.exports.sbrk,_=g(y*u),M=g(y*v),m=new Uint8Array(t.exports.memory.buffer);m.set(r(x),M),b(_,y,u,p,M,E);var S=new Uint8Array(y*u);return S.set(m.subarray(_,_+y*u)),g(_-g(0)),S}return{ready:a,supported:!0,reorderMesh:function(b,x,y){s(b instanceof Uint32Array||b instanceof Int32Array),s(!x||b.length%3==0);var u=x?y?t.exports.meshopt_optimizeVertexCacheStrip:t.exports.meshopt_optimizeVertexCache:void 0;return o(t.exports.meshopt_optimizeVertexFetchRemap,b,l(b)+1,u)},reorderPoints:function(b,x){return s(b instanceof Float32Array),s(b.length%x==0),s(x>=3),c(t.exports.meshopt_spatialSortRemap,b,b.length/x,x*4)},encodeVertexBuffer:function(b,x,y){s(y>0&&y<=256),s(y%4==0);var u=t.exports.meshopt_encodeVertexBufferBound(x,y);return h(t.exports.meshopt_encodeVertexBuffer,u,b,x,y)},encodeVertexBufferLevel:function(b,x,y,u,p){s(y>0&&y<=256),s(y%4==0),s(u>=0&&u<=3),s(p===void 0||p==0||p==1);var v=t.exports.meshopt_encodeVertexBufferBound(x,y);return h(t.exports.meshopt_encodeVertexBufferLevel,v,b,x,y,u,p===void 0?-1:p)},encodeIndexBuffer:function(b,x,y){s(y==2||y==4),s(x%3==0);var u=d(b,y),p=t.exports.meshopt_encodeIndexBufferBound(x,l(u)+1);return h(t.exports.meshopt_encodeIndexBuffer,p,u,x,4)},encodeIndexSequence:function(b,x,y){s(y==2||y==4);var u=d(b,y),p=t.exports.meshopt_encodeIndexSequenceBound(x,l(u)+1);return h(t.exports.meshopt_encodeIndexSequence,p,u,x,4)},encodeGltfBuffer:function(b,x,y,u,p){var v={ATTRIBUTES:this.encodeVertexBufferLevel,TRIANGLES:this.encodeIndexBuffer,INDICES:this.encodeIndexSequence};return s(v[u]),v[u](b,x,y,2,p===void 0?0:p)},encodeFilterOct:function(b,x,y,u){return s(y==4||y==8),s(u>=2&&u<=16),f(t.exports.meshopt_encodeFilterOct,b,x,y,u,16)},encodeFilterQuat:function(b,x,y,u){return s(y==8),s(u>=4&&u<=16),f(t.exports.meshopt_encodeFilterQuat,b,x,y,u,16)},encodeFilterExp:function(b,x,y,u,p){s(y>0&&y%4==0),s(u>=1&&u<=24);var v={Separate:0,SharedVector:1,SharedComponent:2,Clamped:3};return s(!p||p in v),f(t.exports.meshopt_encodeFilterExp,b,x,y,u,y,p?v[p]:1)},encodeFilterColor:function(b,x,y,u){return s(y==4||y==8),s(u>=2&&u<=16),f(t.exports.meshopt_encodeFilterColor,b,x,y,u,16)}}})();var Nh=(function(){var n="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq;X8:kdbk:kYi5ud9:du8Jjjjjbcjq9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCaAcethXaxaDfhiaOaeaoaeao6E9RhQalcl4cifcd4hLazcjdfaAfhKcbhYabaOad2fg8AhEaHh3incbh5dnawTmbaxaYcd4fRbbh5kcbh8Eazcjdfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcjdfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcjdfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaL6mva8FaLfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasaYcd4fRbbgociGPlbedrbkaATmdazaYfh8Fazcjdfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeazaYfhaazcjdfhhcbhoceh8EaKh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaQaocefgofmbka8FaXfh8FcdhoaacdfhaahaXfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8EazaYfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaKhainazcjdfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3aYclfgYad6mbkaza8AaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcjqf8Kjjjjbaok:bsesu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhDaicefgiarfhqdndnaeci9pmbaqhexekcmcsawceSEhkcbhxcbhmaqhecbhlcbhoindndnaiRbbgrc;Ve0mbavc;abfaoarcu7gPcl4fcsGcitfgwydlhsawydbhzdndnarcsGgwak9pmbavalaPfcsGcdtfydbaxawEhraxawTgHfhxxekdnaeaD9nmbc9:hoxokdndnawcsSmbcehHamawcetfcWfhrxekaecefhrae8SbbgwcFeGhPdndnawcu9mmbarhexekaecvfheaPcFbGhPcrhwdninar8SbbgHcFbGawtaPVhPaHcu9kmearcefhrawcrfgwc8J9hmbxdkkarcefhekcehHaPce4cbaPceG9R7amfhrkarhmkavc;abfaocitfgwarBdbawasBdlavalcdtfarBdbavc;abfaocefcsGcitfgwazBdbawarBdlaocdfhoaHalfhldnadcd9hmbabar87elabas87edabaz87ebabcofhbxdkabarBdwabasBdlabazBdbabcxfhbxekdnarcpe0mbavalaDarcsGfRbbgwcl4gP9RcsGcdtfydbaxcefgsaPEhravalaw9RcsGcdtfydbasaPTgzfgsawcsGgPEhwaPThPdndnadcd9hmbabaw87elabar87edabax87ebcohHxekabawBdwabarBdlabaxBdbcxhHkavalcdtfaxBdbavc;abfaocitfgOarBdbaOaxBdlavalcefglcsGcdtfarBdbavc;abfaocefcsGcitfgOawBdbaOarBdlavalazfglcsGcdtfawBdbavc;abfaocdfcsGcitfgraxBdbarawBdlaocifhoabaHfhbalaPfhlasaPfhxxekdnaeaD9nmbc9:hoxlkaxcbaeRbbgwEgHarc;:eSgrfhsawcsGhOdndnawcl4gAmbascefhzxekashzavalaA9RcsGcdtfydbhskdndnaOmbazcefhxxekazhxavalaw9RcsGcdtfydbhzkdndnarTmbaecefhrxekaecdfhrae8SbegPcFeGhwdnaPcu9kmbaecofhHawcFbGhwcrhedninar8SbbgPcFbGaetawVhwaPcu9kmearcefhraecrfgec8J9hmbkaHhrxekarcefhrkawce4cbawceG9R7amfgmhHkdndnaAcsSmbarhwxekarcefhwar8SbbgecFeGhPdnaecu9kmbarcvfhsaPcFbGhPcrhedninaw8SbbgrcFbGaetaPVhParcu9kmeawcefhwaecrfgec8J9hmbkashwxekawcefhwkaPce4cbaPceG9R7amfgmhskdndnaOcsSmbawhexekawcefheaw8SbbgrcFeGhPdnarcu9kmbawcvfhzaPcFbGhPcrhrdninae8SbbgwcFbGartaPVhPawcu9kmeaecefhearcrfgrc8J9hmbkazhexekaecefhekaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabaz87elabas87edabaH87ebcohrxekabazBdwabasBdlabaHBdbcxhrkavc;abfaocitfgwasBdbawaHBdlavalcdtfaHBdbavc;abfaocefcsGcitfgwazBdbawasBdlavalcefglcsGcdtfasBdbavc;abfaocdfcsGcitfgwaHBdbawazBdlavalaATaAcsSVfglcsGcdtfazBdbalaOTaOcsSVfhlaocifhoabarfhbkaocsGhoalcsGhlaicefgiaq6mbkkcbc99aeaDSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:I9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:SBlEud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fgOavcjdfasaeaH9RaHasfae6EgAaAcsfgoc9WGgCSEhXaPaDfhQaocl4cifcd4hLavcj;cbfaCcetfhKavcj;cbfaCci2fhYavcj;cbfaCfh8AcbhEaoc;ab6h3incbh5dnawTmbaPaEcd4fRbbh5kcbh8Eavcj;cbfh8Findndndndna5a8Ecet4ciGgoc9:fPdebdkaxaQ9RaC6mwdnaCTmbavcj;cbfa8EaC2faQaC;8qbbkaQaAfhQxdkaCTmeavcj;cbfa8EaC2fcbaC;8kbxekaxaQ9RaL6moaoclVcbawEhraQaLfhocbhidna3mbaxao9Rc;Gb6mbcbhlina8FalfhidndndndndndnaQalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaiaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaiczfaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaicafaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsaap5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsaap5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaC0meaihlaxao9Rc;Fb0mbkkdnaiaC9pmbaici4hlinaxao9RcK6mwa8FaifhqdndndndndndnaQaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spkbbagaoclffa8JRb:q:W:cjbfhoxikaqaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spkbbagaocwffa8JRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbagaocdffa8JRb:q:W:cjbfhokalcdfhlaiczfgiaC6mbkkaohQaoTmoka8FaCfh8Fa8Ecefg8Ecl9hmbkdndndndnawTmbazaEcd4fRbbglciGPlbedwbkaCTmdaXaEfhlavaEfpbdbh8Kcbhoinalavcj;cbfaofpblbg8La8Aaofpblbg8MpmbzeHdOiAlCvXoQrLg8NaKaofpblbgyaYaofpblbg8PpmbzeHdOiAlCvXoQrLgIpmbezHdiOAlvCXorQLgacep9Taapxeeeeeeeeeeeeeeeeghp9op9Hp9rgaa8Kp9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8NaIpmwDKYqk8AExm35Ps8E8Fgacep9Taaahp9op9Hp9rgap9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8La8MpmwKDYq8AkEx3m5P8Es8Fg8Laya8PpmwKDYq8AkEx3m5P8Es8Fg8MpmbezHdiOAlvCXorQLgacep9Taaahp9op9Hp9rgap9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8La8MpmwDKYqk8AExm35Ps8E8Fgacep9Taaahp9op9Hp9rgap9Ughp9Abbbaladfglahaaaapmlvorlvorlvorlvorp9Ughp9AbbbaladfglahaaaapmwDqkwDqkwDqkwDqkp9Ughp9AbbbaladfglahaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9AbbbaladfhlaoczfgoaC6mbxikkaCTmeaXaEfhlavaEfpbdbh8Kcbhoinalavcj;cbfaofpblbg8La8Aaofpblbg8MpmbzeHdOiAlCvXoQrLg8NaKaofpblbgyaYaofpblbg8PpmbzeHdOiAlCvXoQrLgIpmbezHdiOAlvCXorQLgacep:neaapxebebebebebebebebghp9op:bep9rgaa8Kp:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8NaIpmwDKYqk8AExm35Ps8E8Fgacep:neaaahp9op:bep9rgap:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8La8MpmwKDYq8AkEx3m5P8Es8Fg8Laya8PpmwKDYq8AkEx3m5P8Es8Fg8MpmbezHdiOAlvCXorQLgacep:neaaahp9op:bep9rgap:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8La8MpmwDKYqk8AExm35Ps8E8Fgacep:neaaahp9op:bep9rgap:oeghp9Abbbaladfglahaaaapmlvorlvorlvorlvorp:oeghp9AbbbaladfglahaaaapmwDqkwDqkwDqkwDqkp:oeghp9AbbbaladfglahaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9AbbbaladfhlaoczfgoaC6mbxdkkaCTmbaXaEfhrcbhocbalcl4gl9Rc8FGhiavaEfpbdbhhinaravcj;cbfaofpblbg8Ka8Aaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaKaofpblbg8NaYaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLgaaip:Reaaalp:Tep9qgaahp9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ma8PpmwDKYqk8AExm35Ps8E8Fgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ka8LpmwDKYqk8AExm35Ps8E8Fgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9AbbbaradfhraoczfgoaC6mbkkaEclfgEad6mbkdnaXavcjdf9hmbaAad2goTmbaOavcjdfao;8qbbkdnammbavaXaAcufad2fad;8qbbkaAaHfhHc9:hoaQhPaQmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkpPesu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhDaicefgiarfhqdndnaeci9pmbaqhexekcmcsawceSEhkcbhxcbhmaqhecbhlcbhoindndnaiRbbgrc;Ve0mbavc;abfaoarcu7gPcl4fcsGcitfgwydlhsawydbhzdndnarcsGgwak9pmbavalaPfcsGcdtfydbaxawEhraxawTgHfhxxekdnaeaD9nmbc9:hoxokdndnawcsSmbcehHamawcetfcWfhrxekaecefhrae8SbbgwcFeGhPdndnawcu9mmbarhexekaecvfheaPcFbGhPcrhwdninar8SbbgHcFbGawtaPVhPaHcu9kmearcefhrawcrfgwc8J9hmbxdkkarcefhekcehHaPce4cbaPceG9R7amfhrkarhmkavc;abfaocitfgwarBdbawasBdlavalcdtfarBdbavc;abfaocefcsGcitfgwazBdbawarBdlaocdfhoaHalfhldnadcd9hmbabar87elabas87edabaz87ebabcofhbxdkabarBdwabasBdlabazBdbabcxfhbxekdnarcpe0mbavalaDarcsGfRbbgwcl4gP9RcsGcdtfydbaxcefgsaPEhravalaw9RcsGcdtfydbasaPTgzfgsawcsGgPEhwaPThPdndnadcd9hmbabaw87elabar87edabax87ebcohHxekabawBdwabarBdlabaxBdbcxhHkavalcdtfaxBdbavc;abfaocitfgOarBdbaOaxBdlavalcefglcsGcdtfarBdbavc;abfaocefcsGcitfgOawBdbaOarBdlavalazfglcsGcdtfawBdbavc;abfaocdfcsGcitfgraxBdbarawBdlaocifhoabaHfhbalaPfhlasaPfhxxekdnaeaD9nmbc9:hoxlkaxcbaeRbbgwEgHarc;:eSgrfhsawcsGhOdndnawcl4gAmbascefhzxekashzavalaA9RcsGcdtfydbhskdndnaOmbazcefhxxekazhxavalaw9RcsGcdtfydbhzkdndnarTmbaecefhrxekaecdfhrae8SbegPcFeGhwdnaPcu9kmbaecofhHawcFbGhwcrhedninar8SbbgPcFbGaetawVhwaPcu9kmearcefhraecrfgec8J9hmbkaHhrxekarcefhrkawce4cbawceG9R7amfgmhHkdndnaAcsSmbarhwxekarcefhwar8SbbgecFeGhPdnaecu9kmbarcvfhsaPcFbGhPcrhedninaw8SbbgrcFbGaetaPVhParcu9kmeawcefhwaecrfgec8J9hmbkashwxekawcefhwkaPce4cbaPceG9R7amfgmhskdndnaOcsSmbawhexekawcefheaw8SbbgrcFeGhPdnarcu9kmbawcvfhzaPcFbGhPcrhrdninae8SbbgwcFbGartaPVhPawcu9kmeaecefhearcrfgrc8J9hmbkazhexekaecefhekaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabaz87elabas87edabaH87ebcohrxekabazBdwabasBdlabaHBdbcxhrkavc;abfaocitfgwasBdbawaHBdlavalcdtfaHBdbavc;abfaocefcsGcitfgwazBdbawasBdlavalcefglcsGcdtfasBdbavc;abfaocdfcsGcitfgwaHBdbawazBdlavalaATaAcsSVfglcsGcdtfazBdbalaOTaOcsSVfhlaocifhoabarfhbkaocsGhoalcsGhlaicefgiaq6mbkkcbc99aeaDSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),a=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(n),s,r=WebAssembly.instantiate(i,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),E=0;E<p.length;++E){var g=p.charCodeAt(E);v[E]=g>96?g-97:g>64?g-39:g+4}for(var _=0,E=0;E<p.length;++E)v[_++]=v[E]<60?a[v[E]]:(v[E]-60)*64+v[++E];return v.buffer.slice(0,_)}function c(p,v,E,g,_,M,m){var S=p.exports.sbrk,C=g+3&-4,R=S(C*_),k=S(M.length),D=new Uint8Array(p.exports.memory.buffer);D.set(M,k);var F=v(R,g,_,k,M.length);if(F==0&&m&&m(R,C,_),E.set(D.subarray(R,R+g*_)),S(R-S(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var h={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},l={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],f=0;function b(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(E){var g=E.data;v.pending-=g.count,v.requests[g.id][g.action](g.value),delete v.requests[g.id]},v}function x(p){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+u.name+";"+c.toString()+u.toString(),E=new Blob([v],{type:"text/javascript"}),g=URL.createObjectURL(E),_=d.length;_<p;++_)d[_]=b(g);for(var _=p;_<d.length;++_)d[_].object.postMessage({});d.length=p,URL.revokeObjectURL(g)}function y(p,v,E,g,_){for(var M=d[0],m=1;m<d.length;++m)d[m].pending<M.pending&&(M=d[m]);return new Promise(function(S,C){var R=new Uint8Array(E),k=++f;M.pending+=p,M.requests[k]={resolve:S,reject:C},M.object.postMessage({id:k,count:p,size:v,source:R,mode:g,filter:_},[R.buffer])})}function u(p){var v=p.data;self.ready.then(function(E){if(!v.id)return self.close();try{var g=new Uint8Array(v.count*v.size);c(E,E.exports[v.mode],g,v.count,v.size,v.source,E.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:g},[g.buffer])}catch(_){self.postMessage({id:v.id,count:v.count,action:"reject",value:_})}})}return{ready:r,supported:!0,useWorkers:function(p){x(p)},decodeVertexBuffer:function(p,v,E,g,_){c(s,s.exports.meshopt_decodeVertexBuffer,p,v,E,g,s.exports[h[_]])},decodeIndexBuffer:function(p,v,E,g){c(s,s.exports.meshopt_decodeIndexBuffer,p,v,E,g)},decodeIndexSequence:function(p,v,E,g){c(s,s.exports.meshopt_decodeIndexSequence,p,v,E,g)},decodeGltfBuffer:function(p,v,E,g,_,M){c(s,s.exports[l[_]],p,v,E,g,s.exports[h[M]])},decodeGltfBufferAsync:function(p,v,E,g,_){return d.length>0?y(p,v,E,l[g],h[_]):r.then(function(){var M=new Uint8Array(p*v);return c(s,s.exports[l[g]],M,p,v,E,s.exports[h[_]]),M})}}})();var Gv=(function(){var n="b9H79Tebbbe;veC9Geueu9Geub9Gbb9Gsuuuuuuuuuuuu99uueu9Gvuuuuub9Gruuuuuuub9Gouuuuuue999Gvuuuuueu9Gzuuuuuuuuuuu99uuuub9Gquuuuuuu99uueu9GPuuuuuuuuuuu99uueu9Gquuuuuuuu99ueu9Gruuuuuu99eu9Gwuuuuuu99ueu9Giuuue999GDuuuuuuuuueu9Gkuuuuuuuu99uub9Gluuuueu9Gluuuub9Giuuueui3EdilvorlwDiqkrxmPszdHObAAbeAlve9Weiiviebeoweuecj:Gdkr:Sdmo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bbz9TW79O9V9Wt9F79P9T9W29P9M95bw8E9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9OcttV9P9I91tW7bD8A9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9O9v9W9K9HtWbqQ9TW79O9V9Wt9F79P9T9W29P9M959t29V9W9W95bkX9TW79O9V9Wt9F79P9T9W29P9M959qV919UWbmQ9TW79O9V9Wt9F79P9T9W29P9M959q9V9P9Ut7bPX9TW79O9V9Wt9F79P9T9W29P9M959t9J9H2WbsP9TW79O9V9Wt9FVW9TW79Obza9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9WbA59TW79O9V9Wt9F9NW9UWV9HtW9q9V79Pt9P9V9U9sW9T9H9WbCl79IV9RbXDwebcekdKYq:p:1dElbzOk:Q:tekYue99iuQ99eui99Due99xue9:w998Jjjjjbcj;sb9Rgs8Kjjjjbcbhzasc:Cefcbc;Kbz:xjjjb8AdnabaeSmbabaeadcdtz:wjjjb8AkdnamcdGTmbalcrfci4cbyd;y:L:cjbHjjjjbbhHasc:Cefasyd;8egecdtfaHBdbasaecefBd;8ecbhlcbhednadTmbabheadhOinaHaeydbci4fcb86bbaeclfheaOcufgOmbkcbhlabheadhOinaHaeydbgAci4fgCaCRbbgCceaAcrGgAtV86bbaCcu7aA4ceGalfhlaeclfheaOcufgOmbkcualcdtalcFFFFi0Ehekaecbyd;y:L:cjbHjjjjbbhzasc:Cefasyd;8egecdtfazBdbasaecefBd;8ealcd4alfhOcehHinaHgecethHaeaO6mbkcbhXcuaecdtgOaecFFFFi0Ecbyd;y:L:cjbHjjjjbbhHasc:Cefasyd;8egAcdtfaHBdbasaAcefBd;8eaHcFeaOz:xjjjbhQdnadTmbaecufhLcbhKindndnaQabaKcdtfgYydbgAc:v;t;h;Ev2aLGgOcdtfgCydbgHcuSmbceheinazaHcdtfydbaASmdaOaefhHaecefheaQaHaLGgOcdtfgCydbgHcu9hmbkkazaXcdtfaABdbaCaXBdbaXhHaXcefhXkaYaHBdbaKcefgKad9hmbkkaQcbyd;C:L:cjbH:bjjjbbasasyd;8ecufBd;8ekcbh8AcualcefgecdtaecFFFFi0Ecbyd;y:L:cjbHjjjjbbhKasc:Cefasyd;8egecdtfaKBdbasaKBdNeasaecefBd;8ecuadcitadcFFFFe0Ecbyd;y:L:cjbHjjjjbbhEasc:Cefasyd;8egecdtfaEBdbasaEBd:yeasaecefBd;8eascNefabadalcbz:cjjjbcualcdtgealcFFFFi0Eg3cbyd;y:L:cjbHjjjjbbhHasc:Cefasyd;8egOcdtfaHBdbasaOcefBd;8ea3cbyd;y:L:cjbHjjjjbbhXasc:Cefasyd;8egOcdtfaXBdbasaOcefBd;8eaHaXaialavazasc:Cefz:djjjbalcbyd;y:L:cjbHjjjjbbh5asc:Cefasyd;8egOcdtfa5BdbasaOcefBd;8ea3cbyd;y:L:cjbHjjjjbbhOasc:Cefasyd;8egAcdtfaOBdbasaAcefBd;8ea3cbyd;y:L:cjbHjjjjbbhAasc:Cefasyd;8egCcdtfaABdbasaCcefBd;8eaOcFeaez:xjjjbh8EaAcFeaez:xjjjbh8FdnalTmbindnaKa8AgAcefg8AcdtfydbgCaKaAcdtgefydbgOSmbaCaO9RhYaEaOcitfhaa8Faefhha8EaefhLcbhCindndnaaaCcitfydbgQaA9hmbaLaABdbahaABdbxekdnaKaQcdtggfgeclfydbgOaeydbgeSmbaOae9RhOaEaecitfheinaeydbaASmdaecwfheaOcufgOmbkka8FagfgeaAaQaeydbcuSEBdbaLaQaAaLydbcuSEBdbkaCcefgCaY9hmbkka8Aal9hmbkaHhOaXhAa8EhQa8FhCcbheindndnaeaOydbgL9hmbdnaeaAydbgL9hmbaQydbhLdnaCydbgYcu9hmbaLcu9hmba5aefcb86bbxikdnaYcuSmbaLcuSmbaeaYSmbaHaYcdtfydbaHaLcdtfydb9hmba5aefcd86bbxika5aefhadnaeaYSmbaeaLSmbaace86bbxikaacv86bbxdkdnaeaXaLcdtgYfydb9hmbdnaCydbgacuSmbaeaaSmbaQydbggcuSmbaeagSmba8FaYfydbghcuSmbahaLSmba8EaYfydbgYcuSmbaYaLSmbaHaacdtfydbgLaHaYcdtfydb9hmbaLaHagcdtfydbgYSmbaYaHahcdtfydb9hmba5aefcd86bbxika5aefcv86bbxdka5aefcv86bbxeka5aefa5aLfRbb86bbkaOclfhOaAclfhAaQclfhQaCclfhCalaecefge9hmbkdnamcaGTmbcbh8Jindndna5a8Jfg8KRbbg8Lc9:fPlbeebekdndndnaHa8Jcdtfydbgea8J9hmbcbhYcbh8MaqTmednazTmbcbh8Ma8JheinaqazaecdtgefydbfRbbce4a8MVceGh8MaXaefydbgea8J9hmbxikkcbh8Ma8JheinaqaefRbbce4a8MVceGh8MaXaecdtfydbgea8J9hmbxdkka5aefRbbhexeka8JheindnaKaecdtg8AfgeclfydbgOaeydbgeSmbaOae9RhgaEaecitfhhaHa8AfhacbhLinahaLcitfydbgQhednindnaKaecdtgCfgeclfydbgOaeydbgeSmbaOae9RhOaEaecitfheaaydbhAdninaHaeydbcdtfydbaASmeaecwfheaOcufgOTmdxbkkcbhexdkaXaCfydbgeaQ9hmbkcehekaYaeVhYaLcefgLag9hmbkkaXa8Afydbgea8J9hmbka8LclciaYceGEa8MEheka8Kae86bbka8Jcefg8Jal9hmbkkdnaqTmbdndnazTmbazheaHhOalhAindnaqaeydbfRbbceGTmba5aOydbfcv86bbkaeclfheaOclfhOaAcufgAmbxdkkaqheaHhOalhAindnaeRbbceGTmba5aOydbfcv86bbkaecefheaOclfhOaAcufgAmbkkaHhealhAa5hOindna5aeydbfRbbcv9hmbaOcv86bbkaeclfheaOcefhOaAcufgAmbkkamceGTmba5healhOindndnaeRbbcufPlbeebekaecv86bbkaecefheaOcufgOmbkkcbh8Ncualcx2alc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbh8Kasc:Cefasyd;8egecdtfa8KBdbasaecefBd;8eascbBd:qeas9cb83i1ea8Kaialavazasc1efz:ejjjbhydndnaDmbcbh8PcbhaxekcbhaawhecbhOindnaeIdbJbbbb9ETmbasaacdtfaOBdbaacefhakaeclfheaDaOcefgO9hmbkcuaaal2gecdtaecFFFFi0Ecbyd;y:L:cjbHjjjjbbh8Pasc:Cefasyd;8egecdtfa8PBdbasaecefBd;8ealTmbdnaambcbhaxekarcd4hgdnazTmbaacdthhcbhLa8PhYinaoazaLcdtfydbag2cdtfhQasheaYhOaahAinaOaQaeydbcdtgCfIdbawaCfIdbNUdbaeclfheaOclfhOaAcufgAmbkaYahfhYaLcefgLal9hmbxdkkaacdthhcbhLa8PhYinaoaLag2cdtfhQasheaYhOaahAinaOaQaeydbcdtgCfIdbawaCfIdbNUdbaeclfheaOclfhOaAcufgAmbkaYahfhYaLcefgLal9hmbkkcualc8S2gOalc;D;O;f8U0EgCcbyd;y:L:cjbHjjjjbbheasc:Cefasyd;8egAcdtfaeBdbasaAcefBd;8eaecbaOz:xjjjbhIcbh8RcbhgdnaaTmbcbh8NaCcbyd;y:L:cjbHjjjjbbhgasc:Cefasyd;8egecdtfagBdbasaecefBd;8eagcbaOz:xjjjb8Acuaaal2gecltgOaecFFFFb0Ecbyd;y:L:cjbHjjjjbbh8Rasc:Cefasyd;8egecdtfa8RBdbasaecefBd;8ea8RcbaOz:xjjjb8AamcjjjjdGTmbcualcltgealcFFFFb0Ecbyd;y:L:cjbHjjjjbbh8Nasc:Cefasyd;8egOcdtfa8NBdbasaOcefBd;8ea8Ncbaez:xjjjb8AkdnadTmbcbhQabhOina8KaOclfydbgLcx2fgeIdba8KaOydbgYcx2fgAIdbg8S:tgRa8KaOcwfydbghcx2fgCIdlaAIdlg8U:tg8VNaeIdla8U:tg8WaCIdba8S:tg8XN:tg8Ya8YNa8WaCIdwaAIdwg8Z:tg80NaeIdwa8Z:tg8Wa8VN:tg81a81Na8Wa8XNaRa80N:tg80a80NMMg8V:rhBa8Yh8Xa80h8Wa81hRdna8VJbbbb9EgATmba8YaB:vh8Xa80aB:vh8Wa81aB:vhRkaIaHaYcdtfydbgCc8S2fgeaRaB:rg8VaRNNg83aeIdbMUdbaea8Wa8Va8WNgUNg85aeIdlMUdlaea8Xa8Va8XNg86Ng87aeIdwMUdwaeaRaUNgUaeIdxMUdxaea86aRNg88aeIdzMUdzaea8Wa86Ng89aeIdCMUdCaeaRa8Va8Xa8ZNaRa8SNa8Ua8WNMM:mg8:Ng86NgRaeIdKMUdKaea8Wa86Ng8WaeId3MUd3aea8Xa86Ng8XaeIdaMUdaaea86a8:Ng86aeId8KMUd8Kaea8VaeIdyMUdyaIaHaLcdtfydbgLc8S2fgea83aeIdbMUdbaea85aeIdlMUdlaea87aeIdwMUdwaeaUaeIdxMUdxaea88aeIdzMUdzaea89aeIdCMUdCaeaRaeIdKMUdKaea8WaeId3MUd3aea8XaeIdaMUdaaea86aeId8KMUd8Kaea8VaeIdyMUdyaIaHahcdtfydbgYc8S2fgea83aeIdbMUdbaea85aeIdlMUdlaea87aeIdwMUdwaeaUaeIdxMUdxaea88aeIdzMUdzaea89aeIdCMUdCaeaRaeIdKMUdKaea8WaeId3MUd3aea8XaeIdaMUdaaea86aeId8KMUd8Kaea8VaeIdyMUdydna8NTmbdnaATmba8YaB:vh8Ya80aB:vh80a81aB:vh81ka8NaCcltfgeaBJbbbZNgRa80Ng8VaeIdlMUdlaeaRa8YNg8WaeIdwMUdwaeaRa81Ng8XaeIdbMUdbaeaRa8S:ma81Na8Ua80N:ta8Za8YN:tNgRaeIdxMUdxa8NaLcltfgea8VaeIdlMUdlaea8WaeIdwMUdwaea8XaeIdbMUdbaeaRaeIdxMUdxa8NaYcltfgea8VaeIdlMUdlaea8WaeIdwMUdwaea8XaeIdbMUdbaeaRaeIdxMUdxkaOcxfhOaQcifgQad6mbkkdnalTmbJq;x8J88J;n;m;m89J:v:;;w8ZamczGEamc;abGEh80cbhOaHhCazhQaIhea8KhAindnaOaCydb9hmbaOhLdnazTmbaQydbhLka80hRdnaqTmbJbbjZa80aqaLfRbbclGEhRkaecxfgLaLIdbJbbbbMUdbaeczfgLaLIdbJbbbbMUdbaecCfgLaLIdbJbbbbMUdbaeaRaecyfgLIdbg8YNgRaeIdbMUdbaeclfgYaRaYIdbMUdbaecwfgYaRaYIdbMUdbaecKfgYaYIdbaAIdbg8WaRN:tUdbaAcwfIdbh8Vaec3fgYaYIdbaRaAclfIdbg8XN:tUdbaecafgYaYIdbaRa8VN:tUdbaec8KfgYIdbh81aLa8YaRMUdbaYa81aRa8Va8VNa8Wa8WNa8Xa8XNMMNMUdbkaCclfhCaQclfhQaec8SfheaAcxfhAalaOcefgO9hmbkkdnadTmbcbh8AabhLinaba8AcdtfhYcbheindna5aLaefydbgCfRbbgOTmba5aYaec:G:G:cjbfydbcdtfydbgQfRbbcFeGgATmbdnaOclSghmbaOci6mbaAclSmbaAcd0mekdnaOcd0mba8EaCcdtfydbaQ9hmekdnaAcd0mba8FaQcdtfydbaC9hmekdndnahmbaAcl9hmekaOciSmeaAciSmekJbbbZJbbbZJbbacaAcdSEaOcdSEhUdna8KaYaec:K:G:cjbfydbcdtfydbcx2fgOIdwa8KaCcx2fgAIdwg86:tg8Sa8KaQcx2fghIdwa86:tg8Xa8XNahIdbaAIdbg8U:tg80a80NahIdlaAIdlg8Z:tg8Va8VNMMg81Na8Xa8Sa8XNaOIdba8U:tg83a80Na8VaOIdla8Z:tg85NMMg8WN:tg8Ya8YNa83a81Na80a8WN:tgRaRNa85a81Na8Va8WN:tg8Wa8WNMMgBJbbbb9ETmba8YaB:rgB:vh8Ya8WaB:vh8WaRaB:vhRkaUa81:rNgBa8Ya86NaRa8UNa8Za8WNMM:mg81Ng87a81Nh88a80a85Na8Va83N:tg81a81Na8Va8SNa8Xa85N:tg8Va8VNa8Xa83Na80a8SN:tg8Xa8XNMMg83:rh80a8Ya87Nh85a8Wa87Nh89aRa87Nh87a8WaBa8YNg8SNh8:a8SaRNhZaRaBa8WNgnNhca8Ya8SNh8Ya8WanNh8WaRaBaRNNh8Sdna83Jbbbb9ETmba81a80:vh81a8Xa80:vh8Xa8Va80:vh8VkaIaHaCcdtfydbc8S2fgOaOIdba8Sa8VaUa80:rNgRa8VNNMg80MUdbaOa8Wa8XaRa8XNg8SNMg83aOIdlMUdlaOa8Ya81aRa81Ng8WNMg8YaOIdwMUdwaOaca8Va8SNMg8SaOIdxMUdxaOaZa8Wa8VNMgUaOIdzMUdzaOa8:a8Xa8WNMg8WaOIdCMUdCaOa87a8VaRa81a86Na8Va8UNa8Za8XNMMg86:mNgRNMg8VaOIdKMUdKaOa89a8XaRNMg8XaOId3MUd3aOa85a81aRNMg81aOIdaMUdaaOa88a86aRN:tgRaOId8KMUd8KaOaBaOIdyMUdyaIaHaQcdtfydbc8S2fgOa80aOIdbMUdbaOa83aOIdlMUdlaOa8YaOIdwMUdwaOa8SaOIdxMUdxaOaUaOIdzMUdzaOa8WaOIdCMUdCaOa8VaOIdKMUdKaOa8XaOId3MUd3aOa81aOIdaMUdaaOaRaOId8KMUd8KaOaBaOIdyMUdykaeclfgecx9hmbkaLcxfhLa8Acifg8Aad6mbkkdnamcjeGTmbalTmbcbh9cindnaKa9cgecdtgOfydbghaKaecefg9ccdtfydbg8M9pmba8Kaecx2fhDaIaHaOfydbgCc8S2fh8AindnaHaEahcitfgeydbgLcdtfydbg8JaC0mbaeydlh8LcuhAaLheindnaKaecdtgYfgeclfydbgOaeydbgeSmbaOae9RhOaEaecitfheindnaHaeydbcdtfydbaC9hmbaAcu9hhQaLhAaQmbaeclfydbhAkaecwfheaOcufgOmbkkaXaYfydbgeaL9hmbkaAaLSmbaAcuSmba8KaLcx2fgeIdbaDIdbg81:tgRa8Ka8Lcx2fgOIdlaDIdlg80:tg8XNaeIdla80:tg8VaOIdba81:tg8YN:tg86a8KaAcx2fgAIdba81:tg8Za8VNaAIdla80:tg83aRN:tg8SNa8VaOIdwaDIdwgB:tg8UNaeIdwaB:tg8Wa8XN:tg85a83a8WNaAIdwaB:tg87a8VN:tgUNa8Wa8YNaRa8UN:tg88a87aRNa8Za8WN:tg89NMMa86a86Na85a85Na88a88NMM:rJ:A:z9z:;Na8Sa8SNaUaUNa89a89NMM:rN9Gmbdna8Ua8Wa8WNaRaRNa8Va8VNMMg8SNa8Wa8Ua8WNa8YaRNa8Va8XNMMg86N:tg8Ua8UNa8Ya8SNaRa86N:tg8Ya8YNa8Xa8SNa8Va86N:tg86a86NMMg8XJbbbb9ETmba8Ua8X:rg8X:vh8Ua86a8X:vh86a8Ya8X:vh8Yka8S:rg8Xa8UaBNa8Ya81Na80a86NMM:mgUNg85aUNhUa8Ua85Nh88a86a85Nh89a8Ya85Nh8:a86a8Xa8UNg85NhZa85a8YNhna8Ya8Xa86NgcNhJa8Ua85Nh8Ua86acNh86a8Ya8Xa8YNNh85dna87a8SNa8Wa87a8WNa8ZaRNa8Va83NMMg8YN:tg8Wa8WNa8Za8SNaRa8YN:tgRaRNa83a8SNa8Va8YN:tg8Va8VNMMg8YJbbbb9ETmba8Wa8Y:rg8Y:vh8Wa8Va8Y:vh8VaRa8Y:vhRka8Aa8AIdba85aRa8XaRNNMg8SMUdba8Aa86a8Va8Xa8VNg8ZNMg86a8AIdlMUdla8Aa8Ua8Wa8Xa8WNg8YNMg8Ua8AIdwMUdwa8AaJaRa8ZNMg8Za8AIdxMUdxa8Aana8YaRNMg83a8AIdzMUdza8AaZa8Va8YNMg85a8AIdCMUdCa8Aa8:aRa8Xa8WaBNaRa81Na80a8VNMMg81:mNg8YNMgRa8AIdKMUdKa8Aa89a8Va8YNMg8Va8AId3MUd3a8Aa88a8Wa8YNMg8Wa8AIdaMUdaa8AaUa81a8YN:tg8Ya8AId8KMUd8Ka8Aa8Xa8XMg8Xa8AIdyMUdyaIa8Jc8S2fgea8SaeIdbMUdbaea86aeIdlMUdlaea8UaeIdwMUdwaea8ZaeIdxMUdxaea83aeIdzMUdzaea85aeIdCMUdCaeaRaeIdKMUdKaea8VaeId3MUd3aea8WaeIdaMUdaaea8YaeId8KMUd8Kaea8XaeIdyMUdykahcefgha8M9hmbkka9cal9hmbkkdnadTmbaaTmbcbhYinJbbbbh80a8KabaYcdtfgeclfydbgLcx2fgOIdwa8Kaeydbghcx2fgAIdwg8Z:tg8Va8VNaOIdbaAIdbg83:tg8Wa8WNaOIdlaAIdlg85:tg8Xa8XNMMg8Sa8Kaecwfydbg8Acx2fgeIdwa8Z:tg8YNa8Va8YNa8WaeIdba83:tg81Na8XaeIdla85:tgBNMMgRa8VN:tJbbbbJbbjZa8Sa8Ya8YNa81a81NaBaBNMMg8UNaRaRN:tg86:va86Jbbbb9BEg86Nh88a8Ua8VNaRa8YN:ta86Nh89a8SaBNaRa8XN:ta86Nh8:a8Ua8XNaRaBN:ta86NhZa8Sa81NaRa8WN:ta86Nhna8Ua8WNaRa81N:ta86Nhca8WaBNa8Xa81N:tgRaRNa8Xa8YNa8VaBN:tgRaRNa8Va81Na8Wa8YN:tgRaRNMM:rJbbbZNhRa8Pahaa2g8JcdtfhOa8Pa8Aaa2g8McdtfhAa8PaLaa2gDcdtfhCa8Z:mhJa85:mh9ea83:mhTascjdfheaahQJbbbbhBJbbbbh86Jbbbbh8SJbbbbh8UJbbbbh8ZJbbbbh83Jbbbbh85Jbbbbh87JbbbbhUinaecwfaRa89aCIdbaOIdbg8Y:tg8XNa88aAIdba8Y:tg81NMg8VNUdbaeclfaRaZa8XNa8:a81NMg8WNUdbaeaRaca8XNana81NMg8XNUdbaecxfaRaJa8VNa9ea8WNa8YaTa8XNMMMg8YNUdbaRa8Va8WNNa8ZMh8ZaRa8Va8XNNa8UMh8UaRa8Wa8XNNa8SMh8SaRa8Ya8YNNaUMhUaRa8Va8YNNa87Mh87aRa8Wa8YNNa85Mh85aRa8Xa8YNNa83Mh83aRa8Va8VNNa86Mh86aRa8Wa8WNNaBMhBaRa8Xa8XNNa80Mh80aOclfhOaCclfhCaAclfhAaeczfheaQcufgQmbkagahc8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdyagaLc8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdyaga8Ac8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdya8Ra8JcltfhLcbhOaahCinaLaOfgeascjdfaOfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbka8RaDcltfhLcbhOaahCinaLaOfgeascjdfaOfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbka8Ra8McltfhLcbhOaahCinaLaOfgeascjdfaOfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbkaYcifgYad6mbkkcbhAdndnamcwGgSmbJbbbbh86cbh9hcbh9icbh6xekcbh9ha3cbyd;y:L:cjbHjjjjbbh6asc:Cefasyd;8egecdtfa6BdbasaecefBd;8ecua6alabadaHz:fjjjbgCcltaCcjjjjiGEcbyd;y:L:cjbHjjjjbbh9iasc:Cefasyd;8egecdtfa9iBdbasaecefBd;8ea9iaCa6a8Kalz:gjjjbJFFuuh86aCTmba9iheaChOinaeIdbgRa86a86aR9EEh86aeclfheaOcufgOmbkaCh9hkdnalTmbaKclfheaKydbhCa5hOalhQcbhAincbaeydbgLaC9RaORbbcpeGEaAfhAaOcefhOaeclfheaLhCaQcufgQmbkaAce4hAkcuadaA9Rcifg9kcx2a9kc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbh0asc:Cefasyd;8egecdtfa0BdbasaecefBd;8ecua9kcdta9kcFFFFi0Ecbyd;y:L:cjbHjjjjbbh9masc:Cefasyd;8egecdtfa9mBdbasaecefBd;8ea3cbyd;y:L:cjbHjjjjbbh9nasc:Cefasyd;8egecdtfa9nBdbasaecefBd;8ealcbyd;y:L:cjbHjjjjbbh9oasc:Cefasyd;8egecdtfa9oBdbasaecefBd;8eaxaxNayJbbjZamclGEg9pa9pN:vh87JbbbbhUdnadak9nmbdna9kci6mbamcjdGh9qaaclth9ra0cwfh9sJbbbbh85JbbbbhUinascNefabadalaHz:cjjjbabh8Acbh3cbh9tinaba9tcdtfh8McbheindnaHa8AaefydbgAcdtghfydbgCaHa8Maec:W:G:cjbfydbcdtfydbgOcdtg8JfydbgQSmba5aOfRbbgYco2a5aAfRbbgLfRb;a:G:cjbg8LaLco2aYfgDRb;a:G:cjbg9cVcFeGTmbdnaQaC9nmbaDRb;W:G:cjbcFeGmekdnaLcufcFeGce0mbaYTmba8EahfydbaO9hmekdnaLTmbaYcufcFeGce0mba8Fa8JfydbaA9hmeka0a3cx2fgCaOaAa9ccFeGgQEBdlaCaAaOaQEBdbaCaQa8LGcb9hBdwa3cefh3kaeclfgecx9hmbkdna9tcifg9tad9pmba8Acxfh8Aa3cifa9k9nmekka3TmdcbhDinaIaHa0aDcx2fghydbgLcdtgCfydbg8Jc8S2fgeIdwa8KahydlgYcx2fgOIdwg8WNaeIdzaOIdbg8XNaeIdaMgRaRMMa8WNaeIdlaOIdlg8YNaeIdCa8WNaeId3MgRaRMMa8YNaeIdba8XNaeIdxa8YNaeIdKMgRaRMMa8XNaeId8KMMM:lhRJbbbbJbbjZaeIdyg8V:va8VJbbbb9BEh8Vdndnahydwg8MmbJFFuuhBxekJbbbbJbbjZaIaHaYcdtfydbc8S2fgeIdyg81:va81Jbbbb9BEaeIdwa8KaLcx2fgOIdwg81NaeIdzaOIdbg80NaeIdaMgBaBMMa81NaeIdlaOIdlgBNaeIdCa81NaeId3Mg81a81MMaBNaeIdba80NaeIdxaBNaeIdKMg81a81MMa80NaeId8KMMM:lNhBka8VaRNh80dnaaTmbagaLc8S2fgAIdwa8WNaAIdza8XNaAIdaMgRaRMMa8WNaAIdla8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8PaYaa2gQcdtfhOa8RaLaa2g8AcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEh8Sdndna8MmbJbbbbhRxekagaYc8S2fgAIdwa8KaLcx2fgeIdwg8WNaAIdzaeIdbg8XNaAIdaMgRaRMMa8WNaAIdlaeIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Pa8AcdtfhOa8RaQcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEhRka80a8SMh80aBaRMhBdndndna5aLfRbbc9:fPibeedkdna8Fa8Ea8EaCfydbaYSEaXaCfydbgQcdtfydbgCcu9hmbaXaYcdtfydbhCkagaQc8S2fgAIdwa8KaCcx2fgeIdwg8WNaAIdzaeIdbg8XNaAIdaMgRaRMMa8WNaAIdlaeIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8PaCaa2g8AcdtfhOa8RaQaa2g8JcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEh8Sdndna8MmbJbbbbhRxekagaCc8S2fgAIdwa8KaQcx2fgeIdwg8WNaAIdzaeIdbg8XNaAIdaMgRaRMMa8WNaAIdlaeIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Pa8JcdtfhOa8Ra8AcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEhRka80a8SMh80aBaRMhBxdkaXaCfydbgCaLSmbaHaYcdtfydbh8Aindndna8EaCcdtgQfydbgecuSmbaHaecdtfydba8ASmekdna8FaQfydbgecuSmbaHaecdtfydba8ASmekaYhekagaCc8S2fgAIdwa8Kaecx2fgOIdwg8WNaAIdzaOIdbg8XNaAIdaMgRaRMMa8WNaAIdlaOIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Paeaa2cdtfhOa8RaCaa2cltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbka80aR:lgRa81aRa819DEaRa9qEMh80aXaQfydbgCaL9hmbkkdna5aYfRbbgeciSmbaecl9hmeka8MTmbaXaYcdtfydbgCaYSmbindndna8EaCcdtgQfydbgecuSmbaHaecdtfydba8JSmekdna8FaQfydbgecuSmbaHaecdtfydba8JSmekaLhekagaCc8S2fgAIdwa8Kaecx2fgOIdwg8WNaAIdzaOIdbg8XNaAIdaMgRaRMMa8WNaAIdlaOIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Paeaa2cdtfhOa8RaCaa2cltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaBaR:lgRa81aRa819DEaRa9qEMhBaXaQfydbgCaY9hmbkkahaBa80aBa809DgeEUdwahaLaYaea8Mcb9hGgeEBdlahaYaLaeEBdbaDcefgDa39hmbkascjdfcbcj;qbz:xjjjb8Aa9shea3hOinascjdfaeydbcA4cF8FGgAcFAaAcFA6EcdtfgAaAydbcefBdbaecxfheaOcufgOmbkcbhecbhOinascjdfaefgAydbhCaAaOBdbaCaOfhOaeclfgecj;qb9hmbkcbhea9shOinascjdfaOydbcA4cF8FGgAcFAaAcFA6EcdtfgAaAydbgAcefBdba9maAcdtfaeBdbaOcxfhOa3aecefge9hmbkadak9RgAci9Uh9udnalTmbcbhea9nhOinaOaeBdbaOclfhOalaecefge9hmbkkcbh9va9ocbalz:xjjjbh9caAcO9Uh9wa9uce4h9tcbh8Lcbh8Mdnina0a9ma8Mcdtfydbcx2fg8JIdwgRa879Emea8La9u9pmeJFFuuh8Vdna9ta39pmba0a9ma9tcdtfydbcx2fIdwJbb;aZNh8VkdnaRa8V9ETmbaRaU9ETmba8La9w0mdkdna9caHa8JydlgDcdtg9xfg8AydbgAfg9yRbba9caHa8Jydbghcdtg9zfydbgefg9ARbbVmba5ahfRbbh9BdndnaKaecdtfgOclfydbgCaOydbgOSmbaCaO9RhCa8KaAcx2fhLa8Kaecx2fhYaEaOcitfheindna9naeydbcdtfydbgOaASmba9naeclfydbcdtfydbgQaASmbaOaQSmba8KaQcx2fgQIdba8KaOcx2fgOIdbg8W:tgRaYIdlaOIdlg8X:tg80NaQIdla8X:tg8VaYIdba8W:tgBN:tg8YaRaLIdla8X:tg8SNa8VaLIdba8W:tg8UN:tg8XNa8VaYIdwaOIdwg81:tg8ZNaQIdwa81:tg8Wa80N:tg80a8VaLIdwa81:tg83Na8Wa8SN:tg8VNa8WaBNaRa8ZN:tg81a8Wa8UNaRa83N:tgRNMMa8Ya8YNa80a80Na81a81NMMa8Xa8XNa8Va8VNaRaRNMMN:rJbbj8:N9FmikaecwfheaCcufgCmbkkdndna9Bc99fcFeGce0mba9na9zfaDBdbaXa9zfydbgeahSmeina8AydbhAdndna8EaecdtgOfydbgecuSmbaHaecdtfydbaASmekdna8FaOfydbgecuSmbaHaecdtfydbaASmekaDheka9naOfaeBdbaXaOfydbgeah9hmbxdkkdndna9BcFeGcdSmbaDhexekdna8Fa8Ea8Ea9zfydbaDSEaXa9zfydbghcdtfydbgecu9hmbaXa9xfydbheka9na9zfaDBdbka9nahcdtfaeBdbka9Ace86bba9yce86bba8JIdwgRaUaUaR9DEhUa9vcefh9vcecda9BcFeGceSEa8Lfh8Lxeka9tcefh9tka8Mcefg8Ma39hmbkka9vTmddnalTmbcbhLcbhhindna9nahcdtgefydbgAahSmbaHaAcdtfydbh8AdnahaHaefydb9hg8JmbaIa8Ac8S2fgeaIahc8S2fgOIdbaeIdbMUdbaeaOIdlaeIdlMUdlaeaOIdwaeIdwMUdwaeaOIdxaeIdxMUdxaeaOIdzaeIdzMUdzaeaOIdCaeIdCMUdCaeaOIdKaeIdKMUdKaeaOId3aeId3MUd3aeaOIdaaeIdaMUdaaeaOId8KaeId8KMUd8KaeaOIdyaeIdyMUdya8NTmba8Na8Acltfgea8NahcltfgOIdbaeIdbMUdbaeaOIdlaeIdlMUdlaeaOIdwaeIdwMUdwaeaOIdxaeIdxMUdxkaaTmbagaAc8S2fgeagahc8S2g8MfgOIdbaeIdbMUdbaeaOIdlaeIdlMUdlaeaOIdwaeIdwMUdwaeaOIdxaeIdxMUdxaeaOIdzaeIdzMUdzaeaOIdCaeIdCMUdCaeaOIdKaeIdKMUdKaeaOId3aeId3MUd3aeaOIdaaeIdaMUdaaeaOId8KaeId8KMUd8KaeaOIdyaeIdyMUdya9raA2hYa8RhOaahCinaOaYfgeaOaLfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbka8JmbJbbbbJbbjZaIa8MfgeIdygR:vaRJbbbb9BEaeIdwa8Ka8Acx2fgOIdwgRNaeIdzaOIdbg8VNaeIdaMg8Wa8WMMaRNaeIdlaOIdlg8WNaeIdCaRNaeId3MgRaRMMa8WNaeIdba8VNaeIdxa8WNaeIdKMgRaRMMa8VNaeId8KMMM:lNgRa85a85aR9DEh85kaLa9rfhLahcefghal9hmbkcbhOa8EheindnaeydbgAcuSmbdnaOa9naAcdtgCfydbgA9hmbcuhAa8EaCfydbgCcuSmba9naCcdtfydbhAkaeaABdbkaeclfhealaOcefgO9hmbkcbhOa8FheindnaeydbgAcuSmbdnaOa9naAcdtgCfydbgA9hmbcuhAa8FaCfydbgCcuSmba9naCcdtfydbhAkaeaABdbkaeclfhealaOcefgO9hmbkka85aUaaEh85cbhOabhecbhAindnaHa9naeydbcdtfydbgLcdtfydbgCaHa9naeclfydbcdtfydbgYcdtfydbgQSmbaCaHa9naecwfydbcdtfydbg8AcdtfydbghSmbaQahSmbabaOcdtfgCaLBdbaCcwfa8ABdbaCclfaYBdbaOcifhOkaecxfheaAcifgAad6mbkdndnaSmbaOhdxekdnaOak0mbaOhdxekdna86a859FmbaOhdxekJFFuuh86cbhdabhecbhAindna9ia6aeydbgCcdtfydbcdtfIdbgRa859ETmbaeclf8Pdbh9CabadcdtfgQaCBdbaQclfa9C83dbaRa86a86aR9EEh86adcifhdkaecxfheaAcifgAaO6mbkkadak0mbxdkkascNefabadalaHz:cjjjbkdndnadak0mbadhYxekdnaSmbadhYxekdna86a879FmbadhYxekcehQina86Jbb;aZNgRa87aRa879DEh8WJbbbbhRdna9hTmba9ihea9hhOinaeIdbg8VaRa8Va8W9FEaRa8VaR9EEhRaeclfheaOcufgOmbkkJFFuuh86cbhYabhecbhOindna9ia6aeydbgAcdtfydbcdtfIdbg8Va8W9ETmbaeclf8Pdbh9CabaYcdtfgCaABdbaCclfa9C83dba8Va86a86a8V9EEh86aYcifhYkaecxfheaOcifgOad6mbkdnaQaYad9hVceGmbadhYxdkaRaUaUaR9DEhUaYak9nmecbhQaYhda86a879FmbkkdnamcjjjjdGTmba9ocbalz:xjjjbh8AdnaYTmbabheaYhOina8AaeydbgAfce86bba8AaHaAcdtfydbfce86bbaeclfheaOcufgOmbkkascNefabaYalaHz:cjjjbdndnalTmbcbhCindna8AaCfRbbTmbdna5aCfRbbPlbeebekdnaHaCcdtgLfydbgeaCSmba8KaCcx2fgOa8Kaecx2fgeydwBdwaOae8Pdb83dbxekaIaCc8S2fgQIdygnanJL:3;rUNgRMh87aQIdwgxaRMh8SaQIdlg9DaRMh8UaQIdbg9EaRMh81aQIdag9FaRa8KaCcx2fg8JIdwg88N:th8ZaQId3g9GaRa8JIdlg89N:th83aQIdKg9Ha8JIdbg8:aRN:th80JbbbbhZaQIdCg9IJbbbbMh85aQIdzg9JJbbbbMhBaQIdxg9KJbbbbMh86dndnaaTmbaChAinJbbbba87agaAc8S2fgOIdygR:vaRJbbbb9BEhRa8RaAaa2cltfheaOIdaa87Na8ZMh8ZaOId3a87Na83Mh83aOIdKa87Na80Mh80aOIdCa87Na85Mh85aOIdza87NaBMhBaOIdxa87Na86Mh86aOIdwa87Na8SMh8SaOIdla87Na8UMh8UaOIdba87Na81Mh81aahOina8ZaecwfIdbg8VaecxfIdbg8YNaRN:th8Za83aeclfIdbg8Wa8YNaRN:th83a85a8Wa8VNaRN:th85a81aeIdbg8Xa8XNaRN:th81a80a8Xa8YNaRN:th80aBa8Xa8VNaRN:thBa86a8Xa8WNaRN:th86a8Sa8Va8VNaRN:th8Sa8Ua8Wa8WNaRN:th8UaeczfheaOcufgOmbkaXaAcdtfydbgAaC9hmbka8NTmba8NaCcltfgeIdxhTaeIdwhcaeIdlhJaeIdbhRxekJbbbbhTJbbbbhcJbbbbhJJbbbbhRkaBa81:vg8Wa80Na8Z:ta85aBa86a81:vg8VN:tg8Za8Ua86a8VN:tg8Y:vg8Xa8Va80Na83:tg8UN:th83acaRa8WN:taJaRa8VN:tg86a8XN:tg85a8SaBa8WN:ta8Za8XN:tgB:vg8S:mh8Za86a8Y:vgc:mhJdnJbbbbaRaRa81:vg9eN:ta86acN:ta85a8SN:tg86:la87J:983:g81NgR9ETmba8Za83NaJa8UNa9ea80NaT:tMMa86:vhZka81:laR9ETmba8Y:laR9ETmbaB:laR9ETmba9e:maZNa8W:ma8ZaZNa83aB:vMgBNa8V:maJaZNa8X:maBNa8Ua8Y:vMMg85Na80:ma81:vMMMh87aKaLfgeclfydbgOaeydbge9RhhaEaecitfhLJbbbbhRdnaOaeSg8MmbJbbbbhRaLheahhAina8Kaeclfydbcx2fgOIdwa88:tg8Va8VNaOIdba8::tg8Va8VNaOIdla89:tg8Va8VNMMg8Va8Kaeydbcx2fgOIdwa88:tg8Wa8WNaOIdba8::tg8Wa8WNaOIdla89:tg8Wa8WNMMg8WaRaRa8W9DEgRaRa8V9DEhRaecwfheaAcufgAmbkaR:rgRaRNhRkaBa88:tg8Va8VNa87a8::tg8Va8VNa85a89:tg8Va8VNMMaR9EmbaQId8KhZdna8Mmbina8KaLclfydbcx2fgeIdba8KaLydbcx2fgOIdbg8W:tgRa89aOIdlg8X:tg80NaeIdla8X:tg8Va8:a8W:tg86N:tg8YaRa85a8X:tg8SNa8Va87a8W:tg8UN:tg8XNa8Va88aOIdwg81:tg8ZNaeIdwa81:tg8Wa80N:tg80a8VaBa81:tg83Na8Wa8SN:tg8VNa8Wa86NaRa8ZN:tg81a8Wa8UNaRa83N:tgRNMMa8Ya8YNa80a80Na81a81NMMa8Xa8XNa8Va8VNaRaRNMMN:rJbbj8:N9FmdaLcwfhLahcufghmbkkJbbbbJbbjZan:vanJbbbb9BEgRaxaBNa9Ja87Na9FMg8Va8VMMaBNa9Da85Na9IaBNa9GMg8Va8VMMa85Na9Ea87Na9Ka85Na9HMg8Va8VMMa87NaZMMM:lNaRaxa88Na9Ja8:Na9FMg8Va8VMMa88Na9Da89Na9Ia88Na9GMg8Va8VMMa89Na9Ea8:Na9Ka89Na9HMg8Va8VMMa8:NaZMMM:lNJbb;aZNJ:983:g81M9Emba8JaBUdwa8Ja85Udla8Ja87UdbkaCcefgCal9hmbkdnaambcbhaxdkcbhQindna8AaQfRbbTmbaHaQcdtgefydbaQ9hmba5aQfhhaXaefh8Ja8KaQcx2fhAa8PaQaa2cdtfh8McbhEincuhCdnahRbbc99fcFeGce0mbaQhCa8JydbgeaQSmba8PaEcdtgOfhLa8MaOfIdbhRaQhCinaChOcuhCdnaLaeaa2cdtfIdbaR9CmbaOcuSmbaOhCagaec8S2fIdyagaOc8S2fIdy9ETmbaehCkaXaecdtfydbgeaQ9hmbkka8PaEcdtfhLa8RaEcltfhKaQheinaLaeaa2cdtfJbbbbJbbjZagaeaCaCcuSEgOc8S2fIdygR:vaRJbbbb9BEaKaOaa2cltfgOIdwaAIdwNaOIdbaAIdbNaOIdlaAIdlNMMaOIdxMNUdbaXaecdtfydbgeaQ9hmbkaEcefgEaa9hmbkkaQcefgQal9hmbxdkkaambcbhakaiavaoarawaaala8Ka8Pazasayasc1efa5a8Aaqz:hjjjbkdnamcjjjjlGTmbazmbaYTmbabhecbhLina5aeydbgAfRbbc3thQaecwfgXydbhHcjjjj94hCdna8EaAcdtgEfydbaeclfgKydbgOSmbcjjjj94cba8FaOcdtfydbaASEhCkaeaQaCVaAVBdba5aOfRbbc3thacjjjj94hCcjjjj94hQdna8EaOcdtfydbaHSmbcjjjj94cba8FaHcdtfydbaOSEhQkaKaaaQVaOVBdba5aHfRbbc3thOdna8EaHcdtfydbaASmbcjjjj94cba8FaEfydbaHSEhCkaXaOaCVaHVBdbaecxfheaLcifgLaY6mbkkdnazTmbaYTmbaYheinabazabydbcdtfydbBdbabclfhbaecufgembkkdnaPTmbaPa9paU:rNUdbkdnasyd;8egHTmbaHcdtasc:Ceffc98fheinaeydbcbyd;C:L:cjbH:bjjjbbaec98fheaHcufgHmbkkascj;sbf8KjjjjbaYk;Yieouabydlhvabydbclfcbaicdtz:xjjjbhoadci9UhrdnadTmbdnalTmbaehwadhDinaoalawydbcdtfydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbxdkkaehwadhDinaoawydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbkkdnaiTmbcbhDaohwinawydbhqawaDBdbawclfhwaqaDfhDaicufgimbkkdnadci6mbinaecwfydbhwaeclfydbhDaeydbhidnalTmbalawcdtfydbhwalaDcdtfydbhDalaicdtfydbhikavaoaicdtfgqydbcitfaDBdbavaqydbcitfawBdlaqaqydbcefBdbavaoaDcdtfgqydbcitfawBdbavaqydbcitfaiBdlaqaqydbcefBdbavaoawcdtfgwydbcitfaiBdbavawydbcitfaDBdlawawydbcefBdbaecxfhearcufgrmbkkabydbcbBdbk:todDue99aicd4aifhrcehwinawgDcethwaDar6mbkcuaDcdtgraDcFFFFi0Ecbyd;y:L:cjbHjjjjbbhwaoaoyd9GgqcefBd9GaoaqcdtfawBdbawcFearz:xjjjbhkdnaiTmbalcd4hlaDcufhxcbhminamhDdnavTmbavamcdtfydbhDkcbadaDal2cdtfgDydlgwawcjjjj94SEgwcH4aw7c:F:b:DD2cbaDydbgwawcjjjj94SEgwcH4aw7c;D;O:B8J27cbaDydwgDaDcjjjj94SEgDcH4aD7c:3F;N8N27axGhwamcdthPdndndnavTmbakawcdtfgrydbgDcuSmeadavaPfydbal2cdtfgsIdbhzcehqinaqhrdnadavaDcdtfydbal2cdtfgqIdbaz9CmbaqIdlasIdl9CmbaqIdwasIdw9BmlkarcefhqakawarfaxGgwcdtfgrydbgDcu9hmbxdkkakawcdtfgrydbgDcuSmbadamal2cdtfgsIdbhzcehqinaqhrdnadaDal2cdtfgqIdbaz9CmbaqIdlasIdl9CmbaqIdwasIdw9BmikarcefhqakawarfaxGgwcdtfgrydbgDcu9hmbkkaramBdbamhDkabaPfaDBdbamcefgmai9hmbkkakcbyd;C:L:cjbH:bjjjbbaoaoyd9GcufBd9GdnaeTmbaiTmbcbhDaehwinawaDBdbawclfhwaiaDcefgD9hmbkcbhDaehwindnaDabydbgrSmbawaearcdtfgrydbBdbaraDBdbkabclfhbawclfhwaiaDcefgD9hmbkkk;:odvuv998Jjjjjbca9Rgocbyd1:G:cjbBdKaocb8Pdj:G:cjb83izaocbydN:G:cjbBdwaocb8Pd:m:G:cjb83ibdnadTmbaicd4hrdnabmbdnalTmbcbhwinaealawcdtfydbar2cdtfhDcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkawcefgwad9hmbxikkarcdthwcbhDincbhiinaoczfaifgqaeaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkaeawfheaDcefgDad9hmbxdkkdnalTmbcbhwinabawcx2fgiaealawcdtfydbar2cdtfgDIdbUdbaiaDIdlUdlaiaDIdwUdwcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkawcefgwad9hmbxdkkarcdthlcbhwaehDinabawcx2fgiaeawar2cdtfgqIdbUdbaiaqIdlUdlaiaqIdwUdwcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkaDalfhDawcefgwad9hmbkkJbbbbaoIdbaoIdzgx:tgkakJbbbb9DEgkaoIdlaoIdCgm:tgPaPak9DEgkaoIdwaoIdKgP:tgsasak9DEhsdnabTmbadTmbJbbbbJbbjZas:vasJbbbb9BEhkinabakabIdbax:tNUdbabclfgoakaoIdbam:tNUdbabcwfgoakaoIdbaP:tNUdbabcxfhbadcufgdmbkkdnavTmbavaPUdwavamUdlavaxUdbkask:WlewudnaeTmbcbhvabhoinaoavBdbaoclfhoaeavcefgv9hmbkkdnaiTmbcbhrinadarcdtfhwcbhDinalawaDcdtgvyd:G:G:cjbcdtfydbcdtfydbhodnalawavfydbcdtfydbgqabaqcdtfgkydbgvSmbinakabavgqcdtfgxydbgvBdbaxhkaqav9hmbkkdnaoabaocdtfgkydbgvSmbinakabavgocdtfgxydbgvBdbaxhkaoav9hmbkkdnaqaoSmbabaqaoaqao0Ecdtfaqaoaqao6EBdbkaDcefgDci9hmbkarcifgrai6mbkkdnaembcbskcbhxindnalaxcdtgvfydbax9hmbaxhodnaxabavfgDydbgvSmbaDhqinaqabavgocdtfgkydbgvBdbakhqaoav9hmbkkaDaoBdbkaxcefgxae9hmbkcbhkabhvcbhoindndnaoalydbgq9hmbdnaoavydbgq9hmbavakBdbakcefhkxdkavabaqcdtfydbBdbxekavabaqcdtfydbBdbkalclfhlavclfhvaeaocefgo9hmbkakk;jiilud99euabcbaecltz:xjjjbhvdnalTmbadhoaihralhwinarcwfIdbhDarclfIdbhqavaoydbcltfgkarIdbakIdbMUdbakaqakIdlMUdlakaDakIdwMUdwakakIdxJbbjZMUdxaoclfhoarcxfhrawcufgwmbkkdnaeTmbavhkaehrinakcxfgoIdbhDaocbBdbakakIdbJbbbbJbbjZaD:vaDJbbbb9BEgDNUdbakclfgoaDaoIdbNUdbakcwfgoaDaoIdbNUdbakczfhkarcufgrmbkkdnalTmbinavadydbcltfgkaicwfIdbakIdw:tgDaDNaiIdbakIdb:tgDaDNaiclfIdbakIdl:tgDaDNMMgDakIdxgqaqaD9DEUdxadclfhdaicxfhialcufglmbkkdnaeTmbavcxfhkinabakIdbUdbakczfhkabclfhbaecufgembkkk:moerudnaoTmbaecd4hzdnavTmbaicd4hHavcdthOcbhAindnaPaAfRbbTmbaAhednaDTmbaDaAcdtfydbhekdnasTmbasaefRbbceGmekdnamaAfRbbcvSmbabaeaz2cdtfgiaraAcx2fgCIdbakNaxIdbMUdbaiaCIdlakNaxIdlMUdlaiaCIdwakNaxIdwMUdwkadaeaH2cdtfhXaqheawhiavhCinaXaeydbcdtgQfaiIdbalaQfIdb:vUdbaeclfheaiclfhiaCcufgCmbkkawaOfhwaAcefgAao9hmbxdkkdnasmbcbheaDhiindnaPaefRbbTmbaehCdnaDTmbaiydbhCkamaefRbbcvSmbabaCaz2cdtfgCarIdbakNaxIdbMUdbaCarclfIdbakNaxIdlMUdlaCarcwfIdbakNaxIdwMUdwkaiclfhiarcxfhraoaecefge9hmbxdkkdnaDTmbindnaPRbbTmbasaDydbgefRbbceGmbamRbbcvSmbabaeaz2cdtfgearIdbakNaxIdbMUdbaearclfIdbakNaxIdlMUdlaearcwfIdbakNaxIdwMUdwkaPcefhPaDclfhDamcefhmarcxfhraocufgombxdkkazcdthicbheindnaPaefRbbTmbasaefRbbceGmbamaefRbbcvSmbabarIdbakNaxIdbMUdbabclfarclfIdbakNaxIdlMUdbabcwfarcwfIdbakNaxIdwMUdbkarcxfhrabaifhbaoaecefge9hmbkkk8MbabaeadaialavcbcbcbcbcbaoarawaDz:bjjjbk8MbabaeadaialavaoarawaDaqakaxamaPz:bjjjbkRbababaeadaialavaoarawaDaqakaxcjjjjdVamz:bjjjbk:vgoque99due99duq998Jjjjjbc;Wb9Rgq8Kjjjjbcbhkaqcxfcbc;Kbz:xjjjb8Aaqcualcx2alc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbgxBdxaqceBd2axaialavcbcbz:ejjjb8AaqcualcdtalcFFFFi0Egmcbyd;y:L:cjbHjjjjbbgiBdzaqcdBd2dndnJFF959eJbbjZawJbbjZawJbbjZ9DE:vawJ9VO:d869DEgw:lJbbb9p9DTmbaw:OhPxekcjjjj94hPkadci9Uhsarco9UhzdndnaombaPcd9imekdnalTmbaPcuf:YhwdnaoTmbcbhvaihHaxhOindndnaoavfRbbceGTmbavcjjjjlVhAxekdndnaOclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcqthAdndnaOcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXVhAdndnaOIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXcCtVhAkaHaABdbaHclfhHaOcxfhOalavcefgv9hmbxdkkaxhvaihOalhHindndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcCthAdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqtaAVhAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaOaAaXVBdbavcxfhvaOclfhOaHcufgHmbkkadTmbcbhkaehvcbhOinakaiavclfydbcdtfydbgHaiavcwfydbcdtfydbgA9haiavydbcdtfydbgXaH9haXaA9hGGfhkavcxfhvaOcifgOad6mbkkarci9UhQdndnaz:Z:rJbbbZMgw:lJbbb9p9DTmbaw:Ohvxekcjjjj94hvkaQ:ZhLcbhKc:bwhzdninakaQ9pmeazaP9Rcd9imeavazcufgOavaO9iEaPcefavaP9kEhYdnalTmbaYcuf:YhwdnaoTmbcbhOaihHaxhvindndnaoaOfRbbceGTmbaOcjjjjlVhAxekdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcqthAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXVhAdndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXcCtVhAkaHaABdbaHclfhHavcxfhvalaOcefgO9hmbxdkkaxhvaihOalhHindndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcCthAdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqtaAVhAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaOaAaXVBdbavcxfhvaOclfhOaHcufgHmbkkcbhOdnadTmbaehvcbhHinaOaiavclfydbcdtfydbgAaiavcwfydbcdtfydbgX9haiavydbcdtfydbgraA9haraX9hGGfhOavcxfhvaHcifgHad6mbkkdnas:ZgCaL:taY:Ygwaz:Y:tg8ANak:ZgEaO:Zg3:tNaEaL:tawaP:Y:tg5Na3aC:tNMg8EJbbbb9BmbaCaE:ta5a8Aa3aL:tNNNa8E:vawMhwkdndnaOaQ0mbaOhkaYhPxekaOhsaYhzkdndnaKcl0mbdnawJbbbZMgw:lJbbb9p9DTmbaw:Ohvxdkcjjjj94hvxekaPazfcd9ThvkaKcefgKcs9hmbkkdndndnakmbJbbjZhwcbhOcdhvaDmexdkalcd4alfhHcehOinaOgvcethOavaH6mbkaqcuavcdtavcFFFFi0Ecbyd;y:L:cjbHjjjjbbgYBdCaqciBd2aqamcbyd;y:L:cjbHjjjjbbgzBdKaqclBd2dnalTmbaPcuf:YhwdnaoTmbcbhOaihAaxhHindndnaoaOfRbbceGTmbaOcjjjjlVhXxekdndnaHclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqthXdndnaHcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaXarVhXdndnaHIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaXarcCtVhXkaAaXBdbaAclfhAaHcxfhHalaOcefgO9hmbxdkkaxhOaihHalhAindndnaOIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcCthXdndnaOclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkarcqtaXVhXdndnaOcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaHaXarVBdbaOcxfhOaHclfhHaAcufgAmbkkaqcuaYavazaialz:mjjjbgXc8S2gvaXc;D;O;f8U0Ecbyd;y:L:cjbHjjjjbbgiBd3aqcvBd2aicbavz:xjjjbhOdnadTmbcbhraehiinaxaiclfydbgocx2fgvIdbaxaiydbgPcx2fgHIdbg3:tgCaxaicwfydbgYcx2fgAIdlaHIdlg8A:tgwNavIdla8A:tgEaAIdba3:tg8EN:tgLaLNaEaAIdwaHIdwg5:tg8FNavIdwa5:tgEawN:tgwawNaEa8ENaCa8FN:tgCaCNMMg8E:rhEJbbnnJbbjZazaPcdtfydbgvazaocdtfydbgASavazaYcdtfydbgoSGgHEh8Fdna8EJbbbb9ETmbaLaE:vhLaCaE:vhCawaE:vhwkaOavc8S2fgvavIdbawa8FaE:rNgEawNNg8FMUdbavaCaEaCNgaNghavIdlMUdlavaLaEaLNg8ENggavIdwMUdwavawaaNgaavIdxMUdxava8EawNg8JavIdzMUdzavaCa8ENg8EavIdCMUdCavawaEaLa5Nawa3Na8AaCNMM:mg8ANg3NgwavIdKMUdKavaCa3NgCavId3MUd3avaLa3NgLavIdaMUdaava3a8ANg3avId8KMUd8KavaEavIdyMUdydnaHmbaOaAc8S2fgva8FavIdbMUdbavahavIdlMUdlavagavIdwMUdwavaaavIdxMUdxava8JavIdzMUdzava8EavIdCMUdCavawavIdKMUdKavaCavId3MUd3avaLavIdaMUdaava3avId8KMUd8KavaEavIdyMUdyaOaoc8S2fgva8FavIdbMUdbavahavIdlMUdlavagavIdwMUdwavaaavIdxMUdxava8JavIdzMUdzava8EavIdCMUdCavawavIdKMUdKavaCavId3MUd3avaLavIdaMUdaava3avId8KMUd8KavaEavIdyMUdykaicxfhiarcifgrad6mbkkcbhAaqcuaXcdtgvaXcFFFFi0Egicbyd;y:L:cjbHjjjjbbgHBdaaqcoBd2aqaicbyd;y:L:cjbHjjjjbbgiBd8KaqcrBd2aHcFeavz:xjjjbhPdnalTmbazhHinJbbbbJbbjZaOaHydbgrc8S2fgvIdygw:vawJbbbb9BEavIdwaxcwfIdbgwNavIdzaxIdbgCNavIdaMgLaLMMawNavIdlaxclfIdbgLNavIdCawNavId3MgwawMMaLNavIdbaCNavIdxaLNavIdKMgwawMMaCNavId8KMMM:lNhwdndnaParcdtgvfgrydbcuSmbaiavfIdbaw9ETmekaraABdbaiavfawUdbkaHclfhHaxcxfhxalaAcefgA9hmbkkdndnaXmbJbbbbhwxekJbbbbhwinaiIdbgCawawaC9DEhwaiclfhiaXcufgXmbkaw:rhwkakcd4akfhOcehiinaigvcethiavaO6mbkcbhOaqcuavcdtgiavcFFFFi0Ecbyd;y:L:cjbHjjjjbbgHBdyaHcFeaiz:xjjjbhXdnadTmbavcufhrcbhkcbhxindnazaeaxcdtfgvydbcdtfydbgiazavclfydbcdtfydbgOSmbaiazavcwfydbcdtfydbgvSmbaOavSmbaPavcdtfydbhAdndnaPaOcdtfydbgvaPaicdtfydbgi9pmbavaA9pmbaAhlaihoavhAxekdnaAai9pmbaAav9pmbaihlavhoxekavhlaAhoaihAkabakcx2fgvaABdbavcwfaoBdbavclfalBdbdnaXaoc:3F;N8N2alc:F:b:DD27aAc;D;O:B8J27arGgOcdtfgvydbgicuSmbcehHinaHhvdnabaicx2fgiydbaA9hmbaiydlal9hmbaiydwaoSmikavcefhHaXaOavfarGgOcdtfgvydbgicu9hmbkkavakBdbakcefhkkaxcifgxad6mbkakci2hOkcwhvaDTmekaDawUdbkavcdthvaqcxfc98fhiinaiavfydbcbyd;C:L:cjbH:bjjjbbavc98fgvmbkaqc;Wbf8KjjjjbaOk:0iewuabcFeaecdtz:xjjjbhbdnalmbcbskaecufhvdndnaiTmbcbhocbhrindndndnabaiarcdtgwfydbgDcm4aD7c:v;t;h;Ev2gecs4ae7avGgqcdtfgkydbgxcuSmbceheinaiaxcdtgxfydbaDSmdaqaefhxaecefheabaxavGgqcdtfgkydbgxcu9hmbkkakarBdbaoheaocefhoxekadaxfydbhekadawfaeBdbarcefgral9hmbxdkkcbhocbhDindnabaDcm4aD7c:v;t;h;Ev2gecs4ae7avGgqcdtfgkydbgxcuSmbaxaDSmbceheinabaqaefavGgqcdtfgkydbgxcuSmeaecefheaxaD9hmbkkdndnaxcu9hmbakaDBdbaoheaocefhoxekadaxcdtfydbhekadaDcdtfaeBdbaDcefgDal9hmbkkaok:3ldrue9:8Jjjjjbc;Wb9Rgr8Kjjjjbcbhwarcxfcbc;Kbz:xjjjb8AdnabaeSmbabaeadcdtz:wjjjb8AkarcualcdtalcFFFFi0EgDcbyd;y:L:cjbHjjjjbbgqBdxarceBd2aqcbaialavcbarcxfz:djjjbcualcx2alc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbhkarcxfaryd2gxcdtfakBdbaraxcefgmBd2akaialavcbcbz:ejjjb8AarcxfamcdtfaDcbyd;y:L:cjbHjjjjbbgiBdbaraxcdfgvBd2arcxfavcdtfcuaialaeadaqz:fjjjbgecltaecjjjjiGEcbyd;y:L:cjbHjjjjbbgqBdbaqaeaiakalz:gjjjbaxcifhkdnadTmbaoaoNhocbhwabhlcbheindnaqaialydbgvcdtfydbcdtfIdbao9ETmbalclf8PdbhPabawcdtfgDavBdbaDclfaP83dbawcifhwkalcxfhlaecifgead6mbkkdnakTmbaxcdtarcxffcwfhlinalydbcbyd;C:L:cjbH:bjjjbbalc98fhlakcufgkmbkkarc;Wbf8Kjjjjbawk;lOoDud99oue99vuv998Jjjjjbc;Wb9Rgw8KjjjjbdndnarmbcbhDxekawcxfcbc;Kbz:xjjjb8Aawcuadcx2adc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbgqBdxawceBd2aqaeadaicbcbz:ejjjb8AawcuadcdtadcFFFFi0Egkcbyd;y:L:cjbHjjjjbbgxBdzawcdBd2adcd4adfhecehiinaigmcethiamae6mbkcbhPawcuamcdtgsamcFFFFi0Ecbyd;y:L:cjbHjjjjbbgzBdCawciBd2dndnar:ZgH:rJbbbZMgO:lJbbb9p9DTmbaO:Ohixekcjjjj94hikamcufhAc:bwhCcbhXadhQcbhLinaiaCcufgeaiae9iEaPcefaiaP9kEhDdndnadTmbaDcuf:YhOaqhiaxheadhKindndnaiIdbaONJbbbZMgY:lJbbb9p9DTmbaY:Oh8Axekcjjjj94h8Aka8AcCth8AdndnaiclfIdbaONJbbbZMgY:lJbbb9p9DTmbaY:OhExekcjjjj94hEkaEcqta8AVh8AdndnaicwfIdbaONJbbbZMgY:lJbbb9p9DTmbaY:OhExekcjjjj94hEkaea8AaEVBdbaicxfhiaeclfheaKcufgKmbkazcFeasz:xjjjbh3cbh5cbh8Eindna3axa8Ecdtfydbg8Acm4a8A7c:v;t;h;Ev2gics4ai7aAGgKcdtfgEydbgecuSmbaea8ASmbcehiina3aKaifaAGgKcdtfgEydbgecuSmeaicefhiaea8A9hmbkkaEa8ABdba5aecuSfh5a8Ecefg8Ead9hmbxdkkazcFeasz:xjjjb8Acbh5kdnaQ:ZgYaH:taD:YgOaC:Y:tg8FNaX:Zgaa5:Zgh:tNaaaH:taOaP:Y:tggNahaY:tNMg8JJbbbb9BmbaYaa:taga8FahaH:tNNNa8J:vaOMhOkaPaDa5ar0geEhPaXa5aeEhXdna5arSmbaDaCaeEgCaP9Rcd9imbdndnaLcl0mbdnaOJbbbZMgO:lJbbb9p9DTmbaO:Ohixdkcjjjj94hixekaPaCfcd9Thika5aQaeEhQaLcefgLcs9hmekkdndnaXmbcihicbhDxekawakcbyd;y:L:cjbHjjjjbbg8ABdKawclBd2aPcuf:YhYdnadTmbaqhiaxheadhKindndnaiIdbaYNJbbbZMgO:lJbbb9p9DTmbaO:OhExekcjjjj94hEkaEcCthEdndnaiclfIdbaYNJbbbZMgO:lJbbb9p9DTmbaO:Oh3xekcjjjj94h3ka3cqtaEVhEdndnaicwfIdbaYNJbbbZMgO:lJbbb9p9DTmbaO:Oh3xekcjjjj94h3kaeaEa3VBdbaicxfhiaeclfheaKcufgKmbkkawcuazama8Aaxadz:mjjjbgDc32giaDc;j:KM;jb0Ecbyd;y:L:cjbHjjjjbbgeBd3awcvBd2aecbaiz:xjjjbh3avcd4hxdnadTmbdnalTmbaxcdth8Ea8AhEaqhealhKadhAina3aEydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiaKIdbaiIdxMUdxaiaKclfIdbaiIdzMUdzaiaKcwfIdbaiIdCMUdCaiaiIdKJbbjZMUdKaEclfhEaecxfheaKa8EfhKaAcufgAmbxdkka8AhKaqheadhEina3aKydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiaiIdxJbbbbMUdxaiaiIdzJbbbbMUdzaiaiIdCJbbbbMUdCaiaiIdKJbbjZMUdKaKclfhKaecxfheaEcufgEmbkkdnaDTmba3hiaDheinaiaiIdbJbbbbJbbjZaicKfIdbgO:vaOJbbbb9BEgONUdbaiclfgKaOaKIdbNUdbaicwfgKaOaKIdbNUdbaicxfgKaOaKIdbNUdbaiczfgKaOaKIdbNUdbaicCfgKaOaKIdbNUdbaic3fhiaecufgembkkcbhEawcuaDcdtgCaDcFFFFi0Egicbyd;y:L:cjbHjjjjbbgeBdaawcoBd2awaicbyd;y:L:cjbHjjjjbbg8EBd8KaecFeaCz:xjjjbh5dnadTmbaoJbbjZJbbjZaY:vaPceSENgOaONhYaxcdthxalheinaYaecN:H:cjbalEgKIdwa3a8AydbgAc32fgiIdC:tgOaONaKIdbaiIdx:tgOaONaKIdlaiIdz:tgOaONMMNaqcwfIdbaiIdw:tgOaONaqIdbaiIdb:tgOaONaqclfIdbaiIdl:tgOaONMMMhOdndna5aAcdtgifgKydbcuSmba8EaifIdbaO9ETmekaKaEBdba8EaifaOUdbka8Aclfh8AaqcxfhqaeaxfheadaEcefgE9hmbkkaba5aCz:wjjjb8Acrhikaicdthiawcxfc98fheinaeaifydbcbyd;C:L:cjbH:bjjjbbaic98fgimbkkawc;Wbf8KjjjjbaDk:Pdidui99ducbhi8Jjjjjbca9Rglcbyd1:G:cjbBdKalcb8Pdj:G:cjb83izalcbydN:G:cjbBdwalcb8Pd:m:G:cjb83ibdndnaembJbbjFhvJbbjFhoJbbjFhrxekadcd4cdthwincbhdinalczfadfgDabadfIdbgvaDIdbgoaoav9EEUdbaladfgDavaDIdbgoaoav9DEUdbadclfgdcx9hmbkabawfhbaicefgiae9hmbkalIdwalIdK:thralIdlalIdC:thoalIdbalIdz:thvkJbbbbavavJbbbb9DEgvaoaoav9DEgvararav9DEk:H8Modui99lud99Aus998Jjjjjbcji9RgD8KjjjjbcbhqaDcxfcbc;Kbz:xjjjb8AaDcbBdwaD9cb83ibaDcbyd;i:L:cjbBd1eaDcb8Pd;a:L:cjb83ijeaDcbyd;u:L:cjbBd94aDcb8Pd;m:L:cjb83i9WdndnavmbJbbjFhkJbbjFhxJbbjFhmxekaocd4cdthPalhsincbhzinaDcjefazfgHasazfIdbgkaHIdbgxaxak9EEUdbaDc;WbfazfgHakaHIdbgxaxak9DEUdbazclfgzcx9hmbkasaPfhsaqcefgqav9hmbkaDId94aDId1e:thmaDIdtaDId:ee:thxaDId9WaDIdje:thkkJbbbbhOdnar:YgAJq;x8J88MaA:vJbbbbakakJbbbb9DEgkaxaxak9DEgkamamak9DENgxJbbbb9Bmbarc9:f:Yax:vhOkaDcCfhCaDcxfcxfhXcbhzinaDazfaDcjefazfIdbgkaxaDc;WbfazfIdbak:t:tJbbb:;NMUdbazclfgzcx9hmbkcbhQaDarar2gLar2gzcbyd;y:L:cjbHjjjjbbgHBdxaDceBd2aHcbazz:xjjjbgKcbcbadaialaoaraOaDawz:rjjjbcdhYaDcuaLcdtaLcFFFFi0Eg8Acbyd;y:L:cjbHjjjjbbgEBdzaDcdBd2aDcjefcbarz:xjjjb8Acbh3dnaLTmbdnarcb9kmbaKhzaEhHaLhsincbh3aHcbcuazaDcjefarz:AjjjbEBdbazarfhzaHclfhHascufgsmbxdkkaKhPcbh3cbhvindndnaKavar2faDcjefarz:AjjjbTmbcbhHaPhzarhsinazaHazRbbgqfgHcbaqE86bbazcefhzascufgsmbkaEavcdtfa3BdbaHa3fh3xekaEavcdtfcuBdbkaParfhPavcefgvaL9hmbkkdnabTmbaDcua3cotgza3cFFF8F0Ecbyd;y:L:cjbHjjjjbbgQBdCcihYaDciBd2aQcbazz:xjjjb8AaXhCkdnawceGmbaCa8Acbyd;y:L:cjbHjjjjbbg5BdbaDaYcefgzBd2aDcxfazcdtfaLcbyd;y:L:cjbHjjjjbbgzBdbaDaYcdfgYBd2azcbaLz:xjjjbh8EarcufhXdnarci9imbarc9:fhCararcef2aKfcefh8Aceh8Fina8Far2hPa8AhvcehqindnaEaqaPfcdtfydbcuSmbavhzaChHinazazRbbgscuasE86bbazcefhzaHcufgHmbkkavarfhvaqcefgqaX9hmbka8AaLfh8Aa8Fcefg8FaX9hmbkkarce9imbcbh8Acbhqcbhvina8EaqfhscbhzindnasazfgHRbbmbaHce86bba5a8AcdtfaqazfBdba8Acefh8Akarazcefgz9hmbkaqarfhqavcefgvar9hmbka8ATmbaKcefhaaKc9:fhharc9:fhgarci9ih8Jina8Ea5a8Acufg8Acdtfydbgvfcb86bbavar2hPdna8JmbaEavcdtfydbcuSmbaKaPfhHaghqindnaHcefgzRbbgscFe9hmbaHRbbmbcbhskazas86bbazhHaqcufgqmbkaharavcef2fhzaXhsindnazRbbgHcFe9hmbazcefRbbmbcbhHkazaH86bbazcufhzascufgsce9kmbkkaaaPfh8Kavavar9Ug8Lar29Rh8FcbhCindnaCceScuaCEa8Ffgzce9imbazaX9ombcuaCciSaCcdSEa8LfgHce9imbaHaX9ombaEaHar2azfg8McdtfydbcuSmba8Jmbaaa8Mar2fhzcbhqa8KhsaghvinazazRbbgHcbaHaHcFeSEasRbbEgP86bbascefhsazcefhzaPaH7aqVhqavcufgvmbkaqcFeGTmba8Ea8MfgzRbbmbazce86bba5a8Acdtfa8MBdba8Acefh8AkaCcefgCcl9hmbka8AmbkkdnaQTmbaKaEaQadaialaoaraOaDawz:rjjjba3TmbJbbjZaO:vhkawcjjjjlGhPdnawcdGTmbJbbnnaOaON:vh8NakJbbbZNhyaQhzinazczfgsIdbg8PazcCfIdbgx:vhmazcxfgqIdbgIax:vhAazcwfgvIdbg8Rax:vh8SakazydbgHcFrG:ZNhRakaHcq4cFrG:ZNh8UakaHcC4cFrG:ZNh8VdnaxJ:p;c;188Ng8WazcKfIdbMg8X:laxJ:983:g81Ngx9ETmba8Wazc3fIdbMazc8KfIdbg8Ya8Ya8X:vg8YN:tg8Z:lax9ETmba8WazcafIdbMazcyfIdbg8Wa8Wa8X:vg80N:tazc8SfIdba8Wa8YN:tg8Wa8Wa8Z:vg8WN:tg81:lax9ETmba8PJ:p;c;188NazcUfIdb:ta80a8RJ:p;c;188Nazc8WfIdb:tg8PN:ta8WaIJ:p;c;188Nazc80fIdb:ta8Ya8PN:tgIN:ta81:vgxam:tg8Ra8RNa8Pa8X:va8YaIa8Z:va8WaxN:tg8XN:ta80axN:tg8Wa8S:tg8Ya8YNa8XaA:tg8Ya8YNMMa8N9DTmbaxaRaxaR9EEgxakaRMgmaxam9DEhma8Xa8Ua8Xa8U9EEgxaka8UMgAaxaA9DEhAa8Wa8Va8Wa8V9EEgxaka8VMg8Saxa8S9DEh8SkdnaPTmbayaRMhmaya8UMhAaya8VMh8SkasamUdbaqaAUdbava8SUdbazc;abfhza3cufg3mbxdkkdnaPTmbakJbbbZNhxaQhzinazczfaxakazydbgHcFrG:ZNMUdbazcxfaxakaHcq4cFrG:ZNMUdbazcwfaxakaHcC4cFrG:ZNMUdbazc;abfhza3cufg3mbxdkkaQcCfhzinazc98fgHaHIdbazIdbgk:vUdbazc94fgHaHIdbak:vUdbazctfgHaHIdbak:vUdbazc;abfhza3cufg3mbkkcbhsdndnarcd9imbarcufh3aEarcdtfhadnabmbaKcefg8Mararcefgz2fh8JaKazfhba8MaLfh8Ecbhscbh8Kina8Kar2h8La8Mheabh8Aa8Eh8Fa8Jh5cbhXindnaEaXa8LfgqcdtgzfgHclfydbaHydbGaaazfgzydbGazclfydbGcuSmbclcbaKaqar2fgzarfRbbEazRbbcb9hVczcbazaLfgzRbbEVc;abcbazarfRbbEVhPaehza8AhHa8Fhqa5hva3hQindnaPclcbaHRbbEazRbbcb9hVczcbaqRbbEVc;abcbavRbbEVgPcetVgCTmbaCcFeSmbasaCRb;W;p:cjbfhskazcefhzaHcefhHaqcefhqavcefhvaQcufgQmbkkaearfhea8Aarfh8Aa8Farfh8Fa5arfh5aXcefgXa39hmbka8MaLfh8MabaLfhba8EaLfh8Ea8JaLfh8Ja8Kcefg8Ka39hmbxdkkJbbjZaO:vgkakJk;x8J88NNh8RawcdGh8EaDIdwhkaDIdlhxaDIdbhmcbhscbhPinaPar2h8KcbhvindnaEava8KfgqcdtgzfgHclfydbaHydbGaaazfgzydbGazclfydbGcuSmbcbh8AclcbaKaqar2fgYarfRbbEaYRbbcb9hVczcbaYaLfg8JRbbEVc;abcba8JarfRbbEVh8Lindna8LclcbaYa8Ag8Mcefg8AfgzarfRbbEazRbbcb9hVczcba8Ja8AfgzRbbEVc;abcbazarfRbbEVg8LcetVgCTmbaCcFeSmbcbhqdndndnaCRb;W;n:cjbcufPdebdka8ETmeaCcC2gz8Ve;W:L:cjbcltaz8Ve;Y:L:cjbcsGVh8FaKa8Mfh5cxhzaDcjefhHinaHaQaEa8Faz4gqce4ceGavfaqcd4ceGaPfar2fgXcdtfydbcotfa5aqceGfaXar2fRbbcotfcnfBdbaHclfhHazc98fgzc989hmbkaDydjegzIdyaDyd:megHIdyMaDyd:eegqIdyaDyd1egXIdyMMg8XaqIdwaXIdwMJbbbZNgANazIdUaHIdUMaqIdUaXIdUMMg8WMg8Sa8SMazIdaaHIdaMaqIdaaXIdaMMg8YaqIdzaXIdzMJbbbZNg8SNMa8SNazId8SaHId8SMaqId8SaXId8SMMgRa8SNazId80aHId80MaqId80aXId80MMg8UMg8Sa8SMazId3aHId3MaqId3aXId3MMg8VaqIdxaXIdxMJbbbZNg8SNMa8SNazId8KaHId8KMaqId8KaXId8KMMg8Za8SNazId8WaHId8WMaqId8WaXId8WMMg80Mg8Sa8SMazIdKaHIdKMaqIdKaXIdKMMgyaANMaANazId88aHId88MaqId88aXId88MMg8PMMM:lgIa8RazIdCaHIdCMaqIdCaXIdCMMN9Ea8XazIdwaHIdwMJbbbZNgANa8WMg8Sa8SMa8YazIdzaHIdzMJbbbZNg8SNMa8SNaRa8SNa8UMg8Sa8SMa8VazIdxaHIdxMJbbbZNg8SNMa8SNa8Za8SNa80Mg8Sa8SMayaANMaANa8PMMM:laIJ;d;1UZN9DGhqxekaKa8Mfh8FcbhzcrhHindnaCaz4ceGTmba8FazceGfazce4ceGavfazcd4aPfar2fgqar2fRbbgXcFeSmbaQaEaqcdtfydbcotfaXcotfc9efRbbaH4ceGTmbcbhqxdkaHcufhHcehqazcefgzcw9hmbkkaCcC2aqcq2fgH8Ve;W:L:cjbgzTmbaHc;Y:L:cjbfhqaKa8MfhCabasc8K2fhHindnasae9pmbaHaQaEazcD4ceGavfazcq4ceGaPfar2fgXcdtfydbcotfaCazcw4ceGfaXar2fRbbcotfgXc9ifIdbamMUdbaHclfaXc9mfIdbaxMUdbaHcwfaXc9qfIdbakMUdbaHcxfamaQaEazcv4ceGavfazco4ceGaPfar2fgXcdtfydbcotfaCazcl4ceGfaXar2fRbbcotfgXc9ifIdbMUdbaHczfaxaXc9mfIdbMUdbaHcCfakaXc9qfIdbMUdbaHcKfamaQaEazce4ceGavfazcd4ceGaPfar2fgXcdtfydbcotfaCazceGfaXar2fRbbcotfgzc9ifIdbMUdbaHc3faxazc9mfIdbMUdbaHcafakazc9qfIdbMUdbkaHc8KfhHascefhsaq8Vebhzaqcdfhqazmbkka8Aa39hmbkkavcefgva39hmbkaPcefgPa39hmbkaDyd2gYTmekaYcdtaDcxffc98fhzinazydbcbyd;C:L:cjbH:bjjjbbazc98fhzaYcufgYmbkkaDcjif8Kjjjjbask;Kxmiue99due99euz99eui99eud99dud99oudnalTmbaocd4hkaqcdGhxarc99fhqarcethmawawMhPcbhsindndnawavaiascdtfgoclfydbak2cdtfgzIdwgHavaoydbak2cdtfgOIdwgA:tgCaCNazIdbgXaOIdbgQ:tgLaLNazIdlgKaOIdlgY:tg8Aa8ANMMgEavaocwfydbak2cdtfgoIdwg3aA:tg5a5NaoIdbg8EaQ:tg8Fa8FNaoIdlgaaY:tghahNMMggaEag9EEgEa3aH:tgHaHNa8EaX:tgHaHNaaaK:tgHaHNMMgHaEaH9EE:rNgHaHMgH:lJbbb9p9DTmbaH:Ohoxekcjjjj94hokdnaLahNa8Aa8FN:tgHaHNa8Aa5NaCahN:tgXaXNaCa8FNaLa5N:tgKaKNMMg3Jbbbb9BmbJbbjZhEdnaoceaoce9kEgoamaoam9iEg8Jcd9imbJbbjZa8J:Z:vhEkarcb9imbaAaDIdw:th8KaYaDIdl:th8LaQaDIdb:th8Ma8Jcba8Jcb9kEh8NdnadTmbaHJbbjZa3:rgA:vgQNg3aAa8Jcefa8Jcdf2:Y:vgANh8EaKaQNgKaANhyaXaQNgXaXaANNh8PcbhIina8Jcba8Jcb9kEcefh8RaEaI:ZNgQaCNa8KMhgaQa8ANa8LMh8SaQaLNa8MMhRcbhzindndnaPaEaz:ZNgQahNa8SMgYNgH:lJbbb9p9DTmbaH:OhOxekcjjjj94hOkaOce91goaqaoaq6Eh8UdndnaPaQa5NagMgHNga:lJbbb9p9DTmbaa:Oh8Vxekcjjjj94h8Vka8Ua8Vce91goaqaoaq6Eg8Wcefar2fcefgoar2h8XdndnaPaQa8FNaRMgQNga:lJbbb9p9DTmbaa:Oh8Yxekcjjjj94h8Ykadaeaocdtfydbcotfaba8Yce91goaqaoaq6Eg8Zfa8XfcefRbbcotfgocnfa8Ucqta8ZcCtVa8WVBdbaoc9efg8Ua8URbbcea8YceGaOcetcdGVa8VcdtclGVtV86bbaoc9ifgOaQaANaOIdbMUdbaoc9mfgOaYaANaOIdbMUdbaoc9qfgOaHaANaOIdbMUdbaoc9ufgOaAaOIdbMUdbdnaxTmbaoc9yfgOa8PaOIdbMUdbaoc9CfgOaKayNaOIdbMUdbaoc9GfgOa3a8ENaOIdbMUdbaoc9KfgOaXayNaOIdbMUdbaoc9OfgOaXa8ENaOIdbMUdbaoc2fgOaKa8ENaOIdbMUdbaoc9WfgOaXaAa3aHNaXaQNaKaYNMMgY:mNgQNaOIdbMUdbaoctfgOaKaQNaOIdbMUdbaoc94fgOa3aQNaOIdbMUdbaoc98fgoaoIdbaYaQN:tUdbka8Razcefgz9hmbka8Jcufh8JaIa8NShoaIcefhIaoTmbxdkkcbh8Vina8Jcba8Jcb9kEcefh8UaEa8V:ZNgAaCNa8KMhYaAa8ANa8LMhHaAaLNa8MMhXcbhoindndnaPaEao:ZNgAahNaHMNgQ:lJbbb9p9DTmbaQ:Ohzxekcjjjj94hzkazce91gzaqazaq6EhzdndnaPaAa5NaYMNgQ:lJbbb9p9DTmbaQ:OhOxekcjjjj94hOkazaOce91gOaqaOaq6Ecefar2fcefar2hzdndnaPaAa8FNaXMNgA:lJbbb9p9DTmbaA:OhOxekcjjjj94hOkabaOce91gOaqaOaq6Efazfcefce86bba8Uaocefgo9hmbka8Jcufh8Ja8Va8NShoa8Vcefh8VaoTmbkkascifgsal6mbkkk:Nvezu8Jjjjjbcjd9Rgb8Kjjjjbcbheabcbcjdz:xjjjbhdc:W:H:cjbhbinabRbbgicC2glabcqf8Veb87e;4:L:cjbalabcdfgv8Peb83e;W:L:cjbaiabcefRbb86b;W;n:cjbadaifce86bbalavabcxfceaetc:F:d;avGEgi8Peb83e;6:L:cjbalai8Vew87e:c:M:cjbabcQfhbaecefgecK9hmbkcbhoinc;Y:L:cjbhrcbhvindnadavfgwRbbce9hmbavcC2c;W:L:cjbfhDcbhbcehqavc;W;n:cjbfhkinabcitc:G:H:cjbfhlcbhbcbheinaeavab4ceGalabfRbbtVheabcefgbcw9hmbkdnadaecFeGgxfgmRbbmbaxcC2c;W:L:cjbfhPcbhbcehsindnaDabcq2gif8VebgbTmbaraifheaPaifhiinaialabcl4csGfRbbcltalabcw4csGfRbbcwtValabcsGfRbbV87ebaicdfhiae8VebhbaecdfheabmbkkcehbasceGhecbhsaembkamce86bbaxakRbb86b;W;n:cjbkcehbaqceGhlcbhqalmbkawcd86bbkarcCfhravcefgvcjd9hmbkaocefgoci9hmbkcbhic;W:L:cjbhvincuhlavhbinalcefhlab8Vebheabcdfhbaembkaial86b;W;p:cjbavcCfhvaicefgicjd9hmbkadcjdf8Kjjjjbk9DeeuabcFeaicdtz:xjjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk;Bidqui998Jjjjjbc;Wb9Rgl8Kjjjjbalcxfcbc;Kbz:xjjjb8Aadcd4adfhvcehoinaogrcethoarav6mbkalcuarcdtgoarcFFFFi0Ecbyd;y:L:cjbHjjjjbbgvBdxavcFeaoz:xjjjbhwdnadTmbaicd4hDarcufhqcbhkindndnawcbaeakaD2cdtfgrydlgiaicjjjj94SEgocH4ao7c:F:b:DD2cbarydbgxaxcjjjj94SEgocH4ao7c;D;O:B8J27cbarydwgmamcjjjj94SEgrcH4ar7c:3F;N8N27aqGgvcdtfgrydbgocuSmbam::hPai::hsax::hzcehiinaihrdnaeaoaD2cdtfgiIdbaz9CmbaiIdlas9CmbaiIdwaP9BmikarcefhiawavarfaqGgvcdtfgrydbgocu9hmbkkarakBdbakhokabakcdtfaoBdbakcefgkad9hmbkkalydxcbyd;C:L:cjbH:bjjjbbalc;Wbf8Kjjjjbk9teiucbcbyd;G:L:cjbgeabcifc98GfgbBd;G:L:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;G:L:cjbgeabcrfc94GfgbBd;G:L:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd;G:L:cjbge9Rcifc98GaefgbBd;G:L:cjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akk6eiucbhidnadTmbdninabRbbglaeRbbgv9hmeaecefheabcefhbadcufgdmbxdkkalav9Rhikaikk;0vdbcj:Gdk;yvFFuuFFuuFFuuFFuFFFuFFFuFbbbbbbbbebbbdbbbbbbbebbbebbbdbbbbbbbbbbbeeeeeebebbeebbebbebbbeeebbbbebbbbbbbbbbbbbbbbbbbeeeeeeebebbbeeebbeebbbbbebbbbbebebbbbbbbbbbbbbbbdiorbelvlbodveribbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbibbbbbbbbbbbbbbbbbbbbbobbbbbbbbbbbbbbbbbbbbbrbaebbbbbbbbbbbbbbbbbbsd8We8YbbbbbbbhiaebbbbbbQe8Ke9cebbbbbbbbbbbbbbbbLb8KebbbbbbbbbbbbbbbbbbKbbbbbbbbbbbbbbbbbbbbbYeJbilbbbbbbbbbbbbbbbbEe80e8WlbbbbbbzlAbbbbbbb5eJdnibbbbbbai8Kbbbbbbb8Ee9ce8Ylcibbbb8Yebbbbbbbb8FdOlAdbbbbbb80e8Ylbbbbbb88eTi8KiJv8Jlbbbbbbbbbbbb89e9td8Kv9qibbbbndlvaibbbbZd8Li8KvbbbbbbJdTibbbbbb9Pe81b9GvoiBvbbbbbbbbbbbb9Re9JbvoWibbbbvibbbbbbbb9VeWi9Gvbbbbbb8WvBbbbbbbb9:b9ceBvbbbbbbbbbbbbbbbbubWibbbbbbbbbbbbbbbbbb;Wd9hvSrbbbbbbWl9NvbbbbbbFbbbbbbbbbbbbbbbbbbbbbFFuuFFuuFFuuFFuFFFuFFFuFbc;y:Ldkxebbbdbbb;W:Obb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,a=WebAssembly.instantiate(i(n),{}).then(function(g){t=g.instance,t.exports.__wasm_call_ctors()});function i(g){for(var _=new Uint8Array(g.length),M=0;M<g.length;++M){var m=g.charCodeAt(M);_[M]=m>96?m-97:m>64?m-39:m+4}for(var S=0,M=0;M<g.length;++M)_[S++]=_[M]<60?e[_[M]]:(_[M]-60)*64+_[++M];return _.buffer.slice(0,S)}function s(g){if(!g)throw new Error("Assertion failed")}function r(g){return new Uint8Array(g.buffer,g.byteOffset,g.byteLength)}function o(g,_,M,m){var S=t.exports.sbrk,C=S(M*4),R=S(M*m*4),k=new Uint8Array(t.exports.memory.buffer);k.set(r(_),R),g(C,R,M,m*4),k=new Uint8Array(t.exports.memory.buffer);var D=new Uint32Array(M);return new Uint8Array(D.buffer).set(k.subarray(C,C+M*4)),S(C-S(0)),D}function c(g,_,M){var m=t.exports.sbrk,S=m(_.length*4),C=m(M*4),R=new Uint8Array(t.exports.memory.buffer),k=r(_);R.set(k,S);var D=g(C,S,_.length,M);R=new Uint8Array(t.exports.memory.buffer);var F=new Uint32Array(M);new Uint8Array(F.buffer).set(R.subarray(C,C+M*4)),m(S-m(0));for(var I=0;I<_.length;++I)_[I]=F[_[I]];return[F,D]}function h(g){for(var _=0,M=0;M<g.length;++M){var m=g[M];_=_<m?m:_}return _}function l(g,_,M,m,S,C,R,k,D){var F=t.exports.sbrk,I=F(4),z=F(M*4),V=F(S*C),L=F(M*4),Z=new Uint8Array(t.exports.memory.buffer);Z.set(r(m),V),Z.set(r(_),L);var j=g(z,L,M,V,S,C,R,k,D,I);Z=new Uint8Array(t.exports.memory.buffer);var K=new Uint32Array(j);r(K).set(Z.subarray(z,z+j*4));var ee=new Float32Array(1);return r(ee).set(Z.subarray(I,I+4)),F(I-F(0)),[K,ee[0]]}function d(g,_,M,m,S,C,R,k,D,F,I,z,V){var L=t.exports.sbrk,Z=L(4),j=L(M*4),K=L(S*C),ee=L(S*k),me=L(D.length*4),Te=L(M*4),X=F?L(S):0,ne=new Uint8Array(t.exports.memory.buffer);ne.set(r(m),K),ne.set(r(R),ee),ne.set(r(D),me),ne.set(r(_),Te),F&&ne.set(r(F),X);var xe=g(j,Te,M,K,S,C,ee,k,me,D.length,X,I,z,V,Z);ne=new Uint8Array(t.exports.memory.buffer);var Ae=new Uint32Array(xe);r(Ae).set(ne.subarray(j,j+xe*4));var ue=new Float32Array(1);return r(ue).set(ne.subarray(Z,Z+4)),L(Z-L(0)),[Ae,ue[0]]}function f(g,_,M,m,S,C,R,k,D,F,I,z,V){var L=t.exports.sbrk,Z=L(4),j=L(S*C),K=L(S*k),ee=L(D.length*4),me=L(M*4),Te=F?L(S):0,X=new Uint8Array(t.exports.memory.buffer);X.set(r(m),j),X.set(r(R),K),X.set(r(D),ee),X.set(r(_),me),F&&X.set(r(F),Te);var ne=g(me,M,j,S,C,K,k,ee,D.length,Te,I,z,V,Z);X=new Uint8Array(t.exports.memory.buffer),r(_).set(X.subarray(me,me+ne*4)),r(m).set(X.subarray(j,j+S*C)),r(R).set(X.subarray(K,K+S*k));var xe=new Float32Array(1);return r(xe).set(X.subarray(Z,Z+4)),L(Z-L(0)),[ne,xe[0]]}function b(g,_,M,m){var S=t.exports.sbrk,C=S(M*m),R=new Uint8Array(t.exports.memory.buffer);R.set(r(_),C);var k=g(C,M,m);return S(C-S(0)),k}function x(g,_,M,m,S,C,R,k){var D=t.exports.sbrk,F=D(k*4),I=D(M*m),z=S?D(M*C):0,V=new Uint8Array(t.exports.memory.buffer);V.set(r(_),I),S&&V.set(r(S),z);var L=g(F,I,M,m,z,C,R,k);V=new Uint8Array(t.exports.memory.buffer);var Z=new Uint32Array(L);return r(Z).set(V.subarray(F,F+L*4)),D(F-D(0)),Z}function y(g,_,M,m,S,C,R,k,D){var F=t.exports.sbrk,I=F(4),z=F(M*4),V=F(S*C),L=F(M*4),Z=R?F(S):0,j=new Uint8Array(t.exports.memory.buffer);j.set(r(m),V),j.set(r(_),L),R&&j.set(r(R),Z);var K=g(z,L,M,V,S,C,Z,k,D,I);j=new Uint8Array(t.exports.memory.buffer);var ee=new Uint32Array(K);r(ee).set(j.subarray(z,z+K*4));var me=new Float32Array(1);return r(me).set(j.subarray(I,I+4)),F(I-F(0)),[ee,me[0]]}function u(g,_,M,m,S,C,R){var k=t.exports.sbrk,D=k(M*4),F=k(S*C),I=k(M*4),z=new Uint8Array(t.exports.memory.buffer);z.set(r(m),F),z.set(r(_),I);var V=g(D,I,M,F,S,C,R);z=new Uint8Array(t.exports.memory.buffer);var L=new Uint32Array(V);return r(L).set(z.subarray(D,D+V*4)),k(D-k(0)),L}function p(g,_,M,m,S,C){var R=t.exports.sbrk,k=R(M.byteLength),D=R(_.byteLength),F=new Uint8Array(t.exports.memory.buffer);F.set(r(M),k),F.set(r(_),D);var I=M.byteLength/m,z=g(0,0,D,_.length,k,I,m,S,C),V=R(z*9*4),L=g(V,z,D,_.length,k,I,m,S,C);s(L<=z),F=new Uint8Array(t.exports.memory.buffer);var Z=new Float32Array(L*9);return r(Z).set(F.subarray(V,V+Z.byteLength)),R(k-R(0)),Z}var v={LockBorder:1,Sparse:2,ErrorAbsolute:4,Prune:8,Regularize:16,Permissive:32,RegularizeLight:64,PreserveFolds:128,ErrorClamped:256,_InternalDebug:1<<30},E={Shell:1,Solve:2,Thicken:0,_InternalDebug:1<<30};return{ready:a,supported:!0,compactMesh:function(g){s(g instanceof Uint32Array||g instanceof Int32Array||g instanceof Uint16Array||g instanceof Int16Array),s(g.length%3==0);var _=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g),M=c(t.exports.meshopt_optimizeVertexFetchRemap,_,h(g)+1);if(g!==_)for(var m=0;m<_.length;++m)g[m]=_[m];return M},generatePositionRemap:function(g,_){return s(g instanceof Float32Array),s(g.length%_==0),s(_>=3),o(t.exports.meshopt_generatePositionRemap,g,g.length/_,_)},simplify:function(g,_,M,m,S,C){s(g instanceof Uint32Array||g instanceof Int32Array||g instanceof Uint16Array||g instanceof Int16Array),s(g.length%3==0),s(_ instanceof Float32Array),s(_.length%M==0),s(M>=3),s(m>=0&&m<=g.length),s(m%3==0),s(S>=0);for(var R=0,k=0;k<(C?C.length:0);++k)s(C[k]in v),R|=v[C[k]];var D=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g),F=l(t.exports.meshopt_simplify,D,g.length,_,_.length/M,M*4,m,S,R);return F[0]=g instanceof Uint32Array?F[0]:new g.constructor(F[0]),F},simplifyWithAttributes:function(g,_,M,m,S,C,R,k,D,F){s(g instanceof Uint32Array||g instanceof Int32Array||g instanceof Uint16Array||g instanceof Int16Array),s(g.length%3==0),s(_ instanceof Float32Array),s(_.length%M==0),s(M>=3),s(m instanceof Float32Array),s(m.length==S*(_.length/M)),s(S>=0),s(R==null||R instanceof Uint8Array),s(R==null||R.length==_.length/M),s(k>=0&&k<=g.length),s(k%3==0),s(D>=0),s(Array.isArray(C)),s(S>=C.length),s(C.length<=32);for(var I=0;I<C.length;++I)s(C[I]>=0);for(var z=0,I=0;I<(F?F.length:0);++I)s(F[I]in v),z|=v[F[I]];var V=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g),L=d(t.exports.meshopt_simplifyWithAttributes,V,g.length,_,_.length/M,M*4,m,S*4,new Float32Array(C),R,k,D,z);return L[0]=g instanceof Uint32Array?L[0]:new g.constructor(L[0]),L},simplifyWithUpdate:function(g,_,M,m,S,C,R,k,D,F){s(g instanceof Uint32Array||g instanceof Int32Array||g instanceof Uint16Array||g instanceof Int16Array),s(g.length%3==0),s(_ instanceof Float32Array),s(_.length%M==0),s(M>=3),s(m instanceof Float32Array),s(m.length==S*(_.length/M)),s(S>=0),s(R==null||R instanceof Uint8Array),s(R==null||R.length==_.length/M),s(k>=0&&k<=g.length),s(k%3==0),s(D>=0),s(Array.isArray(C)),s(S>=C.length),s(C.length<=32);for(var I=0;I<C.length;++I)s(C[I]>=0);for(var z=0,I=0;I<(F?F.length:0);++I)s(F[I]in v),z|=v[F[I]];var V=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g),L=f(t.exports.meshopt_simplifyWithUpdate,V,g.length,_,_.length/M,M*4,m,S*4,new Float32Array(C),R,k,D,z);if(g!==V)for(var I=0;I<L[0];++I)g[I]=V[I];return L},getScale:function(g,_){return s(g instanceof Float32Array),s(g.length%_==0),s(_>=3),b(t.exports.meshopt_simplifyScale,g,g.length/_,_*4)},simplifyPoints:function(g,_,M,m,S,C){return s(g instanceof Float32Array),s(g.length%_==0),s(_>=3),s(M>=0&&M<=g.length/_),m?(s(m instanceof Float32Array),s(m.length%S==0),s(S>=3),s(g.length/_==m.length/S),x(t.exports.meshopt_simplifyPoints,g,g.length/_,_*4,m,S*4,C||0,M)):x(t.exports.meshopt_simplifyPoints,g,g.length/_,_*4,void 0,0,0,M)},simplifySloppy:function(g,_,M,m,S,C){s(g instanceof Uint32Array||g instanceof Int32Array||g instanceof Uint16Array||g instanceof Int16Array),s(g.length%3==0),s(_ instanceof Float32Array),s(_.length%M==0),s(M>=3),s(m==null||m instanceof Uint8Array),s(m==null||m.length==_.length/M),s(S>=0&&S<=g.length),s(S%3==0),s(C>=0);var R=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g),k=y(t.exports.meshopt_simplifySloppy,R,g.length,_,_.length/M,M*4,m,S,C);return k[0]=g instanceof Uint32Array?k[0]:new g.constructor(k[0]),k},simplifyPrune:function(g,_,M,m){s(g instanceof Uint32Array||g instanceof Int32Array||g instanceof Uint16Array||g instanceof Int16Array),s(g.length%3==0),s(_ instanceof Float32Array),s(_.length%M==0),s(M>=3),s(m>=0);var S=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g),C=u(t.exports.meshopt_simplifyPrune,S,g.length,_,_.length/M,M*4,m);return C=g instanceof Uint32Array?C:new g.constructor(C),C},remesh:function(g,_,M,m,S){s(g instanceof Uint32Array||g instanceof Int32Array||g instanceof Uint16Array||g instanceof Int16Array),s(g.length%3==0),s(_ instanceof Float32Array),s(_.length%M==0),s(M>=3),s(m>=4&&m<=256);for(var C=0,R=0;R<(S?S.length:0);++R)s(S[R]in E),C|=E[S[R]];var k=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g);return p(t.exports.meshopt_remesh,k,_,M*4,m,C)}}})();var Vv=(function(){var n="b9H79Tebbbe:neP9Geueu9Geub9Gbb9Giuuueu9Gmuuuuuuuuuuu9999eu9Gouuuuuueu9Gruuuuuuub9Gxuuuuuuuuuuuueu9Gxuuuuuuuuuuu99eu9GPuuuuuuuuuuuuu99b9Gouuuuuub9Gwuuuuuuuub9Gvuuuuub9GluuuubiQXdilvorwDqokoqxmbiibeilve9Weiiviebeoweuecj:Gdkr;Zeqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9I919P29K9nW79O2Wt79c9V919U9KbeY9TW79O9V9Wt9F9I919P29K9nW79O2Wt7S2W94bd39TW79O9V9Wt9F9I919P29K9nW79O2Wt79t9W9Ht9P9H2bo39TW79O9V9Wt9F9J9V9T9W91tWJ2917tWV9c9V919U9K7bw39TW79O9V9Wt9F9J9V9T9W91tW9nW79O2Wt9c9V919U9K7bkE9TW79O9V9Wt9F9J9V9T9W91tW9t9W9OWVW9c9V919U9K7bxL9TW79O9V9Wt9F9V9Wt9P9T9P96W9nW79O2WtbPl79IV9RbsDwebcekdOAq;W:leXdbkIbabaec9:fgefcufae9Ugeabci9Uadfcufad9Ugbaeab0Ek:88JDPue99eux99due99euo99iu8Jjjjjbc:WD9Rgm8KjjjjbdndnalmbcbhPxekamc:Cwfcbc;Kbz:rjjjb8AcuaocdtgsaocFFFFi0Ehzcbyd;0:G:cjbhHdndnalcb9imbaoal9nmbamazaHHjjjjbbgHBd:CwamceBd;8wamazcbyd;0:G:cjbHjjjjbbgOBd:GwamcdBd;8wamcualcdtalcFFFFi0Ecbyd;0:G:cjbHjjjjbbgABd:KwamciBd;8waihzalhsinaHazydbcdtfcbBdbazclfhzascufgsmbkaihzalhsinaHazydbcdtfgCaCydbcefBdbazclfhzascufgsmbkaihzalhCcbhXindnaHazydbcdtgQfgsydbcb9imbaOaQfaXBdbasasydbgQcjjjj94VBdbaQaXfhXkazclfhzaCcufgCmbkalci9UhLdnalci6mbcbhzaihsinascwfydbhCasclfydbhXaOasydbcdtfgQaQydbgQcefBdbaAaQcdtfazBdbaOaXcdtfgXaXydbgXcefBdbaAaXcdtfazBdbaOaCcdtfgCaCydbgCcefBdbaAaCcdtfazBdbascxfhsaLazcefgz9hmbkkaihzalhsindnaHazydbcdtgCfgXydbgQcu9kmbaXaQcFFFFrGgQBdbaOaCfgCaCydbaQ9RBdbkazclfhzascufgsmbxdkkamazaHHjjjjbbgHBd:CwamceBd;8wamazcbyd;0:G:cjbHjjjjbbgOBd:GwamcdBd;8wamcualcdtalcFFFFi0Ecbyd;0:G:cjbHjjjjbbgABd:KwamciBd;8waHcbasz:rjjjbhXaihzalhsinaXazydbcdtfgCaCydbcefBdbazclfhzascufgsmbkalci9UhLdnaoTmbcbhzaOhsaXhCaohQinasazBdbasclfhsaCydbazfhzaCclfhCaQcufgQmbkkdnalci6mbcbhzaihsinascwfydbhCasclfydbhQaOasydbcdtfgKaKydbgKcefBdbaAaKcdtfazBdbaOaQcdtfgQaQydbgQcefBdbaAaQcdtfazBdbaOaCcdtfgCaCydbgCcefBdbaAaCcdtfazBdbascxfhsaLazcefgz9hmbkkaoTmbcbhzaohsinaOazfgCaCydbaXazfydb9RBdbazclfhzascufgsmbkkamaLcbyd;0:G:cjbHjjjjbbgzBd:OwamclBd;8wazcbaLz:rjjjbhYamcuaLcK2alcjjjjd0Ecbyd;0:G:cjbHjjjjbbg8ABd:SwamcvBd;8wJbbbbhEdnalci6g3mbarcd4hKaihsa8AhzaLhrJbbbbh5inavasclfydbaK2cdtfgCIdlh8EavasydbaK2cdtfgXIdlhEavascwfydbaK2cdtfgQIdlh8FaCIdwhaaXIdwhhaQIdwhgazaCIdbg8JaXIdbg8KMaQIdbg8LMJbbnn:vUdbazclfaXIdlaCIdlMaQIdlMJbbnn:vUdbaQIdwh8MaCIdwh8NaXIdwhyazcxfa8EaE:tg8Eagah:tggNaaah:tgaa8FaE:tghN:tgEJbbbbJbbjZa8Ja8K:tg8FahNa8Ea8La8K:tg8KN:tghahNaEaENaaa8KNa8FagN:tgEaENMMg8K:rg8E:va8KJbbbb9BEg8KNUdbazczfaEa8KNUdbazcCfaha8KNUdbazcwfa8Maya8NMMJbbnn:vUdba5a8EMh5ascxfhsazcKfhzarcufgrmbka5aL:Z:vJbbbZNhEkamcuaLcdtalcFFFF970Ecbyd;0:G:cjbHjjjjbbgCBd:WwamcoBd;8waq:Zhhdna3mbcbhzaChsinasazBdbasclfhsaLazcefgz9hmbkkaEahNhhamcuaLcltalcFFFFd0Ecbyd;0:G:cjbHjjjjbbg8PBd:0wamcrBd;8wcba8Pa8AaCaLcbz:djjjb8AJFFuuh8MJFFuuh8NJFFuuhydnalci6mbJFFuuhya8AhzaLhsJFFuuh8NJFFuuh8MinazcwfIdbgEa8Ma8MaE9EEh8MazclfIdbgEa8Na8NaE9EEh8NazIdbgEayayaE9EEhyazcKfhzascufgsmbkkah:rhEamaocetgzcuaocu9kEcbyd;0:G:cjbHjjjjbbgCBd:4wdndnaoal9nmbaihzalhsinaCazydbcetfcFFi87ebazclfhzascufgsmbxdkkaCcFeazz:rjjjb8AkaEJbbbZNh8JcuhIdnalci6mbcbhsJFFuuhEa8AhzcuhIinazcwfIdba8M:tghahNazIdbay:tghahNazclfIdba8N:tghahNMM:rghaEaIcuSahaE9DVgXEhEasaIaXEhIazcKfhzaLascefgs9hmbkkamczfcbcjwz:rjjjb8Aam9cb83iwam9cb83ibaxa8JNh8RJbbjZak:th8Lcbh8SJbbbbhRJbbbbh8UJbbbbh8VJbbbbh8WJbbbbh8XJbbbbh8Ycbh8ZcbhPinJbbbbhEdna8STmbJbbjZa8S:Z:vhEkJbbbbhhdna8Ya8YNa8Wa8WNa8Xa8XNMMg8KJbbbb9BmbJbbjZa8K:r:vhhka8VaENh8Ka8UaENh5aRaENh8EaIhLdndndndndna8SaPVTmbamydwg80Tmea8YahNh8Fa8XahNhaa8WahNhgaeamydbcdtfh81cbh3JFFuuhEcvhQcuhLindnaHa81a3cdtfydbcdtgzfydbgvTmbaAaOazfydbcdtfhsindndnaCaiasydbgKcx2fgzclfydbgrcetf8Vebcs4aCazydbgXcetf8Vebcs4faCazcwfydbglcetf8Vebcs4fgombcbhzxekcehzaHaXcdtfydbgXceSmbcehzaHarcdtfydbgrceSmbcehzaHalcdtfydbglceSmbdnarcdSaXcdSfalcdSfcd6mbaocefhzxekaocdfhzkdnazaQ9kmba8AaKcK2fgXIdwa8K:tghahNaXIdba8E:tghahNaXIdla5:tghahNMM:ra8J:va8LNJbbjZMJ9VO:d86JbbjZaXIdCa8FNaXIdxagNaaaXIdzNMMakN:tghahJ9VO:d869DENghaEazaQ6ahaE9DVgXEhEaKaLaXEhLazaQaXEhQkasclfhsavcufgvmbkka3cefg3a809hmbkkaLcu9hmekama8KUd:ODama5Ud:KDama8EUd:GDamcuBd:qDamcFFF;7rBdjDa8Pcba8AaYamc:GDfamc:qDfamcjDfz:ejjjbamyd:qDhLdndnaxJbbbb9ETmba8SaD6mbaLcuSmeceh3amIdjDa8R9EmixdkaLcu9hmekdna8STmbabaPcltfgHam8Piw83dwaHam8Pib83dbaPcefhPkc3hHinamc:CwfaHfydbcbyd;4:G:cjbH:bjjjbbaHc98fgHc989hmbxvkkcbh3a8Saq9pmbamydwaCaiaLcx2fgzydbcetf8Vebcs4aCazcwfydbcetf8Vebcs4faCazclfydbcetf8Vebcs4ffaw9nmekcbhzcbhsdna8ZTmbcbhsamczfhXinamczfascdtfaXydbgQBdbaXclfhXasaYaQfRbbTfhsa8Zcufg8ZmbkkamydwhlamydbhXam9cu83i:GDam9cu83i:ODam9cu83i:qDam9cu83i:yDinamcjDfazfcFFF;7rBdbazclfgzcz9hmbkasc;8easclfc:bd6Eg8Zcdth80dnalTmbaeaXcdtfhocbhrindnaHaoarcdtfydbcdtgzfydbgvTmbaAaOazfydbcdtfhscuhQcuhzinaHaiasydbgKcx2fgXclfydbcdtfydbaHaXydbcdtfydbfaHaXcwfydbcdtfydbfgXazaXaz6gXEhzaKaQaXEhQasclfhsavcufgvmbkaQcuSmba8AaQcK2fgsIdwa8M:tgEaENasIdbay:tgEaENasIdla8N:tgEaENMM:rhEcbhsindndnazamc:qDfasfgvydbgX6mbazaX9hmeaEamcjDfasfIdb9FTmekavazBdbamc:GDfasfaQBdbamcjDfasfaEUdbxdkasclfgscz9hmbkkarcefgral9hmbkkamczfa80fhQcbhzcbhsindnamc:GDfazfydbgXcuSmbaQascdtfaXBdbascefhskazclfgzcz9hmbkasa8Zfg8ZTmbJFFuuhhcuhKamczfhza8ZhvcuhQina8AazydbgXcK2fgsIdwa8M:tgEaENasIdbay:tgEaENasIdla8N:tgEaENMM:rhEdndnaHaiaXcx2fgsclfydbcdtfydbaHasydbcdtfydbfaHascwfydbcdtfydbfgsaQ6mbasaQ9hmeaEah9DTmekaEhhashQaXhKkazclfhzavcufgvmbkaKcuSmbaKhLkdnamaiaLcx2fgrydbarclfydbarcwfydbaCabaeadaPawaqa3z:fjjjbTmbaPcefhPJbbbbhRJbbbbh8UJbbbbh8VJbbbbh8WJbbbbh8XJbbbbh8YkcbhXinaAaOaraXcdtfydbcdtgsfydbcdtfgKhzaHasfgvydbgQhsdnaQTmbdninazydbaLSmeazclfhzascufgsTmdxbkkazaKaQcdtfc98fydbBdbavavydbcufBdbkaXcefgXci9hmbka8AaLcK2fgzIdbhEazIdlhhazIdwh8KazIdxh5azIdzh8EazIdCh8FaYaLfce86bba8Ya8FMh8Ya8Xa8EMh8Xa8Wa5Mh8Wa8Va8KMh8Va8UahMh8UaRaEMhRamydxh8Sxbkkamc:WDf8KjjjjbaPkjoivuv99lu8Jjjjjbca9Rgo8Kjjjjbdndnalcw0mbaiydbhraeabcitfgwalcdtciVBdlawarBdbdnalcd6mbaiclfhralcufhDawcxfhwinarydbhqawcuBdbawc98faqBdbawcwfhwarclfhraDcufgDmbkkalabfhwxekcbhqaocbBdKao9cb83izaocbBdwao9cb83ibJbbjZhkJbbjZhxinadaiaqcdtfydbcK2fhDcbhwinaoczfawfgraDawfIdbgmarIdbgP:tgsaxNaPMgPUdbaoawfgrasamaP:tNarIdbMUdbawclfgwcx9hmbkJbbjZakJbbjZMgk:vhxaqcefgqal9hmbkcbhradcbcecdaoIdlgmaoIdwgP9GEgwaoIdbgsaP9GEawasam9GEgzcdtgwfhHaoczfawfIdbhmaihwalhDinaiarcdtfgqydbhOaqawydbgABdbawaOBdbawclfhwaraHaAcK2fIdbam9DfhraDcufgDmbkdndnarcv6mbavc8X9kmbaralc98f6mekaiydbhraeabcitfgwalcdtciVBdlawarBdbaiclfhralcufhDawcxfhwinarydbhqawcuBdbawc98faqBdbawcwfhwarclfhraDcufgDmbkalabfhwxekaeabcitfgwamUdbawawydlc98GazVBdlabcefaeadaiaravcefgqz:djjjbhDawawydlciGaDabcu7fcdtVBdlaDaeadaiarcdtfalar9Raqz:djjjbhwkaocaf8Kjjjjbawk;Oddvue99dninabaecitfgrydlgwcd4gDTmednawciGgqci9hmbcihqdnawcl6mbabaecitfhbcbheawhqcehkindnaiabydbgDfRbbmbcbhkadaDcK2fgwIdwalIdw:tgxaxNawIdbalIdb:tgxaxNawIdlalIdl:tgxaxNMM:rgxaoIdb9DTmbaoaxUdbavaDBdbarydlhqkabcwfhbaecefgeaqcd46mbkakceGTmikaraqciGBdlskdnabcbaDalaqcdtfIdbarIdb:tgxJbbbb9FEgwaD7aecefgDfgecitfydlabawaDfgDcitfydlVci0mbaraqBdlkabaDadaialavaoz:ejjjbax:laoIdb9Fmbkkkjlevudndnabydwgxaladcetfgm8Vebcs4alaecetfgP8Vebgscs4falaicetfgz8Vebcs4ffaD0mbakmbcbhDabydxaq6mekavawcltfgxab8Pdw83dwaxab8Pdb83dbabydbhDdnabydwgwTmbaoaDcdtfhxawhsinalaxydbcetfcFFi87ebaxclfhxascufgsmbkkabaDawfBdbabydxhxab9cb83dwababydlaxci2fBdlaP8VebhscehDcbhxkdnascztcz91cu9kmbabaxcefBdwaPax87ebaoabydbcdtfaxcdtfaeBdbkdnam8Uebcu9kmbababydwgxcefBdwamax87ebaoabydbcdtfaxcdtfadBdbkdnaz8Uebcu9kmbababydwgxcefBdwazax87ebaoabydbcdtfaxcdtfaiBdbkarabydlfabydxci2faPRbb86bbarabydlfabydxci2fcefamRbb86bbarabydlfabydxci2fcdfazRbb86bbababydxcefBdxaDk:mPrHue99eue99eue99iu8Jjjjjbc;W;Gb9Rgx8KjjjjbdndnalmbcbhmxekcbhPaxc:m;Gbfcbc;Kbz:rjjjb8Aaxcualci9UgscltascjjjjiGEcbyd;0:G:cjbHjjjjbbgzBd:m9GaxceBd;S9GaxcuascK2gHcKfalcpFFFe0Ecbyd;0:G:cjbHjjjjbbgOBd:q9GaxcdBd;S9Gdnalci6gAmbarcd4hCascdthXaOhQazhLinavaiaPcx2fgrydwaC2cdtfhKavarydlaC2cdtfhYavarydbaC2cdtfh8AcbhraLhEinaQarfgma8Aarfg3Idbg5aYarfg8EIdbg8Fa5a8F9DEg5UdbamaKarfgaIdbg8Fa5a8Fa59DEg8FUdbamcxfgma3Idbg5a8EIdbgha5ah9EEg5UdbamaaIdbgha5aha59EEg5UdbaEa8Fa5MJbbbZNUdbaEaXfhEarclfgrcx9hmbkaQcKfhQaLclfhLaPcefgPas9hmbkkaOaHfgr9cb83dbar9cb83dzar9cb83dwaxcuascx2gralc:bjjjl0Ecbyd;0:G:cjbHjjjjbbgHBdN9GaxciBd;S9GascdthgazarfhvaxcwVhPaxclVhCaHh8Jazh8KcbhLinaxcbcj;Gbz:rjjjbhEaLas2cdthadnaAmba8Khrash3inaEarydbgmc8F91cjjjj94Vam7gmcQ4cx2fg8Ea8EydwcefBdwaEamcd4cFrGcx2fg8Ea8EydbcefBdbaEamcx4cFrGcx2fgmamydlcefBdlarclfhra3cufg3mbkkazaafh8AaHaafhXcbhmcbh3cbh8EcbhainaEamfgrydbhQara3BdbarcwfgKydbhYaKaaBdbarclfgrydbhKara8EBdbaQa3fh3aYaafhaaKa8Efh8Eamcxfgmcj;Gb9hmbkdnaAmbcbhravhminamarBdbamclfhmasarcefgr9hmbkavhrashminaEa8Aarydbg3cdtfydbg8Ec8F91a8E7cd4cFrGcx2fg8Ea8Eydbg8EcefBdbaXa8Ecdtfa3Bdbarclfhramcufgmmbka8JhrashminaCa8Aarydbg3cdtfydbg8Ec8F91a8E7cx4cFrGcx2fg8Ea8Eydbg8EcefBdbava8Ecdtfa3BdbarclfhramcufgmmbkavhrashminaPa8Aarydbg3cdtfydbg8Ec8F91cjjjj94Va8E7cQ4cx2fg8Ea8Eydbg8EcefBdbaXa8Ecdtfa3Bdbarclfhramcufgmmbkka8Jagfh8Ja8Kagfh8KaLcefgLci9hmbkaEaocetgrcuaocu9kEcbyd;0:G:cjbHjjjjbbgKBd:y9GaEclBd;S9Gdndnaoal9nmbaihralhminaKarydbcetfcFFi87ebarclfhramcufgmmbxdkkaKcFearz:rjjjb8Akcbh8EaEascbyd;0:G:cjbHjjjjbbg8ABd:C9GaOaHaHascdtfaHascitfa8AascbazaKaiawaDaqakz:hjjjbdndnalci6mba8Ahrashmina8EarRbbfh8EarcefhramcufgmmbkaE9cb83iwaE9cb83ibalawc9:fgrfcufar9UgrasaDfcufaD9Ugmaram0EhYcbhmcbhra8Ehaincbh3dnarTmba8AarfRbbceSh3kamaEaiaHydbcx2fgQydbaQclfydbaQcwfydbaKabaeadamawaqa3a3ce7a8EaY9nVaaamfaY6VGz:fjjjbfhmaHclfhHaaa8AarfRbb9Rhaasarcefgr9hmbkaEydxTmeabamcltfgraE8Piw83dwaraE8Pib83dbamcefhmxekaE9cb83iwaE9cb83ibcbhmkczhrinaEc:m;Gbfarfydbcbyd;4:G:cjbH:bjjjbbarc98fgrc989hmbkkaxc;W;Gbf8Kjjjjbamk:wKDQue99iue99iul9:euw99iu8Jjjjjbc;qb9RgP8Kjjjjbaxhsaxhzdndnavax0gHmbdnavTmbcbhOaehzavhAinawaDazydbcx2fgCcwfydbcetfgX8VebhQawaCclfydbcetfgL8VebhKawaCydbcetfgC8VebhYaXce87ebaLce87ebaCce87ebaOaKcs4aYcs4faQcs4ffhOazclfhzaAcufgAmbkaehzavhAinawaDazydbcx2fgCcwfydbcetfcFFi87ebawaCclfydbcetfcFFi87ebawaCydbcetfcFFi87ebazclfhzaAcufgAmbkcehzaqhsaOaq0mekalce86bbalcefcbavcufz:rjjjb8AxekaPaiBdxaPadBdwaPaeBdlavakaqci9Ug8Aaka8Aak6EaHEgK9RhEaxaK9Rh3aKcufh5aKceth8EaKcdtgCc98fh8FavcitgOaC9Rarfc98fhaascufhhavcufhgaraOfh8JJbbjZas:Y:vh8KcbazceakaxSEg8Lcdtg8M9Rh8NJFFuuhycuh8PcbhIcbh8RinaPclfa8RcdtfydbhQaPcb8Pd:y:G:cjbg8S83i9iaPcb8Pd:q:G:cjbgR83inaPcb8Pd1:G:cjbg8U83iUaPcb8Pdj:G:cjbg8V83i8WaPa8S83iyaPaR83iaaPa8U83iKaPa8V83izaQavcdtgYfh8WcbhXinabaQaXcdtgLfydbcK2fhAcbhzinaPc8WfazfgCaAazfgOIdbg8XaCIdbg8Ya8Xa8Y9DEUdbaCczfgCaOcxfIdbg8XaCIdbg8Ya8Xa8Y9EEUdbazclfgzcx9hmbkaba8WaXcu7cdtfydbcK2fhAcbhzaPIdUh8ZaPId9ih80aPId80h81aPId9ehBaPId8Wh83aPIdnhUinaPczfazfgCaAazfgOIdbg8XaCIdbg8Ya8Xa8Y9DEUdbaCczfgCaOcxfIdbg8XaCIdbg8Ya8Xa8Y9EEUdbazclfgzcx9hmbkaraLfgza80a8Z:tg8XaUa83:tg8YNa8YaBa81:tg8ZNa8Za8XNMMUdbazaYfaPIdyaPIdK:tg8XaPIdaaPIdz:tg8YNa8YaPId8KaPIdC:tg8ZNa8Za8XNMMUdbaXcefgXav9hmbkcbh85dnaHmbcbhAaQhza8JhCavhXinawaDazydbcx2fgOcwfydbcetfgL8Vebh8WawaOclfydbcetfg858Vebh86awaOydbcetfgO8Vebh87aLce87eba85ce87ebaOce87ebaCaAa86cs4a87cs4fa8Wcs4ffgABdbazclfhzaCclfhCaXcufgXmbkavhCinawaDaQydbcx2fgzcwfydbcetfcFFi87ebawazclfydbcetfcFFi87ebawazydbcetfcFFi87ebaQclfhQaCcufgCmbka8Jh85kdndndndndndndndndndndnava8E6mba8Eax9nmeavavaK9UgzaK29Raza320mda5aE9pmqa85Th87ceh8WaEhQxwka5ag9pmDa8Eax9nmixokavaK6mea5aE9pmwcehQaEhXa85Tmixlka5ag6mlxrka5ag9pmokcbhQaghXa85mekJFFuuh8XcbhLa5hzindnazcefgCaK6mbaQavaC9RgOaK6GmbarazcdtfIdbg8YaC:YNaravaz9RcdtfaYfc94fIdbg8ZaO:YNMg80a8X9Embdndna8KaOahf:YNg81:lJbbb9p9DTmba81:OhAxekcjjjj94hAka8ZasaA2aO9R:YNh8Zdndna8Kazasf:YNg81:lJbbb9p9DTmba81:OhOxekcjjjj94hOkamasaO2aC9R:Ya8YNa8ZMNa80Mg8Ya8Xa8Ya8X9DgOEh8XaCaLaOEhLkaza8LfgzaX6mbxlkkJFFuuh8XcbhLaEhCaahAa8FhOaKhzindnazaK6mbaQaCaK6GmbaraOfIdbg8Yaz:YNaAIdbg8ZaC:YNMg80a8X9Embdndna8Ka85aOfydbgYahf:YNg81:lJbbb9p9DTmba81:Oh8Wxekcjjjj94h8Wkamasa8W2aY9R:Yg81a8YNa8Za81NMNa80Mg8Ya8Xa8Ya8X9DgYEh8XazaLaYEhLkaCa8L9RhCaAa8NfhAaOa8MfhOaza8LfgzcufaX6mbxikka85Th87cbh8WaghQkJFFuuh8XcbhLaEhCaahAa8FhOaKhzindnazazaK9UgXaK29RaXa320mbdna8WTmbaCaCaK9UgXaK29RaXa320mekaraOfIdbg8Yaz:YNaAIdbg8ZaC:YNMg80a8X9EmbazhXaChYdna87mba85aOfydbgXhYkdndna8KaYahf:YNg81:lJbbb9p9DTmba81:Oh86xekcjjjj94h86ka8Zasa862aY9R:YNh8Zdndna8KaXahf:YNg81:lJbbb9p9DTmba81:OhYxekcjjjj94hYkamasaY2aX9R:Ya8YNa8ZMNa80Mg8Ya8Xa8Ya8X9DgXEh8XazaLaXEhLkaCa8L9RhCaAa8NfhAaOa8MfhOaza8LfgzcufaQ6mbkkaLTmba8Xay9DTmba8XhyaLhIa8Rh8Pka8Rcefg8Rci9hmbkdndnaoc8X9kmba8Pcb9omeka8Acufh85cbhYindndndnavaY9RaxaYaxfav0Eg8WTmbcbhAaeaYcdtfgzhCa8WhXinawaDaCydbcx2fgOcwfydbcetfgQ8VebhbawaOclfydbcetfgL8VebhrawaOydbcetfgO8VebhKaQce87ebaLce87ebaOce87ebaAarcs4aKcs4fabcs4ffhAaCclfhCaXcufgXmbka8WhOinawaDazydbcx2fgCcwfydbcetfcFFi87ebawaCclfydbcetfcFFi87ebawaCydbcetfcFFi87ebazclfhzaOcufgOmbkaAaq0mekalaYfgzce86bbazcefcba8Wcufz:rjjjb8AxekalaYfgzce86bbazcefcba85z:rjjjb8Aa8Ah8Wka8WaYfgYav9pmdxbkkaravcdtg8WfhLdnaITmbaPclfa8PcdtfydbhzaIhCinaLazydbfcb86bbazclfhzaCcufgCmbkkdnavaI9nmbaPclfa8PcdtfydbaIcdtfhzavaI9RhCinaLazydbfce86bbazclfhzaCcufgCmbkkcbhYindnaYa8PSmbcbhzaraPclfaYcdtfydbgKa8Wz:qjjjbhCavhXaIhOinaKaOazaLaCydbgQfRbbgAEcdtfaQBdbaCclfhCaOaAfhOazaA9RcefhzaXcufgXmbkkaYcefgYci9hmbkabaeadaialaIaocefgCarawaDaqakaxamz:hjjjbabaeaIcdtgzfadazfaiazfalaIfavaI9RaCarawaDaqakaxamz:hjjjbkaPc;qbf8Kjjjjbk:Seeru8Jjjjjbc:q;ab9Rgo8Kjjjjbaoc:q8WfcFecjzz:rjjjb8AcbhrdnadTmbaehwadhDinaoarcdtfawydbgqBdbaoc:q8WfaqcFiGcdtfgkydbhxakaqBdbawclfhwaraxaq9hfhraDcufgDmbkkabaeadaoaraiavz:jjjjbaoc:q;abf8Kjjjjbk;Sqloud99euD998Jjjjjbc:W;ab9Rgr8KjjjjbdndnadTmbaocd4hwcbhDcbhqindnavaeclfydbaw2cdtfgkIdbavaeydbaw2cdtfgxIdbgm:tgPavaecwfydbaw2cdtfgsIdlaxIdlgz:tgHNakIdlaz:tgOasIdbam:tgAN:tgCaCNaOasIdwaxIdwgX:tgQNakIdwaX:tgOaHN:tgHaHNaOaANaPaQN:tgPaPNMMgOJbbbb9Bmbarc8WfaDcltfgkaCaO:rgO:vgCUdwakaPaO:vgPUdlakaHaO:vgHUdbakaCaXNaHamNazaPNMM:mUdxaDcefhDkaecxfheaqcifgqad6mbkab9cb83dyab9cb83daab9cb83dKab9cb83dzab9cb83dwab9cb83dbaDTmearcbBd8Sar9cb83iKar9cb83izarczfavalaoarc8Sfcbcraiz:kjjjbarIdKhQarIdChLarIdzhKar9cb83iwar9cb83ibararc8WfaDczarc8Sfcbcicbz:kjjjbJbbbbhmdnarIdwgzazNarIdbgHaHNarIdlgXaXNMMgCJbbbb9BmbJbbjZaC:r:vhmkazamNhCaXamNhXaHamNhHJbbjZhmarc8WfheaDhvinaecwfIdbaCNaeIdbaHNaXaeclfIdbNMMgzamazam9DEhmaeczfheavcufgvmbkabaQUdwabaLUdlabaKUdbabarId3UdxdndnamJ;n;m;m899FmbJbbbbhzarc8WfheinaecxfIdbaQaecwfIdbgPNaKaeIdbgONaLaeclfIdbgANMMMaCaPNaHaONaXaANMM:vgPazaPaz9EEhzaeczfheaDcufgDmbkabaCUd8KabaXUdaabaHUd3abaQaCazN:tUdKabaLaXazN:tUdCabaKaHazN:tUdzabJbbjZamamN:t:rgmUdydndnaCJbbj:;aCJbbj:;9GEgzJbbjZazJbbjZ9FEJbb;:9cNJbbbZJbbb:;aCJbbbb9GEMgz:lJbbb9p9DTmbaz:Ohexekcjjjj94hekabae86b8UdndnaXJbbj:;aXJbbj:;9GEgzJbbjZazJbbjZ9FEJbb;:9cNJbbbZJbbb:;aXJbbbb9GEMgz:lJbbb9p9DTmbaz:Ohvxekcjjjj94hvkabav86bRdndnaHJbbj:;aHJbbj:;9GEgzJbbjZazJbbjZ9FEJbb;:9cNJbbbZJbbb:;aHJbbbb9GEMgz:lJbbb9p9DTmbaz:Ohwxekcjjjj94hwkabaw86b8SdndnaecKtcK91:YJbb;:9c:vaC:t:lavcKtcK91:YJbb;:9c:vaX:t:lawcKtcK91:YJbb;:9c:vaH:t:lamMMMJbb;:9cNJbbjZMgm:lJbbb9p9DTmbam:Ohexekcjjjj94hekaecFbaecFb9iEhexekabcjjj;8iBdycFbhekabae86b8Vxekab9cb83dyab9cb83daab9cb83dKab9cb83dzab9cb83dwab9cb83dbkarc:W;abf8Kjjjjbk;7woDuo99eue99euv998Jjjjjbcje9Rgw8Kjjjjbawc;abfcbaocdtgDz:rjjjb8Aawc;GbfcbaDz:rjjjb8AawcafhDawhqaohkinaqcFFF97BdbaDcFFF;7rBdbaqclfhqaDclfhDakcufgkmbkavcd4hxaicd4hmdnadTmbaocx2hPcbhsinashzdnarTmbarascdtfydbhzkaeazam2cdtfgDIdwhHaDIdlhOaDIdbhAalazax2cdtfIdbhCcbhDawcafhqawc;Gbfhvawhkawc;abfhiinaCaDc:O:G:cjbfIdbaHNaDc:G:G:cjbfIdbaANaDc:K:G:cjbfIdbaONMMgXMhQazhLdnaXaC:tgXaqIdbgK9DgYmbavydbhLkavaLBdbazhLdnaQakIdbg8A9EmbaiydbhLa8AhQkaiaLBdbakaQUdbaqaXaKaYEUdbaiclfhiakclfhkavclfhvaqclfhqaPaDcxfgD9hmbkascefgsad9hmbkkJbbbbhQcbhLawc;GbfhDawc;abfhqcbhkinalaqydbgvax2cdtfIdbalaDydbgiax2cdtfIdbaeavam2cdtfgvIdwaeaiam2cdtfgiIdw:tgCaCNavIdbaiIdb:tgCaCNavIdlaiIdl:tgCaCNMM:rMMgCaQaCaQ9EgvEhQakaLavEhLaqclfhqaDclfhDaoakcefgk9hmbkJbbbbhCdnaeawc;abfaLcdtgqfydbgkam2cdtfgDIdwaeawc;Gbfaqfydbgvam2cdtfgqIdwgH:tgXaXNaDIdbaqIdbgA:tg8Aa8ANaDIdlaqIdlgE:tgOaONMMgKJbbbb9ETmbaK:rgCalakax2cdtfIdbMalavax2cdtfIdb:taCaCM:vhCkaQJbbbZNhKaXaCNaHMhHaOaCNaEMhOa8AaCNaAMhAdnadTmbcbhqarhkinaqhDdnarTmbakydbhDkdnalaDax2cdtfIdbg3aeaDam2cdtfgDIdwaH:tgQaQNaDIdbaA:tgCaCNaDIdlaO:tgXaXNMMg5:rgEMg8EaK9ETmbJbbbbh8Adna5Jbbbb9ETmba8EaK:taEaEM:vh8Aka8AaQNaHMhHa8AaXNaOMhOa8AaCNaAMhAa3aKaEMMJbbbZNhKkakclfhkadaqcefgq9hmbkkabaKUdxabaHUdwabaOUdlabaAUdbawcjef8Kjjjjbk:reevu8Jjjjjbcj8W9Rgr8Kjjjjbaici2hwcbhDdnaiTmbarhiawhqinaiaeadRbbgkcdtfydbBdbaDakcefgkaDak0EhDaiclfhiadcefhdaqcufgqmbkkabarawaeaDalaoz:jjjjbarcj8Wf8Kjjjjbk:Eeeeu8Jjjjjbca9Rgo8Kjjjjbab9cb83dyab9cb83daab9cb83dKab9cb83dzab9cb83dwab9cb83dbdnadTmbaocbBd3ao9cb83iwao9cb83ibaoaeadaialaoc3falEavcbalEcrcbz:kjjjbabao8Pib83dbabao8Piw83dwkaocaf8Kjjjjbk::meQu8Jjjjjbcjz9Rgv8KjjjjbcbhoavcjPfcbaez:rjjjb8Aavcjxfcbaez:rjjjb8AdnaiTmbadhoaihrinavcjxfaoRbbfgwawRbbcef86bbavcjxfaocefRbbfgwawRbbcef86bbavcjxfaocdfRbbfgwawRbbcef86bbaocifhoarcufgrmbkcbhDcjehoadhqcehkindndnalTmbcbhxcuhmaqhrakhwcuhPinawcufamaoavcjPfarcefRbbgsfRbb9RcFeGgzci6aoavcjPfarRbbgHfRbb9RcFeGgOci6faoavcjPfarcdfRbbgAfRbb9RcFeGgCci6fgXcOtaOcFr7azaCf9RcwtVavcjxfaAfRbbgzavcjxfaHfRbbgHavcjxfasfRbbgsaHas6Egsazas6EcFe7VgsaP9kgzEhmaXcd6gHaxcefgOal9iVce9hmdasaPazEhPaxaOaHEhxarcifhrawai6hsawcefhwasmbxdkkcuhmaqhrakhwcuhxinawcufamaoavcjPfarcefRbbfRbb9RcFeGci6aoavcjPfarRbbfRbb9RcFeGci6faoavcjPfarcdfRbbfRbb9RcFeGci6fgPax9kgsEhmaPce0meaPaxasEhxarcifhrawai6hPawcefhwaPmbkkadamci2fgrcdfRbbhwarcefRbbhxarRbbhPadaDci2fgrcifaramaD9Rci2zNjjjb8AaPavcjPffaocefgo86bbaPavcjxffgmamRbbcuf86bbaxavcjPffao86bbaxavcjxffgmamRbbcuf86bbarcdfaw86bbarcefax86bbaraP86bbawavcjPffao86bbawavcjxffgrarRbbcuf86bbaqcifhqakcefhkaDcefgDai9hmbkcbhzdnalcb9mmbcbhsavcjPfcbaez:rjjjb8Aadcvfhlinadasci2fgxcefgDRbbhoaxcdfgqRbbhrdndnavcjPfaxRbbgmfRbbmbavcjPfarfRbbhwdndndnavcjPfaofRbbTmbawcFeGTmexikawcFeGmdascefgAai9pmdasc980mdascifhQcbhLarcFeGhCamcFeGhXalhwcbhKcbhYinawcufRbbhPawRbbhOcehkdndnawc9:fRbbgHao9hmbaPcFeGamSmekdnaPcFeGao9hmbaOcFeGamSmekaHamSaOcFeGaoSGhkkceh8AaYceGhYdndnaHar9hmbaPcFeGaoSmekdnaPcFeGar9hmbaOcFeGaoSmekaHaoSaOcFeGarSGh8AkakaYVhYaLaHcFeGgHaXSaPcFeGgPaCSGaPaXSaOcFeGgPaCSGVaHaCSaPaXSGVVhLa8AaKceGVhKdnaAcefgPai9pmbawcifhwaAaQ6hHaPhAaHmekkaYTmeaKmekarhwaohPaohHarhOamhrxdkdnaYTaLVceGTmbaYaKTVaLVceGmekamhwarhParhHamhOaohrxekaohwamhPamhHaohOkavcjPfarfce86bbavcjPfawfce86bbaxaH86bbaqar86bbaDaO86bbavcjPfaPfce86bbalcifhlascefgsai9hmbkkavcFeaecetz:rjjjbhwaici2hrindnawadRbbgmcetfgx8Uebgocu9kmbaxaz87ebawcjlfazcdtfabamcdtfydbBdbazhoazcefhzkadao86bbadcefhdarcufgrmbkazcdthokabavcjlfaoz:qjjjb8Aavcjzf8KjjjjbkObabaiaeadcbz:njjjbk9teiucbcbyd;8:G:cjbgeabcifc98GfgbBd;8:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;8:G:cjbgeabcrfc94GfgbBd;8:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd;8:G:cjbge9Rcifc98GaefgbBd;8:G:cjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akk:3qeludndnadch6mbadTmeabaead;8qbbabskabaeSmbdnaeadabfgi9Rcbadcet9R0mbadTmeabaead;8qbbabskaeab7ciGhldndndnabae9pmbdnalTmbadhvabhixikdnabciGmbadhvabhixdkadTmiabaeRbb86bbadcufhvdnabcefgiciGmbaecefhexdkavTmiabaeRbe86beadc9:fhvdnabcdfgiciGmbaecdfhexdkavTmiabaeRbd86bdadc99fhvdnabcifgiciGmbaecifhexdkavTmiabaeRbi86biabclfhiaeclfheadc98fhvxekdnalmbdnaiciGTmbadTmlabadcufgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc9:fgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc99fgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc98fgdfaeadfRbb86bbkadcl6mbdnadc98fgocxGcxSmbaocd4cefciGhiaec98fhlabc98fhvinavadfaladfydbBdbadc98fhdaicufgimbkkaocx6mbaec9Wfhvabc9WfhoinaoadfgicxfavadfglcxfydbBdbaicwfalcwfydbBdbaiclfalclfydbBdbaialydbBdbadc9Wfgdci0mbkkadTmdadhidnadciGglTmbaecufhvabcufhoadhiinaoaifavaifRbb86bbaicufhialcufglmbkkadcl6mdaec98fhlabc98fhvinavaifgecifalaifgdcifRbb86bbaecdfadcdfRbb86bbaecefadcefRbb86bbaeadRbb86bbaic98fgimbxikkavcl6mbdnavc98fglc3Gc3Smbavalcd4cefcrGgdcdt9RhvinaiaeydbBdbaeclfheaiclfhiadcufgdmbkkalc36mbinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfaeczfydbBdbaicCfaecCfydbBdbaicKfaecKfydbBdbaic3faec3fydbBdbaecafheaicafhiavc9Gfgvci0mbkkavTmbdndnavcrGgdmbavhlxekavc94GhlinaiaeRbb86bbaicefhiaecefheadcufgdmbkkavcw6mbinaiaeRbb86bbaicefaecefRbb86bbaicdfaecdfRbb86bbaicifaecifRbb86bbaiclfaeclfRbb86bbaicvfaecvfRbb86bbaicofaecofRbb86bbaicrfaecrfRbb86bbaicwfhiaecwfhealc94fglmbkkabkk:pedbcj:GdktFFuuFFuuFFuubbbbFFuFFFuFFFuFbbbbbbjZbbbbbbbbbbbbbbjZbbbbbbbbbbbbbbjZ86;nAZ86;nAZ86;nAZ86;nA:;86;nAZ86;nAZ86;nAZ86;nA:;86;nAZ86;nAZ86;nAZ86;nA:;bc;0:Gdkxebbbdbbbj:qbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,a=WebAssembly.instantiate(i(n),{}).then(function(y){t=y.instance,t.exports.__wasm_call_ctors()});function i(y){for(var u=new Uint8Array(y.length),p=0;p<y.length;++p){var v=y.charCodeAt(p);u[p]=v>96?v-97:v>64?v-39:v+4}for(var E=0,p=0;p<y.length;++p)u[E++]=u[p]<60?e[u[p]]:(u[p]-60)*64+u[++p];return u.buffer.slice(0,E)}function s(y){if(!y)throw new Error("Assertion failed")}function r(y){return new Uint8Array(y.buffer,y.byteOffset,y.byteLength)}var o=48,c=16;function h(y,u){var p=y.meshlets[u*4+0],v=y.meshlets[u*4+1],E=y.meshlets[u*4+2],g=y.meshlets[u*4+3];return{vertices:y.vertices.subarray(p,p+E),triangles:y.triangles.subarray(v,v+g*3)}}function l(y,u,p,v,E,g,_,M,m,S){var C=t.exports.sbrk,R=t.exports.meshopt_buildMeshletsBound(u.length,g,_),k=C(R*c),D=C(u.length*4),F=C(u.length),I=C(u.byteLength),z=C(p.byteLength),V=new Uint8Array(t.exports.memory.buffer);V.set(r(u),I),V.set(r(p),z);var L=y(k,D,F,I,u.length,z,v,E,g,_,M,m,S);V=new Uint8Array(t.exports.memory.buffer);for(var Z=V.subarray(k,k+L*c),j=new Uint32Array(Z.buffer,Z.byteOffset,Z.byteLength/4).slice(),K=0;K<L;++K){var ee=j[K*4+0],me=j[K*4+1],v=j[K*4+2],Te=j[K*4+3];t.exports.meshopt_optimizeMeshlet(D+ee*4,F+me,Te,v)}var X=L?j[(L-1)*4+0]+j[(L-1)*4+2]:0,ne=L?j[(L-1)*4+1]+j[(L-1)*4+3]*3:0,xe={meshlets:j,vertices:new Uint32Array(V.buffer,D,X).slice(),triangles:new Uint8Array(V.buffer,F,ne).slice(),meshletCount:L};return C(k-C(0)),xe}function d(y){var u=new Float32Array(t.exports.memory.buffer,y,o/4);return{centerX:u[0],centerY:u[1],centerZ:u[2],radius:u[3],coneApexX:u[4],coneApexY:u[5],coneApexZ:u[6],coneAxisX:u[7],coneAxisY:u[8],coneAxisZ:u[9],coneCutoff:u[10]}}function f(y,u,p,v){var E=t.exports.sbrk,g=[],_=E(u.byteLength),M=E(y.vertices.byteLength),m=E(y.triangles.byteLength),S=E(o),C=new Uint8Array(t.exports.memory.buffer);C.set(r(u),_),C.set(r(y.vertices),M),C.set(r(y.triangles),m);for(var R=0;R<y.meshletCount;++R){var k=y.meshlets[R*4+0],D=y.meshlets[R*4+1],F=y.meshlets[R*4+3];t.exports.meshopt_computeMeshletBounds(S,M+k*4,m+D,F,_,p,v),g.push(d(S))}return E(_-E(0)),g}function b(y,u,p,v){var E=t.exports.sbrk,g=E(o),_=E(y.byteLength),M=E(u.byteLength),m=new Uint8Array(t.exports.memory.buffer);m.set(r(y),_),m.set(r(u),M),t.exports.meshopt_computeClusterBounds(g,_,y.length,M,p,v);var S=d(g);return E(g-E(0)),S}function x(y,u,p,v,E){var g=t.exports.sbrk,_=g(o),M=g(y.byteLength),m=v?g(v.byteLength):0,S=new Uint8Array(t.exports.memory.buffer);S.set(r(y),M),v&&S.set(r(v),m),t.exports.meshopt_computeSphereBounds(_,M,u,p,m,v?E:0);var C=d(_);return g(_-g(0)),C}return{ready:a,supported:!0,buildMeshlets:function(y,u,p,v,E,g){s(y.length%3==0),s(u instanceof Float32Array),s(u.length%p==0),s(p>=3),s(v>=3&&v<=256),s(E>=1&&E<=512),g=g||0;var _=y.BYTES_PER_ELEMENT==4?y:new Uint32Array(y);return l(t.exports.meshopt_buildMeshletsFlex,_,u,u.length/p,p*4,v,E,E,g,0)},buildMeshletsFlex:function(y,u,p,v,E,g,_,M){s(y.length%3==0),s(u instanceof Float32Array),s(u.length%p==0),s(p>=3),s(v>=3&&v<=256),s(E>=1&&g<=512),s(E<=g),_=_||0,M=M||0;var m=y.BYTES_PER_ELEMENT==4?y:new Uint32Array(y);return l(t.exports.meshopt_buildMeshletsFlex,m,u,u.length/p,p*4,v,E,g,_,M)},buildMeshletsSpatial:function(y,u,p,v,E,g,_){s(y.length%3==0),s(u instanceof Float32Array),s(u.length%p==0),s(p>=3),s(v>=3&&v<=256),s(E>=1&&g<=512),s(E<=g),_=_||0;var M=y.BYTES_PER_ELEMENT==4?y:new Uint32Array(y);return l(t.exports.meshopt_buildMeshletsSpatial,M,u,u.length/p,p*4,v,E,g,_)},extractMeshlet:function(y,u){return s(u>=0&&u<y.meshletCount),h(y,u)},computeClusterBounds:function(y,u,p){s(y.length%3==0),s(y.length/3<=512),s(u instanceof Float32Array),s(u.length%p==0),s(p>=3);var v=y.BYTES_PER_ELEMENT==4?y:new Uint32Array(y);return b(v,u,u.length/p,p*4)},computeMeshletBounds:function(y,u,p){return s(u instanceof Float32Array),s(u.length%p==0),s(p>=3),f(y,u,u.length/p,p*4)},computeSphereBounds:function(y,u,p,v){return s(y instanceof Float32Array),s(y.length%u==0),s(u>=3),s(!p||p instanceof Float32Array),s(!p||p.length%v==0),s(!p||v>=1),s(!p||y.length/u==p.length/v),v=v||0,x(y,y.length/u,u*4,p,v*4)}}})();var Xv=(function(){var n="b9H79Tebbbe9vx9Geueu9Geub9Gbb9Gkuuuuuuuuuuub9Gouuuuuub9Gwuuuuuu9999b9Giuuueu9Ge98e999Gvuuuuueu9Gd99ueu9Ge99e999Gd98ue98isPdilvboberrwDqklve9Weiiviebeoweuecj:Gdkr9Avo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bbK9TW79O9V9Wt9F9NW9UWV9HtW9u9H9U9NW9Ut7beL9TW79O9V9Wt9F9NW9UWV9HtW9o9VV9T9H27bil79IV9RblDwebcekdorq;X9PPdbk;e8EvHuw99euv99wu8Jjjjjbc;Wb9Rgk8Kjjjjbakcxfcbc;Kbz:fjjjb8AakcualcdtalcFFFFi0Ecbyd:W:2:cjbHjjjjbbgxBdxakceBd2adci9Uhmalcd4alfhPcehsinasgzcethsazaP6mbkakcuazcdtgsazcFFFFi0Ecbyd:W:2:cjbHjjjjbbgPBdzakcdBd2aPcFeasz:fjjjbhHaDcd4hOarcd4hAavcd4hCdnalTmbazcufhrcbhvindndnaHcbaiavaC2cdtfgzydlgDaDcjjjj94SEgPcH4cbaoavaA2cdtfgsydlgXcs4aXcjjjj94SE7aP7c:F:b:DD2cbazydbgQaQcjjjj94SEgPcH4cbasydbgLcs4aLcjjjj94SE7aP7c;D;O:B8J27cbazydwgKaKcjjjj94SEgzcH4cbasydwgYcs4aYcjjjj94SE7az7c:3F;N8N27awavaO2cdtfgzydlg8AazydbgE7cFFFFrGgzcm4az7c:fjjK27arGgPcdtfgzydbgscuSmba8A::h3aE::h5aY::h8EaX::h8FaL::haaK::hhaD::hgaQ::h8JcehDinaDhzdnaiasaC2cdtfgDIdba8J9CmbaDIdlag9CmbaDIdwah9CmbaoasaA2cdtfgDIdbaa9CmbaDIdla8F9CmbaDIdwa8E9CmbawasaO2cdtfgDIdba59CmbaDIdla39BmikazcefhDaHaPazfarGgPcdtfgzydbgscu9hmbkkazavBdbavhskaxavcdtfasBdbavcefgval9hmbkkcbhPaHcbyd:0:2:cjbH:bjjjbbakceBd2ak9cb83ibakaeadaxalakcxfz:cjjjbcuamcltadcFFFFd0Ecbyd:W:2:cjbHjjjjbbh8Kakcxfakyd2gKcdtfa8KBdbakaKcefgYBd2dnadci6mbaehsa8KhzamhvindndnaeTmbascwfydbhDasclfydbhHasydbhrxekaPcdfhDaPcefhHaPhrkJbbbbh8JJbbbbJbbbbJbbbbJbbbbJbbjZJbbj:;awaHaO2cdtfgXIdbawaraO2cdtfgQIdbga:tawaDaO2cdtfgLIdlaQIdlgh:tggNaXIdlah:tghaLIdbaa:tN:tgaJbbbb9EEaaJbbbb9BEg5aiaraC2cdtfgrIdwgaaiaHaC2cdtfgHIdwg39BEa5arIdlg8FaHIdlg8L9BEa5arIdbg8EaHIdbg8M9BEg5aaaiaDaC2cdtfgDIdwg8N9BEa5a8FaDIdlgy9BEa5a8EaDIdbg8P9BEg5a3a8N9BEa5a8Lay9BEa5a8Ma8P9BEh5dnaga3aa:tNaha8Naa:tN:tgaaaNaga8Ma8E:tNaha8Pa8E:tN:tg8Ea8ENaga8La8F:tNahaya8F:tN:tggagNMMghJbbbb9Bmba5ah:r:vh8Jkazcxfa5Udbazcwfaaa8JNUdbazclfaga8JNUdbaza8Ea8JNUdbascxfhsazczfhzaPcifhPavcufgvmbkkcbhzakcxfaYcdtfcuadcdtadcFFFFi0Ecbyd:W:2:cjbHjjjjbbgDBdbakaKcdfgPBd2dnadTmbaDhsinasazBdbasclfhsadazcefgz9hmbkkakcxfaPcdtfcuamcdtadcFFFF970Ecbyd:W:2:cjbHjjjjbbgvBdbakaKcifgzBd2akcxfazcdtfamcbyd:W:2:cjbHjjjjbbgYBdbakaKclfBd2dnadci6mba8KcxfhsavhPcbhzinaPazBdbaYazfcdcbasIdbg8JJbbbb9DEa8JJbbbb9EV86bbaPclfhPasczfhsamazcefgz9hmbkkdnalTmbcbhIakydlh8Rakydbh8SinaIcdthzdna8SaIcefgIcdtfydbgsa8SazfydbgzSmbasaz9RhQa8RazcdtfhLcbhRinaLaRcdtfg8Uydbgzcd4g8Vci2g8WazciGcdtgsyd:e:G:cjbfhza8Wasydj:G:cjbfhsdnaeTmbaeazcdtfydbhzaeascdtfydbhskdnaRcefgRaQ9pmbaxazcdtfydbhKaxascdtfydbhEaYa8Vfh8Aava8Vcdtfh8XaRhwinaLawcdtfgXydbgzcd4gsci2gOazciGcdtgzyd:e:G:cjbfhPaOazydj:G:cjbfhzdnaeTmbaeaPcdtfydbhPaeazcdtfydbhzkdndnaxazcdtfydbaKSmbaxaPcdtfydbaE9hmekaYasfRbbgza8ARbbgPVciSmbdnazaPGmba8VhPdna8Va8XydbgzSmba8XhHinaHavazgPcdtfgrydbgzBdbarhHaPaz9hmbkkdnasavascdtfgHydbgzSmbinaHavazgscdtfgrydbgzBdbarhHasaz9hmbkkaPasSmbaYasfgHRbbaYaPfgzRbbVciSmeavascdtfaPBdbazazRbbaHRbbV86bbkdna8UydbciGa8WfgsaDascdtfgPydbgzSmbinaPaDazgscdtfgHydbgzBdbaHhPasaz9hmbkkdnaXydbciGaOfgPaDaPcdtfgHydbgzSmbinaHaDazgPcdtfgrydbgzBdbarhHaPaz9hmbkkasaPSmbaDaPcdtfasBdbkawcefgwaQ9hmbkkaRaQ9hmbkkaIal9hmbkkdnadTmbcbhrinarhsdnaraDarcdtfgwydbgzSmbawhPinaPaDazgscdtfgHydbgzBdbaHhPasaz9hmbkkawasBdbarcefgrad9hmbkcbh8Vabcbadcltz:fjjjbhQdnadci6mbaqceGhKaDhLaeh8Acbh8Windna8Ka8WcltfgPIdxJbbbb9Bmbaea8Wci2gEcdtfhXcbhsa8VhwinaQaLasfydbcltfhzdndnaeTmba8AasfydbhHaXasc:e:G:cjbfydbcdtfydbhOaXascj:G:cjbfydbcdtfydbhxxekasc:e:G:cjbfydbaEfhOascj:G:cjbfydbaEfhxawhHkazaPIdbghaoaHaA2cdtfgrIdbg8JaPIdwg8EarIdwggNaha8JNaPIdlg5arIdlghNMMgaN:tg8FJbbbbJbbjZa8EagaaN:tg8Ea8ENa8Fa8FNa5ahaaN:tgaaaNMMg8F:r:va8FJbbbb9BEJ;As6nJbbjZaiaxaC2cdtfgrIdwaiaHaC2cdtfgHIdwg3:tg8Faga8FagNarIdbaHIdbg8L:tg8Ma8JNaharIdlaHIdlg8N:tgyNMMg8FN:tg5aiaOaC2cdtfgHIdwa3:tg3aga3agNaHIdba8L:tg8Pa8JNahaHIdla8N:tg8NNMMg3N:tggNa8Ma8Ja8FN:tg8La8Pa8Ja3N:tg8JNayaha8FN:tg8Fa8Naha3N:tghNMMJbbbbJbbjZa5a5Na8La8LNa8Fa8FNMMagagNa8Ja8JNahahNMMNg8J:rgg:va8JJbbbb9BENgh:lg8Ja8JJbbjZ9EEg8Ja8JJ7;A9s89NJ:L9t9s::MNJ;ob;jZMJbbjZa8J:t:rNg8J:ta8JahJbbbb9DENg8Jaga8JNaKEg8JNazIdbMUdbazaaa8JNazIdlMUdlaza8Ea8JNazIdwMUdwawcefhwasclfgscx9hmbkkaLcxfhLa8Acxfh8Aa8Vcifh8Va8Wcefg8Wam9hmbkcbhrinarhsdnaravarcdtfgPydbgzSmbinaPavazgscdtfgHydbgzBdbaHhPasaz9hmbkkaQarc8W2fgzc3fJbbjZJbbj:;aYasfRbbceGEg8JUdbazc8Sfa8JUdbaza8JUdxarcefgram9hmbkkaqcdGhvcbhsaDhPaQhzindnasaPydb9hmbdndnazcwfgHIdbg8Ja8JNazIdbggagNazclfgrIdbghahNMMgaJbbbb9BmbaHa8JJbbjZaa:r:vgaNUdbarahaaNUdbazagaaNg8JUdbxekaHa8JJbbbbNUdbarahJbbbbNUdbazagJbbbbNg8JUdba8JJbbjZavEh8Jkaza8JUdbkaPclfhPazczfhzadascefgs9hmbkcbhzaQhsindnazaDydbgPSmbasaQaPcltfgPydwBdwasaP8Pdb83dbkaDclfhDasczfhsadazcefgz9hmbkkdnakyd2gsTmbascdtakcxffc98fhzinazydbcbyd:0:2:cjbH:bjjjbbazc98fhzascufgsmbkkakc;Wbf8Kjjjjbk;:levucualcefgocdtaocFFFFi0Ecbyd:W:2:cjbHjjjjbbhoavavyd9GgrcdtfaoBdbavarcefBd9GabaoBdbcuadcdtadcFFFFi0Ecbyd:W:2:cjbHjjjjbbhoavavyd9GgrcdtfaoBdbavarcefBd9GabaoBdlabydbclfcbalcdtz:fjjjbhoadci9UhwdnadTmbdnaeTmbaehvadhrinaoaiavydbcdtfydbcdtfgDaDydbcefBdbavclfhvarcufgrmbxdkkadhraihvinaoavydbcdtfgDaDydbcefBdbavclfhvarcufgrmbkkdnalTmbcbhraohvinavydbhDavarBdbavclfhvaDarfhralcufglmbkkdnadci6mbabydlhrcbhlcdhvindndnaeTmbaiaealfgqydbcdtfhDaiaqcwfydbcdtfhdaiaqclfydbcdtfhqxekaialfgDcwfhdaDclfhqkadydbhdaqydbhqaoaDydbcdtfgDaDydbgDcefBdbaraDcdtfavc9:fBdbaoaqcdtfgDaDydbgDcefBdbaraDcdtfavcufBdbaoadcdtfgDaDydbgDcefBdbaraDcdtfavBdbalcxfhlavclfhvawcufgwmbkkabydbcbBdbk:SEvxui99duv99xu8Jjjjjbc;Wb9Rgw8Kjjjjbawcxfcbc;Kbz:fjjjb8AawcualcdtalcFFFFi0Ecbyd:W:2:cjbHjjjjbbgDBdxawceBd2adci9Uhqalcd4alfhkaoz:mjjjbhocehxinaxgmcethxamak6mbkawcuamcdtgxamcFFFFi0Ecbyd:W:2:cjbHjjjjbbgkBdzawcdBd2akcFeaxz:fjjjbhPavcd4hsdnalTmbamcufhzcbhHindndnaPcbaiaHas2cdtfgmydlgvavcjjjj94SEgxcH4ax7c:F:b:DD2cbamydbgOaOcjjjj94SEgxcH4ax7c;D;O:B8J27cbamydwgAaAcjjjj94SEgmcH4am7c:3F;N8N27azGgkcdtfgmydbgxcuSmbaA::hCav::hXaO::hQcehvinavhmdnaiaxas2cdtfgvIdbaQ9CmbavIdlaX9CmbavIdwaC9BmikamcefhvaPakamfazGgkcdtfgmydbgxcu9hmbkkamaHBdbaHhxkaDaHcdtfaxBdbaHcefgHal9hmbkkcbhkaPcbyd:0:2:cjbH:bjjjbbawceBd2aw9cb83ibawaeadaDalawcxfz:cjjjbcuaqcltadcFFFFd0Ecbyd:W:2:cjbHjjjjbbhLawcxfawyd2gKcdtfaLBdbawaKcefgOBd2dnadci6mbaehxaLhmaqhHindndnaeTmbaxcwfydbhzaxclfydbhvaxydbhPxekakcdfhzakcefhvakhPkJbbbbhQdnaiavas2cdtfgvIdbaiaPas2cdtfgPIdbgX:tgYaiazas2cdtfgzIdlaPIdlgC:tg8ANavIdlaC:tgCazIdbaX:tgEN:tgXaXNaCazIdwaPIdwg3:tg5NavIdwa3:tg3a8AN:tgCaCNa3aENaYa5N:tgYaYNMMg8AJbbbb9BmbJbbjZa8A:r:vhQkamcxfa8AJbbbb9CBdbamcwfaXaQNUdbamclfaYaQNUdbamaCaQNUdbaxcxfhxamczfhmakcifhkaHcufgHmbkkcbhmawcxfaOcdtfcuadcdtg8EadcFFFFi0Ecbyd:W:2:cjbHjjjjbbgvBdbawaKcdfg8FBd2dnadTmbavhxinaxamBdbaxclfhxadamcefgm9hmbkkdnalTmbcbhaawydlhhawydbhginaacdthmdnagaacefgacdtfydbgxagamfydbgmSmbaxam9RhAahamcdtfh8Jcbh8Kina8Ja8Kcdtfg8Lydbgmcd4gkci2g8MamciGcdtgxyd:e:G:cjbfhma8Maxydj:G:cjbfhxdnaeTmbaeamcdtfydbhmaeaxcdtfydbhxkdna8Kcefg8KaA9pmbaLakcltfhOaDamcdtfydbh8NaDaxcdtfydbhya8KhHina8JaHcdtfg8Pydbgmcd4gkci2gzamciGgPcdtgmyd:e:G:cjbfhxazamydj:G:cjbfhmdnaeTmbaeaxcdtfydbhxaeamcdtfydbhmkdndnaDamcdtfydba8NSmbaDaxcdtfydbay9hmekaOIdwaLakcltfgmIdwNaOIdbamIdbNaOIdlamIdlNMMao9ETmbaOydxamydx9hmbdna8LydbciGa8MfgxavaxcdtfgkydbgmSmbinakavamgxcdtfgPydbgmBdbaPhkaxam9hmbka8PydbciGhPkdnaPazfgkavakcdtfgPydbgmSmbinaPavamgkcdtfgzydbgmBdbazhPakam9hmbkkaxakSmbavakcdtfaxBdbkaHcefgHaA9hmbkka8KaA9hmbkkaaal9hmbkkdndndnadTmbcbhzinazhxdnazavazcdtfgHydbgmSmbaHhkinakavamgxcdtfgPydbgmBdbaPhkaxam9hmbkkaHaxBdbazcefgzad9hmbkcbh8Mabcbadcx2z:fjjjbh8Padcd9nmeavhAaeh8NcbhyinaLaycltfhkaeayci2g8JcdtfhDcbhxa8MhHina8PaAaxfydbcx2fhmdndnaeTmba8NaxfydbhzaDaxc:e:G:cjbfydbcdtfydbhOaDaxcj:G:cjbfydbcdtfydbhPxekaxc:e:G:cjbfydba8JfhOaxcj:G:cjbfydba8JfhPaHhzkamakIdbaiaPas2cdtfgPIdwaiazas2cdtfgzIdwgC:tgoaoNaPIdbazIdbgY:tgQaQNaPIdlazIdlg8A:tgXaXNMMaiaOas2cdtfgPIdwaC:tgCaCNaPIdbaY:tgYaYNaPIdla8A:tg8Aa8ANMMNgE:rg3J;As6nJbbjZaoaCNaQaYNaXa8ANMMJbbbbJbbjZa3:vaEJbbbb9BENgQ:lgoaoJbbjZ9EEgoaoJ7;A9s89NJ:L9t9s::MNJ;ob;jZMJbbjZao:t:rNgo:taoaQJbbbb9DENgoNamIdbMUdbamakIdlaoNamIdlMUdlamakIdwaoNamIdwMUdwaHcefhHaxclfgxcx9hmbkaAcxfhAa8Ncxfh8Na8Mcifh8MaycefgyaqSmdxbkkabcbadcx2z:fjjjb8Axekcbhxavhka8Phmindnaxakydb9hmbJbbbbhodnamcwfgPIdbgQaQNamIdbgXaXNamclfgzIdbgCaCNMMgYJbbbb9BmbJbbjZaY:r:vhokaPaQaoNUdbazaCaoNUdbamaXaoNUdbkakclfhkamcxfhmadaxcefgx9hmbkkdnarJbbbb9ETmbawcxfa8Fcdtfcuadcltg8Pa8EcFFFFi0Ecbyd:W:2:cjbHjjjjbbg8JBdbdndnar:ngo:lJbbb9p9DTmbao:Ohmxekcjjjj94hmkaKcifh8Famce9imbamcqamcq9iEh8Nadci6hLcbhAina8Jcba8Pz:fjjjbhPdnaLmbcbhDavhOinavaDcx2fhecbhxinabaOaxfydbgzcx2fgmIdwhoabaeaxcj:G:cjbfydbcdtfydbgHcx2fgkIdwhQamIdbhXakIdbhCamIdlhYakIdlh8AaPazcltfgmamIdxJbbjZMUdxamamIdbaCaX:taoaQNaXaCNaYa8ANMMgXaXNJbbbbaXJbbbb9EEgXNgCMUdbamamIdla8AaY:taXNgYMUdlamaQao:taXNgoamIdwMUdwaPaHcltfgmamIdxJbbjZMUdxamamIdbaC:tUdbamamIdlaY:tUdlamamIdwao:tUdwaxclfgxcx9hmbkaOcxfhOaDcefgDaq9hmbkkdnadTmbaraA:Z:tgoJbbjZaoJbbjZ9DEJbbbZNh8AcbhxavhkabhzaPhmindnaxakydb9hmbamcxfIdbgQJbbbb9ETmbJbbbbhodnamcwfIdba8AaQ:vgQNazcwfgPIdbMgXaXNamIdbaQNazIdbMgCaCNamclfIdbaQNazclfgHIdbMgQaQNMMgYJbbbb9BmbJbbjZaY:r:vhokaPaXaoNUdbaHaQaoNUdbazaCaoNUdbkakclfhkazcxfhzamczfhmadaxcefgx9hmbkkaAcefgAa8N9hmbkkdnadTmbcbhmabhxindnamavydbgkSmbaxabakcx2fgkydwBdwaxak8Pdb83dbkavclfhvaxcxfhxadamcefgm9hmbkkdna8FTmba8Fcdtawcxffc98fhminamydbcbyd:0:2:cjbH:bjjjbbamc98fhma8Fcufg8Fmbkkawc;Wbf8Kjjjjbk9teiucbcbyd:4:2:cjbgeabcifc98GfgbBd:4:2:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd:4:2:cjbgeabcrfc94GfgbBd:4:2:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd:4:2:cjbge9Rcifc98GaefgbBd:4:2:cjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akk9pee98abab:Igbabab:Ige:Iab9e9P9q;U;G9c:t;58::I9e8N8Es;O:h;a9w:;:G:Iae9e9c86v;H9t9v:LZ:Iab9e:b9ExpFF;F:;:I9ebbbbbb;WZ:G:G:G:2k0ed98ababab:Ige:Igdaeae:I:Iae9e:NS87:m:h;n;g8::I9et;N;k;I;5bI:;:G:Iadae9e:Y;79U:jzH:bZ:I9e93:S;l9u9v9v;f:;:G:Iab:G:G:2k:K8Flqud98zul988Jjjjjbc:Wl9Rgv8Kjjjjbcbhoadc99fcK9Tgrcbarcb9kEgwc9O2adfhDdnalcdtc:q:G:cjbfydbgqaicufgkfgdcb9imbawak9RhxdnadTmbaqaifgdceGhmawcdtaicdt9Rc:O:G:cjbfhradc9:GhPavc;adfhdcbhoin9ebbbbbbbbhs9ebbbbbbbbhzdnaxaofgHcb9imbarc98fydb:3hzkadaz85ibdnaHcu9imbarydb:3hskadcwfas85ibadczfhdarcwfhraPaocdfgo9hmbkamTmeaxaofhxkdndnaxcb9omb9ebbbbbbbbhzxekaxcdtyd:G:G:cjb:3hzkavc;adfaocitfaz85ibkaDc9OfhOcbhdaqcbaqcb9kEhmaic;:FFFrGhHaiceGhAaicitavc;adffc9WfhPinadhxdndnaice9omb9ebbbbbbbbhzxekcbhr9ebbbbbbbbhzdnakTmbaPhdabhoinaocwf8Ribad8Rib:Iao8Ribadcwf8Rib:Iaz:G:Ghzadc9WfhdaoczfhoaHarcdfgr9hmbkaATmekabarcitf8Ribavc;adfaxakfar9Rcitf8Rib:Iaz:Ghzkavaxcitfaz85ibaPcwfhPaxcefhdaxam9hmbkaic;:FFFrGhHaiceGhCc8VaD9RhXc8WaD9RhQavc;Gifc98fgLaqcdtfhKawcdtc:G:G:cjbfhwavc;adfc94fhYavc;Gifc9Wfh8Aavc9WfhEaDc9Nfh3aqhxdninavaxcitgdf8Ribhzdnaxce9imbcbhrdndnaxce9hmbaxhdxekaxceGhmaxc;:FFFrGhPaEadfhdcbhravc;Gifhoinaoaz9ebbbbbb9W8::I;8d:3gs9ebbbbbb9W;b:Iaz:G;8dBdbaoclfadcwf8Ribas:Ggz9ebbbbbb9W8::I;8d:3gs9ebbbbbb9W;b:Iaz:G;8dBdbad8Ribas:Ghzaocwfhoadc9WfhdaParcdfgr9hmbkamTmeaxar9Rhdkavc;Gifarcdtfaz9ebbbbbb9W8::I;8d:3gs9ebbbbbb9W;b:Iaz:G;8dBdbavadcitfc94f8Ribas:GhzkazaOz:njjjbgz9ebbbbbb;aZ:I:C9ebbbbbba;a:Iaz:Ggzaz;8dg5:3:HhzdndndndndnaOce9ig8Embavc;Gifaxcdtfc98fgdadydbgdadaQ91gdaQt9RgoBdbaoaX91h8Fada5fh5xekaOmeavc;Gifaxcdtfc98fydbcL91h8Fka8Fce9imdxekcdh8Faz9ebbbbbb;GZ9Mmbcbh8Fxekcehodnaxce9imbcbhrcbhPdnaxceSmbaxceGhaaxc;:FFFrGhAcbhravc;GifhdcbhPinadydbhodndndndnaPTmbcFFFrhPxekaoTmecjjjwhPkadaPao9RBdbcbhPxekcehPkadclfgmydbhodndndndnaPmbcFFFrhPxekaoTmecjjjwhPkamaPao9RBdbcehPcbhoxekcbhPcehokadcwfhdaAarcdfgr9hmbkaaTmekavc;GifarcdtfgrydbhddndnaPTmbcFFFrhoxekcehoadTmecjjjwhokaraoad9RBdbcbhokdna8EmbcFFFihddndna3PdebdkcFFFehdkavc;Gifaxcdtfc98fgrarydbadGBdbka5cefh5a8Fcd9hmb9ebbbbbb;WZaz:Hhzcdh8Faombaz9ebbbbbb;WZaOz:njjjb:Hhzkdnaz9ebbbbbbbb9Imbdnaxaq9mmbaxaq9RgdciGhrcbhoaxhPdndnaqax9Rc980mbadc98Ghma8AaxcdtfhdcbhoaxhPinadydbadclfydbadcwfydbadcxfydbaoVVVVhoadc9WfhdaPc98fhPamc98fgmmbkarTmekaLaPcdtfhdinadydbaoVhoadc98fhdarcufgrmbkkaoTmbavc;Gifaxcdtfc98fhdinaxcufhxaOc9OfhOadydbhoadc98fhdaoTmbxlkkaKhdaxhPinaPcefhPadydbhoadc98fhdaoTmbkaYaiaxfcitfhminavc;adfaxaifgAcitfawaxcefgxcdtfydb:385ibdndnaice9omb9ebbbbbbbbhzxekcbhr9ebbbbbbbbhzdnakTmbamhdabhoinaocwf8Ribad8Rib:Iao8Ribadcwf8Rib:Iaz:G:Ghzadc9WfhdaoczfhoaHarcdfgr9hmbkaCTmekabarcitf8Ribavc;adfaAar9Rcitf8Rib:Iaz:Ghzkavaxcitfaz85ibamcwfhmaxaP9imbkaPhxxekkdndnazcKaD9Rz:njjjbgz9ebbbbbb9Wc9MTmbavc;Gifaxcdtfaz9ebbbbbb9W8::I;8dgd:39ebbbbbb9W;b:Iaz:G;8dBdbaxcefhxaDhOxekaz;8dhdkavc;GifaxcdtfadBdbkdnaxcb9imb9ebbbbbb;WZaOz:njjjbhzdndnaxceGTmbaxhoxekavaxcitfazavc;Gifaxcdtfydb:3:I85ibaxcufhoaz9ebbbbbb9W8::IhzkdnaxTmbaocefhraocdtavc;Giffc98fhdaocitavfc94fhoinaoaz9ebbbbbb9W8::Igsadydb:3:I85ibaocwfazadclfydb:3:I85ibadc94fhdaoc9Wfhoas9ebbbbbb9W8::Ihzarc9:fgrmbkkavaxcitfhHaxhdindndnaqaxadgi9RgAaqaA9iEgdcb9omb9ebbbbbbbbhzxekadcefgociGhrdndnadci9pmbcbhd9ebbbbbbbbhzxekcbhPcbaoc98G9Rhm9ebbbbbbbbhzcbhdinadc1:2:cjbf8RibaHadfgocKf8Rib:Iadcj:2:cjbf8Ribaoczf8Rib:Iadc;4:1:cjbf8Ribaocwf8Rib:Iadc;W:1:cjbf8Ribao8Rib:Iaz:G:G:G:GhzadcafhdamaPc98fgP9hmbkarTmecbaP9Rhdkadcithdinadc;W:1:cjbf8RibaHadf8Rib:Iaz:Ghzadcwfhdarcufgrmbkkavc:GefaAcitfaz85ibaHc94fhHaicufhdaicb9kmbkkdndndndndnalPleddblk9ebbbbbbbbhhdnaxce9imbaxhddnaxceGTmbavc:Gefaxcitfgdc94fgoao8Ribgzad8Ribgs:Ggg85ibadasazag:H:G85ibaxcufhdkaxceSmbadcdfhoadcitavc:Geffc9Wfhdinadad8Ribgsadcwfgr8RibggadczfgH8Ribg8J:Ggz:Gg8K85ibaHa8Jagaz:H:G85ibarazasa8K:H:G85ibadc9Wfhdaoc9:fgocd9kmbkaxceSmbaxcefhoaxcitavc:Geffc94fhdinadad8Ribgzadcwfgr8Ribgs:Ggg85ibarasazag:H:G85ibadc94fhdaocufgocd0mbkaxcefhoavc:Gefaxcitfhd9ebbbbbbbbhhinahad8Rib:Ghhadc94fhdaocufgocd0mbkkav8Ri:Gehza8Fmdaeaz85ibaeah85izaeav8Ri:Oe85iwxikdndnaxcb9omb9ebbbbbbbbhzxekdndnaxciGci9hmb9ebbbbbbbbhzaxhoxekaxcefciGhravc:Gefaxcitfhd9ebbbbbbbbhzaxhoinaocufhoazad8Rib:Ghzadc94fhdarcufgrmbkkaxci6mbaocefhraocitavc:Geffc9OfhdinazadcKf8Rib:Gadczf8Rib:Gadcwf8Rib:Gad8Rib:Ghzadc9Gfhdarc98fgrmbkkaeaz:Aaza8FE85ibxdkdndnaxcb9omb9ebbbbbbbbhzxekdndnaxciGci9hmb9ebbbbbbbbhzaxhoxekaxcefciGhravc:Gefaxcitfhd9ebbbbbbbbhzaxhoinaocufhoazad8Rib:Ghzadc94fhdarcufgrmbkkaxci6mbaocefhraocitavc:Geffc9OfhdinazadcKf8Rib:Gadczf8Rib:Gadcwf8Rib:Gad8Rib:Ghzadc9Gfhdarc98fgrmbkkaeaz:Aaza8FE85ibav8Ri:Geaz:Hhzcehddnaxce9imbaxciGhodnaxcufci6mbaxc;8FFFrGhHavc:Gefcafhdcbhrinazadc9Of8Rib:Gadc9Wf8Rib:Gadc94f8Rib:Gad8Rib:GhzadcafhdaHarclfgr9hmbkaoTmearcefhdkavc:Gefadcitfhdinazad8Rib:Ghzadcwfhdaocufgombkkaeaz:Aaza8FE85iwxekaeaz:A85ibaeah:A85izaeav8Ri:Oe:A85iwkavc:Wlf8Kjjjjba5crGk:ediiue98eu8Jjjjjbcz9Rgd8Kjjjjbdndnab:8gicFFFFrGglc;A:F:K;Ul0mbaeab:7gvav9e:d;i;j9T8W9F;KZ:I9ebbbbbbUJ:G9ebbbbbbU;d:Ggv9ebbb9q;7h;5:;:I:Gav9e9J9I8A9H:0z9r:::I:G85ibav;8dhlxekdnalcjjj;8r6mbaeabab:t:785ibcbhlxekadalalcL4c;Q9:fgocLt9R:::785iwadcwfadaocecbz:kjjjbhlad8Ribhvdnaicu9kmbaeav:A85ibcbal9Rhlxekaeav85ibkadczf8Kjjjjbalk;piiiue99e988Jjjjjbcz9Rge8Kjjjjbdndnab:8gdcFFFFrGgic;A:F:K;6i0mbJbbjZhlaicjjj;mi6meab:7z1jjjbhlxekdnaic;r:N;T:dl0mbdnaic;K:x;Bjl6mb9eKR9e9u;7hDn9eKR9e9u;7hD;aadcb9iEab:7:Gz1jjjb:mhlxdkab:7hvdnadcu9kmbav9eKR9e9u;7h;5Z:Gz:jjjjbhlxdk9eKR9e9u;7h;5Zav:Hz:jjjjbhlxekdnaic;v;J1:hl0mbdnaic;G;B:;:fl6mb9eKR9e9u;7hYn9eKR9e9u;7hY;aadcb9iEab:7:Gz1jjjbhlxdkdnadcu9kmb9e;sh8Zu98;zO;aab:7:Hz:jjjjbhlxdkab:79e;sh8Zu98;zO;a:Gz:jjjjbhlxekdnaicjjj;8r6mbabab:thlxekabaecwfz:ljjjbhiae8RiwhvdndndndnaiciGPlbedibkavz1jjjbhlxikav:Az:jjjjbhlxdkavz1jjjb:mhlxekavz:jjjjbhlkaeczf8Kjjjjbalk:Uebdndnaecjw9imbab9ebbbbbb;Gu:IhbdnaecFs9pmbaec:b94fhexdkab9ebbbbbb;Gu:IhbaecpLaecpL6Ec:c9Wfhexekaec:b949kmbab9ebbbbbb9Gi:Ihbdnaec:49W9nmbaec;jrfhexekab9ebbbbbb9Gi:Ihbaec;W9Oaec;W9O0EcMsfhekabaecFrf:T9c80:g:;:Ikk;mQdbcj:Gdk:WQebbbdbbbbbbbebbbibbblbbblbbbobbb:d;5:Ib9e9o9Ub;88PXb;r9x8Nb;D80;1b9I;B;ab88:z:vbc:qJb9J9r;:b:7;E:Rb:39H;fb869U8Kb;s9n9cb6o;GbD;Q8Ub3M;rb;R5;:b8P:X3b;O8::Nb;181:cb9e:78Ub:C;P:eb:08M9Wbc9:9Fb;w:r85b9t:d85b:C;085b:l9F:eby;5:9b;48F87b;EF:xbs:yvbH8V;Vbq9A:lb9T8F9Tb;p9:BbD;l8NbS9p:3b:E9MZbR;Q9Fb:68N91b;L;R;hb8997;Xb;385rbM9s:kb;79R;Qb8F:X9Fbw9D:nb8Wi9wb97;8Sb;W:R9Rba:8;pbB;0:Ab;J:P5b9E9H:rbwE;Mb:f:zWb:GC9Fb:nn9Obj;yFb8N79nboo8Xb;k9wXb;j:O7b97;I9Gb9R:m;abY;e9hb;n9N;dbD;O;Cb9z:dIb:l4;eb:M3:wb9e:V;DbY9x;rb:L8:vbvrFb8Z9:Zb;c8Y;Ob:y9p;Eb:7998Yb8M89;db8E9R;Vb:F;49Eb818F86bu;Y;kb;X:h5b98:qhbf8K98b;v9U;6b8WR93bX87Jb:1C;gb;dY:Db:T;e;cb8S9ncbxb9Db:g99Sb;JGRb:B;g:Ab8Z9Ibb:0;s98b:0:N:xb839v;vb;x8:;2b:JzKb9n4;8b9K:DIb9W;x:Rb9J98;4b96:W9xbLX;Nb;a69wb87;w;zb:N:eUb8K8J;lb;w:k93b9A9u8Jbb8F:5b;XqEbY;o;Fb:F8XFb9M8Efb:z9x9Hb:S;79hb9:u;ybgW:3b8Y;O:jb;M:;9Gb;V;e;nb2BDb9DZ;ubQ;E;xb9y87;Eb;E:BMb;sgyby:g;Ob;I9y9nb;g;k8Ybw;JQb;G99;lbL;a9qb;Z5:NbK;G9Bb8UA80b:dO9Ib:d9ieb;1:o9Bb:T:Wub8E;P;Yb9i9kJbz9N;tb:Q;D;yb:U9F9cbf9H;obqy:Kb;t:z:0bo:M;Yb9C93ub:J;c:db9H881b:k794b:V:m9Ab9V;x:9bR:M9Jb;0:;;lb:n:b;Vb8M;b9Nb9v;kTb;k;zBby:O;sb;c9H:nbO;j93bl8MCbOS:Bb;e9z;eb;i;f9eb9n:Y:rbbL;Zb;uJ:Tb8P6;Lbp;vzbb::;8b8EN;mb9W;o;UbA8:;1b;S;Xjb:Z;N;db;h;4yb:tvNb;bG8:b8UD:ZbkT;Zb1O:Cb:Ra97b8U:1:Fb9hM;cb978Y8Vbx9v9TbV:N:qb9R;N8Fb8X;l:wb95Q9kbc95;Ib;0;F:jb;ON:xb;I;M:eb:z8X:xb1;T9Rb9F9FBb:7pPb9i:A:0b9N:K2bGV9cb:n9D8Yb:FX:4b:8;LDb:n8X8Lb;3t85b8Wv3bmxeb0w9Ob8S;U9yb9h:Q:qbt;Ndb:9;w8Kb;399:Mb9U9iVb:FQ;Vb:oN:Mb:0:r;2b;r9t9rb;pq;Yba:y8Zb;109:b:Y9J9Ob;D8:9Fbn9Dib:f:jub9v9s8Pb839K;ab9T;yzb8Y9i8Yb9B9m91b9oG;ubT9u9UbkD;bbI;19PbC9M;vb8Nr:Db9Dl9qb:087;Bb;Q4;fb:h;5Lb69R99b58N:6b:w9P8Pb;g;m:Sb:TC9ub:q;Ifb1;z:jb8SV9qbl:K::b93rNb;Z8W9Wbb;88Nb;QG:Ob9M;c6b9K;G89b:x;D:db:JZ:xbJNpbm:g:mb8Xc;EbM85:Db;D9W:mbL:3;Nbw;F87bX838Rb9Cj:Gb9Aj:tbzHMbs;O;yb2j:Vb;BF0bU:qsb9zK4b9I:LXb9H;l:7b;h:j:5bzn:9b;s;Ylb6918Nb;R:2;2b;Bg:7bqC:Qb:j8M8Vb9K:d4bD878ZbPN8Ab9r86:Qb5:J;cb:V;T:Ub9C8MOb9T;c9nbR96:Cb;a9w:xbiZ:dbD;W;2b8Rn:mb9T8X:zb85:0rbxaXb;y;d9Bb;1M;eb;g:T0b9o;k:Lb:N83;nb;M:PBb:RMNb;D9c9ObY9J;Eb4:m;Vb9O:l9sb;8;B83b:U:H:Rb;FX8Xbb:U:Hbx;7;Ab9K9n9Mb;Tv:3b8PW8Wb9x9w:;b9hF86bf;5:5b91::;Zby:t;Fb:Rj8Wb9M:m;2bl;lXb;6gob;z;K5b89:Z:Kb9xE:pbB;nDb9o9c;PbA:::Kb8Z8J:1b;W:Q8Ab9pW:Ob;s;b:LbkZsb9B94;nb8J;54b97:llb:jLVb;g:M9tb9V9U;Ib;V;Rbb:B9k9yb;e;A:3b:Q9M:6b4;p;pb;rd5b:X;XRb:m:z;bb;d:T93b:g9i;Ab;39D:Gb;gj;0b:S;W8Vb;D;S:AbZ9C:8b;q;E9Tb:q;h8FbI;B:2b:J8L86bb:V:Ab:T9t:tb:29xlb8PR:0b0j9:b;Ar:Nb4:QPb979z:HbQOIb;C:3Rb;6;Lpb:j;B;:b:j::pb;K42bo:P;8b8:j9Wb:f9UXbp:hFby8:rb9H9N8ZbIK:gb9n:9;Qb:Z;N:Vb:p9T9Ub:v9N85b8X:;9Bb:e;x9ib8W;FQb;hRJb8L9H81b;j9W;ob8W;l:4b:;2pb:Kb:Ibv2;Kb9A;D:Gbh9V9hb9IO;sb:59C:eb9W9H6b9R9w;Gb:z9seb9q9v83b8E;v:3b8Z;X;ebA9U9Fb9D8W;Kb:f8U:Pb5:Y;db:H8YBbw:3:Kb;Q:X;ubQ;3hb:p9P;Kb8NF93bxijb:nnRb9p;n:Gba:L:zb:Z:I;tb8V9Dqb:0;59cbH;A;lb99::;qb:B;B;bb:RL:9b;k:I:bbwf9Cb8U9vLb8Nb9vbuC;Wb;Hr:gbCk9Kb:wc:nb:h::;Eb;ApIb9R8L:2b97:j80bv;Z;:b:5:;:Eb9Of9pb9kI:Ob9p;e9AbR;4:8b;x9A:yb;0;h:vbm9n:nba86:Mb:K9x9FbCZ:XbjU:vb;maebG;D:gb;j;E:2b:;9G;1b9nWHber9Rb:m:W:Sb:Y;a;qb9r9v9ib8E;7Pb:vV;db:Jo87b;an81bo;C97b;GT;mb9o8P;6b;w;k;ib;O;Zcb989K;Eb:B9K;yb;z::8Xb:K:x;db939y;ub9P;J;fb;W;AAb:68688bSKSb9v919Fb;s:9;1b9UM;gb:S8U9DbP9e;Tb38:9cb9H;e:hb8Pp;Pb;N;w;Zbg98;kb9V:r81bw;G;fbF;x:nb9Uf;Ib:Wp;gb:tw;bb989Dtb9R:T:Yb;n9U:Db8:V97b;gHfb;3;p:Pb8P7;Fb:1;j:6b:3b9rb;I:Ymbt:68Kb;L999Gbt;y:kbmX8Sb:bKxb9:9MNbe8PQb:F964bpp::b9wT;Vb;z9:Bb;S;zAb:l:6:5b;e:x;8b8X:O8Nb;X9U;dbN;fBb;y:O9wb:0:O:1b;p;mPbO:jRb9V9x80b8S9w:jb:z;o;Jb;wa:5b9R9E:Qb8:I:CbH9F;mbpk9kb;H;0;7b:o879Tb;I:g8Sb;P;u:eb;8:0:Pb;V;U;rb8U81;jb8V859HbUh9ebE;z;ib:b;8qb;79kfb8V3;yb9t:0:eb9o:z:mb9ug;mbI9v;Cb;a;g;wbkY:wb8A9W:4b9P:v9Kb8M9A9GbZ9s;UbuHsb;0:1Hb;8;l;1b80:8Rb80:8;Ub;O9D;mb;D9E9Gb9N:o:BbM8Z;Vb;jL:4b9H9y:Bb;H9x:8b9r:d;gb;y8:zb;DG9ibR3;Db:VK:Hbh8SSb9z;Z;xb;z96:yb:E9u;ab9p:g;6b9wo;8b;L95:Ub:jgBbU:Tgb9N:t;Cb9v;O:Qb:c8MUb;k;N:Bb9rm:Kb:z8Z:Xb:P;xPb9Pv9ibW:Y;Wbu1:Nb19m:xb;5;rBbhM:Zb97:c9kb:y;phbn:F;Cb;C9h9vb;Ht86b9N;R9cb;::D;Fb9E;u9Fb979N:Kb:6:S96b9v;2:Ib8R18Jbc:69vb9z9UwbhI:gb859h:db:j;J;Mb;L:E;ub6;7nbF9w;Pb3s;kb;f9z:kbN;68Rb;t;b;fbs;f;pb;B9A:Ub9h;f:gb:fJ9Ibh:g87b8S95Nbz9H:hbI9m97bj8S8AbJ:;Ob18M:qb9488:jb:O;e;Kb;L;B97b;e86;cb8M;0;Qb;39N:kbmM:;bW:J8Rb89:t:Xb:998kb:K9r;Cb8N;D9Jb9P;H;Db:ANYb:O8P:vb9O;oybD;T:0b9e:Fab9o:y;kb9W:c9Jb9:988Jbs:58Yb:N;1:obC9w;Nbh;Xwb:1:DIb9V9:9nb:LY9rb:1;5:Rb:c;F;wb:w;D9HbQBdb;e86:Fb:d:I:HbV;T9Tb85:n96b:c:4:Pb9R8Y9CbS8N9Bbb80;Tb;sb93b;8;09vbe9z9nb;GGjbbbbbbbbbbbbn;7h;5ZbbbbR9et8:bbbj:yS;488bbb9G9r;m9487bbbj:dE;W85bbbna8L96Ubbbjg:c;JBbbbb5;Z9P81bc:W:2dkxebbbdbbbn:Bbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,a=WebAssembly.instantiate(i(n),{}).then(function(l){t=l.instance,t.exports.__wasm_call_ctors()});function i(l){for(var d=new Uint8Array(l.length),f=0;f<l.length;++f){var b=l.charCodeAt(f);d[f]=b>96?b-97:b>64?b-39:b+4}for(var x=0,f=0;f<l.length;++f)d[x++]=d[f]<60?e[d[f]]:(d[f]-60)*64+d[++f];return d.buffer.slice(0,x)}function s(l){if(!l)throw new Error("Assertion failed")}function r(l){return new Uint8Array(l.buffer,l.byteOffset,l.byteLength)}function o(l,d,f,b,x,y,u,p,v,E){var g=t.exports.sbrk,_=g(d*16),M=l?g(l.byteLength):0,m=g(f.byteLength),S=g(y.byteLength),C=g(p.byteLength),R=new Uint8Array(t.exports.memory.buffer);l&&R.set(r(l),M),R.set(r(f),m),R.set(r(y),S),R.set(r(p),C),t.exports.meshopt_generateTangents(_,M,d,m,b,x*4,S,u*4,C,v*4,E),R=new Uint8Array(t.exports.memory.buffer);var k=new Float32Array(R.buffer,_,d*4).slice();return g(_-g(0)),k}function c(l,d,f,b,x,y,u){var p=t.exports.sbrk,v=p(d*12),E=l?p(l.byteLength):0,g=p(f.byteLength),_=new Uint8Array(t.exports.memory.buffer);l&&_.set(r(l),E),_.set(r(f),g),t.exports.meshopt_generateNormals(v,E,d,g,b,x*4,y,u),_=new Uint8Array(t.exports.memory.buffer);var M=new Float32Array(_.buffer,v,d*3).slice();return p(v-p(0)),M}var h={Compatible:1,ZeroFallback:2};return{ready:a,supported:!0,generateTangents:function(l,d,f,b,x,y,u,p){s(l===null||l instanceof Uint32Array||l instanceof Int32Array||l instanceof Uint16Array||l instanceof Int16Array),s(l===null||l.length%3==0),s(d instanceof Float32Array),s(d.length%f==0),s(f>=3),s(b instanceof Float32Array),s(b.length%x==0),s(x>=3),s(y instanceof Float32Array),s(y.length%u==0),s(u>=2),s(d.length/f==b.length/x),s(d.length/f==y.length/u),s(l!==null||d.length/f%3==0);for(var v=0,E=0;E<(p?p.length:0);++E)s(p[E]in h),v|=h[p[E]];var g=d.length/f,_=l?l.length:g,M=l===null||l.BYTES_PER_ELEMENT==4?l:new Uint32Array(l);return o(M,_,d,g,f,b,x,y,u,v)},generateNormals:function(l,d,f,b,x){s(l===null||l instanceof Uint32Array||l instanceof Int32Array||l instanceof Uint16Array||l instanceof Int16Array),s(l===null||l.length%3==0),s(d instanceof Float32Array),s(d.length%f==0),s(f>=3),s(l!==null||d.length/f%3==0),s(b>=0&&b<=Math.PI),x=x||0;var y=d.length/f,u=l?l.length:y,p=l===null||l.BYTES_PER_ELEMENT==4?l:new Uint32Array(l);return c(p,u,d,y,f,b,x)}}})();async function of(n="./atlas/"){await Nh.ready;let e=new Mo;e.setMeshoptDecoder(Nh);let[t,a,i]=await Promise.all(["nervous","cardiovascular","skeletal"].map(d=>e.loadAsync(`${n}${d}.glb`))),s=[t.scene,a.scene,i.scene],r=new zt;r.name="Z-Anatomy \u4EBA\u4F53\u8111\u4E0E\u9888\u90E8\u8840\u7BA1\u56FE\u8C31\u8282\u9009";let o=new zt;o.name="\u539F\u56FE\u8C31\u7EDF\u4E00\u89E3\u5256\u5750\u6807",o.scale.setScalar(12),o.position.y=-18.7,r.add(o);let c={};for(let d of["\u8111\u4E0E\u8111\u5E72","\u9888\u690E","\u52A8\u8109","\u9759\u8109","\u9885\u9AA8"])c[d]=new zt,c[d].name=d,o.add(c[d]);let h={brain:new Ht({color:15051428,roughness:.88,side:pt}),cerebellum:new Ht({color:13207684,roughness:.86,side:pt}),stem:new Ht({color:14001309,roughness:.86,side:pt}),artery:new Ht({color:14898507,roughness:.48,side:pt}),vein:new Ht({color:3315384,roughness:.48,side:pt}),bone:new Ht({color:15130064,roughness:.81,side:pt}),skull:new Ht({color:14148325,roughness:.5,transparent:!0,opacity:.1,depthWrite:!1,side:pt})},l=[["brain","\u8111\u4E0E\u8111\u5E72","brain"],["cerebellum","\u8111\u4E0E\u8111\u5E72","cerebellum"],["brainstem","\u8111\u4E0E\u8111\u5E72","stem"],["cervical-vertebrae","\u9888\u690E","bone"],["skull","\u9885\u9AA8","skull"],["arteries-of-brain","\u52A8\u8109","artery"],["arteries-of-left-head-and-neck","\u52A8\u8109","artery"],["arteries-of-right-head-and-neck","\u52A8\u8109","artery"],["veins-of-brain","\u9759\u8109","vein"],["veins-of-left-head-and-neck","\u9759\u8109","vein"],["veins-of-right-head-and-neck","\u9759\u8109","vein"]];for(let[d,f,b]of l){let x=null;for(let y of s){let u=y.getObjectByName(d);if(u){x=u;break}}if(!x)throw new Error(`Atlas structure missing: ${d}`);x.removeFromParent(),x.material=h[b].clone(),c[f].add(x)}return{root:r,layers:c,source:"Z-Anatomy / BodyParts3D, CC BY-SA 4.0"}}async function wx(){let{root:n,layers:e}=await of(),t=document.querySelector("canvas"),a=new go({canvas:t,antialias:!0,alpha:!0});a.setPixelRatio(Math.min(devicePixelRatio,2)),a.outputColorSpace=lt;let i=new Wi;i.add(n),i.add(new os(16777215,4547703,2.1));let s=new bn(16777215,2.7);s.position.set(3,5,4),i.add(s);let r=new bn(9488098,1.3);r.position.set(-3,2,-3),i.add(r);let o=new xt(31,1,.1,100);o.position.set(5.1,1.3,2.8);let c=new _o(o,t);c.target.set(0,.23,0),c.enableDamping=!0,c.minDistance=2.7,c.maxDistance=12,c.update();let h={\u8111\u4E0E\u8111\u5E72:"#e8aaa9",\u9888\u690E:"#e6dfcf",\u52A8\u8109:"#e86658",\u9759\u8109:"#52aecd",\u9885\u9AA8:"#b0c5ce"},l=document.querySelector("#layers");for(let b of Object.keys(e)){let x=document.createElement("label");x.className="layer";let y=document.createElement("input");y.type="checkbox",y.checked=!0,y.addEventListener("change",()=>e[b].visible=y.checked);let u=document.createElement("i");u.style.background=h[b],x.append(y,u,document.createTextNode(b)),l.append(x)}function d(){let b=t.clientWidth,x=t.clientHeight;a.setSize(b,x,!1),o.aspect=b/x,o.updateProjectionMatrix()}new ResizeObserver(d).observe(t);function f(){c.update(),a.render(i,o),requestAnimationFrame(f)}d(),f(),document.querySelector("#loading").hidden=!0}wx().catch(n=>{console.error(n);let e=document.querySelector("#loading");e.textContent="\u6A21\u578B\u52A0\u8F7D\u672A\u5B8C\u6210\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u8BD5\u3002",e.setAttribute("role","alert")});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
