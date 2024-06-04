"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[5999],{"./src/Chat/Message/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary_parameters,_Primary_parameters_docs,_Primary_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Chat/Message/index.tsx"));const __WEBPACK_DEFAULT_EXPORT__={component:_index__WEBPACK_IMPORTED_MODULE_2__.c,title:"Chat/Message"},Primary=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.c,{...args})).bind({});Primary.args={},Primary.parameters={...Primary.parameters,docs:{...null===(_Primary_parameters=Primary.parameters)||void 0===_Primary_parameters?void 0:_Primary_parameters.docs,source:{originalSource:"args => <ChatMessage {...args} />",...null===(_Primary_parameters1=Primary.parameters)||void 0===_Primary_parameters1||null===(_Primary_parameters_docs=_Primary_parameters1.docs)||void 0===_Primary_parameters_docs?void 0:_Primary_parameters_docs.source}}};const __namedExportsOrder=["Primary"]},"./src/Chat/Message/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>ChatMessage});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),fenextjs_functions_cjs_parse_Date__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fenextjs-functions/cjs/parse/Date/index.js"),_Img__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Img/index.tsx"),_Text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Text/index.tsx"),fenextjs_img_placeholder__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/fenextjs-img-placeholder/cjs/index.js"));const ChatMessage=param=>{let{message,createdAt,account,right=!1,view=!1,loader,imgProps={imgIf404:fenextjs_img_placeholder__WEBPACK_IMPORTED_MODULE_5__.FenextImgUserPlaceholder}}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"\n                    fenext-chat-message\n                    fenext-chat-message-".concat(right?"right":"","\n                    fenext-chat-message-").concat(view?"viewed":"","\n                "),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-chat-message-img",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Img__WEBPACK_IMPORTED_MODULE_2__.E,{loader,src:"",...null==account?void 0:account.img,...imgProps})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fenext-chat-message-info",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fenext-chat-message-top",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_3__.E,{loader,nLineLoader:1,className:"fenext-chat-message-name",children:null==account?void 0:account.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_3__.E,{loader,nLineLoader:1,className:"fenext-chat-message-createdAt",children:createdAt&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,fenextjs_functions_cjs_parse_Date__WEBPACK_IMPORTED_MODULE_1__.parseDateToText)({date:createdAt,type:"date"}),", ",(0,fenextjs_functions_cjs_parse_Date__WEBPACK_IMPORTED_MODULE_1__.parseDateToText)({date:createdAt,type:"time"})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_3__.E,{loader,className:"fenext-chat-message-message",children:message})]})]})})};ChatMessage.__docgenInfo={description:"",methods:[],displayName:"ChatMessage",props:{id:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},loader:{required:!1,tsType:{name:"boolean"},description:""},right:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},account:{required:!1,tsType:{name:"Partial",elements:[{name:"UserProps"}],raw:"Partial<UserProps>"},description:""},message:{required:!1,tsType:{name:"ReactNode"},description:""},createdAt:{required:!1,tsType:{name:"Date"},description:""},view:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},imgProps:{required:!1,tsType:{name:"Partial",elements:[{name:"ImgProps"}],raw:"Partial<ImgProps>"},description:"",defaultValue:{value:"{\n    imgIf404: FenextImgUserPlaceholder,\n}",computed:!1}}}}},"./src/Img/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Img});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Loader_Line__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Loader/Line/index.tsx")),fenextjs_functions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-functions/cjs/index.js");const Img=param=>{let{className="",classNameImg="",id,name="",src,srcMin1920,srcMin1680,srcMin1440,srcMin1024,srcMin992,srcMin768,srcMin575,imgIf404="",layers=[],onErrorImg:onErrorImg_,onClick,loader=!1,_t}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("picture",{className:"fenext-picture ".concat(className," id-").concat(id),onClick,children:[srcMin1920?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source",{srcSet:"".concat(srcMin1920),media:"(min-width: 1920px)"})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}),srcMin1680?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source",{srcSet:"".concat(srcMin1680),media:"(min-width: 1680px)"})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}),srcMin1440?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source",{srcSet:"".concat(srcMin1440),media:"(min-width: 1440px)"})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}),srcMin1024?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source",{srcSet:"".concat(srcMin1024),media:"(min-width: 1024px)"})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}),srcMin992?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source",{srcSet:"".concat(srcMin992),media:"(min-width: 992px)"})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}),srcMin768?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source",{srcSet:"".concat(srcMin768),media:"(min-width: 768px)"})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}),srcMin575?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source",{srcSet:"".concat(srcMin575),media:"(min-width: 575px)"})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}),loader&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Loader_Line__WEBPACK_IMPORTED_MODULE_2__.a,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"".concat(src),"data-src":"".concat(src),alt:(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_3__._tValidate)(name,_t),className:"fenext-img ".concat(classNameImg),onError:e=>{e.target.src=imgIf404,null==onErrorImg_||onErrorImg_(e)}}),null==layers?void 0:layers.map(((e,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-img-layer",style:e},i)))]})})};Img.__docgenInfo={description:"",methods:[],displayName:"Img",props:{imgIf404:{required:!1,tsType:{name:"string"},description:"Url of Img if img not load.",defaultValue:{value:'""',computed:!1}},layers:{required:!1,tsType:{name:"Array",elements:[{name:"Pick",elements:[{name:"ReactCSSProperties",raw:"React.CSSProperties"},{name:"union",raw:'"background" | "mixBlendMode" | "filter" | "opacity"',elements:[{name:"literal",value:'"background"'},{name:"literal",value:'"mixBlendMode"'},{name:"literal",value:'"filter"'},{name:"literal",value:'"opacity"'}]}],raw:'Pick<\n    React.CSSProperties,\n    "background" | "mixBlendMode" | "filter" | "opacity"\n>'}],raw:'Pick<\n    React.CSSProperties,\n    "background" | "mixBlendMode" | "filter" | "opacity"\n>[]'},description:"Layers for Img.",defaultValue:{value:"[]",computed:!1}},onErrorImg:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: SyntheticEvent<HTMLImageElement, Event>) => void",signature:{arguments:[{type:{name:"SyntheticEvent",elements:[{name:"HTMLImageElement"},{name:"Event"}],raw:"SyntheticEvent<HTMLImageElement, Event>"},name:"e"}],return:{name:"void"}}},description:"onErrorImg."},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"onClick."},loader:{required:!1,tsType:{name:"boolean"},description:"loader.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameImg:{required:!1,tsType:{name:"string"},description:"The class name for the component img.",defaultValue:{value:'""',computed:!1}},name:{defaultValue:{value:'""',computed:!1},required:!1},srcMin1920:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin1680:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin1440:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin1024:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin992:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin768:{defaultValue:{value:"undefined",computed:!0},required:!1},srcMin575:{defaultValue:{value:"undefined",computed:!0},required:!1}},composes:["ImgDataProps","_TProps"]}},"./src/Loader/Line/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>LoaderLine});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const LoaderLine=param=>{let{classNameLoaderLine="",height=20}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-loader-line ".concat(classNameLoaderLine),style:{"--height":"".concat(height/16,"rem")}})})};LoaderLine.__docgenInfo={description:"",methods:[],displayName:"LoaderLine",props:{height:{required:!1,tsType:{name:"number"},description:"Height of Line.",defaultValue:{value:"20",computed:!1}},classNameLoaderLine:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}}}},"./src/Text/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Loader_Line__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Loader/Line/index.tsx")),fenextjs_functions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-functions/cjs/index.js");const Text=param=>{let{className="",tag="p",loader=!1,children,nLineLoader=3,_t}=param;const Tag=tag;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tag,{className:"fenext-text fenext-text-".concat(tag," ").concat(className," "),children:loader?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-text-loader",children:new Array(nLineLoader).fill((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Loader_Line__WEBPACK_IMPORTED_MODULE_2__.a,{}))})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_3__._tValidate)(children,_t)})})})};Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{tag:{required:!1,tsType:{name:"union",raw:'| "p"\n| "strong"\n| "small"\n| "em"\n| "b"\n| "del"\n| "i"\n| "mark"\n| "ins"\n| "sub"\n| "sup"',elements:[{name:"literal",value:'"p"'},{name:"literal",value:'"strong"'},{name:"literal",value:'"small"'},{name:"literal",value:'"em"'},{name:"literal",value:'"b"'},{name:"literal",value:'"del"'},{name:"literal",value:'"i"'},{name:"literal",value:'"mark"'},{name:"literal",value:'"ins"'},{name:"literal",value:'"sub"'},{name:"literal",value:'"sup"'}]},description:"The class name for the component.",defaultValue:{value:'"p"',computed:!1}},loader:{required:!1,tsType:{name:"boolean"},description:"The loader for the component.",defaultValue:{value:"false",computed:!1}},nLineLoader:{required:!1,tsType:{name:"number"},description:"The nLineLoader for the component.",defaultValue:{value:"3",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}},composes:["PropsWithChildren","_TProps"]}}}]);