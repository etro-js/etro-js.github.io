"use strict";(self.webpackChunketro_site_2=self.webpackChunketro_site_2||[]).push([[550],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),u=a,m=p["".concat(c,".").concat(u)]||p[u]||f[u]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2698:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={},o="Base Effect",l={unversionedId:"reference/effects/base",id:"reference/effects/base",title:"Base Effect",description:"etro.effect.Base is the base class for all effects. It is not meant to be used directly.",source:"@site/docs/reference/effects/base.md",sourceDirName:"reference/effects",slug:"/reference/effects/base",permalink:"/docs/reference/effects/base",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Writing a Visual Effect",permalink:"/docs/reference/effects/custom"},next:{title:"Brightness Effect",permalink:"/docs/reference/effects/brightness"}},c={},s=[{value:"Properties",id:"properties",level:2},{value:"<code>enabled</code>",id:"enabled",level:3},{value:"Read-only Properties",id:"read-only-properties",level:2},{value:"<code>currentTime</code>",id:"currenttime",level:3},{value:"<code>parent</code>",id:"parent",level:3},{value:"<code>movie</code>",id:"movie",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>attach(target: Movie | BaseLayer)</code>",id:"attachtarget-movie--baselayer",level:3},{value:"<code>detach()</code>",id:"detach",level:3},{value:"<code>apply(target: Movie | BaseLayer, reltime: number)</code>",id:"applytarget-movie--baselayer-reltime-number",level:3},{value:"<code>whenReady()</code>",id:"whenready",level:3}],d={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"base-effect"},"Base Effect"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"etro.effect.Base")," is the base class for all effects. It is not meant to be used directly."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"enabled"},(0,a.kt)("inlineCode",{parentName:"h3"},"enabled")),(0,a.kt)("p",null,"Whether the effect should be used. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("h2",{id:"read-only-properties"},"Read-only Properties"),(0,a.kt)("h3",{id:"currenttime"},(0,a.kt)("inlineCode",{parentName:"h3"},"currentTime")),(0,a.kt)("p",null,"The current time of the movie in seconds, relative to the start of the layer."),(0,a.kt)("h3",{id:"parent"},(0,a.kt)("inlineCode",{parentName:"h3"},"parent")),(0,a.kt)("p",null,"The target of this effect, either a ",(0,a.kt)("inlineCode",{parentName:"p"},"Movie")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseLayer")," instance."),(0,a.kt)("h3",{id:"movie"},(0,a.kt)("inlineCode",{parentName:"h3"},"movie")),(0,a.kt)("p",null,"The target or the target's mosvie."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"attachtarget-movie--baselayer"},(0,a.kt)("inlineCode",{parentName:"h3"},"attach(target: Movie | BaseLayer)")),(0,a.kt)("p",null,"Called by the target when the effect is added to its ",(0,a.kt)("inlineCode",{parentName:"p"},"effects")," array."),(0,a.kt)("h3",{id:"detach"},(0,a.kt)("inlineCode",{parentName:"h3"},"detach()")),(0,a.kt)("p",null,"Called by the target when the effect is removed from its ",(0,a.kt)("inlineCode",{parentName:"p"},"effects")," array."),(0,a.kt)("h3",{id:"applytarget-movie--baselayer-reltime-number"},(0,a.kt)("inlineCode",{parentName:"h3"},"apply(target: Movie | BaseLayer, reltime: number)")),(0,a.kt)("p",null,"Apply this effect to a target at the given time."),(0,a.kt)("h3",{id:"whenready"},(0,a.kt)("inlineCode",{parentName:"h3"},"whenReady()")),(0,a.kt)("p",null,"Wait until this effect is ready to be applied."))}p.isMDXComponent=!0}}]);