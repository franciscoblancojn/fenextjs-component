"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[9248],{"./src/Pagination/PaginationItemPage/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Pagination/PaginationItemPage/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Pagination/PaginationItemPage",component:_index__WEBPACK_IMPORTED_MODULE_1__.H};var Profile=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__.H,args,"Test Children")};Profile.displayName="Profile";var Index=Profile.bind({});Index.args={nItems:501},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <PaginationItemPage {...args}>Test Children</PaginationItemPage>",...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Pagination/PaginationItemPage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>PaginationItemPage});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fenextjs_svg_cjs_Pagination__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fenextjs-svg/cjs/Pagination/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,PaginationItemPage=function PaginationItemPage(_ref){var _ref$classNameContent=_ref.classNameContent,classNameContent=void 0===_ref$classNameContent?"":_ref$classNameContent,_ref$classNameUp=_ref.classNameUp,classNameUp=void 0===_ref$classNameUp?"":_ref$classNameUp,_ref$classNamePre=_ref.classNamePre,classNamePre=void 0===_ref$classNamePre?"":_ref$classNamePre,_ref$classNameCurrent=_ref.classNameCurrent,classNameCurrent=void 0===_ref$classNameCurrent?"":_ref$classNameCurrent,_ref$classNameCurrent2=_ref.classNameCurrentItem,classNameCurrentItem=void 0===_ref$classNameCurrent2?"":_ref$classNameCurrent2,_ref$classNameNext=_ref.classNameNext,classNameNext=void 0===_ref$classNameNext?"":_ref$classNameNext,_ref$classNameDown=_ref.classNameDown,classNameDown=void 0===_ref$classNameDown?"":_ref$classNameDown,_ref$icons=_ref.icons,icons=void 0===_ref$icons?{up:__jsx(fenextjs_svg_cjs_Pagination__WEBPACK_IMPORTED_MODULE_1__.PaginationUp,null),pre:__jsx(fenextjs_svg_cjs_Pagination__WEBPACK_IMPORTED_MODULE_1__.PaginationPre,null),next:__jsx(fenextjs_svg_cjs_Pagination__WEBPACK_IMPORTED_MODULE_1__.PaginationNext,null),down:__jsx(fenextjs_svg_cjs_Pagination__WEBPACK_IMPORTED_MODULE_1__.PaginationDown,null)}:_ref$icons,_ref$defaultPage=_ref.defaultPage,defaultPage=void 0===_ref$defaultPage?0:_ref$defaultPage,nItems=_ref.nItems,_ref$nItemsPage=_ref.nItemsPage,nItemsPage=void 0===_ref$nItemsPage?10:_ref$nItemsPage,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,onChangePage=_ref.onChangePage,_ref$hiddenIfNItemsSm=_ref.hiddenIfNItemsSmallerThanOrEqualNItemsPage,hiddenIfNItemsSmallerThanOrEqualNItemsPage=void 0===_ref$hiddenIfNItemsSm||_ref$hiddenIfNItemsSm,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultPage),page=_useState[0],setPage_=_useState[1],maxPage=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return 0==nItemsPage?0:Math.ceil(nItems/nItemsPage)-1}),[nItems,nItemsPage]),setPage=function setPage(v){if(!disabled){var Value=function minMaxValue(v){return Math.max(0,Math.min(maxPage,v))}(v);setPage_(Value),null==onChangePage||onChangePage(Value)}},onSetPage=function onSetPage(e){return function(){return setPage(e)}},addPage=function addPage(add){return function(){setPage(page+add)}};return __jsx("div",{className:"fenext-pagination-item-page ".concat(hiddenIfNItemsSmallerThanOrEqualNItemsPage&&nItems<=nItemsPage?"fenext-pagination-item-page-hidden":""," ").concat(classNameContent," ")},page>0&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{key:"fenext-pagination-item-page-up",className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-up ".concat(classNameUp),onClick:onSetPage(0)},icons.up),__jsx("div",{key:"fenext-pagination-item-page-pre",className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-pre ".concat(classNamePre),onClick:addPage(-1)},icons.pre)),__jsx("div",{className:"fenext-pagination-item-page-current ".concat(classNameCurrent)},page>2?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{key:"fenext-pagination-item-page-current-item-init",className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-current-item-init ".concat(classNameCurrentItem),onClick:onSetPage(0)},1),__jsx("div",{key:"fenext-pagination-item-page-current-item-init-dog",className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-current-item-dog ".concat(classNameCurrentItem)},"...")):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),new Array(5).fill(1).map((function(e,i){var n=e*i-2+page;return n<0||n>maxPage?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{key:"fenext-pagination-item-page-current-item-".concat(i),className:"fenext-pagination-item-page-current-item ".concat(n==page?"fenext-pagination-item-page-current-item-active":""," ").concat(classNameCurrentItem),onClick:onSetPage(n)},n+1))})),page<maxPage-2?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{key:"fenext-pagination-item-page-current-item-final-dog",className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-current-item-dog ".concat(classNameCurrentItem)},"..."),__jsx("div",{key:"fenext-pagination-item-page-current-item-final",className:"fenext-pagination-item-page-current-item  fenext-pagination-item-page-current-item-final ".concat(classNameCurrentItem),onClick:onSetPage(maxPage)},maxPage+1)):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null)),page<maxPage&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{key:"fenext-pagination-item-page-next",className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-next ".concat(classNameNext),onClick:addPage(1)},icons.next),__jsx("div",{key:"fenext-pagination-item-page-down",className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-down ".concat(classNameDown),onClick:onSetPage(maxPage)},icons.down)))};PaginationItemPage.displayName="PaginationItemPage";try{PaginationItemPage.displayName="PaginationItemPage",PaginationItemPage.__docgenInfo={description:"",displayName:"PaginationItemPage",props:{classNameContent:{defaultValue:{value:""},description:"CSS class for the main container of the pagination.",name:"classNameContent",required:!1,type:{name:"string"}},classNameUp:{defaultValue:{value:""},description:'CSS class for the "Go Up" button.',name:"classNameUp",required:!1,type:{name:"string"}},classNamePre:{defaultValue:{value:""},description:"CSS class for the previous button.",name:"classNamePre",required:!1,type:{name:"string"}},classNameCurrent:{defaultValue:{value:""},description:"CSS class for the current page number.",name:"classNameCurrent",required:!1,type:{name:"string"}},classNameCurrentItem:{defaultValue:{value:""},description:"CSS class for the current item page number.",name:"classNameCurrentItem",required:!1,type:{name:"string"}},classNameNext:{defaultValue:{value:""},description:"CSS class for the next button.",name:"classNameNext",required:!1,type:{name:"string"}},classNameDown:{defaultValue:{value:""},description:'CSS class for the "Go Down" button.',name:"classNameDown",required:!1,type:{name:"string"}},icons:{defaultValue:{value:"{\n        up: <PaginationUp />,\n        pre: <PaginationPre />,\n        next: <PaginationNext />,\n        down: <PaginationDown />,\n    }"},description:"Custom icons for each button of the pagination.",name:"icons",required:!1,type:{name:"{ up?: any; pre?: any; next?: any; down?: any; }"}},defaultPage:{defaultValue:{value:"0"},description:"The default page to show when the component is mounted",name:"defaultPage",required:!1,type:{name:"number"}},nItems:{defaultValue:null,description:"The total number of items to paginate",name:"nItems",required:!0,type:{name:"number"}},nItemsPage:{defaultValue:{value:"10"},description:"The number of items to display per page",name:"nItemsPage",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"Whether the component is disabled",name:"disabled",required:!1,type:{name:"boolean"}},hiddenIfNItemsSmallerThanOrEqualNItemsPage:{defaultValue:{value:"true"},description:"Hidden Pagination of nItems if smaller than or equal of nItemsPages.",name:"hiddenIfNItemsSmallerThanOrEqualNItemsPage",required:!1,type:{name:"boolean"}},onChangePage:{defaultValue:null,description:"A callback function that is called when the page changes\n@param page - The new page number",name:"onChangePage",required:!1,type:{name:"((page: number) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Pagination/PaginationItemPage/index.tsx#PaginationItemPage"]={docgenInfo:PaginationItemPage.__docgenInfo,name:"PaginationItemPage",path:"src/Pagination/PaginationItemPage/index.tsx#PaginationItemPage"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/fenextjs-svg/cjs/Pagination/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.PaginationDown=exports.PaginationNext=exports.PaginationPre=exports.PaginationUp=void 0;const react_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs").__importDefault(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"));exports.PaginationUp=({className=""})=>react_1.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:`fenext_svg ${className}`},react_1.default.createElement("path",{d:"M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z",fill:"currentColor"}));exports.PaginationPre=({className=""})=>react_1.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",className:`fenext_svg ${className}`},react_1.default.createElement("path",{d:"M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z",fill:"currentColor"}));exports.PaginationNext=({className=""})=>react_1.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",className:`fenext_svg ${className}`},react_1.default.createElement("path",{d:"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z",fill:"currentColor"}));exports.PaginationDown=({className=""})=>react_1.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:`fenext_svg ${className}`},react_1.default.createElement("path",{d:"M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z",fill:"currentColor"}))}}]);