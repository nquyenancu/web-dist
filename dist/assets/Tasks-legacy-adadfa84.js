System.register(["./index-legacy-137abe7a.js"],(function(e,r){"use strict";var t,n,l,c,a,s,o,i,d,u,g,$,h,w,b,m,p,f,k,y,v;return{setters:[e=>{t=e.d,n=e.a,l=e.b4,c=e.r,a=e.j,s=e.c4,o=e.W,i=e.a3,d=e.bd,u=e.ba,g=e.y,$=e.bx,h=e.by,w=e.B,b=e.bb,m=e.n,p=e.bv,f=e.E,k=e.av,y=e.a8,v=e.m}],execute:function(){const r={errored:"danger",succeeded:"success",canceled:"neutral"},x=e=>{const n=t();return a(p,{get colorScheme(){return r[e.state]??"info"},get children(){return n(`tasks.${e.state}`)}})},C=e=>{const r=t(),p="undone"===e.done?"cancel":"delete",[f,k]=n((()=>l.post(`/admin/task/${e.type}/${p}?tid=${e.id}`))),[y,v]=c(!1);return a(g,{get when(){return!y()},get children(){return a(s,{get bgColor(){return o("$background","$neutral3")()},w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[a(i,{w:"$full",alignItems:"start",spacing:"$1",get children(){return[a(d,{size:"sm",css:{wordBreak:"break-all"},get children(){return e.name}}),a(x,{get state(){return e.state}}),a(u,{css:{wordBreak:"break-all"},get children(){return e.status}}),a(g,{get when(){return e.error},get children(){return a(u,{color:"$danger9",css:{wordBreak:"break-all"},get children(){return e.error}})}}),a($,{w:"$full",trackColor:"$info3",rounded:"$full",size:"sm",get value(){return e.progress},get children(){return a(h,{color:"$info8",rounded:"$md"})}})]}}),a(s,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return a(w,{colorScheme:"danger",get loading(){return f()},onClick:async()=>{const e=await k();b(e,(()=>{m.success(r("global.delete_success")),v(!0)}))},get children(){return r(`global.${p}`)}})}})]}})}})},I=e=>{const r=t(),[s,o]=n((()=>l.get(`/admin/task/${e.type}/${e.done}`))),[u,$]=c([]),h=async()=>{const e=await o();b(e,(e=>$(e?.sort(((e,r)=>e.id>r.id?1:-1))??[])))};if(h(),"undone"===e.done){const e=setInterval(h,2e3);k((()=>clearInterval(e)))}const[m,p]=n((()=>l.post(`/admin/task/${e.type}/clear_done`)));return a(i,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[a(d,{size:"lg",get children(){return r(`tasks.${e.done}`)}}),a(g,{get when(){return"done"===e.done},get children(){return a(y,{spacing:"$2",get children(){return[a(w,{colorScheme:"accent",get loading(){return s()},onClick:h,get children(){return r("global.refresh")}}),a(w,{get loading(){return m()},onClick:async()=>{const e=await p();b(e,(()=>h()))},get children(){return r("global.clear")}})]}})}}),a(i,{w:"$full",spacing:"$2",get children(){return a(f,{get each(){return u()},children:r=>a(C,v(r,e))})}})]}})};e("T",(e=>{const r=t();return a(i,{w:"$full",alignItems:"start",spacing:"$4",get children(){return[a(d,{size:"xl",get children(){return r(`tasks.${e.type}`)}}),a(i,{w:"$full",spacing:"$2",get children(){return a(f,{each:["undone","done"],children:r=>a(I,{get type(){return e.type},done:r})})}})]}})}))}}}));
