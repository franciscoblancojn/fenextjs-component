"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[3508],{"./src/Input/SelectCountryMultiple/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Index_parameters,_Index_parameters_docs,_Index_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Input/SelectCountryMultiple/index.tsx"));const __WEBPACK_DEFAULT_EXPORT__={title:"Input/InputSelectCountryMultiple",component:_index__WEBPACK_IMPORTED_MODULE_2__.R},Index=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.R,{...args,children:"Test Children"})).bind({});Index.args={},Index.parameters={...Index.parameters,docs:{...null===(_Index_parameters=Index.parameters)||void 0===_Index_parameters?void 0:_Index_parameters.docs,source:{originalSource:"args => <InputSelectCountryMultiple {...args}>Test Children</InputSelectCountryMultiple>",...null===(_Index_parameters1=Index.parameters)||void 0===_Index_parameters1||null===(_Index_parameters_docs=_Index_parameters1.docs)||void 0===_Index_parameters_docs?void 0:_Index_parameters_docs.source}}};const __namedExportsOrder=["Index"]},"./src/Input/SelectCountryMultiple/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>InputSelectCountryMultiple});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_SelectMultipleT__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Input/SelectMultipleT/index.tsx"),country_state_city_nextjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/country-state-city-nextjs/cjs/index.js");const InputSelectCountryMultiple=param=>{let{...props}=param;const[loader,setLoader]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[options,setOptions]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(async()=>{const countrys=await(0,country_state_city_nextjs__WEBPACK_IMPORTED_MODULE_3__.getDataCountrys)();setOptions(countrys.map((e=>({...e,img:"".concat((0,country_state_city_nextjs__WEBPACK_IMPORTED_MODULE_3__.getRuteCountryImg)(e))})))),setLoader(!1)})()}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SelectMultipleT__WEBPACK_IMPORTED_MODULE_2__.X,{...props,useTOption:!0,options,loader,useLoader:!0,onParse:e=>{var _e_text,_e_id;return{...e,text:null!==(_e_text=null==e?void 0:e.text)&&void 0!==_e_text?_e_text:"",id:null!==(_e_id=null==e?void 0:e.id)&&void 0!==_e_id?_e_id:"",data:e}}})})};InputSelectCountryMultiple.__docgenInfo={description:"",methods:[],displayName:"InputSelectCountryMultiple",composes:["Omit"]}}}]);