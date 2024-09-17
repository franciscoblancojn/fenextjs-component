/*! For license information please see Input-Checkbox-_-stories.fe5cf098.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[5197],{"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js").default;function _regeneratorRuntime(){"use strict";module.exports=_regeneratorRuntime=function _regeneratorRuntime(){return e},module.exports.__esModule=!0,module.exports.default=module.exports;var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}module.exports=_regeneratorRuntime,module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/typeof.js":module=>{function _typeof(o){return module.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},module.exports.__esModule=!0,module.exports.default=module.exports,_typeof(o)}module.exports=_typeof,module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/regenerator/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var runtime=__webpack_require__("./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();module.exports=runtime;try{regeneratorRuntime=runtime}catch(accidentalStrictMode){"object"==typeof globalThis?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)}},"./src/Input/Checkbox/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Input/Checkbox/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Input/InputCheckbox",component:_index__WEBPACK_IMPORTED_MODULE_1__.G};var Index=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__.G,args,"Test Children")}.bind({});Index.args={label:"Label",valueActive:"SI",valueInactive:"NO"},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <InputCheckbox {...args}>Test Children</InputCheckbox>",...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Input/Checkbox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>InputCheckbox});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fenextjs_svg_cjs_Check__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-svg/cjs/Check/index.js"),fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/fenextjs-functions/cjs/env_log/index.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),_excluded=["classNameLabel","classNameLabelActive","classNameLabelInactive","classNameText","classNameContentCheckbox","classNameContentCheckboxActive","classNameContentCheckboxInactive","classNameCheckbox","classNameCheckboxActive","classNameCheckboxInactive","label","labelPosition","name","onChange","defaultValue","useValue","value","disabled","icon","onValidateCheck","optional","optionalText","required","requiredText","onActive","onActiveValue","onInactive","onInactiveValue","valueActive","valueInactive"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var InputCheckbox=function InputCheckbox(_ref){var _ref$classNameLabel=_ref.classNameLabel,classNameLabel=void 0===_ref$classNameLabel?"":_ref$classNameLabel,_ref$classNameLabelAc=_ref.classNameLabelActive,classNameLabelActive=void 0===_ref$classNameLabelAc?"":_ref$classNameLabelAc,_ref$classNameLabelIn=_ref.classNameLabelInactive,classNameLabelInactive=void 0===_ref$classNameLabelIn?"":_ref$classNameLabelIn,_ref$classNameText=_ref.classNameText,classNameText=void 0===_ref$classNameText?"":_ref$classNameText,_ref$classNameContent=_ref.classNameContentCheckbox,classNameContentCheckbox=void 0===_ref$classNameContent?"":_ref$classNameContent,_ref$classNameContent2=_ref.classNameContentCheckboxActive,classNameContentCheckboxActive=void 0===_ref$classNameContent2?"":_ref$classNameContent2,_ref$classNameContent3=_ref.classNameContentCheckboxInactive,classNameContentCheckboxInactive=void 0===_ref$classNameContent3?"":_ref$classNameContent3,_ref$classNameCheckbo=_ref.classNameCheckbox,classNameCheckbox=void 0===_ref$classNameCheckbo?"":_ref$classNameCheckbo,_ref$classNameCheckbo2=_ref.classNameCheckboxActive,classNameCheckboxActive=void 0===_ref$classNameCheckbo2?"":_ref$classNameCheckbo2,_ref$classNameCheckbo3=_ref.classNameCheckboxInactive,classNameCheckboxInactive=void 0===_ref$classNameCheckbo3?"":_ref$classNameCheckbo3,_ref$label=_ref.label,label=void 0===_ref$label?"":_ref$label,_ref$labelPosition=_ref.labelPosition,labelPosition=void 0===_ref$labelPosition?"right":_ref$labelPosition,_ref$name=_ref.name,name=void 0===_ref$name?"":_ref$name,_ref$onChange=_ref.onChange,onChange=void 0===_ref$onChange?function(e){(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_4__.env_log)(e,{name:"input checkbox onchange"})}:_ref$onChange,_ref$defaultValue=_ref.defaultValue,defaultValue=void 0!==_ref$defaultValue&&_ref$defaultValue,_ref$useValue=_ref.useValue,useValue=void 0!==_ref$useValue&&_ref$useValue,_ref$value=_ref.value,value=void 0!==_ref$value&&_ref$value,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$icon=_ref.icon,icon=void 0===_ref$icon?__jsx(fenextjs_svg_cjs_Check__WEBPACK_IMPORTED_MODULE_3__.Check,null):_ref$icon,_ref$onValidateCheck=_ref.onValidateCheck,onValidateCheck=void 0===_ref$onValidateCheck?(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__.A)(_home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark((function _callee(){return _home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:case"end":return _context.stop()}}),_callee)}))):_ref$onValidateCheck,_ref$optional=_ref.optional,optional=void 0!==_ref$optional&&_ref$optional,_ref$optionalText=_ref.optionalText,optionalText=void 0===_ref$optionalText?"(optional)":_ref$optionalText,_ref$required=_ref.required,required=void 0!==_ref$required&&_ref$required,_ref$requiredText=_ref.requiredText,requiredText=void 0===_ref$requiredText?"*":_ref$requiredText,onActive=_ref.onActive,onActiveValue=_ref.onActiveValue,onInactive=_ref.onInactive,onInactiveValue=_ref.onInactiveValue,valueActive=_ref.valueActive,valueInactive=_ref.valueInactive,props=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_7__.A)(_ref,_excluded),_use_T=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_5__.use_T)(function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},props)),_t=_use_T._t,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0===defaultValue),checked_=_useState[0],setChecked=_useState[1],checked=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return useValue?value:checked_}),[useValue,value,checked_]),onChecked=function(){var _ref3=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__.A)(_home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark((function _callee2(){var v;return _home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(!disabled){_context2.next=2;break}return _context2.abrupt("return");case 2:if(!(v=!checked)){_context2.next=6;break}return _context2.next=6,onValidateCheck();case 6:setChecked(v),onChange(v),v?(null==onActive||onActive(),null==onActiveValue||onActiveValue(valueActive)):(null==onInactive||onInactive(),null==onInactiveValue||onInactiveValue(valueInactive));case 9:case"end":return _context2.stop()}}),_callee2)})));return function onChecked(){return _ref3.apply(this,arguments)}}();return __jsx("label",{className:"fenext-input-checkbox ".concat(labelPosition," ").concat(classNameLabel,"  ").concat(checked?classNameLabelActive:classNameLabelInactive)},__jsx("input",{type:"checkbox",name,checked,onChange:onChecked,className:"fenext-input-checkbox-input"}),__jsx("span",{className:"fenext-input-checkbox-box ".concat(classNameContentCheckbox," ").concat(checked?classNameContentCheckboxActive:classNameContentCheckboxInactive)},__jsx("span",{className:"\n                    fenext-input-checkbox-box-icon\n                    ".concat(classNameCheckbox," ").concat(checked?classNameCheckboxActive:classNameCheckboxInactive)},checked&&icon)),__jsx("span",{className:"fenext-input-checkbox-text ".concat(classNameText)},_t(label),optional&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("small",{className:"fenext-input-optional"},_t(optionalText))),required&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("small",{className:"fenext-input-required"},_t(requiredText)))))};InputCheckbox.__docgenInfo={description:"Component that renders a checkbox input.\nTakes an InputCheckboxProps object as props.",methods:[],displayName:"InputCheckbox",props:{label:{required:!1,tsType:{name:"any"},description:"The label to display next to the checkbox.",defaultValue:{value:'""',computed:!1}},labelPosition:{required:!1,tsType:{name:"union",raw:'"right" | "left"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"left"'}]},description:"The position of the label relative to the checkbox.",defaultValue:{value:'"right"',computed:!1}},name:{required:!1,tsType:{name:"string"},description:"The name attribute of the checkbox input element.",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"e"}],return:{name:"void"}}},description:"A callback function to execute when the checkbox is toggled.\nReceives a boolean value indicating whether the checkbox is checked or not.",defaultValue:{value:'(e) => {\n    env_log(e, {\n        name: "input checkbox onchange",\n    });\n}',computed:!1}},onActive:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onInactive:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onActiveValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(data?: VT) => void",signature:{arguments:[{type:{name:"VT"},name:"data"}],return:{name:"void"}}},description:""},onInactiveValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(data?: VF) => void",signature:{arguments:[{type:{name:"VF"},name:"data"}],return:{name:"void"}}},description:""},valueActive:{required:!1,tsType:{name:"VT"},description:""},valueInactive:{required:!1,tsType:{name:"VF"},description:""},defaultValue:{required:!1,tsType:{name:"boolean"},description:"The default value of the checkbox when it is first rendered.",defaultValue:{value:"false",computed:!1}},useValue:{required:!1,tsType:{name:"boolean"},description:"A boolean value indicating whether to use the value attribute of the checkbox input element or not.",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"boolean"},description:"The value of the checkbox input element.",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"A boolean value indicating whether the checkbox is disabled or not.",defaultValue:{value:"false",computed:!1}},onValidateCheck:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Promise<void> | void",signature:{arguments:[],return:{name:"union",raw:"Promise<void> | void",elements:[{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"},{name:"void"}]}}},description:"A callback function to execute when the checkbox is validated.\nShould return a promise or void.",defaultValue:{value:"async () => {}",computed:!1}},optional:{required:!1,tsType:{name:"boolean"},description:"Optional of Input.",defaultValue:{value:"false",computed:!1}},optionalText:{required:!1,tsType:{name:"string"},description:"Optional text of Input.",defaultValue:{value:'"(optional)"',computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Optional of Input.",defaultValue:{value:"false",computed:!1}},requiredText:{required:!1,tsType:{name:"string"},description:"Optional text of Input.",defaultValue:{value:'"*"',computed:!1}},classNameLabel:{required:!1,tsType:{name:"string"},description:"CSS class name for the checkbox label.",defaultValue:{value:'""',computed:!1}},classNameLabelActive:{required:!1,tsType:{name:"string"},description:"CSS class name for the active checkbox label.",defaultValue:{value:'""',computed:!1}},classNameLabelInactive:{required:!1,tsType:{name:"string"},description:"CSS class name for the inactive checkbox label.",defaultValue:{value:'""',computed:!1}},classNameText:{required:!1,tsType:{name:"string"},description:"CSS class name for the text next to the checkbox.",defaultValue:{value:'""',computed:!1}},classNameContentCheckbox:{required:!1,tsType:{name:"string"},description:"CSS class name for the container that holds the checkbox and its label.",defaultValue:{value:'""',computed:!1}},classNameContentCheckboxActive:{required:!1,tsType:{name:"string"},description:"CSS class name for the container that holds the checkbox and its label when the checkbox is active.",defaultValue:{value:'""',computed:!1}},classNameContentCheckboxInactive:{required:!1,tsType:{name:"string"},description:"CSS class name for the container that holds the checkbox and its label when the checkbox is inactive.",defaultValue:{value:'""',computed:!1}},classNameCheckbox:{required:!1,tsType:{name:"string"},description:"CSS class name for the checkbox input element.",defaultValue:{value:'""',computed:!1}},classNameCheckboxActive:{required:!1,tsType:{name:"string"},description:"CSS class name for the checkbox input element when the checkbox is active.",defaultValue:{value:'""',computed:!1}},classNameCheckboxInactive:{required:!1,tsType:{name:"string"},description:"CSS class name for the checkbox input element when the checkbox is inactive.",defaultValue:{value:'""',computed:!1}},icon:{required:!1,tsType:{name:"any"},description:"Icon to display next to the checkbox.",defaultValue:{value:"<Check />",computed:!1}}},composes:["_TProps"]}},"./node_modules/fenextjs-svg/cjs/Check/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Check=void 0;const react_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs").__importDefault(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"));exports.Check=({className=""})=>react_1.default.createElement("svg",{className:`fenext_svg ${className}`,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},react_1.default.createElement("path",{d:"M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z",fill:"currentColor"})),exports.default=exports.Check},"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}__webpack_require__.d(__webpack_exports__,{A:()=>_asyncToGenerator})}}]);