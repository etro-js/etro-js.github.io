"use strict";(self.webpackChunketro_site_2=self.webpackChunketro_site_2||[]).push([[873],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9663:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:1},l="Movies",i={unversionedId:"reference/movie",id:"reference/movie",title:"Movies",description:"In Etro, movies are video-processing projects. A movie serves as a container for compositing layers, applying global effects to the result and outputting the final result.",source:"@site/docs/reference/movie.md",sourceDirName:"reference",slug:"/reference/movie",permalink:"/docs/reference/movie",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Reference",permalink:"/docs/category/reference"},next:{title:"Layers",permalink:"/docs/category/layers"}},d={},s=[{value:"Constructor",id:"constructor",level:2},{value:"Rendering",id:"rendering",level:2},{value:"<code>play()</code>",id:"play",level:3},{value:"<code>stream()</code>",id:"stream",level:3},{value:"<code>record()</code>",id:"record",level:3},{value:"<code>refresh()</code>",id:"refresh",level:3},{value:"Advanced playback control",id:"advanced-playback-control",level:2},{value:"<code>seek()</code>",id:"seek",level:3},{value:"<code>pause()</code>",id:"pause",level:3},{value:"<code>stop()</code>",id:"stop",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>layers</code> (readonly, mutable)",id:"layers-readonly-mutable",level:3},{value:"<code>effects</code> (readonly, mutable)",id:"effects-readonly-mutable",level:3},{value:"<code>currentTime</code> (readonly)",id:"currenttime-readonly",level:3},{value:"<code>duration</code> (readonly)",id:"duration-readonly",level:3},{value:"<code>paused</code> (readonly)",id:"paused-readonly",level:3},{value:"<code>ended</code> (readonly)",id:"ended-readonly",level:3},{value:"<code>ready</code> (readonly)",id:"ready-readonly",level:3},{value:"<code>canvas</code> (readonly)",id:"canvas-readonly",level:3},{value:"<code>cctx</code> (readonly)",id:"cctx-readonly",level:3},{value:"<code>actx</code> (readonly)",id:"actx-readonly",level:3},{value:"<code>width</code> / <code>height</code>",id:"width--height",level:3},{value:"<code>background</code>",id:"background",level:3},{value:"<code>repeat</code>",id:"repeat",level:3}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"movies"},"Movies"),(0,n.kt)("p",null,"In Etro, movies are video-processing projects. A movie serves as a container for compositing layers, applying global effects to the result and outputting the final result."),(0,n.kt)("h2",{id:"constructor"},"Constructor"),(0,n.kt)("p",null,"The constructor requires a ",(0,n.kt)("inlineCode",{parentName:"p"},"<canvas>")," element to draw on. You can provide the following options in addition:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const movie = new etro.Movie({\n  canvas: document.querySelector('canvas'), // HTML canvas element to draw on\n  actx: new AudioContext(), // Web Audio context to play through (creates a new context with default settings if omitted)\n  background: etro.parseColor('#f0f'), // background color (dynamic, defaults to black)\n  repeat: false // whether to loop forever while playing and streaming (defaults to false)\n});\n")),(0,n.kt)("h2",{id:"rendering"},"Rendering"),(0,n.kt)("p",null,"There are several ways to access a movie's output:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Playing"),": Draws all the movie's visual layers to the canvas and plays all its audio layers to the audio context in real time."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Streaming"),": Draws the movie to the canvas and plays it through the audio context and provides a real time WebRTC stream."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Recording"),": Draws the movie to the canvas and plays it through the audio context and saves the result to a video or audio blob."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Refreshing"),": Draws a single frame to the canvas.")),(0,n.kt)("h3",{id:"play"},(0,n.kt)("inlineCode",{parentName:"h3"},"play()")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"await movie.play({\n  onStart: () => {\n    console.log('All resources are loaded, and playback has started.');\n  }, // `onStart` is optional\n});\nconsole.log('The movie is done playing');\n")),(0,n.kt)("h3",{id:"stream"},(0,n.kt)("inlineCode",{parentName:"h3"},"stream()")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"await movie.stream({\n  frameRate: 60, // fps for the stream's video tracks\n  duration: 5, // how long to stream, in seconds (by default, the movie will stream to the end)\n  video: true, // whether to render visual layers (defaults to true)\n  audio: true, // whether to render layers with audio (defaults to true)\n  onStart: (stream: MedaiaStream) => {\n    console.log('All resources are loaded, and streaming has begun.');\n    // Process stream\n  },\n});\nconsole.log('The movie is done streaming');\n")),(0,n.kt)("h3",{id:"record"},(0,n.kt)("inlineCode",{parentName:"h3"},"record()")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const blob = await movie.record({\n  frameRate: 30, // fps for the recording's video track\n  duration: undefined, // how long to record, in seconds (by default, the movie will record to the end)\n  type: 'video/webm;codecs=vp8', // MIME type for the recording (defaults to 'video/webm')\n  video: true, // whether to render visual layers (defaults to true)\n  audio: true, // whether to render layers with audio (defaults to true)\n  onStart: (recorder: MediaRecorder) => {\n    console.log('All resources are loaded, and recording has begun.');\n  }, // `onStart` is optional\n});\nconsole.log(`Done. The recording is ${blob.size} bytes long`);\n")),(0,n.kt)("h3",{id:"refresh"},(0,n.kt)("inlineCode",{parentName:"h3"},"refresh()")),(0,n.kt)("p",null,"To draw a single frame to the canvas, run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"await movie.refresh();\nconsole.log('The current frame has been loaded and rendered.');\n")),(0,n.kt)("h2",{id:"advanced-playback-control"},"Advanced playback control"),(0,n.kt)("h3",{id:"seek"},(0,n.kt)("inlineCode",{parentName:"h3"},"seek()")),(0,n.kt)("p",null,"Used to update the movie's ",(0,n.kt)("inlineCode",{parentName:"p"},"currentTime"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"movie.seek(0);\n")),(0,n.kt)("h3",{id:"pause"},(0,n.kt)("inlineCode",{parentName:"h3"},"pause()")),(0,n.kt)("p",null,"Used to stop playback on demand."),(0,n.kt)("h3",{id:"stop"},(0,n.kt)("inlineCode",{parentName:"h3"},"stop()")),(0,n.kt)("p",null,"Used to stop playback and reset the ",(0,n.kt)("inlineCode",{parentName:"p"},"currentTime")," to zero on demand."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"layers-readonly-mutable"},(0,n.kt)("inlineCode",{parentName:"h3"},"layers")," (readonly, mutable)"),(0,n.kt)("p",null,"Array proxy which ",(0,n.kt)("a",{parentName:"p",href:"../category/layers"},"layers")," can be added to, removed from and accessed:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"movie.layers.push(new etro.layer.Video({ ... }));\n")),(0,n.kt)("h3",{id:"effects-readonly-mutable"},(0,n.kt)("inlineCode",{parentName:"h3"},"effects")," (readonly, mutable)"),(0,n.kt)("p",null,"Array proxy for ",(0,n.kt)("a",{parentName:"p",href:"../category/effects"},"effects")," that are applied globally after all the layers are composited:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"console.log(movie.effects)\n")),(0,n.kt)("h3",{id:"currenttime-readonly"},(0,n.kt)("inlineCode",{parentName:"h3"},"currentTime")," (readonly)"),(0,n.kt)("p",null,"Returns the current playback position (in seconds)."),(0,n.kt)("h3",{id:"duration-readonly"},(0,n.kt)("inlineCode",{parentName:"h3"},"duration")," (readonly)"),(0,n.kt)("p",null,"Returns the movie's duration (the max end time of its layers)."),(0,n.kt)("h3",{id:"paused-readonly"},(0,n.kt)("inlineCode",{parentName:"h3"},"paused")," (readonly)"),(0,n.kt)("p",null,"Returns true if the movie is paused and false if it's playing, streaming or recording."),(0,n.kt)("h3",{id:"ended-readonly"},(0,n.kt)("inlineCode",{parentName:"h3"},"ended")," (readonly)"),(0,n.kt)("p",null,"Returns true if the movie played, streamed or recorded to the end."),(0,n.kt)("h3",{id:"ready-readonly"},(0,n.kt)("inlineCode",{parentName:"h3"},"ready")," (readonly)"),(0,n.kt)("p",null,"Returns true if the movie is ready to play, that is, if enough of the resources belonging to all its layers and effects are loaded to play through. The movie will automatically wait until it is ready before playing, streaming, recording and refreshing, and it will temporarily pause whenever a resource becomes unavailable."),(0,n.kt)("h3",{id:"canvas-readonly"},(0,n.kt)("inlineCode",{parentName:"h3"},"canvas")," (readonly)"),(0,n.kt)("p",null,"HTML canvas element that the movie renders to."),(0,n.kt)("h3",{id:"cctx-readonly"},(0,n.kt)("inlineCode",{parentName:"h3"},"cctx")," (readonly)"),(0,n.kt)("p",null,"Convenience getter for the canvas's 2D canvas rendering context."),(0,n.kt)("h3",{id:"actx-readonly"},(0,n.kt)("inlineCode",{parentName:"h3"},"actx")," (readonly)"),(0,n.kt)("p",null,"The Web Audio rendering context used to direct all audio output."),(0,n.kt)("h3",{id:"width--height"},(0,n.kt)("inlineCode",{parentName:"h3"},"width")," / ",(0,n.kt)("inlineCode",{parentName:"h3"},"height")),(0,n.kt)("p",null,"Gets or sets the width or height of the movie's rendering canvas."),(0,n.kt)("h3",{id:"background"},(0,n.kt)("inlineCode",{parentName:"h3"},"background")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"This is a ",(0,n.kt)("a",{parentName:"p",href:"dynamic-properties"},"Dynamic Property"),".")),(0,n.kt)("p",null,"Background color to render over the canvas before drawing the visual layers."),(0,n.kt)("h3",{id:"repeat"},(0,n.kt)("inlineCode",{parentName:"h3"},"repeat")),(0,n.kt)("p",null,"Whether to endlessly loop playback when playing, streaming and recording."))}u.isMDXComponent=!0}}]);