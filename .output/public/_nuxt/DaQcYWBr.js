import{_ as m,o as a,c as _,F as v,h as y,a as e,p as b,e as k,y as T,u as j,w as i,b as s,d as p,t as x,z as A,T as M,g as O,A as H}from"./CLKOdVX7.js";import{b as $,_ as f,d as N,a as B,c as V}from"./CzKFAgXh.js";import{_ as D}from"./CFNiDEiz.js";import{_ as E}from"./B-YKldPh.js";const F={props:{mainSlides:{type:Array,default:()=>[]}}},U=n=>(b("data-v-5e2d7708"),n=n(),k(),n),W={class:"main-slider",loop:"true",navigation:"true"},z=["src"],R=U(()=>e("div",{class:"container"},[e("div",{class:"main-slider__text"},[e("h1",{class:"main-slider__title"},"We produce the best products"),e("p",null,"We produce the best products")])],-1));function q(n,l,t,r,o,u){return a(),_("swiper-container",W,[(a(!0),_(v,null,y(t.mainSlides,(c,d)=>(a(),_("swiper-slide",{class:"main-slider__item",key:d},[e("img",{class:"main-slider__img",src:c.url,alt:""},null,8,z),R]))),128))])}const G=m(F,[["render",q],["__scopeId","data-v-5e2d7708"]]),J=T("/images/tools-store.jpg"),K={},P=n=>(b("data-v-35c68279"),n=n(),k(),n),Q=P(()=>e("div",{class:"about-company__content"},[e("div",{class:"about-company__text"},[e("span",{class:"grey"},"Цитата"),e("p",null,"Но интерактивные прототипы представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть своевременно верифицированы. Банальные, но неопровержимые выводы, а также независимые государства освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, ассоциативно распределены по отраслям. Картельные сговоры не допускают ситуации, при которой сторонники тоталитаризма в науке лишь добавляют фракционных разногласий и объединены в целые кластеры себе подобных. Вот вам яркий пример современных тенденций — укрепление и развитие внутренней структуры предопределяет высокую востребованность системы обучения кадров, соответствующей насущным потребностям. Сложно сказать, почему акционеры крупнейших компаний могут быть призваны к ответу. Прежде всего, повышение уровня гражданского сознания создаёт предпосылки для стандартных подходов."),e("span",null,[p("Alex Lee / "),e("span",{class:"grey"},"Основатель компании")])]),e("div",{class:"about-company__img"},[e("img",{src:J,alt:""})])],-1));function X(n,l){const t=$,r=f;return a(),j(r,{class:"about-company"},{default:i(()=>[s(t,null,{default:i(()=>[p("О компании")]),_:1}),Q]),_:1})}const Y=m(K,[["render",X],["__scopeId","data-v-35c68279"]]),Z={props:{newsCard:{type:Object,default:()=>{}},isImgLeft:{type:Boolean,default:!1}}},ee={key:0,class:"main-news-card"},te={class:"main-news-card__img"},se=["src"],ne={class:"main-news-card__content"},oe={class:"main-news-card__title"},ae=["innerHTML"],ie={key:1,class:"main-news-card"},ce={class:"main-news-card__content"},_e={class:"main-news-card__title"},le=["innerHTML"],de={class:"main-news-card__img"},re=["src"];function me(n,l,t,r,o,u){const c=D;return t.newsCard.img_left?(a(),_("div",ee,[e("div",te,[e("img",{src:t.newsCard.image,alt:""},null,8,se)]),e("div",ne,[e("h3",oe,x(t.newsCard.title),1),e("div",{innerHTML:t.newsCard.text,class:"main-news-card__text"},null,8,ae),s(c,{class:"main-news-card__link",to:"#"},{default:i(()=>[p("Подробнее")]),_:1})])])):(a(),_("div",ie,[e("div",ce,[e("h3",_e,x(t.newsCard.title),1),e("div",{innerHTML:t.newsCard.text,class:"main-news-card__text"},null,8,le),s(c,{class:"main-news-card__link",to:"#"},{default:i(()=>[p("Подробнее")]),_:1})]),e("div",de,[e("img",{src:t.newsCard.image,alt:""},null,8,re)])]))}const pe=m(Z,[["render",me]]),ue={props:{newsList:{type:Array,default:()=>[]}}},ge={class:"main-news-list"};function fe(n,l,t,r,o,u){const c=pe;return a(),_("ul",ge,[(a(!0),_(v,null,y(t.newsList,(d,g)=>(a(),_("li",{class:"main-news-list__item",key:g},[s(c,{"news-card":d},null,8,["news-card"])]))),128))])}const he=m(ue,[["render",fe],["__scopeId","data-v-1366c1b5"]]),we={props:{newsList:{type:Array,default:()=>[]}}};function xe(n,l,t,r,o,u){const c=$,d=he,g=f;return a(),j(g,null,{default:i(()=>[s(c,{link:"","link-text":"все новости"},{default:i(()=>[p("Новости компании")]),_:1}),s(d,{"news-list":t.newsList},null,8,["news-list"])]),_:1})}const je=m(we,[["render",xe]]),$e={props:{acc:{type:Object,default:()=>{}}},data(){return{isOpen:!1}}},ve={class:"accordion"},ye={key:0,class:"accordion__content"},be=["innerHTML"];function ke(n,l,t,r,o,u){const c=E;return a(),_("div",ve,[e("button",{onClick:l[0]||(l[0]=d=>o.isOpen=!o.isOpen),class:"accordion__btn"},[e("span",null,x(t.acc.title),1),s(c,{name:o.isOpen?"remove-minus":"add-plus",width:"24",height:"24"},null,8,["name"])]),s(M,null,{default:i(()=>[o.isOpen?(a(),_("div",ye,[e("div",{innerHTML:t.acc.text},null,8,be)])):A("",!0)]),_:1})])}const Se=m($e,[["render",ke],["__scopeId","data-v-d58cc346"]]),Le={props:{accList:{type:Array,default:()=>[]}}},Ce={class:"main-accordion__list"};function Ie(n,l,t,r,o,u){const c=$,d=Se,g=f;return a(),j(g,{class:"main-accordion"},{default:i(()=>[s(c,null,{default:i(()=>[p("Частые вопросы")]),_:1}),e("ul",Ce,[(a(!0),_(v,null,y(t.accList,(h,w)=>(a(),_("li",{class:"main-accordion__item",key:w},[s(d,{acc:h},null,8,["acc"])]))),128))])]),_:1})}const Te=m(Le,[["render",Ie],["__scopeId","data-v-99548e15"]]),Ae={props:{label:{type:String,default:""},type:{type:String,default:""},id:{type:String,default:""},placeholder:{type:String,default:""}},data(){return{value:""}}},Me={class:"input"},Oe=["for"],He=["type","id","placeholder"];function Ne(n,l,t,r,o,u){return a(),_("div",Me,[e("label",{for:t.id,class:"input__label"},x(t.label),9,Oe),O(e("input",{type:t.type,id:t.id,"onUpdate:modelValue":l[0]||(l[0]=c=>o.value=c),placeholder:t.placeholder,class:"input__field"},null,8,He),[[H,o.value]])])}const Be=m(Ae,[["render",Ne],["__scopeId","data-v-c58a06c2"]]),Ve={},De=n=>(b("data-v-28eb084b"),n=n(),k(),n),Ee={class:"subscribe__content"},Fe=De(()=>e("div",{class:"subscribe__text"},[e("h2",{class:"h2"},"Подпишитесь"),e("p",null,"И будьте в курсе новостей и акций")],-1)),Ue={class:"subscribe__form"};function We(n,l){const t=Be,r=N,o=f;return a(),j(o,{class:"subscribe"},{default:i(()=>[e("div",Ee,[Fe,e("form",Ue,[s(t,{label:"E-mail",id:"email",type:"email",placeholder:"example@mail.com"}),s(r,{type:"submit"},{default:i(()=>[p("Подписаться")]),_:1})])])]),_:1})}const ze=m(Ve,[["render",We],["__scopeId","data-v-28eb084b"]]),Re={data(){return{slides:[{url:"images/tools.jpg"},{url:"images/tools.jpg"},{url:"images/tools.jpg"}],catalogNav:[{title:"Инструменты",url:"images/y-tools.jpg",link:"#",span:!1},{title:"Электрика",url:"images/y-tools.jpg",link:"#",span:!1},{title:"Сантехника",url:"images/y-tools.jpg",link:"#",span:!1},{title:"Инструменты",url:"images/y-tools.jpg",link:"#",span:!1},{title:"Электрика",url:"images/y-tools.jpg",link:"#",span:!1},{title:"Сантехника",url:"images/y-tools.jpg",link:"#",span:!1},{title:"Весь каталог",url:"images/y-tools.jpg",link:"/catalog",span:!0}],saleCards:[{images:["images/goods-item-1.jpg","images/goods-item-1.jpg","images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"},{images:["images/goods-item-1.jpg","images/goods-item-1.jpg","images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"},{images:["images/goods-item-1.jpg","images/goods-item-1.jpg","images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"},{images:["images/goods-item-1.jpg","images/goods-item-1.jpg","images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"},{images:["images/goods-item-1.jpg","images/goods-item-1.jpg","images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"}],newCards:[{images:["images/goods-item-1.jpg","images/goods-item-1.jpg","images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"},{images:["images/goods-item-1.jpg","images/goods-item-1.jpg","images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"},{images:["images/goods-item-1.jpg","images/goods-item-1.jpg","images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"},{images:["images/goods-item-1.jpg","images/goods-item-1.jpg","images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"},{images:["images/goods-item-1.jpg","images/goods-item-1.jpg","images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"}],news:[{image:"images/work-tools.jpg",title:"Заголовок новости",text:"<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p><p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>",img_left:!0},{image:"images/work-tools.jpg",title:"Заголовок новости",text:"<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>",img_left:!1},{image:"images/work-tools.jpg",title:"Заголовок новости",text:"<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>",img_left:!0}],acc_list:[{title:"Вопрос 1",text:"<p>Вот вам яркий пример современных тенденций — базовый вектор развития требует анализа позиций, занимаемых участниками в отношении поставленных задач. Таким образом, глубокий уровень погружения однозначно определяет каждого участника как способного принимать собственные решения касаемо благоприятных перспектив.</p>"},{title:"Вопрос 2",text:"<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений. </p>"},{title:"Вопрос 3",text:"<p>Вот вам яркий пример современных тенденций — базовый вектор развития требует анализа позиций, занимаемых участниками в отношении поставленных задач. Таким образом, глубокий уровень погружения однозначно определяет каждого участника как способного принимать собственные решения касаемо благоприятных перспектив.</p>"}]}}};function qe(n,l,t,r,o,u){const c=G,d=f,g=B,h=$,w=V,S=Y,L=je,C=Te,I=ze;return a(),_("main",null,[s(d,{class:"main-slider",wide:""},{default:i(()=>[s(c,{"main-slides":o.slides},null,8,["main-slides"])]),_:1}),s(d,{class:"catalog-nav"},{default:i(()=>[s(g,{"catalog-nav":o.catalogNav},null,8,["catalog-nav"])]),_:1}),s(d,null,{default:i(()=>[s(h,{link:"","link-text":"все акции"},{default:i(()=>[p("Товары по акции / Популярное")]),_:1}),s(w,{cards:o.saleCards},null,8,["cards"])]),_:1}),s(d,null,{default:i(()=>[s(h,{link:"","link-text":"все новинки"},{default:i(()=>[p("Новинки")]),_:1}),s(w,{cards:o.newCards},null,8,["cards"])]),_:1}),s(S),s(L,{"news-list":o.news},null,8,["news-list"]),s(C,{"acc-list":o.acc_list},null,8,["acc-list"]),s(I)])}const Qe=m(Re,[["render",qe]]);export{Qe as default};