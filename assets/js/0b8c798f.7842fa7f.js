"use strict";(self.webpackChunketro_site_2=self.webpackChunketro_site_2||[]).push([[630],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=f(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||c;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var f={};for(var i in t)hasOwnProperty.call(t,i)&&(f[i]=t[i]);f.originalType=e,f[p]="string"==typeof e?e:a,o[1]=f;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9498:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>f,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const c={},o="Stack Effect",f={unversionedId:"reference/effects/stack",id:"reference/effects/stack",title:"Stack Effect",description:"etro.effect.Stack applies multiple effects to the target.",source:"@site/docs/reference/effects/stack.md",sourceDirName:"reference/effects",slug:"/reference/effects/stack",permalink:"/docs/reference/effects/stack",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shader Effect",permalink:"/docs/reference/effects/shader"},next:{title:"Transform Effect",permalink:"/docs/reference/effects/transform"}},i={},s=[{value:"Usage",id:"usage",level:2},{value:"Inheritance",id:"inheritance",level:2}],l={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stack-effect"},"Stack Effect"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"etro.effect.Stack")," applies multiple effects to the target."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This effect is experimental and may be removed in the future.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const effect = new etro.effect.Stack([\n    new etro.effect.Pixelate({ pixelSize: 10 }),\n    new etro.effect.Channels({ factors: { r: 1, g: 0, b: 0 } }),\n])\n")),(0,a.kt)("h2",{id:"inheritance"},"Inheritance"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"etro.effect.Stack")," inherits from ",(0,a.kt)("a",{parentName:"p",href:"base"},(0,a.kt)("inlineCode",{parentName:"a"},"etro.effect.Base")),"."))}p.isMDXComponent=!0}}]);