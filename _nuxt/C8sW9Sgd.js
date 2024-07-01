import{B as h,U as c,D as n,d as f}from"./B7rFwOFT.js";import{z as m,A as p,E as u,q as a,B as b}from"./TXeigpji.js";var v={root:"p-scrollpanel p-component",wrapper:"p-scrollpanel-wrapper",content:"p-scrollpanel-content",barx:"p-scrollpanel-bar p-scrollpanel-bar-x",bary:"p-scrollpanel-bar p-scrollpanel-bar-y"},g=h.extend({name:"scrollpanel",classes:v}),B={name:"BaseScrollPanel",extends:f,props:{step:{type:Number,default:5}},style:g,provide:function(){return{$parentInstance:this}}},y={name:"ScrollPanel",extends:B,inheritAttrs:!1,initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,timer:null,outsideClickListener:null,data:function(){return{id:this.$attrs.id,orientation:"vertical",lastScrollTop:0,lastScrollLeft:0}},watch:{"$attrs.id":function(e){this.id=e||c()}},mounted:function(){this.id=this.id||c(),this.$el.offsetParent&&this.initialize()},updated:function(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeUnmount:function(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize:function(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight:function(){var e=getComputedStyle(this.$el),r=getComputedStyle(this.$refs.xBar),i=n.getHeight(this.$el)-parseInt(r.height,10);e["max-height"]!=="none"&&i===0&&(this.$refs.content.offsetHeight+parseInt(r.height,10)>parseInt(e["max-height"],10)?this.$el.style.height=e["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},moveBar:function(){var e=this;if(this.$refs.content){var r=this.$refs.content.scrollWidth,i=this.$refs.content.clientWidth,l=(this.$el.clientHeight-this.$refs.xBar.clientHeight)*-1;this.scrollXRatio=i/r;var s=this.$refs.content.scrollHeight,o=this.$refs.content.clientHeight,d=(this.$el.clientWidth-this.$refs.yBar.clientWidth)*-1;this.scrollYRatio=o/s,this.frame=this.requestAnimationFrame(function(){e.scrollXRatio>=1?(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&n.addClass(e.$refs.xBar,"p-scrollpanel-hidden")):(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&n.removeClass(e.$refs.xBar,"p-scrollpanel-hidden"),e.$refs.xBar.style.cssText="width:"+Math.max(e.scrollXRatio*100,10)+"%; left:"+e.$refs.content.scrollLeft/r*100+"%;bottom:"+l+"px;"),e.scrollYRatio>=1?(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&n.addClass(e.$refs.yBar,"p-scrollpanel-hidden")):(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&n.removeClass(e.$refs.yBar,"p-scrollpanel-hidden"),e.$refs.yBar.style.cssText="height:"+Math.max(e.scrollYRatio*100,10)+"%; top: calc("+e.$refs.content.scrollTop/s*100+"% - "+e.$refs.xBar.clientHeight+"px);right:"+d+"px;")})}},onYBarMouseDown:function(e){this.isYBarClicked=!0,this.$refs.yBar.focus(),this.lastPageY=e.pageY,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&n.addClass(this.$refs.yBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&n.addClass(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onXBarMouseDown:function(e){this.isXBarClicked=!0,this.$refs.xBar.focus(),this.lastPageX=e.pageX,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&n.addClass(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&n.addClass(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onScroll:function(e){this.lastScrollLeft!==e.target.scrollLeft?(this.lastScrollLeft=e.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==e.target.scrollTop&&(this.lastScrollTop=e.target.scrollTop,this.orientation="vertical"),this.moveBar()},onKeyDown:function(e){if(this.orientation==="vertical")switch(e.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),e.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}}else if(this.orientation==="horizontal")switch(e.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),e.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}}},onKeyUp:function(){this.clearTimer()},repeat:function(e,r){this.$refs.content[e]+=r,this.moveBar()},setTimer:function(e,r){var i=this;this.clearTimer(),this.timer=setTimeout(function(){i.repeat(e,r)},40)},clearTimer:function(){this.timer&&clearTimeout(this.timer)},onDocumentMouseMove:function(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))},onMouseMoveForXBar:function(e){var r=this,i=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.frame=this.requestAnimationFrame(function(){r.$refs.content.scrollLeft+=i/r.scrollXRatio})},onMouseMoveForYBar:function(e){var r=this,i=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.frame=this.requestAnimationFrame(function(){r.$refs.content.scrollTop+=i/r.scrollYRatio})},onFocus:function(e){this.$refs.xBar.isSameNode(e.target)?this.orientation="horizontal":this.$refs.yBar.isSameNode(e.target)&&(this.orientation="vertical")},onBlur:function(){this.orientation==="horizontal"&&(this.orientation="vertical")},onDocumentMouseUp:function(){this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&n.removeClass(this.$refs.yBar,"p-scrollpanel-grabbed"),this.$refs.xBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&n.removeClass(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&n.removeClass(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame:function(e){var r=window.requestAnimationFrame||this.timeoutFrame;return r(e)},refresh:function(){this.moveBar()},scrollTop:function(e){var r=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;e=e>r?r:e>0?e:0,this.$refs.content.scrollTop=e},timeoutFrame:function(e){setTimeout(e,0)},bindDocumentMouseListeners:function(){var e=this;this.documentMouseMoveListener||(this.documentMouseMoveListener=function(r){e.onDocumentMouseMove(r)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=function(r){e.onDocumentMouseUp(r)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}},computed:{contentId:function(){return this.id+"_content"}}},M=["id"],L=["aria-controls","aria-valuenow"],w=["aria-controls","aria-valuenow"];function D(t,e,r,i,l,s){return m(),p("div",a({class:t.cx("root")},t.ptmi("root")),[u("div",a({class:t.cx("wrapper")},t.ptm("wrapper")),[u("div",a({ref:"content",id:s.contentId,class:t.cx("content"),onScroll:e[0]||(e[0]=function(){return s.onScroll&&s.onScroll.apply(s,arguments)}),onMouseenter:e[1]||(e[1]=function(){return s.moveBar&&s.moveBar.apply(s,arguments)})},t.ptm("content")),[b(t.$slots,"default")],16,M)],16),u("div",a({ref:"xBar",class:t.cx("barx"),tabindex:"0",role:"scrollbar","aria-orientation":"horizontal","aria-controls":s.contentId,"aria-valuenow":l.lastScrollLeft,onMousedown:e[2]||(e[2]=function(){return s.onXBarMouseDown&&s.onXBarMouseDown.apply(s,arguments)}),onKeydown:e[3]||(e[3]=function(o){return s.onKeyDown(o)}),onKeyup:e[4]||(e[4]=function(){return s.onKeyUp&&s.onKeyUp.apply(s,arguments)}),onFocus:e[5]||(e[5]=function(){return s.onFocus&&s.onFocus.apply(s,arguments)}),onBlur:e[6]||(e[6]=function(){return s.onBlur&&s.onBlur.apply(s,arguments)})},t.ptm("barx"),{"data-pc-group-section":"bar"}),null,16,L),u("div",a({ref:"yBar",class:t.cx("bary"),tabindex:"0",role:"scrollbar","aria-orientation":"vertical","aria-controls":s.contentId,"aria-valuenow":l.lastScrollTop,onMousedown:e[7]||(e[7]=function(){return s.onYBarMouseDown&&s.onYBarMouseDown.apply(s,arguments)}),onKeydown:e[8]||(e[8]=function(o){return s.onKeyDown(o)}),onKeyup:e[9]||(e[9]=function(){return s.onKeyUp&&s.onKeyUp.apply(s,arguments)}),onFocus:e[10]||(e[10]=function(){return s.onFocus&&s.onFocus.apply(s,arguments)})},t.ptm("bary"),{"data-pc-group-section":"bar"}),null,16,w)],16)}y.render=D;export{y as default};
