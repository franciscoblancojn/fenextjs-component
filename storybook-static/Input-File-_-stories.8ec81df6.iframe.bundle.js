/*! For license information please see Input-File-_-stories.8ec81df6.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[6676],{"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js").default;function _regeneratorRuntime(){"use strict";module.exports=_regeneratorRuntime=function _regeneratorRuntime(){return e},module.exports.__esModule=!0,module.exports.default=module.exports;var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}module.exports=_regeneratorRuntime,module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/typeof.js":module=>{function _typeof(o){return module.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},module.exports.__esModule=!0,module.exports.default=module.exports,_typeof(o)}module.exports=_typeof,module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/regenerator/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var runtime=__webpack_require__("./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();module.exports=runtime;try{regeneratorRuntime=runtime}catch(accidentalStrictMode){"object"==typeof globalThis?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)}},"./src/Input/File/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Input/File/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Input/InputFile",component:_index__WEBPACK_IMPORTED_MODULE_1__.b};var Index=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__.b,args,__jsx("div",{style:{fontSize:"4rem"}},"Children Input File"))}.bind({});Index.args={},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:'args => <InputFile {...args}>\n        <div style={{\n    fontSize: "4rem"\n  }}>\n            Children Input File\n        </div>\n    </InputFile>',...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Input/File/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>InputFile});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-functions/cjs/env_log/index.js"),fenextjs_functions_cjs_parse_File__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/fenextjs-functions/cjs/parse/File/index.js"),fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/fenextjs-hook/cjs/useData/index.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),_excluded=["defaultValue","className","classNameLabel","classNameContent","classNameInput","classNameError","onChange","accept","children","clearAfterUpload","MAX_SIZE_FILE","parseProgress","onChangeProgress","onChangeError","disabled","textMaxSizeFile"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var InputFile=function InputFile(_ref){var _ref$defaultValue=_ref.defaultValue,defaultValue=void 0===_ref$defaultValue?{fileData:"",text:""}:_ref$defaultValue,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$classNameLabel=_ref.classNameLabel,classNameLabel=void 0===_ref$classNameLabel?"":_ref$classNameLabel,_ref$classNameContent=_ref.classNameContent,classNameContent=void 0===_ref$classNameContent?"":_ref$classNameContent,_ref$classNameInput=_ref.classNameInput,classNameInput=void 0===_ref$classNameInput?"":_ref$classNameInput,_ref$classNameError=_ref.classNameError,classNameError=void 0===_ref$classNameError?"":_ref$classNameError,_ref$onChange=_ref.onChange,onChange=void 0===_ref$onChange?function(v){(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_3__.env_log)(v,{name:"onChange File"})}:_ref$onChange,_ref$accept=_ref.accept,accept=void 0===_ref$accept?[]:_ref$accept,children=_ref.children,_ref$clearAfterUpload=_ref.clearAfterUpload,clearAfterUpload=void 0!==_ref$clearAfterUpload&&_ref$clearAfterUpload,_ref$MAX_SIZE_FILE=_ref.MAX_SIZE_FILE,MAX_SIZE_FILE=void 0===_ref$MAX_SIZE_FILE?5e6:_ref$MAX_SIZE_FILE,_ref$parseProgress=_ref.parseProgress,parseProgress=void 0===_ref$parseProgress?function(e){return e}:_ref$parseProgress,onChangeProgress=_ref.onChangeProgress,onChangeError=_ref.onChangeError,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$textMaxSizeFile=_ref.textMaxSizeFile,textMaxSizeFile=void 0===_ref$textMaxSizeFile?"File max size":_ref$textMaxSizeFile,props=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_7__.A)(_ref,_excluded),_use_T=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_6__.use_T)(function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},props)),_t=_use_T._t,onUploadFile=function(){var _ref2=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__.A)(_home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee(data){var r,fileData;return _home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(null==props||!props.onUploadFile){_context.next=6;break}return _context.next=3,null==props?void 0:props.onUploadFile(data);case 3:if(!(r=_context.sent)){_context.next=6;break}return _context.abrupt("return",r);case 6:return _context.next=8,(0,fenextjs_functions_cjs_parse_File__WEBPACK_IMPORTED_MODULE_4__.parseFile)(data.file,{updateProgress:data.setProgress});case 8:return fileData=_context.sent,_context.abrupt("return",{fileData,base64:"".concat(null!=fileData?fileData:""),text:data.nameFile,extend:data.extend});case 10:case"end":return _context.stop()}}),_callee)})));return function onUploadFile(_x){return _ref2.apply(this,arguments)}}(),_useData=(0,fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_5__.useData)(void 0,{onChangeDataAfter:onChangeError}),error=_useData.data,setError=_useData.setData,ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),setData=(0,fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_5__.useData)(defaultValue,{onChangeDataAfter:onChange}).setData,_useData3=(0,fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_5__.useData)(-1,{onChangeDataAfter:onChangeProgress}),progress=_useData3.data,setProgress=_useData3.setData,validateAccept=function validateAccept(nameFile){var _nameFile$split$pop,extend=null===(_nameFile$split$pop=nameFile.split(".").pop())||void 0===_nameFile$split$pop?void 0:_nameFile$split$pop.toLowerCase();if(0!=accept.length&&extend&&!accept.map((function(e){return e.toLowerCase()})).includes(extend))throw"File Invalid";return extend},uploadFile=function(){var _ref3=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__.A)(_home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee2(e){var file,nameFile,extend,result;return _home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(_context2.prev=0,setError(void 0),file=e.target.files[0]){_context2.next=7;break}return setProgress(-2),setData({fileData:"",text:""}),_context2.abrupt("return");case 7:if(!((null==file?void 0:file.size)>MAX_SIZE_FILE)){_context2.next=9;break}throw"".concat(_t(textMaxSizeFile)," ").concat(MAX_SIZE_FILE/1e6,"mb");case 9:return nameFile=e.target.value.split("\\").pop(),(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_3__.env_log)(nameFile,{name:"nameFile"}),extend=validateAccept(nameFile),_context2.next=14,onUploadFile({file,setFileData:setData,nameFile,setProgress,extend:null!=extend?extend:""});case 14:result=_context2.sent,setData(result),clearAfterUpload&&(e.target.value=null,e.target.type="text",setTimeout((function(){e.target.type="file"}),100),null!=ref&&ref.current&&(ref.current.value=null)),_context2.next=25;break;case 19:_context2.prev=19,_context2.t0=_context2.catch(0),setError({message:"".concat(_context2.t0),data:_context2.t0}),setProgress(-2),setData({fileData:"",text:""}),(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_3__.env_log)(_context2.t0,{name:"error upload file",color:"red"});case 25:case"end":return _context2.stop()}}),_callee2,null,[[0,19]])})));return function uploadFile(_x2){return _ref3.apply(this,arguments)}}();return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fenext-input-file ".concat(className)},__jsx("label",{className:"fenext-input-file-label ".concat(classNameLabel)},__jsx("div",{className:"fenext-input-file-content ".concat(classNameContent)},children),__jsx("input",{ref,type:"file",className:"fenext-input-file-input ".concat(classNameInput),onChange:uploadFile,accept:accept.map((function(e){return".".concat(e)})).join(","),disabled})),progress>0&&progress<100&&parseProgress(progress),error&&__jsx("div",{className:"fenext-error ".concat(classNameError)},error.message)))};InputFile.__docgenInfo={description:"",methods:[],displayName:"InputFile",props:{accept:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Allowed file types for the input element",defaultValue:{value:"[]",computed:!1}},defaultValue:{required:!1,tsType:{name:"FileProps"},description:"Default value for the input element",defaultValue:{value:'{\n    fileData: "",\n    text: "",\n}',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: FileProps) => void",signature:{arguments:[{type:{name:"FileProps"},name:"v"}],return:{name:"void"}}},description:"Function to call when the value of the input element changes",defaultValue:{value:'(v: FileProps) => {\n    env_log(v, {\n        name: "onChange File",\n    });\n}',computed:!1}},onChangeProgress:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: number) => void",signature:{arguments:[{type:{name:"number"},name:"v"}],return:{name:"void"}}},description:"Function to call when the value of the input element changes progress"},onChangeError:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: ErrorProps | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"ErrorProps | undefined",elements:[{name:"ErrorProps"},{name:"undefined"}]},name:"v"}],return:{name:"void"}}},description:"Function to call when the value of the input element changes error"},onUploadFile:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: InputFileUploadDataProps) => Promise<FileProps>",signature:{arguments:[{type:{name:"InputFileUploadDataProps"},name:"data"}],return:{name:"Promise",elements:[{name:"FileProps"}],raw:"Promise<FileProps>"}}},description:"Function to call when a file is being uploaded"},clearAfterUpload:{required:!1,tsType:{name:"boolean"},description:"Whether to clear the input element after a file has been uploaded",defaultValue:{value:"false",computed:!1}},MAX_SIZE_FILE:{required:!1,tsType:{name:"number"},description:"Maximum size of file that can be uploaded",defaultValue:{value:"5000000",computed:!1}},parseProgress:{required:!1,tsType:{name:"signature",type:"function",raw:"(progres: number) => any",signature:{arguments:[{type:{name:"number"},name:"progres"}],return:{name:"any"}}},description:"Function to parse progress during file upload",defaultValue:{value:"(e) => e",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"disabled upload.",defaultValue:{value:"false",computed:!1}},textMaxSizeFile:{required:!1,tsType:{name:"string"},description:"textMaxSizeFile.",defaultValue:{value:'"File max size"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Class name for the component",defaultValue:{value:'""',computed:!1}},classNameLabel:{required:!1,tsType:{name:"string"},description:"Class name for the label element",defaultValue:{value:'""',computed:!1}},classNameContent:{required:!1,tsType:{name:"string"},description:"Class name for the content element",defaultValue:{value:'""',computed:!1}},classNameInput:{required:!1,tsType:{name:"string"},description:"Class name for the input element",defaultValue:{value:'""',computed:!1}},classNameError:{required:!1,tsType:{name:"string"},description:"Class name for the error element",defaultValue:{value:'""',computed:!1}}},composes:["_TProps","PropsWithChildren"]}},"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}__webpack_require__.d(__webpack_exports__,{A:()=>_asyncToGenerator})}}]);