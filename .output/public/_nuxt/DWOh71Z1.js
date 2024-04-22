import{_ as R}from"./xk-6HPOF.js";import{_ as g,o,c as u,g as y,u as B,a as l,t as h,x as j,y as I,z as w,F as x,h as M,A as p,B as S,C as E,b as m,D as b,w as L,p as X,e as N}from"./CkZslKK8.js";import{_ as T}from"./C7jrxofQ.js";import{_ as F}from"./D2YbETip.js";import{_ as K}from"./CQYFW-QN.js";import{_ as U}from"./CpzZvRPT.js";import{_ as O}from"./DrX3JZg0.js";import{_ as A}from"./Cy3qd7bn.js";const D={props:{label:{type:String,default:""},id:{type:String,default:""},name:{type:String,default:""},value:{type:[String,Boolean,Number],default:null},checked:{type:Boolean,default:!1},checkbox:{type:Boolean,default:!1}}},W={class:"toggle"},z=["id","name","value","checked"],H=["for"];function Y(t,e,i,r,n,a){return o(),u("div",W,[y(l("input",{class:"toggle__input visually-hidden",type:"checkbox",id:`toggle-${i.id}`,name:i.name,value:i.value,checked:i.checked,"onUpdate:modelValue":e[0]||(e[0]=s=>t.modelChecked=s)},null,8,z),[[B,t.modelChecked]]),l("label",{class:"toggle__label",for:`toggle-${i.id}`},h(i.label),9,H)])}const q=g(D,[["render",Y],["__scopeId","data-v-81cb543d"]]),G={props:{label:{type:String,default:""},id:{type:String,default:""},name:{type:String,default:""},value:{type:[String,Boolean,Number],default:null},checked:{type:Boolean,default:!1},checkbox:{type:Boolean,default:!1}},data(){return{modelChecked:this.checked}}},J={key:0,class:"checkbox"},P=["id","name","value","checked"],Q=["for"],Z={key:1,class:"checkbox-btn"},$=["id","name","value","checked"],ee=["for"];function te(t,e,i,r,n,a){return i.checkbox?(o(),u("div",J,[y(l("input",{class:"checkbox__input visually-hidden",type:"checkbox",id:`checkbox-${i.id}`,name:i.name,value:i.value,checked:i.checked,"onUpdate:modelValue":e[0]||(e[0]=s=>n.modelChecked=s)},null,8,P),[[B,n.modelChecked]]),l("label",{class:"checkbox__label",for:`checkbox-${i.id}`},h(i.label),9,Q)])):(o(),u("div",Z,[y(l("input",{class:"checkbox-btn__input visually-hidden",type:"checkbox",id:`checkbox-btn-${i.id}`,name:i.name,value:i.value,checked:i.checked,"onUpdate:modelValue":e[1]||(e[1]=s=>n.modelChecked=s)},null,8,$),[[B,n.modelChecked]]),l("label",{class:"checkbox-btn__label",for:`checkbox-btn-${i.id}`},h(i.label),9,ee)]))}const ie=g(G,[["render",te],["__scopeId","data-v-0204ebb6"]]),ne={props:{label:{type:String,default:""},id:{type:String,default:""},name:{type:String,default:"radio"},value:{type:[String,Number,Array],default:null},checked:{type:Boolean,default:!1}},data(){return{modelChecked:this.checked}}},ae={class:"radio"},se=["id","name","value","checked"],le=["for"];function oe(t,e,i,r,n,a){return o(),u("div",ae,[y(l("input",{class:"radio__input visually-hidden",type:"radio",id:`radio-${i.id}`,name:i.name,value:i.value,checked:i.checked,"onUpdate:modelValue":e[0]||(e[0]=s=>n.modelChecked=s)},null,8,se),[[j,n.modelChecked]]),l("label",{class:"radio__label",for:`radio-${i.id}`},h(i.label),9,le)])}const ue=g(ne,[["render",oe],["__scopeId","data-v-3218bf4a"]]),me={name:"MultiRangeSlider",props:{baseClassName:{type:String,default:"multi-range-slider"},min:{type:Number},max:{type:Number},minValue:{type:Number},maxValue:{type:Number},step:{type:Number,default:1},preventWheel:{type:Boolean,default:!1},ruler:{type:Boolean,default:!0},label:{type:Boolean,default:!0},labels:{type:Array},minCaption:{type:String},maxCaption:{type:String},rangeMargin:{type:Number}},data(){let t=this.labels||[],e=this.min===void 0?0:this.min,i=t.length?t.length-1:100,r=this.max===void 0?i:this.max,n=this.minValue===void 0?25:this.minValue;t.length&&this.minValue===void 0&&(n=1);let a=this.maxValue||75;if(t.length&&this.maxValue===void 0&&(a=t.length-2),r<=e)throw new Error("Invalid props min or max");if(n>a)throw new Error("Invalid props minValue or maxValue");let s=this.rangeMargin===void 0?this.step:this.rangeMargin,d=s%this.step;return d&&(s=s+this.step-d),{valueMin:n<e?e:n,valueMax:a>r?r:a,interVal:null,startX:null,mouseMoveCounter:null,barBox:null,barValue:0,rangeMarginValue:s}},methods:{onBarLeftClick(){this.valueMin-this.step>=this.minimum?this.valueMin-=this.step:this.valueMin=this.minimum},onInnerBarLeftClick(){this.valueMin+this.rangeMarginValue<this.valueMax&&(this.valueMin+=this.step)},onBarRightClick(){this.valueMax+this.step<=this.maximum?this.valueMax+=this.step:this.valueMax=this.maximum},onInnerBarRightClick(){this.valueMax-this.rangeMarginValue>this.valueMin&&(this.valueMax-=this.step)},onInputMinChange(t){let e=parseFloat(t.target.value);e<=this.valueMax-this.rangeMarginValue&&e>=this.minimum?this.valueMin=e:t.target.value=this.valueMin},onInputMaxChange(t){let e=parseFloat(t.target.value);e>=this.valueMin+this.rangeMarginValue&&e<=this.maximum?this.valueMax=e:t.target.value=this.valueMax},onLeftThumbMousedown(t){if(t.preventDefault(),this.startX=t.clientX,t.type==="touchstart")if(t.touches.length===1)this.startX=t.touches[0].clientX;else return;this.mouseMoveCounter=0,this.barValue=this.valueMin,this.barBox=t.target.parentNode.getBoundingClientRect(),document.addEventListener("mousemove",this.onLeftThumbMousemove),document.addEventListener("mouseup",this.onLeftThumbMouseup),document.addEventListener("touchmove",this.onLeftThumbMousemove),document.addEventListener("touchend",this.onLeftThumbMouseup)},onLeftThumbMousemove(t){this.mouseMoveCounter++;let e=t.clientX;t.type==="touchmove"&&(e=t.touches[0].clientX);let r=(e-this.startX)/this.barBox.width,n=this.barValue+(this.maximum-this.minimum)*r,a=n%this.step;n-=a,n<this.minimum?n=this.minimum:n>this.valueMax-this.rangeMarginValue&&(n=this.valueMax-this.rangeMarginValue),this.valueMin=n},onLeftThumbMouseup(){document.removeEventListener("mousemove",this.onLeftThumbMousemove),document.removeEventListener("mouseup",this.onLeftThumbMouseup),document.removeEventListener("touchmove",this.onLeftThumbMousemove),document.removeEventListener("touchend",this.onLeftThumbMouseup)},onRightThumbMousedown(t){if(t.preventDefault(),this.startX=t.clientX,t.type==="touchstart")if(t.touches.length===1)this.startX=t.touches[0].clientX;else return;this.mouseMoveCounter=0,this.barValue=this.valueMax,this.barBox=t.target.parentNode.getBoundingClientRect(),document.addEventListener("mousemove",this.onRightThumbMousemove),document.addEventListener("mouseup",this.onRightThumbMouseup),document.addEventListener("touchmove",this.onRightThumbMousemove),document.addEventListener("touchend",this.onRightThumbMouseup)},onRightThumbMousemove(t){this.mouseMoveCounter++;let e=t.clientX;t.type==="touchmove"&&(e=t.touches[0].clientX);let r=(e-this.startX)/this.barBox.width,n=this.barValue+(this.maximum-this.minimum)*r,a=n%this.step;n-=a,n<this.valueMin+this.rangeMarginValue?n=this.valueMin+this.rangeMarginValue:n>this.maximum&&(n=this.maximum),this.valueMax=n},onRightThumbMouseup(){document.removeEventListener("mousemove",this.onRightThumbMousemove),document.removeEventListener("mouseup",this.onRightThumbMouseup),document.removeEventListener("touchmove",this.onRightThumbMousemove),document.removeEventListener("touchend",this.onRightThumbMouseup)},onMouseWheel(t){if(this.preventWheel===!0||!t.shiftKey&&!t.ctrlKey)return;let e=this.step;t.deltaY<0&&(e=-e),t.shiftKey&&t.ctrlKey?this.valueMin+e>=this.minimum&&this.valueMax+e<=this.maximum&&(this.valueMin=this.valueMin+e,this.valueMax=this.valueMax+e):t.ctrlKey?(e=this.valueMax+e,e<this.valueMin+this.rangeMarginValue?e=this.valueMin+this.rangeMarginValue:e>this.maximum&&(e=this.maximum),this.valueMax=e):t.shiftKey&&(e=this.valueMin+e,e<this.minimum?e=this.minimum:e>this.valueMax-this.rangeMarginValue&&(e=this.valueMax-this.rangeMarginValue),this.valueMin=e)},triggerInput(){let t=0;this.step.toString().includes(".")&&(t=2);let e={min:this.minimum,max:this.maximum,minValue:parseFloat(this.valueMin.toFixed(t)),maxValue:parseFloat(this.valueMax.toFixed(t))};this.$emit("input",e)}},computed:{minimum(){return this.min===void 0?0:this.min},maximum(){let t=this.labels||[],e=t.length?t.length-1:100;return this.max===void 0?e:this.max},stepCount(){let t=this.labels||[];return t.length?t.length-1:Math.floor((this.maximum-this.minimum)/this.step)},subStepCount(){return(this.labels||[]).length&&this.step>1?(this.maximum-this.minimum)/this.step:0},barMin(){return(this.valueMin-this.minimum)/(this.maximum-this.minimum)*100},barMax(){return 100-(this.valueMax-this.minimum)/(this.maximum-this.minimum)*100},barMinVal(){let t=0;return this.step.toString().includes(".")&&(t=2),(this.valueMin||0).toFixed(t)},barMaxVal(){let t=0;return this.step.toString().includes(".")&&(t=2),(this.valueMax||100).toFixed(t)},scaleLabels(){let t=this.labels||[];return t.length===0&&(t=[],t.push(this.minimum),t.push(this.maximum)),t}},watch:{valueMin(){this.triggerInput()},valueMax(){this.triggerInput()},minValue(t){this.valueMin=t<this.minimum?this.minimum:t},maxValue(t){this.valueMax=t>this.maximum?this.maximum:t}},mounted(){}},re={class:"bar"},de=["min","max","step","value"],ce={class:"caption"},he={class:"min-caption"},ge={class:"bar-inner"},pe=["min","max","step","value"],_e={class:"caption"},ve={class:"max-caption"},fe={key:0,class:"ruler"},be={key:1,class:"sub-ruler"},xe={key:2,class:"labels"};function Me(t,e,i,r,n,a){return o(),u("div",{class:S([i.baseClassName,n.rangeMarginValue===0?"zero-ranage-margin":""]),onMousewheel:e[10]||(e[10]=w((...s)=>a.onMouseWheel&&a.onMouseWheel(...s),["prevent","stop"]))},[l("div",re,[l("div",{class:"bar-left",style:I({width:a.barMin+"%"}),onClick:e[0]||(e[0]=(...s)=>a.onBarLeftClick&&a.onBarLeftClick(...s))},null,4),l("input",{class:"input-type-range input-type-range-min",type:"range",min:a.minimum,max:a.maximum,step:i.step,value:n.valueMin,onInput:e[1]||(e[1]=w((...s)=>a.onInputMinChange&&a.onInputMinChange(...s),["stop","prevent"]))},null,40,de),l("div",{class:"thumb thumb-left",onMousedown:e[2]||(e[2]=(...s)=>a.onLeftThumbMousedown&&a.onLeftThumbMousedown(...s)),onTouchstart:e[3]||(e[3]=(...s)=>a.onLeftThumbMousedown&&a.onLeftThumbMousedown(...s))},[l("div",ce,[l("span",he,h(i.minCaption||a.barMinVal),1)])],32),l("div",ge,[l("div",{class:"bar-inner-left",onClick:e[4]||(e[4]=(...s)=>a.onInnerBarLeftClick&&a.onInnerBarLeftClick(...s))}),l("div",{class:"bar-inner-right",onClick:e[5]||(e[5]=(...s)=>a.onInnerBarRightClick&&a.onInnerBarRightClick(...s))})]),l("input",{class:"input-type-range input-type-range-max",type:"range",min:a.minimum,max:a.maximum,step:i.step,value:n.valueMax,onInput:e[6]||(e[6]=w((...s)=>a.onInputMaxChange&&a.onInputMaxChange(...s),["stop","prevent"]))},null,40,pe),l("div",{class:"thumb thumb-right",onMousedown:e[7]||(e[7]=(...s)=>a.onRightThumbMousedown&&a.onRightThumbMousedown(...s)),onTouchstart:e[8]||(e[8]=(...s)=>a.onRightThumbMousedown&&a.onRightThumbMousedown(...s))},[l("div",_e,[l("span",ve,h(i.maxCaption||a.barMaxVal),1)])],32),l("div",{class:"bar-right",style:I({width:a.barMax+"%"}),onClick:e[9]||(e[9]=(...s)=>a.onBarRightClick&&a.onBarRightClick(...s))},null,4)]),i.ruler?(o(),u("div",fe,[(o(!0),u(x,null,M(a.stepCount,s=>(o(),u("div",{key:s,class:"ruler-rule"}))),128))])):p("",!0),a.subStepCount?(o(),u("div",be,[(o(!0),u(x,null,M(a.subStepCount,s=>(o(),u("div",{key:s,class:"ruler-sub-rule"}))),128))])):p("",!0),i.label?(o(),u("div",xe,[(o(!0),u(x,null,M(a.scaleLabels,s=>(o(),u("div",{class:"label",key:s},h(s),1))),128))])):p("",!0)],34)}const ke=g(me,[["render",Me]]),ye={components:{MultiRangeSlider:ke},data(){return{barMinValue:100,barMaxValue:45e3}},methods:{UpdateValues(t){this.barMinValue=t.minValue,this.barMaxValue=t.maxValue}}},Ve={class:"range"};function Ce(t,e,i,r,n,a){const s=E("MultiRangeSlider");return o(),u("div",Ve,[m(s,{min:100,max:5e4,step:50,ruler:!1,label:!1,minValue:n.barMinValue,maxValue:n.barMaxValue,onInput:a.UpdateValues},null,8,["minValue","maxValue","onInput"])])}const we=g(ye,[["render",Ce]]),Be={props:{title:{type:String,default:""},showMore:{type:Boolean,default:!1},list:{type:Array,default:()=>[]},isToggle:{type:Boolean,default:!1},isLink:{type:Boolean,default:!1},isFlex:{type:Boolean,default:!1},isInputCheckbox:{type:Boolean,default:!1},isInputRadio:{type:Boolean,default:!1},isInputCheckBtn:{type:Boolean,default:!1},isRangeInput:{type:Boolean,default:!1}},data(){return{isOpen:!0,checked:!1}}},Le={key:0,class:"drop-down drop-down_toggle"},Se={key:1,class:"drop-down"},Ie={key:0,class:"drop-down__content"},Te={key:0,class:"drop-down__btn-more"};function Re(t,e,i,r,n,a){const s=q,d=T,_=F,k=ie,V=ue,C=we;return i.isToggle?(o(),u("div",Le,[l("button",{class:"drop-down__btn",onClick:e[0]||(e[0]=c=>n.isOpen=!n.isOpen)},[l("span",null,h(i.title),1),m(s,{id:"1",name:i.title,value:i.title},null,8,["name","value"])])])):(o(),u("div",Se,[l("button",{class:"drop-down__btn",onClick:e[1]||(e[1]=c=>n.isOpen=!n.isOpen)},[l("span",null,h(i.title),1),m(d,{name:n.isOpen?"arrow-up":"arrow-down",width:"24",height:"24"},null,8,["name"])]),n.isOpen?(o(),u("div",Ie,[l("ul",{class:S(["drop-down-list",{"drop-down-list_flex":i.isFlex}])},[(o(!0),u(x,null,M(i.list,(c,v)=>(o(),u("li",{class:"drop-down-list__item",key:v},[i.isLink?(o(),b(_,{key:0,class:"drop-down-list__link",to:c.url},{default:L(()=>[m(d,{name:c.icon,width:"24",height:"24"},null,8,["name"]),l("span",null,h(c.name),1)]),_:2},1032,["to"])):i.isInputCheckbox?(o(),b(k,{key:1,label:c.name,id:v,name:i.title,value:c.name,checkbox:!0,modelValue:n.checked,"onUpdate:modelValue":e[2]||(e[2]=f=>n.checked=f)},null,8,["label","id","name","value","modelValue"])):i.isInputCheckBtn?(o(),b(k,{key:2,label:c.name,id:v,name:i.title,value:c.name,checkbox:!1,modelValue:n.checked,"onUpdate:modelValue":e[3]||(e[3]=f=>n.checked=f)},null,8,["label","id","name","value","modelValue"])):i.isInputRadio?(o(),b(V,{key:3,label:c.name,id:v,value:v,modelValue:n.checked,"onUpdate:modelValue":e[4]||(e[4]=f=>n.checked=f)},null,8,["label","id","value","modelValue"])):i.isRangeInput?(o(),b(C,{key:4})):p("",!0)]))),128))],2),i.showMore?(o(),u("button",Te,"показать ещё")):p("",!0)])):p("",!0)]))}const je=g(Be,[["render",Re],["__scopeId","data-v-d44c5204"]]),Ee={props:{productList:{type:Array,default:()=>[]}}},Xe={class:"product-grid"};function Ne(t,e,i,r,n,a){const s=U;return o(),u("ul",Xe,[(o(!0),u(x,null,M(i.productList,(d,_)=>(o(),u("li",{class:S(["product-grid__item",{"span-2":d.span}]),key:_},[m(s,{card:d},null,8,["card"])],2))),128))])}const Fe=g(Ee,[["render",Ne],["__scopeId","data-v-1af0a7c5"]]),Ke={data(){return{breadcrumbs:[{link:"/",title:"Главная",active:!1},{link:"/catalog/",title:"Каталог",active:!1},{link:"#",title:"Инструмент",active:!0}],category:[{name:"Стройматериалы",url:"/catalog/stroy/",icon:"lucide_brick-wall"},{name:"Инструмент",url:"/catalog/tools/",icon:"material-symbols_construction-rounded"},{name:"Электрика",url:"/catalog/electric/",icon:"icon-park-outline_power-supply-one"}],type:[{name:"Зажимные инструменты и устройства",checked:!1},{name:"Инструмент садовый",checked:!1},{name:"Монтажный и крепёжный",checked:!1},{name:"Наборы инструментов",checked:!1}],delivery:[{name:"Завтра"},{name:"1-3 дня"},{name:"4-7 дней"}],brands:[{name:"Knipexxxx"},{name:"Hesler"},{name:"Knipex"},{name:"Hesler"},{name:"Knipex"}],price:[1],products:[{images:["../../images/goods-item-1.jpg","../../images/goods-item-1.jpg","../../images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽"},{images:["../../images/goods-item-1.jpg","../../images/goods-item-1.jpg","../../images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽",span:!0},{images:["../../images/goods-item-1.jpg","../../images/goods-item-1.jpg","../../images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽",span:!1},{images:["../../images/goods-item-1.jpg","../../images/goods-item-1.jpg","../../images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽",span:!1},{images:["../../images/goods-item-1.jpg","../../images/goods-item-1.jpg","../../images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽",span:!1},{images:["../../images/goods-item-1.jpg","../../images/goods-item-1.jpg","../../images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽",span:!1},{images:["../../images/goods-item-1.jpg","../../images/goods-item-1.jpg","../../images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽",span:!1},{images:["../../images/goods-item-1.jpg","../../images/goods-item-1.jpg","../../images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽",span:!1},{images:["../../images/goods-item-1.jpg","../../images/goods-item-1.jpg","../../images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽",span:!0},{images:["../../images/goods-item-1.jpg","../../images/goods-item-1.jpg","../../images/goods-item-1.jpg"],title:"Клещи переставные Sparta 250 мм",price:"150 ₽",span:!1}]}}},Ue=t=>(X("data-v-cedf5e9b"),t=t(),N(),t),Oe={class:"main"},Ae={class:"catalog-category__wrap"},De={class:"catalog-category__aside"},We={class:"catalog-category__filter"},ze=Ue(()=>l("span",null,"Очистить фильтр",-1)),He={class:"catalog-category__grid"},Ye={class:"catalog-category__pagination"};function qe(t,e,i,r,n,a){const s=R,d=je,_=T,k=K,V=Fe,C=O,c=A;return o(),u("main",Oe,[m(s,{breadcrumbs:n.breadcrumbs},null,8,["breadcrumbs"]),m(c,{class:"catalog-category"},{default:L(()=>[l("div",Ae,[l("div",De,[l("div",We,[m(d,{title:"Категория",list:n.category,"is-link":"true","show-more":""},null,8,["list"]),m(d,{title:"Тип продукта",list:n.type,"is-input-checkbox":"true"},null,8,["list"]),m(d,{title:"Бренд",list:n.brands,"is-input-check-btn":"true","is-flex":"","show-more":""},null,8,["list"]),m(d,{title:"Цена",list:n.price,"is-range-input":"true"},null,8,["list"]),m(d,{title:"Доставка",list:n.delivery,"is-input-radio":"true"},null,8,["list"]),m(d,{title:"Новинки","is-toggle":""}),m(k,{"is-ghost":"",type:"reset"},{default:L(()=>[ze,m(_,{name:"trash",width:"24",height:"24"})]),_:1})])]),l("div",He,[m(V,{"product-list":n.products},null,8,["product-list"])]),l("div",Ye,[m(C)])])]),_:1})])}const it=g(Ke,[["render",qe],["__scopeId","data-v-cedf5e9b"]]);export{it as default};