import{_ as v}from"./DqKgHpY7.js";import{_ as g,r as w,f,c as i,a as o,g as y,v as k,F as u,h as d,o as a,t as p,b as x}from"./CLP-lSpL.js";import{u as b}from"./OwQfYnii.js";const C=["icons/add-plus","icons/arrow-down","icons/bath","icons/arrow-left","icons/brick-wall","icons/arrow-up","icons/arrow-down-right","icons/arrow-right","icons/burger","icons/check","icons/chevron-left-md","icons/chevron-right-md","icons/cart","icons/close","icons/construction-rounded","icons/heart","icons/logo","icons/more-grid","icons/pipeline","icons/power-supply","icons/remove-minus","icons/screw","icons/search","icons/user","icons/star","icons/telegram","icons/trash","icons/wrench","icons/whatsapp","icons/youtube","icons/vk"],I={class:"_icon-container"},S={class:"_icon-search-wrapper"},z={class:"_icon-sprite-title"},B={class:"_icon-card"},F={class:"_icon-svg"},N={class:"_icon-name"},V=["value"],D={__name:"icons-page",props:{size:{type:Number,default:60},onClick:{type:Function,default:()=>()=>{}}},setup(l){const _=l;b({title:"Icons list - @nuxtjs/svg-sprite"});const r=w(""),h=f(()=>C.filter(e=>r.value?e.match(r.value||""):!0).reduce((e,s)=>{const[c,n]=s.split("/");return e[c]=e[c]||{name:c,symbols:[]},e[c].symbols.push({name:n,key:s}),e},{})),m=e=>{const s=e.target;s.select(),s.setSelectionRange(0,99999),document.execCommand("copy"),_.onClick(`Icon "${e.target.value}" copied to clipboard`)};return(e,s)=>{const c=v;return a(),i("div",I,[o("div",S,[y(o("input",{"onUpdate:modelValue":s[0]||(s[0]=n=>r.value=n),class:"_icon-search",placeholder:"Search Icons"},null,512),[[k,r.value]])]),o("div",null,[(a(!0),i(u,null,d(h.value,n=>(a(),i("div",{key:n.name,class:"_icon-preview-wrapper"},[o("h2",z,p(n.name),1),(a(!0),i(u,null,d(n.symbols,t=>(a(),i("div",{key:t.key,class:"_icon-preview"},[o("div",B,[o("div",F,[x(c,{name:t.key,title:t.key,class:"icon",width:l.size+"px",height:l.size+"px"},null,8,["name","title","width","height"])]),o("code",N,p(t.name),1),o("input",{class:"_icon-name-input",type:"text",readonly:"",value:t.key,onClick:m},null,8,V)])]))),128))]))),128))])])}}},E=g(D,[["__scopeId","data-v-ada2fcf8"]]);export{E as default};
