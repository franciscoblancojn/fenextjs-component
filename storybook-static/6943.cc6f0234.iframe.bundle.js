"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[6943],{"./src/Input/Scanner/TextQr/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>InputScannerTextQr});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Input/Text/index.tsx"),_Qr__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Input/Scanner/Qr/index.tsx")),fenextjs_hook__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js");const InputScannerTextQr=param=>{let{className="",defaultValue="",onChange,...props}=param;const{data,setData}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_4__.useData)(null!=defaultValue?defaultValue:"",{onChangeDataAfter:onChange});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_1__.S,{...props,className:"\n                    fenext-input-scanner-text-qr\n                    ".concat(null!=className?className:"","\n                "),value:data,onChange:setData,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Qr__WEBPACK_IMPORTED_MODULE_3__.O,{...props,onChange:setData})})})})};InputScannerTextQr.__docgenInfo={description:"",methods:[],displayName:"InputScannerTextQr",props:{id:{required:!1,tsType:{name:"string"},description:"ID of Input."},name:{required:!1,tsType:{name:"string"},description:"Name of Input."},datalist:{required:!1,tsType:{name:"any"},description:"Datalist name of Input."},validator:{required:!1,tsType:{name:"FenextjsValidatorClass"},description:"FenextjsValidatorClass used for input validation."},label:{required:!1,tsType:{name:"ReactNode"},description:"Label text to display for the input."},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text to display in the input field."},placeholderFocus:{required:!1,tsType:{name:"string"},description:"Placeholder text to display in the input field."},defaultValue:{required:!1,tsType:{name:"union",raw:"string | undefined | null",elements:[{name:"string"},{name:"undefined"},{name:"null"}]},description:"Default value to set for the input field.",defaultValue:{value:'""',computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | undefined | null",elements:[{name:"string"},{name:"undefined"},{name:"null"}]},description:"Value to set for the input field."},type:{required:!1,tsType:{name:"union",raw:'| "text"\n| "search"\n| "tel"\n| "url"\n| "password"\n| "number"\n| "textarea"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"search"'},{name:"literal",value:'"tel"'},{name:"literal",value:'"url"'},{name:"literal",value:'"password"'},{name:"literal",value:'"number"'},{name:"literal",value:'"textarea"'}]},description:"Type of input to display (e.g. text, number, password, etc.)."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:"Function to call when the input value changes."},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:"Function to call when the input loses focus."},onEnter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to call when the Enter key is pressed."},onChangeValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: string) => Promise<string> | string",signature:{arguments:[{type:{name:"string"},name:"e"}],return:{name:"union",raw:"Promise<string> | string",elements:[{name:"Promise",elements:[{name:"string"}],raw:"Promise<string>"},{name:"string"}]}}},description:"Function to call for custom input validation."},props:{required:!1,tsType:{name:"any"},description:"Additional properties to pass to the input component."},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon to display inside the input field."},iconPos:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"Position of Icon to display inside the input field."},extraInContentInput:{required:!1,tsType:{name:"ReactNode"},description:"Extra content to display inside the input container."},extraInLabel:{required:!1,tsType:{name:"ReactNode"},description:"Extra content to display inside the input label."},disabled:{required:!1,tsType:{name:"boolean"},description:"Boolean value indicating whether the input field is disabled."},showIcon:{required:!1,tsType:{name:"boolean"},description:"Boolean value indicating whether to display the input icon."},error:{required:!1,tsType:{name:"ErrorFenextjs"},description:"Text of Error of Input."},errorWithIsChange:{required:!1,tsType:{name:"boolean"},description:"Show error if IsChange."},optional:{required:!1,tsType:{name:"boolean"},description:"Optional of Input."},optionalText:{required:!1,tsType:{name:"string"},description:"Optional text of Input."},required:{required:!1,tsType:{name:"boolean"},description:"Optional of Input."},requiredText:{required:!1,tsType:{name:"string"},description:"Optional text of Input."},loader:{required:!1,tsType:{name:"boolean"},description:"Loader of Input."},isChange:{required:!1,tsType:{name:"boolean"},description:"Loader of Input."},useLoader:{required:!1,tsType:{name:"boolean"},description:"useLoader of Input."},inputMode:{required:!1,tsType:{name:"union",raw:'| "none"\n| "text"\n| "tel"\n| "url"\n| "email"\n| "numeric"\n| "decimal"\n| "search"\n| undefined',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"text"'},{name:"literal",value:'"tel"'},{name:"literal",value:'"url"'},{name:"literal",value:'"email"'},{name:"literal",value:'"numeric"'},{name:"literal",value:'"decimal"'},{name:"literal",value:'"search"'},{name:"undefined"}]},description:"inputMode of Input."},autoComplete:{required:!1,tsType:{name:"union",raw:'boolean | string | "off" | "on"',elements:[{name:"boolean"},{name:"string"},{name:"literal",value:'"off"'},{name:"literal",value:'"on"'}]},description:"AutoComplete of Input."},onKeyDown:{required:!1,tsType:{name:"union",raw:"| (React.KeyboardEventHandler<HTMLTextAreaElement> &\n      React.KeyboardEventHandler<HTMLInputElement>)\n| undefined",elements:[{name:"unknown"},{name:"undefined"}]},description:"onKeyDown of Input."},onWheel:{required:!1,tsType:{name:"union",raw:"| (React.WheelEventHandler<HTMLTextAreaElement> &\n      React.WheelEventHandler<HTMLInputElement>)\n| undefined",elements:[{name:"unknown"},{name:"undefined"}]},description:""},maxLength:{required:!1,tsType:{name:"number"},description:"maxLength of Input."},regExp:{required:!1,tsType:{name:"RegExp"},description:"regExp of Input."},regExpReplace:{required:!1,tsType:{name:"string"},description:"regExpReplace of Input."},parseText:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: string) => string",signature:{arguments:[{type:{name:"string"},name:"data"}],return:{name:"string"}}},description:"parseText of Input."},onChangeEvent:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: InputTextChangeEvent) => void",signature:{arguments:[{type:{name:"union",raw:"| React.ChangeEvent<HTMLTextAreaElement>\n| React.ChangeEvent<HTMLInputElement>",elements:[{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]}]},name:"e"}],return:{name:"void"}}},description:"onChangeEvent of Input."},showFocusInTarget:{required:!1,tsType:{name:"boolean"},description:"showFocusInTarget of Input."},className:{required:!1,tsType:{name:"string"},description:"CSS class name for the input component.",defaultValue:{value:'""',computed:!1}},classNameLabel:{required:!1,tsType:{name:"string"},description:"CSS class name for the input label."},classNameLabelError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error label."},classNameLabelOk:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation label."},classNameContentInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input container."},classNameInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input."},classNameInputEnabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the enabled input."},classNameInputDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the disabled input."},classNameIcon:{required:!1,tsType:{name:"string"},description:"CSS class name for the input icon."},classNameMaxLength:{required:!1,tsType:{name:"string"},description:""},classNameError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error message."},classNameOptions:{required:!1,tsType:{name:"string"},description:"CSS class name for the input options container."},classNameOption:{required:!1,tsType:{name:"string"},description:"CSS class name for each input option."},classNameOptionDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for a disabled input option."},classNameLoaderValidate:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation loader."},iconLoader:{required:!1,tsType:{name:"any"},description:"Icon to display while validating the input."},buttonScannerContent:{required:!1,tsType:{name:"ReactNode"},description:""},buttonChangeCameraContent:{required:!1,tsType:{name:"ReactNode"},description:""},buttonToggleFlashContent:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["_TProps"]}}}]);