import{e as m,i as E,w as F,u as P,g as h,f as C}from"./index-d9a72931.js";var O;const i=typeof window<"u",A=e=>typeof e=="function";i&&((O=window==null?void 0:window.navigator)!=null&&O.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function N(e){return typeof e=="function"?e():P(e)}function Q(e){return e}function d(e){return h()?(C(e),!0):!1}function T(e,n=1e3,t={}){const{immediate:r=!0,immediateCallback:a=!1}=t;let u=null;const o=m(!1);function l(){u&&(clearInterval(u),u=null)}function f(){o.value=!1,l()}function s(){P(n)<=0||(o.value=!0,a&&e(),l(),u=setInterval(e,N(n)))}if(r&&i&&s(),E(n)||A(n)){const c=F(n,()=>{o.value&&i&&s()});d(c)}return d(f),{isActive:o,pause:f,resume:s}}const S=i?window:void 0;i&&window.document;i&&window.navigator;i&&window.location;const p=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v="__vueuse_ssr_handlers__";p[v]=p[v]||{};p[v];function $(e,n={}){const{immediate:t=!0,window:r=S}=n,a=m(!1);let u=0,o=null;function l(c){if(!a.value||!r)return;const b=c-u;e({delta:b,timestamp:c}),u=c,o=r.requestAnimationFrame(l)}function f(){!a.value&&r&&(a.value=!0,o=r.requestAnimationFrame(l))}function s(){a.value=!1,o!=null&&r&&(r.cancelAnimationFrame(o),o=null)}return t&&f(),d(s),{isActive:a,pause:s,resume:f}}var x=Object.defineProperty,w=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,_=(e,n,t)=>n in e?x(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,R=(e,n)=>{for(var t in n||(n={}))j.call(n,t)&&_(e,t,n[t]);if(w)for(var t of w(n))q.call(n,t)&&_(e,t,n[t]);return e};function L(e={}){const{controls:n=!1,interval:t="requestAnimationFrame"}=e,r=m(new Date),a=()=>r.value=new Date,u=t==="requestAnimationFrame"?$(a,{immediate:!0}):T(a,t,{immediate:!0});return n?R({now:r},u):r}var I;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(I||(I={}));var W=Object.defineProperty,y=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?W(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,U=(e,n)=>{for(var t in n||(n={}))B.call(n,t)&&g(e,t,n[t]);if(y)for(var t of y(n))D.call(n,t)&&g(e,t,n[t]);return e};const G={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};U({linear:Q},G);export{L as u};
