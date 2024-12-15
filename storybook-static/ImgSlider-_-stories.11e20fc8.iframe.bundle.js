"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[2279],{"./src/ImgSlider/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ImgSlider/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Img/ImgSlider",component:_index__WEBPACK_IMPORTED_MODULE_1__.f};var Index=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__.f,args)}.bind({});Index.args={imgs:[{name:"Img",src:"https://images3.alphacoders.com/273/27387.jpg"},{name:"Img",src:"https://images3.alphacoders.com/409/40949.jpg"},{name:"Img",src:"https://images4.alphacoders.com/585/58534.jpg"},{name:"Img",src:"https://images3.alphacoders.com/768/76885.jpg"},{name:"Img",src:"https://images4.alphacoders.com/672/67298.jpg"},{name:"Img",src:"https://images3.alphacoders.com/176/176767.jpg"},{name:"Img",src:"https://images.alphacoders.com/145/145923.jpg"}]},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <ImgSlider {...args} />",...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Img/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Img});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Loader_Line__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Loader/Line/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Img=function Img(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$classNameImg=_ref.classNameImg,classNameImg=void 0===_ref$classNameImg?"":_ref$classNameImg,id=_ref.id,_ref$name=_ref.name,name=void 0===_ref$name?"":_ref$name,alt=_ref.alt,src=_ref.src,_ref$srcMin=_ref.srcMin1920,srcMin1920=void 0===_ref$srcMin?void 0:_ref$srcMin,_ref$srcMin2=_ref.srcMin1680,srcMin1680=void 0===_ref$srcMin2?void 0:_ref$srcMin2,_ref$srcMin3=_ref.srcMin1440,srcMin1440=void 0===_ref$srcMin3?void 0:_ref$srcMin3,_ref$srcMin4=_ref.srcMin1024,srcMin1024=void 0===_ref$srcMin4?void 0:_ref$srcMin4,_ref$srcMin5=_ref.srcMin992,srcMin992=void 0===_ref$srcMin5?void 0:_ref$srcMin5,_ref$srcMin6=_ref.srcMin768,srcMin768=void 0===_ref$srcMin6?void 0:_ref$srcMin6,_ref$srcMin7=_ref.srcMin575,srcMin575=void 0===_ref$srcMin7?void 0:_ref$srcMin7,_ref$imgIf=_ref.imgIf404,imgIf404=void 0===_ref$imgIf?void 0:_ref$imgIf,_ref$layers=_ref.layers,layers=void 0===_ref$layers?[]:_ref$layers,onErrorImg_=_ref.onErrorImg,onClick=_ref.onClick,_ref$loader=_ref.loader,loader=void 0!==_ref$loader&&_ref$loader,onLoad=_ref.onLoad;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("picture",{className:"fenext-picture ".concat(className," id-").concat(id),onClick},srcMin1920?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("source",{srcSet:"".concat(srcMin1920),media:"(min-width: 1920px)"})):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),srcMin1680?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("source",{srcSet:"".concat(srcMin1680),media:"(min-width: 1680px)"})):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),srcMin1440?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("source",{srcSet:"".concat(srcMin1440),media:"(min-width: 1440px)"})):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),srcMin1024?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("source",{srcSet:"".concat(srcMin1024),media:"(min-width: 1024px)"})):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),srcMin992?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("source",{srcSet:"".concat(srcMin992),media:"(min-width: 992px)"})):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),srcMin768?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("source",{srcSet:"".concat(srcMin768),media:"(min-width: 768px)"})):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),srcMin575?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("source",{srcSet:"".concat(srcMin575),media:"(min-width: 575px)"})):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),loader&&__jsx(_Loader_Line__WEBPACK_IMPORTED_MODULE_1__.a,null),__jsx("img",{src:"".concat(src),alt:null!=alt?alt:name,"data-src":"".concat(src),"data-name":name,"data-alt":alt,className:"fenext-img ".concat(classNameImg),onError:function onErrorImg(e){var img=e.target;imgIf404&&(img.src=imgIf404),null==onErrorImg_||onErrorImg_(e)},onLoad}),null==layers?void 0:layers.map((function(e,i){return __jsx("div",{key:i,className:"fenext-img-layer",style:e})}))))};Img.__docgenInfo={description:"",methods:[],displayName:"Img",props:{imgIf404:{required:!1,tsType:{name:"string"},description:"Url of Img if img not load.",defaultValue:{value:"undefined",computed:!0}},layers:{required:!1,tsType:{name:"Array",elements:[{name:"Pick",elements:[{name:"ReactCSSProperties",raw:"React.CSSProperties"},{name:"union",raw:'"background" | "mixBlendMode" | "filter" | "opacity"',elements:[{name:"literal",value:'"background"'},{name:"literal",value:'"mixBlendMode"'},{name:"literal",value:'"filter"'},{name:"literal",value:'"opacity"'}]}],raw:'Pick<\n    React.CSSProperties,\n    "background" | "mixBlendMode" | "filter" | "opacity"\n>'}],raw:'Pick<\n    React.CSSProperties,\n    "background" | "mixBlendMode" | "filter" | "opacity"\n>[]'},description:"Layers for Img.",defaultValue:{value:"[]",computed:!1}},onErrorImg:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: SyntheticEvent<HTMLImageElement, Event>) => void",signature:{arguments:[{type:{name:"SyntheticEvent",elements:[{name:"HTMLImageElement"},{name:"Event"}],raw:"SyntheticEvent<HTMLImageElement, Event>"},name:"e"}],return:{name:"void"}}},description:"onErrorImg."},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"onClick."},loader:{required:!1,tsType:{name:"boolean"},description:"loader.",defaultValue:{value:"false",computed:!1}},onLoad:{required:!1,tsType:{name:"ReactReactEventHandler",raw:"React.ReactEventHandler<HTMLImageElement>",elements:[{name:"HTMLImageElement"}]},description:"executes when image loads"},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameImg:{required:!1,tsType:{name:"string"},description:"The class name for the component img.",defaultValue:{value:'""',computed:!1}},name:{defaultValue:{value:'""',computed:!1},required:!1},srcMin1920:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin1680:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin1440:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin1024:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin992:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin768:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin575:{defaultValue:{value:"undefined",computed:!0},required:!1}},composes:["ImgDataProps"]}},"./src/ImgSlider/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>ImgSlider});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Img__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Img/index.tsx"),_Steps__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Steps/index.tsx"),fenextjs_svg_cjs_PaginationNext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-svg/cjs/PaginationNext/index.js"),fenextjs_svg_cjs_PaginationPre__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/fenextjs-svg/cjs/PaginationPre/index.js"),_excluded=["className","imgs","defaultStep","setStep","step"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,ImgSlider=function ImgSlider(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,imgs=_ref.imgs,_ref$defaultStep=_ref.defaultStep,defaultStep=void 0===_ref$defaultStep?0:_ref$defaultStep,setStepProps=_ref.setStep,stepProps=_ref.step,props=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(_ref,_excluded),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultStep),step__=_useState[0],setStep__=_useState[1],step=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return null!=stepProps?stepProps:step__}),[stepProps,step__]);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fenext-img-slider ".concat(className," ")},__jsx(_Steps__WEBPACK_IMPORTED_MODULE_2__.g,(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__.A)({items:imgs.map((function(e,i){var _e$name;return{label:null!==(_e$name=e.name)&&void 0!==_e$name?_e$name:"",content:__jsx(_Img__WEBPACK_IMPORTED_MODULE_1__.E,(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__.A)({key:i},e))}})),stepPos:"top",step,onSetStep:function setStep(e){setStep__(e),null==setStepProps||setStepProps(e)},btnNext:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(fenextjs_svg_cjs_PaginationNext__WEBPACK_IMPORTED_MODULE_3__.SvgPaginationNext,null)),btnPrev:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(fenextjs_svg_cjs_PaginationPre__WEBPACK_IMPORTED_MODULE_4__.SvgPaginationPre,null)),useDogs:!0},props))))};ImgSlider.__docgenInfo={description:"",methods:[],displayName:"ImgSlider",props:{imgs:{required:!0,tsType:{name:"Array",elements:[{name:"ImgProps"}],raw:"ImgProps[]"},description:"List of Img."},defaultStep:{required:!1,tsType:{name:"number"},description:"defaultStep of Img.",defaultValue:{value:"0",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"step of Img."},setStep:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: number) => void",signature:{arguments:[{type:{name:"number"},name:"e"}],return:{name:"void"}}},description:"step of Img."},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}},composes:["_TProps"]}},"./node_modules/fenextjs-svg/cjs/PaginationNext/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.SvgPaginationNext=void 0;const react_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs").__importDefault(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"));exports.SvgPaginationNext=({className=""})=>react_1.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",className:`fenext_svg ${className}`},react_1.default.createElement("path",{d:"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z",fill:"currentColor"}))},"./node_modules/fenextjs-svg/cjs/PaginationPre/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.SvgPaginationPre=void 0;const react_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs").__importDefault(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"));exports.SvgPaginationPre=({className=""})=>react_1.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",className:`fenext_svg ${className}`},react_1.default.createElement("path",{d:"M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z",fill:"currentColor"}))}}]);