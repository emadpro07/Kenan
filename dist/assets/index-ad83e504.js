import{p as J,q as Q,r as i,s as X,o as Z,v as ee,d as r,e as c,f as m,h as s,i as t,w as n,b as S,m as y,t as N,K as h,n as v}from"./index-d45d974b.js";const le={class:"grid"},te={class:"col-12"},ae={class:"my-2"},se={class:"flex flex-column md:flex-row md:justify-between md:align-items-center"},oe=s("h5",{class:"m-0"},"Manage Offer",-1),ie={class:"block mt-2 md:mt-0 p-input-icon-left"},ne=s("i",{class:"pi pi-search"},null,-1),ue={class:"field mb-5"},de=s("label",{for:"first"},"first name ",-1),re={key:0,class:"p-invalid"},ce={class:"field mb-5"},me=s("label",{for:"last"},"last name ",-1),ve={key:0,class:"p-invalid"},pe={class:"field mb-5"},fe=s("label",{for:"email",class:"mb-3"},"email ",-1),_e={key:0,class:"p-invalid"},be={class:"field mb-5"},he=s("label",{for:"password",class:"mb-3"},"password ",-1),ye={key:0,class:"p-invalid"},ge={class:"field mb-5"},we=s("label",{for:"mobile",class:"mb-3"},"mobile",-1),ke={key:0,class:"p-invalid"},Ce={class:"flex align-items-center justify-content-center"},xe=s("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),Ve={key:0},Te=y("Are you sure you want to delete "),Se=y("?"),Ne={class:"flex align-items-center justify-content-center"},De=s("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),Pe={key:0},Me={setup(Ue){const _=J(),P=Q(),U=i(null),q=i(null);i([{name:"English",value:"gb"},{name:"Arabic",value:"sa"},{name:"Azerbaijan",value:"az"},{name:"Georgia",value:"ge"},{name:"Russia",value:"ru"},{name:"Turkey",value:"tr"}]),i("gb");const g=i(!0),l=i({});i(null);const w=i(!1),b=i(!1),k=i(!1),O=i({}),C=i(null),M=i(null),x=i({}),u=i(!1);i([{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]),X(()=>{E()});const V=()=>{S.get("/api/offers").then(o=>{g.value=!1,q.value=o.data.offers})};Z(()=>{V()});const A=()=>{P.push({name:"offer-create"})},L=o=>{switch(o.status){case 1:return"success";case-1:return"warning";case 0:return"danger";default:return null}},$=()=>{w.value=!1,u.value=!1},B=()=>{u.value=!0,!(!l.value.first_name||!l.value.last_name||!l.value.email||!l.value.mobile_number)&&(l.value.id?(S.post(`/api/accommodition/${accommodition.value.id}/update`,l.value).then(o=>{console.log(o.data),V(),_.add({severity:"success",summary:"Successful",detail:"user updated",life:3e3})}).catch(()=>{}),_.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):S.post("/api/users/create",l.value).then(o=>{console.log(o.data),V(),_.add({severity:"success",summary:"Successful",detail:"user Created",life:3e3})}).catch(()=>{}),w.value=!1,l.value={})},z=o=>{l.value={...o},P.push({name:"offer-update",params:{id:l.value.id}})},F=o=>{l.value=o,b.value=!0},I=()=>{g.value=!0,S.delete(`/api/offers/${l.value.id}/delete`).then(o=>{console.log(o.data),b.value=!1,V(),g.value=!1,_.add({severity:"success",summary:"Successful",detail:"offer deleted",life:3e3})}).catch(()=>{})},R=()=>{M.value.exportCSV()},j=()=>{U.value=U.value.filter(o=>!C.value.includes(o)),k.value=!1,C.value=null,_.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})},E=()=>{x.value={global:{value:null,matchMode:ee.CONTAINS}}};return(o,a)=>{const d=r("Button"),K=r("Toolbar"),Y=r("Toast"),p=r("InputText"),f=r("Column"),G=r("Tag"),W=r("DataTable"),D=r("Dialog"),H=r("va-card");return c(),m("div",le,[s("div",te,[t(H,{class:"card"},{default:n(()=>[t(K,{class:"mb-4"},{start:n(()=>[s("div",ae,[t(d,{label:"New",icon:"pi pi-plus",class:"new mr-2",onClick:A})])]),end:n(()=>[t(d,{label:"Export",icon:"pi pi-upload",class:"new",onClick:a[0]||(a[0]=e=>R())})]),_:1}),t(Y),t(W,{ref_key:"dt",ref:M,selection:C.value,"onUpdate:selection":a[2]||(a[2]=e=>C.value=e),value:q.value,loading:g.value,"data-key":"id",paginator:!0,rows:10,filters:x.value,"paginator-template":"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown","rows-per-page-options":[5,10,25],"current-page-report-template":"Showing {first} to {last} of {totalRecords} products","responsive-layout":"scroll"},{header:n(()=>[s("div",se,[oe,s("span",ie,[ne,t(p,{modelValue:x.value.global.value,"onUpdate:modelValue":a[1]||(a[1]=e=>x.value.global.value=e),placeholder:"Search..."},null,8,["modelValue"])])])]),default:n(()=>[t(f,{"selection-mode":"multiple","header-style":"width: 3rem"}),t(f,{field:"number",header:"Offer Number",sortable:!0,"header-style":"width:14%; min-width:10rem;"},{body:n(e=>{var T;return[y(N((T=e.data)==null?void 0:T.number),1)]}),_:1}),t(f,{field:"title",header:"Title",sortable:!0,"header-style":"width:14%; min-width:10rem;"},{body:n(e=>[y(N(e.data.title),1)]),_:1}),t(f,{field:"price",header:"Price",sortable:!0,"header-style":"width:14%; min-width:10rem;"},{body:n(e=>[y(N(e.data.price),1)]),_:1}),t(f,{field:"status",header:"Status",sortable:!0,"header-style":"width:14%; min-width:10rem;"},{body:n(e=>[t(G,{value:e.data.status==1?"Active":e.data.status==0?"In Active":"pending",severity:L(e.data)},null,8,["value","severity"])]),_:1}),t(f,{"header-style":"min-width:10rem;"},{body:n(e=>[t(d,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:T=>z(e.data)},null,8,["onClick"]),t(d,{icon:"pi pi-trash",class:"delete mt-2",onClick:T=>F(e.data)},null,8,["onClick"])]),_:1})]),_:1},8,["selection","value","loading","filters"]),t(D,{visible:w.value,"onUpdate:visible":a[8]||(a[8]=e=>w.value=e),style:{width:"450px"},header:"users form",modal:!0,class:"p-fluid"},{footer:n(()=>[t(d,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:$}),t(d,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:B})]),default:n(()=>[s("div",ue,[de,t(p,{class:h(["mt-3",{"p-invalid":u.value&&!l.value.first_name}]),id:"first",modelValue:l.value.first_name,"onUpdate:modelValue":a[3]||(a[3]=e=>l.value.first_name=e),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),u.value&&!l.value.first_name?(c(),m("small",re,"First Name is required.")):v("",!0)]),s("div",ce,[me,t(p,{class:h(["mt-3",{"p-invalid":u.value&&!l.value.last_name}]),id:"last",modelValue:l.value.last_name,"onUpdate:modelValue":a[4]||(a[4]=e=>l.value.last_name=e),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),u.value&&!l.value.last_name?(c(),m("small",ve,"Last Name is required.")):v("",!0)]),s("div",pe,[fe,t(p,{class:h(["mt-3",{"p-invalid":u.value&&!l.value.email}]),id:"email",modelValue:l.value.email,"onUpdate:modelValue":a[5]||(a[5]=e=>l.value.email=e),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),u.value&&!l.value.email?(c(),m("small",_e,"Email is required.")):v("",!0)]),s("div",be,[he,t(p,{class:h(["mt-3",{"p-invalid":u.value&&!l.value.password}]),id:"password",modelValue:l.value.password,"onUpdate:modelValue":a[6]||(a[6]=e=>l.value.password=e),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),u.value&&!l.value.password?(c(),m("small",ye,"password is required.")):v("",!0)]),s("div",ge,[we,t(p,{class:h(["mt-3",{"p-invalid":u.value&&!l.value.mobile_number}]),id:"mobile",modelValue:l.value.mobile_number,"onUpdate:modelValue":a[7]||(a[7]=e=>l.value.mobile_number=e),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),u.value&&!l.value.mobile_number?(c(),m("small",ke,"mobile is required.")):v("",!0)])]),_:1},8,["visible"]),t(D,{visible:b.value,"onUpdate:visible":a[10]||(a[10]=e=>b.value=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:n(()=>[t(d,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:a[9]||(a[9]=e=>b.value=!1)}),t(d,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:I})]),default:n(()=>[s("div",Ce,[xe,l.value?(c(),m("span",Ve,[Te,s("b",null,N(l.value.first_name),1),Se])):v("",!0)])]),_:1},8,["visible"]),t(D,{visible:k.value,"onUpdate:visible":a[12]||(a[12]=e=>k.value=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:n(()=>[t(d,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:a[11]||(a[11]=e=>k.value=!1)}),t(d,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:j})]),default:n(()=>[s("div",Ne,[De,O.value?(c(),m("span",Pe,"Are you sure you want to delete the selected products?")):v("",!0)])]),_:1},8,["visible"])]),_:1})])])}}};export{Me as default};