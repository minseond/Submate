import{f as fe,k as q,y as F,an as U,ao as pe,r as v,n as J,h as T,o as K,J as h,M as me,a as ge,u as xe,j as n,F as Z,T as he,B as S,ap as ye,C as H,a3 as ve,A as Q}from"./index-ffe365db.js";import{u as we,a as be}from"./index.esm-53a1115d.js";import{P as je,t as _e,s as Y,b as Se,I as Oe}from"./schema-e766bade.js";import{D as Pe,T as $e,n as ee,k as Ce,I as Ie,l as Le}from"./ThemeButton-d9ace1e1.js";const[Ee,ke]=fe("Grid component was not found in tree");var Xe=Object.defineProperty,M=Object.getOwnPropertySymbols,Ge=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,W=(e,t,r)=>t in e?Xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Te=(e,t)=>{for(var r in t||(t={}))Ge.call(t,r)&&W(e,r,t[r]);if(M)for(var r of M(t))Ne.call(t,r)&&W(e,r,t[r]);return e};const B=(e,t)=>e==="content"?"auto":e==="auto"?"0rem":e?`${100/(t/e)}%`:void 0,te=(e,t,r)=>r||e==="auto"||e==="content"?"unset":B(e,t),re=(e,t)=>{if(e)return e==="auto"||t?1:0},se=(e,t)=>e===0?0:e?`${100/(t/e)}%`:void 0,ne=(e,t)=>typeof e<"u"?`calc(${F({size:e,sizes:t.spacing})} / 2)`:void 0;function Fe({sizes:e,offsets:t,orders:r,theme:s,columns:o,gutters:u,grow:c}){return U.reduce((d,l)=>(d[`@media (min-width: ${pe(s.breakpoints[l])})`]={order:r[l],flexBasis:B(e[l],o),padding:ne(u[l],s),flexShrink:0,width:e[l]==="content"?"auto":void 0,maxWidth:te(e[l],o,c),marginLeft:se(t[l],o),flexGrow:re(e[l],c)},d),{})}var Be=q((e,{gutter:t,gutterXs:r,gutterSm:s,gutterMd:o,gutterLg:u,gutterXl:c,grow:d,offset:l,offsetXs:a,offsetSm:i,offsetMd:f,offsetLg:g,offsetXl:y,columns:x,span:p,xs:w,sm:b,md:j,lg:_,xl:C,order:I,orderXs:L,orderSm:E,orderMd:k,orderLg:X,orderXl:m})=>({col:Te({boxSizing:"border-box",flexGrow:re(p,d),order:I,padding:ne(t,e),marginLeft:se(l,x),flexBasis:B(p,x),flexShrink:0,width:p==="content"?"auto":void 0,maxWidth:te(p,x,d)},Fe({sizes:{xs:w,sm:b,md:j,lg:_,xl:C},offsets:{xs:a,sm:i,md:f,lg:g,xl:y},orders:{xs:L,sm:E,md:k,lg:X,xl:m},gutters:{xs:r,sm:s,md:o,lg:u,xl:c},theme:e,columns:x,grow:d}))}));const Me=Be;var We=Object.defineProperty,O=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,A=(e,t,r)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ae=(e,t)=>{for(var r in t||(t={}))oe.call(t,r)&&A(e,r,t[r]);if(O)for(var r of O(t))ae.call(t,r)&&A(e,r,t[r]);return e},Re=(e,t)=>{var r={};for(var s in e)oe.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&O)for(var s of O(e))t.indexOf(s)<0&&ae.call(e,s)&&(r[s]=e[s]);return r};const Ve={};function De(e){return e==="auto"||e==="content"?!0:typeof e=="number"&&e>0&&e%1===0}const ie=v.forwardRef((e,t)=>{const r=J("GridCol",Ve,e),{children:s,span:o,offset:u,offsetXs:c,offsetSm:d,offsetMd:l,offsetLg:a,offsetXl:i,xs:f,sm:g,md:y,lg:x,xl:p,order:w,orderXs:b,orderSm:j,orderMd:_,orderLg:C,orderXl:I,className:L,unstyled:E,variant:k}=r,X=Re(r,["children","span","offset","offsetXs","offsetSm","offsetMd","offsetLg","offsetXl","xs","sm","md","lg","xl","order","orderXs","orderSm","orderMd","orderLg","orderXl","className","unstyled","variant"]),m=ke(),G=o||m.columns,{classes:ce,cx:ue}=Me({gutter:m.gutter,gutterXs:m.gutterXs,gutterSm:m.gutterSm,gutterMd:m.gutterMd,gutterLg:m.gutterLg,gutterXl:m.gutterXl,offset:u,offsetXs:c,offsetSm:d,offsetMd:l,offsetLg:a,offsetXl:i,xs:f,sm:g,md:y,lg:x,xl:p,order:w,orderXs:b,orderSm:j,orderMd:_,orderLg:C,orderXl:I,grow:m.grow,columns:m.columns,span:G},{unstyled:E,name:"Grid",variant:k});return!De(G)||G>m.columns?null:T.createElement(K,Ae({className:ue(ce.col,L),ref:t},X),s)});ie.displayName="@mantine/core/Col";var ze=Object.defineProperty,R=Object.getOwnPropertySymbols,qe=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable,V=(e,t,r)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Je=(e,t)=>{for(var r in t||(t={}))qe.call(t,r)&&V(e,r,t[r]);if(R)for(var r of R(t))Ue.call(t,r)&&V(e,r,t[r]);return e};function Ke(e,t){return U.reduce((r,s)=>(typeof e[s]<"u"&&(r[`@media (min-width: ${t.breakpoints[s]})`]={margin:`calc(-${F({size:e[s],sizes:t.spacing})} / 2)`}),r),{})}var Ze=q((e,{justify:t,align:r,gutter:s,gutterXs:o,gutterSm:u,gutterMd:c,gutterLg:d,gutterXl:l})=>({root:Je({margin:`calc(-${F({size:s,sizes:e.spacing})} / 2)`,display:"flex",flexWrap:"wrap",justifyContent:t,alignItems:r},Ke({xs:o,sm:u,md:c,lg:d,xl:l},e))}));const He=Ze;var Qe=Object.defineProperty,P=Object.getOwnPropertySymbols,le=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,D=(e,t,r)=>t in e?Qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ye=(e,t)=>{for(var r in t||(t={}))le.call(t,r)&&D(e,r,t[r]);if(P)for(var r of P(t))de.call(t,r)&&D(e,r,t[r]);return e},et=(e,t)=>{var r={};for(var s in e)le.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&P)for(var s of P(e))t.indexOf(s)<0&&de.call(e,s)&&(r[s]=e[s]);return r};const tt={gutter:"md",justify:"flex-start",align:"stretch",columns:12},$=v.forwardRef((e,t)=>{const r=J("Grid",tt,e),{gutter:s,gutterXs:o,gutterSm:u,gutterMd:c,gutterLg:d,gutterXl:l,children:a,grow:i,justify:f,align:g,columns:y,className:x,unstyled:p,variant:w}=r,b=et(r,["gutter","gutterXs","gutterSm","gutterMd","gutterLg","gutterXl","children","grow","justify","align","columns","className","unstyled","variant"]),{classes:j,cx:_}=He({gutter:s,justify:f,align:g,gutterXs:o,gutterSm:u,gutterMd:c,gutterLg:d,gutterXl:l},{unstyled:p,name:"Grid",variant:w});return T.createElement(Ee,{value:{gutter:s,gutterXs:o,gutterSm:u,gutterMd:c,gutterLg:d,gutterXl:l,grow:i,columns:y}},T.createElement(K,Ye({className:_(j.root,x),ref:t},b),a))});$.Col=ie;$.displayName="@mantine/core/Grid";const rt=h.form`
  border: 1px solid ${({theme:e})=>e.colorScheme==="dark"?e.colors.gray[7]:e.colors.gray[2]};
  border-radius: 0.375rem;
`,z=h(Pe.Wrapper)`
  > label {
    font-weight: 300;
  }
`,bt=()=>{var c,d;const e=me(),t=ge(xe),{register:r,handleSubmit:s,formState:{errors:o}}=we({resolver:_e(Se)}),u=async l=>{try{const a=await ye(l);t(a),e("/")}catch(a){const i=a.response&&a.response.status===401?a.response.data:void 0;Y(!1,"로그인",i)}};return n.jsxs(n.Fragment,{children:[n.jsx($e,{fz:24,fw:300,mb:20,align:"center",children:"Sign in to Submate"}),n.jsx(rt,{action:"/",onSubmit:s(u),method:"post",children:n.jsxs(Z,{p:25,justify:"space-between",direction:"column",gap:20,children:[n.jsx(z,{label:"Email address",children:n.jsx(ee,{...r("email"),error:(c=o==null?void 0:o.email)==null?void 0:c.message,autoComplete:"off"})}),n.jsxs(z,{label:"Password",pos:"relative",children:[n.jsx(he,{span:!0,fz:"xs",color:"blue.6",pos:"absolute",right:0,top:5,justify:"center",underline:!0,align:"right",children:"Forgot password?"}),n.jsx(je,{...r("password"),error:(d=o==null?void 0:o.password)==null?void 0:d.message})]}),n.jsx(S,{type:"submit",fw:300,children:"Sign in"})]})})]})},st=h($.Col)`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 7.5rem;
`,nt=h(H)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  min-height: 100vh; /* 화면 전체 높이 설정 */
  overflow-y: auto; /* 스크롤을 활성화 */
  background: url('/path/to/your/background-image.jpg') no-repeat center center fixed;
  background-size: cover;
