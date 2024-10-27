"use strict";(self.webpackChunketro_site_2=self.webpackChunketro_site_2||[]).push([[1871],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(i),c=r,m=s["".concat(d,".").concat(c)]||s[c]||h[c]||a;return i?n.createElement(m,o(o({ref:t},u),{},{components:i})):n.createElement(m,o({ref:t},u))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},6569:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=i(7462),r=(i(7294),i(3905));const a={},o="Video Layer",l={unversionedId:"reference/layers/video",id:"version-0.11/reference/layers/video",title:"Video Layer",description:"etro.layer.Video renders a video clip to the movie.",source:"@site/versioned_docs/version-0.11/reference/layers/video.md",sourceDirName:"reference/layers",slug:"/reference/layers/video",permalink:"/docs/0.11/reference/layers/video",draft:!1,tags:[],version:"0.11",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Text Layer",permalink:"/docs/0.11/reference/layers/text"},next:{title:"Visual Layer",permalink:"/docs/0.11/reference/layers/visual"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Inheritance",id:"inheritance",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>source</code>",id:"source",level:3},{value:"<code>sourceX</code>",id:"sourcex",level:3},{value:"<code>sourceY</code>",id:"sourcey",level:3},{value:"<code>sourceWidth</code>",id:"sourcewidth",level:3},{value:"<code>sourceHeight</code>",id:"sourceheight",level:3},{value:"<code>sourceStartTime</code>",id:"sourcestarttime",level:3},{value:"<code>destX</code>",id:"destx",level:3},{value:"<code>destY</code>",id:"desty",level:3},{value:"<code>destWidth</code>",id:"destwidth",level:3},{value:"<code>destHeight</code>",id:"destheight",level:3},{value:"<code>muted</code>",id:"muted",level:3},{value:"<code>volume</code>",id:"volume",level:3}],u={toc:p};function s(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"video-layer"},"Video Layer"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"etro.layer.Video")," renders a video clip to the movie."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const layer = new etro.layer.Video({\n  startTime: 0,\n  duration: 5,\n  source: '<link to video>', // also accepts an `HTMLVideoElement`\n  sourceX: 0, // default: 0\n  sourceY: 0, // default: 0\n  sourceWidth: 400, // default: null (full width)\n  sourceHeight: 400, // default: null (full height)\n  sourceStartTime: 0, // default: 0\n  destX: 0, // default: 0\n  destY: 0, // default: 0\n  destWidth: 400, // default: null (full width)\n  destHeight: 400, // default: null (full height)\n  x: 0, // default: 0\n  y: 0, // default: 0\n  width: 400, // default: null (full width)\n  height: 400, // default: null (full height)\n  opacity: 1, // default: 1\n  muted: false, // default: false\n  volume: 1, // default: 1\n  playbackRate: 1, // default: 1\n});\n")),(0,r.kt)("h2",{id:"inheritance"},"Inheritance"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"etro.layer.Video")," inherits from ",(0,r.kt)("a",{parentName:"p",href:"visual"},(0,r.kt)("inlineCode",{parentName:"a"},"etro.layer.Visual")),"."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"source"},(0,r.kt)("inlineCode",{parentName:"h3"},"source")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<video>")," element or path to render."),(0,r.kt)("h3",{id:"sourcex"},(0,r.kt)("inlineCode",{parentName:"h3"},"sourceX")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is a ",(0,r.kt)("a",{parentName:"p",href:"../dynamic-properties"},"Dynamic Property"),".")),(0,r.kt)("p",null,"The x position to crop the video from. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("h3",{id:"sourcey"},(0,r.kt)("inlineCode",{parentName:"h3"},"sourceY")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is a ",(0,r.kt)("a",{parentName:"p",href:"../dynamic-properties"},"Dynamic Property"),".")),(0,r.kt)("p",null,"The y position to crop the video from. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("h3",{id:"sourcewidth"},(0,r.kt)("inlineCode",{parentName:"h3"},"sourceWidth")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is a ",(0,r.kt)("a",{parentName:"p",href:"../dynamic-properties"},"Dynamic Property"),".")),(0,r.kt)("p",null,"The width to crop the video to. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", which means the video will be cropped to the full width of the video."),(0,r.kt)("h3",{id:"sourceheight"},(0,r.kt)("inlineCode",{parentName:"h3"},"sourceHeight")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is a ",(0,r.kt)("a",{parentName:"p",href:"../dynamic-properties"},"Dynamic Property"),".")),(0,r.kt)("p",null,"The height to crop the video to. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", which means the video will be cropped to the full height of the video."),(0,r.kt)("h3",{id:"sourcestarttime"},(0,r.kt)("inlineCode",{parentName:"h3"},"sourceStartTime")),(0,r.kt)("p",null,"The time to start playing the video from. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("h3",{id:"destx"},(0,r.kt)("inlineCode",{parentName:"h3"},"destX")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is a ",(0,r.kt)("a",{parentName:"p",href:"../dynamic-properties"},"Dynamic Property"),".")),(0,r.kt)("p",null,"Defines the x position of the rendered image within the layer\u2019s bounding area. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("h3",{id:"desty"},(0,r.kt)("inlineCode",{parentName:"h3"},"destY")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is a ",(0,r.kt)("a",{parentName:"p",href:"../dynamic-properties"},"Dynamic Property"),".")),(0,r.kt)("p",null,"Defines the y position of the rendered image within the layer\u2019s bounding area. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("h3",{id:"destwidth"},(0,r.kt)("inlineCode",{parentName:"h3"},"destWidth")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is a ",(0,r.kt)("a",{parentName:"p",href:"../dynamic-properties"},"Dynamic Property"),".")),(0,r.kt)("p",null,"Defines the width of the rendered image within the layer\u2019s bounding area. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", which means the image will be rendered to the full width within the bounding area."),(0,r.kt)("h3",{id:"destheight"},(0,r.kt)("inlineCode",{parentName:"h3"},"destHeight")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is a ",(0,r.kt)("a",{parentName:"p",href:"../dynamic-properties"},"Dynamic Property"),".")),(0,r.kt)("p",null,"Defines the height of the rendered image within the layer\u2019s bounding area. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", which means the image will be rendered to the full height within the bounding area."),(0,r.kt)("h3",{id:"muted"},(0,r.kt)("inlineCode",{parentName:"h3"},"muted")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is a ",(0,r.kt)("a",{parentName:"p",href:"../dynamic-properties"},"Dynamic Property"),".")),(0,r.kt)("p",null,"Whether the video should be muted. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h3",{id:"volume"},(0,r.kt)("inlineCode",{parentName:"h3"},"volume")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is a ",(0,r.kt)("a",{parentName:"p",href:"../dynamic-properties"},"Dynamic Property"),".")),(0,r.kt)("p",null,"The volume of the video. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"."))}s.isMDXComponent=!0}}]);