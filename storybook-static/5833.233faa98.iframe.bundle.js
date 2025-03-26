"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[5833],{"./src/Input/SelectT/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>InputSelectT});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Select__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Input/Select/index.tsx"));const InputSelectT=param=>{let{defaultValue,value,options,onChange,onParse,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Select__WEBPACK_IMPORTED_MODULE_2__.$,{...props,defaultValue:defaultValue?onParse(defaultValue):void 0,value:value?onParse(value):void 0,options:options.map(onParse),onChangeData:onChange})})};InputSelectT.__docgenInfo={description:"",methods:[],displayName:"InputSelectT",props:{defaultValue:{required:!1,tsType:{name:"T"},description:"Default Options of select."},value:{required:!1,tsType:{name:"T"},description:"Value Options of select."},options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Options of select."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v?: T) => void",signature:{arguments:[{type:{name:"T"},name:"v"}],return:{name:"void"}}},description:"Function to call when the input value changes."},onParse:{required:!0,tsType:{name:"signature",type:"function",raw:"(v?: T) => InputSelectItemOptionBaseProps<T>",signature:{arguments:[{type:{name:"T"},name:"v"}],return:{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"}}},description:"Function for converter T to InputSelectItemOptionBaseProps<T>"}},composes:["Omit"]}},"./src/Pagination/PaginationAll/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>Pagination});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_PaginationItemPage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Pagination/PaginationItemPage/index.tsx"),_PaginationNPage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Pagination/PaginationNPage/index.tsx"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js");const Pagination=param=>{let{className="",PaginationItemPageProps,PaginationNPageProps={},showItemPage=!0,showNPage=!0,disabled=!1,paginationName,...props}=param;const{_t}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_4__.use_T)({...props}),minPage=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{var _this;let m=1/0;var _PaginationNPageProps_options;return null===(_this=null!==(_PaginationNPageProps_options=null==PaginationNPageProps?void 0:PaginationNPageProps.options)&&void 0!==_PaginationNPageProps_options?_PaginationNPageProps_options:_PaginationNPage__WEBPACK_IMPORTED_MODULE_3__.p)||void 0===_this||_this.forEach((e=>{const n=parseInt("".concat(null!=e?e:""));n&&!Number.isNaN(n)&&(m=Math.min(m,n))})),m}),[null==PaginationNPageProps?void 0:PaginationNPageProps.options]);var _PaginationItemPageProps_nItems;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fenext-pagination ".concat(className),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-pagination-content-item-page ".concat(className),children:showItemPage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItemPage__WEBPACK_IMPORTED_MODULE_2__.H,{...PaginationItemPageProps,_t,disabled,paginationName})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-pagination-content-n-page ".concat(className),children:showNPage&&minPage<(null!==(_PaginationItemPageProps_nItems=null==PaginationItemPageProps?void 0:PaginationItemPageProps.nItems)&&void 0!==_PaginationItemPageProps_nItems?_PaginationItemPageProps_nItems:minPage+1)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationNPage__WEBPACK_IMPORTED_MODULE_3__.q,{...PaginationNPageProps,...props,_t,disabled,paginationName})})]})};Pagination.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{className:{required:!1,tsType:{name:"string"},description:"CSS class for the main container of the pagination.",defaultValue:{value:'""',computed:!1}},showItemPage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showNPage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},PaginationItemPageProps:{required:!0,tsType:{name:"Omit",elements:[{name:"PaginationItemPageProps"},{name:"literal",value:'"paginationName"'}],raw:'Omit<PaginationItemPageProps, "paginationName">'},description:""},PaginationNPageProps:{required:!1,tsType:{name:"Omit",elements:[{name:"PaginationNPageProps"},{name:"literal",value:'"paginationName"'}],raw:'Omit<PaginationNPageProps, "paginationName">'},description:"",defaultValue:{value:"{}",computed:!1}},paginationName:{required:!1,tsType:{name:"string"},description:""}},composes:["_TProps"]}},"./src/Pagination/PaginationItemPage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>PaginationItemPage});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fenextjs_svg_cjs_PaginationDown__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-svg/cjs/PaginationDown/index.js"),fenextjs_svg_cjs_PaginationNext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-svg/cjs/PaginationNext/index.js"),fenextjs_svg_cjs_PaginationPre__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/fenextjs-svg/cjs/PaginationPre/index.js"),fenextjs_svg_cjs_PaginationUp__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/fenextjs-svg/cjs/PaginationUp/index.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js");const PaginationItemPage=param=>{let{classNameContent="",classNameUp="",classNamePre="",classNameCurrent="",classNameCurrentItem="",classNameNext="",classNameDown="",paginationName,icons={up:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fenextjs_svg_cjs_PaginationUp__WEBPACK_IMPORTED_MODULE_5__.SvgPaginationUp,{}),pre:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fenextjs_svg_cjs_PaginationPre__WEBPACK_IMPORTED_MODULE_4__.SvgPaginationPre,{}),next:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fenextjs_svg_cjs_PaginationNext__WEBPACK_IMPORTED_MODULE_3__.SvgPaginationNext,{}),down:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fenextjs_svg_cjs_PaginationDown__WEBPACK_IMPORTED_MODULE_2__.SvgPaginationDown,{})},nItems,disabled=!1,onChange,hiddenIfNItemsSmallerThanOrEqualNItemsPage=!0}=param;const{onChangeData,data:{page=0,npage:nItemsPage=10}}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_6__.usePagination)({name:paginationName,onChage:e=>{var _e_page;null==onChange||onChange(null!==(_e_page=null==e?void 0:e.page)&&void 0!==_e_page?_e_page:0)}}),maxPage=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>0==nItemsPage?0:Math.ceil(nItems/nItemsPage)-1),[nItems,nItemsPage]),setPage=v=>{if(disabled)return;const Value=(v=>Math.max(0,Math.min(maxPage,v)))(v);onChangeData("page")(Value)},onSetPage=e=>()=>setPage(e),addPage=add=>()=>{setPage(page+add)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fenext-pagination-item-page ".concat(hiddenIfNItemsSmallerThanOrEqualNItemsPage&&nItems<=nItemsPage?"fenext-pagination-item-page-hidden":""," ").concat(classNameContent," "),children:[page>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-up ".concat(classNameUp),onClick:onSetPage(0),children:icons.up},"fenext-pagination-item-page-up"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-pre ".concat(classNamePre),onClick:addPage(-1),children:icons.pre},"fenext-pagination-item-page-pre")]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fenext-pagination-item-page-current ".concat(classNameCurrent),children:[page>2?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-current-item-init ".concat(classNameCurrentItem),onClick:onSetPage(0),children:1},"fenext-pagination-item-page-current-item-init"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-current-item-dog ".concat(classNameCurrentItem),children:"..."},"fenext-pagination-item-page-current-item-init-dog")]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}),new Array(5).fill(1).map(((e,i)=>{const n=e*i-2+page;return n<0||n>maxPage?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-pagination-item-page-current-item ".concat(n==page?"fenext-pagination-item-page-current-item-active":""," ").concat(classNameCurrentItem),onClick:onSetPage(n),children:n+1},"fenext-pagination-item-page-current-item-".concat(i))})})),page<maxPage-2?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-current-item-dog ".concat(classNameCurrentItem),children:"..."},"fenext-pagination-item-page-current-item-final-dog"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-pagination-item-page-current-item  fenext-pagination-item-page-current-item-final ".concat(classNameCurrentItem),onClick:onSetPage(maxPage),children:maxPage+1},"fenext-pagination-item-page-current-item-final")]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{})]}),page<maxPage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-next ".concat(classNameNext),onClick:addPage(1),children:icons.next},"fenext-pagination-item-page-next"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-pagination-item-page-current-item fenext-pagination-item-page-down ".concat(classNameDown),onClick:onSetPage(maxPage),children:icons.down},"fenext-pagination-item-page-down")]})]})};PaginationItemPage.__docgenInfo={description:"",methods:[],displayName:"PaginationItemPage",props:{classNameContent:{required:!1,tsType:{name:"string"},description:"CSS class for the main container of the pagination.",defaultValue:{value:'""',computed:!1}},classNameUp:{required:!1,tsType:{name:"string"},description:'CSS class for the "Go Up" button.',defaultValue:{value:'""',computed:!1}},classNamePre:{required:!1,tsType:{name:"string"},description:"CSS class for the previous button.",defaultValue:{value:'""',computed:!1}},classNameCurrent:{required:!1,tsType:{name:"string"},description:"CSS class for the current page number.",defaultValue:{value:'""',computed:!1}},classNameCurrentItem:{required:!1,tsType:{name:"string"},description:"CSS class for the current item page number.",defaultValue:{value:'""',computed:!1}},classNameNext:{required:!1,tsType:{name:"string"},description:"CSS class for the next button.",defaultValue:{value:'""',computed:!1}},classNameDown:{required:!1,tsType:{name:"string"},description:'CSS class for the "Go Down" button.',defaultValue:{value:'""',computed:!1}},icons:{required:!1,tsType:{name:"signature",type:"object",raw:'{\n    /**\n     * Custom icon for the "Go Up" button.\n     */\n    up?: ReactNode;\n\n    /**\n     * Custom icon for the previous button.\n     */\n    pre?: ReactNode;\n\n    /**\n     * Custom icon for the next button.\n     */\n    next?: ReactNode;\n\n    /**\n     * Custom icon for the "Go Down" button.\n     */\n    down?: ReactNode;\n}',signature:{properties:[{key:"up",value:{name:"ReactNode",required:!1},description:'Custom icon for the "Go Up" button.'},{key:"pre",value:{name:"ReactNode",required:!1},description:"Custom icon for the previous button."},{key:"next",value:{name:"ReactNode",required:!1},description:"Custom icon for the next button."},{key:"down",value:{name:"ReactNode",required:!1},description:'Custom icon for the "Go Down" button.'}]}},description:"Custom icons for each button of the pagination.",defaultValue:{value:"{\n    up: <SvgPaginationUp />,\n    pre: <SvgPaginationPre />,\n    next: <SvgPaginationNext />,\n    down: <SvgPaginationDown />,\n}",computed:!1}},paginationName:{required:!1,tsType:{name:"string"},description:""},nItems:{required:!0,tsType:{name:"number"},description:"The total number of items to paginate"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},hiddenIfNItemsSmallerThanOrEqualNItemsPage:{required:!1,tsType:{name:"boolean"},description:"Hidden Pagination of nItems if smaller than or equal of nItemsPages.\n@default false",defaultValue:{value:"true",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"A callback function that is called when the page changes\n@param page - The new page number"}},composes:["_TProps"]}},"./src/Pagination/PaginationNPage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>PaginationNPageDefaultOptions,q:()=>PaginationNPage});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Input_SelectT__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Input/SelectT/index.tsx")),fenextjs_hook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js");const PaginationNPageDefaultOptions=[10,20,50,100],PaginationNPage=param=>{let{className="",options=PaginationNPageDefaultOptions,onChange,paginationName,disabled,...props}=param;const{setData,data:{npage=10}}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_3__.usePagination)({name:paginationName,onChage:e=>{var _e_npage;null==onChange||onChange(null!==(_e_npage=null==e?void 0:e.npage)&&void 0!==_e_npage?_e_npage:10)}});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input_SelectT__WEBPACK_IMPORTED_MODULE_2__.L,{...props,className:"fenext-pagination-npage ".concat(className),useItemMaxLengthShowOptions:!1,options,onChange:e=>{setData({page:0,npage:e})},isSelectChangeText:!1,value:npage,onParse:e=>({id:null!=e?e:"",text:"".concat(e),data:e}),disabled})};PaginationNPage.__docgenInfo={description:"",methods:[],displayName:"PaginationNPage",props:{className:{required:!1,tsType:{name:"string"},description:"CSS class name for the input component.",defaultValue:{value:'""',computed:!1}},classNameLabel:{required:!1,tsType:{name:"string"},description:"CSS class name for the input label."},classNameLabelError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error label."},classNameLabelOk:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation label."},classNameContentInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input container."},classNameInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input."},classNameInputEnabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the enabled input."},classNameInputDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the disabled input."},classNameIcon:{required:!1,tsType:{name:"string"},description:"CSS class name for the input icon."},classNameMaxLength:{required:!1,tsType:{name:"string"},description:""},classNameError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error message."},classNameOptions:{required:!1,tsType:{name:"string"},description:"CSS class name for the input options container."},classNameOption:{required:!1,tsType:{name:"string"},description:"CSS class name for each input option."},classNameOptionDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for a disabled input option."},classNameLoaderValidate:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation loader."},iconLoader:{required:!1,tsType:{name:"any"},description:"Icon to display while validating the input."},classNameOptionImg:{required:!1,tsType:{name:"string"},description:"CSS class name for the option img select."},classNameOptionDelete:{required:!1,tsType:{name:"string"},description:"CSS class name for the delete option select."},classNameSelect:{required:!1,tsType:{name:"string"},description:"CSS class name for the input select."},classNameList:{required:!1,tsType:{name:"string"},description:"CSS class name for the list options."},options:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"List NPage for select.",defaultValue:{value:"[10, 20, 50, 100]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(npage: number) => void",signature:{arguments:[{type:{name:"number"},name:"npage"}],return:{name:"void"}}},description:"onChange of nPage."},paginationName:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["_TProps"]}}}]);