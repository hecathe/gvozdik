import{_ as u}from"./BcPtY8ab.js";import{_ as g}from"./DeU2WG7e.js";import{_,o as e,c as s,b as c,w as f,a as n,t as v,u as h,F as k,h as x,E as y}from"./Cq_b5go8.js";const $={props:{title:{type:String,default:""},imgUrl:{type:String,default:""},isSpan:{type:Boolean,default:""},link:{type:String,default:""}}},S={class:"catalog-nav-item__content"},w={class:"catalog-nav-item__background"},B=["src"];function N(l,i,t,r,m,d){const o=u,a=g;return e(),s("li",{class:h(["catalog-nav-item",{"span-2":t.isSpan}])},[c(a,{to:t.link,class:"catalog-nav-item__link"},{default:f(()=>[n("div",S,[n("h3",null,v(t.title),1),c(o,{class:"catalog-nav-item__icon",width:"28",height:"28",name:"arrow-down-right"})]),n("div",w,[n("img",{class:"catalog-nav-item__img",src:t.imgUrl,alt:""},null,8,B)])]),_:1},8,["to"])],2)}const b=_($,[["render",N],["__scopeId","data-v-298cee83"]]),C={props:{catalogNav:{type:Array,default:()=>[]}}},E={class:"catalog-nav-list"};function F(l,i,t,r,m,d){const o=b;return e(),s("ul",E,[(e(!0),s(k,null,x(t.catalogNav,(a,p)=>(e(),y(o,{key:p,title:a.title,"img-url":a.url,link:a.link,"is-span":a.span},null,8,["title","img-url","link","is-span"]))),128))])}const z=_(C,[["render",F],["__scopeId","data-v-cf963fac"]]);export{z as _};
