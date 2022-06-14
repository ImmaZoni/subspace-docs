"use strict";(self.webpackChunksubspace_docs=self.webpackChunksubspace_docs||[]).push([[5644],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9593:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return b}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=a(5488),i=a(5162),s=a(9960),u=a(1207),p=["components"],d={title:"Farming with Subspace Desktop",sidebar_position:2,description:"How to run a Subspace Network Farmer with Subspace Desktop - Farmer - Farming - Application - App - GUI"},c=void 0,m={unversionedId:"subspace-desktop",id:"subspace-desktop",title:"Farming with Subspace Desktop",description:"How to run a Subspace Network Farmer with Subspace Desktop - Farmer - Farming - Application - App - GUI",source:"@site/subspace-desktop/subspace-desktop.mdx",sourceDirName:".",slug:"/subspace-desktop",permalink:"/subspace-desktop/next/subspace-desktop",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Farming with Subspace Desktop",sidebar_position:2,description:"How to run a Subspace Network Farmer with Subspace Desktop - Farmer - Farming - Application - App - GUI"},sidebar:"masterSidebar",previous:{title:"What is Subspace Desktop?",permalink:"/subspace-desktop/next/"}},k={},b=[{value:"Subspace Desktop",id:"subspace-desktop",level:2},{value:"OS Requirements",id:"os-requirements",level:2},{value:"Download",id:"download",level:2},{value:"How to Install",id:"how-to-install",level:2},{value:"How to Upgrade",id:"how-to-upgrade",level:2},{value:"Upgrade from previous version of Subspace Desktop",id:"upgrade-from-previous-version-of-subspace-desktop",level:3},{value:"Wipe &amp; Purge Existing Install",id:"wipe--purge-existing-install",level:3},{value:"Upgrade from CLI (subspace-node + subspace-farmer)",id:"upgrade-from-cli-subspace-node--subspace-farmer",level:3},{value:"Development",id:"development",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Linux",id:"linux",level:4},{value:"Install the dependencies",id:"install-the-dependencies",level:3},{value:"Start the app in development mode",id:"start-the-app-in-development-mode",level:4},{value:"Build the app for production (Builds Quasar and Tauri)",id:"build-the-app-for-production-builds-quasar-and-tauri",level:4},{value:"Access Tauri or Quasar specific commands",id:"access-tauri-or-quasar-specific-commands",level:4},{value:"Customize Quasar config",id:"customize-quasar-config",level:4},{value:"Customize Tauri config",id:"customize-tauri-config",level:4},{value:"Contribute to development",id:"contribute-to-development",level:4}],h={toc:b};function f(e){var t=e.components,a=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"subspace-desktop"},"Subspace Desktop"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Standalone Desktop application for farming on Subspace Network (includes both node and farmer).\nDownload and run this application to be a farmer on Subspace Network (currently on testnet)."),(0,o.kt)("h2",{id:"os-requirements"},"OS Requirements"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Below is not necessarily strict boundaries, but rather what we have tested and confirmed so far."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows 10 and 11"),(0,o.kt)("li",{parentName:"ul"},"Ubuntu 20.04 and 22.04"),(0,o.kt)("li",{parentName:"ul"},"macOS 11 and 12")),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Select your respective Operating System and click the button to download Subspace Desktop application"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,o.kt)("div",{className:u.Z.buttons},(0,o.kt)(s.Z,{className:"button button--secondary button--lg",to:"https://github.com/subspace/subspace-desktop/releases/download/0.6.7/subspace-desktop_0.6.7_x64_en-US.msi",mdxType:"Link"},"Subspace-Desktop.exe"))),(0,o.kt)(i.Z,{value:"macOS",label:"\ud83c\udf4e macOS",default:!0,mdxType:"TabItem"},(0,o.kt)("div",{className:u.Z.buttons},(0,o.kt)(s.Z,{className:"button button--secondary button--lg",to:"https://github.com/subspace/subspace-desktop/releases/download/0.6.7/subspace-desktop_0.6.7_x64.dmg",mdxType:"Link"},"Subspace-Desktop.dmg"))),(0,o.kt)(i.Z,{value:"linux",label:"\ud83d\udc27 Linux",default:!0,mdxType:"TabItem"},(0,o.kt)("div",{className:u.Z.buttons},(0,o.kt)(s.Z,{className:"button button--secondary button--lg",to:"https://github.com/subspace/subspace-desktop/releases/download/0.6.7/subspace-desktop_0.6.7_amd64.deb",mdxType:"Link"},"Subspace-Desktop.deb"),(0,o.kt)(s.Z,{className:"button button--secondary button--lg",to:"https://github.com/subspace/subspace-desktop/releases/download/0.6.7/subspace-desktop_0.6.7_amd64.AppImage",mdxType:"Link"},"Subspace-Desktop.AppImage"),(0,o.kt)(s.Z,{className:"button button--secondary button--lg",to:"https://github.com/subspace/subspace-desktop/releases/download/0.6.7/subspace-desktop.app.tar.gz",mdxType:"Link"},"Subspace-Desktop.tar.gz")))),(0,o.kt)("h2",{id:"how-to-install"},"How to Install"),(0,o.kt)("hr",null),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the latest for your preferred platform from above."),(0,o.kt)("li",{parentName:"ol"},"Install the program."),(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("inlineCode",{parentName:"li"},"subspace-desktop")," application."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("inlineCode",{parentName:"li"},"This is my first time farming")," option (or, if you want to use an existing reward address, click ",(0,o.kt)("inlineCode",{parentName:"li"},"I've run a farmer before and still have my keys"),")."),(0,o.kt)("li",{parentName:"ol"},"Select how much space you want to pledge"),(0,o.kt)("li",{parentName:"ol"},"When you click ",(0,o.kt)("inlineCode",{parentName:"li"},"start plotting"),", it may prompt you to store your seed phrase, if you did not import a reward address."),(0,o.kt)("li",{parentName:"ol"},"The network will begin to sync and plotting will start. While you wait you can click ",(0,o.kt)("inlineCode",{parentName:"li"},"hints")," to open up the ",(0,o.kt)("inlineCode",{parentName:"li"},"what is plotting")," page, and join our online communities from the social links displayed in there!"),(0,o.kt)("li",{parentName:"ol"},"Once the node fully syncs you will be taken the the Farmer Dashboard which will show you the network/plot status, and your total earned rewards.")),(0,o.kt)("h2",{id:"how-to-upgrade"},"How to Upgrade"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"upgrade-from-previous-version-of-subspace-desktop"},"Upgrade from previous version of Subspace Desktop"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Simply uninstall the old application from your computer"),(0,o.kt)("li",{parentName:"ol"},"Download the latest ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/subspace/subspace-desktop/releases"},"release"),' for your preferred platform (make sure to select "Latest" release with green label and not "Pre-release")'),(0,o.kt)("li",{parentName:"ol"},"Install new version of Subspace Desktop"),(0,o.kt)("li",{parentName:"ol"},"Run the application, it should detect your old plot and continue farming as usual")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"UNLESS STATED OTHERWISE IN THE RELEASE NOTES:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You don't need to delete your existing plot"),(0,o.kt)("li",{parentName:"ul"},"You don't need to create a new identity"),(0,o.kt)("li",{parentName:"ul"},"You don't need to delete the config and log files")),(0,o.kt)("h3",{id:"wipe--purge-existing-install"},"Wipe & Purge Existing Install"),(0,o.kt)("p",null,"This should only be done if you are facing issues, wish to replot, or is required in an update. "),(0,o.kt)("p",null,"To wipe and purge your plot & node configuration is very simple in Subspace Desktop"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the application"),(0,o.kt)("li",{parentName:"ol"},'Click the "',(0,o.kt)("inlineCode",{parentName:"li"},"Settings Gear"),'" in the top right'),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Reset Node!")),(0,o.kt)("li",{parentName:"ol"},'You will get a popup which says "',(0,o.kt)("inlineCode",{parentName:"li"},"This will erase everything, and you will have to start from the beginning. Only do this if there is something wrong with the network, or you imported a wrong reward address."),'"'),(0,o.kt)("li",{parentName:"ol"},"Click the final ",(0,o.kt)("inlineCode",{parentName:"li"},"Reset"))),(0,o.kt)("h3",{id:"upgrade-from-cli-subspace-node--subspace-farmer"},"Upgrade from CLI (subspace-node + subspace-farmer)"),(0,o.kt)("p",null,"These instructions are for upgrading installation that followed ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace/blob/main/docs/farming.md"},"official guide"),",\nif you followed unofficial one, ask guide author for proper upgrade steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Remove old data to free space used by CLI:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace `FARMER_FILE_NAME` with the name of the node file you downloaded from releases\n./FARMER_FILE_NAME wipe\n# Replace `NODE_FILE_NAME` with the name of the node file you downloaded from releases\n./NODE_FILE_NAME purge-chain --chain testnet\n")),"Make sure to replace ",(0,o.kt)("inlineCode",{parentName:"li"},"FARMER_FILE_NAME")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"NODE_FILE_NAME")," with actual file names"),(0,o.kt)("li",{parentName:"ol"},"Delete those files ",(0,o.kt)("inlineCode",{parentName:"li"},"FARMER_FILE_NAME")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"NODE_FILE_NAME")),(0,o.kt)("li",{parentName:"ol"},"Install Subspace Desktop"),(0,o.kt)("li",{parentName:"ol"},"Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"I've run a farmer before and still have my keys")," on the first screen and use the same reward address (that you used for CLI) there")),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"nodejs 14+"),(0,o.kt)("li",{parentName:"ul"},"yarn"),(0,o.kt)("li",{parentName:"ul"},"rustc")),(0,o.kt)("h4",{id:"linux"},"Linux"),(0,o.kt)("p",null,"On Linux you'll have to install development version of ",(0,o.kt)("inlineCode",{parentName:"p"},"libwebkit2gtk-4.0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"libappindicator")," packages, which can be done on Ubuntu with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update && sudo apt install libwebkit2gtk-4.0-dev \\\n    build-essential \\\n    curl \\\n    wget \\\n    libssl-dev \\\n    libgtk-3-dev \\\n    libappindicator3-dev \\\n    patchelf \\\n    librsvg2-dev\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"libappindicator: needed to use the system tray feature."),(0,o.kt)("li",{parentName:"ul"},"patchelf and librsvg: needed to bundle AppImage.")),(0,o.kt)("p",null,"Stuck?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://tauri.studio/en/docs/getting-started/intro"},"https://tauri.studio/en/docs/getting-started/intro")),(0,o.kt)("h3",{id:"install-the-dependencies"},"Install the dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\n")),(0,o.kt)("h4",{id:"start-the-app-in-development-mode"},"Start the app in development mode"),(0,o.kt)("p",null,"Terminal 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn quasar dev\n")),(0,o.kt)("p",null,"Terminal 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn tauri dev\n")),(0,o.kt)("h4",{id:"build-the-app-for-production-builds-quasar-and-tauri"},"Build the app for production (Builds Quasar and Tauri)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build\n")),(0,o.kt)("h4",{id:"access-tauri-or-quasar-specific-commands"},"Access Tauri or Quasar specific commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn quasar --help\nyarn tauri --help\n")),(0,o.kt)("h4",{id:"customize-quasar-config"},"Customize Quasar config"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://v2.quasar.dev/quasar-cli/quasar-conf-js"},"https://v2.quasar.dev/quasar-cli/quasar-conf-js")),(0,o.kt)("h4",{id:"customize-tauri-config"},"Customize Tauri config"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://tauri.studio/en/docs/api/config"},"https://tauri.studio/en/docs/api/config")),(0,o.kt)("h4",{id:"contribute-to-development"},"Contribute to development"),(0,o.kt)("p",null,"Review the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace-desktop/blob/main/ARCHITECTURE.md"},"ARCHITECTURE.md")," document for an overview of the application design."))}f.isMDXComponent=!0},5162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(6010),o="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),r=a(7294),o=a(6010),l=a(2389),i=a(7392),s=a(7094),u=a(2466),p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,a,l=e.lazy,c=e.block,m=e.defaultValue,k=e.values,b=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,E=w.setTabGroupChoices,T=(0,r.useState)(y),S=T[0],C=T[1],D=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var I=N[b];null!=I&&I!==S&&v.some((function(e){return e.value===I}))&&C(I)}var x=function(e){var t=e.currentTarget,a=D.indexOf(t),n=v[a].value;n!==S&&(O(t),C(n),null!=b&&E(b,String(n)))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=D.indexOf(e.currentTarget)+1;a=null!=(n=D[r])?n:D[0];break;case"ArrowLeft":var o,l=D.indexOf(e.currentTarget)-1;a=null!=(o=D[l])?o:D[D.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},h)},v.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return D.push(e)},onKeyDown:_,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":S===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function m(e){var t=(0,l.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},1207:function(e,t){t.Z={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}}}]);