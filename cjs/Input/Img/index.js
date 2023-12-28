"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputImg = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const File_1 = require("../File");
const Title_1 = require("../../Title");
const Text_1 = require("../../Text");
const Img_1 = require("fenextjs-svg/cjs/Img");
const useData_1 = require("fenextjs-hook/cjs/useData");
const close_1 = require("fenextjs-svg/cjs/close");
const fenextjs_functions_1 = require("fenextjs-functions");
const InputImg = ({ className = "", classNameContentIcon = "", classNameText = {}, classNameTitle = {
    tag: "h2",
}, classNameUp = "", classNameProgress = "", classNameRemove = "", classNameImg = "", icon = (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(Img_1.SvgImg, null))), text = "Drag Image", title = "Add Image", defaultValue = {
    fileData: "",
    text: "",
}, parseProgress = (e) => `Imging . . . ${e.toFixed(0)}%`, onChange, onRemove, _t, ...props }) => {
    const { data, setData } = (0, useData_1.useData)(defaultValue, {
        onChangeDataAfter: onChange,
    });
    const [progress, setProgress] = (0, react_1.useState)(-1);
    const { data: error, setData: setError } = (0, useData_1.useData)(undefined);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-input-img ${className} ${progress > 0 && progress < 100
                ? "fenext-input-img-in-progress"
                : ""} ${data?.fileData && data?.fileData != ""
                ? "fenext-input-img-ok"
                : ""} ${error ? "fenext-input-img-error" : ""}` }, data.fileData && data.fileData != "" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: `fenext-input-img-up ${classNameUp}` },
                react_1.default.createElement("img", { src: data.fileData, className: `fenext-input-img-img ${classNameImg}` }),
                react_1.default.createElement("div", { className: `fenext-input-img-remove ${classNameRemove}`, onClick: () => {
                        setData({
                            fileData: "",
                            text: "",
                        });
                        onRemove?.();
                    } },
                    react_1.default.createElement(close_1.Close, null))))) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(File_1.InputFile, { onChange: setData, parseProgress: () => "", onChangeProgress: setProgress, onChangeError: setError, accept: [
                    "jpg",
                    "jpeg",
                    "png",
                    "gif",
                    "svg",
                    "bmp",
                    "webp",
                ], ...props, _t: _t },
                react_1.default.createElement("div", { className: `fenext-input-img-up ${classNameUp}` },
                    react_1.default.createElement("div", { className: `fenext-input-img-content-icon ${classNameContentIcon}` }, icon),
                    progress > 0 && progress < 100 ? (react_1.default.createElement(Title_1.Title, { ...classNameTitle, className: `fenext-input-img-progress ${classNameProgress}` }, parseProgress(progress))) : (react_1.default.createElement(Title_1.Title, { ...classNameTitle, className: `fenext-input-img-title ${classNameTitle.className}` }, (0, fenextjs_functions_1._tValidate)(title, _t))),
                    react_1.default.createElement(Text_1.Text, { ...classNameText, className: `fenext-input-img-text ${classNameText.className}` }, (0, fenextjs_functions_1._tValidate)(text, _t)))))))));
};
exports.InputImg = InputImg;
//# sourceMappingURL=index.js.map