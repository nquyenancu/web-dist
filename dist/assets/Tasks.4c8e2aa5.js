import{d as y,a as o,b7 as d,e as C,f as e,c9 as P,N as M,V as g,bf as T,aP as z,m,bz as V,bA as F,B as i,bd as u,n as B,bx as H,x as I,at as N,w as j,a2 as q,aq as A}from"./index.8bc00b61.js";import{P as X}from"./Paginator.caa45e85.js";const E={errored:"danger",succeeded:"success",canceled:"neutral"},G=t=>{const r=y();return e(H,{get colorScheme(){var a;return(a=E[t.state])!=null?a:"info"},get children(){return r(`tasks.${t.state}`)}})},J=t=>{const r=y(),a=t.done==="undone"?"cancel":"delete",h=t.done==="done"&&t.state==="errored",[$,f]=o(()=>d.post(`/admin/task/${t.type}/${a}?tid=${t.id}`)),[s,w]=o(()=>d.post(`/admin/task/${t.type}/retry?tid=${t.id}`)),[b,k]=C(!1);return e(m,{get when(){return!b()},get children(){return e(P,{get bgColor(){return M("$background","$neutral3")()},w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[e(g,{w:"$full",alignItems:"start",spacing:"$1",get children(){return[e(T,{size:"sm",css:{wordBreak:"break-all"},get children(){return t.name}}),e(G,{get state(){return t.state}}),e(z,{css:{wordBreak:"break-all"},get children(){return t.status}}),e(m,{get when(){return t.error},get children(){return e(z,{color:"$danger9",css:{wordBreak:"break-all"},get children(){return t.error}})}}),e(V,{w:"$full",trackColor:"$info3",rounded:"$full",size:"sm",get value(){return t.progress},get children(){return e(F,{color:"$info8",rounded:"$md"})}})]}}),e(P,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return[e(m,{get when(){return t.canRetry},get children(){return e(i,{disabled:!h,display:h?"block":"none",get loading(){return s()},onClick:async()=>{const c=await w();u(c,()=>{B.info(r("tasks.retry")),k(!0)})},get children(){return r("tasks.retry")}})}}),e(i,{colorScheme:"danger",get loading(){return $()},onClick:async()=>{const c=await f();u(c,()=>{B.success(r("global.delete_success")),k(!0)})},get children(){return r(`global.${a}`)}})]}})]}})}})},K=t=>{const r=y(),[a,h]=o(()=>d.get(`/admin/task/${t.type}/${t.done}`)),[$,f]=C([]),s=async()=>{const n=await h();u(n,l=>{var x;return f((x=l==null?void 0:l.sort((_,D)=>_.id>D.id?1:-1))!=null?x:[])})};if(s(),t.done==="undone"){const n=setInterval(s,2e3);N(()=>clearInterval(n))}const[w,b]=o(()=>d.post(`/admin/task/${t.type}/clear_done`)),[k,c]=o(()=>d.post(`/admin/task/${t.type}/clear_succeeded`)),[v,R]=C(1),S=20,L=j(()=>{const n=(v()-1)*S,l=n+S;return $().slice(n,l)});return e(g,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[e(T,{size:"lg",get children(){return r(`tasks.${t.done}`)}}),e(m,{get when(){return t.done==="done"},get children(){return e(q,{spacing:"$2",get children(){return[e(i,{colorScheme:"accent",get loading(){return a()},onClick:s,get children(){return r("global.refresh")}}),e(i,{get loading(){return w()},onClick:async()=>{const n=await b();u(n,()=>s())},get children(){return r("global.clear")}}),e(i,{colorScheme:"success",get loading(){return k()},onClick:async()=>{const n=await c();u(n,()=>s())},get children(){return r("tasks.clear_succeeded")}})]}})}}),e(g,{w:"$full",spacing:"$2",get children(){return e(I,{get each(){return L()},children:n=>e(J,A(n,t))})}}),e(X,{get total(){return $().length},defaultPageSize:S,onChange:n=>{R(n)}})]}})},U=t=>{const r=y();return e(g,{w:"$full",alignItems:"start",spacing:"$4",get children(){return[e(T,{size:"xl",get children(){return r(`tasks.${t.type}`)}}),e(g,{w:"$full",spacing:"$2",get children(){return e(I,{each:["undone","done"],children:a=>e(K,{get type(){return t.type},done:a,get canRetry(){return t.canRetry}})})}})]}})};export{U as T};
