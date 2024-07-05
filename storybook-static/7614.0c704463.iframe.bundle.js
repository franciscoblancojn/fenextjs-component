"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[7614],{"./src/Input/SelectMultiple/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>InputSelectMultiple});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Select__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Input/Select/index.tsx"),fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-hook/cjs/useData.js"),_SelectOption__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/Input/SelectOption/index.tsx"),fenextjs_error__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/fenextjs-error/cjs/index.js"),fenextjs_interface__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/fenextjs-interface/cjs/index.js"),fenextjs_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/fenextjs-svg/cjs/index.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js");const InputSelectMultiple=param=>{let{classNameSelectMultiple="",classNameSelectMultipleList="",onChange,onChangeData,value,defaultValue=[],onChangeValidate,options=[],iconDelete=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fenextjs_svg__WEBPACK_IMPORTED_MODULE_7__.Trash,{}),typeSelectMultipleStyle="normal",CustomOptionsSelected,validatorData,useTOption,...props}=param;const[error,setError]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0),{data,setData,setDataFunction}=(0,fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_3__.useData)(defaultValue,{onChangeDataAfter:e=>{null==onChange||onChange(e),null==onChangeData||onChangeData(null==e?void 0:e.map((e=>e.data)))}}),dataMemo=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>null!=value?value:data),[data,value]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(async()=>{if(onChangeValidate){setError(void 0);try{await onChangeValidate(dataMemo)}catch(error){setError(new fenextjs_error__WEBPACK_IMPORTED_MODULE_5__.ErrorFenextjs({code:fenextjs_interface__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.ERROR,message:"".concat(error.message)}))}}})()}),[dataMemo]);const onAddItemSelect=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((newItem=>{newItem&&setDataFunction((()=>{const old=[...dataMemo];return old.find((e=>e.id==newItem.id))?old.filter((e=>e.id!=newItem.id)):[...old,newItem]}))}),[dataMemo]),onRemoveItemSelect=deleteItem=>{setData(dataMemo.filter((option=>option.id!=deleteItem.id)))},OPTIONS=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>options.map((option=>{const isSelect=null!=dataMemo.find((e=>e.id==option.id));return{...option,hidden:isSelect,selected:isSelect}}))),[options,dataMemo]),{error:errorFenextVD}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_8__.useValidator)({data:null==dataMemo?void 0:dataMemo.map((e=>null==e?void 0:e.data)),validator:validatorData});var _props_error,_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"\n                    fenext-select-multiple\n                    fenext-select-multiple-".concat(typeSelectMultipleStyle,"\n                    ").concat(classNameSelectMultiple,"\n                "),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Select__WEBPACK_IMPORTED_MODULE_2__.$,{...props,onChange:onAddItemSelect,options:OPTIONS,error:null!==(_ref=null!==(_props_error=null==props?void 0:props.error)&&void 0!==_props_error?_props_error:errorFenextVD)&&void 0!==_ref?_ref:error,isSelectClearText:!0,showOptionIconImg:!1,useTOption,extraInLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-select-multiple-list ".concat(classNameSelectMultipleList," "),children:dataMemo.map((option=>{const OptionTag=null!=CustomOptionsSelected?CustomOptionsSelected:_SelectOption__WEBPACK_IMPORTED_MODULE_4__.K;var _option_iconDelete,_props_disabled;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OptionTag,{...option,type:"multiple",onDelete:onRemoveItemSelect,iconDelete:null!==(_option_iconDelete=null==option?void 0:option.iconDelete)&&void 0!==_option_iconDelete?_option_iconDelete:iconDelete,disabled:null!==(_props_disabled=null==props?void 0:props.disabled)&&void 0!==_props_disabled?_props_disabled:null==option?void 0:option.disabled,useT:useTOption})}))}),null==props?void 0:props.extraInLabel]})})})})};InputSelectMultiple.__docgenInfo={description:"",methods:[],displayName:"InputSelectMultiple",props:{defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"}],raw:"InputSelectItemOptionBaseProps<T>[]"},description:"Default Options of select.",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"}],raw:"InputSelectItemOptionBaseProps<T>[]"},description:"Default Options of select.",defaultValue:{value:"undefined",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v?: InputSelectItemOptionBaseProps<T>[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"}],raw:"InputSelectItemOptionBaseProps<T>[]"},name:"v"}],return:{name:"void"}}},description:"Function to call when the input value changes."},onChangeData:{required:!1,tsType:{name:"signature",type:"function",raw:"(v?: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"v"}],return:{name:"void"}}},description:"Function to call when the input value changes."},onChangeValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"(\n    e: InputSelectItemOptionBaseProps<T>[],\n) => Promise<any> | any",signature:{arguments:[{type:{name:"Array",elements:[{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"}],raw:"InputSelectItemOptionBaseProps<T>[]"},name:"e"}],return:{name:"union",raw:"Promise<any> | any",elements:[{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"},{name:"any"}]}}},description:"Function to call for custom input validation."},iconDelete:{required:!1,tsType:{name:"ReactNode"},description:"iconDelete custom of option.\n@default <Trash />",defaultValue:{value:"<Trash />",computed:!1}},typeSelectMultipleStyle:{required:!1,tsType:{name:"union",raw:'"normal" | "checkbox"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"checkbox"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},CustomOptionsSelected:{required:!1,tsType:{name:"InputSelectOption"},description:"",defaultValue:{value:"undefined",computed:!0}},validatorData:{required:!1,tsType:{name:"FenextjsValidatorClass",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"FenextjsValidatorClass<T[]>"},description:"FenextjsValidatorClass used for input validation."},classNameLabel:{required:!1,tsType:{name:"string"},description:"CSS class name for the input label."},classNameLabelError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error label."},classNameLabelOk:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation label."},classNameContentInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input container."},classNameInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input."},classNameInputEnabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the enabled input."},classNameInputDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the disabled input."},classNameIcon:{required:!1,tsType:{name:"string"},description:"CSS class name for the input icon."},classNameError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error message."},classNameOptions:{required:!1,tsType:{name:"string"},description:"CSS class name for the input options container."},classNameOption:{required:!1,tsType:{name:"string"},description:"CSS class name for each input option."},classNameOptionDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for a disabled input option."},classNameLoaderValidate:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation loader."},iconLoader:{required:!1,tsType:{name:"any"},description:"Icon to display while validating the input."},classNameOptionImg:{required:!1,tsType:{name:"string"},description:"CSS class name for the option img select."},classNameOptionDelete:{required:!1,tsType:{name:"string"},description:"CSS class name for the delete option select."},classNameSelect:{required:!1,tsType:{name:"string"},description:"CSS class name for the input select."},classNameList:{required:!1,tsType:{name:"string"},description:"CSS class name for the list options."},classNameSelectMultiple:{required:!1,tsType:{name:"string"},description:"CSS class name for the input select-multiple.",defaultValue:{value:'""',computed:!1}},classNameSelectMultipleList:{required:!1,tsType:{name:"string"},description:"CSS class name for the list options.",defaultValue:{value:'""',computed:!1}},options:{defaultValue:{value:"[]",computed:!1},required:!1}},composes:["Omit"]}},"./src/Input/SelectMultipleT/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>InputSelectMultipleT});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_SelectMultiple__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Input/SelectMultiple/index.tsx"));const InputSelectMultipleT=param=>{let{defaultValue,value,options,onChange,onParse,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SelectMultiple__WEBPACK_IMPORTED_MODULE_2__.z,{...props,defaultValue:defaultValue?defaultValue.map(onParse):void 0,value:value?value.map(onParse):void 0,options:options.map(onParse),onChangeData:onChange})})};InputSelectMultipleT.__docgenInfo={description:"",methods:[],displayName:"InputSelectMultipleT",props:{defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Default Options of select."},value:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Value Options of select."},options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Options of select."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v?: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"v"}],return:{name:"void"}}},description:"Function to call when the input value changes."},onParse:{required:!0,tsType:{name:"signature",type:"function",raw:"(v?: T) => InputSelectItemOptionBaseProps<T>",signature:{arguments:[{type:{name:"T"},name:"v"}],return:{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"}}},description:"Function for converter T to InputSelectItemOptionBaseProps<T>"}},composes:["Omit"]}}}]);