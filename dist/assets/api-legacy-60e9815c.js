System.register(["./index-legacy-137abe7a.js"],(function(e,t){"use strict";var s,a;return{setters:[e=>{s=e.b4,a=e.b}],execute:function(){e("f",((e="/",t="")=>s.post("/fs/get",{path:e,password:t}))),e("a",((e="/",t="",a=1,p=0,o=!1,r)=>s.post("/fs/list",{path:e,password:t,page:a,per_page:p,refresh:o},{cancelToken:r}))),e("j",((e="/",t="",a=!1)=>s.post("/fs/dirs",{path:e,password:t,force_root:a}))),e("i",(e=>s.post("/fs/mkdir",{path:e}))),e("g",((e,t)=>s.post("/fs/rename",{path:e,name:t}))),e("d",((e,t,a)=>s.post("/fs/move",{src_dir:e,dst_dir:t,names:a}))),e("c",((e,t,a)=>s.post("/fs/copy",{src_dir:e,dst_dir:t,names:a}))),e("e",((e,t)=>s.post("/fs/remove",{dir:e,names:t}))),e("h",((e,t)=>s.put("/fs/put",void 0,{headers:{"File-Path":encodeURIComponent(e),Password:t}}))),e("o",((e,t,a)=>s.post(`/fs/add_${a}`,{path:e,urls:t})));const t=e("b",(async(e,s=!0)=>{try{const t=await a.get(e,{responseType:"blob",params:s?{ts:(new Date).getTime()}:void 0}),p=await t.data.text();return{content:p,contentType:t.headers["content-type"]}}catch(p){return s?await t(e,!1):{content:`Failed to fetch ${e}: ${p}`,contentType:""}}}));e("k",(async(e,t,a="",p=1,o=100)=>s.post("/fs/search",{parent:e,keywords:t,page:p,per_page:o,password:a}))),e("l",(async(e=["/"],t=-1)=>s.post("/admin/index/build",{paths:e,max_depth:t}))),e("u",(async(e=[],t=-1)=>s.post("/admin/index/update",{paths:e,max_depth:t})))}}}));
