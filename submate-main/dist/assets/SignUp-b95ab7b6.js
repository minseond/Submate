import{j as t,F as x,B as h,a3 as p,C as f,r as b,am as k,J as n,A as w}from"./index-ffe365db.js";import{T as l,a as m,b as F}from"./SignupInput-b36e6136.js";import{I}from"./ThemeButton-d9ace1e1.js";import{u as U}from"./index.esm-53a1115d.js";import{t as L,s as g,a as A}from"./schema-e766bade.js";const B=()=>t.jsxs(x,{justify:"space-between",align:"center",mx:30,w:"full",children:[t.jsx(h,{component:p,to:"/",w:80,h:80,variant:"none",children:t.jsx(I,{src:"./assets/logos/universeLogoWhite.svg",alt:"home button"})}),t.jsxs(f,{m:0,p:0,children:["Already have an account?",t.jsx(p,{to:"/signin",children:" Sign in→"})]})]}),u="회원가입",C=({setUserInput:a})=>{const[e,o]=b.useState(0),{handleSubmit:i,trigger:r,control:d,formState:{isValid:j}}=U({resolver:L(A)}),y=async v=>{try{const{email:s,name:c}=await k(v),S=`${c}님의 서브메이트 가입을 축하드립니다.`;g(!0,u,S),a(s)}catch(s){const c=s.response&&s.response.status===409?s.response.data:void 0;g(!1,u,c)}};return t.jsxs(t.Fragment,{children:[t.jsx(l,{str:"Welcome to Submate!",isLast:0}),t.jsx(l,{str:"Let's begin the adventure🚀👾",isLast:1,setAnimationCompleted:()=>{o(e+1)}}),t.jsxs("form",{onSubmit:i(y),children:[e>0&&t.jsx(m,{name:"email",control:d,step:e,trigger:r,setStep:o}),e>1&&t.jsx(m,{name:"password",control:d,step:e,trigger:r,setStep:o}),e>2&&t.jsx(m,{name:"confirmPassword",control:d,step:e,trigger:r,setStep:o}),e>3&&t.jsx(h,{type:"submit",disabled:!j,fullWidth:!0,children:"Sign Up"})]})]})},z=n.div`
  background-color: #02050d;
  position: fixed; /* 변경: fixed로 설정하여 항상 화면에 고정되도록 */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
  min-height: 100vh; /* 변경: 최소 높이 설정 */
`,W=w`
  0% {
    transform: scale(1, 1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100%{
    transform: scale(1.7, 1.7) rotate(7deg);
    opacity: 0;
  }
`,E=n.div`
  background-image: radial-gradient(2.2px 2.2px at 50px 200px, #eee, rgba(0, 0, 0, 0)),
    radial-gradient(3px 3px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(3px 4px at 120px 40px, #ddd, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  animation: ${W} 9s infinite;
  background-position: 10% 90%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background-size: cover;

  :nth-of-type(1) {
    background-position: 10% 90%;
    animation-delay: 0s;
  }
  :nth-of-type(2) {
    background-position: 20% 50%;
    animation-delay: 1.5s;
  }
  :nth-of-type(3) {
    background-position: 40% -80%;
    animation-delay: 3s;
  }
  :nth-of-type(4) {
    background-position: -20% -30%;
    animation-delay: 5s;
  }
  :nth-of-type(5) {
    background-position: 50% 20%;
    animation-delay: 7s;
  }
`,G=n.img`
  opacity: 0.7;
  transform: translate(-21%, -25%);
  overflow: hidden !important;
  width: 185%;
  height: 200%;
`,H=n(f)`
  border: 1px solid var(--mantine-color-dark-4);
  border-radius: 6px;
  padding: 20px;
  background-color: var(--mantine-color-gray-1);
`,J=()=>{const[a,e]=b.useState(null);return t.jsxs(t.Fragment,{children:[t.jsxs(z,{children:[[...Array(5)].map((o,i)=>t.jsx(E,{},i)),t.jsx(G,{src:"https://github.githubassets.com/images/modules/site/home/hero-glow.svg",alt:"Glowing universe"})]}),t.jsx(B,{}),t.jsx(x,{direction:"column",style:{minHeight:"100vh",overflowY:"auto"},justify:"center",align:"center",m:"auto",children:t.jsx(H,{children:a?t.jsx(F,{email:a,setUserInput:e}):t.jsx(C,{setUserInput:e})})})]})};export{J as default};
