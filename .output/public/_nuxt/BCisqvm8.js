import{_ as m,o as n,c as _,F as v,h as w,a as t,p as C,e as L,u as j,b as s,w as r,t as f,x as U,y as x,z as T,g as A,v as D,A as B,d as g,T as z,B as E}from"./6whII085.js";import{_ as b}from"./CjlXaEO3.js";import{_ as k}from"./C-cJ2gu7.js";const F={props:{mainSlides:{type:Array,default:()=>[]}}},W=o=>(C("data-v-5e2d7708"),o=o(),L(),o),R={class:"main-slider",loop:"true",navigation:"true"},q=["src"],G=W(()=>t("div",{class:"container"},[t("div",{class:"main-slider__text"},[t("h1",{class:"main-slider__title"},"We produce the best products"),t("p",null,"We produce the best products")])],-1));function J(o,l,e,d,i,p){return n(),_("swiper-container",R,[(n(!0),_(v,null,w(e.mainSlides,(c,a)=>(n(),_("swiper-slide",{class:"main-slider__item",key:a},[t("img",{class:"main-slider__img",src:c.url,alt:""},null,8,q),G]))),128))])}const K=m(F,[["render",J],["__scopeId","data-v-5e2d7708"]]),P={props:{wide:{type:Boolean,default:!1}}},Q={class:"section"},X={key:1,class:"container"};function Y(o,l,e,d,i,p){return n(),_("section",Q,[e.wide?j(o.$slots,"default",{key:0},void 0,!0):(n(),_("div",X,[j(o.$slots,"default",{},void 0,!0)]))])}const y=m(P,[["render",Y],["__scopeId","data-v-63098a25"]]),Z={props:{title:{type:String,default:""},imgUrl:{type:String,default:""},isSpan:{type:Boolean,default:""}}},tt={class:"catalog-nav-item__content"},et={class:"catalog-nav-item__background"},st=["src"];function nt(o,l,e,d,i,p){const c=b,a=k;return n(),_("li",{class:U(["catalog-nav-item",{"span-2":e.isSpan}])},[s(a,{to:"#",class:"catalog-nav-item__link"},{default:r(()=>[t("div",tt,[t("h3",null,f(e.title),1),s(c,{class:"catalog-nav-item__icon",width:"28",height:"28",name:"arrow-down-right"})]),t("div",et,[t("img",{class:"catalog-nav-item__img",src:e.imgUrl,alt:""},null,8,st)])]),_:1})],2)}const ot=m(Z,[["render",nt],["__scopeId","data-v-59c1cb05"]]),at={props:{catalogNav:{type:Array,default:()=>[]}}},it={class:"catalog-nav-list"};function ct(o,l,e,d,i,p){const c=ot;return n(),_("ul",it,[(n(!0),_(v,null,w(e.catalogNav,(a,u)=>(n(),x(c,{key:u,title:a.title,"img-url":a.url,"is-span":a.span},null,8,["title","img-url","is-span"]))),128))])}const _t=m(at,[["render",ct],["__scopeId","data-v-137a9b38"]]),lt={props:{link:{type:Boolean,default:!1},linkText:{type:String,default:""}}},rt={class:"title"},dt={class:"title__h2"};function pt(o,l,e,d,i,p){const c=b,a=k;return n(),_("div",rt,[t("h2",dt,[j(o.$slots,"default",{},void 0,!0)]),e.link?(n(),x(a,{key:0,to:"#",class:"title__link"},{default:r(()=>[t("span",null,f(e.linkText),1),s(c,{class:"title__icon",width:"24",height:"24",name:"arrow-right"})]),_:1})):T("",!0)])}const S=m(lt,[["render",pt],["__scopeId","data-v-8b68e35b"]]),mt={data(){return{value:1}},methods:{increment(){return this.value++},decrement(){return this.value<1?this.value:this.value--}}},ut={class:"number"};function gt(o,l,e,d,i,p){const c=b;return n(),_("div",ut,[t("button",{onClick:l[0]||(l[0]=(...a)=>p.decrement&&p.decrement(...a)),class:"number__btn","aria-label":"Уменьшить"},[s(c,{width:"24",height:"24",name:"remove-minus"})]),A(t("input",{"onUpdate:modelValue":l[1]||(l[1]=a=>i.value=a),class:"number__input",type:"number",step:"1",min:"1"},null,512),[[D,i.value]]),t("button",{onClick:l[2]||(l[2]=(...a)=>p.increment&&p.increment(...a)),class:"number__btn","aria-label":"Увеличить"},[s(c,{width:"24",height:"24",name:"add-plus"})])])}const ft=m(mt,[["render",gt],["__scopeId","data-v-ff168d0c"]]),ht={},$t={class:"btn"};function vt(o,l){return n(),_("button",$t,[j(o.$slots,"default")])}const M=m(ht,[["render",vt]]),wt={props:{card:{type:Object,default:()=>{}}}},xt={class:"goods-slider-card"},bt={class:"goods-slider-card__images",pagination:"true","pagination-clickable":"true"},yt=["src"],jt={class:"goods-slider-card__info"},kt={class:"goods-slider-card__title h3"},St={class:"goods-slider-card__price"},It={class:"goods-slider-card__actions"};function Ct(o,l,e,d,i,p){const c=k,a=ft,u=b,h=M;return n(),_("div",xt,[t("swiper-container",bt,[(n(!0),_(v,null,w(e.card.images,($,I)=>(n(),_("swiper-slide",{key:I},[t("img",{class:"goods-slider-card__img",src:$,alt:""},null,8,yt)]))),128))]),t("div",jt,[s(c,{class:"goods-slider-card__text",to:"#"},{default:r(()=>[t("h3",kt,f(e.card.title),1),t("span",St,f(e.card.price),1)]),_:1}),t("div",It,[s(a),s(h,null,{default:r(()=>[s(u,{width:"24",height:"24",name:"cart"})]),_:1})])])])}const Lt=m(wt,[["render",Ct],["__scopeId","data-v-c64f54af"]]),Tt={props:{cards:{type:Array,default:()=>[]}}},At={class:"swiper"},Bt={class:"goods-slider","slides-per-view":"4",mousewheel:"true","allow-touch-move":"false","space-between":"60"};function Mt(o,l,e,d,i,p){const c=Lt;return n(),_("div",At,[t("swiper-container",Bt,[(n(!0),_(v,null,w(e.cards,(a,u)=>(n(),_("swiper-slide",{class:"goods-slider__item",key:u},[s(c,{card:a},null,8,["card"])]))),128))])])}const Nt=m(Tt,[["render",Mt],["__scopeId","data-v-65a4e8b8"]]),Ot=B("/images/tools-store.jpg"),Ht={},Vt=o=>(C("data-v-35c68279"),o=o(),L(),o),Ut=Vt(()=>t("div",{class:"about-company__content"},[t("div",{class:"about-company__text"},[t("span",{class:"grey"},"Цитата"),t("p",null,"Но интерактивные прототипы представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть своевременно верифицированы. Банальные, но неопровержимые выводы, а также независимые государства освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, ассоциативно распределены по отраслям. Картельные сговоры не допускают ситуации, при которой сторонники тоталитаризма в науке лишь добавляют фракционных разногласий и объединены в целые кластеры себе подобных. Вот вам яркий пример современных тенденций — укрепление и развитие внутренней структуры предопределяет высокую востребованность системы обучения кадров, соответствующей насущным потребностям. Сложно сказать, почему акционеры крупнейших компаний могут быть призваны к ответу. Прежде всего, повышение уровня гражданского сознания создаёт предпосылки для стандартных подходов."),t("span",null,[g("Alex Lee / "),t("span",{class:"grey"},"Основатель компании")])]),t("div",{class:"about-company__img"},[t("img",{src:Ot,alt:""})])],-1));function Dt(o,l){const e=S,d=y;return n(),x(d,{class:"about-company"},{default:r(()=>[s(e,null,{default:r(()=>[g("О компании")]),_:1}),Ut]),_:1})}const zt=m(Ht,[["render",Dt],["__scopeId","data-v-35c68279"]]),N=B("/images/work-tools.jpg"),Et={props:{newsCard:{type:Object,default:()=>{}},isImgLeft:{type:Boolean,default:!1}}},Ft={key:0,class:"main-news-card"},Wt=t("div",{class:"main-news-card__img"},[t("img",{src:N,alt:""})],-1),Rt={class:"main-news-card__content"},qt={class:"main-news-card__title"},Gt=["innerHTML"],Jt={key:1,class:"main-news-card"},Kt={class:"main-news-card__content"},Pt={class:"main-news-card__title"},Qt=["innerHTML"],Xt=t("div",{class:"main-news-card__img"},[t("img",{src:N,alt:""})],-1);function Yt(o,l,e,d,i,p){const c=k;return e.newsCard.img_left?(n(),_("div",Ft,[Wt,t("div",Rt,[t("h3",qt,f(e.newsCard.title),1),t("div",{innerHTML:e.newsCard.text,class:"main-news-card__text"},null,8,Gt),s(c,{class:"main-news-card__link",to:"#"},{default:r(()=>[g("Подробнее")]),_:1})])])):(n(),_("div",Jt,[t("div",Kt,[t("h3",Pt,f(e.newsCard.title),1),t("div",{innerHTML:e.newsCard.text,class:"main-news-card__text"},null,8,Qt),s(c,{class:"main-news-card__link",to:"#"},{default:r(()=>[g("Подробнее")]),_:1})]),Xt]))}const Zt=m(Et,[["render",Yt]]),te={props:{newsList:{type:Array,default:()=>[]}}},ee={class:"main-news-list"};function se(o,l,e,d,i,p){const c=Zt;return n(),_("ul",ee,[(n(!0),_(v,null,w(e.newsList,(a,u)=>(n(),_("li",{class:"main-news-list__item",key:u},[s(c,{"news-card":a},null,8,["news-card"])]))),128))])}const ne=m(te,[["render",se],["__scopeId","data-v-1366c1b5"]]),oe={props:{newsList:{type:Array,default:()=>[]}}};function ae(o,l,e,d,i,p){const c=S,a=ne,u=y;return n(),x(u,null,{default:r(()=>[s(c,{link:"","link-text":"все новости"},{default:r(()=>[g("Новости компании")]),_:1}),s(a,{"news-list":e.newsList},null,8,["news-list"])]),_:1})}const ie=m(oe,[["render",ae]]),ce={props:{acc:{type:Object,default:()=>{}}},data(){return{isOpen:!1}}},_e={class:"accordion"},le={key:0,class:"accordion__content"},re=["innerHTML"];function de(o,l,e,d,i,p){const c=b;return n(),_("div",_e,[t("button",{onClick:l[0]||(l[0]=a=>i.isOpen=!i.isOpen),class:"accordion__btn"},[t("span",null,f(e.acc.title),1),s(c,{name:i.isOpen?"remove-minus":"add-plus",width:"24",height:"24"},null,8,["name"])]),s(z,null,{default:r(()=>[i.isOpen?(n(),_("div",le,[t("div",{innerHTML:e.acc.text},null,8,re)])):T("",!0)]),_:1})])}const pe=m(ce,[["render",de],["__scopeId","data-v-d58cc346"]]),me={props:{accList:{type:Array,default:()=>[]}}},ue={class:"main-accordion__list"};function ge(o,l,e,d,i,p){const c=S,a=pe,u=y;return n(),x(u,{class:"main-accordion"},{default:r(()=>[s(c,null,{default:r(()=>[g("Частые вопросы")]),_:1}),t("ul",ue,[(n(!0),_(v,null,w(e.accList,(h,$)=>(n(),_("li",{class:"main-accordion__item",key:$},[s(a,{acc:h},null,8,["acc"])]))),128))])]),_:1})}const fe=m(me,[["render",ge],["__scopeId","data-v-99548e15"]]),he={props:{label:{type:String,default:""},type:{type:String,default:""},id:{type:String,default:""},placeholder:{type:String,default:""}},data(){return{value:""}}},$e={class:"input"},ve=["for"],we=["type","id","placeholder"];function xe(o,l,e,d,i,p){return n(),_("div",$e,[t("label",{for:e.id,class:"input__label"},f(e.label),9,ve),A(t("input",{type:e.type,id:e.id,"onUpdate:modelValue":l[0]||(l[0]=c=>i.value=c),placeholder:e.placeholder,class:"input__field"},null,8,we),[[E,i.value]])])}const be=m(he,[["render",xe],["__scopeId","data-v-c58a06c2"]]),ye={},je=o=>(C("data-v-28eb084b"),o=o(),L(),o),ke={class:"subscribe__content"},Se=je(()=>t("div",{class:"subscribe__text"},[t("h2",{class:"h2"},"Подпишитесь"),t("p",null,"И будьте в курсе новостей и акций")],-1)),Ie={class:"subscribe__form"};function Ce(o,l){const e=be,d=M,i=y;return n(),x(i,{class:"subscribe"},{default:r(()=>[t("div",ke,[Se,t("form",Ie,[s(e,{label:"E-mail",id:"email",type:"email",placeholder:"example@mail.com"}),s(d,{type:"submit"},{default:r(()=>[g("Подписаться")]),_:1})])])]),_:1})}const Le=m(ye,[["render",Ce],["__scopeId","data-v-28eb084b"]]),Te={data(){return{slides:[{url:"/images/tools.jpg"},{url:"/images/tools.jpg"},{url:"/images/tools.jpg"}],catalogNav:[{title:"Инструменты",url:"/images/y-tools.jpg",span:!1},{title:"Электрика",url:"/images/y-tools.jpg",span:!1},{title:"Сантехника",url:"/images/y-tools.jpg",span:!1},{title:"Инструменты",url:"/images/y-tools.jpg",span:!1},{title:"Электрика",url:"/images/y-tools.jpg",span:!1},{title:"Сантехника",url:"/images/y-tools.jpg",span:!1},{title:"Весь каталог",url:"/images/y-tools.jpg",span:!0}],saleCards:[{images:["/images/goods-item-1.jpg","/images/goods-item-1.jpg","/images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"},{images:["/images/goods-item-1.jpg","/images/goods-item-1.jpg","/images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"},{images:["/images/goods-item-1.jpg","/images/goods-item-1.jpg","/images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"},{images:["/images/goods-item-1.jpg","/images/goods-item-1.jpg","/images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"},{images:["/images/goods-item-1.jpg","/images/goods-item-1.jpg","/images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"}],newCards:[{images:["/images/goods-item-1.jpg","/images/goods-item-1.jpg","/images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"},{images:["/images/goods-item-1.jpg","/images/goods-item-1.jpg","/images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"},{images:["/images/goods-item-1.jpg","/images/goods-item-1.jpg","/images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"},{images:["/images/goods-item-1.jpg","/images/goods-item-1.jpg","/images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"},{images:["/images/goods-item-1.jpg","/images/goods-item-1.jpg","/images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"}],news:[{image:"/images/work-tools.jpg",title:"Заголовок новости",text:"<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p><p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>",img_left:!0},{image:"/images/work-tools.jpg",title:"Заголовок новости",text:"<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>",img_left:!1},{image:"/images/work-tools.jpg",title:"Заголовок новости",text:"<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>",img_left:!0}],acc_list:[{title:"Вопрос 1",text:"<p>Вот вам яркий пример современных тенденций — базовый вектор развития требует анализа позиций, занимаемых участниками в отношении поставленных задач. Таким образом, глубокий уровень погружения однозначно определяет каждого участника как способного принимать собственные решения касаемо благоприятных перспектив.</p>"},{title:"Вопрос 2",text:"<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений. </p>"},{title:"Вопрос 3",text:"<p>Вот вам яркий пример современных тенденций — базовый вектор развития требует анализа позиций, занимаемых участниками в отношении поставленных задач. Таким образом, глубокий уровень погружения однозначно определяет каждого участника как способного принимать собственные решения касаемо благоприятных перспектив.</p>"}]}}};function Ae(o,l,e,d,i,p){const c=K,a=y,u=_t,h=S,$=Nt,I=zt,O=ie,H=fe,V=Le;return n(),_("main",null,[s(a,{class:"main-slider",wide:""},{default:r(()=>[s(c,{"main-slides":i.slides},null,8,["main-slides"])]),_:1}),s(a,{class:"catalog-nav"},{default:r(()=>[s(u,{"catalog-nav":i.catalogNav},null,8,["catalog-nav"])]),_:1}),s(a,null,{default:r(()=>[s(h,{link:"","link-text":"все акции"},{default:r(()=>[g("Товары по акции / Популярное")]),_:1}),s($,{cards:i.saleCards},null,8,["cards"])]),_:1}),s(a,null,{default:r(()=>[s(h,{link:"","link-text":"все новинки"},{default:r(()=>[g("Новинки")]),_:1}),s($,{cards:i.newCards},null,8,["cards"])]),_:1}),s(I),s(O,{"news-list":i.news},null,8,["news-list"]),s(H,{"acc-list":i.acc_list},null,8,["acc-list"]),s(V)])}const Oe=m(Te,[["render",Ae]]);export{Oe as default};
