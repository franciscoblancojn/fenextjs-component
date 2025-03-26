"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[3839],{"./node_modules/fenextjs-svg/cjs/Img/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.SvgImg=void 0;const react_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs").__importDefault(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"));exports.SvgImg=({className=""})=>react_1.default.createElement("svg",{className:`fenext_svg ${className}`,viewBox:"0 0 50 44",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react_1.default.createElement("path",{d:"M0 6.25C0 2.80273 2.80273 0 6.25 0H43.75C47.1973 0 50 2.80273 50 6.25V37.5C50 40.9473 47.1973 43.75 43.75 43.75H6.25C2.80273 43.75 0 40.9473 0 37.5V6.25ZM31.6211 16.6504C31.1816 16.0059 30.459 15.625 29.6875 15.625C28.916 15.625 28.1836 16.0059 27.7539 16.6504L19.2578 29.1113L16.6699 25.8789C16.2207 25.3223 15.5469 25 14.8438 25C14.1406 25 13.457 25.3223 13.0176 25.8789L6.76758 33.6914C6.20117 34.3945 6.09375 35.3613 6.48438 36.1719C6.875 36.9824 7.69531 37.5 8.59375 37.5H17.9688H21.0938H41.4062C42.2754 37.5 43.0762 37.0215 43.4766 36.25C43.877 35.4785 43.8281 34.5508 43.3398 33.8379L31.6211 16.6504ZM10.9375 15.625C13.5254 15.625 15.625 13.5254 15.625 10.9375C15.625 8.34961 13.5254 6.25 10.9375 6.25C8.34961 6.25 6.25 8.34961 6.25 10.9375C6.25 13.5254 8.34961 15.625 10.9375 15.625Z",fill:"currentColor"}))},"./src/Input/File/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>InputFile});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-functions/cjs/env_log/index.js"),fenextjs_functions_cjs_parse_File__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-functions/cjs/parse/File/index.js"),fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/fenextjs-hook/cjs/useData/index.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js");const InputFile=param=>{let{defaultValue={fileData:"",text:""},className="",classNameLabel="",classNameContent="",classNameInput="",classNameError="",onChange=v=>{(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_2__.env_log)(v,{name:"onChange File"})},accept=[],children,clearAfterUpload=!1,MAX_SIZE_FILE=5e6,parseProgress=e=>e,onChangeProgress,onChangeError,disabled=!1,textMaxSizeFile="File max size",capture,...props}=param;const{_t}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_5__.use_T)({...props}),{data:error,setData:setError}=(0,fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_4__.useData)(void 0,{onChangeDataAfter:onChangeError}),ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),{setData}=(0,fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_4__.useData)(defaultValue,{onChangeDataAfter:onChange}),{data:progress,setData:setProgress}=(0,fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_4__.useData)(-1,{onChangeDataAfter:onChangeProgress});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fenext-input-file ".concat(className),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{className:"fenext-input-file-label ".concat(classNameLabel),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-input-file-content ".concat(classNameContent),children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{ref,type:"file",className:"fenext-input-file-input ".concat(classNameInput),onChange:async e=>{try{setError(void 0);const file=e.target.files[0];if(!file)return setProgress(-2),void setData({fileData:"",text:""});if((null==file?void 0:file.size)>MAX_SIZE_FILE)throw"".concat(_t(textMaxSizeFile)," ").concat(MAX_SIZE_FILE/1e6,"mb");const nameFile=e.target.value.split("\\").pop();(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_2__.env_log)(nameFile,{name:"nameFile"});const extend=(nameFile=>{var _nameFile_split_pop;const extend=null===(_nameFile_split_pop=nameFile.split(".").pop())||void 0===_nameFile_split_pop?void 0:_nameFile_split_pop.toLowerCase();if(0!=accept.length&&extend&&!accept.map((e=>e.toLowerCase())).includes(extend))throw"File Invalid";return extend})(nameFile),result=await(async data=>{if(null==props?void 0:props.onUploadFile){const r=await(null==props?void 0:props.onUploadFile(data));if(r)return r}const fileData=await(0,fenextjs_functions_cjs_parse_File__WEBPACK_IMPORTED_MODULE_3__.parseFile)(data.file,{updateProgress:data.setProgress});return{file:null==data?void 0:data.file,fileData,base64:"".concat(null!=fileData?fileData:""),text:data.nameFile,extend:data.extend}})({file,setFileData:setData,nameFile,setProgress,extend:null!=extend?extend:""});setData(result),clearAfterUpload&&(e.target.value=null,e.target.type="text",setTimeout((()=>{e.target.type="file"}),100),(null==ref?void 0:ref.current)&&(ref.current.value=null))}catch(e){setError({message:"".concat(e),data:e}),setProgress(-2),setData({fileData:"",text:""}),(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_2__.env_log)(e,{name:"error upload file",color:"red"})}},accept:accept.map((e=>".".concat(e))).join(","),disabled,capture})]}),progress>0&&progress<100&&parseProgress(progress),error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-error ".concat(classNameError),children:error.message})]})})};InputFile.__docgenInfo={description:"",methods:[],displayName:"InputFile",props:{accept:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Allowed file types for the input element",defaultValue:{value:"[]",computed:!1}},defaultValue:{required:!1,tsType:{name:"FileProps"},description:"Default value for the input element",defaultValue:{value:'{\n    fileData: "",\n    text: "",\n}',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: FileProps) => void",signature:{arguments:[{type:{name:"FileProps"},name:"v"}],return:{name:"void"}}},description:"Function to call when the value of the input element changes",defaultValue:{value:'(v: FileProps) => {\n    env_log(v, {\n        name: "onChange File",\n    });\n}',computed:!1}},onChangeProgress:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: number) => void",signature:{arguments:[{type:{name:"number"},name:"v"}],return:{name:"void"}}},description:"Function to call when the value of the input element changes progress"},onChangeError:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: ErrorProps | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"ErrorProps | undefined",elements:[{name:"ErrorProps"},{name:"undefined"}]},name:"v"}],return:{name:"void"}}},description:"Function to call when the value of the input element changes error"},onUploadFile:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: InputFileUploadDataProps) => Promise<FileProps>",signature:{arguments:[{type:{name:"InputFileUploadDataProps"},name:"data"}],return:{name:"Promise",elements:[{name:"FileProps"}],raw:"Promise<FileProps>"}}},description:"Function to call when a file is being uploaded"},clearAfterUpload:{required:!1,tsType:{name:"boolean"},description:"Whether to clear the input element after a file has been uploaded",defaultValue:{value:"false",computed:!1}},MAX_SIZE_FILE:{required:!1,tsType:{name:"number"},description:"Maximum size of file that can be uploaded",defaultValue:{value:"5000000",computed:!1}},parseProgress:{required:!1,tsType:{name:"signature",type:"function",raw:"(progres: number) => any",signature:{arguments:[{type:{name:"number"},name:"progres"}],return:{name:"any"}}},description:"Function to parse progress during file upload",defaultValue:{value:"(e) => e",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"disabled upload.",defaultValue:{value:"false",computed:!1}},textMaxSizeFile:{required:!1,tsType:{name:"string"},description:"textMaxSizeFile.",defaultValue:{value:'"File max size"',computed:!1}},capture:{required:!1,tsType:{name:'ReactInputHTMLAttributes["capture"]',raw:'React.InputHTMLAttributes<HTMLInputElement>["capture"]'},description:""},className:{required:!1,tsType:{name:"string"},description:"Class name for the component",defaultValue:{value:'""',computed:!1}},classNameLabel:{required:!1,tsType:{name:"string"},description:"Class name for the label element",defaultValue:{value:'""',computed:!1}},classNameContent:{required:!1,tsType:{name:"string"},description:"Class name for the content element",defaultValue:{value:'""',computed:!1}},classNameInput:{required:!1,tsType:{name:"string"},description:"Class name for the input element",defaultValue:{value:'""',computed:!1}},classNameError:{required:!1,tsType:{name:"string"},description:"Class name for the error element",defaultValue:{value:'""',computed:!1}}},composes:["_TProps","PropsWithChildren"]}},"./src/Input/Img/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Error:()=>Error,Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Index_parameters,_Index_parameters_docs,_Index_parameters1,_Error_parameters,_Error_parameters_docs,_Error_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Input/Img/index.tsx"));const __WEBPACK_DEFAULT_EXPORT__={title:"Input/InputImg",component:_index__WEBPACK_IMPORTED_MODULE_2__.Q},Profile=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.Q,{...args}),Index=Profile.bind({});Index.args={MAX_SIZE_FILE:1e17};const Error=Profile.bind({});Error.args={onImgFile(){throw"Error custom"}},Index.parameters={...Index.parameters,docs:{...null===(_Index_parameters=Index.parameters)||void 0===_Index_parameters?void 0:_Index_parameters.docs,source:{originalSource:"args => <InputImg {...args} />",...null===(_Index_parameters1=Index.parameters)||void 0===_Index_parameters1||null===(_Index_parameters_docs=_Index_parameters1.docs)||void 0===_Index_parameters_docs?void 0:_Index_parameters_docs.source}}},Error.parameters={...Error.parameters,docs:{...null===(_Error_parameters=Error.parameters)||void 0===_Error_parameters?void 0:_Error_parameters.docs,source:{originalSource:"args => <InputImg {...args} />",...null===(_Error_parameters1=Error.parameters)||void 0===_Error_parameters1||null===(_Error_parameters_docs=_Error_parameters1.docs)||void 0===_Error_parameters_docs?void 0:_Error_parameters_docs.source}}};const __namedExportsOrder=["Index","Error"]},"./src/Input/Img/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>InputImg});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_File__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Input/File/index.tsx"),_Title__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Title/index.tsx"),_Text__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/Text/index.tsx"),fenextjs_svg_cjs_Img__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/fenextjs-svg/cjs/Img/index.js"),fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/fenextjs-hook/cjs/useData/index.js"),fenextjs_svg_cjs_Close__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/fenextjs-svg/cjs/Close/index.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js");const InputImg=param=>{let{className="",classNameContentIcon="",classNameText={},classNameTitle={tag:"h2"},classNameUp="",classNameProgress="",classNameRemove="",classNameImg="",icon=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fenextjs_svg_cjs_Img__WEBPACK_IMPORTED_MODULE_5__.SvgImg,{})}),text="Drag Image",title="Add Image",defaultValue={fileData:"",text:""},parseProgress=e=>"Imging . . . ".concat(e.toFixed(0),"%"),onChange,onRemove,...props}=param;const{_t}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_8__.use_T)({...props}),{data,setData}=(0,fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_6__.useData)(defaultValue,{onChangeDataAfter:onChange}),[progress,setProgress]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1),{data:error,setData:setError}=(0,fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_6__.useData)(void 0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-input-img ".concat(className," ").concat(progress>0&&progress<100?"fenext-input-img-in-progress":""," ").concat((null==data?void 0:data.fileData)&&""!=(null==data?void 0:data.fileData)?"fenext-input-img-ok":""," ").concat(error?"fenext-input-img-error":""),children:data.fileData&&""!=data.fileData?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fenext-input-img-up ".concat(classNameUp),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:data.fileData,className:"fenext-input-img-img ".concat(classNameImg)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-input-img-remove ".concat(classNameRemove),onClick:()=>{setData({fileData:"",text:""}),null==onRemove||onRemove()},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fenextjs_svg_cjs_Close__WEBPACK_IMPORTED_MODULE_7__.SvgClose,{})})]})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_File__WEBPACK_IMPORTED_MODULE_2__.b,{onChange:setData,parseProgress:()=>"",onChangeProgress:setProgress,onChangeError:setError,accept:["jpg","jpeg","png","gif","svg","bmp","webp"],...props,_t,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fenext-input-img-up ".concat(classNameUp),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-input-img-content-icon ".concat(classNameContentIcon),children:icon}),progress>0&&progress<100?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Title__WEBPACK_IMPORTED_MODULE_3__.h,{...classNameTitle,className:"fenext-input-img-progress ".concat(classNameProgress),children:parseProgress(progress)}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Title__WEBPACK_IMPORTED_MODULE_3__.h,{...classNameTitle,className:"fenext-input-img-title ".concat(classNameTitle.className),children:_t(title)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_4__.E,{...classNameText,className:"fenext-input-img-text ".concat(classNameText.className),children:_t(text)})]})})})})})};InputImg.__docgenInfo={description:"",methods:[],displayName:"InputImg",props:{title:{required:!1,tsType:{name:"ReactNode"},description:"The Title for the component.",defaultValue:{value:'"Add Image"',computed:!1}},text:{required:!1,tsType:{name:"ReactNode"},description:"The Text for the component.",defaultValue:{value:'"Drag Image"',computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"The Icon for the component.",defaultValue:{value:"<>\n    <SvgImg />\n</>",computed:!1}},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"on Remove Img for the component."},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameUp:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameTitle:{required:!1,tsType:{name:"Omit",elements:[{name:"TitleProps"},{name:"literal",value:'"children"'}],raw:'Omit<TitleProps, "children">'},description:"The class name for the component.",defaultValue:{value:'{\n    tag: "h2",\n}',computed:!1}},classNameContentIcon:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameText:{required:!1,tsType:{name:"Omit",elements:[{name:"TextProps"},{name:"literal",value:'"children"'}],raw:'Omit<TextProps, "children">'},description:"The class name for the component.",defaultValue:{value:"{}",computed:!1}},classNameProgress:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameRemove:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameImg:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},defaultValue:{defaultValue:{value:'{\n    fileData: "",\n    text: "",\n}',computed:!1},required:!1},parseProgress:{defaultValue:{value:"(e) => `Imging . . . ${e.toFixed(0)}%`",computed:!1},required:!1}},composes:["Omit"]}},"./src/Loader/Line/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>LoaderLine});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const LoaderLine=param=>{let{classNameLoaderLine="",height=20}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-loader-line ".concat(classNameLoaderLine),style:{"--height":"".concat(height/16,"rem")}})})};LoaderLine.__docgenInfo={description:"",methods:[],displayName:"LoaderLine",props:{height:{required:!1,tsType:{name:"number"},description:"Height of Line.",defaultValue:{value:"20",computed:!1}},classNameLoaderLine:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}}}},"./src/Text/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Loader_Line__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Loader/Line/index.tsx")),fenextjs_hook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js");const Text=param=>{let{className="",tag="p",loader=!1,children,nLineLoader=3,...props}=param;const{_t}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_3__.use_T)({...props}),Tag=tag;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tag,{className:"fenext-text fenext-text-".concat(tag," ").concat(className," "),children:loader?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-text-loader",children:new Array(nLineLoader).fill((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Loader_Line__WEBPACK_IMPORTED_MODULE_2__.a,{}))})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:_t(children)})})})};Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{tag:{required:!1,tsType:{name:"union",raw:'| "span"\n| "p"\n| "strong"\n| "small"\n| "em"\n| "b"\n| "del"\n| "i"\n| "mark"\n| "ins"\n| "sub"\n| "sup"',elements:[{name:"literal",value:'"span"'},{name:"literal",value:'"p"'},{name:"literal",value:'"strong"'},{name:"literal",value:'"small"'},{name:"literal",value:'"em"'},{name:"literal",value:'"b"'},{name:"literal",value:'"del"'},{name:"literal",value:'"i"'},{name:"literal",value:'"mark"'},{name:"literal",value:'"ins"'},{name:"literal",value:'"sub"'},{name:"literal",value:'"sup"'}]},description:"The class name for the component.",defaultValue:{value:'"p"',computed:!1}},loader:{required:!1,tsType:{name:"boolean"},description:"The loader for the component.",defaultValue:{value:"false",computed:!1}},nLineLoader:{required:!1,tsType:{name:"number"},description:"The nLineLoader for the component.",defaultValue:{value:"3",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}},composes:["PropsWithChildren","_TProps"]}},"./src/Title/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Title});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Loader_Line__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Loader/Line/index.tsx")),fenextjs_hook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js");const Title=param=>{let{className="",tag="h1",loader=!1,children,...props}=param;const{_t}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_3__.use_T)({...props}),Tag=tag;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tag,{className:"fenext-title fenext-title-".concat(tag," ").concat(className," "),children:loader?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Loader_Line__WEBPACK_IMPORTED_MODULE_2__.a,{}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:_t(children)})})})};Title.__docgenInfo={description:"",methods:[],displayName:"Title",props:{tag:{required:!1,tsType:{name:"union",raw:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'}]},description:"The class name for the component.",defaultValue:{value:'"h1"',computed:!1}},loader:{required:!1,tsType:{name:"boolean"},description:"The loader for the component.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}},composes:["PropsWithChildren","_TProps"]}}}]);