import{q,p as A,r as l,H as M,o as G,d as m,e as i,C as H,w as T,h as d,L as K,i as v,f as p,t as y,n as g,k as O,F as P,K as J,m as Q,b as r}from"./index-d45d974b.js";import{v as W,p as X,a as Y}from"./filepond-plugin-image-preview.esm-21050c24.js";const Z={class:"flex justify-center"},ee=["onSubmit"],ae={class:"pb-4 text-center va-text-bold"},le=Q(" Create Flight "),se={class:""},te=d("label",{for:"password"},"Name ",-1),oe={key:0,class:"mt-1 mb-5 text-red-500"},ne={class:""},ue=d("label",{for:"password"},"Link ",-1),de={key:0,class:"mt-1 mb-5 text-red-500"},ce={class:""},ie=d("label",{for:"password"},"Discount ",-1),re={key:0,class:"mt-1 mb-5 text-red-500"},me=["src"],ve=["src"],pe={key:0,class:"mt-1 mb-5 text-red-500"},ge={setup(fe){q(),W(Y,X);const b=A(),s=l({name:"",link:"",discount:0}),f=l(0),_=l(""),w=l("");l("");const o=l({}),e=l("");l(0),l([]),l(0);const x=l([]),k=l(0);l(null);const B=l([{name:"English",value:"gb"},{name:"Arabic",value:"sa"},{name:"Azerbaijan",value:"az"},{name:"Georgia",value:"ge"},{name:"Russia",value:"ru"},{name:"Turkey",value:"tr"}]),h=l("gb"),D=t=>{x.value=t.files,_.value=t.files[0],console.log(_.value),w.value=URL.createObjectURL(_.value)},L=()=>{const t=new FormData;t.append("images",_.value),t.append("name",s.value.name),t.append("link",s.value.link),t.append("discount",s.value.discount),f.value?(r.defaults.headers.common.local=h.value,r.post(`/api/flights/${o.value.id}/update`,t).then(a=>{e.value=[],f.value=1,o.value=a.data.flight,b.add({severity:"success",summary:"Successful",detail:"Flight updated",life:3e3})}).catch(a=>{e.value=a.response.data.errors,console.log(e.value)})):(r.defaults.headers.common.local=h.value,console.log(x.value[0]),r.post("/api/flights/create",t).then(a=>{e.value=[],f.value=1,o.value=a.data.flight,console.log(o.value),k.value=k.value+1,console.log(k.value),b.add({severity:"success",summary:"Successful",detail:"Flight Created",life:3e3})}).catch(a=>{e.value=a.response.data.errors,console.log(e.value)}))};return M(h,async(t,a)=>{const c=new FormData;c.append("images",_.value),c.append("name",s.value.name),c.append("link",s.value.link),c.append("discount",s.value.discount),f.value?(r.defaults.headers.common.local=h.value,r.post(`/api/flights/${o.value.id}/update`,c).then(n=>{e.value=[],f.value=1,o.value=n.data.flight,b.add({severity:"success",summary:"Successful",detail:"Flight Created",life:3e3})}).catch(n=>{e.value=n.response.data.errors,console.log(e.value)})):(r.defaults.headers.common.local=a,console.log(x.value[0]),r.post("/api/flights/create",c).then(n=>{e.value=[],f.value=1,o.value=n.data.flight,console.log(o.value),b.add({severity:"success",summary:"Successful",detail:"Flight Created",life:3e3})}).catch(n=>{e.value=n.response.data.errors,console.log(e.value)}))}),G(()=>{}),(t,a)=>{const c=m("Dropdown"),n=m("InputText"),I=m("InputNumber"),R=m("FileUpload"),j=m("Button"),z=m("Toast"),E=m("va-card");return i(),H(E,{class:"card"},{default:T(()=>{var V,F,S,U;return[d("div",Z,[d("form",{onSubmit:K(L,["prevent"]),class:"flex flex-col w-3/4 py-9"},[d("h2",ae,[le,v(c,{modelValue:h.value,"onUpdate:modelValue":a[0]||(a[0]=u=>h.value=u),editable:"",options:B.value,optionLabel:"name","option-value":"value",class:"w-36 mx-3 mx-10"},null,8,["modelValue","options"])]),d("div",se,[te,v(n,{modelValue:s.value.name,"onUpdate:modelValue":a[1]||(a[1]=u=>s.value.name=u),type:"text",class:"mt-3 w-full mb-3"},null,8,["modelValue"]),(V=e.value)!=null&&V.name?(i(),p("div",oe,y(e.value.name[0]),1)):g("",!0)]),d("div",ne,[ue,v(n,{modelValue:s.value.link,"onUpdate:modelValue":a[2]||(a[2]=u=>s.value.link=u),type:"text",class:"mt-3 w-full mb-3"},null,8,["modelValue"]),(F=e.value)!=null&&F.link?(i(),p("div",de,y(e.value.link[0]),1)):g("",!0)]),d("div",ce,[ie,v(I,{modelValue:s.value.discount,"onUpdate:modelValue":a[3]||(a[3]=u=>s.value.discount=u),type:"text",class:"mt-3 w-full mb-3"},null,8,["modelValue"]),(S=e.value)!=null&&S.discount?(i(),p("div",re,y(e.value.discount[0]),1)):g("",!0)]),d("div",null,[v(R,{id:"password",onUploader:D,accept:"image/*",required:"true","custom-upload":!0,autofocus:"",class:J({"p-invalid":t.submitted})},{empty:T(()=>{var u,C,N;return[_.value!=""?(i(),p("img",{key:0,src:w.value,class:"w-[200px] h-[90px]"},null,8,me)):(C=(u=o.value)==null?void 0:u.media)!=null&&C.length?(i(!0),p(P,{key:1},O((N=o.value)==null?void 0:N.media,$=>(i(),p("img",{src:$.original_url,class:"w-[200px] h-[90px]"},null,8,ve))),256)):g("",!0)]}),_:1},8,["class"]),(U=e.value)!=null&&U.images?(i(),p("div",pe,y(e.value.images[0]),1)):g("",!0)]),v(j,{type:"submit",label:"Submit",class:"mt-3"})],40,ee)]),v(z)]}),_:1})}}};export{ge as default};
