import{d as v,u as $,a as l,b4 as r,bu as C,bM as w,r as I,j as t,bN as R,m as L,bb as o,n as u,a8 as T,B as p,a3 as _}from"./index.cc96c54e.js";import{n as x}from"./index.cb0d7143.js";import{I as B}from"./SettingItem.a170ef57.js";import{R as M}from"./ResponsiveGrid.52d96e6d.js";import"./index.e7719a4c.js";import"./index.90f8e6ff.js";import"./item_type.be442da4.js";const q=d=>{const s=v(),{pathname:m}=$();x(`manage.sidemenu.${m().split("/").pop()}`);const[h,f]=l(()=>r.get(`/admin/setting/list?group=${d.group}`)),[i,c]=C([]),a=async()=>{const e=await f();o(e,c)};a();const[b,S]=l(()=>r.post("/admin/setting/save",w(i))),[k,g]=I(!1);return t(_,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(M,{get children(){return t(R,{each:i,children:(e,j)=>t(B,L(e,{onChange:n=>{c(y=>e().key===y.key,"value",n)},onDelete:async()=>{g(!0);const n=await r.post(`/admin/setting/delete?key=${e().key}`);g(!1),o(n,()=>{u.success(s("global.delete_success")),a()})}}))})}}),t(T,{spacing:"$2",get children(){return[t(p,{colorScheme:"accent",onClick:a,get loading(){return h()||k()},get children(){return s("global.refresh")}}),t(p,{get loading(){return b()},onClick:async()=>{const e=await S();o(e,()=>u.success(s("global.save_success")))},get children(){return s("global.save")}})]}})]}})};export{q as default};
