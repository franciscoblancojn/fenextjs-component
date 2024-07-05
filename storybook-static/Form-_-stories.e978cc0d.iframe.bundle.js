"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[1221],{"./src/Form/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Index_parameters,_Index_parameters_docs,_Index_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Form/index.tsx"));const __WEBPACK_DEFAULT_EXPORT__={title:"Component/Form",component:_index__WEBPACK_IMPORTED_MODULE_2__.l},Index=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.l,{...args,children:"Test Children"})).bind({});Index.args={},Index.parameters={...Index.parameters,docs:{...null===(_Index_parameters=Index.parameters)||void 0===_Index_parameters?void 0:_Index_parameters.docs,source:{originalSource:"args => <Form {...args}>Test Children</Form>",...null===(_Index_parameters1=Index.parameters)||void 0===_Index_parameters1||null===(_Index_parameters_docs=_Index_parameters1.docs)||void 0===_Index_parameters_docs?void 0:_Index_parameters_docs.source}}};const __namedExportsOrder=["Index"]},"./src/Form/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Form});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),yup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/yup/index.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-functions/cjs/env_log/index.js"),fenextjs_hook_cjs_useNotification__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/fenextjs-hook/cjs/useNotification.js"),fenextjs_interface_cjs_Request__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/fenextjs-interface/cjs/Request/index.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js");const Form=param=>{let{id="",data,disabled=!0,onChangeDisable,onChangeLoader,children,yup=yup__WEBPACK_IMPORTED_MODULE_1__.Ik().shape({}),validateAfterYup,className="",...props}=param;const{_t}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_6__.use_T)({...props}),{pop}=(0,fenextjs_hook_cjs_useNotification__WEBPACK_IMPORTED_MODULE_4__.useNotification)({}),onSendForm=async()=>{null==onChangeLoader||onChangeLoader(!0);try{var _props_onSubmit;const result=await(null==props||null===(_props_onSubmit=props.onSubmit)||void 0===_props_onSubmit?void 0:_props_onSubmit.call(props,data));var _result_message;if(pop({type:null==result?void 0:result.type,message:_t(null!==(_result_message=null==result?void 0:result.message)&&void 0!==_result_message?_result_message:"")}),(null==result?void 0:result.type)==fenextjs_interface_cjs_Request__WEBPACK_IMPORTED_MODULE_5__.RequestResultTypeProps.OK){var _props_onAfterSubmit;if(""!=id){var _w_dataLayer;const w=window;var _w_dataLayer_push,_w_dataLayer1;if(null==w||null===(_w_dataLayer=w.dataLayer)||void 0===_w_dataLayer?void 0:_w_dataLayer.push)null===(_w_dataLayer1=w.dataLayer)||void 0===_w_dataLayer1||null===(_w_dataLayer_push=_w_dataLayer1.push)||void 0===_w_dataLayer_push||_w_dataLayer_push.call(_w_dataLayer1,{event:"form-".concat(id)})}null==props||null===(_props_onAfterSubmit=props.onAfterSubmit)||void 0===_props_onAfterSubmit||_props_onAfterSubmit.call(props,result)}}catch(error){var _error_message,_ref;pop({type:fenextjs_interface_cjs_Request__WEBPACK_IMPORTED_MODULE_5__.RequestResultTypeProps.ERROR,message:_t(null!==(_ref=null!==(_error_message=null==error?void 0:error.message)&&void 0!==_error_message?_error_message:error)&&void 0!==_ref?_ref:"")})}null==onChangeLoader||onChangeLoader(!1)},onValidateData=(onOk,onError)=>{yup.validate(data).then((async function(){try{validateAfterYup&&await validateAfterYup(data),null==onChangeDisable||onChangeDisable(!1)}catch(error){return null==onChangeDisable||onChangeDisable(!0),(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_3__.env_log)(error,{name:"error"}),void(null==onError||onError(error.message))}null==onOk||onOk()})).catch((function(error){null==onChangeDisable||onChangeDisable(!0),(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_3__.env_log)(error,{name:"onValidateData error"}),null==onError||onError(error.message)}))};return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{onValidateData(null,null)}),[data,yup]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form",{className:"fenext-form ".concat(className),onSubmit:async e=>{e.preventDefault(),disabled||onValidateData(onSendForm,(error=>{pop({type:fenextjs_interface_cjs_Request__WEBPACK_IMPORTED_MODULE_5__.RequestResultTypeProps.ERROR,message:_t(error)})}))},children:_t(children)})})};Form.__docgenInfo={description:"",methods:[],displayName:"Form",props:{id:{required:!1,tsType:{name:"string"},description:"The ID of the form",defaultValue:{value:'""',computed:!1}},data:{required:!0,tsType:{name:"D"},description:"The initial data of the form"},onSubmit:{required:!1,tsType:{name:"RequestProps",elements:[{name:"D"},{name:"R"},{name:"E"},{name:"T"}],raw:"RequestProps<D, R, E, T>"},description:"The function to handle the form submission"},onAfterSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: RequestResultDataProps<R, E, T>) => void",signature:{arguments:[{type:{name:"RequestResultDataProps",elements:[{name:"R"},{name:"E"},{name:"T"}],raw:"RequestResultDataProps<R, E, T>"},name:"data"}],return:{name:"void"}}},description:"The function to call after a successful form submission"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the form is disabled",defaultValue:{value:"true",computed:!1}},onChangeDisable:{required:!1,tsType:{name:"signature",type:"function",raw:"(disabled: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"disabled"}],return:{name:"void"}}},description:"The function to call when the disabled state of the form changes"},loader:{required:!1,tsType:{name:"boolean"},description:"Whether to show a loader while the form is submitting"},onChangeLoader:{required:!1,tsType:{name:"signature",type:"function",raw:"(disabled: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"disabled"}],return:{name:"void"}}},description:"The function to call when the loader state of the form changes"},yup:{required:!1,tsType:{name:"ObjectSchema",elements:[{name:"AnyObject"},{name:"AnyObject"},{name:"any"},{name:"literal",value:'""'}],raw:'ObjectSchema<AnyObject, AnyObject, any, "">'},description:"The Yup schema to use for form validation",defaultValue:{value:"Yup.object().shape({})",computed:!0}},validateAfterYup:{required:!1,tsType:{name:"RequestProps",elements:[{name:"D"},{name:"R"},{name:"E"},{name:"T"}],raw:"RequestProps<D, R, E, T>"},description:"The function to handle form validation after validating with Yup"},className:{required:!1,tsType:{name:"string"},description:"The className to apply to the form element",defaultValue:{value:'""',computed:!1}}},composes:["PropsWithChildren","_TProps"]}}}]);