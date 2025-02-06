import{j as h}from"./jsx-runtime-z8MfsBtr.js";import"./index-C9rmetsa.js";const w="_common_142va_1",S={common:w},j="_small_1e7p0_1",z={small:j},T="_medium_clr63_1",V={medium:T},C="_large_1vlbw_1",E={large:C},O={small:z.small,medium:V.medium,large:E.large},N=t=>O[t],k="_containedButton_1sj5m_1",q={containedButton:k},$="_outlinedButton_yahm3_1",I={outlinedButton:$},P="_textButton_tpnwu_1",F={textButton:P},R={text:F.textButton,contained:q.containedButton,outlined:I.outlinedButton},Y=t=>R[t],b=({className:t="",size:v="medium",variant:_="contained",...x})=>{const f=[S.common,N(v),Y(_),t].join(" ");return h.jsx("button",{...x,className:f})};b.__docgenInfo={description:"",methods:[],displayName:"BasicButton",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'text' | 'contained' | 'outlined'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'contained'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'contained'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const G={title:"Shared/buttons/BasicButton",component:b,parameters:{layout:"centered"},tags:["autodocs","wip"],argTypes:{className:{control:"text",description:"Your customs styles for button.",table:{type:{}}},size:{options:["small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{}},description:"Button size."},variant:{options:["text","contained","outlined"],control:{type:"select"},table:{defaultValue:{summary:"contained"},type:{}},description:"Button variant."},type:{options:["button","reset","submit"],control:{type:"select"},table:{type:{}},description:"Button type."},disabled:{control:{type:"boolean"},table:{type:{}},description:"Is button disabled."},onClick:{control:"object",description:"Event triggered when the button was clicked."},onFocus:{control:"object",description:"Event triggered when the button field receives focus."},onBlur:{control:"object",description:"Event triggered when the button field loses focus."}},args:{children:"click"}},e={parameters:{docs:{description:{story:"Button without passed styles."}}}},n={parameters:{docs:{description:{story:"Text button."}}},args:{variant:"text"}},o={parameters:{docs:{description:{story:"Contained button."}}},args:{variant:"contained"}},a={parameters:{docs:{description:{story:"Outlined button."}}},args:{variant:"outlined"}};var s,r,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Button without passed styles.'
      }
    }
  }
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var c,l,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Text button.'
      }
    }
  },
  args: {
    variant: 'text'
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,m,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Contained button.'
      }
    }
  },
  args: {
    variant: 'contained'
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var y,g,B;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Outlined button.'
      }
    }
  },
  args: {
    variant: 'outlined'
  }
}`,...(B=(g=a.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};const H=["Primary","TextButton","Contained","Outlined"];export{o as Contained,a as Outlined,e as Primary,n as TextButton,H as __namedExportsOrder,G as default};
