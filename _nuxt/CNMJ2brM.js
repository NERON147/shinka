import{_ as b,u as g}from"./_JlXMglH.js";import{l as h,r as v,G as n,H as l,M as t,Y as i,X as d,F as x,_ as m,u as a,a5 as k,T as w,J as p,L as f,Q as y,Z as D,ah as C,I as O}from"./BWI7gVpQ.js";import{_ as T}from"./DJDEFQvb.js";/* empty css        */const N={class:"fixed top-0 w-full z-50"},S={class:"container"},V={class:"p-5 flex justify-between items-center backdrop-blur-[4px] rounded-lg mt-5"},$={class:"max-lg:hidden px-5 py-2 bg-[#a8a8a841] rounded-lg fixed flex items-center justify-center right-0 left-0 w-fit m-auto transition-all z-10"},j={class:"flex gap-2.5 text-primary text-[14px] font-extrabold"},z={class:"flex flex-col max-ss:hidden"},B={id:"menuToggle",class:"lg:hidden block mr-2"},F=["checked"],G={key:0,class:"dropdown"},H={class:"flex flex-col max-ss:flex ss:hidden"},L=h({__name:"HeaderOutherPages",setup(u){const{sendMessageCall:r}=g(),o=v({isDropdownOpen:!1,nav:[{name:"ШИНОМОНТАЖ",to:"shinomotaj"},{name:"БАЛАНСИРОВКА",to:"balansyrovka"},{name:"ХРАНЕНИЕ",to:"khranenie-shin"},{name:"ПЕРЕБОРТОВКА",to:"shinomotaj"},{name:"РЕМОНТ ДИСКОВ",to:"remont-diskov"},{name:"СТО",to:"sto"}]});return(M,e)=>{const c=b;return l(),n("header",N,[t("section",S,[t("div",V,[i(c,{to:"/"},{default:d(()=>e[4]||(e[4]=[t("img",{src:T,alt:"logo",class:"max-xl:w-[300px] max-sxxs:w-[250px] w-[300px]"},null,-1)])),_:1}),t("div",$,[t("ul",j,[(l(!0),n(x,null,m(a(o).nav,s=>(l(),n("li",{key:s.name,class:"cursor-pointer hover:text-primary transition-all hover:scale-110"},[i(c,{to:s.to},{default:d(()=>[p(f(s.name),1)]),_:2},1032,["to"])]))),128))])]),t("div",z,[e[5]||(e[5]=k('<span class="font-light text-lg max-xl:text-base"><span class="font-semibold">пн-пт: </span> <span class="text-[#b87a3c]">10:00 - 20:00 </span><span class="font-semibold">сб-вс: </span> <span class="text-[#b87a3c]">10:00 - 17:00 </span></span>',1)),t("a",{href:"tel:+79681856015",class:"text-xl font-bold text-center",onClick:e[0]||(e[0]=(...s)=>a(r)&&a(r)(...s))}," +7 (968) 185-60-15 ")]),t("div",B,[t("input",{id:"checkbox",type:"checkbox",checked:a(o).isDropdownOpen,onClick:e[1]||(e[1]=s=>a(o).isDropdownOpen=!a(o).isDropdownOpen)},null,8,F),e[7]||(e[7]=t("label",{class:"toggle",for:"checkbox"},[t("div",{class:"bar bar--top"}),t("div",{class:"bar bar--middle"}),t("div",{class:"bar bar--bottom"})],-1)),i(w,{name:"fade"},{default:d(()=>[a(o).isDropdownOpen?(l(),n("div",G,[i(D,{name:"fade",tag:"ul",class:"options-container"},{default:d(()=>[(l(!0),n(x,null,m(a(o).nav,(s,_)=>(l(),n("li",{key:s.name,class:"font-extrabold text-xl text-primary2",style:C({animationDelay:`${_*.1}s`}),onClick:e[2]||(e[2]=P=>a(o).isDropdownOpen=!a(o).isDropdownOpen)},[i(c,{to:s.to},{default:d(()=>[p(f(s.name),1)]),_:2},1032,["to"])],4))),128)),t("div",H,[e[6]||(e[6]=t("span",{class:"text-white font-light text-lg"},[t("span",{class:"font-semibold"},"пн-пт: "),p(),t("span",{class:"text-[#b87a3c]"},"10:00 - 20:00 "),t("span",{class:"font-semibold"},"сб-вс: "),p(),t("span",{class:"text-[#b87a3c]"},"10:00 - 17:00 ")],-1)),t("a",{href:"tel:+79681856015",class:"text-xl font-bold text-center text-primary",onClick:e[3]||(e[3]=(...s)=>a(r)&&a(r)(...s))}," +7 (968) 185-60-15 ")])]),_:1})])):y("",!0)]),_:1})])])])])}}}),X={__name:"otherPage",setup(u){return(r,o)=>(l(),n("div",null,[i(L),O(r.$slots,"default")]))}};export{X as default};
