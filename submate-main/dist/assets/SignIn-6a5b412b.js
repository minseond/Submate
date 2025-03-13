import{J as e,C as a,a3 as t,O as i,j as o,F as n,B as c}from"./index-ffe365db.js";import{S as l}from"./SignupInput-b36e6136.js";import"./schema-e766bade.js";import{I as m}from"./ThemeButton-d9ace1e1.js";import"./index.esm-53a1115d.js";const u=e(a)`
  border: 1px solid ${({theme:r})=>r.colorScheme==="dark"?r.colors.gray[7]:r.colors.gray[2]};
  border-radius: 0.375rem;
`,d=e(t)`
  font-size: var(--mantine-font-size-sm);
  color: var(--mantine-color-blue-6);
`,f=()=>{const{colorScheme:r}=i(),s=r==="dark";return o.jsxs(n,{justify:"center",align:"center",direction:"column",h:"80vh",m:"auto",children:[o.jsx(c,{component:t,to:"/",w:90,h:90,variant:"none",children:o.jsx(m,{src:`./assets/logos/universe${s?"LogoWhite":"LogoBlack"}.svg`,alt:"home button"})}),o.jsxs(n,{direction:"column",w:350,children:[o.jsx(l,{}),o.jsx(u,{align:"center",w:"100%",mt:15,fw:300,children:o.jsxs("p",{children:["New to Submate? ",o.jsx(d,{to:"/signup",children:"Create an accout"}),"."]})})]})]})};export{f as default};
