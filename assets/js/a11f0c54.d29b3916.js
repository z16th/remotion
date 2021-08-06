(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3526],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},202:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var r=n(2122),o=n(9756),i=(n(2784),n(3905)),a=["components"],u={title:"useVideoConfig()",id:"use-video-config"},c=void 0,l={unversionedId:"use-video-config",id:"use-video-config",isDocsHomePage:!1,title:"useVideoConfig()",description:"With this hook, you can retrieve some info about the context of the video that you are making.",source:"@site/docs/use-video-config.md",sourceDirName:".",slug:"/use-video-config",permalink:"/docs/use-video-config",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/use-video-config.md",version:"current",frontMatter:{title:"useVideoConfig()",id:"use-video-config"},sidebar:"someSidebar",previous:{title:"useCurrentFrame()",permalink:"/docs/use-current-frame"},next:{title:"<Audio />",permalink:"/docs/audio"}},s=[{value:"See also",id:"see-also",children:[]}],p={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"With this hook, you can retrieve some info about the context of the video that you are making.\nNamely, ",(0,i.kt)("inlineCode",{parentName:"p"},"useVideoConfig")," will return an object with the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"width"),": The width of the composition in pixels."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"height"),": The height of the composition in pixels."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fps"),": The frame rate of the composition, in frames per seconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"durationInFrames")," The duration of the composition in frames.")),(0,i.kt)("p",null,"Remember that you control these properties by passing them as props to ",(0,i.kt)("inlineCode",{parentName:"p"},"<Composition>"),". Read the page about ",(0,i.kt)("a",{parentName:"p",href:"/docs/the-fundamentals"},"the fundamentals")," to learn how to define a composition."),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/use-current-frame"},"useCurrentFrame()"))))}f.isMDXComponent=!0}}]);