(()=>{var e={};e.id=409,e.ids=[409],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},84900:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>c,originalPathname:()=>p,pages:()=>u,routeModule:()=>x,tree:()=>l}),r(35866),r(96560),r(83938),r(26083),r(19644);var s=r(23191),n=r(88716),a=r(37922),i=r.n(a),o=r(95231),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let l=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,96560)),"/Users/saikouwu/study/mosh/NextStudy/next-app/app/not-found.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,83938)),"/Users/saikouwu/study/mosh/NextStudy/next-app/app/layout.tsx"],error:[()=>Promise.resolve().then(r.bind(r,26083)),"/Users/saikouwu/study/mosh/NextStudy/next-app/app/error.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,19644)),"/Users/saikouwu/study/mosh/NextStudy/next-app/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,96560)),"/Users/saikouwu/study/mosh/NextStudy/next-app/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=[],p="/_not-found/page",c={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},43927:(e,t,r)=>{Promise.resolve().then(r.bind(r,89066)),Promise.resolve().then(r.bind(r,56464))},40280:(e,t,r)=>{Promise.resolve().then(r.bind(r,67733))},53609:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},35303:()=>{},56464:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var s=r(10326),n=r(77109),a=r(90434);r(17577);let i=()=>{let{status:e,data:t}=(0,n.useSession)();return(0,s.jsxs)("div",{className:"flex bg-slate-200 p-5 space-x-3",children:[s.jsx(a.default,{href:"/",className:"mr-5",children:"Next.js"}),s.jsx(a.default,{href:"/users",children:"users"}),"loading"===e&&s.jsx("div",{children:"Loading..."}),"authenticated"===e&&(0,s.jsxs)("div",{children:[t.user.name,s.jsx(a.default,{href:"/api/auth/signout",className:"ml-3",children:"Sign Out"})]}),"unauthenticated"===e&&s.jsx(a.default,{href:"/api/auth/signin",children:"Login"})]})}},89066:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var s=r(10326);r(17577);var n=r(77109);let a=({children:e})=>s.jsx(n.SessionProvider,{children:e})},67733:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(10326);r(17577);let n=({error:e,reset:t})=>(console.log("Error",e),(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{children:"An unexpected error has occurred."}),s.jsx("button",{className:"btn",onClick:()=>t(),children:"Retry"})]}))},26083:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>o});var s=r(68570);let n=(0,s.createProxy)(String.raw`/Users/saikouwu/study/mosh/NextStudy/next-app/app/error.tsx`),{__esModule:a,$$typeof:i}=n;n.default;let o=(0,s.createProxy)(String.raw`/Users/saikouwu/study/mosh/NextStudy/next-app/app/error.tsx#default`)},83938:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m,metadata:()=>f});var s=r(19510),n=r(83124),a=r.n(n);r(67272);var i=r(68570);let o=(0,i.createProxy)(String.raw`/Users/saikouwu/study/mosh/NextStudy/next-app/app/NavBar.tsx`),{__esModule:d,$$typeof:l}=o;o.default;let u=(0,i.createProxy)(String.raw`/Users/saikouwu/study/mosh/NextStudy/next-app/app/NavBar.tsx#default`),p=(0,i.createProxy)(String.raw`/Users/saikouwu/study/mosh/NextStudy/next-app/app/auth/Provider.tsx`),{__esModule:c,$$typeof:x}=p;p.default;let h=(0,i.createProxy)(String.raw`/Users/saikouwu/study/mosh/NextStudy/next-app/app/auth/Provider.tsx#default`),f={title:"Create Next App",description:"Generated by create next app",openGraph:{title:"...",description:"..."}};function m({children:e}){return s.jsx("html",{lang:"en","data-theme":"winter",children:s.jsx("body",{className:a().className,children:(0,s.jsxs)(h,{children:[s.jsx(u,{}),s.jsx("main",{className:"p-5",children:e})]})})})}},19644:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(19510);r(71159);let n=()=>s.jsx("span",{className:"loading loading-spinner loading-md"})},96560:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(19510);r(71159);let n=()=>s.jsx("div",{children:"The requested page doesn't exist"})},35866:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}}),r(53370);let s=r(19510);r(71159);let n={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block"},h1:{display:"inline-block",margin:"0 20px 0 0",padding:"0 23px 0 0",fontSize:24,fontWeight:500,verticalAlign:"top",lineHeight:"49px"},h2:{fontSize:14,fontWeight:400,lineHeight:"49px",margin:0}};function a(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("title",{children:"404: This page could not be found."}),(0,s.jsx)("div",{style:n.error,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}),(0,s.jsx)("h1",{className:"next-error-h1",style:n.h1,children:"404"}),(0,s.jsx)("div",{style:n.desc,children:(0,s.jsx)("h2",{style:n.h2,children:"This page could not be found."})})]})})]})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(66621);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{},53370:(e,t,r)=>{"use strict";function s(e){return e&&e.__esModule?e:{default:e}}r.r(t),r.d(t,{_:()=>s,_interop_require_default:()=>s})}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,647],()=>r(84900));module.exports=s})();