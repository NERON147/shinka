import{s as n}from"./B-ZM2O-w.js";import{B as s}from"./DiCHpaiP.js";import{z as o,A as a,q as l}from"./CxN6mAk7.js";var p={root:{position:"relative"}},d={root:function(r){var t=r.props;return["p-skeleton p-component",{"p-skeleton-circle":t.shape==="circle","p-skeleton-none":t.animation==="none"}]}},u=s.extend({name:"skeleton",classes:d,inlineStyles:p}),c={name:"BaseSkeleton",extends:n,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:u,provide:function(){return{$parentInstance:this}}},h={name:"Skeleton",extends:c,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function m(e,r,t,f,S,i){return o(),a("div",l({class:e.cx("root"),style:[e.sx("root"),i.containerStyle],"aria-hidden":"true"},e.ptmi("root")),null,16)}h.render=m;export{h as default};