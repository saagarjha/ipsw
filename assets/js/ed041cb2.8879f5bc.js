"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1563],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>g});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(i),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return i?n.createElement(g,a(a({ref:t},p),{},{components:i})):n.createElement(g,a({ref:t},p))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},507:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(7462),r=(i(7294),i(3905));const o={id:"mg",title:"mg",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"mg",description:"Query MobileGestalt"},a=void 0,l={unversionedId:"cli/ipsw/idev/diag/mg",id:"cli/ipsw/idev/diag/mg",title:"mg",description:"Query MobileGestalt",source:"@site/docs/cli/ipsw/idev/diag/mg.md",sourceDirName:"cli/ipsw/idev/diag",slug:"/cli/ipsw/idev/diag/mg",permalink:"/ipsw/docs/cli/ipsw/idev/diag/mg",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/idev/diag/mg.md",tags:[],version:"current",frontMatter:{id:"mg",title:"mg",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"mg",description:"Query MobileGestalt"},sidebar:"cli",previous:{title:"ioreg",permalink:"/ipsw/docs/cli/ipsw/idev/diag/ioreg"},next:{title:"restart",permalink:"/ipsw/docs/cli/ipsw/idev/diag/restart"}},s={},c=[{value:"ipsw idev diag mg",id:"ipsw-idev-diag-mg",level:2},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ipsw-idev-diag-mg"},"ipsw idev diag mg"),(0,r.kt)("p",null,"Query MobileGestalt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ipsw idev diag mg [flags]\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\u276f ipsw idev diag mg -k SupplementalBuildVersion,ProductVersionExtra | jq .\n\n    {\n        "status": "Success",\n        "diagnostics": {\n          "MobileGestalt": {\n            "ProductVersionExtra": "(a)",\n            "Status": "Success",\n            "SupplementalBuildVersion": "20C7750490e"\n          }\n        }\n      }\n')),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help           help for mg\n  -k, --keys strings   Keys to retrieve (can be csv)\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw/config.yaml)\n  -u, --udid string     Device UniqueDeviceID to connect to\n  -V, --verbose         verbose output\n")),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/diag"},"ipsw idev diag"),"\t - Diagnostics commands")))}d.isMDXComponent=!0}}]);