"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[3299],{"./src/Input/Color/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Input/Color/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Input/InputColor",component:_index__WEBPACK_IMPORTED_MODULE_1__.u};var Index=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__.u,args,"Test Children")}.bind({});Index.args={},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <InputColor {...args}>Test Children</InputColor>",...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Input/Color/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>InputColor});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,InputColor=function InputColor(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,defaultValue=_ref.defaultValue,value=_ref.value,onChange=_ref.onChange,disabled=_ref.disabled,_useData=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_1__.useData)(null!=defaultValue?defaultValue:"",{onChangeDataAfter:onChange}),data_=_useData.data,setData=_useData.setData,data=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return null!=value?value:data_}),[value,data_]);return __jsx("label",{className:"fenext-input-color ".concat(className)},__jsx("input",{type:"color",className:"fenext-input-color-input",value:data,onChange:function onChange(e){setData(e.target.value)},disabled}))};InputColor.__docgenInfo={description:"Component that renders a swich input.\nTakes an InputColorProps object as props.",methods:[],displayName:"InputColor",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},defaultValue:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: string) => void",signature:{arguments:[{type:{name:"string"},name:"data"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}}}}]);