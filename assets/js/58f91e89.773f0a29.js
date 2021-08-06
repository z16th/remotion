(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3394],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return N}});var n=a(2784);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=i(a),N=o,k=c["".concat(l,".").concat(N)]||c[N]||d[N]||r;return a?n.createElement(k,s(s({ref:t},m),{},{components:a})):n.createElement(k,s({ref:t},m))}));function N(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var i=2;i<r;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1984:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return m},default:function(){return c}});var n=a(2122),o=a(9756),r=(a(2784),a(3905)),s=["components"],p={id:"composition",title:"<Composition />"},l=void 0,i={unversionedId:"composition",id:"composition",isDocsHomePage:!1,title:"<Composition />",description:"This is the component to use to register a video to make it renderable and make it show up in the sidebar of the Remotion Player.",source:"@site/docs/composition.md",sourceDirName:".",slug:"/composition",permalink:"/docs/composition",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/composition.md",version:"current",frontMatter:{id:"composition",title:"<Composition />"},sidebar:"someSidebar",previous:{title:"<Audio />",permalink:"/docs/audio"},next:{title:"<Sequence />",permalink:"/docs/sequence"}},m=[{value:"API",id:"api",children:[]},{value:"Example using <code>component</code>",id:"example-using-component",children:[]},{value:"Example using <code>lazyComponent</code>",id:"example-using-lazycomponent",children:[]},{value:"See also",id:"see-also",children:[]}],d={toc:m};function c(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is the component to use to register a video to make it renderable and make it show up in the sidebar of the Remotion Player."),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"<Composition />")," should be placed within a fragment of the root component (which is registered using ",(0,r.kt)("a",{parentName:"p",href:"/docs/register-root"},(0,r.kt)("inlineCode",{parentName:"a"},"registerRoot()")),")."),(0,r.kt)("p",null,"The component takes the following props:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"id"),": ID of the composition, as shown in the sidebar and also a unique identifier of the composition that you need to specify if you want to render it. The ID can only contain letters, numbers and ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fps"),": At how many frames the composition should be rendered.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"durationInFrames"),": How many frames the composition should be long.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"height"),": Height of the composition in pixels.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"width"),": Width of the composition in pixels.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"component")," ",(0,r.kt)("strong",{parentName:"p"},"or")," ",(0,r.kt)("inlineCode",{parentName:"p"},"lazyComponent"),": Pass the component in directly ",(0,r.kt)("strong",{parentName:"p"},"or")," pass a function that returns a dynamic import. Passing neither or both of the props is an error."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"lazyComponent"),", Remotion will use React Suspense to load the component. Components will be compiled by Webpack as they are needed, which will reduce startup time of Remotion."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"lazyComponent"),", you need to use a default export for your component. This is a restriction of React Suspense."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultProps")," ",(0,r.kt)("em",{parentName:"li"},"optional"),": Give your component default props that will be shown in the preview. You can override these props during render using a CLI flag.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Type your components using the ",(0,r.kt)("inlineCode",{parentName:"p"},"React.FC<{}>")," type and the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultProps")," prop will be typesafe."))),(0,r.kt)("h2",{id:"example-using-component"},"Example using ",(0,r.kt)("inlineCode",{parentName:"h2"},"component")),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Composition: <T>({ width, height, fps, durationInFrames, id, defaultProps: props, ...compProps }: Props<T>) => null\nimport Composition"},"Composition"),"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'remotion'")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const MyComp: () => JSX.Element\nimport MyComp"},"MyComp"),"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'./MyComp'")),(0,r.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Composition: <T>({ width, height, fps, durationInFrames, id, defaultProps: props, ...compProps }: Props<T>) => null\nimport Composition"},"Composition"))),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) id: string"},"id")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"my-comp"')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) component: AnyComponent<unknown>"},"component")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const MyComp: () => JSX.Element\nimport MyComp"},"MyComp"),"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) width: number"},"width")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1080"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) height: number"},"height")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1080"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) fps: number"},"fps")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"30"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) durationInFrames: number"},"durationInFrames")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"3"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"*"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"30"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      />")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  )")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Composition: <T>({ width, height, fps, durationInFrames, id, defaultProps: props, ...compProps }: Props<T>) => null\nimport Composition"},"Composition"),"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"'remotion'")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const MyComp: () => JSX.Element\nimport MyComp"},"MyComp"),"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"'./MyComp'")),(0,r.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"export"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," () "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," (")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"    <>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"      <"),(0,r.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Composition: <T>({ width, height, fps, durationInFrames, id, defaultProps: props, ...compProps }: Props<T>) => null\nimport Composition"},"Composition"))),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) id: string"},"id")),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},'"my-comp"')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) component: AnyComponent<unknown>"},"component")),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"{",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const MyComp: () => JSX.Element\nimport MyComp"},"MyComp"),"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) width: number"},"width")),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F8"}},"1080"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) height: number"},"height")),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F8"}},"1080"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) fps: number"},"fps")),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F8"}},"30"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) durationInFrames: number"},"durationInFrames")),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F8"}},"3"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"*"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F8"}},"30"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"      />")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"    </>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  )")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"}")))))),(0,r.kt)("h2",{id:"example-using-lazycomponent"},"Example using ",(0,r.kt)("inlineCode",{parentName:"h2"},"lazyComponent")),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"MyVideo"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"Composition")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"id"),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"my-comp"')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"lazyComponent"),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{() "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'./LazyComponent'"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},")}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"width"),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1080"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"height"),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1080"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"fps"),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"30"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"durationInFrames"),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"3"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"*"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"30"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      />")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  )")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki min-dark",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"export"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," MyVideo "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," () "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," (")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"    <>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"      <"),(0,r.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"Composition")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"        id"),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},'"my-comp"')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"        lazyComponent"),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"{() "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"'./LazyComponent'"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},")}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"        width"),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F8"}},"1080"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"        height"),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F8"}},"1080"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"        fps"),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F8"}},"30"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"        durationInFrames"),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F8"}},"3"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"*"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F8"}},"30"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"      />")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"    </>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  )")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"}")))))),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/register-root"},"registerRoot()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/the-fundamentals"},"The fundamentals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli"},"CLI options"))))}c.isMDXComponent=!0}}]);