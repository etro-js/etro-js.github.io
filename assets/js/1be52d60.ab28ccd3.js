"use strict";(self.webpackChunketro_site_2=self.webpackChunketro_site_2||[]).push([[1652],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(u,".").concat(m)]||c[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7503:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="Audio Layer",l={unversionedId:"reference/layers/audio",id:"version-0.11/reference/layers/audio",title:"Audio Layer",description:"etro.layer.Audio plays audio from an audio clip.",source:"@site/versioned_docs/version-0.11/reference/layers/audio.md",sourceDirName:"reference/layers",slug:"/reference/layers/audio",permalink:"/docs/0.11/reference/layers/audio",draft:!1,tags:[],version:"0.11",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/0.11/reference/layers/intro"},next:{title:"Base Layer",permalink:"/docs/0.11/reference/layers/base"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"Inheritance",id:"inheritance",level:2},{value:"Options",id:"options",level:2},{value:"<code>source</code> (required)",id:"source-required",level:3},{value:"<code>sourceStartTime</code>",id:"sourcestarttime",level:3},{value:"<code>muted</code>",id:"muted",level:3},{value:"<code>volume</code>",id:"volume",level:3},{value:"<code>playbackRate</code>",id:"playbackrate",level:3}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"audio-layer"},"Audio Layer"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"etro.layer.Audio")," plays audio from an audio clip."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const layer = new etro.layer.Audio({\n  startTime: 0,\n  duration: 3,\n  source: '<link to audio>',\n  sourceStartTime: 0, // default: 0\n  muted: false, // default: false\n  volume: 1, // default: 1\n  playbackRate: 1, // default: 1\n});\n")),(0,a.kt)("h2",{id:"inheritance"},"Inheritance"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"etro.layer.Audio")," inherits from ",(0,a.kt)("a",{parentName:"p",href:"base"},(0,a.kt)("inlineCode",{parentName:"a"},"etro.layer.Base")),"."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"source-required"},(0,a.kt)("inlineCode",{parentName:"h3"},"source")," (required)"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<audio>")," element or path to play."),(0,a.kt)("h3",{id:"sourcestarttime"},(0,a.kt)("inlineCode",{parentName:"h3"},"sourceStartTime")),(0,a.kt)("p",null,"The time to start playing the audio from. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,a.kt)("h3",{id:"muted"},(0,a.kt)("inlineCode",{parentName:"h3"},"muted")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This is a ",(0,a.kt)("a",{parentName:"p",href:"../dynamic-properties"},"Dynamic Property"),".")),(0,a.kt)("p",null,"Whether the audio is muted. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("h3",{id:"volume"},(0,a.kt)("inlineCode",{parentName:"h3"},"volume")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This is a ",(0,a.kt)("a",{parentName:"p",href:"../dynamic-properties"},"Dynamic Property"),".")),(0,a.kt)("p",null,"The volume of the audio. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,a.kt)("h3",{id:"playbackrate"},(0,a.kt)("inlineCode",{parentName:"h3"},"playbackRate")),(0,a.kt)("p",null,"The playback rate of the audio. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"."))}c.isMDXComponent=!0}}]);