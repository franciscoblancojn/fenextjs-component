"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const fenextjs_hook_1 = require("fenextjs-hook");
const fenextjs_svg_1 = require("fenextjs-svg");
const Alert = ({ className = "", message, iconClose = react_1.default.createElement(fenextjs_svg_1.SvgClose, null), type, data, onClose, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-alert fenext-alert-${type} ${className}`, "data-type": type, "meta-data": data },
            react_1.default.createElement("div", { className: `fenext-alert-content` }, _t(message)),
            react_1.default.createElement("div", { className: `fenext-alert-close`, onClick: onClose }, iconClose))));
};
exports.Alert = Alert;
//# sourceMappingURL=index.js.map