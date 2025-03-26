"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[7174],{"./src/Input/NumberCount/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,UseValidator:()=>UseValidator,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Index_parameters,_Index_parameters_docs,_Index_parameters1,_UseValidator_parameters,_UseValidator_parameters_docs,_UseValidator_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),fenextjs_validator__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/fenextjs-validator/cjs/index.js")),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Input/NumberCount/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Input/InputNumberCount",component:_index__WEBPACK_IMPORTED_MODULE_3__.P},Profile=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.P,{...args,children:"Test Children"}),Index=Profile.bind({});Index.args={label:"Label",placeholder:"Placeholder",min:20,max:3e4,defaultValue:10022};const UseValidator=Profile.bind({}),UseValidatorArg={label:"Label",placeholder:"Placeholder",validator:(0,fenextjs_validator__WEBPACK_IMPORTED_MODULE_2__.y)().isNumber().isRequired().isMin(4)};UseValidator.args=UseValidatorArg,Index.parameters={...Index.parameters,docs:{...null===(_Index_parameters=Index.parameters)||void 0===_Index_parameters?void 0:_Index_parameters.docs,source:{originalSource:"args => <InputNumberCount {...args}>Test Children</InputNumberCount>",...null===(_Index_parameters1=Index.parameters)||void 0===_Index_parameters1||null===(_Index_parameters_docs=_Index_parameters1.docs)||void 0===_Index_parameters_docs?void 0:_Index_parameters_docs.source}}},UseValidator.parameters={...UseValidator.parameters,docs:{...null===(_UseValidator_parameters=UseValidator.parameters)||void 0===_UseValidator_parameters?void 0:_UseValidator_parameters.docs,source:{originalSource:"args => <InputNumberCount {...args}>Test Children</InputNumberCount>",...null===(_UseValidator_parameters1=UseValidator.parameters)||void 0===_UseValidator_parameters1||null===(_UseValidator_parameters_docs=_UseValidator_parameters1.docs)||void 0===_UseValidator_parameters_docs?void 0:_UseValidator_parameters_docs.source}}};const __namedExportsOrder=["Index","UseValidator"]},"./src/Input/NumberCount/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>InputNumberCount});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Input/Text/index.tsx"),fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-hook/cjs/useData/index.js"),fenextjs_functions_cjs_parse_NumberCount__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/fenextjs-functions/cjs/parse/NumberCount/index.js"),fenextjs_functions_cjs_parse_Number__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/fenextjs-functions/cjs/parse/Number/index.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),fenextjs_validator__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/fenextjs-validator/cjs/index.js");const InputNumberCount=param=>{let{onChange,value:valueProps,defaultValue,symbolInit="$",symbolFinal="",validator:validatorProps,min=-1/0,max=1/0,minError,maxError,optionsParseNumberDefault,optionsParseNumber,aplyMax=!0,aplyMin=!1,...props}=param;const{data,setDataFunction,isChange}=(0,fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_3__.useData)("".concat((0,fenextjs_functions_cjs_parse_NumberCount__WEBPACK_IMPORTED_MODULE_4__.parseNumberCount)(null!=defaultValue?defaultValue:"",null!=optionsParseNumberDefault?optionsParseNumberDefault:optionsParseNumber)),{onChangeDataAfter:e=>{""!=e?null==onChange||onChange((0,fenextjs_functions_cjs_parse_Number__WEBPACK_IMPORTED_MODULE_5__.parseNumber)(e)):null==onChange||onChange("")}}),value=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>null!=valueProps?valueProps:data),[valueProps,data]),validator=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{const v=null!=validatorProps?validatorProps:(0,fenextjs_validator__WEBPACK_IMPORTED_MODULE_7__.y)().isNumber();return validatorProps||v.isMinOrEqual(min,minError).isMaxOrEqual(max,maxError),v}),[validatorProps,min,max]),{error:errorFenext}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_6__.useValidator)({data:null!=value&&""!=value?(0,fenextjs_functions_cjs_parse_Number__WEBPACK_IMPORTED_MODULE_5__.parseNumber)(value):void 0,validator}),parseNumberCountForInputNumberCount=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(((d,old,keyDown)=>{let n=(0,fenextjs_functions_cjs_parse_NumberCount__WEBPACK_IMPORTED_MODULE_4__.parseNumberCount)(d,optionsParseNumber);if("-"==keyDown&&"0"==n)return"-0";if("".concat(old).includes(".")){var _split,_split_,_optionsParseNumber_maximumFractionDigits;const decimales=(null!==(_split_=null===(_split="".concat(old).split("."))||void 0===_split?void 0:_split[1])&&void 0!==_split_?_split_:"").slice(0,null!==(_optionsParseNumber_maximumFractionDigits=null==optionsParseNumber?void 0:optionsParseNumber.maximumFractionDigits)&&void 0!==_optionsParseNumber_maximumFractionDigits?_optionsParseNumber_maximumFractionDigits:3).replace(/[^0-9]/g,"");n=(0,fenextjs_functions_cjs_parse_NumberCount__WEBPACK_IMPORTED_MODULE_4__.parseNumberCount)("".concat(parseInt("".concat((0,fenextjs_functions_cjs_parse_Number__WEBPACK_IMPORTED_MODULE_5__.parseNumber)(n))))),n.includes(".")||(n+="."),n+=decimales}return n}),[optionsParseNumber]),dataText=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{const d="".concat(value);if(""==d)return"";const n=parseNumberCountForInputNumberCount(d,d);return"".concat(symbolInit).concat(n).concat("."==d.at(-1)?"":symbolFinal)}),[symbolInit,symbolFinal,value,optionsParseNumber]);var _props_className;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.S,{...props,className:"fenext-input-number-count ".concat(null!==(_props_className=null==props?void 0:props.className)&&void 0!==_props_className?_props_className:""),type:"text",value:dataText,isChange,onKeyDown:event=>{var _props_onKeyDown;null==props||null===(_props_onKeyDown=props.onKeyDown)||void 0===_props_onKeyDown||_props_onKeyDown.call(props,event);const keyNew=null==event?void 0:event.key;setDataFunction((old=>{let oldN="".concat(old).concat(keyNew).replace(/[^0-9.-]/g,""),n="".concat(oldN);return"Backspace"==keyNew&&(n=n.slice(0,n.length-1),oldN=oldN.slice(0,oldN.length-1)),"ArrowUp"==keyNew&&(n="".concat((0,fenextjs_functions_cjs_parse_Number__WEBPACK_IMPORTED_MODULE_5__.parseNumber)(n)+1)),"ArrowDown"==keyNew&&(n="".concat((0,fenextjs_functions_cjs_parse_Number__WEBPACK_IMPORTED_MODULE_5__.parseNumber)(n)-1)),aplyMax&&null!=max&&(n="".concat(Math.min(max,(0,fenextjs_functions_cjs_parse_Number__WEBPACK_IMPORTED_MODULE_5__.parseNumber)(n)))),aplyMin&&null!=min&&(n="".concat(Math.max(min,(0,fenextjs_functions_cjs_parse_Number__WEBPACK_IMPORTED_MODULE_5__.parseNumber)(n)))),"."!=keyNew||n.includes(".")||(n+="."),n=parseNumberCountForInputNumberCount(n,oldN,keyNew),n}))},validator:void 0,error:errorFenext,inputMode:"numeric"})})};InputNumberCount.__docgenInfo={description:"",methods:[],displayName:"InputNumberCount",props:{symbolInit:{required:!1,tsType:{name:"string"},description:"symbol of money in de Init, default $.",defaultValue:{value:'"$"',computed:!1}},symbolFinal:{required:!1,tsType:{name:"string"},description:"symbol of money in the final.",defaultValue:{value:'""',computed:!1}},defaultValue:{required:!1,tsType:{name:"union",raw:'number | ""',elements:[{name:"number"},{name:"literal",value:'""'}]},description:'The default value of the input.\n@default ""'},value:{required:!1,tsType:{name:"union",raw:'number | ""',elements:[{name:"number"},{name:"literal",value:'""'}]},description:"The value of the input.\n@default undefined",defaultValue:{value:"undefined",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:'(v: number | "") => void',signature:{arguments:[{type:{name:"union",raw:'number | ""',elements:[{name:"number"},{name:"literal",value:'""'}]},name:"v"}],return:{name:"void"}}},description:"The callback function that is triggered when the value of the input changes."},min:{required:!1,tsType:{name:"number"},description:"The minimum value allowed for the input.",defaultValue:{value:"-Infinity",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"The maximum value allowed for the input.",defaultValue:{value:"Infinity",computed:!0}},aplyMin:{required:!1,tsType:{name:"boolean"},description:"The minimum value allowed for the input.",defaultValue:{value:"false",computed:!1}},aplyMax:{required:!1,tsType:{name:"boolean"},description:"The maximum value allowed for the input.",defaultValue:{value:"true",computed:!1}},minError:{required:!1,tsType:{name:"string"},description:"The minimum value allowed for the input."},maxError:{required:!1,tsType:{name:"string"},description:"The maximum value allowed for the input."},validator:{required:!1,tsType:{name:"FenextjsValidatorClass",elements:[{name:"number"}],raw:"FenextjsValidatorClass<number>"},description:"FenextjsValidatorClass used for input validation.",defaultValue:{value:"undefined",computed:!0}},optionsParseNumber:{required:!1,tsType:{name:"Intl.NumberFormatOptions"},description:"optionsParseNumber used for input validation."},optionsParseNumberDefault:{required:!1,tsType:{name:"Intl.NumberFormatOptions"},description:"optionsParseNumber used for input validation."},className:{required:!1,tsType:{name:"string"},description:"CSS class name for the input component."},classNameLabel:{required:!1,tsType:{name:"string"},description:"CSS class name for the input label."},classNameLabelError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error label."},classNameLabelOk:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation label."},classNameContentInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input container."},classNameInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input."},classNameInputEnabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the enabled input."},classNameInputDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the disabled input."},classNameIcon:{required:!1,tsType:{name:"string"},description:"CSS class name for the input icon."},classNameMaxLength:{required:!1,tsType:{name:"string"},description:""},classNameError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error message."},classNameOptions:{required:!1,tsType:{name:"string"},description:"CSS class name for the input options container."},classNameOption:{required:!1,tsType:{name:"string"},description:"CSS class name for each input option."},classNameOptionDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for a disabled input option."},classNameLoaderValidate:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation loader."},iconLoader:{required:!1,tsType:{name:"any"},description:"Icon to display while validating the input."}},composes:["Omit"]}}}]);