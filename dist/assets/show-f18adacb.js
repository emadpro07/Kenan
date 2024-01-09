import{u as F,r as u,p as M,o as U,b as T,d as x,e as s,f as o,i as p,w as N,F as h,h as t,t as l,n as d,k as V}from"./index-d45d974b.js";import"./pagination-25b2bd0b.js";const $=t("div",{class:"w-full"},[t("p",{class:"w-full text-2xl m-auto py-[1%]"},"Ticket details")],-1),j={style:{border:"1px solid rgb(217, 214, 214)",height:"450px !important","overflow-y":"scroll !important"},class:"p-[1%] px-[2%] rounded-md"},G={class:"w-full"},L={class:"flex py-2"},P=t("i",{class:"bg-[#DE4915] p-1 rounded-full my-auto text-[white] pi pi-check"},null,-1),q=t("p",{class:"text-xl font-bold my-auto pl-2"},"Ticket Id :",-1),z={class:"text-xl px-1 my-auto"},H={class:"flex py-2"},J=t("i",{class:"bg-[#DE4915] p-1 rounded-full text-[white] my-auto pi pi-check"},null,-1),K=t("p",{class:"text-xl font-bold my-auto pl-2"},"status :",-1),O={key:0,class:"text-xl md:text-xl px-1 my-auto text-[green]"},Q={key:1,class:"text-xl md:text-xl px-1 my-auto text-[#8d8d30]"},W={key:2,class:"text-xl md:text-xl px-1 my-auto text-[red]"},X={class:"flex py-2"},Y=t("i",{class:"bg-[#DE4915] p-1 rounded-full text-[white] my-auto pi pi-check"},null,-1),Z=t("p",{class:"text-xl font-bold my-auto pl-2"},"Contact Type :",-1),tt={class:"text-xl md:text-xl px-1 my-auto"},et={class:"flex py-2"},st=t("i",{class:"bg-[#DE4915] p-1 rounded-full text-[white] my-auto pi pi-check"},null,-1),ot=t("p",{class:"text-xl font-bold my-auto pl-2"},"priority :",-1),lt={class:"text-xl md:text-xl px-1 my-auto"},at={class:"flex py-2"},ct=t("i",{class:"bg-[#DE4915] p-1 rounded-full text-[white] my-auto pi pi-check"},null,-1),dt=t("p",{class:"text-xl font-bold my-auto pl-2"},"Subject :",-1),nt={class:"text-xl md:text-xl px-1 my-auto"},it={class:"flex py-2"},ut=t("i",{class:"bg-[#DE4915] p-1 rounded-full text-[white] my-auto pi pi-check"},null,-1),pt=t("p",{class:"text-xl font-bold my-auto pl-2"},"Name :",-1),_t={class:"text-xl md:text-xl px-1 my-auto"},xt={class:"py-2"},rt={key:0,class:"flex py-2"},ht=t("i",{class:"bg-[#DE4915] p-1 rounded-full text-[white] my-auto pi pi-check"},null,-1),mt=t("p",{class:"text-xl font-bold my-auto pl-2"},"message :",-1),yt={class:"text-xl md:text-xl px-1 my-auto"},ft={key:1,class:"flex py-2"},vt=t("i",{class:"bg-[#44b95e] p-1 rounded-full text-[white] my-auto pi pi-check"},null,-1),bt=t("p",{class:"text-xl font-bold my-auto pl-2"},"Replay :",-1),kt={class:"text-xl md:text-xl px-1 my-auto"},gt={style:{border:"1px solid rgb(217, 214, 214)"},class:"p-[1%] rounded-md"},wt={class:"card w-full"},Et={class:"py-2 text-[red]"},Dt={class:"card w-full py-4 text-center"},Ct={setup(Tt){const m=F();u(2.5);const e=u({}),C=u(Number),n=u({}),S=M(),r=u({replay:""});U(()=>{T.get(`/api/tickets/show/${m.params.id}`).then(a=>{var i;console.log(a.data),e.value=a.data.ticket,C.value=a.data.tickets[0].message.length,console.log((i=localStorage.authUser[0])==null?void 0:i.id)})});const B=()=>{T.post(`/api/tickets/addReplay/${m.params.id}`,r.value).then(a=>{n.value="",S.add({severity:"success",summary:"Successful",detail:"Replay send Successful",life:3e3}),location.reload()}).catch(a=>{n.value=a.response.data.errors,console.log(n.value)})};return(a,i)=>{const y=x("va-card"),R=x("Textarea"),I=x("Button"),A=x("Toast");return s(),o(h,null,[p(y,{class:"card w-[100%] p-[2%] m-auto"},{default:N(()=>{var c,f,v,b,k,g,w,E,D;return[$,t("div",j,[t("div",G,[t("div",L,[P,q,t("p",z,l((c=e.value)==null?void 0:c.id),1)]),t("div",H,[J,K,((f=e.value)==null?void 0:f.status)==1?(s(),o("p",O,"Active ")):d("",!0),((v=e.value)==null?void 0:v.status)==-1?(s(),o("p",Q,"PENDING ")):d("",!0),((b=e.value)==null?void 0:b.status)==0?(s(),o("p",W,"INACTIVE ")):d("",!0)]),t("div",X,[Y,Z,t("p",tt,l((k=e.value)==null?void 0:k.type),1)]),t("div",et,[st,ot,t("p",lt,l((g=e.value)==null?void 0:g.priority),1)]),t("div",at,[ct,dt,t("p",nt,l((w=e.value)==null?void 0:w.title),1)]),t("div",it,[ut,pt,t("p",_t,l((D=(E=e.value)==null?void 0:E.user)==null?void 0:D.name),1)]),(s(!0),o(h,null,V(e.value.conversation,_=>(s(),o("div",xt,[_.type=="Message"?(s(),o("div",rt,[ht,mt,t("p",yt,l(_.content),1)])):d("",!0),_.type=="Reply"?(s(),o("div",ft,[vt,bt,t("p",kt,l(_.content),1)])):d("",!0)]))),256))])])]}),_:1}),p(y,{class:"card w-[100%] p-[2%] m-auto"},{default:N(()=>[t("div",gt,[t("div",wt,[p(R,{modelValue:r.value.replay,"onUpdate:modelValue":i[0]||(i[0]=c=>r.value.replay=c),class:"bord w-full",rows:"5",cols:"30",placeholder:"Enter your replay"},null,8,["modelValue"])]),n.value?(s(!0),o(h,{key:0},V(n.value,c=>(s(),o("p",Et,l(c[0]),1))),256)):d("",!0),t("div",Dt,[p(I,{onClick:B,class:"w-32",label:"Send"})])])]),_:1}),p(A)],64)}}};export{Ct as default};
