"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[1654],{"./src/Input/SelectMultiple/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomOptionsSelected:()=>CustomOptionsSelected,Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Input/SelectMultiple/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Input/InputSelectMultiple",component:_index__WEBPACK_IMPORTED_MODULE_2__.z};var Profile=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__.z,args,"Test Children")},Index=Profile.bind({}),args={label:"Select Multiple",placeholder:"Select Multiple",datalist:"listOption",nItems:11,maxLengthShowOptions:10,defaultValue:[{id:"1",text:"Option 1",children:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"Option 1"),img:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg"},{id:"2",text:"Option 2",children:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"Option 2")}],options:[{id:"1",text:"Option 1",disabled:!0,img:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg"},{id:"2",text:"Option 2",img:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg"},{id:"3",text:"Option 3"},{id:"4",text:"Option 4"},{id:"5",text:"Option 5"},{id:"6",text:"Option 6",children:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"Option 6")},{id:"7",text:"Option 7",children:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"Option 7")},{id:"8",text:"Option 8"},{id:"9",text:"Option 9"},{id:"10",text:"Option 10"},{id:"11",text:"Option 11"}],onChangeValidate:function onChangeValidate(e){if(3==e.length)throw"No Puedes seleccionar 3 elementos"},typeSelectStyle:"normal",typeSelectMultipleStyle:"checkbox"};Index.args=args;var CustomOptionsSelected=Profile.bind({}),CustomOptionsSelectedArgs=_objectSpread(_objectSpread({},args),{},{CustomOptionsSelected:function CustomOptionsSelected(_ref){var text=_ref.text;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"Custom Option = ",text)}});CustomOptionsSelected.args=CustomOptionsSelectedArgs,Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <InputSelectMultiple {...args}>Test Children</InputSelectMultiple>",...Index.parameters?.docs?.source}}},CustomOptionsSelected.parameters={...CustomOptionsSelected.parameters,docs:{...CustomOptionsSelected.parameters?.docs,source:{originalSource:"args => <InputSelectMultiple {...args}>Test Children</InputSelectMultiple>",...CustomOptionsSelected.parameters?.docs?.source}}};const __namedExportsOrder=["Index","CustomOptionsSelected"]},"./src/Input/SelectMultiple/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>InputSelectMultiple});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Select__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Input/Select/index.tsx"),fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/fenextjs-hook/cjs/useData/index.js"),_SelectOption__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/Input/SelectOption/index.tsx"),fenextjs_error__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/fenextjs-error/cjs/index.js"),fenextjs_interface__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/fenextjs-interface/cjs/index.js"),fenextjs_svg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/fenextjs-svg/cjs/index.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),_excluded=["classNameSelectMultiple","classNameSelectMultipleList","onChange","onChangeData","value","defaultValue","onChangeValidate","options","iconDelete","typeSelectMultipleStyle","CustomOptionsSelected","validatorData","useTOption"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var InputSelectMultiple=function InputSelectMultiple(_ref){var _ref3,_props$error,_ref$classNameSelectM=_ref.classNameSelectMultiple,classNameSelectMultiple=void 0===_ref$classNameSelectM?"":_ref$classNameSelectM,_ref$classNameSelectM2=_ref.classNameSelectMultipleList,classNameSelectMultipleList=void 0===_ref$classNameSelectM2?"":_ref$classNameSelectM2,onChange=_ref.onChange,onChangeData=_ref.onChangeData,_ref$value=_ref.value,value=void 0===_ref$value?void 0:_ref$value,_ref$defaultValue=_ref.defaultValue,defaultValue=void 0===_ref$defaultValue?[]:_ref$defaultValue,onChangeValidate=_ref.onChangeValidate,_ref$options=_ref.options,options=void 0===_ref$options?[]:_ref$options,_ref$iconDelete=_ref.iconDelete,iconDelete=void 0===_ref$iconDelete?__jsx(fenextjs_svg__WEBPACK_IMPORTED_MODULE_8__.SvgTrash,null):_ref$iconDelete,_ref$typeSelectMultip=_ref.typeSelectMultipleStyle,typeSelectMultipleStyle=void 0===_ref$typeSelectMultip?"normal":_ref$typeSelectMultip,_ref$CustomOptionsSel=_ref.CustomOptionsSelected,CustomOptionsSelected=void 0===_ref$CustomOptionsSel?void 0:_ref$CustomOptionsSel,validatorData=_ref.validatorData,useTOption=_ref.useTOption,props=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_10__.A)(_ref,_excluded),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0),error=_useState[0],setError=_useState[1],_useData=(0,fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_4__.useData)(defaultValue,{onChangeDataAfter:function onChangeDataAfter(e){null==onChange||onChange(e),null==onChangeData||onChangeData(null==e?void 0:e.map((function(e){return e.data})))}}),data=_useData.data,setData=_useData.setData,setDataFunction=_useData.setDataFunction,dataMemo=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return null!=value?value:data}),[data,value]),validateOptions=function(){var _ref2=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__.A)(_home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark((function _callee(){return _home_francisco_Work_fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!onChangeValidate){_context.next=10;break}return setError(void 0),_context.prev=2,_context.next=5,onChangeValidate(dataMemo);case 5:_context.next=10;break;case 7:_context.prev=7,_context.t0=_context.catch(2),setError(new fenextjs_error__WEBPACK_IMPORTED_MODULE_6__.ErrorFenextjs({code:fenextjs_interface__WEBPACK_IMPORTED_MODULE_7__.ErrorCode.ERROR,message:"".concat(_context.t0.message)}));case 10:case"end":return _context.stop()}}),_callee,null,[[2,7]])})));return function validateOptions(){return _ref2.apply(this,arguments)}}();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){validateOptions()}),[dataMemo]);var onAddItemSelect=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(newItem){newItem&&setDataFunction((function(){var old=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_12__.A)(dataMemo);return old.find((function(e){return e.id==newItem.id}))?old.filter((function(e){return e.id!=newItem.id})):[].concat((0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_12__.A)(old),[newItem])}))}),[dataMemo]),onRemoveItemSelect=function onRemoveItemSelect(deleteItem){setData(dataMemo.filter((function(option){return option.id!=deleteItem.id})))},OPTIONS=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return options.map((function(option){var isSelect=null!=dataMemo.find((function(e){return e.id==option.id}));return _objectSpread(_objectSpread({},option),{},{hidden:isSelect,selected:isSelect})}))}),[options,dataMemo]),errorFenextVD=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_9__.useValidator)({data:null==dataMemo?void 0:dataMemo.map((function(e){return null==e?void 0:e.data})),validator:validatorData}).error;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"\n                    fenext-select-multiple\n                    fenext-select-multiple-".concat(typeSelectMultipleStyle,"\n                    ").concat(classNameSelectMultiple,"\n                ")},__jsx(_Select__WEBPACK_IMPORTED_MODULE_3__.$,(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_13__.A)({},props,{onChange:onAddItemSelect,options:OPTIONS,error:null!==(_ref3=null!==(_props$error=null==props?void 0:props.error)&&void 0!==_props$error?_props$error:errorFenextVD)&&void 0!==_ref3?_ref3:error,isSelectClearText:!0,showOptionIconImg:!1,useTOption,extraInLabel:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fenext-select-multiple-list ".concat(classNameSelectMultipleList," ")},dataMemo.map((function(option){var _option$iconDelete,_props$disabled,OptionTag=null!=CustomOptionsSelected?CustomOptionsSelected:_SelectOption__WEBPACK_IMPORTED_MODULE_5__.K;return __jsx(OptionTag,(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_13__.A)({},option,{type:"multiple",onDelete:onRemoveItemSelect,iconDelete:null!==(_option$iconDelete=null==option?void 0:option.iconDelete)&&void 0!==_option$iconDelete?_option$iconDelete:iconDelete,disabled:null!==(_props$disabled=null==props?void 0:props.disabled)&&void 0!==_props$disabled?_props$disabled:null==option?void 0:option.disabled,useT:useTOption}))}))),null==props?void 0:props.extraInLabel)}))))};InputSelectMultiple.__docgenInfo={description:"",methods:[],displayName:"InputSelectMultiple",props:{defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"}],raw:"InputSelectItemOptionBaseProps<T>[]"},description:"Default Options of select.",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"}],raw:"InputSelectItemOptionBaseProps<T>[]"},description:"Default Options of select.",defaultValue:{value:"undefined",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v?: InputSelectItemOptionBaseProps<T>[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"}],raw:"InputSelectItemOptionBaseProps<T>[]"},name:"v"}],return:{name:"void"}}},description:"Function to call when the input value changes."},onChangeData:{required:!1,tsType:{name:"signature",type:"function",raw:"(v?: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"v"}],return:{name:"void"}}},description:"Function to call when the input value changes."},onChangeValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"(\n    e: InputSelectItemOptionBaseProps<T>[],\n) => Promise<any> | any",signature:{arguments:[{type:{name:"Array",elements:[{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"}],raw:"InputSelectItemOptionBaseProps<T>[]"},name:"e"}],return:{name:"union",raw:"Promise<any> | any",elements:[{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"},{name:"any"}]}}},description:"Function to call for custom input validation."},iconDelete:{required:!1,tsType:{name:"ReactNode"},description:"iconDelete custom of option.\n@default <Trash />",defaultValue:{value:"<SvgTrash />",computed:!1}},typeSelectMultipleStyle:{required:!1,tsType:{name:"union",raw:'"normal" | "checkbox"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"checkbox"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},CustomOptionsSelected:{required:!1,tsType:{name:"InputSelectOption"},description:"",defaultValue:{value:"undefined",computed:!0}},validatorData:{required:!1,tsType:{name:"FenextjsValidatorClass",elements:[{name:"Array",elements:[{name:"unknown"}],raw:"(T | undefined)[]"}],raw:"FenextjsValidatorClass<(T | undefined)[]>"},description:"FenextjsValidatorClass used for input validation."},classNameLabel:{required:!1,tsType:{name:"string"},description:"CSS class name for the input label."},classNameLabelError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error label."},classNameLabelOk:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation label."},classNameContentInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input container."},classNameInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input."},classNameInputEnabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the enabled input."},classNameInputDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the disabled input."},classNameIcon:{required:!1,tsType:{name:"string"},description:"CSS class name for the input icon."},classNameError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error message."},classNameOptions:{required:!1,tsType:{name:"string"},description:"CSS class name for the input options container."},classNameOption:{required:!1,tsType:{name:"string"},description:"CSS class name for each input option."},classNameOptionDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for a disabled input option."},classNameLoaderValidate:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation loader."},iconLoader:{required:!1,tsType:{name:"any"},description:"Icon to display while validating the input."},classNameOptionImg:{required:!1,tsType:{name:"string"},description:"CSS class name for the option img select."},classNameOptionDelete:{required:!1,tsType:{name:"string"},description:"CSS class name for the delete option select."},classNameSelect:{required:!1,tsType:{name:"string"},description:"CSS class name for the input select."},classNameList:{required:!1,tsType:{name:"string"},description:"CSS class name for the list options."},classNameSelectMultiple:{required:!1,tsType:{name:"string"},description:"CSS class name for the input select-multiple.",defaultValue:{value:'""',computed:!1}},classNameSelectMultipleList:{required:!1,tsType:{name:"string"},description:"CSS class name for the list options.",defaultValue:{value:'""',computed:!1}},options:{defaultValue:{value:"[]",computed:!1},required:!1}},composes:["Omit"]}}}]);