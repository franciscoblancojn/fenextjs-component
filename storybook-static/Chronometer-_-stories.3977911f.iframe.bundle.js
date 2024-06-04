"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[5693],{"./src/Chronometer/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Index_parameters,_Index_parameters_docs,_Index_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Chronometer/index.tsx"));const __WEBPACK_DEFAULT_EXPORT__={title:"Chronometer/Chronometer",component:_index__WEBPACK_IMPORTED_MODULE_2__.z},Index=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.z,{...args})).bind({});Index.args={},Index.parameters={...Index.parameters,docs:{...null===(_Index_parameters=Index.parameters)||void 0===_Index_parameters?void 0:_Index_parameters.docs,source:{originalSource:"args => <Chronometer {...args} />",...null===(_Index_parameters1=Index.parameters)||void 0===_Index_parameters1||null===(_Index_parameters_docs=_Index_parameters1.docs)||void 0===_Index_parameters_docs?void 0:_Index_parameters_docs.source}}};const __namedExportsOrder=["Index"]},"./src/Chronometer/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Chronometer});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),fenextjs_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fenextjs-functions/cjs/index.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Chronometer=param=>{let{className="",time=100,min=0,onChange,optionsTimeToText={days:!1}}=param;const{data,setData}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_2__.useData)(time,{onChangeDataAfter:onChange}),onReduce=(0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((()=>{setData(Math.max(data-1,min))}),[data]);return(0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)((()=>{const intervalId=setInterval(onReduce,1e3);return()=>clearInterval(intervalId)}),[data]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-chronometer ".concat(className," "),children:(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_1__.getTimeToText)(new Date(0,0,0,0,0,data,0),optionsTimeToText)})})};Chronometer.__docgenInfo={description:"",methods:[],displayName:"Chronometer",props:{time:{required:!1,tsType:{name:"number"},description:"The time in seconds for the component.",defaultValue:{value:"100",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(time: number) => void",signature:{arguments:[{type:{name:"number"},name:"time"}],return:{name:"void"}}},description:"The change time for the component."},min:{required:!1,tsType:{name:"number"},description:"The min in seconds for the component.",defaultValue:{value:"0",computed:!1}},optionsTimeToText:{required:!1,tsType:{name:"getTimeToTextProps"},description:"The optionsTimeToText for the component.",defaultValue:{value:"{\n    days: false,\n}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}}}}}]);