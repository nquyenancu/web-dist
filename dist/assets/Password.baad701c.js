import{d as i,u,f as e,bf as c,I as g,_ as p,N as d,bQ as m,a2 as o,bg as h,aP as a,B as s,V as f}from"./index.8bc00b61.js";import{a as $}from"./Layout.8dcaea2c.js";import{L as b}from"./index.c0406227.js";import"./index.d9a1a3ad.js";import"./Markdown.d43c3108.js";import"./api.29ecced1.js";import"./useUtil.40d80b61.js";import"./index.36258acc.js";import"./FolderTree.01224a89.js";const x=()=>{const t=i(),{refresh:n}=$(),{back:l}=u();return e(f,{w:{"@initial":"$full","@md":"$lg"},p:"$8",spacing:"$3",alignItems:"start",get children(){return[e(c,{get children(){return t("home.input_password")}}),e(g,{type:"password",get value(){return p()},get background(){return d("$neutral3","$neutral2")()},onKeyDown:r=>{r.key==="Enter"&&n(!0)},onInput:r=>m(r.currentTarget.value)}),e(o,{w:"$full",justifyContent:"space-between",get children(){return[e(h,{fontSize:"$sm",color:"$neutral10",direction:{"@initial":"column","@sm":"row"},columnGap:"$1",get children(){return[e(a,{get children(){return t("global.have_account")}}),e(a,{color:"$info9",as:b,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return t("global.go_login")}})]}}),e(o,{spacing:"$2",get children(){return[e(s,{colorScheme:"neutral",onClick:l,get children(){return t("global.back")}}),e(s,{onClick:()=>n(!0),get children(){return t("global.ok")}})]}})]}})]}})};export{x as default};