`,ot=h.div`
  width: 100%;
  max-width: 600px; /* Grid의 최대 너비를 줄임 */
  padding: 20px;
  margin: 0 auto; /* 가운데 정렬 */
  flex-grow: 1; /* 빈 공간을 채우기 위해 flex-grow 추가 */
`,at=h.div`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8); /* 약간 투명한 배경 */
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px; /* 아래에 여백 추가 */
`,it=[{name:"appletvplus",id:350},{name:"disneyplus",id:337},{name:"netflix",id:8},{name:"primevideo",id:119},{name:"watcha",id:97},{name:"wavve",id:356}],lt={netflix:{basic:"5,500원 (2명)",standard:"13,500원 (2명)",premium:"17,000원 (4명)"},watcha:{basic:"7,900원 (1대)",premium:"12,900원 (4대)"},disneyplus:{standard:"9,900원 (2대)",premium:"13,900원 (4대)"},wavve:{basic:"7,900원 (1명)",standard:"10,900원 (2명)",premium:"13,900원 (4명)"},primevideo:{basic:"5,500원 (1달)"},appletvplus:{basic:"6,500원 (1달)"}},jt=({email:e,setUserInput:t})=>{const[r,s]=v.useState(!1),[o,u]=v.useState([]),c=(a,i)=>{u(f=>f.map(g=>g.id===a?{...g,selectedPlan:i}:g))},d=()=>o.map(a=>a.prices?n.jsxs("div",{style:{marginBottom:"20px",width:"100%"},children:[n.jsx("h3",{children:a.name.toUpperCase()}),n.jsxs("div",{style:{display:"block"},children:[" ",Object.entries(a.prices).map(([i,f])=>n.jsx(S,{onClick:()=>c(a.id,i),variant:a.selectedPlan===i?"filled":"outline",style:{width:"100%",marginBottom:"10px"},children:`${i}: ${f}`},i))]})]},a.id):null),l=async()=>{try{Ce({email:e,newList:o}),localStorage.removeItem("user"),t(null)}catch{Y(!1,"구독 서비스 선택")}};return n.jsx(n.Fragment,{children:n.jsxs(nt,{children:[n.jsxs(ot,{children:[n.jsx(N,{str:"Congratulation!🥳🎉",isLast:0}),n.jsx(N,{str:"What OTT Services are you subscribing to?",isLast:0}),n.jsx(N,{str:"이 콘텐츠는 Tving을 제공하지 않습니다.",isLast:1,setAnimationCompleted:()=>{s(!0)}}),r&&n.jsxs($,{columns:3,m:10,justify:"center",style:{gap:"20px"},children:[" ",it.map((a,i)=>n.jsx(st,{span:1,children:n.jsx(ct,{logo:a,idx:i,subscribedOtt:o,setSubscribedOtt:u,ottPrices:lt})},i))]})]}),n.jsx(at,{children:o.length>0&&n.jsxs(n.Fragment,{children:[n.jsx("h2",{children:"선택한 OTT 서비스의 가격 정보"}),d(),n.jsx(Z,{justify:"flex-end",gap:5,children:n.jsx(S,{component:ve,w:90,to:"/signin",c:"black",fw:300,variant:"outline",onClick:l,children:"Submit"})})]})})]})})},dt=h(S)`
  box-shadow: ${({selected:e})=>e&&"0px 0px 15px 10px rgba(79, 74, 216, 0.5)"};
  border-radius: 50%;
  padding: 0;
  height: 4.375rem;
