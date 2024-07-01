import{s as z}from"./Bin70mZr.js";import{B as D,U as M,O as m,Z as A,D as b,d as F,R as O}from"./B7rFwOFT.js";import{s as N}from"./CZEYlOjw.js";import{s as T}from"./Dg0OCSkY.js";import{q as c,F as K,G as B,z as l,A as d,D as E,L as g,P as y,W as x,E as P,H as R,J as p,I as w,O as k,aj as G,B as L,U as S,Q as U,_ as H}from"./TXeigpji.js";var q={submenu:function(e){var i=e.instance,s=e.processedItem;return{display:i.isItemActive(s)?"block":"none"}}},j={root:function(e){var i=e.instance;return["p-megamenu p-component",{"p-megamenu-mobile":i.queryMatches,"p-megamenu-mobile-active":i.mobileActive,"p-megamenu-horizontal":i.horizontal,"p-megamenu-vertical":i.vertical}]},start:"p-megamenu-start",menubutton:"p-megamenu-button",menu:"p-megamenu-root-list",submenuHeader:function(e){var i=e.instance,s=e.processedItem;return["p-megamenu-submenu-header p-submenu-header",{"p-disabled":i.isItemDisabled(s)}]},menuitem:function(e){var i=e.instance,s=e.processedItem;return["p-menuitem",{"p-menuitem-active p-highlight":i.isItemActive(s),"p-focus":i.isItemFocused(s),"p-disabled":i.isItemDisabled(s)}]},content:"p-menuitem-content",action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text",submenuIcon:"p-submenu-icon",panel:"p-megamenu-panel",grid:"p-megamenu-grid",column:function(e){var i=e.instance,s=e.processedItem,r=i.isItemGroup(s)?s.items.length:0,n;if(i.$parentInstance.queryMatches)n="p-megamenu-col-12";else switch(r){case 2:n="p-megamenu-col-6";break;case 3:n="p-megamenu-col-4";break;case 4:n="p-megamenu-col-3";break;case 6:n="p-megamenu-col-2";break;default:n="p-megamenu-col-12";break}return n},submenu:"p-submenu-list p-megamenu-submenu",submenuLabel:"p-menuitem-text",separator:"p-menuitem-separator",end:"p-megamenu-end"},W=D.extend({name:"megamenu",classes:j,inlineStyles:q}),Z={name:"BaseMegaMenu",extends:F,props:{model:{type:Array,default:null},orientation:{type:String,default:"horizontal"},breakpoint:{type:String,default:"960px"},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:W,provide:function(){return{$parentInstance:this}}},C={name:"MegaMenuSub",hostName:"MegaMenu",extends:F,emits:["item-click","item-mouseenter"],props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},horizontal:{type:Boolean,default:!1},submenu:{type:Object,default:null},mobileActive:{type:Boolean,default:!1},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItem:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getSubListId:function(e){return"".concat(this.getItemId(e),"_list")},getSubListKey:function(e){return this.getSubListId(e)},getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,i,s){return e&&e.item?m.getItemValue(e.item[i],s):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,i,s){return this.ptm(s,{context:{item:e,index:i,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}})},isItemActive:function(e){return m.isNotEmpty(this.activeItem)?this.activeItem.key===e.key:!1},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return m.isNotEmpty(e.items)},onItemClick:function(e,i){this.getItemProp(i,"command",{originalEvent:e,item:i.item}),this.$emit("item-click",{originalEvent:e,processedItem:i,isFocus:!0})},onItemMouseEnter:function(e,i){this.$emit("item-mouseenter",{originalEvent:e,processedItem:i})},getAriaSetSize:function(){var e=this;return this.items.filter(function(i){return e.isItemVisible(i)&&!e.getItemProp(i,"separator")}).length},getAriaPosInset:function(e){var i=this;return e-this.items.slice(0,e).filter(function(s){return i.isItemVisible(s)&&i.getItemProp(s,"separator")}).length+1},getMenuItemProps:function(e,i){return{action:c({class:this.cx("action"),tabindex:-1,"aria-hidden":!0},this.getPTOptions(e,i,"action")),icon:c({class:[this.cx("icon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,i,"icon")),label:c({class:this.cx("label")},this.getPTOptions(e,i,"label")),submenuicon:c({class:this.cx("submenuIcon")},this.getPTOptions(e,i,"submenuIcon"))}}},components:{AngleRightIcon:T,AngleDownIcon:N},directives:{ripple:O}},J=["tabindex"],Q=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-highlight","data-p-focused","data-p-disabled"],X=["onClick","onMouseenter"],Y=["href","target"],_=["id"];function $(t,e,i,s,r,n){var o=K("MegaMenuSub",!0),h=B("ripple");return l(),d("ul",c({class:i.level===0?t.cx("menu"):t.cx("submenu"),tabindex:i.tabindex},i.level===0?t.ptm("menu"):t.ptm("submenu")),[i.submenu?(l(),d("li",c({key:0,class:[t.cx("submenuHeader",{submenu:i.submenu}),n.getItemProp(i.submenu,"class")],style:n.getItemProp(i.submenu,"style"),role:"presentation"},t.ptm("submenuHeader")),E(n.getItemLabel(i.submenu)),17)):g("",!0),(l(!0),d(y,null,x(i.items,function(a,u){return l(),d(y,{key:n.getItemKey(a)},[n.isItemVisible(a)&&!n.getItemProp(a,"separator")?(l(),d("li",c({key:0,id:n.getItemId(a),style:n.getItemProp(a,"style"),class:[t.cx("menuitem",{processedItem:a}),n.getItemProp(a,"class")],role:"menuitem","aria-label":n.getItemLabel(a),"aria-disabled":n.isItemDisabled(a)||void 0,"aria-expanded":n.isItemGroup(a)?n.isItemActive(a):void 0,"aria-haspopup":n.isItemGroup(a)&&!n.getItemProp(a,"to")?"menu":void 0,"aria-level":i.level+1,"aria-setsize":n.getAriaSetSize(),"aria-posinset":n.getAriaPosInset(u)},n.getPTOptions(a,u,"menuitem"),{"data-p-highlight":n.isItemActive(a),"data-p-focused":n.isItemFocused(a),"data-p-disabled":n.isItemDisabled(a)}),[P("div",c({class:t.cx("content"),onClick:function(I){return n.onItemClick(I,a)},onMouseenter:function(I){return n.onItemMouseEnter(I,a)}},n.getPTOptions(a,u,"content")),[i.templates.item?(l(),p(k(i.templates.item),{key:1,item:a.item,hasSubmenu:n.isItemGroup(a),label:n.getItemLabel(a),props:n.getMenuItemProps(a,u)},null,8,["item","hasSubmenu","label","props"])):R((l(),d("a",c({key:0,href:n.getItemProp(a,"url"),class:t.cx("action"),target:n.getItemProp(a,"target"),tabindex:"-1","aria-hidden":"true"},n.getPTOptions(a,u,"action")),[i.templates.itemicon?(l(),p(k(i.templates.itemicon),{key:0,item:a.item,class:w(t.cx("icon"))},null,8,["item","class"])):n.getItemProp(a,"icon")?(l(),d("span",c({key:1,class:[t.cx("icon"),n.getItemProp(a,"icon")]},n.getPTOptions(a,u,"icon")),null,16)):g("",!0),P("span",c({class:i.level===0?t.cx("label"):t.cx("submenuLabel")},i.level===0?n.getPTOptions(a,u,"label"):n.getPTOptions(a,u,"submenuLabel")),E(n.getItemLabel(a)),17),n.isItemGroup(a)?(l(),d(y,{key:2},[i.templates.submenuicon?(l(),p(k(i.templates.submenuicon),c({key:0,active:n.isItemActive(a),class:t.cx("submenuIcon")},n.getPTOptions(a,u,"submenuIcon")),null,16,["active","class"])):(l(),p(k(i.horizontal||i.mobileActive?"AngleDownIcon":"AngleRightIcon"),c({key:1,class:t.cx("submenuIcon")},n.getPTOptions(a,u,"submenuIcon")),null,16,["class"]))],64)):g("",!0)],16,Y)),[[h]])],16,X),n.isItemVisible(a)&&n.isItemGroup(a)?(l(),d("div",c({key:0,class:t.cx("panel")},t.ptm("panel")),[P("div",c({class:t.cx("grid")},t.ptm("grid")),[(l(!0),d(y,null,x(a.items,function(f){return l(),d("div",c({key:n.getItemKey(f),class:t.cx("column",{processedItem:a})},t.ptm("column")),[(l(!0),d(y,null,x(f,function(I){return l(),p(o,{key:n.getSubListKey(I),id:n.getSubListId(I),style:G(t.sx("submenu",!0,{processedItem:a})),role:"menu",menuId:i.menuId,focusedItemId:i.focusedItemId,submenu:I,items:I.items,templates:i.templates,level:i.level+1,mobileActive:i.mobileActive,pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(v){return t.$emit("item-click",v)}),onItemMouseenter:e[1]||(e[1]=function(v){return t.$emit("item-mouseenter",v)})},null,8,["id","style","menuId","focusedItemId","submenu","items","templates","level","mobileActive","pt","unstyled"])}),128))],16)}),128))],16)],16)):g("",!0)],16,Q)):g("",!0),n.isItemVisible(a)&&n.getItemProp(a,"separator")?(l(),d("li",c({key:1,id:n.getItemId(a),class:[t.cx("separator"),n.getItemProp(a,"class")],style:n.getItemProp(a,"style"),role:"separator"},t.ptm("separator")),null,16,_)):g("",!0)],64)}),128))],16,J)}C.render=$;var ee={name:"MegaMenu",extends:Z,inheritAttrs:!1,emits:["focus","blur"],outsideClickListener:null,resizeListener:null,matchMediaListener:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{id:this.$attrs.id,mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,key:"",parentKey:""},activeItem:null,dirty:!1,query:null,queryMatches:!1}},watch:{"$attrs.id":function(e){this.id=e||M()},activeItem:function(e){m.isNotEmpty(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.id=this.id||M(),this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()},methods:{getItemProp:function(e,i){return e?m.getItemValue(e[i]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemGroup:function(e){return m.isNotEmpty(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&m.isNotEmpty(e.items)},toggle:function(e){var i=this;this.mobileActive?(this.mobileActive=!1,A.clear(this.menubar),this.hide()):(this.mobileActive=!0,A.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){i.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){this.focusedItemInfo={index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},b.focus(this.menubar)},hide:function(e,i){var s=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){b.focus(s.$refs.menubutton)},0)),this.activeItem=null,this.focusedItemInfo={index:-1,key:"",parentKey:""},i&&b.focus(this.menubar),this.dirty=!1},onFocus:function(e){if(this.focused=!0,this.focusedItemInfo.index===-1){var i=this.findFirstFocusedItemIndex(),s=this.findVisibleItem(i);this.focusedItemInfo={index:i,key:s.key,parentKey:s.parentKey}}this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,key:"",parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}var i=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!i&&m.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var i=e.processedItem,s=e.isFocus;if(!m.isEmpty(i)){var r=i.index,n=i.key,o=i.parentKey,h=i.items,a=m.isNotEmpty(h);a&&(this.activeItem=i),this.focusedItemInfo={index:r,key:n,parentKey:o},a&&(this.dirty=!0),s&&b.focus(this.menubar)}},onItemClick:function(e){var i=e.originalEvent,s=e.processedItem,r=this.isProccessedItemGroup(s),n=m.isEmpty(s.parent),o=this.isSelected(s);if(o){var h=s.index,a=s.key,u=s.parentKey;this.activeItem=null,this.focusedItemInfo={index:h,key:a,parentKey:u},this.dirty=!n,b.focus(this.menubar)}else if(r)this.onItemChange(e);else{var f=n?s:this.activeItem;this.hide(i),this.changeFocusedItemInfo(i,f?f.index:-1),this.mobileActive=!1,b.focus(this.menubar)}},onItemMouseEnter:function(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){if(this.horizontal)if(m.isNotEmpty(this.activeItem)&&this.activeItem.key===this.focusedItemInfo.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var i=this.findVisibleItem(this.focusedItemInfo.index),s=this.isProccessedItemGroup(i);s&&(this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo={index:-1,key:i.key,parentKey:i.parentKey},this.searchValue="")}var r=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,r),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.horizontal){if(this.focusedItemInfo.index!==-1){var i=this.findVisibleItem(this.focusedItemInfo.index),s=this.isProccessedItemGroup(i);!s&&m.isNotEmpty(this.activeItem)&&(this.focusedItemInfo.index===0?(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null):this.changeFocusedItemInfo(e,this.findFirstItemIndex()))}e.preventDefault()}else{var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,r),e.preventDefault()}},onArrowLeftKey:function(e){var i=this.findVisibleItem(this.focusedItemInfo.index),s=this.isProccessedItemGroup(i);if(s){if(this.horizontal){var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,r)}}else{this.vertical&&m.isNotEmpty(this.activeItem)&&i.columnIndex===0&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null);var n=i.columnIndex-1,o=this.visibleItems.findIndex(function(h){return h.columnIndex===n});o!==-1&&this.changeFocusedItemInfo(e,o)}e.preventDefault()},onArrowRightKey:function(e){var i=this.findVisibleItem(this.focusedItemInfo.index),s=this.isProccessedItemGroup(i);if(s){if(this.vertical)if(m.isNotEmpty(this.activeItem)&&this.activeItem.key===i.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var r=this.findVisibleItem(this.focusedItemInfo.index),n=this.isProccessedItemGroup(r);n&&(this.onItemChange({originalEvent:e,processedItem:r}),this.focusedItemInfo={index:-1,key:r.key,parentKey:r.parentKey},this.searchValue="")}var o=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,o)}else{var h=i.columnIndex+1,a=this.visibleItems.findIndex(function(u){return u.columnIndex===h});a!==-1&&this.changeFocusedItemInfo(e,a)}e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemInfo(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemInfo(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var i=b.findSingle(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),s=i&&b.findSingle(i,'a[data-pc-section="action"]');s?s.click():i&&i.click();var r=this.visibleItems[this.focusedItemInfo.index],n=this.isProccessedItemGroup(r);!n&&this.changeFocusedItemInfo(e,this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){m.isNotEmpty(this.activeItem)&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key},this.activeItem=null),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var i=this.findVisibleItem(this.focusedItemInfo.index),s=this.isProccessedItemGroup(i);!s&&this.onItemChange({originalEvent:e,processedItem:i})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(i){var s=e.container&&!e.container.contains(i.target),r=!(e.target&&(e.target===i.target||e.target.contains(i.target)));s&&r&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(i){b.isTouchDevice()||e.hide(i,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var i=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=i,this.queryMatches=i.matches,this.matchMediaListener=function(){e.queryMatches=i.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var i;return this.isValidItem(e)&&((i=this.getProccessedItemLabel(e))===null||i===void 0?void 0:i.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return m.isNotEmpty(this.activeItem)?this.activeItem.key===e.key:!1},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(i){return e.isValidItem(i)})},findLastItemIndex:function(){var e=this;return m.findLastIndex(this.visibleItems,function(i){return e.isValidItem(i)})},findNextItemIndex:function(e){var i=this,s=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(r){return i.isValidItem(r)}):-1;return s>-1?s+e+1:e},findPrevItemIndex:function(e){var i=this,s=e>0?m.findLastIndex(this.visibleItems.slice(0,e),function(r){return i.isValidItem(r)}):-1;return s>-1?s:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(i){return e.isValidSelectedItem(i)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},findVisibleItem:function(e){return m.isNotEmpty(this.visibleItems)?this.visibleItems[e]:null},searchItems:function(e,i){var s=this;this.searchValue=(this.searchValue||"")+i;var r=-1,n=!1;return this.focusedItemInfo.index!==-1?(r=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(o){return s.isItemMatched(o)}),r=r===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(o){return s.isItemMatched(o)}):r+this.focusedItemInfo.index):r=this.visibleItems.findIndex(function(o){return s.isItemMatched(o)}),r!==-1&&(n=!0),r===-1&&this.focusedItemInfo.index===-1&&(r=this.findFirstFocusedItemIndex()),r!==-1&&this.changeFocusedItemInfo(e,r),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){s.searchValue="",s.searchTimeout=null},500),n},changeFocusedItemInfo:function(e,i){var s=this.findVisibleItem(i);this.focusedItemInfo.index=i,this.focusedItemInfo.key=m.isNotEmpty(s)?s.key:"",this.scrollInView()},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,i=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,s=b.findSingle(this.menubar,'li[id="'.concat(i,'"]'));s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var i=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",o=arguments.length>4?arguments[4]:void 0,h=[];return e&&e.forEach(function(a,u){var f=(n!==""?n+"_":"")+(o!==void 0?o+"_":"")+u,I={item:a,index:u,level:s,key:f,parent:r,parentKey:n,columnIndex:o!==void 0?o:r.columnIndex!==void 0?r.columnIndex:u};I.items=s===0&&a.items&&a.items.length>0?a.items.map(function(v,V){return i.createProcessedItems(v,s+1,I,f,V)}):i.createProcessedItems(a.items,s+1,I,f),h.push(I)}),h},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=m.isNotEmpty(this.activeItem)?this.activeItem:null;return e&&e.key===this.focusedItemInfo.parentKey?e.items.reduce(function(i,s){return s.forEach(function(r){r.items.forEach(function(n){i.push(n)})}),i},[]):this.processedItems},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},focusedItemId:function(){return m.isNotEmpty(this.focusedItemInfo.key)?"".concat(this.id,"_").concat(this.focusedItemInfo.key):null}},components:{MegaMenuSub:C,BarsIcon:z}},te=["id"],ie=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function ne(t,e,i,s,r,n){var o=K("BarsIcon"),h=K("MegaMenuSub");return l(),d("div",c({ref:n.containerRef,id:r.id,class:t.cx("root")},t.ptmi("root")),[t.$slots.start?(l(),d("div",c({key:0,class:t.cx("start")},t.ptm("start")),[L(t.$slots,"start")],16)):g("",!0),L(t.$slots,"menubutton",{id:r.id,class:w(t.cx("menubutton")),toggleCallback:function(u){return n.menuButtonClick(u)}},function(){var a;return[t.model&&t.model.length>0?(l(),d("a",c({key:0,ref:"menubutton",role:"button",tabindex:"0",class:t.cx("menubutton"),"aria-haspopup":!!(t.model.length&&t.model.length>0),"aria-expanded":r.mobileActive,"aria-controls":r.id,"aria-label":(a=t.$primevue.config.locale.aria)===null||a===void 0?void 0:a.navigation,onClick:e[0]||(e[0]=function(u){return n.menuButtonClick(u)}),onKeydown:e[1]||(e[1]=function(u){return n.menuButtonKeydown(u)})},t.ptm("menubutton")),[L(t.$slots,"menubuttonicon",{},function(){return[S(o,U(H(t.ptm("menubuttonicon"))),null,16)]})],16,ie)):g("",!0)]}),S(h,{ref:n.menubarRef,id:r.id+"_list",tabindex:t.disabled?-1:t.tabindex,role:"menubar","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-disabled":t.disabled||void 0,"aria-orientation":t.orientation,"aria-activedescendant":r.focused?n.focusedItemId:void 0,menuId:r.id,focusedItemId:r.focused?n.focusedItemId:void 0,items:n.processedItems,horizontal:n.horizontal,templates:t.$slots,activeItem:r.activeItem,mobileActive:r.mobileActive,level:0,pt:t.pt,unstyled:t.unstyled,onFocus:n.onFocus,onBlur:n.onBlur,onKeydown:n.onKeyDown,onItemClick:n.onItemClick,onItemMouseenter:n.onItemMouseEnter},null,8,["id","tabindex","aria-label","aria-labelledby","aria-disabled","aria-orientation","aria-activedescendant","menuId","focusedItemId","items","horizontal","templates","activeItem","mobileActive","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),t.$slots.end?(l(),d("div",c({key:1,class:t.cx("end")},t.ptm("end")),[L(t.$slots,"end")],16)):g("",!0)],16,te)}ee.render=ne;export{ee as default};
