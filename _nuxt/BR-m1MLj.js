import{s as B}from"./DFAn5YVo.js";import{s as v}from"./R2B3SG0u.js";import{B as g}from"./D3OGtAaE.js";import{q as a,z as r,A as s,D as c,X as I,H as h,a5 as l,M as O,a3 as b,L as P,Y as f,Z as w,a6 as M,B as y}from"./CxN6mAk7.js";import"./DoEnBu_r.js";var N={root:"p-breadcrumb p-component",menu:"p-breadcrumb-list",home:"p-breadcrumb-home",separator:"p-menuitem-separator",menuitem:function(n){var t=n.instance;return["p-menuitem",{"p-disabled":t.disabled()}]},action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text"},S=g.extend({name:"breadcrumb",classes:N}),U={name:"BaseBreadcrumb",extends:v,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:S,provide:function(){return{$parentInstance:this}}},k={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:v,props:{item:null,templates:null,index:null},methods:{onClick:function(n){this.item.command&&this.item.command({originalEvent:n,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var n=this.item,t=n.to,m=n.url,o=typeof window<"u"?window.location.pathname:"";return t===o||m===o?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var n=this;return{action:a({class:this.cx("action"),"aria-current":this.isCurrentUrl(),onClick:function(m){return n.onClick(m)}},this.ptm("action",this.ptmOptions)),icon:a({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:a({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},A=["href","target","aria-current"];function D(e,n,t,m,o,i){return i.visible()?(r(),s("li",a({key:0,class:[e.cx("menuitem"),t.item.class]},e.ptm("menuitem",i.ptmOptions)),[t.templates.item?(r(),c(h(t.templates.item),{key:1,item:t.item,label:i.label(),props:i.getMenuItemProps},null,8,["item","label","props"])):(r(),s("a",a({key:0,href:t.item.url||"#",class:e.cx("action"),target:t.item.target,"aria-current":i.isCurrentUrl(),onClick:n[0]||(n[0]=function(){return i.onClick&&i.onClick.apply(i,arguments)})},e.ptm("action",i.ptmOptions)),[t.templates&&t.templates.itemicon?(r(),c(h(t.templates.itemicon),{key:0,item:t.item,class:I(e.cx("icon",i.ptmOptions))},null,8,["item","class"])):t.item.icon?(r(),s("span",a({key:1,class:[e.cx("icon"),t.item.icon]},e.ptm("icon",i.ptmOptions)),null,16)):l("",!0),t.item.label?(r(),s("span",a({key:2,class:e.cx("label")},e.ptm("label",i.ptmOptions)),O(i.label()),17)):l("",!0)],16,A))],16)):l("",!0)}k.render=D;var R={name:"Breadcrumb",extends:U,inheritAttrs:!1,components:{BreadcrumbItem:k,ChevronRightIcon:B}};function V(e,n,t,m,o,i){var p=b("BreadcrumbItem"),C=b("ChevronRightIcon");return r(),s("nav",a({class:e.cx("root")},e.ptmi("root")),[P("ol",a({class:e.cx("menu")},e.ptm("menu")),[e.home?(r(),c(p,a({key:0,item:e.home,class:e.cx("home"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("home")),null,16,["item","class","templates","pt","unstyled"])):l("",!0),(r(!0),s(f,null,w(e.model,function(d,u){return r(),s(f,{key:d.label+"_"+u},[e.home||u!==0?(r(),s("li",a({key:0,class:e.cx("separator")},e.ptm("separator")),[M(e.$slots,"separator",{},function(){return[y(C,a({"aria-hidden":"true"},e.ptm("separatorIcon")),null,16)]})],16)):l("",!0),y(p,{item:d,index:u,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}R.render=V;export{R as default};
