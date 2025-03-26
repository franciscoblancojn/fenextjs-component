"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[6676],{"./src/Input/File/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Cature:()=>Cature,Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Index_parameters,_Index_parameters_docs,_Index_parameters1,_Cature_parameters,_Cature_parameters_docs,_Cature_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Input/File/index.tsx"));const __WEBPACK_DEFAULT_EXPORT__={title:"Input/InputFile",component:_index__WEBPACK_IMPORTED_MODULE_2__.b},Profile=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.b,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{fontSize:"4rem"},children:"Children Input File"})}),Index=Profile.bind({});Index.args={};const Cature=Profile.bind({});Cature.args={capture:"user"},Index.parameters={...Index.parameters,docs:{...null===(_Index_parameters=Index.parameters)||void 0===_Index_parameters?void 0:_Index_parameters.docs,source:{originalSource:'args => <InputFile {...args}>\n        <div style={{\n    fontSize: "4rem"\n  }}>\n            Children Input File\n        </div>\n    </InputFile>',...null===(_Index_parameters1=Index.parameters)||void 0===_Index_parameters1||null===(_Index_parameters_docs=_Index_parameters1.docs)||void 0===_Index_parameters_docs?void 0:_Index_parameters_docs.source}}},Cature.parameters={...Cature.parameters,docs:{...null===(_Cature_parameters=Cature.parameters)||void 0===_Cature_parameters?void 0:_Cature_parameters.docs,source:{originalSource:'args => <InputFile {...args}>\n        <div style={{\n    fontSize: "4rem"\n  }}>\n            Children Input File\n        </div>\n    </InputFile>',...null===(_Cature_parameters1=Cature.parameters)||void 0===_Cature_parameters1||null===(_Cature_parameters_docs=_Cature_parameters1.docs)||void 0===_Cature_parameters_docs?void 0:_Cature_parameters_docs.source}}};const __namedExportsOrder=["Index","Cature"]},"./src/Input/File/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>InputFile});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-functions/cjs/env_log/index.js"),fenextjs_functions_cjs_parse_File__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-functions/cjs/parse/File/index.js"),fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/fenextjs-hook/cjs/useData/index.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js");const InputFile=param=>{let{defaultValue={fileData:"",text:""},className="",classNameLabel="",classNameContent="",classNameInput="",classNameError="",onChange=v=>{(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_2__.env_log)(v,{name:"onChange File"})},accept=[],children,clearAfterUpload=!1,MAX_SIZE_FILE=5e6,parseProgress=e=>e,onChangeProgress,onChangeError,disabled=!1,textMaxSizeFile="File max size",capture,...props}=param;const{_t}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_5__.use_T)({...props}),{data:error,setData:setError}=(0,fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_4__.useData)(void 0,{onChangeDataAfter:onChangeError}),ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),{setData}=(0,fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_4__.useData)(defaultValue,{onChangeDataAfter:onChange}),{data:progress,setData:setProgress}=(0,fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_4__.useData)(-1,{onChangeDataAfter:onChangeProgress});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fenext-input-file ".concat(className),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{className:"fenext-input-file-label ".concat(classNameLabel),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-input-file-content ".concat(classNameContent),children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{ref,type:"file",className:"fenext-input-file-input ".concat(classNameInput),onChange:async e=>{try{setError(void 0);const file=e.target.files[0];if(!file)return setProgress(-2),void setData({fileData:"",text:""});if((null==file?void 0:file.size)>MAX_SIZE_FILE)throw"".concat(_t(textMaxSizeFile)," ").concat(MAX_SIZE_FILE/1e6,"mb");const nameFile=e.target.value.split("\\").pop();(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_2__.env_log)(nameFile,{name:"nameFile"});const extend=(nameFile=>{var _nameFile_split_pop;const extend=null===(_nameFile_split_pop=nameFile.split(".").pop())||void 0===_nameFile_split_pop?void 0:_nameFile_split_pop.toLowerCase();if(0!=accept.length&&extend&&!accept.map((e=>e.toLowerCase())).includes(extend))throw"File Invalid";return extend})(nameFile),result=await(async data=>{if(null==props?void 0:props.onUploadFile){const r=await(null==props?void 0:props.onUploadFile(data));if(r)return r}const fileData=await(0,fenextjs_functions_cjs_parse_File__WEBPACK_IMPORTED_MODULE_3__.parseFile)(data.file,{updateProgress:data.setProgress});return{file:null==data?void 0:data.file,fileData,base64:"".concat(null!=fileData?fileData:""),text:data.nameFile,extend:data.extend}})({file,setFileData:setData,nameFile,setProgress,extend:null!=extend?extend:""});setData(result),clearAfterUpload&&(e.target.value=null,e.target.type="text",setTimeout((()=>{e.target.type="file"}),100),(null==ref?void 0:ref.current)&&(ref.current.value=null))}catch(e){setError({message:"".concat(e),data:e}),setProgress(-2),setData({fileData:"",text:""}),(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_2__.env_log)(e,{name:"error upload file",color:"red"})}},accept:accept.map((e=>".".concat(e))).join(","),disabled,capture})]}),progress>0&&progress<100&&parseProgress(progress),error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-error ".concat(classNameError),children:error.message})]})})};InputFile.__docgenInfo={description:"",methods:[],displayName:"InputFile",props:{accept:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Allowed file types for the input element",defaultValue:{value:"[]",computed:!1}},defaultValue:{required:!1,tsType:{name:"FileProps"},description:"Default value for the input element",defaultValue:{value:'{\n    fileData: "",\n    text: "",\n}',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: FileProps) => void",signature:{arguments:[{type:{name:"FileProps"},name:"v"}],return:{name:"void"}}},description:"Function to call when the value of the input element changes",defaultValue:{value:'(v: FileProps) => {\n    env_log(v, {\n        name: "onChange File",\n    });\n}',computed:!1}},onChangeProgress:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: number) => void",signature:{arguments:[{type:{name:"number"},name:"v"}],return:{name:"void"}}},description:"Function to call when the value of the input element changes progress"},onChangeError:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: ErrorProps | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"ErrorProps | undefined",elements:[{name:"ErrorProps"},{name:"undefined"}]},name:"v"}],return:{name:"void"}}},description:"Function to call when the value of the input element changes error"},onUploadFile:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: InputFileUploadDataProps) => Promise<FileProps>",signature:{arguments:[{type:{name:"InputFileUploadDataProps"},name:"data"}],return:{name:"Promise",elements:[{name:"FileProps"}],raw:"Promise<FileProps>"}}},description:"Function to call when a file is being uploaded"},clearAfterUpload:{required:!1,tsType:{name:"boolean"},description:"Whether to clear the input element after a file has been uploaded",defaultValue:{value:"false",computed:!1}},MAX_SIZE_FILE:{required:!1,tsType:{name:"number"},description:"Maximum size of file that can be uploaded",defaultValue:{value:"5000000",computed:!1}},parseProgress:{required:!1,tsType:{name:"signature",type:"function",raw:"(progres: number) => any",signature:{arguments:[{type:{name:"number"},name:"progres"}],return:{name:"any"}}},description:"Function to parse progress during file upload",defaultValue:{value:"(e) => e",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"disabled upload.",defaultValue:{value:"false",computed:!1}},textMaxSizeFile:{required:!1,tsType:{name:"string"},description:"textMaxSizeFile.",defaultValue:{value:'"File max size"',computed:!1}},capture:{required:!1,tsType:{name:'ReactInputHTMLAttributes["capture"]',raw:'React.InputHTMLAttributes<HTMLInputElement>["capture"]'},description:""},className:{required:!1,tsType:{name:"string"},description:"Class name for the component",defaultValue:{value:'""',computed:!1}},classNameLabel:{required:!1,tsType:{name:"string"},description:"Class name for the label element",defaultValue:{value:'""',computed:!1}},classNameContent:{required:!1,tsType:{name:"string"},description:"Class name for the content element",defaultValue:{value:'""',computed:!1}},classNameInput:{required:!1,tsType:{name:"string"},description:"Class name for the input element",defaultValue:{value:'""',computed:!1}},classNameError:{required:!1,tsType:{name:"string"},description:"Class name for the error element",defaultValue:{value:'""',computed:!1}}},composes:["_TProps","PropsWithChildren"]}}}]);