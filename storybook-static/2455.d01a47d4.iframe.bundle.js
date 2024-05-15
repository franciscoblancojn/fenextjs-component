"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[2455],{"./src/Input/Select/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>InputSelect});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Text=__webpack_require__("./src/Input/Text/index.tsx"),SelectOption=__webpack_require__("./src/Input/SelectOption/index.tsx"),Arrow=__webpack_require__("./node_modules/fenextjs-svg/cjs/Arrow/index.js"),cancel=__webpack_require__("./node_modules/fenextjs-svg/cjs/cancel/index.js"),useData=__webpack_require__("./node_modules/fenextjs-hook/cjs/useData.js"),cjs=__webpack_require__("./node_modules/fenextjs-error/cjs/index.js"),fenextjs_interface_cjs=__webpack_require__("./node_modules/fenextjs-interface/cjs/index.js"),fenextjs_functions_cjs=__webpack_require__("./node_modules/fenextjs-functions/cjs/index.js"),fenextjs_hook_cjs=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),fenextjs_svg_cjs=__webpack_require__("./node_modules/fenextjs-svg/cjs/index.js"),Img=__webpack_require__("./src/Img/index.tsx"),react_dom=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js");const InputSelect=param=>{let{classNameSelect="",classNameList="",error,options:optionsProps=[],showOptions="focus",hiddenOptions="not-hover",defaultValue,typeSelect="div",typeSelectStyle="normal",value,onChange,onChangeData,onChangeText,onChangeValidate,icon=(0,jsx_runtime.jsx)(Arrow.Arrow,{}),iconSearch=(0,jsx_runtime.jsx)(fenextjs_svg_cjs.SVGSearch,{}),noResult,loaderOption,selected,create,onCreate,isSelectClearText=!1,iconCloseMovil=(0,jsx_runtime.jsx)(cancel.Cancel,{}),filterOptions,clearContent="Clear",isSelectChangeText=!0,errorWithIsChange=!0,validator,searchById=!1,useSwichtypeSelectStyle=!1,changeByFirstOptionInOnBlur=!1,_t,maxLengthShowOptions=20,itemMaxLengthShowOptions={id:"fenext-item-max-length-show-options",text:"More ..."},showOptionIconImg=!0,...props}=param;var _dataMemo_option,_dataMemo_option1,_dataMemo_option2,_dataMemo_option3,_dataMemo_option4,_dataMemo_option5;const options=(0,react.useMemo)((()=>filterOptions?filterOptions(optionsProps):optionsProps),[optionsProps,filterOptions]),checkboxClose=(0,react.useRef)(null),selectRef=(0,react.useRef)(null),[dataErrorInput,setErrorInput]=(0,react.useState)(void 0),[isChangeTextBlur,setIsChangeTextBlur]=(0,react.useState)(!1);var _defaultValue_text;const{data,setData,isChange}=(0,useData.useData)({option:null!=value?value:defaultValue,text:null!==(_defaultValue_text=null==defaultValue?void 0:defaultValue.text)&&void 0!==_defaultValue_text?_defaultValue_text:"",textSearch:""},{onChangeDataAfter:d=>{var _d_option,_d_option1,_d_option_data;null==onChange||onChange(null!==(_d_option1=d.option)&&void 0!==_d_option1?_d_option1:void 0),null==onChangeData||onChangeData(null!==(_d_option_data=null==d||null===(_d_option=d.option)||void 0===_d_option?void 0:_d_option.data)&&void 0!==_d_option_data?_d_option_data:void 0)}}),dataMemo=(0,react.useMemo)((()=>value?{option:value,text:null==value?void 0:value.text,textSearch:null==data?void 0:data.textSearch}:data),[data,value]);(0,react.useEffect)((()=>{isChange&&(async()=>{if(onChangeValidate){setErrorInput(void 0);try{await onChangeValidate(dataMemo.option)}catch(error){setErrorInput(new cjs.ErrorFenextjs({code:fenextjs_interface_cjs.ErrorCode.ERROR,message:"".concat(error.message)}))}}})()}),[dataMemo,isChange]);const onChangeText_=text=>{if(!isSelectChangeText)return;let option;setIsChangeTextBlur(!0),null==onChangeText||onChangeText(text),"div"!=typeSelect&&(option=options.find((o=>o.text==text))),setData({option,text,textSearch:text})},onClear=()=>{setData({option:void 0,text:"",textSearch:""})},onChangeOption=option=>{setData({option,text:isSelectClearText?"":option.text,textSearch:""}),setTimeout((()=>{var _checkboxClose_current_click,_checkboxClose_current,_checkboxClose_current_focus,_checkboxClose_current1;null==checkboxClose||null===(_checkboxClose_current=checkboxClose.current)||void 0===_checkboxClose_current||null===(_checkboxClose_current_click=_checkboxClose_current.click)||void 0===_checkboxClose_current_click||_checkboxClose_current_click.call(_checkboxClose_current),null==checkboxClose||null===(_checkboxClose_current1=checkboxClose.current)||void 0===_checkboxClose_current1||null===(_checkboxClose_current_focus=_checkboxClose_current1.focus)||void 0===_checkboxClose_current_focus||_checkboxClose_current_focus.call(_checkboxClose_current1)}),100)},parseTextSearch=e=>"".concat(null!=e?e:"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),OPTIONSSEARCH=(0,react.useMemo)((()=>{const textSearch=parseTextSearch(null==dataMemo?void 0:dataMemo.textSearch);return""==textSearch?[...options]:[...options].filter((option=>{var _parseTextSearch,_parseTextSearch1;return(null===(_parseTextSearch=parseTextSearch(option.text))||void 0===_parseTextSearch?void 0:_parseTextSearch.includes(textSearch))||(null==textSearch?void 0:textSearch.includes(parseTextSearch(option.text)))||searchById&&((null===(_parseTextSearch1=parseTextSearch(option.id))||void 0===_parseTextSearch1?void 0:_parseTextSearch1.includes(textSearch))||(null==textSearch?void 0:textSearch.includes(parseTextSearch(option.id))))}))}),[options,dataMemo,searchById]),OPTIONS=(0,react.useMemo)((()=>{if(null==props?void 0:props.disabled)return[];let list=[...options];if("div"==typeSelect&&(list=[...OPTIONSSEARCH]),maxLengthShowOptions){const nMax=list.length>maxLengthShowOptions;list=list.splice(0,maxLengthShowOptions),nMax&&itemMaxLengthShowOptions&&list.push({...itemMaxLengthShowOptions,disabled:!0})}return list}),[typeSelect,OPTIONSSEARCH,options,maxLengthShowOptions,null==props?void 0:props.disabled,itemMaxLengthShowOptions]),onEnter=(0,react.useCallback)((()=>{const optionSect=OPTIONSSEARCH[0];optionSect&&onChangeOption(optionSect)}),[OPTIONSSEARCH]),{error:errorFenext}=(0,fenextjs_hook_cjs.useValidator)({data:data.option,validator}),errorInput=(0,react.useMemo)((()=>{var _ref;if(!errorWithIsChange||isChange)return null!==(_ref=null!=error?error:errorFenext)&&void 0!==_ref?_ref:dataErrorInput}),[error,errorFenext,dataErrorInput,errorWithIsChange,isChange]),onBlur=()=>{if(changeByFirstOptionInOnBlur&&isChangeTextBlur){const optionSect=OPTIONS[0];optionSect&&(onChangeOption(optionSect),setIsChangeTextBlur(!1))}},OPTIONSLENGTH=(0,react.useMemo)((()=>{var _OPTIONS_filter;return null===(_OPTIONS_filter=OPTIONS.filter((e=>{var _e_selected,_e_hidden;return null!==(_e_selected=null==e?void 0:e.selected)&&void 0!==_e_selected&&_e_selected||!(null!==(_e_hidden=null==e?void 0:e.hidden)&&void 0!==_e_hidden&&_e_hidden)})))||void 0===_OPTIONS_filter?void 0:_OPTIONS_filter.length}),[OPTIONS]),TAGLIST=(0,react.useMemo)((()=>{const TAG=typeSelect;var _create_id,_create_text,_create_children,_create_onClick,_noResult_id,_selected_text,_ref,_selected_children,_loaderOption_id,_loaderOption_text,_loaderOption_children,_noResult_id1,_noResult_text,_noResult_children;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(TAG,{id:null==props?void 0:props.datalist,className:"fenext-select-list-options fenext-select-list-options-type-".concat(typeSelect,"  ").concat(classNameList),onChange:e=>{var _e_target;onChangeText_(null==e||null===(_e_target=e.target)||void 0===_e_target?void 0:_e_target.value)},children:[create&&"div"==typeSelect?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(SelectOption.K,{type:"div",id:null!==(_create_id=null==create?void 0:create.id)&&void 0!==_create_id?_create_id:"create",text:null!==(_create_text=null==create?void 0:create.text)&&void 0!==_create_text?_create_text:"Create",children:null!==(_create_children=null==create?void 0:create.children)&&void 0!==_create_children?_create_children:void 0,_t,isBtn:!0,onClick:null!==(_create_onClick=null==create?void 0:create.onClick)&&void 0!==_create_onClick?_create_onClick:onCreate})}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{}),0!=OPTIONSLENGTH&&"select"==typeSelect?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(SelectOption.K,{type:"option",id:null!==(_noResult_id=null==noResult?void 0:noResult.id)&&void 0!==_noResult_id?_noResult_id:"selected",text:null!==(_ref=null!==(_selected_text=null==selected?void 0:selected.text)&&void 0!==_selected_text?_selected_text:null==props?void 0:props.placeholder)&&void 0!==_ref?_ref:"Select",children:null!==(_selected_children=null==selected?void 0:selected.children)&&void 0!==_selected_children?_selected_children:void 0,_t})}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{}),OPTIONS.map(((option,i)=>{var _data_option,_data_option1;return(0,jsx_runtime.jsx)(SelectOption.K,{selected:null!=(null===(_data_option=data.option)||void 0===_data_option?void 0:_data_option.id)&&(null===(_data_option1=data.option)||void 0===_data_option1?void 0:_data_option1.id)===(null==option?void 0:option.id),...option,onClick:e=>{var _option_onClick;onChangeOption(e),null==option||null===(_option_onClick=option.onClick)||void 0===_option_onClick||_option_onClick.call(option,e)},type:"div"==typeSelect?"div":"option",_t},i)})),props.loader?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(SelectOption.K,{type:"div"==typeSelect?"div":"option",id:null!==(_loaderOption_id=null==loaderOption?void 0:loaderOption.id)&&void 0!==_loaderOption_id?_loaderOption_id:"loader",text:null!==(_loaderOption_text=null==loaderOption?void 0:loaderOption.text)&&void 0!==_loaderOption_text?_loaderOption_text:"Loading",children:null!==(_loaderOption_children=null==loaderOption?void 0:loaderOption.children)&&void 0!==_loaderOption_children?_loaderOption_children:void 0,classNameOption:"fenext-select-option-loading",_t,disabled:!0})}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:0==OPTIONSLENGTH?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(SelectOption.K,{type:"div"==typeSelect?"div":"option",id:null!==(_noResult_id1=null==noResult?void 0:noResult.id)&&void 0!==_noResult_id1?_noResult_id1:"notResult",text:null!==(_noResult_text=null==noResult?void 0:noResult.text)&&void 0!==_noResult_text?_noResult_text:"Not Result",children:null!==(_noResult_children=null==noResult?void 0:noResult.children)&&void 0!==_noResult_children?_noResult_children:void 0,classNameOption:"fenext-select-option-not-result",_t,disabled:!0})}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})})]})})}),[typeSelect,null==props?void 0:props.datalist,classNameList,create,onCreate,OPTIONSLENGTH,noResult,selected,null==props?void 0:props.placeholder,OPTIONS,data,_t,props.loader,loaderOption,selectRef]);var _dataMemo_text;const{onLoadPos,onLoadChildren}=(param=>{let{children,target}=param;const[ref,setRef]=(0,react.useState)(void 0);return(0,react.useEffect)((()=>{const ID="fenext-select";let ele=document.getElementById(ID);ele||(ele=document.createElement("div"),ele.id=ID,ele.classList.value="\n                fenext-use-select-options-pos\n            ",document.body.append(ele)),ele=document.getElementById(ID),ele&&setRef(ele)}),[]),{ref,onLoadPos:()=>{if(ref&&target){var _window;const bounding=target.getBoundingClientRect();react_dom.render((0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children}),ref),ref.style.setProperty("--element-width","".concat(target.offsetWidth,"px")),ref.style.setProperty("--element-top","".concat(bounding.top,"px")),ref.style.setProperty("--element-left","".concat(bounding.left,"px")),ref.style.setProperty("--element-bottom","".concat(bounding.bottom,"px")),ref.setAttribute("fenext-direction-pos",bounding.top>(null===(_window=window)||void 0===_window?void 0:_window.innerHeight)-bounding.bottom?"top":"bottom")}},onLoadChildren:()=>{ref&&react_dom.render((0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children}),ref)}}})({children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"div"==typeSelect&&"normal"==typeSelectStyle?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"fenext-select-content-search",children:[(0,jsx_runtime.jsx)(Text.S,{...props,_t,icon:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:"fenext-select-content-icon",children:(0,jsx_runtime.jsx)("div",{className:"fenext-select-content-icon-search",children:iconSearch})})}),onBlur,onChange:onChangeText_,value:null!==(_dataMemo_text=null==dataMemo?void 0:dataMemo.text)&&void 0!==_dataMemo_text?_dataMemo_text:"",onEnter,error:errorInput,autoComplete:!1,errorWithIsChange,extraInContentInput:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("button",{className:"fenext-select-clear",onClick:onClear,children:(0,fenextjs_functions_cjs._tValidate)(clearContent,_t)})}),validator:void 0}),(0,jsx_runtime.jsx)("button",{className:"fenext-select-close",children:iconCloseMovil})]}),TAGLIST]}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})}),target:null==selectRef?void 0:selectRef.current});var _dataMemo_text1;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{ref:selectRef,className:"\n                    fenext-select\n                    fenext-select-type-".concat(typeSelect,"\n                    fenext-select-type-style-").concat(typeSelectStyle,"\n                    fenext-select-").concat(useSwichtypeSelectStyle?"use-swich-select-style":"","\n                    fenext-select-").concat(isSelectChangeText?"is-change-text":"is-not-change-text","\n                    ").concat(classNameSelect," ").concat(showOptions,"\n                    ").concat(hiddenOptions,"\n                "),children:[(0,jsx_runtime.jsx)("div",{className:"fenext-select-content-search",onClick:()=>{var _window;if(null==onLoadPos||onLoadPos(),(null===(_window=window)||void 0===_window?void 0:_window.innerWidth)<=575){var _selectRef_current;const ele=null===(_selectRef_current=selectRef.current)||void 0===_selectRef_current?void 0:_selectRef_current.querySelector(".fenext-input-content-input");null==ele||ele.click(),null==ele||ele.focus()}},children:(0,jsx_runtime.jsx)(Text.S,{...props,_t,icon:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:"fenext-select-content-icon",children:[(0,jsx_runtime.jsx)("div",{className:"fenext-select-content-icon-arrow",children:icon}),(0,jsx_runtime.jsx)("div",{className:"fenext-select-content-icon-search",children:iconSearch})]})}),onBlur,onChange:e=>{onChangeText_(e),onLoadChildren()},value:null!==(_dataMemo_text1=null==dataMemo?void 0:dataMemo.text)&&void 0!==_dataMemo_text1?_dataMemo_text1:"",onEnter,error:errorInput,autoComplete:!1,errorWithIsChange,extraInContentInput:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("button",{className:"fenext-select-clear",onClick:onClear,children:(0,fenextjs_functions_cjs._tValidate)(clearContent,_t)}),showOptionIconImg&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(null==dataMemo||null===(_dataMemo_option=dataMemo.option)||void 0===_dataMemo_option?void 0:_dataMemo_option.img)?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:"fenext-select-option-selected-img",children:(0,jsx_runtime.jsx)("img",{src:null==dataMemo||null===(_dataMemo_option1=dataMemo.option)||void 0===_dataMemo_option1?void 0:_dataMemo_option1.img})})}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(null==dataMemo||null===(_dataMemo_option2=dataMemo.option)||void 0===_dataMemo_option2?void 0:_dataMemo_option2.imgComponent)?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:"fenext-select-option-selected-img",children:(0,jsx_runtime.jsx)(Img.E,{...null==dataMemo||null===(_dataMemo_option3=dataMemo.option)||void 0===_dataMemo_option3?void 0:_dataMemo_option3.imgComponent})})}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(null==dataMemo||null===(_dataMemo_option4=dataMemo.option)||void 0===_dataMemo_option4?void 0:_dataMemo_option4.icon)&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:"fenext-select-option-selected-img",children:null==dataMemo||null===(_dataMemo_option5=dataMemo.option)||void 0===_dataMemo_option5?void 0:_dataMemo_option5.icon})})})})})]}),validator:void 0})}),"div"!=typeSelect||"normal"!=typeSelectStyle||useSwichtypeSelectStyle?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:TAGLIST}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})]})})};InputSelect.__docgenInfo={description:"",methods:[],displayName:"InputSelect",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"}],raw:"InputSelectItemOptionBaseProps<T>[]"},description:"Options of select.",defaultValue:{value:"[]",computed:!1}},filterOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(\n    data: InputSelectItemOptionBaseProps<T>[],\n) => InputSelectItemOptionBaseProps<T>[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"}],raw:"InputSelectItemOptionBaseProps<T>[]"},name:"data"}],return:{name:"Array",elements:[{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"}],raw:"InputSelectItemOptionBaseProps<T>[]"}}},description:"Options of select.",defaultValue:{value:"undefined",computed:!0}},showOptions:{required:!1,tsType:{name:"union",raw:'"hover" | "focus" | "focus-hover"',elements:[{name:"literal",value:'"hover"'},{name:"literal",value:'"focus"'},{name:"literal",value:'"focus-hover"'}]},description:"showOptions type of show option select.",defaultValue:{value:'"focus"',computed:!1}},hiddenOptions:{required:!1,tsType:{name:"union",raw:'"not-hover" | "not-focus" | "not-focus-hover"',elements:[{name:"literal",value:'"not-hover"'},{name:"literal",value:'"not-focus"'},{name:"literal",value:'"not-focus-hover"'}]},description:"hiddenOptions type of hidden option select.",defaultValue:{value:'"not-hover"',computed:!1}},defaultValue:{required:!1,tsType:{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"},description:"Default Options of select.",defaultValue:{value:"undefined",computed:!0}},typeSelect:{required:!1,tsType:{name:"union",raw:'"div" | "select" | "datalist"',elements:[{name:"literal",value:'"div"'},{name:"literal",value:'"select"'},{name:"literal",value:'"datalist"'}]},description:"Type Select of option.",defaultValue:{value:'"div"',computed:!1}},typeSelectStyle:{required:!1,tsType:{name:"union",raw:'"normal" | "box" | "list" | "checkbox"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"box"'},{name:"literal",value:'"list"'},{name:"literal",value:'"checkbox"'}]},description:"Type Select of styles.",defaultValue:{value:'"normal"',computed:!1}},useSwichtypeSelectStyle:{required:!1,tsType:{name:"boolean"},description:"Type Select of styles.",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"},description:"Value Options of select.",defaultValue:{value:"undefined",computed:!0}},noResult:{required:!1,tsType:{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"},description:"Value of Not Result of select."},loaderOption:{required:!1,tsType:{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"},description:"Value of Not Result of select."},selected:{required:!1,tsType:{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"},description:"Value of Selected of select."},create:{required:!1,tsType:{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"},description:"Value of Create of select."},itemMaxLengthShowOptions:{required:!1,tsType:{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"},description:"Value of Create of select.",defaultValue:{value:'{\n    id: "fenext-item-max-length-show-options",\n    text: "More ...",\n}',computed:!1}},onCreate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"onCreate of select."},isSelectClearText:{required:!1,tsType:{name:"boolean"},description:"Value of Not Result of select.",defaultValue:{value:"false",computed:!1}},isSelectChangeText:{required:!1,tsType:{name:"boolean"},description:"is permit change text in input.",defaultValue:{value:"true",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v?: InputSelectItemOptionBaseProps<T>) => void",signature:{arguments:[{type:{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"},name:"v"}],return:{name:"void"}}},description:"Function to call when the input value changes."},onChangeData:{required:!1,tsType:{name:"signature",type:"function",raw:"(v?: T) => void",signature:{arguments:[{type:{name:"T"},name:"v"}],return:{name:"void"}}},description:"Function to call when the input value changes."},onChangeText:{required:!1,tsType:{name:"signature",type:"function",raw:"(v?: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:"Function to call when the input value changes text."},onChangeValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"(\n    e?: InputSelectItemOptionBaseProps<T>,\n) => Promise<any> | any",signature:{arguments:[{type:{name:"InputSelectItemOptionBaseProps",elements:[{name:"T"}],raw:"InputSelectItemOptionBaseProps<T>"},name:"e"}],return:{name:"union",raw:"Promise<any> | any",elements:[{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"},{name:"any"}]}}},description:"Function to call for custom input validation."},iconCloseMovil:{required:!1,tsType:{name:"any"},description:"Icon for close options in Movil.",defaultValue:{value:"<Cancel />",computed:!1}},clearContent:{required:!1,tsType:{name:"ReactNode"},description:"ReactNode for clear option in Movil.",defaultValue:{value:'"Clear"',computed:!1}},searchById:{required:!1,tsType:{name:"boolean"},description:"searchById .",defaultValue:{value:"false",computed:!1}},iconSearch:{required:!1,tsType:{name:"ReactNode"},description:"Icon search in select.",defaultValue:{value:"<SVGSearch />",computed:!1}},changeByFirstOptionInOnBlur:{required:!1,tsType:{name:"boolean"},description:"changeByFirstOptionInOnBlur in select.",defaultValue:{value:"false",computed:!1}},maxLengthShowOptions:{required:!1,tsType:{name:"number"},description:"maxLengthShowOptions in select.",defaultValue:{value:"20",computed:!1}},showOptionIconImg:{required:!1,tsType:{name:"boolean"},description:"showOptionIconImg in select.",defaultValue:{value:"true",computed:!1}},classNameLabel:{required:!1,tsType:{name:"string"},description:"CSS class name for the input label."},classNameLabelError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error label."},classNameLabelOk:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation label."},classNameContentInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input container."},classNameInput:{required:!1,tsType:{name:"string"},description:"CSS class name for the input."},classNameInputEnabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the enabled input."},classNameInputDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for the disabled input."},classNameIcon:{required:!1,tsType:{name:"string"},description:"CSS class name for the input icon."},classNameError:{required:!1,tsType:{name:"string"},description:"CSS class name for the input error message."},classNameOptions:{required:!1,tsType:{name:"string"},description:"CSS class name for the input options container."},classNameOption:{required:!1,tsType:{name:"string"},description:"CSS class name for each input option."},classNameOptionDisabled:{required:!1,tsType:{name:"string"},description:"CSS class name for a disabled input option."},classNameLoaderValidate:{required:!1,tsType:{name:"string"},description:"CSS class name for the input validation loader."},iconLoader:{required:!1,tsType:{name:"any"},description:"Icon to display while validating the input."},classNameOptionImg:{required:!1,tsType:{name:"string"},description:"CSS class name for the option img select."},classNameOptionDelete:{required:!1,tsType:{name:"string"},description:"CSS class name for the delete option select."},classNameSelect:{required:!1,tsType:{name:"string"},description:"CSS class name for the input select.",defaultValue:{value:'""',computed:!1}},classNameList:{required:!1,tsType:{name:"string"},description:"CSS class name for the list options.",defaultValue:{value:'""',computed:!1}},error:{defaultValue:{value:"undefined",computed:!0},required:!1},icon:{defaultValue:{value:"<Arrow />",computed:!1},required:!1},errorWithIsChange:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["Omit"]}}}]);