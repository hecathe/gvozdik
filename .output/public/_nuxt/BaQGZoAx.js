import{_ as d}from"./B38qNOhj.js";import{_ as w}from"./i-XU8F2F.js";import{_ as x,a as I}from"./DICoytZO.js";import{_ as b}from"./7KYfJvXy.js";import{_ as p,o,c as i,a as t,t as a,b as e,w as l,d as $,F as S,h as j,p as z,e as B}from"./YdhPWYN_.js";import{_ as N}from"./CN0L23w3.js";import"./CfM0U8Aj.js";const V={props:{cartItem:{type:Object,default:()=>{}}}},F={class:"cart-item"},C={class:"cart-item__left"},D={class:"cart-item__img"},E=["src"],L={class:"cart-item__wrap"},O={class:"cart-item__info"},T={class:"cart-item__actions"},q={class:"cart-item__btn cart-item__delete"},A={class:"cart-item__block"},G={class:"cart-item__price"},H={class:"cart-item__sum"};function J(s,u,_,h,c,g){const n=x,r=d,m=b;return o(),i("div",F,[t("div",C,[t("div",D,[t("img",{src:_.cartItem.img,alt:""},null,8,E)]),t("div",L,[t("div",O,[t("h3",null,a(_.cartItem.title),1),t("p",null,"Артикул: "+a(_.cartItem.article),1),t("p",null,"Вес: "+a(_.cartItem.weight),1)]),t("div",T,[e(n,{class:"cart-item__btn",width:"24",height:"24"}),t("button",q,[e(r,{name:"trash",width:"24",height:"24"})])])])]),t("div",A,[e(m),t("p",G,a(_.cartItem.price),1),t("p",H,a(_.cartItem.summary)+" ₽",1)])])}const K=p(V,[["render",J],["__scopeId","data-v-abb198d5"]]),M={data(){return{cart_list:[{img:"/gvozdik/images/drill.jpg",title:"Клещи переставные Sparta 250 мм",article:"123456",weight:"300 г",price:"150 ₽ / шт.",summary:300},{img:"/gvozdik/images/drill.jpg",title:"Клещи переставные Sparta 250 мм",article:"123456",weight:"300 г",price:"150 ₽ / шт.",summary:300},{img:"/gvozdik/images/drill.jpg",title:"Клещи переставные Sparta 250 мм",article:"123456",weight:"300 г",price:"150 ₽ / шт.",summary:300}],product_info:[{key:"Цена",value:"150 ₽"},{key:"Доставка",value:"140 ₽"},{key:"Скидка",value:"10 ₽"}],summary:{key:"Итого",value:"290 ₽"},delivery:{key:"Доставка",value:"28.03.2024"}}}},P=s=>(z("data-v-e294618d"),s=s(),B(),s),Q={class:"main"},R=P(()=>t("h1",{class:"h1"},"Корзина",-1)),U={class:"cart__content"},W={class:"cart__list"};function X(s,u,_,h,c,g){const n=d,r=w,m=K,f=I,v=N;return o(),i("main",Q,[e(v,{class:"cart"},{default:l(()=>[e(r,{class:"cart__link",to:"/catalog/"},{default:l(()=>[e(n,{name:"arrow-left",width:"24",height:"24"}),$(" Вернуться к покупкам ")]),_:1}),R,t("div",U,[t("ul",W,[(o(!0),i(S,null,j(c.cart_list,(y,k)=>(o(),i("li",{class:"cart__good",key:k},[e(m,{"cart-item":y},null,8,["cart-item"])]))),128))]),e(f,{"side-info-list":c.product_info,summary:c.summary,delivery:c.delivery,show:!1},null,8,["side-info-list","summary","delivery"])])]),_:1})])}const at=p(M,[["render",X],["__scopeId","data-v-e294618d"]]);export{at as default};
