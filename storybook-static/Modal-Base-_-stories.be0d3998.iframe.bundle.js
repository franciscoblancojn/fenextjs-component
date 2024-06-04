"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[3636],{"./src/Modal/Base/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Index_parameters,_Index_parameters_docs,_Index_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Modal/Base/index.tsx"));const __WEBPACK_DEFAULT_EXPORT__={title:"Modal/ModalBase",component:_index__WEBPACK_IMPORTED_MODULE_2__.f},Index=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.f,{...args})).bind({});Index.args={active:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{children:"Title"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias error illo iusto, ex esse ullam aliquam officia praesentium labore reprehenderit nostrum quidem exercitationem blanditiis est illum pariatur veritatis magni corporis!"})]})},Index.parameters={...Index.parameters,docs:{...null===(_Index_parameters=Index.parameters)||void 0===_Index_parameters?void 0:_Index_parameters.docs,source:{originalSource:"args => <ModalBase {...args} />",...null===(_Index_parameters1=Index.parameters)||void 0===_Index_parameters1||null===(_Index_parameters_docs=_Index_parameters1.docs)||void 0===_Index_parameters_docs?void 0:_Index_parameters_docs.source}}};const __namedExportsOrder=["Index"]},"./src/Modal/Base/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>ModalBase});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Close=__webpack_require__("./node_modules/fenextjs-svg/cjs/Close/index.js"),cjs=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js");const ModalBase=param=>{let{className="",classNameBg="",classNameContent="",classNameClose="",active=!1,childrenUseActiveForShowHidden=!1,disabledClose=!1,type="center",typeClose="out",onClose,children,useRender=!1,name,closeComponent=(0,jsx_runtime.jsx)(Close.Close,{})}=param;const uuid=(0,react.useMemo)((()=>(new Date).getTime()),[active]),CLOSECOMPONENTE=(0,react.useMemo)((()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{onClick:disabledClose?()=>{}:onClose,className:"fenext-modal-base-close fenext-modal-base-close-".concat(type,"  fenext-modal-base-close-").concat(active?"active":"inactive"," ").concat(classNameClose),children:closeComponent})})),[onClose,type,active,classNameClose,disabledClose,closeComponent]),CONTENT=(0,react.useMemo)((()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("dialog",{open:active,className:"fenext-modal-base-dialog fenext-modal-base-dialog-close-".concat(typeClose," fenext-modal-base-dialog-").concat(active?"active":"inactive"," fenext-modal-base-dialog-disabled-close-").concat(disabledClose?"active":"inactive"),"data-name":name,children:[(0,jsx_runtime.jsx)("div",{className:"fenext-modal-base-bg fenext-modal-base-bg-".concat(active?"active":"inactive"," ").concat(classNameBg," ")}),(0,jsx_runtime.jsx)("div",{className:"fenext-modal-base fenext-modal-base-bg-close fenext-modal-base-bg-close-".concat(uuid," fenext-modal-base-").concat(active?"active":"inactive"," fenext-modal-base-").concat(type," ").concat(className," "),onClick:e=>{e.target.classList.value.includes("fenext-modal-base-bg-close-".concat(uuid))&&!disabledClose&&(null==onClose||onClose())},children:(0,jsx_runtime.jsxs)("div",{className:"fenext-modal-base-content ".concat(classNameContent," "),children:[CLOSECOMPONENTE,(childrenUseActiveForShowHidden&&active||!childrenUseActiveForShowHidden)&&children]})}),CLOSECOMPONENTE]})})),[CLOSECOMPONENTE,childrenUseActiveForShowHidden,active,children,uuid,classNameContent,className,type,classNameBg,disabledClose,typeClose]);return(param=>{let{id,tag="div",children}=param;const[ref,setRef]=(0,react.useState)(void 0),{uuid}=(0,cjs.useRender)({children,ref});(0,react.useEffect)((()=>{const ID=id+"-"+uuid;let ele=document.getElementById(ID);ele||(ele=document.createElement(tag),ele.id=ID,ele.classList.value="\n                fenext-use-modal-pos\n            ",document.body.append(ele)),ele=document.getElementById(ID),ele&&(ele.setAttribute("uuid",uuid),setRef(ele))}),[])})({id:"fenext-modal",children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:useRender&&CONTENT})}),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:!useRender&&CONTENT})};ModalBase.__docgenInfo={description:"",methods:[],displayName:"ModalBase",props:{active:{required:!1,tsType:{name:"boolean"},description:"If active modal.",defaultValue:{value:"false",computed:!1}},childrenUseActiveForShowHidden:{required:!1,tsType:{name:"boolean"},description:"If active modal.",defaultValue:{value:"false",computed:!1}},disabledClose:{required:!1,tsType:{name:"boolean"},description:"If disabled close modal.",defaultValue:{value:"false",computed:!1}},useRender:{required:!1,tsType:{name:"boolean"},description:"If disabled close modal.",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:'| "top"\n| "left"\n| "right"\n| "bottom"\n| "center"\n| "full"\n| "layout-grid"\n| "top-right"\n| "top-left"\n| "bottom-right"\n| "bottom-left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"center"'},{name:"literal",value:'"full"'},{name:"literal",value:'"layout-grid"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'}]},description:"Type of modal.",defaultValue:{value:'"center"',computed:!1}},typeClose:{required:!1,tsType:{name:"union",raw:'"out" | "inset" | "none"',elements:[{name:"literal",value:'"out"'},{name:"literal",value:'"inset"'},{name:"literal",value:'"none"'}]},description:"Type of btn close for modal.",defaultValue:{value:'"out"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"onClose ModalBase."},name:{required:!1,tsType:{name:"string"},description:"name of Modal."},closeComponent:{required:!1,tsType:{name:"ReactNode"},description:"closeComponent of Modal.",defaultValue:{value:"<Close />",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameBg:{required:!1,tsType:{name:"string"},description:"The class name for Bg the component.",defaultValue:{value:'""',computed:!1}},classNameClose:{required:!1,tsType:{name:"string"},description:"The class name for Icon Close the component.",defaultValue:{value:'""',computed:!1}},classNameContent:{required:!1,tsType:{name:"string"},description:"The class name for Content the component.",defaultValue:{value:'""',computed:!1}}},composes:["PropsWithChildren"]}}}]);