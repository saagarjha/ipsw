"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6667],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={id:"o2a",title:"o2a",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"o2a",description:"Convert MachO offset to address"},i=void 0,c={unversionedId:"cli/ipsw/macho/o2a",id:"cli/ipsw/macho/o2a",title:"o2a",description:"Convert MachO offset to address",source:"@site/docs/cli/ipsw/macho/o2a.md",sourceDirName:"cli/ipsw/macho",slug:"/cli/ipsw/macho/o2a",permalink:"/ipsw/docs/cli/ipsw/macho/o2a",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/macho/o2a.md",tags:[],version:"current",frontMatter:{id:"o2a",title:"o2a",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"o2a",description:"Convert MachO offset to address"},sidebar:"cli",previous:{title:"lipo",permalink:"/ipsw/docs/cli/ipsw/macho/lipo"},next:{title:"patch",permalink:"/ipsw/docs/cli/ipsw/macho/patch"}},l={},s=[{value:"ipsw macho o2a",id:"ipsw-macho-o2a",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"ipsw-macho-o2a"},"ipsw macho o2a"),(0,n.kt)("p",null,"Convert MachO offset to address"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ipsw macho o2a <macho> <offset> [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  -a, --arch string   Which architecture to use for fat/universal MachO\n  -d, --dec           Return address in decimal\n  -h, --help          help for o2a\n  -x, --hex           Return address in hexadecimal\n")),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw/config.yaml)\n  -V, --verbose         verbose output\n")),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/macho"},"ipsw macho"),"\t - Parse MachO")))}d.isMDXComponent=!0}}]);