System.register(["./index-legacy-137abe7a.js","./Folder-legacy-b9ce713a.js","./Layout-legacy-538e21c7.js","./useUtil-legacy-c53d5ca8.js","./index-legacy-3947c086.js","./ImageWithError-legacy-0de227ee.js","./icon-legacy-77913071.js","./index-legacy-acfce738.js","./api-legacy-60e9815c.js","./index-legacy-aff400bf.js","./FolderTree-legacy-b3ed59d4.js"],(function(e,t){"use strict";var r,a,n,l,o,i,c,s,u,g,d,b,j,h,f,m,p,y,x,$,w,k,v,C,E,M,z,S;return{setters:[e=>{r=e.j,a=e.ad,n=e.am,l=e.r,o=e.C,i=e.aH,c=e.a3,s=e.K,u=e.aG,g=e.aJ,d=e.cj,b=e.ao,j=e.al,h=e.y,f=e.bt,m=e.ak,p=e.ba,y=e.E,x=e.o,$=e.bZ},e=>{w=e.b},e=>{k=e.a,v=e.M},e=>{C=e.c},e=>{E=e.n},e=>{M=e.I},e=>{z=e.g,S=e.O},()=>{},()=>{},()=>{},()=>{}],execute:function(){const t=e=>{const{isHide:t}=C();if(t(e.obj))return null;const{setPathAs:y}=k(),x=r(n,{get color(){return a()},boxSize:"$12",get as(){return z(e.obj)}}),[$,A]=l(!1),H=o((()=>i()&&($()||e.obj.selected))),{show:I}=w({id:1});return r(v.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return r(c,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:s()}},as:E,get href(){return e.obj.name},onMouseEnter:()=>{A(!0),y(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{A(!1)},onContextMenu:t=>{u((()=>{g(!1),d(e.index,!0,!0)})),I(t,{props:e.obj})},get children(){return[r(b,{class:"item-thumbnail",h:"15px",w:"$full","on:click":t=>{e.obj.type===S.IMAGE&&(t.stopPropagation(),t.preventDefault(),j.emit("gallery",e.obj.name))},pos:"relative",get children(){return[r(h,{get when(){return H()},get children(){return r(f,{pos:"absolute",left:"$1",top:"$1","on:click":e=>{e.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{d(e.index,t.target.checked)}})}}),r(h,{get when(){return e.obj.thumb},fallback:x,get children(){return r(M,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return r(m,{size:"lg"})},fallbackErr:x,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),r(p,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})};e("default",(()=>r($,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(150px,1fr))",get children(){return r(y,{get each(){return x.objs},children:(e,a)=>r(t,{obj:e,get index(){return a()}})})}})))}}}));
