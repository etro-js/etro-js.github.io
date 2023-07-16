"use strict";(self.webpackChunketro_site_2=self.webpackChunketro_site_2||[]).push([[241],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,y=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return r?a.createElement(y,o(o({ref:t},c),{},{components:r})):a.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3266:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={},o="Base Layer",l={unversionedId:"layers/base",id:"layers/base",title:"Base Layer",description:"etro.layer.Base is the base class for all layers. It is not meant to be used directly.",source:"@site/docs/layers/base.md",sourceDirName:"layers",slug:"/layers/base",permalink:"/docs/layers/base",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Audio Layer",permalink:"/docs/layers/audio"},next:{title:"Image Layer",permalink:"/docs/layers/image"}},d={},s=[{value:"Options",id:"options",level:2},{value:"<code>startTime</code> (required)",id:"starttime-required",level:3},{value:"<code>duration</code> (required)",id:"duration-required",level:3},{value:"<code>enabled</code>",id:"enabled",level:3},{value:"Read-only Properties",id:"read-only-properties",level:2},{value:"<code>currentTime</code>",id:"currenttime",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>attach(movie: Movie)</code>",id:"attachmovie-movie",level:3},{value:"<code>detach()</code>",id:"detach",level:3},{value:"<code>start()</code>",id:"start",level:3},{value:"<code>render()</code>",id:"render",level:3},{value:"<code>stop()</code>",id:"stop",level:3}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"base-layer"},"Base Layer"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"etro.layer.Base")," is the base class for all layers. It is not meant to be used directly."),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("h3",{id:"starttime-required"},(0,n.kt)("inlineCode",{parentName:"h3"},"startTime")," (required)"),(0,n.kt)("p",null,"The time to start the layer at in seconds."),(0,n.kt)("h3",{id:"duration-required"},(0,n.kt)("inlineCode",{parentName:"h3"},"duration")," (required)"),(0,n.kt)("p",null,"The duration of the layer in seconds."),(0,n.kt)("h3",{id:"enabled"},(0,n.kt)("inlineCode",{parentName:"h3"},"enabled")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This property must be set after the layer is created until it is added as an option.")),(0,n.kt)("p",null,"Whether the layer should be used. The default value is ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("h2",{id:"read-only-properties"},"Read-only Properties"),(0,n.kt)("h3",{id:"currenttime"},(0,n.kt)("inlineCode",{parentName:"h3"},"currentTime")),(0,n.kt)("p",null,"The current time of the movie in seconds, relative to the start of the layer."),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"attachmovie-movie"},(0,n.kt)("inlineCode",{parentName:"h3"},"attach(movie: Movie)")),(0,n.kt)("p",null,"Called by the movie when the layer is added to its ",(0,n.kt)("inlineCode",{parentName:"p"},"layers")," array."),(0,n.kt)("h3",{id:"detach"},(0,n.kt)("inlineCode",{parentName:"h3"},"detach()")),(0,n.kt)("p",null,"Called by the movie when the layer is removed from its ",(0,n.kt)("inlineCode",{parentName:"p"},"layers")," array."),(0,n.kt)("h3",{id:"start"},(0,n.kt)("inlineCode",{parentName:"h3"},"start()")),(0,n.kt)("p",null,"Called by the movie when the layer is activated."),(0,n.kt)("h3",{id:"render"},(0,n.kt)("inlineCode",{parentName:"h3"},"render()")),(0,n.kt)("p",null,"Called by the movie when the layer should render to its internal canvas."),(0,n.kt)("h3",{id:"stop"},(0,n.kt)("inlineCode",{parentName:"h3"},"stop()")),(0,n.kt)("p",null,"Called by the movie when the layer is stopped."))}p.isMDXComponent=!0}}]);