"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[1572],{"./node_modules/fenextjs-img-placeholder/cjs/_urlBase/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.FenextImgPlaceholderUrlBase=void 0,exports.FenextImgPlaceholderUrlBase=process?.env?.NEXT_PUBLIC_IMG_PLACEHOLDER??"https://fenextjs-img-placeholder.vercel.app"},"./node_modules/fenextjs-img-placeholder/cjs/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");tslib_1.__exportStar(__webpack_require__("./node_modules/fenextjs-img-placeholder/cjs/placeholder/index.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/fenextjs-img-placeholder/cjs/user/index.js"),exports)},"./node_modules/fenextjs-img-placeholder/cjs/placeholder/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.FenextImgPlaceholder=void 0;const _urlBase_1=__webpack_require__("./node_modules/fenextjs-img-placeholder/cjs/_urlBase/index.js");exports.FenextImgPlaceholder=`${_urlBase_1.FenextImgPlaceholderUrlBase}/placeholder.png`},"./node_modules/fenextjs-img-placeholder/cjs/user/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.FenextImgUserPlaceholder=void 0;const _urlBase_1=__webpack_require__("./node_modules/fenextjs-img-placeholder/cjs/_urlBase/index.js");exports.FenextImgUserPlaceholder=`${_urlBase_1.FenextImgPlaceholderUrlBase}/user.png`},"./src/Img/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,WithLayer:()=>WithLayer,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Img/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Img/Img",component:_index__WEBPACK_IMPORTED_MODULE_1__.E};var Profile=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__.E,args)},Index=Profile.bind({});Index.args={name:"Img",src:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg",srcMin768:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/02.jpg",srcMin1024:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/03.jpg"};var WithLayer=Profile.bind({});WithLayer.args={name:"Img",src:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg",srcMin768:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/02.jpg",srcMin1024:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/03.jpg",layers:[{background:"red",opacity:.5,mixBlendMode:"color"}]},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <Img {...args} />",...Index.parameters?.docs?.source}}},WithLayer.parameters={...WithLayer.parameters,docs:{...WithLayer.parameters?.docs,source:{originalSource:"args => <Img {...args} />",...WithLayer.parameters?.docs?.source}}};const __namedExportsOrder=["Index","WithLayer"]},"./src/Img/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Img});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Loader_Line__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Loader/Line/index.tsx"),fenextjs_img_placeholder__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-img-placeholder/cjs/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Img=function Img(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$classNameImg=_ref.classNameImg,classNameImg=void 0===_ref$classNameImg?"":_ref$classNameImg,id=_ref.id,_ref$name=_ref.name,name=void 0===_ref$name?"":_ref$name,alt=_ref.alt,src=_ref.src,_ref$srcMin=_ref.srcMin1920,srcMin1920=void 0===_ref$srcMin?void 0:_ref$srcMin,_ref$srcMin2=_ref.srcMin1680,srcMin1680=void 0===_ref$srcMin2?void 0:_ref$srcMin2,_ref$srcMin3=_ref.srcMin1440,srcMin1440=void 0===_ref$srcMin3?void 0:_ref$srcMin3,_ref$srcMin4=_ref.srcMin1024,srcMin1024=void 0===_ref$srcMin4?void 0:_ref$srcMin4,_ref$srcMin5=_ref.srcMin992,srcMin992=void 0===_ref$srcMin5?void 0:_ref$srcMin5,_ref$srcMin6=_ref.srcMin768,srcMin768=void 0===_ref$srcMin6?void 0:_ref$srcMin6,_ref$srcMin7=_ref.srcMin575,srcMin575=void 0===_ref$srcMin7?void 0:_ref$srcMin7,_ref$imgIf=_ref.imgIf404,imgIf404=void 0===_ref$imgIf?fenextjs_img_placeholder__WEBPACK_IMPORTED_MODULE_2__.FenextImgPlaceholder:_ref$imgIf,_ref$layers=_ref.layers,layers=void 0===_ref$layers?[]:_ref$layers,onErrorImg_=_ref.onErrorImg,onClick=_ref.onClick,_ref$loader=_ref.loader,loader=void 0!==_ref$loader&&_ref$loader,onLoad=_ref.onLoad;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("picture",{className:"fenext-picture ".concat(className," id-").concat(id),onClick},srcMin1920?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("source",{srcSet:"".concat(srcMin1920),media:"(min-width: 1920px)"})):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),srcMin1680?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("source",{srcSet:"".concat(srcMin1680),media:"(min-width: 1680px)"})):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),srcMin1440?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("source",{srcSet:"".concat(srcMin1440),media:"(min-width: 1440px)"})):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),srcMin1024?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("source",{srcSet:"".concat(srcMin1024),media:"(min-width: 1024px)"})):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),srcMin992?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("source",{srcSet:"".concat(srcMin992),media:"(min-width: 992px)"})):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),srcMin768?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("source",{srcSet:"".concat(srcMin768),media:"(min-width: 768px)"})):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),srcMin575?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("source",{srcSet:"".concat(srcMin575),media:"(min-width: 575px)"})):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),loader&&__jsx(_Loader_Line__WEBPACK_IMPORTED_MODULE_1__.a,null),__jsx("img",{src:"".concat(src),alt:null!=alt?alt:name,"data-src":"".concat(src),"data-name":name,"data-alt":alt,className:"fenext-img ".concat(classNameImg),onError:function onErrorImg(e){var img=e.target;imgIf404&&(img.src=imgIf404),null==onErrorImg_||onErrorImg_(e)},onLoad}),null==layers?void 0:layers.map((function(e,i){return __jsx("div",{key:i,className:"fenext-img-layer",style:e})}))))};Img.__docgenInfo={description:"",methods:[],displayName:"Img",props:{imgIf404:{required:!1,tsType:{name:"string"},description:"Url of Img if img not load.",defaultValue:{value:"FenextImgPlaceholder",computed:!0}},layers:{required:!1,tsType:{name:"Array",elements:[{name:"Pick",elements:[{name:"ReactCSSProperties",raw:"React.CSSProperties"},{name:"union",raw:'"background" | "mixBlendMode" | "filter" | "opacity"',elements:[{name:"literal",value:'"background"'},{name:"literal",value:'"mixBlendMode"'},{name:"literal",value:'"filter"'},{name:"literal",value:'"opacity"'}]}],raw:'Pick<\n    React.CSSProperties,\n    "background" | "mixBlendMode" | "filter" | "opacity"\n>'}],raw:'Pick<\n    React.CSSProperties,\n    "background" | "mixBlendMode" | "filter" | "opacity"\n>[]'},description:"Layers for Img.",defaultValue:{value:"[]",computed:!1}},onErrorImg:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: SyntheticEvent<HTMLImageElement, Event>) => void",signature:{arguments:[{type:{name:"SyntheticEvent",elements:[{name:"HTMLImageElement"},{name:"Event"}],raw:"SyntheticEvent<HTMLImageElement, Event>"},name:"e"}],return:{name:"void"}}},description:"onErrorImg."},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"onClick."},loader:{required:!1,tsType:{name:"boolean"},description:"loader.",defaultValue:{value:"false",computed:!1}},onLoad:{required:!1,tsType:{name:"ReactReactEventHandler",raw:"React.ReactEventHandler<HTMLImageElement>",elements:[{name:"HTMLImageElement"}]},description:"executes when image loads"},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameImg:{required:!1,tsType:{name:"string"},description:"The class name for the component img.",defaultValue:{value:'""',computed:!1}},name:{defaultValue:{value:'""',computed:!1},required:!1},srcMin1920:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin1680:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin1440:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin1024:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin992:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin768:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin575:{defaultValue:{value:"undefined",computed:!0},required:!1}},composes:["ImgDataProps"]}},"./src/Loader/Line/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>LoaderLine});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,LoaderLine=function LoaderLine(_ref){var _ref$classNameLoaderL=_ref.classNameLoaderLine,classNameLoaderLine=void 0===_ref$classNameLoaderL?"":_ref$classNameLoaderL,_ref$height=_ref.height,height=void 0===_ref$height?20:_ref$height;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fenext-loader-line ".concat(classNameLoaderLine),style:(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)({},"--height","".concat(height/16,"rem"))}))};LoaderLine.__docgenInfo={description:"",methods:[],displayName:"LoaderLine",props:{height:{required:!1,tsType:{name:"number"},description:"Height of Line.",defaultValue:{value:"20",computed:!1}},classNameLoaderLine:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}}}}}]);