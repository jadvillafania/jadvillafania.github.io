import{_ as w}from"./nuxt-link.138d289d.js";import{a as V,q as x,r as y,s as g,b as q,j as a,h as d,i as m,o as U,e as n,k as i,p as C,m as I}from"./entry.c6d3b4d1.js";const _=u=>(C("data-v-22343c0a"),u=u(),I(),u),N=_(()=>n("h1",{class:"text-center mt-5"},"Welcome to WIN Manila",-1)),R=_(()=>n("h4",{class:"text-center"},"Register now and win big prizes!",-1)),h={class:"my-8"},k={__name:"registration",setup(u){const c=x(),e=y({username:"",password:"",confirm_password:"",mobile_number:"",referral_code:""}),t={required:r=>!!r||"Required.",match:r=>e.value.password===r||"Confrim password did not match."};return g(()=>{var r;e.value.referral_code=(r=c.query)==null?void 0:r.ref}),(r,o)=>{const s=m("v-text-field"),p=m("v-btn"),v=w,f=m("v-col"),b=m("v-row");return U(),q("div",null,[N,R,a(b,null,{default:d(()=>[a(f,{class:"mx-auto",cols:"12",sm:"8",lg:"6"},{default:d(()=>[n("form",h,[a(s,{density:"comfortable",label:"Username",rules:[t.required],modelValue:e.value.username,"onUpdate:modelValue":o[0]||(o[0]=l=>e.value.username=l)},null,8,["rules","modelValue"]),a(s,{density:"comfortable",label:"Password",type:"password",rules:[t.required],modelValue:e.value.password,"onUpdate:modelValue":o[1]||(o[1]=l=>e.value.password=l)},null,8,["rules","modelValue"]),a(s,{density:"comfortable",label:"Confirm Password",type:"password",rules:[t.required,t.match],modelValue:e.value.confirm_password,"onUpdate:modelValue":o[2]||(o[2]=l=>e.value.confirm_password=l)},null,8,["rules","modelValue"]),a(s,{density:"comfortable",label:"Mobile Number",rules:[t.required],modelValue:e.value.mobile_number,"onUpdate:modelValue":o[3]||(o[3]=l=>e.value.mobile_number=l)},null,8,["rules","modelValue"]),a(s,{density:"comfortable",label:"Referral Code",modelValue:e.value.referral_code,"onUpdate:modelValue":o[4]||(o[4]=l=>e.value.referral_code=l)},null,8,["modelValue"]),a(p,{variant:"elevated",color:"primary"},{default:d(()=>[i("Register")]),_:1})]),n("div",null,[n("p",null,[i(" Already have an account? "),a(v,{class:"text-primary",to:"/login"},{default:d(()=>[i("Login")]),_:1})])])]),_:1})]),_:1})])}}},S=V(k,[["__scopeId","data-v-22343c0a"]]);export{S as default};
