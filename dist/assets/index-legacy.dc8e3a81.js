!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(E){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=_(a,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(E){return{type:"throw",arg:E}}}r.wrap=s;var h={};function p(){}function d(){}function g(){}var v={};l(v,a,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(k([])));m&&m!==n&&o.call(m,a)&&(v=m);var w=g.prototype=p.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,r){function n(i,a,u,c){var l=f(e[i],e,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(h).then((function(t){s.value=t,u(s)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=g,l(w,"constructor",g),l(g,"constructor",d),d.displayName=l(g,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,u,(function(){return this})),r.AsyncIterator=x,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new x(s(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),$(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;$(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy.4c0b28ad.js","./index-legacy.6e609b9a.js"],(function(t){"use strict";var o,i,a,u,c,l,s,f,h,p,d,g,v,y,m,w,b,x,_,C,$,S,k,L,E,I,j,G,O,P,N,T,A,z,F,U,M,D,R,Y,Z;return{setters:[function(t){o=t.aq,i=t.b4,a=t.bp,u=t.v,c=t.N,l=t.f,s=t.$,f=t.as,h=t.H,p=t.u,d=t.at,g=t.ai,v=t.bl,y=t.bq,m=t.b7,w=t.bh,b=t.br,x=t.bs,_=t.bt,C=t.d,$=t.w,S=t.e,k=t.bu,L=t.a,E=t.V,I=t.bg,j=t.af,G=t.bf,O=t.m,P=t.I,N=t.bv,T=t.aP,A=t.a2,z=t.B,F=t.aY,U=t.aZ,M=t.al,D=t.h,R=t.n},function(t){Y=t.p,Z=t.c}],execute:function(){var q=u('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="896" width="967.8852157128662"><defs><path id="path-2" opacity="1" fill-rule="evenodd" d="M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"></path><linearGradient id="linearGradient-3" x1="0.5" y1="0" x2="0.5" y2="1"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-2" fill="url(#linearGradient-3)" fill-opacity="1"></use></g></svg>'),K=function(t){var e,r,n,u=o({startColor:"#28aff0",endColor:"#120fc4"},t);return e=q.cloneNode(!0),r=e.firstChild.firstChild.nextSibling.firstChild,n=r.nextSibling,i((function(t){var e=u.startColor,o=u.endColor;return e!==t._v$&&a(r,"stop-color",t._v$=e),o!==t._v$2&&a(n,"stop-color",t._v$2=o),t}),{_v$:void 0,_v$2:void 0}),e},B=u('<svg height="1337" width="1337"><defs><path id="path-1" opacity="1" fill-rule="evenodd" d="M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"></path><linearGradient id="linearGradient-2" x1="0.79" y1="0.62" x2="0.21" y2="0.86"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-1" fill="url(#linearGradient-2)" fill-opacity="1"></use></g></svg>'),H=function(t){var e,r,n,u=o({startColor:"#28aff0",endColor:"#120fc4"},t);return e=B.cloneNode(!0),r=e.firstChild.firstChild.nextSibling.firstChild,n=r.nextSibling,i((function(t){var e=u.startColor,o=u.endColor;return e!==t._v$&&a(r,"stop-color",t._v$=e),o!==t._v$2&&a(n,"stop-color",t._v$2=o),t}),{_v$:void 0,_v$2:void 0}),e},V=function(){var t=c("#a9c6ff","#062b74");return l(s,{get bgColor(){return t()},pos:"fixed",top:"0",left:"0",overflow:"hidden",zIndex:"-1",w:"100vw",h:"100vh",get children(){return[l(s,{pos:"absolute",right:{"@initial":"-100px","@sm":"-300px"},top:{"@initial":"-1170px","@sm":"-900px"},get children(){return l(H,{})}}),l(s,{pos:"absolute",left:{"@initial":"-100px","@sm":"-200px"},bottom:{"@initial":"-760px","@sm":"-400px"},get children(){return l(K,{})}})]}})},J=function(){var t=f("sso_login_enabled"),e=h("sso_login_platform"),r=p(),n=r.searchParams,o=r.to;function i(t){var e=t.data;e.token&&(v(e.token),o(decodeURIComponent(n.redirect||y||"/"),!0))}if(window.addEventListener("message",i),d((function(){window.removeEventListener("message",i)})),t){var a;switch(e){case"Github":a=_;break;case"Microsoft":a=Y;break;case"Google":a=x;break;case"Dingtalk":a=b;break;default:a=w}return l(g,{cursor:"pointer",boxSize:"$8",as:a,p:"$0_5",onclick:function(){var t=m.getUri()+"/auth/sso?method=sso_get_token";window.open(t,"authPopup","width=500,height=600")}})}};t("default",(function(){var t=h("logo").split("\n"),o=c(t[0],t.pop()),i=C(),a=$((function(){return"".concat(i("login.login_to")," ").concat(h("site_title"))}));Z(a);var u=c("white","$neutral1"),s=n(S(localStorage.getItem("username")||""),2),f=s[0],d=s[1],g=n(S(localStorage.getItem("password")||""),2),w=g[0],b=g[1],x=n(S(""),2),_=x[0],Y=x[1],q=n(k("remember-pwd","false"),2),K=q[0],B=q[1],H=n(L((function(){return m.post("/auth/login",{username:f(),password:w(),otp_code:_()})})),2),Q=H[0],W=H[1],X=p(),tt=X.searchParams,et=X.to,rt=function(){var t,n=(t=e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"true"===K()?(localStorage.setItem("username",f()),localStorage.setItem("password",w())):(localStorage.removeItem("username"),localStorage.removeItem("password")),t.next=3,W();case 3:r=t.sent,D(r,(function(t){R.success(i("login.success")),v(t.token),et(decodeURIComponent(tt.redirect||y||"/"),!0)}),(function(t,e){ot()||402!==e?R.error(t):it(!0)}));case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))});return function(){return n.apply(this,arguments)}}(),nt=n(S(!1),2),ot=nt[0],it=nt[1];return l(M,{zIndex:"1",w:"$full",h:"100vh",get children(){return[l(E,{get bgColor(){return u()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[l(I,{alignItems:"center",justifyContent:"space-around",get children(){return[l(j,{mr:"$2",boxSize:"$12",get src(){return o()}}),l(G,{color:"$info9",fontSize:"$2xl",get children(){return a()}})]}}),l(O,{get when(){return!ot()},get fallback(){return l(P,{id:"totp",name:"otp",get placeholder(){return i("login.otp-tips")},get value(){return _()},onChange:function(t){return Y(t.currentTarget.value)},onKeyDown:function(t){"Enter"===t.key&&rt()}})},get children(){return[l(P,{name:"username",get placeholder(){return i("login.username-tips")},get value(){return f()},onInput:function(t){return d(t.currentTarget.value)}}),l(P,{name:"password",get placeholder(){return i("login.password-tips")},type:"password",get value(){return w()},onInput:function(t){return b(t.currentTarget.value)},onKeyDown:function(t){"Enter"===t.key&&rt()}}),l(I,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return[l(N,{get checked(){return"true"===K()},onChange:function(){return B("true"===K()?"false":"true")},get children(){return i("login.remember")}}),l(T,{as:"a",target:"_blank",get href(){return i("login.forget_url")},get children(){return i("login.forget")}})]}})]}}),l(A,{w:"$full",spacing:"$2",get children(){return[l(z,{colorScheme:"primary",w:"$full",onClick:function(){ot()?Y(""):(d(""),b(""))},get children(){return i("login.clear")}}),l(z,{w:"$full",get loading(){return Q()},onClick:rt,get children(){return i("login.login")}})]}}),l(z,{w:"$full",colorScheme:"accent",onClick:function(){v(),et(decodeURIComponent(tt.redirect||y||"/"),!0)},get children(){return i("login.use_guest")}}),l(I,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[l(F,{}),l(U,{}),l(J,{})]}})]}}),l(V,{})]}})}))}}}))}();
