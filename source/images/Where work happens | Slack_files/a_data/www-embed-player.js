(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function ca(a){a=["object"==typeof globalThis&&globalThis,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function ea(){ea=function(){};
da.Symbol||(da.Symbol=fa)}
function ha(a,b){this.f=a;ba(this,"description",{configurable:!0,writable:!0,value:b})}
ha.prototype.toString=function(){return this.f};
var fa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ha("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ia(){ea();var a=da.Symbol.iterator;a||(a=da.Symbol.iterator=da.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(aa(this))}});
ia=function(){}}
function ja(a){ia();a={next:a};a[da.Symbol.iterator]=function(){return this};
return a}
function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ka(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},qa={};try{qa.__proto__=pa;oa=qa.a;break a}catch(a){}oa=!1}ma=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ra=ma;
function t(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(ra)ra(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.L=b.prototype}
function u(a,b){if(b){for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
function sa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=sa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=sa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function w(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ta="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)w(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ta});
u("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=q(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!w(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!w(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&w(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&w(k,g)&&w(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&w(k,g)&&w(k[g],this.f)?delete k[g][this.f]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ja(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&w(h.g,l))for(var p=0;p<m.length;p++){var v=m[p];if(k!==k&&v.key!==v.key||k===v.key)return{id:l,list:m,index:p,u:v}}return{id:l,list:m,index:-1,u:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=q(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(q([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
ia();var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.u?l.u.value=k:(l.u={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.u),this.f.previous.next=l.u,this.f.previous=l.u,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.u&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.u.previous.next=h.u.next,h.u.next.previous=h.u.previous,h.u.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).u};
e.prototype.get=function(h){return(h=d(this,h).u)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.f=new Map;if(c){c=q(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(q([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ia();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)w(b,d)&&c.push([d,b[d]]);return c}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==sa(this,b,"includes").indexOf(b,c||0)}});
u("Promise",function(a){function b(g){this.g=0;this.h=void 0;this.f=[];var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.A),reject:g(this.j)}};
b.prototype.A=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.D(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.w(g):this.l(g)}};
b.prototype.w=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.F(h,g):this.l(g)};
b.prototype.j=function(g){this.m(2,g)};
b.prototype.l=function(g){this.m(1,g)};
b.prototype.m=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.h=h;this.B()};
b.prototype.B=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.D=function(g){var h=this.i();g.aa(h.resolve,h.reject)};
b.prototype.F=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(v,r){return"function"==typeof v?function(B){try{l(v(B))}catch(K){m(K)}}:r}
var l,m,p=new b(function(v,r){l=v;m=r});
this.aa(k(g,l),k(h,m));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.aa=function(g,h){function k(){switch(l.g){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=q(g),m=l.next();!m.done;m=l.next())d(m.value).aa(h,k)})};
b.all=function(g){var h=q(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(B){return function(K){v[B]=K;r--;0==r&&l(v)}}
var v=[],r=0;do v.push(void 0),r++,d(k.value).aa(p(v.length-1),m),k=h.next();while(!k.done)})};
return b});
var ua=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=la(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
u("Reflect.construct",function(){return ua});
var x=this||self;function y(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
var va=/^[\w+/_-]+[=]{0,2}$/,wa=null;function z(a,b){for(var c=a.split("."),d=b||x,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function xa(){}
function ya(a){a.ia=void 0;a.getInstance=function(){return a.ia?a.ia:a.ia=new a}}
function za(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Aa(a){return"array"==za(a)}
function Ba(a){var b=za(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ca(a){return"function"==za(a)}
function Da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ea(a){return Object.prototype.hasOwnProperty.call(a,Fa)&&a[Fa]||(a[Fa]=++Ga)}
var Fa="closure_uid_"+(1E9*Math.random()>>>0),Ga=0;function Ha(a,b,c){return a.call.apply(a.bind,arguments)}
function Ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function A(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?A=Ha:A=Ja;return A.apply(null,arguments)}
function Ka(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var C=Date.now||function(){return+new Date};
function La(a,b){y(a,b,void 0)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.L=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;function Ma(a,b){if(!a||/[?&]dsh=1(&|$)/.test(a))return null;if(/[?&]ae=1(&|$)/.test(a)){var c=/[?&]adurl=([^&]+)/.exec(a);if(!c)return null;var d=b?c.index:a.length;try{return{xa:a.slice(0,d)+"&act=1"+a.slice(d),za:decodeURIComponent(c[1])}}catch(f){return null}}if(/[?&]ae=2(&|$)/.test(a)){c=a;d="";if(b){var e=a.indexOf("&adurl=");0<e&&(c=a.slice(0,e),d=a.slice(e))}return{xa:c+"&act=1"+d,za:c+"&dct=1"+d}}return null}
;function E(a){if(Error.captureStackTrace)Error.captureStackTrace(this,E);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
D(E,Error);E.prototype.name="CustomError";var Na=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Oa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Pa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Qa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ra(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Sa(a,b){var c=Na(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ta(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ua(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Va(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Wa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Xa(a,b){var c=Ba(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Ya(a){var b=Za,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function $a(a){for(var b in a)return!1;return!0}
function ab(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function bb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function cb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function db(a){var b=za(a);if("object"==b||"array"==b){if(Ca(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=db(a[c]);return b}return a}
var eb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<eb.length;f++)c=eb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function gb(a,b){this.f=a===hb&&b||"";this.g=ib}
gb.prototype.J=!0;gb.prototype.I=function(){return this.f};
function jb(){var a=kb;return a instanceof gb&&a.constructor===gb&&a.g===ib?a.f:"type_error:Const"}
var ib={},hb={},kb=new gb(hb,"");function lb(a,b){this.f=a===mb&&b||"";this.g=nb}
lb.prototype.J=!0;lb.prototype.I=function(){return this.f.toString()};
lb.prototype.ha=!0;lb.prototype.ea=function(){return 1};
function ob(a){if(a instanceof lb&&a.constructor===lb&&a.g===nb)return a.f;za(a);return"type_error:TrustedResourceUrl"}
var nb={},mb={};var pb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function qb(a,b){if(b)a=a.replace(rb,"&amp;").replace(sb,"&lt;").replace(tb,"&gt;").replace(ub,"&quot;").replace(vb,"&#39;").replace(wb,"&#0;");else{if(!xb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(rb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(sb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(tb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ub,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(vb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(wb,"&#0;"))}return a}
var rb=/&/g,sb=/</g,tb=/>/g,ub=/"/g,vb=/'/g,wb=/\x00/g,xb=/[\x00&<>"']/;function G(a,b){this.f=a===yb&&b||"";this.g=zb}
G.prototype.J=!0;G.prototype.I=function(){return this.f.toString()};
G.prototype.ha=!0;G.prototype.ea=function(){return 1};
function Ab(a){if(a instanceof G&&a.constructor===G&&a.g===zb)return a.f;za(a);return"type_error:SafeUrl"}
var Bb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Cb(a){if(a instanceof G)return a;a="object"==typeof a&&a.J?a.I():String(a);Bb.test(a)||(a="about:invalid#zClosurez");return new G(yb,a)}
var zb={},yb={};var Db;a:{var Eb=x.navigator;if(Eb){var Fb=Eb.userAgent;if(Fb){Db=Fb;break a}}Db=""}function H(a){return-1!=Db.indexOf(a)}
;function Gb(){this.f="";this.h=Hb;this.g=null}
Gb.prototype.ha=!0;Gb.prototype.ea=function(){return this.g};
Gb.prototype.J=!0;Gb.prototype.I=function(){return this.f.toString()};
function Ib(a){if(a instanceof Gb&&a.constructor===Gb&&a.h===Hb)return a.f;za(a);return"type_error:SafeHtml"}
var Hb={};function Jb(a,b){var c=new Gb;c.f=a;c.g=b;return c}
Jb("<!DOCTYPE html>",0);var Lb=Jb("",0);Jb("<br>",0);function Mb(a,b){var c=b instanceof G?b:Cb(b);a.href=Ab(c)}
function Nb(a,b){a.src=ob(b);if(null===wa)b:{var c=x.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&va.test(c)){wa=c;break b}wa=""}c=wa;c&&a.setAttribute("nonce",c)}
;function Ob(a){return a=qb(a,void 0)}
function Pb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Qb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function I(a){return a?decodeURI(a):a}
function J(a,b){return b.match(Qb)[a]||null}
function Rb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Rb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Sb(a){var b=[],c;for(c in a)Rb(c,a[c],b);return b.join("&")}
function Tb(a,b){var c=Sb(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var Ub=/#|$/;function Vb(a,b){var c=a.search(Ub);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function Wb(a){this.f=Ma(a.url,a.ub)}
;var Xb=H("Opera"),Yb=H("Trident")||H("MSIE"),Zb=H("Edge"),$b=H("Gecko")&&!(-1!=Db.toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),ac=-1!=Db.toLowerCase().indexOf("webkit")&&!H("Edge");function bc(){var a=x.document;return a?a.documentMode:void 0}
var cc;a:{var dc="",ec=function(){var a=Db;if($b)return/rv:([^\);]+)(\)|;)/.exec(a);if(Zb)return/Edge\/([\d\.]+)/.exec(a);if(Yb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ac)return/WebKit\/(\S+)/.exec(a);if(Xb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ec&&(dc=ec?ec[1]:"");if(Yb){var fc=bc();if(null!=fc&&fc>parseFloat(dc)){cc=String(fc);break a}}cc=dc}var gc=cc,hc;if(x.document&&Yb){var ic=bc();hc=ic?ic:parseInt(gc,10)||void 0}else hc=void 0;var jc=hc;var kc={},lc=null;var L=window;function mc(a){var b=z("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&
a.constructor instanceof Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,nc[b]?b=nc[b]:(b=String(b),nc[b]||(c=/function\s+([^\(]+)/m.exec(b),nc[b]=c?c[1]:"[Anonymous]"),b=nc[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var nc={};function oc(a){this.f=a||{cookie:""}}
n=oc.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.wb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ma}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(C()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:
"")};
n.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=pb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ma:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.f.cookie};
n.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=pb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var pc=new oc("undefined"==typeof document?null:document);var qc=!Yb||9<=Number(jc);function rc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=rc.prototype;n.clone=function(){return new rc(this.x,this.y)};
n.equals=function(a){return a instanceof rc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function sc(a,b){this.width=a;this.height=b}
n=sc.prototype;n.clone=function(){return new sc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function tc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function uc(a,b){Wa(b,function(c,d){c&&"object"==typeof c&&c.J&&(c=c.I());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:vc.hasOwnProperty(d)?a.setAttribute(vc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var vc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function wc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!qc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ob(g.name),'"');if(g.type){f.push(' type="',Ob(g.type),'"');var h={};fb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=xc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):uc(f,g));2<d.length&&yc(e,f,d);return f}
function yc(a,b,c){function d(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!Ba(f)||Da(f)&&0<f.nodeType?d(f):F(zc(f)?Ta(f):f,d)}}
function xc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function zc(a){if(a&&"number"==typeof a.length){if(Da(a))return"function"==typeof a.item||"string"==typeof a.item;if(Ca(a))return"function"==typeof a.item}return!1}
function Ac(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Bc(a){Cc();return new lb(mb,a)}
var Cc=xa;function Dc(a){var b=Ec;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Fc(){var a=[];Dc(function(b){a.push(b)});
return a}
var Ec={bb:"allow-forms",cb:"allow-modals",eb:"allow-orientation-lock",fb:"allow-pointer-lock",gb:"allow-popups",hb:"allow-popups-to-escape-sandbox",ib:"allow-presentation",jb:"allow-same-origin",kb:"allow-scripts",lb:"allow-top-navigation",mb:"allow-top-navigation-by-user-activation"},Gc=Va(function(){return Fc()});
function Hc(){var a=xc(document,"IFRAME"),b={};F(Gc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Ic(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Jc=(new Date).getTime();function Kc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");
if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Lc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var v=g,r=0;64>r;r+=4)v[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=v[r-3]^v[r-8]^v[r-14]^v[r-16],v[r]=(p<<1|p>>>31)&4294967295;p=e[0];var B=e[1],K=e[2],na=e[3],Oc=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var Ia=na^B&(K^na);var Kb=1518500249}else Ia=B^K^na,Kb=1859775393;else 60>r?(Ia=B&K|na&(B|K),Kb=2400959708):(Ia=B^K^na,Kb=3395469782);Ia=((p<<5|p>>>27)&4294967295)+Ia+Oc+Kb+v[r]&4294967295;Oc=na;na=K;K=(B<<30|B>>>2)&4294967295;B=p;p=Ia}e[0]=e[0]+p&4294967295;e[1]=
e[1]+B&4294967295;e[2]=e[2]+K&4294967295;e[3]=e[3]+na&4294967295;e[4]=e[4]+Oc&4294967295}
function c(p,v){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],B=0,K=p.length;B<K;++B)r.push(p.charCodeAt(B));p=r}v||(v=p.length);r=0;if(0==l)for(;r+64<v;)b(p.slice(r,r+64)),r+=64,m+=64;for(;r<v;)if(f[l++]=p[r++],m++,64==l)for(l=0,b(f);r+64<v;)b(p.slice(r,r+64)),r+=64,m+=64}
function d(){var p=[],v=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=v&255,v>>>=8;b(f);for(r=v=0;5>r;r++)for(var B=24;0<=B;B-=8)p[v++]=e[r]>>B&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ya:function(){for(var p=d(),v="",r=0;r<p.length;r++)v+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return v}}}
;function Mc(a,b,c){var d=[],e=[];if(1==(Aa(c)?2:1))return e=[b,a],F(d,function(h){e.push(h)}),Nc(e.join(" "));
var f=[],g=[];F(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(h){e.push(h)});
a=Nc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Nc(a){var b=Lc();b.update(a);return b.ya().toLowerCase()}
;function Pc(a){var b=Kc(String(x.location.href)),c;(c=x.__SAPISID||x.__APISID||x.__OVERRIDE_SID)?c=!0:(c=new oc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?x.__SAPISID:x.__APISID,c||(c=new oc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(x.location.href);return d&&c&&b?[b,Mc(Kc(d),c,a||null)].join(" "):null}return null}
;/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
function Qc(){this.g=[];this.f=-1}
Qc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Qc.prototype.get=function(a){return!!this.g[a]};
function Rc(a){-1==a.f&&(a.f=Qa(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Sc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Sc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Tc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Uc(a){x.setTimeout(function(){throw a;},0)}
var Vc;
function Wc(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var e=xc(document,"IFRAME");e.style.display="none";e.src=ob(new lb(mb,jb())).toString();document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Ib(Lb));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=A(function(k){if(("*"==h||
k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!H("Trident")&&!H("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.la;c.la=null;e()}};
return function(e){d.next={la:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function Xc(){this.g=this.f=null}
var Zc=new Sc(function(){return new Yc},function(a){a.reset()});
Xc.prototype.add=function(a,b){var c=Zc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Xc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Yc(){this.next=this.scope=this.f=null}
Yc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Yc.prototype.reset=function(){this.next=this.scope=this.f=null};function $c(a,b){ad||bd();cd||(ad(),cd=!0);dd.add(a,b)}
var ad;function bd(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);ad=function(){a.then(ed)}}else ad=function(){var b=ed;
!Ca(x.setImmediate)||x.Window&&x.Window.prototype&&!H("Edge")&&x.Window.prototype.setImmediate==x.setImmediate?(Vc||(Vc=Wc()),Vc(b)):x.setImmediate(b)}}
var cd=!1,dd=new Xc;function ed(){for(var a;a=dd.remove();){try{a.f.call(a.scope)}catch(b){Uc(b)}Tc(Zc,a)}cd=!1}
;function fd(){this.g=-1}
;function gd(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
D(gd,fd);gd.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function hd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
gd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)hd(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){hd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){hd(this,e);f=0;break}}this.h=f;this.j+=b}};
gd.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;hd(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function M(){this.g=this.g;this.B=this.B}
M.prototype.g=!1;M.prototype.dispose=function(){this.g||(this.g=!0,this.o())};
function id(a,b){a.g?b():(a.B||(a.B=[]),a.B.push(b))}
M.prototype.o=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function jd(a){a&&"function"==typeof a.dispose&&a.dispose()}
function kd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ba(d)?kd.apply(null,d):jd(d)}}
;function ld(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function md(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function nd(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:ld(a).match(/\S+/g)||[],c=0<=Na(c,b);return c}
function od(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):nd(a,"inverted-hdpi")&&md(a,Oa(a.classList?a.classList:ld(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var pd="StopIteration"in x?x.StopIteration:{message:"StopIteration",stack:""};function qd(){}
qd.prototype.next=function(){throw pd;};
qd.prototype.G=function(){return this};
function rd(a){if(a instanceof qd)return a;if("function"==typeof a.G)return a.G(!1);if(Ba(a)){var b=0,c=new qd;c.next=function(){for(;;){if(b>=a.length)throw pd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function sd(a,b){if(Ba(a))try{F(a,b,void 0)}catch(c){if(c!==pd)throw c;}else{a=rd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==pd)throw c;}}}
function td(a){if(Ba(a))return Ta(a);a=rd(a);var b=[];sd(a,function(c){b.push(c)});
return b}
;function ud(a,b){this.h={};this.f=[];this.H=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ud)for(c=vd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function vd(a){wd(a);return a.f.concat()}
n=ud.prototype;n.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||xd;wd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function xd(a,b){return a===b}
n.isEmpty=function(){return 0==this.g};
n.clear=function(){this.h={};this.H=this.g=this.f.length=0};
n.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.H++,this.f.length>2*this.g&&wd(this),!0):!1};
function wd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
n.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
n.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.H++);this.h[a]=b};
n.forEach=function(a,b){for(var c=vd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new ud(this)};
n.G=function(a){wd(this);var b=0,c=this.H,d=this,e=new qd;e.next=function(){if(c!=d.H)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw pd;var f=d.f[b++];return a?f:d.h[f]};
return e};function yd(a){var b=[];zd(new Ad,a,b);return b.join("")}
function Ad(){}
function zd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),zd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Bd(d,c),c.push(":"),zd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Bd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Cd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Dd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Bd(a,b){b.push('"',a.replace(Dd,function(c){var d=Cd[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Cd[c]=d);return d}),'"')}
;function Ed(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function N(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=xa)try{var b=this;a.call(void 0,function(c){Fd(b,2,c)},function(c){Fd(b,3,c)})}catch(c){Fd(this,3,c)}}
function Gd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
Gd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Hd=new Sc(function(){return new Gd},function(a){a.reset()});
function Id(a,b,c){var d=Hd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Jd(a){return new N(function(b,c){c(a)})}
N.prototype.then=function(a,b,c){return Kd(this,Ca(a)?a:null,Ca(b)?b:null,c)};
N.prototype.$goog_Thenable=!0;function Ld(a,b){return Kd(a,null,b,void 0)}
N.prototype.cancel=function(a){if(0==this.f){var b=new Md(a);$c(function(){Nd(this,b)},this)}};
function Nd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Nd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Od(c),Pd(c,e,3,b)))}a.h=null}else Fd(a,3,b)}
function Qd(a,b){a.g||2!=a.f&&3!=a.f||Rd(a);a.i?a.i.next=b:a.g=b;a.i=b}
function Kd(a,b,c,d){var e=Id(null,null,null);e.f=new N(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Md?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;Qd(a,e);return e.f}
N.prototype.w=function(a){this.f=0;Fd(this,2,a)};
N.prototype.A=function(a){this.f=0;Fd(this,3,a)};
function Fd(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.w,f=a.A;if(d instanceof N){Qd(d,Id(e||xa,f||null,a));var g=!0}else if(Ed(d))d.then(e,f,a),g=!0;else{if(Da(d))try{var h=d.then;if(Ca(h)){Sd(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.m=c,a.f=b,a.h=null,Rd(a),3!=b||c instanceof Md||Td(a,c))}}
function Sd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Rd(a){a.l||(a.l=!0,$c(a.B,a))}
function Od(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
N.prototype.B=function(){for(var a;a=Od(this);)Pd(this,a,this.f,this.m);this.l=!1};
function Pd(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Ud(b,c,d);else try{b.h?b.g.call(b.context):Ud(b,c,d)}catch(e){Vd.call(null,e)}Tc(Hd,b)}
function Ud(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Td(a,b){a.j=!0;$c(function(){a.j&&Vd.call(null,b)})}
var Vd=Uc;function Md(a){E.call(this,a)}
D(Md,E);Md.prototype.name="cancel";function O(a){M.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.m=!!a}
D(O,M);n=O.prototype;n.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function Wd(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=Ra(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.N(b)}}
n.N=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=xa):(c&&Sa(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
n.M=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];Xd(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.N(c)}}return 0!=e}return!1};
function Xd(a,b,c){$c(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.h[a];b&&(F(b,this.N,this),delete this.h[a])}else this.f.length=0,this.h={}};
n.o=function(){O.L.o.call(this);this.clear();this.i.length=0};function Yd(a){this.f=a}
Yd.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,yd(b))};
Yd.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Yd.prototype.remove=function(a){this.f.remove(a)};function Zd(a){this.f=a}
D(Zd,Yd);function $d(a){this.data=a}
function ae(a){return void 0===a||a instanceof $d?a:new $d(a)}
Zd.prototype.set=function(a,b){Zd.L.set.call(this,a,ae(b))};
Zd.prototype.g=function(a){a=Zd.L.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Zd.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function be(a){this.f=a}
D(be,Zd);be.prototype.set=function(a,b,c){if(b=ae(b)){if(c){if(c<C()){be.prototype.remove.call(this,a);return}b.expiration=c}b.creation=C()}be.L.set.call(this,a,b)};
be.prototype.g=function(a){var b=be.L.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<C()||c&&c>C())be.prototype.remove.call(this,a);else return b}};function ce(){}
;function de(){}
D(de,ce);de.prototype.clear=function(){var a=td(this.G(!0)),b=this;F(a,function(c){b.remove(c)})};function ee(a){this.f=a}
D(ee,de);n=ee.prototype;n.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeItem(a)};
n.G=function(a){var b=0,c=this.f,d=new qd;d.next=function(){if(b>=c.length)throw pd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.f.clear()};
n.key=function(a){return this.f.key(a)};function fe(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
D(fe,ee);function ge(a,b){this.g=a;this.f=null;if(Yb&&!(9<=Number(jc))){he||(he=new ud);this.f=he.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),he.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
D(ge,de);var ie={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},he=null;function je(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ie[b]})}
n=ge.prototype;n.isAvailable=function(){return!!this.f};
n.set=function(a,b){this.f.setAttribute(je(a),b);ke(this)};
n.get=function(a){a=this.f.getAttribute(je(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeAttribute(je(a));ke(this)};
n.G=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new qd;d.next=function(){if(b>=c.length)throw pd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);ke(this)};
function ke(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function le(a,b){this.g=a;this.f=b+"::"}
D(le,de);le.prototype.set=function(a,b){this.g.set(this.f+a,b)};
le.prototype.get=function(a){return this.g.get(this.f+a)};
le.prototype.remove=function(a){this.g.remove(this.f+a)};
le.prototype.G=function(a){var b=this.g.G(!0),c=this,d=new qd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function me(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var ne=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};y("yt.config_",ne,void 0);function P(a){me(ne,arguments)}
function Q(a,b){return a in ne?ne[a]:b}
function oe(){return Q("ERRORS",[])}
function pe(){return Q("PLAYER_CONFIG",{})}
function qe(a){var b=ne.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var re=[];function se(a){re.forEach(function(b){return b(a)})}
function te(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ue(b),se(b)}}:a}
function ue(a){var b=z("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=oe(),b.push([a,"ERROR",void 0,void 0,void 0]),P("ERRORS",b))}
function ve(a){var b=z("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=oe(),b.push([a,"WARNING",void 0,void 0,void 0]),P("ERRORS",b))}
;function we(){var a=xe;z("yt.ads.biscotti.getId_")||y("yt.ads.biscotti.getId_",a,void 0)}
function ye(a){y("yt.ads.biscotti.lastId_",a,void 0)}
;function ze(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Aa(b[f])?Ua(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};ue(h)}}}return b}
function Ae(a){var b=[];Wa(a,function(c,d){var e=encodeURIComponent(String(d)),f;Aa(c)?f=c:f=[c];F(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Be(a){"?"==a.charAt(0)&&(a=a.substr(1));return ze(a)}
function Ce(a,b){return De(a,b||{},!0)}
function De(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Be(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Tb(a,e)+d}
;function Ee(a){var b=Fe;a=void 0===a?z("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Ge(b),He(b));b.ca_type="image";a&&(b.bid=a);return b}
function Ge(a){var b={};b.dt=Jc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?L:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!L.navigator&&"unknown"!==typeof L.navigator.javaEnabled&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(b.u_h=L.screen.height,b.u_w=L.screen.width,b.u_ah=L.screen.availHeight,b.u_aw=L.screen.availWidth,b.u_cd=L.screen.colorDepth);
L.navigator&&L.navigator.plugins&&(b.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(b.u_nmime=L.navigator.mimeTypes.length);return b}
function He(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(p){}try{var e=b.outerWidth;var f=b.outerHeight}catch(p){}try{var g=b.innerWidth;var h=b.innerHeight}catch(p){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new sc(l.clientWidth,l.clientHeight)).round()}catch(p){m=new sc(-12245933,-12245933)}k=m;m={};l=new Qc;x.SVGElement&&
x.document.createElementNS&&l.set(0);c=Hc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);x.crypto&&x.crypto.subtle&&l.set(3);x.TextDecoder&&x.TextEncoder&&l.set(4);l=Rc(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!L.WebGLRenderingContext,m}
var Fe=new function(){var a=window.document;this.f=window;this.g=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){return Ae(Ee(a))},void 0);C();function R(a){a=Ie(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Je(a,b){var c=Ie(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Ie(a){var b=Q("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:Q("EXPERIMENT_FLAGS",{})[a]}
;var Ke=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Le(){if(!Ke)return null;var a=Ke();return"open"in a?a:null}
function Me(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function S(a,b){Ca(a)&&(a=te(a));return window.setTimeout(a,b)}
function T(a){window.clearTimeout(a)}
;var Ne={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Oe="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Pe=!1;
function Qe(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=J(1,a),e=I(J(3,a));d&&e?(d=c,c=a.match(Qb),d=d.match(Qb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?I(J(3,c))==e&&(Number(J(4,c))||null)==(Number(J(4,a))||null):!0;d=R("web_ajax_ignore_global_headers_if_set");for(var f in Ne)e=Q(Ne[f]),!e||!c&&!Re(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Re(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Re(a,"X-YouTube-Time-Zone"))&&(f="undefined"!=typeof Intl?
(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||Re(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=Ae(Ee(void 0));return b}
function Se(a){var b=window.location.search,c=I(J(3,a)),d=I(J(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Be(b),f={};F(Oe,function(g){e[g]&&(f[g]=e[g])});
return De(a,f||{},!1)}
function Re(a,b){var c=Q("CORS_HEADER_WHITELIST")||{},d=I(J(3,a));return d?(c=c[d])?0<=Na(c,b):!1:!0}
function Te(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Ue(a,b);var d=Ve(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&T(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||x;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.ja&&b.ja.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.qa&&0<b.timeout&&(f=S(function(){e||(e=!0,T(f),b.qa.call(b.context||x))},b.timeout))}else We(a,b)}
function We(a,b){var c=b.format||"JSON";a=Ue(a,b);var d=Ve(a,b),e=!1,f,g=Xe(a,function(h){if(!e){e=!0;f&&T(f);var k=Me(h),l=null,m=400<=h.status&&500>h.status,p=500<=h.status&&600>h.status;if(k||m||p)l=Ye(c,h,b.qb);if(k)a:if(h&&204==h.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};m=b.context||x;k?b.onSuccess&&b.onSuccess.call(m,h,l):b.onError&&b.onError.call(m,h,l);b.ja&&b.ja.call(m,h,l)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.O&&0<b.timeout&&(f=S(function(){e||(e=!0,g.abort(),T(f),b.O.call(b.context||x,g))},b.timeout));
return g}
function Ue(a,b){b.tb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0),d=b.ab;d&&(d[c]&&delete d[c],a=Ce(a,d));return a}
function Ve(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.C,g=Q("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.sb||I(J(3,a))&&!b.withCredentials&&I(J(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.C&&b.C[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Be(e),fb(e,f),e=b.ra&&"JSON"==b.ra?JSON.stringify(e):Sb(e));f=e||f&&!$a(f);!Pe&&f&&"POST"!=b.method&&(Pe=!0,ue(Error("AJAX request with postData should use POST")));
return e}
function Ye(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Ze(b):null)d={},F(b.getElementsByTagName("*"),function(e){d[e.tagName]=$e(e)})}c&&af(d);
return d}
function af(a){if(Da(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Jb(a[b],null);a[c]=d}else af(a[b])}}
function Ze(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function $e(a){var b="";F(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Xe(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&te(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Le();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=Se(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Qe(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var bf={},cf=0;
function df(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Db,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof G||(a="object"==typeof a&&a.J?a.I():String(a),Bb.test(a)||(a="about:invalid#zClosurez"),a=new G(yb,a)),b=Ab(a),"about:invalid#zClosurez"===b?a="":(b instanceof Gb?a=b:(d="object"==typeof b,a=null,d&&b.ha&&(a=b.ea()),b=qb(d&&b.J?b.I():String(b)),a=Jb(b,a)),a=Ib(a).toString(),a=encodeURIComponent(String(yd(a)))),/^[\s\xa0]*$/.test(a)||(a=wc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+
'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Xe(a,b,"POST",e,d):Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Xe(a,b,"GET","",d):ef(a,b)||ff(a,b))}
function ef(a,b){if(!qe("web_use_beacon_api_for_ad_click_server_pings"))return!1;if(qe("use_sonic_library_for_v4_support"))try{var c=I(J(5,a));if(!c||!c.endsWith("/aclk")||!(new Wb({url:a})).f)return!1}catch(d){return ve(Error("ClickUrl library throws error, url = "+a)),!1}else if(c=I(J(5,a)),!c||-1==c.indexOf("/aclk")||"1"!==Vb(a,"ae")||"1"!==Vb(a,"act"))return!1;return gf(a)?(b&&b(),!0):!1}
function gf(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function ff(a,b){var c=new Image,d=""+cf++;bf[d]=c;c.onload=c.onerror=function(){b&&bf[d]&&b();delete bf[d]};
c.src=a}
;var hf=z("ytPubsubPubsubInstance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.N;O.prototype.publish=O.prototype.M;O.prototype.clear=O.prototype.clear;y("ytPubsubPubsubInstance",hf,void 0);var jf=z("ytPubsubPubsubSubscribedKeys")||{};y("ytPubsubPubsubSubscribedKeys",jf,void 0);var kf=z("ytPubsubPubsubTopicToKeys")||{};y("ytPubsubPubsubTopicToKeys",kf,void 0);var lf=z("ytPubsubPubsubIsSynchronous")||{};y("ytPubsubPubsubIsSynchronous",lf,void 0);
function mf(a,b){var c=nf();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){jf[d]&&b.apply(window,e)};
try{lf[a]?f():S(f,0)}catch(g){ue(g)}},void 0);
jf[d]=!0;kf[a]||(kf[a]=[]);kf[a].push(d);return d}return 0}
function of(a){var b=nf();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),F(a,function(c){b.unsubscribeByKey(c);delete jf[c]}))}
function pf(a,b){var c=nf();c&&c.publish.apply(c,arguments)}
function qf(a){var b=nf();if(b)if(b.clear(a),a)rf(a);else for(var c in kf)rf(c)}
function nf(){return z("ytPubsubPubsubInstance")}
function rf(a){kf[a]&&(a=kf[a],F(a,function(b){jf[b]&&delete jf[b]}),a.length=0)}
;var sf=window,U=sf.ytcsi&&sf.ytcsi.now?sf.ytcsi.now:sf.performance&&sf.performance.timing&&sf.performance.now&&sf.performance.timing.navigationStart?function(){return sf.performance.timing.navigationStart+sf.performance.now()}:function(){return(new Date).getTime()};var tf=Je("initial_gel_batch_timeout",1E3),uf=Math.pow(2,16)-1,vf=null,wf=0,xf={log_event:"events",log_interaction:"interactions"},yf=Object.create(null);yf.log_event="GENERIC_EVENT_LOGGING";yf.log_interaction="INTERACTION_LOGGING";var zf=new Set(["log_event"]),Af={},Bf=0,Cf=0,Df=0,Ef=!0,V=z("ytLoggingTransportLogPayloadsQueue_")||{};y("ytLoggingTransportLogPayloadsQueue_",V,void 0);var Ff=z("ytLoggingTransportTokensToCttTargetIds_")||{};y("ytLoggingTransportTokensToCttTargetIds_",Ff,void 0);
var Gf=z("ytLoggingTransportDispatchedStats_")||{};y("ytLoggingTransportDispatchedStats_",Gf,void 0);var Hf=z("ytLoggingTransportCapturedTime_")||{};y("ytytLoggingTransportCapturedTime_",Hf,void 0);
function If(){T(Bf);T(Cf);Cf=0;if(!$a(V)){for(var a in V){var b=Af[a];if(b&&b.isReady()){var c=void 0,d=a,e=b,f=xf[d],g=Gf[d]||{};Gf[d]=g;b=Math.round(U());for(c in V[d]){var h=db,k=e.f||Jf();k={client:{hl:k.Ia,gl:k.Ha,clientName:k.Ga,clientVersion:k.innertubeContextClientVersion,configInfo:k.Fa}};var l=window.devicePixelRatio;l&&1!=l&&(k.client.screenDensityFloat=String(l));l=Q("EXPERIMENTS_TOKEN","");""!==l&&(k.client.experimentsToken=l);var m=l=void 0,p=[],v=Q("EXPERIMENTS_FORCED_FLAGS",{});for(m in v)p.push({key:m,
value:String(v[m])});m=Q("EXPERIMENT_FLAGS",{});for(l in m)l.startsWith("force_")&&void 0===v[l]&&p.push({key:l,value:String(m[l])});l=p;0<l.length&&(k.request={internalExperimentFlags:l});Q("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(k.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});R("enable_device_forwarding_from_xhr_client")&&(k.client=Object.assign(k.client,Kf()));h=h({context:k});h[f]=Lf(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=h[f].length;if(k=
Ff[c])a:{p=h;v=c;if(k.videoId)l="VIDEO";else if(k.playlistId)l="PLAYLIST";else break a;p.credentialTransferTokenTargetId=k;p.context=p.context||{};p.context.user=p.context.user||{};p.context.user.credentialTransferTokens=[{token:v,scope:l}]}delete Ff[c];k=h;k.requestTimeMs=b;R("unsplit_gel_payloads_in_logs")&&(k.unsplitGelPayloadsInLogs=!0);if(l=Q("EVENT_ID",void 0))p=Q("BATCH_CLIENT_COUNTER",void 0)||0,!p&&R("web_client_counter_random_seed")&&(p=Math.floor(Math.random()*uf/2)),p++,p>uf&&(p=1),P("BATCH_CLIENT_COUNTER",
p),l={serializedEventId:l,clientCounter:p},k.serializedClientEventId=l,vf&&wf&&R("log_gel_rtt_web")&&(k.previousBatchInfo={serializedClientEventId:vf,roundtripMs:wf}),vf=l,wf=0;Mf(e,d,h,{retry:zf.has(d),onSuccess:Ka(Nf,U())})}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?((c.averageTimeBetweenDispatchesMs||0)*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete V[a];Ef=!1}}$a(V)||Of()}}
function Pf(){var a=[];for(e in V){var b=Gf[e]||{};Gf[e]=b;for(var c in V[e]){var d=Lf(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(U());for(var f in Gf)b=Gf[f],b.eventType=f in yf?yf[f]:"UNKNOWN_TYPE",c=Hf[f],b.metricIntervalMs=c?e-c:e-NaN,a.push(b),Hf[f]=e,delete Gf[f];return a}
function Of(){R("web_gel_timeout_cap")&&!Cf&&(Cf=S(If,6E4));T(Bf);var a=Q("LOGGING_BATCH_TIMEOUT",Je("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Ef&&(a=tf);Bf=S(If,a)}
function Lf(a,b){b=void 0===b?"":b;V[a]=V[a]||{};V[a][b]=V[a][b]||[];return V[a][b]}
function Nf(a){wf=Math.round(U()-a)}
;var Qf=0;y("ytDomDomGetNextId",z("ytDomDomGetNextId")||function(){return++Qf},void 0);var Rf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Sf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Rf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}}catch(e){}}
function Tf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
Sf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Sf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Sf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Za=z("ytEventsEventsListeners")||{};y("ytEventsEventsListeners",Za,void 0);var Uf=z("ytEventsEventsCounter")||{count:0};y("ytEventsEventsCounter",Uf,void 0);
function Vf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ya(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Da(e[4])&&Da(d)&&bb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Wf=Va(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function W(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Vf(a,b,c,d);if(e)return e;e=++Uf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Sf(h);if(!Ac(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Sf(h);
h.currentTarget=a;return c.call(a,h)};
g=te(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Wf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Za[e]=[a,b,c,g,d];return e}
function Xf(a){a&&("string"==typeof a&&(a=[a]),F(a,function(b){if(b in Za){var c=Za[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Wf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Za[b]}}))}
;var Yf=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Zf(a){this.w=a;this.f=null;this.j=0;this.m=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.D=W(window,"mousemove",A(this.F,this));a=A(this.A,this);Ca(a)&&(a=te(a));this.K=window.setInterval(a,25)}
D(Zf,M);Zf.prototype.F=function(a){void 0===a.f&&Tf(a);var b=a.f;void 0===a.g&&Tf(a);this.f=new rc(b,a.g)};
Zf.prototype.A=function(){if(this.f){var a=Yf();if(0!=this.j){var b=this.m,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.w();this.l=d}this.j=a;this.m=this.f;this.i=(this.i+1)%4}};
Zf.prototype.o=function(){window.clearInterval(this.K);Xf(this.D)};function $f(){}
function ag(a,b){return bg(a,1,b)}
;function cg(){}
t(cg,$f);function bg(a,b,c){isNaN(c)&&(c=void 0);var d=z("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):S(a,c||0)}
cg.prototype.start=function(){var a=z("yt.scheduler.instance.start");a&&a()};
cg.prototype.pause=function(){var a=z("yt.scheduler.instance.pause");a&&a()};
ya(cg);cg.getInstance();var dg={};
function eg(a){var b=void 0===a?{}:a;a=void 0===b.Ea?!0:b.Ea;b=void 0===b.Pa?!1:b.Pa;if(null==z("_lact",window)){var c=parseInt(Q("LACT"),10);c=isFinite(c)?C()-Math.max(c,0):-1;y("_lact",c,window);y("_fact",c,window);-1==c&&fg();W(document,"keydown",fg);W(document,"keyup",fg);W(document,"mousedown",fg);W(document,"mouseup",fg);a&&(b?W(window,"touchmove",function(){gg("touchmove",200)},{passive:!0}):(W(window,"resize",function(){gg("resize",200)}),W(window,"scroll",function(){gg("scroll",200)})));
new Zf(function(){gg("mouse",100)});
W(document,"touchstart",fg,{passive:!0});W(document,"touchend",fg,{passive:!0})}}
function gg(a,b){dg[a]||(dg[a]=!0,ag(function(){fg();dg[a]=!1},b))}
function fg(){null==z("_lact",window)&&eg();var a=C();y("_lact",a,window);-1==z("_fact",window)&&y("_fact",a,window);(a=z("ytglobal.ytUtilActivityCallback_"))&&a()}
function hg(){var a=z("_lact",window);return null==a?-1:Math.max(C()-a,0)}
;var ig=z("ytLoggingGelSequenceIdObj_")||{};y("ytLoggingGelSequenceIdObj_",ig,void 0);
function jg(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||U());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:hg())};R("log_sequence_info_on_gel_web")&&d.P&&(a=e.context,b=d.P,ig[b]=b in ig?ig[b]+1:0,a.sequence={index:ig[b],groupKey:b},d.rb&&delete ig[d.P]);(d=d.da)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Ff[d.token]=a,d=Lf("log_event",d.token)):d=Lf("log_event");d.push(e);c&&(Af.log_event=new c);c=Je("web_logging_max_batch")||
100;e=U();d.length>=c?If():10<=e-Df&&(Of(),Df=e)}
;function Kf(){for(var a={},b=q(Object.entries(Be(Q("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=q(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function kg(){return"INNERTUBE_API_KEY"in ne&&"INNERTUBE_API_VERSION"in ne}
function Jf(){return{innertubeApiKey:Q("INNERTUBE_API_KEY",void 0),innertubeApiVersion:Q("INNERTUBE_API_VERSION",void 0),Fa:Q("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ga:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Ia:Q("INNERTUBE_CONTEXT_HL",void 0),Ha:Q("INNERTUBE_CONTEXT_GL",void 0),Ja:Q("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ka:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function lg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.ob||Q("AUTHORIZATION"))||(a?b="Bearer "+z("gapi.auth.getToken")().nb:b=Pc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));return d}
function mg(a){a=Object.assign({},a);delete a.Authorization;var b=Pc();if(b){var c=new gd;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ba(b);void 0===c&&(c=0);if(!lc){lc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));kc[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===lc[k]&&(lc[k]=h)}}}c=kc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function ng(a,b,c,d){pc.set(""+a,b,{ma:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function og(){var a=new fe;(a=a.isAvailable()?new le(a,"yt.innertube"):null)||(a=new ge("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new be(a):null;this.g=document.domain||window.location.hostname}
og.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,C()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(yd(b))}catch(f){return}else e=escape(b);ng(a,e,c,this.g)};
og.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=pc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
og.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;pc.remove(""+a,"/",void 0===b?"youtube.com":b)};var pg=new og;function qg(a,b,c,d){if(d)return null;d=pg.get("nextId",!0)||1;var e=pg.get("requests",!0)||{};e[d]={method:a,request:b,authState:mg(c),requestTime:Math.round(U())};pg.set("nextId",d+1,86400,!0);pg.set("requests",e,86400,!0);return d}
function rg(a){var b=pg.get("requests",!0)||{};delete b[a];pg.set("requests",b,86400,!0)}
function sg(a){var b=pg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=mg(lg(!1));bb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),Mf(a,d.method,e,{}));delete b[c]}}pg.set("requests",b,86400,!0)}}
;function tg(a){var b=this;this.f=null;a?this.f=a:kg()&&(this.f=Jf());bg(function(){sg(b)},0,5E3)}
tg.prototype.isReady=function(){!this.f&&kg()&&(this.f=Jf());return!!this.f};
function Mf(a,b,c,d){!Q("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&ve(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",C:c,ra:"JSON",O:function(){d.O()},
qa:d.O,onSuccess:function(v,r){if(d.onSuccess)d.onSuccess(r)},
oa:function(v){if(d.onSuccess)d.onSuccess(v)},
onError:function(v,r){if(d.onError)d.onError(r)},
vb:function(v){if(d.onError)d.onError(v)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.Ja;g&&(f=g);g=a.f.Ka||!1;var h=lg(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=Ce(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),l;if(d.retry&&R("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=qg(b,c,h,g))){var m=e.onSuccess,p=e.oa;e.onSuccess=function(v,r){rg(l);m(v,r)};
c.oa=function(v,r){rg(l);p(v,r)}}try{R("use_fetch_for_op_xhr")?Te(k,e):(e.method="POST",e.C||(e.C={}),We(k,e))}catch(v){if("InvalidAccessError"==v)l&&(rg(l),l=0),ve(Error("An extension is blocking network request."));
else throw v;}l&&bg(function(){sg(a)},0,5E3)}
;function ug(a,b,c){c=void 0===c?{}:c;var d=tg;Q("ytLoggingEventsDefaultDisabled",!1)&&tg==tg&&(d=null);jg(a,b,d,c)}
function vg(){R("log_web_meta")&&Pf().forEach(function(a){ug("delayedEventMetricCaptured",a)})}
;function wg(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ka(q(c)))}
t(wg,Error);var xg=new Set,yg=0;function zg(a){var b=z("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,!1,void 0):(b=oe(),b.push([a,"ERROR",void 0,void 0,!1,void 0]),P("ERRORS",b))}
function Ag(a){var b=z("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,!1,void 0):(b=oe(),b.push([a,"WARNING",void 0,void 0,!1,void 0]),P("ERRORS",b))}
function Bg(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Cg(a,b,c,d,e,f){b=void 0===b?"ERROR":b;f=void 0===f?{}:f;f.name=c||Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};d=void 0===b?"ERROR":b;d=void 0===d?"ERROR":d;f=window&&window.yterr||!1;if(a&&f&&!(5<=yg)&&(R("console_log_js_exceptions")&&(f=[],f.push("Name: "+a.name),f.push("Message: "+a.message),a.hasOwnProperty("params")&&f.push("Error Params: "+JSON.stringify(a.params)),f.push("File name: "+a.fileName),f.push("Stacktrace: "+a.stack),
window.console.log(f.join("\n"),a)),0!==a.f)){f=a.g;b=a.columnNumber;if(a.args&&a.args.length)for(var g=0,h=0;h<a.args.length;h++){e=a.args[h];var k="params."+h;g+=k.length;if(e)if(Array.isArray(e))for(var l=c,m=0;m<e.length&&!(e[m]&&(g+=Bg(m,e[m],k,l),500<g));m++);else if("object"===typeof e)for(l in l=void 0,m=c,e){if(e[l]&&(g+=Bg(l,e[l],k,m),500<g))break}else c[k]=String(JSON.stringify(e)).substring(0,500),g+=c[k].length;else c[k]=String(JSON.stringify(e)).substring(0,500),g+=c[k].length;if(500<=
g)break}else if(a.hasOwnProperty("params"))if(e=a.params,"object"===typeof a.params)for(h in k=0,e){if(e[h]&&(g="params."+h,l=String(JSON.stringify(e[h])).substr(0,500),c[g]=l,k+=g.length+l.length,500<k))break}else c.params=String(JSON.stringify(e)).substr(0,500);a=mc(a);(f=f||a.stack)||(f="Not available");e={stackTrace:f};a.fileName&&(e.filename=a.fileName);h=a.lineNumber.toString();isNaN(h)||!b||isNaN(b)||(e.lineNumber=Number(h),e.columnNumber=Number(b),h=h+":"+b);window.yterr&&Ca(window.yterr)&&
(a.params=c,window.yterr(a));if(!(xg.has(a.message)||0<=f.indexOf("/YouTubeCenter.js")||0<=f.indexOf("/mytube.js"))){if(R("kevlar_gel_error_routing")){k=d;b={level:"ERROR_LEVEL_UNKNOWN",message:a.message};"ERROR"===k?b.level="ERROR_LEVEL_ERROR":"WARNING"===k&&(b.level="ERROR_LEVEL_WARNNING");e={isObfuscated:!0,browserStackInfo:e};k={pageUrl:window.location.href,kvPairs:[]};g=q(Object.keys(c));for(l=g.next();!l.done;l=g.next())l=l.value,k.kvPairs.push({key:"client."+l,value:String(c[l])});ug("clientError",
{errorMetadata:k,stackTrace:e,logMessage:b});vg();If()}d={ab:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:h,level:d,"client.name":c.name},C:{url:Q("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};c.version&&(d["client.version"]=c.version);if(d.C){f&&(d.C.stack=f);f=q(Object.keys(c));for(b=f.next();!b.done;b=f.next())b=b.value,d.C["client."+b]=c[b];if(c=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=q(Object.keys(c)),b=f.next();!b.done;b=f.next())b=
b.value,d.C[b]=c[b]}We(Q("ECATCHER_REPORT_HOST","")+"/error_204",d);xg.add(a.message);yg++}}}
;var Dg=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};y("yt.msgs_",Dg,void 0);function Eg(a){me(Dg,arguments)}
;function Fg(a){a&&(a.dataset?a.dataset[Gg("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Hg(a,b){return a?a.dataset?a.dataset[Gg(b)]:a.getAttribute("data-"+b):null}
var Ig={};function Gg(a){return Ig[a]||(Ig[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Jg=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Kg=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Lg(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Jg,""),c=c.replace(Kg,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Mg(a,b,c)}
function Mg(a,b,c){c=void 0===c?null:c;var d=Ng(a),e=document.getElementById(d),f=e&&Hg(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=mf(d,b),b=""+Ea(b),Og[b]=f),g||(e=Pg(a,d,function(){Hg(e,"loaded")||(Fg(e),pf(d),S(Ka(qf,d),0))},c)))}
function Pg(a,b,c,d){d=void 0===d?null:d;var e=xc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Nb(e,Bc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Qg(a){a=Ng(a);var b=document.getElementById(a);b&&(qf(a),b.parentNode.removeChild(b))}
function Rg(a,b){if(a&&b){var c=""+Ea(b);(c=Og[c])&&of(c)}}
function Ng(a){var b=document.createElement("a");Mb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Pb(a)}
var Og={};var Sg=[],Tg=!1;function Ug(){if("1"!=Xa(pe(),"args","privembed")){var a=function(){Tg=!0;"google_ad_status"in window?P("DCLKSTAT",1):P("DCLKSTAT",2)};
Lg("//static.doubleclick.net/instream/ad_status.js",a);Sg.push(ag(function(){Tg||"google_ad_status"in window||(Rg("//static.doubleclick.net/instream/ad_status.js",a),Tg=!0,P("DCLKSTAT",3))},5E3))}}
function Vg(){return parseInt(Q("DCLKSTAT",0),10)}
;function Wg(){this.g=!1;this.f=null}
Wg.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.g=!0,Lg(b,function(){g.g=!1;window.botguard?Xg(g,c,d,f):(Qg(b),Ag(new wg("Unable to load Botguard","from "+b)))},e)):a&&(eval(a),window.botguard?Xg(this,c,d,f):Ag(Error("Unable to load Botguard from JS")))};
function Xg(a,b,c,d){if(d)try{a.f=new window.botguard.bg(b,c?function(){return c(b)}:xa)}catch(e){Ag(e)}else{try{a.f=new window.botguard.bg(b)}catch(e){Ag(e)}c&&c(b)}}
Wg.prototype.dispose=function(){this.f=null};var Yg=new Wg,Zg=!1,$g=0,ah="";function bh(a){R("botguard_periodic_refresh")?$g=U():R("botguard_always_refresh")&&(ah=a)}
function ch(a){if(a){if(Yg.g)return!1;if(R("botguard_periodic_refresh"))return 72E5<U()-$g;if(R("botguard_always_refresh"))return ah!=a}else return!1;return!Zg}
function dh(){return!!Yg.f}
function eh(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Yg.f?Yg.f.invoke(void 0,void 0,a):null}
;var fh=C().toString();
function gh(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=C();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(fh)for(a=1,b=0;b<fh.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^fh.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var hh=z("ytLoggingDocDocumentNonce_")||gh();y("ytLoggingDocDocumentNonce_",hh,void 0);var ih=1;function jh(a){this.f=a}
function kh(a){var b={};void 0!==a.f.trackingParams?b.trackingParams=a.f.trackingParams:(b.veType=a.f.veType,void 0!==a.f.veCounter&&(b.veCounter=a.f.veCounter),void 0!==a.f.elementIndex&&(b.elementIndex=a.f.elementIndex));void 0!==a.f.dataElement&&(b.dataElement=kh(a.f.dataElement));void 0!==a.f.youtubeData&&(b.youtubeData=a.f.youtubeData);return b}
jh.prototype.toString=function(){return JSON.stringify(kh(this))};function lh(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function mh(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function nh(a){return Q(mh(void 0===a?0:a),void 0)}
y("yt_logging_screen.getRootVeType",nh,void 0);function oh(){var a=nh(0),b;a?b=new jh({veType:a,youtubeData:void 0}):b=null;return b}
function ph(){var a=Q("csn-to-ctt-auth-info");a||(a={},P("csn-to-ctt-auth-info",a));return a}
function qh(a){a=void 0===a?0:a;var b=Q(lh(a));if(!b&&!Q("USE_CSN_FALLBACK",!0))return null;b||0!=a||(R("kevlar_client_side_screens")||R("c3_client_side_screens")?b="UNDEFINED_CSN":b=Q("EVENT_ID"));return b?b:null}
y("yt_logging_screen.getCurrentCsn",qh,void 0);function rh(a,b,c){var d=ph();(c=qh(c))&&delete d[c];b&&(d[a]=b)}
function sh(a){return ph()[a]}
y("yt_logging_screen.getCttAuthInfo",sh,void 0);function th(a,b,c,d){c=void 0===c?0:c;if(a!==Q(lh(c))||b!==Q(mh(c)))if(rh(a,d,c),P(lh(c),a),P(mh(c),b),0==c||R("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&jg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:hh,clientScreenNonce:a},tg)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
y("yt_logging_screen.setCurrentScreen",th,void 0);function uh(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Q("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=Q("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=I(J(3,window.location.href));g&&f.push(g);g=I(J(3,d));if(0<=Na(f,g)||!g&&0==d.lastIndexOf("/",0))if(R("autoescape_tempdata_url")&&(f=document.createElement("a"),Mb(f,d),d=f.href),d){g=d.match(Qb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||
b.ved)&&(b=Object.assign({csn:qh()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Pb(d).toString(36),e=e?Sb(e):"",ng(b,e,k||5))}else k=b,e="ST-"+Pb(d).toString(36),k=k?Sb(k):"",ng(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var p=void 0===p?window:p;c=p.location;a=Tb(a,l)+m;a=a instanceof G?a:Cb(a);c.href=Ab(a)}return!0}
;function vh(a,b){this.version=a;this.args=b}
;function wh(a,b){this.topic=a;this.f=b}
wh.prototype.toString=function(){return this.topic};var xh=z("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.N;O.prototype.publish=O.prototype.M;O.prototype.clear=O.prototype.clear;y("ytPubsub2Pubsub2Instance",xh,void 0);var yh=z("ytPubsub2Pubsub2SubscribedKeys")||{};y("ytPubsub2Pubsub2SubscribedKeys",yh,void 0);var zh=z("ytPubsub2Pubsub2TopicToKeys")||{};y("ytPubsub2Pubsub2TopicToKeys",zh,void 0);var Ah=z("ytPubsub2Pubsub2IsAsync")||{};y("ytPubsub2Pubsub2IsAsync",Ah,void 0);
y("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Bh(a,b){var c=Ch();c&&c.publish.call(c,a.toString(),a,b)}
function Dh(a){var b=Eh,c=Ch();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=z("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(yh[d])try{if(f&&b instanceof wh&&b!=e)try{var h=b.f,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.H){var l=new h;h.H=l.version}var m=h.H}catch(p){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
Ta(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){ue(p)}},Ah[b.toString()]?z("yt.scheduler.instance")?ag(g):S(g,0):g())});
yh[d]=!0;zh[b.toString()]||(zh[b.toString()]=[]);zh[b.toString()].push(d);return d}
function Fh(){var a=Gh,b=Dh(function(c){a.apply(void 0,arguments);Hh(b)});
return b}
function Hh(a){var b=Ch();b&&("number"===typeof a&&(a=[a]),F(a,function(c){b.unsubscribeByKey(c);delete yh[c]}))}
function Ch(){return z("ytPubsub2Pubsub2Instance")}
;function Ih(a){vh.call(this,1,arguments);this.csn=a}
t(Ih,vh);var Eh=new wh("screen-created",Ih),Jh=[],Kh=0;function Lh(a,b,c){var d=R("use_default_events_client")?void 0:tg;b={csn:a,parentVe:kh(b),childVes:Pa(c,function(f){return kh(f)})};
c=q(c);for(var e=c.next();!e.done;e=c.next())e=kh(e.value),($a(e)||!e.trackingParams&&!e.veType)&&Cg(Error("Child VE logged with no data"),"WARNING");c={da:sh(a),P:a};"UNDEFINED_CSN"==a?Mh("visualElementAttached",b,c):d?jg("visualElementAttached",b,d,c):ug("visualElementAttached",b,c)}
function Mh(a,b,c){Jh.push({payloadName:a,payload:b,options:c});Kh||(Kh=Fh())}
function Gh(a){if(Jh){for(var b=q(Jh),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,jg(c.payloadName,c.payload,null,c.options));Jh.length=0}Kh=0}
;function Nh(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||cb(b);this.assets=a.assets||{};this.attrs=a.attrs||cb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Nh.prototype.clone=function(){var a=new Nh,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==za(c)?a[b]=cb(c):a[b]=c}return a};function Oh(){M.call(this);this.f=[]}
t(Oh,M);Oh.prototype.o=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.pb)}M.prototype.o.call(this)};var Ph=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Qh(a){a=a||"";if(window.spf){var b=a.match(Ph);spf.style.load(a,b?b[1]:"",void 0)}else Rh(a)}
function Rh(a){var b=Sh(a),c=document.getElementById(b),d=c&&Hg(c,"loaded");d||c&&!d||(c=Th(a,b,function(){Hg(c,"loaded")||(Fg(c),pf(b),S(Ka(qf,b),0))}))}
function Th(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Bc(a);d.rel="stylesheet";d.href=ob(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Sh(a){var b=xc(document,"A");Mb(b,new G(yb,a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Pb(a)}
;function Uh(a,b,c,d){M.call(this);var e=this;this.m=this.X=a;this.U=b;this.w=!1;this.api={};this.V=this.D=null;this.F=new O;id(this,Ka(jd,this.F));this.j={};this.R=this.W=this.h=this.ca=this.f=null;this.K=!1;this.l=this.A=null;this.Y={};this.ua=["onReady"];this.ba=null;this.ka=NaN;this.S={};this.i=d;Vh(this);this.Z("WATCH_LATER_VIDEO_ADDED",this.Ma.bind(this));this.Z("WATCH_LATER_VIDEO_REMOVED",this.Na.bind(this));this.Z("onAdAnnounce",this.wa.bind(this));this.va=new Oh(this);id(this,Ka(jd,this.va));
this.T=0;c?this.T=S(function(){e.loadNewVideoConfig(c)},0):d&&(Wh(this),Xh(this))}
t(Uh,M);n=Uh.prototype;n.getId=function(){return this.U};
n.loadNewVideoConfig=function(a){if(!this.g){this.T&&(T(this.T),this.T=0);a instanceof Nh||(a=new Nh(a));this.ca=a;this.f=a.clone();Wh(this);this.W||(this.W=Yh(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.m.style.width=Ic(Number(a)||a);if(a=this.f.attrs.height)this.m.style.height=Ic(Number(a)||a);Xh(this);this.w&&Zh(this)}};
function Wh(a){var b;a.i?b=a.i.rootElementId:b=a.f.attrs.id;a.h=b||a.h;"video-player"==a.h&&(a.h=a.U,a.f.attrs.id=a.U);a.m.id==a.h&&(a.h+="-player",a.f.attrs.id=a.h)}
n.Ba=function(){return this.ca};
function Zh(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function $h(a){var b=!0,c=ai(a);c&&a.f&&(a=bi(a),b=Hg(c,"version")===a);return b&&!!z("yt.player.Application.create")}
function Xh(a){if(!a.g&&!a.K){var b=$h(a);if(b&&"html5"==(ai(a)?"html5":null))a.R="html5",a.w||ci(a);else if(di(a),a.R="html5",b&&a.l)a.X.appendChild(a.l),ci(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.A=function(){c=!0;if(a.i)var d=a.i.serializedExperimentFlags;else a.f&&a.f.args&&(d=a.f.args.fflags);d="true"==ze(d||"").player_bootstrap_method?z("yt.player.Application.createAlternate")||z("yt.player.Application.create"):z("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.X,e,a.i);ci(a)};
a.K=!0;b?a.A():(Lg(bi(a),a.A),(b=a.i?a.i.cssUrl:a.f.assets.css)&&Qh(b),ei(a)&&!c&&y("yt.player.Application.create",null,void 0))}}}
function ai(a){var b=tc(a.h);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.h));return b}
function ci(a){if(!a.g){var b=ai(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.K=!1,b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||fi(a)):a.ka=S(function(){ci(a)},50)}}
function fi(a){Vh(a);a.w=!0;var b=ai(a);b.addEventListener&&(a.D=gi(a,b,"addEventListener"));b.removeEventListener&&(a.V=gi(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=gi(a,b,e))}for(var f in a.j)a.D(f,a.j[f]);Zh(a);a.W&&a.W(a.api);a.F.M("onReady",a.api)}
function gi(a,b,c){var d=b[c];return function(){try{return a.ba=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.ba=e,ve(e))}}}
function Vh(a){a.w=!1;if(a.V)for(var b in a.j)a.V(b,a.j[b]);for(var c in a.S)T(parseInt(c,10));a.S={};a.D=null;a.V=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Z.bind(a);a.api.removeEventListener=a.Ra.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Ca.bind(a);a.api.getPlayerType=a.Da.bind(a);a.api.getCurrentVideoConfig=a.Ba.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.La.bind(a)}
n.La=function(){return this.w};
n.Z=function(a,b){var c=this,d=Yh(this,b);if(d){if(!(0<=Na(this.ua,a)||this.j[a])){var e=hi(this,a);this.D&&this.D(a,e)}this.F.subscribe(a,d);"onReady"==a&&this.w&&S(function(){d(c.api)},0)}};
n.Ra=function(a,b){if(!this.g){var c=Yh(this,b);c&&Wd(this.F,a,c)}};
function Yh(a,b){var c=b;if("string"==typeof b){if(a.Y[b])return a.Y[b];c=function(){var d=z(b);d&&d.apply(x,arguments)};
a.Y[b]=c}return c?c:null}
function hi(a,b){var c="ytPlayer"+b+a.U;a.j[b]=c;x[c]=function(d){var e=S(function(){if(!a.g){a.F.M(b,d);var f=a.S,g=String(e);g in f&&delete f[g]}},0);
ab(a.S,String(e))};
return c}
n.wa=function(a){pf("a11y-announce",a)};
n.Ma=function(a){pf("WATCH_LATER_VIDEO_ADDED",a)};
n.Na=function(a){pf("WATCH_LATER_VIDEO_REMOVED",a)};
n.Da=function(){return this.R||(ai(this)?"html5":null)};
n.Ca=function(){return this.ba};
function di(a){a.cancel();Vh(a);a.R=null;a.f&&(a.f.loaded=!1);var b=ai(a);b&&($h(a)||!ei(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));for(a=a.X;b=a.firstChild;)a.removeChild(b)}
n.cancel=function(){this.A&&Rg(bi(this),this.A);T(this.ka);this.K=!1};
n.o=function(){di(this);if(this.l&&this.f&&this.l.destroy)try{this.l.destroy()}catch(b){ue(b)}this.Y=null;for(var a in this.j)x[this.j[a]]=null;this.ca=this.f=this.api=null;delete this.X;delete this.m;M.prototype.o.call(this)};
function ei(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function bi(a){return a.i?a.i.jsUrl:a.f.assets.js}
;var ii={},ji="player_uid_"+(1E9*Math.random()>>>0);function ki(a){delete ii[a.getId()]}
;function li(a,b){vh.call(this,1,arguments)}
t(li,vh);function mi(a,b){vh.call(this,1,arguments)}
t(mi,vh);var ni=new wh("aft-recorded",li),oi=new wh("timing-sent",mi);var pi=window;function qi(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var X=pi.performance||pi.mozPerformance||pi.msPerformance||pi.webkitPerformance||new qi;var ri=!1;function si(a){var b=ti(a);if(b.aft)return b.aft;a=Q((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function ui(a){var b;(b=z("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},La("ytcsi."+(a||"")+"data_",b));return b}
function vi(a){a=ui(a);a.info||(a.info={});return a.info}
function ti(a){a=ui(a);a.tick||(a.tick={});return a.tick}
function wi(a){var b=ui(a).nonce;b||(b=gh(),ui(a).nonce=b);return b}
function xi(a){var b=ti(a||""),c=si(a);c&&!ri&&(Bh(ni,new li(Math.round(c-b._start),a)),ri=!0)}
;function yi(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!zi(a)||c.some(function(e){return!zi(e)}))throw Error("Only objects may be merged.");
c=q(c);for(d=c.next();!d.done;d=c.next())Ai(a,d.value);return a}
function Ai(a,b){for(var c in b)if(zi(b[c])){if(c in a&&!zi(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Ai(a[c],b[c])}else if(Bi(b[c])){if(c in a&&!Bi(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Ci(a[c],b[c])}else a[c]=b[c];return a}
function Ci(a,b){for(var c=q(b),d=c.next();!d.done;d=c.next())d=d.value,zi(d)?a.push(Ai({},d)):Bi(d)?a.push(Ci([],d)):a.push(d);return a}
function zi(a){return"object"===typeof a&&!Array.isArray(a)}
function Bi(a){return"object"===typeof a&&Array.isArray(a)}
;function Di(){var a=z("ytcsi.debug");a||(a=[],y("ytcsi.debug",a,void 0),y("ytcsi.reference",{},void 0));return a}
function Ei(a){a=a||"";var b=z("ytcsi.reference");b||(Di(),b=z("ytcsi.reference"));if(b[a])return b[a];var c=Di(),d={timerName:a,info:{},tick:{}};c.push(d);return b[a]=d}
;var Fi=z("ytLoggingLatencyUsageStats_")||{};y("ytLoggingLatencyUsageStats_",Fi,void 0);function Gi(){this.f=0}
function Hi(){Gi.instance||(Gi.instance=new Gi);return Gi.instance}
Gi.prototype.tick=function(a,b,c){Ii(this,"tick_"+a+"_"+b)||ug("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Gi.prototype.info=function(a,b){var c=Object.keys(a).join("");Ii(this,"info_"+c+"_"+b)||(a.clientActionNonce=b,ug("latencyActionInfo",a))};
function Ii(a,b){Fi[b]=Fi[b]||{count:0};var c=Fi[b];c.count++;c.time=U();a.f||(a.f=bg(function(){var d=U(),e;for(e in Fi)Fi[e]&&6E4<d-Fi[e].time&&delete Fi[e];a&&(a.f=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new wg("CSI data exceeded logging limit with key",b),0===b.indexOf("info")?Ag(c):zg(c)),!0):!1}
;var Y={},Ji=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.cseg="creatorInfo.creatorSegment",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="getHomeRequestId",Y.GetSearch_rid="getSearchRequestId",Y.GetPlayer_rid="getPlayerRequestId",Y.GetWatchNext_rid="getWatchNextRequestId",Y.GetBrowse_rid=
"getBrowseRequestId",Y.GetLibrary_rid="getLibraryRequestId",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.ncnp=
"webInfo.nonPreloadedNodeCount",Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.aq=
"tvInfo.appQuality",Y.br_trs="tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",
Y.GetSettings_rid="mwebInfo.getSettingsRequestId",Y.GetTrending_rid="mwebInfo.getTrendingRequestId",Y.GetMusicSearchSuggestions_rid="musicInfo.getMusicSearchSuggestionsRequestId",Y),Ki="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Li={},Mi=(Li.mver="MEASUREMENT_VERSION_",Li.pis="PLAYER_INITIALIZED_STATE_",Li.yt_pt="LATENCY_PLAYER_",Li.pa="LATENCY_ACTION_",Li.yt_vst="VIDEO_STREAM_TYPE_",Li),Ni="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Oi(a){return!!Q("FORCE_CSI_ON_GEL",!1)||R("csi_on_gel")||!!ui(a).useGel}
function Pi(a){a=ui(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function Qi(a,b,c){if(null!==b)if(vi(c)[a]=b,Oi(c)){var d=Pi(c);if(d.gelInfos)d.gelInfos["info_"+a]=!0;else{var e={};d.gelInfos=(e["info_"+a]=!0,e)}if(a in Ji){d=Ji[a];0<=Na(Ki,d)&&(b=!!b);a in Mi&&"string"===typeof b&&(b=Mi[a]+b.toUpperCase());a=d.split(".");e=d={};for(var f=0;f<a.length-1;f++){var g=a[f];e[g]={};e=e[g]}e[a[a.length-1]]=b;b=yi({},d)}else 0<=Na(Ni,a)||Ag(new wg("Unknown label logged with GEL CSI",a)),b=void 0;b&&Oi(c)&&(a=Ei(c||""),yi(a.info,b),a=Pi(c),"gelInfos"in a||(a.gelInfos=
{}),yi(a.gelInfos,b),c=wi(c),Hi().info(b,c))}else Ei(c||"").info[a]=b}
if(R("overwrite_polyfill_on_logging_lib_loaded")){var Ri=window;Ri.ytcsi&&(Ri.ytcsi.info=Qi)};function Si(a,b,c){var d=ti(c),e;if(e=R("use_first_tick"))e=ti(c),e=a in e;if(e)return d[a];b||"_"==a[0]||(e=a,X.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),X.mark(e)));e=b||U();d[a]=e;e=Pi(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||U();if(Oi(c)){Ei(c||"").tick[a]=b||U();e=wi(c);if("_start"===a){var f=Hi();Ii(f,"baseline_"+e)||ug("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else Hi().tick(a,e,b);xi(c);e=!0}else e=!1;if(!e){if(!z("yt.timing."+(c||"")+
"pingSent_")&&(f=Q((c||"")+"TIMING_ACTION",void 0),e=ti(c),z("ytglobal.timing"+(c||"")+"ready_")&&f&&e._start&&si(c)))if(xi(c),c)Ti(c);else{f=!0;var g=Q("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&Ti(c)}Ei(c||"").tick[a]=b||U()}return d[a]}
function Ti(a){if(!Oi(a)){var b=ti(a),c=vi(a),d=b._start,e=Q("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:Q((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var h=window.location.protocol+z("ytplayer.config.assets.js");(h=X.getEntriesByName?X.getEntriesByName(h)[0]:void 0)?c.h5jse=Math.round(c.h5jse-h.responseEnd):delete c.h5jse}b.aft=si(a);var k=ti(a);h=k.pbr;var l=k.vc;k=k.pbs;h&&l&&k&&h<l&&l<k&&vi(a).yt_pvis&&"youtube"==e&&(Qi("yt_lt","hot_bg",a),e=b.vc,h=b.pbs,
delete b.aft,c.aft=Math.round(h-e));for(var m in c)"_"!=m.charAt(0)&&(f[m]=c[m]);b.ps=U();m={};e=[];for(var p in b)"_"!=p.charAt(0)&&(h=Math.round(b[p]-d),m[p]=h,e.push(p+"."+h));f.rt=e.join(",");(b=z("ytdebug.logTiming"))&&b(f,m);c=!!c.ap;R("debug_csi_data")&&(b=z("yt.timing.csiData"),b||(b=[],La("yt.timing.csiData",b)),b.push({page:location.href,time:new Date,args:f}));b="";for(var v in f)f.hasOwnProperty(v)&&(b+="&"+v+"="+f[v]);f="/csi_204?"+b.substring(1);if(window.navigator&&window.navigator.sendBeacon&&
c){var r=void 0===r?"":r;gf(f,r)||df(f,void 0,void 0,void 0,r)}else df(f);y("yt.timing."+(a||"")+"pingSent_",!0,void 0);Bh(oi,new mi(m.aft+(g||0),a))}}
A(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||xa,X);var Ui=window;R("csi_on_gel")&&Ui.ytcsi&&(Ui.ytcsi.tick=Si);function Vi(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Wi(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return Xi(a)}
function Xi(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Yi(a,b,c,d){if(Da(a)&&!Aa(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Zi(a){a=void 0===a?!1:a;M.call(this);this.f=new O(a);id(this,Ka(jd,this.f))}
D(Zi,M);Zi.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
Zi.prototype.j=function(a,b){this.g||this.f.M.apply(this.f,arguments)};function $i(a,b,c){Zi.call(this);this.h=a;this.i=b;this.l=c}
t($i,Zi);function aj(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(yd(a),d.i))}}
$i.prototype.o=function(){this.i=this.h=null;Zi.prototype.o.call(this)};function bj(a){M.call(this);this.f=a;this.f.subscribe("command",this.sa,this);this.h={};this.j=!1}
t(bj,M);n=bj.prototype;n.start=function(){this.j||this.g||(this.j=!0,aj(this.f,"RECEIVING"))};
n.sa=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.h||(c=A(this.Ta,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&cj(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=dj(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=ej(a,c))&&this.j&&!this.g&&aj(this.f,a,c))}}};
n.Ta=function(a,b){this.j&&!this.g&&aj(this.f,a,this.fa(a,b))};
n.fa=function(a,b){if(null!=b)return{value:b}};
function cj(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
n.o=function(){var a=this.f;a.g||Wd(a.f,"command",this.sa,this);this.f=null;for(var b in this.h)cj(this,b);M.prototype.o.call(this)};function fj(a,b){bj.call(this,b);this.i=a;this.start()}
t(fj,bj);fj.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
fj.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function dj(a,b){switch(a){case "loadVideoById":return b=Xi(b),[b];case "cueVideoById":return b=Xi(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=Yi(b),[b];case "cuePlaylist":return b=Yi(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function ej(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
fj.prototype.fa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return bj.prototype.fa.call(this,a,b)};
fj.prototype.o=function(){bj.prototype.o.call(this);delete this.i};function gj(a,b,c){M.call(this);var d=this;c=c||Q("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.h=b||null;this.w="*";this.i=c;this.sessionId=null;this.channel="widget";this.A=!!a;this.m=function(e){a:if(!("*"!=d.i&&e.origin!=d.i||d.h&&e.source!=d.h||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.A&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.i=d.w=e.origin);d.h=e.source;d.sessionId=f.id;d.f&&(d.f(),d.f=null);break;case "command":d.j&&(!d.l||0<=Na(d.l,f.func))&&d.j(f.func,f.args,e.origin)}}};
this.l=this.f=this.j=null;window.addEventListener("message",this.m)}
t(gj,M);gj.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.w)}catch(e){ve(e)}}};
gj.prototype.o=function(){window.removeEventListener("message",this.m);M.prototype.o.call(this)};function hj(){var a=this.g=new gj(!!Q("WIDGET_ID_ENFORCE")),b=A(this.Qa,this);a.j=b;a.l=null;this.g.channel="widget";if(a=Q("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
n=hj.prototype;n.Qa=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,ij(this,a)),this.j[a]=!0)):this.na(a,b,c)};
n.na=function(){};
function ij(a,b){return A(function(c){this.sendMessage(b,c)},a)}
n.addEventListener=function(){};
n.Aa=function(){this.l=!0;this.sendMessage("initialDelivery",this.ga());this.sendMessage("onReady");F(this.i,this.ta,this);this.i=[]};
n.ga=function(){return null};
function jj(a,b){a.sendMessage("infoDelivery",b)}
n.ta=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
n.sendMessage=function(a,b){this.ta({event:a,info:void 0==b?null:b})};
n.dispose=function(){this.g=null};function kj(a){hj.call(this);this.f=a;this.h=[];this.addEventListener("onReady",A(this.Oa,this));this.addEventListener("onVideoProgress",A(this.Xa,this));this.addEventListener("onVolumeChange",A(this.Ya,this));this.addEventListener("onApiChange",A(this.Sa,this));this.addEventListener("onPlaybackQualityChange",A(this.Ua,this));this.addEventListener("onPlaybackRateChange",A(this.Va,this));this.addEventListener("onStateChange",A(this.Wa,this));this.addEventListener("onWebglSettingsChanged",A(this.Za,
this))}
t(kj,hj);n=kj.prototype;n.na=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Vi(a)){var d=b;if(Da(d[0])&&!Aa(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Xi.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Wi.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Yi.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);Vi(a)&&jj(this,this.ga())}};
n.Oa=function(){var a=A(this.Aa,this);this.g.f=a};
n.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
n.ga=function(){if(!this.f)return null;var a=this.f.getApiInterface();Sa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.f[e]();b[f]=g}catch(h){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=C()/1E3;return b};
n.Wa=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:C()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());jj(this,a)};
n.Ua=function(a){jj(this,{playbackQuality:a})};
n.Va=function(a){jj(this,{playbackRate:a})};
n.Sa=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
n.Ya=function(){jj(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
n.Xa=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:C()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());jj(this,a)};
n.Za=function(){var a={sphericalProperties:this.f.getSphericalProperties()};jj(this,a)};
n.dispose=function(){hj.prototype.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function lj(a,b,c){M.call(this);this.f=a;this.i=c;this.j=W(window,"message",A(this.l,this));this.h=new $i(this,a,b);id(this,Ka(jd,this.h))}
t(lj,M);lj.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
lj.prototype.o=function(){Xf(this.j);this.f=null;M.prototype.o.call(this)};function mj(){var a=cb(nj),b;return Ld(new N(function(c,d){a.onSuccess=function(e){Me(e)?c(e):d(new oj("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new oj("Unknown request error","net.unknown",e))};
a.O=function(e){d(new oj("Request timed out","net.timeout",e))};
b=We("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Md&&b.abort();
return Jd(c)})}
function oj(a,b){E.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
t(oj,E);function pj(){this.g=0;this.f=null}
pj.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),Ed(a)?a:qj(a)):2===this.g&&b?(a=b.call(c,this.f),Ed(a)?a:rj(a)):this};
pj.prototype.getValue=function(){return this.f};
pj.prototype.$goog_Thenable=!0;function rj(a){var b=new pj;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function qj(a){var b=new pj;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function sj(a){E.call(this,a.message||a.description||a.name);this.isMissing=a instanceof tj;this.isTimeout=a instanceof oj&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Md}
t(sj,E);sj.prototype.name="BiscottiError";function tj(){E.call(this,"Biscotti ID is missing from server")}
t(tj,E);tj.prototype.name="BiscottiMissingError";var nj={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},uj=null;function xe(){if("1"===Xa(pe(),"args","privembed"))return Jd(Error("Biscotti ID is not available in private embed mode"));uj||(uj=Ld(mj().then(vj),function(a){return wj(2,a)}));
return uj}
function vj(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new tj;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new tj;a=a.id;ye(a);uj=qj(a);xj(18E5,2);return a}
function wj(a,b){var c=new sj(b);ye("");uj=rj(c);0<a&&xj(12E4,a-1);throw c;}
function xj(a,b){S(function(){Ld(mj().then(vj,function(c){return wj(b,c)}),xa)},a)}
function yj(){try{var a=z("yt.ads.biscotti.getId_");return a?a():xe()}catch(b){return Jd(b)}}
;function zj(a){if("1"!==Xa(pe(),"args","privembed")){a&&we();try{yj().then(function(){},function(){}),S(zj,18E5)}catch(b){ue(b)}}}
;var Z=z("ytglobal.prefsUserPrefsPrefs_")||{};y("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function Aj(){this.f=Q("ALT_PREF_COOKIE_NAME","PREF");var a=pc.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
n=Aj.prototype;n.get=function(a,b){Bj(a);Cj(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
n.set=function(a,b){Bj(a);Cj(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
n.remove=function(a){Bj(a);Cj(a);delete Z[a]};
n.save=function(){ng(this.f,this.dump(),63072E3)};
n.clear=function(){for(var a in Z)delete Z[a]};
n.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function Cj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Bj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Dj(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
ya(Aj);var Ej=null,Fj=null,Gj=null,Hj={};function Ij(a){var b=a.id;a=a.ve_type;var c=ih++;a=new jh({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Hj[b]=a;b=qh();c=oh();b&&c&&Lh(b,c,[a])}
function Jj(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(th(b,a),a=oh()))for(var c in Hj){var d=Hj[c];d&&Lh(b,a,[d])}}
function Kj(a){Hj[a.id]=new jh({trackingParams:a.tracking_params})}
function Lj(a){var b=qh(),c=Hj[a.id];if(b&&c){a=R("use_default_events_client")?void 0:tg;c={csn:b,ve:kh(c),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"};var d={da:sh(b),P:b};"UNDEFINED_CSN"==b?Mh("visualElementGestured",c,d):a?jg("visualElementGestured",c,a,d):ug("visualElementGestured",c,d)}}
function Mj(a){a=a.ids;var b=qh();if(b)for(var c=0;c<a.length;c++){var d=Hj[a[c]];if(d){var e=b,f=R("use_default_events_client")?void 0:tg;d={csn:e,ve:kh(d),eventType:1};var g={da:sh(e),P:e};"UNDEFINED_CSN"==e?Mh("visualElementShown",d,g):f?jg("visualElementShown",d,f,g):ug("visualElementShown",d,g)}}}
;y("yt.setConfig",P,void 0);y("yt.config.set",P,void 0);y("yt.setMsg",Eg,void 0);y("yt.msgs.set",Eg,void 0);y("yt.logging.errors.log",Cg,void 0);
y("writeEmbed",function(){var a=Q("PLAYER_CONFIG",void 0);zj(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=Q("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);Q("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");b="player";var d=void 0===d?!0:d;b="string"===typeof b?tc(b):b;var e=ji+"_"+Ea(b),f=ii[e];f&&d?a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true")?f.api.loadVideoByPlayerVars(a.args||
null):f.loadNewVideoConfig(a):(f=new Uh(b,e,a,void 0),ii[e]=f,pf("player-added",f.api),id(f,Ka(ki,f)));a=f.api;Ej=a;a.addEventListener("onScreenChanged",Jj);a.addEventListener("onLogClientVeCreated",Ij);a.addEventListener("onLogServerVeCreated",Kj);a.addEventListener("onLogVeClicked",Lj);a.addEventListener("onLogVesShown",Mj);d=Q("POST_MESSAGE_ID","player");Q("ENABLE_JS_API")?Gj=new kj(a):Q("ENABLE_POST_API")&&"string"===typeof d&&"string"===typeof c&&(Fj=new lj(window.parent,d,c),Gj=new fj(a,Fj.h));
c=Q("BG_P",void 0);ch(c)&&(Q("BG_I")||Q("BG_IU"))&&(Zg=!0,Yg.initialize(Q("BG_I",null),Q("BG_IU",null),c,bh,void 0,!!Q("BG_CE",!1)));Ug()},void 0);
y("yt.www.watch.ads.restrictioncookie.spr",function(a){df(a+"mac_204?action_fcts=1");return!0},void 0);
var Nj=te(function(){Si("ol");var a=Aj.getInstance(),b=!!((Dj("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&nd(document.body,"exp-invert-logo"))if(c&&!nd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!nd(d,"inverted-hdpi")){var e=ld(d);md(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&nd(document.body,"inverted-hdpi")&&od();b!=c&&(b="f"+(Math.floor(119/31)+1),d=Dj(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete Z[b]:(c=d.toString(16),Z[b]=c.toString()),a.save())}),Oj=te(function(){var a=Ej;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();Q("PL_ATT")&&Yg.dispose();a=0;for(var b=Sg.length;a<b;a++){var c=Sg[a];if(!isNaN(c)){var d=z("yt.scheduler.instance.cancelJob");d?d(c):T(c)}}Sg.length=0;Qg("//static.doubleclick.net/instream/ad_status.js");Tg=!1;P("DCLKSTAT",0);kd(Gj,Fj);if(a=Ej)a.removeEventListener("onScreenChanged",Jj),a.removeEventListener("onLogClientVeCreated",Ij),a.removeEventListener("onLogServerVeCreated",Kj),a.removeEventListener("onLogVeClicked",Lj),a.removeEventListener("onLogVesShown",
Mj),a.destroy();Hj={}});
window.addEventListener?(window.addEventListener("load",Nj),window.addEventListener("unload",Oj)):window.attachEvent&&(window.attachEvent("onload",Nj),window.attachEvent("onunload",Oj));La("yt.abuse.player.botguardInitialized",z("yt.abuse.player.botguardInitialized")||dh);La("yt.abuse.player.invokeBotguard",z("yt.abuse.player.invokeBotguard")||eh);La("yt.abuse.dclkstatus.checkDclkStatus",z("yt.abuse.dclkstatus.checkDclkStatus")||Vg);
La("yt.player.exports.navigate",z("yt.player.exports.navigate")||uh);La("yt.util.activity.init",z("yt.util.activity.init")||eg);La("yt.util.activity.getTimeSinceActive",z("yt.util.activity.getTimeSinceActive")||hg);La("yt.util.activity.setTimestamp",z("yt.util.activity.setTimestamp")||fg);}).call(this);
