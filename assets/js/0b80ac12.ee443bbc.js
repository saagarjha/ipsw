"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3577],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>w});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(o),m=r,w=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return o?n.createElement(w,i(i({ref:t},c),{},{components:o})):n.createElement(w,i({ref:t},c))}));function w(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6090:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=o(7462),r=(o(7294),o(3905));const a={id:"ota",title:"ota",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"ota",description:"Download OTAs"},i=void 0,l={unversionedId:"cli/ipsw/download/ota",id:"cli/ipsw/download/ota",title:"ota",description:"Download OTAs",source:"@site/docs/cli/ipsw/download/ota.md",sourceDirName:"cli/ipsw/download",slug:"/cli/ipsw/download/ota",permalink:"/ipsw/docs/cli/ipsw/download/ota",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/download/ota.md",tags:[],version:"current",frontMatter:{id:"ota",title:"ota",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"ota",description:"Download OTAs"},sidebar:"cli",previous:{title:"macos",permalink:"/ipsw/docs/cli/ipsw/download/macos"},next:{title:"rss",permalink:"/ipsw/docs/cli/ipsw/download/rss"}},s={},d=[{value:"ipsw download ota",id:"ipsw-download-ota",level:2},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ipsw-download-ota"},"ipsw download ota"),(0,r.kt)("p",null,"Download OTAs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ipsw download ota [options] [flags]\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  # Download the iOS 14.8.1 OTA for the iPhone10,1\n  \u276f ipsw download ota --platform ios --version 14.8.1 --device iPhone10,1\n    ? You are about to download 1 OTA files. Continue? Yes\n      \u2022 Getting OTA               build=18H107 device=iPhone10,1 version=iOS1481Short\n      280.0 MiB / 3.7 GiB [===>------------------------------------------------------| 51m18s\n  # Get all the latest BETA iOS OTAs URLs as JSON\n  \u276f ipsw download ota --platform ios --beta --urls --json\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      --beta                    Download Beta OTAs\n      --driver-kit              Extract DriverKit dyld_shared_cache(s) from remote OTA zip\n      --dyld                    Extract dyld_shared_cache(s) from remote OTA zip\n  -a, --dyld-arch stringArray   dyld_shared_cache architecture(s) to remote extract\n  -f, --flat                    Do NOT perserve directory structure when downloading with --pattern\n  -h, --help                    help for ota\n      --info                    Show all the latest OTAs available\n  -j, --json                    Dump URLs as JSON only\n  -k, --kernel                  Extract kernelcache from remote OTA zip\n  -o, --output string           Folder to download files to\n      --pattern string          Download remote files that match regex\n  -p, --platform string         Platform to download (ios, watchos, tvos, audioos || accessory, macos, recovery)\n      --rsr                     Download Rapid Security Response OTAs\n      --show-latest-build       Show latest iOS build\n      --show-latest-version     Show latest iOS version\n  -u, --urls                    Dump URLs only\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      --black-list stringArray   iOS device black list\n  -b, --build string             iOS BuildID (i.e. 16F203)\n      --color                    colorize output\n      --config string            config file (default is $HOME/.ipsw/config.yaml)\n  -y, --confirm                  do not prompt user for confirmation\n  -d, --device string            iOS Device (i.e. iPhone11,2)\n      --insecure                 do not verify ssl certs\n  -m, --model string             iOS Model (i.e. D321AP)\n      --proxy string             HTTP/HTTPS proxy\n  -_, --remove-commas            replace commas in IPSW filename with underscores\n      --restart-all              always restart resumable IPSWs\n      --resume-all               always resume resumable IPSWs\n      --skip-all                 always skip resumable IPSWs\n  -V, --verbose                  verbose output\n  -v, --version string           iOS Version (i.e. 12.3.1)\n      --white-list stringArray   iOS device white list\n")),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/download"},"ipsw download"),"\t - Download Apple Firmware files (and more)")))}u.isMDXComponent=!0}}]);