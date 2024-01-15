"use strict";(self.webpackChunketro_site_2=self.webpackChunketro_site_2||[]).push([[9017],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return r?n.createElement(m,o(o({ref:t},f),{},{components:r})):n.createElement(m,o({ref:t},f))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7024:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={},o="Gaussian Blur Effect",s={unversionedId:"reference/effects/gaussian-blur",id:"version-0.11/reference/effects/gaussian-blur",title:"Gaussian Blur Effect",description:"etro.effect.GaussianBlur applies a Gaussian blur to the target.",source:"@site/versioned_docs/version-0.11/reference/effects/gaussian-blur.md",sourceDirName:"reference/effects",slug:"/reference/effects/gaussian-blur",permalink:"/docs/0.11/reference/effects/gaussian-blur",draft:!1,tags:[],version:"0.11",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EllipticalMask Effect",permalink:"/docs/0.11/reference/effects/elliptical-mask"},next:{title:"Grayscale Effect",permalink:"/docs/0.11/reference/effects/grayscale"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Inheritance",id:"inheritance",level:2},{value:"Options",id:"options",level:2},{value:"<code>radius</code> (required)",id:"radius-required",level:3}],f={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gaussian-blur-effect"},"Gaussian Blur Effect"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"etro.effect.GaussianBlur")," applies a Gaussian blur to the target."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This effect is GPU-accelerated (see ",(0,a.kt)("a",{parentName:"p",href:"shader"},(0,a.kt)("inlineCode",{parentName:"a"},"etro.effect.Shader")),").")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Currently, only integer values are supported for the radius. PRs welcome!")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const effect = new etro.effect.GaussianBlur({\n  radius: 10, // the radius of the blur\n})\n")),(0,a.kt)("h2",{id:"inheritance"},"Inheritance"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"etro.effect.GaussianBlur")," inherits from ",(0,a.kt)("a",{parentName:"p",href:"stack"},(0,a.kt)("inlineCode",{parentName:"a"},"etro.effect.Stack")),". The stack consists of an ",(0,a.kt)("inlineCode",{parentName:"p"},"etro.effect.GaussianBlur.Horizontal")," and an ",(0,a.kt)("inlineCode",{parentName:"p"},"etro.effect.GaussianBlur.Vertical")," effect, both of which are ",(0,a.kt)("a",{parentName:"p",href:"shader"},(0,a.kt)("inlineCode",{parentName:"a"},"etro.effect.Shader"))," effects."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"radius-required"},(0,a.kt)("inlineCode",{parentName:"h3"},"radius")," (required)"),(0,a.kt)("p",null,"The radius of the blur in pixels."))}u.isMDXComponent=!0}}]);