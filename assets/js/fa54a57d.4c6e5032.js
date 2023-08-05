"use strict";(self.webpackChunketro_site_2=self.webpackChunketro_site_2||[]).push([[2847],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(r),y=n,f=u["".concat(s,".").concat(y)]||u[y]||p[y]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4082:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:3},l="Add Layers",i={unversionedId:"getting-started/add-layers",id:"getting-started/add-layers",title:"Add Layers",description:"In this section, you'll learn how to add layers to your movie.",source:"@site/docs/getting-started/add-layers.md",sourceDirName:"getting-started",slug:"/getting-started/add-layers",permalink:"/docs/getting-started/add-layers",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create a Movie",permalink:"/docs/getting-started/create-a-movie"},next:{title:"Add Effects",permalink:"/docs/getting-started/add-effects"}},s={},d=[{value:"What is a Layer?",id:"what-is-a-layer",level:2},{value:"Add a Layer",id:"add-a-layer",level:2},{value:"Next",id:"next",level:2}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"add-layers"},"Add Layers"),(0,n.kt)("p",null,"In this section, you'll learn how to add layers to your movie."),(0,n.kt)("h2",{id:"what-is-a-layer"},"What is a Layer?"),(0,n.kt)("p",null,"A layer is a visual and/or audio element that you can add to a movie. You can add multiple layers to a movie to create complex compositions."),(0,n.kt)("p",null,"Etro comes with a few built-in layers, but you can also create your own custom layers."),(0,n.kt)("h2",{id:"add-a-layer"},"Add a Layer"),(0,n.kt)("p",null,"To add a solid color layer to your movie, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"etro.layer.Visual")," class:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const layer = new etro.layer.Visual({\n  startTime: 0,\n  duration: 5,\n  background: etro.parseColor('blue'),\n});\n")),(0,n.kt)("p",null,"Then, you can add the layer to your movie:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"movie.layers.push(layer);\n")),(0,n.kt)("h2",{id:"next"},"Next"),(0,n.kt)("p",null,"Now that you have a layer, you can ",(0,n.kt)("a",{parentName:"p",href:"add-effects"},"add effects"),"."))}u.isMDXComponent=!0}}]);