import{_ as k}from"./kqW-cnsa.js";import{_ as d,o as s,c as _,a as e,b as o,p as h,e as $,F as v,h as b,w as p,d as x,t as g,E as S,y as M,g as N,I as F,H as V}from"./8UN-zW5B.js";import{_ as y}from"./CZq1LtFl.js";import{_ as z}from"./BtujsOCy.js";import{_ as B}from"./GTmz-RUf.js";import{_ as H}from"./NfV2Vyf-.js";const O={},C=t=>(h("data-v-5cd7d435"),t=t(),$(),t),D={class:"notice"},E={class:"container"},U={class:"notice__wrap"},T=C(()=>e("p",{class:"notice__text"},"Скидка 20% на первый заказ",-1)),j={class:"notice__btn","aria-label":"Закрыть"};function q(t,l){const n=k;return s(),_("div",D,[e("div",E,[e("div",U,[T,e("button",j,[o(n,{name:"close",width:"24",height:"24"})])])])])}const G=d(O,[["render",q],["__scopeId","data-v-5cd7d435"]]),J={props:{navList:{type:Array,default:()=>[]}}},K={class:"nav"},P={class:"nav__list"};function Q(t,l,n,u,c,m){const i=y;return s(),_("nav",K,[e("ul",P,[(s(!0),_(v,null,b(n.navList,(a,r)=>(s(),_("li",{class:"nav__item",key:r},[o(i,{class:"nav__link",to:a.link},{default:p(()=>[x(g(a.name),1)]),_:2},1032,["to"])]))),128))])])}const R=d(J,[["render",Q],["__scopeId","data-v-1143e328"]]),W={},X=t=>(h("data-v-501cb9e3"),t=t(),$(),t),Y={class:"search"},Z=X(()=>e("input",{class:"search__input",placeholder:"Поиск...",type:"search",name:"",id:""},null,-1));function tt(t,l){const n=k;return s(),_("div",Y,[o(n,{class:"search__icon",width:"24",height:"24",name:"search"}),Z])}const et=d(W,[["render",tt],["__scopeId","data-v-501cb9e3"]]),nt={props:{userActions:{type:Array,default:()=>[]}}},ot={class:"user-actions"};function st(t,l,n,u,c,m){const i=k,a=y;return s(),_("ul",ot,[(s(!0),_(v,null,b(n.userActions,(r,f)=>(s(),_("li",{class:"user-actions__item",key:f},[o(a,{class:"user-actions__link",to:r.link},{default:p(()=>[o(i,{name:r.name,width:"24",height:"24"},null,8,["name"])]),_:2},1032,["to"])]))),128))])}const _t=d(nt,[["render",st],["__scopeId","data-v-b78d30d3"]]),ct={props:{asideMenu:{type:Array,default:()=>[]}}},at=t=>(h("data-v-a6113d63"),t=t(),$(),t),it={class:"menu"},lt={class:"container"},rt={class:"menu__aside"},dt=at(()=>e("div",null,[e("h2",null,"Инструмент"),e("ul")],-1));function ut(t,l,n,u,c,m){const i=y;return s(),_("div",it,[e("div",lt,[e("ul",rt,[(s(!0),_(v,null,b(n.asideMenu,(a,r)=>(s(),_("li",{key:r},[o(i,{to:a.url},{default:p(()=>[x(g(a.name),1)]),_:2},1032,["to"])]))),128))]),dt])])}const pt=d(ct,[["render",ut],["__scopeId","data-v-a6113d63"]]),mt={props:{navList:{type:Array,default:()=>[]},userActions:{type:Array,default:()=>[]}},data(){return{isMenuOpen:!1}}},L=t=>(h("data-v-121d3e54"),t=t(),$(),t),ft={class:"header"},ht={class:"container"},$t={class:"header__top"},vt=L(()=>e("a",{class:"header__phone",href:"tel:8 800 555 55 55"},"8 800 555 55 55",-1)),yt={class:"header__bottom"},bt={class:"header__wrap"},xt=L(()=>e("span",null,"Каталог",-1));function kt(t,l,n,u,c,m){const i=k,a=y,r=R,f=et,A=_t,I=pt;return s(),_("header",ft,[e("div",ht,[e("div",$t,[o(a,{to:"/",class:"header__logo"},{default:p(()=>[o(i,{name:"logo",width:"121",height:"64"})]),_:1}),o(r,{"nav-list":n.navList},null,8,["nav-list"]),vt]),e("div",yt,[e("div",bt,[e("button",{onClick:l[0]||(l[0]=he=>c.isMenuOpen=!c.isMenuOpen),class:"header__catalog-btn"},[o(i,{width:"24",height:"24",name:"more-grid"}),xt]),o(f)]),o(A,{"user-actions":n.userActions},null,8,["user-actions"])]),c.isMenuOpen?(s(),S(I,{key:0})):M("",!0)])])}const gt=d(mt,[["render",kt],["__scopeId","data-v-121d3e54"]]),At={props:{label:{type:String,default:""},type:{type:String,default:""},id:{type:String,default:""},placeholder:{type:String,default:""}},data(){return{value:""}}},It={class:"input"},wt=["for"],St=["type","id","placeholder"];function Lt(t,l,n,u,c,m){return s(),_("div",It,[e("label",{for:n.id,class:"input__label"},g(n.label),9,wt),N(e("input",{type:n.type,id:n.id,"onUpdate:modelValue":l[0]||(l[0]=i=>c.value=i),placeholder:n.placeholder,class:"input__field"},null,8,St),[[F,c.value]])])}const Mt=d(At,[["render",Lt],["__scopeId","data-v-2dc26ace"]]),Nt={},Ft=t=>(h("data-v-28eb084b"),t=t(),$(),t),Vt={class:"subscribe__content"},zt=Ft(()=>e("div",{class:"subscribe__text"},[e("h2",{class:"h2"},"Подпишитесь"),e("p",null,"И будьте в курсе новостей и акций")],-1)),Bt={class:"subscribe__form"};function Ht(t,l){const n=Mt,u=z,c=B;return s(),S(c,{class:"subscribe"},{default:p(()=>[e("div",Vt,[zt,e("form",Bt,[o(n,{label:"E-mail",id:"email",type:"email",placeholder:"example@mail.com"}),o(u,{type:"submit"},{default:p(()=>[x("Подписаться")]),_:1})])])]),_:1})}const Ot=d(Nt,[["render",Ht],["__scopeId","data-v-28eb084b"]]),Ct={props:{navList:{type:Array,default:()=>[]}}},Dt={class:"footer-nav"};function Et(t,l,n,u,c,m){const i=y;return s(),_("ul",Dt,[(s(!0),_(v,null,b(n.navList,(a,r)=>(s(),_("li",{class:"footer-nav__item",key:r},[o(i,{class:"footer-nav__link",to:"#"},{default:p(()=>[x(g(a),1)]),_:2},1024)]))),128))])}const Ut=d(Ct,[["render",Et],["__scopeId","data-v-b7a89a21"]]),Tt={props:{footerMenu:{type:Array,default:()=>[]}}},jt={class:"footer-menu"};function qt(t,l,n,u,c,m){const i=y;return s(),_("ul",jt,[(s(!0),_(v,null,b(n.footerMenu,(a,r)=>(s(),_("li",{class:"footer-menu__item",key:r},[o(i,{class:"footer-menu__link",to:a.link},{default:p(()=>[x(g(a.name),1)]),_:2},1032,["to"])]))),128))])}const Gt=d(Tt,[["render",qt],["__scopeId","data-v-bf248c61"]]),Jt={props:{paymentList:{type:Array,default:()=>[]}}},Kt=t=>(h("data-v-51a06f5e"),t=t(),$(),t),Pt={class:"payment"},Qt=Kt(()=>e("h3",{class:"payment__title"},"Мы принимаем к оплате",-1)),Rt={class:"payment__list"},Wt=["src"];function Xt(t,l,n,u,c,m){return s(),_("div",Pt,[Qt,e("ul",Rt,[(s(!0),_(v,null,b(n.paymentList,(i,a)=>(s(),_("li",{class:"payment__item",key:a},[e("img",{src:i,alt:""},null,8,Wt)]))),128))])])}const Yt=d(Jt,[["render",Xt],["__scopeId","data-v-51a06f5e"]]),Zt={props:{navList:{type:Array,default:()=>[]},footerMenu:{type:Array,default:()=>[]},socialList:{type:Array,default:()=>[]},paymentList:{type:Array,default:()=>[]}}},w=t=>(h("data-v-54773769"),t=t(),$(),t),te={class:"footer"},ee={class:"container"},ne={class:"footer__top"},oe={class:"footer__block"},se=w(()=>e("a",{class:"footer__tel",href:"tel:8 800 555 55 55"},"8 800 555 55 55",-1)),_e={class:"footer__block"},ce=w(()=>e("h3",{class:"footer__title"},"Каталог",-1)),ae={class:"footer__block"},ie={class:"footer__bottom"},le={class:"footer__block"},re=w(()=>e("span",null,"© 2024 «Гвоздик»",-1)),de={class:"footer__block"};function ue(t,l,n,u,c,m){const i=k,a=y,r=H,f=Ut,A=Gt,I=Yt;return s(),_("footer",te,[e("div",ee,[e("div",ne,[e("div",oe,[o(a,{to:"/",class:"footer__logo"},{default:p(()=>[o(i,{name:"logo",width:"150",height:"64"})]),_:1}),se,o(r,{"social-list":n.socialList},null,8,["social-list"])]),e("div",_e,[ce,o(f,{"nav-list":n.navList},null,8,["nav-list"])]),e("div",ae,[o(A,{"footer-menu":n.footerMenu},null,8,["footer-menu"])])]),e("div",ie,[e("div",le,[re,o(a,{class:"footer__link",to:"#"},{default:p(()=>[x("Политика конфиденциальности")]),_:1})]),e("div",de,[o(I,{"payment-list":n.paymentList},null,8,["payment-list"])])])])])}const pe=d(Zt,[["render",ue],["__scopeId","data-v-54773769"]]),me={data(){return{menu:[{name:"Новости",link:"/news"},{name:"О компании",link:"#"},{name:"Доставка",link:"#"},{name:"Контакты",link:"#"}],user_menu:[{name:"heart"},{name:"user"},{name:"cart",link:"/cart"}],catalog_nav:["Электрика","Инструмент","Сантехника","Стройматериалы","Электрика","Инструмент","Сантехника","Стройматериалы","Электрика","Инструмент","Сантехника","Стройматериалы"],social:[{whatsapp:"#"},{telegram:"#"},{youtube:"#"},{vk:"#"}],cards:["/gvozdik/images/mastercard.png","/gvozdik/images/visa.png","/gvozdik/images/sbp.png","/gvozdik/images/mir.png"]}}};function fe(t,l,n,u,c,m){const i=G,a=gt,r=Ot,f=pe;return s(),_(v,null,[o(i),o(a,{"nav-list":c.menu,"user-actions":c.user_menu},null,8,["nav-list","user-actions"]),V(t.$slots,"default"),o(r),o(f,{"nav-list":c.catalog_nav,"footer-menu":c.menu,"social-list":c.social,"payment-list":c.cards},null,8,["nav-list","footer-menu","social-list","payment-list"])],64)}const ge=d(me,[["render",fe]]);export{ge as default};
