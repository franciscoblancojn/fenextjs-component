"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[3740],{"./src/Breadcrumb/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Index_parameters,_Index_parameters_docs,_Index_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Breadcrumb/index.tsx"));const __WEBPACK_DEFAULT_EXPORT__={title:"Breadcrumb/Breadcrumb",component:_index__WEBPACK_IMPORTED_MODULE_2__.Q},Index=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.Q,{...args})).bind({});Index.args={links:[{href:"#",children:"Home"},{href:"#",children:"Users"},{href:"#",children:"Juan",onClick:()=>{alert("Alert onClick Juan")}},{href:"#",children:"Edit"}]},Index.parameters={...Index.parameters,docs:{...null===(_Index_parameters=Index.parameters)||void 0===_Index_parameters?void 0:_Index_parameters.docs,source:{originalSource:"args => <Breadcrumb {...args} />",...null===(_Index_parameters1=Index.parameters)||void 0===_Index_parameters1||null===(_Index_parameters_docs=_Index_parameters1.docs)||void 0===_Index_parameters_docs?void 0:_Index_parameters_docs.source}}};const __namedExportsOrder=["Index"]},"./src/Breadcrumb/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>Breadcrumb});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),fenextjs_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fenextjs-functions/cjs/index.js"),next_link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Breadcrumb=param=>{let{className="",classNameItem="",classNameLink="",links,_t}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{className:"fenext-breadcrumb ".concat(className," "),children:links.map(((link,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"fenext-breadcrumb-item ".concat(classNameItem),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2___default(),{href:link.href,legacyBehavior:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"fenext-breadcrumb-item-link ".concat(classNameLink),onClick:null==link?void 0:link.onClick,children:(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_1__._tValidate)(link.children,_t)})})},i)})))})})};Breadcrumb.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{links:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbLinkProps"}],raw:"BreadcrumbLinkProps[]"},description:"List of the Links for Breadcrymb."},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameItem:{required:!1,tsType:{name:"string"},description:"The class name for the Items.",defaultValue:{value:'""',computed:!1}},classNameLink:{required:!1,tsType:{name:"string"},description:"The class name for the Link.",defaultValue:{value:'""',computed:!1}}},composes:["_TProps"]}}}]);