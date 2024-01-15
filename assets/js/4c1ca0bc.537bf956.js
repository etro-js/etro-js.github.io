"use strict";(self.webpackChunketro_site_2=self.webpackChunketro_site_2||[]).push([[8175],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,u=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(u,i(i({ref:t},f),{},{components:r})):n.createElement(u,i({ref:t},f))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3636:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="ChromaKey Effect",c={unversionedId:"reference/effects/chroma-key",id:"version-0.11/reference/effects/chroma-key",title:"ChromaKey Effect",description:"etro.effect.ChromaKey reduces the alpha of pixels that are close to a specified target color.",source:"@site/versioned_docs/version-0.11/reference/effects/chroma-key.md",sourceDirName:"reference/effects",slug:"/reference/effects/chroma-key",permalink:"/docs/0.11/reference/effects/chroma-key",draft:!1,tags:[],version:"0.11",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Channels Effect",permalink:"/docs/0.11/reference/effects/channels"},next:{title:"Contrast Effect",permalink:"/docs/0.11/reference/effects/contrast"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Inheritance",id:"inheritance",level:2},{value:"Options",id:"options",level:2},{value:"<code>target</code>",id:"target",level:3},{value:"<code>threshold</code>",id:"threshold",level:3},{value:"<code>interpolate</code>",id:"interpolate",level:3}],f={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chromakey-effect"},"ChromaKey Effect"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"etro.effect.ChromaKey")," reduces the alpha of pixels that are close to a specified target color."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This effect is GPU-accelerated (see ",(0,a.kt)("a",{parentName:"p",href:"shader"},(0,a.kt)("inlineCode",{parentName:"a"},"etro.effect.Shader")),").")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const effect = new etro.effect.ChromaKey({\n  target: { r: 0, g: 255, b: 0 }, // default: { r: 0, g: 0, b: 0 }\n  threshold: 10, // default: 0\n  interpolate: true, // default: false\n})\n")),(0,a.kt)("h2",{id:"inheritance"},"Inheritance"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"etro.effect.ChromaKey")," inherits from ",(0,a.kt)("a",{parentName:"p",href:"shader"},(0,a.kt)("inlineCode",{parentName:"a"},"etro.effect.Shader")),"."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"target"},(0,a.kt)("inlineCode",{parentName:"h3"},"target")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This is a ",(0,a.kt)("a",{parentName:"p",href:"../dynamic-properties"},"Dynamic Property"),".")),(0,a.kt)("p",null,"The color to remove. Defaults to black (",(0,a.kt)("inlineCode",{parentName:"p"},"{ r: 0, g: 0, b: 0 }"),")."),(0,a.kt)("h3",{id:"threshold"},(0,a.kt)("inlineCode",{parentName:"h3"},"threshold")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This is a ",(0,a.kt)("a",{parentName:"p",href:"../dynamic-properties"},"Dynamic Property"),".")),(0,a.kt)("p",null,"How much error to allow (ranging from 0 to 255). Defaults to 0."),(0,a.kt)("h3",{id:"interpolate"},(0,a.kt)("inlineCode",{parentName:"h3"},"interpolate")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This is a ",(0,a.kt)("a",{parentName:"p",href:"../dynamic-properties"},"Dynamic Property"),".")),(0,a.kt)("p",null,"Whether to interpolate the alpha channel. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", resulting in no smoothing."))}s.isMDXComponent=!0}}]);