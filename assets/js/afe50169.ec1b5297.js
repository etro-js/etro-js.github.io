"use strict";(self.webpackChunketro_site_2=self.webpackChunketro_site_2||[]).push([[289],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var f=n.createContext({}),l=function(e){var t=n.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(f.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,f=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,y=p["".concat(f,".").concat(d)]||p[d]||u[d]||c;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var f in t)hasOwnProperty.call(t,f)&&(i[f]=t[f]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9198:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const c={},o="Grayscale Effect",i={unversionedId:"reference/effects/grayscale",id:"reference/effects/grayscale",title:"Grayscale Effect",description:"etro.effect.Grayscale completely desaturates the target.",source:"@site/docs/reference/effects/grayscale.md",sourceDirName:"reference/effects",slug:"/reference/effects/grayscale",permalink:"/docs/reference/effects/grayscale",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gaussian Blur Effect",permalink:"/docs/reference/effects/gaussian-blur"},next:{title:"Pixelate Effect",permalink:"/docs/reference/effects/pixelate"}},f={},l=[{value:"Usage",id:"usage",level:2},{value:"Inheritance",id:"inheritance",level:2}],s={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grayscale-effect"},"Grayscale Effect"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"etro.effect.Grayscale")," completely desaturates the target."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This effect is GPU-accelerated (see ",(0,a.kt)("a",{parentName:"p",href:"shader"},(0,a.kt)("inlineCode",{parentName:"a"},"etro.effect.Shader")),").")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const effect = new etro.effect.Grayscale()\n")),(0,a.kt)("h2",{id:"inheritance"},"Inheritance"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"etro.effect.Grayscale")," inherits from ",(0,a.kt)("a",{parentName:"p",href:"shader"},(0,a.kt)("inlineCode",{parentName:"a"},"etro.effect.Shader")),"."))}p.isMDXComponent=!0}}]);