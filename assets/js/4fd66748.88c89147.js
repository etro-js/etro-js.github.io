"use strict";(self.webpackChunketro_site_2=self.webpackChunketro_site_2||[]).push([[4795],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,v=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(v,i(i({ref:t},d),{},{components:r})):n.createElement(v,i({ref:t},d))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1824:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:5},i="Render the Movie",l={unversionedId:"getting-started/render-the-movie",id:"version-0.11/getting-started/render-the-movie",title:"Render the Movie",description:"In this section, you'll learn how to render your movie. You can render your movie to a `` element, stream it with WebRTC or record it to a Blob.",source:"@site/versioned_docs/version-0.11/getting-started/render-the-movie.md",sourceDirName:"getting-started",slug:"/getting-started/render-the-movie",permalink:"/docs/0.11/getting-started/render-the-movie",draft:!1,tags:[],version:"0.11",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Add Effects",permalink:"/docs/0.11/getting-started/add-effects"},next:{title:"Reference",permalink:"/docs/0.11/category/reference"}},c={},s=[{value:"Render to Canvas",id:"render-to-canvas",level:2},{value:"Stream",id:"stream",level:2},{value:"Record to Blob",id:"record-to-blob",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"render-the-movie"},"Render the Movie"),(0,o.kt)("p",null,"In this section, you'll learn how to render your movie. You can render your movie to a ",(0,o.kt)("inlineCode",{parentName:"p"},"<canvas>")," element, stream it with WebRTC or record it to a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob"},"Blob"),"."),(0,o.kt)("h2",{id:"render-to-canvas"},"Render to Canvas"),(0,o.kt)("p",null,"To render your movie to the provided ",(0,o.kt)("inlineCode",{parentName:"p"},"<canvas>")," element and the movie's ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/AudioContext"},"audio context"),", you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"play()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"movie.play().then(() => {\n  console.log('Movie finished playing!');\n});\n")),(0,o.kt)("h2",{id:"stream"},"Stream"),(0,o.kt)("p",null,"To stream your movie with WebRTC, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"stream()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"movie.stream({\n  frameRate: 30,\n  onStart: (stream: MediaStream) => {\n    console.log('Streaming!')\n\n    // Use `stream`\n  },\n}).then(() => {\n  console.log('Stream reached the end or was interrupted')\n})\n")),(0,o.kt)("h2",{id:"record-to-blob"},"Record to Blob"),(0,o.kt)("p",null,"To record your movie to a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob"},"Blob"),", you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"record()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"movie.record({\n  frameRate: 30,\n}).then(blob => {\n  console.log('Movie finished recording!');\n  console.log('Blob:', blob);\n});\n")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"This concludes the tutorial. You can now create movies with Etro!"))}p.isMDXComponent=!0}}]);