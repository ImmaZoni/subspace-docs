"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[8441],{3905:(e,t,o)=>{o.d(t,{Zo:()=>i,kt:()=>f});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=c(o),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return o?r.createElement(f,l(l({ref:t},i),{},{components:o})):r.createElement(f,l({ref:t},i))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<n;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4284:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>c});var r=o(7462),a=(o(7294),o(3905));const n={title:"Local development",sidebar_position:9,description:"Guide on local development Subspace Node and Farmer",keywords:["local development","subspace network"]},l=void 0,p={unversionedId:"develop/nova/local_development",id:"develop/nova/local_development",title:"Local development",description:"Guide on local development Subspace Node and Farmer",source:"@site/docs/develop/nova/local_development.md",sourceDirName:"develop/nova",slug:"/develop/nova/local_development",permalink:"/docs/pre-release/develop/nova/local_development",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/develop/nova/local_development.md",tags:[],version:"current",lastUpdatedBy:"Justin",lastUpdatedAt:1702921905,formattedLastUpdatedAt:"Dec 18, 2023",sidebarPosition:9,frontMatter:{title:"Local development",sidebar_position:9,description:"Guide on local development Subspace Node and Farmer",keywords:["local development","subspace network"]},sidebar:"tutorialSidebar",previous:{title:"Hardhat",permalink:"/docs/pre-release/develop/nova/hardhat_guide"},next:{title:"Subspace block explorer",permalink:"/docs/pre-release/develop/nova/block_explorer"}},s={},c=[{value:"Setting up a local development environment",id:"setting-up-a-local-development-environment",level:3}],i={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"setting-up-a-local-development-environment"},"Setting up a local development environment"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You can always set up a local network to test and deploy your smart contract!")),(0,a.kt)("p",null,"To establish a full local network, you need to run a local node, a Core-EVM domain, and a farmer."),(0,a.kt)("p",null,"First, visit the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/subspace/subspace/releases"},"Subspace releases"))," page and download the most up-to-date stable versions of the node and farmer."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For each release, there are two versions:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"skylake: for newer processors from around 2015 and onwards"),(0,a.kt)("li",{parentName:"ol"},"x86-64-v2: for older processors from around 2009 and some older VMs")),(0,a.kt)("p",{parentName:"admonition"},"Older processors/VMs are no longer supported by official releases, but they can still be ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace/blob/main/docs/development.md"},"compiled manually")," if desired.")),(0,a.kt)("p",null,"After downloading both files that suit your system, start a node using your preferred terminal. If you want to start an EVM domain on your local machine, you need to specify:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your local RPC server port"),(0,a.kt)("li",{parentName:"ul"},"Your local web-socket RPC port\nYou can do this with the following command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./your_subspace_node_path --dev --alice --rpc-port 9444 -- --domain-id 3 --dev --rpc-port 8545\n")),(0,a.kt)("p",null,"This will create a local RPC on port ",(0,a.kt)("strong",{parentName:"p"},"8545"),"."),(0,a.kt)("p",null,"Secondly, you need to start a farmer by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," ./your_subspace_farmer_path farm --reward-address [YOUR REWARD ADDRESS] path=tmp-farm,size=100M\n")),(0,a.kt)("p",null,"You can specify the desired plot size, but 100M should be sufficient."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"And that\u2019s it!")," By starting your ",(0,a.kt)("strong",{parentName:"p"},"local node")," and a ",(0,a.kt)("strong",{parentName:"p"},"farmer"),", you have your ",(0,a.kt)("strong",{parentName:"p"},"local RPC")," ready for testing and deploying your smart contracts! You can easily connect your ",(0,a.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," account to the local development network, as well as use ",(0,a.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix")," or ",(0,a.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/"},"Foundry")," in order to test and deploy smart contracts on a local network!"))}u.isMDXComponent=!0}}]);