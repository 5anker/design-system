import{f as a}from"./index-BASH1HpE.js";import{_ as o}from"./Header-UoN-hI0D.js";import"./vue.esm-bundler-Ba6RkDD6.js";import"./Button-BTpqvu-x.js";const f={title:"Example/Header",component:o,render:p=>({components:{MyHeader:o},setup(){return{args:p}},template:'<my-header :user="args.user" />'}),parameters:{layout:"fullscreen"},args:{onLogin:a(),onLogout:a(),onCreateAccount:a()},tags:["autodocs"]},e={args:{user:{name:"Jane Doe"}}},r={args:{user:null}};var s,n,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var m,u,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    user: null
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const L=["LoggedIn","LoggedOut"];export{e as LoggedIn,r as LoggedOut,L as __namedExportsOrder,f as default};
