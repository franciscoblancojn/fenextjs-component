"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[4094],{"./src/AlertHook/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Index_parameters,_Index_parameters_docs,_Index_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js")),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/AlertHook/index.tsx"),_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/Button/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Component/AlertHook",component:_index__WEBPACK_IMPORTED_MODULE_3__.w},Index=(args=>{const{setAlert}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_2__.useAlert)({}),argsBase={message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur ullam voluptatum dignissimos deserunt quasi nihil",type:"OK"},argsBaseOK={...argsBase},argsBaseERROR={...argsBase,type:"ERROR"},argsBaseNORMAL={...argsBase,type:"NORMAL"},argsBaseWARNING={...argsBase,type:"WARNING"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{display:"grid",gap:"1rem"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.w,{...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.$,{onClick:()=>{setAlert(argsBaseOK)},children:"Test generate alert OK"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.$,{onClick:()=>{setAlert(argsBaseERROR)},children:"Test generate alert ERROR"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.$,{onClick:()=>{setAlert(argsBaseNORMAL)},children:"Test generate alert NORMAL"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.$,{onClick:()=>{setAlert(argsBaseWARNING)},children:"Test generate alert WARNING"})]})})}).bind({});Index.args={},Index.parameters={...Index.parameters,docs:{...null===(_Index_parameters=Index.parameters)||void 0===_Index_parameters?void 0:_Index_parameters.docs,source:{originalSource:'args => {\n  const {\n    setAlert\n  } = useAlert({});\n  const argsBase: AlertProps = {\n    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur ullam voluptatum dignissimos deserunt quasi nihil",\n    type: "OK"\n  };\n  const argsBaseOK: AlertProps = {\n    ...argsBase\n  };\n  const argsBaseERROR: AlertProps = {\n    ...argsBase,\n    type: "ERROR"\n  };\n  const argsBaseNORMAL: AlertProps = {\n    ...argsBase,\n    type: "NORMAL"\n  };\n  const argsBaseWARNING: AlertProps = {\n    ...argsBase,\n    type: "WARNING"\n  };\n  return <>\n            <div style={{\n      display: "grid",\n      gap: "1rem"\n    }}>\n            <AlertHook {...args} />\n            <Button onClick={() => {\n        setAlert(argsBaseOK);\n      }}>\n                Test generate alert OK\n            </Button>\n            <Button onClick={() => {\n        setAlert(argsBaseERROR);\n      }}>\n                Test generate alert ERROR\n            </Button>\n            <Button onClick={() => {\n        setAlert(argsBaseNORMAL);\n      }}>\n                Test generate alert NORMAL\n            </Button>\n            <Button onClick={() => {\n        setAlert(argsBaseWARNING);\n      }}>\n                Test generate alert WARNING\n            </Button>\n            </div>\n        </>;\n}',...null===(_Index_parameters1=Index.parameters)||void 0===_Index_parameters1||null===(_Index_parameters_docs=_Index_parameters1.docs)||void 0===_Index_parameters_docs?void 0:_Index_parameters_docs.source}}};const __namedExportsOrder=["Index"]},"./src/Alert/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>Alert});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),fenextjs_functions__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/fenextjs-functions/cjs/index.js")),fenextjs_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-svg/cjs/index.js");const Alert=param=>{let{className="",message,iconClose=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fenextjs_svg__WEBPACK_IMPORTED_MODULE_3__.Close,{}),type,data,_t,onClose}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fenext-alert fenext-alert-".concat(type," ").concat(className),"data-type":type,"meta-data":data,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-alert-content",children:(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_2__._tValidate)(message,_t)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-alert-close",onClick:onClose,children:iconClose})]})})};Alert.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},iconClose:{required:!1,tsType:{name:"ReactNode"},description:"The iconClose for the component.",defaultValue:{value:"<Close />",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"The onClose for the component."}},composes:["_TProps","AlertInterface"]}},"./src/AlertHook/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>AlertHook});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js")),_Alert__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Alert/index.tsx");const AlertHook=param=>{let{className="",configHook={},_t}=param;const{alert,onClearAlert}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_2__.useAlert)(configHook);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:alert&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-alert-hook ".concat(className),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Alert__WEBPACK_IMPORTED_MODULE_3__.F,{_t,...alert,onClose:onClearAlert})})})};AlertHook.__docgenInfo={description:"",methods:[],displayName:"AlertHook",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},configHook:{required:!1,tsType:{name:"useAlertProps"},description:"",defaultValue:{value:"{}",computed:!1}}},composes:["_TProps"]}},"./src/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Loader__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Loader/index.tsx")),fenextjs_functions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-functions/cjs/index.js");const Button=param=>{let{className="",classNameLoader="",children,loader=!1,disabled=!1,onClick=()=>{},onClickDisabled=()=>{},icon="",isBtn=!0,full=!1,size="normal",_t}=param;const Tag=isBtn?"button":"div";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tag,{onClick:disabled?onClickDisabled:onClick,className:"fenext-btn fenext-btn-size-".concat(size,"  ").concat(full?"fenext-btn-size-full":""," ").concat(className," "),disabled:loader||disabled,children:[loader&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Loader__WEBPACK_IMPORTED_MODULE_2__.aH,{classNameLoader}),icon,(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_3__._tValidate)(children,_t)]})})};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{loader:{required:!1,tsType:{name:"boolean"},description:"Indicates whether the button is currently in the loading state.",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Indicates whether the button is disabled or not.",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"intersection",raw:"React.MouseEventHandler<HTMLButtonElement> &\nReact.MouseEventHandler<HTMLDivElement>",elements:[{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},description:"The callback function that is called when the button is clicked.",defaultValue:{value:"() => {}",computed:!1}},onClickDisabled:{required:!1,tsType:{name:"intersection",raw:"React.MouseEventHandler<HTMLButtonElement> &\nReact.MouseEventHandler<HTMLDivElement>",elements:[{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},description:"The callback function that is called when the button is clicked as disabled.",defaultValue:{value:"() => {}",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"The icon to display in the button.",defaultValue:{value:'""',computed:!1}},isBtn:{required:!1,tsType:{name:"boolean"},description:"Indicates whether the component should render as a button element.",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'| "extra-small"\n| "small"\n| "normal"\n| "strong"\n| "extra-strong"',elements:[{name:"literal",value:'"extra-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"normal"'},{name:"literal",value:'"strong"'},{name:"literal",value:'"extra-strong"'}]},description:"The Size of Button.",defaultValue:{value:'"normal"',computed:!1}},full:{required:!1,tsType:{name:"boolean"},description:"The Size  Full of Button.",defaultValue:{value:"false",computed:!1}},classNameLoader:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}},composes:["PropsWithChildren","_TProps"]}},"./src/Loader/Current/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Loader});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Loader=param=>{let{classNameLoader=""}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-loader ".concat(classNameLoader)})})};Loader.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{classNameLoader:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}}}},"./src/Loader/Line/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>LoaderLine});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const LoaderLine=param=>{let{classNameLoaderLine="",height=20}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-loader-line ".concat(classNameLoaderLine),style:{"--height":"".concat(height/16,"rem")}})})};LoaderLine.__docgenInfo={description:"",methods:[],displayName:"LoaderLine",props:{height:{required:!1,tsType:{name:"number"},description:"Height of Line.",defaultValue:{value:"20",computed:!1}},classNameLoaderLine:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}}}},"./src/Loader/Spinner/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>LoaderSpinner});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const LoaderSpinner=param=>{let{classNameLoaderSpinner=""}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-loader-spinner ".concat(classNameLoaderSpinner)})})};LoaderSpinner.__docgenInfo={description:"",methods:[],displayName:"LoaderSpinner",props:{classNameLoaderSpinner:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}}}},"./src/Loader/User/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>LoaderUser});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Line__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Loader/Line/index.tsx"));const LoaderUser=param=>{let{classNameLoaderUser="",classNameLoaderUserImg="",classNameLoaderUserName="",classNameLoaderUserEmail=""}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fenext-loader-user ".concat(classNameLoaderUser),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Line__WEBPACK_IMPORTED_MODULE_2__.a,{classNameLoaderLine:"fenext-loader-user-img ".concat(classNameLoaderUserImg)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Line__WEBPACK_IMPORTED_MODULE_2__.a,{classNameLoaderLine:"fenext-loader-user-name ".concat(classNameLoaderUserName)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Line__WEBPACK_IMPORTED_MODULE_2__.a,{classNameLoaderLine:"fenext-loader-user-email ".concat(classNameLoaderUserEmail)})]})})};LoaderUser.__docgenInfo={description:"",methods:[],displayName:"LoaderUser",props:{classNameLoaderUser:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameLoaderUserImg:{required:!1,tsType:{name:"string"},description:"The class name for img the component.",defaultValue:{value:'""',computed:!1}},classNameLoaderUserName:{required:!1,tsType:{name:"string"},description:"The class name for Name the component.",defaultValue:{value:'""',computed:!1}},classNameLoaderUserEmail:{required:!1,tsType:{name:"string"},description:"The class name for email the component.",defaultValue:{value:'""',computed:!1}}}}},"./src/Loader/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aH:()=>_Current__WEBPACK_IMPORTED_MODULE_0__.a,d1:()=>_Spinner__WEBPACK_IMPORTED_MODULE_1__.d});var _Current__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Loader/Current/index.tsx"),_Spinner__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Loader/Spinner/index.tsx");__webpack_require__("./src/Loader/Line/index.tsx"),__webpack_require__("./src/Loader/User/index.tsx")}}]);