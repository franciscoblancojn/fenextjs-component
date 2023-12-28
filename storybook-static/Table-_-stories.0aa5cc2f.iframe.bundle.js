"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[3517],{"./src/Table/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:()=>Index,NotItem:()=>NotItem,OneItem:()=>OneItem,TableInTable:()=>TableInTable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fenextjs-functions/cjs/env_log/index.js"),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Table/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Table/Table",component:_index__WEBPACK_IMPORTED_MODULE_2__.i};var TableIndex=function TableIndex(args){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_index__WEBPACK_IMPORTED_MODULE_2__.i,args,"Test Children"))},Index=TableIndex.bind({});Index.args={name:"Usuarios",header:[{id:"id",th:"ID",parse:function parse(data){return __jsx("a",{href:"#".concat(data.id)},data.id)}},{id:"name",th:"Name",parse:function parse(data){return __jsx("a",{href:"#".concat(data.id)},data.name)},columnOptions:{orderBy:!0,showHidden:!0}},{id:"date",th:"Date",parse:function parse(data){return data.date.toDateString()},columnOptions:{orderBy:!0,showHidden:!0}},{id:"dni",th:"Documento",columnOptions:{orderBy:!0,showHidden:!0}},{id:"amount",th:"Monto",columnOptions:{orderBy:!0,showHidden:!0}},{id:"quanty",th:"Cantidad",columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:function parse(_ref){var org=_ref.org;return __jsx("a",{href:"#".concat(null==org?void 0:org.id)},null==org?void 0:org.name)},columnOptions:{orderBy:!0,showHidden:!0},defaultShowHidden:"hidden"},{id:"org",th:"Organizacion",parse:function parse(_ref2){var org=_ref2.org;return __jsx("a",{href:"#".concat(null==org?void 0:org.id)},null==org?void 0:org.name)},columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:function parse(_ref3){var org=_ref3.org;return __jsx("a",{href:"#".concat(null==org?void 0:org.id)},null==org?void 0:org.name)},columnOptions:{orderBy:!0,showHidden:!0}}],items:new Array(50).fill(1).map((function(e,i){var n=e*i+1;return{id:"".concat(n),name:"Name ".concat(n),date:new Date(1e8*n),dni:"000".concat(n),amount:1e3*n,quanty:10*n,org:{id:"".concat(n),name:"Organizacion ".concat(n)}}})),pagination:{nItems:20},loader:!1,onOrderBy:function onOrderBy(a){(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_1__.env_log)(a,{name:"Order By"})}};var OneItem=TableIndex.bind({});OneItem.args={name:"Usuarios",header:[{id:"id",th:"ID",parse:function parse(data){return __jsx("a",{href:"#".concat(data.id)},data.id)}},{id:"name",th:"Name",parse:function parse(data){return __jsx("a",{href:"#".concat(data.id)},data.name)},columnOptions:{orderBy:!0,showHidden:!0}},{id:"date",th:"Date",parse:function parse(data){return data.date.toDateString()},columnOptions:{orderBy:!0,showHidden:!0}},{id:"dni",th:"Documento",columnOptions:{orderBy:!0,showHidden:!0}},{id:"amount",th:"Monto",columnOptions:{orderBy:!0,showHidden:!0}},{id:"quanty",th:"Cantidad",columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:function parse(_ref4){var org=_ref4.org;return __jsx("a",{href:"#".concat(null==org?void 0:org.id)},null==org?void 0:org.name)},columnOptions:{orderBy:!0,showHidden:!0},defaultShowHidden:"hidden"},{id:"org",th:"Organizacion",parse:function parse(_ref5){var org=_ref5.org;return __jsx("a",{href:"#".concat(null==org?void 0:org.id)},null==org?void 0:org.name)},columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:function parse(_ref6){var org=_ref6.org;return __jsx("a",{href:"#".concat(null==org?void 0:org.id)},null==org?void 0:org.name)},columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:function parse(_ref7){var org=_ref7.org;return __jsx("a",{href:"#".concat(null==org?void 0:org.id)},null==org?void 0:org.name)},columnOptions:{orderBy:!0,showHidden:!0}}],items:new Array(1).fill(1).map((function(e,i){var n=e*i+1;return{id:"".concat(n),name:"Name ".concat(n),date:new Date(1e8*n),dni:"000".concat(n),amount:1e3*n,quanty:10*n,org:{id:"".concat(n),name:"Organizacion ".concat(n)}}})),pagination:{nItems:1,showNPage:!1},loader:!1,onOrderBy:function onOrderBy(a){(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_1__.env_log)(a,{name:"Order By"})}};var NotItem=TableIndex.bind({});NotItem.args={name:"Usuarios",header:[{id:"id",th:"ID",parse:function parse(data){return __jsx("a",{href:"#".concat(data.id)},data.id)}},{id:"name",th:"Name",parse:function parse(data){return __jsx("a",{href:"#".concat(data.id)},data.name)},columnOptions:{orderBy:!0,showHidden:!0}},{id:"date",th:"Date",parse:function parse(data){return data.date.toDateString()},columnOptions:{orderBy:!0,showHidden:!0}},{id:"dni",th:"Documento",columnOptions:{orderBy:!0,showHidden:!0}},{id:"amount",th:"Monto",columnOptions:{orderBy:!0,showHidden:!0}},{id:"quanty",th:"Cantidad",columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:function parse(_ref8){var org=_ref8.org;return __jsx("a",{href:"#".concat(null==org?void 0:org.id)},null==org?void 0:org.name)},columnOptions:{orderBy:!0,showHidden:!0},defaultShowHidden:"hidden"},{id:"org",th:"Organizacion",parse:function parse(_ref9){var org=_ref9.org;return __jsx("a",{href:"#".concat(null==org?void 0:org.id)},null==org?void 0:org.name)},columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:function parse(_ref10){var org=_ref10.org;return __jsx("a",{href:"#".concat(null==org?void 0:org.id)},null==org?void 0:org.name)},columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:function parse(_ref11){var org=_ref11.org;return __jsx("a",{href:"#".concat(null==org?void 0:org.id)},null==org?void 0:org.name)},columnOptions:{orderBy:!0,showHidden:!0}}],items:[],pagination:{nItems:1,showNPage:!1},loader:!1,onOrderBy:function onOrderBy(a){(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_1__.env_log)(a,{name:"Order By"})}};var TableInTable=TableIndex.bind({});TableInTable.args={name:"Usuarios",header:[{id:"id",th:"ID",parse:function parse(data){return __jsx("a",{href:"#".concat(data.id)},data.id)}},{id:"name",th:"Name",parse:function parse(data){return __jsx("a",{href:"#".concat(data.id)},data.name)},columnOptions:{orderBy:!0,showHidden:!0}},{id:"date",th:"Date",parse:function parse(data){return data.date.toDateString()},columnOptions:{orderBy:!0,showHidden:!0}},{id:"dni",th:"Documento",columnOptions:{orderBy:!0,showHidden:!0}},{id:"amount",th:"Monto",columnOptions:{orderBy:!0,showHidden:!0}},{id:"quanty",th:"Cantidad",columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:function parse(_ref12){var org=_ref12.org;return __jsx("a",{href:"#".concat(null==org?void 0:org.id)},null==org?void 0:org.name)},columnOptions:{orderBy:!0,showHidden:!0},defaultShowHidden:"hidden"},{id:"org",th:"Organizacion",parse:function parse(_ref13){var org=_ref13.org;return __jsx("a",{href:"#".concat(null==org?void 0:org.id)},null==org?void 0:org.name)},columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:function parse(_ref14){var org=_ref14.org;return __jsx("a",{href:"#".concat(null==org?void 0:org.id)},null==org?void 0:org.name)},columnOptions:{orderBy:!0,showHidden:!0}},{id:"id",th:"newTabel",columnOptions:{orderBy:!0,showHidden:!0},colNewTr:!0,parse:function parse(){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_index__WEBPACK_IMPORTED_MODULE_2__.i,{header:[{id:"id",th:"ID"},{id:"name",th:"Name"}],useCheckbox:!1,name:"sub-table",items:[{id:"id",name:"name"},{id:"id",name:"name"},{id:"id",name:"name"},{id:"id",name:"name"}]}))}},{id:"id",th:"newTabel",columnOptions:{orderBy:!0,showHidden:!0},colNewTr:!0,parse:function parse(){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_index__WEBPACK_IMPORTED_MODULE_2__.i,{header:[{id:"id",th:"ID"},{id:"name",th:"Name"}],name:"sub-table",items:[{id:"id",name:"name"},{id:"id",name:"name"},{id:"id",name:"name"},{id:"id",name:"name"}]}))}}],items:new Array(50).fill(1).map((function(e,i){var n=e*i+1;return{id:"".concat(n),name:"Name ".concat(n),date:new Date(1e8*n),dni:"000".concat(n),amount:1e3*n,quanty:10*n,org:{id:"".concat(n),name:"Organizacion ".concat(n)}}})),pagination:{nItems:200},loader:!1,onOrderBy:function onOrderBy(a){(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_1__.env_log)(a,{name:"Order By"})},showPagination:!1},Index.parameters={...Index.parameters,docs:{...Index.parameters?.docs,source:{originalSource:'args => {\n  return <>\n       {/* <div style={{height:"60dvh"}}></div> */}\n        <Table {...args}>Test Children</Table>\n       </>;\n}',...Index.parameters?.docs?.source}}},OneItem.parameters={...OneItem.parameters,docs:{...OneItem.parameters?.docs,source:{originalSource:'args => {\n  return <>\n       {/* <div style={{height:"60dvh"}}></div> */}\n        <Table {...args}>Test Children</Table>\n       </>;\n}',...OneItem.parameters?.docs?.source}}},NotItem.parameters={...NotItem.parameters,docs:{...NotItem.parameters?.docs,source:{originalSource:'args => {\n  return <>\n       {/* <div style={{height:"60dvh"}}></div> */}\n        <Table {...args}>Test Children</Table>\n       </>;\n}',...NotItem.parameters?.docs?.source}}},TableInTable.parameters={...TableInTable.parameters,docs:{...TableInTable.parameters?.docs,source:{originalSource:'args => {\n  return <>\n       {/* <div style={{height:"60dvh"}}></div> */}\n        <Table {...args}>Test Children</Table>\n       </>;\n}',...TableInTable.parameters?.docs?.source}}};const __namedExportsOrder=["Index","OneItem","NotItem","TableInTable"]}}]);