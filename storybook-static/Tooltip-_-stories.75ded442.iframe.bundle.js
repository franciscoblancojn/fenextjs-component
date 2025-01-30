"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[3272],{"./src/Tooltip/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Tooltip/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Tooltip/Tooltip",component:_index__WEBPACK_IMPORTED_MODULE_1__.m};var Index=function Profile(args){var fn_tooltip=function fn_tooltip(x,y){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_index__WEBPACK_IMPORTED_MODULE_1__.m,(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.A)({tooltip:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("h4",null,"tooltip"),__jsx("h3",null,"x-",x," - y-",y)),positionX:x,positionY:y},args),__jsx("h1",null,"x-",x," - y-",y)))},fn_=function fn_(x,y){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{style:{display:"flex",gap:"10px"}},fn_tooltip(x,y),__jsx("div",{style:{flex:"1"}}),fn_tooltip(x,y),__jsx("div",{style:{flex:"1"}}),fn_tooltip(x,y)))};return __jsx("div",{style:{padding:"50px",minHeight:"100dvh",display:"flex",flexDirection:"column",gap:"50px",justifyContent:"space-between"}},fn_("center","top"),fn_("right","top"),fn_("left","top"),fn_("center","center"),fn_("right","center"),fn_("left","center"),fn_("center","bottom"),fn_("right","bottom"),fn_("left","bottom"))}.bind({});Index.args={},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:'args => {\n  const fn_tooltip = (x: TooltipPositionX, y: TooltipPositionY) => {\n    return <>\n                <Tooltip tooltip={<>\n                            <h4>tooltip</h4>\n                            <h3>\n                                x-{x} - y-{y}\n                            </h3>\n                        </>} positionX={x} positionY={y} {...args}>\n                    <h1>\n                        x-{x} - y-{y}\n                    </h1>\n                </Tooltip>\n            </>;\n  };\n  const fn_ = (x: TooltipPositionX, y: TooltipPositionY) => {\n    return <>\n                <div style={{\n        display: "flex",\n        gap: "10px"\n      }}>\n                    {fn_tooltip(x, y)}\n                    <div style={{\n          flex: "1"\n        }}></div>\n                    {fn_tooltip(x, y)}\n                    <div style={{\n          flex: "1"\n        }}></div>\n                    {fn_tooltip(x, y)}\n                </div>\n            </>;\n  };\n  return <div style={{\n    padding: "50px",\n    minHeight: "100dvh",\n    display: "flex",\n    flexDirection: "column",\n    gap: "50px",\n    justifyContent: "space-between"\n  }}>\n            {fn_("center", "top")}\n            {fn_("right", "top")}\n            {fn_("left", "top")}\n            {fn_("center", "center")}\n            {fn_("right", "center")}\n            {fn_("left", "center")}\n            {fn_("center", "bottom")}\n            {fn_("right", "bottom")}\n            {fn_("left", "bottom")}\n        </div>;\n}',...Index.parameters?.docs?.source}}};const __namedExportsOrder=["Index"]},"./src/Portal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Portal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Portal=function Portal(_ref){var _document,children=_ref.children,container=_ref.container,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),load=_useState[0],setLoad=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setLoad(!0)}),[]),load?(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children),null!=container?container:null===(_document=document)||void 0===_document?void 0:_document.body):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null)};Portal.__docgenInfo={description:"",methods:[],displayName:"Portal",props:{container:{required:!1,tsType:{name:"union",raw:"Element | DocumentFragment",elements:[{name:"Element"},{name:"DocumentFragment"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"./src/Tooltip/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Tooltip});var _home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_Portal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Portal/index.tsx"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_excluded=["className","classNameChildren","classNameContent","children","tooltip","positionX","positionY"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var Tooltip=function Tooltip(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$classNameChildre=_ref.classNameChildren,classNameChildren=void 0===_ref$classNameChildre?"":_ref$classNameChildre,_ref$classNameContent=_ref.classNameContent,classNameContent=void 0===_ref$classNameContent?"":_ref$classNameContent,children=_ref.children,tooltip=_ref.tooltip,_ref$positionX=_ref.positionX,positionX=void 0===_ref$positionX?"center":_ref$positionX,_ref$positionY=_ref.positionY,positionY=void 0===_ref$positionY?"top":_ref$positionY,props=(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(_ref,_excluded),_use_T=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_3__.use_T)(function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_francisco_Work_fenextjs_fenextjs_component_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},props)),_t=_use_T._t,ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),refTooltipContent=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0),configTooltip=_useState[0],setConfigTooltip=_useState[1],onShowTooltip=function onShowTooltip(){var target=null==ref?void 0:ref.current,tooltipElement=null==refTooltipContent?void 0:refTooltipContent.current;if(tooltipElement){var bounding=target.getBoundingClientRect();setConfigTooltip({"--element-width":"".concat(tooltipElement.offsetWidth,"px"),"--element-height":"".concat(tooltipElement.offsetHeight,"px"),"--element-top":"".concat(bounding.top,"px"),"--element-left":"".concat(bounding.left,"px"),"--element-right":"".concat(bounding.right,"px"),"--element-bottom":"".concat(bounding.bottom,"px"),"--element-center-x":"".concat((bounding.right-bounding.left)/2+bounding.left,"px"),"--element-center-y":"".concat((bounding.bottom-bounding.top)/2+bounding.top,"px")})}};return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_Portal__WEBPACK_IMPORTED_MODULE_2__.Z,null,__jsx("div",{ref:refTooltipContent,className:"\n                        fenext-tooltip-content \n                        fenext-tooltip-content-x-".concat(positionX," \n                        fenext-tooltip-content-y-").concat(positionY," \n                        fenext-tooltip-content-").concat(configTooltip?"active":"inactive","\n\n                        ").concat(classNameContent,"\n                    "),onMouseEnter:onShowTooltip,onMouseLeave:function onMouseLeave(){setConfigTooltip(void 0)},style:configTooltip},tooltip)),__jsx("div",{ref,className:"fenext-tooltip ".concat(className," "),onMouseEnter:onShowTooltip,onClick:onShowTooltip,onMouseLeave:function onMouseLeave(){setConfigTooltip(void 0)}},__jsx("div",{className:"fenext-tooltip-children ".concat(classNameChildren)},_t(children))))};Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameChildren:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},classNameContent:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"The children for the component."},tooltip:{required:!1,tsType:{name:"ReactNode"},description:"The children for the component."},positionX:{required:!1,tsType:{name:"union",raw:'"center" | "right" | "left"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"right"'},{name:"literal",value:'"left"'}]},description:"The position x for the component.",defaultValue:{value:'"center"',computed:!1}},positionY:{required:!1,tsType:{name:"union",raw:'"center" | "top" | "bottom"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"The position y for the component.",defaultValue:{value:'"top"',computed:!1}}},composes:["_TProps"]}}}]);