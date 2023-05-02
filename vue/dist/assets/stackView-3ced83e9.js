import{d as K,u as re,g as V,_ as Ce,c as n,a as te,P as Q,D as ye,f as we,w as Le,b as Ue,e as Ke,h as _e,M as ne,i as qe,j as Ge,F as ae,k as He,r as Je,o as h,l as j,m as l,n as e,p as T,q as C,t as I,s as W,v as We,x as Qe,y as N,z as S,A as J,B as Z,C as Xe,E as Ye,S as be,G as Ze,H as ke,I as ee,J as et,K as tt,L as nt,N as at,O as ot}from"./index-62215747.js";import{D as he,S as L,s as rt,u as st,a as lt,b as it,c as ut,d as ct,e as dt,f as pt,g as mt,h as vt,i as ft,j as _t,k as bt,t as kt,L as gt,R as Ct,l as yt}from"./fullScreenContextMenu-d6d43f55.js";import{F as R,_ as wt}from"./index-31780cac.js";import"./index-6c7c2318.js";import"./index-84a2615e.js";import{I as ht}from"./index-f9795184.js";import{M as xe}from"./db-1efd3e30.js";import{B as xt}from"./button-c0dd7c13.js";import"./_baseIteratee-0a2f7515.js";var It=["class","style"],Mt=function(){return{prefixCls:String,href:String,separator:Q.any,overlay:Q.any,onClick:Function}};const U=K({compatConfig:{MODE:3},name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:Mt(),slots:["separator","overlay"],setup:function(t,b){var i=b.slots,c=b.attrs,k=re("breadcrumb",t),v=k.prefixCls,d=function(y,u){var s=V(i,t,"overlay");return s?n(he,{overlay:s,placement:"bottom"},{default:function(){return[n("span",{class:"".concat(u,"-overlay-link")},[y,n(ye,null,null)])]}}):y};return function(){var x,y=(x=V(i,t,"separator"))!==null&&x!==void 0?x:"/",u=V(i,t),s=c.class,p=c.style,m=Ce(c,It),f;return t.href!==void 0?f=n("a",te({class:"".concat(v.value,"-link"),onClick:t.onClick},m),[u]):f=n("span",te({class:"".concat(v.value,"-link"),onClick:t.onClick},m),[u]),f=d(f,v.value),u?n("span",{class:s,style:p},[f,y&&n("span",{class:"".concat(v.value,"-separator")},[y])]):null}}});var St=function(){return{prefixCls:String,routes:{type:Array},params:Q.any,separator:Q.any,itemRender:{type:Function}}};function Pt(r,t){if(!r.breadcrumbName)return null;var b=Object.keys(t).join("|"),i=r.breadcrumbName.replace(new RegExp(":(".concat(b,")"),"g"),function(c,k){return t[k]||c});return i}function ge(r){var t=r.route,b=r.params,i=r.routes,c=r.paths,k=i.indexOf(t)===i.length-1,v=Pt(t,b);return k?n("span",null,[v]):n("a",{href:"#/".concat(c.join("/"))},[v])}const z=K({compatConfig:{MODE:3},name:"ABreadcrumb",props:St(),slots:["separator","itemRender"],setup:function(t,b){var i=b.slots,c=re("breadcrumb",t),k=c.prefixCls,v=c.direction,d=function(s,p){return s=(s||"").replace(/^\//,""),Object.keys(p).forEach(function(m){s=s.replace(":".concat(m),p[m])}),s},x=function(s,p,m){var f=qe(s),w=d(p||"",m);return w&&f.push(w),f},y=function(s){var p=s.routes,m=p===void 0?[]:p,f=s.params,w=f===void 0?{}:f,D=s.separator,$=s.itemRender,E=$===void 0?ge:$,F=[];return m.map(function(g){var M=d(g.path,w);M&&F.push(M);var O=[].concat(F),A=null;return g.children&&g.children.length&&(A=n(ne,null,{default:function(){return[g.children.map(function(B){return n(ne.Item,{key:B.path||B.breadcrumbName},{default:function(){return[E({route:B,params:w,routes:m,paths:x(O,B.path,w)})]}})})]}})),n(U,{overlay:A,separator:D,key:M||g.breadcrumbName},{default:function(){return[E({route:g,params:w,routes:m,paths:O})]}})})};return function(){var u,s,p,m=t.routes,f=t.params,w=f===void 0?{}:f,D=we(V(i,t)),$=(u=V(i,t,"separator"))!==null&&u!==void 0?u:"/",E=t.itemRender||i.itemRender||ge;m&&m.length>0?p=y({routes:m,params:w,separator:$,itemRender:E}):D.length&&(p=D.map(function(g,M){return Le(Ue(g.type)==="object"&&(g.type.__ANT_BREADCRUMB_ITEM||g.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Ke(g,{separator:$,key:M})}));var F=(s={},_e(s,k.value,!0),_e(s,"".concat(k.value,"-rtl"),v.value==="rtl"),s);return n("div",{class:F},[p])}}});var Rt=["separator","class"],$t=function(){return{prefixCls:String}};const oe=K({compatConfig:{MODE:3},name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:$t(),setup:function(t,b){var i=b.slots,c=b.attrs,k=re("breadcrumb",t),v=k.prefixCls;return function(){var d;c.separator;var x=c.class,y=Ce(c,Rt),u=we((d=i.default)===null||d===void 0?void 0:d.call(i));return n("span",te({class:["".concat(v.value,"-separator"),x]},y),[u.length>0?u:"/"])}}});z.Item=U;z.Separator=oe;z.install=function(r){return r.component(z.name,z),r.component(U.name,U),r.component(oe.name,oe),r};R.useInjectFormItemContext=Ge;R.ItemRest=ae;R.install=function(r){return r.component(R.name,R),r.component(R.Item.name,R.Item),r.component(ae.name,ae),r};L.setDefaultIndicator=rt;L.install=function(r){return r.component(L.name,L),r};const At=K({__name:"folderNavigator",props:{loc:null},emits:["to"],setup(r,{emit:t}){const b=r,i=He(()=>b.loc),c=Je(!1),k=()=>{c.value=!1,t("to",i.value)};return(v,d)=>{const x=ht,y=xe;return h(),j(W,null,[n(y,{visible:c.value,"onUpdate:visible":d[1]||(d[1]=u=>c.value=u),title:v.$t("inputAddressAndPressEnter"),onOk:k},{default:l(()=>[n(x,{onPressEnter:k,value:e(i),"onUpdate:value":d[0]||(d[0]=u=>T(i)?i.value=u:null),style:{width:"100%"},"allow-clear":""},null,8,["value"])]),_:1},8,["visible","title"]),C("a",{style:{"margin-left":"8px"},onClick:d[2]||(d[2]=u=>c.value=!0)},I(v.$t("go")),1)],64)}}}),Bt={class:"hint"},Nt={class:"location-bar"},Dt={class:"breadcrumb"},Et=["onClick"],Ft={class:"actions"},Ot=["onClick"],jt={style:{width:"512px",background:"var(--zp-primary-background)",padding:"16px","border-radius":"4px","box-shadow":"0 0 4px var(--zp-secondary-background)",border:"1px solid var(--zp-secondary-background)"}},Tt={key:0,class:"view"},zt={key:0,class:"preview-switch"},Vt=K({__name:"stackView",props:{tabIdx:null,paneIdx:null,path:null,walkMode:{type:Boolean},stackKey:null},setup(r){const t=r,b=We(),{scroller:i,walkModePath:c,stackViewEl:k,props:v,multiSelectedIdxs:d,spinning:x}=st().toRefs(),{currLocation:y,currPage:u,refresh:s,copyLocation:p,back:m,openNext:f,stack:w,to:D,quickMoveTo:$}=lt(t),{gridItems:E,sortMethodConv:F,moreActionsDropdownShow:g,sortedFiles:M,sortMethod:O,viewMode:A,viewModeMap:q,itemSize:B,loadNextDir:se,loadNextDirLoading:Ie,canLoadNext:Me,onScroll:Se}=it(t),{onDrop:Pe,onFileDragStart:Re}=ut(),{onFileItemClick:$e,onContextMenuClick:le,showGenInfo:G,imageGenInfo:ie,q:Ae}=ct(t,{openNext:f}),{previewIdx:H,onPreviewVisibleChange:Be,previewing:ue,previewImgMove:ce,canPreview:de}=dt(t),{showMenuIdx:X}=pt();return Qe(()=>t,()=>{v.value=t,t.walkMode&&(c.value=t.path);const _=mt.get(t.stackKey??"");_&&(w.value=_.slice())},{immediate:!0}),(_,o)=>{const Ne=et,De=tt,Ee=xe,pe=U,me=z,Fe=nt,Oe=at,je=ne,ve=he,Y=wt,Te=R,ze=xt,Ve=L;return h(),N(Ve,{spinning:e(x),size:"large"},{default:l(()=>[n(Ne,{style:{display:"none"}}),C("div",{ref_key:"stackViewEl",ref:k,onDragover:o[15]||(o[15]=S(()=>{},["prevent"])),onDrop:o[16]||(o[16]=S(a=>e(Pe)(a),["prevent"])),class:"container"},[n(Ee,{visible:e(G),"onUpdate:visible":o[1]||(o[1]=a=>T(G)?G.value=a:null),width:"70vw","mask-closable":"",onOk:o[2]||(o[2]=a=>G.value=!1)},{cancelText:l(()=>[]),default:l(()=>[n(De,{active:"",loading:!e(Ae).isIdle},{default:l(()=>[C("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto","z-index":"9999"},onDblclick:o[0]||(o[0]=a=>e(vt)(e(ie),"copied"))},[C("div",Bt,I(_.$t("doubleClickToCopy")),1),J(" "+I(e(ie)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),C("div",Nt,[C("div",Dt,[t.walkMode?(h(),N(Fe,{key:0},{title:l(()=>[J(I(_.$t("walk-mode-move-message")),1)]),default:l(()=>[n(me,{style:{flex:"1"}},{default:l(()=>[(h(!0),j(W,null,Z(e(w),(a,P)=>(h(),N(pe,{key:P},{default:l(()=>[C("span",null,I(a.curr==="/"?_.$t("root"):a.curr.replace(/:\/$/,_.$t("drive"))),1)]),_:2},1024))),128))]),_:1})]),_:1})):(h(),N(me,{key:1,style:{flex:"1"}},{default:l(()=>[(h(!0),j(W,null,Z(e(w),(a,P)=>(h(),N(pe,{key:P},{default:l(()=>[C("a",{onClick:S(fe=>e(m)(P),["prevent"])},I(a.curr==="/"?_.$t("root"):a.curr.replace(/:\/$/,_.$t("drive"))),9,Et)]),_:2},1024))),128))]),_:1}))]),C("div",Ft,[C("a",{class:"opt",onClick:o[3]||(o[3]=S((...a)=>e(s)&&e(s)(...a),["prevent"]))},I(_.$t("refresh")),1),n(ve,null,{overlay:l(()=>[n(je,null,{default:l(()=>[(h(!0),j(W,null,Z(e(b).autoCompletedDirList,a=>(h(),N(Oe,{key:a.dir},{default:l(()=>[C("a",{onClick:S(P=>e($)(a.dir),["prevent"])},I(a.zh),9,Ot)]),_:2},1024))),128))]),_:1})]),default:l(()=>[C("a",{class:"opt",onClick:o[4]||(o[4]=S(()=>{},["prevent"]))},[J(I(_.$t("quickMove"))+" ",1),n(e(ye))])]),_:1}),n(ve,{trigger:["click"],visible:e(g),"onUpdate:visible":o[11]||(o[11]=a=>T(g)?g.value=a:null),placement:"bottomLeft",getPopupContainer:a=>a.parentNode},{overlay:l(()=>[C("div",jt,[n(Te,Xe(Ye({labelCol:{span:6},wrapperCol:{span:18}})),{default:l(()=>[n(Y,{label:_.$t("viewMode")},{default:l(()=>[n(e(be),{value:e(A),"onUpdate:value":o[6]||(o[6]=a=>T(A)?A.value=a:null),onClick:o[7]||(o[7]=S(()=>{},["stop"])),conv:{value:a=>a,text:a=>e(q)[a]},options:Object.keys(e(q))},null,8,["value","conv","options"])]),_:1},8,["label"]),n(Y,{label:_.$t("sortingMethod")},{default:l(()=>[n(e(be),{value:e(O),"onUpdate:value":o[8]||(o[8]=a=>T(O)?O.value=a:null),onClick:o[9]||(o[9]=S(()=>{},["stop"])),conv:e(F),options:Object.keys(e(ft))},null,8,["value","conv","options"])]),_:1},8,["label"]),n(Y,null,{default:l(()=>[C("a",{onClick:o[10]||(o[10]=S((...a)=>e(p)&&e(p)(...a),["prevent"]))},I(_.$t("copyPath")),1),n(At,{loc:e(y),onTo:e(D)},null,8,["loc","onTo"])]),_:1})]),_:1},16)])]),default:l(()=>[C("a",{class:"opt",onClick:o[5]||(o[5]=S(()=>{},["prevent"]))},I(_.$t("more")),1)]),_:1},8,["visible","getPopupContainer"])])]),e(u)?(h(),j("div",Tt,[n(e(_t),{class:"file-list",items:e(M),ref_key:"scroller",ref:i,onScroll:e(Se),"item-size":e(B).first,"key-field":"fullpath","item-secondary-size":e(B).second,gridItems:e(E)},Ze({default:l(({item:a,index:P})=>[n(bt,{idx:P,file:a,"full-screen-preview-image-url":e(M)[e(H)]?e(kt)(e(M)[e(H)]):"","show-menu-idx":e(X),"onUpdate:showMenuIdx":o[12]||(o[12]=fe=>T(X)?X.value=fe:null),selected:e(d).includes(P),"view-mode":e(A),onFileItemClick:e($e),onDragstart:e(Re),onPreviewVisibleChange:e(Be),onContextMenuClick:e(le)},null,8,["idx","file","full-screen-preview-image-url","show-menu-idx","selected","view-mode","onFileItemClick","onDragstart","onPreviewVisibleChange","onContextMenuClick"])]),_:2},[t.walkMode?{name:"after",fn:l(()=>[n(ze,{onClick:e(se),loading:e(Ie),block:"",type:"primary",disabled:!e(Me),ghost:""},{default:l(()=>[J(I(_.$t("loadNextPage")),1)]),_:1},8,["onClick","loading","disabled"])]),key:"0"}:void 0]),1032,["items","onScroll","item-size","item-secondary-size","gridItems"]),e(ue)?(h(),j("div",zt,[n(e(gt),{onClick:o[13]||(o[13]=a=>e(ce)("prev")),class:ke({disable:!e(de)("prev")})},null,8,["class"]),n(e(Ct),{onClick:o[14]||(o[14]=a=>e(ce)("next")),class:ke({disable:!e(de)("next")})},null,8,["class"])])):ee("",!0)])):ee("",!0)],544),e(ue)?(h(),N(yt,{key:0,file:e(M)[e(H)],idx:e(H),onContextMenuClick:e(le)},null,8,["file","idx","onContextMenuClick"])):ee("",!0)]),_:1},8,["spinning"])}}});const Xt=ot(Vt,[["__scopeId","data-v-73715793"]]);export{Xt as default};