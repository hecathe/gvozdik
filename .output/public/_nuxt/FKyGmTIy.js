import{_ as m}from"./B38qNOhj.js";import{_ as r,o as e,c as s,a,t as f,b as _,w as h,y as x,T as k,F as v,h as y,E as b}from"./YdhPWYN_.js";const O={props:{acc:{type:Object,default:()=>{}}},data(){return{isOpen:!1}}},$={class:"accordion-list-item"},L={key:0,class:"accordion-list-item__content"},g=["innerHTML"];function B(l,c,n,d,t,p){const o=m;return e(),s("li",$,[a("button",{onClick:c[0]||(c[0]=i=>t.isOpen=!t.isOpen),class:"accordion-list-item__btn"},[a("span",null,f(n.acc.title),1),_(o,{name:t.isOpen?"remove-minus":"add-plus",width:"24",height:"24"},null,8,["name"])]),_(k,null,{default:h(()=>[t.isOpen?(e(),s("div",L,[a("div",{class:"accordion-list-item__markup",innerHTML:n.acc.text},null,8,g)])):x("",!0)]),_:1})])}const T=r(O,[["render",B],["__scopeId","data-v-83bb53ad"]]),w={props:{accList:{type:Array,default:()=>[]}}},C={class:"accordion-list"};function N(l,c,n,d,t,p){const o=T;return e(),s("ul",C,[(e(!0),s(v,null,y(n.accList,(i,u)=>(e(),b(o,{key:u,acc:i},null,8,["acc"]))),128))])}const F=r(w,[["render",N],["__scopeId","data-v-3a42d7ee"]]);export{F as _};
