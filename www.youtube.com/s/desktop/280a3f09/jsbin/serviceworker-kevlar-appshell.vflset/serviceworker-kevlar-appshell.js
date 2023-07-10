/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ca=ba(this);function da(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
function ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function r(a){return ea(a())}
function fa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
da("Array.prototype.values",function(a){return a?a:function(){return fa(this,function(b,c){return c})}});
da("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}});
da("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
da("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});
da("String.prototype.matchAll",function(a){return a?a:function(b){if(b instanceof RegExp&&!b.global)throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");var c=new RegExp(b,b instanceof RegExp?void 0:"g"),d=this,e=!1,f={next:function(){if(e)return{value:void 0,done:!0};var g=c.exec(d);if(!g)return e=!0,{value:void 0,done:!0};""===g[0]&&(c.lastIndex+=1);return{value:g,done:!1}}};
f[Symbol.iterator]=function(){return f};
return f}});
da("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
var t=this||self;function v(a,b){a=a.split(".");b=b||t;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function ha(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function ia(a,b,c){return a.call.apply(a.bind,arguments)}
function ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function ka(a,b,c){ka=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return ka.apply(null,arguments)}
function w(a,b){a=a.split(".");var c=t;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function la(a,b){function c(){}
c.prototype=b.prototype;a.gb=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ec=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function ma(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ma);else{const c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
la(ma,Error);ma.prototype.name="CustomError";function na(){}
;function oa(a,b){Array.prototype.forEach.call(a,b,void 0)}
function pa(a,b){return Array.prototype.map.call(a,b,void 0)}
function qa(a,b){b=Array.prototype.indexOf.call(a,b,void 0);0<=b&&Array.prototype.splice.call(a,b,1)}
function ra(a,b){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(ha(d)){const e=a.length||0,f=d.length||0;a.length=e+f;for(let g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function sa(a){for(const b in a)return!1;return!0}
function ta(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());const b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length);for(const c in a)b[c]=ta(a[c]);return b}
const ua="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function va(a,b){let c,d;for(let e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(let f=0;f<ua.length;f++)c=ua[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function wa(){}
function xa(a){return new wa(ya,a)}
var ya={};xa("");var za=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var Aa,Ba=v("CLOSURE_FLAGS"),Da=Ba&&Ba[610401301];Aa=null!=Da?Da:!1;function Ea(){var a=t.navigator;return a&&(a=a.userAgent)?a:""}
var Fa;const Ga=t.navigator;Fa=Ga?Ga.userAgentData||null:null;function Ha(a){return Aa?Fa?Fa.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1:!1}
function y(a){return-1!=Ea().indexOf(a)}
;function Ia(){return Aa?!!Fa&&0<Fa.brands.length:!1}
function Ja(){return Ia()?Ha("Chromium"):(y("Chrome")||y("CriOS"))&&!(Ia()?0:y("Edge"))||y("Silk")}
;var Ka=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function La(a){return a?decodeURI(a):a}
function Ma(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ma(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Na(a){var b=[],c;for(c in a)Ma(c,a[c],b);return b.join("&")}
;function Oa(){this.j=this.j;this.l=this.l}
Oa.prototype.j=!1;Oa.prototype.dispose=function(){this.j||(this.j=!0,this.W())};
Oa.prototype.W=function(){if(this.l)for(;this.l.length;)this.l.shift()()};function Pa(a){var b=v("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||t.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Qa(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ra[c])c=Ra[c];else{c=String(c);if(!Ra[c]){var f=/function\s+([^\(]+)/m.exec(c);Ra[c]=f?f[1]:"[Anonymous]"}c=Ra[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Qa(a,b){b||(b={});b[Sa(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Sa(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Qa(a,b));return c}
function Sa(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ra={};var Ta=Ia()?!1:y("Trident")||y("MSIE");function Ua(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
class Va{constructor(a,b){this.j=a;this.l=b;this.i=0;this.h=null}get(){let a;0<this.i?(this.i--,a=this.h,this.h=a.next,a.next=null):a=this.j();return a}};function Xa(a){t.setTimeout(()=>{throw a;},0)}
;class Ya{constructor(){this.i=this.h=null}add(a,b){const c=Za.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c}remove(){let a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a}}var Za=new Va(()=>new $a,a=>a.reset());
class $a{constructor(){this.next=this.scope=this.h=null}set(a,b){this.h=a;this.scope=b;this.next=null}reset(){this.next=this.scope=this.h=null}};let ab,bb=!1,cb=new Ya,eb=(a,b)=>{ab||db();bb||(ab(),bb=!0);cb.add(a,b)},db=()=>{const a=t.Promise.resolve(void 0);
ab=()=>{a.then(fb)}};
var fb=()=>{let a;for(;a=cb.remove();){try{a.h.call(a.scope)}catch(b){Xa(b)}Ua(Za,a)}bb=!1};function z(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=na)try{var b=this;a.call(void 0,function(c){gb(b,2,c)},function(c){gb(b,3,c)})}catch(c){gb(this,3,c)}}
function hb(){this.next=this.context=this.i=this.j=this.h=null;this.l=!1}
hb.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.l=!1};
var ib=new Va(function(){return new hb},function(a){a.reset()});
function jb(a,b,c){var d=ib.get();d.j=a;d.i=b;d.context=c;return d}
function kb(a){if(a instanceof z)return a;var b=new z(na);gb(b,2,a);return b}
z.prototype.then=function(a,b,c){return lb(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
z.prototype.$goog_Thenable=!0;q=z.prototype;q.jb=function(a,b){return lb(this,null,a,b)};
q.catch=z.prototype.jb;q.cancel=function(a){if(0==this.h){var b=new mb(a);eb(function(){nb(this,b)},this)}};
function nb(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.l||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?nb(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ob(c),pb(c,e,3,b)))}a.j=null}else gb(a,3,b)}
function qb(a,b){a.i||2!=a.h&&3!=a.h||rb(a);a.l?a.l.next=b:a.i=b;a.l=b}
function lb(a,b,c,d){var e=jb(null,null,null);e.h=new z(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.i=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof mb?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;qb(a,e);return e.h}
q.kb=function(a){this.h=0;gb(this,2,a)};
q.lb=function(a){this.h=0;gb(this,3,a)};
function gb(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.kb,f=a.lb;if(d instanceof z){qb(d,jb(e||na,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{h=typeof d;if("object"==h&&null!=d||"function"==h)try{var k=d.then;if("function"===typeof k){sb(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.h=b,a.j=null,rb(a),3!=b||c instanceof mb||tb(a,c))}}
function sb(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function rb(a){a.o||(a.o=!0,eb(a.Qa,a))}
function ob(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
q.Qa=function(){for(var a;a=ob(this);)pb(this,a,this.h,this.u);this.o=!1};
function pb(a,b,c,d){if(3==c&&b.i&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,ub(b,c,d);else try{b.l?b.j.call(b.context):ub(b,c,d)}catch(e){vb.call(null,e)}Ua(ib,b)}
function ub(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function tb(a,b){a.m=!0;eb(function(){a.m&&vb.call(null,b)})}
var vb=Xa;function mb(a){ma.call(this,a)}
la(mb,ma);mb.prototype.name="cancel";function wb(a,b){return Error(`Invalid wire type: ${a} (at position ${b})`)}
function xb(){return Error("Failed to read varint, encoding is invalid.")}
function yb(a,b){return Error(`Tried to read past the end of the data ${b} > ${a}`)}
;function zb(){throw Error("Invalid UTF8");}
function Ab(a,b){b=String.fromCharCode.apply(null,b);return null==a?b:a+b}
let Bb=void 0,Cb;const Db="undefined"!==typeof TextDecoder;!y("Android")||Ja();Ja();var Eb=y("Safari")&&!(Ja()||(Ia()?0:y("Coast"))||(Ia()?0:y("Opera"))||(Ia()?0:y("Edge"))||(Ia()?Ha("Microsoft Edge"):y("Edg/"))||(Ia()?Ha("Opera"):y("OPR"))||y("Firefox")||y("FxiOS")||y("Silk")||y("Android"))&&!(y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"));var Fb={},Gb=null;function Hb(a,b){void 0===b&&(b=0);Ib();b=Fb[b];const c=Array(Math.floor(a.length/3)),d=b[64]||"";let e=0,f=0;for(;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Jb(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Kb(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Kb(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=Gb[l];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Ib();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Ib(){if(!Gb){Gb={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Fb[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Gb[f]&&(Gb[f]=e)}}}}
;var Lb="undefined"!==typeof Uint8Array,Mb=!Ta&&"function"===typeof btoa;function Nb(a){if(!Mb)return Hb(a);let b="",c=0;const d=a.length-10240;for(;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
const Ob=/[-_.]/g,Pb={"-":"+",_:"/",".":"="};function Qb(a){return Pb[a]||""}
function Rb(a){if(!Mb)return Jb(a);Ob.test(a)&&(a=a.replace(Ob,Qb));a=atob(a);const b=new Uint8Array(a.length);for(let c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b}
function Sb(a){return Lb&&null!=a&&a instanceof Uint8Array}
let Tb;var Ub={};let Vb;function Wb(a){if(a!==Ub)throw Error("illegal external caller");}
function Yb(){return Vb||(Vb=new Zb(null,Ub))}
function $b(a){Wb(Ub);var b=a.Z;b=null==b||Sb(b)?b:"string"===typeof b?Rb(b):null;return null==b?b:a.Z=b}
var Zb=class{constructor(a,b){Wb(b);this.Z=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}Aa(){return null==this.Z}sizeBytes(){const a=$b(this);return a?a.length:0}};function ac(a){if("string"===typeof a)return{buffer:Rb(a),I:!1};if(Array.isArray(a))return{buffer:new Uint8Array(a),I:!1};if(a.constructor===Uint8Array)return{buffer:a,I:!1};if(a.constructor===ArrayBuffer)return{buffer:new Uint8Array(a),I:!1};if(a.constructor===Zb)return{buffer:$b(a)||Tb||(Tb=new Uint8Array(0)),I:!0};if(a instanceof Uint8Array)return{buffer:new Uint8Array(a.buffer,a.byteOffset,a.byteLength),I:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
;const bc="function"===typeof Uint8Array.prototype.slice;function cc(a,b){a.h=b;if(b>a.i)throw yb(a.i,b);}
function dc(a){const b=a.j;let c=a.h,d=b[c++],e=d&127;if(d&128&&(d=b[c++],e|=(d&127)<<7,d&128&&(d=b[c++],e|=(d&127)<<14,d&128&&(d=b[c++],e|=(d&127)<<21,d&128&&(d=b[c++],e|=d<<28,d&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128)))))throw xb();cc(a,c);return e}
function ec(a,b){if(0>b)throw Error(`Tried to read a negative byte length: ${b}`);const c=a.h,d=c+b;if(d>a.i)throw yb(b,a.i-c);a.h=d;return c}
var fc=class{constructor(a,b){this.j=null;this.m=!1;this.h=this.i=this.l=0;this.init(a,void 0,void 0,b)}init(a,b,c,{ja:d=!1}={}){this.ja=d;a&&(a=ac(a),this.j=a.buffer,this.m=a.I,this.l=b||0,this.i=void 0!==c?this.l+c:this.j.length,this.h=this.l)}clear(){this.j=null;this.m=!1;this.h=this.i=this.l=0;this.ja=!1}reset(){this.h=this.l}advance(a){cc(this,this.h+a)}},gc=[];function hc(a,{xa:b=!1}={}){a.xa=b}
function ic(a){var b=a.h;if(b.h==b.i)return!1;a.j=a.h.h;var c=dc(a.h)>>>0;b=c>>>3;c&=7;if(!(0<=c&&5>=c))throw wb(c,a.j);if(1>b)throw Error(`Invalid field number: ${b} (at position ${a.j})`);a.l=b;a.i=c;return!0}
function jc(a){switch(a.i){case 0:if(0!=a.i)jc(a);else a:{a=a.h;var b=a.h;const c=b+10,d=a.j;for(;b<c;)if(0===(d[b++]&128)){cc(a,b);break a}throw xb();}break;case 1:a.h.advance(8);break;case 2:2!=a.i?jc(a):(b=dc(a.h)>>>0,a.h.advance(b));break;case 5:a.h.advance(4);break;case 3:b=a.l;do{if(!ic(a))throw Error("Unmatched start-group tag: stream EOF");if(4==a.i){if(a.l!=b)throw Error("Unmatched end-group tag");break}jc(a)}while(1);break;default:throw wb(a.i,a.j);}}
var kc=class{constructor(a,b){if(gc.length){const c=gc.pop();c.init(a,void 0,void 0,b);a=c}else a=new fc(a,b);this.h=a;this.j=this.h.h;this.i=this.l=-1;hc(this,b)}reset(){this.h.reset();this.j=this.h.h;this.i=this.l=-1}advance(a){this.h.advance(a)}},lc=[];class mc{constructor(a){this.h=a}};function nc(a){return Array.prototype.slice.call(a)}
;const A="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;[...Object.values({Sb:1,Rb:2,Qb:4,Wb:8,Vb:16,pb:32,ac:64,ub:128,tb:256,vb:512})];var oc=A?(a,b)=>{a[A]|=b}:(a,b)=>{void 0!==a.D?a.D|=b:Object.defineProperties(a,{D:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function pc(a){const b=B(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=nc(a)),E(a,b|1))}
var qc=A?(a,b)=>{a[A]&=~b}:(a,b)=>{void 0!==a.D&&(a.D&=~b)},B=A?a=>a[A]|0:a=>a.D|0,F=A?a=>a[A]:a=>a.D,E=A?(a,b)=>{a[A]=b}:(a,b)=>{void 0!==a.D?a.D=b:Object.defineProperties(a,{D:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function rc(a){oc(a,1);return a}
function sc(a,b){E(b,(a|0)&-51)}
function tc(a,b){E(b,(a|18)&-41)}
function uc(a){a=a>>10&1023;return 0===a?536870912:a}
;var vc={};function wc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
let xc;function yc(a,b,c){if(!Array.isArray(a)||a.length)return!1;const d=B(a);if(d&1)return!0;if(!b||!b.includes(c))return!1;E(a,d|1);return!0}
var zc;const Ac=[];E(Ac,23);zc=Object.freeze(Ac);function Bc(a){if(a&2)throw Error();}
let Cc;function Dc(a){return a.displayName||a.name||"unknown type name"}
function Ec(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Fc(a,b){if(!(a instanceof b))throw Error(`Expected instanceof ${Dc(b)} but got ${a&&Dc(a.constructor)}`);return a}
function Gc(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.na===vc)return a;if(d){var e=d=B(a);0===e&&(e|=c&16);e|=c&2;e!==d&&E(a,e);return new b(a)}}
;function Hc(a,b){a=a.s;return Ic(a,F(a),b)}
function Ic(a,b,c,d){if(-1===c)return null;if(c>=uc(b)){if(b&128)return a[a.length-1][c]}else{var e=a.length;if(d&&b&128&&(d=a[e-1][c],null!=d))return d;b=c+((b>>8&1)-1);if(b<e)return a[b]}}
function G(a,b,c,d){const e=a.s,f=F(e);Bc(f);Jc(e,f,b,c,d);return a}
function Jc(a,b,c,d,e){var f=uc(b);if(c>=f||e){e=b;if(b&128)f=a[a.length-1];else{if(null==d)return;f=a[f+((b>>8&1)-1)]={};e|=128}f[c]=d;e&=-513;e!==b&&E(a,e)}else a[c+((b>>8&1)-1)]=d,b&128&&(d=a[a.length-1],c in d&&delete d[c]),b&512&&E(a,b&-513)}
function Kc(a,b,c,d,e){var f=b&2;let g=Ic(a,b,c,e);Array.isArray(g)||(g=zc);const h=B(g);h&1||rc(g);if(f)h&2||oc(g,18),d&1||Object.freeze(g);else{f=!(d&2);const k=h&2;d&1||!k?f&&h&16&&!k&&qc(g,16):(g=rc(nc(g)),Jc(a,b,c,g,e))}return g}
function Lc(a,b,c,d){const e=a.s,f=F(e);Bc(f);(c=Mc(e,f,c))&&c!==b&&null!=d&&Jc(e,f,c);Jc(e,f,b,d);return a}
function Nc(a,b,c){a=a.s;return Mc(a,F(a),b)===c?c:-1}
function Mc(a,b,c){let d=0;for(let e=0;e<c.length;e++){const f=c[e];null!=Ic(a,b,f)&&(0!==d&&Jc(a,b,d),d=f)}return d}
function Oc(a,b,c){var d=a.s,e=F(d),f=Ic(d,e,c,!1);b=Gc(f,b,e);b!==f&&null!=b&&Jc(d,e,c,b,!1);d=b;if(null==d)return d;a=a.s;e=F(a);e&2||(f=Pc(d),f!==d&&(d=f,Jc(a,e,c,d,!1)));return d}
function Qc(a,b,c,d,e){var f=!!(b&2),g=Kc(a,b,d,1);if(g===zc||!(B(g)&4)){var h=g;g=!!(b&2);var k=!!(B(h)&2);f=h;!g&&k&&(h=nc(h));var l=b|(k?2:0);k=k||void 0;let m=0,n=0;for(;m<h.length;m++){const u=Gc(h[m],c,l);void 0!==u&&(k=k||F(u.s)&2,h[n++]=u)}n<m&&(h.length=n);c=h;h=B(c);l=h|5;k=k?l&-9:l|8;h!=k&&(Object.isFrozen(c)&&(c=nc(c)),E(c,k));h=c;f!==h&&Jc(a,b,d,h);(g&&2!==e||1===e)&&Object.freeze(h);return h}if(3===e)return g;f||(f=Object.isFrozen(g),1===e?f||Object.freeze(g):(e=B(g),c=e&-19,f&&(g=nc(g),
e=0,Jc(a,b,d,g)),e!==c&&E(g,c)));return g}
function Rc(a){a=a.s;var b=F(a),c=!!(b&2);a=Qc(a,b,Sc,1,c?1:2);if(!(c||B(a)&8)){for(c=0;c<a.length;c++){b=a[c];const d=Pc(b);b!==d&&(a[c]=d)}oc(a,8)}return a}
function H(a,b,c,d){null!=d?Fc(d,b):d=void 0;return G(a,c,d)}
function Tc(a,b,c,d,e){null!=e?Fc(e,b):e=void 0;Lc(a,c,d,e)}
function Uc(a,b,c,d){a=a.s;const e=F(a);Bc(e);b=Qc(a,e,c,b,2);c=null!=d?Fc(d,c):new c;b.push(c);c.I()&&qc(b,8);e&512&&E(a,e&-513);return c}
function Vc(a){a:if(a=Hc(a,4),null!=a){switch(typeof a){case "string":a=+a;break a;case "number":break a}a=void 0}return a}
function Wc(a,b){a=Hc(a,b);return null==a||"string"===typeof a?a:void 0}
function I(a,b,c){return G(a,b,Ec(c))}
function Xc(a,b){a=Wc(a,b);return null!=a?a:""}
;let Yc;function Zc(a,b){Yc=b;a=new a(b);Yc=void 0;return a}
function $c(a,b,c){const d=1023+b,e=a.length;for(let f=d;f<e;f++){const g=a[f];null!=g&&g!==c&&(c[f-b]=g)}a.length=d+1;a[d]=c}
;function ad(a,b){return bd(b)}
function bd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)){if(Sb(a))return Nb(a);if(a instanceof Zb){const b=a.Z;return null==b?"":"string"===typeof b?b:a.Z=Nb(b)}}}return a}
;function cd(a,b,c){const d=nc(a);var e=d.length;const f=b&128?d[e-1]:void 0;e+=f?-1:0;for(b=b&256?1:0;b<e;b++)d[b]=c(d[b]);if(f){b=d[b]={};for(const g in f)b[g]=c(f[g])}(a=Cc?a[Cc]:void 0)&&(d[Cc]=nc(a));return d}
function dd(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&B(a)&1?void 0:f&&B(a)&2?a:ed(a,b,c,void 0!==d,e,f);else if(wc(a)){const g={};for(let h in a)g[h]=dd(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function ed(a,b,c,d,e,f){const g=d||c?B(a):0;d=d?!!(g&16):void 0;a=nc(a);for(let h=0;h<a.length;h++)a[h]=dd(a[h],b,c,d,e,f);c&&c(g,a);return a}
function fd(a){return a.na===vc?a.toJSON():bd(a)}
;function gd(a,b,c=tc){if(null!=a){if(Lb&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){const d=B(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return E(a,d|18),a;a=ed(a,gd,d&4?tc:c,!0,!1,!0);b=B(a);b&4&&b&2&&Object.freeze(a);return a}a.na===vc&&(b=a.s,c=F(b),a=c&2?a:hd(a,b,c,!0));return a}}
function hd(a,b,c,d){const e=d||c&2?tc:sc,f=!!(c&16);b=cd(b,c,g=>gd(g,f,e));
oc(b,16|(d?2:0));return Zc(a.constructor,b)}
function Pc(a){var b=a.s;const c=F(b);if(!(c&2))return a;b=hd(a,b,c,!1);b.i=a;oc(b.s,512);return b}
;var J=class{constructor(a,b,c){a:{null==a&&(a=Yc);Yc=void 0;if(null==a){var d=48;c?(a=[c],d|=256):a=[];b&&(d=d&-1047553|(b&1023)<<10)}else{if(!Array.isArray(a))throw Error();d=B(a);if(d&32)break a;d|=32;if(c&&(d|=256,c!==a[0]))throw Error();b:{c=a;var e=c.length;if(e){const g=e-1;var f=c[g];if(wc(f)){d|=128;b=(d>>8&1)-1;e=g-b;1024<=e&&($c(c,b,f),e=1023);d=d&-1047553|(e&1023)<<10;break b}}b&&(f=(d>>8&1)-1,b=Math.max(b,e-f),1024<b&&($c(c,f,{}),d|=128,b=1023),d=d&-1047553|(b&1023)<<10)}}E(a,d)}this.s=
a}toJSON(){if(xc)var a=id(this,this.s,!1);else a=ed(this.s,fd,void 0,void 0,!1,!1),a=id(this,a,!0);return a}clone(){const a=this.s;return hd(this,a,F(a),!1)}I(){return!!(B(this.s)&2)}};J.prototype.na=vc;
function id(a,b,c){const d=a.constructor.A;var e=F(c?a.s:b),f=uc(e),g=!1;if(d){if(!c){b=nc(b);var h;if(b.length&&wc(h=b[b.length-1]))for(g=0;g<d.length;g++)if(d[g]>=f){Object.assign(b[b.length-1]={},h);break}g=!0}f=b;c=!c;h=F(a.s);a=uc(h);h=(h>>8&1)-1;var k;for(let Ca=0;Ca<d.length;Ca++){var l=d[Ca];if(l<a){l+=h;var m=f[l];null==m?f[l]=c?zc:rc([]):c&&m!==zc&&pc(m)}else{if(!k){var n=void 0;f.length&&wc(n=f[f.length-1])?k=n:f.push(k={})}m=k[l];null==k[l]?k[l]=c?zc:rc([]):c&&m!==zc&&pc(m)}}}k=b.length;
if(!k)return b;let u,p;if(wc(n=b[k-1])){a:{var x=n;f={};c=!1;for(var C in x)a=x[C],Array.isArray(a)&&(h=a,yc(a,d,+C)&&(a=null),a!=h&&(c=!0)),null!=a?f[C]=a:c=!0;if(c){for(let Ca in f){x=f;break a}x=null}}x!=n&&(u=!0);k--}for(e=(e>>8&1)-1;0<k;k--){C=k-1;n=b[C];if(null!=n&&!yc(n,d,C-e))break;p=!0}if(!u&&!p)return b;var D;g?D=b:D=Array.prototype.slice.call(b,0,k);b=D;g&&(b.length=k);x&&b.push(x);return b}
;const jd=Symbol();function kd(a){let b=a[jd];if(!b){const c=ld(a),d=c.i;b=d?(e,f)=>d(e,f,c):(e,f)=>{for(;ic(f)&&4!=f.i;){var g=f.l,h=c[g];
if(!h){var k=c.extensions;k&&(k=k[g])&&(h=c[g]=md(k))}if(!h||!h(f,e,g)){g=e.s;k=f;h=k.j;jc(k);if(k.xa)h=void 0;else{var l=k.h.h-h;k.h.h=h;b:{k=k.h;h=l;if(0==h){h=Yb();break b}const m=ec(k,h);k.ja&&k.m?h=k.j.subarray(m,m+h):(k=k.j,l=m,h=m+h,h=l===h?Tb||(Tb=new Uint8Array(0)):bc?k.slice(l,h):new Uint8Array(k.subarray(l,h)));h=0==h.length?Yb():new Zb(h,Ub)}}h&&(Cc||(Cc=Symbol()),(k=g[Cc])?k.push(h):g[Cc]=[h])}}return e};
a[jd]=b}return b}
function nd(a){if(a=a.La)return kd(a)}
function md(a){const b=nd(a),c=a.oc.h;if(b){const d=ld(a.La).h;return(e,f,g)=>c(e,f,g,d,b)}return(d,e,f)=>c(d,e,f)}
function od(a,b){let c=a[b];"function"==typeof c&&0===c.length&&(c=c(),a[b]=c);return Array.isArray(c)&&(pd in c||qd in c||0<c.length&&"function"==typeof c[0])?c:void 0}
const qd=Symbol(),pd=Symbol();function rd(a,b){const c=a.h;return b?(d,e,f)=>c(d,e,f,b):c}
function sd(a,b,c){const d=a.h,e=kd(b),f=ld(b).h;return(g,h,k)=>d(g,h,k,f,e,c)}
function ld(a){var b=a[pd];if(b)return b;a:{b=a[pd]={};var c=rd,d=sd;b.h=a[0];let h=1;if(a.length>h&&"number"!==typeof a[h]){var e=a[h++];if(Array.isArray(e)){b.i=e[0];b.extensions=e[1];break a}b.extensions=e}for(;h<a.length;){e=a[h++];for(var f=h+1;f<a.length&&"number"!==typeof a[f];)f++;const k=a[h++];f-=h;switch(f){case 0:b[e]=c(k);break;case 1:(f=od(a,h))?(h++,b[e]=d(k,f)):b[e]=c(k,a[h++]);break;case 2:f=b;var g=h++;g=od(a,g);f[e]=d(k,g,a[h++]);break;default:throw Error("unexpected number of binary field arguments: "+
f);}}}pd in a&&qd in a&&(a.length=0);return b}
var td;
td=new mc(function(a,b,c){if(2!==a.i)return!1;var d=dc(a.h)>>>0;a=a.h;var e=ec(a,d);a=a.j;if(Db){var f=a,g;(g=Cb)||(g=Cb=new TextDecoder("utf-8",{fatal:!0}));a=e+d;f=0===e&&a===f.length?f:f.subarray(e,a);try{var h=g.decode(f)}catch(l){if(void 0===Bb){try{g.decode(new Uint8Array([128]))}catch(m){}try{g.decode(new Uint8Array([97])),Bb=!0}catch(m){Bb=!1}}!Bb&&(Cb=void 0);throw l;}}else{h=e;d=h+d;e=[];let l=null;let m;for(;h<d;){var k=a[h++];128>k?e.push(k):224>k?h>=d?zb():(m=a[h++],194>k||128!==(m&192)?
(h--,zb()):e.push((k&31)<<6|m&63)):240>k?h>=d-1?zb():(m=a[h++],128!==(m&192)||224===k&&160>m||237===k&&160<=m||128!==((f=a[h++])&192)?(h--,zb()):e.push((k&15)<<12|(m&63)<<6|f&63)):244>=k?h>=d-2?zb():(m=a[h++],128!==(m&192)||0!==(k<<28)+(m-144)>>30||128!==((f=a[h++])&192)||128!==((g=a[h++])&192)?(h--,zb()):(k=(k&7)<<18|(m&63)<<12|(f&63)<<6|g&63,k-=65536,e.push((k>>10&1023)+55296,(k&1023)+56320))):zb();8192<=e.length&&(l=Ab(l,e),e.length=0)}h=Ab(l,e)}b=b.s;Jc(b,F(b),c,h);return!0});
var ud;ud=new mc(function(a,b,c,d,e){if(2!==a.i)return!1;b=Uc(b,c,d);c=a.h.i;d=dc(a.h)>>>0;const f=a.h.h+d;let g=f-c;0>=g&&(a.h.i=f,e(b,a,void 0,void 0,void 0),g=f-a.h.h);if(g)throw Error("Message parsing ended unexpectedly. Expected to read "+`${d} bytes, instead read ${d-g} bytes, either the `+"data ended unexpectedly or the message misreported its own length");a.h.h=f;a.h.i=c;return!0});xa("csi.gstatic.com");xa("googleads.g.doubleclick.net");xa("partner.googleadservices.com");xa("pubads.g.doubleclick.net");xa("securepubads.g.doubleclick.net");xa("tpc.googlesyndication.com");function vd(a,b=`unexpected value ${a}!`){throw Error(b);}
;function wd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var xd="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),yd=[...xd,"client_dev_set_cookie"];function zd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var u=g,p=0;64>p;p+=4)u[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=u[p-3]^u[p-8]^u[p-14]^u[p-16],u[p]=(n<<1|n>>>31)&4294967295;n=e[0];var x=e[1],C=e[2],D=e[3],Ca=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var Wa=D^x&(C^D);var Xb=1518500249}else Wa=x^C^D,Xb=1859775393;else 60>p?(Wa=x&C|D&(x|C),Xb=2400959708):(Wa=x^C^D,Xb=3395469782);Wa=((n<<5|n>>>27)&4294967295)+Wa+Ca+Xb+u[p]&4294967295;Ca=D;D=C;C=(x<<30|x>>>2)&4294967295;x=n;n=Wa}e[0]=e[0]+n&4294967295;e[1]=e[1]+
x&4294967295;e[2]=e[2]+C&4294967295;e[3]=e[3]+D&4294967295;e[4]=e[4]+Ca&4294967295}
function c(n,u){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],x=0,C=n.length;x<C;++x)p.push(n.charCodeAt(x));n=p}u||(u=n.length);p=0;if(0==l)for(;p+64<u;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<u;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<u;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],u=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=u&255,u>>>=8;b(f);for(p=u=0;5>p;p++)for(var x=24;0<=x;x-=8)n[u++]=e[p]>>x&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Pa:function(){for(var n=d(),u="",p=0;p<n.length;p++)u+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return u}}}
;function Ad(a,b,c){var d=String(t.location.href);return d&&a&&b?[b,Bd(wd(d),a,c||null)].join(" "):null}
function Bd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],oa(d,function(h){e.push(h)}),Cd(e.join(" "));
var f=[],g=[];oa(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];oa(d,function(h){e.push(h)});
a=Cd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Cd(a){var b=zd();b.update(a);return b.Pa().toLowerCase()}
;const Dd={};function Ed(){this.h=document||{cookie:""}}
q=Ed.prototype;q.isEnabled=function(){if(!t.navigator.cookieEnabled)return!1;if(!this.Aa())return!0;this.set("TESTCOOKIESENABLED","1",{Ba:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){let d,e,f,g=!1,h;"object"===typeof c&&(h=c.sc,g=c.tc||!1,f=c.domain||void 0,e=c.path||void 0,d=c.Ba);if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===d&&(d=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(e?";path="+e:"")+(0>d?"":0==d?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*d)).toUTCString())+(g?";secure":"")+(null!=h?";samesite="+h:"")};
q.get=function(a,b){const c=a+"=",d=(this.h.cookie||"").split(";");for(let e=0,f;e<d.length;e++){f=za(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){const d=void 0!==this.get(a);this.set(a,"",{Ba:0,path:b,domain:c});return d};
q.Aa=function(){return!this.h.cookie};
q.clear=function(){var a=(this.h.cookie||"").split(";");const b=[],c=[];let d,e;for(let f=0;f<a.length;f++)e=za(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};function Fd(){return!!Dd.FPA_SAMESITE_PHASE2_MOD||!1}
function Gd(a,b,c,d){(a=t[a])||"undefined"===typeof document||(a=(new Ed).get(b));return a?Ad(a,c,d):null}
;"undefined"!==typeof TextDecoder&&new TextDecoder;"undefined"!==typeof TextEncoder&&new TextEncoder;const Hd=self;class Id{constructor(){this.promise=new Promise(a=>{this.resolve=a})}}
;function K(a){Oa.call(this);this.u=1;this.m=[];this.o=0;this.h=[];this.i={};this.B=!!a}
la(K,Oa);q=K.prototype;q.Ha=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
q.ra=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.o?(this.m.push(a),this.h[a+1]=()=>{}):(c&&qa(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
q.pa=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];Jd(this.h[g+1],this.h[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.j;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.o--,0<this.m.length&&0==this.o)for(;c=this.m.pop();)this.ra(c)}}return 0!=e}return!1};
function Jd(a,b,c){eb(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.ra,this),delete this.i[a])}else this.h.length=0,this.i={}};
q.W=function(){K.gb.W.call(this);this.clear();this.m.length=0};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let L={};var Kd="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;L.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
L.wc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Ld={Ka:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Ra:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Md={Ka:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Ra:function(a){return[].concat.apply([],a)}};
L.fb=function(){Kd?(L.Ga=Uint8Array,L.Ea=Uint16Array,L.Fa=Int32Array,L.assign(L,Ld)):(L.Ga=Array,L.Ea=Array,L.Fa=Array,L.assign(L,Md))};
L.fb();try{new Uint8Array(1)}catch(a){};function Nd(a){for(var b=a.length;0<=--b;)a[b]=0}
Nd(Array(576));Nd(Array(60));Nd(Array(512));Nd(Array(256));Nd(Array(29));Nd(Array(30));/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Od="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var Pd=class{constructor(a){this.name=a}};var Qd=new Pd("rawColdConfigGroup");var Rd=new Pd("rawHotConfigGroup");function Sd(a,b){return G(a,1,b)}
var Td=class extends J{constructor(a){super(a)}};var Ud=class extends J{constructor(a){super(a)}};Ud.A=[1];var Vd=class extends J{constructor(a){super(a)}};var Wd=class extends J{constructor(a){super(a)}};var Xd=class extends J{constructor(a){super(a)}};Xd.A=[2];var Yd=class extends J{constructor(a){super(a)}getPlayerType(){var a=Hc(this,36);a=null==a?a:a;return null!=a?a:0}setHomeGroupInfo(a){return H(this,Xd,81,a)}clearLocationPlayabilityToken(){return G(this,89,void 0,!1)}};Yd.A=[9,66,32,86,100,101];var $d=class extends J{constructor(a){super(a)}getKey(){return Xc(this,1)}M(){return Xc(this,Nc(this,Zd,2))}},Zd=[2,3,4,5,6];var ae=class extends J{constructor(a){super(a)}};ae.A=[15,26,28];var be=class extends J{constructor(a){super(a)}};be.A=[5];var ce=class extends J{constructor(a){super(a)}};var de=class extends J{constructor(a){super(a)}setSafetyMode(a){return G(this,5,a)}};de.A=[12];var ee=class extends J{constructor(a){super(a)}j(a){return H(this,Yd,1,a)}};ee.A=[12];var fe=class extends J{constructor(a){super(a)}getKey(){return Xc(this,1)}M(){return Xc(this,2)}};var ge=class extends J{constructor(a){super(a)}};ge.A=[4,5];var he=class extends J{constructor(a){super(a)}};var ie=class extends J{constructor(a){super(a)}},je=[2,3,4,5];var ke=class extends J{constructor(a){super(a)}getMessage(){return Xc(this,1)}};var le=class extends J{constructor(a){super(a)}};var me=class extends J{constructor(a){super(a)}};var ne=class extends J{constructor(a){super(a)}};ne.A=[10,17];var oe=class extends J{constructor(a){super(a)}};var pe=class extends J{constructor(a){super(a)}};var qe=class extends J{constructor(a){super(a)}};var re=class extends J{constructor(a){super(a)}};var se=class extends J{constructor(a){super(a)}getVideoData(){return Oc(this,re,15)}};se.A=[4];function te(a,b){H(a,pe,1,b)}
var ue=class extends J{constructor(a){super(a)}};function ve(a,b){return H(a,pe,1,b)}
var we=class extends J{constructor(a){super(a)}h(a){return I(this,2,a)}};function xe(a,b){return H(a,pe,2,b)}
var ye=class extends J{constructor(a){super(a)}h(a){return I(this,1,a)}};ye.A=[3];var ze=class extends J{constructor(a){super(a)}h(a){return I(this,1,a)}};var Ae=class extends J{constructor(a){super(a)}h(a){return I(this,1,a)}};var Be=class extends J{constructor(a){super(a)}h(a){return I(this,1,a)}};var Ce=class extends J{constructor(a){super(a)}h(a){return I(this,1,a)}};var De=class extends J{constructor(a){super(a)}};var Ee=class extends J{constructor(a){super(a)}};var M=class extends J{constructor(a){super(a,481)}},Fe=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,
332,334,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480];var Ge={Pb:0,wb:1,Cb:2,Db:4,Jb:8,Eb:16,Fb:32,Ob:64,Nb:128,yb:256,Ab:512,Hb:1024,zb:2048,Bb:4096,xb:8192,Gb:16384,Kb:32768,Ib:65536,Lb:131072,Mb:262144};var He=class extends J{constructor(a){super(a)}};var Je=class extends J{constructor(a){super(a)}setVideoId(a){return Lc(this,1,Ie,Ec(a))}getPlaylistId(){return Wc(this,Nc(this,Ie,2))}},Ie=[1,2];var Ke=class extends J{constructor(){super()}};Ke.A=[3];var Le=new Pd("recordNotificationInteractionsEndpoint");var Me=["notification/convert_endpoint_to_url"],Ne=["notification/record_interactions"],Oe=["notification_registration/set_registration"];var Pe=a=>self.btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(a)))).replace(/\+/g,"-").replace(/\//g,"_");var Qe=["notifications_register","notifications_check_registration"];var Re=class extends Error{constructor(a,...b){super(a);this.args=[...b]}};let Se=null;function N(a,b){const c={};c.key=a;c.value=b;return Te().then(d=>new Promise((e,f)=>{try{const g=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);g.onsuccess=()=>{e()};
g.onerror=()=>{f()}}catch(g){f(g)}}))}
function Ue(){return N("IndexedDBCheck","testing IndexedDB").then(()=>Ve("IndexedDBCheck")).then(a=>"testing IndexedDB"===a?Promise.resolve():Promise.reject()).then(()=>!0).catch(()=>!1)}
function Ve(a){const b=new Re("Error accessing DB");return Te().then(c=>new Promise((d,e)=>{try{const f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=()=>{const g=f.result;d(g?g.value:null)};
f.onerror=()=>{b.params={key:a,source:"onerror"};e(b)}}catch(f){b.params={key:a,
thrownError:String(f)},e(b)}}),()=>null)}
function Te(){return Se?Promise.resolve(Se):new Promise((a,b)=>{const c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=()=>{const d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))Se=d,a(Se);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),Te()};
c.onupgradeneeded=We})}
function We(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;const Xe={WEB_UNPLUGGED:"^unplugged/",WEB_UNPLUGGED_ONBOARDING:"^unplugged/",WEB_UNPLUGGED_OPS:"^unplugged/",WEB_UNPLUGGED_PUBLIC:"^unplugged/",WEB_CREATOR:"^creator/",WEB_KIDS:"^kids/",WEB_EXPERIMENTS:"^experiments/",WEB_MUSIC:"^music/",WEB_REMIX:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^main_app/|^sfv/"};
function Ye(a){if(1===a.length)return a[0];var b=Xe.UNKNOWN_INTERFACE;if(b){b=new RegExp(b);for(var c of a)if(b.exec(c))return c}const d=[];Object.entries(Xe).forEach(([e,f])=>{"UNKNOWN_INTERFACE"!==e&&d.push(f)});
c=new RegExp(d.join("|"));a.sort((e,f)=>e.length-f.length);
for(const e of a)if(!c.exec(e))return e;return a[0]}
function Ze(a){return`/youtubei/v1/${Ye(a)}`}
;const $e=t.window;let af,bf;const cf=(null==$e?void 0:null==(af=$e.yt)?void 0:af.config_)||(null==$e?void 0:null==(bf=$e.ytcfg)?void 0:bf.data_)||{};w("yt.config_",cf);function O(...a){a=arguments;1<a.length?cf[a[0]]=a[1]:1===a.length&&Object.assign(cf,a[0])}
function P(a,b){return a in cf?cf[a]:b}
function df(){return P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function ef(){const a=cf.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;const ff=[];function gf(a){ff.forEach(b=>b(a))}
function Q(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){hf(b)}}:a}
function hf(a){var b=v("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),O("ERRORS",b));gf(a)}
function jf(a){var b=v("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0,void 0,void 0]),O("ERRORS",b))}
;function R(a){a=kf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function lf(a,b){a=kf(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function mf(){return P("EXPERIMENTS_TOKEN","")}
function kf(a){const b=P("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
function nf(){const a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{});for(var c of Object.keys(b))a.push({key:c,value:String(b[c])});c=P("EXPERIMENT_FLAGS",{});for(const d of Object.keys(c))d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function of(a,b){if(a)return a[b.name]}
;let pf=0;w("ytDomDomGetNextId",v("ytDomDomGetNextId")||(()=>++pf));function qf(a){this.version=1;this.args=a}
;function rf(){var a=sf;this.topic="screen-created";this.h=a}
rf.prototype.toString=function(){return this.topic};function tf(a,b){"function"===typeof a&&(a=Q(a));return window.setTimeout(a,b)}
;function uf(a,b){return vf(a,0,b)}
function wf(a){const b=v("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
var xf=class{h(a){vf(a,1)}};function yf(){zf.h||(zf.h=new zf);return zf.h}
function vf(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);const d=v("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):tf(a,c||0)}
var zf=class extends xf{aa(a){if(void 0===a||!Number.isNaN(Number(a))){var b=v("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}start(){const a=v("yt.scheduler.instance.start");a&&a()}},Af=yf();const Bf=v("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.Ha;K.prototype.unsubscribeByKey=K.prototype.ra;K.prototype.publish=K.prototype.pa;K.prototype.clear=K.prototype.clear;w("ytPubsub2Pubsub2Instance",Bf);const Cf=v("ytPubsub2Pubsub2SubscribedKeys")||{};w("ytPubsub2Pubsub2SubscribedKeys",Cf);const Df=v("ytPubsub2Pubsub2TopicToKeys")||{};w("ytPubsub2Pubsub2TopicToKeys",Df);const Ef=v("ytPubsub2Pubsub2IsAsync")||{};w("ytPubsub2Pubsub2IsAsync",Ef);
w("ytPubsub2Pubsub2SkipSubKey",null);function Ff(a,b){const c=Gf();c&&c.publish.call(c,a.toString(),a,b)}
function Hf(a){var b=If;const c=Gf();if(!c)return 0;const d=c.subscribe(b.toString(),(e,f)=>{var g=v("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=()=>{if(Cf[d])try{if(f&&b instanceof rf&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Da){const p=new h;h.Da=p.version}var l=h.Da}catch(p){}if(!l||k.version!=l)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{l=Reflect;var m=l.construct;
{var n=k.args;const p=n.length;if(0<p){const x=Array(p);for(k=0;k<p;k++)x[k]=n[k];var u=x}else u=[]}f=m.call(l,h,u)}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){hf(p)}},Ef[b.toString()]?v("yt.scheduler.instance")?Af.h(g):tf(g,0):g())});
Cf[d]=!0;Df[b.toString()]||(Df[b.toString()]=[]);Df[b.toString()].push(d);return d}
function Jf(){var a=Kf;const b=Hf(function(c){a.apply(void 0,arguments);Lf(b)});
return b}
function Lf(a){const b=Gf();b&&("number"===typeof a&&(a=[a]),oa(a,c=>{b.unsubscribeByKey(c);delete Cf[c]}))}
function Gf(){return v("ytPubsub2Pubsub2Instance")}
;let Mf=Date.now().toString();function Nf(){const a=Array(16);for(var b=0;16>b;b++){var c=Date.now();for(let d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(Mf)for(b=1,c=0;c<Mf.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^Mf.charCodeAt(c),b++;return a}
function Of(){if(window.crypto&&window.crypto.getRandomValues)try{const a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(let c=0;c<a.length;c++)a[c]=b[c];return a}catch(a){}return Nf()}
;const Pf=window;var S=Pf.ytcsi&&Pf.ytcsi.now?Pf.ytcsi.now:Pf.performance&&Pf.performance.timing&&Pf.performance.now&&Pf.performance.timing.navigationStart?()=>Pf.performance.timing.navigationStart+Pf.performance.now():()=>(new Date).getTime();const Qf=/^[\w.]*$/,Rf={q:!0,search_query:!0};function Sf(a,b){b=a.split(b);const c={};for(let f=0,g=b.length;f<g;f++){const h=b[f].split("=");if(1==h.length&&h[0]||2==h.length)try{const k=Tf(h[0]||""),l=Tf(h[1]||"");k in c?Array.isArray(c[k])?ra(c[k],l):c[k]=[c[k],l]:c[k]=l}catch(k){var d=k,e=h[0];const l=String(Sf);d.args=[{key:e,value:h[1],query:a,method:Uf==l?"unchanged":l}];Rf.hasOwnProperty(e)||jf(d)}}return c}
const Uf=String(Sf);function Vf(a){"?"==a.charAt(0)&&(a=a.substr(1));return Sf(a,"&")}
function Wf(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Vf(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Na(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Xf(a){if(!b)var b=window.location.href;const c=a.match(Ka)[1]||null,d=La(a.match(Ka)[3]||null);c&&d?(a=a.match(Ka),b=b.match(Ka),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?La(b.match(Ka)[3]||null)==d&&(Number(b.match(Ka)[4]||null)||null)==(Number(a.match(Ka)[4]||null)||null):!0;return a}
function Tf(a){return a&&a.match(Qf)?a:decodeURIComponent(a.replace(/\+/g," "))}
;[...xd];let Yf=!1;function Zf(a,b){const c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=$f(a,b);const d=ag(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");const e=b.context||t;let f=!1,g;fetch(a,c).then(h=>{if(!f){f=!0;g&&window.clearTimeout(g);var k=h.ok,l=m=>{m=m||{};k?b.onSuccess&&b.onSuccess.call(e,m,h):b.onError&&b.onError.call(e,m,h);b.onFinish&&b.onFinish.call(e,m,h)};
"JSON"==(b.format||"JSON")&&(k||400<=h.status&&500>h.status)?h.json().then(l,function(){l(null)}):l(null)}}).catch(()=>{b.onError&&b.onError.call(e,{},{})});
a=b.timeout||0;b.onFetchTimeout&&0<a&&(g=tf(()=>{f||(f=!0,window.clearTimeout(g),b.onFetchTimeout.call(b.context||t))},a))}
function $f(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);const c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Wf(a,b||{},!0);return a}
function ag(a,b){const c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN");var e=b.postBody||"",f=b.postParams;const g=P("XSRF_FIELD_NAME");let h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||La(a.match(Ka)[3]||null)&&!b.withCredentials&&La(a.match(Ka)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&
(e=Vf(e),va(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Na(e));f=e||f&&!sa(f);!Yf&&f&&"POST"!=b.method&&(Yf=!0,hf(Error("AJAX request with postData should use POST")));return e}
;const bg=[{ma:a=>`Cannot read property '${a.key}'`,
ca:{Error:[{v:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{v:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{v:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{v:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{v:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{v:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{v:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{ma:a=>`Cannot call '${a.key}'`,
ca:{TypeError:[{v:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{v:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{v:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{v:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{v:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},
{v:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{ma:a=>`${a.key} is not defined`,
ca:{ReferenceError:[{v:/(.*) is not defined/,groups:["key"]},{v:/Can't find variable: (.*)/,groups:["key"]}]}}];var dg={G:[],F:[{callback:cg,weight:500}]};function cg(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function eg(){if(!fg){var a=fg=new gg;a.G.length=0;a.F.length=0;hg(a,dg)}return fg}
function hg(a,b){b.G&&a.G.push.apply(a.G,b.G);b.F&&a.F.push.apply(a.F,b.F)}
var gg=class{constructor(){this.F=[];this.G=[]}},fg;const ig=new K;function jg(a){const b=a.length;let c=0;const d=()=>a.charCodeAt(c++);
do{var e=kg(d);if(Infinity===e)break;const f=e>>3;switch(e&7){case 0:e=kg(d);if(2===f)return e;break;case 1:if(2===f)return;c+=8;break;case 2:e=kg(d);if(2===f)return a.substr(c,e);c+=e;break;case 5:if(2===f)return;c+=4;break;default:return}}while(c<b)}
function kg(a){let b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function lg(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=mg(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=jg(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?mg(`${e}.ve`,f,g,h):0;d+=g;d+=mg(e,a[e],b,c);if(500<d)break}}else c[b]=ng(a),d+=c[b].length;else c[b]=ng(a),d+=c[b].length;return d}
function mg(a,b,c,d){c+=`.${a}`;a=ng(b);d[c]=a;return c.length+a.length}
function ng(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return`unable to serialize ${typeof a} (${b.message})`}}
;function og(){pg.h||(pg.h=new pg);return pg.h}
function qg(a,b){a={};var c=[],d=wd(String(t.location.href));var e=[];var f=t.__SAPISID||t.__APISID||t.__3PSAPISID||t.__OVERRIDE_SID;Fd()&&(f=f||t.__1PSAPISID);if(f)f=!0;else{if("undefined"!==typeof document){const g=new Ed;f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");Fd()&&(f=f||g.get("__Secure-1PAPISID"))}f=!!f}f&&(f=(d=0==d.indexOf("https:")||0==d.indexOf("chrome-extension:")||0==d.indexOf("moz-extension:"))?t.__SAPISID:t.__APISID,f||"undefined"===
typeof document||(f=new Ed,f=f.get(d?"SAPISID":"APISID")||f.get("__Secure-3PAPISID")),(f=f?Ad(f,d?"SAPISIDHASH":"APISIDHASH",c):null)&&e.push(f),d&&Fd()&&((d=Gd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",c))&&e.push(d),(c=Gd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",c))&&e.push(c)));if(e=0==e.length?null:e.join(" "))a.Authorization=e,e=b=null==b?void 0:b.sessionIndex,void 0===e&&(e=Number(P("SESSION_INDEX",0)),e=isNaN(e)?0:e),R("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
e.toString()),"INNERTUBE_HOST_OVERRIDE"in cf||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in cf&&(a["X-Goog-PageId"]=P("DELEGATED_SESSION_ID"));return a}
var pg=class{constructor(){this.hb=!0}};var rg={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};w("ytglobal.prefsUserPrefsPrefs_",v("ytglobal.prefsUserPrefsPrefs_")||{});function sg(){if(void 0!==P("DATASYNC_ID"))return P("DATASYNC_ID");throw new Re("Datasync ID not set","unknown");}
;const tg=[];let ug,vg=!1;function wg(a){vg||(ug?ug.handleError(a):(tg.push({type:"ERROR",payload:a}),10<tg.length&&tg.shift()))}
function xg(a,b){vg||(ug?ug.ba(a,b):(tg.push({type:"EVENT",eventType:a,payload:b}),10<tg.length&&tg.shift()))}
;function yg(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function zg(a){return a.substr(0,a.indexOf(":"))||a}
;const Ag={AUTH_INVALID:"No user identifier specified.",EXPLICIT_ABORT:"Transaction was explicitly aborted.",IDB_NOT_SUPPORTED:"IndexedDB is not supported.",MISSING_INDEX:"Index not created.",MISSING_OBJECT_STORES:"Object stores not created.",DB_DELETED_BY_MISSING_OBJECT_STORES:"Database is deleted because expected object stores were not created.",DB_REOPENED_BY_MISSING_OBJECT_STORES:"Database is reopened because expected object stores were not created.",UNKNOWN_ABORT:"Transaction was aborted for unknown reasons.",
QUOTA_EXCEEDED:"The current transaction exceeded its quota limitations.",QUOTA_MAYBE_EXCEEDED:"The current transaction may have failed because of exceeding quota limitations.",EXECUTE_TRANSACTION_ON_CLOSED_DB:"Can't start a transaction on a closed database",INCOMPATIBLE_DB_VERSION:"The binary is incompatible with the database version"},Bg={AUTH_INVALID:"ERROR",EXECUTE_TRANSACTION_ON_CLOSED_DB:"WARNING",EXPLICIT_ABORT:"IGNORED",IDB_NOT_SUPPORTED:"ERROR",MISSING_INDEX:"WARNING",MISSING_OBJECT_STORES:"ERROR",
DB_DELETED_BY_MISSING_OBJECT_STORES:"WARNING",DB_REOPENED_BY_MISSING_OBJECT_STORES:"WARNING",QUOTA_EXCEEDED:"WARNING",QUOTA_MAYBE_EXCEEDED:"WARNING",UNKNOWN_ABORT:"WARNING",INCOMPATIBLE_DB_VERSION:"WARNING"},Cg={AUTH_INVALID:!1,EXECUTE_TRANSACTION_ON_CLOSED_DB:!1,EXPLICIT_ABORT:!1,IDB_NOT_SUPPORTED:!1,MISSING_INDEX:!1,MISSING_OBJECT_STORES:!1,DB_DELETED_BY_MISSING_OBJECT_STORES:!1,DB_REOPENED_BY_MISSING_OBJECT_STORES:!1,QUOTA_EXCEEDED:!1,QUOTA_MAYBE_EXCEEDED:!0,UNKNOWN_ABORT:!0,INCOMPATIBLE_DB_VERSION:!1};
var T=class extends Re{constructor(a,b={},c=Ag[a],d=Bg[a],e=Cg[a]){super(c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,T.prototype)}},Dg=class extends T{constructor(a,b){super("MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Ag.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Dg.prototype)}},Eg=class extends Error{constructor(a,b){super();this.index=
a;this.objectStore=b;Object.setPrototypeOf(this,Eg.prototype)}};const Fg=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Gg(a,b,c,d){b=zg(b);let e;e=a instanceof Error?a:Error(`Unexpected error: ${a}`);if(e instanceof T)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new T("QUOTA_EXCEEDED",a);if(Eb&&"UnknownError"===e.name)return new T("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Eg)return new T("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Fg.some(f=>e.message.includes(f)))return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new T("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",mc:e.name})];e.level="WARNING";return e}
function Hg(a,b,c){return new T("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:void 0}})}
;function Ig(a){if(!a)throw Error();throw a;}
function Jg(a){return a}
var Kg=class{constructor(a){this.h=a}};function Lg(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");const f=c(a.state.value);f instanceof Mg?Ng(a,b,f,d,e):d(f)}catch(f){e(f)}}
function Og(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");const f=c(a.state.reason);f instanceof Mg?Ng(a,b,f,d,e):d(f)}catch(f){e(f)}}
function Ng(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(f=>{f instanceof Mg?Ng(a,b,f,d,e):d(f)},f=>{e(f)})}
var Mg=class{constructor(a){this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;const b=d=>{if("PENDING"===this.state.status){this.state={status:"FULFILLED",value:d};for(const e of this.h)e()}},c=d=>{if("PENDING"===this.state.status){this.state={status:"REJECTED",
reason:d};for(const e of this.i)e()}};
try{a(b,c)}catch(d){c(d)}}static all(a){return new Mg(new Kg((b,c)=>{const d=[];let e=a.length;0===e&&b(d);for(let f=0;f<a.length;++f)Mg.resolve(a[f]).then(g=>{d[f]=g;e--;0===e&&b(d)}).catch(g=>{c(g)})}))}static resolve(a){return new Mg(new Kg((b,c)=>{a instanceof Mg?a.then(b,c):b(a)}))}then(a,b){const c=null!=a?a:Jg,d=null!=b?b:Ig;
return new Mg(new Kg((e,f)=>{"PENDING"===this.state.status?(this.h.push(()=>{Lg(this,this,c,e,f)}),this.i.push(()=>{Og(this,this,d,e,f)})):"FULFILLED"===this.state.status?Lg(this,this,c,e,f):"REJECTED"===this.state.status&&Og(this,this,d,e,f)}))}catch(a){return this.then(void 0,a)}};function Pg(a,b,c){const d=()=>{try{a.removeEventListener("success",e),a.removeEventListener("error",f)}catch(g){}},e=()=>{b(a.result);
d()},f=()=>{c(a.error);
d()};
a.addEventListener("success",e);a.addEventListener("error",f)}
function Qg(a){return new Promise((b,c)=>{Pg(a,b,c)})}
function U(a){return new Mg(new Kg((b,c)=>{Pg(a,b,c)}))}
;function Rg(a,b){return new Mg(new Kg((c,d)=>{const e=()=>{const f=a?b(a):null;f?f.then(g=>{a=g;e()},d):c()};
e()}))}
;function V(a,b,c,d){return r(function*(){const e={mode:"readonly",C:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?e.mode=c:Object.assign(e,c);a.transactionCount++;const f=e.C?3:1;let g=0,h;for(;!h;){g++;const l=Math.round(S());try{const m=a.h.transaction(b,e.mode);var k=d;const n=new Sg(m),u=yield Tg(n,k),p=Math.round(S());Ug(a,l,p,g,void 0,b.join(),e);return u}catch(m){k=Math.round(S());const n=Gg(m,a.h.name,b.join(),a.h.version);if(n instanceof T&&!n.h||g>=f)Ug(a,l,k,g,n,b.join(),e),
h=n}}return Promise.reject(h)})}
function Vg(a,b,c){a=a.h.createObjectStore(b,c);return new Wg(a)}
function Xg(a,b,c,d){return V(a,[b],{mode:"readwrite",C:!0},e=>{e=e.objectStore(b);return U(e.h.put(c,d))})}
function Ug(a,b,c,d,e,f,g){b=c-b;e?(e instanceof T&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&xg("QUOTA_EXCEEDED",{dbName:zg(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof T&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),xg("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Yg(a,!1,d,f,b,g.tag),wg(e)):Yg(a,!0,d,f,b,g.tag)}
function Yg(a,b,c,d,e,f="IDB_TRANSACTION_TAG_UNKNOWN"){xg("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f})}
var Zg=class{constructor(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(S());this.i=!1}add(a,b,c){return V(this,[a],{mode:"readwrite",C:!0},d=>d.objectStore(a).add(b,c))}clear(a){return V(this,[a],{mode:"readwrite",
C:!0},b=>b.objectStore(a).clear())}close(){this.h.close();
let a;(null==(a=this.options)?0:a.closed)&&this.options.closed()}count(a,b){return V(this,[a],{mode:"readonly",C:!0},c=>c.objectStore(a).count(b))}delete(a,b){return V(this,[a],{mode:"readwrite",
C:!0},c=>c.objectStore(a).delete(b))}get(a,b){return V(this,[a],{mode:"readonly",
C:!0},c=>c.objectStore(a).get(b))}getAll(a,b,c){return V(this,[a],{mode:"readonly",
C:!0},d=>d.objectStore(a).getAll(b,c))}objectStoreNames(){return Array.from(this.h.objectStoreNames)}getName(){return this.h.name}};
function $g(a,b,c){a=a.h.openCursor(b.query,b.direction);return ah(a).then(d=>Rg(d,c))}
function bh(a,b){return $g(a,{query:b},c=>c.delete().then(()=>c.continue())).then(()=>{})}
function ch(a,b,c){const d=[];return $g(a,{query:b},e=>{if(!(void 0!==c&&d.length>=c))return d.push(e.M()),e.continue()}).then(()=>d)}
var Wg=class{constructor(a){this.h=a}add(a,b){return U(this.h.add(a,b))}autoIncrement(){return this.h.autoIncrement}clear(){return U(this.h.clear()).then(()=>{})}count(a){return U(this.h.count(a))}delete(a){return a instanceof IDBKeyRange?bh(this,a):U(this.h.delete(a))}get(a){return U(this.h.get(a))}getAll(a,b){return"getAll"in IDBObjectStore.prototype?U(this.h.getAll(a,b)):ch(this,a,b)}index(a){try{return new dh(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Eg(a,
this.h.name);
throw b;}}getName(){return this.h.name}keyPath(){return this.h.keyPath}};function Tg(a,b){const c=new Promise((d,e)=>{try{b(a).then(f=>{d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(([d])=>d)}
var Sg=class{constructor(a){this.h=a;this.j=new Map;this.i=!1;this.done=new Promise((b,c)=>{this.h.addEventListener("complete",()=>{b()});
this.h.addEventListener("error",d=>{d.currentTarget===d.target&&c(this.h.error)});
this.h.addEventListener("abort",()=>{var d=this.h.error;if(d)c(d);else if(!this.i){d=T;var e=this.h.objectStoreNames;const f=[];for(let g=0;g<e.length;g++){const h=e.item(g);if(null===h)throw Error("Invariant: item in DOMStringList is null");f.push(h)}d=new d("UNKNOWN_ABORT",{objectStoreNames:f.join(),dbName:this.h.db.name,mode:this.h.mode});c(d)}})})}abort(){this.h.abort();
this.i=!0;throw new T("EXPLICIT_ABORT");}objectStore(a){a=this.h.objectStore(a);let b=this.j.get(a);b||(b=new Wg(a),this.j.set(a,b));return b}};function eh(a,b,c){const {query:d=null,direction:e="next"}=b;a=a.h.openCursor(d,e);return ah(a).then(f=>Rg(f,c))}
function fh(a,b,c){const d=[];return eh(a,{query:b},e=>{if(!(void 0!==c&&d.length>=c))return d.push(e.M()),e.continue()}).then(()=>d)}
var dh=class{constructor(a){this.h=a}count(a){return U(this.h.count(a))}delete(a){return eh(this,{query:a},b=>b.delete().then(()=>b.continue()))}get(a){return U(this.h.get(a))}getAll(a,b){return"getAll"in IDBIndex.prototype?U(this.h.getAll(a,b)):fh(this,a,b)}getKey(a){return U(this.h.getKey(a))}keyPath(){return this.h.keyPath}unique(){return this.h.unique}};
function ah(a){return U(a).then(b=>b?new gh(a,b):null)}
var gh=class{constructor(a,b){this.request=a;this.cursor=b}advance(a){this.cursor.advance(a);return ah(this.request)}continue(a){this.cursor.continue(a);return ah(this.request)}delete(){return U(this.cursor.delete()).then(()=>{})}getKey(){return this.cursor.key}M(){return this.cursor.value}update(a){return U(this.cursor.update(a))}};function hh(a,b,c){return new Promise((d,e)=>{let f;f=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);const g=c.Ma,h=c.blocking,k=c.ib,l=c.upgrade,m=c.closed;let n;const u=()=>{n||(n=new Zg(f.result,{closed:m}));return n};
f.addEventListener("upgradeneeded",p=>{try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&xg("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:zg(a)});const x=u(),C=new Sg(f.transaction);l&&l(x,D=>p.oldVersion<D&&p.newVersion>=D,C);
C.done.catch(D=>{e(D)})}catch(x){e(x)}});
f.addEventListener("success",()=>{const p=f.result;h&&p.addEventListener("versionchange",()=>{h(u())});
p.addEventListener("close",()=>{xg("IDB_UNEXPECTEDLY_CLOSED",{dbName:zg(a),dbVersion:p.version});k&&k()});
d(u())});
f.addEventListener("error",()=>{e(f.error)});
g&&f.addEventListener("blocked",()=>{g()})})}
function ih(a,b,c={}){return hh(a,b,c)}
function jh(a,b={}){return r(function*(){try{const c=self.indexedDB.deleteDatabase(a),d=b.Ma;d&&c.addEventListener("blocked",()=>{d()});
yield Qg(c)}catch(c){throw Gg(c,a,"",-1);}})}
;function kh(a,b){return new T("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function lh(a,b){if(!b)throw Hg("openWithToken",zg(a.name));return a.open()}
var mh=class{constructor(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}i(a,b,c={}){return ih(a,b,c)}delete(a={}){return jh(this.name,a)}open(){if(!this.j)throw kh(this);if(this.h)return this.h;let a;const b=()=>{this.h===a&&(this.h=void 0)},c={blocking:e=>{e.close()},
closed:b,ib:b,upgrade:this.options.upgrade},d=()=>{const e=this;return r(function*(){var f,g=null!=(f=Error().stack)?f:"";try{const k=yield e.i(e.name,e.options.version,c);var h=e.options;f=[];for(const l of Object.keys(h.P)){const {O:m,pc:n=Number.MAX_VALUE}=h.P[l];!(k.h.version>=m)||k.h.version>=n||k.h.objectStoreNames.contains(l)||f.push(l)}if(0!==f.length){const l=Object.keys(e.options.P),m=k.objectStoreNames();if(e.m<lf("ytidb_reopen_db_retries",0))return e.m++,k.close(),wg(new T("DB_REOPENED_BY_MISSING_OBJECT_STORES",
{dbName:e.name,expectedObjectStores:l,foundObjectStores:m})),d();if(e.l<lf("ytidb_remake_db_retries",1))return e.l++,yield e.delete(),wg(new T("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:e.name,expectedObjectStores:l,foundObjectStores:m})),d();throw new Dg(m,l);}return k}catch(k){if(k instanceof DOMException?"VersionError"===k.name:"DOMError"in self&&k instanceof DOMError?"VersionError"===k.name:k instanceof Object&&"message"in k&&"An attempt was made to open a database using a lower version than the existing version."===
k.message){g=yield e.i(e.name,void 0,Object.assign({},c,{upgrade:void 0}));h=g.h.version;if(void 0!==e.options.version&&h>e.options.version+1)throw g.close(),e.j=!1,kh(e,h);return g}b();k instanceof Error&&!R("ytidb_async_stack_killswitch")&&(k.stack=`${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);let l;throw Gg(k,e.name,"",null!=(l=e.options.version)?l:-1);}})};
return this.h=a=d()}};const nh=new mh("YtIdbMeta",{P:{databases:{O:1}},upgrade(a,b){b(1)&&Vg(a,"databases",{keyPath:"actualName"})}});function oh(a,b){return r(function*(){return V(yield lh(nh,b),["databases"],{C:!0,mode:"readwrite"},c=>{const d=c.objectStore("databases");return d.get(a.actualName).then(e=>{if(e?a.actualName!==e.actualName||a.publicName!==e.publicName||a.userIdentifier!==e.userIdentifier:1)return U(d.h.put(a,void 0)).then(()=>{})})})})}
function ph(a,b){return r(function*(){if(a)return(yield lh(nh,b)).delete("databases",a)})}
;let qh;const rh=new class{constructor(){}}(new class{constructor(){}});function sh(){return r(function*(){return!0})}
function th(){if(void 0!==qh)return qh;vg=!0;return qh=sh().then(a=>{vg=!1;return a})}
function uh(){return v("ytglobal.idbToken_")||void 0}
function vh(){const a=uh();return a?Promise.resolve(a):th().then(b=>{(b=b?rh:void 0)&&w("ytglobal.idbToken_",b);return b})}
;new Id;function wh(a){try{sg();var b=!0}catch(c){b=!1}if(!b)throw a=new T("AUTH_INVALID",{dbName:a}),wg(a),a;b=sg();return{actualName:`${a}:${b}`,publicName:a,userIdentifier:b}}
function xh(a,b,c,d){return r(function*(){var e,f=null!=(e=Error().stack)?e:"";e=yield vh();if(!e)throw e=Hg("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(e.stack=`${e.stack}\n${f.substring(f.indexOf("\n")+1)}`),wg(e),e;yg(a);f=c?{actualName:a,publicName:a,userIdentifier:void 0}:wh(a);try{return yield oh(f,e),yield ih(f.actualName,b,d)}catch(g){try{yield ph(f.actualName,e)}catch(h){}throw g;}})}
function yh(a,b,c={}){return xh(a,b,!1,c)}
function zh(a,b,c={}){return xh(a,b,!0,c)}
function Ah(a,b={}){return r(function*(){const c=yield vh();if(c){yg(a);var d=wh(a);yield jh(d.actualName,b);yield ph(d.actualName,c)}})}
function Bh(a,b={}){return r(function*(){const c=yield vh();c&&(yg(a),yield jh(a,b),yield ph(a,c))})}
;function Ch(a,b){let c;return()=>{c||(c=new Dh(a,b));return c}}
var Dh=class extends mh{constructor(a,b){super(a,b);this.options=b;yg(a)}i(a,b,c={}){return(this.options.ea?zh:yh)(a,b,Object.assign({},c))}delete(a={}){return(this.options.ea?Bh:Ah)(this.name,a)}};function Eh(a,b){return Ch(a,b)}
;var Fh=Eh("ytGcfConfig",{P:{coldConfigStore:{O:1},hotConfigStore:{O:1}},ea:!1,upgrade(a,b){b(1)&&(Vg(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}).h.createIndex("hotTimestampIndex","timestamp",{unique:!1}),Vg(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}).h.createIndex("coldTimestampIndex","timestamp",{unique:!1}))},version:1});function Gh(a){return lh(Fh(),a)}
function Hh(a,b,c){return r(function*(){const d={config:a,hashData:b,timestamp:S()},e=yield Gh(c);yield e.clear("hotConfigStore");return yield Xg(e,"hotConfigStore",d)})}
function Ih(a,b,c,d){return r(function*(){const e={config:a,hashData:b,configData:c,timestamp:S()},f=yield Gh(d);yield f.clear("coldConfigStore");return yield Xg(f,"coldConfigStore",e)})}
function Jh(a){return r(function*(){let b=void 0;yield V(yield Gh(a),["coldConfigStore"],{mode:"readwrite",C:!0},c=>eh(c.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},d=>{b=d.M()}));
return b})}
function Kh(a){return r(function*(){let b=void 0;yield V(yield Gh(a),["hotConfigStore"],{mode:"readwrite",C:!0},c=>eh(c.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},d=>{b=d.M()}));
return b})}
;var Lh=class extends Oa{constructor(){super(...arguments);this.h=[]}W(){this.h.length=0;super.W()}};function Mh(a,b,c){return r(function*(){if(R("update_log_event_config")){c&&(a.j=c,w("yt.gcf.config.hotConfigGroup",a.j||null));a.hotHashData=b;w("yt.gcf.config.hotHashData",a.hotHashData||null);var d=uh();if(d){if(!c){var e;c=null==(e=yield Kh(d))?void 0:e.config}yield Hh(c,b,d)}if(c){d=a.i;e=c;for(const f of d.h)f(e)}}})}
function Nh(a,b,c){return r(function*(){if(R("update_log_event_config")){a.coldHashData=b;w("yt.gcf.config.coldHashData",a.coldHashData||null);const d=uh();if(d){if(!c){let e;c=null==(e=yield Jh(d))?void 0:e.config}c&&(yield Ih(c,b,c.configData,d))}}})}
var Oh=class{constructor(){this.h=0;this.i=new Lh}};function Ph(){return"INNERTUBE_API_KEY"in cf&&"INNERTUBE_API_VERSION"in cf}
function Qh(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),ka:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ta:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ua:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),za:P("INNERTUBE_CONTEXT_HL"),ya:P("INNERTUBE_CONTEXT_GL"),Va:P("INNERTUBE_HOST_OVERRIDE")||"",Xa:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Wa:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Rh(a){const b={client:{hl:a.za,gl:a.ya,clientName:a.Ta,clientVersion:a.innertubeContextClientVersion,configInfo:a.ka}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=t.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=mf();""!==c&&(b.client.experimentsToken=c);c=nf();0<c.length&&(b.request={internalExperimentFlags:c});Sh(void 0,b);Th(a,void 0,b);R("start_sending_config_hash")&&Uh(void 0,b);P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&
(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});!R("fill_delegate_context_in_gel_killswitch")&&(a=P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;var d=b.client,e=P("DEVICE","");const f={};for(const [g,h]of Object.entries(Vf(e))){e=g;const k=h;"cbrand"===e?f.deviceMake=k:"cmodel"===e?f.deviceModel=k:"cbr"===e?f.browserName=k:"cbrver"===e?f.browserVersion=k:"cos"===e?f.osName=k:"cosver"===e?f.osVersion=
k:"cplatform"===e&&(f.platform=k)}b.client=c.call(a,d,f);return b}
function Vh(a){const b=new ee,c=new Yd;I(c,1,a.za);I(c,2,a.ya);G(c,16,a.Ua);I(c,17,a.innertubeContextClientVersion);if(a.ka){var d=a.ka,e=new Wd;d.coldConfigData&&I(e,1,d.coldConfigData);d.appInstallData&&I(e,6,d.appInstallData);d.coldHashData&&I(e,3,d.coldHashData);d.hotHashData&&I(e,5,d.hotHashData);H(c,Wd,62,e)}if((d=t.devicePixelRatio)&&1!=d){if(null!=d&&"number"!==typeof d)throw Error(`Value of float/double field must be a number|null|undefined, found ${typeof d}: ${d}`);G(c,65,d)}d=mf();""!==
d&&I(c,54,d);d=nf();if(0<d.length){e=new ae;for(let f=0;f<d.length;f++){const g=new $d;I(g,1,d[f].key);Lc(g,2,Zd,Ec(d[f].value));Uc(e,15,$d,g)}H(b,ae,5,e)}Sh(b);Th(a,c);R("start_sending_config_hash")&&Uh(c);P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(a=new de,I(a,3,P("DELEGATED_SESSION_ID")));!R("fill_delegate_context_in_gel_killswitch")&&(a=P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(d=Oc(b,de,3)||new de,a=I(d,18,a),H(b,de,3,a));a=P("DEVICE","");for(const [f,g]of Object.entries(Vf(a)))a=
f,d=g,"cbrand"===a?I(c,12,d):"cmodel"===a?I(c,13,d):"cbr"===a?I(c,87,d):"cbrver"===a?I(c,88,d):"cos"===a?I(c,18,d):"cosver"===a?I(c,19,d):"cplatform"===a&&G(c,42,d);b.j(c);return b}
function Sh(a,b){const c=v("yt.embedded_player.embed_url");c&&(a?(b=Oc(a,be,7)||new be,I(b,4,c),H(a,be,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Th(a,b,c){if(a.appInstallData)if(b){let d;c=null!=(d=Oc(b,Wd,62))?d:new Wd;I(c,6,a.appInstallData);H(b,Wd,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Wh(a,b,c={}){let d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.dc||P("AUTHORIZATION");b||(a?b=`Bearer ${v("gapi.auth.getToken")().cc}`:(a=qg(og()),R("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
function Uh(a,b){if(!Oh.h){var c=new Oh;Oh.h=c}c=Oh.h;var d=S()-c.h;if(0!==c.h&&d<lf("send_config_hash_timer"))c=void 0;else{d=v("yt.gcf.config.coldConfigData");var e=v("yt.gcf.config.hotHashData"),f=v("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=S());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){let g;b=null!=(g=Oc(a,Wd,62))?g:new Wd;I(b,1,c);I(b,3,d);I(b,5,e);H(a,Wd,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var Xh={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,tvhtml5ApiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,
voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,
sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,
clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,
startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,
playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480};const Yh=["client.name","client.version"];function Zh(a){if(!a.errorMetadata||!a.errorMetadata.kvPairs)return a;a.errorMetadata.kvPairs=a.errorMetadata.kvPairs.filter(b=>b.key?Yh.includes(b.key):!1);
return a}
;var $h=Eh("ServiceWorkerLogsDatabase",{P:{SWHealthLog:{O:1}},ea:!0,upgrade:(a,b)=>{b(1)&&Vg(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function ai(a,b){return r(function*(){var c=yield lh($h(),b),d=P("INNERTUBE_CONTEXT_CLIENT_NAME",0);const e=Object.assign({},a);e.clientError&&(e.clientError=Zh(e.clientError));e.interface=d;return Xg(c,"SWHealthLog",e)})}
;w("ytNetworklessLoggingInitializationOptions",t.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1});function bi(a,b,c){!P("VISITOR_DATA")&&.01>Math.random()&&jf(new Re("Missing VISITOR_DATA when sending innertube request.","log_event",b,c));if(!a.isReady())throw a=new Re("innertube xhrclient not ready","log_event",b,c),hf(a),a;b={headers:c.headers||{},method:"POST",postParams:b,postBody:c.postBody,postBodyFormat:c.postBodyFormat||"JSON",onTimeout:()=>{c.onTimeout()},
onFetchTimeout:c.onTimeout,onSuccess:(k,l)=>{if(c.onSuccess)c.onSuccess(l)},
onFetchSuccess:k=>{if(c.onSuccess)c.onSuccess(k)},
onError:(k,l)=>{if(c.onError)c.onError(l)},
onFetchError:k=>{if(c.onError)c.onError(k)},
timeout:c.timeout,withCredentials:!0,compress:c.compress};b.headers["Content-Type"]||(b.headers["Content-Type"]="application/json");let d="";var e=a.config_.Va;e&&(d=e);var f=a.config_.Xa||!1;e=Wh(f,d,c);Object.assign(b.headers,e);(e=b.headers.Authorization)&&!d&&f&&(b.headers["x-origin"]=window.location.origin);f=`/${"youtubei"}/${a.config_.innertubeApiVersion}/${"log_event"}`;let g={alt:"json"},h=a.config_.Wa&&e;h=h&&e.startsWith("Bearer");h||(g.key=a.config_.innertubeApiKey);a=Wf(`${d}${f}`,g||
{},!0);try{Zf(a,b)}catch(k){if("InvalidAccessError"==k.name)jf(Error("An extension is blocking network request."));else throw k;}}
class ci{constructor(a){this.config_=null;a?this.config_=a:Ph()&&(this.config_=Qh())}isReady(){!this.config_&&Ph()&&(this.config_=Qh());return!!this.config_}};w("ytEventsEventsListeners",t.ytEventsEventsListeners||{});w("ytEventsEventsCounter",t.ytEventsEventsCounter||{count:0});function di(){const a=v("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;t.ytPubsubPubsubInstance||new K;var ei=Symbol("injectionDeps"),fi=class{constructor(){this.name="INNERTUBE_TRANSPORT_TOKEN"}toString(){return`InjectionToken(${this.name})`}},gi=class{constructor(){this.key=Oh}};function hi(a){var b={bb:ii,Ca:ji.h};a.i.set(b.bb,b)}
function ki(a,b,c,d=!1){if(-1<c.indexOf(b))throw Error(`Deps cycle for: ${b}`);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error(`No provider for: ${b}`);}d=a.i.get(b);c.push(b);if(void 0!==d.Ca)var e=d.Ca;else if(d.nb)e=d[ei]?li(a,d[ei],c):[],e=d.nb(...e);else if(d.mb){e=d.mb;const f=e[ei]?li(a,e[ei],c):[];e=new e(...f)}else throw Error(`Could not resolve providers for: ${b}`);c.pop();d.xc||a.h.set(b,e);return e}
function li(a,b,c){return b?b.map(d=>d instanceof gi?ki(a,d.key,c,!0):ki(a,d,c)):[]}
var mi=class{constructor(){this.i=new Map;this.h=new Map}resolve(a){return a instanceof gi?ki(this,a.key,[],!0):ki(this,a,[])}};let ni;function oi(){ni||(ni=new mi);return ni}
;let pi=window;function qi(){let a,b;return"h5vcc"in pi&&(null==(a=pi.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=pi.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in pi&&pi.performance.mark&&pi.performance.measure?2:0}
function ri(a){const b=qi();switch(b){case 1:pi.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:pi.performance.mark(`${a}-start`);break;case 0:break;default:vd(b,"unknown trace type")}}
function si(a){var b=qi();switch(b){case 1:pi.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=`${a}-start`;const c=`${a}-end`;pi.performance.mark(c);pi.performance.measure(a,b,c);break;case 0:break;default:vd(b,"unknown trace type")}}
;var ti=R("web_enable_lifecycle_monitoring")&&0!==qi();function ui(a){let b;return null!=(b=a.priority)?b:0}
function vi(a){var b=Array.from(a.h.keys()).sort((c,d)=>ui(a.h[d])-ui(a.h[c]));
for(const c of b)b=a.h[c],void 0===b.jobId||b.da||(a.scheduler.aa(b.jobId),vf(b.la,10))}
var wi=class{constructor(a){this.scheduler=yf();this.i=new Id;this.h=a;for(let b=0;b<this.h.length;b++){const c=this.h[b];a=()=>{c.la();this.h[b].da=!0;this.h.every(e=>!0===e.da)&&this.i.resolve()};
const d=vf(a,ui(c));this.h[b]=Object.assign({},c,{la:a,jobId:d})}}cancel(){for(const a of this.h)void 0===a.jobId||a.da||this.scheduler.aa(a.jobId),a.da=!0;this.i.resolve()}};function xi(a,b,c){ti&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed(`[${a.constructor.name}] '${a.state}' to '${b}'`),console.log("with message: ",c),console.groupEnd())}
function yi(a,b){const c=b.filter(e=>10===zi(a,e)),d=b.filter(e=>10!==zi(a,e));
return a.l.vc?(...e)=>r(function*(){yield Ai(c,...e);Bi(a,d,...e)}):(...e)=>{Ci(c,...e);
Bi(a,d,...e)}}
function zi(a,b){let c,d;return null!=(d=null!=(c=a.j)?c:b.priority)?d:0}
function Ai(a,...b){return r(function*(){yf();for(const c of a){let d;wf(()=>{Di(c.name);const e=c.callback(...b);"function"===typeof(null==e?void 0:e.then)?d=e.then(()=>{Ei(c.name)}):Ei(c.name)});
d&&(yield d)}})}
function Bi(a,b,...c){b=b.map(d=>({la:()=>{Di(d.name);d.callback(...c);Ei(d.name)},
priority:zi(a,d)}));
b.length&&(a.i=new wi(b))}
function Ci(a,...b){yf();for(const c of a)wf(()=>{Di(c.name);c.callback(...b);Ei(c.name)})}
function Di(a){ti&&a&&ri(a)}
function Ei(a){ti&&a&&si(a)}
var Fi=class{constructor(){this.state="none";this.plugins=[];this.j=void 0;this.l={};ti&&ri(this.state)}get currentState(){return this.state}install(a){this.plugins.push(a);return this}uninstall(...a){a.forEach(b=>{b=this.plugins.indexOf(b);-1<b&&this.plugins.splice(b,1)})}transition(a,b){ti&&si(this.state);
var c=this.transitions.find(d=>Array.isArray(d.from)?d.from.find(e=>e===this.state&&d.Y===a):d.from===this.state&&d.Y===a);
if(c){this.i&&(vi(this.i),this.i=void 0);xi(this,a,b);this.state=a;ti&&ri(this.state);c=c.action.bind(this);const d=this.plugins.filter(e=>e[a]).map(e=>e[a]);
c(yi(this,d),b)}else throw Error(`no transition specified from ${this.state} to ${a}`);}};function Gi(){Hi||(Hi=new Ii);return Hi}
var Ii=class extends Fi{constructor(){super();this.h=null;this.j=10;this.transitions=[{from:"none",Y:"application_navigating",action:this.m},{from:"application_navigating",Y:"none",action:this.o},{from:"application_navigating",Y:"application_navigating",action:()=>{}},
{from:"none",Y:"none",action:()=>{}}]}m(a,b){this.h=uf(()=>{"application_navigating"===this.currentState&&this.transition("none")},5E3);
a(null==b?void 0:b.event)}o(a,b){this.h&&(Af.aa(this.h),this.h=null);a(null==b?void 0:b.event)}},Hi;function Ji(a,b){const c=Ki(b);if(a.h[c])return a.h[c];const d=Object.keys(a.store)||[];if(1>=d.length&&Ki(b)===d[0])return d;const e=[];for(let g=0;g<d.length;g++){const h=d[g].split("/");if(Li(b.auth,h[0])){var f=b.isJspb;Li(void 0===f?"undefined":f?"true":"false",h[1])&&Li(b.cttAuthInfo,h[2])&&(f=b.tier,f=void 0===f?"undefined":JSON.stringify(f),Li(f,h[3])&&e.push(d[g]))}}return a.h[c]=e}
function Li(a,b){return void 0===a||"undefined"===a?!0:a===b}
var Mi=class{constructor(){this.store={};this.h={}}storePayload(a,b){a=Ki(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a}smartExtractMatchingEntries(a){if(!a.keys.length)return[];const b=Ji(this,a.keys.splice(0,1)[0]),c=[];for(let d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push(...this.store[b[d]]),delete this.store[b[d]]):c.push(...this.store[b[d]].splice(0,a.sizeLimit)));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:
a.sizeLimit)&&(a.sizeLimit-=c.length,c.push(...this.smartExtractMatchingEntries(a)));return c}extractMatchingEntries(a){a=Ji(this,a);const b=[];for(let c=0;c<a.length;c++)this.store[a[c]]&&(b.push(...this.store[a[c]]),delete this.store[a[c]]);return b}getSequenceCount(a){a=Ji(this,a);let b=0;for(let c=0;c<a.length;c++){let d;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b}};Mi.prototype.getSequenceCount=Mi.prototype.getSequenceCount;Mi.prototype.extractMatchingEntries=Mi.prototype.extractMatchingEntries;
Mi.prototype.smartExtractMatchingEntries=Mi.prototype.smartExtractMatchingEntries;Mi.prototype.storePayload=Mi.prototype.storePayload;function Ki(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;const Ni=lf("initial_gel_batch_timeout",2E3),Oi=lf("gel_queue_timeout_max_ms",6E4),Pi=Math.pow(2,16)-1;let Qi=void 0;class Ri{constructor(){this.j=this.h=this.i=0}}const Si=new Ri,Ti=new Ri,Ui=new Ri,Vi=new Ri;let Wi,Xi=!0;const Yi=t.ytLoggingTransportTokensToCttTargetIds_||{},Zi=t.ytLoggingTransportTokensToJspbCttTargetIds_||{};let $i={};function aj(){let a=v("yt.logging.ims");a||(a=new Mi,w("yt.logging.ims",a));return a}
function bj(a,b){if("log_event"===a.endpoint){var c=cj(a);a:{var d=Object.keys(a.payload);for(const e of d)if(Xh[e]){d=e;break a}d=void 0}d=dj(d||"");400===d?ej(a,b):($i[c]=!0,d={cttAuthInfo:c,isJspb:!1,tier:d},aj().storePayload(d,a.payload),fj(b,c,!1,d))}}
function gj(a,b,c){if("log_event"===b.endpoint){var d=cj(b,!0),e=dj(a);400===e?hj(a,b,c):($i[d]=!0,a={cttAuthInfo:d,isJspb:!0,tier:e},aj().storePayload(a,b.payload.toJSON()),fj(c,d,!0,a))}}
function fj(a,b,c=!1,d){a&&(Qi=new a);a=lf("tvhtml5_logging_max_batch_ads_fork")||lf("web_logging_max_batch")||100;const e=S(),f=ij(c,d.tier),g=f.j;let h=0;d&&(h=aj().getSequenceCount(d));const k=()=>{jj({writeThenSend:!0},R("flush_only_full_queue")?b:void 0,c,d.tier)};
1E3<=h&&R("web_logging_max_batch_hard_limit")?k():h>=a?Wi||(Wi=kj(()=>{k();Wi=void 0},0)):10<=e-g&&(lj(c,d.tier),f.j=e)}
function ej(a,b){if("log_event"===a.endpoint){var c=cj(a),d=new Map;d.set(c,[a.payload]);b&&(Qi=new b);return new z((e,f)=>{Qi&&Qi.isReady()?mj(d,Qi,e,f,{bypassNetworkless:!0},!0):e()})}}
function hj(a,b,c){if("log_event"===b.endpoint){a=cj(b,!0);var d=new Map;d.set(a,[b.payload.toJSON()]);c&&(Qi=new c);return new z(e=>{Qi&&Qi.isReady()?nj(d,Qi,e,{bypassNetworkless:!0},!0):e()})}}
function cj(a,b=!1){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;const d=new Je;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Lc(d,2,Ie,Ec(c.playlistId));Zi[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Yi[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function jj(a={},b,c=!1,d){new z((e,f)=>{const g=ij(c,d);oj(g.i);oj(g.h);g.h=0;Qi&&Qi.isReady()?void 0===d&&R("enable_web_tiered_gel")?pj(e,f,a,b,c,300):pj(e,f,a,b,c,d):(lj(c,d),e())})}
function pj(a,b,c={},d,e=!1,f=200){var g=Qi,h=new Map;const k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f},m={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=R("enable_web_tiered_gel")?aj().smartExtractMatchingEntries({keys:[l,m],sizeLimit:1E3}):aj().extractMatchingEntries(m),h.set(d,b),nj(h,g,a,c)):(h=R("enable_web_tiered_gel")?aj().smartExtractMatchingEntries({keys:[l,m],sizeLimit:1E3}):aj().extractMatchingEntries(m),k.set(d,h),mj(k,g,a,b,c));else if(e){for(const n of Object.keys($i))b=R("enable_web_tiered_gel")?
aj().smartExtractMatchingEntries({keys:[l,m],sizeLimit:1E3}):aj().extractMatchingEntries({isJspb:!0,cttAuthInfo:n}),0<b.length&&h.set(n,b),(R("web_fp_via_jspb_and_json")&&c.writeThenSend||!R("web_fp_via_jspb_and_json"))&&delete $i[n];nj(h,g,a,c)}else{for(const n of Object.keys($i))d=R("enable_web_tiered_gel")?aj().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:n,tier:f},{isJspb:!1,cttAuthInfo:n}],sizeLimit:1E3}):aj().extractMatchingEntries({isJspb:!1,cttAuthInfo:n}),0<d.length&&k.set(n,
d),(R("web_fp_via_jspb_and_json")&&c.writeThenSend||!R("web_fp_via_jspb_and_json"))&&delete $i[n];mj(k,g,a,b,c)}}
function lj(a=!1,b=200){const c=ij(a,b);var d=c===Vi||c===Ui?5E3:Oi;R("web_gel_timeout_cap")&&!c.h&&(d=kj(()=>{jj({writeThenSend:!0},void 0,a,b)},d),c.h=d);
oj(c.i);d=P("LOGGING_BATCH_TIMEOUT",lf("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Xi&&(d=Ni);d=kj(()=>{jj({writeThenSend:!0},void 0,a,b)},d);
c.i=d}
function mj(a,b,c,d,e={},f){const g=Math.round(S());let h=a.size;for(const [l,m]of a){a=l;var k=m;const n=ta({context:Rh(b.config_||Qh())});if(!ha(k)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}n.events=k;(k=Yi[a])&&qj(n,a,k);delete Yi[a];const u="visitorOnlyApprovedKey"===a;rj(n,g,u);sj(e);const p=D=>{R("update_log_event_config")&&Af.h(()=>r(function*(){yield tj(D)}));
h--;h||c()};
let x=0;const C=()=>{x++;if(e.bypassNetworkless&&1===x)try{bi(b,n,uj({writeThenSend:!0},u,p,C,f)),Xi=!1}catch(D){hf(D),d()}h--;h||c()};
try{bi(b,n,uj(e,u,p,C,f)),Xi=!1}catch(D){hf(D),d()}}}
function nj(a,b,c,d={},e){const f=Math.round(S());let g=a.size;var h=new Map([...a]);for(const [n]of h){var k=n,l=a.get(k);h=new Ke;const u=Vh(b.config_||Qh());H(h,ee,1,u);l=l?vj(l):[];for(const p of l)Uc(h,3,M,p);(l=Zi[k])&&wj(h,k,l);delete Zi[k];k="visitorOnlyApprovedKey"===k;xj(h,f,k);sj(d);l={startTime:S(),ticks:{},infos:{}};a:{xc=!0;try{var m=JSON.stringify(h.toJSON(),ad);break a}finally{xc=!1}m=void 0}h=m;l.ticks.geljspc=S();R("log_jspb_serialize_latency")&&.001>Math.random()&&Ff("meta_logging_csi_event",
{timerName:"gel_jspb_serialize",yc:l});k=uj(d,k,p=>{R("update_log_event_config")&&Af.h(()=>r(function*(){yield tj(p)}));
g--;g||c()},()=>{g--;
g||c()},e);
k.headers["Content-Type"]="application/json+protobuf";k.postBodyFormat="JSPB";k.postBody=h;bi(b,"",k);Xi=!1}}
function sj(a){R("always_send_and_write")&&(a.writeThenSend=!1)}
function uj(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,lc:a,dangerousLogToVisitorSession:b,fc:!!e,headers:{},postBodyFormat:"",postBody:"",compress:R("compress_gel")||R("compress_gel_lr")};yj()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(S())));return a}
function rj(a,b,c){yj()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&(c=zj(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function xj(a,b,c){yj()||G(a,2,b);if(!c&&(b=P("EVENT_ID"))){c=zj();const d=new He;I(d,1,b);G(d,2,c);H(a,He,5,d)}}
function zj(){let a=P("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Pi/2));a++;a>Pi&&(a=1);O("BATCH_CLIENT_COUNTER",a);return a}
function qj(a,b,c){let d;if(c.videoId)d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function wj(a,b,c){let d;if(Wc(c,Nc(c,Ie,1)))d=1;else if(c.getPlaylistId())d=2;else return;H(a,Je,4,c);a=Oc(a,ee,1)||new ee;c=Oc(a,de,3)||new de;const e=new ce;I(e,2,b);G(e,1,d);Uc(c,12,ce,e);H(a,de,3,c)}
function vj(a){const b=[];for(let c=0;c<a.length;c++)try{b.push(new M(a[c]))}catch(d){hf(new Re("Transport failed to deserialize "+String(a[c])))}return b}
function yj(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function kj(a,b){return R("transport_use_scheduler")?R("logging_avoid_blocking_during_navigation")?uf(()=>{"none"===Gi().currentState?a():Gi().install({none:{callback:a}})},b):uf(a,b):tf(a,b)}
function oj(a){R("transport_use_scheduler")?Af.aa(a):window.clearTimeout(a)}
function tj(a){return r(function*(){var b,c=null==a?void 0:null==(b=a.responseContext)?void 0:b.globalConfigGroup;b=of(c,Rd);const d=null==c?void 0:c.hotHashData,e=of(c,Qd);c=null==c?void 0:c.coldHashData;const f=oi().resolve(new gi);f&&(d&&(b?yield Mh(f,d,b):yield Mh(f,d)),c&&(e?yield Nh(f,c,e):yield Nh(f,c)))})}
function ij(a,b=200){return a?300===b?Vi:Ti:300===b?Ui:Si}
function dj(a){if(R("enable_web_tiered_gel")){a=Xh[a||""];var b,c;if(null==oi().resolve(new gi))var d=void 0;else{var e=null!=(d=v("yt.gcf.config.hotConfigGroup"))?d:null;d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return Aj(b[c].tier);return 200}}
function Aj(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;const Bj=t.ytLoggingGelSequenceIdObj_||{};
function Cj(a,b,c,d={}){const e={},f=Math.round(d.timestamp||S());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=di();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};R("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,b={index:Dj(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete Bj[d.sequenceGroup]);(d.sendIsolatedPayload?ej:bj)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
function Ej(a=!1){jj(void 0,void 0,a)}
function Dj(a){Bj[a]=a in Bj?Bj[a]+1:0;return Bj[a]}
;let Fj=ci,Gj=[];function W(a,b,c={}){let d=Fj;P("ytLoggingEventsDefaultDisabled",!1)&&Fj===ci&&(d=null);R("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=di(),c.timestamp=S());Cj(a,b,d,c)}
;const Hj=t.ytLoggingGelSequenceIdObj_||{};
function Ij(a,b,c,d={}){var e=Math.round(d.timestamp||S());G(b,1,e<Number.MAX_SAFE_INTEGER?e:0);e=new Ee;if(d.lact)G(e,1,isFinite(d.lact)?d.lact:-1);else if(d.timestamp)G(e,1,-1);else{var f=di();G(e,1,isFinite(f)?f:-1)}if(R("log_sequence_info_on_gel_web")&&d.sequenceGroup){f=d.sequenceGroup;const g=Dj(f),h=new De;G(h,2,g);I(h,1,f);H(e,De,3,h);d.endOfSequence&&delete Hj[d.sequenceGroup]}H(b,Ee,33,e);(d.sendIsolatedPayload?hj:gj)(a,{endpoint:"log_event",payload:b,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function Jj(a,b,c={}){let d=!1;P("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);Ij(a,b,d?null:ci,c)}
;function Kj(a,b,c){const d=R("jspb_sparse_encoded_pivot")?new M([{}]):new M;Tc(d,Be,72,Fe,a);c?Ij("visualElementShown",d,c,b):Jj("visualElementShown",d,b)}
function Lj(a,b,c){const d=R("jspb_sparse_encoded_pivot")?new M([{}]):new M;Tc(d,Ae,73,Fe,a);c?Ij("visualElementHidden",d,c,b):Jj("visualElementHidden",d,b)}
function Mj(a,b,c){const d=R("jspb_sparse_encoded_pivot")?new M([{}]):new M;Tc(d,ze,78,Fe,a);c?Ij("visualElementGestured",d,c,b):Jj("visualElementGestured",d,b)}
function Nj(a,b,c){const d=R("jspb_sparse_encoded_pivot")?new M([{}]):new M;Tc(d,Ce,208,Fe,a);c?Ij("visualElementStateChanged",d,c,b):Jj("visualElementStateChanged",d,b)}
function Oj(a,b,c){const d=R("jspb_sparse_encoded_pivot")?new M([{}]):new M;Tc(d,we,156,Fe,a);c?Ij("screenCreated",d,c,b):Jj("screenCreated",d,b)}
function Pj(a,b,c){const d=R("jspb_sparse_encoded_pivot")?new M([{}]):new M;Tc(d,ye,215,Fe,a);c?Ij("visualElementAttached",d,c,b):Jj("visualElementAttached",d,b)}
;var Qj=new Set,Rj=0,Sj=0,Tj=0,Uj=[];const Vj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Wj(a){X(a)}
function Xj(a){X(a,"WARNING")}
function X(a,b="ERROR"){var c={};c.name=P("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=P("INNERTUBE_CONTEXT_CLIENT_VERSION");Yj(a,c,b)}
function Yj(a,b,c="ERROR"){if(a){a.hasOwnProperty("level")&&a.level&&(c=a.level);if(R("console_log_js_exceptions")){var d=[];d.push(`Name: ${a.name}`);d.push(`Message: ${a.message}`);a.hasOwnProperty("params")&&d.push(`Error Params: ${JSON.stringify(a.params)}`);a.hasOwnProperty("args")&&d.push(`Error args: ${JSON.stringify(a.args)}`);d.push(`File name: ${a.fileName}`);d.push(`Stacktrace: ${a.stack}`);window.console.log(d.join("\n"),a)}if(!(5<=Rj)){d=Uj;var e=Pa(a);const n=e.message||"Unknown Error",
u=e.name||"UnknownError";var f=e.stack||a.i||"Not available";if(f.startsWith(`${u}: ${n}`)){var g=f.split("\n");g.shift();f=g.join("\n")}g=e.lineNumber||"Not available";e=e.fileName||"Not available";let p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var h=0;h<a.args.length&&!(p=lg(a.args[h],`params.${h}`,b,p),500<=p);h++);else if(a.hasOwnProperty("params")&&a.params){const x=a.params;if("object"===typeof a.params)for(h in x){if(!x[h])continue;const C=`params.${h}`,D=ng(x[h]);b[C]=D;p+=
C.length+D.length;if(500<p)break}else b.params=ng(x)}if(d.length)for(h=0;h<d.length&&!(p=lg(d[h],`params.context.${h}`,b,p),500<=p);h++);navigator.vendor&&!b.hasOwnProperty("vendor")&&(b["device.vendor"]=navigator.vendor);b={message:n,name:u,lineNumber:g,fileName:e,stack:f,params:b,sampleWeight:1};d=Number(a.columnNumber);isNaN(d)||(b.lineNumber=`${b.lineNumber}:${d}`);if("IGNORED"===a.level)var k=0;else a:{a=eg();for(k of a.G)if(b.message&&b.message.match(k.Ya)){k=k.weight;break a}for(var l of a.F)if(l.callback(b)){k=
l.weight;break a}k=1}b.sampleWeight=k;k=b;for(var m of bg)if(m.ca[k.name]){l=m.ca[k.name];for(const x of l)if(l=k.message.match(x.v)){k.params["params.error.original"]=l[0];a=x.groups;b={};for(d=0;d<a.length;d++)b[a[d]]=l[d+1],k.params[`params.error.${a[d]}`]=l[d+1];k.message=m.ma(b);break}}k.params||(k.params={});m=eg();k.params["params.errorServiceSignature"]=`msg=${m.G.length}&cb=${m.F.length}`;k.params["params.serviceWorker"]="true";t.document&&t.document.querySelectorAll&&(k.params["params.fscripts"]=
String(document.querySelectorAll("script:not([nonce])").length));xa("sample").constructor!==wa&&(k.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(k);0===k.sampleWeight||Qj.has(k.message)||Zj(k,c)}}}
function Zj(a,b="ERROR"){if("ERROR"===b){ig.pa("handleError",a);if(R("record_app_crashed_web")&&0===Tj&&1===a.sampleWeight)if(Tj++,R("errors_via_jspb")){var c=new oe;c=G(c,1,1);if(!R("report_client_error_with_app_crash_ks")){var d=new ne;var e=new me;var f=new le;var g=new ke;g=I(g,1,a.message);f=H(f,ke,3,g);e=H(e,le,5,f);d=H(d,me,9,e);H(c,ne,4,d)}d=R("jspb_sparse_encoded_pivot")?new M([{}]):new M;Tc(d,oe,20,Fe,c);Jj("appCrashed",d)}else c={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},R("report_client_error_with_app_crash_ks")||
(c.systemHealth={crashData:{clientError:{logMessage:{message:a.message}}}}),W("appCrashed",c);Sj++}else"WARNING"===b&&ig.pa("handleWarning",a);a:{if(R("errors_via_jspb")){if(ak())var h=void 0;else{c=new he;I(c,1,a.stack);a.fileName&&I(c,4,a.fileName);var k=a.lineNumber&&a.lineNumber.split?a.lineNumber.split(":"):[];0!==k.length&&(1!==k.length||isNaN(Number(k[0]))?2!==k.length||isNaN(Number(k[0]))||isNaN(Number(k[1]))||(G(c,2,Number(k[0])),G(c,3,Number(k[1]))):G(c,2,Number(k[0])));k=new ke;I(k,1,a.message);
I(k,3,a.name);G(k,6,a.sampleWeight);"ERROR"===b?G(k,2,2):"WARNING"===b?G(k,2,1):G(k,2,0);var l=new ie;G(l,1,!0);Tc(l,he,3,je,c);c=new ge;I(c,3,window.location.href);d=P("FEXP_EXPERIMENTS",[]);for(f=0;f<d.length;f++){e=d[f];g=c.s;const n=F(g);Bc(n);Kc(g,n,5,2,!1).push(e);n&512&&E(g,n&-513)}d=df();if(!ef()&&d)for(var m of Object.keys(d))e=new fe,I(e,1,m),I(e,2,String(d[m])),Uc(c,4,fe,e);if(m=a.params)for(h of Object.keys(m))d=new fe,I(d,1,`client.${h}`),I(d,2,String(m[h])),Uc(c,4,fe,d);m=P("SERVER_NAME");
h=P("SERVER_VERSION");m&&h&&(d=new fe,I(d,1,"server.name"),I(d,2,m),Uc(c,4,fe,d),m=new fe,I(m,1,"server.version"),I(m,2,h),Uc(c,4,fe,m));h=new le;H(h,ge,1,c);H(h,ie,2,l);H(h,ke,3,k)}if(!h)break a;m=R("jspb_sparse_encoded_pivot")?new M([{}]):new M;Tc(m,le,163,Fe,h);Jj("clientError",m)}else{h={};if(ak())h=void 0;else{c={stackTrace:a.stack};a.fileName&&(c.filename=a.fileName);m=a.lineNumber&&a.lineNumber.split?a.lineNumber.split(":"):[];0!==m.length&&(1!==m.length||isNaN(Number(m[0]))?2!==m.length||
isNaN(Number(m[0]))||isNaN(Number(m[1]))||(c.lineNumber=Number(m[0]),c.columnNumber=Number(m[1])):c.lineNumber=Number(m[0]));m={level:"ERROR_LEVEL_UNKNOWN",message:a.message,errorClassName:a.name,sampleWeight:a.sampleWeight};"ERROR"===b?m.level="ERROR_LEVEL_ERROR":"WARNING"===b&&(m.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];P("FEXP_EXPERIMENTS")&&(h.experimentIds=P("FEXP_EXPERIMENTS"));d=df();if(!ef()&&d)for(l of Object.keys(d))h.kvPairs.push({key:l,
value:String(d[l])});if(l=a.params)for(k of Object.keys(l))h.kvPairs.push({key:`client.${k}`,value:String(l[k])});k=P("SERVER_NAME");l=P("SERVER_VERSION");k&&l&&(h.kvPairs.push({key:"server.name",value:k}),h.kvPairs.push({key:"server.version",value:l}));h={errorMetadata:h,stackTrace:c,logMessage:m}}if(!h)break a;W("clientError",h)}if("ERROR"===b||R("errors_flush_gel_always_killswitch"))b:{if(R("web_fp_via_jspb")){b=Gj;Gj=[];if(b)for(const n of b)Cj(n.R,n.payload,Fj,n.options);Ej(!0);if(!R("web_fp_via_jspb_and_json"))break b}Ej()}}try{Qj.add(a.message)}catch(n){}Rj++}
function ak(){for(const a of Vj){const b=Ea();if(b&&0<=b.toLowerCase().indexOf(a.toLowerCase()))return!0}return!1}
function bk(a,...b){a.args||(a.args=[]);a.args.push(...b)}
;w("ytLoggingLatencyUsageStats_",t.ytLoggingLatencyUsageStats_||{});const ck=window;class dk{constructor(){this.timing={};this.clearResourceTimings=()=>{};
this.webkitClearResourceTimings=()=>{};
this.mozClearResourceTimings=()=>{};
this.msClearResourceTimings=()=>{};
this.oClearResourceTimings=()=>{}}}
var ek=ck.performance||ck.mozPerformance||ck.msPerformance||ck.webkitPerformance||new dk;let fk=t.ytLoggingDocDocumentNonce_;if(!fk){const a=Of(),b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));fk=b.join("")}var gk=fk;var hk={rb:0,ob:1,qb:2,Tb:3,sb:4,bc:5,Ub:6,Zb:7,Xb:8,Yb:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};let ik=1;function jk(a){return new kk({trackingParams:a})}
function lk(a){const b=ik++;return new kk({veType:a,veCounter:b,elementIndex:void 0,dataElement:void 0,youtubeData:void 0,jspbYoutubeData:void 0,loggingDirectives:void 0})}
var kk=class{constructor(a){this.h=a}getAsJson(){const a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a}getAsJspb(){const a=new pe;
if(void 0!==this.h.trackingParams){var b=this.h.trackingParams;if(null!=b)if("string"===typeof b)b=b?new Zb(b,Ub):Yb();else if(b.constructor!==Zb)if(Sb(b))b=b.length?new Zb(new Uint8Array(b),Ub):Yb();else throw Error();G(a,1,b)}else void 0!==this.h.veType&&G(a,2,this.h.veType),void 0!==this.h.veCounter&&G(a,6,this.h.veCounter),void 0!==this.h.elementIndex&&G(a,3,this.h.elementIndex),this.h.isCounterfactual&&G(a,5,!0);void 0!==this.h.dataElement&&(b=this.h.dataElement.getAsJspb(),H(a,pe,7,b));void 0!==
this.h.youtubeData&&H(a,Vd,8,this.h.jspbYoutubeData);return a}toString(){return JSON.stringify(this.getAsJson())}isClientVe(){return!this.h.trackingParams&&!!this.h.veType}getLoggingDirectives(){return this.h.loggingDirectives}};function mk(a=0){return 0===a?"client-screen-nonce":`${"client-screen-nonce"}.${a}`}
function nk(a=0){return R("new_csn_storage_design")?P("client-screen-nonce-store",{})[a]:P(mk(a))}
function ok(a,b=0){if(R("new_csn_storage_design")){let c=P("client-screen-nonce-store");c||(c={},O("client-screen-nonce-store",c));c[b]=a}O(mk(b),a)}
function pk(a=0){return 0===a?"ROOT_VE_TYPE":`${"ROOT_VE_TYPE"}.${a}`}
function qk(a=0){return P(pk(a))}
function rk(a=0){return(a=qk(a))?new kk({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function sk(){let a=P("csn-to-ctt-auth-info");a||(a={},O("csn-to-ctt-auth-info",a));return a}
function tk(){return Object.values(P("client-screen-nonce-store",{})).filter(a=>void 0!==a)}
function Y(a=0){a=nk(a);if(!a&&!P("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
function uk(a){for(const b of Object.values(hk))if(Y(b)===a)return!0;return!1}
function vk(a,b,c){const d=sk();(c=Y(c))&&delete d[c];b&&(d[a]=b)}
function wk(a){return sk()[a]}
function xk(a,b,c=0,d){if(a!==nk(c)||b!==P(pk(c)))if(vk(a,d,c),ok(a,c),O(pk(c),b),b=()=>{setTimeout(()=>{if(a)if(R("web_time_via_jspb")){const e=new qe;I(e,1,gk);I(e,2,a);const f=R("jspb_sparse_encoded_pivot")?new M([{}]):new M;Tc(f,qe,111,Fe,e);Jj("foregroundHeartbeatScreenAssociated",f)}else W("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:gk,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
;ka(ek.clearResourceTimings||ek.webkitClearResourceTimings||ek.mozClearResourceTimings||ek.msClearResourceTimings||ek.oClearResourceTimings||na,ek);function yk(a=!0){a=a?Of():Nf();const b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
;class sf extends qf{constructor(a){super(arguments);this.csn=a}}const If=new rf,zk=[];let Bk=Ak,Ck=0;function Dk(a,b,c,d,e,f,g,h){const k=Bk(),l=new kk({veType:b,youtubeData:f,jspbYoutubeData:void 0});f={sequenceGroup:k};e&&(f.cttAuthInfo=e);var m=()=>{Xj(new Re("newScreen() parent element does not have a VE - rootVe",b))};
if(R("il_via_jspb")){e=ve((new we).h(k),l.getAsJspb());c&&c.visualElement?(m=new ue,c.clientScreenNonce&&I(m,2,c.clientScreenNonce),te(m,c.visualElement.getAsJspb()),g&&G(m,4,Ge[g]),H(e,ue,5,m)):c&&m();d&&I(e,3,d);if(R("expectation_logging")&&h&&h.screenCreatedLoggingExpectations){c=new Ud;h=h.screenCreatedLoggingExpectations.expectedParentScreens||[];for(var n of h)n.screenVeType&&(h=Sd(new Td,n.screenVeType),Uc(c,1,Td,h));H(e,Ud,7,c)}Oj(e,f,a)}else n={csn:k,pageVe:l.getAsJson()},R("expectation_logging")&&
h&&h.screenCreatedLoggingExpectations&&(n.screenCreatedLoggingExpectations=h.screenCreatedLoggingExpectations),c&&c.visualElement?(n.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(n.implicitGesture.gestureType=g)):c&&m(),d&&(n.cloneCsn=d),a?Cj("screenCreated",n,a,f):W("screenCreated",n,f);Ff(If,new sf(k));return k}
function Ek(a,b,c,d){const e=d.filter(g=>{g.csn!==b?(g.csn=b,g=!0):g=!1;return g}),f={cttAuthInfo:wk(b)||void 0,
sequenceGroup:b};for(const g of d)d=g.getAsJson(),(sa(d)||!d.trackingParams&&!d.veType)&&Xj(Error("Child VE logged with no data"));if(R("il_via_jspb")){const g=xe((new ye).h(b),c.getAsJspb());pa(e,h=>{h=h.getAsJspb();Uc(g,3,pe,h)});
"UNDEFINED_CSN"===b?Z("visualElementAttached",f,void 0,g):Pj(g,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:pa(e,g=>g.getAsJson())},"UNDEFINED_CSN"===b?Z("visualElementAttached",f,c):a?Cj("visualElementAttached",c,a,f):W("visualElementAttached",c,f)}
function Fk(a,b,c,d,e,f){Gk(a,b,c,e,f)}
function Gk(a,b,c,d,e){const f={cttAuthInfo:wk(b)||void 0,sequenceGroup:b};R("il_via_jspb")?(d=(new Be).h(b),c=c.getAsJspb(),c=H(d,pe,2,c),c=G(c,4,1),e&&H(c,se,3,e),"UNDEFINED_CSN"===b?Z("visualElementShown",f,void 0,c):Kj(c,f,a)):(e={csn:b,ve:c.getAsJson(),eventType:1},d&&(e.clientData=d),"UNDEFINED_CSN"===b?Z("visualElementShown",f,e):a?Cj("visualElementShown",e,a,f):W("visualElementShown",e,f))}
function Hk(a,b,c,d=!1){var e=d?16:8;const f={cttAuthInfo:wk(b)||void 0,sequenceGroup:b,endOfSequence:d};R("il_via_jspb")?(e=(new Ae).h(b),c=c.getAsJspb(),c=H(e,pe,2,c),G(c,4,d?16:8),"UNDEFINED_CSN"===b?Z("visualElementHidden",f,void 0,c):Lj(c,f,a)):(d={csn:b,ve:c.getAsJson(),eventType:e},"UNDEFINED_CSN"===b?Z("visualElementHidden",f,d):a?Cj("visualElementHidden",d,a,f):W("visualElementHidden",d,f))}
function Ik(a,b,c,d){const e={cttAuthInfo:wk(b)||void 0,sequenceGroup:b};R("il_via_jspb")?(d=(new ze).h(b),c=c.getAsJspb(),c=H(d,pe,2,c),G(c,4,Ge.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK),"UNDEFINED_CSN"===b?Z("visualElementGestured",e,void 0,c):Mj(c,e,a)):(c={csn:b,ve:c.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},d&&(c.clientData=d),"UNDEFINED_CSN"===b?Z("visualElementGestured",e,c):a?Cj("visualElementGestured",c,a,e):W("visualElementGestured",c,e))}
function Jk(a,b,c,d){const e={cttAuthInfo:wk(b)||void 0,sequenceGroup:b};R("il_via_jspb")?(d=new Ce,d.h(b),c=c.getAsJspb(),H(d,pe,2,c),"UNDEFINED_CSN"===b?Z("visualElementStateChanged",e,void 0,d):Nj(d,e,a)):(c={csn:b,ve:c.getAsJson(),clientData:d},"UNDEFINED_CSN"===b?Z("visualElementStateChanged",e,c):a?Cj("visualElementStateChanged",c,a,e):W("visualElementStateChanged",c,e))}
function Ak(){if(R("enable_web_96_bit_csn"))var a=yk();else if(R("enable_web_96_bit_csn_no_crypto"))a=yk(!1);else{a=Math.random()+"";for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=Hb(b,3)}return a}
function Z(a,b,c,d){zk.push({R:a,payload:c,J:d,options:b});Ck||(Ck=Jf())}
function Kf(a){if(zk){for(const b of zk)if(R("il_via_jspb")&&b.J)switch(b.J.h(a.csn),b.R){case "screenCreated":Oj(b.J,b.options);break;case "visualElementAttached":Pj(b.J,b.options);break;case "visualElementShown":Kj(b.J,b.options);break;case "visualElementHidden":Lj(b.J,b.options);break;case "visualElementGestured":Mj(b.J,b.options);break;case "visualElementStateChanged":Nj(b.J,b.options);break;default:Xj(new Re("flushQueue unable to map payloadName to JSPB setter"))}else b.payload&&(b.payload.csn=
a.csn,W(b.R,b.payload,b.options));zk.length=0}Ck=0}
;function Kk(a,b){Q(Fk)(void 0,a,b,void 0,void 0,void 0)}
;function Lk(){Mk.h||(Mk.h=new Mk);return Mk.h}
function Nk(a,b,c){const d=Y(c);return null===a.csn||d===a.csn||c?d:(a=new Re("VisibilityLogger called before newScreen",{caller:b.tagName,previous_csn:a.csn,current_csn:d}),Xj(a),null)}
function Ok(a){return Math.floor(Number(a.data&&a.data.loggingDirectives&&a.data.loggingDirectives.visibility&&a.data.loggingDirectives.visibility.types||""))||1}
var Mk=class{constructor(){this.m=new Set;this.l=new Set;this.h=new Map;this.client=void 0;this.csn=null}j(a){this.client=a}o(){this.clear();this.csn=Y()}clear(){this.m.clear();this.l.clear();this.h.clear();this.csn=null}B(a,b,c){b=this.i(a);var d=a.visualElement?a.visualElement:b,e=this.m.has(d),f=this.h.get(d);this.m.add(d);this.h.set(d,!0);a.impressionLog&&!e&&a.impressionLog();if(b||a.visualElement)if(c=Nk(this,a,c)){var g=!(!a.data||!a.data.loggingDirectives);if(Ok(a)||g){d=a.visualElement?a.visualElement:
jk(b);var h=a.interactionLoggingClientData;b=a.interactionLoggingClientDataJspbType;g||e?Ok(a)&4?f||(a=this.client,e={cttAuthInfo:wk(c)||void 0,sequenceGroup:c},R("il_via_jspb")?(f=(new Be).h(c),d=d.getAsJspb(),f=H(f,pe,2,d),f=G(f,4,4),b&&H(f,se,3,b),"UNDEFINED_CSN"===c?Z("visualElementShown",e,void 0,f):Kj(f,e,a)):(b={csn:c,ve:d.getAsJson(),eventType:4},h&&(b.clientData=h),"UNDEFINED_CSN"===c?Z("visualElementShown",e,b):a?Cj("visualElementShown",b,a,e):W("visualElementShown",b,e))):Ok(a)&1&&!e&&
Gk(this.client,c,d,h,b):Gk(this.client,c,d,h,b)}}}u(a,b,c){var d=this.i(a),e=a.visualElement?a.visualElement:d;b=this.l.has(e);const f=this.h.get(e);this.l.add(e);this.h.set(e,!1);if(!1===f)return!0;if(!d&&!a.visualElement)return!1;c=Nk(this,a,c);if(!c||!Ok(a)&&a.data&&a.data.loggingDirectives)return!1;d=a.visualElement?a.visualElement:jk(d);Ok(a)&8?Hk(this.client,c,d):Ok(a)&2&&!b&&(a=this.client,b={cttAuthInfo:wk(c)||void 0,sequenceGroup:c},R("il_via_jspb")?(e=(new Ae).h(c),d=d.getAsJspb(),d=H(e,
pe,2,d),d=G(d,4,2),"UNDEFINED_CSN"===c?Z("visualElementHidden",b,void 0,d):Lj(d,b,a)):(d={csn:c,ve:d.getAsJson(),eventType:2},"UNDEFINED_CSN"===c?Z("visualElementHidden",b,d):a?Cj("visualElementHidden",d,a,b):W("visualElementHidden",d,b)));return!0}i(a){let b,c,d;return R("il_use_view_model_logging_context")&&(null==(b=a.data)?0:null==(c=b.context)?0:null==(d=c.loggingContext)?0:d.loggingDirectives)?a.data.context.loggingContext.loggingDirectives.trackingParams||"":a.data&&a.data.loggingDirectives?
a.data.loggingDirectives.trackingParams||"":a.veContainer&&a.veContainer.trackingParams?a.veContainer.trackingParams:a.data&&a.data.trackingParams||""}};function Pk(){Qk.h||(Qk.h=new Qk);return Qk.h}
function Rk(){Pk();Q(Lk().o).bind(Lk())()}
function Sk(a){Pk();Q(Lk().B).bind(Lk())(a,void 0,8)}
function Tk(a){Pk();Q(Lk().u).bind(Lk())(a,void 0,8)}
function Uk(a,b){return Q(Lk().i).bind(Lk())(b)}
var Qk=class{j(a){Q(Lk().j).bind(Lk())(a)}clear(){Q(Lk().clear).bind(Lk())()}};function Vk(a,b,c,d={}){a.l.add(d.layer||0);a.u=()=>{Wk(a,b,c,d);const e=rk(d.layer);if(e){for(const f of a.K)a.h(f[0],f[1]||e,d.layer);for(const f of a.L)Xk(a,f[0],f[1])}};
c||Y(d.layer)||a.u();if(d.V)for(const e of d.V)a.ha(e,d.layer);else X(Error("Delayed screen needs a data promise."))}
function Wk(a,b,c,d={}){var e=void 0;d.layer||(d.layer=0);e=void 0!==d.oa?d.oa:d.layer;const f=Y(e);e=rk(e);var g=c||e;let h;g&&(void 0!==d.parentCsn?h={clientScreenNonce:d.parentCsn,visualElement:g}:f&&"UNDEFINED_CSN"!==f&&(h={clientScreenNonce:f,visualElement:g}));let k;g=P("EVENT_ID");"UNDEFINED_CSN"===f&&g&&(k={servletData:{serializedServletEventId:g}});R("combine_ve_grafts")&&f&&Yk(a,f);let l;try{l=Dk(a.client,b,h,d.U,d.cttAuthInfo,k,d.Sa,d.loggingExpectations)}catch(u){bk(u,{eb:b,rootVe:e,ab:c,
Oa:f,Za:h,U:d.U});X(u);return}xk(l,b,d.layer,d.cttAuthInfo);f&&"UNDEFINED_CSN"!==f&&e&&!uk(f)&&Hk(a.client,f,e,!0);a.i[a.i.length-1]&&!a.i[a.i.length-1].csn&&(a.i[a.i.length-1].csn=l||"");Rk();const m=rk(d.layer);f&&"UNDEFINED_CSN"!==f&&m&&(R("web_mark_root_visible")||R("music_web_mark_root_visible"))&&Kk(l,m);a.l.delete(d.layer||0);a.u=void 0;let n;null==(n=a.ia.get(d.layer))||n.forEach((u,p)=>{u?a.h(p,u,d.layer):m&&a.h(p,m,d.layer)});
Zk(a)}
function Yk(a,b){if(void 0===b){const c=tk();for(let d=0;d<c.length;d++)void 0!==c[d]&&Yk(a,c[d])}else a.o.forEach((c,d)=>{(d=a.N.get(d))&&Ek(a.client,b,d,c)}),a.o.clear(),a.N.clear(),a.T=void 0}
function Xk(a,b,c,d=0){const e=Y(d);b=b||rk(d);e&&b&&Jk(a.client,e,b,c)}
function Zk(a){for(var b=0;b<a.B.length;b++){var c=a.B[b];try{c()}catch(d){X(d)}}a.B.length=0;for(b=0;b<a.S.length;b++){c=a.S[b];try{c()}catch(d){X(d)}}}
var $k=class{constructor(){this.K=[];this.L=[];this.i=[];this.B=[];this.S=[];this.o=new Map;this.N=new Map;this.l=new Set;this.ia=new Map}j(a){this.client=a}sa(a,b,c={}){Q(()=>{[28631].includes(a)||(Xj(new Re("createClientScreen() called with a non-page VE",a)),a=83769);c.isHistoryNavigation||this.i.push({rootVe:a,key:c.key||""});this.K=[];this.L=[];c.V?Vk(this,a,b,c):Wk(this,a,b,c)})()}ha(a,b=0){Q(()=>{a.then(c=>{this.l.has(b)&&this.u&&this.u();
const d=Y(b),e=rk(b);if(d&&e){var f;(null==c?0:null==(f=c.response)?0:f.trackingParams)&&Ek(this.client,d,e,[jk(c.response.trackingParams)]);var g;(null==c?0:null==(g=c.playerResponse)?0:g.trackingParams)&&Ek(this.client,d,e,[jk(c.playerResponse.trackingParams)])}})})()}ta(a,b,c){return Q(()=>{const d=jk(a);
this.h(d,b,c);return d})()}h(a,b,c=0){Q(()=>{if(this.l.has(c))return this.K.push([a,
b]),!0;const d=Y(c),e=b||rk(c);if(d&&e){if(R("combine_ve_grafts")){const f=this.o.get(e.toString());f?f.push(a):(this.N.set(e.toString(),e),this.o.set(e.toString(),[a]));this.T||(this.T=uf(()=>{Yk(this,d)},1200))}else Ek(this.client,d,e,[a]);
return!0}return!1})()}ga(a,b,c=0){(c=Y(c))&&Ik(this.client,c,a,b)}m(a,b,c=0){if(!a)return!1;
c=Y(c);if(!c)return!1;Ik(this.client,c,jk(a),b);return!0}fa(a){const b=a.getScreenLayer&&a.getScreenLayer();a.visualElement?this.ga(a.visualElement,void 0,b):(a=Uk(Pk(),a),this.m(a,void 0,b))}clickCommand(a,b,c=0){return this.m(a.clickTrackingParams,b,c)}visualElementStateChanged(a,b,c=0){0===c&&this.l.has(c)?this.L.push([a,b]):Xk(this,a,b,c)}};function al(){if(R("use_core_sm"))return $k.h||($k.h=new $k),$k.h;bl.h||(bl.h=new bl);return bl.h}
function cl(a,b,c,d={}){a.l.add(d.layer||0);a.u=()=>{dl(a,b,c,d);const e=rk(d.layer);if(e){for(const f of a.K)a.h(f[0],f[1]||e,d.layer);for(const f of a.L)el(a,f[0],f[1])}};
c||Y(d.layer)||a.u();if(d.V)for(const e of d.V)a.ha(e,d.layer);else X(Error("Delayed screen needs a data promise."))}
function dl(a,b,c,d={}){var e=void 0;d.layer||(d.layer=0);e=void 0!==d.oa?d.oa:d.layer;const f=Y(e);e=rk(e);var g=c||e;let h;g&&(void 0!==d.parentCsn?h={clientScreenNonce:d.parentCsn,visualElement:g}:f&&"UNDEFINED_CSN"!==f&&(h={clientScreenNonce:f,visualElement:g}));let k;g=P("EVENT_ID");"UNDEFINED_CSN"===f&&g&&(k={servletData:{serializedServletEventId:g}});R("combine_ve_grafts")&&f&&fl(a,f);let l;try{l=Dk(a.client,b,h,d.U,d.cttAuthInfo,k,d.Sa,d.loggingExpectations)}catch(u){bk(u,{eb:b,rootVe:e,ab:c,
Oa:f,Za:h,U:d.U});X(u);return}xk(l,b,d.layer,d.cttAuthInfo);f&&"UNDEFINED_CSN"!==f&&e&&!uk(f)&&Hk(a.client,f,e,!0);a.i[a.i.length-1]&&!a.i[a.i.length-1].csn&&(a.i[a.i.length-1].csn=l||"");Rk();const m=rk(d.layer);f&&"UNDEFINED_CSN"!==f&&m&&(R("web_mark_root_visible")||R("music_web_mark_root_visible"))&&Kk(l,m);a.l.delete(d.layer||0);a.u=void 0;let n;null==(n=a.ia.get(d.layer))||n.forEach((u,p)=>{u?a.h(p,u,d.layer):m&&a.h(p,m,d.layer)});
gl(a)}
function fl(a,b){if(void 0===b){const c=tk();for(let d=0;d<c.length;d++)void 0!==c[d]&&fl(a,c[d])}else a.o.forEach((c,d)=>{(d=a.N.get(d))&&Ek(a.client,b,d,c)}),a.o.clear(),a.N.clear(),a.T=void 0}
function el(a,b,c,d=0){const e=Y(d);b=b||rk(d);e&&b&&Jk(a.client,e,b,c)}
function gl(a){for(var b=0;b<a.B.length;b++){var c=a.B[b];try{c()}catch(d){X(d)}}a.B.length=0;for(b=0;b<a.S.length;b++){c=a.S[b];try{c()}catch(d){X(d)}}}
var bl=class{constructor(){this.K=[];this.L=[];this.i=[];this.B=[];this.S=[];this.o=new Map;this.N=new Map;this.l=new Set;this.ia=new Map}j(a){this.client=a}sa(a,b,c={}){Q(()=>{[28631].includes(a)||(Xj(new Re("createClientScreen() called with a non-page VE",a)),a=83769);c.isHistoryNavigation||this.i.push({rootVe:a,key:c.key||""});this.K=[];this.L=[];c.V?cl(this,a,b,c):dl(this,a,b,c)})()}ha(a,b=0){Q(()=>{a.then(c=>{this.l.has(b)&&this.u&&this.u();
const d=Y(b),e=rk(b);if(d&&e){var f;(null==c?0:null==(f=c.response)?0:f.trackingParams)&&Ek(this.client,d,e,[jk(c.response.trackingParams)]);var g;(null==c?0:null==(g=c.playerResponse)?0:g.trackingParams)&&Ek(this.client,d,e,[jk(c.playerResponse.trackingParams)])}})})()}ta(a,b,c){return Q(()=>{const d=jk(a);
this.h(d,b,c);return d})()}h(a,b,c=0){Q(()=>{if(this.l.has(c))return this.K.push([a,
b]),!0;const d=Y(c),e=b||rk(c);if(d&&e){if(R("combine_ve_grafts")){const f=this.o.get(e.toString());f?f.push(a):(this.N.set(e.toString(),e),this.o.set(e.toString(),[a]));this.T||(this.T=uf(()=>{fl(this,d)},1200))}else Ek(this.client,d,e,[a]);
return!0}return!1})()}ga(a,b,c=0){(c=Y(c))&&Ik(this.client,c,a,b)}m(a,b,c=0){if(!a)return!1;
c=Y(c);if(!c)return!1;Ik(this.client,c,jk(a),b);return!0}fa(a){const b=a.getScreenLayer&&a.getScreenLayer();a.visualElement?this.ga(a.visualElement,void 0,b):(a=Uk(Pk(),a),this.m(a,void 0,b))}clickCommand(a,b,c=0){return this.m(a.clickTrackingParams,b,c)}visualElementStateChanged(a,b,c=0){0===c&&this.l.has(c)?this.L.push([a,b]):el(this,a,b,c)}};var hl=class extends J{constructor(a){super(a)}};var il=class extends J{constructor(a){super(a,0,"yt.sw.adr")}};function jl(a){return r(function*(){var b=yield t.fetch(a.i);if(200!==b.status)return Promise.reject("Server error when retrieving AmbientData");b=yield b.text();if(!b.startsWith(")]}'\n"))return Promise.reject("Incorrect JSPB formatting");a:{b=JSON.parse(b.substring(5));for(let c=0;c<b.length;c++)if("yt.sw.adr"===b[c][0]){b=new il(b[c]);break a}b=null}return b?b:Promise.reject("AmbientData missing from response")})}
function kl(a=!1){const b=ll.h;return r(function*(){if(a||!b.h)b.h=jl(b).then(b.j).catch(c=>{delete b.h;X(c)});
return b.h})}
var ll=class{constructor(){this.i=ml("/sw.js_data")}j(a){const b=Oc(a,hl,2);if(b){var c=Xc(b,5);c&&(t.__SAPISID=c);null!=Wc(b,10)?O("EOM_VISITOR_DATA",Xc(b,10)):null!=Wc(b,7)&&O("VISITOR_DATA",Xc(b,7));null!=Vc(b)&&(c=Vc(b),O("SESSION_INDEX",String(null!=c?c:0)));null!=Wc(b,8)&&O("DELEGATED_SESSION_ID",Xc(b,8));null!=Wc(b,11)&&O("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",Xc(b,11))}return a}};function nl(a,b){b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds&&setTimeout(()=>{delete a.h[b.encryptedTokenJarContents]},1E3*Number(b.expirationSeconds)))}
var ol=class{constructor(){this.h={}}handleResponse(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");let c,d;b=(null==(c=b.H.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];let e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){for(const f of b)delete this.h[f.encryptedTokenJarContents];nl(this,a)}}};function pl(){var a=P("INNERTUBE_CONTEXT");if(!a)return X(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};a=ta(a);R("web_no_tracking_params_in_shell_killswitch")||delete a.clickTracking;a.client||(a.client={});var b=a.client;b.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var c=mf();c?b.experimentsToken=c:delete b.experimentsToken;ol.h||(ol.h=new ol);b=ol.h.h;c=[];let d=0;for(var e in b)c[d++]=b[e];a.request=Object.assign({},a.request,{consistencyTokenJars:c});a.user=
Object.assign({},a.user);if(e=P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))a.user.serializedDelegationContext=e;return a}
;function ql(a){var b=a;if(a=P("INNERTUBE_HOST_OVERRIDE")){a=String(a);var c=String,d=b.match(Ka);b=d[5];var e=d[6];d=d[7];var f="";b&&(f+=b);e&&(f+="?"+e);d&&(f+="#"+d);b=a+c(f)}return b}
;var rl=class{};const sl={GET_DATASYNC_IDS:function(a){return()=>new a}(class extends rl{})};const tl=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function ul(a){var b={ic:{}},c=og();if(void 0!==ji.h){const d=ji.h;a=[b!==d.m,a!==d.l,c!==d.j,!1,!1,!1,void 0!==d.i];if(a.some(e=>e))throw new Re("InnerTubeTransportService is already initialized",a);
}else ji.h=new ji(b,a,c)}
function vl(a,b){return r(function*(){var c,d={sessionIndex:null==a?void 0:null==(c=a.wa)?void 0:c.sessionIndex};c=yield kb(qg(0,d));return Promise.resolve(Object.assign({},wl(b),c))})}
function xl(a,b,c){return r(function*(){var d;if(null==b?0:null==(d=b.H)?0:d.context){d=b.H.context;for(var e of[])yield e.nc(d)}var f;if(null==(f=a.i)?0:f.uc(b.input,b.H))return yield a.i.kc(b.input,b.H);var g;if((f=null==(g=b.config)?void 0:g.qc)&&a.h.has(f)&&R("web_memoize_inflight_requests"))var h=a.h.get(f);else{g=JSON.stringify(b.H);let n;e=null!=(n=null==(h=b.X)?void 0:h.headers)?n:{};b.X=Object.assign({},b.X,{headers:Object.assign({},e,c)});h=Object.assign({},b.X);"POST"===b.X.method&&(h=
Object.assign({},h,{body:g}));h=a.l.fetch(b.input,h,b.config);f&&a.h.set(f,h)}h=yield h;var k;let l;if(h&&"error"in h&&(null==(k=h)?0:null==(l=k.error)?0:l.details)){k=h.error.details;for(const n of k)(k=n["@type"])&&-1<tl.indexOf(k)&&(delete n["@type"],h=n)}f&&a.h.has(f)&&a.h.delete(f);let m;!h&&(null==(m=a.i)?0:m.hc(b.input,b.H))&&(h=yield a.i.jc(b.input,b.H));return h||void 0})}
function yl(a,b,c){var d={wa:{identity:rg}};b.context||(b.context=pl());return new z(e=>r(function*(){var f=ql(c);f=Xf(f)?"same-origin":"cors";if(a.j.hb){var g,h=null==d?void 0:null==(g=d.wa)?void 0:g.sessionIndex;g=qg(0,{sessionIndex:h});f=Object.assign({},wl(f),g)}else f=yield vl(d,f);g=ql(c);h={};P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT")&&(null==f?0:f.Authorization)||(h.key=P("INNERTUBE_API_KEY"));R("json_condensed_response")&&(h.prettyPrint="false");g=Wf(g,h||{},!1);h={method:"POST",
mode:Xf(g)?"same-origin":"cors",credentials:Xf(g)?"same-origin":"include"};var k={};const l={};for(const m of Object.keys(k))k[m]&&(l[m]=k[m]);0<Object.keys(l).length&&(h.headers=l);e(xl(a,{input:g,X:h,H:b,config:d},f))}))}
function wl(a){const b={"Content-Type":"application/json"};P("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=P("EOM_VISITOR_DATA"):P("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=P("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=P("LOGGED_IN",!1);"cors"!==a&&((a=P("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=P("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=P("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=P("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
var ji=class{constructor(a,b,c){this.m=a;this.l=b;this.j=c;this.i=void 0;this.h=new Map;a.qa||(a.qa={});a.qa=Object.assign({},sl,a.qa)}};var ii=new fi;let zl;function Al(){if(!zl){const a=oi();ul({fetch:(b,c)=>kb(fetch(new Request(b,c)))});
hi(a);zl=a.resolve(ii)}return zl}
;function Bl(a){return r(function*(){yield Cl();Xj(a)})}
function Dl(a){return r(function*(){yield Cl();X(a)})}
function El(a){r(function*(){var b=yield vh();b?yield ai(a,b):(yield kl(),b={timestamp:a.timestamp},b=a.appShellAssetLoadReport?{R:"appShellAssetLoadReport",payload:a.appShellAssetLoadReport,options:b}:a.clientError?{R:"clientError",payload:a.clientError,options:b}:void 0,b&&W(b.R,b.payload))})}
function Cl(){return r(function*(){try{yield kl()}catch(a){}})}
;const Fl={granted:"GRANTED",denied:"DENIED",unknown:"UNKNOWN"},Gl=RegExp("^(?:[a-z]+:)?//","i");function Hl(a){var b=a.data;a=b.type;b=b.data;"notifications_register"===a?(N("IDToken",b),Il()):"notifications_check_registration"===a&&Jl(b)}
function Kl(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(a=>{if(a)for(const b of a)b.postMessage({type:"update_unseen_notifications_count_signal"})})}
function Ll(a){const b=[];a.forEach(c=>{b.push({key:c.key,value:c.value})});
return b}
function Ml(a){return r(function*(){const b=Ll(a.payload.chrome.extraUrlParams),c={recipientId:a.recipientId,endpoint:a.payload.chrome.endpoint,extraUrlParams:b},d=Ze(Me);return Nl().then(e=>yl(e,c,d).then(f=>{f.json().then(g=>g&&g.endpointUrl?Ol(a,g.endpointUrl):Promise.resolve()).catch(g=>{Dl(g);
Promise.reject(g)})}))})}
function Pl(a,b){var c=Y(8);if(null==c||!b)return a;a=Gl.test(a)?new URL(a):new URL(a,self.registration.scope);a.searchParams.set("parentCsn",c);a.searchParams.set("parentTrackingParams",b);return a.toString()}
function Ol(a,b){a.deviceId&&N("DeviceId",a.deviceId);a.timestampSec&&N("TimestampLowerBound",a.timestampSec);const c=a.payload.chrome,d=al();d.sa(28631,void 0,{layer:8});var e;const f=null==(e=c.postedEndpoint)?void 0:e.clickTrackingParams;e=c.title;const g={body:c.body,icon:c.iconUrl,data:{nav:Pl(b,f),id:c.notificationId,attributionTag:c.attributionTag,clickEndpoint:c.clickEndpoint,postedEndpoint:c.postedEndpoint,clickTrackingParams:f,isDismissed:!0},tag:c.notificationTag||c.title+c.body+c.iconUrl,
requireInteraction:!0};return self.registration.showNotification(e,g).then(()=>{var h;(null==(h=g.data)?0:h.postedEndpoint)&&Ql(g.data.postedEndpoint);let k;if(null==(k=g.data)?0:k.clickTrackingParams)h={screenLayer:8,visualElement:d.ta(g.data.clickTrackingParams,void 0,8)},Sk(h);Rl(a.displayCap)}).catch(()=>{})}
function Ql(a){if(!of(a,Le))return Promise.reject();const b={serializedRecordNotificationInteractionsRequest:of(a,Le).serializedInteractionsRequest},c=Ze(Ne);return Nl().then(d=>yl(d,b,c)).then(d=>d)}
function Rl(a){-1!==a&&self.registration.getNotifications().then(b=>{for(let d=0;d<b.length-a;d++){b[d].data.isDismissed=!1;b[d].close();let e;if(null==(e=b[d].data)?0:e.clickTrackingParams){let f;var c=jk(null==(f=b[d].data)?void 0:f.clickTrackingParams);const g={screenLayer:8,visualElement:c},h=lk(82046),k=al();k.h(h,c,8);c={screenLayer:8,visualElement:h};Sk(c);k.fa(c);Tk(g)}}})}
function Jl(a){const b=[Sl(a),Ve("RegistrationTimestamp").then(Tl),Ul(),Vl(),Wl()];Promise.all(b).catch(()=>{N("IDToken",a);Il();return Promise.resolve()})}
function Tl(a){return 9E7>=Date.now()-(a||0)?Promise.resolve():Promise.reject()}
function Sl(a){return Ve("IDToken").then(b=>a===b?Promise.resolve():Promise.reject())}
function Ul(){return Ve("Permission").then(a=>Notification.permission===a?Promise.resolve():Promise.reject())}
function Vl(){return Ve("Endpoint").then(a=>Xl().then(b=>a===b?Promise.resolve():Promise.reject()))}
function Wl(){return Ve("application_server_key").then(a=>Yl().then(b=>a===b?Promise.resolve():Promise.reject()))}
function Zl(){var a=Notification.permission;if(Fl[a])return Fl[a]}
function Il(){N("RegistrationTimestamp",0);Promise.all([Xl(),$l(),am(),Yl()]).then(([a,b,c,d])=>{b=b?Pe(b):null;c=c?Pe(c):null;d=d?Hb(new Uint8Array(d),4):null;bm(a,b,c,d)}).catch(()=>{bm()})}
function bm(a=null,b=null,c=null,d=null){Ue().then(e=>{e&&(N("Endpoint",a),N("P256dhKey",b),N("AuthKey",c),N("application_server_key",d),N("Permission",Notification.permission),Promise.all([Ve("DeviceId"),Ve("NotificationsDisabled")]).then(([f,g])=>{if(null!=f)var h=f;else{f=[];var k;h=h||Od.length;for(k=0;256>k;k++)f[k]=Od[0|Math.random()*h];h=f.join("")}cm(h,null!=a?a:void 0,null!=b?b:void 0,null!=c?c:void 0,null!=d?d:void 0,null!=g?g:void 0)}))})}
function cm(a,b,c,d,e,f){r(function*(){const g={notificationRegistration:{chromeRegistration:{deviceId:a,pushParams:{applicationServerKey:e,authKey:d,p256dhKey:c,browserEndpoint:b},notificationsDisabledInApp:f,permission:Zl()}}},h=Ze(Oe);return Nl().then(k=>yl(k,g,h).then(()=>{N("DeviceId",a);N("RegistrationTimestamp",Date.now());N("TimestampLowerBound",Date.now())},l=>{Bl(l)}))})}
function Xl(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.endpoint):Promise.resolve(null))}
function $l(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("p256dh")):Promise.resolve(null))}
function am(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("auth")):Promise.resolve(null))}
function Yl(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.options.applicationServerKey):Promise.resolve(null))}
function Nl(){return r(function*(){try{return yield kl(!0),Al()}catch(a){return yield Bl(a),Promise.reject(a)}})}
;let dm=self.location.origin+"/";function ml(a){let b="undefined"!==typeof ServiceWorkerGlobalScope&&self instanceof ServiceWorkerGlobalScope?Hd.registration.scope:dm;b.endsWith("/")&&(b=b.slice(0,-1));return b+a}
;let em=void 0;function fm(a){return r(function*(){em||(em=yield a.open("yt-appshell-assets"));return em})}
function gm(a,b){return r(function*(){const c=yield fm(a),d=b.map(e=>hm(c,e));
return Promise.all(d)})}
function im(a,b){return r(function*(){let c;try{c=yield a.match(b,{cacheName:"yt-appshell-assets"})}catch(d){}return c})}
function jm(a,b){return r(function*(){const c=yield fm(a),d=(yield c.keys()).filter(e=>!b.includes(e.url)).map(e=>c.delete(e));
return Promise.all(d)})}
function km(a,b,c){return r(function*(){yield(yield fm(a)).put(b,c)})}
function lm(a,b){r(function*(){yield(yield fm(a)).delete(b)})}
function hm(a,b){return r(function*(){return(yield a.match(b))?Promise.resolve():a.add(b)})}
;var mm=Eh("yt-serviceworker-metadata",{P:{auth:{O:1},["resource-manifest-assets"]:{O:2}},ea:!0,upgrade(a,b){b(1)&&Vg(a,"resource-manifest-assets");b(2)&&Vg(a,"auth")},version:2});let nm=null;function om(a){return lh(mm(),a)}
function pm(){return r(function*(){const a=yield vh();if(a)return qm.h||(qm.h=new qm(a)),qm.h})}
function rm(a,b){return r(function*(){yield V(yield om(a.token),["resource-manifest-assets"],"readwrite",c=>{const d=c.objectStore("resource-manifest-assets"),e=Date.now();return U(d.h.put(b,e)).then(()=>{nm=e;let f=!0;return $g(d,{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},g=>f?(f=!1,g.advance(5)):d.delete(g.getKey()).then(()=>g.continue()))})})})}
function sm(a,b){return r(function*(){let c=!1,d=0;yield V(yield om(a.token),["resource-manifest-assets"],"readonly",e=>$g(e.objectStore("resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},f=>{if(f.M().includes(b))c=!0;else return d+=1,f.continue()}));
return c?d:-1})}
function tm(a){return r(function*(){nm||(yield V(yield om(a.token),["resource-manifest-assets"],"readonly",b=>$g(b.objectStore("resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},c=>{nm=c.getKey()})));
return nm})}
var qm=class{constructor(a){this.token=a}};function um(){return r(function*(){const a=yield vh();if(a)return vm.h||(vm.h=new vm(a)),vm.h})}
function wm(a,b){return r(function*(){yield Xg(yield om(a.token),"auth",b,"shell_identifier_key")})}
function xm(a){return r(function*(){return(yield(yield om(a.token)).get("auth","shell_identifier_key"))||""})}
function ym(a){return r(function*(){yield(yield om(a.token)).clear("auth")})}
var vm=class{constructor(a){this.token=a}};function zm(){r(function*(){const a=yield um();a&&(yield ym(a))})}
;var Sc=class extends J{constructor(a){super(a)}},Am=[Sc,1,td];var Bm=class extends J{constructor(a){super(a)}};Bm.A=[1];var Cm=function(a){return(b,c)=>{a:{if(lc.length){const e=lc.pop();hc(e,c);e.h.init(b,void 0,void 0,c);b=e}else b=new kc(b,c);try{const e=ld(a).h;var d=kd(a)(new e,b);break a}finally{b.h.clear(),b.l=-1,b.i=-1,100>lc.length&&lc.push(b)}d=void 0}return d}}([Bm,
1,ud,Am]);function Dm(a){return r(function*(){const b=a.headers.get("X-Resource-Manifest");return b?Promise.resolve(Em(b)):Promise.reject(Error("No resource manifest header"))})}
function Em(a){return Rc(Cm(decodeURIComponent(a))).reduce((b,c)=>{(c=Xc(c,1))&&b.push(c);return b},[])}
;function Fm(a){return r(function*(){const b=yield kl();if(b&&null!=Wc(b,3)){var c=yield um();c&&(c=yield xm(c),Wc(b,3)!==c&&(lm(a.caches,a.h),zm()))}})}
function Gm(a){return r(function*(){let b,c;try{c=yield Hm(a.i),b=yield Dm(c),yield gm(a.caches,b)}catch(d){return Promise.reject(d)}try{yield Im(),yield km(a.caches,a.h,c)}catch(d){return Promise.reject(d)}if(b)try{yield Jm(a,b,a.h)}catch(d){}return Promise.resolve()})}
function Km(a){return r(function*(){yield Fm(a);return Gm(a)})}
function Hm(a){return r(function*(){try{return yield t.fetch(new Request(a))}catch(b){return Promise.reject(b)}})}
function Im(){return r(function*(){var a=yield kl();let b;a&&null!=Wc(a,3)&&(b=Xc(a,3));return b?(a=yield um())?Promise.resolve(wm(a,b)):Promise.reject(Error("Could not get AuthMonitor instance")):Promise.reject(Error("Could not get datasync ID"))})}
function Jm(a,b,c){return r(function*(){const d=yield pm();if(d)try{yield rm(d,b)}catch(e){yield Bl(e)}b.push(c);try{yield jm(a.caches,b)}catch(e){yield Bl(e)}return Promise.resolve()})}
function Lm(a,b){return r(function*(){return im(a.caches,b)})}
function Mm(a){return r(function*(){return im(a.caches,a.h)})}
var Nm=class{constructor(){var a=self.caches;let b=ml("/app_shell");R("service_worker_forward_exp_params")&&(b+=self.location.search);var c=ml("/app_shell_home");this.caches=a;this.i=b;this.h=c}};var Om=class{constructor(){const a=this;this.stream=new ReadableStream({start(b){a.close=()=>void b.close();
a.h=c=>{const d=c.getReader();return d.read().then(function h({done:f,value:g}){if(f)return Promise.resolve();b.enqueue(g);return d.read().then(h)})};
a.i=()=>{const c=(new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");b.enqueue(c)}}})}};function Pm(a,b){return r(function*(){const c=b.request,d=yield Lm(a.h,c.url);if(d)return El({appShellAssetLoadReport:{assetPath:c.url,cacheHit:!0},timestamp:S()}),d;Qm(c);return Rm(b)})}
function Sm(a,b){return r(function*(){const c=yield Tm(b);if(c.response&&(c.response.ok||"opaqueredirect"===c.response.type||429===c.response.status||303===c.response.status||300<=c.response.status&&400>c.response.status))return c.response;const d=yield Mm(a.h);if(d)return Um(a),Vm(d,b);Wm(a);return c.response?c.response:Promise.reject(c.error)})}
function Xm(a,b){b=new URL(b);if(!a.config.va.includes(b.pathname))return!1;if(!b.search)return!0;b=new URLSearchParams(b.search);for(const c of a.config.Ja)if(a=b.get(c.key),void 0===c.value||a===c.value)if(b.delete(c.key),!b.toString())return!0;return!1}
function Ym(a,b){return r(function*(){const c=yield Mm(a.h);if(!c)return Wm(a),Rm(b);Um(a);var d;a:{if(c.headers&&(d=c.headers.get("date"))&&(d=Date.parse(d),!isNaN(d))){d=Math.round(S()-d);break a}d=-1}if(!(-1<d&&7<=d/864E5))return Vm(c,b);d=yield Tm(b);return d.response&&d.response.ok?d.response:Vm(c,b)})}
function Rm(a){return Promise.resolve(a.preloadResponse).then(b=>b&&!Zm(b)?b:t.fetch(a.request))}
function Qm(a){const b={assetPath:a.url,cacheHit:!1};pm().then(c=>{if(c){var d=tm(c).then(e=>{e&&(b.currentAppBundleTimestampSec=String(Math.floor(e/1E3)))});
c=sm(c,a.url).then(e=>{b.appBundleVersionDiffCount=e});
Promise.all([d,c]).catch(e=>{Bl(e)}).finally(()=>{El({appShellAssetLoadReport:b,
timestamp:S()})})}else El({appShellAssetLoadReport:b,
timestamp:S()})})}
function Um(a){El({appShellAssetLoadReport:{assetPath:a.h.h,cacheHit:!0},timestamp:S()})}
function Wm(a){El({appShellAssetLoadReport:{assetPath:a.h.h,cacheHit:!1},timestamp:S()})}
function Vm(a,b){if(!R("sw_nav_preload_pbj"))return a;const c=new Om,d=c.h(a.body);Promise.resolve(b.preloadResponse).then(e=>{if(!e||!Zm(e))throw Error("no pbj preload response available");d.then(()=>c.h(e.body)).then(()=>void c.close())}).catch(()=>{d.then(()=>{c.i();
c.close()})});
return new Response(c.stream,{status:a.status,statusText:a.statusText,headers:a.headers})}
function Tm(a){return r(function*(){try{return{response:yield Rm(a)}}catch(b){return{error:b}}})}
function Zm(a){return"pbj"===a.headers.get("x-navigation-preload-response-type")}
var hn=class{constructor(){var a=$m;var b={Na:an,cb:bn([cn,/\/signin/,/\/logout/]),va:["/","/feed/downloads"],Ja:dn([{key:"feature",value:"ytca"}]),Ia:en(R("kevlar_sw_app_wide_fallback")?fn:gn)};this.h=a;this.config=b}};const jn=/^\/$/,gn=[jn,/^\/feed\/downloads$/],fn=[jn,/^\/feed\/\w*/,/^\/results$/,/^\/playlist$/,/^\/watch$/,/^\/channel\/\w*/];function en(a){return new RegExp(a.map(b=>b.source).join("|"))}
const kn=/^https:\/\/([\w-]*\.)*youtube\.com.*/;function bn(a){a=en(a);return new RegExp(`${kn.source}(${a.source})`)}
const ln=en([/\.css$/,/\.js$/,/\.ico$/,/\/ytmweb\/_\/js\//,/\/ytmweb\/_\/ss\//,/\/kabuki\/_\/js\//,/\/kabuki\/_\/ss\//,/\/ytmainappweb\/_\/ss\//]),an=new RegExp(`${kn.source}(${ln.source})`),cn=/purge_shell=1/;function dn(a=[]){const b=[];for(const c of yd)b.push({key:c});for(const c of a)b.push(c);return b}
bn([cn]);dn();var nn=class{constructor(){var a=$m,b=mn;this.h=self;this.i=a;this.m=b;this.B=Qe}init(){this.h.oninstall=this.o.bind(this);this.h.onactivate=this.j.bind(this);this.h.onfetch=this.l.bind(this);this.h.onmessage=this.u.bind(this)}o(a){this.h.skipWaiting();const b=Km(this.i).catch(c=>{Bl(c);return Promise.resolve()});
a.waitUntil(b)}j(a){const b=[this.h.clients.claim()],c=this.h.registration;c.navigationPreload&&(b.push(c.navigationPreload.enable()),R("sw_nav_preload_pbj")&&b.push(c.navigationPreload.setHeaderValue("pbj")));a.waitUntil(Promise.all(b))}l(a){const b=this;return r(function*(){var c=b.m,d=!!b.h.registration.navigationPreload;const e=a.request;if(c.config.cb.test(e.url))ll.h&&(delete ll.h.h,t.__SAPISID=void 0,O("VISITOR_DATA",void 0),O("SESSION_INDEX",void 0),O("DELEGATED_SESSION_ID",void 0),O("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
void 0)),d=a.respondWith,c=c.h,lm(c.caches,c.h),zm(),c=Rm(a),d.call(a,c);else if(c.config.Na.test(e.url))a.respondWith(Pm(c,a));else if("navigate"===e.mode){const f=new URL(e.url),g=c.config.va;(!R("sw_nav_request_network_first")&&g.includes(f.pathname)?0:c.config.Ia.test(f.pathname))?a.respondWith(Sm(c,a)):Xm(c,e.url)?a.respondWith(Ym(c,a)):d&&a.respondWith(Rm(a))}})}u(a){const b=a.data;
this.B.includes(b.type)?Hl(a):"refresh_shell"===b.type&&Gm(this.i).catch(c=>{Bl(c)})}};function on(){let a=v("ytglobal.storage_");a||(a=new pn,w("ytglobal.storage_",a));return a}
var pn=class{estimate(){return r(function*(){const a=navigator;let b;if(null==(b=a.storage)?0:b.estimate)return a.storage.estimate();let c;if(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)return qn()})}};
function qn(){const a=navigator;return new Promise((b,c)=>{let d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota((e,f)=>{b({usage:e,quota:f})},e=>{c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
w("ytglobal.storageClass_",pn);function rn(a,b){on().estimate().then(c=>{c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:sn(null==c?void 0:c.usage),deviceStorageQuotaMbytes:sn(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
class tn{constructor(){var a=un;this.handleError=vn;this.h=a;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",()=>{this.i=!0});
this.j=Math.random()<=lf("ytidb_transaction_ended_event_rate_limit_session",.2)}ba(a,b){switch(a){case "IDB_DATA_CORRUPTED":R("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":R("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":rn(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=lf("ytidb_transaction_ended_event_rate_limit_transaction",
.1)&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}}}function sn(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;hg(eg(),{G:[{Ya:/Failed to fetch/,weight:500}],F:[]});var {handleError:vn=Wj,ba:un=W}={handleError:Dl,ba:function(a,b){return r(function*(){yield Cl();W(a,b)})}};
for(ug=new tn;0<tg.length;){const a=tg.shift();switch(a.type){case "ERROR":ug.handleError(a.payload);break;case "EVENT":ug.ba(a.eventType,a.payload)}}ll.h=new ll;self.onnotificationclick=function(a){a.notification.close();const b=a.notification.data;b.isDismissed=!1;const c=self.clients.matchAll({type:"window",includeUncontrolled:!0});c.then(d=>{a:{var e=b.nav;for(const f of d)if(f.url===e){f.focus();break a}self.clients.openWindow(e)}});
a.waitUntil(c);a.waitUntil(Ql(b.clickEndpoint))};
self.onnotificationclose=function(a){var b=a.notification.data;if(null==b?0:b.clickTrackingParams){var c=jk(b.clickTrackingParams);a={screenLayer:8,visualElement:c};if(b.isDismissed){const d=lk(74726);b=al();b.h(d,c,8);c={screenLayer:8,visualElement:d};Sk(c);b.fa(c)}Tk(a)}};
self.onpush=function(a){a.waitUntil(Ve("NotificationsDisabled").then(b=>{if(b)return Promise.resolve();if(a.data&&a.data.text().length)try{return Ml(a.data.json())}catch(c){return Promise.resolve(c.message)}return Promise.resolve()}));
a.waitUntil(Kl())};
self.onpushsubscriptionchange=function(){Il()};
const $m=new Nm,mn=new hn;(new nn).init();
