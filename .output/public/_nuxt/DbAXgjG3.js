import{_ as h}from"./CxO9Ztfi.js";import{_ as k}from"./B0nxGHHs.js";import{_ as r,o as s,x as $,w as g,a as n,t as m,c as o,F as w,h as f,A as x,b as c,d as b}from"./DzJswuHz.js";import{_ as j}from"./DLzb-6IM.js";import{_ as z}from"./BCmcGo2f.js";const C={props:{newsCard:{type:Object,default:()=>{}}}},y={class:"news-card__img"},L=["src"],B={class:"news-card__content"},N={class:"news-card__title"},T=["innerHTML"],V={class:"news-card__date"};function A(l,p,t,d,a,u){const e=k;return s(),$(e,{to:t.newsCard.url,class:"news-list__card news-card"},{default:g(()=>[n("div",y,[n("img",{src:t.newsCard.image,alt:""},null,8,L)]),n("div",B,[n("h3",N,m(t.newsCard.title),1),n("div",{class:"news-card__text",innerHTML:t.newsCard.content},null,8,T),n("span",V,m(t.newsCard.date),1)])]),_:1},8,["to"])}const F=r(C,[["render",A],["__scopeId","data-v-a8bde695"]]),H={props:{newsList:{type:Array,default:()=>[]}}},I={class:"news-list"};function M(l,p,t,d,a,u){const e=F;return s(),o("ul",I,[(s(!0),o(w,null,f(t.newsList,(_,i)=>(s(),o("li",{class:x(["news-list__item",{"span-2":_.span}]),key:i},[c(e,{"news-card":_},null,8,["news-card"])],2))),128))])}const P=r(H,[["render",M],["__scopeId","data-v-d19ff6de"]]),D={props:{},data(){return{totalPages:5}}},E={class:"pagination"},O={class:"pagination__list pagination-list"},S={class:"pagination-list__btn"};function q(l,p,t,d,a,u){const e=j;return s(),o("div",E,[c(e,{class:"pagination__btn"},{default:g(()=>[b("Показать ещё")]),_:1}),n("ul",O,[(s(!0),o(w,null,f(a.totalPages,(_,i)=>(s(),o("li",{class:"pagination__item pagination-list__item",key:i},[n("button",S,m(_),1)]))),128))])])}const G=r(D,[["render",q],["__scopeId","data-v-0b905618"]]),J={data(){return{breadcrumbs:[{link:"/",title:"Главная",active:!1},{link:"#",title:"Новости",active:!0}],news:[{title:"Заголовок новости 1",content:"<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>",image:"images/work-tools.jpg",date:"11/04/2024",url:"/news/zagolovok-novosti-1/",span:!0},{title:"Заголовок новости 2",content:"<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>",image:"images/work-tools.jpg",date:"11/04/2024",url:"/news/zagolovok-novosti-2/",span:!1},{title:"Заголовок новости 3",content:"<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>",image:"images/work-tools.jpg",date:"11/04/2024",url:"/news/zagolovok-novosti-3/",span:!1},{title:"Заголовок новости 4",content:"<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>",image:"images/work-tools.jpg",date:"11/04/2024",url:"/news/zagolovok-novosti-4/",span:!1},{title:"Заголовок новости 5",content:"<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>",image:"images/work-tools.jpg",date:"11/04/2024",url:"/news/zagolovok-novosti-5/",span:!1},{title:"Заголовок новости 6",content:"<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>",image:"images/work-tools.jpg",date:"11/04/2024",url:"/news/zagolovok-novosti-6/",span:!1},{title:"Заголовок новости 7",content:"<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>",image:"images/work-tools.jpg",date:"11/04/2024",url:"/news/zagolovok-novosti-7/",span:!0}]}}},K={class:"main"},Q=n("h1",{class:"h1"},"Новости",-1);function R(l,p,t,d,a,u){const e=h,_=P,i=G,v=z;return s(),o("main",K,[c(e,{breadcrumbs:a.breadcrumbs},null,8,["breadcrumbs"]),c(v,{class:"news"},{default:g(()=>[Q,c(_,{"news-list":a.news},null,8,["news-list"]),c(i)]),_:1})])}const tt=r(J,[["render",R]]);export{tt as default};
