"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[9044],{"./src/Print/Page/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Print/Page/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Print/Page",component:_index__WEBPACK_IMPORTED_MODULE_1__.$};var Index=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__.$,args)}.bind({});Index.args={url:"/",data:{},onComponent:function onComponent(_ref){var data=_ref.data,load=_ref.load;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",null,"Data:",JSON.stringify(null!=data?data:{})," ",load?"load":""))}},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <PrintPage {...args} />",...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Print/Page/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>PrintPage});var _home_francisco_work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_excluded=["className","onComponent"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,PrintPage=function PrintPage(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,onComponent=_ref.onComponent,props=(0,_home_francisco_work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded),_usePrintData=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_1__.usePrintData)(props),data=_usePrintData.data,load=_usePrintData.load,COMPONENT=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return null==onComponent?void 0:onComponent({data,load})}),[data,load]);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fenext-print-page ".concat(className," ")},COMPONENT))};PrintPage.__docgenInfo={description:"",methods:[],displayName:"PrintPage",props:{onComponent:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: PrintPageComponentProps<T>) => ReactNode",signature:{arguments:[{type:{name:"PrintPageComponentProps",elements:[{name:"T"}],raw:"PrintPageComponentProps<T>"},name:"data"}],return:{name:"ReactNode"}}},description:"The class name for the component."},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}},composes:["usePrintDataProps"]}}}]);