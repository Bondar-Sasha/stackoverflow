import{j as c}from"./jsx-runtime-z8MfsBtr.js";import{r as d}from"./index-BofL8h0e.js";import"./index-C9rmetsa.js";const u="_common_1fv37_1",m={common:u},i=({className:t="",...o})=>{const s=[m.common,t].join(" ");return c.jsx("textarea",{...o,className:s})};i.__docgenInfo={description:"",methods:[],displayName:"BasicTextarea",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}}};const h=t=>{const[o,s]=d.useState(""),p=l=>s(()=>l.target.value);return c.jsx(i,{...t,onChange:p,value:o})},v={title:"Shared/inputs/BasicTextarea",component:h,parameters:{layout:"centered"},tags:["autodocs","wip"],argTypes:{placeholder:{control:"text",table:{type:{}},description:"Input placeholder."},value:{control:"text",table:{type:{}},description:"Input value."},onChange:{control:"object",description:"Event triggered when the value changes."},onFocus:{control:"object",description:"Event triggered when the input field receives focus."},onBlur:{control:"object",description:"Event triggered when the input field loses focus."}},args:{placeholder:"write",className:"border-2 border-theme"}},e={parameters:{docs:{description:{story:"input without passed styles."}}}};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'input without passed styles.'
      }
    }
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const y=["Primary"];export{e as Primary,y as __namedExportsOrder,v as default};
