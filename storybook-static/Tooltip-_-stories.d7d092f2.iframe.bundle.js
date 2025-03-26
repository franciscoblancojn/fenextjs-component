"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[3272],{"./src/Portal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Portal});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js");const Portal=param=>{let{children,container}=param;var _document;const[load,setLoad]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{setLoad(!0)}),[]),load?(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children}),null!=container?container:null===(_document=document)||void 0===_document?void 0:_document.body):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{})};Portal.__docgenInfo={description:"",methods:[],displayName:"Portal",props:{container:{required:!1,tsType:{name:"union",raw:"Element | DocumentFragment",elements:[{name:"Element"},{name:"DocumentFragment"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"./src/Tooltip/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Index_parameters,_Index_parameters_docs,_Index_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/Tooltip/index.tsx"));const __WEBPACK_DEFAULT_EXPORT__={title:"Tooltip/Tooltip",component:_index__WEBPACK_IMPORTED_MODULE_2__.m},Index=(args=>{const fn_tooltip=(x,y)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.m,{tooltip:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4",{children:"tooltip"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3",{children:["x-",x," - y-",y]})]}),positionX:x,positionY:y,...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1",{children:["x-",x," - y-",y]})})}),fn_=(x,y)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[fn_tooltip(x,y),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{flex:"1"}}),fn_tooltip(x,y),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{flex:"1"}}),fn_tooltip(x,y)]})});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{padding:"50px",minHeight:"100dvh",display:"flex",flexDirection:"column",gap:"50px",justifyContent:"space-between"},children:[fn_("center","top"),fn_("right","top"),fn_("left","top"),fn_("center","center"),fn_("right","center"),fn_("left","center"),fn_("center","bottom"),fn_("right","bottom"),fn_("left","bottom")]})}).bind({});Index.args={},Index.parameters={...Index.parameters,docs:{...null===(_Index_parameters=Index.parameters)||void 0===_Index_parameters?void 0:_Index_parameters.docs,source:{originalSource:'args => {\n  const fn_tooltip = (x: TooltipPositionX, y: TooltipPositionY) => {\n    return <>\n                <Tooltip tooltip={<>\n                            <h4>tooltip</h4>\n                            <h3>\n                                x-{x} - y-{y}\n                            </h3>\n                        </>} positionX={x} positionY={y} {...args}>\n                    <h1>\n                        x-{x} - y-{y}\n                    </h1>\n                </Tooltip>\n            </>;\n  };\n  const fn_ = (x: TooltipPositionX, y: TooltipPositionY) => {\n    return <>\n                <div style={{\n        display: "flex",\n        gap: "10px"\n      }}>\n                    {fn_tooltip(x, y)}\n                    <div style={{\n          flex: "1"\n        }}></div>\n                    {fn_tooltip(x, y)}\n                    <div style={{\n          flex: "1"\n        }}></div>\n                    {fn_tooltip(x, y)}\n                </div>\n            </>;\n  };\n  return <div style={{\n    padding: "50px",\n    minHeight: "100dvh",\n    display: "flex",\n    flexDirection: "column",\n    gap: "50px",\n    justifyContent: "space-between"\n  }}>\n            {fn_("center", "top")}\n            {fn_("right", "top")}\n            {fn_("left", "top")}\n            {fn_("center", "center")}\n            {fn_("right", "center")}\n            {fn_("left", "center")}\n            {fn_("center", "bottom")}\n            {fn_("right", "bottom")}\n            {fn_("left", "bottom")}\n        </div>;\n}',...null===(_Index_parameters1=Index.parameters)||void 0===_Index_parameters1||null===(_Index_parameters_docs=_Index_parameters1.docs)||void 0===_Index_parameters_docs?void 0:_Index_parameters_docs.source}}};const __namedExportsOrder=["Index"]},"./src/Tooltip/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Tooltip});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Portal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Portal/index.tsx"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Tooltip=param=>{let{className="",classNameChildren="",classNameContent="",children,tooltip,positionX="center",positionY="top",...props}=param;const{_t}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_2__.use_T)({...props}),ref=(0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),refTooltipContent=(0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),[configTooltip,setConfigTooltip]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(void 0),onShowTooltip=()=>{const target=null==ref?void 0:ref.current,tooltipElement=null==refTooltipContent?void 0:refTooltipContent.current;if(tooltipElement){const bounding=target.getBoundingClientRect();setConfigTooltip({"--element-width":"".concat(tooltipElement.offsetWidth,"px"),"--element-height":"".concat(tooltipElement.offsetHeight,"px"),"--element-top":"".concat(bounding.top,"px"),"--element-left":"".concat(bounding.left,"px"),"--element-right":"".concat(bounding.right,"px"),"--element-bottom":"".concat(bounding.bottom,"px"),"--element-center-x":"".concat((bounding.right-bounding.left)/2+bounding.left,"px"),"--element-center-y":"".concat((bounding.bottom-bounding.top)/2+bounding.top,"px")})}};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Portal__WEBPACK_IMPORTED_MODULE_1__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref:refTooltipContent,className:"\n                        fenext-tooltip-content \n                        fenext-tooltip-content-x-".concat(positionX," \n                        fenext-tooltip-content-y-").concat(positionY," \n                        fenext-tooltip-content-").concat(configTooltip?"active":"inactive","\n\n                        ").concat(classNameContent,"\n                    "),onMouseEnter:onShowTooltip,onMouseLeave:()=>{setConfigTooltip(void 0)},style:configTooltip,children:tooltip})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref,className:"fenext-tooltip ".concat(className," "),onMouseEnter:onShowTooltip,onClick:onShowTooltip,onMouseLeave:()=>{setConfigTooltip(void 0)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-tooltip-children ".concat(classNameChildren),children:_t(children)})})]})};Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameChildren:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameContent:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"The children for the component."},tooltip:{required:!1,tsType:{name:"ReactNode"},description:"The children for the component."},positionX:{required:!1,tsType:{name:"union",raw:'"center" | "right" | "left"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"right"'},{name:"literal",value:'"left"'}]},description:"The position x for the component.",defaultValue:{value:'"center"',computed:!1}},positionY:{required:!1,tsType:{name:"union",raw:'"center" | "top" | "bottom"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"The position y for the component.",defaultValue:{value:'"top"',computed:!1}}},composes:["_TProps"]}}}]);