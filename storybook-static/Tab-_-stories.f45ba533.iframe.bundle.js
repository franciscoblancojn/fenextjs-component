"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[2234],{"./src/Tab/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,OneTab:()=>OneTab,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Tab/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Component/Tab",component:_index__WEBPACK_IMPORTED_MODULE_1__.O};var Profile=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__.O,args,"Test Children")};Profile.displayName="Profile";var Index=Profile.bind({}),args={beforeTabs:"Name Tabs",afterTabs:"Total Items 3",items:[{id:"1",head:"Head 1",body:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("h1",null,"Lorem 1"),"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora, accusamus laudantium nemo accusantium repudiandae ipsa sapiente explicabo nobis ducimus quod quasi veritatis veniam deleniti debitis omnis illo. Quidem, molestias!")},{id:"2",head:"Head 2",body:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("h1",null,"Lorem 2"),"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora, accusamus laudantium nemo accusantium repudiandae ipsa sapiente explicabo nobis ducimus quod quasi veritatis veniam deleniti debitis omnis illo. Quidem, molestias!"),afterTab:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"afterTab2"),beforeTab:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"beforeTab2")},{id:"3",head:"Head 3",body:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("h1",null,"Lorem 3"),"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora, accusamus laudantium nemo accusantium repudiandae ipsa sapiente explicabo nobis ducimus quod quasi veritatis veniam deleniti debitis omnis illo. Quidem, molestias!")}]};Index.args=args;var OneTab=Profile.bind({}),OneTabargs={validataTabOneHiddenHeader:!0,items:[{id:"1",head:"Head 1",body:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("h1",null,"Lorem 1"),"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora, accusamus laudantium nemo accusantium repudiandae ipsa sapiente explicabo nobis ducimus quod quasi veritatis veniam deleniti debitis omnis illo. Quidem, molestias!")}]};OneTab.args=OneTabargs,Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <Tab {...args}>Test Children</Tab>",...Index.parameters?.docs?.source}}},OneTab.parameters={...OneTab.parameters,docs:{...OneTab.parameters?.docs,source:{originalSource:"args => <Tab {...args}>Test Children</Tab>",...OneTab.parameters?.docs?.source}}};const __namedExportsOrder=["Index","OneTab"]},"./src/Tab/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Tab});var fenextjs_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fenextjs-functions/cjs/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Tab=function Tab(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$classNameContent=_ref.classNameContentHead,classNameContentHead=void 0===_ref$classNameContent?"":_ref$classNameContent,_ref$classNameHead=_ref.classNameHead,classNameHead=void 0===_ref$classNameHead?"":_ref$classNameHead,_ref$classNameHeadIte=_ref.classNameHeadItem,classNameHeadItem=void 0===_ref$classNameHeadIte?"":_ref$classNameHeadIte,_ref$classNameHeadIte2=_ref.classNameHeadItemActive,classNameHeadItemActive=void 0===_ref$classNameHeadIte2?"":_ref$classNameHeadIte2,_ref$classNameBody=_ref.classNameBody,classNameBody=void 0===_ref$classNameBody?"":_ref$classNameBody,_ref$classNameBodyIte=_ref.classNameBodyItem,classNameBodyItem=void 0===_ref$classNameBodyIte?"":_ref$classNameBodyIte,_ref$classNameContent2=_ref.classNameContentAfterHead,classNameContentAfterHead=void 0===_ref$classNameContent2?"":_ref$classNameContent2,_ref$classNameContent3=_ref.classNameContentBeforeHead,classNameContentBeforeHead=void 0===_ref$classNameContent3?"":_ref$classNameContent3,_ref$items=_ref.items,items=void 0===_ref$items?[]:_ref$items,_ref$defaultTab=_ref.defaultTab,defaultTab=void 0===_ref$defaultTab?0:_ref$defaultTab,_ref$afterTabs=_ref.afterTabs,afterTabs=void 0===_ref$afterTabs?void 0:_ref$afterTabs,_ref$beforeTabs=_ref.beforeTabs,beforeTabs=void 0===_ref$beforeTabs?void 0:_ref$beforeTabs,onChange=_ref.onChange,_ref$tabScrollActive=_ref.tabScrollActive,tabScrollActive=void 0!==_ref$tabScrollActive&&_ref$tabScrollActive,_ref$validataTabOneHi=_ref.validataTabOneHiddenHeader,validataTabOneHiddenHeader=void 0===_ref$validataTabOneHi||_ref$validataTabOneHi,_t=_ref._t,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Math.max(0,Math.min(defaultTab,items.length-1))),tabSelect=_useState[0],setTabSelect=_useState[1],CHead=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return items.map((function(item,i){return __jsx("div",{key:i,className:"fenext-tab-head-item ".concat(classNameHeadItem," ").concat(i==tabSelect?"fenext-tab-head-item-active ".concat(classNameHeadItemActive):""," fenext-tab-head-item-id-").concat(item.id),onClick:function onClick(){setTabSelect(i),null==onChange||onChange(item)}},(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_1__._tValidate)(item.head,_t))}))}),[tabSelect,items]),CBody=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){if(tabScrollActive)return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,items.map((function(item,i){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fenext-tab-body-item fenext-tab-body-item-".concat(i==tabSelect?"active":""," ").concat(classNameBodyItem)},(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_1__._tValidate)(item.body,_t)))})));var item=items[tabSelect];return __jsx("div",{className:"fenext-tab-body-item ".concat(classNameBodyItem)},item.body)}),[tabSelect,items,tabScrollActive]),BEFORETAB=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var b=beforeTabs,item=items[tabSelect];return item.beforeTab&&(b=item.beforeTab),__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,b&&__jsx("div",{className:"fenext-tab-content-head-before ".concat(classNameContentBeforeHead)},(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_1__._tValidate)(b,_t)))}),[beforeTabs,classNameContentBeforeHead,tabSelect,items,_t]),AFTERTAB=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var a=afterTabs,item=items[tabSelect];return item.beforeTab&&(a=item.afterTab),__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,a&&__jsx("div",{className:"fenext-tab-content-head-after ".concat(classNameContentAfterHead)},(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_1__._tValidate)(a,_t)))}),[afterTabs,classNameContentAfterHead,tabSelect,items,_t]);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fenext-tab fenext-tab-".concat(tabScrollActive?"scroll-active":""," \n                fenext-tab-").concat(validataTabOneHiddenHeader?"validate-one-tab":"","\n                \n                ").concat(className)},__jsx("div",{className:"fenext-tab-content-head ".concat(classNameContentHead)},BEFORETAB,__jsx("div",{className:"fenext-tab-head ".concat(classNameHead)},CHead),AFTERTAB),__jsx("div",{className:"fenext-tab-body ".concat(classNameBody)},CBody)))};try{Tab.displayName="Tab",Tab.__docgenInfo={description:"Tab component that displays a set of tabs with content.",displayName:"Tab",props:{items:{defaultValue:{value:"[]"},description:"Array of `TabItemProps` objects representing the tabs.",name:"items",required:!1,type:{name:"TabItemProps[]"}},onChange:{defaultValue:null,description:"onChange Tab.",name:"onChange",required:!1,type:{name:"((item: TabItemProps) => void)"}},defaultTab:{defaultValue:{value:"0"},description:"Index of the tab to be shown by default.",name:"defaultTab",required:!1,type:{name:"number"}},beforeTabs:{defaultValue:{value:"undefined"},description:"Component of before list  Tabs Header;",name:"beforeTabs",required:!1,type:{name:"ReactNode"}},afterTabs:{defaultValue:{value:"undefined"},description:"Component of after list  Tabs Header;",name:"afterTabs",required:!1,type:{name:"ReactNode"}},tabScrollActive:{defaultValue:{value:"false"},description:"tabScrollActive if show all tabs in scroll in selecte.",name:"tabScrollActive",required:!1,type:{name:"boolean"}},validataTabOneHiddenHeader:{defaultValue:{value:"true"},description:"validataTabOneHiddenHeader if one tab, header is hidden",name:"validataTabOneHiddenHeader",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Name of the CSS class for the component.",name:"className",required:!1,type:{name:"string"}},classNameContentHead:{defaultValue:{value:""},description:"Name of the CSS class for the tab content header.",name:"classNameContentHead",required:!1,type:{name:"string"}},classNameContentBeforeHead:{defaultValue:{value:""},description:"Name of the CSS class for the tab content before header.",name:"classNameContentBeforeHead",required:!1,type:{name:"string"}},classNameContentAfterHead:{defaultValue:{value:""},description:"Name of the CSS class for the tab content after header.",name:"classNameContentAfterHead",required:!1,type:{name:"string"}},classNameHead:{defaultValue:{value:""},description:"Name of the CSS class for the tab header.",name:"classNameHead",required:!1,type:{name:"string"}},classNameHeadItem:{defaultValue:{value:""},description:"Name of the CSS class for an item in the tab header.",name:"classNameHeadItem",required:!1,type:{name:"string"}},classNameHeadItemActive:{defaultValue:{value:""},description:"Name of the CSS class for the active item in the tab header.",name:"classNameHeadItemActive",required:!1,type:{name:"string"}},classNameBody:{defaultValue:{value:""},description:"Name of the CSS class for the tab body.",name:"classNameBody",required:!1,type:{name:"string"}},classNameBodyItem:{defaultValue:{value:""},description:"Name of the CSS class for an item in the tab body.",name:"classNameBodyItem",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Tab/index.tsx#Tab"]={docgenInfo:Tab.__docgenInfo,name:"Tab",path:"src/Tab/index.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}}}]);