"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[4064],{"./src/Input/Scanner/Qr/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Input/Scanner/Qr/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Input/Scanner/InputScannerQr",component:_index__WEBPACK_IMPORTED_MODULE_1__.O};var Index=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__.O,args,"Test Children")}.bind({});Index.args={},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <InputScannerQr {...args}>Test Children</InputScannerQr>",...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Input/Scanner/Qr/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>InputScannerQr});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),qr_scanner__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/qr-scanner/qr-scanner.min.js"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Button/index.tsx"),_Modal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/Modal/index.ts"),fenextjs_svg_cjs_Qr__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/fenextjs-svg/cjs/Qr/index.js"),fenextjs_functions__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/fenextjs-functions/cjs/index.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),fenextjs_svg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/fenextjs-svg/cjs/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,InputScannerQr=function InputScannerQr(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,onChange=_ref.onChange,_ref$buttonScannerCon=_ref.buttonScannerContent,buttonScannerContent=void 0===_ref$buttonScannerCon?__jsx(fenextjs_svg_cjs_Qr__WEBPACK_IMPORTED_MODULE_5__.SvgQr,null):_ref$buttonScannerCon,_ref$buttonChangeCame=_ref.buttonChangeCameraContent,buttonChangeCameraContent=void 0===_ref$buttonChangeCame?__jsx(fenextjs_svg__WEBPACK_IMPORTED_MODULE_8__.SvgCameraChange,null):_ref$buttonChangeCame,_ref$buttonToggleFlas=_ref.buttonToggleFlashContent,buttonToggleFlashContent=void 0===_ref$buttonToggleFlas?__jsx(fenextjs_svg__WEBPACK_IMPORTED_MODULE_8__.SvgBolt,null):_ref$buttonToggleFlas,uuid=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_6__.generateRandomID)()}),[]),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),showScanner=_useState[0],setShowScanner=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),hasFlash=_useState2[0],setHasFlash=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),nCamera=_useState3[0],setNCamera=_useState3[1],_useState4=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0),listCamera=_useState4[0],setListCamera=_useState4[1],_useState5=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0),qrScanner=_useState5[0],setQrScanner=_useState5[1],onStoptScan=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setShowScanner(!1),null==qrScanner||qrScanner.stop()}),[qrScanner]),onStartScan=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setShowScanner(!0),null==qrScanner||qrScanner.start()}),[qrScanner]),onToggleFlash=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){null==qrScanner||qrScanner.toggleFlash()}),[qrScanner]),onChangeCamera=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setNCamera((function(p){var _listCamera$length,_listCamera$n,_listCamera$n2,n=p+1;(n>=(null!==(_listCamera$length=null==listCamera?void 0:listCamera.length)&&void 0!==_listCamera$length?_listCamera$length:0)&&(n=0),null!=listCamera&&null!==(_listCamera$n=listCamera[n])&&void 0!==_listCamera$n&&_listCamera$n.id)&&(null==qrScanner||qrScanner.setCamera(null==listCamera||null===(_listCamera$n2=listCamera[n])||void 0===_listCamera$n2?void 0:_listCamera$n2.id));return n}))}),[qrScanner,listCamera]),onScan=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(v){v&&(null==onChange||onChange(v),onStoptScan())}),[qrScanner]),onAction=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_7__.useAction)({name:"input-scanner-qr-".concat(uuid),onActionExecute:onScan}).onAction;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function onLoad(){if(ref.current){var _qrScanner=new qr_scanner__WEBPACK_IMPORTED_MODULE_2__.A(ref.current,onAction);_qrScanner.stop(),setQrScanner(_qrScanner),(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__.A)(_home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee(){return _home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.t0=setListCamera,_context.next=3,qr_scanner__WEBPACK_IMPORTED_MODULE_2__.A.listCameras();case 3:return _context.t1=_context.sent,(0,_context.t0)(_context.t1),_context.t2=setHasFlash,_context.next=8,qr_scanner__WEBPACK_IMPORTED_MODULE_2__.A.hasCamera();case 8:_context.t3=_context.sent,(0,_context.t2)(_context.t3);case 10:case"end":return _context.stop()}}),_callee)})))()}else setTimeout(onStartScan,500)}),[]),__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"\n                    fenext-input-scanner-qr\n                    fenext-input-scanner-qr-n-camera-".concat(nCamera,"\n                    fenext-input-scanner-qr-").concat(showScanner?"show":"hidden","\n                    ").concat(null!=className?className:"","\n                ")},__jsx(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{className:"fenext-input-scanner-qr-btn-scanner",onClick:onStartScan},buttonScannerContent),__jsx(_Modal__WEBPACK_IMPORTED_MODULE_4__.a,{active:showScanner,type:"full",onClose:onStoptScan},__jsx("video",{ref,className:"fenext-input-scanner-qr-video"}),listCamera&&listCamera.length>1&&__jsx(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{className:"fenext-input-scanner-qr-btn-change-camera",onClick:onChangeCamera},buttonChangeCameraContent),hasFlash&&__jsx(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{className:"fenext-input-scanner-qr-btn-flash",onClick:onToggleFlash},buttonToggleFlashContent))))};InputScannerQr.__docgenInfo={description:"",methods:[],displayName:"InputScannerQr",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:""},buttonScannerContent:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"<SvgQr />",computed:!1}},buttonChangeCameraContent:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"<SvgCameraChange />",computed:!1}},buttonToggleFlashContent:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"<SvgBolt />",computed:!1}}}}},"./src/Loader/Current/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Loader});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Loader=function Loader(_ref){var _ref$classNameLoader=_ref.classNameLoader,classNameLoader=void 0===_ref$classNameLoader?"":_ref$classNameLoader;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fenext-loader ".concat(classNameLoader)}))};Loader.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{classNameLoader:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}}}},"./src/Loader/Line/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>LoaderLine});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,LoaderLine=function LoaderLine(_ref){var _ref$classNameLoaderL=_ref.classNameLoaderLine,classNameLoaderLine=void 0===_ref$classNameLoaderL?"":_ref$classNameLoaderL,_ref$height=_ref.height,height=void 0===_ref$height?20:_ref$height;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fenext-loader-line ".concat(classNameLoaderLine),style:(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)({},"--height","".concat(height/16,"rem"))}))};LoaderLine.__docgenInfo={description:"",methods:[],displayName:"LoaderLine",props:{height:{required:!1,tsType:{name:"number"},description:"Height of Line.",defaultValue:{value:"20",computed:!1}},classNameLoaderLine:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}}}},"./src/Loader/Spinner/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>LoaderSpinner});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,LoaderSpinner=function LoaderSpinner(_ref){var _ref$classNameLoaderS=_ref.classNameLoaderSpinner,classNameLoaderSpinner=void 0===_ref$classNameLoaderS?"":_ref$classNameLoaderS;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fenext-loader-spinner ".concat(classNameLoaderSpinner)}))};LoaderSpinner.__docgenInfo={description:"",methods:[],displayName:"LoaderSpinner",props:{classNameLoaderSpinner:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}}}},"./src/Loader/User/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>LoaderUser});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Line__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Loader/Line/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,LoaderUser=function LoaderUser(_ref){var _ref$classNameLoaderU=_ref.classNameLoaderUser,classNameLoaderUser=void 0===_ref$classNameLoaderU?"":_ref$classNameLoaderU,_ref$classNameLoaderU2=_ref.classNameLoaderUserImg,classNameLoaderUserImg=void 0===_ref$classNameLoaderU2?"":_ref$classNameLoaderU2,_ref$classNameLoaderU3=_ref.classNameLoaderUserName,classNameLoaderUserName=void 0===_ref$classNameLoaderU3?"":_ref$classNameLoaderU3,_ref$classNameLoaderU4=_ref.classNameLoaderUserEmail,classNameLoaderUserEmail=void 0===_ref$classNameLoaderU4?"":_ref$classNameLoaderU4;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fenext-loader-user ".concat(classNameLoaderUser)},__jsx(_Line__WEBPACK_IMPORTED_MODULE_1__.a,{classNameLoaderLine:"fenext-loader-user-img ".concat(classNameLoaderUserImg)}),__jsx(_Line__WEBPACK_IMPORTED_MODULE_1__.a,{classNameLoaderLine:"fenext-loader-user-name ".concat(classNameLoaderUserName)}),__jsx(_Line__WEBPACK_IMPORTED_MODULE_1__.a,{classNameLoaderLine:"fenext-loader-user-email ".concat(classNameLoaderUserEmail)})))};LoaderUser.__docgenInfo={description:"",methods:[],displayName:"LoaderUser",props:{classNameLoaderUser:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameLoaderUserImg:{required:!1,tsType:{name:"string"},description:"The class name for img the component.",defaultValue:{value:'""',computed:!1}},classNameLoaderUserName:{required:!1,tsType:{name:"string"},description:"The class name for Name the component.",defaultValue:{value:'""',computed:!1}},classNameLoaderUserEmail:{required:!1,tsType:{name:"string"},description:"The class name for email the component.",defaultValue:{value:'""',computed:!1}}}}},"./src/Loader/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aH:()=>_Current__WEBPACK_IMPORTED_MODULE_0__.a,d1:()=>_Spinner__WEBPACK_IMPORTED_MODULE_1__.d});var _Current__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Loader/Current/index.tsx"),_Spinner__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Loader/Spinner/index.tsx");__webpack_require__("./src/Loader/Line/index.tsx"),__webpack_require__("./src/Loader/User/index.tsx")},"./src/Modal/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>_Modal__WEBPACK_IMPORTED_MODULE_1__.a});__webpack_require__("./src/Modal/Base/index.tsx");var _Modal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Modal/Modal/index.tsx")}}]);