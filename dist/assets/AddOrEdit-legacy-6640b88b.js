System.register(["./index-legacy-137abe7a.js","./FolderTree-legacy-b3ed59d4.js","./index-legacy-3947c086.js","./api-legacy-60e9815c.js"],(function(e,r){"use strict";var n,t,a,s,i,l,d,u,c,o,g,p,h,m,f,b,w,y,x,$,_,I;return{setters:[e=>{n=e.d,t=e.u,a=e.bu,s=e.a,i=e.b4,l=e.j,d=e.a3,u=e.bd,c=e.y,o=e.a9,g=e.b0,p=e.a_,h=e.I,m=e.be,f=e.E,b=e.as,w=e.bt,y=e.B,x=e.bb,$=e.n,_=e.a6},e=>{I=e.F},()=>{},()=>{}],execute:function(){const r=e=>{const r=n();return l(g,{display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"$2",rounded:"$md",shadow:"$md",p:"$2",w:"fit-content",get children(){return[l(p,{mb:"0",get children(){return r(`users.permissions.${e.name}`)}}),l(w,{get checked(){return e.can},onChange:()=>e.onChange(!e.can)})]}})};e("default",(()=>{const e=n(),{params:v,back:C}=t(),{id:j}=v,[k,q]=a({id:0,username:"",password:"",base_path:"",role:0,permission:0,disabled:!1,github_id:0}),[D,T]=s((()=>i.get(`/admin/user/get?id=${j}`)));j&&(async()=>{const e=await T();x(e,q)})();const[F,S]=s((()=>i.post("/admin/user/"+(j?"update":"create"),k)));return l(_,{get loading(){return D()},get children(){return l(d,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[l(u,{get children(){return e("global."+(j?"edit":"add"))}}),l(c,{get when(){return!o.is_guest(k)},get children(){return[l(g,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[l(p,{for:"username",display:"flex",alignItems:"center",get children(){return e("users.username")}}),l(h,{id:"username",get value(){return k.username},onInput:e=>q("username",e.currentTarget.value)})]}}),l(g,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[l(p,{for:"password",display:"flex",alignItems:"center",get children(){return e("users.password")}}),l(h,{id:"password",type:"password",placeholder:"********",get value(){return k.password},onInput:e=>q("password",e.currentTarget.value)})]}})]}}),l(g,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[l(p,{for:"base_path",display:"flex",alignItems:"center",get children(){return e("users.base_path")}}),l(I,{id:"base_path",get value(){return k.base_path},onChange:e=>q("base_path",e),onlyFolder:!0})]}}),l(g,{w:"$full",required:!0,get children(){return[l(p,{display:"flex",alignItems:"center",get children(){return e("users.permission")}}),l(m,{w:"$full",wrap:"wrap",gap:"$2",get children(){return l(f,{each:b,children:(e,n)=>l(r,{name:e,get can(){return o.can(k,n())},onChange:e=>{q("permission",e?k.permission|=1<<n():k.permission&=~(1<<n()))}})})}})]}}),l(g,{w:"fit-content",display:"flex",get children(){return l(w,{css:{whiteSpace:"nowrap"},id:"disabled",onChange:e=>q("disabled",e.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return k.disabled},get children(){return e("users.disabled")}})}}),l(y,{get loading(){return F()},onClick:async()=>{const r=await S();x(r,(()=>{$.success(e("global.save_success")),C()}))},get children(){return e("global."+(j?"save":"add"))}})]}})}})}))}}}));
