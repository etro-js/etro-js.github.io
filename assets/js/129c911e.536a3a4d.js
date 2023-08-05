"use strict";(self.webpackChunketro_site_2=self.webpackChunketro_site_2||[]).push([[2685],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,h=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2189:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},o="Image Layer",l={unversionedId:"reference/layers/image",id:"reference/layers/image",title:"Image Layer",description:"etro.layer.Image renders an `` element to the movie.",source:"@site/docs/reference/layers/image.md",sourceDirName:"reference/layers",slug:"/reference/layers/image",permalink:"/docs/reference/layers/image",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Base Layer",permalink:"/docs/reference/layers/base"},next:{title:"Text Layer",permalink:"/docs/reference/layers/text"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Inheritance",id:"inheritance",level:2},{value:"Options",id:"options",level:2},{value:"<code>source</code>",id:"source",level:3},{value:"<code>sourceX</code>",id:"sourcex",level:3},{value:"<code>sourceY</code>",id:"sourcey",level:3},{value:"<code>sourceWidth</code>",id:"sourcewidth",level:3},{value:"<code>sourceHeight</code>",id:"sourceheight",level:3}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"image-layer"},"Image Layer"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"etro.layer.Image")," renders an ",(0,a.kt)("inlineCode",{parentName:"p"},"<img>")," element to the movie."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import etro from 'etro';\n\nconst layer = new etro.layer.Image({\n  startTime: 0,\n  duration: 5,\n  source: new Image(),\n  sourceX: 0, // default: 0\n  sourceY: 0, // default: 0\n  sourceWidth: 400, // default: null (full width)\n  sourceHeight: 400, // default: null (full height)\n  x: 0, // default: 0\n  y: 0, // default: 0\n  width: 400, // default: null (full width)\n  height: 400, // default: null (full height)\n  opacity: 1, // default: 1\n});\n")),(0,a.kt)("h2",{id:"inheritance"},"Inheritance"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"etro.layer.Image")," inherits from ",(0,a.kt)("a",{parentName:"p",href:"visual"},(0,a.kt)("inlineCode",{parentName:"a"},"etro.layer.Visual")),"."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"source"},(0,a.kt)("inlineCode",{parentName:"h3"},"source")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<img>")," element to render."),(0,a.kt)("h3",{id:"sourcex"},(0,a.kt)("inlineCode",{parentName:"h3"},"sourceX")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This is a ",(0,a.kt)("a",{parentName:"p",href:"../dynamic-properties"},"Dynamic Property"),".")),(0,a.kt)("p",null,"The x position to crop the image from. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,a.kt)("h3",{id:"sourcey"},(0,a.kt)("inlineCode",{parentName:"h3"},"sourceY")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This is a ",(0,a.kt)("a",{parentName:"p",href:"../dynamic-properties"},"Dynamic Property"),".")),(0,a.kt)("p",null,"The y position to crop the image from. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,a.kt)("h3",{id:"sourcewidth"},(0,a.kt)("inlineCode",{parentName:"h3"},"sourceWidth")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This is a ",(0,a.kt)("a",{parentName:"p",href:"../dynamic-properties"},"Dynamic Property"),".")),(0,a.kt)("p",null,"The width to crop the image to. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", which means the image will be cropped to the full width of the image."),(0,a.kt)("h3",{id:"sourceheight"},(0,a.kt)("inlineCode",{parentName:"h3"},"sourceHeight")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This is a ",(0,a.kt)("a",{parentName:"p",href:"../dynamic-properties"},"Dynamic Property"),".")),(0,a.kt)("p",null,"The height to crop the image to. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", which means the image will be cropped to the full height of the image."))}s.isMDXComponent=!0}}]);