`,ct=({logo:{id:e,name:t},idx:r,subscribedOtt:s,setSubscribedOtt:o,ottPrices:u})=>{const[c,d]=v.useState(!1),l=()=>{const i=s.filter(f=>f.id!==e);o(i),d(!1)},a=()=>{const i=u[t]||{},f=[...s,{id:e,name:t,prices:i}];o(f),d(!0)};return n.jsx(dt,{onClick:c?l:a,selected:c,variant:"none",type:"button",disabled:r>5,children:n.jsx(Ie,{width:70,id:e,src:`./assets/badges/${t}.svg`,alt:`${t} button`})})},ut=Q`
  from { width: 0 }
  to { width: 100% }
`,ft=Q`
 from {
    border-right-color: rgba(17, 17, 17, 0.9);
  }
  to {
    border-right-color: rgba(255, 255, 255, 0.8);
  }
`,pt=h.div`
  font-family: consolas;
  overflow: hidden;
  border-right: 2px solid none;
  white-space: nowrap;
  font-size: ${({fontSize:e})=>e==="small"?"1rem;":"1.2rem;"};
  width: 0;
  animation: ${ut} 1.5s steps(20, end) forwards,
    ${ft} 900ms steps(20) ${({last:e})=>e&&"infinite;"};
  animation-delay: ${({last:e})=>e&&`calc(${e} * 1.5s);`};
