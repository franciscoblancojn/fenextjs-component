"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[2124],{"./src/Steps/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Steps});var _home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fenextjs_hook_cjs_useDocumentEvent__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-hook/cjs/useDocumentEvent.js"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Button/index.tsx"),fenextjs_functions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/fenextjs-functions/cjs/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Steps=function Steps(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$classNameContent=_ref.classNameContentItems,classNameContentItems=void 0===_ref$classNameContent?"":_ref$classNameContent,_ref$classNameContent2=_ref.classNameContentSteps,classNameContentSteps=void 0===_ref$classNameContent2?"":_ref$classNameContent2,_ref$classNameListSte=_ref.classNameListSteps,classNameListSteps=void 0===_ref$classNameListSte?"":_ref$classNameListSte,_ref$classNameItem=_ref.classNameItem,classNameItem=void 0===_ref$classNameItem?"":_ref$classNameItem,_ref$classNameItemAct=_ref.classNameItemActive,classNameItemActive=void 0===_ref$classNameItemAct?"":_ref$classNameItemAct,_ref$classNameStep=_ref.classNameStep,classNameStep=void 0===_ref$classNameStep?"":_ref$classNameStep,_ref$classNameStepAct=_ref.classNameStepActive,classNameStepActive=void 0===_ref$classNameStepAct?"":_ref$classNameStepAct,_ref$classNameStepCir=_ref.classNameStepCircle,classNameStepCircle=void 0===_ref$classNameStepCir?"":_ref$classNameStepCir,_ref$classNameStepLab=_ref.classNameStepLabel,classNameStepLabel=void 0===_ref$classNameStepLab?"":_ref$classNameStepLab,_ref$classNameContent3=_ref.classNameContentBtn,classNameContentBtn=void 0===_ref$classNameContent3?"":_ref$classNameContent3,_ref$classNameBtn=_ref.classNameBtn,classNameBtn=void 0===_ref$classNameBtn?"":_ref$classNameBtn,_ref$classNameBtnNext=_ref.classNameBtnNext,classNameBtnNext=void 0===_ref$classNameBtnNext?"":_ref$classNameBtnNext,_ref$classNameBtnPrev=_ref.classNameBtnPrev,classNameBtnPrev=void 0===_ref$classNameBtnPrev?"":_ref$classNameBtnPrev,_ref$defaultStep=_ref.defaultStep,defaultStep=void 0===_ref$defaultStep?0:_ref$defaultStep,_ref$step=_ref.step,step=void 0===_ref$step?void 0:_ref$step,_ref$useStep=_ref.useStep,useStep=void 0!==_ref$useStep&&_ref$useStep,_ref$items=_ref.items,items=void 0===_ref$items?[]:_ref$items,_ref$btnNext=_ref.btnNext,btnNext=void 0===_ref$btnNext?"Next":_ref$btnNext,_ref$btnPrev=_ref.btnPrev,btnPrev=void 0===_ref$btnPrev?"Previous":_ref$btnPrev,_ref$disabledBtnNext=_ref.disabledBtnNext,disabledBtnNext=void 0!==_ref$disabledBtnNext&&_ref$disabledBtnNext,_ref$disabledBtnPrev=_ref.disabledBtnPrev,disabledBtnPrev=void 0!==_ref$disabledBtnPrev&&_ref$disabledBtnPrev,onNext=_ref.onNext,onPrev=_ref.onPrev,_ref$stepPos=_ref.stepPos,stepPos=void 0===_ref$stepPos?"left":_ref$stepPos,_ref$showCurrentStepN=_ref.showCurrentStepNStep,showCurrentStepNStep=void 0!==_ref$showCurrentStepN&&_ref$showCurrentStepN,_ref$useArrowKey=_ref.useArrowKey,useArrowKey=void 0===_ref$useArrowKey||_ref$useArrowKey,_ref$useDogs=_ref.useDogs,useDogs=void 0!==_ref$useDogs&&_ref$useDogs,onSetStep=_ref.onSetStep,_t=_ref._t,ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),loader=_useState[0],setLoader=_useState[1],parseCurrentStep=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(n){return Math.max(0,Math.min(n,items.length-1))}),[items]),_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultStep),currentStep___=_useState2[0],setCurrentStep__=_useState2[1],setCurrentStep=function setCurrentStep(e){setCurrentStep__(e),null==onSetStep||onSetStep(e)},currentStep=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return parseCurrentStep(useStep&&null!=step?step:currentStep___)}),[currentStep___,useStep,step]),getNumberSum=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(a){return parseCurrentStep(currentStep+a)}),[currentStep]),onMoveStep=function(){var _ref2=(0,_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__.A)(_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee(add,fn){var _ref$current,_n;return _home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!(ref&&null!=ref&&ref.current&&null!=ref&&null!==(_ref$current=ref.current)&&void 0!==_ref$current&&null!==(_ref$current=_ref$current.classList)&&void 0!==_ref$current&&_ref$current.contains("fenext-steps-not-loader"))){_context.next=12;break}if(setLoader(!0),_context.prev=2,_n=getNumberSum(add),!fn){_context.next=7;break}return _context.next=7,fn(_n);case 7:setCurrentStep(_n);case 8:return _context.prev=8,setLoader(!1),_context.finish(8);case 11:setLoader(!1);case 12:case"end":return _context.stop()}}),_callee,null,[[2,,8,11]])})));return function onMoveStep(_x,_x2){return _ref2.apply(this,arguments)}}(),onNext_=function(){var _ref3=(0,_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__.A)(_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee2(){return _home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(!disabledBtnNext){_context2.next=2;break}return _context2.abrupt("return");case 2:return _context2.next=4,onMoveStep(1,onNext);case 4:case"end":return _context2.stop()}}),_callee2)})));return function onNext_(){return _ref3.apply(this,arguments)}}(),onPrev_=function(){var _ref4=(0,_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__.A)(_home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee3(){return _home_francisco_work_npm_Fenextjs_fenextjs_component_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(!disabledBtnPrev){_context3.next=2;break}return _context3.abrupt("return");case 2:return _context3.next=4,onMoveStep(-1,onPrev);case 4:case"end":return _context3.stop()}}),_callee3)})));return function onPrev_(){return _ref4.apply(this,arguments)}}(),keydown=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(e){useArrowKey&&(37==e.keyCode&&onPrev_(),39==e.keyCode&&onNext_())}),[currentStep,useArrowKey,disabledBtnNext,disabledBtnPrev]);return(0,fenextjs_hook_cjs_useDocumentEvent__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)({keydown}),__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{ref,className:"\n                    fenext-steps\n                    fenext-steps-".concat(loader?"loader":"not-loader","\n                    fenext-steps-pos-").concat(stepPos,"\n                    fenext-steps-pos-").concat(stepPos,"\n                    ").concat(className," \n                    ")},__jsx("div",{className:"fenext-steps-content-steps ".concat(classNameContentSteps," ")},__jsx("div",{className:"fenext-steps-list-steps ".concat(classNameListSteps," ")},items.map((function(item,i){var _item$status,_item$icon;return __jsx("div",{key:i,className:"fenext-steps-step ".concat(classNameStep," ").concat(currentStep==i?"fenext-steps-step-active ".concat(classNameStepActive):"","\n                                        fenext-steps-step-status-").concat(null!==(_item$status=null==item?void 0:item.status)&&void 0!==_item$status?_item$status:"none"," \n                                    ")},__jsx("div",{className:"fenext-steps-step-circle ".concat(classNameStepCircle," ")},null!==(_item$icon=item.icon)&&void 0!==_item$icon?_item$icon:i+1),__jsx("div",{className:"fenext-steps-step-label ".concat(classNameStepLabel," ")},(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_4__._tValidate)(item.label,_t)))})))),__jsx("div",{className:"fenext-steps-content-items ".concat(classNameContentItems," ")},items.map((function(item,i){return __jsx("div",{key:i,className:"fenext-steps-item ".concat(classNameItem," ").concat(currentStep==i?"fenext-steps-item-active ".concat(classNameItemActive):""," ")},(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_4__._tValidate)(item.content,_t))}))),__jsx("div",{className:"fenext-steps-content-btn ".concat(classNameContentBtn," ")},0!=currentStep&&__jsx(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{className:"fenext-steps-btn fenext-steps-btn-prev ".concat(classNameBtn," ").concat(classNameBtnPrev),disabled:disabledBtnPrev,onClick:onPrev_,loader,_t},btnPrev),showCurrentStepNStep&&items.length>1&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fenext-steps-current-step"},currentStep+1," / ",items.length)),useDogs&&items.length>1&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fenext-steps-content-dog"},new Array(items.length).fill(1).map((function(e,i){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{key:e*i,onClick:function onClick(){setCurrentStep(i)},className:"\n                                                fenext-steps-dog\n                                                ".concat(currentStep==i?"fenext-steps-dog-current":"","    \n\n                                                ")}))})))),currentStep!=items.length-1&&__jsx(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{className:"fenext-steps-btn fenext-steps-btn-next ".concat(classNameBtn," ").concat(classNameBtnNext),disabled:disabledBtnNext,onClick:onNext_,loader,_t},btnNext))))};Steps.__docgenInfo={description:"",methods:[],displayName:"Steps",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:'{\n    /**\n     * Item label.\n     */\n    label: React.ReactNode;\n    /**\n     * Item icon.\n     */\n    icon?: React.ReactNode;\n    /**\n     * Item content.\n     */\n    content: React.ReactNode;\n    /**\n     * status Item.\n     */\n    status?: "none" | "ok" | "error";\n}',signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0},description:"Item label."},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1},description:"Item icon."},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0},description:"Item content."},{key:"status",value:{name:"union",raw:'"none" | "ok" | "error"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"ok"'},{name:"literal",value:'"error"'}],required:!1},description:"status Item."}]}}],raw:'{\n    /**\n     * Item label.\n     */\n    label: React.ReactNode;\n    /**\n     * Item icon.\n     */\n    icon?: React.ReactNode;\n    /**\n     * Item content.\n     */\n    content: React.ReactNode;\n    /**\n     * status Item.\n     */\n    status?: "none" | "ok" | "error";\n}[]'},description:"Items steps.",defaultValue:{value:"[]",computed:!1}},defaultStep:{required:!1,tsType:{name:"number"},description:"defaultStep show.\n@default 0",defaultValue:{value:"0",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Step show.\n@default undefined",defaultValue:{value:"undefined",computed:!0}},useArrowKey:{required:!1,tsType:{name:"boolean"},description:"useArrowKey.\n@default true",defaultValue:{value:"true",computed:!1}},useStep:{required:!1,tsType:{name:"boolean"},description:"useStep step show.\n@default false",defaultValue:{value:"false",computed:!1}},btnPrev:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Content of Button previous.\n@default "Previous"',defaultValue:{value:'"Previous"',computed:!1}},btnNext:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Content of Button next.\n@default "Next"',defaultValue:{value:'"Next"',computed:!1}},disabledBtnPrev:{required:!1,tsType:{name:"boolean"},description:"If Disabled Button previous.\n@default false",defaultValue:{value:"false",computed:!1}},disabledBtnNext:{required:!1,tsType:{name:"boolean"},description:"If Disabled Button next.\n@default false",defaultValue:{value:"false",computed:!1}},onPrev:{required:!1,tsType:{name:"signature",type:"function",raw:"(step: number) => Promise<void> | void",signature:{arguments:[{type:{name:"number"},name:"step"}],return:{name:"union",raw:"Promise<void> | void",elements:[{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"},{name:"void"}]}}},description:"onClick in btn Prev."},onNext:{required:!1,tsType:{name:"signature",type:"function",raw:"(step: number) => Promise<void> | void",signature:{arguments:[{type:{name:"number"},name:"step"}],return:{name:"union",raw:"Promise<void> | void",elements:[{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"},{name:"void"}]}}},description:"onClick in btn Next."},onSetStep:{required:!1,tsType:{name:"signature",type:"function",raw:"(step: number) => void",signature:{arguments:[{type:{name:"number"},name:"step"}],return:{name:"void"}}},description:"onSetStep."},stepPos:{required:!1,tsType:{name:"union",raw:'"top" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"Position of list Step.\n@default left",defaultValue:{value:'"left"',computed:!1}},showCurrentStepNStep:{required:!1,tsType:{name:"boolean"},description:"showCurrentStepNStep of list Step.\n@default false",defaultValue:{value:"false",computed:!1}},useDogs:{required:!1,tsType:{name:"boolean"},description:"useDogs of list Step.\n@default false",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameContentSteps:{required:!1,tsType:{name:"string"},description:"The class name for the content steps.",defaultValue:{value:'""',computed:!1}},classNameListSteps:{required:!1,tsType:{name:"string"},description:"The class name for the content steps.",defaultValue:{value:'""',computed:!1}},classNameContentItems:{required:!1,tsType:{name:"string"},description:"The class name for the contents items.",defaultValue:{value:'""',computed:!1}},classNameStep:{required:!1,tsType:{name:"string"},description:"The class name for the step.",defaultValue:{value:'""',computed:!1}},classNameItem:{required:!1,tsType:{name:"string"},description:"The class name for the item.",defaultValue:{value:'""',computed:!1}},classNameStepActive:{required:!1,tsType:{name:"string"},description:"The class name for the step acitve.",defaultValue:{value:'""',computed:!1}},classNameItemActive:{required:!1,tsType:{name:"string"},description:"The class name for the item acitve.",defaultValue:{value:'""',computed:!1}},classNameStepCircle:{required:!1,tsType:{name:"string"},description:"The class name for the step circle.",defaultValue:{value:'""',computed:!1}},classNameStepLabel:{required:!1,tsType:{name:"string"},description:"The class name for the step label.",defaultValue:{value:'""',computed:!1}},classNameContentBtn:{required:!1,tsType:{name:"string"},description:"The class name for the content btn next and prev.",defaultValue:{value:'""',computed:!1}},classNameBtn:{required:!1,tsType:{name:"string"},description:"The class name for the btn next and prev.",defaultValue:{value:'""',computed:!1}},classNameBtnNext:{required:!1,tsType:{name:"string"},description:"The class name for the btn next.",defaultValue:{value:'""',computed:!1}},classNameBtnPrev:{required:!1,tsType:{name:"string"},description:"The class name for the btn prev.",defaultValue:{value:'""',computed:!1}}},composes:["_TProps"]}}}]);