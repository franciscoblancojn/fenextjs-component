"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelectOption = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Trash_1 = require("fenextjs-svg/cjs/Trash");
const fenextjs_hook_1 = require("fenextjs-hook");
const Img_1 = require("../../Img");
const Checkbox_1 = require("../Checkbox");
const InputSelectOption = ({ classNameOption = "", classNameOptionImg = "", classNameOptionDelete = "", id, text, img = undefined, imgComponent = undefined, icon = undefined, children, type = "div", onClick, onDelete, disabled = false, selected = false, hidden = false, isBtn = false, data, iconDelete = react_1.default.createElement(Trash_1.SvgTrash, null), ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const TAG = type == "option" ? "option" : "div";
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(TAG, { key: id, id: `${id}`, className: `
                    fenext-select-option
                    fenext-select-option-${disabled ? "disabled" : ""}
                    fenext-select-option-${selected ? "selected" : "not-selected"}
                    fenext-select-option-${isBtn ? "btn" : ""}
                    fenext-select-option-type-${type}
                    fenext-select-option-${hidden ? "hidden" : "not-hidden"}
                    ${classNameOption}
                `, onClick: () => {
                if (!disabled) {
                    onClick?.({
                        id,
                        text,
                        children,
                        data,
                        img,
                        icon,
                        imgComponent,
                    });
                }
            }, disabled: disabled, selected: selected, value: text },
            type == "multiple" && (react_1.default.createElement(Checkbox_1.InputCheckbox, { classNameLabel: "fenext-select-option-checkbox", value: selected })),
            img ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("img", { src: img, alt: text, className: `fenext-select-option-img ${classNameOptionImg}` }))) : (react_1.default.createElement(react_1.default.Fragment, null, imgComponent ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Img_1.Img, { ...imgComponent, className: `fenext-select-option-img ${classNameOptionImg} ${imgComponent.className}` }))) : (react_1.default.createElement(react_1.default.Fragment, null)))),
            icon ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: `fenext-select-option-icon` }, icon))) : (react_1.default.createElement(react_1.default.Fragment, null)),
            _t(TAG == "option" ? text : children ?? text),
            type == "multiple" ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("span", { className: `fenext-select-option-delete ${classNameOptionDelete} `, onClick: () => {
                        if (!disabled) {
                            onDelete?.({
                                id,
                                text,
                                children,
                                data,
                                img,
                            });
                        }
                    } }, iconDelete))) : (react_1.default.createElement(react_1.default.Fragment, null)))));
};
exports.InputSelectOption = InputSelectOption;
//# sourceMappingURL=index.js.map