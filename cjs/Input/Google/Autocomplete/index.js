"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputGoogleAutocomplete = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Text_1 = require("../../Text");
const api_1 = require("@react-google-maps/api");
const close_1 = require("fenextjs-svg/cjs/close");
const useData_1 = require("fenextjs-hook/cjs/useData");
const Error_1 = require("../../../Error");
const fenextjs_error_1 = require("fenextjs-error");
const InputGoogleAutocomplete = ({ onChange, defaultValue = undefined, className = "", ...props }) => {
    const [valueText, setValueText] = (0, react_1.useState)(defaultValue?.formatted_address ?? "");
    const [error, setError] = (0, react_1.useState)(undefined);
    const { setData } = (0, useData_1.useData)(defaultValue, {
        onChangeDataAfter: (d) => {
            onChange?.(d);
            setValueText(d?.formatted_address ?? "");
        },
    });
    const [autocompleteValue, setAutocompleteValue] = (0, react_1.useState)(undefined);
    const onPlaceChanged = () => {
        if (autocompleteValue) {
            const place = autocompleteValue?.getPlace?.();
            if (place == undefined) {
                setError(new fenextjs_error_1.ErrorGoogleKeyInvalid());
                return;
            }
            setData(place);
        }
    };
    return (react_1.default.createElement("div", { className: `fenext-input-google-autocomplete ${className}` },
        react_1.default.createElement("div", { className: `fenext-input-google-autocomplete-content` },
            react_1.default.createElement("div", { className: `fenext-input-google-autocomplete-content-input` },
                react_1.default.createElement(api_1.Autocomplete, { ...props, onLoad: setAutocompleteValue, onPlaceChanged: onPlaceChanged },
                    react_1.default.createElement(Text_1.InputText, { ...props, value: valueText, onChange: setValueText }))),
            react_1.default.createElement("span", { className: `fenext-input-google-autocomplete-close` },
                react_1.default.createElement(close_1.Close, null))),
        error && react_1.default.createElement(Error_1.ErrorComponent, { error: error })));
};
exports.InputGoogleAutocomplete = InputGoogleAutocomplete;
//# sourceMappingURL=index.js.map