"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[420],{"./src/Alert/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>Alert});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),fenextjs_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-svg/cjs/index.js"),_excluded=["className","message","iconClose","type","data","onClose"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var Alert=function Alert(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,message=_ref.message,_ref$iconClose=_ref.iconClose,iconClose=void 0===_ref$iconClose?__jsx(fenextjs_svg__WEBPACK_IMPORTED_MODULE_3__.Close,null):_ref$iconClose,type=_ref.type,data=_ref.data,onClose=_ref.onClose,props=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(_ref,_excluded),_use_T=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_2__.use_T)(function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},props)),_t=_use_T._t;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fenext-alert fenext-alert-".concat(type," ").concat(className),"data-type":type,"meta-data":data},__jsx("div",{className:"fenext-alert-content"},_t(message)),__jsx("div",{className:"fenext-alert-close",onClick:onClose},iconClose)))};Alert.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},iconClose:{required:!1,tsType:{name:"ReactNode"},description:"The iconClose for the component.",defaultValue:{value:"<Close />",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"The onClose for the component."}},composes:["_TProps","AlertInterface"]}},"./src/AlertHook/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>AlertHook});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),_Alert__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Alert/index.tsx"),_excluded=["className","configHook"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,AlertHook=function AlertHook(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$configHook=_ref.configHook,configHook=void 0===_ref$configHook?{}:_ref$configHook,props=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded),_useAlert=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_1__.useAlert)(configHook),alert=_useAlert.alert,onClearAlert=_useAlert.onClearAlert;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,alert&&__jsx("div",{className:"fenext-alert-hook ".concat(className)},__jsx(_Alert__WEBPACK_IMPORTED_MODULE_2__.F,(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({},props,alert,{onClose:onClearAlert}))))};AlertHook.__docgenInfo={description:"",methods:[],displayName:"AlertHook",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},configHook:{required:!1,tsType:{name:"useAlertProps"},description:"",defaultValue:{value:"{}",computed:!1}}},composes:["_TProps"]}},"./src/Layout/Grid/GridMenuLeft/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>LayoutGridMenuLeft});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Loader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Loader/index.tsx"),_PageProgress__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/PageProgress/index.tsx"),_AlertHook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/AlertHook/index.tsx"),_excluded=["className","classNameLoader","classNameChildren","classNameMenuLeft","classNameMenuLeftContent","children","menuLeft","loader","menuLeftActive","menuLeftMovilActive","useHeaderButtonMenu","usePageProgress","useAlertHook","alertHookProps","target"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,LayoutGridMenuLeft=function LayoutGridMenuLeft(_ref){var _alertHookProps$class,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$classNameLoader=_ref.classNameLoader,classNameLoader=void 0===_ref$classNameLoader?"":_ref$classNameLoader,_ref$classNameChildre=_ref.classNameChildren,classNameChildren=void 0===_ref$classNameChildre?"":_ref$classNameChildre,_ref$classNameMenuLef=_ref.classNameMenuLeft,classNameMenuLeft=void 0===_ref$classNameMenuLef?"":_ref$classNameMenuLef,_ref$classNameMenuLef2=_ref.classNameMenuLeftContent,classNameMenuLeftContent=void 0===_ref$classNameMenuLef2?"":_ref$classNameMenuLef2,children=_ref.children,menuLeft=_ref.menuLeft,_ref$loader=_ref.loader,loader=void 0!==_ref$loader&&_ref$loader,_ref$menuLeftActive=_ref.menuLeftActive,menuLeftActive=void 0===_ref$menuLeftActive||_ref$menuLeftActive,_ref$menuLeftMovilAct=_ref.menuLeftMovilActive,menuLeftMovilActive=void 0!==_ref$menuLeftMovilAct&&_ref$menuLeftMovilAct,_ref$useHeaderButtonM=_ref.useHeaderButtonMenu,useHeaderButtonMenu=void 0!==_ref$useHeaderButtonM&&_ref$useHeaderButtonM,_ref$usePageProgress=_ref.usePageProgress,usePageProgress=void 0===_ref$usePageProgress||_ref$usePageProgress,_ref$useAlertHook=_ref.useAlertHook,useAlertHook=void 0===_ref$useAlertHook||_ref$useAlertHook,_ref$alertHookProps=_ref.alertHookProps,alertHookProps=void 0===_ref$alertHookProps?{}:_ref$alertHookProps,_ref$target=_ref.target,target=void 0===_ref$target?"fenext-btn-menu-checkbox":_ref$target,props=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(_ref,_excluded),t='[name="'.concat(target,'"]:checked');return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.A)({className:"fenext-layout-grid fenext-layout-grid-ml \n                    ".concat(className," \n                    fenext-layout-grid-ml-").concat(menuLeftActive?"active":"inactive","\n                    fenext-layout-grid-ml-movil-").concat(menuLeftMovilActive?"active":"inactive","\n                    fenext-layout-grid-ml-").concat(useHeaderButtonMenu?"use-btn-menu":"","\n                "),"data-target":target},props),__jsx("div",{className:"fenext-layout-grid-ml-menu-left ".concat(classNameMenuLeft)},__jsx("div",{className:"fenext-layout-grid-ml-menu-left-content ".concat(classNameMenuLeftContent)},menuLeft)),__jsx("div",{className:"fenext-layout-grid-ml-children ".concat(classNameChildren)},usePageProgress&&__jsx(_PageProgress__WEBPACK_IMPORTED_MODULE_2__.D,null),useAlertHook&&__jsx(_AlertHook__WEBPACK_IMPORTED_MODULE_3__.w,(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.A)({},alertHookProps,{className:"fenext-layout-grid-alert ".concat(null!==(_alertHookProps$class=null==alertHookProps?void 0:alertHookProps.className)&&void 0!==_alertHookProps$class?_alertHookProps$class:"")})),loader?__jsx(_Loader__WEBPACK_IMPORTED_MODULE_1__.aH,{classNameLoader:"".concat(classNameLoader," fenext-layout-grid-loader")}):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)),"fenext-btn-menu-checkbox"!=target&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("style",null,"\n                                body:has(".concat(t,") .fenext-layout-grid-ml-use-btn-menu[data-target=").concat(target,"] {\n                                    @media (min-width: 576px) {\n                                        --size-menu : var(--fenext-size-menu-left, auto);\n                                    }\n                                    @media (max-width: 575px) {\n                                        --clip-path: circle(200% at 0% 0%);\n                                    }\n                                }\n                                body:not(:has(").concat(t,")) .fenext-layout-grid-ml-use-btn-menu[data-target=").concat(target,"] {\n                                    @media (min-width: 576px) {\n                                        --size-menu : var(--fenext-size-menu-left-close, 0px);\n                                    }\n                                    @media (max-width: 575px) {\n                                        --clip-path: circle(0% at 0% 0%);\n                                    }\n                                }\n                            ")))))};LayoutGridMenuLeft.__docgenInfo={description:"",methods:[],displayName:"LayoutGridMenuLeft",props:{useAlertHook:{required:!1,tsType:{name:"boolean"},description:"Indicates if render componenet alert hook.",defaultValue:{value:"true",computed:!1}},alertHookProps:{required:!1,tsType:{name:"AlertHookProps"},description:"props for alert hook.",defaultValue:{value:"{}",computed:!1}},loader:{required:!1,tsType:{name:"boolean"},description:"Indicates whether the page is currently in the loading state.",defaultValue:{value:"false",computed:!1}},menuLeft:{required:!1,tsType:{name:"ReactNode"},description:"Menu Left of Layout."},menuLeftActive:{required:!1,tsType:{name:"boolean"},description:"Menu Top of Layout.",defaultValue:{value:"true",computed:!1}},menuLeftMovilActive:{required:!1,tsType:{name:"boolean"},description:"Menu Top of Layout.",defaultValue:{value:"false",computed:!1}},useHeaderButtonMenu:{required:!1,tsType:{name:"boolean"},description:"useHeaderButtonMenu for show menu.",defaultValue:{value:"false",computed:!1}},usePageProgress:{required:!1,tsType:{name:"boolean"},description:"Use page progress bar.",defaultValue:{value:"true",computed:!1}},target:{required:!1,tsType:{name:"string"},description:"target for btn.",defaultValue:{value:'"fenext-btn-menu-checkbox"',computed:!1}},classNameLoader:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameMenuLeft:{required:!1,tsType:{name:"string"},description:"The class name for the Menu Left element.",defaultValue:{value:'""',computed:!1}},classNameMenuLeftContent:{required:!1,tsType:{name:"string"},description:"The class name for the Menu Left element.",defaultValue:{value:'""',computed:!1}},classNameChildren:{required:!1,tsType:{name:"string"},description:"The class name for the Content Children element.",defaultValue:{value:'""',computed:!1}}},composes:["PropsWithChildren"]}},"./src/Layout/Grid/GridMenuTop/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>LayoutGridMenuTop});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Loader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Loader/index.tsx"),_PageProgress__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/PageProgress/index.tsx"),_AlertHook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/AlertHook/index.tsx"),_excluded=["className","classNameLoader","classNameChildren","classNameMenuTop","children","menuTop","loader","usePageProgress","useAlertHook","alertHookProps"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,LayoutGridMenuTop=function LayoutGridMenuTop(_ref){var _alertHookProps$class,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$classNameLoader=_ref.classNameLoader,classNameLoader=void 0===_ref$classNameLoader?"":_ref$classNameLoader,_ref$classNameChildre=_ref.classNameChildren,classNameChildren=void 0===_ref$classNameChildre?"":_ref$classNameChildre,_ref$classNameMenuTop=_ref.classNameMenuTop,classNameMenuTop=void 0===_ref$classNameMenuTop?"":_ref$classNameMenuTop,children=_ref.children,menuTop=_ref.menuTop,_ref$loader=_ref.loader,loader=void 0!==_ref$loader&&_ref$loader,_ref$usePageProgress=_ref.usePageProgress,usePageProgress=void 0===_ref$usePageProgress||_ref$usePageProgress,_ref$useAlertHook=_ref.useAlertHook,useAlertHook=void 0===_ref$useAlertHook||_ref$useAlertHook,_ref$alertHookProps=_ref.alertHookProps,alertHookProps=void 0===_ref$alertHookProps?{}:_ref$alertHookProps,props=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(_ref,_excluded);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.A)({className:"fenext-layout-grid fenext-layout-grid-mt ".concat(className)},props),__jsx("div",{className:"fenext-layout-grid-mt-menu-top ".concat(classNameMenuTop)},menuTop),__jsx("div",{className:"fenext-layout-grid-mt-children ".concat(classNameChildren)},usePageProgress&&__jsx(_PageProgress__WEBPACK_IMPORTED_MODULE_2__.D,null),useAlertHook&&__jsx(_AlertHook__WEBPACK_IMPORTED_MODULE_3__.w,(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.A)({},alertHookProps,{className:"fenext-layout-grid-alert ".concat(null!==(_alertHookProps$class=null==alertHookProps?void 0:alertHookProps.className)&&void 0!==_alertHookProps$class?_alertHookProps$class:"")})),loader?__jsx(_Loader__WEBPACK_IMPORTED_MODULE_1__.aH,{classNameLoader:"".concat(classNameLoader," fenext-layout-grid-loader")}):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children))))};LayoutGridMenuTop.__docgenInfo={description:"",methods:[],displayName:"LayoutGridMenuTop",props:{useAlertHook:{required:!1,tsType:{name:"boolean"},description:"Indicates if render componenet alert hook.",defaultValue:{value:"true",computed:!1}},alertHookProps:{required:!1,tsType:{name:"AlertHookProps"},description:"props for alert hook.",defaultValue:{value:"{}",computed:!1}},loader:{required:!1,tsType:{name:"boolean"},description:"Indicates whether the page is currently in the loading state.",defaultValue:{value:"false",computed:!1}},menuTop:{required:!1,tsType:{name:"ReactNode"},description:"Menu Top of Layout."},usePageProgress:{required:!1,tsType:{name:"boolean"},description:"Use page progress bar.",defaultValue:{value:"true",computed:!1}},classNameLoader:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameMenuTop:{required:!1,tsType:{name:"string"},description:"The class name for the Menu Top element.",defaultValue:{value:'""',computed:!1}},classNameChildren:{required:!1,tsType:{name:"string"},description:"The class name for the Content Children element.",defaultValue:{value:'""',computed:!1}}},composes:["PropsWithChildren"]}},"./src/Layout/Grid/GridMenuTopLeft/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>LayoutGridMenuTopLeft});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_GridMenuTop__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Layout/Grid/GridMenuTop/index.tsx"),_GridMenuLeft__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Layout/Grid/GridMenuLeft/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,LayoutGridMenuTopLeft=function LayoutGridMenuTopLeft(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$classNameLoader=_ref.classNameLoader,classNameLoader=void 0===_ref$classNameLoader?"":_ref$classNameLoader,_ref$classNameChildre=_ref.classNameChildren,classNameChildren=void 0===_ref$classNameChildre?"":_ref$classNameChildre,_ref$classNameMenuTop=_ref.classNameMenuTop,classNameMenuTop=void 0===_ref$classNameMenuTop?"":_ref$classNameMenuTop,_ref$classNameMenuLef=_ref.classNameMenuLeft,classNameMenuLeft=void 0===_ref$classNameMenuLef?"":_ref$classNameMenuLef,_ref$classNameMenuLef2=_ref.classNameMenuLeftContent,classNameMenuLeftContent=void 0===_ref$classNameMenuLef2?"":_ref$classNameMenuLef2,children=_ref.children,menuLeft=_ref.menuLeft,menuTop=_ref.menuTop,_ref$loader=_ref.loader,loader=void 0!==_ref$loader&&_ref$loader,_ref$menuLeftActive=_ref.menuLeftActive,menuLeftActive=void 0===_ref$menuLeftActive||_ref$menuLeftActive,_ref$menuLeftMovilAct=_ref.menuLeftMovilActive,menuLeftMovilActive=void 0!==_ref$menuLeftMovilAct&&_ref$menuLeftMovilAct,_ref$useHeaderButtonM=_ref.useHeaderButtonMenu,useHeaderButtonMenu=void 0!==_ref$useHeaderButtonM&&_ref$useHeaderButtonM,_ref$usePageProgress=_ref.usePageProgress,usePageProgress=void 0===_ref$usePageProgress||_ref$usePageProgress,alertHookProps=_ref.alertHookProps,_ref$useAlertHook=_ref.useAlertHook,useAlertHook=void 0===_ref$useAlertHook||_ref$useAlertHook,_ref$target=_ref.target,target=void 0===_ref$target?"fenext-btn-menu-checkbox":_ref$target;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_GridMenuTop__WEBPACK_IMPORTED_MODULE_1__.t,{className:"fenext-layout-grid fenext-layout-grid-mtl ".concat(className),classNameMenuTop,menuTop,usePageProgress:!1,useAlertHook:!1},__jsx(_GridMenuLeft__WEBPACK_IMPORTED_MODULE_2__.N,{classNameLoader,classNameChildren,classNameMenuLeft,classNameMenuLeftContent,menuLeft,loader,menuLeftActive,menuLeftMovilActive,useHeaderButtonMenu,usePageProgress,useAlertHook,alertHookProps,target},children)))};LayoutGridMenuTopLeft.__docgenInfo={description:"",methods:[],displayName:"LayoutGridMenuTopLeft",props:{useAlertHook:{required:!1,tsType:{name:"boolean"},description:"Indicates if render componenet alert hook.",defaultValue:{value:"true",computed:!1}},alertHookProps:{required:!1,tsType:{name:"AlertHookProps"},description:"props for alert hook."},loader:{required:!1,tsType:{name:"boolean"},description:"Indicates whether the page is currently in the loading state.",defaultValue:{value:"false",computed:!1}},menuTop:{required:!1,tsType:{name:"ReactNode"},description:"Menu Top of Layout."},usePageProgress:{required:!1,tsType:{name:"boolean"},description:"Use page progress bar.",defaultValue:{value:"true",computed:!1}},menuLeft:{required:!1,tsType:{name:"ReactNode"},description:"Menu Left of Layout."},menuLeftActive:{required:!1,tsType:{name:"boolean"},description:"Menu Top of Layout.",defaultValue:{value:"true",computed:!1}},menuLeftMovilActive:{required:!1,tsType:{name:"boolean"},description:"Menu Top of Layout.",defaultValue:{value:"false",computed:!1}},useHeaderButtonMenu:{required:!1,tsType:{name:"boolean"},description:"useHeaderButtonMenu for show menu.",defaultValue:{value:"false",computed:!1}},target:{required:!1,tsType:{name:"string"},description:"target for btn.",defaultValue:{value:'"fenext-btn-menu-checkbox"',computed:!1}},classNameLoader:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameMenuTop:{required:!1,tsType:{name:"string"},description:"The class name for the Menu Top element.",defaultValue:{value:'""',computed:!1}},classNameChildren:{required:!1,tsType:{name:"string"},description:"The class name for the Content Children element.",defaultValue:{value:'""',computed:!1}},classNameMenuLeft:{required:!1,tsType:{name:"string"},description:"The class name for the Menu Left element.",defaultValue:{value:'""',computed:!1}},classNameMenuLeftContent:{required:!1,tsType:{name:"string"},description:"The class name for the Menu Left element.",defaultValue:{value:'""',computed:!1}}},composes:["PropsWithChildren"]}}}]);