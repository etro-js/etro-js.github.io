"use strict";(self.webpackChunketro_site_2=self.webpackChunketro_site_2||[]).push([[13],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var f=n.createContext({}),s=function(e){var t=n.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(f.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,f=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),p=a,y=d["".concat(f,".").concat(p)]||d[p]||u[p]||o;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var f in t)hasOwnProperty.call(t,f)&&(c[f]=t[f]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7458:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},i="Add Effects",c={unversionedId:"getting-started/add-effects",id:"getting-started/add-effects",title:"Add Effects",description:"In this section, you'll learn how to add effects to your movie.",source:"@site/docs/getting-started/add-effects.md",sourceDirName:"getting-started",slug:"/getting-started/add-effects",permalink:"/docs/getting-started/add-effects",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Add Layers",permalink:"/docs/getting-started/add-layers"},next:{title:"Render the Movie",permalink:"/docs/getting-started/render-the-movie"}},f={},s=[{value:"What is an Effect?",id:"what-is-an-effect",level:2},{value:"Add an Effect",id:"add-an-effect",level:2},{value:"Next",id:"next",level:2}],l={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"add-effects"},"Add Effects"),(0,a.kt)("p",null,"In this section, you'll learn how to add effects to your movie."),(0,a.kt)("h2",{id:"what-is-an-effect"},"What is an Effect?"),(0,a.kt)("p",null,"An effect is a filter that you can add to a layer or movie to modify the visual output. Currently, only visual effects are supported, but audio effects will be added in the future."),(0,a.kt)("p",null,"Etro comes with a few built-in effects, but you can also create your own custom effects."),(0,a.kt)("h2",{id:"add-an-effect"},"Add an Effect"),(0,a.kt)("p",null,"To add a blur effect to your movie, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"etro.effect.GaussianBlur")," class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const effect = new etro.effect.GaussianBlur({\n  radius: 10,\n})\n")),(0,a.kt)("p",null,"Then, you can add the effect to your movie before you render it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"movie.effects.push(effect);\n")),(0,a.kt)("h2",{id:"next"},"Next"),(0,a.kt)("p",null,"Now that you have an effect, you can ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/render-the-movie"},"render the movie"),"!"))}d.isMDXComponent=!0}}]);