`,N=({str:e,isLast:t,fontSize:r,setAnimationCompleted:s})=>n.jsx(pt,{last:t,fontSize:r,onAnimationEnd:s,children:e}),mt=h(ee)`
  width: 100%;
  .mantine-TextInput-label {
    font-weight: 300;
    color: var(--mantine-color-cyan-4);
  }
`,gt=h(S)`
  font-weight: 300;
  align-self: flex-end;
`,xt=e=>e.toLowerCase().includes("password"),_t=({name:e,control:t,trigger:r,step:s,setStep:o})=>{const[u,c]=v.useState(!1),{field:{onChange:d},fieldState:{invalid:l,isDirty:a,error:i}}=be({name:e,control:t,defaultValue:{}}),f=v.useCallback(()=>{Le.debounce(()=>{r(e),e==="password"&&r("confirmPassword")},100)()},[e,r]),g=p=>{d(p),f()},y=p=>{p.keyCode===13&&p.preventDefault()},x=()=>{o(s+1),c(!0)};return n.jsx(n.Fragment,{children:n.jsxs(H,{display:"flex",my:20,p:0,children:[n.jsx(mt,{onChange:g,onKeyDown:y,label:`Enter your ${e}`,autoComplete:"off",withAsterisk:!0,error:(i==null?void 0:i.message)!=="Required"&&(i==null?void 0:i.message),required:!1,type:xt(e)?"password":"text",icon:a&&l&&n.jsx(Oe,{size:16,strokeWidth:2})}),a&&!l&&n.jsx(gt,{type:"button",onClick:x,disabled:u,variant:"outline",color:"gray.5",children:"Continue"})]})})};export{bt as S,N as T,_t as a,jt as b};
