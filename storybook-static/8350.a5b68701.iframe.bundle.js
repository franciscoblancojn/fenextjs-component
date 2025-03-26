"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[8350],{"./src/Filter/Date/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>FilterDate});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),fenextjs_svg__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/fenextjs-svg/cjs/index.js")),fenextjs_hook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),_Text__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/Text/index.tsx"),_DropDown__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/DropDown/index.tsx"),_Input_Calendar__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/Input/Calendar/index.tsx"),_Input_Swich__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/Input/Swich/index.tsx"),_Button__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/Button/index.tsx");const FilterDate=param=>{let{onChange,defaultValue={},formatDateOption={},className="",classNameDropDown={},classNameCollapse={},classNameBtnToday={},classNameBtnWeek={},classNameTextValue={},classNameTextSwich={},classNameInputSwich={},classNameContentTop="",classNameLabelSwich="",classNameClear="",textValue="Filtrar por fecha:",textFilterByDate="Filtar por fecha",textFilterByRange="Filtar por rango",textBtnToday="Hoy",textBtnWeek="Esta Semana",iconTrash=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fenextjs_svg__WEBPACK_IMPORTED_MODULE_2__.SvgTrash,{}),extraListBtn=[],nMonthShow=2,nameFilter,...p}=param;var _data_dateRange,_data_dateRange1,_data_dateRange2,_data_dateRange3,_data_dateRange4;const{_t}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_3__.use_T)({...p}),{onChangeData:onChangeDataPagination}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_3__.usePagination)({name:nameFilter}),{onChangeData:onChangeDataFilter}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_3__.useFilter)({name:nameFilter}),date=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_3__.useDate)({}),{data,onChangeData,onConcatData,setData,...HOOK}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_3__.useData)({type:"normal",...defaultValue},{onChangeDataAfter:e=>{var _date_dateRange,_date_dateRange1,_date_dateRange2,_date_dateRange3;const date={...e};var _date_dateRange4,_date_dateRange5,_date_dateRange6,_date_dateRange7,_date_dateRange8,_date_dateRange9,_date_dateRange10,_date_dateRange11,_date_dateRange_,_date_dateRange12,_date_dateRange13,_date_dateRange_1,_date_dateRange14,_date_dateRange15;(date.date&&(date.date.setHours(0),date.date.setMinutes(0),date.date.setSeconds(0),date.date.setMilliseconds(0)),null===(_date_dateRange=date.dateRange)||void 0===_date_dateRange?void 0:_date_dateRange[0])&&(null===(_date_dateRange4=date.dateRange)||void 0===_date_dateRange4||_date_dateRange4[0].setHours(0),null===(_date_dateRange5=date.dateRange)||void 0===_date_dateRange5||_date_dateRange5[0].setMinutes(0),null===(_date_dateRange6=date.dateRange)||void 0===_date_dateRange6||_date_dateRange6[0].setSeconds(0),null===(_date_dateRange7=date.dateRange)||void 0===_date_dateRange7||_date_dateRange7[0].setMilliseconds(0));(null===(_date_dateRange1=date.dateRange)||void 0===_date_dateRange1?void 0:_date_dateRange1[1])&&(null===(_date_dateRange8=date.dateRange)||void 0===_date_dateRange8||_date_dateRange8[1].setHours(0),null===(_date_dateRange9=date.dateRange)||void 0===_date_dateRange9||_date_dateRange9[1].setMinutes(0),null===(_date_dateRange10=date.dateRange)||void 0===_date_dateRange10||_date_dateRange10[1].setSeconds(0),null===(_date_dateRange11=date.dateRange)||void 0===_date_dateRange11||_date_dateRange11[1].setMilliseconds(0),null===(_date_dateRange13=date.dateRange)||void 0===_date_dateRange13||_date_dateRange13[1].setDate((null===(_date_dateRange12=date.dateRange)||void 0===_date_dateRange12||null===(_date_dateRange_=_date_dateRange12[1])||void 0===_date_dateRange_?void 0:_date_dateRange_.getDate())+1),null===(_date_dateRange15=date.dateRange)||void 0===_date_dateRange15||_date_dateRange15[1].setSeconds((null===(_date_dateRange14=date.dateRange)||void 0===_date_dateRange14||null===(_date_dateRange_1=_date_dateRange14[1])||void 0===_date_dateRange_1?void 0:_date_dateRange_1.getSeconds())-10));("range"==date.type&&(null===(_date_dateRange2=date.dateRange)||void 0===_date_dateRange2?void 0:_date_dateRange2[0])&&(null===(_date_dateRange3=date.dateRange)||void 0===_date_dateRange3?void 0:_date_dateRange3[1])||"normal"==date.type&&date.date)&&(onChangeDataPagination("page")(0),onChangeDataFilter("date")(date)),null==onChange||onChange(date)}});var _classNameTextValue_className;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"\n                    fenext-filter-date  \n                    ".concat(className,"\n                "),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_DropDown__WEBPACK_IMPORTED_MODULE_5__.C,{header:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_4__.E,{...classNameTextValue,className:"fenext-filter-date-text-value ".concat(null!==(_classNameTextValue_className=null==classNameTextValue?void 0:classNameTextValue.className)&&void 0!==_classNameTextValue_className?_classNameTextValue_className:""),children:[_t(textValue)," ","normal"==data.type&&null!=data.date&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:date.onFormat(formatDateOption,data.date)}),"range"==data.type&&null!=data.dateRange&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[date.onFormat(formatDateOption,null===(_data_dateRange=data.dateRange)||void 0===_data_dateRange?void 0:_data_dateRange[0])," ","-",null!=(null===(_data_dateRange1=data.dateRange)||void 0===_data_dateRange1?void 0:_data_dateRange1[1])?date.onFormat(formatDateOption,null===(_data_dateRange2=data.dateRange)||void 0===_data_dateRange2?void 0:_data_dateRange2[1]):""]})]})}),...classNameDropDown,rotateIcon:!1,classNameBody:"\n                        fenext-filter-date-dropdown-body\n                        ".concat([classNameDropDown.classNameBody],"\n                    "),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fenext-filter-date-content-top  ".concat(classNameContentTop),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{className:"\n                                fenext-filter-date-label-swich    \n                                ".concat(classNameLabelSwich,"\n                            "),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_4__.E,{...classNameTextSwich,children:_t(textFilterByDate)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input_Swich__WEBPACK_IMPORTED_MODULE_7__.t,{value:"normal"==data.type,onChange:e=>{onChangeData("type")(e?"normal":"range")},...classNameInputSwich})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{className:"\n                                fenext-filter-date-label-swich    \n                                ".concat(classNameLabelSwich,"\n                            "),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_4__.E,{...classNameTextSwich,children:_t(textFilterByRange)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input_Swich__WEBPACK_IMPORTED_MODULE_7__.t,{value:"range"==data.type,onChange:e=>{onChangeData("type")(e?"range":"normal")},...classNameInputSwich})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"\n                                fenext-filter-date-content-btn    \n                            ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_8__.$,{...classNameBtnToday,onClick:()=>{onConcatData({type:"normal",date:new Date})},size:"extra-small",children:_t(textBtnToday)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_8__.$,{...classNameBtnWeek,onClick:()=>{const start=new Date;start.setDate(start.getDate()-start.getDay());const end=new Date;end.setDate(end.getDate()+(6-end.getDay())),onConcatData({type:"range",dateRange:[start,end]})},size:"extra-small",children:_t(textBtnWeek)}),extraListBtn.map((f=>f({data,onChangeData,onConcatData,setData,...HOOK})))]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input_Calendar__WEBPACK_IMPORTED_MODULE_6__.z,{onChange:onChangeData("date"),onChangeRange:onChangeData("dateRange"),type:data.type,nMonthShow,collapseProps:{active:!0},value:data.date,valueRange:data.dateRange,...classNameCollapse})]}),("normal"==(null==data?void 0:data.type)&&null!=(null==data?void 0:data.date)||"range"==(null==data?void 0:data.type)&&null!=(null==data||null===(_data_dateRange3=data.dateRange)||void 0===_data_dateRange3?void 0:_data_dateRange3[0])&&null!=(null==data||null===(_data_dateRange4=data.dateRange)||void 0===_data_dateRange4?void 0:_data_dateRange4[1]))&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"\n                            fenext-filter-date-clear\n                            ".concat(classNameClear,"\n                        "),onClick:()=>{setData({type:"normal"}),onChangeDataFilter("date")({type:"normal"}),onChangeDataPagination("page")(0)},children:iconTrash})]})})};FilterDate.__docgenInfo={description:"",methods:[],displayName:"FilterDate",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameDropDown:{required:!1,tsType:{name:"DropDownClassProps"},description:"",defaultValue:{value:"{}",computed:!1}},classNameCollapse:{required:!1,tsType:{name:"InputCalendarClassProps"},description:"",defaultValue:{value:"{}",computed:!1}},classNameBtnToday:{required:!1,tsType:{name:"ButtonClassProps"},description:"",defaultValue:{value:"{}",computed:!1}},classNameBtnWeek:{required:!1,tsType:{name:"ButtonClassProps"},description:"",defaultValue:{value:"{}",computed:!1}},classNameTextValue:{required:!1,tsType:{name:"Pick",elements:[{name:"TextProps"},{name:"union",raw:'"tag" | "className"',elements:[{name:"literal",value:'"tag"'},{name:"literal",value:'"className"'}]}],raw:'Pick<TextProps, "tag" | "className">'},description:"",defaultValue:{value:"{}",computed:!1}},classNameTextSwich:{required:!1,tsType:{name:"Pick",elements:[{name:"TextProps"},{name:"union",raw:'"tag" | "className"',elements:[{name:"literal",value:'"tag"'},{name:"literal",value:'"className"'}]}],raw:'Pick<TextProps, "tag" | "className">'},description:"",defaultValue:{value:"{}",computed:!1}},classNameInputSwich:{required:!1,tsType:{name:"InputSwichClassProps"},description:"",defaultValue:{value:"{}",computed:!1}},classNameContentTop:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameLabelSwich:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameClear:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},defaultValue:{required:!1,tsType:{name:"DateDataProps"},description:"",defaultValue:{value:"{}",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: DateDataProps) => void",signature:{arguments:[{type:{name:"DateDataProps"},name:"data"}],return:{name:"void"}}},description:""},formatDateOption:{required:!1,tsType:{name:"FenextjsDateFormatOptions"},description:"",defaultValue:{value:"{}",computed:!1}},textValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Filtrar por fecha:"',computed:!1}},textFilterByDate:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Filtar por fecha"',computed:!1}},textFilterByRange:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Filtar por rango"',computed:!1}},textBtnToday:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Hoy"',computed:!1}},textBtnWeek:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Esta Semana"',computed:!1}},iconTrash:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"<SvgTrash />",computed:!1}},extraListBtn:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((\n    data: ReturnType<typeof useData<DateDataProps>>,\n) => ReactNode)[]"},description:"",defaultValue:{value:"[]",computed:!1}},nMonthShow:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},nameFilter:{required:!1,tsType:{name:"string"},description:""}},composes:["_TProps"]}},"./src/Input/Swich/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>InputSwich});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const InputSwich=param=>{let{className="",classNameActive="",classNameInactive="",classNameCicle="",name="",onChange,defaultValue=!1,value,disabled=!1,onValidateCheck=async()=>{}}=param;const[checked_,setChecked]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0===defaultValue),checked=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>null!=value?value:checked_),[value,checked_]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{className:"fenext-input-swich ".concat(className,"  ").concat(checked?classNameActive:classNameInactive),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"checkbox",name,checked,onChange:async()=>{try{if(disabled)return;if(!1===await onValidateCheck(checked))throw new Error("1");setChecked(!checked),null==onChange||onChange(!checked)}catch(e){return}},className:"fenext-input-swich-input"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"fenext-input-swich-circle ".concat(classNameCicle)})]})};InputSwich.__docgenInfo={description:"Component that renders a swich input.\nTakes an InputSwichProps object as props.",methods:[],displayName:"InputSwich",props:{name:{required:!1,tsType:{name:"string"},description:"The name attribute of the swich input element.",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"e"}],return:{name:"void"}}},description:"A callback function to execute when the swich is toggled.\nReceives a boolean value indicating whether the swich is checked or not."},defaultValue:{required:!1,tsType:{name:"boolean"},description:"The default value of the swich when it is first rendered.",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"boolean"},description:"The value of the swich input element.",defaultValue:{value:"undefined",computed:!0}},disabled:{required:!1,tsType:{name:"boolean"},description:"A boolean value indicating whether the swich is disabled or not.",defaultValue:{value:"false",computed:!1}},onValidateCheck:{required:!1,tsType:{name:"signature",type:"function",raw:"(\n    data: boolean,\n) => Promise<void | boolean> | void | boolean",signature:{arguments:[{type:{name:"boolean"},name:"data"}],return:{name:"union",raw:"Promise<void | boolean> | void | boolean",elements:[{name:"Promise",elements:[{name:"union",raw:"void | boolean",elements:[{name:"void"},{name:"boolean"}]}],raw:"Promise<void | boolean>"},{name:"void"},{name:"boolean"}]}}},description:"A callback function to execute when the swich is validated.\nShould return a promise or void.",defaultValue:{value:"async () => {}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"CSS class name for the swich.",defaultValue:{value:'""',computed:!1}},classNameCicle:{required:!1,tsType:{name:"string"},description:"CSS class name for the circle swich.",defaultValue:{value:'""',computed:!1}},classNameInactive:{required:!1,tsType:{name:"string"},description:"CSS class name for the inactive swich.",defaultValue:{value:'""',computed:!1}},classNameActive:{required:!1,tsType:{name:"string"},description:"CSS class name for the active swich.",defaultValue:{value:'""',computed:!1}}}}}}]);