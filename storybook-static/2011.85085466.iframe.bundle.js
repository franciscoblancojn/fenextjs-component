"use strict";(self.webpackChunkfenextjs_component=self.webpackChunkfenextjs_component||[]).push([[2011],{"./src/Media/Page/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>MediaPage});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fenextjs_hook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fenextjs-hook/cjs/index.js"),_Img__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Img/index.tsx"),_Input_Upload__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/Input/Upload/index.tsx"),_Title__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/Title/index.tsx"),_Text__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/Text/index.tsx"),_Button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/Button/index.tsx"),_Loader__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/Loader/index.tsx"),fenextjs_functions_cjs_parse_Img_Base64ToImgData__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/fenextjs-functions/cjs/parse/Img/Base64ToImgData/index.js"),fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/fenextjs-functions/cjs/env_log/index.js"),fenextjs_svg_cjs_Trash__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/fenextjs-svg/cjs/Trash/index.js"),fenextjs_svg_cjs_Save__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/fenextjs-svg/cjs/Save/index.js");const MediaPage=param=>{let{className="",multiple=!1,onChange,onUploadImg,onDeleteImg,onAcepte,HeaderPage=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Title__WEBPACK_IMPORTED_MODULE_5__.h,{tag:"h3",children:"Media"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__.E,{children:"Upload or Select Imagen."})]}),defaultValue,images=[],loaderImages=!1,disabledSelectImg=!1,InputUploadProps={accept:["png","jpg","jpeg","webp"],title:"Upload Imagen",text:"Click for select or upload Imagen."},ButtonAcceptProps={children:"Acepte"},ButtonCancelProps={children:"Cancel"},isPage=!0,extraContentImgs,onRenderImg,...props}=param;const{_t}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_2__.use_T)({...props}),[keyInputUpload,setKeyInputUpload]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),{data,onConcatData,onDeleteData,setData}=(0,fenextjs_hook__WEBPACK_IMPORTED_MODULE_2__.useData)([null!=defaultValue?defaultValue:[]].flat(2),{onChangeDataAfter:d=>{multiple?null==onChange||onChange(d):null==onChange||onChange(null==d?void 0:d[0])}}),onSelectImg=i=>()=>{if(disabledSelectImg)return;const selected=images[i],indexDelete=data.findIndex((e=>e.src==selected.src));indexDelete>-1?onDeleteData(indexDelete):multiple?onConcatData([selected]):setData([selected])},LISTIMAGES=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:images.map(((img,i)=>{const active=void 0!==data.find((e=>e.src==img.src));var _ref,_img_name,_img_id;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fenext-media-page-img fenext-media-page-img-".concat(active?"active":""),onClick:onSelectImg(i),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-media-page-img-element",children:null!==(_ref=onRenderImg?onRenderImg(img):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Img__WEBPACK_IMPORTED_MODULE_3__.E,{...img}))&&void 0!==_ref?_ref:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Img__WEBPACK_IMPORTED_MODULE_3__.E,{...img})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-media-page-img-capa"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fenext-media-page-img-actions",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"fenext-media-page-img-action fenext-media-page-img-download",href:img.src,download:null!==(_img_name=img.name)&&void 0!==_img_name?_img_name:"download.png",target:"_blank",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fenextjs_svg_cjs_Save__WEBPACK_IMPORTED_MODULE_12__.Save,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-media-page-img-action fenext-media-page-img-delete",onClick:()=>{null==onDeleteImg||onDeleteImg(img)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fenextjs_svg_cjs_Trash__WEBPACK_IMPORTED_MODULE_11__.Trash,{})})]})]},"".concat(i,"-").concat(img.src,"-").concat(null!==(_img_id=null==img?void 0:img.id)&&void 0!==_img_id?_img_id:""))})}))})),[images,onRenderImg,onSelectImg,onDeleteImg,_t]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fenext-media-page ".concat(className," "),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fenext-media-page-top",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-media-page-top-header",children:_t(HeaderPage)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-media-page-top-btn-acepte",children:0!=data.length&&!isPage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_7__.$,{...ButtonCancelProps,onClick:()=>{setData([])},_t}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_7__.$,{...ButtonAcceptProps,onClick:()=>{multiple?null==onAcepte||onAcepte(data):null==onAcepte||onAcepte(null==data?void 0:data[0])},_t})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-media-page-upload",children:(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Input_Upload__WEBPACK_IMPORTED_MODULE_4__.m,{...InputUploadProps,key:keyInputUpload,onChange:async v=>{setKeyInputUpload((new Date).getTime());const img=await(0,fenextjs_functions_cjs_parse_Img_Base64ToImgData__WEBPACK_IMPORTED_MODULE_9__.parseBase64ToImgData)({base64:v.fileData,name:v.text,quality:.7});(0,fenextjs_functions_cjs_env_log__WEBPACK_IMPORTED_MODULE_10__.env_log)(img,{name:"Img upload"}),null==onUploadImg||onUploadImg(img)},clearAfterUpload:!0,_t})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fenext-media-page-imgs",children:[loaderImages?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-media-page-img fenext-media-page-img-loader",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Loader__WEBPACK_IMPORTED_MODULE_8__.d1,{})})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}),LISTIMAGES,extraContentImgs&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fenext-media-page-extra-content-imgs",children:_t(extraContentImgs)})]})]})})};MediaPage.__docgenInfo={description:"",methods:[],displayName:"MediaPage",props:{defaultValue:{required:!1,tsType:{name:"union",raw:"ImgDataProps[] | ImgDataProps",elements:[{name:"Array",elements:[{name:"ImgDataProps"}],raw:"ImgDataProps[]"},{name:"ImgDataProps"}]},description:"The defaultValue for the component."},disabledSelectImg:{required:!1,tsType:{name:"boolean"},description:"The disabledSelectImg for the component.",defaultValue:{value:"false",computed:!1}},images:{required:!1,tsType:{name:"Array",elements:[{name:"ImgDataProps"}],raw:"ImgDataProps[]"},description:"The images for the component.",defaultValue:{value:"[]",computed:!1}},loaderImages:{required:!1,tsType:{name:"boolean"},description:"The loaderImages for the component.",defaultValue:{value:"false",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"The multiple for the component.",defaultValue:{value:"false",computed:!1}},isPage:{required:!1,tsType:{name:"boolean"},description:"The isPage for the component.",defaultValue:{value:"true",computed:!1}},onRenderImg:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: ImgDataProps) => ReactNode",signature:{arguments:[{type:{name:"ImgDataProps"},name:"data"}],return:{name:"ReactNode"}}},description:"The onChange for the component.",defaultValue:{value:"undefined",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: ImgDataProps[] | ImgDataProps | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"ImgDataProps[] | ImgDataProps | undefined",elements:[{name:"Array",elements:[{name:"ImgDataProps"}],raw:"ImgDataProps[]"},{name:"ImgDataProps"},{name:"undefined"}]},name:"data"}],return:{name:"void"}}},description:"The onChange for the component."},onUploadImg:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: ImgDataProps) => void",signature:{arguments:[{type:{name:"ImgDataProps"},name:"data"}],return:{name:"void"}}},description:"The onUploadImg for the component."},onDeleteImg:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: ImgDataProps) => void",signature:{arguments:[{type:{name:"ImgDataProps"},name:"data"}],return:{name:"void"}}},description:"The onDeleteImg for the component."},onAcepte:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: ImgDataProps[] | ImgDataProps) => void",signature:{arguments:[{type:{name:"union",raw:"ImgDataProps[] | ImgDataProps",elements:[{name:"Array",elements:[{name:"ImgDataProps"}],raw:"ImgDataProps[]"},{name:"ImgDataProps"}]},name:"data"}],return:{name:"void"}}},description:"The onAcepte for the component."},HeaderPage:{required:!1,tsType:{name:"ReactNode"},description:"The HeaderPage for the component.",defaultValue:{value:'<>\n    <Title tag="h3">Media</Title>\n    <Text>Upload or Select Imagen.</Text>\n</>',computed:!1}},ButtonAcceptProps:{required:!1,tsType:{name:"Omit",elements:[{name:"ButtonProps"},{name:"literal",value:'"onClick"'}],raw:'Omit<ButtonProps, "onClick">'},description:"The ButtonAcceptProps for the component.",defaultValue:{value:'{\n    children: "Acepte",\n}',computed:!1}},ButtonCancelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"ButtonProps"},{name:"literal",value:'"onClick"'}],raw:'Omit<ButtonProps, "onClick">'},description:"The ButtonCancelProps for the component.",defaultValue:{value:'{\n    children: "Cancel",\n}',computed:!1}},InputUploadProps:{required:!1,tsType:{name:"Omit",elements:[{name:"InputUploadProps"},{name:"union",raw:'| "onChange"\n| "defaultValue"\n| "onChangeProgress"\n| "onUploadFile"\n| "clearAfterUpload"',elements:[{name:"literal",value:'"onChange"'},{name:"literal",value:'"defaultValue"'},{name:"literal",value:'"onChangeProgress"'},{name:"literal",value:'"onUploadFile"'},{name:"literal",value:'"clearAfterUpload"'}]}],raw:'Omit<\n    InputUploadProps,\n    | "onChange"\n    | "defaultValue"\n    | "onChangeProgress"\n    | "onUploadFile"\n    | "clearAfterUpload"\n>'},description:"The HeaderPage for the component.",defaultValue:{value:'{\n    accept: ["png", "jpg", "jpeg", "webp"],\n    title: "Upload Imagen",\n    text: "Click for select or upload Imagen.",\n}',computed:!1}},extraContentImgs:{required:!1,tsType:{name:"ReactNode"},description:"The extraContentImgs for the component.",defaultValue:{value:"undefined",computed:!0}},className:{required:!1,tsType:{name:"string"},description:"The class name for the component.",defaultValue:{value:'""',computed:!1}}},composes:["_TProps"]}}}]);