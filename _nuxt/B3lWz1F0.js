import{d as m,r as u,z as n,A as o,E as e,P as d,W as c,u as a,U as l,R as p,T as v,I as g,D as x,V as b,aj as w,L as y,B as k}from"./TXeigpji.js";import{_ as D}from"./Iiih7ITU.js";import{a as _}from"./CkVg9ABx.js";/* empty css        */import"./B7rFwOFT.js";const C={class:"container"},O={class:"py-5 flex justify-between items-center"},$=e("img",{src:D,alt:"logo",class:"max-lg:w-[300px] max-sxxs:w-[250px]"},null,-1),z={class:"max-lg:hidden px-5 py-2 bg-[#a8a8a841] hover:bg-[#505050f3] rounded-lg fixed flex items-center justify-center right-0 left-0 w-fit m-auto transition-all z-10"},B={class:"flex gap-2.5 text-primary text-[14px] font-extrabold"},S=["onClick"],T=e("div",{class:"flex flex-col max-ss:hidden"},[e("span",{class:"text-white font-light text-lg"}," пн-пт: 09:00 - 20:00 "),e("a",{href:"tel:+79999999999",class:"text-white text-xl font-bold"}," +7 (999) 999-99-99 ")],-1),V={id:"menuToggle",class:"lg:hidden block"},j=["checked"],A=e("label",{class:"toggle",for:"checkbox"},[e("div",{class:"bar bar--top"}),e("div",{class:"bar bar--middle"}),e("div",{class:"bar bar--bottom"})],-1),F={key:0,class:"dropdown"},N=["onClick"],E=e("div",{class:"flex flex-col max-ss:flex ss:hidden"},[e("span",{class:"text-white font-light text-lg"}," пн-пт: 09:00 - 20:00 "),e("a",{href:"tel:+79999999999",class:"text-white font-bold text-xl"}," +7 (999) 999-99-99 ")],-1),L=m({__name:"Header",setup(f){const t=u({isDropdownOpen:!1,nav:[{name:"СПЕЦПРЕДЛОЖЕНИЯ",id:"special"},{name:"ПОЧЕМУ МЫ?",id:"why"},{name:"НАШИ УСЛУГИ",id:"services"},{name:"ЦЕНЫ",id:"prices",class:"underline underline-offset-4"},{name:"РЕАЛЬНЫЕ ОТЗЫВЫ",id:"reviews"},{name:"FAQ",id:"FAQ"},{name:"КАК НАС НАЙТИ",id:"find"}]});return(h,i)=>(n(),o("header",null,[e("section",C,[e("div",O,[$,e("div",z,[e("ul",B,[(n(!0),o(d,null,c(a(t).nav,s=>(n(),o("li",{key:s.name,class:g([s!=null&&s.class?s==null?void 0:s.class:"","cursor-pointer hover:text-primary transition-all hover:scale-110"]),onClick:r=>a(_)(s.id)},x(s.name),11,S))),128))])]),T,e("div",V,[e("input",{id:"checkbox",type:"checkbox",checked:a(t).isDropdownOpen,onClick:i[0]||(i[0]=s=>a(t).isDropdownOpen=!a(t).isDropdownOpen)},null,8,j),A,l(v,{name:"fade"},{default:p(()=>[a(t).isDropdownOpen?(n(),o("div",F,[l(b,{name:"fade",tag:"ul",class:"options-container"},{default:p(()=>[(n(!0),o(d,null,c(a(t).nav,(s,r)=>(n(),o("li",{key:s.name,class:"font-extrabold text-xl text-primary2",style:w({animationDelay:`${r*.1}s`}),onClick:Q=>{a(_)(s.id),a(t).isDropdownOpen=!a(t).isDropdownOpen}},x(s.name),13,N))),128)),E]),_:1})])):y("",!0)]),_:1})])])])]))}}),U={__name:"default",setup(f){return(t,h)=>(n(),o("div",null,[l(L),k(t.$slots,"default")]))}};export{U as default};
