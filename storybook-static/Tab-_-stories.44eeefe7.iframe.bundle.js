"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[9084],{"./src/Tab/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,OneTab:()=>OneTab,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Tab/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Component/Tab",component:_index__WEBPACK_IMPORTED_MODULE_1__.o};var Profile=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__.o,args,"Test Children")},Index=Profile.bind({}),args={beforeTabs:"Name Tabs",afterTabs:"Total Items 3",useCount:!1,items:[{id:"1",head:"Head 1",singular:"Head",plural:"Heads",count:1244,body:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("h1",null,"Lorem 1"),"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora, accusamus laudantium nemo accusantium repudiandae ipsa sapiente explicabo nobis ducimus quod quasi veritatis veniam deleniti debitis omnis illo. Quidem, molestias!"),useCount:!0},{id:"2",head:"Head 2",singular:"Head",plural:"Heads",count:1244,body:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("h1",null,"Lorem 2"),"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora, accusamus laudantium nemo accusantium repudiandae ipsa sapiente explicabo nobis ducimus quod quasi veritatis veniam deleniti debitis omnis illo. Quidem, molestias!"),afterTab:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"afterTab2"),beforeTab:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"beforeTab2")},{id:"3",head:"Head 3",singular:"Head",plural:"Heads",count:1,body:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("h1",null,"Lorem 3"),"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora, accusamus laudantium nemo accusantium repudiandae ipsa sapiente explicabo nobis ducimus quod quasi veritatis veniam deleniti debitis omnis illo. Quidem, molestias!")}]};Index.args=args;var OneTab=Profile.bind({}),OneTabargs={beforeTabs:"Name Tabs",afterTabs:"Total Items 3",validataTabOneHiddenHeader:!0,items:[{id:"1",head:"Head 1",body:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("h1",null,"Lorem 1"),"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora, accusamus laudantium nemo accusantium repudiandae ipsa sapiente explicabo nobis ducimus quod quasi veritatis veniam deleniti debitis omnis illo. Quidem, molestias!")}]};OneTab.args=OneTabargs,Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <Tab {...args}>Test Children</Tab>",...Index.parameters?.docs?.source}}},OneTab.parameters={...OneTab.parameters,docs:{...OneTab.parameters?.docs,source:{originalSource:"args => <Tab {...args}>Test Children</Tab>",...OneTab.parameters?.docs?.source}}};const __namedExportsOrder=["Index","OneTab"]},"./src/Tab/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Tab});var _home_francisco_work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),fenextjs_functions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-functions/cjs/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_francisco_work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Tab=function Tab(_ref2){var _ref2$className=_ref2.className,className=void 0===_ref2$className?"":_ref2$className,_ref2$classNameConten=_ref2.classNameContentHead,classNameContentHead=void 0===_ref2$classNameConten?"":_ref2$classNameConten,_ref2$classNameHead=_ref2.classNameHead,classNameHead=void 0===_ref2$classNameHead?"":_ref2$classNameHead,_ref2$classNameHeadIt=_ref2.classNameHeadItem,classNameHeadItem=void 0===_ref2$classNameHeadIt?"":_ref2$classNameHeadIt,_ref2$classNameHeadIt2=_ref2.classNameHeadItemActive,classNameHeadItemActive=void 0===_ref2$classNameHeadIt2?"":_ref2$classNameHeadIt2,_ref2$classNameBody=_ref2.classNameBody,classNameBody=void 0===_ref2$classNameBody?"":_ref2$classNameBody,_ref2$classNameBodyIt=_ref2.classNameBodyItem,classNameBodyItem=void 0===_ref2$classNameBodyIt?"":_ref2$classNameBodyIt,_ref2$classNameConten2=_ref2.classNameContentAfterHead,classNameContentAfterHead=void 0===_ref2$classNameConten2?"":_ref2$classNameConten2,_ref2$classNameConten3=_ref2.classNameContentBeforeHead,classNameContentBeforeHead=void 0===_ref2$classNameConten3?"":_ref2$classNameConten3,_ref2$items=_ref2.items,items=void 0===_ref2$items?[]:_ref2$items,_ref2$defaultTab=_ref2.defaultTab,defaultTab=void 0===_ref2$defaultTab?0:_ref2$defaultTab,_ref2$afterTabs=_ref2.afterTabs,afterTabs=void 0===_ref2$afterTabs?void 0:_ref2$afterTabs,_ref2$beforeTabs=_ref2.beforeTabs,beforeTabs=void 0===_ref2$beforeTabs?void 0:_ref2$beforeTabs,onChange=_ref2.onChange,_ref2$tabScrollActive=_ref2.tabScrollActive,tabScrollActive=void 0!==_ref2$tabScrollActive&&_ref2$tabScrollActive,_ref2$validataTabOneH=_ref2.validataTabOneHiddenHeader,validataTabOneHiddenHeader=void 0===_ref2$validataTabOneH||_ref2$validataTabOneH,_t=_ref2._t,_ref2$useCount=_ref2.useCount,useCount=void 0!==_ref2$useCount&&_ref2$useCount,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Math.max(0,Math.min(defaultTab,items.length-1))),tabSelect=_useState[0],setTabSelect=_useState[1],CHead=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return items.map((function(item,i){var _ref3,_item$useCount,ITEM=function parseTabCount(d){var _ref,_d$count,_d$count2;return d.useCount?_objectSpread(_objectSpread({},d),{},{head:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,null!==(_ref=(null!==(_d$count=d.count)&&void 0!==_d$count?_d$count:0)>1?d.plural:d.singular)&&void 0!==_ref?_ref:d.head," (",(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_2__.parseNumberCount)(null!==(_d$count2=d.count)&&void 0!==_d$count2?_d$count2:0),")")}):d}(_objectSpread(_objectSpread({},item),{},{useCount:null!==(_ref3=null!==(_item$useCount=null==item?void 0:item.useCount)&&void 0!==_item$useCount?_item$useCount:useCount)&&void 0!==_ref3&&_ref3}));return __jsx("div",{key:i,className:"fenext-tab-head-item ".concat(classNameHeadItem," ").concat(i==tabSelect?"fenext-tab-head-item-active ".concat(classNameHeadItemActive):""," fenext-tab-head-item-id-").concat(ITEM.id),onClick:function onClick(){setTabSelect(i),null==onChange||onChange(ITEM)}},(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_2__._tValidate)(ITEM.head,_t))}))}),[tabSelect,items,useCount]),CBody=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){if(tabScrollActive)return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,items.map((function(item,i){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fenext-tab-body-item fenext-tab-body-item-".concat(i==tabSelect?"active":""," ").concat(classNameBodyItem)},(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_2__._tValidate)(item.body,_t)))})));var item=items[tabSelect];return __jsx("div",{className:"fenext-tab-body-item ".concat(classNameBodyItem)},item.body)}),[tabSelect,items,tabScrollActive]),BEFORETAB=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var b=beforeTabs,item=items[tabSelect];return item.beforeTab&&(b=item.beforeTab),__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,b&&__jsx("div",{className:"fenext-tab-content-head-before ".concat(classNameContentBeforeHead)},(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_2__._tValidate)(b,_t)))}),[beforeTabs,classNameContentBeforeHead,tabSelect,items,_t]),AFTERTAB=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var a=afterTabs,item=items[tabSelect];return item.beforeTab&&(a=item.afterTab),__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,a&&__jsx("div",{className:"fenext-tab-content-head-after ".concat(classNameContentAfterHead)},(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_2__._tValidate)(a,_t)))}),[afterTabs,classNameContentAfterHead,tabSelect,items,_t]);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fenext-tab fenext-tab-".concat(tabScrollActive?"scroll-active":""," \n                fenext-tab-").concat(validataTabOneHiddenHeader?"validate-one-tab":"","\n                \n                ").concat(className)},__jsx("div",{className:"fenext-tab-content-head ".concat(classNameContentHead)},BEFORETAB,__jsx("div",{className:"fenext-tab-head ".concat(classNameHead)},CHead),AFTERTAB),__jsx("div",{className:"fenext-tab-body ".concat(classNameBody)},CBody)))};Tab.__docgenInfo={description:"Tab component that displays a set of tabs with content.\n@param className CSS class name for the component.\n@param classNameHead CSS class name for the tab header.\n@param classNameHeadItem CSS class name for each item in the tab header.\n@param classNameHeadItemActive CSS class name for the active item in the tab header.\n@param classNameBody CSS class name for the tab body.\n@param classNameBodyItem CSS class name for each item in the tab body.\n@param items Array of `TabItemProps` objects representing the tabs.\n@param defaultTab Index of the tab to be shown by default.",methods:[],displayName:"Tab",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"TabItemProps",elements:[{name:"T"}],raw:"TabItemProps<T>"}],raw:"TabItemProps<T>[]"},description:"Array of `TabItemProps` objects representing the tabs.",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: TabItemProps<T>) => void",signature:{arguments:[{type:{name:"TabItemProps",elements:[{name:"T"}],raw:"TabItemProps<T>"},name:"item"}],return:{name:"void"}}},description:"onChange Tab."},defaultTab:{required:!1,tsType:{name:"number"},description:"Index of the tab to be shown by default.",defaultValue:{value:"0",computed:!1}},beforeTabs:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Component of before list  Tabs Header;",defaultValue:{value:"undefined",computed:!0}},afterTabs:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Component of after list  Tabs Header;",defaultValue:{value:"undefined",computed:!0}},tabScrollActive:{required:!1,tsType:{name:"boolean"},description:"tabScrollActive if show all tabs in scroll in selecte.\n@default false",defaultValue:{value:"false",computed:!1}},validataTabOneHiddenHeader:{required:!1,tsType:{name:"boolean"},description:"validataTabOneHiddenHeader if one tab, header is hidden\n@default true",defaultValue:{value:"true",computed:!1}},useCount:{required:!1,tsType:{name:"boolean"},description:"useCount  Tabs;",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Name of the CSS class for the component.",defaultValue:{value:'""',computed:!1}},classNameContentHead:{required:!1,tsType:{name:"string"},description:"Name of the CSS class for the tab content header.",defaultValue:{value:'""',computed:!1}},classNameContentBeforeHead:{required:!1,tsType:{name:"string"},description:"Name of the CSS class for the tab content before header.",defaultValue:{value:'""',computed:!1}},classNameContentAfterHead:{required:!1,tsType:{name:"string"},description:"Name of the CSS class for the tab content after header.",defaultValue:{value:'""',computed:!1}},classNameHead:{required:!1,tsType:{name:"string"},description:"Name of the CSS class for the tab header.",defaultValue:{value:'""',computed:!1}},classNameHeadItem:{required:!1,tsType:{name:"string"},description:"Name of the CSS class for an item in the tab header.",defaultValue:{value:'""',computed:!1}},classNameHeadItemActive:{required:!1,tsType:{name:"string"},description:"Name of the CSS class for the active item in the tab header.",defaultValue:{value:'""',computed:!1}},classNameBody:{required:!1,tsType:{name:"string"},description:"Name of the CSS class for the tab body.",defaultValue:{value:'""',computed:!1}},classNameBodyItem:{required:!1,tsType:{name:"string"},description:"Name of the CSS class for an item in the tab body.",defaultValue:{value:'""',computed:!1}}},composes:["_TProps"]}},"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty})}}]);