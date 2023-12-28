"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[6690],{"./src/Input/AutocompleteGoogleMaps/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Input/AutocompleteGoogleMaps/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Input/InputAutocompleteGoogleMaps",component:_index__WEBPACK_IMPORTED_MODULE_1__.i};var Profile=function Profile(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__.i,args,"Test Children")};Profile.displayName="Profile";var Index=Profile.bind({});Index.args={label:"Label"},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:"args => <InputAutocompleteGoogleMaps {...args}>Test Children</InputAutocompleteGoogleMaps>",...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Input/AutocompleteGoogleMaps/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>InputAutocompleteGoogleMaps});var _home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Input/Text/index.tsx"),_react_google_maps_api__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@react-google-maps/api/dist/esm.js"),fenextjs_svg_cjs_close__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-svg/cjs/close/index.js"),fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-hook/cjs/useData.js"),_Error__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/Error/index.tsx"),fenextjs_error__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/fenextjs-error/cjs/index.js"),_excluded=["onChange","defaultValue","GOOGLE_KEY","_t"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,InputAutocompleteGoogleMaps=function InputAutocompleteGoogleMaps(_ref){var _defaultValue$formatt,onChange=_ref.onChange,_ref$defaultValue=_ref.defaultValue,defaultValue=void 0===_ref$defaultValue?void 0:_ref$defaultValue,_ref$GOOGLE_KEY=_ref.GOOGLE_KEY,GOOGLE_KEY=void 0===_ref$GOOGLE_KEY?"AIzaSyBDO62qH1S6rSPaMqi_Qxu6jA7CffLIINU":_ref$GOOGLE_KEY,_ref$_t=_ref._t,_t=void 0===_ref$_t?function(e){return e}:_ref$_t,props=(0,_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref,_excluded),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null!==(_defaultValue$formatt=null==defaultValue?void 0:defaultValue.formatted_address)&&void 0!==_defaultValue$formatt?_defaultValue$formatt:""),valueText=_useState[0],setValueText=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0),error=_useState2[0],setError=_useState2[1],setData=(0,fenextjs_hook_cjs_useData__WEBPACK_IMPORTED_MODULE_3__.useData)(defaultValue,{onChangeDataAfter:function onChangeDataAfter(d){var _d$formatted_address;null==onChange||onChange(d),setValueText(null!==(_d$formatted_address=null==d?void 0:d.formatted_address)&&void 0!==_d$formatted_address?_d$formatted_address:"")}}).setData,_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0),autocompleteValue=_useState3[0],setAutocompleteValue=_useState3[1];return __jsx("div",{className:"fenext-input-autocomplete-google-maps"},__jsx("div",{className:"fenext-input-autocomplete-google-maps-content"},__jsx("div",{className:"fenext-input-autocomplete-google-maps-content-input"},__jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_7__.KJ,{googleMapsApiKey:null!=GOOGLE_KEY?GOOGLE_KEY:"",libraries:["places","geometry"],onError:function onError(){setError(new fenextjs_error__WEBPACK_IMPORTED_MODULE_5__.ErrorGoogleKeyInvalid)}},__jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_7__.F2,(0,_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_8__.Z)({},props,{onLoad:setAutocompleteValue,onPlaceChanged:function onPlaceChanged(){if(autocompleteValue){var _autocompleteValue$ge,place=null==autocompleteValue||null===(_autocompleteValue$ge=autocompleteValue.getPlace)||void 0===_autocompleteValue$ge?void 0:_autocompleteValue$ge.call(autocompleteValue);if(null==place)return void setError(new fenextjs_error__WEBPACK_IMPORTED_MODULE_5__.ErrorGoogleKeyInvalid);setData(place)}}}),__jsx(_Text__WEBPACK_IMPORTED_MODULE_1__.o,(0,_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_8__.Z)({},props,{_t,value:valueText,onChange:setValueText}))))),__jsx("span",{className:"fenext-input-autocomplete-google-maps-close"},__jsx(fenextjs_svg_cjs_close__WEBPACK_IMPORTED_MODULE_2__.Close,null))),error&&__jsx(_Error__WEBPACK_IMPORTED_MODULE_4__.q,{error,_t}),(""==GOOGLE_KEY||!GOOGLE_KEY)&&__jsx(_Error__WEBPACK_IMPORTED_MODULE_4__.q,{error:new fenextjs_error__WEBPACK_IMPORTED_MODULE_5__.ErrorGoogleKeyNotFound,_t}))};InputAutocompleteGoogleMaps.displayName="InputAutocompleteGoogleMaps";try{InputAutocompleteGoogleMaps.displayName="InputAutocompleteGoogleMaps",InputAutocompleteGoogleMaps.__docgenInfo={description:"Component that renders a AutocompleteGoogleMaps input.\nTakes an InputAutocompleteGoogleMapsProps object as props.",displayName:"InputAutocompleteGoogleMaps",props:{GOOGLE_KEY:{defaultValue:{value:'process.env["NEXT_PUBLIC_GOOGLE_KEY"]'},description:"GOOGLE_KEY of Google maps.",name:"GOOGLE_KEY",required:!1,type:{name:"string"}},defaultValue:{defaultValue:{value:"undefined"},description:"defaultValue of input.",name:"defaultValue",required:!1,type:{name:"AddressGoogle"}},onChange:{defaultValue:null,description:"Function to call when the input value changes.",name:"onChange",required:!1,type:{name:"((v: AddressGoogle) => void)"}},loader:{defaultValue:null,description:"Loader of Input.",name:"loader",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of Input.",name:"name",required:!1,type:{name:"any"}},props:{defaultValue:null,description:"Additional properties to pass to the input component.",name:"props",required:!1,type:{name:"any"}},type:{defaultValue:null,description:"Type of input to display (e.g. text, number, password, etc.).",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"url"'},{value:'"text"'},{value:'"search"'},{value:'"tel"'},{value:'"password"'},{value:'"textarea"'}]}},id:{defaultValue:null,description:"ID of Input.",name:"id",required:!1,type:{name:"any"}},datalist:{defaultValue:null,description:"Datalist name of Input.",name:"datalist",required:!1,type:{name:"any"}},yup:{defaultValue:null,description:"Yup object used for input validation.",name:"yup",required:!1,type:{name:"any"}},validator:{defaultValue:null,description:"FenextjsValidatorClass used for input validation.",name:"validator",required:!1,type:{name:"FenextjsValidatorClass<any>"}},label:{defaultValue:null,description:"Label text to display for the input.",name:"label",required:!1,type:{name:"any"}},placeholder:{defaultValue:null,description:"Placeholder text to display in the input field.",name:"placeholder",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"Function to call when the input loses focus.",name:"onBlur",required:!1,type:{name:"((v: string) => void)"}},onEnter:{defaultValue:null,description:"Function to call when the Enter key is pressed.",name:"onEnter",required:!1,type:{name:"(() => void)"}},onChangeValidateBeforeYup:{defaultValue:null,description:"Function to call before using Yup validation.",name:"onChangeValidateBeforeYup",required:!1,type:{name:"((e: string) => void | Promise<void>)"}},onChangeValidateAfterYup:{defaultValue:null,description:"Function to call after using Yup validation.",name:"onChangeValidateAfterYup",required:!1,type:{name:"((e: string) => void | Promise<void>)"}},icon:{defaultValue:null,description:"Icon to display inside the input field.",name:"icon",required:!1,type:{name:"any"}},iconPos:{defaultValue:null,description:"Position of Icon to display inside the input field.",name:"iconPos",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},extraInContentInput:{defaultValue:null,description:"Extra content to display inside the input container.",name:"extraInContentInput",required:!1,type:{name:"any"}},extraInLabel:{defaultValue:null,description:"Extra content to display inside the input label.",name:"extraInLabel",required:!1,type:{name:"any"}},disabled:{defaultValue:null,description:"Boolean value indicating whether the input field is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:null,description:"Boolean value indicating whether to display the input icon.",name:"showIcon",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Text of Error of Input.",name:"error",required:!1,type:{name:"ErrorFenextjs<any>"}},errorWithIsChange:{defaultValue:null,description:"Show error if IsChange.",name:"errorWithIsChange",required:!1,type:{name:"boolean"}},optional:{defaultValue:null,description:"Optional of Input.",name:"optional",required:!1,type:{name:"boolean"}},optionalText:{defaultValue:null,description:"Optional text of Input.",name:"optionalText",required:!1,type:{name:"string"}},isChange:{defaultValue:null,description:"Loader of Input.",name:"isChange",required:!1,type:{name:"boolean"}},useLoader:{defaultValue:null,description:"useLoader of Input.",name:"useLoader",required:!1,type:{name:"boolean"}},autoComplete:{defaultValue:null,description:"AutoComplete of Input.",name:"autoComplete",required:!1,type:{name:"boolean"}},onKeyDown:{defaultValue:null,description:"onKeyDown of Input.",name:"onKeyDown",required:!1,type:{name:"(KeyboardEventHandler<HTMLTextAreaElement> & KeyboardEventHandler<HTMLInputElement>)"}},maxLength:{defaultValue:null,description:"maxLength of Input.",name:"maxLength",required:!1,type:{name:"number"}},regExp:{defaultValue:null,description:"regExp of Input.",name:"regExp",required:!1,type:{name:"RegExp"}},regExpReplace:{defaultValue:null,description:"regExpReplace of Input.",name:"regExpReplace",required:!1,type:{name:"string"}},onChangeEvent:{defaultValue:null,description:"onChangeEvent of Input.",name:"onChangeEvent",required:!1,type:{name:"((e: InputTextChangeEvent) => void)"}},classNameLabel:{defaultValue:null,description:"CSS class name for the input label.",name:"classNameLabel",required:!1,type:{name:"string"}},classNameLabelError:{defaultValue:null,description:"CSS class name for the input error label.",name:"classNameLabelError",required:!1,type:{name:"string"}},classNameLabelOk:{defaultValue:null,description:"CSS class name for the input validation label.",name:"classNameLabelOk",required:!1,type:{name:"string"}},classNameContentInput:{defaultValue:null,description:"CSS class name for the input container.",name:"classNameContentInput",required:!1,type:{name:"string"}},classNameInput:{defaultValue:null,description:"CSS class name for the input.",name:"classNameInput",required:!1,type:{name:"string"}},classNameInputEnabled:{defaultValue:null,description:"CSS class name for the enabled input.",name:"classNameInputEnabled",required:!1,type:{name:"string"}},classNameInputDisabled:{defaultValue:null,description:"CSS class name for the disabled input.",name:"classNameInputDisabled",required:!1,type:{name:"string"}},classNameIcon:{defaultValue:null,description:"CSS class name for the input icon.",name:"classNameIcon",required:!1,type:{name:"string"}},classNameError:{defaultValue:null,description:"CSS class name for the input error message.",name:"classNameError",required:!1,type:{name:"string"}},classNameOptions:{defaultValue:null,description:"CSS class name for the input options container.",name:"classNameOptions",required:!1,type:{name:"string"}},classNameOption:{defaultValue:null,description:"CSS class name for each input option.",name:"classNameOption",required:!1,type:{name:"string"}},classNameOptionDisabled:{defaultValue:null,description:"CSS class name for a disabled input option.",name:"classNameOptionDisabled",required:!1,type:{name:"string"}},classNameLoaderValidate:{defaultValue:null,description:"CSS class name for the input validation loader.",name:"classNameLoaderValidate",required:!1,type:{name:"string"}},iconLoader:{defaultValue:null,description:"Icon to display while validating the input.",name:"iconLoader",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Input/AutocompleteGoogleMaps/index.tsx#InputAutocompleteGoogleMaps"]={docgenInfo:InputAutocompleteGoogleMaps.__docgenInfo,name:"InputAutocompleteGoogleMaps",path:"src/Input/AutocompleteGoogleMaps/index.tsx#InputAutocompleteGoogleMaps"})}catch(__react_docgen_typescript_loader_error){}}}]);