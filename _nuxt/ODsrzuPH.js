import{_ as h,y as b}from"./CniJoF-D.js";import{d as g,r as v,z as a,A as l,E as e,U as d,R as c,P as m,W as x,u as s,T as k,C as r,D as _,V as y,aj as w,L as D,B as C}from"./BCuyfSJ-.js";import{_ as O}from"./pv6YaqOc.js";/* empty css        */const T={class:"fixed top-0 w-full z-50"},j={class:"container"},V={class:"p-5 flex justify-between items-center backdrop-blur-[4px] rounded-lg mt-5"},$=e("img",{src:O,alt:"logo",class:"max-xl:w-[300px] max-sxxs:w-[250px]"},null,-1),z={class:"max-lg:hidden px-5 py-2 bg-[#a8a8a841] rounded-lg fixed flex items-center justify-center right-0 left-0 w-fit m-auto transition-all z-10"},B={class:"flex gap-2.5 text-primary text-[14px] font-extrabold"},N={class:"flex flex-col max-ss:hidden"},S=e("span",{class:"font-light text-lg max-xl:text-base"},[e("span",{class:"font-semibold"},"пн-пт: "),r(),e("span",null,"10:00 - 19:00 "),e("span",{class:"font-semibold"},"сб: "),r(),e("span",null,"10:00 - 15:00 ")],-1),P={id:"menuToggle",class:"lg:hidden block mr-2"},E=["checked"],L=e("label",{class:"toggle",for:"checkbox"},[e("div",{class:"bar bar--top"}),e("div",{class:"bar bar--middle"}),e("div",{class:"bar bar--bottom"})],-1),A={key:0,class:"dropdown"},F={class:"flex flex-col max-ss:flex ss:hidden"},G=e("span",{class:"text-white font-light text-lg"},[e("span",{class:"font-semibold"},"пн-пт: "),r(),e("span",null,"10:00 - 19:00 "),r(),e("br"),e("span",{class:"font-semibold"},"сб: "),r(),e("span",null,"10:00 - 15:00 ")],-1),H=g({__name:"HeaderOutherPages",setup(u){const{sendMessageCall:i}=b(),o=v({isDropdownOpen:!1,nav:[{name:"ШИНОМОНТАЖ",to:"shinomotaj"},{name:"БАЛАНСИРОВКА",to:"balansyrovka"},{name:"ХРАНЕНИЕ",to:"khranenie-shin"},{name:"ПЕРЕБОРТОВКА",to:"shinomotaj"},{name:"РЕМОНТ ДИСКОВ",to:"remont-diskov"},{name:"СТО",to:"sto"}]});return(M,n)=>{const p=h;return a(),l("header",T,[e("section",j,[e("div",V,[d(p,{to:"/"},{default:c(()=>[$]),_:1}),e("div",z,[e("ul",B,[(a(!0),l(m,null,x(s(o).nav,t=>(a(),l("li",{key:t.name,class:"cursor-pointer hover:text-primary transition-all hover:scale-110"},[d(p,{to:t.to},{default:c(()=>[r(_(t.name),1)]),_:2},1032,["to"])]))),128))])]),e("div",N,[S,e("a",{href:"tel:+79681856015",class:"text-xl font-bold text-center",onClick:n[0]||(n[0]=(...t)=>s(i)&&s(i)(...t))}," +7 (968) 185-60-15 ")]),e("div",P,[e("input",{id:"checkbox",type:"checkbox",checked:s(o).isDropdownOpen,onClick:n[1]||(n[1]=t=>s(o).isDropdownOpen=!s(o).isDropdownOpen)},null,8,E),L,d(k,{name:"fade"},{default:c(()=>[s(o).isDropdownOpen?(a(),l("div",A,[d(y,{name:"fade",tag:"ul",class:"options-container"},{default:c(()=>[(a(!0),l(m,null,x(s(o).nav,(t,f)=>(a(),l("li",{key:t.name,class:"font-extrabold text-xl text-primary2",style:w({animationDelay:`${f*.1}s`}),onClick:n[2]||(n[2]=R=>s(o).isDropdownOpen=!s(o).isDropdownOpen)},[d(p,{to:t.to},{default:c(()=>[r(_(t.name),1)]),_:2},1032,["to"])],4))),128)),e("div",F,[G,e("a",{href:"tel:+79681856015",class:"text-xl font-bold text-center text-primary",onClick:n[3]||(n[3]=(...t)=>s(i)&&s(i)(...t))}," +7 (968) 185-60-15 ")])]),_:1})])):D("",!0)]),_:1})])])])])}}}),J={__name:"otherPage",setup(u){return(i,o)=>(a(),l("div",null,[d(H),C(i.$slots,"default")]))}};export{J as default};
