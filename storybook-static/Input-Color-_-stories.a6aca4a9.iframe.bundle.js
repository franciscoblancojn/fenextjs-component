"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[3299],{"./src/Input/Color/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Index_parameters,_Index_parameters_docs,_Index_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Input/Color/index.tsx"));const __WEBPACK_DEFAULT_EXPORT__={title:"Input/InputColor",component:_index__WEBPACK_IMPORTED_MODULE_2__.u},Index=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.u,{...args,children:"Test Children"})).bind({});Index.args={},Index.parameters={...Index.parameters,docs:{...null===(_Index_parameters=Index.parameters)||void 0===_Index_parameters?void 0:_Index_parameters.docs,source:{originalSource:"args => <InputColor {...args}>Test Children</InputColor>",...null===(_Index_parameters1=Index.parameters)||void 0===_Index_parameters1||null===(_Index_parameters_docs=_Index_parameters1.docs)||void 0===_Index_parameters_docs?void 0:_Index_parameters_docs.source}}};const __namedExportsOrder=["Index"]},"./src/Input/Color/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>InputColor});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js");const InputColor=param=>{let{className="",defaultValue,value,onChange,disabled}=param;const{data:data_,setData}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_2__.useData)(null!=defaultValue?defaultValue:"",{onChangeDataAfter:onChange}),data=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>null!=value?value:data_),[value,data_]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{className:"fenext-input-color ".concat(className),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"color",className:"fenext-input-color-input",value:data,onChange:e=>{setData(e.target.value)},disabled})})};InputColor.__docgenInfo={description:"Component that renders a swich input.\nTakes an InputColorProps object as props.",methods:[],displayName:"InputColor",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},defaultValue:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: string) => void",signature:{arguments:[{type:{name:"string"},name:"data"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}}}}]);