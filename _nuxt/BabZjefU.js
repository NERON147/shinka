import{B as t,d as s}from"./B7rFwOFT.js";import{z as l,A as n,E as a,B as o,q as r}from"./TXeigpji.js";var p={root:"p-toolbar p-component",start:"p-toolbar-group-start p-toolbar-group-left",center:"p-toolbar-group-center",end:"p-toolbar-group-end p-toolbar-group-right"},d=t.extend({name:"toolbar",classes:p}),i={name:"BaseToolbar",extends:s,props:{ariaLabelledby:{type:String,default:null}},style:d,provide:function(){return{$parentInstance:this}}},b={name:"Toolbar",extends:i,inheritAttrs:!1},c=["aria-labelledby"];function m(e,u,v,$,f,g){return l(),n("div",r({class:e.cx("root"),role:"toolbar","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[a("div",r({class:e.cx("start")},e.ptm("start")),[o(e.$slots,"start")],16),a("div",r({class:e.cx("center")},e.ptm("center")),[o(e.$slots,"center")],16),a("div",r({class:e.cx("end")},e.ptm("end")),[o(e.$slots,"end")],16)],16,c)}b.render=m;export{b as default};
