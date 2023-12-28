"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputGoogleLoadScript = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const api_1 = require("@react-google-maps/api");
const Error_1 = require("../../../Error");
const fenextjs_error_1 = require("fenextjs-error");
const fenextjs_functions_1 = require("fenextjs-functions");
const InputGoogleLoadScript = ({ googleMapsApiKey = process.env["NEXT_PUBLIC_GOOGLE_KEY"], children, className = "", _t, ...props }) => {
    const [error, setError] = (0, react_1.useState)(undefined);
    return (react_1.default.createElement("div", { className: `fenext-input-google-load-script ${className}` },
        react_1.default.createElement(api_1.LoadScript, { ...props, googleMapsApiKey: googleMapsApiKey ?? "", libraries: ["places", "geometry"], onError: () => {
                setError(new fenextjs_error_1.ErrorGoogleKeyInvalid());
            } }, (0, fenextjs_functions_1._tValidate)(children, _t)),
        error && react_1.default.createElement(Error_1.ErrorComponent, { error: error, _t: _t })));
};
exports.InputGoogleLoadScript = InputGoogleLoadScript;
//# sourceMappingURL=index.js.map