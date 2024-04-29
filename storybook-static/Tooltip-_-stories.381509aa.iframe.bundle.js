"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[3272],{"./src/Tooltip/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_francisco_work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Tooltip/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Tooltip/Tooltip",component:_index__WEBPACK_IMPORTED_MODULE_1__.m};var Index=function Profile(args){var fn_tooltip=function fn_tooltip(x,y){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_index__WEBPACK_IMPORTED_MODULE_1__.m,(0,_home_francisco_work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.A)({tooltip:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("h4",null,"tooltip"),__jsx("h3",null,"x-",x," - y-",y)),positionX:x,positionY:y},args),__jsx("h1",null,"x-",x," - y-",y)))},fn_=function fn_(x,y){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{style:{display:"flex",gap:"10px"}},fn_tooltip(x,y),__jsx("div",{style:{flex:"1"}}),fn_tooltip(x,y),__jsx("div",{style:{flex:"1"}}),fn_tooltip(x,y)))};return __jsx("div",{style:{padding:"50px",minHeight:"100dvh",display:"flex",flexDirection:"column",gap:"50px",justifyContent:"space-between"}},fn_("center","top"),fn_("right","top"),fn_("left","top"),fn_("center","center"),fn_("right","center"),fn_("left","center"),fn_("center","bottom"),fn_("right","bottom"),fn_("left","bottom"))}.bind({});Index.args={},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:'args => {\n  const fn_tooltip = (x: TooltipPositionX, y: TooltipPositionY) => {\n    return <>\n                <Tooltip tooltip={<>\n                            <h4>tooltip</h4>\n                            <h3>\n                                x-{x} - y-{y}\n                            </h3>\n                        </>} positionX={x} positionY={y} {...args}>\n                    <h1>\n                        x-{x} - y-{y}\n                    </h1>\n                </Tooltip>\n            </>;\n  };\n  const fn_ = (x: TooltipPositionX, y: TooltipPositionY) => {\n    return <>\n                <div style={{\n        display: "flex",\n        gap: "10px"\n      }}>\n                    {fn_tooltip(x, y)}\n                    <div style={{\n          flex: "1"\n        }}></div>\n                    {fn_tooltip(x, y)}\n                    <div style={{\n          flex: "1"\n        }}></div>\n                    {fn_tooltip(x, y)}\n                </div>\n            </>;\n  };\n  return <div style={{\n    padding: "50px",\n    minHeight: "100dvh",\n    display: "flex",\n    flexDirection: "column",\n    gap: "50px",\n    justifyContent: "space-between"\n  }}>\n            {fn_("center", "top")}\n            {fn_("right", "top")}\n            {fn_("left", "top")}\n            {fn_("center", "center")}\n            {fn_("right", "center")}\n            {fn_("left", "center")}\n            {fn_("center", "bottom")}\n            {fn_("right", "bottom")}\n            {fn_("left", "bottom")}\n        </div>;\n}',...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Tooltip/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Tooltip});var fenextjs_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fenextjs-functions/cjs/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Tooltip=function Tooltip(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,children=_ref.children,tooltip=_ref.tooltip,_ref$positionX=_ref.positionX,positionX=void 0===_ref$positionX?"center":_ref$positionX,_ref$positionY=_ref.positionY,positionY=void 0===_ref$positionY?"top":_ref$positionY,_t=_ref._t,ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),uuid=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return"".concat(Math.ceil((new Date).getTime()*Math.random()))}),[]),onDefTooltip=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(target){var _tooltipElement$getAt,tooltipElement=document.getElementById("fenext-tooltip");(tooltipElement||((tooltipElement=document.createElement("div")).id="fenext-tooltip",document.body.append(tooltipElement)),tooltipElement=document.getElementById("fenext-tooltip"))&&(tooltipElement.classList.value="fenext-tooltip-content fenext-tooltip-content-x-".concat(positionX," fenext-tooltip-content-y-").concat(positionY),"".concat(null!==(_tooltipElement$getAt=tooltipElement.getAttribute("uuid"))&&void 0!==_tooltipElement$getAt?_tooltipElement$getAt:"")!=uuid&&(tooltipElement.setAttribute("uuid",uuid),react_dom__WEBPACK_IMPORTED_MODULE_2__.render(__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,tooltip),tooltipElement)),setTimeout((function(){!function onDefTooltipPos(target){var tooltipElement=document.getElementById("fenext-tooltip");if(tooltipElement){var bounding=target.getBoundingClientRect();tooltipElement.style.setProperty("--element-width","".concat(tooltipElement.offsetWidth,"px")),tooltipElement.style.setProperty("--element-height","".concat(tooltipElement.offsetHeight,"px")),tooltipElement.style.setProperty("--element-top","".concat(bounding.top,"px")),tooltipElement.style.setProperty("--element-left","".concat(bounding.left,"px")),tooltipElement.style.setProperty("--element-right","".concat(bounding.right,"px")),tooltipElement.style.setProperty("--element-bottom","".concat(bounding.bottom,"px")),tooltipElement.style.setProperty("--element-center-x","".concat((bounding.right-bounding.left)/2+bounding.left,"px")),tooltipElement.style.setProperty("--element-center-y","".concat((bounding.bottom-bounding.top)/2+bounding.top,"px"))}}(target)}),100))}),[positionX,positionY,tooltip]),onShowTooltip=function onShowTooltip(){ref.current&&onDefTooltip(ref.current)};return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{ref,className:"fenext-tooltip ".concat(className," "),onMouseEnter:onShowTooltip,onClick:onShowTooltip},__jsx("div",{className:"fenext-tooltip-children"},(0,fenextjs_functions__WEBPACK_IMPORTED_MODULE_1__._tValidate)(children,_t))))};Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"The children for the component."},tooltip:{required:!1,tsType:{name:"ReactNode"},description:"The children for the component."},positionX:{required:!1,tsType:{name:"union",raw:'"center" | "right" | "left"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"right"'},{name:"literal",value:'"left"'}]},description:"The position x for the component.",defaultValue:{value:'"center"',computed:!1}},positionY:{required:!1,tsType:{name:"union",raw:'"center" | "top" | "bottom"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"The position y for the component.",defaultValue:{value:'"top"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}},composes:["_TProps"]}}}]);