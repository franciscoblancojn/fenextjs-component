"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[3740],{"./src/Breadcrumb/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Breadcrumb/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Breadcrumb/Breadcrumb",component:_index__WEBPACK_IMPORTED_MODULE_1__.Q};var Index=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__.Q,args)}.bind({});Index.args={links:[{href:"#",children:"Home"},{href:"#",children:"Users"},{href:"#",children:"Juan",onClick:function onClick(){alert("Alert onClick Juan")}},{href:"#",children:"Edit"}]},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <Breadcrumb {...args} />",...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Breadcrumb/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>Breadcrumb});var fenextjs_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fenextjs-functions/cjs/index.js"),next_link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Breadcrumb=function Breadcrumb(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$classNameItem=_ref.classNameItem,classNameItem=void 0===_ref$classNameItem?"":_ref$classNameItem,_ref$classNameLink=_ref.classNameLink,classNameLink=void 0===_ref$classNameLink?"":_ref$classNameLink,links=_ref.links,_t=_ref._t;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("ul",{className:"fenext-breadcrumb ".concat(className," ")},links.map((function(link,i){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("li",{key:i,className:"fenext-breadcrumb-item ".concat(classNameItem)},__jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default(),{href:link.href,legacyBehavior:!0},__jsx("a",{className:"fenext-breadcrumb-item-link ".concat(classNameLink),onClick:null==link?void 0:link.onClick},(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_1__._tValidate)(link.children,_t)))))}))))};Breadcrumb.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{links:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbLinkProps"}],raw:"BreadcrumbLinkProps[]"},description:"List of the Links for Breadcrymb."},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameItem:{required:!1,tsType:{name:"string"},description:"The class name for the Items.",defaultValue:{value:'""',computed:!1}},classNameLink:{required:!1,tsType:{name:"string"},description:"The class name for the Link.",defaultValue:{value:'""',computed:!1}}},composes:["_TProps"]}}}]);