"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1955],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(r),u=n,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return r?a.createElement(f,c(c({ref:t},p),{},{components:r})):a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1677:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=r(7462),n=(r(7294),r(3905));const o={description:"All the MANY files you can extract from local and remote IPSWs/OTAs."},c="Extract files from IPSWs/OTAs",l={unversionedId:"guides/extract",id:"guides/extract",title:"Extract files from IPSWs/OTAs",description:"All the MANY files you can extract from local and remote IPSWs/OTAs.",source:"@site/docs/guides/extract.md",sourceDirName:"guides",slug:"/guides/extract",permalink:"/ipsw/docs/guides/extract",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/guides/extract.md",tags:[],version:"current",frontMatter:{description:"All the MANY files you can extract from local and remote IPSWs/OTAs."},sidebar:"docs",previous:{title:"Parse fireware zip metadata",permalink:"/ipsw/docs/guides/info"},next:{title:"Parse MachO files",permalink:"/ipsw/docs/guides/macho"}},s={},i=[{value:"<strong>ipsw extract</strong>",id:"ipsw-extract",level:2},{value:"Extract <em>kernelcache</em> from a previously downloaded IPSW or OTA",id:"extract-kernelcache-from-a-previously-downloaded-ipsw-or-ota",level:3},{value:"Extract <em>dyld_shared_cache</em> from a previously downloaded IPSW",id:"extract-dyld_shared_cache-from-a-previously-downloaded-ipsw",level:3},{value:"All these commands can also be ran on remote IPSWs/OTAs",id:"all-these-commands-can-also-be-ran-on-remote-ipswsotas",level:2},{value:"Extract all files matching a user-specified regex pattern from remote IPSW or OTA zip",id:"extract-all-files-matching-a-user-specified-regex-pattern-from-remote-ipsw-or-ota-zip",level:3}],p={toc:i},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"extract-files-from-ipswsotas"},"Extract files from IPSWs/OTAs"),(0,n.kt)("h2",{id:"ipsw-extract"},(0,n.kt)("strong",{parentName:"h2"},"ipsw extract")),(0,n.kt)("p",null,"Extract kernelcache, dyld_shared_cache or DeviceTree from IPSW/OTA ",(0,n.kt)("em",{parentName:"p"},"(and MUCH MORE)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw extract --help\nExtract kernelcache, dyld_shared_cache or DeviceTree from IPSW/OTA\n\nUsage:\n  ipsw extract <IPSW/OTA | URL> [flags]\n\nAliases:\n  extract, e, ex\n\nFlags:\n  -m, --dmg                     Extract File System DMG file\n  -t, --dtree                   Extract DeviceTree\n  -d, --dyld                    Extract dyld_shared_cache\n  -a, --dyld-arch stringArray   dyld_shared_cache architecture to extract\n  -f, --files                   Extract File System files\n      --flat                    Do NOT perserve directory structure when extracting\n  -h, --help                    help for extract\n  -i, --iboot                   Extract iBoot\n      --insecure                do not verify ssl certs\n  -b, --kbag                    Extract Im4p Keybags\n  -k, --kernel                  Extract kernelcache\n  -o, --output string           Folder to extract files to\n      --pattern string          Extract files that match regex\n      --proxy string            HTTP/HTTPS proxy\n  -r, --remote                  Extract from URL\n  -s, --sep                     Extract sep-firmware\n\nGlobal Flags:\n      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw/config.yaml)\n  -V, --verbose         verbose output\n\n")),(0,n.kt)("h3",{id:"extract-kernelcache-from-a-previously-downloaded-ipsw-or-ota"},"Extract ",(0,n.kt)("em",{parentName:"h3"},"kernelcache")," from a previously downloaded IPSW or OTA"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw extract --kernel iPhone11,2_12.0_16A366_Restore.ipsw\n")),(0,n.kt)("h3",{id:"extract-dyld_shared_cache-from-a-previously-downloaded-ipsw"},"Extract ",(0,n.kt)("em",{parentName:"h3"},"dyld_shared_cache")," from a previously downloaded IPSW"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"macOS"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw extract --dyld iPhone11,2_12.0_16A366_Restore.ipsw\n   \u2022 Extracting dyld_shared_cache from IPSW\n   \u2022 Mounting DMG\n   \u2022 Extracting System/Library/Caches/com.apple.dyld/dyld_shared_cache_arm64e to dyld_shared_cache\n   \u2022 Unmounting DMG\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f docker run --init -it --rm \\\n             --device /dev/fuse \\\n             --cap-add=SYS_ADMIN \\\n             -v `pwd` :/data \\\n             blacktop/ipsw -V extract --dyld iPhone11_2_12.4.1_16G102_Restore.ipsw\n")),(0,n.kt)("h2",{id:"all-these-commands-can-also-be-ran-on-remote-ipswsotas"},"All these commands can also be ran on remote IPSWs/OTAs"),(0,n.kt)("p",null,"Via the power of ",(0,n.kt)("inlineCode",{parentName:"p"},"partialzip")),(0,n.kt)("h3",{id:"extract-all-files-matching-a-user-specified-regex-pattern-from-remote-ipsw-or-ota-zip"},"Extract all files matching a user-specified regex pattern from remote IPSW or OTA zip"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw extract --remote https://updates.cdn-apple.com/../iPodtouch_7_13.3_17C54_Restore.ipsw --pattern '.*BuidManifest.plist$'\n")))}m.isMDXComponent=!0}}]);