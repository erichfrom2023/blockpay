import{u as a}from"./index-359b19f4.js";import{d as n,o as d,c as l,b as s,t,u as o}from"./index-f71c5f5e.js";const _="/assets/counter-97efb8d4.png",r={class:"main-content position-relative"},h=s("img",{class:"fadeOut fadeIn d-none d-lg-block",src:_,style:{position:"absolute",left:"0",top:"0",bottom:"0",height:"100%"}},null,-1),u={class:"container"},m={class:"row py-100 fadeIn slideOutRight"},p={class:"col-lg-10 mx-auto text-lg-right"},v=s("h1",{class:"bp-page-title"}," Pre Access NFT Mints ",-1),g={class:"text-white mb-3"},b={class:"row"},f={class:"col-lg-7 ms-lg-auto singleton-timer-wrapper"},S={class:"singleton-timer"},y=s("div",{class:"underlay"},null,-1),k={class:"timer-block"},w={class:"number"},M=s("div",{class:"label"},"days",-1),x={class:"timer-block"},B={class:"number"},D=s("div",{class:"label"},"hours",-1),Y={class:"timer-block"},j={class:"number"},N=s("div",{class:"label"},"min.",-1),$={class:"timer-block"},E={class:"number"},H=s("div",{class:"label"},"sec.",-1),I=s("div",{class:"col-lg-1"},null,-1),P={__name:"Counter",setup(O){const c=a(),i=dayjs("2023-02-30"),e=n(()=>i.isBefore(c.value)?dayjs.duration(0):dayjs.duration(i.diff(c.value)));return(T,A)=>(d(),l("div",r,[h,s("div",u,[s("div",m,[s("div",p,[v,s("p",g,t(o(i).format("DD MMMM YYYY, HH:mm"))+" EST ",1)]),s("div",b,[s("div",f,[s("div",S,[y,s("div",k,[s("div",w,t(String(Math.floor(o(e).asDays())).padStart(2,"0")),1),M]),s("div",x,[s("div",B,t(String(o(e).$d.hours).padStart(2,"0")),1),D]),s("div",Y,[s("div",j,t(String(o(e).$d.minutes).padStart(2,"0")),1),N]),s("div",$,[s("div",E,t(String(o(e).$d.seconds).padStart(2,"0")),1),H])])]),I])])])]))}};export{P as default};
