"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[7451],{"./src/Modal/Base/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Modal/Base/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Modal/ModalBase",component:_index__WEBPACK_IMPORTED_MODULE_1__.e};var Profile=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__.e,args)};Profile.displayName="Profile";var Index=Profile.bind({});Index.args={active:!0,children:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("h1",null,"Title"),__jsx("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias error illo iusto, ex esse ullam aliquam officia praesentium labore reprehenderit nostrum quidem exercitationem blanditiis est illum pariatur veritatis magni corporis!"))},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <ModalBase {...args} />",...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Modal/Base/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ModalBase});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fenextjs_svg_cjs_close__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fenextjs-svg/cjs/close/index.js"),fenextjs_functions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-functions/cjs/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,ModalBase=function ModalBase(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$classNameBg=_ref.classNameBg,classNameBg=void 0===_ref$classNameBg?"":_ref$classNameBg,_ref$classNameContent=_ref.classNameContent,classNameContent=void 0===_ref$classNameContent?"":_ref$classNameContent,_ref$classNameClose=_ref.classNameClose,classNameClose=void 0===_ref$classNameClose?"":_ref$classNameClose,_ref$active=_ref.active,active=void 0!==_ref$active&&_ref$active,_ref$type=_ref.type,type=void 0===_ref$type?"center":_ref$type,onClose=_ref.onClose,children=_ref.children,_t=_ref._t,uuid=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(new Date).getTime()}),[active]);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("dialog",{open:active,className:"fenext-modal-base-dialog fenext-modal-base-dialog-".concat(active?"active":"inactive")},__jsx("div",{className:"fenext-modal-base-bg fenext-modal-base-bg-".concat(active?"active":"inactive"," ").concat(classNameBg," ")}),__jsx("div",{className:"fenext-modal-base fenext-modal-base-bg-close fenext-modal-base-bg-close-".concat(uuid," fenext-modal-base-").concat(active?"active":"inactive"," fenext-modal-base-").concat(type," ").concat(className," "),onClick:function onClick(e){e.target.classList.value.includes("fenext-modal-base-bg-close-".concat(uuid))&&(null==onClose||onClose())}},__jsx("div",{className:"fenext-modal-base-content ".concat(classNameContent," ")},(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_2__._tValidate)(children,_t))),__jsx("div",{onClick:onClose,className:"fenext-modal-base-close fenext-modal-base-close-".concat(type,"  fenext-modal-base-close-").concat(active?"active":"inactive"," ").concat(classNameClose)},__jsx(fenextjs_svg_cjs_close__WEBPACK_IMPORTED_MODULE_1__.Close,null))))};try{ModalBase.displayName="ModalBase",ModalBase.__docgenInfo={description:"",displayName:"ModalBase",props:{active:{defaultValue:{value:"false"},description:"If active modal.",name:"active",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"center"},description:"Type of modal.",name:"type",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'},{value:'"top"'},{value:'"bottom"'},{value:'"full"'},{value:'"layout-grid"'}]}},onClose:{defaultValue:null,description:"onClose ModalBase.",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:{value:""},description:"The class name for the component.",name:"className",required:!1,type:{name:"string"}},classNameBg:{defaultValue:{value:""},description:"The class name for Bg the component.",name:"classNameBg",required:!1,type:{name:"string"}},classNameClose:{defaultValue:{value:""},description:"The class name for Icon Close the component.",name:"classNameClose",required:!1,type:{name:"string"}},classNameContent:{defaultValue:{value:""},description:"The class name for Content the component.",name:"classNameContent",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Modal/Base/index.tsx#ModalBase"]={docgenInfo:ModalBase.__docgenInfo,name:"ModalBase",path:"src/Modal/Base/index.tsx#ModalBase"})}catch(__react_docgen_typescript_loader_error){}}}]);