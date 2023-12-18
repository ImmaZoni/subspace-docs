"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4464],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6057:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={title:"Introduction to Staking and Operators",sidebar_position:1,description:"Introduction to Staking and Operators",keywords:["Staking","Operator","Guide","Decoupled Execution","Sub-domain"]},o=void 0,s={unversionedId:"farming-&-staking/staking/intro",id:"farming-&-staking/staking/intro",title:"Introduction to Staking and Operators",description:"Introduction to Staking and Operators",source:"@site/docs/farming-&-staking/staking/intro.md",sourceDirName:"farming-&-staking/staking",slug:"/farming-&-staking/staking/intro",permalink:"/de/docs/pre-release/farming-&-staking/staking/intro",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/farming-&-staking/staking/intro.md",tags:[],version:"current",lastUpdatedBy:"Justin",lastUpdatedAt:1702918212,formattedLastUpdatedAt:"18. Dez. 2023",sidebarPosition:1,frontMatter:{title:"Introduction to Staking and Operators",sidebar_position:1,description:"Introduction to Staking and Operators",keywords:["Staking","Operator","Guide","Decoupled Execution","Sub-domain"]},sidebar:"tutorialSidebar",previous:{title:"Operators and Nominators",permalink:"/de/docs/pre-release/category/operators-and-nominators"},next:{title:"Operators guide",permalink:"/de/docs/pre-release/farming-&-staking/staking/operators"}},l={},p=[{value:"Operators are a key part in solving the farmer&#39;s dilemma",id:"operators-are-a-key-part-in-solving-the-farmers-dilemma",level:2},{value:"Farming",id:"farming",level:3},{value:"Being an operator",id:"being-an-operator",level:3},{value:"Operator hardware requirements",id:"operator-hardware-requirements",level:3},{value:"Staking",id:"staking",level:3},{value:"Stake epoch",id:"stake-epoch",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"operators-are-a-key-part-in-solving-the-farmers-dilemma"},"Operators are a key part in solving the farmer's dilemma"),(0,n.kt)("p",null,"Subspace introduces the Decoupled Execution Framework (DecEx) to tackle the state-bloat issue by separating transaction ordering from execution. Farmers confirm and order transactions, while staked operator nodes execute them, allowing different hardware requirements for each role. This keeps farming accessible and lays the groundwork for scalable execution. Users submit transactions to operators who batch them into bundles. Farmers verify and order them, with operators executing the transactions in this order. The process forms a deterministic receipt chain, with an initial implementation using an optimistic fraud-proof validation scheme. "),(0,n.kt)("h1",{id:"key-differences-between-farming-and-being-an-operator"},"Key differences between farming and being an operator"),(0,n.kt)("h3",{id:"farming"},"Farming"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Consensus:")," This is the primary role of Farmers, and provides security and consensus for the network. Our Farmers are what ensure we don't trust, but verify."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Transaction Ordering"),": Farmers are responsible for confirming the availability of transactions and providing an ordering."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Lightweight Requirements"),": The hardware requirements for farming are designed to be lightweight, making it accessible to anyone."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Verification"),": Farmers only verify the proof-of-election and ensure that the data is available."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Transactions"),": Farmers do not execute transactions; they focus on ordering them and including them in the blockchain.")),(0,n.kt)("h3",{id:"being-an-operator"},"Being an operator"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Transaction Submission and Execution"),": Operators are responsible for batching transactions into bundles and submitting them to the consensus chain, executing transactions included in the consensus block and maintaining the resulting chain state."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Higher ",(0,n.kt)("a",{parentName:"strong",href:"#operator-hardware-requirements"},"Hardware Requirements")),": Operators require more substantial hardware capabilities, as they must execute complex transactions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Require Initial Investment:")," Operators are required to stake a certain amount of SSC. If an operator acts maliciously, their stake is at risk of being ",(0,n.kt)("strong",{parentName:"li"},"slashed"),". Engaging in such malicious behavior carries significant penalties, providing crypto-economic security to execution."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pre-Validation and Batching"),": Operators pre-validate and batch transactions into bundles through a stake-weighted election process."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Deterministic Execution"),": The operators execute transactions in a specific, deterministic order, producing state commitments in the form of execution receipts."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Secondary Network Role"),": Monitors the Domain chain for malicious activity and submits fraud proofs to consensus chain."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Supports Various Environments"),": Can support different smart contract execution environments like the Ethereum Virtual Machine (EVM) or Web-Assembly (WASM).")),(0,n.kt)("h3",{id:"operator-hardware-requirements"},"Operator hardware requirements"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The hardware requirements have not been benchmarked, and these are our best estimates. We would appreciate your feedback if you feel that the requirements listed here are too high or too low. ")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Our suggested specs are not necessarily applicable to Stake Wars. We encourage all interested participants to join Stake Wars, even if your hardware does not meet the listed requirements. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"CPU"),": "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"x86-64 compatible;"),(0,n.kt)("li",{parentName:"ul"},"Intel Ice Lake, or newer (Xeon or Core series); AMD Zen3, or newer (EPYC or Ryzen);"),(0,n.kt)("li",{parentName:"ul"},"4 physical cores @ 3.4GHz;"),(0,n.kt)("li",{parentName:"ul"},"Simultaneous multithreading disabled (Hyper-Threading on Intel, SMT on AMD);"),(0,n.kt)("li",{parentName:"ul"},"Prefer single-threaded performance over higher cores count. A comparison of single-threaded performance can be found here.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Storage"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An NVMe SSD of 1 TB. In general, the latency is more important than the throughput.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Memory"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"32 GB DDR4 ECC.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"System"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Linux Kernel 5.16 or newer.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Network"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The minimum symmetric networking speed is set to 500 Mbit/s.")),(0,n.kt)("h3",{id:"staking"},"Staking"),(0,n.kt)("p",null,"The Subspace Network relies on staking from both domain operators and farmers to secure the network and provide resources. Subspace implements a Nominated Proof-of-Stake algorithm where token holders endorse operators who execute transactions and produce blocks."),(0,n.kt)("p",null,"Our staking model consists of two tiers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Farmers earn rewards proportional to their pledged storage. Farmers can choose to nominate operators and back them with their own stake, increasing their chance of being elected as a slot leader. Farmers, who have earned storage rewards, nominate operators to execute transactions. This nomination system balances the power between farmers who nominate and operators and both parties share the rewards and the potential penalties (slashing). ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Operators stake to gain the right to produce bundles within a domain. They are responsible for validating and executing transactions, producing execution receipts, and applying state transitions and earn rewards for their work. The operator's chances to be elected as a slot leader and produce a bundle are weighted by their stake. Operators can be nominated by farmers or other SSC holders. "))),(0,n.kt)("h3",{id:"stake-epoch"},"Stake epoch"),(0,n.kt)("p",null,"Stake epoch is a designated period in domain blocks within a blockchain system that marks each stake allocation re-adjustment period. Occurring every ",(0,n.kt)("inlineCode",{parentName:"p"},"StakeEpochDuration")," blocks (at the moment, it's set to every 100 blocks or ~10 minutes), an epoch transition triggers specific actions such as finalizing operator domain switches, deregistering operators, unlocking operators and their associated funds, and recalculating stake distribution for the Verifiable Random Function (VRF) election. These transitions are designed to adjust the stake distribution dynamically, finalize various staking-related operations, process rewards, and manage deposits and withdrawals. The uniform duration across all domains helps maintain consistency in the network, while the specific starting point for each domain's epoch transition may vary based on when it is registered, helping to amortize the load of these transitions."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Read ",(0,n.kt)("a",{parentName:"p",href:"https://subnomicon.subspace.network/docs/category/decoupled-execution"},"Subspace Subnomicon")," to get a full picture behind decoupled execution!")))}u.isMDXComponent=!0}}]);