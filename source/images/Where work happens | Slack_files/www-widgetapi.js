(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var g;function aa(){var a=l,b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function ca(a){a=["object"==typeof globalThis&&globalThis,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this),ea="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ka=fa;
function la(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.u=b.prototype}
function ma(a,b){if(b){for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
var na="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};
ma("Object.assign",function(a){return a||na});
var m=this||self;function q(a){a=a.split(".");for(var b=m,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function oa(){}
function r(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function pa(a){var b=r(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function t(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function qa(a){return Object.prototype.hasOwnProperty.call(a,ra)&&a[ra]||(a[ra]=++sa)}
var ra="closure_uid_"+(1E9*Math.random()>>>0),sa=0;function ta(a,b,c){return a.call.apply(a.bind,arguments)}
function ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v=ta:v=ua;return v.apply(null,arguments)}
var w=Date.now||function(){return+new Date};
function y(a,b){var c=a.split("."),d=m;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function z(a,b){function c(){}
c.prototype=b.prototype;a.u=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;var va=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},A=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},wa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
A(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function xa(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function ya(a){return Array.prototype.concat.apply([],arguments)}
function za(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
;function Aa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Ba(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ca(a){var b=B,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
;function Da(a,b){this.g=a===Ea&&b||"";this.f=Fa}
var Fa={},Ea={},C=new Da(Ea,"");function Ga(a,b){this.g=a===Ha&&b||"";this.f=Ia}
var Ia={},Ha={};var Ja=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ka=/&/g,La=/</g,Ma=/>/g,Na=/"/g,Oa=/'/g,Pa=/\x00/g,Qa=/[\x00&<>"']/;var D;a:{var Ra=m.navigator;if(Ra){var Sa=Ra.userAgent;if(Sa){D=Sa;break a}}D=""}function E(a){return-1!=D.indexOf(a)}
;function Ta(){this.f="";this.g=Ua}
var Ua={};function Va(a){var b=new Ta;b.f=a;return b}
Va("<!DOCTYPE html>");var Wa=Va("");Va("<br>");function Xa(a){var b=new Ga(Ha,C instanceof Da&&C.constructor===Da&&C.f===Fa?C.g:"type_error:Const");a.src=(b instanceof Ga&&b.constructor===Ga&&b.f===Ia?b.g:"type_error:TrustedResourceUrl").toString()}
;var Ya=E("Opera"),Za=E("Trident")||E("MSIE"),$a=E("Edge"),ab=E("Gecko")&&!(-1!=D.toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),bb=-1!=D.toLowerCase().indexOf("webkit")&&!E("Edge");function cb(){var a=m.document;return a?a.documentMode:void 0}
var db;a:{var eb="",fb=function(){var a=D;if(ab)return/rv:([^\);]+)(\)|;)/.exec(a);if($a)return/Edge\/([\d\.]+)/.exec(a);if(Za)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(bb)return/WebKit\/(\S+)/.exec(a);if(Ya)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
fb&&(eb=fb?fb[1]:"");if(Za){var gb=cb();if(null!=gb&&gb>parseFloat(eb)){db=String(gb);break a}}db=eb}var hb=db,ib;if(m.document&&Za){var jb=cb();ib=jb?jb:parseInt(hb,10)||void 0}else ib=void 0;var kb=ib;var F=window;function lb(){this.f=("undefined"==typeof document?null:document)||{cookie:""}}
g=lb.prototype;g.isEnabled=function(){return navigator.cookieEnabled};
g.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.aa;d=c.secure||!1;var f=c.domain||void 0;var h=c.path||void 0;var k=c.I}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===k&&(k=-1);c=f?";domain="+f:"";h=h?";path="+h:"";d=d?";secure":"";k=0>k?"":0==k?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(w()+1E3*k)).toUTCString();this.f.cookie=a+"="+b+c+h+k+d+(null!=e?";samesite="+e:"")};
g.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ja(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{I:0,path:b,domain:c});return d};
g.isEmpty=function(){return!this.f.cookie};
g.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ja(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var mb=new lb;function nb(a,b){this.width=a;this.height=b}
g=nb.prototype;g.aspectRatio=function(){return this.width/this.height};
g.isEmpty=function(){return!(this.width*this.height)};
g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ob(a,b){var c,d;var e=document;e=b||e;if(e.querySelectorAll&&e.querySelector&&a)return e.querySelectorAll(a?"."+a:"");if(a&&e.getElementsByClassName){var f=e.getElementsByClassName(a);return f}f=e.getElementsByTagName("*");if(a){var h={};for(c=d=0;e=f[c];c++){var k=e.className,n;if(n="function"==typeof k.split)n=0<=va(k.split(/\s+/),a);n&&(h[d++]=e)}h.length=d;return h}return f}
function pb(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function qb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var rb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function sb(a){var b=a.match(rb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function tb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)tb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ub(a){var b=[],c;for(c in a)tb(c,a[c],b);return b.join("&")}
var vb=/#|$/;function wb(a){var b=xb;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function yb(){var a=[];wb(function(b){a.push(b)});
return a}
var xb={O:"allow-forms",P:"allow-modals",R:"allow-orientation-lock",S:"allow-pointer-lock",T:"allow-popups",U:"allow-popups-to-escape-sandbox",V:"allow-presentation",W:"allow-same-origin",X:"allow-scripts",Y:"allow-top-navigation",Z:"allow-top-navigation-by-user-activation"},zb=Aa(function(){return yb()});
function Ab(){var a=pb(),b={};A(zb(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;var Bb=(new Date).getTime();/*
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
function Cb(){this.g=[];this.f=-1}
Cb.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Cb.prototype.get=function(a){return!!this.g[a]};
function Db(a){-1==a.f&&(a.f=wa(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Eb(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Eb.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};function Fb(a){m.setTimeout(function(){throw a;},0)}
var Gb;
function Hb(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=pb();e.style.display="none";Xa(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Wa instanceof Ta&&Wa.constructor===Ta&&Wa.g===Ua?Wa.f:"type_error:SafeHtml");e.close();var h="callImmediate"+Math.random(),k="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=v(function(n){if(("*"==
k||n.origin==k)&&n.data==h)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(h,k)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.H;c.H=null;e()}};
return function(e){d.next={H:e};d=d.next;b.port2.postMessage(0)}}return function(e){m.setTimeout(e,0)}}
;function Ib(){this.g=this.f=null}
var Kb=new Eb(function(){return new Jb},function(a){a.reset()});
Ib.prototype.add=function(a,b){var c=Kb.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Ib.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Jb(){this.next=this.scope=this.f=null}
Jb.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Jb.prototype.reset=function(){this.next=this.scope=this.f=null};function Lb(a){Mb||Nb();Ob||(Mb(),Ob=!0);Pb.add(a,void 0)}
var Mb;function Nb(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);Mb=function(){a.then(Qb)}}else Mb=function(){var b=Qb;
"function"!=r(m.setImmediate)||m.Window&&m.Window.prototype&&!E("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Gb||(Gb=Hb()),Gb(b)):m.setImmediate(b)}}
var Ob=!1,Pb=new Ib;function Qb(){for(var a;a=Pb.remove();){try{a.f.call(a.scope)}catch(c){Fb(c)}var b=Kb;b.i(a);100>b.g&&(b.g++,a.next=b.f,b.f=a)}Ob=!1}
;function G(){this.h=this.h;this.i=this.i}
G.prototype.h=!1;G.prototype.dispose=function(){this.h||(this.h=!0,this.D())};
G.prototype.D=function(){if(this.i)for(;this.i.length;)this.i.shift()()};var H="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function I(){}
I.prototype.next=function(){throw H;};
I.prototype.m=function(){return this};
function Rb(a){if(a instanceof I)return a;if("function"==typeof a.m)return a.m(!1);if(pa(a)){var b=0,c=new I;c.next=function(){for(;;){if(b>=a.length)throw H;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Sb(a,b){if(pa(a))try{A(a,b,void 0)}catch(c){if(c!==H)throw c;}else{a=Rb(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==H)throw c;}}}
function Tb(a){if(pa(a))return za(a);a=Rb(a);var b=[];Sb(a,function(c){b.push(c)});
return b}
;function Ub(a,b){this.h={};this.f=[];this.i=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Ub)for(c=Vb(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Vb(a){Wb(a);return a.f.concat()}
g=Ub.prototype;g.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Xb;Wb(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Xb(a,b){return a===b}
g.isEmpty=function(){return 0==this.g};
g.clear=function(){this.h={};this.i=this.g=this.f.length=0};
g.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.i++,this.f.length>2*this.g&&Wb(this),!0):!1};
function Wb(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
g.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
g.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.i++);this.h[a]=b};
g.forEach=function(a,b){for(var c=Vb(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.m=function(a){Wb(this);var b=0,c=this.i,d=this,e=new I;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw H;var f=d.f[b++];return a?f:d.h[f]};
return e};var Yb=m.JSON.stringify;function J(a){G.call(this);this.s=1;this.j=[];this.l=0;this.f=[];this.g={};this.v=!!a}
z(J,G);g=J.prototype;g.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.s;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.s=e+3;d.push(e);return e};
function Zb(a,b,c){var d=$b;if(a=d.g[a]){var e=d.f;(a=xa(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.A(a)}}
g.A=function(a){var b=this.f[a];if(b){var c=this.g[b];if(0!=this.l)this.j.push(a),this.f[a+1]=oa;else{if(c){var d=va(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}}return!!b};
g.F=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var h=c[e];ac(this.f[h+1],this.f[h+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.f[h+1].apply(this.f[h+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.A(c)}}return 0!=e}return!1};
function ac(a,b,c){Lb(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.g[a];b&&(A(b,this.A,this),delete this.g[a])}else this.f.length=0,this.g={}};
g.D=function(){J.u.D.call(this);this.clear();this.j.length=0};function bc(a){this.f=a}
bc.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,Yb(b))};
bc.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
bc.prototype.remove=function(a){this.f.remove(a)};function K(a){this.f=a}
z(K,bc);function cc(a){this.data=a}
function dc(a){return void 0===a||a instanceof cc?a:new cc(a)}
K.prototype.set=function(a,b){K.u.set.call(this,a,dc(b))};
K.prototype.g=function(a){a=K.u.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
K.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function N(a){this.f=a}
z(N,K);N.prototype.set=function(a,b,c){if(b=dc(b)){if(c){if(c<w()){N.prototype.remove.call(this,a);return}b.expiration=c}b.creation=w()}N.u.set.call(this,a,b)};
N.prototype.g=function(a){var b=N.u.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<w()||c&&c>w())N.prototype.remove.call(this,a);else return b}};function ec(){}
;function O(){}
z(O,ec);O.prototype.clear=function(){var a=Tb(this.m(!0)),b=this;A(a,function(c){b.remove(c)})};function fc(a){this.f=a}
z(fc,O);g=fc.prototype;g.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
g.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.f.removeItem(a)};
g.m=function(a){var b=0,c=this.f,d=new I;d.next=function(){if(b>=c.length)throw H;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.clear=function(){this.f.clear()};
g.key=function(a){return this.f.key(a)};function gc(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
z(gc,fc);function hc(a,b){this.g=a;this.f=null;var c;if(c=Za)c=!(9<=Number(kb));if(c){ic||(ic=new Ub);this.f=ic.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),ic.set(a,this.f));try{this.f.load(this.g)}catch(d){this.f=null}}}
z(hc,O);var jc={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ic=null;function kc(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return jc[b]})}
g=hc.prototype;g.isAvailable=function(){return!!this.f};
g.set=function(a,b){this.f.setAttribute(kc(a),b);lc(this)};
g.get=function(a){a=this.f.getAttribute(kc(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.f.removeAttribute(kc(a));lc(this)};
g.m=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new I;d.next=function(){if(b>=c.length)throw H;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);lc(this)};
function lc(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function P(a,b){this.g=a;this.f=b+"::"}
z(P,O);P.prototype.set=function(a,b){this.g.set(this.f+a,b)};
P.prototype.get=function(a){return this.g.get(this.f+a)};
P.prototype.remove=function(a){this.g.remove(this.f+a)};
P.prototype.m=function(a){var b=this.g.m(!0),c=this,d=new I;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var Q=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};y("yt.config_",Q);function mc(a){var b=arguments;1<b.length?Q[b[0]]=b[1]:1===b.length&&Object.assign(Q,b[0])}
function nc(){var a=[];return"ERRORS"in Q?Q.ERRORS:a}
;var oc=[];function pc(a){oc.forEach(function(b){return b(a)})}
function qc(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(d){var b=d,c=q("yt.logging.errors.log");c?c(b,"ERROR",void 0,void 0,void 0):(c=nc(),c.push([b,"ERROR",void 0,void 0,void 0]),mc("ERRORS",c));pc(d)}}:a}
;var rc=0;y("ytDomDomGetNextId",q("ytDomDomGetNextId")||function(){return++rc});var sc={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function R(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in sc||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
R.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
R.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
R.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var B=q("ytEventsEventsListeners")||{};y("ytEventsEventsListeners",B);var tc=q("ytEventsEventsCounter")||{count:0};y("ytEventsEventsCounter",tc);
function uc(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ca(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,h;if(h=t(e[4])&&t(d))a:{h=e[4];for(var k in h)if(!(k in d)||h[k]!==d[k]){h=!1;break a}for(var n in d)if(!(n in h)){h=!1;break a}h=!0}return!!e.length&&e[0]==a&&e[1]==b&&e[2]==
c&&(f||h)})}
function vc(a){a&&("string"==typeof a&&(a=[a]),A(a,function(b){if(b in B){var c=B[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?wc()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete B[b]}}))}
var wc=Aa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function xc(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=uc(a,b,c,d);if(!e){e=++tc.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var h=f?function(k){k=new R(k);if(!qb(k.relatedTarget,function(n){return n==a}))return k.currentTarget=a,k.type=b,c.call(a,k)}:function(k){k=new R(k);
k.currentTarget=a;return c.call(a,k)};
h=qc(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),wc()||"boolean"===typeof d?a.addEventListener(b,h,d):a.addEventListener(b,h,!!d.capture)):a.attachEvent("on"+b,h);B[e]=[a,b,c,h,d]}}}
;function yc(a){"function"==r(a)&&(a=qc(a));return window.setInterval(a,250)}
;function zc(a){var b=[];Ba(a,function(c,d){var e=encodeURIComponent(String(d)),f;"array"==r(c)?f=c:f=[c];A(f,function(h){""==h?b.push(e):b.push(e+"="+encodeURIComponent(String(h)))})});
return b.join("&")}
;var Ac={};function Bc(a){return Ac[a]||(Ac[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var S={},l=[],$b=new J,Cc={};function Dc(){var a="undefined"!=typeof Symbol&&Symbol.iterator&&l[Symbol.iterator];var b;a?b=a.call(l):b={next:aa()};a=b;for(b=a.next();!b.done;b=a.next())b=b.value,b()}
function Ec(a,b){b||(b=document);var c=za(b.getElementsByTagName("yt:"+a)),d="yt-"+a,e=b||document;d=za(e.querySelectorAll&&e.querySelector?e.querySelectorAll("."+d):ob(d,b));return ya(c,d)}
function T(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Bc(b)]:a.getAttribute("data-"+b):null;return c}
function Fc(a,b){$b.F.apply($b,arguments)}
;function Gc(a){this.g=a||{};this.h=this.f=!1;a=document.getElementById("www-widgetapi-script");if(this.f=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function U(a,b){for(var c=[a.g,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function Hc(a,b,c){V||(V={},xc(window,"message",v(a.i,a)));V[c]=b}
Gc.prototype.i=function(a){if(a.origin==U(this,"host")||a.origin==U(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.h=!0;this.f||0!=a.origin.indexOf("https:")||(this.f=!0);if(a=V[b.id])a.v=!0,a.v&&(A(a.s,a.G,a),a.s.length=0),a.K(b)}};
var V=null;var Ic=q("ytPubsubPubsubInstance")||new J;J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.A;J.prototype.publish=J.prototype.F;J.prototype.clear=J.prototype.clear;y("ytPubsubPubsubInstance",Ic);y("ytPubsubPubsubSubscribedKeys",q("ytPubsubPubsubSubscribedKeys")||{});y("ytPubsubPubsubTopicToKeys",q("ytPubsubPubsubTopicToKeys")||{});y("ytPubsubPubsubIsSynchronous",q("ytPubsubPubsubIsSynchronous")||{});var Jc=Object.create(null);Jc.log_event="GENERIC_EVENT_LOGGING";Jc.log_interaction="INTERACTION_LOGGING";y("ytLoggingTransportLogPayloadsQueue_",q("ytLoggingTransportLogPayloadsQueue_")||{});y("ytLoggingTransportTokensToCttTargetIds_",q("ytLoggingTransportTokensToCttTargetIds_")||{});y("ytLoggingTransportDispatchedStats_",q("ytLoggingTransportDispatchedStats_")||{});y("ytytLoggingTransportCapturedTime_",q("ytLoggingTransportCapturedTime_")||{});function Kc(){}
;function W(){}
la(W,Kc);W.prototype.start=function(){var a=q("yt.scheduler.instance.start");a&&a()};
W.f=void 0;W.g=function(){W.f||(W.f=new W)};
W.g();y("ytLoggingGelSequenceIdObj_",q("ytLoggingGelSequenceIdObj_")||{});function Lc(){var a=Mc,b={};b.dt=Bb;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?F:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!F.navigator&&"unknown"!==typeof F.navigator.javaEnabled&&!!F.navigator.javaEnabled&&F.navigator.javaEnabled();F.screen&&(b.u_h=F.screen.height,b.u_w=F.screen.width,b.u_ah=F.screen.availHeight,b.u_aw=F.screen.availWidth,b.u_cd=F.screen.colorDepth);
F.navigator&&F.navigator.plugins&&(b.u_nplug=F.navigator.plugins.length);F.navigator&&F.navigator.mimeTypes&&(b.u_nmime=F.navigator.mimeTypes.length);return b}
function Nc(){var a=Mc;var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(u){}try{var e=b.outerWidth;var f=b.outerHeight}catch(u){}try{var h=b.innerWidth;var k=b.innerHeight}catch(u){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,h,k];c=a.f.top;try{var n=(c||window).document,p="CSS1Compat"==n.compatMode?n.documentElement:n.body;var x=(new nb(p.clientWidth,p.clientHeight)).round()}catch(u){x=new nb(-12245933,-12245933)}n=x;x={};p=new Cb;
m.SVGElement&&m.document.createElementNS&&p.set(0);c=Ab();c["allow-top-navigation-by-user-activation"]&&p.set(1);c["allow-popups-to-escape-sandbox"]&&p.set(2);m.crypto&&m.crypto.subtle&&p.set(3);m.TextDecoder&&m.TextEncoder&&p.set(4);p=Db(p);x.bc=p;x.bih=n.height;x.biw=n.width;x.brdim=b.join();a=a.g;return x.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,x.wgl=!!F.WebGLRenderingContext,x}
var Mc=new function(){var a=window.document;this.f=window;this.g=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){a=void 0===a?q("yt.ads.biscotti.lastId_")||"":a;var b=Object.assign(Lc(),Nc());b.ca_type="image";a&&(b.bid=a);return zc(b)});w();function Oc(){var a=new gc;(a=a.isAvailable()?new P(a,"yt.innertube"):null)||(a=new hc("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new N(a):null;this.g=document.domain||window.location.hostname}
Oc.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,w()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Yb(b))}catch(f){return}else e=escape(b);b=this.g;mb.set(""+a,e,{I:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Oc.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=mb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Oc.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;mb.remove(""+a,"/",void 0===b?"youtube.com":b)};new Oc;function X(a,b,c){this.l=this.f=this.g=null;this.j=qa(this);this.h=0;this.v=!1;this.s=[];this.i=null;this.L=c;this.M={};c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?sb(a.src):"https://www.youtube.com"),this.g=new Gc(b),c||(b=Pc(this,a),this.l=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.f=a,this.f.id||(this.f.id="widget"+qa(this.f)),S[this.f.id]=this,window.postMessage){this.i=new J;Qc(this);b=U(this.g,"events");for(var d in b)b.hasOwnProperty(d)&&
this.addEventListener(d,b[d]);for(var e in Cc)Rc(this,e)}}
g=X.prototype;g.setSize=function(a,b){this.f.width=a;this.f.height=b;return this};
g.N=function(){return this.f};
g.K=function(a){this.w(a.event,a)};
g.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.i.subscribe(a,c);Sc(this,a);return this};
function Rc(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.L==c[0]&&Sc(a,d)}}
g.destroy=function(){this.f.id&&(S[this.f.id]=null);var a=this.i;a&&"function"==typeof a.dispose&&a.dispose();if(this.l){a=this.f;var b=a.parentNode;b&&b.replaceChild(this.l,a)}else(a=this.f)&&a.parentNode&&a.parentNode.removeChild(a);V&&(V[this.j]=null);this.g=null;a=this.f;for(var c in B)B[c][0]==a&&vc(c);this.l=this.f=null};
g.B=function(){return{}};
function Tc(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.v?a.G(b):a.s.push(b)}
g.w=function(a,b){if(!this.i.h){var c={target:this,data:b};this.i.F(a,c);Fc(this.L+"."+a,c)}};
function Pc(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var h=d[e].value;null!=h&&""!=h&&"null"!=h&&c.setAttribute(d[e].name,h)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+U(a.g,"title"));(d=U(a.g,"width"))&&c.setAttribute("width",d);(d=U(a.g,"height"))&&c.setAttribute("height",d);var k=a.B();k.enablejsapi=
window.postMessage?1:0;window.location.host&&(k.origin=window.location.protocol+"//"+window.location.host);k.widgetid=a.j;window.location.href&&A(["debugjs","debugcss"],function(n){var p=window.location.href;var x=p.search(vb);b:{var u=0;for(var L=n.length;0<=(u=p.indexOf(n,u))&&u<x;){var M=p.charCodeAt(u-1);if(38==M||63==M)if(M=p.charCodeAt(u+L),!M||61==M||38==M||35==M)break b;u+=L+1}u=-1}if(0>u)p=null;else{L=p.indexOf("&",u);if(0>L||L>x)L=x;u+=n.length+1;p=decodeURIComponent(p.substr(u,L-u).replace(/\+/g,
" "))}null!==p&&(k[n]=p)});
c.src=U(a.g,"host")+a.C()+"?"+ub(k);return c}
g.J=function(){this.f&&this.f.contentWindow?this.G({event:"listening"}):window.clearInterval(this.h)};
function Qc(a){Hc(a.g,a,a.j);a.h=yc(v(a.J,a));xc(a.f,"load",v(function(){window.clearInterval(this.h);this.h=yc(v(this.J,this))},a))}
function Sc(a,b){a.M[b]||(a.M[b]=!0,Tc(a,"addEventListener",[b]))}
g.G=function(a){a.id=this.j;a.channel="widget";a=Yb(a);var b=this.g;var c=sb(this.f.src||"");b=0==c.indexOf("https:")?[c]:b.f?[c.replace("http:","https:")]:b.h?[c]:[c,c.replace("http:","https:")];if(this.f.contentWindow)for(c=0;c<b.length;c++)try{this.f.contentWindow.postMessage(a,b[c])}catch(f){if(f.name&&"SyntaxError"==f.name){if(!(f.message&&0<f.message.indexOf("target origin ''"))){var d=f,e=q("yt.logging.errors.log");e?e(d,"WARNING",void 0,void 0,!1,void 0):(e=nc(),e.push([d,"WARNING",void 0,
void 0,!1,void 0]),mc("ERRORS",e))}}else throw f;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Uc(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Vc(a){return 0===a.search("get")||0===a.search("is")}
;function Y(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];X.call(this,a,c,"player");this.o={};this.playerInfo={}}
la(Y,X);g=Y.prototype;g.C=function(){return"/embed/"+U(this.g,"videoId")};
g.B=function(){var a=U(this.g,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=U(this.g,"embedConfig")){if(t(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
g.K=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(t(a))for(var c in a)this.o[c]=a[c];break;case "infoDelivery":Wc(this,a);break;case "initialDelivery":window.clearInterval(this.h);this.playerInfo={};this.o={};Xc(this,a.apiInterface);Wc(this,a);break;default:this.w(b,a)}};
function Wc(a,b){if(t(b))for(var c in b)a.playerInfo[c]=b[c]}
function Xc(a,b){A(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.playerInfo.currentTime;if(1==this.playerInfo.playerState){var e=(w()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Uc(c)?this[c]=function(){this.playerInfo={};
this.o={};Tc(this,c,arguments);return this}:Vc(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Tc(this,c,arguments);
return this})},a)}
g.getVideoEmbedCode=function(){var a=parseInt(U(this.g,"width"),10);var b=parseInt(U(this.g,"height"),10),c=U(this.g,"host")+this.C();Qa.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(Ka,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(La,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(Ma,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(Na,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(Oa,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(Pa,"&#0;")));a='<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
return a};
g.getOptions=function(a){return this.o.namespaces?a?this.o[a].options||[]:this.o.namespaces||[]:[]};
g.getOption=function(a,b){if(this.o.namespaces&&a&&b)return this.o[a][b]};
function Yc(a){if("iframe"!=a.tagName.toLowerCase()){var b=T(a,"videoid");b&&(b={videoId:b,width:T(a,"width"),height:T(a,"height")},new Y(a,b))}}
;function Z(a,b){var c={title:"Thumbnail",videoId:"",width:120,height:68};if(b)for(var d in b)c[d]=b[d];X.call(this,a,c,"thumbnail")}
la(Z,X);Z.prototype.C=function(){return"/embed/"+U(this.g,"videoId")};
Z.prototype.B=function(){return{player:0,thumb_width:U(this.g,"thumbWidth"),thumb_height:U(this.g,"thumbHeight"),thumb_align:U(this.g,"thumbAlign")}};
Z.prototype.w=function(a,b){X.prototype.w.call(this,a,b?b.info:void 0)};
function Zc(a){if("iframe"!=a.tagName.toLowerCase()){var b=T(a,"videoid");if(b){b={videoId:b,events:{},width:T(a,"width"),height:T(a,"height"),thumbWidth:T(a,"thumb-width"),thumbHeight:T(a,"thumb-height"),thumbAlign:T(a,"thumb-align")};var c=T(a,"onclick");c&&(b.events.onClick=c);new Z(a,b)}}}
;y("YT.PlayerState.UNSTARTED",-1);y("YT.PlayerState.ENDED",0);y("YT.PlayerState.PLAYING",1);y("YT.PlayerState.PAUSED",2);y("YT.PlayerState.BUFFERING",3);y("YT.PlayerState.CUED",5);y("YT.get",function(a){return S[a]});
y("YT.scan",Dc);y("YT.subscribe",function(a,b,c){$b.subscribe(a,b,c);Cc[a]=!0;for(var d in S)Rc(S[d],a)});
y("YT.unsubscribe",function(a,b,c){Zb(a,b,c)});
y("YT.Player",Y);y("YT.Thumbnail",Z);X.prototype.destroy=X.prototype.destroy;X.prototype.setSize=X.prototype.setSize;X.prototype.getIframe=X.prototype.N;X.prototype.addEventListener=X.prototype.addEventListener;Y.prototype.getVideoEmbedCode=Y.prototype.getVideoEmbedCode;Y.prototype.getOptions=Y.prototype.getOptions;Y.prototype.getOption=Y.prototype.getOption;l.push(function(a){a=Ec("player",a);A(a,Yc)});
l.push(function(){var a=Ec("thumbnail");A(a,Zc)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Dc();var $c=q("onYTReady");$c&&$c();var ad=q("onYouTubeIframeAPIReady");ad&&ad();var bd=q("onYouTubePlayerAPIReady");bd&&bd();}).call(this);
