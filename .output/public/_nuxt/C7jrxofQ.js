function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./CtNl72q_.js","./CkZslKK8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a0 as p,J as m,r as _,a1 as v,k as f,o as r,c as i,t as o,A as c,a as y,B as g}from"./CkZslKK8.js";const u={icons:()=>p(()=>import("./CtNl72q_.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>e.default||e)},h="",w="",x="icons";function B(e){return e.toLowerCase().replace(/\.svg$/,"").replace(/[^a-z0-9-:]/g,"-").replace(/:/g,"--")}const d=async e=>{let[t,s]=e.split("/");s||(s=t,t=x);const a=u[t]?await u[t]():"";return{sprite:t,icon:s,url:a+`#${B(s)}`,class:`${h} ${w}${t}`}},C=["viewBox"],S={key:0},k={key:1},N=["href"],E=m({__name:"svg-icon",props:{name:{type:String,required:!0},title:{type:String,default:null},desc:{type:String,default:null},viewBox:{type:String,default:null,validator(e){return e.split(" ").every(t=>!isNaN(parseInt(t)))}}},async setup(e){let t,s;const a=e,n=_({url:"",class:""});return n.value=([t,s]=v(()=>d(a.name)),t=await t,s(),t),f(()=>a.name,async l=>{n.value=await d(l)}),(l,$)=>(r(),i("svg",{viewBox:e.viewBox,class:g(n.value.class)},[e.title?(r(),i("title",S,o(e.title),1)):c("",!0),e.desc?(r(),i("desc",k,o(e.desc),1)):c("",!0),y("use",{href:n.value.url},null,8,N)],10,C))}});export{E as _};
