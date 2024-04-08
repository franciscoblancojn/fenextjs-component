"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[9454],{"./src/Input/Card/Number/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Input/Card/Number/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Input/Card/InputCardNumber",component:_index__WEBPACK_IMPORTED_MODULE_1__.a};var Index=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__.a,args,"Test Children")}.bind({});Index.args={label:"Label",placeholder:"Placeholder"},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <InputCardNumber {...args}>Test Children</InputCardNumber>",...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Input/Card/Number/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>InputCardNumber});var _home_francisco_work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),_home_francisco_work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Input/Text/index.tsx"),fenextjs_validator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-validator/cjs/index.js"),fenextjs_hook_cjs_useValidator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-hook/cjs/useValidator.js"),fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/fenextjs-hook/cjs/useData.js"),fenextjs_svg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/fenextjs-svg/cjs/index.js"),fenextjs_functions__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/fenextjs-functions/cjs/index.js"),_excluded=["value","defaultValue","onChange","validator","maxNumberLength"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,InputCardNumberIcons={AMEX:__jsx(fenextjs_svg__WEBPACK_IMPORTED_MODULE_5__.CardAmericanExpress,null),DINERS:__jsx(fenextjs_svg__WEBPACK_IMPORTED_MODULE_5__.CardDinersClub,null),DINERS_CARTE_BLANCHE:__jsx(fenextjs_svg__WEBPACK_IMPORTED_MODULE_5__.CardDinersClub,null),DISCOVER:__jsx(fenextjs_svg__WEBPACK_IMPORTED_MODULE_5__.CardDiscover,null),JCB:__jsx(fenextjs_svg__WEBPACK_IMPORTED_MODULE_5__.CardJCB,null),MASTERCARD:__jsx(fenextjs_svg__WEBPACK_IMPORTED_MODULE_5__.CardMasterCard,null),OTHER:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),VISA:__jsx(fenextjs_svg__WEBPACK_IMPORTED_MODULE_5__.CardVisa,null),VISA_ELECTRON:__jsx(fenextjs_svg__WEBPACK_IMPORTED_MODULE_5__.CardVisaElectron,null)},InputCardNumber=function InputCardNumber(_ref){var valueProps=_ref.value,_ref$defaultValue=_ref.defaultValue,defaultValue=void 0===_ref$defaultValue?"":_ref$defaultValue,onChange=_ref.onChange,_ref$validator=_ref.validator,validator=void 0===_ref$validator?void 0:_ref$validator,_ref$maxNumberLength=_ref.maxNumberLength,maxNumberLength=void 0===_ref$maxNumberLength?19:_ref$maxNumberLength,props=(0,_home_francisco_work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_7__.A)(_ref,_excluded),_useData=(0,fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_4__.useData)(null!=defaultValue?defaultValue:"",{onChangeDataAfter:onChange}),data=_useData.data,setData=_useData.setData,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return null!=valueProps?valueProps:data}),[valueProps,data]),errorFenext=(0,fenextjs_hook_cjs_useValidator__WEBPACK_IMPORTED_MODULE_3__.useValidator)({data:value,validator:null!=validator?validator:(0,fenextjs_validator__WEBPACK_IMPORTED_MODULE_2__.y)()}).error,ICON=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return InputCardNumberIcons[(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_6__.GetCardType)(value)]}),[value]);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_Text__WEBPACK_IMPORTED_MODULE_1__.S,(0,_home_francisco_work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_8__.A)({},props,{value:function numberToTextCard(e){var n="".concat(e).split(" ").join(""),first3=n.slice(0,4),secud3=n.slice(4,8),eighthDigit=n.slice(8,12),lastNumbers=n.slice(12,Math.max(15,maxNumberLength));return"".concat(null!=first3?first3:"").concat(secud3?" "+secud3:"").concat(eighthDigit?" "+eighthDigit:"").concat(lastNumbers?" "+lastNumbers:"")}(value),className:"fenext-input-card-number ".concat(null==props?void 0:props.className),useLoader:!1,error:errorFenext,icon:ICON,onChange:function onChange(v){setData("".concat(v).replace(/[^0-9]/g,"").slice(0,Math.max(15,maxNumberLength)))},inputMode:"numeric"})))};InputCardNumber.__docgenInfo={description:"",methods:[],displayName:"InputCardNumber",props:{maxNumberLength:{required:!1,tsType:{name:"number"},description:"The max length number card.\n@default 19\n@min 15",defaultValue:{value:"19",computed:!1}},defaultValue:{defaultValue:{value:'""',computed:!1},required:!1},validator:{defaultValue:{value:"undefined",computed:!0},required:!1}},composes:["Omit"]}}}]);