System.register(["./index-legacy-137abe7a.js"],(function(e,r){"use strict";var t,n,a,s,u,c,i,o,g,d,l,y,f,h,b,p,v,x;return{setters:[e=>{t=e.u,n=e.a,a=e.b4,s=e.d,u=e.r,c=e.j,i=e.y,o=e.a3,g=e.bd,d=e.aj,l=e.I,y=e.B,f=e.a6,h=e.aa,b=e.n,p=e.bb,v=e.aN,x=e.c3}],execute:function(){e("default",(()=>{const{back:e}=t(),[r,w]=n((()=>a.post("/auth/2fa/generate"))),$=s(),[_,j]=u(),[k,m]=u("");(async()=>{if(h().otp)return b.warning($("users.2fa_already_enabled")),void e();const r=await w();p(r,j)})();const[I,q]=n((()=>a.post("/auth/2fa/verify",{code:k(),secret:_()?.secret}))),S=async()=>{const r=await q();v(r,(()=>{x({...h(),otp:!0}),e()}))};return c(f,{get loading(){return r()},get children(){return c(i,{get when(){return _()},get children(){return c(o,{spacing:"$2",alignItems:"start",get children(){return[c(g,{get children(){return $("users.scan_qr")}}),c(d,{boxSize:"$xs",rounded:"$lg",get src(){return _()?.qr}}),c(l,{maxW:"$xs",get placeholder(){return $("users.input_code")},get value(){return k()},onInput:e=>m(e.currentTarget.value),onKeyDown:e=>{"Enter"===e.key&&S()}}),c(y,{get loading(){return I()},onClick:S,get children(){return $("users.verify")}})]}})}})}})}))}}}));
