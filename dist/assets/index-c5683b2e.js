import{q as ae,r as i,p as le,s as se,o as ie,v as oe,d as v,e as d,f as u,h as o,i as t,w as n,b as h,m as $,t as U,n as p,K as f}from"./index-d45d974b.js";const ne={class:"grid"},de={class:"col-12"},ue=o("div",{class:"my-2"},null,-1),re={class:"flex flex-column md:flex-row md:justify-between md:align-items-center"},ce=o("h5",{class:"m-0"},"Manage drivers",-1),me={class:"block mt-2 md:mt-0 p-input-icon-left"},ve=o("i",{class:"pi pi-search"},null,-1),pe={key:0},_e={key:1},fe={class:"m-auto text-center"},be={key:0,class:"pi pi-times-circle text-red-400 h-6"},he={key:1,class:"pi pi-check-circle text-green-500"},ye={key:0},ge={key:0},ke={key:1},we={class:"field mb-5"},Ce=o("label",{for:"first"},"first name ",-1),Ve={key:0,class:"p-invalid"},xe={class:"field mb-5"},Se=o("label",{for:"last"},"last name ",-1),Te={key:0,class:"p-invalid"},Ne={class:"field mb-5"},De=o("label",{for:"email",class:"mb-3"},"email ",-1),Ue={key:0,class:"p-invalid"},Me={class:"field mb-5"},qe=o("label",{for:"password",class:"mb-3"},"password ",-1),$e={key:0,class:"p-invalid"},Le={class:"field mb-5"},Oe=o("label",{for:"mobile",class:"mb-3"},"mobile",-1),Re={key:0,class:"p-invalid"},Ae={class:"m-auto"},Be={key:0,class:"mt-4 m-auto text-red-500"},Ee={class:"flex align-items-center justify-content-center"},Fe=o("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),Ie={key:0},Ye={setup(Pe){const A=ae();i(null);const g=le(),L=i(null),k=i(!0),a=i({}),V=i(""),M=i(null);i([]);const x=i({tourist_rating:Number,reviewable_id:"",type:0}),S=i(!1),w=i(!1);i(!1);const T=i(!1),B=i({}),N=i(null),O=i(null),D=i({}),r=i(!1);i([{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]),se(()=>{J()});const b=()=>{h.get("/api/drivers").then(s=>{console.log(s),k.value=!1,M.value=s.data.drivers,console.log(M.value)})},E=s=>{k.value=!0,h.post(`/api/drivers/${s.id}/active`).then(l=>{b()})},F=s=>{k.value=!0,h.post(`/api/drivers/${s.id}/inActive`).then(l=>{b()})},I=s=>{k.value=!0,h.post(`/api/drivers/${s.id}/changeStatus`).then(l=>{b()})},P=()=>{h.post("/api/rating/create-admin",x.value).then(s=>{b(),g.add({severity:"success",summary:"Successful",detail:"rate send",life:3e3}),w.value=!w.value}).catch(s=>{V.value=s.response.data.errors})};ie(()=>{b()});const K=s=>{A.push({name:"drivers-show",params:{id:s}}),console.log(s)},Y=()=>{S.value=!1,r.value=!1},j=()=>{r.value=!0,!(!a.value.first_name||!a.value.last_name||!a.value.email||!a.value.mobile_number)&&(a.value.id?(h.post(`/api/users/${a.value.id}/update`,a.value).then(s=>{console.log(s.data),b(),g.add({severity:"success",summary:"Successful",detail:"user updated",life:3e3})}).catch(()=>{}),g.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):h.post("/api/users/create",a.value).then(s=>{console.log(s.data),b(),g.add({severity:"success",summary:"Successful",detail:"user Created",life:3e3})}).catch(()=>{}),S.value=!1,a.value={})},z=s=>{switch(s.status){case 1:return"success";case-1:return"warning";case 0:return"danger";default:return null}},W=s=>{V.value=i(""),x.value.reviewable_id=s,w.value=!0};i("bottom"),i([{value:1},{value:2},{value:3},{value:4},{value:5}]);const G=()=>{O.value.exportCSV()},H=()=>{L.value=L.value.filter(s=>!N.value.includes(s)),T.value=!1,N.value=null,g.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})},J=()=>{D.value={global:{value:null,matchMode:oe.CONTAINS}}};return(s,l)=>{const c=v("Button"),Q=v("Toolbar"),X=v("Toast"),y=v("InputText"),m=v("Column"),R=v("Rating"),Z=v("Tag"),ee=v("DataTable"),q=v("Dialog"),te=v("va-card");return d(),u("div",ne,[o("div",de,[t(te,{class:"card"},{default:n(()=>[t(Q,{class:"mb-4"},{start:n(()=>[ue]),end:n(()=>[t(c,{label:"Export",icon:"pi pi-upload",class:"new",onClick:l[0]||(l[0]=e=>G())})]),_:1}),t(X),t(ee,{ref_key:"dt",ref:O,selection:N.value,"onUpdate:selection":l[2]||(l[2]=e=>N.value=e),value:M.value,loading:k.value,"data-key":"id",paginator:!0,rows:10,filters:D.value,"paginator-template":"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown","rows-per-page-options":[5,10,25],"current-page-report-template":"Showing {first} to {last} of {totalRecords} products","responsive-layout":"scroll"},{header:n(()=>[o("div",re,[ce,o("span",me,[ve,t(y,{modelValue:D.value.global.value,"onUpdate:modelValue":l[1]||(l[1]=e=>D.value.global.value=e),placeholder:"Search..."},null,8,["modelValue"])])])]),default:n(()=>[t(m,{"selection-mode":"multiple","header-style":"width: 3rem"}),t(m,{field:"name",header:"Name",sortable:!0,"header-style":"width:14%; min-width:10rem;"},{body:n(e=>[$(U(e.data.name),1)]),_:1}),t(m,{field:"gender",header:"Gender",sortable:!0,"header-style":"width:14%; min-width:10rem;"},{body:n(e=>[e.data.gender==1?(d(),u("span",pe," Men ")):(d(),u("span",_e," Women "))]),_:1}),t(m,{field:"email",header:"Email",sortable:!0,"header-style":"width:14%; min-width:10rem;"},{body:n(e=>[$(U(e.data.email),1)]),_:1}),t(m,{field:"phone",header:"Phone",sortable:!0,"header-style":"width:14%; min-width:10rem;"},{body:n(e=>[$(U(e.data.phone),1)]),_:1}),t(m,{field:"rate",header:"Rate",sortable:!0,"header-style":"width:14%; min-width:10rem;"},{body:n(e=>[t(R,{onClick:_=>W(e.data.id),modelValue:e.data.admin_rating,cancel:!1},null,8,["onClick","modelValue"])]),_:1}),t(m,{field:"email_verified",header:"Email Verified",sortable:!0,"header-style":"width:14%; min-width:10rem;",class:"m-auto"},{body:n(e=>{var _,C;return[o("div",fe,[((_=e.data)==null?void 0:_.email_verified)=="Not Yet"?(d(),u("i",be)):p("",!0),((C=e.data)==null?void 0:C.email_verified)!="Not Yet"?(d(),u("i",he)):p("",!0)])]}),_:1}),t(m,{field:"status",header:"Status",sortable:!0,"header-style":"width:14%; min-width:10rem;"},{body:n(e=>[t(Z,{value:e.data.status==1?"Active":e.data.status==0?"In Active":"pending",severity:z(e.data)},null,8,["value","severity"])]),_:1}),t(m,{"header-style":"min-width:10rem;"},{body:n(e=>{var _;return[((_=e.data)==null?void 0:_.email_verified)!="Not Yet"?(d(),u("div",ye,[e.data.status==-1?(d(),u("div",ge,[t(c,{icon:"pi pi-times",class:f(["p-button-rounded mr-2","p-button-danger"]),onClick:C=>F(e.data)},null,8,["onClick"]),t(c,{icon:"pi pi-check",class:f(["p-button-rounded mr-2","p-button-success"]),onClick:C=>E(e.data)},null,8,["onClick"])])):(d(),u("div",ke,[t(c,{icon:e.data.status==0?"pi pi-check":"pi pi-times",class:f(["new mr-2",e.data.status==0?"p-button-success":"p-button-danger"]),style:{"border-radius":"50% !important"},onClick:C=>I(e.data)},null,8,["icon","class","onClick"])]))])):p("",!0)]}),_:1}),t(m,{"header-style":"min-width:10rem;"},{body:n(e=>[o("div",null,[t(c,{label:"show",class:f(["pop mr-2","p-button-danger"]),onClick:_=>K(e.data.id)},null,8,["onClick"])])]),_:1})]),_:1},8,["selection","value","loading","filters"]),t(q,{visible:S.value,"onUpdate:visible":l[8]||(l[8]=e=>S.value=e),style:{width:"450px"},header:"users form",modal:!0,class:"p-fluid"},{footer:n(()=>[t(c,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:Y}),t(c,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:j})]),default:n(()=>[o("div",we,[Ce,t(y,{class:f(["mt-3",{"p-invalid":r.value&&!a.value.first_name}]),id:"first",modelValue:a.value.first_name,"onUpdate:modelValue":l[3]||(l[3]=e=>a.value.first_name=e),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),r.value&&!a.value.first_name?(d(),u("small",Ve,"First Name is required.")):p("",!0)]),o("div",xe,[Se,t(y,{class:f(["mt-3",{"p-invalid":r.value&&!a.value.last_name}]),id:"last",modelValue:a.value.last_name,"onUpdate:modelValue":l[4]||(l[4]=e=>a.value.last_name=e),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),r.value&&!a.value.last_name?(d(),u("small",Te,"Last Name is required.")):p("",!0)]),o("div",Ne,[De,t(y,{class:f(["mt-3",{"p-invalid":r.value&&!a.value.email}]),id:"email",modelValue:a.value.email,"onUpdate:modelValue":l[5]||(l[5]=e=>a.value.email=e),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),r.value&&!a.value.email?(d(),u("small",Ue,"Email is required.")):p("",!0)]),o("div",Me,[qe,t(y,{class:f(["mt-3",{"p-invalid":r.value&&!a.value.password}]),id:"password",modelValue:a.value.password,"onUpdate:modelValue":l[6]||(l[6]=e=>a.value.password=e),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),r.value&&!a.value.password?(d(),u("small",$e,"password is required.")):p("",!0)]),o("div",Le,[Oe,t(y,{class:f(["mt-3",{"p-invalid":r.value&&!a.value.mobile_number}]),id:"mobile",modelValue:a.value.mobile_number,"onUpdate:modelValue":l[7]||(l[7]=e=>a.value.mobile_number=e),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),r.value&&!a.value.mobile_number?(d(),u("small",Re,"mobile is required.")):p("",!0)])]),_:1},8,["visible"]),t(q,{visible:w.value,"onUpdate:visible":l[10]||(l[10]=e=>w.value=e),style:{width:"450px"},header:"rate",modal:!0},{footer:n(()=>[t(c,{label:"send",icon:"pi pi-check",class:"m-auto",onClick:P})]),default:n(()=>{var e;return[o("div",Ae,[t(R,{class:"m-auto",modelValue:x.value.tourist_rating,"onUpdate:modelValue":l[9]||(l[9]=_=>x.value.tourist_rating=_),stars:5,cancel:!1},null,8,["modelValue"])]),(e=V.value)!=null&&e.tourist_rating?(d(),u("div",Be,U(V.value.tourist_rating[0]),1)):p("",!0)]}),_:1},8,["visible"]),t(q,{visible:T.value,"onUpdate:visible":l[12]||(l[12]=e=>T.value=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:n(()=>[t(c,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:l[11]||(l[11]=e=>T.value=!1)}),t(c,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:H})]),default:n(()=>[o("div",Ee,[Fe,B.value?(d(),u("span",Ie,"Are you sure you want to delete the selected products?")):p("",!0)])]),_:1},8,["visible"])]),_:1})])])}}};export{Ye as default};
