"use strict";(self.webpackChunketro_site_2=self.webpackChunketro_site_2||[]).push([[184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Shader Effect",l={unversionedId:"effects/shader",id:"effects/shader",title:"Shader Effect",description:"etro.effect.Shader is the base class for all effects that render the target with a custom GLSL fragment shader.",source:"@site/docs/effects/shader.md",sourceDirName:"effects",slug:"/effects/shader",permalink:"/docs/effects/shader",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pixelate Effect",permalink:"/docs/effects/pixelate"},next:{title:"Stack Effect",permalink:"/docs/effects/stack"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Inheritance",id:"inheritance",level:2},{value:"Options",id:"options",level:2},{value:"<code>fragmentSource</code>",id:"fragmentsource",level:3},{value:"<code>uniforms</code>",id:"uniforms",level:3},{value:"<code>textures</code>",id:"textures",level:3},{value:"<code>sourceTextureOptions</code>",id:"sourcetextureoptions",level:3},{value:"<code>TextureOptions</code>",id:"textureoptions",level:2},{value:"<code>createUniform</code>",id:"createuniform",level:3},{value:"<code>target</code>",id:"target",level:3},{value:"<code>level</code>",id:"level",level:3},{value:"<code>internalFormat</code>",id:"internalformat",level:3},{value:"<code>srcFormat</code>",id:"srcformat",level:3},{value:"<code>srcType</code>",id:"srctype",level:3},{value:"<code>minFilter</code>",id:"minfilter",level:3},{value:"<code>magFilter</code>",id:"magfilter",level:3},{value:"<code>wrapS</code>",id:"wraps",level:3},{value:"<code>wrapT</code>",id:"wrapt",level:3}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shader-effect"},"Shader Effect"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"etro.effect.Shader")," is the base class for all effects that render the target with a custom GLSL fragment shader."),(0,a.kt)("p",null,"When using this effect, you need to provide a fragment shader source and a list of uniforms. The uniforms are automatically updated when the effect is applied. There needs to be a property with the same name as each custom uniform in the effect class. The property can be a ",(0,a.kt)("a",{parentName:"p",href:"/docs/dynamic-properties"},(0,a.kt)("inlineCode",{parentName:"a"},"Dynamic"))," or a regular value."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class MyEffect extends etro.effect.Shader {\n  foo: Dynamic<number>\n\n  constructor(foo: Dynamic<number> = 1) {\n    super({\n      fragmentSource: `\n        precision mediump float;\n\n        uniform sampler2D u_Source;\n        uniform ivec2 u_Size;\n        uniform float u_Foo;\n\n        varying vec2 v_TextureCoord;\n\n        void main() {\n          vec4 color = texture2D(u_Source, v_TextureCoord);\n          gl_FragColor = vec4(color.rgb * u_Foo, color.a);\n        }\n      `,\n      uniforms: {\n        foo: '1f',\n      },\n    })\n\n    this.foo = foo\n  }\n}\n\nconst effect = new MyEffect(() => Math.random())\n")),(0,a.kt)("h2",{id:"inheritance"},"Inheritance"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"etro.effect.Shader")," inherits from ",(0,a.kt)("a",{parentName:"p",href:"visual"},(0,a.kt)("inlineCode",{parentName:"a"},"etro.effect.Visual")),"."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"fragmentsource"},(0,a.kt)("inlineCode",{parentName:"h3"},"fragmentSource")),(0,a.kt)("p",null,"The GLSL fragment shader source."),(0,a.kt)("h3",{id:"uniforms"},(0,a.kt)("inlineCode",{parentName:"h3"},"uniforms")),(0,a.kt)("p",null,"A map of uniforms to their types. The types are the same as the ones used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"uniform")," keyword in GLSL. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"1f")," is a float, ",(0,a.kt)("inlineCode",{parentName:"p"},"1i")," is an integer, and ",(0,a.kt)("inlineCode",{parentName:"p"},"2f")," is a 2D vector."),(0,a.kt)("h3",{id:"textures"},(0,a.kt)("inlineCode",{parentName:"h3"},"textures")),(0,a.kt)("p",null,"A map of additional texture uniforms to ",(0,a.kt)("inlineCode",{parentName:"p"},"TextureOptions"),". The source texture is always available as ",(0,a.kt)("inlineCode",{parentName:"p"},"u_Source"),", so there is no need to add it here. See ",(0,a.kt)("a",{parentName:"p",href:"#textureoptions"},(0,a.kt)("inlineCode",{parentName:"a"},"TextureOptions")),"."),(0,a.kt)("h3",{id:"sourcetextureoptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"sourceTextureOptions")),(0,a.kt)("p",null,"Options for the source texture. See ",(0,a.kt)("a",{parentName:"p",href:"#textureoptions"},(0,a.kt)("inlineCode",{parentName:"a"},"TextureOptions")),"."),(0,a.kt)("h2",{id:"textureoptions"},(0,a.kt)("inlineCode",{parentName:"h2"},"TextureOptions")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"These options are experimental and may change in the future.")),(0,a.kt)("h3",{id:"createuniform"},(0,a.kt)("inlineCode",{parentName:"h3"},"createUniform")),(0,a.kt)("p",null,"If set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", the texture uniform will not be created. This is useful if you want to create the uniform yourself. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("p",null,"The uniform will be created with the name ",(0,a.kt)("inlineCode",{parentName:"p"},"u_${name}"),"."),(0,a.kt)("h3",{id:"target"},(0,a.kt)("inlineCode",{parentName:"h3"},"target")),(0,a.kt)("p",null,"The WebGL texture target. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"'TEXTURE_2D'"),"."),(0,a.kt)("h3",{id:"level"},(0,a.kt)("inlineCode",{parentName:"h3"},"level")),(0,a.kt)("p",null,"The mipmap level. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,a.kt)("h3",{id:"internalformat"},(0,a.kt)("inlineCode",{parentName:"h3"},"internalFormat")),(0,a.kt)("p",null,"The internal format. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"'RGBA'"),"."),(0,a.kt)("h3",{id:"srcformat"},(0,a.kt)("inlineCode",{parentName:"h3"},"srcFormat")),(0,a.kt)("p",null,"The source format. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"'RGBA'"),"."),(0,a.kt)("h3",{id:"srctype"},(0,a.kt)("inlineCode",{parentName:"h3"},"srcType")),(0,a.kt)("p",null,"The source type. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"'UNSIGNED_BYTE'"),"."),(0,a.kt)("h3",{id:"minfilter"},(0,a.kt)("inlineCode",{parentName:"h3"},"minFilter")),(0,a.kt)("p",null,"The minification filter. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"'LINEAR'"),"."),(0,a.kt)("h3",{id:"magfilter"},(0,a.kt)("inlineCode",{parentName:"h3"},"magFilter")),(0,a.kt)("p",null,"The magnification filter. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"'LINEAR'"),"."),(0,a.kt)("h3",{id:"wraps"},(0,a.kt)("inlineCode",{parentName:"h3"},"wrapS")),(0,a.kt)("p",null,"The horizontal wrapping mode. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"'CLAMP_TO_EDGE'"),"."),(0,a.kt)("h3",{id:"wrapt"},(0,a.kt)("inlineCode",{parentName:"h3"},"wrapT")),(0,a.kt)("p",null,"The vertical wrapping mode. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"'CLAMP_TO_EDGE'"),"."))}s.isMDXComponent=!0}}]);