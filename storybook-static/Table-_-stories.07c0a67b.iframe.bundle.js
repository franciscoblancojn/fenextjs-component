"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[4173],{"./src/Table/_.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Actions:()=>Actions,Index:()=>Index,NotItem:()=>NotItem,OneItem:()=>OneItem,TableInTable:()=>TableInTable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Index_parameters,_Index_parameters_docs,_Index_parameters1,_OneItem_parameters,_OneItem_parameters_docs,_OneItem_parameters1,_NotItem_parameters,_NotItem_parameters_docs,_NotItem_parameters1,_TableInTable_parameters,_TableInTable_parameters_docs,_TableInTable_parameters1,_Actions_parameters,_Actions_parameters_docs,_Actions_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/fenextjs-functions/cjs/env_log/index.js")),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Table/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Table/Table",component:_index__WEBPACK_IMPORTED_MODULE_3__.X},TableIndex=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.X,{...args,children:"Test Children"})}),Index=TableIndex.bind({});Index.args={name:"Usuarios",header:[{id:"id",th:"ID",parse:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(data.id),children:data.id}),className:"id",columnOptions:{showHidden:!0}},{id:"name",th:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:"Name"}),parse:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(data.id),children:data.name}),columnOptions:{orderBy:!0,showHidden:!0}},{id:"date",th:"Date",parse:data=>data.date.toDateString(),columnOptions:{showHidden:!0}},{id:"dni",th:"Documento",columnOptions:{showHidden:!0}},{id:"amount",th:"Monto",columnOptions:{showHidden:!0}},{id:"quanty",th:"Cantidad",columnOptions:{showHidden:!0}},{id:"org",th:"Organizacion",parse:param=>{let{org}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(null==org?void 0:org.id),children:null==org?void 0:org.name})},columnOptions:{showHidden:!0},defaultShowHidden:"hidden"},{id:"org",th:"Organizacion",parse:param=>{let{org}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(null==org?void 0:org.id),children:null==org?void 0:org.name})},columnOptions:{showHidden:!0}},{id:"org",th:"Organizacion",parse:param=>{let{org}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(null==org?void 0:org.id),children:null==org?void 0:org.name})}}],items:new Array(50).fill(1).map(((e,i)=>{const n=e*i+1;return{id:"".concat(n),name:"Name ".concat(n),date:new Date(1e8*n),dni:"000".concat(n),amount:1e3*n,quanty:10*n,org:{id:"".concat(n),name:"Organizacion ".concat(n)}}})),pagination:{nItems:20},loader:!1};const OneItem=TableIndex.bind({});OneItem.args={name:"Usuarios",header:[{id:"id",th:"ID",parse:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(data.id),children:data.id})},{id:"name",th:"Name",parse:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(data.id),children:data.name}),columnOptions:{orderBy:!0,showHidden:!0}},{id:"date",th:"Date",parse:data=>data.date.toDateString(),columnOptions:{orderBy:!0,showHidden:!0}},{id:"dni",th:"Documento",columnOptions:{orderBy:!0,showHidden:!0}},{id:"amount",th:"Monto",columnOptions:{orderBy:!0,showHidden:!0}},{id:"quanty",th:"Cantidad",columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:param=>{let{org}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(null==org?void 0:org.id),children:null==org?void 0:org.name})},columnOptions:{orderBy:!0,showHidden:!0},defaultShowHidden:"hidden"},{id:"org",th:"Organizacion",parse:param=>{let{org}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(null==org?void 0:org.id),children:null==org?void 0:org.name})},columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:param=>{let{org}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(null==org?void 0:org.id),children:null==org?void 0:org.name})},columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:param=>{let{org}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(null==org?void 0:org.id),children:null==org?void 0:org.name})},columnOptions:{orderBy:!0,showHidden:!0}}],items:new Array(1).fill(1).map(((e,i)=>{const n=e*i+1;return{id:"".concat(n),name:"Name ".concat(n),date:new Date(1e8*n),dni:"000".concat(n),amount:1e3*n,quanty:10*n,org:{id:"".concat(n),name:"Organizacion ".concat(n)}}})),pagination:{nItems:1,showNPage:!1},loader:!1,onOrderBy:a=>{(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_2__.env_log)(a,{name:"Order By"})}};const NotItem=TableIndex.bind({});NotItem.args={name:"Usuarios",header:[{id:"id",th:"ID",parse:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(data.id),children:data.id})},{id:"name",th:"Name",parse:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(data.id),children:data.name}),columnOptions:{orderBy:!0,showHidden:!0}},{id:"date",th:"Date",parse:data=>data.date.toDateString(),columnOptions:{orderBy:!0,showHidden:!0}},{id:"dni",th:"Documento",columnOptions:{orderBy:!0,showHidden:!0}},{id:"amount",th:"Monto",columnOptions:{orderBy:!0,showHidden:!0}},{id:"quanty",th:"Cantidad",columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:param=>{let{org}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(null==org?void 0:org.id),children:null==org?void 0:org.name})},columnOptions:{orderBy:!0,showHidden:!0},defaultShowHidden:"hidden"},{id:"org",th:"Organizacion",parse:param=>{let{org}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(null==org?void 0:org.id),children:null==org?void 0:org.name})},columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:param=>{let{org}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(null==org?void 0:org.id),children:null==org?void 0:org.name})},columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:param=>{let{org}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(null==org?void 0:org.id),children:null==org?void 0:org.name})},columnOptions:{orderBy:!0,showHidden:!0}}],items:[],pagination:{nItems:1,showNPage:!1},loader:!1,onOrderBy:a=>{(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_2__.env_log)(a,{name:"Order By"})}};const TableInTable=TableIndex.bind({});TableInTable.args={name:"Usuarios",header:[{id:"id",th:"ID",parse:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(data.id),children:data.id})},{id:"name",th:"Name",parse:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(data.id),children:data.name}),columnOptions:{orderBy:!0,showHidden:!0}},{id:"date",th:"Date",parse:data=>data.date.toDateString(),columnOptions:{orderBy:!0,showHidden:!0}},{id:"dni",th:"Documento",columnOptions:{orderBy:!0,showHidden:!0}},{id:"amount",th:"Monto",columnOptions:{orderBy:!0,showHidden:!0}},{id:"quanty",th:"Cantidad",columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:param=>{let{org}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(null==org?void 0:org.id),children:null==org?void 0:org.name})},columnOptions:{orderBy:!0,showHidden:!0},defaultShowHidden:"hidden"},{id:"org",th:"Organizacion",parse:param=>{let{org}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(null==org?void 0:org.id),children:null==org?void 0:org.name})},columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:param=>{let{org}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(null==org?void 0:org.id),children:null==org?void 0:org.name})},columnOptions:{orderBy:!0,showHidden:!0}},{id:"id",th:"newTabel",columnOptions:{orderBy:!0,showHidden:!0},colNewTr:!0,parse:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.X,{header:[{id:"id",th:"ID"},{id:"name",th:"Name"}],useCheckbox:!1,name:"sub-table",items:[{id:"id",name:"name"},{id:"id",name:"name"},{id:"id",name:"name"},{id:"id",name:"name"}]})})},{id:"id",th:"newTabel",columnOptions:{orderBy:!0,showHidden:!0},colNewTr:!0,parse:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.X,{header:[{id:"id",th:"ID"},{id:"name",th:"Name"}],name:"sub-table",items:[{id:"id",name:"name"},{id:"id",name:"name"},{id:"id",name:"name"},{id:"id",name:"name"}]})})}],items:new Array(50).fill(1).map(((e,i)=>{const n=e*i+1;return{id:"".concat(n),name:"Name ".concat(n),date:new Date(1e8*n),dni:"000".concat(n),amount:1e3*n,quanty:10*n,org:{id:"".concat(n),name:"Organizacion ".concat(n)}}})),pagination:{nItems:200},loader:!1,onOrderBy:a=>{(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_2__.env_log)(a,{name:"Order By"})},showPagination:!1};const Actions=TableIndex.bind({});Actions.args={name:"Usuarios",header:[{id:"id",th:"ID",parse:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(data.id),children:data.id})},{id:"name",th:"Name",parse:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(data.id),children:data.name}),columnOptions:{orderBy:!0,showHidden:!0}},{id:"date",th:"Date",parse:data=>data.date.toDateString(),columnOptions:{orderBy:!0,showHidden:!0}},{id:"dni",th:"Documento",columnOptions:{orderBy:!0,showHidden:!0}},{id:"amount",th:"Monto",columnOptions:{orderBy:!0,showHidden:!0}},{id:"quanty",th:"Cantidad",columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:param=>{let{org}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(null==org?void 0:org.id),children:null==org?void 0:org.name})},columnOptions:{orderBy:!0,showHidden:!0},defaultShowHidden:"hidden"},{id:"org",th:"Organizacion",parse:param=>{let{org}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(null==org?void 0:org.id),children:null==org?void 0:org.name})},columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:param=>{let{org}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(null==org?void 0:org.id),children:null==org?void 0:org.name})},columnOptions:{orderBy:!0,showHidden:!0}},{id:"org",th:"Organizacion",parse:param=>{let{org}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#".concat(null==org?void 0:org.id),children:null==org?void 0:org.name})},columnOptions:{orderBy:!0,showHidden:!0}}],items:new Array(50).fill(1).map(((e,i)=>{const n=e*i+1;return{id:"".concat(n),name:"Name ".concat(n),date:new Date(1e8*n),dni:"000".concat(n),amount:1e3*n,quanty:10*n,org:{id:"".concat(n),name:"Organizacion ".concat(n)}}})),pagination:{nItems:100,showNPage:!0},loader:!1,onOrderBy:a=>{(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_2__.env_log)(a,{name:"Order By"})},actionsCheckbox:{actions:[data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{onClick:()=>{(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_2__.env_log)(data,{name:"data eliminar"})},children:"Eliminar"})})]}},Index.parameters={...Index.parameters,docs:{...null===(_Index_parameters=Index.parameters)||void 0===_Index_parameters?void 0:_Index_parameters.docs,source:{originalSource:'args => {\n  return <>\n       {/* <div style={{height:"60dvh"}}></div> */}\n        <Table {...args}>Test Children</Table>\n       </>;\n}',...null===(_Index_parameters1=Index.parameters)||void 0===_Index_parameters1||null===(_Index_parameters_docs=_Index_parameters1.docs)||void 0===_Index_parameters_docs?void 0:_Index_parameters_docs.source}}},OneItem.parameters={...OneItem.parameters,docs:{...null===(_OneItem_parameters=OneItem.parameters)||void 0===_OneItem_parameters?void 0:_OneItem_parameters.docs,source:{originalSource:'args => {\n  return <>\n       {/* <div style={{height:"60dvh"}}></div> */}\n        <Table {...args}>Test Children</Table>\n       </>;\n}',...null===(_OneItem_parameters1=OneItem.parameters)||void 0===_OneItem_parameters1||null===(_OneItem_parameters_docs=_OneItem_parameters1.docs)||void 0===_OneItem_parameters_docs?void 0:_OneItem_parameters_docs.source}}},NotItem.parameters={...NotItem.parameters,docs:{...null===(_NotItem_parameters=NotItem.parameters)||void 0===_NotItem_parameters?void 0:_NotItem_parameters.docs,source:{originalSource:'args => {\n  return <>\n       {/* <div style={{height:"60dvh"}}></div> */}\n        <Table {...args}>Test Children</Table>\n       </>;\n}',...null===(_NotItem_parameters1=NotItem.parameters)||void 0===_NotItem_parameters1||null===(_NotItem_parameters_docs=_NotItem_parameters1.docs)||void 0===_NotItem_parameters_docs?void 0:_NotItem_parameters_docs.source}}},TableInTable.parameters={...TableInTable.parameters,docs:{...null===(_TableInTable_parameters=TableInTable.parameters)||void 0===_TableInTable_parameters?void 0:_TableInTable_parameters.docs,source:{originalSource:'args => {\n  return <>\n       {/* <div style={{height:"60dvh"}}></div> */}\n        <Table {...args}>Test Children</Table>\n       </>;\n}',...null===(_TableInTable_parameters1=TableInTable.parameters)||void 0===_TableInTable_parameters1||null===(_TableInTable_parameters_docs=_TableInTable_parameters1.docs)||void 0===_TableInTable_parameters_docs?void 0:_TableInTable_parameters_docs.source}}},Actions.parameters={...Actions.parameters,docs:{...null===(_Actions_parameters=Actions.parameters)||void 0===_Actions_parameters?void 0:_Actions_parameters.docs,source:{originalSource:'args => {\n  return <>\n       {/* <div style={{height:"60dvh"}}></div> */}\n        <Table {...args}>Test Children</Table>\n       </>;\n}',...null===(_Actions_parameters1=Actions.parameters)||void 0===_Actions_parameters1||null===(_Actions_parameters_docs=_Actions_parameters1.docs)||void 0===_Actions_parameters_docs?void 0:_Actions_parameters_docs.source}}};const __namedExportsOrder=["Index","OneItem","NotItem","TableInTable","Actions"]}}]);