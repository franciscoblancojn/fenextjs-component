"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[3753],{"./src/Print/Iframe/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Print/Iframe/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Print/Iframe",component:_index__WEBPACK_IMPORTED_MODULE_1__.A};var Index=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__.A,args)}.bind({});Index.args={url:"/",data:{},onComponent:function onComponent(_ref){var loader=_ref.loader;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",null,"aqui ",loader?"loader":""))}},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <PrintIframe {...args} />",...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Print/Iframe/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>PrintIframe});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_excluded=["className","onComponent"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,PrintIframe=function PrintIframe(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,onComponent=_ref.onComponent,props=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded),_usePrintIframe=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_1__.usePrintIframe)(props),loader=_usePrintIframe.loader,onPrint=_usePrintIframe.onPrint,COMPONENT=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return null==onComponent?void 0:onComponent({loader})}),[loader]);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fenext-print-iframe ".concat(className," "),onClick:onPrint},COMPONENT))};PrintIframe.__docgenInfo={description:"",methods:[],displayName:"PrintIframe",props:{onComponent:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: PrintIframeComponentProps) => ReactNode",signature:{arguments:[{type:{name:"PrintIframeComponentProps"},name:"data"}],return:{name:"ReactNode"}}},description:"The class name for the component."},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}},composes:["usePrintIframeProps"]}}}]);