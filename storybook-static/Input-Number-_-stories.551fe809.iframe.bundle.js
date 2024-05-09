"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[1613],{"./src/Input/Number/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,UseValidator:()=>UseValidator,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Index_parameters,_Index_parameters_docs,_Index_parameters1,_UseValidator_parameters,_UseValidator_parameters_docs,_UseValidator_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),fenextjs_validator__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/fenextjs-validator/cjs/index.js")),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Input/Number/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Input/InputNumber",component:_index__WEBPACK_IMPORTED_MODULE_3__.Y},Profile=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.Y,{...args,children:"Test Children"}),Index=Profile.bind({});Index.args={label:"Label",placeholder:"Placeholder"};const UseValidator=Profile.bind({}),UseValidatorArg={label:"Label",placeholder:"Placeholder",validator:(0,fenextjs_validator__WEBPACK_IMPORTED_MODULE_2__.y)().isNumber().isRequired().isMin(4)};UseValidator.args=UseValidatorArg,Index.parameters={...Index.parameters,docs:{...null===(_Index_parameters=Index.parameters)||void 0===_Index_parameters?void 0:_Index_parameters.docs,source:{originalSource:"args => <InputNumber {...args}>Test Children</InputNumber>",...null===(_Index_parameters1=Index.parameters)||void 0===_Index_parameters1||null===(_Index_parameters_docs=_Index_parameters1.docs)||void 0===_Index_parameters_docs?void 0:_Index_parameters_docs.source}}},UseValidator.parameters={...UseValidator.parameters,docs:{...null===(_UseValidator_parameters=UseValidator.parameters)||void 0===_UseValidator_parameters?void 0:_UseValidator_parameters.docs,source:{originalSource:"args => <InputNumber {...args}>Test Children</InputNumber>",...null===(_UseValidator_parameters1=UseValidator.parameters)||void 0===_UseValidator_parameters1||null===(_UseValidator_parameters_docs=_UseValidator_parameters1.docs)||void 0===_UseValidator_parameters_docs?void 0:_UseValidator_parameters_docs.source}}};const __namedExportsOrder=["Index","UseValidator"]},"./src/Input/Number/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>InputNumber});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Input/Text/index.tsx"),fenextjs_svg_cjs_Number__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-svg/cjs/Number/index.js"),fenextjs_svg_cjs_Arrow__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/fenextjs-svg/cjs/Arrow/index.js"),fenextjs_validator__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/fenextjs-validator/cjs/index.js"),fenextjs_hook_cjs_useValidator__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/fenextjs-hook/cjs/useValidator.js");const InputNumber=param=>{let{defaultValue="",onChange,useBtnIncreaseDecrease=!1,validator,value,...props}=param;const[value_,setValue_]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null!=defaultValue?defaultValue:""),valueInput=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>null!=value?value:""==value_?defaultValue:value_),[value_,defaultValue,value]),setValue=v=>{setValue_(v),null==onChange||onChange(v)},minMaxValue=v=>{var _props_min,_props_max;return Math.max(null!==(_props_min=props.min)&&void 0!==_props_min?_props_min:-1/0,Math.min(null!==(_props_max=props.max)&&void 0!==_props_max?_props_max:1/0,v))},valueToNumber=v=>{try{var _replace,_this;return v=null===(_replace=(_this="".concat(v)).replace)||void 0===_replace?void 0:_replace.call(_this,/[^\d-]/g,""),parseFloat(v)}catch(e){return 0}},addValue=add=>()=>{if(null==props?void 0:props.disabled)return;const Value=minMaxValue((""==valueInput?0:valueInput)+add);setValue(Value)},{error:errorFenext}=(0,fenextjs_hook_cjs_useValidator__WEBPACK_IMPORTED_MODULE_6__.useValidator)({data:valueInput,validator:null!=validator?validator:(0,fenextjs_validator__WEBPACK_IMPORTED_MODULE_5__.y)()});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.S,{...props,type:"number",value:"".concat(null!=valueInput?valueInput:""),className:"fenext-input-number ".concat(null==props?void 0:props.className),useLoader:!1,error:errorFenext,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:useBtnIncreaseDecrease?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{onClick:addValue(1),className:"fenext-input-number-icon-arrow fenext-input-number-icon-increase",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fenextjs_svg_cjs_Number__WEBPACK_IMPORTED_MODULE_3__.SVGNumberIncrease,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{onClick:addValue(-1),className:"fenext-input-number-icon-arrow fenext-input-number-icon-decrease",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fenextjs_svg_cjs_Number__WEBPACK_IMPORTED_MODULE_3__.SVGNumberDecrease,{})})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fenext-input-number-icon-arrow",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{onClick:addValue(1),className:"fenext-input-number-icon-arrow-up",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fenextjs_svg_cjs_Arrow__WEBPACK_IMPORTED_MODULE_4__.Arrow,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{onClick:addValue(-1),className:"fenext-input-number-icon-arrow-down",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fenextjs_svg_cjs_Arrow__WEBPACK_IMPORTED_MODULE_4__.Arrow,{})})]})})}),onChangeValidate:v=>{var _props_onChangeValidate;const v2=minMaxValue(valueToNumber(v));var _props_onChangeValidate1;const s=null!==(_props_onChangeValidate1=null==props||null===(_props_onChangeValidate=props.onChangeValidate)||void 0===_props_onChangeValidate?void 0:_props_onChangeValidate.call(props,v2))&&void 0!==_props_onChangeValidate1?_props_onChangeValidate1:v2;return"".concat(s)},onChange:v=>{setValue(minMaxValue(valueToNumber(v)))}})})};InputNumber.__docgenInfo={description:"",methods:[],displayName:"InputNumber",props:{value:{required:!1,tsType:{name:"union",raw:'number | ""',elements:[{name:"number"},{name:"literal",value:'""'}]},description:'The default value of the input.\n@default ""'},defaultValue:{required:!1,tsType:{name:"union",raw:'number | ""',elements:[{name:"number"},{name:"literal",value:'""'}]},description:'The default value of the input.\n@default ""',defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:'(v: number | "") => void',signature:{arguments:[{type:{name:"union",raw:'number | ""',elements:[{name:"number"},{name:"literal",value:'""'}]},name:"v"}],return:{name:"void"}}},description:"The callback function that is triggered when the value of the input changes."},onChangeValidate:{required:!1,tsType:{name:"signature",type:"function",raw:'(v: number | "") => void',signature:{arguments:[{type:{name:"union",raw:'number | ""',elements:[{name:"number"},{name:"literal",value:'""'}]},name:"v"}],return:{name:"void"}}},description:"The callback function that is triggered when the input loses focus, after the value has been validated."},min:{required:!1,tsType:{name:"number"},description:"The minimum value allowed for the input."},max:{required:!1,tsType:{name:"number"},description:"The maximum value allowed for the input."},useBtnIncreaseDecrease:{required:!1,tsType:{name:"boolean"},description:"The useBtnIncreaseDecrease show btn.",defaultValue:{value:"false",computed:!1}},validator:{defaultValue:{value:"undefined",computed:!0},required:!1}},composes:["Omit"]}},"./node_modules/fenextjs-svg/cjs/Arrow/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Arrow=void 0;const react_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs").__importDefault(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"));exports.Arrow=({className=""})=>react_1.default.createElement("svg",{className:`fenext_svg ${className}`,viewBox:"0 0 452 258",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react_1.default.createElement("path",{d:"M225.922 257.565C217.824 257.565 209.727 254.473 203.553 248.302L9.26925 54.0165C-3.08975 41.6575 -3.08975 21.6195 9.26925 9.2655C21.6233 -3.0885 41.6573 -3.0885 54.0173 9.2655L225.922 181.181L397.828 9.2715C410.187 -3.0825 430.219 -3.0825 442.572 9.2715C454.937 21.6255 454.937 41.6635 442.572 54.0225L248.291 248.309C242.114 254.481 234.017 257.565 225.922 257.565Z",fill:"currentColor"})),exports.default=exports.Arrow},"./node_modules/fenextjs-svg/cjs/Number/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.SVGNumberDecrease=exports.SVGNumberIncrease=void 0;const react_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs").__importDefault(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"));exports.SVGNumberIncrease=({className=""})=>react_1.default.createElement("svg",{className:`fenext_svg ${className}`,viewBox:"0 0 416 416",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react_1.default.createElement("path",{d:"M240 32C240 14.3 225.7 0 208 0C190.3 0 176 14.3 176 32V176H32C14.3 176 0 190.3 0 208C0 225.7 14.3 240 32 240H176V384C176 401.7 190.3 416 208 416C225.7 416 240 401.7 240 384V240H384C401.7 240 416 225.7 416 208C416 190.3 401.7 176 384 176H240V32Z",fill:"currentColor"}));exports.SVGNumberDecrease=({className=""})=>react_1.default.createElement("svg",{className:`fenext_svg ${className}`,viewBox:"0 0 416 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react_1.default.createElement("path",{d:"M32 0H240H384C401.7 0 416 14.3 416 32C416 49.7 401.7 64 384 64H240H32C14.3 64 0 49.7 0 32C0 14.3 14.3 0 32 0Z",fill:"currentColor"}))}}]);