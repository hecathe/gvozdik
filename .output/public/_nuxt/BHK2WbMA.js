import{_ as k}from"./B38qNOhj.js";import{_ as u,o as s,c as _,a as e,b as o,p as f,e as v,F as $,h as y,w as m,d as b,t as x,E as M,y as C,J as N}from"./YdhPWYN_.js";import{_ as g}from"./i-XU8F2F.js";import{_ as F}from"./D6uqCMuP.js";import{_ as H}from"./CfM0U8Aj.js";import{_ as O}from"./CN0L23w3.js";import{_ as z}from"./CIN4WMqu.js";const B={},V=t=>(f("data-v-5cd7d435"),t=t(),v(),t),E={class:"notice"},U={class:"container"},D={class:"notice__wrap"},J=V(()=>e("p",{class:"notice__text"},"Скидка 20% на первый заказ",-1)),T={class:"notice__btn","aria-label":"Закрыть"};function j(t,r){const n=k;return s(),_("div",E,[e("div",U,[e("div",D,[J,e("button",T,[o(n,{name:"close",width:"24",height:"24"})])])])])}const q=u(B,[["render",j],["__scopeId","data-v-5cd7d435"]]),G={props:{navList:{type:Array,default:()=>[]}}},K={class:"nav"},P={class:"nav__list"};function Q(t,r,n,p,a,d){const i=g;return s(),_("nav",K,[e("ul",P,[(s(!0),_($,null,y(n.navList,(c,l)=>(s(),_("li",{class:"nav__item",key:l},[o(i,{class:"nav__link",to:c.link},{default:m(()=>[b(x(c.name),1)]),_:2},1032,["to"])]))),128))])])}const R=u(G,[["render",Q],["__scopeId","data-v-1143e328"]]),W={},X=t=>(f("data-v-501cb9e3"),t=t(),v(),t),Y={class:"search"},Z=X(()=>e("input",{class:"search__input",placeholder:"Поиск...",type:"search",name:"",id:""},null,-1));function tt(t,r){const n=k;return s(),_("div",Y,[o(n,{class:"search__icon",width:"24",height:"24",name:"search"}),Z])}const et=u(W,[["render",tt],["__scopeId","data-v-501cb9e3"]]),nt={props:{userActions:{type:Array,default:()=>[]}}},ot={class:"user-actions"};function st(t,r,n,p,a,d){const i=k,c=g;return s(),_("ul",ot,[(s(!0),_($,null,y(n.userActions,(l,h)=>(s(),_("li",{class:"user-actions__item",key:h},[o(c,{class:"user-actions__link",to:l.link},{default:m(()=>[o(i,{name:l.name,width:"24",height:"24"},null,8,["name"])]),_:2},1032,["to"])]))),128))])}const _t=u(nt,[["render",st],["__scopeId","data-v-b78d30d3"]]),ct={props:{asideList:{type:Array,default:()=>[]}},methods:{clickHandler(){this.$emit("toggle-menu")}}},at={class:"menu-aside-list"};function it(t,r,n,p,a,d){const i=k,c=g;return s(),_("ul",at,[(s(!0),_($,null,y(n.asideList,(l,h)=>(s(),_("li",{class:"menu-aside-list__item",key:h},[o(c,{class:"menu-aside-list__link",to:l.link,onClick:d.clickHandler},{default:m(()=>[o(i,{class:"menu-aside-list__icon",name:l.svg_name,width:"24",height:"24"},null,8,["name"]),b(" "+x(l.title),1)]),_:2},1032,["to","onClick"])]))),128))])}const lt=u(ct,[["render",it],["__scopeId","data-v-bf289a3d"]]),rt={props:{asideMenu:{type:Array,default:()=>[]}}},dt=t=>(f("data-v-04798637"),t=t(),v(),t),ut={class:"menu"},pt={class:"container"},mt={class:"menu__wrap"},ht=dt(()=>e("div",null,[e("h2",null,"Инструмент"),e("ul")],-1));function ft(t,r,n,p,a,d){const i=lt;return s(),_("div",ut,[e("div",pt,[e("div",mt,[o(i,{"aside-list":n.asideMenu},null,8,["aside-list"]),ht])])])}const vt=u(rt,[["render",ft],["__scopeId","data-v-04798637"]]),$t={props:{navList:{type:Array,default:()=>[]},userActions:{type:Array,default:()=>[]},asideMenu:{type:Array,default:()=>[]}},data(){return{isMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen}}},L=t=>(f("data-v-1ce3ea4d"),t=t(),v(),t),gt={class:"header"},kt={class:"container"},yt={class:"header__top"},bt=L(()=>e("a",{class:"header__phone",href:"tel:8 800 555 55 55"},"8 800 555 55 55",-1)),xt={class:"header__bottom"},wt={class:"header__wrap"},At=L(()=>e("span",null,"Каталог",-1));function It(t,r,n,p,a,d){const i=k,c=g,l=R,h=et,w=_t,A=vt;return s(),_("header",gt,[e("div",kt,[e("div",yt,[o(c,{to:"/",class:"header__logo"},{default:m(()=>[o(i,{name:"logo",width:"121",height:"64"})]),_:1}),o(l,{"nav-list":n.navList},null,8,["nav-list"]),bt]),e("div",xt,[e("div",wt,[e("button",{onClick:r[0]||(r[0]=(...S)=>d.toggleMenu&&d.toggleMenu(...S)),class:"header__catalog-btn"},[o(i,{name:a.isMenuOpen?"close":"more-grid",width:"24",height:"24"},null,8,["name"]),At]),o(h)]),o(w,{"user-actions":n.userActions},null,8,["user-actions"])]),a.isMenuOpen?(s(),M(A,{key:0,"aside-menu":n.asideMenu,onCloseMenu:d.toggleMenu},null,8,["aside-menu","onCloseMenu"])):C("",!0)])])}const Mt=u($t,[["render",It],["__scopeId","data-v-1ce3ea4d"]]),Lt={},St=t=>(f("data-v-28eb084b"),t=t(),v(),t),Ct={class:"subscribe__content"},Nt=St(()=>e("div",{class:"subscribe__text"},[e("h2",{class:"h2"},"Подпишитесь"),e("p",null,"И будьте в курсе новостей и акций")],-1)),Ft={class:"subscribe__form"};function Ht(t,r){const n=F,p=H,a=O;return s(),M(a,{class:"subscribe"},{default:m(()=>[e("div",Ct,[Nt,e("form",Ft,[o(n,{label:"E-mail",id:"email",type:"email",placeholder:"example@mail.com"}),o(p,{type:"submit"},{default:m(()=>[b("Подписаться")]),_:1})])])]),_:1})}const Ot=u(Lt,[["render",Ht],["__scopeId","data-v-28eb084b"]]),zt={props:{navList:{type:Array,default:()=>[]}}},Bt={class:"footer-nav"};function Vt(t,r,n,p,a,d){const i=g;return s(),_("ul",Bt,[(s(!0),_($,null,y(n.navList,(c,l)=>(s(),_("li",{class:"footer-nav__item",key:l},[o(i,{class:"footer-nav__link",to:c.link},{default:m(()=>[b(x(c.title),1)]),_:2},1032,["to"])]))),128))])}const Et=u(zt,[["render",Vt],["__scopeId","data-v-711b684b"]]),Ut={props:{footerMenu:{type:Array,default:()=>[]}}},Dt={class:"footer-menu"};function Jt(t,r,n,p,a,d){const i=g;return s(),_("ul",Dt,[(s(!0),_($,null,y(n.footerMenu,(c,l)=>(s(),_("li",{class:"footer-menu__item",key:l},[o(i,{class:"footer-menu__link",to:c.link},{default:m(()=>[b(x(c.name),1)]),_:2},1032,["to"])]))),128))])}const Tt=u(Ut,[["render",Jt],["__scopeId","data-v-bf248c61"]]),jt={props:{paymentList:{type:Array,default:()=>[]}}},qt=t=>(f("data-v-51a06f5e"),t=t(),v(),t),Gt={class:"payment"},Kt=qt(()=>e("h3",{class:"payment__title"},"Мы принимаем к оплате",-1)),Pt={class:"payment__list"},Qt=["src"];function Rt(t,r,n,p,a,d){return s(),_("div",Gt,[Kt,e("ul",Pt,[(s(!0),_($,null,y(n.paymentList,(i,c)=>(s(),_("li",{class:"payment__item",key:c},[e("img",{src:i,alt:""},null,8,Qt)]))),128))])])}const Wt=u(jt,[["render",Rt],["__scopeId","data-v-51a06f5e"]]),Xt={props:{navList:{type:Array,default:()=>[]},footerMenu:{type:Array,default:()=>[]},socialList:{type:Array,default:()=>[]},paymentList:{type:Array,default:()=>[]}}},I=t=>(f("data-v-54773769"),t=t(),v(),t),Yt={class:"footer"},Zt={class:"container"},te={class:"footer__top"},ee={class:"footer__block"},ne=I(()=>e("a",{class:"footer__tel",href:"tel:8 800 555 55 55"},"8 800 555 55 55",-1)),oe={class:"footer__block"},se=I(()=>e("h3",{class:"footer__title"},"Каталог",-1)),_e={class:"footer__block"},ce={class:"footer__bottom"},ae={class:"footer__block"},ie=I(()=>e("span",null,"© 2024 «Гвоздик»",-1)),le={class:"footer__block"};function re(t,r,n,p,a,d){const i=k,c=g,l=z,h=Et,w=Tt,A=Wt;return s(),_("footer",Yt,[e("div",Zt,[e("div",te,[e("div",ee,[o(c,{to:"/",class:"footer__logo"},{default:m(()=>[o(i,{name:"logo",width:"150",height:"64"})]),_:1}),ne,o(l,{"social-list":n.socialList},null,8,["social-list"])]),e("div",oe,[se,o(h,{"nav-list":n.navList},null,8,["nav-list"])]),e("div",_e,[o(w,{"footer-menu":n.footerMenu},null,8,["footer-menu"])])]),e("div",ce,[e("div",ae,[ie,o(c,{class:"footer__link",to:"#"},{default:m(()=>[b("Политика конфиденциальности")]),_:1})]),e("div",le,[o(A,{"payment-list":n.paymentList},null,8,["payment-list"])])])])])}const de=u(Xt,[["render",re],["__scopeId","data-v-54773769"]]),ue={data(){return{menu:[{name:"Новости",link:"/news/"},{name:"О компании",link:"#"},{name:"Доставка",link:"/delivery/"},{name:"Контакты",link:"/contacts/"}],user_menu:[{name:"heart"},{name:"user"},{name:"cart",link:"/cart"}],catalog_nav:[{title:"Электрика",link:"/catalog/electric"},{title:"Инструмент",link:"/catalog/tools"},{title:"Сантехника",link:"/catalog/tools"},{title:"Стройматериалы",link:"/catalog/tools"},{title:"Электрика",link:"/catalog/tools"},{title:"Инструмент",link:"/catalog/tools"},{title:"Сантехника",link:"/catalog/tools"},{title:"Стройматериалы",link:"/catalog/tools"},{title:"Электрика",link:"/catalog/tools"},{title:"Инструмент",link:"/catalog/tools"},{title:"Сантехника",link:"/catalog/tools"},{title:"Стройматериалы",link:"/catalog/tools"}],social:[{whatsapp:"#"},{telegram:"#"},{youtube:"#"},{vk:"#"}],cards:["/gvozdik/images/mastercard.png","/gvozdik/images/visa.png","/gvozdik/images/sbp.png","/gvozdik/images/mir.png"],aside_menu:[{title:"Стройматериалы",link:"/catalog/building",svg_name:"brick-wall"},{title:"Инструмент",link:"/catalog/tools",svg_name:"construction-rounded"},{title:"Электрика",link:"/catalog/electric",svg_name:"brick-wall"},{title:"Крепёж",link:"/catalog/nails",svg_name:"screw"},{title:"Инженерные системы",link:"/catalog/pipelines",svg_name:"pipeline"},{title:"Сантехника",link:"/catalog/baths",svg_name:"bath"},{title:"Товары для дома",link:"/catalog/brick-wall",svg_name:"brick-wall"}]}}};function pe(t,r,n,p,a,d){const i=q,c=Mt,l=Ot,h=de;return s(),_($,null,[o(i),o(c,{"nav-list":a.menu,"user-actions":a.user_menu,"aside-menu":a.aside_menu},null,8,["nav-list","user-actions","aside-menu"]),N(t.$slots,"default"),o(l),o(h,{"nav-list":a.catalog_nav,"footer-menu":a.menu,"social-list":a.social,"payment-list":a.cards},null,8,["nav-list","footer-menu","social-list","payment-list"])],64)}const ye=u(ue,[["render",pe]]);export{ye as default};
