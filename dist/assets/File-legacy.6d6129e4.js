!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,o,i=[],u=!0,c=!1;try{for(r=r.call(e);!(u=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==r.return||r.return()}finally{if(c)throw o}}return i}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function r(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function t(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./index-legacy.4c0b28ad.js","./useUtil-legacy.64c67332.js","./icon-legacy.728304e5.js","./index-legacy.edfd1dca.js","./Layout-legacy.91ad5ea3.js"],(function(n,r){"use strict";var o,i,u,c,a,l,f,p,d,s,m,g,b,y,h,v,w,j,O,_,$,k,x,S,P,A,E,T,I,D,z,C,M,L,V,U,B,X,K,R,W;return{setters:[function(e){o=e.f,i=e.af,u=e.ai,c=e.a8,a=e.o,l=e.V,f=e.bf,p=e.aP,d=e.aj,s=e.by,m=e.bK,g=e.d,b=e.w,y=e.bL,h=e.ae,v=e.a6,w=e.B,j=e.aa,O=e.x,_=e.ab,$=e.bM,k=e.m,x=e.a2,S=e.bN,P=e.C,A=e.bO,E=e.J,T=e.K,I=e.bI,D=e.bP,z=e.e,C=e.aQ,M=e.R,L=e.U,V=e.ac},function(e){U=e.a,B=e.b},function(e){X=e.g,K=e.O},function(e){R=e.m},function(e){W=e.T}],execute:function(){var F=n("F",(function(e){return o(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[o(i,{boxSize:"$20",get fallback(){return o(u,{get color(){return c()},boxSize:"$20",get as(){return X(a.obj)}})},get src(){return a.obj.thumb}}),o(l,{spacing:"$2",get children(){return[o(f,{size:"lg",css:{wordBreak:"break-all"},get children(){return a.obj.name}}),o(p,{color:"$neutral10",size:"sm",get children(){return[d((function(){return s(a.obj.size)}))," · ",d((function(){return m(a.obj.modified)}))]}})]}}),o(l,{spacing:"$2",get children(){return e.children}})]}})})),G=function(){var e=g(),n=b((function(){return y(a.obj.name)})),r=U().currentObjLink;return o(k,{get when(){return n().length},get children(){return o(h,{get children(){return[o(v,{as:w,colorScheme:"success",get rightIcon(){return o(u,{as:R})},get children(){return e("home.preview.open_with")}}),o(j,{get children(){return o(O,{get each(){return n()},children:function(e){return o(_,{as:"a",target:"_blank",get href(){return $(e.value,{raw_url:a.raw_url,name:a.obj.name,d_url:r(!0)})},get children(){return e.key}})}})}})]}})}})},H=function(e){var n=g(),r=B().copyCurrentRawLink;return o(F,{get children(){return[o(x,{spacing:"$2",get children(){return[o(w,{colorScheme:"accent",onClick:function(){return r(!0)},get children(){return n("home.toolbar.copy_link")}}),o(w,{as:"a",get href(){return a.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),o(k,{get when(){return e.openWith},get children(){return o(G,{})}})]}})},J=Object.freeze(Object.defineProperty({__proto__:null,Download:H,default:H},Symbol.toStringTag,{value:"Module"})),N=function(e){var n=U().currentObjLink,r=b((function(){return $(e.scheme,{raw_url:a.raw_url,name:a.obj.name,d_url:n(!0)})}));return o(A,{w:"$full",h:"70vh",get children(){return[o(S.iframe,{w:"$full",h:"$full",get src(){return r()}}),o(u,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:W,onClick:function(){window.open(r(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return P()},p:"$1",boxSize:"$7"})]}})},Q=[{name:"Aliyun Video Previewer",type:K.VIDEO,provider:/^Aliyundrive(Open)?$/,component:E((function(){return T((function(){return r.import("./aliyun_video-legacy.5c7761a9.js")}),void 0)}))},{name:"Markdown",type:K.TEXT,component:E((function(){return T((function(){return r.import("./markdown-legacy.40be8f69.js")}),void 0)}))},{name:"Markdown with word wrap",type:K.TEXT,component:E((function(){return T((function(){return r.import("./markdown_with_word_wrap-legacy.661a784d.js")}),void 0)}))},{name:"Text Editor",type:K.TEXT,component:E((function(){return T((function(){return r.import("./text-editor-legacy.7d49abae.js")}),void 0)}))},{name:"HTML render",exts:["html"],component:E((function(){return T((function(){return r.import("./html-legacy.e7e10c56.js")}),void 0)}))},{name:"Image",type:K.IMAGE,component:E((function(){return T((function(){return r.import("./image-legacy.194b010a.js")}),void 0)}))},{name:"Video",type:K.VIDEO,component:E((function(){return T((function(){return r.import("./video-legacy.822640ef.js")}),void 0)}))},{name:"Audio",type:K.AUDIO,component:E((function(){return T((function(){return r.import("./audio-legacy.30823aa5.js")}),void 0)}))},{name:"Ipa",exts:["ipa","tipa"],component:E((function(){return T((function(){return r.import("./ipa-legacy.9c2eb78d.js")}),void 0)}))},{name:"Plist",exts:["plist"],component:E((function(){return T((function(){return r.import("./plist-legacy.a689b26e.js")}),void 0)}))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:E((function(){return T((function(){return r.import("./aliyun_office-legacy.11e4e6c7.js")}),void 0)}))}],q=function(e){var n=[];return Q.forEach((function(r){var t;r.provider&&!r.provider.test(e.provider)||(r.type===e.type||"*"===r.exts||null!==(t=r.exts)&&void 0!==t&&t.includes(I(e.name).toLowerCase()))&&n.push({name:r.name,component:r.component})})),D(e.name).forEach((function(e){var r;n.push({name:e.key,component:(r=e.value,function(){return o(N,{scheme:r})})})})),n.push({name:"Download",component:E((function(){return T((function(){return Promise.resolve().then((function(){return J}))}),void 0)}))}),n},Y=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var n=b((function(){return q(t(t({},a.obj),{},{provider:a.provider}))})),r=e(z(n()[0]),2),i=r[0],u=r[1];return o(k,{get when(){return n().length>1},get fallback(){return o(H,{openWith:!0})},get children(){return o(l,{w:"$full",spacing:"$2",get children(){return[o(x,{w:"$full",spacing:"$2",get children(){return[o(C,{alwaysShowBorder:!0,get value(){return i().name},onChange:function(e){u(n().find((function(n){return n.name===e})))},get options(){return n().map((function(e){return{value:e.name}}))}}),o(G,{})]}}),o(M,{get fallback(){return o(L,{})},get children(){return o(V,{get component(){return i().component}})}})]}})}})}},Symbol.toStringTag,{value:"Module"}));n("a",Y)}}}))}();
